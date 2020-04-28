/**
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
		template.innerHTML = `<style id="instagram-widget-style">{% include 'css/main.css' %}</style>{% include 'main.html' %}`;

		this.attachShadow({mode: "open"});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

		/**
		 * Get Photos from fetch request
		 * =====================
		 *
		 */
		api_fetch() {
			let self = this;
			fetch(`https://www.instagram.com/${this.getAttribute("username").replace("@", "")}/`).then(function(response) {
				if (response.status === 200) {
					return response.text();
				}
			}).then(function(response) {
				const instagram_regex = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/);
				let json = JSON.parse(response.match(instagram_regex)[1]);
				let data = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 9);

				const photos = data.map(({node}) => {
					return {
						url: `https://www.instagram.com/p/${node.shortcode}/`,
						thumbnail: node.thumbnail_src,
						display_url: node.display_url !== undefined ? node.display_url : "",
						caption: node.edge_media_to_caption.edges[0] &&
							node.edge_media_to_caption.edges[0].node.text !== undefined ? node.edge_media_to_caption.edges[0].node.text : ""
					};
				});

				let html = "";
				for (let i = 0; i < photos.length && i < self.getAttribute("items-limit"); i++) {
					html += `<a href="${photos[i].url}" rel="nofollow external noopener noreferrer" target="_blank" title="${photos[i].caption.substring(0, 100).replace(/"/g, "")}"><img width="${self.getAttribute("image-width")}" height="${self.getAttribute("image-height")}" src="${photos[i].display_url}" alt="${photos[i].caption.substring(0, 100).replace(/"/g, "")}" loading="lazy" /></a> `;
				}
				document.querySelector("ptkdev-instagram-widget").shadowRoot.querySelector(".instagram-widget-photos").innerHTML = html;

				if (self.getAttribute("grid") !== "" && self.getAttribute("grid") !== "responsive") {
					let grid = self.getAttribute("grid").split("x");
					let width = 100 / parseInt(grid);
					let images = document.querySelector("ptkdev-instagram-widget").shadowRoot.querySelectorAll(".instagram-widget-photos img");
					for (let i=0; i < images.length; i++) {
						images[i].setAttribute("width", `${(width - 1)}%`);
						images[i].style.maxWidth = "none";
						images[i].style.maxHeight = "none";
					}
				}
			});

			let html = "";
			for (let i = 0; i < photos.length && i < self.getAttribute("items-limit"); i++) {
				html += `<a href="${photos[i].url}" rel="nofollow external noopener noreferrer" target="_blank" title="${photos[i].caption.substring(0, 100).replace(/"/g, "")}"><img width="${self.getAttribute("image-width")}" height="${self.getAttribute("image-height")}" src="${photos[i].display_url}" alt="${photos[i].caption.substring(0, 100).replace(/"/g, "")}" loading="lazy" /></a> `;
			}
			document.querySelector("instagram-widget").shadowRoot.querySelector(".instagram-widget-photos").innerHTML = html;

			if (self.getAttribute("grid") !== "" && self.getAttribute("grid") !== "responsive") {
				let grid = self.getAttribute("grid").split("x");
				let width = 100 / parseInt(grid[0]);
				let images = document.querySelector("instagram-widget").shadowRoot.querySelectorAll(".instagram-widget-photos img");
				for (let i=0; i < images.length; i++) {
					images[i].setAttribute("width", `${(width - 1)}%`);
					images[i].style.maxWidth = "none";
					images[i].style.maxHeight = "none";
				}
			}
		});
	}

	/**
	 * Mount web component
	 * =====================
	 *
	 */
	connectedCallback() {
		if (!this.hasAttribute("username")) {
			this.setAttribute("username", "@ptkdev");
		}
		if (!this.hasAttribute("items-limit")) {
			this.setAttribute("items-limit", 9);
		}
		if (!this.hasAttribute("image-width")) {
			this.setAttribute("image-width", "100%");
		}
		if (!this.hasAttribute("image-height")) {
			this.setAttribute("image-height", "100%");
		}
		if (!this.hasAttribute("grid")) {
			this.setAttribute("grid", "responsive");
		}

		this.api_fetch();
	}

	static get observedAttributes() {
		return ["username", "items-limit", "grid", "image-width", "image-height"];
	}

	attributeChangedCallback(name_attribute, old_vale, new_value) {
		if (this.getAttribute(name_attribute) !== new_value) {
			this.api_fetch();
		}
	}

	get username() {
		return this.getAttribute("username");
	}

	set username(new_value) {
		this.setAttribute("username", new_value);
	}

	get items_limit() {
		return this.getAttribute("items-limit");
	}

	set items_limit(new_value) {
		this.setAttribute("items-limit", new_value);
	}

	get image_width() {
		return this.getAttribute("image-width");
	}

	set image_height(new_value) {
		this.setAttribute("image-height", new_value);
	}
}

window.customElements.define("instagram-widget", InstagramWidget);
