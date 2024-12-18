import { useState } from 'react';
import { Download, Music, Video } from 'lucide-react';
import { Button } from './ui/Button';
import { DownloadFormat } from '../types';

export function DownloadForm() {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState<DownloadFormat>('video');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Vérifier si l'URL est valide
    if (!url || !/^https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|.+\/)([A-Za-z0-9_-]{11})/.test(url)) {
      setError('L\'URL YouTube est invalide.');
      setLoading(false);
      return;
    }
    
    try {
      const payload = {
        url: url,
        format: format,
      };
      
      console.log('Payload envoyé :', payload);
      
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      console.log('Statut de la réponse :', response.status);
      
      if (!response.ok) {
        // Essayez de lire le corps de la réponse pour plus de détails
        const errorText = await response.text();
        console.error('Réponse d\'erreur :', errorText);
        throw new Error(errorText || 'Une erreur est survenue');
      }
  
      const blob = await response.blob();
      const URL = window.URL || (window as any).webkitURL;
      const fileURL = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = fileURL;
      
      const filename = response.headers.get('content-disposition')
        ?.split('filename=')[1]
        ?.replace(/"/g, '')
        || `youtube-${format}-${Date.now()}.${format === 'video' ? 'mp4' : 'mp3'}`;
      
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(fileURL);
    } catch (err: any) {
      console.error('Erreur complète :', err);
      setError(err.message || 'Une erreur inattendue s\'est produite');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            URL YouTube
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Collez votre URL YouTube ici"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 bg-gray-50"
            required
          />
        </div>

        <div className="flex space-x-4">
          <Button
            type="button"
            variant={format === 'video' ? 'primary' : 'secondary'}
            className="flex-1"
            onClick={() => setFormat('video')}
          >
            <Video className="h-5 w-5" />
            <span>Vidéo</span>
          </Button>

          <Button
            type="button"
            variant={format === 'audio' ? 'primary' : 'secondary'}
            className="flex-1"
            onClick={() => setFormat('audio')}
          >
            <Music className="h-5 w-5" />
            <span>Audio</span>
          </Button>
        </div>

        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2"
          disabled={loading}
        >
          <Download className="h-5 w-5" />
          <span>{loading ? 'Téléchargement...' : 'Télécharger'}</span>
        </Button>

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}