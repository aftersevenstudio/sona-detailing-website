export function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-[#0d0d0d] overflow-hidden pt-16 sm:pt-0'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#1a1a1a]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(180,130,60,0.08),_transparent_60%)]' />

      <div className='relative z-10 max-w-5xl mx-auto px-6 text-center'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 border border-[#b4823c]/40 text-[#b4823c] text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8'>
          <span className='w-1.5 h-1.5 rounded-full bg-[#b4823c] inline-block' />
          Frisco, TX &amp; DFW Suburbs
        </div>

        {/* Headline */}
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6'>
          Your Car Deserves{' '}
          <span className='text-[#b4823c]'>Better</span>
          <br />
          We Come to You.
        </h1>

        {/* Subheadline */}
        <p className='text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed'>
          Sona Mobile Detailing delivers professional-grade auto detailing at your home or office.
          No drop-offs, no waiting. Just a spotless car.
        </p>

        {/* CTAs */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href='#booking'
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b4823c] hover:bg-[#c9933f] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200'
          >
            Book Your Detail
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </a>
          <a
            href='#services'
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-4 rounded-lg text-base transition-colors duration-200'
          >
            View Services
          </a>
        </div>

        {/* Trust bar */}
        <div className='mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40'>
          <span className='flex items-center gap-2'>
            <svg className='w-4 h-4 text-[#b4823c]' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
            Mobile — We Come to You
          </span>
          <span className='flex items-center gap-2'>
            <svg className='w-4 h-4 text-[#b4823c]' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
            Frisco &amp; DFW Area
          </span>
          <span className='flex items-center gap-2'>
            <svg className='w-4 h-4 text-[#b4823c]' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
            Professional-Grade Products
          </span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent' />
    </section>
  );
}
