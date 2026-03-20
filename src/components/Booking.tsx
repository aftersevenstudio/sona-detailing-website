'use client';

import { useEffect, useRef } from 'react';

export function Booking() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const src = 'https://square.site/appointments/buyer/widget/g50dvk7kxlkfnw/L3PD72G0C9C8F.js';
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    containerRef.current.appendChild(script);

    // Watch for the iframe Square injects and force its height
    const observer = new MutationObserver(() => {
      const iframe = containerRef.current?.querySelector('iframe');
      if (iframe) {
        iframe.style.minHeight = '800px';
        iframe.style.height = '800px';
        iframe.style.width = '100%';
      }
    });

    observer.observe(containerRef.current, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section id='booking' className='py-24 bg-[#0d0d0d]'>
      <div className='max-w-4xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-12'>
          <p className='text-[#b4823c] text-xs font-semibold tracking-widest uppercase mb-3'>Get on the Schedule</p>
          <h2 className='text-4xl sm:text-5xl font-bold text-white tracking-tight'>Book Your Detail</h2>
          <p className='mt-4 text-white/50 max-w-lg mx-auto'>
            Pick a date and time that works for you. We&apos;ll come to your home, office, or anywhere in the Frisco area.
          </p>
        </div>

        {/* Square Embed */}
        <div ref={containerRef} style={{ minHeight: '800px' }} />
      </div>
    </section>
  );
}
