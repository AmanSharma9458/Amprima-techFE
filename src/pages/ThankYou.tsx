// src/pages/ThankYou.tsx

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Mail, Home, Clock } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You - We'll Be In Touch Soon | Amprima Tech</title>
        <meta name="description" content="Thank you for contacting Amprima Tech. We'll review your inquiry and get back to you within 24 hours." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Success Icon */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce">
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You! We've Received Your Inquiry
            </h1>
            <p className="text-xl text-gray-600">
              Your project details have been delivered to our team.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-7 h-7 text-blue-600 mr-3" />
              What Happens Next
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Within 24 Hours</h3>
                  <p className="text-gray-600">
                    We'll review your requirements and reach out via phone or email to discuss your
                    project in detail.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">During Our Call</h3>
                  <p className="text-gray-600">
                    We'll ask clarifying questions about your goals and requirements, discuss
                    timeline and budget considerations, and explain our process.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Next Steps</h3>
                  <p className="text-gray-600">
                    If we're a good fit, we'll prepare a detailed proposal outlining scope,
                    timeline, and investment for your review.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* In the Meantime */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-8 border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">In the Meantime</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                Check your email (including spam folder) for our confirmation
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                Prepare any reference websites or apps you admire
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                Think about your target audience and key features you need
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                Browse our{' '}
                <Link to="/services" className="text-blue-600 font-semibold hover:underline">
                  services page
                </Link>{' '}
                to learn more about what we offer
              </li>
            </ul>
          </div>

          {/* Contact Options */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              If you have any urgent questions or need to provide additional information, feel free
              to reach out to us directly:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="tel:+919675859742"
                className="flex items-center justify-center space-x-3 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call: +91 96758 59742</span>
              </a>
              
              <WhatsAppButton 
                variant="primary" 
                className="w-full"
                text="WhatsApp Us"
              />
            </div>

            <div className="mt-4">
              <a
                href="mailto:sayyedaqib8408@gmail.com"
                className="flex items-center justify-center space-x-3 px-6 py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email: sayyedaqib8408@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Return Home */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>Return to Homepage</span>
            </Link>
          </div>

          {/* Thank You Note */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 italic">
              "We're excited about the possibility of working with you and helping bring your
              digital vision to life!"
            </p>
            <p className="text-gray-500 mt-2">— The Amprima Tech Team</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;