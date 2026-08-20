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

Déploiement du backend
- Vous pouvez déployer le dossier /backend sur Vercel, Render, Heroku ou autre.
- Exemple (Render) : push sur GitHub + créer un service Node qui lance `npm start`.

A propos des commits
- Nom affiché dans le README: ANGEL

Si vous voulez que je configure le déploiement automatique (Vercel/Render) ou que je remplace le placeholder API_BASE par votre URL d'API, dites-le et je m'en occupe.
