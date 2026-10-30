# Animations et mouvement

## Principes
L’univers noir et or appelle des mouvements lents et discrets. L’animation sert à attirer l’attention sur le message et les produits, jamais à gêner la lecture ou la commande. Ne pas animer artificiellement le visage, les mains, les bijoux ou les produits sur une photo statique.

## Motion design pour la page
- **Entrée du hero** : photo avec un léger fondu et zoom lent de 1,03 vers 1 sur 8 à 12 secondes ; le titre apparaît ensuite par fondu/translation de 12 à 20 px, en 450 à 650 ms.
- **Éclats dorés** : quelques points lumineux en arrière-plan, déplacement vertical très lent et opacité douce ; amplitude faible, sans boucles clignotantes.
- **Navigation** : fond plus opaque au scroll, transition de 180 à 250 ms.
- **Sections** : révélation une seule fois à l’entrée dans l’écran, fondu + translation de 12 à 18 px, décalage léger entre cartes.
- **Cartes produit** : au survol, image agrandie de 1,02 à 1,04, carte levée de 3 à 5 px et ombre discrète. Sur mobile, garder l’information visible sans dépendre du survol.
- **CTA** : changement léger de teinte/ombre et déplacement de 1 à 2 px ; garder un contraste suffisant.
- **Carrousel** : glissement fluide, commandes précédent/suivant et gestes tactiles ; aucune avance automatique rapide.
- **WhatsApp** : bouton mobile facile à trouver ; une légère apparition au scroll est acceptable, sans masquer le contenu.

## Accessibilité et performance
- Respecter `prefers-reduced-motion` : couper parallax, particules et zooms ; conserver seulement des transitions courtes ou aucune animation.
- Éviter défilements forcés, clignotement, texte animé en continu et effets qui bloquent le clic.
- Animer surtout `transform` et `opacity`. Réduire les particules sur mobile et ne pas lancer de vidéo lourde en lecture automatique.
- Le contenu et les CTA doivent rester visibles si les animations ne se chargent pas.

## Prompt image-vers-vidéo pour Gemini
Téléverse `assets/hero/hero-still.png` dans Gemini avec le texte ci-dessous :

> Anime cette image en une courte boucle cinématique de 6 secondes pour le hero d’une boutique premium noir et or. Préserve strictement l’identité, le visage, la pose, les mains, les vêtements, les bijoux et le sac de la femme. Garde toute la moitié gauche sombre et calme pour que le texte du site reste lisible. Ajoute seulement un lent mouvement de caméra vers l’avant (environ 2 %), de très légers reflets chauds sur les lumières dorées en arrière-plan et quelques particules dorées qui dérivent lentement. Ne crée aucun texte, logo, objet, main ou bijou supplémentaire. Pas de mouvement de bouche, pas de changement de visage, pas de scintillement rapide, pas de zoom brusque, pas de coupe. La scène doit revenir naturellement vers son cadrage initial pour faciliter une boucle. Format horizontal 16:9.

Utiliser le clip comme décor muet et ajouter le titre, le logo et les boutons comme éléments HTML séparés dans le site. Si Gemini déforme le sujet, utiliser `hero-still.png` comme image statique avec le zoom CSS doux décrit plus haut.
