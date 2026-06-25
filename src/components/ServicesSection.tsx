// src/components/ServicesSection.tsx

import { Link } from 'react-router-dom';
import { services } from '../data/services';

const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-400' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', hover: 'hover:border-green-400' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:border-purple-400' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', hover: 'hover:border-indigo-400' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', hover: 'hover:border-cyan-400' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', hover: 'hover:border-teal-400' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', hover: 'hover:border-pink-400' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', hover: 'hover:border-violet-400' },
  slate: { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', hover: 'hover:border-slate-400' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', hover: 'hover:border-amber-400' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200', hover: 'hover:border-rose-400' },
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. We combine creativity,
            technology, and expertise to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all hover:shadow-xl transform hover:-translate-y-1 bg-white`}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>

                <div className="space-y-1.5">
                  {service.features.slice(0, 4).map((feature, idx) => (
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
