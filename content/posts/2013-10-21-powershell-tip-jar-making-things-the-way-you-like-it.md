+++
title = 'PowerShell Tip Jar: Making things the way you like it'
date = '2013-10-21T08:00:00+09:30'
categories = ['PowerShell Tip Jar']
+++

Have you got a nice *New-Alias* setup you wish were available every time you
opened PowerShell? How about a cool function you’ve written that you’d like
to not have to import at the start of each session? Well the PowerShell
profile is for you! This little text file will allow you to put pretty much
any PowerShell command in it and have it run every time you open a new
PowerShell window. Think of it is the Windows equivalent of a Linux
.bash_profile or .zshrc.

To set this up you will want to run the following commands:

{{< gist 7076589 >}}

Once done you will have an empty notepad opened for you. Just place the
commands or functions you want to run in this file and save and close it.
Next time you open PowerShell everything in that file will be run!
