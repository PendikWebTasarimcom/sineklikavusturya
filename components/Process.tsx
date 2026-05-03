export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Ölçü & Sistem Seçimi',
      titleDe: 'Maßaufnahme & Systemwahl',
      desc: 'Pencere genişliği, yüksekliği ve açılış tipini WhatsApp üzerinden paylaşın. Uzmanımız 24 saat içinde en uygun sistemi belirler.',
    },
    {
      num: '02',
      title: 'Fiyat Teklifi',
      titleDe: 'Angebot',
      desc: 'Seçilen sistem için malzeme listesi ve birim fiyatları içeren şeffaf bir teklif hazırlanır. Gizli maliyet yoktur.',
    },
    {
      num: '03',
      title: 'Sipariş & Ödeme',
      titleDe: 'Bestellung & Zahlung',
      desc: 'Teklifi onayladığınızda sipariş üretim hattına girer. Banka havalesi veya kredi kartıyla güvenli ödeme.',
    },
    {
      num: '04',
      title: 'Üretim & Kalite Kontrolü',
      titleDe: 'Produktion & Qualitätskontrolle',
      desc: 'Gebze atölyesinde ölçüye özel üretim tamamlanır. Her parça sevkiyat öncesi ölçü ve yüzey kontrolünden geçer.',
    },
    {
      num: '05',
      title: 'Paketleme & Kargolama',
      titleDe: 'Verpackung & Versand',
      desc: 'Demonte hâlde, köpük profil ve mukavva korumasıyla paketlenir. DHL / DPD / GLS ile Avusturya adresinize gönderilir.',
    },
    {
      num: '06',
      title: 'Teslimat & Montaj',
      titleDe: 'Lieferung & Montage',
      desc: '4–10 iş günü içinde kapınıza ulaşır. Almanca kılavuz ve QR kodlu video içeriğiyle kendiniz kolayca kurabilirsiniz.',
    },
  ];

  return (
    <section id="surec" className="py-16 lg:py-20" style={{ background: '#f4f7fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#83bd81' }}>
            Nasıl Çalışıyoruz
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#404e5e' }}>
            Sipariş'ten Kapınıza: 6 Adım
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Türkiye'den Avusturya'ya uzanan bu süreç, her adımda takip edilebilir ve
            tamamen şeffaf biçimde yönetilir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-2xl p-6 shadow-sm card-hover relative overflow-hidden">
              <div
                className="absolute top-0 right-0 text-7xl font-extrabold opacity-5 leading-none select-none"
                style={{ color: '#83bd81' }}
              >
                {s.num}
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-extrabold mb-4"
                style={{ background: '#83bd81' }}
              >
                {s.num}
              </div>
              <h3 className="text-base font-bold mb-1" style={{ color: '#404e5e' }}>{s.title}</h3>
              <p className="text-xs text-gray-400 italic mb-3">{s.titleDe}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Süreci başlatmak için tek yapmanız gereken bir mesaj göndermek.
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20sipari%C5%9F%20vermek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-lg"
            style={{ background: '#83bd81' }}
          >
            Siparişe Başla
          </a>
        </div>
      </div>
    </section>
  );
}
