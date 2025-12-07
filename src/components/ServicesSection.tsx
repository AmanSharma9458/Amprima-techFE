// src/components/ServicesSection.tsx

import { Monitor, Smartphone, TabletSmartphone, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Website Development',
      description:
        'Custom, responsive websites built with modern technologies. From landing pages to complex web applications, we bring your vision to life.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
      color: 'blue',
    },
    {
      icon: Smartphone,
      title: 'Android App Development',
      description:
        'Native Android applications that deliver exceptional user experiences. Built with Kotlin and Java for optimal performance.',
      features: ['Material Design', 'Play Store Ready', 'Push Notifications', 'Offline Support'],
      color: 'green',
    },
    {
      icon: TabletSmartphone,
      title: 'iOS App Development',
      description:
        'Elegant iOS applications following Apple guidelines. Swift-powered apps that users love on iPhone and iPad.',
      features: ['SwiftUI', 'App Store Optimized', 'iCloud Integration', 'Apple Pay Support'],
      color: 'purple',
    },
    {
      icon: Code2,
      title: 'Custom Software Solutions',
      description:
        'Tailored software solutions for your unique business needs. From automation to enterprise systems, we build it all.',
      features: ['API Development', 'Database Design', 'Cloud Solutions', 'Third-party Integration'],
      color: 'orange',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-400',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      hover: 'hover:border-green-400',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-400',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      hover: 'hover:border-orange-400',
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. We combine creativity,
            technology, and expertise to deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all hover:shadow-xl transform hover:-translate-y-1 bg-white`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;