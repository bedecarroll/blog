+++
title = 'vCAC 6.0 announced'
author = 'Bede Carroll'
layout = 'post'
url = '/2013/10/16/vcac-6-0-announced/'
date = 2013-10-16
categories = ['Uncategorized']
+++

For those that are unaware, VMworld Barcelona is currently going on and
with it brings new product updates. In my quest for automation knowledge
I've become quite interested in vCAC. The unfortunate downside is that
(like all "automation" systems, I'm sure) it is quite involved in
setting it up. With that in mind I've only spent a little bit of time
trying to get it going but I've learnt one thing, it sure isn't a next,
next, next install! If you want to give it a crack I would recommend
looking at [this blog post by Jonathan Medd](http://www.jonathanmedd.net/2013/09/automating-the-pre-requisites-for-vcac-5-2.html)
as he has written a PowerShell script to at least automate the
prerequisites.

Anyway! Back to the vCAC 6.0. The Elastic Skies blog has a [good run
down on what is new](http://elasticskies.com/vcac-6-0-announced/). Not
mentioned but very important (IMHO) is integration with Puppet ([as per
the press release](https://puppetlabs.com/about/press-releases/puppet-labs-announces-enhanced-integration-vmware-vcloud-automation-center-6)).
A vCAC install will be able to log in, read and understand your Puppet
manifests. From what I can tell the vCAC server will act as an ENC
(External Node Classifier) allowing you to use Puppet to define a
standard way nodes are to be configured and then have vCAC deploy and
classify the VMs as to which role they should be.

To me this seems like a powerful way to "close the loop", in a manner of
speaking, from graphical drag and drop creation of services to allow
user to request through to not only configuring a VM based on a
definition but to *enforce* the definition. As someone with lots of
"stuff" I find the idea of forcing the systems to conform even more
powerful than building things in an automated way.

Interesting times!
