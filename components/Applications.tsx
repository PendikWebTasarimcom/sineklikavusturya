export default function Applications() {
  const cases = [
    {
      title: 'Wien – Altbau Dairesi',
      tag: 'Sabit Sineklik',
      tagColor: '#83bd81',
      desc: 'Viyana\'nın tarihi Gründerzeit binalarındaki geniş pencere kasalarına 120×160 cm ölçüsünde sabit alüminyum sineklik. 18×16 mesh ağ, antrasit profil.',
    },
    {
      title: 'Graz – Modern Villa Terası',
      tag: 'Zip Perde',
      tagColor: '#404e5e',
      desc: 'Steiermark bölgesinde çift kanatlı cam terasa 320 cm genişliğinde fermuarlı zip perde. Güçlü rüzgâra karşı titremesiz, motorlu kılavuz ray sistemi.',
    },
    {
      title: 'Klagenfurt – Göl Evi',
      tag: 'Plise Sineklik',
      tagColor: '#6aaa68',
      desc: 'Wörthersee kenarındaki yazlık evin 9 penceresine körük plise sineklik. Yüksek sivrisinek bölgesinde mevsimsel koruma, dar profilli estetik görünüm.',
    },
    {
      title: 'Innsbruck – Butik Otel',
      tag: 'Honeycomb Perde',
      tagColor: '#f59e0b',
      desc: 'Tirol\'deki butik otelin 24 odasına honeycomb perde. Kış aylarında cam yüzeyinde oluşan soğuk transferi minimize ederek oda ısı konforu artırıldı.',
    },
    {
      title: 'Salzburg – Ofis Binası',
      tag: 'Jaluzi Perde',
      tagColor: '#8b5cf6',
      desc: 'Salzburg merkezdeki 4 katlı ofis binasına 50 mm alüminyum lamel jaluzisi. Sabah ve öğleden sonra güneşin farklı açılarına göre ışık kontrolü.',
    },
    {
      title: 'Neusiedl – Çiftlik Evi',
      tag: 'Plise + Sabit',
      tagColor: '#ef4444',
      desc: 'Burgenland\'ın en sıcak noktasında 14 pencereli çiftlik evine karma uygulama. Küçük pencereler sabit, büyük dönme-devir pencereler plise sineklikle çözüldü.',
    },
  ];

  return (
    <section id="uygulamalar" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#83bd81' }}>
            Uygulama Örnekleri
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#404e5e' }}>
            Avusturya'dan Gerçek Projeler
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Her bölge ve yapı tipi farklı bir sistemi gerektirir.{' '}
            <a href="/" className="font-semibold hover:underline" style={{ color: '#404e5e' }}>
              Jaluzi perde
            </a>{' '}
            den{' '}
            <a href="/" className="font-semibold hover:underline" style={{ color: '#83bd81' }}>
              sinekliğe
            </a>{' '}
            uzanan geniş portföyümüz, her senaryoya yanıt verir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div key={c.title} className="card-hover rounded-2xl border border-gray-100 p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-bold" style={{ color: '#404e5e' }}>{c.title}</h3>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full text-white shrink-0 ml-2"
                  style={{ background: c.tagColor }}
                >
                  {c.tag}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 prose-content max-w-4xl mx-auto">
          <h3>Avusturya'da Yaygın Pencere Tipleri ve Uyumlu Sistemler</h3>
          <table>
            <thead>
              <tr>
                <th>Pencere Tipi</th>
                <th>Yaygın Bölge</th>
                <th>Uyumlu Sistem</th>
                <th>Not</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dönme-devir (Kipp)</td>
                <td>Wien, Graz</td>
                <td>Plise Sineklik</td>
                <td>Hem açık hem kapalı konumda çalışır</td>
              </tr>
              <tr>
                <td>Sürgülü Balkon Kapısı</td>
                <td>Tüm eyaletler</td>
                <td>Sürgülü Sineklik</td>
                <td>Geniş açıklıklar için ideal</td>
              </tr>
              <tr>
                <td>Sabit/Açılmaz Cam</td>
                <td>Ofisler</td>
                <td>Jaluzi / Honeycomb</td>
                <td>Güneş ve ısı kontrolü</td>
              </tr>
              <tr>
                <td>Dış Cephe Cam</td>
                <td>Tirol, Vorarlberg</td>
                <td>Zip Perde</td>
                <td>Rüzgâra karşı fermuarlı ray</td>
              </tr>
              <tr>
                <td>Teras / Veranda</td>
                <td>Kärnten, Steiermark</td>
                <td>Zip Perde + Plise</td>
                <td>Böcek + güneş çift bariyer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
