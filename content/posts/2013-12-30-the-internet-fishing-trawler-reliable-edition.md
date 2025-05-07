+++
title = 'The Internet Fishing Trawler: Reliable Edition'
author = 'Bede Carroll'
layout = 'post'
url = '/2013/12/30/the-internet-fishing-trawler-reliable-edition/'
date = 2013-12-30
categories = ['The Internet Fishing Trawler']
+++

- With all the brouhaha about VSAN (and I admit I’m looking very hard at
  it and how much it would cost to get a nice home lab setup) the
  requirement for one SSD per disk group should show the importance of
  SSD reliability. If you plan on using consumer grade SSDs or SSDs not
  from your hardware OEM (and even then) you are going to want to test
  them, hard. With that I would really recommend reading the “[Analysis
  of SSD Reliability during power-outages](http://lkcl.net/reports/ssd_analysis.html)”
  report. I hope more tests like these are performed.

- Over at Jay Roxe’s Blog at Rapid7 there is [a post on the Target
  security breach with some good
  links](https://community.rapid7.com/people/jroxe/blog/2013/12/21/learning-from-targets-breach).
  I wonder what changes will finally start happening when the financial
  cost of all these losses becomes to high.

- Brian Berry over at devopsanywhere has [a post on why he is learning
  Java](http://devopsanywhere.blogspot.co.uk/2013/11/why-im-learning-java.html).
  While I think we all have an opinion on what language to learn, posts
  like these help to decide out of the thousands of languages out there.

- Damian Flynn over at Petri has an article discussing [how to distribute
  CU3 for SCCM 2012 SP1](http://www.petri.co.il/distribute-cumulative-update-3-system-center-configuration-manager-sccm-2012-sp1.htm).

- Seems there is a bug with the Virtual Fibre Channel controller in
  Hyper-V 2012, [Hans Vredevoort at Hyper-V.NU has the
  details](http://www.hyper-v.nu/archives/hvredevoort/2013/11/hotfix-vm-virtual-fibre-channel-loses-access-to-lun-after-live-migration).
  A virtual FC HBA seems a bit odd to me but I’m guessing it is one of
  those features that if you are using it, it would be for a specific
  requirement.
