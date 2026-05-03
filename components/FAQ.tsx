'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'Avusturya\'ya sineklik nasıl sipariş veririm?',
    a: 'WhatsApp (+90 540 336 3873) veya telefon üzerinden bize ulaşın. Pencere ölçülerinizi ve sistem tercibinizi paylaşın; 24 saat içinde fiyat teklifinizi hazırlayalım. Teklifi onayladığınızda üretime başlıyoruz.',
  },
  {
    q: 'Avusturya\'ya teslimat kaç gün sürer?',
    a: 'Üretim tamamlandıktan sonra DHL, DPD veya GLS ile Avusturya\'ya gönderilen siparişler ortalama 4–10 iş günü içinde adresinize ulaşır. Wien ve Niederösterreich\'te bu süre 4–6 güne inerken Vorarlberg ve Tirol için 8–10 gün hesaplamak gerekir.',
  },
  {
    q: 'Ürünler demonte olarak mı geliyor? Montaj zor mu?',
    a: 'Evet, tüm sistemler demonte — profiller, ağ ve aksesuarlar ayrı ayrı ambalajlanmış — biçimde gönderilir. Almanca hazırlanmış renkli montaj kılavuzu ve QR kodlu video içeriği sayesinde saatte bir pencere kolayca kurulabilir.',
  },
  {
    q: 'Ölçüleri nasıl almalıyım?',
    a: 'Pencere kasasının iç açıklığını milimetre hassasiyetiyle ölçün: genişlik (en az 3 noktadan) ve yükseklik (en az 3 noktadan). En küçük değeri baz alın. Ölçü alma konusunda emin değilseniz WhatsApp\'tan fotoğraflı destek alabilirsiniz.',
  },
  {
    q: 'Hangi pencere tiplerine uygun sistemler üretilebilir?',
    a: 'Sabit sineklik: açılmayan veya çok az açılan pencereler. Plise sineklik: dönme-devir (kipp) ve kanatlı pencereler. Zip perde: dış cepheli sistemler ve teraslar. Sürgülü sineklik: sürme balkon kapıları. Neredeyse tüm pencere profillerine uyumlu sistemler üretiyoruz.',
  },
  {
    q: 'Standart dışı / büyük pencereler için sipariş verilebilir mi?',
    a: 'Kesinlikle. Tüm sistemlerimiz sipariş bazlı üretildiğinden standart dışı ölçüler sorun değil. Yüksekliği 2,5 m\'yi aşan, genişliği 3 m üzerinde olan açıklıklar için özel profil ve ek takviye detayları eklenerek çözüm üretilir.',
  },
  {
    q: 'Ürün garantisi nedir?',
    a: 'Profil ve mekanizmada 2 yıl imalat garantisi, yüzey kaplamasında 3 yıl renk stabilitesi garantisi, mesh ağında 5 yıl yırtılma garantisi verilir. Garanti, normal kullanım koşullarında geçerlidir; fiziksel hasar ve yanlış montaj kapsam dışındadır.',
  },
  {
    q: 'Sadece sineklik mi üretiyorsunuz?',
    a: 'Hayır. Plise Sineklik, Plise Perde, Jaluzi Perde, Düet Perde, Honeycomb Perde ve Zip Perde olmak üzere 7 farklı ürün sistemimiz mevcuttur. Her biri farklı iklim koşulu ve mekân ihtiyacına yanıt verir.',
  },
  {
    q: 'Avusturya\'da montaj hizmeti sunuyor musunuz?',
    a: 'Kendi teknik ekibimizle Avusturya\'da montaj hizmeti vermiyoruz. Ancak ürünlerimiz kendin-yap (DIY) kurulum için tasarlandığından profesyonel desteğe ihtiyaç duymadan takabilirsiniz. Zorunlu durumlarda yerel bir yapı ustasından destek alınabilir.',
  },
  {
    q: 'Fiyatlar neden rekabetçi?',
    a: 'Türkiye\'deki üretim maliyeti avantajı ve doğrudan ihracat zinciri, aracı maliyetlerini ortadan kaldırır. Avrupalı bir üreticinin fiyatlandırması yerine Avrupa kalite standartlarını koruyarak daha uygun teslimat sağlanır. Bu fark, tüketiciye doğrudan yansır.',
  },
  {
    q: 'Toplu sipariş / bayi olabilir miyim?',
    a: 'Avusturya\'da bayi veya toplu alıcı olmak istiyorsanız WhatsApp\'tan bize yazın. Minimum sipariş miktarı, fiyatlandırma ve bayi desteği konularında ayrıntılı bilgi sunuyoruz.',
  },
  {
    q: 'Ödeme yöntemleri neler?',
    a: 'Banka havalesi (IBAN ile), kredi kartı ve PayPal kabul edilmektedir. Ödeme, sipariş onayı sonrasında gerçekleştirilir. Büyük siparişlerde %50 ön ödeme, kalanı kargoya verilmeden önce alınır.',
  },
  {
    q: 'Wie funktioniert die Bestellung auf Deutsch? (Almanca sipariş nasıl yapılır?)',
    a: 'Sie können uns über WhatsApp (+90 540 336 3873) auf Deutsch kontaktieren. Teilen Sie die Maße Ihrer Fenster mit, und wir erstellen Ihnen innerhalb von 24 Stunden ein Angebot. Die Montageanleitung ist auf Österreichischem Deutsch verfasst.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <section id="sss" className="py-16 lg:py-20" style={{ background: '#f8fffe' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#83bd81' }}>
            Sıkça Sorulan Sorular
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#404e5e' }}>
            Merak Ettikleriniz Burada
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 text-sm">
            <a href="/" className="font-semibold hover:underline" style={{ color: '#404e5e' }}>
              Plise perde
            </a>{' '}
            ve{' '}
            <a href="/" className="font-semibold hover:underline" style={{ color: '#83bd81' }}>
              sineklik
            </a>{' '}
            siparişi öncesinde en çok sorulan sorulara doğrudan yanıt bulun.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item bg-white rounded-2xl shadow-sm border border-gray-100">
              <button
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold leading-snug" style={{ color: '#404e5e' }}>
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform"
                  style={{
                    background: '#83bd81',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center p-6 rounded-2xl" style={{ background: '#f0faf0' }}>
          <p className="text-sm text-gray-700 mb-3">
            Sorunuzu listede bulamadınız mı?
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20hakk%C4%B1nda%20sormak%20istedi%C4%9Fim%20bir%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            style={{ background: '#25D366' }}
          >
            WhatsApp ile Sorun
          </a>
        </div>
      </div>
    </section>
  );
}
