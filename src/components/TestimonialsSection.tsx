// src/components/TestimonialsSection.tsx

import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0D8ABC&color=fff&size=128',
      rating: 5,
      text: 'Amprima Tech delivered our e-commerce platform ahead of schedule. Their attention to detail and commitment to quality is outstanding. Highly recommended!',
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, StyleHub',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=6366f1&color=fff&size=128',
      rating: 5,
      text: 'The mobile app they built for us has received amazing feedback from our customers. Professional team, excellent communication, and great results.',
    },
    {
      name: 'Amit Patel',
      role: 'Director, FinServe Solutions',
      image: 'https://ui-avatars.com/api/?name=Amit+Patel&background=ec4899&color=fff&size=128',
      rating: 5,
      text: 'Working with Amprima Tech was a game-changer for our business. They understood our vision and delivered a solution that exceeded our expectations.',
    },
  ];

  const clients = [
    { name: 'TechStart', logo: 'TS' },
    { name: 'StyleHub', logo: 'SH' },
    { name: 'FinServe', logo: 'FS' },
    { name: 'EduTech', logo: 'ET' },
    { name: 'HealthPlus', logo: 'HP' },
    { name: 'RetailPro', logo: 'RP' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about
            working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Trusted By</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{client.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;