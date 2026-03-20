const galleryItems = [
  { label: 'Sedan — Full Detail', before: 'Dusty interior, stained seats', after: 'Like new inside and out' },
  { label: 'SUV — Interior', before: 'Pet hair, crumbs everywhere', after: 'Deep cleaned, odor-free' },
  { label: 'Truck — Exterior', before: 'Road grime, faded trim', after: 'Glossy finish, trim restored' },
  { label: 'Sports Car — Paint', before: 'Swirl marks, light scratches', after: 'Single-stage correction' },
];

export function Gallery() {
  return (
    <section id='gallery' className='py-24 bg-[#111]'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-[#b4823c] text-xs font-semibold tracking-widest uppercase mb-3'>The Work</p>
          <h2 className='text-4xl sm:text-5xl font-bold text-white tracking-tight'>Before &amp; After</h2>
          <p className='mt-4 text-white/50 max-w-lg mx-auto'>
            Real results from real customers. Photos added regularly — follow us on Instagram for the latest.
          </p>
        </div>

        {/* Grid */}
        <div className='grid sm:grid-cols-2 gap-6'>
          {galleryItems.map((item) => (
            <div key={item.label} className='rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]'>
              {/* Before / After panels */}
              <div className='grid grid-cols-2 divide-x divide-white/10'>
                {/* Before */}
                <div className='aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#222] flex flex-col items-center justify-center p-4'>
                  <span className='text-xs font-semibold tracking-widest uppercase text-white/30 mb-2'>Before</span>
                  <p className='text-white/25 text-xs text-center leading-relaxed'>{item.before}</p>
                </div>
                {/* After */}
                <div className='aspect-[4/3] bg-gradient-to-br from-[#1c1509] to-[#221a08] flex flex-col items-center justify-center p-4'>
                  <span className='text-xs font-semibold tracking-widest uppercase text-[#b4823c]/60 mb-2'>After</span>
                  <p className='text-[#b4823c]/50 text-xs text-center leading-relaxed'>{item.after}</p>
                </div>
              </div>
              <div className='px-5 py-3 border-t border-white/10'>
                <p className='text-sm text-white/60 font-medium'>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo placeholder notice */}
        <div className='mt-10 rounded-xl border border-dashed border-white/10 p-6 text-center'>
          <p className='text-white/30 text-sm'>
            📸 Replace these cards with real before/after photos once provided by the client.
          </p>
        </div>
      </div>
    </section>
  );
}
