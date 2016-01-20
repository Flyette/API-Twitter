#INTEGRATION RESEAUX SOCIAUX

##En Widget

Liens pour les widget

http://www.carrementplus.net/2013/04/23/comment-integrer-facebook-twitter-google-pinterest-instagral-ou-linkedin-sur-un-blogue-ou-un-site/

Carrément plus net

Comment intégrer Facebook, Twitter, Google+, Pinterest, Instagram ou LinkedIn sur un blogue ou un site
De nombreuses entreprises souhaitent centraliser leurs présences sur les médias sociaux en un lieu unique, comme le site corporatif ou le blogue. Il existe deux types de présences, soit au travers d’un flux d’actualité partagé, comme ses derniers tweets, soit par un badge indiquant simplement la possibilité de s’abonner au profil. Tous les médias sociaux […]
créer le lien pour le widget Allez cliquer sur ce lien : 

https://twitter.com/settings/widgets

une fois le Widget créé à votre goût (aperçu instantané des modifications dans la colonne de droite) cliquer sur « créer un widget », un code html apparaît. Il est déjà surligné (sélectionné) donc vous n’avez plus qu’à faire « Ctrl. C »  pour le copier et aller l’intégrer dans votre site ou votre blog.


##en API

####LinkedIn

Aller sur https://developer.linkedin.com/plugins pour avoir les codes des differénts plugins. Choisir celui que nous préférons et l'associer à son compte en se connectant.
Choix possible:

-Share
-Follow Company: Bouton simple

-Member Profile: bouton + nom

-Company Profile: badge avec phot et récap + les "vu par..."

-Company Insider

-Jobs You Might Be Interested In

-Alumni Tool

recuperer les données:

https://translate.googleusercontent.com/translate_c?depth=1&hl=fr&ie=UTF8&prev=_t&rurl=translate.google.fr&sl=en&tl=fr&u=https://developer.linkedin.com/docs/getting-started-js-sdk&usg=ALkJrhhKReU91VTIvzd2McQPVvYj0uADSQ#initialize

####Facebook

Pour intégrer sa page plugin Facebook aller sur:

https://developers.facebook.com/docs/plugins/page-plugin/

Puis copier le code HTML en appuyant sur "get code" pour l'intégrer ensuite.


##Pour charger le framework SDK.js si ca marche pas :

lorsqu'on récupère le code si le framework SDK.js ne se charge pas entrer l'adresse en entier: 
js.src = "https://connect.facebook.net/en_US/sdk.js";
