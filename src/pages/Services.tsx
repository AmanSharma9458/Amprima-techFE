// src/pages/Services.tsx

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { services } from '../data/services';

const gradientMap: Record<string, string> = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  indigo: 'from-indigo-500 to-indigo-600',
  cyan: 'from-cyan-500 to-cyan-600',
  teal: 'from-teal-500 to-teal-600',
  pink: 'from-pink-500 to-pink-600',
  violet: 'from-violet-500 to-violet-600',
  slate: 'from-slate-500 to-slate-600',
  amber: 'from-amber-500 to-amber-600',
  rose: 'from-rose-500 to-rose-600',
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Digital Solutions | Amprima Tech</title>
        <meta
          name="description"
          content="Explore our comprehensive services: web & mobile apps, API integrations, data analytics, UI/UX design, AI agents, IT consulting, managed IT, and marketing."
        />
      </Helmet>

      <div className="min-h-screen pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. We combine creativity, technology, and expertise to deliver exceptional results.
            </p>
          </div>
        </section>

        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          const gradient = gradientMap[service.color];

          return (
            <section
              key={index}
              className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={!isEven ? 'md:order-2' : ''}>
                    <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {service.technologies && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Technologies We Use:</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      to="/contact"
                      className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Get Started
                    </Link>
                  </div>

                  <div className={!isEven ? 'md:order-1' : ''}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
