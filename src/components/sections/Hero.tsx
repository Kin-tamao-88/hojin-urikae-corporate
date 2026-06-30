import jcaoIcon from "../../assets/hero/jcao-icon-trimmed.png"
import handshakePhoto from "../../assets/hero/corp-s1.png"
import tokyoSkyline from "../../assets/hero/corp-s2.png"
import iconBuilding from "../../assets/hero/icon-building.png"
import iconShield from "../../assets/hero/icon-shield.png"
import iconHandshake from "../../assets/hero/icon-handshake.png"

const NAVY = "#1a2744"
const ORANGE = "#e8550a"

const features = [
  { icon: iconBuilding, label: "豊富な実績と\n専門知識" },
  { icon: iconShield, label: "秘密厳守の\n安心対応" },
  { icon: iconHandshake, label: "最適なソリューションを\nご提案" },
]

export function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#fff", minHeight: "760px" }}>

      {/* ===== ヘッダー（FV内に内包） ===== */}
      {/* SP: 通常フローの先頭に配置（写真より前） / PC: absoluteでFV画像上に重ねる */}
      <header className="relative md:absolute md:top-0 md:left-0 md:w-full" style={{ zIndex: 20 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img src={jcaoIcon} alt="JCAO" style={{ height: "44px", width: "auto" }} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-0.02em", color: NAVY }}>
                JCAO
              </span>
              <span className="hidden md:block" style={{ fontSize: "10px", letterSpacing: "0.05em", color: "#999" }}>
                法人の価値を、正しく見極める。
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center" style={{ gap: "32px" }}>
            {["JCAOについて", "事業内容", "ご相談の流れ", "会社概要"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                style={{ fontSize: "14px", fontWeight: 500, color: NAVY, textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#お問い合わせ"
            className="hidden md:inline-flex"
            style={{ fontSize: "13px", fontWeight: 700, color: "#fff", background: ORANGE, padding: "10px 22px", borderRadius: "4px", textDecoration: "none" }}
          >
            お問い合わせ
          </a>
        </div>
      </header>

      {/* ===== 右側：斜めカット写真エリア（PC専用） ===== */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "56%",
          height: "520px",
          clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0 100%)",
          overflow: "hidden",
        }}
      >
        <img
          src={handshakePhoto}
          alt="法人売却の握手シーン"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        {/* ナビ可読性のため左上に白フェード */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "40%",
            height: "90px",
            background: "linear-gradient(to right, rgba(255,255,255,0.88), transparent)",
          }}
        />
      </div>

      {/* ===== 右下ネイビー帯（PC専用） ===== */}
      <div
        className="hidden md:flex items-center"
        style={{
          position: "absolute",
          right: 0,
          top: "520px",
          width: "58%",
          height: "120px",
          background: "linear-gradient(90deg, #1a2744, #253454)",
          clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
          overflow: "hidden",
        }}
      >
        <img
          src={tokyoSkyline}
          alt=""
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            height: "120px",
            width: "auto",
            opacity: 0.35,
            objectFit: "cover",
          }}
        />
        <p
          style={{
            position: "relative",
            zIndex: 1,
            paddingLeft: "90px",
            fontSize: "20px",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          見えない価値を、未来につなぐ。
        </p>
      </div>

      {/* ===== SP専用：写真（斜めカットなし・通常表示） ===== */}
      <div className="md:hidden">
        <img
          src={handshakePhoto}
          alt="法人売却の握手シーン"
          style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
        />
        <div style={{ background: NAVY, padding: "12px 20px" }}>
          <p style={{ color: "#fff", fontSize: "14px", fontWeight: 700, letterSpacing: "0.02em", margin: 0 }}>
            見えない価値を、未来につなぐ。
          </p>
        </div>
      </div>

      {/* ===== 左カラム：テキストエリア（PC） ===== */}
      <div
        className="hidden md:block"
        style={{
          position: "relative",
          zIndex: 10,
          width: "47%",
          paddingLeft: "88px",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <h1 style={{ margin: 0, fontWeight: 800 }}>
          <span
            style={{
              display: "block",
              fontSize: "60px",
              lineHeight: 1.18,
              letterSpacing: "-0.03em",
              color: NAVY,
            }}
          >
            法人の価値を、
          </span>
          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              fontSize: "60px",
              lineHeight: 1.18,
              letterSpacing: "-0.03em",
              color: ORANGE,
              marginTop: "10px",
            }}
          >
            正しく見極める。
            <span style={{ display: "block", height: "3px", background: ORANGE, marginTop: "14px" }} />
          </span>
        </h1>

        <p
          style={{
            marginTop: "36px",
            marginBottom: 0,
            fontSize: "17px",
            lineHeight: 1.9,
            color: NAVY,
            maxWidth: "520px",
          }}
        >
          JCAOは、法人の新たな可能性を見出し、<br />
          最適な解決策を提供する専門パートナーです。
        </p>

        {/* 特徴3項目 */}
        <div
          style={{
            marginTop: "52px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "520px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                padding: "0 16px",
                borderLeft: i > 0 ? "1px solid #e2e6ec" : "none",
              }}
            >
              <img src={f.icon} alt="" style={{ width: "34px", height: "34px", objectFit: "contain" }} />
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textAlign: "center",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                  color: NAVY,
                  margin: 0,
                }}
              >
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SPテキストエリア ===== */}
      <div className="md:hidden" style={{ padding: "28px 20px 48px" }}>
        <h1 style={{ margin: 0, fontWeight: 800 }}>
          <span
            style={{
              display: "block",
              fontSize: "32px",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: NAVY,
            }}
          >
            法人の価値を、
          </span>
          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              fontSize: "32px",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: ORANGE,
              marginTop: "4px",
            }}
          >
            正しく見極める。
            <span style={{ display: "block", height: "3px", background: ORANGE, marginTop: "10px" }} />
          </span>
        </h1>
        <p style={{ marginTop: "20px", marginBottom: 0, fontSize: "15px", lineHeight: 1.8, color: NAVY }}>
          JCAOは、法人の新たな可能性を見出し、最適な解決策を提供する専門パートナーです。
        </p>
        <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {features.map((f, i) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                padding: "0 8px",
                borderLeft: i > 0 ? "1px solid #e2e6ec" : "none",
              }}
            >
              <img src={f.icon} alt="" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textAlign: "center",
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                  color: NAVY,
                  margin: 0,
                }}
              >
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
