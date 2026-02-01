<?php
/**
 * Plugin Name: FX Market Live Ticker
 * Description: Live Crypto/Forex Ticker menggunakan React & TypeScript. Built for FXGT Demo.
 * Version: 1.0.0
 * Author: Calon Developer FXGT
 * Author URI: https://github.com/username/wp-fx-live-ticker
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Load Class Shortcode
require_once plugin_dir_path( __FILE__ ) . 'includes/class-fx-shortcode.php';

// Inisialisasi Class
function run_fx_market_ticker() {
    $plugin = new FX_Market_Shortcode();
}
run_fx_market_ticker();