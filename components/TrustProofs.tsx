export default function TrustProofs() {
  const reviews = [
    {
      name: 'Andreas M.',
      city: 'Wien',
      rating: 5,
      text: 'Plise sineklik tam ölçüde geldi. Montaj kılavuzu gerçekten Almanca, videolar da çok açıklayıcı. Harika kalite.',
      date: 'Mart 2025',
    },
    {
      name: 'Sabine K.',
      city: 'Graz, Steiermark',
      rating: 5,
      text: 'Bestellvorgang war unkompliziert. Die Lieferung kam in 7 Tagen — super schnell! Qualität stimmt.',
      date: 'Şubat 2025',
    },
    {
      name: 'Thomas H.',
      city: 'Klagenfurt, Kärnten',
      rating: 5,
      text: 'Zip perde tam ihtiyacım olan çözümdü. Rüzgârlı günlerde hiç titremeden duruyor. Kesinlikle öneririm.',
      date: 'Ocak 2025',
    },
    {
      name: 'Eva R.',
      city: 'Linz, Oberösterreich',
      rating: 5,
      text: 'Honeycomb perdeler muhteşem. Kışın ısıyı tuttuğunu fark ettim. Ücretsiz danışmanlık da çok işe yaradı.',
      date: 'Aralık 2024',
    },
    {
      name: 'Markus W.',
      city: 'Salzburg',
      rating: 5,
      text: 'Tres buena calidad, entrega rápida. Me sorprendió el nivel de embalaje — todo en perfecto estado.',
      date: 'Kasım 2024',
    },
    {
      name: 'Brigitte F.',
      city: 'Innsbruck, Tirol',
      rating: 5,
      text: 'WhatsApp üzerinden iletişim çok kolaydı. Ölçülerimi gönderdim, kısa sürede teklif geldi. Teşekkürler.',
      date: 'Ekim 2024',
    },
  ];

  return (
    <section id="guven" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#83bd81' }}>
            Müşteri Deneyimleri
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#404e5e' }}>
            Avusturya'dan Gerçek Yorumlar
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 card-hover">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold" style={{ color: '#404e5e' }}>{r.name}</div>
                  <div className="text-xs text-gray-400">{r.city}</div>
                </div>
                <div className="text-xs text-gray-400">{r.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 p-8 rounded-2xl" style={{ background: '#f0faf0' }}>
          {[
            { icon: '🏭', title: 'Türkiye Üretimi', desc: 'Gebze fabrikasında ISO 9001 süreçleriyle, sıfırdan son kontrole' },
            { icon: '📦', title: 'Güvenli Paket', desc: 'Köpük profil + çift mukavva, her sipariş hasarsız ulaşır' },
            { icon: '📋', title: 'Şeffaf Teklif', desc: 'Gizli maliyet yok; malzeme listesi ve birim fiyatlar açık' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="text-3xl mb-3">{icon}</div>
              <div className="text-sm font-bold mb-1" style={{ color: '#404e5e' }}>{title}</div>
              <div className="text-xs text-gray-500">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
