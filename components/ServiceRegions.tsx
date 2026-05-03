export default function ServiceRegions() {
  const regions = [
    {
      name: 'Wien',
      nameTr: 'Viyana',
      pop: '1,9 milyon',
      climate: 'Kıta iklimi, nemli yazlar',
      risk: 'Orta',
      riskColor: '#f59e0b',
      note: 'Tuna kanalı çevresinde sivrisinek yoğunluğu artar. Apartman pencereleri için kompakt plise sineklik idealdir.',
      zip: '1010–1230',
    },
    {
      name: 'Niederösterreich',
      nameTr: 'Aşağı Avusturya',
      pop: '1,7 milyon',
      climate: 'Kara iklimi, sıcak yazlar',
      risk: 'Orta-Yüksek',
      riskColor: '#f97316',
      note: 'Tuna vadisi boyunca tarlalar ve bağlar sineklik ihtiyacını artırır. Geniş pencereler için uygun sabit çerçeve sistemler önerilir.',
      zip: '2000–3990',
    },
    {
      name: 'Oberösterreich',
      nameTr: 'Yukarı Avusturya',
      pop: '1,5 milyon',
      climate: 'Karma, ılıman',
      risk: 'Orta',
      riskColor: '#f59e0b',
      note: 'Linz endüstri bölgesi ve Traun nehri çevresi sezonsal böcek artışı gösterir. Plise sineklik ve jaluzi kombinasyonu popüler.',
      zip: '4020–4980',
    },
    {
      name: 'Steiermark',
      nameTr: 'Stirya',
      pop: '1,2 milyon',
      climate: 'Akdeniz etkisi, sıcak',
      risk: 'Orta-Yüksek',
      riskColor: '#f97316',
      note: 'Güney Stirya bağ bölgesi Orta Avrupa\'nın en sıcak mikroiklimleri arasındadır. Zip perde ve plise sistemler tercih edilir.',
      zip: '8010–8990',
    },
    {
      name: 'Tirol',
      nameTr: 'Tirol',
      pop: '760 bin',
      climate: 'Alp iklimi, sezonsal',
      risk: 'Sezonsal',
      riskColor: '#84cc16',
      note: 'Yüksek irtifalarda böcek riski düşük; Inn vadisi ve alp eteklerinde yaz aylarında sineklik gerekir. Honeycomb perde ek izolasyon sağlar.',
      zip: '6010–6600',
    },
    {
      name: 'Salzburg',
      nameTr: 'Salzburg',
      pop: '560 bin',
      climate: 'Alp, nemli',
      risk: 'Sezonsal',
      riskColor: '#84cc16',
      note: 'Salzach nehri çevresi baharda belirgin sivrisinek artışı yaşar. Turistik bölgelerde estetik ön planda; plise perde ve düet sistemler tercih edilir.',
      zip: '5010–5760',
    },
    {
      name: 'Kärnten',
      nameTr: 'Karintiya',
      pop: '560 bin',
      climate: 'Göl iklimi, sıcak',
      risk: 'Yüksek',
      riskColor: '#ef4444',
      note: 'Wörthersee ve diğer göller çevresinde sivrisinek yoğunluğu yüksektir. Avusturya\'nın en sıcak bölgesinde plise sineklik ve zip perde şart sayılır.',
      zip: '9020–9990',
    },
    {
      name: 'Burgenland',
      nameTr: 'Burgenland',
      pop: '300 bin',
      climate: 'Pannonyum, en sıcak bölge',
      risk: 'En Yüksek',
      riskColor: '#dc2626',
      note: 'Pannonyum ovasının Avusturya ucunda yaz sıcakları 38°C\'yi aşar. Neusiedler See çevresi sivrisinek açısından Avusturya\'nın en kritik noktasıdır.',
      zip: '7011–7471',
    },
    {
      name: 'Vorarlberg',
      nameTr: 'Vorarlberg',
      pop: '400 bin',
      climate: 'Alp batı, rüzgârlı',
      risk: 'Düşük-Orta',
      riskColor: '#22c55e',
      note: 'Batı Avusturya\'nın en küçük eyaleti. İsviçre sınırına yakın bu bölgede rüzgâra dayanıklı zip perde sistemleri özellikle önerilir.',
      zip: '6700–6991',
    },
  ];

  return (
    <section id="bolgeler" className="py-16 lg:py-20" style={{ background: '#f4f7fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#83bd81' }}>
            Hizmet Bölgeleri
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#404e5e' }}>
            Avusturya'nın 9 Eyaletinin Tamamına Teslimat
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            <a href="/" className="font-semibold hover:underline" style={{ color: '#404e5e' }}>
              Sineklik Avusturya
            </a>{' '}
            sistemlerimiz Bregenz'den Eisenstadt'a, Innsbruck'tan Klagenfurt'a kadar ulaşır.
            Her bölgenin iklim ve yapı özelliği dikkate alınarak sistem önerilir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {regions.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 card-hover">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-bold" style={{ color: '#404e5e' }}>{r.name}</h3>
                  <p className="text-xs text-gray-400">{r.nameTr} · {r.zip}</p>
                </div>
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full text-white"
                  style={{ background: r.riskColor }}
                >
                  {r.risk}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{r.pop}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{r.climate}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{r.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4 text-center" style={{ color: '#404e5e' }}>
            Eyalet Bazlı Teslimat & Risk Özeti
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#404e5e' }}>
                  <th className="text-left px-4 py-3 text-white font-semibold rounded-tl-xl">Eyalet</th>
                  <th className="text-left px-4 py-3 text-white font-semibold">Böcek Riski</th>
                  <th className="text-left px-4 py-3 text-white font-semibold">Önerilen Sistem</th>
                  <th className="text-left px-4 py-3 text-white font-semibold rounded-tr-xl">Teslimat</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Burgenland', 'En Yüksek 🔴', 'Plise Sineklik + Zip Perde', '5–7 gün'],
                  ['Kärnten', 'Yüksek 🔴', 'Plise Sineklik', '6–8 gün'],
                  ['Steiermark', 'Orta-Yüksek 🟠', 'Plise Sineklik', '5–7 gün'],
                  ['Wien', 'Orta 🟠', 'Sabit Sineklik / Plise', '4–6 gün'],
                  ['Niederösterreich', 'Orta 🟠', 'Sabit Sineklik', '4–6 gün'],
                  ['Oberösterreich', 'Orta 🟠', 'Plise + Jaluzi', '5–7 gün'],
                  ['Salzburg', 'Sezonsal 🟡', 'Plise / Honeycomb', '6–8 gün'],
                  ['Tirol', 'Sezonsal 🟡', 'Honeycomb + Plise', '7–9 gün'],
                  ['Vorarlberg', 'Düşük-Orta 🟢', 'Zip Perde', '8–10 gün'],
                ].map(([eyalet, risk, sistem, teslimat]) => (
                  <tr key={eyalet} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium" style={{ color: '#404e5e' }}>{eyalet}</td>
                    <td className="px-4 py-3 text-gray-600">{risk}</td>
                    <td className="px-4 py-3 text-gray-600">{sistem}</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#83bd81' }}>{teslimat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
