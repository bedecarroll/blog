---
title: 'The Internet Fishing Trawler: vSphere vSphere vSphere Edition'
author: Bede Carroll
layout: post
permalink: /2013/10/16/the-internet-fishing-trawler-vshpere-vshpere-vshpere-edition/
categories:
  - The Internet Fishing Trawler
---
*   Is there a difference between vCPUs and the cores setting in a VM? Yes and no, from vSphere both are just logical data constructs but when looking at the physical side you need to take into account NUMA. The vSphere Blog has <a href="http://blogs.vmware.com/vsphere/2013/10/does-corespersocket-affect-performance.html" target="_blank">all the details</a> and even some light benchmarking.

&nbsp;

*   Marcel Van Den Berg over at UP2V, who works with vSphere and Hyper-V, has <a href="http://up2v.nl/2013/10/14/what-are-the-differences-between-vmware-vcloud-hybrid-service-and-microsoft-windows-azure/" target="_blank">a nice breakdown of the differences between vCHS and Azure</a>. My take is that vCHS is targeted at enterprises and Azure is for public cloud, wannabe AWS. The differences in how you buy the services really highlight this for me.

&nbsp;

*   If you&#8217;ve got a NetApp SAN then you can use a product by NetApp called Flash Accel, think in VM vFlash. I&#8217;m really liking the idea of vFlash (I need to look at getting it going in my lab) and I found this <a href="https://communities.netapp.com/message/116134#116134" target="_blank">forum post on the differences between the products to be interesting</a>.

&nbsp;

*   I mentioned in the last PowerShell Tip Jar using the PowerCLI VUM cmdlets to attach baseline but I&#8217;ve found this post on the NutzandBolts blog that goes even further and <a href="http://nutzandbolts.wordpress.com/2013/04/15/using-powercli-for-vmtools-and-hardware-upgrades/" target="_blank">uses PowerCLI to remediate VMTools and HW version</a>. I&#8217;ll be looking at doing something similar in the future so a future PowerShell Tip Jar might focus on the same area.

&nbsp;

*   VMware have a site called &#8220;flings&#8221; where they provide things that aren&#8217;t supported but do some really cool things. One of them that looks pretty cool, it is a <a href="http://labs.vmware.com/flings/visualesxtop" target="_blank">front end for ESXTOP called VisualEsxTop</a>. If you are ever debugging performance issues with vSphere, ESXTOP is a fantastic feature, it is one of the defining features of the ESXi platform to me.

&nbsp;

I&#8217;m sure you all found those links awesome but they will never be Robocop on a unicorn awesome.

<div style="width: 610px" class="wp-caption aligncenter">
  <img alt="" src="http://www.unicornpedia.com/images/robocop_unicorn_15.jpg" width="600" height="815" /><p class="wp-caption-text">
    Dead or alive, you&#8217;re riding with me!
  </p>
</div>

&nbsp;