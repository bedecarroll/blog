+++
title = 'PowerShell Tip Jar: Attaching VMware Update Manager baselines'
date = '2013-10-14T08:00:00+09:30'
categories = ['PowerShell Tip Jar']
+++

If you work in an environment with lots of virtualised branches then at some
point you are going to want to add VMware Update Manager (VUM) baselines to
all or most of them. This is pretty easy to do with PowerCLI and the VUM
snapin. If you want your baseline to apply to everything then I’d recommend
you just attach the baseline to the vCenter object at the top of the tree.
But I need to exclude one data centre and thus this code:

{{< gist 6950399 >}}

One gotcha here is that the version of the PowerCLI VUM snapin has to match
the version of VUM you are using. Also I couldn’t mix and match the new 5.5
PowerCLI with the 5.1 VUM snapin.
