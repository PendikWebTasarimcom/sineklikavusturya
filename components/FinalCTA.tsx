export default function FinalCTA() {
  return (
    <section id="iletisim" className="py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #404e5e 0%, #2d3a47 100%)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: 'rgba(131,189,129,0.15)', color: '#83bd81' }}
        >
          🇦🇹 Avusturya'ya Özel Hizmet
        </div>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-5 leading-tight">
          Pencereniz İçin En Doğru Sistemi<br />
          <span style={{ color: '#83bd81' }}>Bugün Belirleyin</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
          Ölçülerinizi WhatsApp üzerinden paylaşmanız yeterli.{' '}
          <strong className="text-white">
            <a href="/" className="hover:underline" style={{ color: '#83bd81' }}>Avusturya sineklik</a>
          </strong>{' '}
          siparişiniz için 24 saat içinde şeffaf fiyat teklifinizi hazırlayalım. Gizli maliyet yok,
          sürpriz fatura yok.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20Avusturya%20i%C3%A7in%20sineklik%20fiyat%20teklifi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-bold text-base shadow-xl hover:scale-105 transition-all"
            style={{ background: '#25D366' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.549 4.116 1.515 5.849L0 24l6.334-1.494A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.013-1.374l-.36-.214-3.757.886.948-3.649-.234-.374A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            WhatsApp ile Fiyat Al
          </a>
          <a
            href="tel:+905403363873"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base border-2 text-white hover:bg-white hover:text-gray-800 transition-all"
            style={{ borderColor: 'rgba(255,255,255,0.3)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
            </svg>
            +90 540 336 38 73
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { icon: '📧', label: 'E-Posta', value: 'info@fenetresystems.com', href: 'mailto:info@fenetresystems.com' },
            { icon: '📍', label: 'Adres', value: 'Gebze / Kocaeli, Türkiye', href: '#' },
            { icon: '🏢', label: 'Bayilik', value: 'WhatsApp ile Başvur', href: 'https://wa.me/905403363873?text=Bayilik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.' },
          ].map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:opacity-90 transition-opacity"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <span className="text-xl">{icon}</span>
              <div className="text-left">
                <div className="text-xs text-gray-400">{label}</div>
                <div className="text-sm text-white font-medium">{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
