export default function Experience() {
  return (
    <section id="deneyim" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#83bd81' }}>
            Uzmanlık & Deneyim
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#404e5e' }}>
            Avusturya Pazarında Edindiğimiz Bilgi
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="prose-content">
            <p>
              Avusturya'nın iklimi sizi şaşırtabilir. Wien'de Temmuz ortalaması 25°C iken{' '}
              <strong>Burgenland düzlükleri</strong> 38°C'ye çıkar. Nemsiz kara ikliminin hâkim
              olduğu bu bölgelerde sivrisinek yoğunluğu <em>Orta Avrupa ortalamasının iki katını</em>{' '}
              aşabiliyor. Kärnten'in göl çevresi ve Salzburg'un nehir vadileri ise baharda sürü hâlinde
              görünen böcek dalgalarıyla tanınır.
            </p>

            <h3>Avusturya Evlerinde Pencere Sistemi Gerçeği</h3>
            <p>
              Avusturya'nın konut stoğunun büyük bölümü 1970–2000 yılları arasında inşa edilmiş{' '}
              <u>ahşap veya PVC çerçeveli pencereler</u> içeriyor. Bu çerçevelerde standart sabit
              sineklik genellikle yetmez; körük mekanizmalı plise sistemler veya dışarıya açılan
              dönme-devir pencerelere uyumlu çözümler gerekiyor. Tam da bu noktada{' '}
              <strong>Plise Sineklik</strong> ve <strong>Zip Perde</strong> ailemiz devreye giriyor.
            </p>

            <h3>Bölge Bazlı Böcek Yoğunluğu</h3>
            <table>
              <thead>
                <tr>
                  <th>Eyalet</th>
                  <th>Risk Seviyesi</th>
                  <th>Önerilen Sistem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Burgenland</td>
                  <td>🔴 Yüksek</td>
                  <td>Plise Sineklik + Zip Perde</td>
                </tr>
                <tr>
                  <td>Kärnten</td>
                  <td>🔴 Yüksek</td>
                  <td>Plise Sineklik</td>
                </tr>
                <tr>
                  <td>Wien</td>
                  <td>🟠 Orta</td>
                  <td>Sabit Sineklik / Plise</td>
                </tr>
                <tr>
                  <td>Steiermark</td>
                  <td>🟠 Orta</td>
                  <td>Plise Sineklik</td>
                </tr>
                <tr>
                  <td>Niederösterreich</td>
                  <td>🟠 Orta</td>
                  <td>Sabit Sineklik</td>
                </tr>
                <tr>
                  <td>Tirol / Salzburg</td>
                  <td>🟡 Sezonsal</td>
                  <td>Plise / Honeycomb</td>
                </tr>
                <tr>
                  <td>Vorarlberg</td>
                  <td>🟡 Sezonsal</td>
                  <td>Zip Perde</td>
                </tr>
              </tbody>
            </table>

            <p>
              Her eyaletin alışkanlıkları, pencere boyutları ve iklim değerleri birbirinden farklıdır.
              Sipariş öncesinde ölçü ve konum bilginizi paylaşmanız yeterli; uzmanlarımız size
              en verimli sistemi belirler.
            </p>
          </div>

          <div className="prose-content">
            <h3>Avrupa Standartları ve Uyumluluk</h3>
            <p>
              AB'nin yapı ürünleri yönetmeliği (CPR 305/2011) kapsamında piyasaya sürülen sineklik
              sistemleri için belirlenmiş zorunlu performans testleri mevcuttur. Profil dayanımı,
              ağ gerilmesi ve UV stabilitesi bu testlerin başında gelir. Fenetre Systems,
              kullandığı <em>EN 13120</em> ve <em>EN 16434</em> uyumlu alüminyum profil ve{' '}
              <strong>polyester mesh</strong> materyalleriyle bu gereklilikleri karşılar.
            </p>

            <h3>Uzman Ekibimizin Yetkinlikleri</h3>
            <ul>
              <li>Pencere sistemleri üretimi ve proses mühendisliği</li>
              <li>Avusturya, Almanya ve İsviçre pazarı ihracat deneyimi</li>
              <li>Almanca teknik dokümantasyon hazırlama kapasitesi</li>
              <li>Uluslararası lojistik koordinasyonu (DHL / DPD / GLS)</li>
              <li>Müşteri bazlı ölçü analizi ve sistem seçimi danışmanlığı</li>
              <li>Garanti ve hasar süreçlerini yöneten satış sonrası ekip</li>
            </ul>

            <div className="mt-6 p-5 rounded-2xl border-l-4" style={{ background: '#f0faf0', borderColor: '#83bd81' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#404e5e' }}>
                Almanca Montaj Kılavuzu
              </p>
              <p className="text-sm text-gray-600">
                Her ürün teslimatına <em>Almanca (Österreichisches Deutsch)</em> hazırlanmış adım adım
                montaj kılavuzu eklenir. QR kodu üzerinden videolu anlatıma da ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
