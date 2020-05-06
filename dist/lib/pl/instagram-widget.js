// WebComponent: InstagramWidget 2.6.0-nightly.20200506 - Collection of WebComponents by Patryk Rzucidlo [@PTKDev] <support@ptkdev.io>
// https://github.com/ptkdev-components/webcomponent-instagram-widget
(function() { /**
 * InstagramWidget WebComponent
 * =====================
 * Simple Instagram Widget: Photos Box of your Instagram Profile for your blog or website with this WebComponent.
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
		template.innerHTML = `<style id="instagram-widget-style">#instagram-widget *{margin:0;padding:0;line-height:0}#instagram-widget .instagram-widget-container{text-align:center;justify-content:center;font-weight:500}#instagram-widget .instagram-widget-photos li img{border-radius:5%;background-color:#f8f8ff;object-fit:cover;object-position:50% 50%;max-width:300px;max-height:300px;min-width:80px;min-height:80px;margin:2px}#instagram-widget .instagram-content ul{list-style-type:none;padding-inline-start:0;width:100%}#instagram-widget .instagram-widget-photos li{list-style-type:none;display:inline}</style><div id="instagram-widget" version="2.6.0-nightly.20200506">
	<div class="instagram-widget-container">
		<div class="instagram-widget-content">
			<ul class="instagram-widget-photos"></ul>
		</div>
	</div>
</div>`;

		this.attachShadow({mode: "open"});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.json = null;
		this.options_default = {
			"username": "@ptkdev",
			"items-limit": "9",
			"image-width": "100%",
			"image-height": "100%",
			"grid": "responsive",
			"cache": "enabled",
			"border-spacing": "2px",
			"border-corners": "5",
			"force-square": "yes"
		};

		this.options = Object.create(this.options_default);

		this.resize_event = function(event) {
			this.resize(event);
		}.bind(this);
	}

	/**
	 * Append web component
	 * =====================
	 *
	 */
	connectedCallback() {
		window.addEventListener("resize", this.resize_event);
	}

	/**
	 * Build HTML grid
	 * =====================
	 *
	 */
	build_html() {
		let data = this.json.graphql.user.edge_owner_to_timeline_media.edges;

		let photos = [];

		for (let i=0; i<data.length; i++) {
			photos.push({
				url: `https://www.instagram.com/p/${data[i].node.shortcode}/`,
				thumbnail: data[i].node.thumbnail_src,
				display_url: data[i].node.display_url !== undefined ? data[i].node.display_url : "",
				caption: data[i].node.edge_media_to_caption.edges[0] &&
				data[i].node.edge_media_to_caption.edges[0].node.text !== undefined ? data[i].node.edge_media_to_caption.edges[0].node.text : ""
			});
		}

		let html = "";
		for (let i = 0; i < photos.length && i < this.options["items-limit"]; i++) {
			html += `<li><a href="${photos[i].url}" rel="nofollow external noopener noreferrer" target="_blank" title="${photos[i].caption.substring(0, 100).replace(/"/g, "")}"><img width="${this.options["image-width"]}" height="${this.options["image-height"]}" src="${photos[i].display_url}" alt="${photos[i].caption.substring(0, 100).replace(/"/g, "")}" loading="lazy" /></a></li>`;
		}
		this.shadowRoot.querySelector(".instagram-widget-photos").innerHTML = html;

		if (this.options["grid"] !== "" && this.options["grid"] !== null && this.options["grid"] !== "responsive") {
			let grid = this.options["grid"].split("x");
			let width = 100 / parseInt(grid[0]);
			let images = this.shadowRoot.querySelectorAll(".instagram-widget-photos img");
			for (let i=0; i < images.length; i++) {
				images[i].removeAttribute("width");
				images[i].style.width = `calc(${(width)}% - (${this.options["border-spacing"]} * (${parseInt(grid[0])} * 2)))`;
				images[i].style.maxWidth = "none";
				images[i].style.maxHeight = "none";
				images[i].style.borderRadius = `${this.options["border-corners"]}%`;
				images[i].style.margin = this.options["border-spacing"];

				if (this.options["force-square"] === "yes") {
					images[i].removeAttribute("height");
					images[i].style.height = `${this.shadowRoot.querySelector(".instagram-widget-photos img").clientWidth}px`;
				}
			}
		} else {
			let images = this.shadowRoot.querySelectorAll(".instagram-widget-photos img");
			for (let i=0; i < images.length; i++) {
				images[i].style.borderRadius = `${this.options["border-corners"]}%`;
				images[i].style.margin = this.options["border-spacing"];

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
		for (let i=0; i < images.length; i++) {
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
	api_fetch() {
		let url = `https://www.instagram.com/${this.options["username"].replace("@", "")}/?__a=1`;
		fetch(url, {"cache": this.options["cache"] === null || this.options["cache"] === "enabled" ? "force-cache" : "default"}).then(function(response) {
			if (response.status === 200) {
				return response.json();
			}
		}).then(function(response) {
			this.json = response;
			this.build_html();
		}.bind(this));
	}

	static get observedAttributes() {
		return ["username", "items-limit", "grid", "image-width", "image-height", "border-spacing", "border-corners", "force-square", "cache"];
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
				  this.api_fetch();
				  break;
				default:
				  if (this.json !== null) {
						this.build_html();
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
		window.removeEventListener("resize", this.resize_event);
	}
}

window.customElements.define("instagram-widget", InstagramWidget);
 })();