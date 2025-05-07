+++
title = 'The Internet Fishing Trawler: In A Flash Edition'
author = 'Bede Carroll'
layout = 'post'
url = '/2014/01/01/the-internet-fishing-trawler-in-a-flash-edition/'
date = 2014-01-01
categories = ['The Internet Fishing Trawler']
+++

- Chris M Evans over at ArchitectingIT has a good post on
  [why he doesn&#8217;t want to see a ten year old flash array](http://architecting.it/2013/12/20/a-ten-year-flash-array-no-thanks/).
  I honestly don&#8217;t think to many organisations really keep ancient
  arrays around as their primary storage array, the support costs alone
  would be astronomical.

- Speaking of flash, the VMware vSphere blog has a useful post on
  [VSAN hardware guidance with SSDs](http://blogs.vmware.com/vsphere/2013/12/virtual-san-hardware-guidance-part-1-solid-state-drives.html).
  I&#8217;ve linked to the first part in the series. I think I&#8217;ll be
  holding off till the next generation of servers come out, sometime
  this year (2014).

- Over at Hostile Coding there is a blog post on
  [how to shrink VMDKs that you will want to add to your notes](http://hostilecoding.blogspot.com.au/2013/12/vmware-shrink-vmdks-by-removing-zeroed.html).
  This is how to perform a space reclamation of zeroed space, not how
  to physically reduce the size of the VMDK.

- If you jump through some hoops you can
  [get Windows Server 2012 to blue screen when removing and adding an SSD](http://support.microsoft.com/kb/2916984).
  I doubt many people are going to trip this one but I found the
  &#8220;status&#8221; to be a bit funny, it basically says Microsoft
  could fix it with some random update in the future. Lucky it isn&#8217;t
  a bigger issue!

- If you are looking hard at PowerShell Desired State Configuration (DSC)
  you are going to want to look at
  [the recently released DSC Resource Kit](http://www.powershellmagazine.com/2013/12/27/desired-state-configuration-dsc-resource-kit-wave-1/)
  that PowerShell Magazine has an article on.
