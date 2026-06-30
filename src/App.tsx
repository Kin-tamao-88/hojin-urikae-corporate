import { Hero } from "./components/sections/Hero"
import jcaoLogo from "./assets/hero/jcao-logo-top.png"
import iconService1 from "./assets/strength/icon-strength-01.png"
import iconService2 from "./assets/strength/icon-strength-02.png"
import iconService3 from "./assets/strength/icon-strength-03.png"

const NAVY = "#1a2744"
const ORANGE = "#e8550a"

const services = [
  {
    icon: iconService1,
    title: "法人査定サービス",
    body: "休眠法人・赤字法人・債務超過法人を対象に、法人の現在価値を無料で査定いたします。解散・廃業をご検討の前に、まずはご相談ください。",
  },
  {
    icon: iconService2,
    title: "法人売却支援",
    body: "査定後の売却交渉から契約締結まで、専門スタッフが一貫してサポートいたします。秘密厳守・NDA締結のうえ、安心してお任せいただけます。",
  },
  {
    icon: iconService3,
    title: "M&Aコンサルティング",
    body: "事業承継・企業再編を検討されている経営者様に対し、最適なスキームをご提案いたします。全国対応・オンライン相談可能です。",
  },
]

const companyInfo = [
  { label: "機構名", value: "日本法人査定機構（JCAO）" },
  { label: "英語名", value: "Japan Corporate Assessment Organization" },
  { label: "所在地", value: "〒100-0001 東京都千代田区千代田1-1-1" },
  { label: "代表者", value: "代表理事　山田　太郎（仮）" },
  { label: "設立", value: "2020年4月（仮）" },
  { label: "事業内容", value: "法人査定・法人売却支援・M&Aコンサルティング" },
  { label: "対応エリア", value: "全国47都道府県（オンライン対応）" },
]

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#1a1a1a" }}>

      <Hero />

      {/* ===== 事業内容 ===== */}
      <section id="事業内容" className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-widest mb-2" style={{ color: ORANGE }}>SERVICE</p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: NAVY }}>事業内容</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col items-start gap-4 p-6 rounded-lg border" style={{ borderColor: "#e5e7eb" }}>
                <img src={s.icon} alt={s.title} className="w-14 h-14 object-contain" />
                <h3 className="text-lg font-bold" style={{ color: NAVY }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 会社概要 ===== */}
      <section id="会社概要" className="py-16 md:py-24" style={{ background: "#f8f9fa" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-widest mb-2" style={{ color: ORANGE }}>ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: NAVY }}>会社概要</h2>
          </div>
          <table className="w-full border-collapse text-sm md:text-base">
            <tbody>
              {companyInfo.map((row, i) => (
                <tr key={row.label} style={{ borderTop: i === 0 ? `2px solid ${NAVY}` : "1px solid #e5e7eb", borderBottom: i === companyInfo.length - 1 ? `2px solid ${NAVY}` : undefined }}>
                  <th className="text-left py-4 pr-6 font-bold w-32 md:w-40 align-top" style={{ color: NAVY }}>
                    {row.label}
                  </th>
                  <td className="py-4" style={{ color: "#374151" }}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== お問い合わせ ===== */}
      <section id="お問い合わせ" className="py-16 md:py-24 text-white" style={{ background: NAVY }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-sm font-bold tracking-widest mb-2 opacity-70">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4">お問い合わせ</h2>
          <p className="text-base leading-relaxed mb-2 opacity-80">
            法人売却・査定に関するご相談は、お電話またはメールにてお気軽にご連絡ください。
          </p>
          <p className="text-sm opacity-60 mb-10">
            秘密厳守・NDA締結のうえ対応いたします。相談・査定は無料です。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div>
              <p className="text-xs opacity-60 mb-1">お電話でのご相談</p>
              <a href="tel:0120-000-000" className="text-3xl font-black tracking-wide" style={{ color: "#f0c040" }}>
                0120-000-000
              </a>
              <p className="text-xs opacity-50 mt-1">受付時間 9:00〜18:00（土日祝除く）</p>
            </div>
            <div className="hidden md:block w-px h-16 opacity-20 bg-white" />
            <div>
              <p className="text-xs opacity-60 mb-1">メールでのご相談</p>
              <a href="mailto:info@jcao.jp" className="text-base font-bold underline opacity-80">
                info@jcao.jp（仮）
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 text-center text-xs text-white" style={{ background: "#0f1a2e" }}>
        <img src={jcaoLogo} alt="JCAO" className="h-8 w-auto mx-auto mb-4 opacity-70" />
        <p className="opacity-50">© 2024 Japan Corporate Assessment Organization. All rights reserved.</p>
      </footer>

    </div>
  )
}
