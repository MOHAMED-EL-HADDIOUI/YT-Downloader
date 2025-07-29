# YT Downloader

**YT Downloader** est une application web complète qui permet aux utilisateurs de télécharger des vidéos ou de l'audio depuis YouTube dans différents formats (MP4 pour les vidéos et MP3 pour l'audio), tout en garantissant une expérience rapide et sécurisée.  
Le projet est divisé en deux parties : un **backend** basé sur Flask et un **frontend** développé avec React.

![YT Downloader Interface](Page.PNG)

---

## Fonctionnalités

- **Téléchargement rapide et sécurisé** : récupérez vos fichiers sans risque.
- **Formats disponibles** :
  - Vidéo (MP4 jusqu’à 4K)
  - Audio (MP3 jusqu’à 192 kbps)
- **Compatibilité multiplateforme** : fonctionne sur ordinateurs, tablettes et smartphones.
- **Haute qualité** : télécharge dans la meilleure résolution disponible.

---

## Structure du projet

Le projet est structuré en deux dossiers principaux :

### Backend
- **Technologie** : Python (Flask)
- **Fonctionnalités clés** :
  - API REST pour le téléchargement de vidéos et d’audio.
  - Utilisation de `yt-dlp` pour extraire et traiter les fichiers multimédias.
  - Gestion sécurisée des téléchargements avec suppression automatique des fichiers temporaires après usage.

### Frontend
- **Technologies** : React, TypeScript
- **Fonctionnalités clés** :
  - Interface utilisateur simple et intuitive.
  - Choix du format de téléchargement (vidéo ou audio).
  - Affichage des erreurs et suivi du statut en temps réel.

---

## Installation et exécution

### Prérequis

- **Backend** :
  - Python 3.9 ou supérieur
  - `pip` pour gérer les dépendances Python
- **Frontend** :
  - Node.js (v16 ou supérieur)
  - `npm` ou `yarn` pour gérer les dépendances JavaScript

### Étapes d’installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/MOHAMED-EL-HADDIOUI/YT-Downloader.git
   cd YT-Downloader
````

2. **Backend** :

   * Allez dans le dossier `Backend` :

     ```bash
     cd Backend
     ```
   * Installez les dépendances :

     ```bash
     pip install -r requirements.txt
     ```
   * Lancez le serveur Flask :

     ```bash
     python app.py
     ```

3. **Frontend** :

   * Clonez le dépôt du frontend :

     ```bash
     git clone https://github.com/MOHAMED-EL-HADDIOUI/YT-Downloader-Backend.git
     cd YT-Downloader-Backend
     ```
   * Installez les dépendances :

     ```bash
     npm install
     ```
   * Démarrez l’application React :

     ```bash
     npm run dev
     ```

4. Accédez à l’application via votre navigateur :

   ```
   http://localhost:5173
   ```

---

## API

### Endpoints disponibles

* **POST** `/download/video`

  * **Description** : Télécharge une vidéo depuis YouTube.
  * **Paramètres** :

    * `url` (obligatoire) : URL de la vidéo YouTube
    * `format_id` (facultatif) : identifiant de format spécifique

* **POST** `/download/mp3`

  * **Description** : Télécharge l’audio (MP3) depuis YouTube.
  * **Paramètres** :

    * `url` (obligatoire) : URL de la vidéo YouTube
    * `format_id` (facultatif) : identifiant de format spécifique

---
