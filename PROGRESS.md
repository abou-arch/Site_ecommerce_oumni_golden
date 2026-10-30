# Oumouna Rassoul Golden — Suivi du projet

> Dernière mise à jour : 2026-10-30 · Mis à jour à chaque session de travail (voir `CLAUDE.md`).

**Cliente :** Oumouna Rassoul (vendeuse en dropshipping, Sénégal) · **Porteur :** Abou
**Objectif actuel :** démo visuelle du site pour convaincre la cliente, puis vente des services d'automatisation.

**Liens**
- Doc de cadrage (brief, stratégie, conditions, plateforme de marque) : https://claude.ai/artifact/MJZ8LFq4xB1wqzXcQX8uda
- Canevas de la démo (accueil ordinateur, fiche produit, accueil mobile) : https://claude.ai/artifact/PDkqyhViBauV9MLNiMmLce

---

## Avancement par phase

| # | Phase | Statut | Où en est-on |
|---|---|---|---|
| 0 | Brief de marque | ✅ Fait | 12 questions remplies |
| 1 | Stratégie de marque | 🟡 v1 rédigée | Plateforme v1 dans le doc ; récit de marque et validation par Oumouna en attente |
| 2 | Identité visuelle | 🟡 Direction posée | « Noir et or », Bodoni Moda + DM Sans, hero généré (à valider) ; logo pas encore fait |
| 3 | Marketing | ⚪ Cadré | Canaux et indicateurs définis, rien de lancé |
| 4 | Copywriting | 🟡 Partiel | Textes de la démo rédigés ; slogan à choisir (A/B/C) |
| — | Démo du site | 🟡 Démo locale alignée sur le template Framer | Accueil et fiche produit refaits section par section sur le template AestheticMatch (`demo/index.html`, `demo/produit.html`), vérifiés sur ordinateur et mobile ; validation cliente à faire |
| 5 | Site e-commerce | ⚪ Pas démarré | Après validation de la démo |

Légende : ✅ fait · 🟡 en cours · ⚪ pas démarré · 🔴 bloqué

---

## Décisions prises

| Date | Décision |
|---|---|
| 2026-10-29 | Marché de lancement : Sénégal (prix en FCFA, Wave, Orange Money, paiement à la livraison) |
| 2026-10-29 | Nom de marque : **Oumouna Rassoul Golden** |
| 2026-10-29 | Positionnement : luxe accessible, avec un angle « cadeau » (à confirmer avec Oumouna) |
| 2026-10-29 | Priorité : la démo visuelle passe avant l'approfondissement de la marque (la cliente veut d'abord une démo) |
| 2026-10-29 | Direction visuelle de la démo : noir et or, titres en Bodoni Moda, texte en DM Sans |
| 2026-10-29 | Dépôt de marque OAPI reporté (au moins 350 000 FCFA) ; recherche gratuite d'antériorité seulement |
| 2026-10-29 | Kit de passation Claude : garder l’identité noir et or et adapter l’architecture AestheticMatch aux catégories réelles, avec animations accessibles |
| 2026-10-29 | Démo v2 : 5 catégories affichées (Beauté & soins, Bien-être, Mode & maroquinerie, Montres & bijoux, Cadeaux) ; Montres & bijoux sans photo pour l’instant |
| 2026-10-29 | Pas de section avis tant qu’aucun avis réel n’est fourni ; prix, délais, paiement et retours affichés « à confirmer » |
| 2026-10-29 | Photos avec logos Tommy Hilfiger et Louis Vuitton écartées de la démo (authenticité à prouver) |
| 2026-10-29 | Commande par WhatsApp uniquement dans la démo : aucun panier ni paiement en ligne simulé ; boutons reliés à `#whatsapp` en attendant le numéro |
| 2026-10-29 | Montants des coffrets cadeaux retirés de la démo (remplacés par [budget]) tant qu’Oumouna ne les a pas validés |
| 2026-10-29 | Les exports HTML « Accueil — ordinateur » et « Fiche produit » reçus sont conservés comme références visuelles; leurs README les identifient comme maquettes, pas comme code de production. Le suivi `PROGRESS.md` reste la source de vérité. |
| 2026-10-29 | Référence visuelle à suivre confirmée par Abou : le site AestheticMatch (rythme de page et composition), adaptée à la marque noir et or sans reprendre ses textes ni ses visuels. |
| 2026-10-30 | La démo suit désormais le template Framer AestheticMatch section par section (structure, proportions, composants), avec les polices et couleurs de la marque. Les éléments du template sans équivalent vérifié (avis, notes, étoiles, avant/après, prix, newsletter) sont remplacés par des contenus honnêtes. Correspondance détaillée dans `demo/README.md`. |
| 2026-10-30 | Sur mobile, le hero ne montre que « Découvrir la sélection » : « Parler à Oumouna » reste dans la barre fixe en bas d’écran. |
| 2026-10-30 | Hero allégé après retour d’Abou (section jugée dérangeante) : plus d’étiquettes ni de carte « 5 univers », seule la carte produit reste à droite. |

---

## Faits clés du brief

- Produits : cosmétiques et maquillage, lunettes, montres, ceintures, habillement, bijoux, sacs et pochettes, peluches, soins du corps
- Cible : femmes de 16 ans et plus, jeunes couples, au Sénégal
- Prix : de 2 000 à 65 000 FCFA
- Modèle : dropshipping ; ventes surtout via WhatsApp
- Existant : Instagram, TikTok, Facebook Marketplace, un site encube.app
- Budget : minimal · Elle gère tout elle-même

---

## En attente

**De la cliente**
- [x] Photos des produits reçues : 40 fichiers (dont 1 doublon). Le « 41 » du premier suivi était une erreur de comptage
- [ ] Valider la sélection de photos de la démo (détail dans `demo/README.md`)
- [ ] Photos pour Montres & bijoux, sacs, habillement, lunettes, ceintures
- [ ] Valider le visuel du hero (image générée)
- [ ] Confirmer les produits réellement en stock et leurs noms en français (emballages en allemand)
- [ ] Prouver l’authenticité des articles de marque (Tommy Hilfiger, Louis Vuitton) avant toute mise en avant
- [ ] Prix réels des produits
- [ ] Délais de livraison (Dakar / régions) et livreur
- [ ] Conditions de retour (selon le fournisseur)
- [ ] Numéro WhatsApp à afficher : lequel de +221 77 751 37 80 et +221 77 264 64 92 (repris de sa bannière) ?
- [ ] Avis de clientes (captures, avec leur accord)
- [ ] Réponses pour le récit de marque (depuis quand, pourquoi « Golden », ce qui l'a lancée, combien de clientes)
- [ ] Choix du slogan (A/B/C)
- [ ] Ses 2 catégories qui se vendent le mieux
- [ ] Statut juridique : RC et NINEA

- [ ] Une photo propre de la crème corps Balea karité & argan (l’actuelle garde un damier gris autour du pot)

**D'Abou**
- [x] Choisir la suite de la démo : intégration des vraies photos (option B, via le kit)
- [x] Lire les exports HTML reçus et les comparer au suivi : deux vues de référence, pas de nouvelle vue mobile
- [ ] Montrer la démo v2 à Oumouna et noter ses retours
- [ ] Partager le canevas avec Oumouna (menu Partager)

---

## Journal

### 2026-10-29
- Création du doc de cadrage : feuille de route en 5 phases, brief, conditions
- Brief rempli par Abou : marché Sénégal, dropshipping, WhatsApp, budget minimal
- Conditions juridiques réécrites pour le Sénégal (loi 2008-08, loi 2008-12 / CDP, OAPI)
- Nom retenu : Oumouna Rassoul Golden
- Plateforme de marque v1 : promesse, positionnement, preuves, personas, personnalité, 3 pistes de slogan
- Démo du site v1 : accueil ordinateur, fiche produit interactive, accueil mobile
- Création de ce fichier de suivi
- Kit de passation préparé pour Claude : contexte de marque, analyse des photos, structure inspirée d’AestheticMatch et recommandations d’animations.
- Maquette de hero noir et or créée en PNG avec visuel source séparé pour pouvoir l’animer dans Gemini.
- Inventaire du dossier : 40 photos disponibles ; le suivi mentionnait auparavant 41, ce nombre reste à confirmer.
- Hero mis à jour avec un traitement photo plus naturel ; la maquette statique et le kit Claude ont été remplacés par cette version.
- Hero affiné à partir de la référence portrait fournie ; seule l’image générée est incluse dans le ZIP.

- Proportions du personnage du hero rééquilibrées à partir du portrait fourni : échelle tête-épaules, cou, épaules et bras rendus plus naturels ; maquette et ZIP mis à jour.
- Personne du hero remplacée par celle des deux nouvelles photos de référence ; visuel et maquette régénérés, références originales exclues du ZIP.
- Prompt Claude précisé pour utiliser le nouveau hero et conserver la personne choisie ; kit ZIP reconstruit.
- Démo v2 publiée sur le canevas : accueil ordinateur, fiche produit (crème pour les mains Balea, 7 versions, message WhatsApp préparé), accueil mobile.
- 27 photos d’origine préparées (recadrées, fond homogène, sans déformation) et 13 écartées avec leur raison ; 30 images web au total avec les 3 cadrages du hero ; inventaire dans `demo/README.md`.
- Fichiers de la démo et images optimisées déposés dans `demo/`.
- Relecture des prompts, du suivi et des deux exports HTML; ajout d’un README de projet avec la hiérarchie des documents et les prochaines étapes.
- Copies des deux ZIP reçus rangées dans `demo/reference_exports/` pour les garder avec le projet.
- Création d’un mini-site autonome en HTML/CSS/JS : accueil responsive et fiche produit interactive avec images locales; liens WhatsApp gardés en attente du numéro confirmé.
- Accueil et styles remaniés pour suivre la composition éditoriale d’AestheticMatch : hero immersif, produits en carrousel, alternance image/texte, univers, FAQ et CTA; contenu adapté aux informations disponibles pour Oumouna.
- Nouveau visuel de hero généré et branché dans l’accueil : composition panoramique noir et or, sujet à droite et espace négatif à gauche; ancienne image conservée.
- Hero régénéré après retour d’Abou : nouvelle scène botanique éditoriale, pose et arrière-plan distincts de l’ancien visuel; fichier du site remplacé, original préservé.

### 2026-10-30
- Template Framer AestheticMatch consulté en ligne et relevé section par section (structure, typographie, rayons, composants).
- Démo refaite sur ce modèle : barre flottante, hero à cartes vitrées, carrousel de cartes produit, bloc éditorial à texte révélé, univers en cartes, bandeau photo à deux panneaux, commande en 3 étapes, FAQ en cartes, collage, grand appel à l’action, pied de page à logo géant.
- Fiche produit alignée sur les mêmes composants ; versions, quantité et fenêtre de contact vérifiées.
- Rendu vérifié sur ordinateur (1440 px) et mobile (375 px), sans erreur console.
- Hero corrigé : la capsule dorée « à sa façon. » ne déborde plus sur la première ligne du titre ; étiquettes et carte statistique retirées ; carte produit masquée sur tablette pour ne plus couvrir les boutons.
