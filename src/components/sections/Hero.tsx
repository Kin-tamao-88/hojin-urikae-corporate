import { useState } from "react"
import { Menu, X } from "lucide-react"
import jcaoIcon from "../../assets/hero/jcao-icon-trimmed.png"
import handshakePhoto from "../../assets/hero/corp-s1.png"
import tokyoSkyline from "../../assets/hero/corp-s2.png"
import iconBuilding from "../../assets/hero/icon-building.png"
import iconShield from "../../assets/hero/icon-shield.png"
import iconHandshake from "../../assets/hero/icon-handshake.png"

const NAVY = "#1a2744"
const ORANGE = "#e8550a"

const navItems = ["JCAOについて", "事業内容", "ご相談の流れ", "会社概要"]

const features = [
  { icon: iconBuilding, label: "豊富な実績と\n専門知識" },
  { icon: iconShield, label: "秘密厳守の\n安心対応" },
  { icon: iconHandshake, label: "最適なソリューションを\nご提案" },
]

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section
      className="md:min-h-[840px]"
      style={{ position: "relative", overflow: "hidden", background: "#e8edf2" }}
    >

      {/* ===== ヘッダー ===== */}
      <header
        className="relative md:absolute md:top-0 md:left-0 md:w-full"
        style={{ zIndex: 30, background: "rgba(255,255,255,0.96)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
      >
        {/* PC：既存レイアウト */}
        <div
          className="hidden md:flex items-center justify-between"
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 60px", height: "96px" }}
        >
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
            <img src={jcaoIcon} alt="JCAO" style={{ height: "60px", width: "auto" }} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span style={{ fontSize: "28px", fontWeight: 900, letterSpacing: "-0.02em", color: NAVY }}>JCAO</span>
              <span style={{ fontSize: "12px", letterSpacing: "0.05em", color: "#999" }}>法人の価値を、正しく見極める。</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center" style={{ gap: "38px" }}>
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} style={{ fontSize: "17px", fontWeight: 500, color: NAVY, textDecoration: "none" }}>{item}</a>
            ))}
          </nav>
          <a href="#お問い合わせ" style={{ fontSize: "15px", fontWeight: 700, color: "#fff", background: ORANGE, padding: "15px 28px", borderRadius: "4px", textDecoration: "none" }}>
            お問い合わせ
          </a>
        </div>

        {/* SP：ロゴ＋ハンバーガー */}
        <div
          className="md:hidden flex items-center justify-between"
          style={{ padding: "0 20px", height: "72px" }}
        >
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img src={jcaoIcon} alt="JCAO" style={{ height: "44px", width: "auto" }} />
            <span style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-0.02em", color: NAVY }}>JCAO</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: NAVY, padding: "4px", display: "flex", alignItems: "center" }}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* SP：ドロップダウンメニュー */}
        {menuOpen && (
          <nav
            className="md:hidden"
            style={{ position: "absolute", top: "72px", left: 0, right: 0, background: "#ffffff", zIndex: 50, borderBottom: "2px solid #e5e7eb" }}
          >
            {[...navItems, "お問い合わせ"].map((item, i) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "16px 20px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: NAVY,
                  textDecoration: "none",
                  borderTop: i > 0 ? "1px solid #e5e7eb" : "none",
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ===== PC：写真（全面背景） ===== */}
      <div className="hidden md:block" style={{ position: "absolute", inset: 0 }}>
        <img
          src={handshakePhoto}
          alt="法人売却の握手シーン"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 15%" }}
        />
      </div>

      {/* ===== PC：白い斜め面 ===== */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          inset: 0,
          background: "#ffffff",
          clipPath: "polygon(0% 0%, 54% 0%, 30% 100%, 0% 100%)",
          zIndex: 2,
        }}
      />

      {/* ===== PC：ネイビー帯（斜めライン延長） ===== */}
      <div
        className="hidden md:flex items-center"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "80px",
          background: NAVY,
          clipPath: "polygon(32% 0, 100% 0, 100% 100%, 30% 100%)",
          overflow: "hidden",
          zIndex: 3,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${tokyoSkyline})`,
            backgroundSize: "cover",
            backgroundPosition: "right bottom",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to right, rgba(26,39,68,0.92) 20%, rgba(26,39,68,0.52) 100%)`,
          }}
        />
        <p style={{ position: "relative", zIndex: 1, paddingLeft: "36%", fontSize: "23px", fontWeight: 700, color: "#fff", letterSpacing: "0.04em", margin: 0 }}>
          見えない価値を、未来に繋ぐ。
        </p>
      </div>

      {/* ===== SP：見出し・本文 ===== */}
      <div className="md:hidden" style={{ padding: "14px 20px 12px", background: "#ffffff" }}>
        <h1 style={{ margin: 0, fontWeight: 800 }}>
          <span style={{ display: "block", fontSize: "32px", lineHeight: 1.3, letterSpacing: "-0.02em", color: NAVY }}>
            法人の価値を、
          </span>
          <span style={{ display: "inline-flex", flexDirection: "column", fontSize: "32px", lineHeight: 1.3, letterSpacing: "-0.02em", color: ORANGE, marginTop: "4px" }}>
            正しく見極める。
            <span style={{ display: "block", height: "3px", background: ORANGE, marginTop: "10px" }} />
          </span>
        </h1>
        <p style={{ marginTop: "10px", marginBottom: 0, fontSize: "15px", lineHeight: 1.8, color: NAVY }}>
          JCAOは、法人の新たな可能性を見出し、最適な解決策を提供する専門パートナーです。
        </p>
      </div>

      {/* ===== SP：写真 ===== */}
      <div className="md:hidden">
        <img
          src={handshakePhoto}
          alt="法人売却の握手シーン"
          style={{ width: "100%", height: "220px", objectFit: "cover", objectPosition: "55% 18%", display: "block" }}
        />
        <div style={{ background: NAVY, padding: "12px 20px" }}>
          <p style={{ color: "#fff", fontSize: "14px", fontWeight: 700, letterSpacing: "0.02em", margin: 0 }}>
            見えない価値を、未来につなぐ。
          </p>
        </div>
      </div>

      {/* ===== SP：3項目 ===== */}
      <div className="md:hidden" style={{ background: "#ffffff", padding: "16px 12px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
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
                  fontSize: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                  lineHeight: 1.45,
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

      {/* ===== 左カラム：テキスト（PC） ===== */}
      <div
        className="hidden md:block"
        style={{
          position: "relative",
          zIndex: 10,
          width: "48%",
          paddingLeft: "80px",
          paddingTop: "116px",
          paddingBottom: "80px",
        }}
      >
        <h1 style={{ margin: 0, fontWeight: 800 }}>
          <span style={{ display: "block", fontSize: "60px", lineHeight: 1.18, letterSpacing: "-0.03em", color: NAVY }}>
            法人の価値を、
          </span>
          <span style={{ display: "inline-flex", flexDirection: "column", fontSize: "60px", lineHeight: 1.18, letterSpacing: "-0.03em", color: ORANGE, marginTop: "10px" }}>
            正しく見極める。
            <span style={{ display: "block", height: "3px", background: ORANGE, marginTop: "14px" }} />
          </span>
        </h1>

        <p style={{ marginTop: "36px", marginBottom: 0, fontSize: "17px", lineHeight: 1.9, color: NAVY, maxWidth: "480px" }}>
          JCAOは、法人の新たな可能性を見出し、<br />
          最適な解決策を提供する専門パートナーです。
        </p>

        {/* 特徴3項目（PC） */}
        <div style={{ marginTop: "64px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 170px)", width: "510px" }}>
            {features.map((f, i) => (
              <div
                key={f.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "14px",
                  padding: "0",
                  borderLeft: i > 0 ? "1px solid #c8cfd8" : "none",
                }}
              >
                <img src={f.icon} alt="" style={{ width: "48px", height: "48px", objectFit: "contain" }} />
                <p
                  style={{
                    fontSize: "15px",
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
      </div>

    </section>
  )
}
