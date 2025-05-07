+++
title = 'The sorry state of Cisco network monitoring software'
author = 'Bede Carroll'
layout = 'post'
url = '/2012/11/07/the-sorry-state-of-cisco-network-monitoring-software/'
date = 2012-11-07
categories = ['Cisco']
+++

These are my thoughts of Cisco monitoring “software”. Just a heads up, all my
thoughts are bad. I’ve been “using” (enduring?) Cisco software for quite some
time now. There is a very good reason any network engineer worth their salt uses
the command line and not the provided tools, they do terrible things to your
configuration. But while software like the Security Device Manager (SDM) is bad
and has been replaced by the slightly less bad Cisco Configuration Professional,
there is a special place in purgatory reserved for Cisco LAN Management Suite
(LMS).

I could rant about it for some time but I think I’ll just show you a horrifying
picture instead.

You maybe thinking to yourself, “what is that thing?!?”. Well that is a menu
from the LMS web console. That’s right, **a** menu! There are more of them, a
lot more. Even some of those menu options have other menu items in them! It is
a user interface nightmare. I spent weeks inside that console and still kept
forgetting which menu I should have been in to get what I wanted.

Now the user interface would be at least partially tolerable if it weren’t for
the fact that the software is a dog to run. A simple IOS software upgrade (which
really looked to me to be an automated SSH login running the archive command)
ended in a stuck job in the job scheduling system that will, apparently, never
go away. The Cisco response to the issue was, “perhaps it will disappear in
time?”. Very reassuring.

I guess I can’t be to hard on them. LMS is in the process of being merged in
with the Network Control System (NCS) which monitors and manages wireless
networks. NCS has its own set of issues but it is miles ahead of LMS. The new
combined product is called Cisco Prime Infrastructure and if you have active
software maintenance it is a free software upgrade.

Just a word of caution on Prime Infrastructure 1.2, not all features are
implemented from LMS. When I went through Prime Infrastructure it looked to tick
all the important boxes, IOS upgrades, Configuration Management and Monitoring
however it turns out the monitoring is quite limited. There is no ability to
monitor interface utilisation! Sounds pretty basic and there is even a tick box
called “Auto Monitoring” but the option just unticks itself. The current
recommendation is to run LMS on the side to perform any functions that Prime
cannot. However my experience with the LMS reporting engine is that it is pretty
“bleh” and I’d recommend you just use Cacti or some other SNMP poller to perform
the missing functions. Less trouble and far more flexible.
