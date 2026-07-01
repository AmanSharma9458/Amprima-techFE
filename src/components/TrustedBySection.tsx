import { Building2, Globe2, Rocket, ShieldCheck } from 'lucide-react';

const industries = [
  'FinTech',
  'HealthTech',
  'E-Commerce',
  'EdTech',
  'SaaS',
  'Real Estate',
  'Logistics',
  'Manufacturing',
];

const stats = [
  { icon: Rocket, value: '50+', label: 'Projects Delivered' },
  { icon: Building2, value: '30+', label: 'Businesses Served' },
  { icon: Globe2, value: '5+', label: 'Countries Reached' },
  { icon: ShieldCheck, value: '98%', label: 'Client Satisfaction' },
];

const partners = [
  { name: 'TechStart', tagline: 'Startup Accelerator', initials: 'TS', accent: 'from-blue-500 to-cyan-500' },
  { name: 'StyleHub', tagline: 'Retail & Fashion', initials: 'SH', accent: 'from-violet-500 to-purple-500' },
  { name: 'FinServe', tagline: 'Financial Services', initials: 'FS', accent: 'from-emerald-500 to-teal-500' },
  { name: 'EduTech Pro', tagline: 'Education Platform', initials: 'ET', accent: 'from-orange-500 to-amber-500' },
  { name: 'HealthPlus', tagline: 'Healthcare Tech', initials: 'HP', accent: 'from-rose-500 to-pink-500' },
  { name: 'RetailPro', tagline: 'Commerce Solutions', initials: 'RP', accent: 'from-indigo-500 to-blue-500' },
];

const TrustedBySection = () => {
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powering Growth Across Sectors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From ambitious startups to established enterprises, teams choose AmprimaTech for
            reliable delivery, transparent collaboration, and long-term partnership.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="relative mb-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max animate-marquee gap-5">
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex min-w-[220px] items-center gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-md"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${partner.accent} text-lg font-bold text-white shadow-lg`}
                >
                  {partner.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{partner.name}</div>
                  <div className="text-sm text-gray-500">{partner.tagline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-blue-50/40 p-8 md:p-10">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
            Industries We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-blue-400 hover:text-blue-700"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
