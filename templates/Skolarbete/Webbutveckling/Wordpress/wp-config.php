<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '22olwe' );

/** Database username */
define( 'DB_USER', '22olwe' );

/** Database password */
define( 'DB_PASSWORD', 'Tjabo_12' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<I[/I+Trdnu9eX3:R]5,vD|*fs~]Dj8,ygznZ&=>};9AsUQ`vw+Ew|GPdMYF>~Qt' );
define( 'SECURE_AUTH_KEY',  'dmGIA[lhY},&eQ_=DFj#FC~-Q4/Wj*_@%iP_~(]C/q)-S5u$v{-**Ep2s1ucCas^' );
define( 'LOGGED_IN_KEY',    'NlDxeC<LOcn#}RP7D1$MYdG39eqy<C4fjDh}|c~9pA+/Vx-+>6dj]=.8QarN7]i!' );
define( 'NONCE_KEY',        'B}z`:<xWN),|B=<l_!8N]00 kbF,E1}<qrQ#vRo.^GOlB:nzYWq:E|VBJD]O(^;N' );
define( 'AUTH_SALT',        'J4:Om(~RXWX+f8`<B;hI&R5|L +nj)s%D=GNQ:;mQ)Zj<Q|++@xbRWg$P!GO+=Ww' );
define( 'SECURE_AUTH_SALT', 'aeZCYQIJW5aZA7=4,vk??WUE<;8Gp!_%g@k<*T9bRsJgmWslX$hD/ ]_Hkr:C}@r' );
define( 'LOGGED_IN_SALT',   'wch^7TV<fbJAU|rsYzc<[UNwG!IE{%DX53(4sM `CGj`%,ri)1%$],h:v&:9co$z' );
define( 'NONCE_SALT',       'z s`qNs^>+SXmjdU$aH158)Y4PPN@ofl{?d%`(LFORu[H>C]:UnbYAMK@.?=!~aR' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_SSIS';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
