const services = [
  {
    name: 'Exterior Detail',
    price: 'From $80',
    description: 'Hand wash, clay bar, tire dressing, window cleaning, and exterior wipe-down.',
    features: ['Hand wash & dry', 'Clay bar treatment', 'Tire & trim dressing', 'Window cleaning', 'Exterior wipe-down'],
  },
  {
    name: 'Interior Detail',
    price: 'From $100',
    description: 'Deep vacuum, surface wipe-down, leather or fabric conditioning, and odor treatment.',
    features: ['Deep vacuum', 'Dash & console cleaning', 'Leather/fabric conditioning', 'Door jamb cleaning', 'Odor treatment'],
    featured: true,
  },
  {
    name: 'Full Detail',
    price: 'From $160',
    description: 'Complete interior and exterior package — the full Sona experience.',
    features: ['Everything in Exterior', 'Everything in Interior', 'Engine bay wipe-down', 'Spot paint correction', 'UV protectant applied'],
  },
];

export function Services() {
  return (
    <section id='services' className='py-24 bg-[#0d0d0d]'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-[#b4823c] text-xs font-semibold tracking-widest uppercase mb-3'>What We Offer</p>
          <h2 className='text-4xl sm:text-5xl font-bold text-white tracking-tight'>
            Service Packages
          </h2>
          <p className='mt-4 text-white/50 max-w-xl mx-auto'>
            Pricing varies by vehicle size. SUVs and trucks may be slightly higher. All services performed at your location.
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-3 gap-6'>
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl p-8 border transition-colors duration-200 ${
                service.featured
                  ? 'bg-[#b4823c]/10 border-[#b4823c]/50'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20'
              }`}
            >
              {service.featured && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2'>
                  <span className='bg-[#b4823c] text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full'>
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className='text-xl font-bold text-white mb-1'>{service.name}</h3>
              <p className='text-[#b4823c] text-2xl font-bold mb-4'>{service.price}</p>
              <p className='text-white/50 text-sm mb-6 leading-relaxed'>{service.description}</p>

              <ul className='space-y-2'>
                {service.features.map((feature) => (
                  <li key={feature} className='flex items-center gap-2 text-sm text-white/70'>
                    <svg className='w-3.5 h-3.5 text-[#b4823c] shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href='#booking'
                className={`mt-8 block text-center font-semibold py-3 px-6 rounded-lg text-sm transition-colors duration-200 ${
                  service.featured
                    ? 'bg-[#b4823c] hover:bg-[#c9933f] text-white'
                    : 'border border-white/20 hover:border-white/40 text-white/80 hover:text-white'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <p className='text-center text-white/30 text-xs mt-8'>
          Not sure which package you need? <a href='#booking' className='text-[#b4823c] hover:underline'>Book a consultation </a> and we&apos;ll recommend the best fit.
        </p>
      </div>
    </section>
  );
}
