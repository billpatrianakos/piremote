# PiRemote

A web and voice universal remote interface for Raspberry Pi. This software will allow you to control any device that responds to IR commands using your voice and has a web interface that will allow you to control your devices from anywhere in the world that has an internet connection.

## Requirements

__Raspberry Pi__ - Any Raspberry Pi will do but the more powerful your Pi the more reliable your IR transmissions will be. The Raspberry Pi Zero W works fine. The Pi 3 works great.

__LIRC__ - You need to install LIRC (Linux Infrared Remote Control) on the Raspberry Pi. If you're using a newer Pi (anything with the 4.X kernel) then [follow these instructions to get LIRC working](https://gist.github.com/billpatrianakos/cb72e984d4730043fe79cbe5fc8f7941). LIRC is notoriously difficult to install on the Pi and after weeks of Googling I only found 2 resources that had the correct instructions for the new kernal so follow my Gist and you're guaranteed to have a smooth LIRC experience if you run Raspbian Buster.

__IR transmitter and receiver__ - Any will do. You'll hook it up over GPIO. I used [this pair](https://www.amazon.com/gp/product/B01E20VQD8/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1) which worked well and then tried [this Pi HAT](https://www.amazon.com/gp/product/B0713SK7RJ/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1) which also worked well. I like the second one because it has a slot to solder on a second IR LED which I did ([this is the LED I used](https://www.amazon.com/gp/product/B06VY25N8J/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1))

__A static IP or domain__ - This project assumes Alexa will call the API on your Pi which means it needs to be connected to the open internet. My favorite way to do that is by creating a VPN tunnel to a server that I'm hosting other websites on and proxying the request to the Pi using Nginx. Check out [this guide](https://www.digitalocean.com/community/tutorials/how-to-install-tinc-and-set-up-a-basic-vpn-on-ubuntu-14-04) or [this guide](https://jordancrawford.kiwi/setting-up-tinc/) and here's [some troubleshooting tips by me if you get stuck](http://billpatrianakos.me/blog/2019/07/12/access-a-raspberry-pi-from-anywhere-without-port-forwarding/)

__An Alexa enabled device__ - Any Echo will do but you can also just use the app if you don't have one.

__An IFTTT account__ - I use IFTTT to trigger events instead of doing things the longer harder way through creating custom Alexa skills. You can create a skill if you want but IFTTT gets the job done.

## Setup

TODO: Explain how to...

- Install LIRC and connect IR rec and tx'ers
- Tunnel to VPN and static hosting
- Create alexa skill

## Installation

### Clone the repository locally

Clone this repo. I use a separate, private branch for deployment so my config files do not end up publicly available on GitHub. You can either do this as well or add your private config files to your `.gitignore` file.

### Install dependencies on the Pi

1. Install Nodejs v12.8.1. I use `nvm` to manage Node versions and the deploy scripts are written with that assumption.
2. With Node installed, install global dependencies: `npm install knex pm2`
3. Install Nginx: `sudo apt-get update && sudo apt-get install nginx`
4. Install Postgres. [Here's a good guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

TODO: explain setting up git repo on pi for deployment

### Configure the PiRemote application

Now that you have the software required to run on the Pi installed, log out of the Pi and configure the application locally.

- deployment

## Usage

- maybe not needed. installation instructions could be enough. this might all be self-explanatory
