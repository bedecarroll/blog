---
title: 'Dell 6Gbps HBA Cross Flash'
author: Bede Carroll
layout: post
permalink: /2015/01/28/dell-6gbps-hba-cross-flash/
categories:
  - FreeNAS
  - ZFS
  - Dell
---

Before info
{% gist ca04a80f52cbfebb1135 %}

OS attempt
{% gist de2e570955a407252c44 %}

Steps
```
sas2flsh.exe -o -f /tmp/9200-8e.bin -b /tmp/mptsas2.rom
sas2flsh.exe -o -b /tmp/x64sas2.rom
```

Success
{% gist ddf7bb4a797846ee23b9 %}
