# Démo visuelle — Oumouna Rassoul Golden

## Version autonome

Les pages suivantes forment le mini-site utilisable dans un navigateur, sans runtime de canevas :

| Fichier | Vue | Fonctionnalités |
|---|---|---|
| `index.html` | Accueil responsive ordinateur et mobile | Hero immersif, raccourcis catégorie, carrousel de produits, blocs éditoriaux, FAQ et fenêtres de contact |
| `produit.html` | Fiche crème pour les mains Balea | Choix parmi 7 versions, galerie synchronisée, quantité et demande de disponibilité |
| `site.css` | Styles partagés | Mise en page responsive, animations réduites selon la préférence système |
| `site.js` | Données et interactions | Produits, navigation, variantes et contact |

Ouvrir `index.html` dans un navigateur. Les images chargent depuis `images/`. Les polices Bodoni Moda et DM Sans sont chargées en ligne, avec des polices de secours si le réseau est indisponible.

## Template Framer de référence

La démo suit section par section le template Framer **AestheticMatch** (https://aestheticmatch.framer.website/), consulté en ligne le 30/10/2026. On reprend sa structure, ses proportions (coins arrondis de 40 px, capsules, cartes vitrées, grands titres serif) et son rythme, transposés en noir, ivoire et or avec Bodoni Moda et DM Sans. Aucun texte, image, nom ou composant de marque du template n’est importé.

| Section du template | Équivalent dans la démo | Adaptation |
|---|---|---|
| Barre de navigation flottante, bouton noir « Shop now » | Barre flottante, bouton « Commander » | Ouvre le contact WhatsApp |
| Hero arrondi, titre serif avec un mot en capsule, carte statistique vitrée, carte vidéo | Même composition | Capsule dorée au lieu du jaune citron ; statistique « 5 univers » (fait vérifiable) ; carte produit au lieu de la vidéo |
| « Most Popular » : carrousel de cartes produit | « Les essentiels du moment » | Prix remplacé par « Prix à confirmer », avis et étoiles retirés, bouton « Demander le prix » |
| Grande photo avec texte révélé au défilement + titre et seconde photo | Bloc éditorial | Même révélation mot à mot |
| Cartes de blog à texte superposé | « Nos univers » (5 catégories) | Montres & bijoux en carte monogramme tant qu’il n’y a pas de photo |
| Bandeau photo avec deux panneaux blancs (liens, note 4,5, offre) | « Commander, tout simplement » et « Un cadeau plein de douceur » | Pas de note ni d’avatars : remplacés par le rappel « WhatsApp » |
| Avant / après | « On en parle, et on s’organise » (3 étapes) | Pas de promesse de résultat |
| FAQ en cartes | FAQ en cartes | Les liens du bandeau ouvrent la bonne question |
| Collage d’images flottantes | Collage de produits | Léger décalage au défilement |
| Grand bouton « Shop Now » sur photo | Grand bouton « Parler à Oumouna » sur fond noir et or | Étoiles à quatre branches dorées |
| Newsletter, colonnes de liens, logo géant | Inscription aux nouveautés via WhatsApp, colonnes, mot « Golden » géant | Aucun formulaire ne simule un envoi |

La fiche produit reprend les mêmes composants (barre flottante, cartes produit, grand appel à l’action, pied de page).

Le nouveau visuel du hero est `images/hero-aestheticmatch.png`. Il reprend le cadrage large avec espace de texte à gauche; `images/hero.jpg` est conservé comme ancienne version.

Le numéro WhatsApp n’est volontairement pas configuré : une fenêtre l’indique à la place d’ouvrir un lien qui utiliserait un numéro non confirmé. Après validation, renseigner `SHOP_WHATSAPP_NUMBER` dans `site.js`, au format international sans `+`.

Les prix, stocks, délais, frais, moyens de paiement et conditions sont encore indiqués comme à confirmer. Aucun panier, paiement ou stock connecté n’est simulé. L’interface ne contient pas d’avis clients.

## Maquettes de référence

Démo v2 (29/10/2026). Canevas en ligne : https://claude.ai/artifact/PDkqyhViBauV9MLNiMmLce
Les fichiers `.dc.html` restent les sources des 3 écrans du canevas (format Claude Design), conservées comme références. Ils ne constituent pas le mini-site autonome ci-dessus. Les images des exports utilisent les chemins du canevas (`/_blob/...`) ; la version autonome utilise les fichiers locaux dans `images/`.

## Écrans
| Fichier | Écran | Interactif |
|---|---|---|
| `Main.dc.html` | Accueil ordinateur (s'adapte au mobile) | Liens, FAQ en accordéon, inscription (n'envoie rien) |
| `Produit.dc.html` | Fiche produit : crème pour les mains Balea, 7 versions | Choix de la version (photo qui change), quantité, message WhatsApp préparé |
| `Mobile.dc.html` | Accueil mobile 390 px | Défilement des catégories, FAQ |

## Liens sans destination réelle
| Lien | Où | À remplacer par |
|---|---|---|
| `#whatsapp` | Tous les boutons « Commander », « Demander conseil », « Composer un cadeau », bouton flottant | `https://wa.me/221XXXXXXXXX?text=<message>` une fois le numéro WhatsApp confirmé |
| `#` | Mentions légales, CGV, Confidentialité, liens du pied de page mobile | Pages à créer |
| Formulaire « Les nouveautés, en premier » | Accueil | N'envoie rien : à brancher sur une liste WhatsApp ou un outil d'e-mailing |
| Catégories et « Voir tous les produits » | Accueil | Pages catégories à créer |

Version autonome (`index.html`, `produit.html`) : tous les boutons de contact passent par `data-order` et ouvrent une fenêtre qui indique que le numéro WhatsApp reste à confirmer. Mentions légales, conditions de vente et confidentialité sont affichées « à venir », sans lien. Les cartes « Beauté & soins » et « Bien-être » renvoient à la sélection ; « Mode & maroquinerie » et « Montres & bijoux » ouvrent le contact.

## Mouvements
Zoom lent du hero (1,03 → 1 sur 10 s), apparition du titre et des cartes du hero (fondu + 16 px), quelques éclats dorés lents, révélation des sections au défilement, texte de la grande photo révélé mot à mot au défilement, collage qui dérive légèrement, étoiles du grand bouton qui tournent lentement, cartes levées de 4 px au survol, barre de navigation plus opaque au défilement. Tout est coupé si l'utilisateur a activé « réduire les animations » (`prefers-reduced-motion`). Le contenu reste visible sans animation.

## Photos : utilisées
| Image | Source WhatsApp (27/10) | Usage |
|---|---|---|
| hero.jpg, hero-mobile.jpg, mode-maroquinerie.jpg | `assets/hero/hero-still.png` (image générée, personne choisie par Abou) | Hero, catégorie Mode |
| creme-mains-*.jpg (7) | 4.05.38 à 4.05.40 | Fiche produit (7 versions), sélection |
| balea-creme-corps-karite-argan.jpg | 4.11.44 PM (3) | Sélection |
| mixa-cica-repair.jpg | 4.05.40 PM (3) | Sélection |
| balea-vital-creme-jour.jpg | 4.05.40 PM | Sélection |
| balea-deo-creme-sensitive.jpg | 4.05.41 PM (1) | Sélection |
| balea-huile-demaquillante.jpg | 4.05.41 PM (2) | Sélection |
| gamme-*.jpg (5) | 4.11.44 PM (4), 4.11.46 PM (5) et (6), 4.11.47 PM et (3) | Catégorie Beauté, bloc Routines |
| huile-poisson.jpg | 4.11.44 PM (5) | Catégorie Bien-être |
| peluche-ours.jpg, peluche-rose-coeur.jpg | 4.11.45 PM (5), 4.11.46 PM | Cadeaux |
| eponges-douche.jpg | 4.11.45 PM (6) | Sélection |

La photo `balea-creme-corps-karite-argan.jpg` garde un léger damier gris autour du pot (fausse transparence de l'image d'origine), visible sur fond ivoire. Un nettoyage automatique effaçait aussi le bord blanc du pot : il a été écarté pour ne pas retoucher l'emballage. À remplacer par une photo propre.

Préparées mais pas encore placées : jessa-*.jpg (4.11.47 PM (1) et (2)), mivolis-*.jpg (bonbons 4.11.46 PM (2) à (4), Immun Fit 4.11.45 PM (2)). Ce sont des produits d'hygiène et des compléments : à présenter sans aucune allégation santé.

Traitement : bande de miniatures et croix de fermeture retirées par recadrage, produit centré sur fond blanc carré, jamais déformé ni retouché sur l'emballage. Un petit pictogramme d'application a été masqué dans le coin du pot de crème karité.

## Photos : écartées
| Source WhatsApp (27/10) | Raison |
|---|---|
| 4.05.40 PM (4) | Doublon exact de 4.05.40 PM (3) |
| 4.11.44 PM, (1), (2) ; 4.11.45 PM (7) | Captures d'écran avec barre d'état et navigation d'application |
| 4.11.45 PM (1) | Trop petite (512 × 217 px) |
| 4.11.45 PM (3) et (4) | Logos Tommy Hilfiger et Louis Vuitton bien visibles : ne pas mettre en avant sans preuve d'authenticité (risque de contrefaçon) |
| 4.11.46 PM (1) | Personne inconnue au premier plan, probablement une photo de banque d'images : droits à vérifier |
| 4.11.45 PM | Boîte de protéines, rendu peu soigné ; à revoir avec le vrai produit |
| 4.05.41 PM | Pot ouvert, produit difficile à identifier |
| 4.16.21 PM et (1) | Bannières avec texte et menus intégrés ; leurs informations sont reprises en texte dans la page |

## À faire valider par Oumouna
- Visuel du hero (image générée) et slogan « L'allure du luxe, à votre portée. »
- Numéros +221 77 751 37 80 et +221 77 264 64 92, repris de sa bannière : lequel est le WhatsApp ?
- Prix, délais et frais de livraison, modes de paiement, conditions d'échange
- Produits réellement en stock ; noms français des produits (traduits de l'allemand)
- Photos pour Montres & bijoux, sacs, habillement, lunettes, ceintures
- Avis de clientes réels (aucun section avis tant qu'il n'y en a pas)
