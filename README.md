# YT Downloader

YT Downloader est une application web compl�te qui permet aux utilisateurs de t�l�charger des vid�os ou de l'audio � partir de YouTube dans diff�rents formats (MP4 pour les vid�os et MP3 pour l'audio) tout en garantissant une exp�rience rapide et s�curis�e. Ce projet est divis� en deux parties : un backend utilisant Flask et un frontend utilisant React.

![YT Downloader Interface](Page.PNG)

---

## Fonctionnalit�s

- **T�l�chargement rapide et s�curis�** : T�l�chargez vos fichiers sans risque.
- **Formats disponibles** : 
  - Vid�o (MP4 jusqu'� 4K)
  - Audio (MP3 jusqu'� 192 kbps)
- **Compatibilit� multiplateforme** : Fonctionne sur tous les appareils, y compris ordinateurs, tablettes, et smartphones.
- **Haute qualit�** : T�l�chargement en r�solution maximale disponible.

---

## Structure du projet

Le projet est divis� en deux principaux r�pertoires :

### Backend
- **Technologie** : Python (Flask)
- **Fonctionnalit�s cl�s** :
  - API REST pour le t�l�chargement de vid�os et d'audio.
  - Utilisation de `yt-dlp` pour l'extraction et le traitement des fichiers multim�dias.
  - Gestion s�curis�e des t�l�chargements et suppression automatique des fichiers temporaires apr�s t�l�chargement.

### Frontend
- **Technologies** : React, TypeScript
- **Fonctionnalit�s cl�s** :
  - Interface utilisateur simple et intuitive.
  - Gestion du format de t�l�chargement (vid�o ou audio).
  - Affichage des erreurs et des statuts de chargement en temps r�el.

---

## Installation et ex�cution

### Pr�requis

- **Backend** :
  - Python 3.9 ou sup�rieur
  - Pip pour g�rer les d�pendances Python
- **Frontend** :
  - Node.js (16.x ou sup�rieur)
  - npm ou yarn pour g�rer les d�pendances JavaScript

### �tapes d'installation

1. Clonez ce d�p�t :
   ```bash
   git clone https://github.com/MOHAMED-EL-HADDIOUI/YT-Downloader.git
   cd YT-Downloader
   ```

2. **Backend** :
   - Naviguez dans le r�pertoire `Backend` :
     ```bash
     cd Backend
     ```
   - Installez les d�pendances Python :
     ```bash
     pip install -r requirements.txt
     ```
   - Lancez le serveur Flask :
     ```bash
     python app.py
     ```

3. **Frontend** :
   - Clonez ce d�p�t :
   ```bash
   git clone https://github.com/MOHAMED-EL-HADDIOUI/YT-Downloader-Backend.git
   cd YT-Downloader-Backend
   ```
   - Installez les d�pendances JavaScript :
     ```bash
     npm install
     ```
   - Lancez l'application React :
     ```bash
     npm run dev
     ```

4. Ouvrez votre navigateur et acc�dez � :
   ```
   http://localhost:5173
   ```

---

## API

### Endpoints disponibles

- **POST** `/download/video`
  - **Description** : Telecharge une vid�o � partir de YouTube.
  - **Param�tres** :
    - `url` : URL YouTube (obligatoire).
    - `format_id` : Format sp�cifique (facultatif).
- **POST** `/download/mp3`
  - **Description** : Telecharge l'audio (MP3) � partir de YouTube.
  - **Param�tres** :
    - `url` : URL YouTube (obligatoire).
    - `format_id` : Format specifique (facultatif).

---