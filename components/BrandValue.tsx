export default function BrandValue() {
  return (
    <section id="marka" className="py-16 lg:py-20" style={{ background: '#f8fffe' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#83bd81' }}>
              Marka Değeri
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#404e5e' }}>
              Fenetre Systems Neden Farklı?
            </h2>
            <div className="section-divider" style={{ margin: '0 0 1.5rem 0' }} />

            <div className="prose-content">
              <p>
                Gebze'deki üretim tesisimizde bir <strong>sineklik</strong> yalnızca profil ve ağdan ibaret değildir.
                Her bileşen —alüminyum ekstrüzyon, çerçeve köşe bağlantısı, ağ gerilme tensörü—
                ayrı ayrı ölçülür. Tolerans payı 0,5 mm'yi geçtiği an parça hattı dışına çıkar. Bu katılık,
                Avusturya'da pencereye takılan her sistemin ilk denemede oturmasını sağlar.
              </p>
              <p>
                <em>Avrupa pazarı</em> zaten bu talepkârlığı fiyatlandırıyor. Avusturyalı tüketici,
                bir ürünün sökülüp takılabildiğini, onlarca yıl kullanılabilir kaldığını biliyor.
                Bize ulaşan her sipariş için üretim başlamadan önce <u>ölçü doğrulama</u> yapılır;
                montaj kılavuzu Almanca hazırlanır; kargoya verilen paket içinde her vida ve klips tek tek sayılır.
              </p>

              <h3>Fenetre Systems'i Tercih Etmenin 5 Nedeni</h3>
              <ol>
                <li>Gebze fabrikasında ISO 9001 kalite yönetim süreçleriyle üretim</li>
                <li>Avusturya'nın 9 eyaletine doğrudan adres teslimatı, 4–10 iş günü</li>
                <li>Almanca montaj kılavuzu ve video desteği</li>
                <li>Her parça için 2 yıl imalat garantisi</li>
                <li>Satış sonrası WhatsApp teknik danışmanlık hattı</li>
              </ol>

              <h3>Markamızın Temel İlkeleri</h3>
              <table>
                <thead>
                  <tr>
                    <th>İlke</th>
                    <th>Uygulama</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Şeffaflık</td>
                    <td>Fiyat teklifine tüm malzeme listesi eklenir</td>
                  </tr>
                  <tr>
                    <td>Güvenilirlik</td>
                    <td>Söz verilen teslimat tarihi %97 oranında tutulur</td>
                  </tr>
                  <tr>
                    <td>Kalite</td>
                    <td>Her parti %100 numune kontrolünden geçer</td>
                  </tr>
                  <tr>
                    <td>Destek</td>
                    <td>Kurulum sonrası 30 gün ücretsiz teknik yardım</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Üretim Tesisi', value: 'Gebze, Kocaeli', sub: 'Türkiye' },
              { title: 'Kalite Belgesi', value: 'ISO 9001', sub: 'Kalite Yönetimi' },
              { title: 'Garanti', value: '2 Yıl', sub: 'Tüm Ürünler' },
              { title: 'Teslimat', value: '4–10 Gün', sub: 'Avusturya Tümü' },
              { title: 'Dil Desteği', value: 'TR / DE', sub: 'İkidilli Hizmet' },
              { title: 'Hizmet', value: '7/24', sub: 'WhatsApp Hattı' },
            ].map(({ title, value, sub }) => (
              <div
                key={title}
                className="card-hover rounded-2xl p-5 text-center border border-gray-100"
                style={{ background: '#ffffff' }}
              >
                <div className="text-2xl font-extrabold mb-1" style={{ color: '#83bd81' }}>{value}</div>
                <div className="text-sm font-semibold mb-0.5" style={{ color: '#404e5e' }}>{title}</div>
                <div className="text-xs text-gray-400">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
