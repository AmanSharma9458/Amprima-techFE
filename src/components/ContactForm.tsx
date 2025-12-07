// src/components/ContactForm.tsx

import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Loader } from 'lucide-react';
import { submitLead } from '../api';
import type { LeadFormData } from '../types';

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    serviceInterest: '',
    message: '',
    hearAboutUs: '',
    source: 'Website',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitLead(formData);
      navigate('/thank-you');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
            placeholder="John Doe"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
            placeholder="+91 9876543210"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
            placeholder="Your Company"
          />
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-700 mb-2">
          Service Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          required
          value={formData.serviceInterest}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
        >
          <option value="">Select a service</option>
          <option value="Website Development">Website Development</option>
          <option value="Android App Development">Android App Development</option>
          <option value="iOS App Development">iOS App Development</option>
          <option value="Multiple Services">Multiple Services</option>
          <option value="Not Sure">Not Sure - Need Consultation</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors resize-none"
          placeholder="Tell us about your project, goals, and any specific requirements..."
        />
      </div>

      {/* How did you hear about us */}
      <div>
        <label htmlFor="hearAboutUs" className="block text-sm font-semibold text-gray-700 mb-2">
          How did you hear about us?
        </label>
        <select
          id="hearAboutUs"
          name="hearAboutUs"
          value={formData.hearAboutUs}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
        >
          <option value="">Select an option</option>
          <option value="Google Search">Google Search</option>
          <option value="Social Media">Social Media</option>
          <option value="Referral">Referral</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send My Inquiry
          </>
        )}
      </button>

      <p className="text-sm text-gray-600 text-center">
        By submitting this form, you agree to be contacted by our team regarding your inquiry.
      </p>
    </form>
  );
};

export default ContactForm;