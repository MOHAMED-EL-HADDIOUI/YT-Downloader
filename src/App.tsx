import React from 'react';
import { Header } from './components/Header';
import { DownloadForm } from './components/DownloadForm';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Container } from './components/ui/Container';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <Container>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Download YouTube Videos & MP3s
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fast, free, and easy way to download videos from YouTube in HD quality or convert them to MP3.
              </p>
            </div>
            
            <div className="flex justify-center">
              <DownloadForm />
            </div>
          </Container>
        </section>

        <Features />
        <FAQ />
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <Container>
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} YT Downloader. This service is for personal use only.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;