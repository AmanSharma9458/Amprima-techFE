// src/pages/BusinessModels.tsx

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Banknote, Users, Cloud, Check, ArrowRight } from 'lucide-react';

const models = [
  {
    icon: Banknote,
    title: 'Upfront Model',
    subtitle: 'Fixed scope. Clear pricing. Fast delivery.',
    description:
      'Ideal when you have defined requirements and want full ownership from day one. We scope the project, agree on milestones, and deliver with transparent pricing and no surprises.',
    highlights: [
      'Fixed project quote with milestone-based payments',
      'Full source code and IP ownership on delivery',
      'Defined timeline with weekly progress updates',
      'Best for MVPs, websites, apps, and one-time builds',
    ],
    bestFor: 'Startups, SMBs, and teams with a clear product vision',
    color: 'from-blue-500 to-blue-600',
    badge: 'Most Popular',
  },
  {
    icon: Users,
    title: 'Partnership Program',
    subtitle: 'Shared risk. Shared reward. Long-term growth.',
    description:
      'Built for founders and businesses who want a technology partner invested in their success. We combine our expertise with your domain knowledge to build, iterate, and scale together.',
    highlights: [
      'Reduced upfront investment with revenue-sharing options',
      'Dedicated team acting as your extended tech department',
      'Flexible engagement — equity, profit-share, or hybrid models',
      'Ongoing product strategy, development, and growth support',
    ],
    bestFor: 'Founders seeking a co-building partner, not just a vendor',
    color: 'from-purple-500 to-purple-600',
    badge: 'Strategic',
  },
  {
    icon: Cloud,
    title: 'SaaS Model',
    subtitle: 'Subscribe. Scale. Stay ahead.',
    description:
      'Access enterprise-grade technology through a subscription model. We build and maintain the platform while you focus on your business — with predictable monthly costs and continuous improvements.',
    highlights: [
      'Monthly or annual subscription with no large upfront cost',
      'Continuous updates, maintenance, and feature enhancements',
      'Cloud-hosted, secure, and scalable infrastructure',
      'Dedicated support, SLAs, and performance monitoring',
    ],
    bestFor: 'Businesses needing ongoing platforms, tools, or managed solutions',
    color: 'from-cyan-500 to-teal-600',
    badge: 'Scalable',
  },
];

const BusinessModels = () => {
  return (
    <>
      <Helmet>
        <title>Business Models - Upfront, Partnership & SaaS | Amprima Tech</title>
        <meta
          name="description"
          content="Choose the engagement model that fits your business: upfront fixed pricing, partnership program, or SaaS subscription. Flexible options for every stage of growth."
        />
      </Helmet>

      <div className="min-h-screen pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Flexible Business Models
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every business is different. Choose the engagement model that aligns with your goals,
              budget, and growth stage — we'll adapt to what works best for you.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {models.map((model) => {
                const Icon = model.icon;
                return (
                  <div
                    key={model.title}
                    className="relative flex flex-col rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >
                    {model.badge && (
                      <span className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                        {model.badge}
                      </span>
                    )}

                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${model.color}`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{model.title}</h2>
                    <p className="text-sm font-semibold text-blue-600 mb-4">{model.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{model.description}</p>

                    <ul className="mb-6 flex-grow space-y-3">
                      {model.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mb-6 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">Best for: </span>
                      {model.bestFor}
                    </p>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                    >
                      Discuss This Model
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not Sure Which Model Fits?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a free consultation and we'll recommend the best approach based on your project
              scope, timeline, and business objectives.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-105"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessModels;
