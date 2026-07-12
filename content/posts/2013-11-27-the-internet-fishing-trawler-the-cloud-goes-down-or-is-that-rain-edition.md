+++
title = 'The Internet Fishing Trawler: The Cloud Goes Down (Or Is That Rain?) Edition'
date = '2013-11-27T08:00:00+09:30'
categories = ['The Internet Fishing Trawler']
+++

* While it is all fun and games to laugh at
    [Azure going down taking a whole bunch of public Microsoft websites with it](http://www.theregister.co.uk/2013/11/21/azure_blips_offline_again/),
    it also serves as a timely reminder that the "cloud" isn't
    some magical beast that has 100% uptime just because there are lots of
    data centres scattered across the world. Monitoring your off premise
    availability is just as important as monitoring on premise. Perhaps this
    is the "Kondratiev wave" of IT, marketing convinces people that
    the new shiny doesn't need any of the old ways, tech gets implemented
    to the suffering of the users/business, new shiny gets operationalised
    enough for the "old ways" to be implemented again. Such is life
    I guess.

* Continuing on a theme, Greg Ferro has posted
    [his thoughts on clouds and his belief that private clouds are the future](http://etherealmind.com/blessay-public-clouds-wont-be-big-in-2014-private-clouds-will-a-contrarian-view/).
    This is something I fully agree with. There are use cases for public
    clouds (think Netflix) but if you are an enterprise IT shop do you really
    want to be putting your fate in the hands of a third party? Greg's
    comparison with outsourcing is apt, because that is exactly what the rush
    for public clouds is.

* Getting away from the clouds, Dell have
  [a good post on how to query the iDRAC using CIM with](http://en.community.dell.com/techcenter/b/techcenter/archive/2013/11/21/retrieving-the-dell-poweredge-vrtx-hardware-and-firmware-inventory-using-windows-powershell.aspx)
  PowerShell to get hardware details.
  It is my guess that the HP PowerShell cmdlets are really wrappers around
  CIM, Dell just don't provide things the easy way.

* SDN Central provides
    [an interesting article on what was missing/not announced about Cisco ACI](http://www.sdncentral.com/news/what-cisco-insieme-launch-left-out/2013/11/).
    The last one on pricing has me interested...

* Good news for those of you with single ESXi host requirements,
    [most of the limitations have been removed](http://www.vmguru.nl/wordpress/2013/11/free-vsphere-hypervisor-limitations-removed/).
    One important limitation that still exists is the API is locked until you
    buy a licensed version. I'm guessing this was a response to
    Hyper-V/KVM but I would have just bought one of the bundles to get all the
    great additional features. It isn't exactly super expensive for the
    base bundles.
