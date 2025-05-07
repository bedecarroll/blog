+++
title = 'The Internet Fishing Trawler: vSphere vSphere vSphere Edition'
author = 'Bede Carroll'
layout = 'post'
url = '/2013/10/16/the-internet-fishing-trawler-vshpere-vshpere-vshpere-edition/'
date = 2013-10-16
categories = ['The Internet Fishing Trawler']
+++

* Is there a difference between vCPUs and the cores setting in a VM? Yes
    and no, from vSphere both are just logical data constructs but when
    looking at the physical side you need to take into account NUMA. The
    vSphere Blog has [all the details](http://blogs.vmware.com/vsphere/2013/10/does-corespersocket-affect-performance.html)
    and even some light benchmarking.

* Marcel Van Den Berg over at UP2V, who works with vSphere and Hyper-V,
    has [a nice breakdown of the differences between vCHS and Azure](http://up2v.nl/2013/10/14/what-are-the-differences-between-vmware-vcloud-hybrid-service-and-microsoft-windows-azure/).
    My take is that vCHS is targeted at enterprises and Azure is for public
    cloud, wannabe AWS. The differences in how you buy the services really
    highlight this for me.

* If you’ve got a NetApp SAN then you can use a product by NetApp called
    Flash Accel, think in VM vFlash. I’m really liking the idea of vFlash
    (I need to look at getting it going in my lab) and I found this [forum
    post on the differences between the products to be interesting](https://communities.netapp.com/message/116134#116134).

* I mentioned in the last PowerShell Tip Jar using the PowerCLI VUM cmdlets
    to attach baseline but I’ve found this post on the NutzandBolts blog that
    goes even further and [uses PowerCLI to remediate VMTools and HW version](http://nutzandbolts.wordpress.com/2013/04/15/using-powercli-for-vmtools-and-hardware-upgrades/).
    I’ll be looking at doing something similar in the future so a future
    PowerShell Tip Jar might focus on the same area.

* VMware have a site called “flings” where they provide things that aren’t
    supported but do some really cool things. One of them that looks pretty
    cool, it is a [front end for ESXTOP called VisualEsxTop](http://labs.vmware.com/flings/visualesxtop).
    If you are ever debugging performance issues with vSphere, ESXTOP is a
    fantastic feature, it is one of the defining features of the ESXi
    platform to me.

I’m sure you all found those links awesome but they will never be Robocop on
a unicorn awesome.

![Robocop on a unicorn](http://www.unicornpedia.com/images/robocop_unicorn_15.jpg)
Dead or alive, you’re riding with me!
