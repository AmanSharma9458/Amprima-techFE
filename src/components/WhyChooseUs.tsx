// src/components/WhyChooseUs.tsx

import { Award, Clock, Users, Headphones, Code, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Quality First',
      description:
        'We never compromise on quality. Every project is crafted with precision, attention to detail, and adherence to industry best practices.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description:
        'Your time is valuable. We respect deadlines and deliver projects on schedule without sacrificing quality.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description:
        'Our team consists of seasoned developers, designers, and strategists with years of experience in their fields.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description:
        'Round-the-clock support ensures your business never stops. We are always here when you need us.',
    },
    {
      icon: Code,
      title: 'Modern Technology',
      description:
        'We use cutting-edge technologies and frameworks to build scalable, future-proof solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Results Driven',
      description:
        'Our focus is on delivering measurable results that drive growth and exceed your expectations.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine innovation, expertise, and dedication to deliver solutions that transform
            businesses and delight users.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;