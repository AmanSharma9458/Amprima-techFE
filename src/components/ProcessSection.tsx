// src/components/ProcessSection.tsx

import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Discovery & Planning',
      description:
        'We start by understanding your goals, target audience, and project requirements. Through detailed discussions, we create a comprehensive project roadmap.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Design & Strategy',
      description:
        'Our design team creates stunning mockups and user experiences. We plan the technical architecture and choose the best technologies for your project.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Code,
      number: '03',
      title: 'Development',
      description:
        'Our expert developers bring designs to life with clean, efficient code. We follow agile methodology with regular updates and feedback loops.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch & Support',
      description:
        'After rigorous testing, we deploy your project to production. Post-launch, we provide ongoing support, maintenance, and optimization.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven, systematic approach to delivering exceptional digital solutions. From concept
            to launch, we guide you every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow (Desktop only, not on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-gray-200 border-b-8 border-b-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Ready to start your project with a proven process?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Let's Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;