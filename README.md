# 💎 Aura Accessories — E-Commerce Web Application **Aura Accessories** est une
application web e-commerce moderne et réactive conçue pour la présentation et la vente en
ligne de bijoux de luxe. Le projet offre une expérience utilisateur fluide avec filtrage dynamique
des produits, gestion interactive du panier en temps réel et checkout direct via l'API WhatsApp.
🚀 Fonctionnalités Clés
● Catalogues & Produits Dynamiques : Affichage d'un catalogue de produits (boucles
d'oreilles, bracelets, colliers, bagues) généré dynamiquement.
● Filtrage par Catégorie : Navigation simplifiée permettant de filtrer instantanément les
articles par catégorie (earrings, charms, necklaces, rings).
● Gestion du Panier (Cart State Management) :
○ Ajout d'articles au panier.
○ Modification rapide des quantités (+ / -).
○ Suppression totale d'un article.
○ Calcul automatique du montant total et décompte des articles en temps réel.
● Commande Directe via WhatsApp : Intégration de l'API WhatsApp Web pour envoyer
automatiquement un récapitulatif détaillé de la commande (nom, téléphone, adresse, liste
des articles et prix total) directement au vendeur.
● UI/UX Responsive : Interface fluide adaptée aux écrans mobiles et de bureau avec
panneau latéral (Drawer) pour le panier.
️ Technologies Utilisées
● HTML5 : Structuration de la page web.
● CSS3 : Flexbox/Grid, variables CSS et styles modernes.
● JavaScript (Vanilla ES6+) : Manipulation du DOM, gestion du state du panier et
intégration API.
● WhatsApp API (wa.me) : Automatisation du processus de checkout.
📁 Structure du Projet
├── index.html # Structure HTML principale
├── style.css # Styles de l'application
├── js.js # Logique JavaScript (Produits, Panier, WhatsApp)
└── images/ # Dossier d'images des produits (.png)
⚙️ Configuration & Installation
1. Cloner le projet :
git clone https://github.com/votre-username/aura-accessories.git
cd aura-accessories
2. Personnaliser le numéro WhatsApp :
Dans le fichier js.js, modifiez la variable PHONE_NUMBER avec votre numéro au format
international :

const PHONE_NUMBER = "212702602431";
3. Lancer le projet :
Ouvrez simplement le fichier index.html dans n'importe quel navigateur ou utilisez un
serveur local comme Live Server sous VS Code.
📩 Exemple de Message WhatsApp Généré
✨ NOUVELLE COMMANDE - AURA ACCESSORIES ✨
👤 Nom: Sara Mansouri
📞 Tél: 0612345678
📍 Adresse/Ville: Casablanca
📦 Articles:
• Anneau Minimaliste Gold (x1) : 120 DH
• Collier Chunky Gold (x1) : 220 DH
💰 TOTAL COMMANDE: 340 DH
👤 Auteur
Développeur - Portfolio / GitHub
