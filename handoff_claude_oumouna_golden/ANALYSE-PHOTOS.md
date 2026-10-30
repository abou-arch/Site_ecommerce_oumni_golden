# Analyse des photos existantes

## Inventaire
Le dossier contient **40 images** au moment de l’analyse. `PROGRESS.md` en mentionne 41 : il y a donc une photo à retrouver ou à confirmer comme manquante. Les originaux sont inclus dans `assets/photos/` sous leurs noms WhatsApp.

## Types d’images identifiés
- Deux bannières graphiques de marque : elles affichent déjà logo, catégories, texte et coordonnées. Elles transmettent les codes noir, or et paillettes, mais sont trop chargées pour servir de photo de hero responsive ; reconstruire l’information en texte dans le site.
- Packshots de soins et cosmétiques : la plupart isolent clairement un produit sur fond clair ou montrent des gammes coordonnées. Ils peuvent alimenter les grilles beauté.
- Santé, compléments alimentaires, infusions et confiserie : catégories distinctes, souvent avec packagings très colorés. Les regrouper sous une catégorie santé/bien-être et éviter de les mélanger visuellement aux soins.
- Mode et accessoires : photos de sacs et chaussures en situation, avec lumière chaleureuse et logo ou watermark visible sur certaines images.
- Cadeaux : peluches photographiées en ambiance domestique.
- Plusieurs captures d’écran de fiches produit mobiles contiennent barre d’état, boutons de fermeture, navigation d’application ou miniatures. Elles ne doivent pas apparaître telles quelles dans le hero ou les cartes catalogue.

## Points forts
- Les packshots sur fond clair sont lisibles et faciles à recadrer dans des cartes cohérentes.
- Les gammes de soins ont des couleurs de packaging distinctives ; elles peuvent aider à différencier les sous-catégories.
- Les compositions lifestyle de sacs/chaussures et de peluches apportent une touche humaine pour des sections éditoriales ou cadeaux.
- Les bannières existantes donnent un repère sur l’identité commerciale et l’assortiment.

## À améliorer avant publication
1. Donner des noms descriptifs aux fichiers et associer chaque photo au vrai produit, à sa catégorie, à son prix et à ses variantes.
2. Écarter les captures avec interface mobile, les recadrages trop serrés, les images répétées et les photos de groupe lorsque le produit n’est pas identifiable.
3. Pour les produits vedettes, privilégier une image frontale par produit, fond clair, cadrage et proportions homogènes. Utiliser les autres angles dans la galerie de la fiche produit.
4. Vérifier qualité, droits d’usage et exactitude du produit avant mise en ligne. Ne pas enlever les logos imprimés sur les produits et ne pas modifier leurs emballages.
5. Confirmer avec Oumouna quelles catégories et quels produits sont réellement en vente ; les images seules ne prouvent ni le stock ni les prix.

## Usages recommandés
- Accueil : une image lifestyle de marque propre, ou une photo réelle validée ; ne pas utiliser une capture d’écran de produit.
- Grilles : packshots propres avec ratio uniforme, `object-fit: contain` pour ne pas couper les emballages.
- Sections cadeaux/mode : photos lifestyle bien cadrées avec attention aux logos et watermarks.
- Fiches produits : photo principale isolée, angles supplémentaires en galerie si disponibles.
