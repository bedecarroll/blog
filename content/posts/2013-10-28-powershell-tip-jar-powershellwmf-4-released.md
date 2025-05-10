+++
title = 'PowerShell Tip Jar: PowerShell/WMF 4 released'
date = '2013-10-28T08:00:00+09:30'
categories = ['PowerShell Tip Jar']
+++

This post is less of a tip and more of a general warning. As someone who does
a fair bit of work with PowerShell, I’m always anxious to get my hands on the
latest release. But this is a caution to really read the release notes as it
turns out new PowerShell versions are quite incompatible with a fair few core
Microsoft technologies (e.g. Exchange). This is very unfortunate and has been
the case since PowerShell/WMF 3.

Looking at the feature list, unless you are dying to implement Desired State
Configuration (DSC) there doesn’t appear to be to many enhancement that would
really *require* you to jump up. I guess this is a hallmark of a mature
platform now (unlike DSC which is very new). Just a note on DSC, you can only
run it on Windows Server 2008 R2 and up, not sure what makes R2 so special
but there it is.

Thankfully you can find all the relevant details and download links at [the
Windows PowerShell Blog](http://blogs.msdn.com/b/powershell/archive/2013/10/25/windows-management-framework-4-0-is-now-available.aspx).
