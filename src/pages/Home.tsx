// src/pages/Home.tsx

import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Amprima Tech - Transform Your Business with Cutting-Edge Digital Solutions</title>
        <meta
          name="description"
          content="Amprima Tech delivers enterprise-grade website and mobile app development. Custom solutions for ambitious businesses worldwide. Get your free consultation today."
        />
        <meta
          name="keywords"
          content="website development, mobile app development, android apps, iOS apps, custom software, digital solutions, enterprise technology"
        />
        <meta property="og:title" content="Amprima Tech - Enterprise Digital Solutions" />
        <meta
          property="og:description"
          content="Transform your business with cutting-edge websites and mobile apps. Trusted by businesses worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amprima.com" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/60 to-purple-50/60 py-8">
        <div className="w-full max-w-4xl p-8 md:p-14 bg-white rounded-3xl shadow-xl border border-blue-100/50">
          {/* Badge */}
          <div className="flex items-center justify-center mb-6">
            {/* ... Badge Code ... */}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 text-center mb-4">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              With Digital Innovation
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 text-center mb-6 font-medium">
            Enterprise-grade websites and mobile apps that drive growth, enhance user experience, and set you apart from the competition.
          </p>
          {/* Guarantee/metrics/buttons section - beautify buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 mb-4">
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-offset-2 transition-all duration-200">
                Start Your Project
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-white text-blue-700 border-2 border-blue-600 font-semibold px-8 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 ring-offset-2 transition-all duration-200">
                Explore Services
              </button>
            </Link>
          </div>
          {/* Metrics boxes: slightly lighter bg, rounded, shadow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {/* ...metric boxes, add className="rounded-lg bg-blue-50 shadow-sm px-4 py-6 flex flex-col items-center" to each... */}
          </div>
        </div>
      </div>
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <WhatsAppButton variant="floating" />
    </>
  );
};

export default Home;