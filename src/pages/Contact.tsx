// src/pages/Contact.tsx

import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get Your Free Consultation | Amprima Tech</title>
        <meta
          name="description"
          content="Ready to start your project? Contact Amprima Tech today for a free consultation. Call, email, or fill out our form to get started."
        />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear about it. Fill out the form below or reach out directly, and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                {/* Contact Cards */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:+919675859742"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +91 96758 59742
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Mon-Sat, 9 AM - 7 PM IST</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:sayyedaqib8408@gmail.com"
                    className="text-gray-600 hover:text-purple-600 transition-colors break-all"
                  >
                    sayyedaqib8408@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">
                    Salem, Tamil Nadu
                    <br />
                    India
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl shadow-lg text-white">
                  <Clock className="w-8 h-8 mb-4 opacity-90" />
                  <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                  <div className="space-y-2 text-blue-100">
                    <p>Monday - Friday: 9 AM - 7 PM</p>
                    <p>Saturday: 10 AM - 5 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <WhatsAppButton variant="primary" className="w-full" />
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                    <p className="text-gray-600">
                      Fill out the form below with your project details, and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Happens After You Contact Us?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">
                  We'll review your inquiry and reach out within 24 hours to discuss your project.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Consultation</h3>
                <p className="text-gray-600">
                  We'll schedule a call to understand your needs, goals, and timeline in detail.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Proposal</h3>
                <p className="text-gray-600">
                  You'll receive a comprehensive proposal with timeline, costs, and next steps.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;