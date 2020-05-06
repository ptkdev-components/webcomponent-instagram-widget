<?php
/*
Plugin Name: Last 9 Photos - WebComponent
Plugin URI:  https://github.com/ptkdev-components/webcomponent-instagram-widget
Description: Instagram Widget of your Instagram Profile for your blog. Show latest 9 pics from your instagram account. (Unofficial Instagram Widget)
Version:     2.6.0-nightly.20200506
Author:      Patryk Rzucidło (@PTKDev)
Author URI:  https://ptk.dev
License:     MIT
License URI: https://github.com/ptkdev-components/webcomponent-instagram-widget/blob/nightly/LICENSE.md
*/

add_action('wp_enqueue_scripts', 'instagram_widget_load');
function instagram_widget_load(){
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

	wp_enqueue_script('instagram-widget', 'https://cdn.jsdelivr.net/npm/@ptkdev/webcomponent-instagram-widget@latest/dist/lib/'.$lang.'/instagram-widget.min.js', array(), false, true);
}

?>