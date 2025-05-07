+++
title = 'Installing Windows 10 Technical Preview On A VHDX'
author = 'Bede Carroll'
layout = 'post'
url = '/2015/01/28/install-windows-10-tech-preview-on-vhdx/'
date = 2015-01-28
categories = ['Windows', 'DISM']
+++

So the latest version of the Windows 10 tech preview is out and it is
pretty snazzy! Being the daredevil rouge that I am I decided to try it
out on my work laptop (being the only Windows PC I have) and have had
great success. While I wanted to try it out I didn't want to chance
destroying all my data and I also wanted an easy back out if I didn't
like it. Neither a format/reinstall nor an upgrade suit these
requirements so it was time to try something even cooler, booting from
``VHDX``!

Most people will know ``VHD(X)``s as the file format of Hyper-V but
there is another cool way of using this disk image. Windows (or really
the boot loader) has had the feature of booting from ``VHD`` since
Windows Vista but it hasn't been a really popular one. This is a shame
as it is a great way to test out different Windows versions without much
risk.

There are two main ways of installing to ``VHD(X)``, doing a normal
Windows install via USB key/DVD or using ``DISM`` to apply the install
``WIM`` directly to the ``VHD``. The only real difference between the
two options is the Windows boot loader will be upgraded with the "normal"
install and be graphical. The ``DISM`` way will give you just the usual
text boot loader. I did the "normal" way but the choice is yours.

Without further ado, the steps.

## What you will need

* Windows 10 Technical Preview ISO from
    <http://windows.microsoft.com/en-au/windows/preview-iso>
* If you are following the "normal" way:
  * USB key for booting
  * Windows USB/DVD Download Tool from <http://wudt.codeplex.com/>

## Setting up the Windows 10 disk

First we will need to setup the virtual hard drive that Windows 10 is
going to live in. No matter which "way" you choose you will need to
perform these steps.

1. Open command prompt
2. Type ``diskmgmt``
3. Go to ``Action`` then ``Create VHD``
4. In the ``Location:`` box type ``C:\Win10.vhdx``
5. We want to use the newest VHD format available so select ``VHDX`` if
    it is available to you
6. As I don't want to waste all my disk space in one hit I selected
    ``Dynamically expanding (Recommended)``

    **Note:** Dynamically expanding only says recommended when you use
    the ``VHDX`` format however you can use it with ``VHD``. The only
    small downside to dynamically expanding is a performance hit as
    there will be more than one operation per write.
7. I selected a ``Virtual hard disk size:`` of 40GB as I won't be
    installing that much and I will still have access to my original
    operating system as an ``E:`` drive
8. Click OK
9. Once the disk is created you will see an uninitialized disk ready
    for Windows 10!

## The Normal Way

1. Insert your USB key and find out which drive letter it is
2. Install the Windows USB/DVD Download Tool that was downloaded earlier

    **Note:** You will need .NET 2.0 to install this tool.
3. Launch the tool and follow the wizard to copy the ISO to the USB key
4. Reboot the computer and boot from the USB key
5. Follow the wizard as per every other Windows install until you get
    to the disk configuration section
6. Press {{< kbd SHIFT >}} + {{< kbd F10 >}} to launch a command prompt
7. From the command prompt we will now attach the ``VHD(X)`` using the
    following commands

    ```bash
    diskpart
    select vdisk file=E:\Win10.vhdx
    attach vdisk
    ```

8. Click back to the disk selection screen and then click refresh
9. You should now see your blank drive
10. Select the drive and click next

    **Note:** You will see a message that it can't be installed on this
    drive, you can safely ignore that.
11. Finish the Windows install
12. On next boot you will be prompted to select which operating system
    to boot, just select Windows Technical Preview to get into your new
    Windows 10 install!

## The DISM Way

1. Right-click the new drive and click initialise
2. Format the drive as ``NTFS``
3. Mount the drive as letter ``X:``
4. Find your Windows 10 ISO (it should be something like
    ``Windows10_TechnicalPreview_x64_EN-US_9926.iso``)
5. Double-click the ISO to mount it (or use your favorite ISO mounting
    tool)
6. Check the drive letters of the new ``VHD(X)`` and of the mounted ISO
7. Assuming the mounted ``VHD(X)`` is ``X:`` and the DVD is mounted as
    ``D:``, run the following command to apply the Windows install

    ```bash
    dism /apply-image /imagefile:D:\sources\install.wim /index:1 /ApplyDir:X:\
    ```

8. Once ``DISM`` is complete the new drive will need to be added to the
    boot menu with the following command

    ```bash
    bcdboot X:\Windows
    ```

9. Now the computer can be rebooted
10. On next boot you will be prompted to select which operating system
    to boot, just select Windows Technical Preview
11. Windows 10 will now finish installing to get ready for first use

## Going back

Don't like Windows 10 or are having issues?

1. Reboot to get into your previous operating system by selecting it
    from the boot loader
2. Backup the BCD store using ``BCDEdit``

    ```bash
    bcdedit /export c:\bcd_store_backup
    ```

3. View the BCD store to grab the identifier of Windows 10

    ```bash
    bcdedit /v
    ```

4. Delete the Windows 10 entry

    ```bash
    bcdedit /delete <identifier string>
    ```

5. Delete the ``C:\Win10.vhdx`` file from your hard drive
