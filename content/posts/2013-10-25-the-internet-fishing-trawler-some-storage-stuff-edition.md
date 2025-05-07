+++
title = 'The Internet Fishing Trawler: Some Storage Stuff Edition'
author = 'Bede Carroll'
layout = 'post'
url = '/2013/10/25/the-internet-fishing-trawler-some-storage-stuff-edition/'
date = 2013-10-25
categories = ['The Internet Fishing Trawler']
+++

* Duncan Epping over at Yellow Bricks has [some thoughts that you should
    keep in mind for those of you looking at VSAN](http://www.yellow-bricks.com/2013/10/09/designing-hardware-virtual-san/).
    I’ll be interested to see if things like VSAN swing people back to using
    rack instead of blade servers.

* Chris Siebenmann works in a very interesting environment (University EDU
    by the looks of it) where they build there own storage systems. While most
    organisations prefer to have low level details abstracted it seems to me
    that places like these are what help drive information into the public
    domain. [The blog post is about SAS and the interaction with SATA](http://utcc.utoronto.ca/~cks/space/blog/tech/SASWithSATAIntro?showcomments).
    Interesting!

* I’ve been hit with this bug in vCenter 5.5, there is an error message:
    ‘Configuration issues. “Quick stats on VMHost is not up-to-date”’.
    [KB 2061008 will show you how to fix it](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2061008).
    A pretty simple fix, looks like they just missed some attributes out of
    their config files.

* Adian Finn brings [word down from Mt Microsoft to say that we shouldn’t
    be touching the page file configuration of the Hyper-V parent partition](http://www.aidanfinn.com/?p=15659).
    Makes sense. The post also linked to a cool Microsoft KB: [How to
    determine the appropriate page file size for 64-bit versions of Windows](http://support.microsoft.com/kb/2860880).

* Hard to believe but VMware vCenter Converter is still being updated, the
    new version is 5.5. You don’t hear of many P2V migrations these days.
    Anyway, Vladan Seget has [the low down](http://www.vladan.fr/vmware-converter-5-5-released-virtual-hardware-10-support/).
