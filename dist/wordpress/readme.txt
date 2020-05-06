=== Last 9 Photos - WebComponent ===
Contributors: ptkdev
Donate link: https://www.patreon.com/ptkdev
Tags: instagram, widget, last 9 photos, instagram widget, webcomponents
Requires at least: 5.0
Tested up to: 5.2
Requires PHP: 7.2
Stable tag: 2.6.0-nightly.20200506
License: MIT
License URI: https://github.com/ptkdev-components/webcomponent-instagram-widget/blob/nightly/LICENSE.md

Instagram Widget of your Instagram Profile for your blog. Show latest 9 pics from your instagram account. (Unofficial Instagram Widget)

== Description ==

# 🌉 WebComponent: Instagram Widget

[![](https://img.shields.io/badge/version-v2.5.0-lightgrey.svg)](https://github.com/ptkdev-components/webcomponent-instagram-widget/releases) [![](https://img.shields.io/npm/v/@ptkdev/webcomponent-instagram-widget.svg)](https://www.npmjs.com/package/@ptkdev/webcomponent-instagram-widget) [![](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/ptkdev-components/webcomponent-instagram-widget/blob/master/LICENSE.md) [![](https://img.shields.io/badge/ES-9-F7DF1E.svg)](https://wikipedia.org/wiki/ECMAScript) [![](https://snyk.io/test/github/ptkdev-components/webcomponent-instagram-widget/badge.svg)](https://snyk.io/test/github/ptkdev-components/webcomponent-instagram-widget) [![](https://discordapp.com/api/guilds/383373985666301975/embed.png)](http://discord.ptkdev.io)

> Last 9 Photos: Instagram Widget of your Instagram Profile for your blog. Show latest 9 pics from your instagram account. (Unofficial Instagram Widget)

> ⛔ **DISCLAIMER**: This is an **unofficial** instagram library and offers no warranty! All trademarks and logos belong to their respective owners.

## 🎁 Support: Donate
> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this project several hours in my spare time and try to keep it up to date and working. **THANK YOU!**

[![](https://img.shields.io/badge/donate-paypal-005EA6.svg?logo=paypal)](https://www.paypal.me/ptkdev) [![](https://img.shields.io/badge/donate-patreon-F87668.svg?logo=patreon)](https://www.patreon.com/ptkdev) [![](https://img.shields.io/badge/donate-sponsors-ea4aaa.svg?logo=github)](https://github.com/sponsors/ptkdev/)  [![](https://img.shields.io/badge/donate-ko--fi-29abe0.svg?logo=ko-fi)](https://ko-fi.com/ptkdev)

![](https://img.shields.io/badge/bitcoin-35jQmZCy4nsxoMM3QPFrnZePDVhdKaHMRH-E38B29.svg?logo=bitcoin) ![](https://img.shields.io/badge/ethereum-0x8b8171661bEb032828e82baBb0B5B98Ba8fBEBFc-4E8EE9.svg?logo=ethereum)

## 💡 Features
* [✔️] Easy to use
* [✔️] MIT License
* [✔️] Without jQuery depencence
* [✔️] Configurable with attributes
* [✔️] Work with: Browserify / Webpack / ReactJS / Angular / Wordpress
* [✔️] Photos Widget of your Instagram Profile for your blog or website with this WebComponent
* [✔️] Translations: 🇬🇧 🇮🇹 🇵🇱 (Help me ❤️)

== Installation ==

## 📖 Installation (Wordpress)
1. Download wordprss plugin and install it.
1. Add code to your html widget, example: `Appearance` --> `Widget` --> insert `HTML Widget` and paste html code (and replace `@ptkdev` with your instagram username):
```html
<instagram-widget username="@ptkdev" grid="3x3"></instagram-widget>
```

## 🧰 Options / Attributes

| Parameter | Description | Values | Default value | Available since |
| --- | --- | --- | --- | --- |
| username | Set your instagram username | Your instagram username with or without @ | `@ptkdev` | v1.0.0 |
| items-limit | Set the max number of pictures | number: from `0` to `12`  | `9` | v1.1.0 |
| grid | Set grid aspect ratio | `1x1`, `2x2`, `3x3`, etc... or `responsive` | `responsive` | v1.1.0 |
| image-width | Set width of images (NOTE: grid different than `responsive` overwrite this value) | length units: `100%`, `100px`, `100pt` | `100%` | v1.1.0 |
| image-height | Set height of images | length units: `100%`, `100px`, `100` | `100%` | v1.1.0 |
| border-spacing | Set spacing around images | length units: `5%`, `5px`, `5pt` | `2px` | v2.1.0 |
| border-corners | Set border radius of corners: `0`: square / `15`: rounded / `100`: circle | number: from `0` to `100` | `5` | v2.1.0 |
| force-square | Force square aspect ratio if you post photos with different size on your instagram | `yes` / `no` | `yes` | v2.4.0 |
| cache | Enable/disable cache | `enabled` / `disabled` | `enabled` | v2.1.0 |

== Screenshots ==

## 👔 Screenshot
See [Demo here](https://codepen.io/ptkdev/pen/WNQOYqy). Photos from @ptkdev account:

[![WebComponent: InstagramWidget ](https://raw.githubusercontent.com/ptkdev-components/webcomponent-instagram-widget/nightly/.github/assets/screenshot/webcomponent-instagram-widget-screen1.png?)](https://raw.githubusercontent.com/ptkdev-components/webcomponent-instagram-widget/nightly/.github/assets/screenshot/webcomponent-instagram-widget-screen1.png)

== Changelog ==

= v2.5.0 (May 04, 2020) =
* Fix: now you can use multiple webcomponents in the same html page (#3)
* NOTE: better to use the full close tag `<instagram-widget></instagram-widget>` than short `/>`

= v2.4.0 (May 02, 2020) =
* New attribute: `force-square`
* Feature: wordpress-plugin

= v2.3.0 (May 01, 2020) =
* Fix: `border-corners` and `border-spacing` now work without `grid` attribute.
* Fix: NPM Module give errors with require/import
* Update: examples

= v2.2.0 (April 30, 2020) =
* Fix: `grid` now is more responsive (now use `calc()` function: `100%` - `spacing/padding/margin`)
* Fix: default values now work (hello object reference my old dark friend)

= v2.1.1 (April 28, 2020) =
* New attribute: cache
* New attribute: border-corners
* New attribute: border-spacing
* Performance: now component send api request only if you change `username`
* Fix: refresh attributes random don't work

= v2.0.0 (April 28, 2020) =
* Removed "ptkdev-" prefix
* Module for Browserify/Webpack (run: `npm install @ptkdev/webcomponent-instagram-widget`)
* Fix: Grid bug
* Installation guidelines: Browserify / Webpack / ReactJS / Angular / Wordpress