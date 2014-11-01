---
title: 'The Internet Fishing Trawler: Windows Desktop Management Edition'
author: Bede Carroll
layout: post
permalink: /2013/12/23/the-internet-fishing-trawler-windows-desktop-management-edition/
categories:
  - The Internet Fishing Trawler
---
*   For all you SOE creators out there, you might find this <a href="http://henkhoogendoorn.blogspot.com.au/2013/12/download-driver-packages-for-dell-hp.html" target="_blank">post from Henk Hoogendoorn useful as he provides links to driver packages from Dell, HP and Lenovo</a>. Should come in quite handy if you are using MDT/SCCM.

&nbsp;

*   I&#8217;ve been fighting with UEFI and WDS as of late so I know the pain of trying to get it going. If you are working with a device with no KVM you might want to look out for this bug with WDS 2012, <a href="http://support.microsoft.com/kb/2908456" target="_blank">UEFI-based computers cannot start because the WDS PXE program requires you to press F12</a>. A hotfix is provided.

&nbsp;

*   If you are using MDT 2012 Update 1 and are trying to capture a Windows 8 image you might hit <a href="http://support.microsoft.com/kb/2797676" target="_blank">this issue with LTIApply.wsf</a>. The KB tells you how to modify LTIApply.wsf to fix the issue.

&nbsp;

*   Brian Madden has posted <a href="http://www.brianmadden.com/blogs/brianmadden/archive/2013/12/16/brian-madden-s-vision-for-future-of-the-microsoft-windows-desktop-boiled-down-to-a-few-simple-bullets.aspx" target="_blank">his thoughts on the future of of the Windows desktop</a>. I don&#8217;t think any of these predictions are very bold, they seem pretty obvious to me. Perhaps it is earth shattering to the desktop management crew? I would have thought the writing would have been seen on the wall for awhile now.

&nbsp;

*   Jack Madden over at Brian Madden has <a href="http://www.brianmadden.com/blogs/jackmadden/archive/2013/12/12/hooray-windows-8-1-s-mdm-management-features-mean-we-can-get-out-of-the-business-of-traditional-desktop-management-right-not-so-fast.aspx" target="_blank">a post on Windows 8.1 Mobile Device Management (MDM)</a>. Looks like it won&#8217;t enable us to go to the completely unmanaged Windows desktop utopia right now but I&#8217;m sure it will get better over time. Although I guess Microsoft has to worry about how competent they make it as it could start impacting other BUs long term.

&nbsp;