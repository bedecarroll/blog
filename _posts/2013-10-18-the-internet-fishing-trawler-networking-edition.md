---
title: 'The Internet Fishing Trawler: Networking edition'
author: Bede Carroll
layout: post
permalink: /2013/10/18/the-internet-fishing-trawler-networking-edition/
categories:
  - The Internet Fishing Trawler
---
*   Unless it is a major new launch or a brand new product line I tend not to really focus on the spec bump launches from Cisco. However <a href="http://blogs.cisco.com/datacenter/nexus-3100-at-interop/" target="_blank">the Cisco Datacenter Blog has an interesting post on the new Nexus 3100 series</a>. The highlight of the post is the platform architecture white paper, those tend to be very useful. The super unfortunate part is that you cannot download it without handing over your details, bummer.

&nbsp;

*   Another post from Cisco, the security blog this time, about onePK. onePK is an API framework for managing Cisco devices. This is part of the whole &#8220;SDN&#8221; universe which you could dedicate hundreds of blogs to appropriately cover. The Cisco Security blog has a series on onePK and a demo application (or is it just app now days?) on how to use it. <a href="http://blogs.cisco.com/security/ciscos-onepk-part-2-reaching-out-to-a-network-element/" target="_blank">Part 1</a> and <a href="http://blogs.cisco.com/security/ciscos-onepk-part-1-introduction/" target="_blank">Part 2</a>.

&nbsp;

*   Of course Cisco isn&#8217;t the only one with a horse in the SDN race, VMware are out touting the GA of NSX. I&#8217;ll be looking at getting that going in my lab at some point but I feel I&#8217;ll need a deeper understanding of the hardware requirements in case I&#8217;m missing something. With that in mind VMware are showing off their visibility tools for networking and I have to admit, I&#8217;m pretty impressed. I think if you were a pure virtualisation shop (NSX is multi-hypervisor) then you&#8217;d be hard pressed to want another networking monitoring tool. <a href="http://blogs.vmware.com/networkvirtualization/2013/10/vmware-nsx-visibility-sddc.html" target="_blank">Just look at the pretty pictures</a>!

&nbsp;

*   It appears Hyper-V 2012 has a bug with the port mirroring feature, it might miss some packets. <a href="http://www.aidanfinn.com/?p=15569" target="_blank">Aidan Finn has all the details</a>, suffice to say, install KB2885541. I can only imagine the fun the engineer who discovered this bug had, a lot of head scratching went on I think!

&nbsp;

*   IPv6 seems to be one of those perpetually coming technologies, we ran out of IPv4 addresses long ago but people still seem to be resisting it at every turn for some reason. But learning IPv6 is still important (lets face it, if it does become big you will become one of the few to know anything about it) and <a href="http://www.howfunky.com/2013/09/ipv6-unique-local-address-or-ula-what.html" target="_blank">Ed Horley at How Funky has a post on Unique Local Addresses (ULA)</a>. While I think it is a great primer I would agree with Andrew von Nagy in the comments, ULA seems best suited as an internal number scheme to provide stable addressing for internal resources. That seems the most logical to me.<a href="http://www.blogger.com/profile/12658799453646609565" rel="nofollow"><br /> </a>

&nbsp;

That wraps up this edition but I&#8217;d like to leave you with a bonus link, <a href="http://devopsreactions.tumblr.com/post/44533510436/when-someone-breaks-established-naming-conventions" target="_blank">the DevOps Reactions Tumblr</a>. As this post will be out on a Friday I think everyone needs a good laugh. I&#8217;ve linked straight to one of my favourite ones, what to do when someone breaks the naming convention. I&#8217;d caution you though, you can easily get stuck on that site laughing and nodding your head as the time passes by. Almost as bad as <a href="http://tvtropes.org" target="_blank">TVTropes.org</a>!

&nbsp;