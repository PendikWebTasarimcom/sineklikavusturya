import { Shield, Truck, Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0faf0 0%, #ffffff 50%, #f4f7fa 100%)' }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2383bd81' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{ background: '#e8f5e8', color: '#404e5e' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ background: '#83bd81' }} />
              Avusturya'ya 4–10 Günde Teslimat
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5" style={{ color: '#404e5e' }}>
              <a href="/" className="hover:underline decoration-primary">
                Sineklik Avusturya
              </a>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 font-semibold" style={{ color: '#83bd81' }}>
                Fenetre Systems Farkıyla
              </span>
            </h1>

            <div className="prose-content mb-7">
              <p>
                Türkiye'de <strong>Fenetre Systems</strong> atölyelerinde üretilen{' '}
                <a href="/" className="font-semibold underline decoration-primary hover:text-primary" style={{ color: '#404e5e' }}>
                  sineklik
                </a>{' '}
                sistemlerimiz, Wien'den Bregenz'e kadar <em>dokuz eyaletin tamamına</em> demonte hâlde adrese ulaşır.
                Yalnızca ürün göndermiyoruz; montaj kılavuzunu, eksiksiz aksesuarları ve kurulum desteğini de
                birlikte sunuyoruz. Avusturya pazarının beklediği{' '}
                <u>Avrupa standardı</u> kalite, Türk üretim avantajıyla buluştuğunda ortaya çıkan fark —
                fiyat değil, değer.
              </p>
              <p>
                <a href="/" className="font-semibold hover:text-primary" style={{ color: '#83bd81' }}>
                  Avusturya sineklik
                </a>{' '}
                çözümlerimiz yalnızca pencereyi kapatan bir ağ değil; ışık, hava ve mahremiyet
                dengesini kuran mühendislik ürünleridir. Burgenland'ın yaz sıcağından
                Vorarlberg'in dağ brizine, her iklim koşulu için farklı bir sistem tasarladık.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20fiyat%20bilgisi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg transition-all hover:shadow-xl hover:scale-105"
                style={{ background: '#25D366' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.549 4.116 1.515 5.849L0 24l6.334-1.494A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.013-1.374l-.36-.214-3.757.886.948-3.649-.234-.374A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                WhatsApp ile Fiyat Al
              </a>
              <a
                href="tel:+905403363873"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: '#404e5e', color: '#404e5e' }}
              >
                Hemen Ara
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {[
                { icon: Shield, text: 'Avrupa Standartı Üretim' },
                { icon: Truck, text: '4–10 Gün Teslimat' },
                { icon: Star, text: '2 Yıl Garanti' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon size={16} className="shrink-0" style={{ color: '#83bd81' }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div
                className="w-full h-[420px] rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="340" height="300" viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="20" width="260" height="260" rx="12" fill="white" stroke="#83bd81" strokeWidth="3"/>
                    <rect x="40" y="20" width="130" height="130" rx="4" fill="#f0faf0" stroke="#83bd81" strokeWidth="2"/>
                    <rect x="170" y="20" width="130" height="130" rx="4" fill="#f0faf0" stroke="#83bd81" strokeWidth="2"/>
                    <rect x="40" y="150" width="130" height="130" rx="4" fill="#f0faf0" stroke="#83bd81" strokeWidth="2"/>
                    <rect x="170" y="150" width="130" height="130" rx="4" fill="#f0faf0" stroke="#83bd81" strokeWidth="2"/>
                    {[...Array(8)].map((_, i) => (
                      <line key={`h1-${i}`} x1="40" y1={32 + i * 13} x2="170" y2={32 + i * 13} stroke="#83bd81" strokeWidth="0.8" opacity="0.4"/>
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <line key={`v1-${i}`} x1={52 + i * 15} y1="20" x2={52 + i * 15} y2="150" stroke="#83bd81" strokeWidth="0.8" opacity="0.4"/>
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <line key={`h2-${i}`} x1="170" y1={32 + i * 13} x2="300" y2={32 + i * 13} stroke="#83bd81" strokeWidth="0.8" opacity="0.4"/>
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <line key={`v2-${i}`} x1={182 + i * 15} y1="20" x2={182 + i * 15} y2="150" stroke="#83bd81" strokeWidth="0.8" opacity="0.4"/>
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <line key={`h3-${i}`} x1="40" y1={162 + i * 13} x2="170" y2={162 + i * 13} stroke="#83bd81" strokeWidth="0.8" opacity="0.4"/>
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <line key={`v3-${i}`} x1={52 + i * 15} y1="150" x2={52 + i * 15} y2="280" stroke="#83bd81" strokeWidth="0.8" opacity="0.4"/>
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <line key={`h4-${i}`} x1="170" y1={162 + i * 13} x2="300" y2={162 + i * 13} stroke="#83bd81" strokeWidth="0.8" opacity="0.4"/>
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <line key={`v4-${i}`} x1={182 + i * 15} y1="150" x2={182 + i * 15} y2="280" stroke="#83bd81" strokeWidth="0.8" opacity="0.4"/>
                    ))}
                    <text x="170" y="155" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#404e5e">Sineklik Avusturya</text>
                    <text x="170" y="172" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#83bd81">Fenetre Systems</text>
                  </svg>
                </div>

                <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="text-xs font-bold text-gray-500 mb-1">TESLİMAT</div>
                  <div className="text-lg font-extrabold" style={{ color: '#83bd81' }}>4–10 Gün</div>
                  <div className="text-xs text-gray-400">Tüm Avusturya</div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#e8f5e8' }}>
                      <span className="text-sm">🇦🇹</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: '#404e5e' }}>9 Eyalet</div>
                      <div className="text-xs text-gray-400">Tam Kapsama</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { number: '9', label: 'Avusturya Eyaleti' },
              { number: '7+', label: 'Ürün Ailesi' },
              { number: '4–10', label: 'Gün Teslimat' },
              { number: '2 Yıl', label: 'Ürün Garantisi' },
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold" style={{ color: '#83bd81' }}>{number}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
