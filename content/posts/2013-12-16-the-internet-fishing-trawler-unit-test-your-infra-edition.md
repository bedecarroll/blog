+++
title = 'The Internet Fishing Trawler: Unit Test Your Infra Edition'
date = '2013-12-16T08:00:00+09:30'
categories = ['The Internet Fishing Trawler']
+++

- In a pure example of the power of software-defined-whatever, over at
  Mauveweb there is [a great blog post on unit testing load balancer
  configurations with Honeyd](http://mauveweb.co.uk/posts/2013/12/load-balancer-testing-with-honeyd.html).
  Fantastic idea!

- A great post by AirBnB on [their "SmartStack" service discovery
  software they have written to support their Service Oriented
  Architecture (SOA)](http://nerds.airbnb.com/smartstack-service-discovery-cloud/).
  I really like these posts as they give a great insight into how other
  people are designing their systems.

- Alan Renouf over at Virtu-Al has a blog series called "[Top 10
  Automation Tips](http://www.virtu-al.net/2013/12/13/automation-tip-3its-people/)".
  I've linked to tip three, "It's all about people", because it really is
  all about the people. I think this is especially true if you work in a
  normal organisation and not one of those young start-ups or cloud
  providers. The requirements for successful automation go well beyond
  just the technical.

- Bob Plankers, The Lone Sysadmin, has a great idea, [do not collect
  system performance data from guest
  OSes](http://lonesysadmin.net/2013/12/12/collect-system-performance-data-guest-oses/).
  I can hear a lot of gasps from the monitoring crowd but think about it
  for a second, what do you need to know? How is the VM performing in
  relation to other virtual machines and the physical hardware? Is the
  service provided by the VM working? Those really are the questions you
  need to ask. Now I think I need the qualify this, this really applies to
  the guest operating system, all those super fancy application metrics
  will no doubt need an agent.

- SDNCentral has an article on an idea which I'm assuming would have been
  floating around for awhile now, [merge NVGRE and
  VXLAN](http://www.sdncentral.com/sdn-blog/nvgre-merge-vxlan/2013/12/). By
  the looks of things the battle was fought and NVGRE lost.
