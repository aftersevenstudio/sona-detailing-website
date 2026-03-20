import Script from 'next/script';

export function Reviews() {
  return (
    <section id='reviews' className='py-24 bg-[#111]'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-[#b4823c] text-xs font-semibold tracking-widest uppercase mb-3'>What Customers Say</p>
          <h2 className='text-4xl sm:text-5xl font-bold text-white tracking-tight'>5-Star Results</h2>
          <p className='mt-4 text-white/50 max-w-lg mx-auto'>
            Don&apos;t take our word for it. Here&apos;s what our customers across Frisco and DFW are saying.
          </p>
        </div>

        {/* Elfsight Reviews Embed */}
        <Script src='https://elfsightcdn.com/platform.js' strategy='lazyOnload' />
        <div className='elfsight-app-f2c60f78-28f0-4a3a-ba99-17312c762ce1' data-elfsight-app-lazy />

        {/* Bottom CTA */}
        <div className='mt-14 text-center'>
          <a
            href='#booking'
            className='inline-flex items-center justify-center gap-2 bg-[#b4823c] hover:bg-[#c9933f] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200'
          >
            Book Your Detail Today
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
