---
title: 'PowerShell Tip Jar: Making things the way you like it'
author: Bede Carroll
layout: post
permalink: /2013/10/21/powershell-tip-jar-making-things-the-way-you-like-it/
wpsd_autopost:
  - 1
categories:
  - PowerShell Tip Jar
---
Have you got a nice *New-Alias* setup you wish were available every time you opened PowerShell? How about a cool function you&#8217;ve written that you&#8217;d like to not have to import at the start of each session? Well the PowerShell profile is for you! This little text file will allow you to put pretty much any PowerShell command in it and have it run every time you open a new PowerShell window. Think of it is the Windows equivalent of a Linux .bash_profile or .zshrc.

To set this up you will want to run the following commands:

<noscript>
  <p>
    View the code on <a href="https://gist.github.com/7076589">Gist</a>.
  </p>
</noscript>

Once done you will have an empty notepad opened for you. Just place the commands or functions you want to run in this file and save and close it. Next time you open PowerShell everything in that file will be run!

&nbsp;