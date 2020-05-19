<?php
/*
Plugin Name: Last 9 Photos - WebComponent
Plugin URI:  https://github.com/ptkdev-components/webcomponent-instagram-widget
Description: Instagram Widget of your Instagram Profile for your blog. Show latest 9 pics from your instagram account.
Version:     {{ package.version }}
Author:      Patryk Rzucidło (@PTKDev)
Author URI:  https://ptk.dev
License:     MIT
License URI: https://github.com/ptkdev-components/webcomponent-instagram-widget/blob/nightly/LICENSE.md
*/
function last_9_photos_webcomponent_load(){
	$lang = "";
	switch (strtolower(substr(get_bloginfo("language"), 0, 2))) {
		case "en":
			$lang = "en";
			break;
		case "it":
			$lang = "it";
			break;
		case "pl":
			$lang = "pl";
			break;
		default:
			$lang = "en";
	}

	wp_enqueue_script("last_9_photos_webcomponent", plugins_url('last-9-photos-webcomponent', dirname(__FILE__))."/js/".$lang."/instagram-widget.min.js", array(), false, true);
}

add_action("wp_enqueue_scripts", "last_9_photos_webcomponent_load");
?>