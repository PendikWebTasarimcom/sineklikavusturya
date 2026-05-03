export default function Products() {
  const products = [
    {
      name: 'Sineklik',
      nameDe: 'Fliegengitter',
      desc: 'Klasik sabit sineklik çerçevesi; tek profil, çift işlev. Pencere açıklığına göre üretilir, defalarca söküp takılabilir.',
      features: ['Alüminyum çerçeve', '18×16 mesh ağ', 'Renk seçeneği', 'Montajsız kurulum'],
      icon: '🪟',
    },
    {
      name: 'Plise Sineklik',
      nameDe: 'Plissee-Fliegenschutz',
      desc: 'Yana doğru katlanan körük sistemi. Dar çerçeve profiliyle pencereyi kapatmaz; açılınca tamamen görünmez hâle gelir.',
      features: ['Körük katlama', '0,4 mm profil', 'Tek & çift kanat', 'Standart + özel ölçü'],
      icon: '🔲',
    },
    {
      name: 'Plise Perde',
      nameDe: 'Plisseerollo',
      desc: 'Işığı süzer, sineği engeller. Aynı anda hem güneş kontrolü hem böcek bariyeri sağlar; iç mekânı ikiye bölen zarif yapısıyla öne çıkar.',
      features: ['Güneş filtreli kumaş', 'Hafif kaplama', 'Duet & tekli', 'Renk kataloğu'],
      icon: '🌅',
    },
    {
      name: 'Jaluzi Perde',
      nameDe: 'Jalousie',
      desc: 'Alüminyum lamellerle ışığı açı açı yönetin. Ofis ve yaşam alanları için tercih edilen bu sistem Avusturya\'da giderek daha fazla rağbet görüyor.',
      features: ['25 / 50 mm lamel', 'Motorlu seçenek', 'UV dayanımı', 'Anti-statik kaplama'],
      icon: '🪞',
    },
    {
      name: 'Düet Perde',
      nameDe: 'Duo-Rollo',
      desc: 'Katı ve şeffaf bantların art arda geldiği çift tabakalı sistem. Sabahın erken ışığından gece mahremiyetine kesintisiz geçiş sunar.',
      features: ['Şeffaf + opak bant', 'Düzgün sürüş', 'Renk çeşitliliği', 'Çekme zinciri / motorlu'],
      icon: '⬛',
    },
    {
      name: 'Honeycomb Perde',
      nameDe: 'Wabenrollo',
      desc: 'Petek hücre yapısıyla hem ses yutar hem de ısı köprüsü kurar. Avusturya\'nın soğuk kış aylarında ilave izolasyon katmanı olarak çalışır.',
      features: ['Çift katman petek', 'Isı tutma', 'Ses absorpsiyonu', 'Beyaz / gri / bej'],
      icon: '🍯',
    },
    {
      name: 'Zip Perde',
      nameDe: 'Zip-Screen',
      desc: 'Dış cephe için geliştirilmiş rüzgâr kilitleme sistemi. Fermuarlı kılavuz ray, rüzgârda çırpınmayı tamamen ortadan kaldırır.',
      features: ['Fermuarlı kılavuz ray', 'Rüzgâr direnci', 'Motorlu / manuel', 'Terras & balkon'],
      icon: '🏠',
    },
  ];

  return (
    <section id="urunler" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#83bd81' }}>
            Ürün Ailemiz
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#404e5e' }}>
            <a href="/" className="hover:underline decoration-primary">Avusturya Sineklik</a> ve Perde Sistemleri
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Her biri farklı bir ihtiyacı karşılayan yedi ürün ailesi. Türkiye'de üretilir,
            Avusturya'nın her köşesinde kullanılır.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.name} className="card-hover bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-base font-bold mb-0.5" style={{ color: '#404e5e' }}>
                <a href="/" className="hover:text-primary">{p.name}</a>
              </h3>
              <p className="text-xs text-gray-400 mb-3 italic">{p.nameDe}</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.desc}</p>
              <ul className="space-y-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-white text-xs" style={{ background: '#83bd81' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl text-center" style={{ background: '#f0faf0' }}>
          <p className="text-sm text-gray-700 mb-4">
            Hangi sistemin pencerenize uyduğundan emin değil misiniz?{' '}
            <strong>Uzmanlarımız ölçü alarak doğru modeli önerir.</strong>
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20hangi%20sineklik%20sisteminin%20pencereme%20uygundugunu%20ogrenebilir%20miyim%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold"
            style={{ background: '#25D366' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.549 4.116 1.515 5.849L0 24l6.334-1.494A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.013-1.374l-.36-.214-3.757.886.948-3.649-.234-.374A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            Ücretsiz Danışmanlık Al
          </a>
        </div>
      </div>
    </section>
  );
}
