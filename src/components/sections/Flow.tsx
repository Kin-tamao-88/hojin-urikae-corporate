import { Laptop, ClipboardCheck, Handshake, ShieldCheck } from "lucide-react"

const steps = [
  {
    no: "01",
    icon: Laptop,
    title: "無料査定",
    desc: "フォームから法人情報を入力。",
    highlight: "30秒で完了します。",
  },
  {
    no: "02",
    icon: ClipboardCheck,
    title: "ご提案",
    desc: "で査定結果と売却条件をご提案します。",
    highlight: "最短即日",
    highlightBefore: true,
  },
  {
    no: "03",
    icon: Handshake,
    title: "ご契約・完了",
    desc: "ご契約手続き後、",
    highlight: "売却代金",
    highlightAfter: "をお支払いします。",
  },
]

export function Flow() {
  return (
    <section style={{ background: "#faf9f6", paddingTop: "48px", paddingBottom: "48px" }}>
      <div className="container-lp">

        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 900, color: "#1e3a5f", lineHeight: 1.3, margin: 0 }}>
            売却まで、<span style={{ color: "#b03023" }}>驚くほど簡単です</span>
          </h2>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "10px" }}>
            面倒な手続きはすべてサポートいたします
          </p>
        </div>

        {/* ステップ */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 48px 1fr 48px 1fr", alignItems: "center", gap: "0", marginBottom: "32px" }}>
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <>
                {/* カード */}
                <div key={step.no} style={{
                  background: "#ffffff",
                  border: "1.5px solid #e8e0d0",
                  borderRadius: "20px 20px 12px 12px",
                  padding: "32px 20px 24px",
                  textAlign: "center",
                  position: "relative",
                }}>
                  {/* 番号バッジ */}
                  <div style={{
                    position: "absolute",
                    top: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#1a2744",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {step.no}
                  </div>

                  {/* アイコン円形背景 */}
                  <div style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(212,175,55,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <Icon size={36} color="#1a2744" strokeWidth={1.5} />
                  </div>

                  {/* タイトル */}
                  <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#1e3a5f", margin: "0 0 10px" }}>
                    {step.title}
                  </h3>

                  {/* 説明文 */}
                  <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", margin: 0 }}>
                    {step.highlightBefore && (
                      <><span style={{ color: "#D4AF37", fontWeight: 700 }}>{step.highlight}</span>{step.desc}</>
                    )}
                    {!step.highlightBefore && !step.highlightAfter && (
                      <>{step.desc}<span style={{ color: "#D4AF37", fontWeight: 700 }}>{step.highlight}</span></>
                    )}
                    {step.highlightAfter && (
                      <>{step.desc}<span style={{ color: "#D4AF37", fontWeight: 700 }}>{step.highlight}</span>{step.highlightAfter}</>
                    )}
                  </p>
                </div>

                {/* 矢印 */}
                {index < steps.length - 1 && (
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <svg width="36" height="28" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="0,8 22,8 22,0 36,14 22,28 22,20 0,20" fill="#D4AF37" />
                    </svg>
                  </div>
                )}
              </>
            )
          })}
        </div>

        {/* 下部帯 */}
        <div style={{
          background: "rgba(212,175,55,0.06)",
          border: "1px solid rgba(212,175,55,0.3)",
          borderRadius: "10px",
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}>
          <ShieldCheck size={32} color="#1a2744" strokeWidth={1.5} style={{ flexShrink: 0 }} />
          <p style={{ fontSize: "15px", color: "#333", margin: 0, lineHeight: 1.7 }}>
            ご相談からお支払いまで、専門スタッフが丁寧にサポート。
            <span style={{ fontWeight: 900, color: "#1e3a5f" }}>安心してお任せください。</span>
          </p>
        </div>

      </div>
    </section>
  )
}