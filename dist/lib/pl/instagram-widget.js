// WebComponent: InstagramWidget 2.9.0 - Collection of WebComponents by Patryk Rzucidlo [@PTKDev] <support@ptkdev.io>
// https://github.com/ptkdev-components/webcomponent-instagram-widget
(function() { /**
 * InstagramWidget WebComponent
 * =====================
 * Last 9 Photos: Instagram Widget of your Instagram Profile for your blog. Show latest 9 pics from your instagram account. (Unofficial Instagram Widget)
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
class InstagramWidget extends HTMLElement {
	constructor() {
		super();

		const template = document.createElement("template");
		template.innerHTML = `<style id="instagram-widget-style" part="style">#instagram-widget *{margin:0;padding:0;line-height:0}#instagram-widget .instagram-widget-container{text-align:center;justify-content:center;font-weight:500}#instagram-widget .instagram-widget-photos li img{border-radius:5%;background-color:#f8f8ff;object-fit:cover;object-position:50% 50%;max-width:300px;max-height:300px;min-width:80px;min-height:80px;margin:2px}#instagram-widget .instagram-content ul{list-style-type:none;padding-inline-start:0;width:100%}#instagram-widget .instagram-widget-photos li{list-style-type:none;display:inline}#instagram-widget .instagram-widget-error-api,#instagram-widget .instagram-widget-loading,#instagram-widget .instagram-widget-powered,#instagram-widget .instagram-widget-support{font-family:monospace,sans-serif;font-weight:600;padding-top:20px;height:100%;background:linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:normal!important}#instagram-widget a.instagram-widget-href::before{content:'';position:absolute;left:50%;bottom:-2px;width:100%;height:1px;background-color:#fc2f70;transform-origin:center;transform:translate(-50%,0) scaleX(1);transition:transform .3s ease-in-out}#instagram-widget a.instagram-widget-href:hover::before{transform:translate(-50%,0) scaleX(0)}#instagram-widget a.instagram-widget-href{position:relative;background:linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:3px}#instagram-widget .instagram-widget-powered,#instagram-widget .instagram-widget-support{font-size:xx-small}#instagram-widget .instagram-widget-spinner{display:block;transform:translate -50%,-50%;width:50px;height:50px;margin:0 auto}#instagram-widget .instagram-widget-svg{animation:2s linear infinite instagram-widget-svg-animation;max-width:100px}#instagram-widget .instagram-widget-circle{animation:1.4s ease-in-out infinite both instagram-widget-circle-animation;display:block;fill:transparent;stroke:url(#instagram-widget-gradient);stroke-linecap:round;stroke-dasharray:283;stroke-dashoffset:280;stroke-width:8px;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%}@keyframes instagram-widget-svg-animation{0%{transform:rotateZ(0)}100%{transform:rotateZ(360deg)}}@-webkit-keyframes instagram-widget-circle-animation{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}@keyframes instagram-widget-circle-animation{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}</style><div id="instagram-widget" part="main" version="2.9.0">
	<div class="instagram-widget-container" part="container">
		<div class="instagram-widget-content" part="content"></div>
		<div class="instagram-widget-content-loading" part="content-loading" style="display: block">
			<div class="instagram-widget-spinner">
				<svg class="instagram-widget-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient id="instagram-widget-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stop-color="#f09433" />
							<stop offset="20%" stop-color="#e6683c" />
							<stop offset="50%" stop-color="#dc2743" />
							<stop offset="80%" stop-color="#cc2366" />
							<stop offset="100%" stop-color="#bc1888" />
						</linearGradient>
					</defs>
					<circle class="instagram-widget-circle" cx="50" cy="50" r="45" />
				</svg>
			</div>
			<div class="instagram-widget-loading">ładowanie widżetu instagram...</div>
			<div class="instagram-widget-powered"><a class="instagram-widget-href" target="_blank" href="https://github.com/ptkdev-components/webcomponent-instagram-widget">opensource webcomponent</a> powered by <a class="instagram-widget-href" target="_blank" href="https://ptk.dev">@ptkdev</a></div>
		</div>
		<div class="instagram-widget-content-fetch-error" part="content-fetch-error" style="display: none">
			<div class="instagram-widget-spinner">
				<svg width="100%" height="100%" viewBox="0 0 200 200">
					<defs>
						<linearGradient id="instagram-logo-gradient1" x1=".8" y1=".8" x2="0">
							<stop offset="0" stop-color="#f09433" />
							<stop offset="1" stop-color="#bc1888" />
						</linearGradient>
						<radialGradient id="instagram-logo-gradient2" cx=".2" cy="1" r="1.2">
							<stop offset="0" stop-color="#f09433" />
							<stop offset=".1" stop-color="#e6683c" />
							<stop offset=".25" stop-color="#dc2743" />
							<stop offset=".35" stop-color="#cc2366" />
							<stop offset=".65" stop-color="#bc1888" stop-opacity="0" />
						</radialGradient>
						<rect id="instagram-logo-container" x="0" y="0" width="200" height="200" rx="50" ry="50" />
					</defs>
					<use xlink:href="#instagram-logo-container" fill="url(#instagram-logo-gradient1)" />
					<use xlink:href="#instagram-logo-container" fill="url(#instagram-logo-gradient2)" />
					<rect x="35" y="35" width="130" height="130" rx="30" ry="30" fill="none" stroke="#fff" stroke-width="13" />
					<circle cx="100" cy="100" r="32" fill="none" stroke="#fff" stroke-width="13" />
					<circle cx="140" cy="62" r="9" fill="#fff" />
				</svg>
			</div>
			<div class="instagram-widget-error-api">błąd podczas pobierania obrazów...</div>
			<div class="instagram-widget-support">sprawdź, czy Twój profil na Instagramie jest publiczny, nie używaj VPN, być może osiągnąłeś dzienny limit API Instagram dla swojego adresu IP: spróbuj ponownie za 48h lub otwórz <a class="instagram-widget-href" target="_blank" href="https://github.com/ptkdev-components/webcomponent-instagram-widget/issues">nowy raport</a> o błędzie na github</div>
			<div class="instagram-widget-powered"><a class="instagram-widget-href" target="_blank" href="https://github.com/ptkdev-components/webcomponent-instagram-widget">opensource webcomponent</a> powered by <a class="instagram-widget-href" target="_blank" href="https://ptk.dev">@ptkdev</a></div>
		</div>
	</div>
</div>
`;

		this.attachShadow({mode: "open"});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.json = null;
		this.options_default = {
			username: "@ptkdev",
			"items-limit": "9",
			"image-width": "100%",
			"image-height": "100%",
			grid: "responsive",
			cache: "enabled",
			"border-spacing": "2px",
			"border-corners": "5",
			"force-square": "yes",
			shadows: "disabled",
			"mouse-hover": "disabled",
			"show-title": "enabled",
		};

		this.options = Object.create(this.options_default);

		this.resizeAction = function(event) {
			this.resize(event);
		}.bind(this);
	}

	/**
	 * Append web component
	 * =====================
	 *
	 */
	connectedCallback() {
		window.addEventListener("resize", this.resizeAction);
	}

	/**
	 * Build HTML grid
	 * =====================
	 *
	 */
	buildHTML() {
		let data = this.json.graphql.user.edge_owner_to_timeline_media.edges;

		let photos = [];

		for (let i = 0; i < data.length; i++) {
			photos.push({
				url: `https://www.instagram.com/p/${data[i].node.shortcode}/`,
				thumbnail: data[i].node.thumbnail_src,
				display_url: data[i].node.display_url !== undefined ? data[i].node.display_url : "",
				caption:
					data[i].node.edge_media_to_caption.edges[0] && data[i].node.edge_media_to_caption.edges[0].node.text !== undefined
						? data[i].node.edge_media_to_caption.edges[0].node.text
						: "",
			});
		}

		let html = "";
		for (let i = 0; i < photos.length && i < this.options["items-limit"]; i++) {
			html += `<li class="instagram-widget-li" part="li li-${i}"><a href="${
				photos[i].url
			}" rel="nofollow external noopener noreferrer" target="_blank" title="${
				this.options["show-title"] === "enabled" ? photos[i].caption.substring(0, 100).replace(/"/g, "") : ""
			}" class="instagram-widget-link" part="link link-${i}"><img width="${this.options["image-width"]}" height="${
				this.options["image-height"]
			}" src="${photos[i].display_url}" alt="${
				this.options["show-title"] === "enabled" ? photos[i].caption.substring(0, 100).replace(/"/g, "") : ""
			}" loading="lazy" class="instagram-widget-photo" part="photo photo-${i}" /></a></li>`;
		}

		this.shadowRoot.querySelector(".instagram-widget-content").innerHTML = `<ul class="instagram-widget-photos" part="photos">${html}</ul>`;

		this.shadowRoot.querySelector(".instagram-widget-content-loading").style.display = "none";
		this.shadowRoot.querySelector(".instagram-widget-content-fetch-error").style.display = "none";
		this.shadowRoot.querySelector(".instagram-widget-content").style.display = "block";

		switch (this.options["mouse-hover"]) {
			case "type1":
				this.shadowRoot.querySelector("#instagram-widget-style").innerHTML = `${
					this.shadowRoot.querySelector("#instagram-widget-style").innerHTML
				}
				#instagram-widget .instagram-widget-photo{transition: opacity 0.3s ease-in-out;}
				#instagram-widget .instagram-widget-photo:hover{opacity: 0.70;}`;
				break;

			default:
				break;
		}

		if (this.options["grid"] !== "" && this.options["grid"] !== null && this.options["grid"] !== "responsive") {
			let grid = this.options["grid"].split("x");
			let width = 100 / parseInt(grid[0]);
			let images = this.shadowRoot.querySelectorAll(".instagram-widget-photos img");
			for (let i = 0; i < images.length; i++) {
				images[i].removeAttribute("width");
				images[i].style.width = `calc(${width}% - (${this.options["border-spacing"]} * (${parseInt(grid[0])} * 2)))`;
				images[i].style.maxWidth = "none";
				images[i].style.maxHeight = "none";
				images[i].style.borderRadius = `${this.options["border-corners"]}%`;
				images[i].style.margin = this.options["border-spacing"];

				switch (this.options["shadows"]) {
					case "type1":
						images[i].style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
						break;

					case "type2":
						images[i].style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
						break;

					case "type3":
						images[i].style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)";
						break;

					default:
						break;
				}

				if (this.options["force-square"] === "yes") {
					images[i].removeAttribute("height");
					images[i].style.height = `${this.shadowRoot.querySelector(".instagram-widget-photos img").clientWidth}px`;
				}
			}
		} else {
			let images = this.shadowRoot.querySelectorAll(".instagram-widget-photos img");
			for (let i = 0; i < images.length; i++) {
				images[i].style.borderRadius = `${this.options["border-corners"]}%`;
				images[i].style.margin = this.options["border-spacing"];

				switch (this.options["shadows"]) {
					case "type1":
						images[i].style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
						break;

					case "type2":
						images[i].style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
						break;

					case "type3":
						images[i].style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)";
						break;

					default:
						break;
				}

				if (this.options["force-square"] === "yes") {
					images[i].removeAttribute("height");
					images[i].style.maxHeight = "none";
					images[i].style.height = `${this.shadowRoot.querySelector(".instagram-widget-photos img").clientWidth}px`;
				}
			}
		}
	}

	/**
	 * Fix responsive
	 * =====================
	 *
	 */
	resize() {
		let images = this.shadowRoot.querySelectorAll(".instagram-widget-photos img");
		for (let i = 0; i < images.length; i++) {
			if (this.options["force-square"] === "yes") {
				images[i].style.height = `${this.shadowRoot.querySelector(".instagram-widget-photos img").clientWidth}px`;
			}
		}
	}

	/**
	 * Get Photos from fetch request
	 * =====================
	 *
	 */
	apiFetch() {
		this.options["username"] = this.options["username"].replace("@", "");
		// let url = `https://www.instagram.com/${this.options["username"]}/?__a=1`; // fuck you instagram and CORS
		let url =  `https://images${~~(Math.random() * 3333)}-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=${encodeURI(`https://www.instagram.com/${this.options["username"]}`)}`;

		fetch(url, {
			method: "GET", mode: "cors", redirect: "follow", cache: this.options["cache"] === null || this.options["cache"] === "enabled" ? "force-cache" : "default",
		})
			.then(function(response) {
				return response.text();
			})
			.then(
				function(response) {
					// this.json = response;
					this.json = JSON.parse(response.match(new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/))[1]).entry_data.ProfilePage[0];
					window.localStorage.setItem(`instagram-widget-json-${this.options["username"]}`, JSON.stringify(this.json));
					this.buildHTML();
				}.bind(this),
			)
			.catch(
				function() {
					if (
						window.localStorage.getItem(`instagram-widget-json-${this.options["username"]}`) != null &&
						window.localStorage.getItem(`instagram-widget-json-${this.options["username"]}`) != ""
					) {
						try {
							this.json = JSON.parse(window.localStorage.getItem(`instagram-widget-json-${this.options["username"]}`));
							this.buildHTML();
						} catch {
							this.shadowRoot.querySelector(".instagram-widget-content").style.display = "none";
							this.shadowRoot.querySelector(".instagram-widget-content-loading").style.display = "none";
							this.shadowRoot.querySelector(".instagram-widget-content-fetch-error").style.display = "block";
						}
					} else {
						this.shadowRoot.querySelector(".instagram-widget-content").style.display = "none";
						this.shadowRoot.querySelector(".instagram-widget-content-loading").style.display = "none";
						this.shadowRoot.querySelector(".instagram-widget-content-fetch-error").style.display = "block";
					}
				}.bind(this),
			);
	}

	static get observedAttributes() {
		return [
			"username",
			"items-limit",
			"grid",
			"image-width",
			"image-height",
			"border-spacing",
			"border-corners",
			"force-square",
			"mouse-hover",
			"shadows",
			"show-title",
			"cache",
		];
	}

	attributeChangedCallback(name_attribute, old_vale, new_value) {
		if (old_vale !== new_value) {
			if (new_value === null || new_value === "") {
				this.options[name_attribute] = this.options_default[name_attribute];
			} else {
				this.options[name_attribute] = new_value;
			}

			switch (name_attribute) {
				case "username":
					this.shadowRoot.querySelector(".instagram-widget-content").style.display = "none";
					this.shadowRoot.querySelector(".instagram-widget-content-loading").style.display = "block";
					this.shadowRoot.querySelector(".instagram-widget-content-fetch-error").style.display = "none";
					this.apiFetch();
					break;
				default:
					if (this.json !== null) {
						this.buildHTML();
					}
			}
		}
	}

	/**
	 * Remove web component
	 * =====================
	 *
	 */
	disconnectedCallback() {
		window.removeEventListener("resize", this.resizeAction);
	}
}

window.customElements.define("instagram-widget", InstagramWidget);
 })();