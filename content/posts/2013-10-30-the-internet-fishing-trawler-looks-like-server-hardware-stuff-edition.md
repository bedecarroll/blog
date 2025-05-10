+++
title = 'The Internet Fishing Trawler: Looks Like Server Hardware Stuff Edition'
date = '2013-10-30T08:00:00+09:30'
categories = ['The Internet Fishing Trawler']
+++

* I usually shy away from vendor battles as the technology should speak for
    itself but sometimes the FUD from vendors can be a bit much. Jamie Doherty
    at the Bits and Bytes blog [takes down a recent HP video for OneView](http://blog.r2ut.com/2013/10/hp-oneview-versus-ucs-manager-video.html).
    Vendors shouldn’t purposefully misuse competitors products in a *video* on
    the *Internet,*it isn’t really a good look.

* Kevin Houston over at Blades Made Simple has [a great comparison of the
    maximum number of 10GbE network cards for 2x socket servers in various
    blade vendors’ chassis](http://bladesmadesimple.com/2013/10/max-ethernet-connections-on-2-socket-blade-servers/).
    Just a note on the UCS one, I’ve heard that 40GbE is on its way. That is
    a lot of network in a single chassis!

* I’ve recently updated to Windows 8.1 at work and found (like every other
    upgrade) that a Windows.old was left behind. As I’m on a client OS I can
    use the Disk Cleanup tool but if that is unavailable Jeffery Hicks [swoops
    in with some PowerShell to save the day](http://jdhitsolutions.com/blog/2013/10/out-with-the-windows-old).
    He has also performed upgrades on server OSes, a braver man than I.

* HP have released new versions for Virtual Connect and Onboard
    Administrator. [Julian Wood has the lowdown](http://www.wooditwork.com/2013/10/28/hp-updates-virtual-connect-4-10-oa-4-01-adds-ipv6-hiding-flexnics-sr-iov/).
    IPv6 support sure is welcome (this is 2013, it should have been added much
    sooner!) but you may want to watch out for the bug with Emulex adapters
    and full hight blades, see [HP CA c03600027](http://h20565.www2.hp.com/portal/site/hpsc/template.PAGE/public/kb/docDisplay/?sp4ts.oid=5112370&spf_p.tpst=kbDocDisplay&spf_p.prp_kbDocDisplay=wsrp-navigationalState%3DdocId%253Demr_na-c03600027-2%257CdocLocale%253D%257CcalledBy%253D&javax.portlet.begCacheTok=com.vignette.cachetoken&javax.portlet.endCacheTok=com.vignette.cachetoken)
    (I don’t think HP know what a small URL looks like) for more details on
    that one.

* Software Defined Networking (SDN) is pretty hot right now but it means
    more than just running to LinkedIn and slapping it somewhere on your CV.
    Thankfully Chris Wahl is [here with our trusty old pal Clippy to set
    everyone straight on what SDN actually is](http://wahlnetwork.com/2013/07/02/clippy-explains-software-defined-networking/).
    I think it would be wise to read this article again before meeting with a
    vendor ready to sell you a fancy SDN solution, it will help focus your
    questions.
