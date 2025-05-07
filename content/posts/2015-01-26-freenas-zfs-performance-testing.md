+++
title = 'FreeNAS/ZFS performance testing'
author = 'Bede Carroll'
layout = 'post'
url = '/2015/01/26/freenas-zfs-performance-testing/'
date = 2015-01-26
categories = ['FreeNAS', 'ZFS']
+++

Sorry all for the lack of posts, I've been ~~lazy~~busy. But as you can see
the site has had a new lick of paint but that is a whole different series
posts. Instead I want to talk about my new NAS. Being the data conscious
person that I am there is only one acceptable filesystem to use, ZFS.
Thankfully there is also a nice appliance-like OS called FreeNAS that is
based on FreeBSD and has ZFS as the foundation. Once I'd selected the OS
it was time to get some hardware. By keeping an eye out I was able to pick
up some awesome deals on Dell hardware (which I've listed below). With the
hardware all installed and FreeNAS loaded onto a USB key I was finally able
set up my system and have a look around.

When you install FreeNAS you get prompted with a wizard that will setup your
hardware for you. This was great and very easy as I selected all my disks
and said that I wanted RAID-Z2 (the ZFS equivalent of RAID-6 and the only
real option for pools this large). Unfortunately, as always, there is a
catch. Once I got into my system I found my pool size was about 28 TiB.
This was a bit of a shock as I was expecting a bit more than that for all
those drives! So then I started doing the sums:

* 4 TB drives = about 3.6 TiB (AKA formated capacity)
* 12 x 3.6 TiB = 43.2 TiB
* 12 drives with 2 drives worth of parity = 10 data disks
* 43.2 TiB - 7.2 TiB = 36 TiB
* ZFS has a metadata overhead of 1/16{{< sup th >}} per drive so:
  * 1/16{{< sup th >}} of 3.6 TiB = 0.225 TiB
    * 12 x 0.225 TiB = 2.7 TiB
* 36 TiB - 2.7 TiB = **33.3 TiB** of free space, roughly

Well 28 TiB is quite the jump down from 33.3 TiB! So where did all my space
go? It turns out it goes in the layout of the filesystem. You see, there is
this general recommendation that a single VDEV (the ZFS equivalent of a
RAID pool) does not go past 9 disks (see:
<http://doc.freenas.org/9.3/zfsprimer.html>). This is all well and good but I
couldn't really find *why* that is the case. Is it to do with performance
or a limitation or a concern with fault domains? There is a lot out there
with the recommendation but a lot of it was referencing other documents
that didn't explain either. From what I've been able to track down the
issue is with performance (and fault domain when you get to huge sizes).

At this point it is a good idea to talk about what I plan to use this for:

* Backup copies of my videos
* Backup target for my VMware lab
* Plex etc. to stream my videos
* Host ISOs and software repository
* General space to dump stuff

As you can see my requirements are not high and the usage is pretty much
the same as every other home NAS device. So armed with the understanding
that performance wasn't that high on my list (streaming HD to give you an
idea on read requirements) I didn't think I should be limited to 9 disks
in a VDEV. After more investigation it seems the FreeNAS setup wizard is
designed to follow as close to the recommendations as possible, which is a
very good idea but just not suitable for me. Basically my 12 drives were
split in two groups of six drives with each group having two disks worth of
parity (for RAID-Z2). Hence the huge loss of space! Thankfully FreeNAS
allows you to delete the setup wizard configuration and configure the disks
as you want.

But if the issues were performance based would I be shooting myself in the
foot by creating a single 12 drive RAID-Z2? Is getting the space back worth
the performance trade off? This is what I set out to test.

## Hardware

* Dell R420
* 2x CPUs with 6 cores each for a total of 12 Cores
  * Model Intel(R) Xeon(R) CPU E5-2430 0 @ 2.20GHz
* 2x 16GB DIMMs (32GB)
* Dell PowerVault(TM) MD1200 Disk Storage Enclosure
* 12 x 4TB, Near-Line SAS 6Gbps, 3.5-in, 7.2K RPM Hard Drive (Hot-plug)
  * Model SEAGATE ST4000NM0023 GS0D
* Dell SAS 6Gbps HBA External Controller
  * Chipset: LSI 2008
  * Cross flashed from IR to IT mode
  * Firmware version P16
  * Controller listed as LSI 9200-8e
* Both paths (cables) connected from HBA to enclosure

## Methodology

* FreeNAS version 9.3
* Testing used Bonnie++
  * IOZONE using the `System -> Advanced -> Performance Test` option
        were also performed however the Bonnie++ information was more useful
* Test steps can be found at
    <http://pivotallabs.com/high-performing-mid-range-nas-server/> in section
    `8. BENCHMARKING FREENAS`
* Test order was 2 VDEV then 1 VDEV as 2 VDEVs is the default created by
    the FreeNAS wizard
* Once the first test was complete the `tank` volume was deleted with the
    `Mark the disks as new (destroy data)` option **not** set
* Wizard defaults were used so compression with the lz4 algorithm is
    turned on

## VDEV Layout

### 1 VDEV layout

{{< gist bedecarroll a8c38878025f5b4362a9 >}}

### 2 VDEV layout

{{< gist bedecarroll 8b8b36f61197cff8063b >}}

## Results

* Raw Bonnie++ logs were parsed with `bonnie++_to_readable.rb`
  * <https://github.com/cunnie/bin/blob/master/bonnie%2B%2B_to_readable.rb>
* Results were fed into Excel where the median and average functions were
    used on the appropriate columns

### 1 VDEV

|         | Write            | Read             | IOPS        |
|---------|------------------|------------------|-------------|
| Median  | 79 MB/s          | 557 MB/s         | 183.2       |
| Average | 79.61971831 MB/s | 562.3661972 MB/s | 209.4323944 |

### 2 VDEV

|         | Write            | Read             | IOPS        |
|---------|------------------|------------------|-------------|
| Median  | 167 MB/s         | 552 MB/s         | 140.2       |
| Average | 165.6056338 MB/s | 549.6901408 MB/s | 147.2422535 |

## Summary

The test results were pretty much as expected. With all the disks in a
single pool the parity would need to be updated across more disks, hence
the halving of write speed. The bump in IOPS is also to be expected as
there are now more spinles in the pool. All in all I can't see the benefit
of losing all that extra space just for the write speed bump. For my use
cases (primarily cold storage and streaming reads) the writes seem
acceptable. I'll be looking at an SLOG but my understanding is this is only
useful for sync writes which will be no help with SMB clients. In the end I
will be going to a single 12 drive RAID-Z2 VDEV as the space will be more
useful for me than the speed. Your mileage may vary of couse.
