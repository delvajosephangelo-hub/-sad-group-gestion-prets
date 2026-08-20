# Telecommande (Expo) + backend minimal

Ce dépôt contient un prototype d'application mobile React Native (Expo) pour piloter un appareil (Allumer / Éteindre / Statut) ainsi qu'un backend Node/Express minimal pour relayer les commandes.

Structure
- App.js               -> application Expo (UI mobile)
- package.json         -> dépendances / scripts pour l'app Expo
- /backend
  - index.js           -> serveur Express mock (POST /on, POST /off, GET /status)
  - package.json       -> dépendances du backend

Comment démarrer (développement)

1) Cloner le repo et installer

  git clone https://github.com/delvajosephangelo-hub/-sad-group-gestion-prets.git
  cd -sad-group-gestion-prets

2) Lancer le backend (dans un terminal)

  cd backend
  npm install
  npm start

Le backend écoutera sur le port 3000 (ou sur la variable d'environnement PORT).

3) Lancer l'app Expo (dans un autre terminal)

  cd ..
  npm install
  npx expo start

Ouvrez Expo Go sur votre téléphone et scannez le QR code.

Configuration
- Par défaut App.js utilise la constante API_BASE = 'https://EXEMPLE_API_URL'
- Pour le développement local, remplacez API_BASE par l'URL du backend, par exemple :

  const API_BASE = 'http://10.0.2.2:3000' // Android emulator
  // ou
  const API_BASE = 'http://<votre-ip-local>:3000' // téléphone et serveur sur le même réseau


Déployer le backend sur Render (recommandé)

1) Créez un compte sur https://render.com et connectez votre compte GitHub.

2) Méthode A — importer `render.yaml` (recommandé si vous avez plusieurs services)
   - Dans le tableau de bord Render: New -> Import from Git Repository -> sélectionnez votre dépôt
   - Render va détecter le fichier `render.yaml` et proposer de créer le service `telecommande-backend`.
   - Vérifiez les commandes de build et de démarrage (Build: `cd backend && npm install`, Start: `cd backend && npm start`) puis déployez.

3) Méthode B — créer un Web Service manuellement
   - New -> Web Service
   - Connectez le repo `delvajosephangelo-hub/-sad-group-gestion-prets`, branche: `main`.
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
   - Déployer.

4) Après le déploiement, Render fournit une URL publique du service du type `https://telecommande-backend.onrender.com`.
   - Copiez cette URL.
   - Dites-le moi (ou ouvrez une issue) et je mettrai à jour `App.js` pour remplacer le placeholder `API_BASE` par cette URL afin que l'application mobile appelle directement votre backend.

Notes sur la configuration et sécurité
- Par défaut le service est public. Si vous exposez un appareil réel, protégez l'API avec un token dans les headers ou une clé API.
- Pour utiliser HTTPS et éviter les problèmes de CORS, Render fournit un domaine HTTPS valide.

Déploiement alternatif: Vercel
- Si vous préférez Vercel, vous pouvez aussi connecter le repo et créer un Web Service, mais Render est plus simple pour exécuter un serveur Express tel quel.

A propos des commits
- Nom affiché dans le README: ANGEL

Si vous voulez que je fasse automatiquement la mise à jour d'`App.js` une fois que vous avez déployé et m'avez donné l'URL publique, dites "Mettez à jour App.js avec l'URL: https://..." et je pousserai la mise à jour.
