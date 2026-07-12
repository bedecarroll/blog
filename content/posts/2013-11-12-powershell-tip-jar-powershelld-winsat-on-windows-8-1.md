+++
title = "PowerShell Tip Jar: PowerShell'd WinSAT on Windows 8.1"
date = '2013-11-12T08:00:00+09:30'
categories = ['PowerShell Tip Jar']
+++

This idea comes from one of the awesome engineers I work with,
[Chris Tester](au.linkedin.com/pub/chris-tester/7/a82/b62). We've
recently updated our laptops to Windows 8.1 and Microsoft in their infinite
wisdom have removed the old Windows Experience Index page. Not that WEI was
anything fantastic but it did give a nice easy way to compare computers
without having to go through installing a third-party testing package. I can
only speculate that they thought it would be a bad idea to show this on
tablets? Or did the OEMs not like it?

Anyway, it turns out that the underlying tool for WEI, WinSAT lives on! This
is good news as it means the Win32_WinSAT class will still be updated with the
correct values. So to get this little functionality I've written a
(rather long) PowerShell one-liner that displays the WinSAT values as per the
old WEI names using expressions.

{{< gist bedecarroll 7405639 >}}

For those looking to go further with PowerShell I think this would be a good
tool to try some different things. Just a few things off the top of my head:

* How about running this against a remote computer?
* How about running it against LOTS of computers? Would you change anything,
    would your previous attempt scale?
* The WEI used to have descriptions of all the fields, how about using a
    custom PSObject to make it look even more like WEI?
* Unfortunately you can't force a WinSAT run using WMI but you can
    using the *winsat formal* command, how would you integrate that
    functionality?

Good luck!
