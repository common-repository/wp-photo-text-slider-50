<?php

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit();
}

delete_option('wp_50_title');
delete_option('wp_50_direction');
delete_option('wp_50_speed');
delete_option('wp_50_timeout');
delete_option('wp_50_type');
 
// for site options in Multisite
delete_site_option('wp_50_title');
delete_site_option('wp_50_direction');
delete_site_option('wp_50_speed');
delete_site_option('wp_50_timeout');
delete_site_option('wp_50_type');

global $wpdb;
$wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}wp_photo_50");