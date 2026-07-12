+++
title = 'PowerShell Tip Jar: Getting extra cmdlets'
date = '2013-11-19T08:00:00+09:30'
categories = ['PowerShell Tip Jar']
+++

So you're starting to get the hang of this PowerShell stuff and are able
to pull off your own fancy tricks with the builtin cmdlets, but you need more!
You want to be able to do things like create computer accounts, get VMware
host information or turn on Cisco UCS and HP blades, cool stuff! Well, there
is a way and that way is PowerShell modules.

PowerShell modules come in two types, script modules (.psm1 files) and binary
dll files. Not long from now you will be creating your own modules but if you
would like to get a head start on that I suggest
[the MSDN topic](http://msdn.microsoft.com/en-us/library/dd901839(v=vs.85).aspx),
it has everything you ever wanted to know on modules.

To start out you are going to need to download some modules from your
favourite vendor, Microsoft with the RSAT toolkit, F5, EMC, Cisco, HP and
VMware all have module packs available and ready to download on their website.
To give you an idea on how easy it is to work with modules please give this
little exercise a try:

1. Download the Windows RSAT for your OS
2. Install the RSAT
3. Launch a new, normal PowerShell window
4. Run the command *Import-Module ActiveDirectory*
5. Now have a look at all the shiny new cmdlets using *Get-Command -Module ActiveDirectory*
6. Profit!!!

Now if you want to use some of the vendor cmdlets they require "snapins"
instead of modules. The process is largely the same though, e.g.
*Add-PSSnapin VMware**.

To further enhance this new found ability, have a think about how you would
tackle the following:

* How would you make these new cmdlets available in your scripts?
* Got a favourite module that you would like to load every session? How
    would you modify your profile to accomplish this?
* Take that thought a step further, how would you add ALL your modules each
    time?

Good luck!
