import { Hero } from "./components/sections/Hero"
import { ValueSection } from "./components/sections/ValueSection"
import { ServiceSection } from "./components/sections/ServiceSection"
import { MessageSection } from "./components/sections/MessageSection"
import { TargetSection } from "./components/sections/TargetSection"
import { ContactSection } from "./components/sections/ContactSection"
import jcaoLogo from "./assets/hero/jcao-logo-top.png"

const NAVY = "#1a2744"
const ORANGE = "#e8550a"


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

      <ValueSection />

      <ServiceSection />

      <MessageSection />

      <TargetSection />

      <ContactSection />

      {/* ===== 会社概要 ===== */}
      <section id="会社概要" className="py-12 md:py-24" style={{ background: "#f8f9fa" }}>
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

      {/* ===== FOOTER ===== */}
      <footer className="py-6 md:py-8 text-center text-xs text-white" style={{ background: "#0f1a2e" }}>
        <img src={jcaoLogo} alt="JCAO" className="h-8 w-auto mx-auto mb-4 opacity-70" />
        <p className="opacity-50">© 2024 Japan Corporate Assessment Organization. All rights reserved.</p>
      </footer>

    </div>
  )
}
