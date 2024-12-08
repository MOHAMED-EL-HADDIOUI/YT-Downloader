import React from 'react';
import { Container } from './ui/Container';
import { FAQ as FAQType } from '../types';

const faqs: FAQType[] = [
  {
    question: 'Is it legal to download YouTube videos?',
    answer: 'Downloading videos for personal use is generally acceptable. However, please respect copyright laws and content creators\' rights.'
  },
  {
    question: 'What formats are supported?',
    answer: 'We support MP4 for video downloads and MP3 for audio downloads, in various quality levels up to 4K for videos.'
  },
  {
    question: 'Is there a limit to how many videos I can download?',
    answer: 'There are no strict limits, but we encourage responsible usage to maintain service quality for all users.'
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No account is required. Simply paste your YouTube URL and start downloading right away.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}