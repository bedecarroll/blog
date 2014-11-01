---
title: 'The Internet Fishing Trawler: Some Storage Stuff Edition'
author: Bede Carroll
layout: post
permalink: /2013/10/25/the-internet-fishing-trawler-some-storage-stuff-edition/
categories:
  - The Internet Fishing Trawler
---
*   Duncan Epping over at Yellow Bricks has <a href="http://www.yellow-bricks.com/2013/10/09/designing-hardware-virtual-san/" target="_blank">some thoughts that you should keep in mind for those of you looking at VSAN</a>. I&#8217;ll be interested to see if things like VSAN swing people back to using rack instead of blade servers.

&nbsp;

*   Chris Siebenmann works in a very interesting environment (University EDU by the looks of it) where they build there own storage systems. While most organisations prefer to have low level details abstracted it seems to me that places like these are what help drive information into the public domain. <a href="http://utcc.utoronto.ca/~cks/space/blog/tech/SASWithSATAIntro?showcomments" target="_blank">The blog post is about SAS and the interaction with SATA</a>. Interesting!

&nbsp;

*   I&#8217;ve been hit with this bug in vCenter 5.5, there is an error message: &#8216;Configuration issues. &#8220;Quick stats on <VMHost> is not up-to-date&#8221;&#8216;. <a href="http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2061008" target="_blank">KB 2061008 will show you how to fix it</a>. A pretty simple fix, looks like they just missed some attributes out of their config files.

&nbsp;

*   Adian Finn brings <a href="http://www.aidanfinn.com/?p=15659" target="_blank">word down from Mt Microsoft to say that we shouldn&#8217;t be touching the page file configuration of the Hyper-V parent partition</a>. Makes sense. The post also linked to a cool Microsoft KB: <a href="http://support.microsoft.com/kb/2860880" target="_blank">How to determine the appropriate page file size for 64-bit versions of Windows</a>.

&nbsp;

*    Hard to believe but VMware vCenter Converter is still being updated, the new version is 5.5. You don&#8217;t hear of many P2V migrations these days. Anyway, Vladan Seget has <a href="http://www.vladan.fr/vmware-converter-5-5-released-virtual-hardware-10-support/" target="_blank">the low down</a>.

&nbsp;