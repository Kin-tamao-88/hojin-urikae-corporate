import imgCaseIt from "../../assets/case/case-person-it.png"
import imgCaseConstruction from "../../assets/case/case-person-construction.png"

type CaseItem = {
  no: string
  industry: string
  beforeLabel: string
  beforeValue: string
  afterLabel: string
  afterValue: string
  summaryLabel: string
  summaryText: string
  quote: string
  personAge: string
  personRole: string
  image: string
}

const cases: CaseItem[] = [
  {
    no: "01",
    industry: "IT企業（システム開発業）",
    beforeLabel: "他社から提示された買取額",
    beforeValue: "300万円",
    afterLabel: "弊社の査定額",
    afterValue: "800万円！",
    summaryLabel: "査定結果",
    summaryText: "他社提示額より500万円高い\n800万円で譲渡成立",
    quote:
      "負債が大きくなり、誰に相談しても法人破産を勧められる状況でした。破産手続きには200万円以上かかると言われ途方に暮れていたところ、法人売却センターに相談。コストはほとんどかからず、むしろ買い取っていただきプラスになりました。対応も非常に早くて助かりました。",
    personAge: "40代・男性",
    personRole: "IT企業 経営者",
    image: imgCaseIt,
  },
  {
    no: "02",
    industry: "建設業（一般建設業）",
    beforeLabel: "取引先破産で代理弁済が必要",
    beforeValue: "約500万円",
    afterLabel: "法人売却で資金調達に成功",
    afterValue: "700万円！",
    summaryLabel: "資金調達成功",
    summaryText: "法人売却により\n必要資金700万円を確保",
    quote:
      "受注が決まり準備を進めていた矢先、取引先が突然破産。手元のキャッシュだけでは約500万円の代理弁済が必要で、支払いが間に合わず会社の存続も危ぶまれる状況でした。売却センターに相談したところ『債権があっても価値は高いかもしれない』と言っていただき、700万円で法人売却が成立。本当に助かりました。",
    personAge: "50代・男性",
    personRole: "建設業 経営者",
    image: imgCaseConstruction,
  },
]

export function CaseStudy() {
  return (
    <section style={{ background: "#f5f2ec", paddingTop: "48px", paddingBottom: "64px" }}>
      <div className="container-lp">

        {/* セクションヘッダー */}
        <div className="mb-8 text-center">
          <p
            className="mb-1 font-bold tracking-[0.2em]"
            style={{ fontSize: "12px", color: "#D4AF37" }}
          >
            CASE STUDY
          </p>
          <h2
            className="font-black leading-none text-[#1e3a5f]"
            style={{ fontSize: "52px", letterSpacing: "-0.02em" }}
          >
            活用事例
          </h2>
        </div>

        {/* CASEリスト */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {cases.map((c) => (
            <div key={c.no} style={{ overflow: "hidden", border: "1px solid #ddd7ce" }}>

              {/* ① CASEヘッダー帯（ネイビー） */}
              <div
                style={{
                  background: "#1a2744",
                  padding: "16px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 900,
                    letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  CASE {c.no}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: "1px",
                    height: "18px",
                    background: "rgba(255,255,255,0.25)",
                    flexShrink: 0,
                  }}
                />
                <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#ffffff", margin: 0 }}>
                  {c.industry}
                </h3>
              </div>

              {/* ② 数字エリア（白背景） */}
              <div
                style={{
                  background: "#ffffff",
                  padding: "16px 32px",
                  borderBottom: "1px solid #e8e3dc",
                }}
              >
                {/* 左右数字グリッド */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 56px 1fr",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                >
                  {/* 左：問題コスト */}
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        background: "#b03023",
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: "2px",
                        lineHeight: 1.4,
                      }}
                    >
                      {c.beforeLabel}
                    </span>
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "60px",
                        fontWeight: 700,
                        color: "#b03023",
                        whiteSpace: "nowrap",
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                      }}
                    >
                      {c.beforeValue}
                    </p>
                  </div>

                  {/* 矢印 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "40px",
                    }}
                  >
                    <svg width="36" height="16" viewBox="0 0 36 16" fill="none">
                      <line x1="0" y1="8" x2="26" y2="8" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" />
                      <path d="M22 2 L33 8 L22 14" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  {/* 右：成果 */}
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        background: "#9a7a3a",
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: "2px",
                        lineHeight: 1.4,
                      }}
                    >
                      {c.afterLabel}
                    </span>
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "60px",
                        fontWeight: 700,
                        color: "#D4AF37",
                        whiteSpace: "nowrap",
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                      }}
                    >
                      {c.afterValue}
                    </p>
                  </div>
                </div>

                {/* 成果サマリー（数字比較の結論） */}
                <div
                  style={{
                    marginTop: "10px",
                    paddingTop: "10px",
                    paddingLeft: "16px",
                    borderTop: "1px solid rgba(212,175,55,0.35)",
                    borderLeft: "3px solid #D4AF37",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "#9a7a3a",
                      marginBottom: "6px",
                    }}
                  >
                    {c.summaryLabel}
                  </p>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#1e3a5f",
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {c.summaryText}
                  </p>
                </div>
              </div>

              {/* ③ 口コミエリア（薄いベージュ背景） */}
              <div style={{ background: "#faf8f3", padding: "12px 32px 20px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 160px",
                    gap: "24px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* コメント本文（枠線なし・主役） */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(226,232,240,0.4)",
                      borderRadius: "8px",
                      padding: "16px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: 1.95,
                        color: "#1e3a5f",
                      }}
                    >
                      {c.quote}
                    </p>
                  </div>

                  {/* 人物写真＋属性（補足） */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      paddingTop: "20px",
                    }}
                  >
                    <img
                      src={c.image}
                      alt={`${c.personAge} ${c.personRole}`}
                      style={{
                        width: "124px",
                        height: "124px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "center 10%",
                        border: "1px solid #D4AF37",
                      }}
                    />
                    <div style={{ textAlign: "center", lineHeight: 1.7 }}>
                      <p style={{ fontSize: "13px", fontWeight: 700, color: "#1e3a5f" }}>
                        {c.personAge}
                      </p>
                      <p style={{ fontSize: "13px", fontWeight: 400, color: "rgba(30,58,95,0.65)" }}>
                        {c.personRole}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 注釈 */}
        <p
          style={{
            marginTop: "24px",
            textAlign: "center",
            fontSize: "11px",
            color: "rgba(30,58,95,0.4)",
          }}
        >
          ※上記は一例であり、すべてのケースで同様の結果を保証するものではありません。
        </p>
      </div>
    </section>
  )
}
