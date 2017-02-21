<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'cvWebsite');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', '');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'a]dtR{d8lZ-[_]TY),%;JMV+ttP?Fj5.,xu{hNcA.a*Cj8`<SQh036fK-.Hw&}NR');
define('SECURE_AUTH_KEY',  'UOvd]<@Q=O}p&UT5Jw=40BCXeF(?y >6f7jlv[PpQ(*/,xsvQ4OuA89%EsM89>iq');
define('LOGGED_IN_KEY',    ' s2pd$y_v:~4- 1#T|JuTr(*_DN5EVbs|<>i-9}|#<xa@A6^t$d($i4m,mMOGQ<-');
define('NONCE_KEY',        '+87Pk~?b|$Dj -52FwWJrZimXA]0y01m(n~i+!}6kdlph<*5Z5&KFY~LT#Z@XOv,');
define('AUTH_SALT',        'z1bJ7lD6=FmNRa22,:e-<HCZ_B?IR,^6XJ:Z!n}-nqO0p9[uVI x{wG#TVidf~[S');
define('SECURE_AUTH_SALT', 'C5;v0=Ujz+ZIW9j,J>e=Z|`y=G~/O>f<4Yw`s8ZBe $kV+Iw{olQ78K21?.W,I(h');
define('LOGGED_IN_SALT',   'BLt,}6S2(~SVJe5Hi:,E 5Ly;]MG4e]xeC69lW{odGZQ3lUMexMmDqbO;coc3Z~J');
define('NONCE_SALT',       '6J(rmPWD;B^t&?A.+#`x/[L<D`DBj)G!q9(vPjuOOk9O<-s98bK)pW ZM_& Z`?u');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'cvWP_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');