+++
title = 'The Internet Fishing Trawler: SAN issues edition'
date = '2013-10-14T08:00:00+09:30'
categories = ['The Internet Fishing Trawler']
+++

* If you are running a Dell EqualLogic SAN and are on an effected version
    then you need to [lookout for this VMFS Heartbeat corruption issue with
    vSphere 5.5](http://kb.vmware.com/kb/2049103). The fix is to upgrade your
    SAN firmware.

* It appears there is also an issue with EMC VNXe SANs and iSCSI. This one
    only effects dual SP systems. I don’t have a direct link for this one but
    the EMC KB is 169041, Cormac Hogan has [a few more details on his blog](http://cormachogan.com/2013/10/09/heads-up-emc-vnxe-iscsi-issue/).
    There is a hotfix for this issue.

* In yet more SAN news, it appears that [HP have finally put the EVA out of
    its misery][1]. I’ve hear that the 3PAR architecture is much more modern
    and nicer anyway. Hope no one has invested in a new one!

* Still in SANs but on the new hotness in the industry, [VMware have release
    a new white paper on VSAN](https://www.vmware.com/resources/techresources/10391).
    I think VSAN shows a lot of potential but I don’t think it will ultimately
    kill traditional SANs. This yet another turn in the great
    Centralisation-Decentralisation cycle we seem to be going through. Happily
    I don’t think we will be centralising again until systems start appearing
    as one really big system, a la Sci-Fi.

* Getting out of SANs, Vladan has a [nice post on how to modify the password
    polices on the VCSA and inside vSphere on 5.5](http://www.vladan.fr/how-to-change-the-default-password-policies-in-vsphere-5-5/).
    The VCSA side is pretty easy and you can even change it from the command
    line (it just looks to be using the inbuilt Linux user system).

[1]: http://www.vmguru.nl/wordpress/2013/10/hp-finally-killed-the-eva/
