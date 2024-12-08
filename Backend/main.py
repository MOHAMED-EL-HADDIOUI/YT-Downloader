from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import yt_dlp
import os
import logging

app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.INFO)

# Définir le chemin du dossier de téléchargement
DOWNLOAD_FOLDER = os.path.join(os.path.dirname(__file__), 'downloads')

# Créer le dossier de téléchargement s'il n'existe pas
os.makedirs(DOWNLOAD_FOLDER, exist_ok=True)

def get_available_formats(url):
    """
    Récupère les formats disponibles pour une vidéo YouTube
    """
    ydl_opts = {
        'listformats': True,
    }
    
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info_dict = ydl.extract_info(url, download=False)
        
        # Filtrer et formater les formats vidéo
        video_formats = [
            {
                'format_id': f['format_id'],
                'resolution': f.get('resolution', 'N/A'),
                'ext': f.get('ext', 'N/A'),
                'filesize': f.get('filesize', 'N/A'),
                'tbr': f.get('tbr', 'N/A')
            } 
            for f in info_dict.get('formats', []) 
            if f.get('height') and f['vcodec'] != 'none'
        ]
        
        # Filtrer et formater les formats audio
        audio_formats = [
            {
                'format_id': f['format_id'],
                'ext': f.get('ext', 'N/A'),
                'abr': f.get('abr', 'N/A'),
                'acodec': f.get('acodec', 'N/A'),
                'filesize': f.get('filesize', 'N/A')
            } 
            for f in info_dict.get('formats', []) 
            if f.get('acodec') and f['acodec'] != 'none'
        ]
        
        return {
            'title': info_dict.get('title', 'Untitled'),
            'video_formats': video_formats,
            'audio_formats': audio_formats
        }

def safe_download_youtube(url, download_type='video', format_id=None):
    try:
        logging.info(f"Dossier de téléchargement : {DOWNLOAD_FOLDER}")
        
        # Configuration yt-dlp
        ydl_opts = {
            'outtmpl': os.path.join(DOWNLOAD_FOLDER, '%(title)s.%(ext)s'),
            'nooverwrites': True,
            'no_color': True,
            'no_warnings': True
        }
        
        if download_type == 'mp3':
            ydl_opts.update({
                'format': format_id or 'bestaudio/best',
                'postprocessors': [{
                    'key': 'FFmpegExtractAudio',
                    'preferredcodec': 'mp3',
                    'preferredquality': '192',
                }],
            })
        elif download_type == 'video':
            ydl_opts.update({
                 'format': format_id or 'best',
                            })
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info_dict = ydl.extract_info(url, download=True)
            
            # Récupérer le chemin du fichier téléchargé
            filename = ydl.prepare_filename(info_dict)
            
            # Si c'est un MP3, le nom de fichier sera modifié après le post-processing
            if download_type == 'mp3':
                filename = filename.rsplit('.', 1)[0] + '.mp3'
            
            return {
                "filename": os.path.basename(filename),
                "path": filename,
                "title": info_dict.get('title', 'Untitled')
            }
    
    except Exception as e:
        logging.error(f"Erreur de téléchargement : {str(e)}")
        raise

@app.route('/formats', methods=['POST'])
def get_formats():
    """Endpoint pour récupérer les formats disponibles."""
    url = request.json.get('url')
    if not url:
        return jsonify({"error": "L'URL est requise"}), 400
    
    try:
        formats = get_available_formats(url)
        return jsonify(formats)
    except Exception as e:
        logging.error(f"Erreur : {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/download/video', methods=['POST'])
def download_video():
    """Endpoint pour télécharger une vidéo YouTube."""
    url = request.json.get('url')
    format_id = request.json.get('format_id')  # Format optionnel
    
    if not url:
        return jsonify({"error": "L'URL est requise"}), 400
    
    try:
        result = safe_download_youtube(url, 'video', format_id)
        return jsonify(result)
    except Exception as e:
        logging.error(f"Erreur : {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/download/mp3', methods=['POST'])
def download_mp3():
    """Endpoint pour télécharger l'audio d'une vidéo YouTube au format MP3."""
    url = request.json.get('url')
    format_id = request.json.get('format_id')  # Format optionnel
    
    if not url:
        return jsonify({"error": "L'URL est requise"}), 400
    
    try:
        result = safe_download_youtube(url, 'mp3', format_id)
        return jsonify(result)
    except Exception as e:
        logging.error(f"Erreur : {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/download', methods=['GET'])
def get_file():
    """Endpoint pour récupérer un fichier téléchargé."""
    file_path = request.args.get('file')
    if not file_path:
        return jsonify({"error": "Le chemin du fichier est requis"}), 400
    
    try:
        return send_file(file_path, as_attachment=True)
    except Exception as e:
        logging.error(f"Erreur lors de l'envoi du fichier : {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/cleanup', methods=['POST'])
def cleanup_file():
    """Endpoint pour supprimer un fichier téléchargé."""
    file_path = request.json.get('file')
    if not file_path:
        return jsonify({"error": "Le chemin du fichier est requis"}), 400
    
    try:
        if os.path.exists(file_path):
            os.remove(file_path)
            return jsonify({"success": "Fichier supprimé"}), 200
        else:
            return jsonify({"error": "Fichier non trouvé"}), 404
    except Exception as e:
        logging.error(f"Erreur lors de la suppression du fichier : {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)