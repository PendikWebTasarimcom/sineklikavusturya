export default function ProductQuality() {
  return (
    <section id="kalite" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#83bd81' }}>
            Malzeme & Kalite
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#404e5e' }}>
            İçinde Ne Var? Malzeme Gerçeği
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="prose-content">
            <p>
              <strong>Alüminyum profil</strong> seçimi sineklik sisteminin ömrünü doğrudan belirler.
              Biz EN 755 serisi 6063-T5 alaşımlı ekstrüzyon kullanıyoruz. Bu alaşım{' '}
              <em>çarpma dayanımı yüksek</em>, korozyon direnci kanıtlanmış ve Avrupa bina
              yönetmeliklerine uyumludur. Profil et kalınlığı minimum 1,2 mm; köşe toleransı ±0,3 mm.
            </p>
            <p>
              Ağ malzemesi de en az profil kadar kritik. Standart{' '}
              <strong>18×16 mesh polyester ağ</strong> 0,2 mm tel çapıyla imal edilir; görüş
              kesme oranı yalnızca %28'dir. Yani pencerenizden dışarı bakarken neredeyse{' '}
              <u>ağı fark etmezsiniz</u>. Aluminyum ağ seçeneği paslanmaz çelik aksesuarlarla
              birleşince 25 yılı aşan kullanım ömrü sunar.
            </p>

            <h3>Malzeme Karşılaştırma Tablosu</h3>
            <table>
              <thead>
                <tr>
                  <th>Bileşen</th>
                  <th>Fenetre Systems</th>
                  <th>Piyasa Ortalaması</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Profil Alaşımı</td>
                  <td>6063-T5 (EN 755)</td>
                  <td>6060 veya belirsiz</td>
                </tr>
                <tr>
                  <td>Profil Et Kalınlığı</td>
                  <td>Min. 1,2 mm</td>
                  <td>0,8–1,0 mm</td>
                </tr>
                <tr>
                  <td>Ağ Mesh</td>
                  <td>18×16 / 0,20 mm tel</td>
                  <td>16×14 / 0,22 mm tel</td>
                </tr>
                <tr>
                  <td>Köşe Bağlantısı</td>
                  <td>Plastik + metal vidalı</td>
                  <td>Yalnızca plastik</td>
                </tr>
                <tr>
                  <td>Yüzey Kaplama</td>
                  <td>Elektrostatik toz boya</td>
                  <td>Anodizasyon veya ham</td>
                </tr>
                <tr>
                  <td>UV Stabilitesi</td>
                  <td>5.000+ saat (QUV testi)</td>
                  <td>Belirtilmez</td>
                </tr>
              </tbody>
            </table>

            <p>
              Kaplama sürecinde kullanılan <em>elektrostatik toz boya</em> 180°C'de polimerize
              olur. Bu yöntem, klasik ıslak boya karşısında çizik ve korozyon direncini
              iki katına çıkarır. Standart renk: beyaz (RAL 9016) ve antrasit (RAL 7016);
              talep üzerine 200+ RAL rengi uygulanabilir.
            </p>
          </div>

          <div className="prose-content">
            <h3>Neden Demonte Teslimat?</h3>
            <p>
              Avusturya'ya gönderilen her sipariş <strong>demonte</strong> —yani profiller,
              köşe bağlantıları, ağ ve aksesuarlar ayrı ayrı ambalajlanmış— hâlde yola çıkar.
              Bunun birden fazla sebebi var:
            </p>
            <ul>
              <li>Demonte paket çarpmalara karşı çok daha dayanıklıdır</li>
              <li>Kargoda hacim azalır, taşıma zararı riski düşer</li>
              <li>Montaj, dışarıdan uzman çağrılmadan evde yapılabilir</li>
              <li>Hasarlı bir parça varsa yalnızca o parça değiştirilir</li>
            </ul>

            <h3>Almanca Talimatname ve Destekler</h3>
            <p>
              Teslimatla gelen kılavuz sıradan bir kâğıt parçası değil. <u>A5 boyutunda, laminasyonlu</u>{' '}
              ve renkli baskıyla hazırlanan bu belge her vida deliğini, her kilip konumunu
              adım adım gösterir. QR kod okutarak telefonda 3–5 dakikalık kurulum videosuna
              ulaşılabilir. Almanca hazırlanan bu video, <em>Avusturyalı tüketicinin beklediği
              dil standartında</em> seslendirme içerir.
            </p>

            <div className="p-5 rounded-2xl border" style={{ background: '#f0faf0', borderColor: '#83bd81' }}>
              <h3 className="text-base font-bold mb-3" style={{ color: '#404e5e' }}>Garanti Koşulları</h3>
              <ul>
                <li>Profil ve mekanizmada 2 yıl imalat garantisi</li>
                <li>Yüzey kaplamasında 3 yıl renk ve çizilme garantisi</li>
                <li>Mesh ağında 5 yıl yırtılma ve deforme garantisi</li>
                <li>Garanti kapsamı dışı: fiziksel hasar, yanlış montaj</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
