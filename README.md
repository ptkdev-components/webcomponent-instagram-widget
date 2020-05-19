# 🌉 WebComponent: Instagram Widget

[![](https://img.shields.io/badge/version-v2.6.1-lightgrey.svg)](https://github.com/ptkdev-components/webcomponent-instagram-widget/releases) [![](https://img.shields.io/npm/v/@ptkdev/webcomponent-instagram-widget.svg)](https://www.npmjs.com/package/@ptkdev/webcomponent-instagram-widget) [![](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/ptkdev-components/webcomponent-instagram-widget/blob/master/LICENSE.md) [![](https://img.shields.io/badge/ES-9-F7DF1E.svg)](https://wikipedia.org/wiki/ECMAScript) [![](https://snyk.io/test/github/ptkdev-components/webcomponent-instagram-widget/badge.svg)](https://snyk.io/test/github/ptkdev-components/webcomponent-instagram-widget) [![](https://discordapp.com/api/guilds/383373985666301975/embed.png)](http://discord.ptkdev.io)

Last 9 Photos: Instagram Widget of your Instagram Profile for your blog. Show latest 9 pics from your instagram account.

> ⛔ **DISCLAIMER**: This is an **unofficial** instagram library and offers no warranty! All trademarks and logos belong to their respective owners.

## 🎁 Support: Donate
> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this project several hours in my spare time and try to keep it up to date and working. **THANK YOU!**

[![](https://img.shields.io/badge/donate-paypal-005EA6.svg?logo=paypal)](https://www.paypal.me/ptkdev) [![](https://img.shields.io/badge/donate-patreon-F87668.svg?logo=patreon)](https://www.patreon.com/ptkdev) [![](https://img.shields.io/badge/donate-sponsors-ea4aaa.svg?logo=github)](https://github.com/sponsors/ptkdev/)  [![](https://img.shields.io/badge/donate-ko--fi-29abe0.svg?logo=ko-fi)](https://ko-fi.com/ptkdev)

![](https://img.shields.io/badge/bitcoin-35jQmZCy4nsxoMM3QPFrnZePDVhdKaHMRH-E38B29.svg?logo=bitcoin) ![](https://img.shields.io/badge/ethereum-0x8b8171661bEb032828e82baBb0B5B98Ba8fBEBFc-4E8EE9.svg?logo=ethereum)

## 📎 Menu
- 💡 [Features](#-features)
- 🕹 [Demo](https://codepen.io/ptkdev/pen/WNQOYqy)
- 👔 [Screenshot](#-screenshot)
- 🚀 [How to use](#-installation)
- - 🌎 [Web](#-installation-web)
- - 📦 [Webpack/Browserify](#-installation-npm-module---browserifywebpack)
- - 📖 [Wordpress](#-installation-wordpress)
- - ⚛️ [React](#%EF%B8%8F-installation-react)
- - 🅰️ [Angular](#🅰%EF%B8%8F-installation-angular)
- 📚 [Documentation](#-documentation)
- - 🧰 [Options / Attributes](#-options--attributes)
- - 🎨 [CSS Customization](#-css-customization)
- 🔨 [Developer Mode](#-developer-mode)
- 👨‍💻 [Contributing](#-contributing)
- 🐛 [Known Bugs](https://github.com/ptkdev-components/webcomponent-instagram-widget/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
- 🍻 Community:
  - <img src="https://raw.githubusercontent.com/ptkdev-components/webcomponent-instagram-widget/master/.github/assets/social_discord.png" height="18px"> [Discord](http://discord.ptkdev.io) ([🇬🇧 English Channel](https://discord.gg/YkMG26f) | [🇮🇹 Italian Channel](https://discord.gg/HFtdBAJ) | [🇵🇱 Polish Channel](https://discord.gg/TV5EXFd))

## 💡 Features
* [✔️] Easy to use
* [✔️] MIT License
* [✔️] Without jQuery depencence
* [✔️] Configurable with attributes
* [✔️] Customization with CSS Style
* [✔️] Work with: Browserify / Webpack / ReactJS / Angular / Wordpress
* [✔️] Photos Widget of your Instagram Profile for your blog or website with this WebComponent
* [✔️] Translations: 🇬🇧 🇮🇹 🇵🇱 (Help me ❤️)

## 👔 Screenshot
See [Demo here](https://codepen.io/ptkdev/pen/WNQOYqy). Photos from @ptkdev account:

[![WebComponent: InstagramWidget ](https://raw.githubusercontent.com/ptkdev-components/webcomponent-instagram-widget/nightly/.github/assets/screenshot/webcomponent-instagram-widget-screen1.png?)](https://raw.githubusercontent.com/ptkdev-components/webcomponent-instagram-widget/nightly/.github/assets/screenshot/webcomponent-instagram-widget-screen1.png)

## 🚀 Installation (Web)
1. Add html code to your page (and replace `@ptkdev` with your instagram username):
```html
<instagram-widget username="@ptkdev" grid="3x3"></instagram-widget>
```
2. Require javascript in yourpage (before `</body>`):
```html
<script src="https://cdn.jsdelivr.net/npm/@ptkdev/webcomponent-instagram-widget@latest/dist/lib/en/instagram-widget.min.js"></script>
```

You can replace `en` in jsdelivr cdn with `it` or `pl` and load different languages or replace `@latest` with specific version, example `@2.0.1`.

See folder `examples`, run with `npm run example`. Below is available a description of `options` values.

## 📦 Installation (NPM Module - Browserify/Webpack)
1. Install npm module: `npm install @ptkdev/webcomponent-instagram-widget --save`
2. Add html code to your page (and replace `@ptkdev` with your instagram username):
```html
<instagram-widget username="@ptkdev" grid="3x3"></instagram-widget>
```
3. Require javascript in your app:
```javascript
require("@ptkdev/webcomponent-instagram-widget");
```
or
```javascript
import '@ptkdev/webcomponent-instagram-widget';
```

See folder `examples`, run with `npm run example`. Below is available a description of `options` values.

## 📖 Installation (Wordpress)
1. Download wordpress plugin from [official store](https://wordpress.org/plugins/last-9-photos-webcomponent/) or [mirror](https://github.com/ptkdev-components/webcomponent-instagram-widget/raw/master/dist/wordpress/instagram-widget-wordpress-plugin.zip) and install it.
1. Add code to your html widget, example: `Appearance` --> `Widget` --> insert `HTML Widget` and paste html code (and replace `@ptkdev` with your instagram username):
```html
<instagram-widget username="@ptkdev" grid="3x3"></instagram-widget>
```

You can insert this html code in posts, widget, html box or theme. Where you want see instagram photos box.

## ⚛️ Installation (React)
1. Install npm module with `npm install @ptkdev/webcomponent-instagram-widget@latest --save`:
2. Import module in your `src/App.js` on header:
```javascript
import '@ptkdev/webcomponent-instagram-widget';
```
3. Add html code to your `App.js` template (and replace `@ptkdev` with your instagram username):
```html
<instagram-widget username="@ptkdev" grid="3x3"></instagram-widget>
```

Go to `examples/reactjs` and run `npm run start` in folder for more info. Below is available a description of `options` values.

## 🅰️ Installation (Angular)
1. Install npm module with `npm install @ptkdev/webcomponent-instagram-widget@latest --save`:
2. Import module in your `app/app.modules.ts` on header:
```javascript
import '@ptkdev/webcomponent-instagram-widget';
```
3. Add html code to your html component (and replace `@ptkdev` with your instagram username):
```html
<instagram-widget username="@ptkdev" grid="3x3"></instagram-widget>
```

Demo: https://webcomponents-60bc6.firebaseapp.com/instagram-widget

Go to `examples/angular` and run `yarn install` then `yarn start` in folder for more info. Below is available a description of `options` values.

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
| shadows | Show shadows css | `type1`, `type2`, `type3`, `disabled` | `disabled` | v2.6.0 |
| mouse-hover | Show animation with mouse hover | `type1`, `disabled` | `disabled` | v2.6.0 |
| show-title | Show alt/title with hover of mouse | `enabled` / `disabled` | `enabled` | v2.6.0 |
| cache | Enable/disable cache | `enabled` / `disabled` | `enabled` | v2.1.0 |

#### HTML Code with attributes:
```html
<instagram-widget username="@ptkdev" grid="3x3" force-square="yes" items-limit="9" image-width="100%" image-height="100%" border-corners="5" border-spacing="2px"></instagram-widget>
```

## 🎨 CSS Customization
You can overwrite default css with selector `::part`, example:

```html
<style>
	instagram-widget::part(photo) {
		border: 2px solid red;
	}
</style>
```

Part attribute is, generally, suffix of a class. Use chrome inspector for get the correct value of `part=""` attributes. See [MDN selector ::part docs](https://developer.mozilla.org/en-US/docs/Web/CSS/::part).

## 🔨 Developer Mode
1. Download [nightly](https://github.com/ptkdev-components/webcomponent-instagram-widget/archive/nightly.zip), [beta](https://github.com/ptkdev-components/webcomponent-instagram-widget/archive/beta.zip) or [stable](https://github.com/ptkdev-components/webcomponent-instagram-widget/archive/master.zip).
2. Remove `.tpl` suffix from `config.js.tpl` file in `configs` folder and fill it properly.
3. Run `npm install`
4. Run `npm run dev`

## 📚 Documentation
Run `npm run docs`

## 👑 Sponsors
Support this project by becoming a sponsor. 🙏 Become a sponsor on [patreon](https://www.patreon.com/join/ptkdev) or become top3 sponsor on [ko-fi](https://ko-fi.com/ptkdev). Your logo will show up here with a link to your website.

[![](https://api.ptkdev.io/backers/sponsor1.png?)](https://api.ptkdev.io/backers/sponsor1.html) [![](https://api.ptkdev.io/backers/sponsor2.png?)](https://api.ptkdev.io/backers/sponsor2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi1.png?)](https://api.ptkdev.io/backers/sponsor-kofi1.html) [![](https://api.ptkdev.io/backers/sponsor-kofi2.png?)](https://api.ptkdev.io/backers/sponsor-kofi2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi3.png?)](https://api.ptkdev.io/backers/sponsor-kofi3.html) [![](https://api.ptkdev.io/backers/sponsor3.png?)](https://api.ptkdev.io/backers/sponsor3.html) [![](https://api.ptkdev.io/backers/sponsor4.png?)](https://api.ptkdev.io/backers/sponsor4.html) [![](https://api.ptkdev.io/backers/sponsor5.png?)](https://api.ptkdev.io/backers/sponsor5.html) [![](https://api.ptkdev.io/backers/sponsor6.png?)](https://api.ptkdev.io/backers/sponsor6.html) [![](https://api.ptkdev.io/backers/sponsor7.png?)](https://api.ptkdev.io/backers/sponsor7.html) [![](https://api.ptkdev.io/backers/sponsor8.png?)](https://api.ptkdev.io/backers/sponsor8.html) [![](https://api.ptkdev.io/backers/sponsor9.png?)](https://api.ptkdev.io/backers/sponsor9.html) [![](https://api.ptkdev.io/backers/sponsor10.png?)](https://api.ptkdev.io/backers/sponsor10.html) [![](https://api.ptkdev.io/backers/sponsor11.png?)](https://api.ptkdev.io/backers/sponsor11.html) [![](https://api.ptkdev.io/backers/sponsor12.png?)](https://api.ptkdev.io/backers/sponsor12.html) [![](https://api.ptkdev.io/backers/sponsor13.png?)](https://api.ptkdev.io/backers/sponsor13.html) [![](https://api.ptkdev.io/backers/sponsor14.png?)](https://api.ptkdev.io/backers/sponsor14.html) [![](https://api.ptkdev.io/backers/sponsor15.png?)](https://api.ptkdev.io/backers/sponsor15.html)

## 🦄 Backers
Thank you to all our backers! 🙏 Become a backer on [patreon](https://www.patreon.com/join/ptkdev).

[![](https://api.ptkdev.io/backers/backer1.png?)](https://api.ptkdev.io/backers/backer1.html) [![](https://api.ptkdev.io/backers/backer2.png?)](https://api.ptkdev.io/backers/backer2.html) [![](https://api.ptkdev.io/backers/backer3.png?)](https://api.ptkdev.io/backers/backer3.html) [![](https://api.ptkdev.io/backers/backer4.png?)](https://api.ptkdev.io/backers/backer4.html) [![](https://api.ptkdev.io/backers/backer5.png?)](https://api.ptkdev.io/backers/backer5.html) [![](https://api.ptkdev.io/backers/backer6.png?)](https://api.ptkdev.io/backers/backer6.html) [![](https://api.ptkdev.io/backers/backer7.png?)](https://api.ptkdev.io/backers/backer7.html) [![](https://api.ptkdev.io/backers/backer8.png?)](https://api.ptkdev.io/backers/backer8.html) [![](https://api.ptkdev.io/backers/backer9.png?)](https://api.ptkdev.io/backers/backer9.html) [![](https://api.ptkdev.io/backers/backer10.png?)](https://api.ptkdev.io/backers/backer10.html) [![](https://api.ptkdev.io/backers/backer11.png?)](https://api.ptkdev.io/backers/backer11.html) [![](https://api.ptkdev.io/backers/backer12.png?)](https://api.ptkdev.io/backers/backer12.html) [![](https://api.ptkdev.io/backers/backer13.png?)](https://api.ptkdev.io/backers/backer13.html) [![](https://api.ptkdev.io/backers/backer14.png?)](https://api.ptkdev.io/backers/backer14.html) [![](https://api.ptkdev.io/backers/backer15.png?)](https://api.ptkdev.io/backers/backer15.html)

## 👨‍💻 Contributing
I ❤️ contributions! I will happily accept your pull request! Translations, grammatical corrections (GrammarNazi you are welcome! Yes my English is bad, sorry), etc... Do not be afraid, if the code is not perfect we will work together 👯 and remember to insert your name in `.all-contributorsrc` and `package.json` file.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://ptk.dev"><img src="https://avatars1.githubusercontent.com/u/442844?v=4" width="100px;" alt=""/><br /><sub><b>Patryk Rzucidło</b></sub></a><br /><a href="https://github.com/ptkdev/ptkdev-components/webcomponent-instagram-widget/commits?author=ptkdev" title="Code">💻</a> <a href="#translation-ptkdev" title="Translation">🌍</a> <a href="https://github.com/ptkdev/ptkdev-components/webcomponent-instagram-widget/commits?author=ptkdev" title="Documentation">📖</a> <a href="https://github.com/ptkdev/ptkdev-components/webcomponent-instagram-widget/issues?q=author%3Aptkdev" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/emanuelefricano93"><img src="https://avatars1.githubusercontent.com/u/26500344?v=4" width="100px;" alt=""/><br /><sub><b>Emanuele Fricano</b></sub></a><br /><a href="https://github.com/ptkdev/ptkdev-components/webcomponent-instagram-widget/commits?author=emanuelefricano93" title="Code">💻</a> <a href="https://github.com/ptkdev/ptkdev-components/webcomponent-instagram-widget/issues?q=author%3Aemanuelefricano93" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/smalluban"><img src="https://avatars1.githubusercontent.com/u/1906677?v=4" width="100px;" alt=""/><br /><sub><b>Dominik Lubański</b></sub></a><br /><a href="https://github.com/ptkdev/ptkdev-components/webcomponent-instagram-widget/issues?q=author%3Asmalluban" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

> 💰 In the future, if the donations allow it, I would like to share some of the success with those who helped me the most. For me open source is share of code, share development knowledges and share donations!

## 📲 Tools
[![](https://img.shields.io/badge/portfolio-ptkdev-000000.svg)](https://ptk.dev/)
[![](https://img.shields.io/badge/app-meingifs-E1215B.svg)](https://meingifs.pics/)
[![](https://img.shields.io/badge/stickers-ptkdev-128C7E.svg)](https://stickers.ptkdev.io/)

[![](https://img.shields.io/badge/app-social%20manager%20tools-ff7f19.svg)](http://github.com/ptkdev-components/webcomponent-instagram-widget/)
[![](https://img.shields.io/badge/api-instagram%20bot-895a4d.svg)](https://github.com/ptkdev-components/webcomponent-instagram-widget)
[![](https://img.shields.io/badge/api-twitter%20bot-21B7F4.svg)](https://github.com/social-manager-tools/socialmanagertools-twbot)
[![](https://img.shields.io/badge/api-facebook%20bot-3b5998.svg)](https://github.com/social-manager-tools/socialmanagertools-fbbot)
[![](https://img.shields.io/badge/telegram%20bot-feed%20rss%20for%20wordpress%20&amp;%20medium-00AB6C.svg)](https://github.com/social-manager-tools/socialmanagertools-tgbot)

## 🐍 Sorry for snake_case
I love snake_case syntax sorry for this 😭 don't hate me.

## 💫 License
* Code and Contributions have **MIT License**
* Images and logos have **CC BY-NC 4.0 License** ([Freepik](https://it.freepik.com/) Premium License)
* Documentations and Translations have **CC BY 4.0 License**

###### Copyleft (c) 2020 [Patryk Rzucidło](https://ptk.dev) ([@PTKDev](https://twitter.com/ptkdev)) <[support@ptkdev.io](mailto:support@ptkdev.io)>
