import tokyoSkyline from "../../assets/hero/corp-s2.png"
import jcaoIcon from "../../assets/hero/jcao-icon-trimmed.png"
import iconScale from "../../assets/strength/icon-strength-01.png"
import iconClock from "../../assets/strength/icon-strength-02.png"
import iconDocument from "../../assets/strength/icon-strength-03.png"

const NAVY = "#1a2744"
const ORANGE = "#e8550a"

const services = [
  {
    icon: iconScale,
    title: "法人査定サービス",
    body: "休眠法人・赤字法人・債務超過法人を対象に、法人の現在価値を無料で査定いたします。\n解散・廃業をご検討の前に、まずはご相談ください。",
  },
  {
    icon: iconClock,
    title: "法人売却支援",
    body: "査定後の売却交渉から契約締結まで、専門スタッフが一貫してサポートいたします。\n秘密厳守・NDA締結のうえ、安心してお任せいただけます。",
  },
  {
    icon: iconDocument,
    title: "M&Aコンサルティング",
    body: "事業承継・企業再編を検討されている経営者様に対し、最適なスキームをご提案いたします。\n全国対応・オンライン相談可能です。",
  },
]

export function ServiceSection() {
  return (
    <section id="事業内容" className="relative overflow-hidden bg-white">

      {/* ===== ブランド帯（VALUE → SERVICE 繋ぎ） ===== */}
      <div
        style={{
          background: NAVY,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px 20px",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: 700, color: "#9a7a3a", letterSpacing: "0.1em", margin: "0 0 16px", textAlign: "center" }}>
          日本No.1の満足度・成約率を目指す
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img src={jcaoIcon} alt="JCAO" style={{ height: "44px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.88 }} />
          <div>
            <p style={{ fontSize: "25px", fontWeight: 900, color: "#ffffff", margin: "0 0 3px", letterSpacing: "0.02em" }}>
              日本法人査定機構
            </p>
            <p style={{ fontSize: "17px", fontWeight: 500, color: "rgba(255,255,255,0.5)", margin: 0, letterSpacing: "0.06em" }}>
              Japan Corporate Assessment Organization
            </p>
          </div>
        </div>
      </div>

      {/* 下部：事業内容リスト */}
      <div className="relative max-w-5xl mx-auto px-6 py-14 md:py-20">

        {/* 背景装飾：右下にうっすらビル群（PC専用） */}
        <div
          className="hidden md:block absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: "55%",
            height: "60%",
            backgroundImage: `url(${tokyoSkyline})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom right",
            opacity: 0.12,
            maskImage: "linear-gradient(to top left, black 20%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to top left, black 20%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <p className="text-xs md:text-sm font-bold tracking-widest mb-2" style={{ color: ORANGE }}>
            SERVICE
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: NAVY }}>
            事業内容
          </h2>
          <div className="w-12 h-[3px] mb-10 md:mb-14" style={{ background: ORANGE }} />

          <div className="flex flex-col">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8"
                style={{ borderTop: i === 0 ? "1px solid #e5e7eb" : "1px solid #e5e7eb" }}
              >
                {/* アイコン＋タイトル */}
                <div className="flex items-center gap-5 md:w-72 flex-shrink-0">
                  <img src={s.icon} alt={s.title} className="w-14 h-14 md:w-16 md:h-16 object-contain flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold" style={{ color: NAVY }}>
                      {s.title}
                    </h3>
                    <div className="w-6 h-[2px] mt-2" style={{ background: ORANGE }} />
                  </div>
                </div>

                {/* 区切り線（PC） */}
                <div className="hidden md:block w-px self-stretch" style={{ background: "#e5e7eb" }} />

                {/* 本文 */}
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-line" style={{ color: "#2b3445" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
