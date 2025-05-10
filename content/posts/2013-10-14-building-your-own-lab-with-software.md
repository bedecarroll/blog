+++
title = 'Building your own lab with software'
date = '2013-10-14T08:00:00+09:30'
categories = ['Uncategorized']
+++

For some time now I’ve been designing and developing some labs to replace the
coming void that will be left by TechNet ([please sign the petition!][1]).
My efforts have been focused on using VMware Fusion in conjunction with
Vagrant and Packer. Both Vagrant and Packer are big deals in the DevOps
communities due to the ability to quickly and easily destroy and create
lab/dev environments.

Due to the rapid rebuilds that can occur heavy automation is a must, and this
is where Vagrant really shines. Vagrant is essentially a controller for you
virtual lab and Packer is a tool that can build virtual machine templates in
an automated fashion.

I’ve been uploading my work to [my GitHub page][2], if you’d like to take a
look and get a head start on these tools. Very much a work in progress
though. I believe that working with this sort of tech can give you the
mindset that you need for future environments, no more snowflake servers!

As always, any feedback would be greatly appreciated.

[1]: https://www.change.org/petitions/continue-technet-or-create-an-affordable-alternative-to-msdn
[2]: https://github.com/bedecarroll
