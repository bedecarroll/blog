---
title: 'The Internet Fishing Trawler: Bug Hunt Edition'
author: Bede Carroll
layout: post
permalink: /2013/12/13/the-internet-fishing-trawler-bug-hunt-edition/
categories:
  - The Internet Fishing Trawler
---
*   A bit of a troubling VMware KB, <a href="http://kb.vmware.com/kb/2059053‎" target="_blank">it seems E1000 adapters can cause a purple screen of death (PSOD)</a>. The remediation is to either use VMXNET3 adapters or disable RSS inside the VMs. I&#8217;ve tried to move away from E1000 to VMXNET3 but this is still one to watch out for.

&nbsp;

*   A Microsoft one this time, there is <a href="http://support.microsoft.com/kb/2898774" target="_blank">a potential for data loss when using SCSI disks with 2012 failover clustering in specific scenarios</a>. The fix is included in an update rollup so you might want to take a second look at what is included.

&nbsp;

*   Aidan Finn has tracked down <a href="http://www.aidanfinn.com/?p=15816" target="_blank">a TechNet wiki document that if you are running (or looking at running) Hyper-V 2012 R2 you might want to keep an eye on</a>.

&nbsp;

*   This is a heads up as I think this will be the last thing you would want to deal with during troubleshooting, <a href="http://support.microsoft.com/kb/2916994" target="_blank">Log files are deleted when you use Performance Monitor in Windows Server</a>.

&nbsp;

*   Seems like someone has been naughty, <a href="http://support.microsoft.com/kb/2871690" target="_blank">Microsoft have released a security advisory that revokes noncompliant UEFI boot loader modules</a>. You might want to be careful about applying this one, rigorous testing might be the order of the day I think.

&nbsp;