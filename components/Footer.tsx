export default function Footer() {
  const products = [
    { name: 'Sineklik', href: '/' },
    { name: 'Plise Sineklik', href: '/' },
    { name: 'Plise Perde', href: '/' },
    { name: 'Jaluzi Perde', href: '/' },
    { name: 'Düet Perde', href: '/' },
    { name: 'Honeycomb Perde', href: '/' },
    { name: 'Zip Perde', href: '/' },
  ];

  const socials = [
    { name: 'Facebook', href: 'https://www.facebook.com/FenetreSystems/', icon: 'f' },
    { name: 'Instagram', href: 'https://www.instagram.com/fenetresystems/', icon: 'ig' },
    { name: 'X / Twitter', href: 'https://x.com/FenetreSystems', icon: 'x' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/fenetresystems/', icon: 'in' },
    { name: 'Pinterest', href: 'https://tr.pinterest.com/fenetresystems/', icon: 'p' },
    { name: 'YouTube', href: 'https://www.youtube.com/@FenetreSystems', icon: 'yt' },
  ];

  return (
    <footer style={{ background: '#1a2330' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#83bd81' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <span className="text-white font-bold text-base">
                Sineklik<span style={{ color: '#83bd81' }}>Avusturya</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              <a href="/" style={{ color: '#83bd81' }} className="font-semibold hover:underline">Fenetre Systems</a> markası altında
              üretilen sistemler. Gebze'den Avusturya'ya kaliteli teslimat.
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white transition-opacity hover:opacity-80"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  {s.icon.toUpperCase().slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Ürünler</h4>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Hizmet Bölgeleri</h4>
            <ul className="space-y-1.5">
              {['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Salzburg', 'Kärnten', 'Burgenland', 'Vorarlberg'].map((b) => (
                <li key={b} className="text-sm text-gray-400">{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+905403363873" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <span style={{ color: '#83bd81' }}>📞</span>
                  +90 540 336 38 73
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905403363873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span style={{ color: '#83bd81' }}>💬</span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@fenetresystems.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <span style={{ color: '#83bd81' }}>✉️</span>
                  info@fenetresystems.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <span style={{ color: '#83bd81' }} className="shrink-0">📍</span>
                Cumhuriyet Mah. 2233 Sok. No:4/A<br />Gebze / Kocaeli
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Sineklik Avusturya. Tüm hakları saklıdır.
            Üretici:{' '}
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="noopener noreferrer dofollow"
              className="hover:text-white transition-colors"
              style={{ color: '#83bd81' }}
            >
              Fenetre Systems
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <a href="/" className="hover:text-white transition-colors">
              <a href="/" style={{ color: '#83bd81' }} className="font-medium hover:underline">Avusturya Sineklik</a>
            </a>
            <span>·</span>
            <a href="/" className="hover:text-white">
              <span style={{ color: '#a8d4a6' }}>Plise Perde</span>
            </a>
            <span>·</span>
            <a href="/" className="hover:text-white">
              <span style={{ color: '#a8d4a6' }}>Zip Perde</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
