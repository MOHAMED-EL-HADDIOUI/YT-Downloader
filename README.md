# YT Downloader

YT Downloader est une application web complète qui permet aux utilisateurs de télécharger des vidéos ou de l'audio à partir de YouTube dans différents formats (MP4 pour les vidéos et MP3 pour l'audio) tout en garantissant une expérience rapide et sécurisée. Ce projet est divisé en deux parties : un backend utilisant Flask et un frontend utilisant React.

![YT Downloader Interface](Page.PNG)

---

## Fonctionnalités

- **Téléchargement rapide et sécurisé** : Téléchargez vos fichiers sans risque.
- **Formats disponibles** : 
  - Vidéo (MP4 jusqu'à 4K)
  - Audio (MP3 jusqu'à 192 kbps)
- **Compatibilité multiplateforme** : Fonctionne sur tous les appareils, y compris ordinateurs, tablettes, et smartphones.
- **Haute qualité** : Téléchargement en résolution maximale disponible.

---

## Structure du projet

Le projet est divisé en deux principaux répertoires :

### Backend
- **Technologie** : Python (Flask)
- **Fonctionnalités clés** :
  - API REST pour le téléchargement de vidéos et d'audio.
  - Utilisation de `yt-dlp` pour l'extraction et le traitement des fichiers multimédias.
  - Gestion sécurisée des téléchargements et suppression automatique des fichiers temporaires après téléchargement.

### Frontend
- **Technologies** : React, TypeScript
- **Fonctionnalités clés** :
  - Interface utilisateur simple et intuitive.
  - Gestion du format de téléchargement (vidéo ou audio).
  - Affichage des erreurs et des statuts de chargement en temps réel.

---

## Installation et exécution

### Prérequis

- **Backend** :
  - Python 3.9 ou supérieur
  - Pip pour gérer les dépendances Python
- **Frontend** :
  - Node.js (16.x ou supérieur)
  - npm ou yarn pour gérer les dépendances JavaScript

### Étapes d'installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/MOHAMED-EL-HADDIOUI/YT-Downloader.git
   cd YT-Downloader
   ```

2. **Backend** :
   - Naviguez dans le répertoire `Backend` :
     ```bash
     cd Backend
     ```
   - Installez les dépendances Python :
     ```bash
     pip install -r requirements.txt
     ```
   - Lancez le serveur Flask :
     ```bash
     python app.py
     ```

3. **Frontend** :
   - Naviguez dans le répertoire `Frontend` :
     ```bash
     cd Frontend
     ```
   - Installez les dépendances JavaScript :
     ```bash
     npm install
     ```
   - Lancez l'application React :
     ```bash
     npm start
     ```

4. Ouvrez votre navigateur et accédez à :
   ```
   http://localhost:5173
   ```

---

## API

### Endpoints disponibles

- **POST** `/download/video`
  - **Description** : Télécharge une vidéo à partir de YouTube.
  - **Paramètres** :
    - `url` : URL YouTube (obligatoire).
    - `format_id` : Format spécifique (facultatif).
- **POST** `/download/mp3`
  - **Description** : Télécharge l'audio (MP3) à partir de YouTube.
  - **Paramètres** :
    - `url` : URL YouTube (obligatoire).
    - `format_id` : Format spécifique (facultatif).

---