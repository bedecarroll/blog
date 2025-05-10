+++
title = 'The Internet Fishing Trawler: Bug Hunt Edition'
date = '2013-12-13T08:00:00+09:30'
categories = ['The Internet Fishing Trawler']
+++

- A bit of a troubling VMware KB, [it seems E1000 adapters can cause a
  purple screen of death (PSOD)](http://kb.vmware.com/kb/2059053‎). The
  remediation is to either use VMXNET3 adapters or disable RSS inside the
  VMs. I've tried to move away from E1000 to VMXNET3 but this is still one
  to watch out for.

- A Microsoft one this time, there is [a potential for data loss when
  using SCSI disks with 2012 failover clustering in specific
  scenarios](http://support.microsoft.com/kb/2898774). The fix is included
  in an update rollup so you might want to take a second look at what is
  included.

- Aidan Finn has tracked down [a TechNet wiki document that if you are
  running (or looking at running) Hyper-V 2012 R2 you might want to keep
  an eye on](http://www.aidanfinn.com/?p=15816).

- This is a heads up as I think this will be the last thing you would want
  to deal with during troubleshooting, [Log files are deleted when you
  use Performance Monitor in Windows
  Server](http://support.microsoft.com/kb/2916994).

- Seems like someone has been naughty, [Microsoft have released a security
  advisory that revokes noncompliant UEFI boot loader
  modules](http://support.microsoft.com/kb/2871690). You might want to be
  careful about applying this one, rigorous testing might be the order of
  the day I think.
