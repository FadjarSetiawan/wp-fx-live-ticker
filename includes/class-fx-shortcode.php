<?php

class FX_Market_Shortcode {

    public function __construct() {
        add_shortcode( 'fx_market_live', array( $this, 'render_shortcode' ) );
    }

    /**
     * Render Shortcode dan Enqueue Script
     */
    public function render_shortcode( $atts ) {
        // Enqueue script hanya saat shortcode dipanggil
        $this->enqueue_scripts();

        // Render div container di mana React akan menempel (Mount)
        return '<div id="fx-market-root">Loading Market Data...</div>';
    }

    /**
     * Load React Build Files
     */
    public function enqueue_scripts() {
        // Path ke file build (hasil compile)
        $build_dir = plugin_dir_path( __DIR__ ) . 'build';
        $build_url = plugin_dir_url( __DIR__ ) . 'build';

        // @wordpress/scripts otomatis membuat file asset.php yang berisi dependencies & version
        $asset_file = include( $build_dir . '/index.asset.php' );

        // Jika file asset tidak ada (belum di-build), stop.
        if ( ! file_exists( $build_dir . '/index.asset.php' ) ) {
            return;
        }

        wp_enqueue_script(
            'fx-market-js',
            $build_url . '/index.js',
            $asset_file['dependencies'], // Otomatis load wp-element (React)
            $asset_file['version'],
            true // Load di footer
        );
        
        // (Opsional) Load CSS jika ada
        wp_enqueue_style(
            'fx-market-css',
            $build_url . '/index.css',
            array(),
            $asset_file['version']
        );
    }
}