'use client';
import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Ürünler', href: '#urunler' },
    { label: 'Nasıl Çalışıyoruz', href: '#surec' },
    { label: 'Hizmet Bölgeleri', href: '#bolgeler' },
    { label: 'SSS', href: '#sss' },
    { label: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2" aria-label="Sineklik Avusturya Ana Sayfa">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #83bd81, #6aaa68)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <span className="font-bold text-lg leading-tight" style={{ color: '#404e5e' }}>
              Sineklik<span style={{ color: '#83bd81' }}>Avusturya</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+905403363873"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full text-white transition-all"
              style={{ background: '#83bd81' }}
            >
              <Phone size={15} />
              +90 540 336 38 73
            </a>
            <button
              className="md:hidden p-2 rounded-lg text-gray-600"
              onClick={() => setOpen(!open)}
              aria-label="Menü"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-primary py-1.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+905403363873"
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full text-white w-fit"
            style={{ background: '#83bd81' }}
          >
            <Phone size={15} />
            +90 540 336 38 73
          </a>
        </div>
      )}
    </header>
  );
}
