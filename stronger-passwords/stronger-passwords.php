<?php
/**
 * @package Stronger Passwords
 * @version 1.0
 */
/*
Plugin Name: Stronger Passwords
Plugin URI: http://wordpress.org/plugins/
Description: Stronger Passwords
Author: Adam Silverstein
Version: 1.0
*/

function stronger_passwords() {

	// Only enforce for admin users.
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	// Only if the user-profile script is enqueued.
	if ( ! wp_script_is( 'user-profile', 'enqueued' ) ) {
		return;
	}

	wp_enqueue_script( 'stronger-passwords',  plugins_url( 'stronger-passwords.js', __FILE__ ), array( 'user-profile' ), true );
}
add_action( 'admin_enqueue_scripts', 'stronger_passwords', 11 );

