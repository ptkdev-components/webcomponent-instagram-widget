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
(function() {
	const template = document.createElement("template");

	template.innerHTML = `<style id="instagram-widget-style">{% include 'css/main.css' %}</style>{% include 'main.html' %}`;

	class InstagramWidget extends HTMLElement {
		constructor() {
			super();

			this.attachShadow({mode: "open"});
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}

		/**
		 * Get Photos from fetch request
		 * =====================
		 *
		 */
		api_fetch() {
			let that = this;
			fetch(`https://www.instagram.com/${this.getAttribute("username").replace("@", "")}/`).then(function(response) {
				if (response.status === 200) {
					return response.text();
				}
			}).then(function(response) {
				const instagram_regex = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/);
				let json = JSON.parse(response.match(instagram_regex)[1]);
				let items_limit = that.getAttribute("items-limit");
				let data = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, items_limit);

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
				for (let i = 0; i < photos.length; i++) {
					html += `<a id= "photo-${i}" href="${photos[i].url}" rel="nofollow external noopener noreferrer" target="_blank" title="${photos[i].caption.substring(0, 100).replace(/"/g, "")}"><img width="150" height="150" src="${photos[i].display_url}" alt="${photos[i].caption.substring(0, 100).replace(/"/g, "")}" class="backer" loading="lazy" /></a> `;
				}
				document.querySelector("ptkdev-instagram-widget").shadowRoot.querySelector(".instagram-widget-photos").innerHTML = html;
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
				this.setAttribute("items-limit", 8);
			}

			this.api_fetch();
		}

		static get observedAttributes() {
			return ["username", "items-limit"];
		}

		attributeChangedCallback(name_attribute, old_vale, new_value) {
			switch (name_attribute) {
				case "username":
					if (this.getAttribute("username") !== new_value) {
						this.api_fetch();
					}
				  break;
				case "items-limit":
					if (old_vale !== new_value) {
						if (new_value < old_vale) {
							this._remove_last_items(old_vale, new_value);
						} else {
							this.api_fetch();
						}
					}
				  break;	
				default:
			  }

		}
		
		_remove_last_items(min_index, max_index) {
			for (let i = min_index; i < max_index; i = i + 1) {
			  const elem = this._shadowRoot.querySelector("#photo-${i}");
			  elem.parentNode.removeChild(elem);
			}
		}

		get username() {
			return this.getAttribute("username");
		}

		set username(new_value) {
			this.setAttribute("username", new_value);
		}
		
		get itemsLimit() {
			return this.getAttribute("items-limit");
		}

		set itemsLimit(new_value) {
			this.setAttribute("items-limit", new_value);
		}
	}

	window.customElements.define("ptkdev-instagram-widget", InstagramWidget);
})();