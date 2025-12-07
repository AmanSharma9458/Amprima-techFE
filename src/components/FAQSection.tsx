// src/components/FAQSection.tsx

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does Amprima Tech offer?',
      answer:
        'We specialize in website development, Android app development, iOS app development, and custom software solutions. From simple landing pages to complex enterprise applications, we handle projects of all sizes and complexities.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'Project timelines vary based on complexity and scope. A basic website typically takes 2-4 weeks, while mobile apps can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.',
    },
    {
      question: 'What is your development process?',
      answer:
        'We follow a structured 4-step process: Discovery & Planning, Design & Strategy, Development, and Launch & Support. This ensures transparency, quality, and on-time delivery. We use agile methodology with regular check-ins and demos.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer:
        'Yes! We offer comprehensive post-launch support including bug fixes, updates, maintenance, and feature enhancements. We also provide 24/7 support to ensure your application runs smoothly and your business never stops.',
    },
    {
      question: 'What technologies do you work with?',
      answer:
        'We use modern, industry-standard technologies including React, Node.js, TypeScript for web development; Kotlin and Java for Android; Swift for iOS; and various cloud platforms like AWS and Azure. We choose the best tech stack for each project.',
    },
    {
      question: 'How much does a project cost?',
      answer:
        'Project costs vary based on requirements, features, and complexity. We provide transparent, detailed quotes after understanding your needs. Contact us for a free consultation and personalized quote for your project.',
    },
    {
      question: 'Can you work with my existing team or systems?',
      answer:
        'Absolutely! We excel at collaborating with existing teams and integrating with current systems. Whether you need to augment your team, modernize legacy systems, or build new features, we adapt to your workflow.',
    },
    {
      question: 'What makes Amprima Tech different?',
      answer:
        'Our commitment to quality, transparent communication, on-time delivery, and client satisfaction sets us apart. We treat every project as our own, focusing on long-term partnerships rather than one-time transactions.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about working with Amprima Tech. Can't find what you're
            looking for? Feel free to contact us!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;