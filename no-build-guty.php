<?php
/**
 * Plugin Name: No Build Blocks
 * Description: Examples of blocks with no build step
 * Version: 1.0.0
 * Author: Jim Schofield
 * Text Domain: no-build-blocks
 * Domain Path: /languages
 *
 * @package no-build-blocks
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
 
/**
 * Enqueue block JavaScript and CSS for the editor
 */
function no_build_blocks_plugin_editor_scripts() {
 
    // Register htm example
    wp_register_script(
        'no-build-blocks/editor-script1',
        plugins_url( 'test-block-with-htm.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'test-block-with-htm.js' ) 
    );

    // Register vanilla example
    wp_register_script(
        'no-build-blocks/editor-script2',
        plugins_url( 'test-block-vanilla.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'test-block-vanilla.js' ) 
    );

    // Register bio vanilla example
    wp_register_script(
        'no-build-blocks/editor-script3',
        plugins_url( 'bio-vanilla.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'bio-vanilla.js' ) 
    );
 
    // Enqueue block editor styles
    wp_register_style(
        'no-build-blocks/stylesheet',
        plugins_url( 'style.css', __FILE__ ),
        [ 'wp-edit-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' ) 
    );
    register_block_type('no-build-blocks/block-library', array(
        'editor_script' => [
            'no-build-blocks/editor-script1',
            'no-build-blocks/editor-script2',
            'no-build-blocks/editor-script3',
        ],
        'style' => 'no-build-blocks/stylesheet'   
    ));
 
}
// Hook the enqueue functions into the editor
add_action( 'init', 'no_build_blocks_plugin_editor_scripts' );


function htm_editor_script() {
    //Add htm to be available on the window!
	wp_enqueue_script(
		'htm',
		plugins_url( '/node_modules/htm/dist/htm.js', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . $htm_path )
	);
}
add_action( 'enqueue_block_editor_assets', 'htm_editor_script', 0 );