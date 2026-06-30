import { Building2, ShieldCheck, Handshake } from "lucide-react"

const NAVY = "#1a2744"
const ORANGE = "#e8550a"

const values = [
  {
    Icon: Building2,
    number: "01",
    title: "法人の価値を\n正しく評価する",
    body: "休眠法人や赤字法人であっても、\n一社ごとの状況を丁寧に確認し、\n法人が持つ本来の価値を見極めます。",
  },
  {
    Icon: ShieldCheck,
    number: "02",
    title: "安心して\n相談できる体制",
    body: "秘密保持を徹底し、\nご相談内容や法人情報は\n厳重に管理いたします。",
  },
  {
    Icon: Handshake,
    number: "03",
    title: "次の挑戦へ\nつなぐ支援",
    body: "法人売却だけではなく、\n経営者様の次の一歩につながる\n最適なご提案を行います。",
  },
]

export function ValueSection() {
  return (
    <section className="pt-[36px] pb-[56px] md:pt-[100px] md:pb-[140px]" style={{ background: "#ffffff" }}>
      <div className="px-5 md:px-[48px]" style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* 見出し */}
        <div className="mb-8 md:mb-[56px]" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", color: ORANGE, margin: "0 0 14px" }}>
            VALUE
          </p>
          <h2
            className="text-[28px] md:text-[36px] max-w-[335px] md:max-w-none"
            style={{ fontWeight: 900, lineHeight: 1.45, letterSpacing: "-0.02em", color: NAVY, margin: "0 auto" }}
          >
            JCAOが大切にしている<br />3つの価値
          </h2>
          <div style={{ width: "72px", height: "2px", background: ORANGE, margin: "18px auto 0" }} />
        </div>

        {/* 3カラム */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.number}
              className={`${i > 0 ? "border-t md:border-t-0 md:border-l" : ""} pt-5 px-4 pb-6 md:pt-[32px] md:px-[36px] md:pb-[40px]`}
              style={{ position: "relative", borderColor: "#e2e8f0", overflow: "hidden" }}
            >
              {/* 背景番号 */}
              <span
                aria-hidden="true"
                className="text-[64px] md:text-[96px]"
                style={{
                  position: "absolute",
                  top: "60px",
                  right: "-4px",
                  fontWeight: 900,
                  color: NAVY,
                  opacity: 0.06,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                  letterSpacing: "-0.02em",
                  zIndex: 0,
                }}
              >
                {v.number}
              </span>

              {/* コンテンツ */}
              <div style={{ position: "relative", zIndex: 1 }}>

                {/* SP: アイコン＋番号 横並び */}
                <div className="flex items-center gap-3 md:hidden" style={{ marginBottom: "14px" }}>
                  <v.Icon size={48} color={NAVY} strokeWidth={1.5} />
                  <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.12em", color: ORANGE }}>
                    {v.number}
                  </span>
                </div>

                {/* PC: アイコン＋オレンジアクセント 縦並び */}
                <div className="hidden md:block" style={{ marginBottom: "20px" }}>
                  <v.Icon size={56} color={NAVY} strokeWidth={1.5} />
                  <div style={{ width: "28px", height: "3px", background: ORANGE, marginTop: "12px" }} />
                </div>

                {/* PC: 番号ラベル */}
                <p className="hidden md:block" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: ORANGE, margin: "0 0 10px" }}>
                  {v.number}
                </p>

                {/* タイトル */}
                <h3
                  className="mb-3 md:mb-5"
                  style={{
                    fontSize: "28px",
                    fontWeight: 900,
                    lineHeight: 1.35,
                    color: NAVY,
                    whiteSpace: "pre-line",
                    borderLeft: `4px solid ${NAVY}`,
                    paddingLeft: "14px",
                  }}
                >
                  {v.title}
                </h3>

                {/* 本文 */}
                <p
                  className="text-[14px] md:text-[16px] leading-[1.8] md:leading-[1.9]"
                  style={{
                    fontWeight: 500,
                    color: "#2b3445",
                    margin: 0,
                  }}
                >
                  {v.body.split("\n").map((line, j) => (
                    <span key={j} style={{ display: "block" }}>{line}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
