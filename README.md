
# Ansible Role: Block ads hosts File

This Ansible role uses Steve Black's [hosts repository](https://github.com/StevenBlack/hosts) to generate a hosts file that blocks known adware and malware sites. Whereas the repo is amazing suffices for my own use, you can use any other hosts file source as described below

By default, this role also adds your hostname to ``/etc/hosts``

## Requirements

I have only tested this Ansible role on CentOS and Ubuntu. In theory, this ansible role can be run on almost all devices, regardless of OS.

## Role Variables
Available variables are listed below, along with default values (see ``defaults/main.yml``):
```
recipe: ''
```
The desired recipe as per the Steve Black's [hosts repository](https://github.com/StevenBlack/hosts). By default it uses the unified hosts. Below are the valid options:


| **Unified hosts** +|Recipe                    |
|--------------------|--------------------------|
| **only**           |`''`                      |
|**fakenews**        |`'fakenews'`              |
|**gambling**        |`'gambling'`              |
|**porn**            |`'porn'`                  |
|**social**          |`'social'`                |
|**fakenews + gambling** |`'fakenews-gambling'`|
|**fakenews + porn**|`'fakenews-porn'`|
|**fakenews + social**|`'fakenews-social'`|
|**gambling + porn**|`'gambling-porn'`|
|**gambling + social**|`'gambling-social'`|
|**porn + social**|`'porn-social'`|
|**fakenews + gambling + porn**|`'fakenews-gambling-porn'`|
|**fakenews + gambling + social**|`'fakenews-gambling-social'`|
|**fakenews + porn + social**|`'fakenews-porn-social'`|
|**gambling + porn + social**|`'gambling-porn-social'`|
|**fakenews + gambling + porn + social**|`'fakenews-gambling-social'`|

```
download_path: /tmp/hosts-template
```
The full path where the hosts file will be downloaded to
```
insert_after_line: '# Custom host records are listed here.'
```
Insert Custom hosts after this line
```
custom_hosts:
      - host: app.test
        ip: 127.0.0.1
      - host: example.com
        ip: 93.184.216.34
      - host: account.example.org
        ip: 1.2.3.4
``` 
A list of extra custom hosts to insert into the hosts file after ``insert_after_line``

```
hosts_file: /etc/hosts
```
Just in case your host saves the `hosts` file in a different directory :wink:

```
local_ip: ansible_facts.default_ipv4.address
```
Used to set `hostname ip` entry in hosts file e.g `10.10.10.10 sv1.example.net` Example options include:

 1. ansible_facts.default_ipv4.address
 2. ansible_facts.eth0.ipv4.address
3. static IP e.g 127.0.0.1

```
hosts_url: https://example.com/sample/hosts
```
You can override the url from where to download hosts file and use your own.

## Dependencies
None.

## Example Playbook
```
---
- hosts: workstations
  become: yes
  vars:
    custom_hosts:
      - host: app.local
        ip: 127.0.0.1
      - host: app.example.com
        ip: 1.2.3.4
  roles:
    - hosts_file
```

## Support

Issues and PRs are welcome.

## Licence

MIT / BSD

## Inspiration

Role and Readme inspired by by [Jeff Geerling](https://www.jeffgeerling.com/), author of [Ansible for DevOps](https://www.ansiblefordevops.com/), [Ansible for K8S](https://www.ansibleforkubernetes.com/), and [Jeff Geerling Youtube Channel](https://www.youtube.com/user/geerlingguy).

Also big thanks to the maintaners of [Steve Black's hosts repository](https://github.com/StevenBlack/hosts) and all upstream sources.
