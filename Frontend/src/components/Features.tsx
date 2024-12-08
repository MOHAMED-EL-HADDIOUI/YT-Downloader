import React from 'react';
import { Shield, Zap, Globe, CheckCircle } from 'lucide-react';
import { Container } from './ui/Container';
import { Feature } from '../types';

const features: Feature[] = [
  {
    icon: <Shield className="h-6 w-6 text-red-600" />,
    title: 'Safe & Secure',
    description: 'Download videos safely without any third-party software or malware risks.'
  },
  {
    icon: <Zap className="h-6 w-6 text-red-600" />,
    title: 'Lightning Fast',
    description: 'High-speed downloads with our optimized servers and infrastructure.'
  },
  {
    icon: <Globe className="h-6 w-6 text-red-600" />,
    title: 'All Platforms',
    description: 'Support for all YouTube platforms including Music, Gaming, and Kids.'
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-red-600" />,
    title: 'High Quality',
    description: 'Download in the highest available quality up to 4K resolution.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Our Downloader?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}