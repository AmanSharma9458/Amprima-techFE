// src/pages/About.tsx

import { Helmet } from 'react-helmet-async';
import { Target, Eye, Award, Users, Code, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your success is our success. We prioritize understanding your needs and delivering solutions that exceed expectations.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every line of code, every design element is crafted with precision and care.',
    },
    {
      icon: Code,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to bring you cutting-edge solutions that give you a competitive advantage.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in transparent communication and working closely with our clients throughout the entire journey.',
    },
  ];

  const expertise = [
    'React & Next.js',
    'Node.js & Express',
    'TypeScript',
    'Kotlin & Android',
    'Swift & iOS',
    'MongoDB & PostgreSQL',
    'AWS & Cloud Services',
    'RESTful APIs',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Meet the Amprima Tech Team | Our Story & Values</title>
        <meta
          name="description"
          content="Learn about Amprima Tech's mission to transform businesses through technology. Meet our expert team and discover what drives us."
        />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Building Digital Excellence,
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  One Project at a Time
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're a passionate team of developers, designers, and strategists dedicated to transforming businesses through innovative digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses of all sizes with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting impact. We believe technology should be accessible, effective, and transformative.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To become a globally recognized leader in digital innovation, known for delivering exceptional solutions that transform businesses and delight users. We aim to set new standards in quality, creativity, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We work with modern technologies and frameworks to deliver robust, scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {expertise.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center font-semibold text-gray-800 hover:shadow-lg transition-all transform hover:scale-105"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <TrendingUp className="w-10 h-10 mx-auto mb-3 opacity-80" />
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Projects Delivered</div>
                </div>
                <div>
                  <Users className="w-10 h-10 mx-auto mb-3 opacity-80" />
                  <div className="text-4xl font-bold mb-2">40+</div>
                  <div className="text-blue-100">Happy Clients</div>
                </div>
                <div>
                  <Award className="w-10 h-10 mx-auto mb-3 opacity-80" />
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-blue-100">Success Rate</div>
                </div>
                <div>
                  <Code className="w-10 h-10 mx-auto mb-3 opacity-80" />
                  <div className="text-4xl font-bold mb-2">5+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help transform your business with our digital solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;