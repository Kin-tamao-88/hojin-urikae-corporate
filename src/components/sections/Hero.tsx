import {
  Building2,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react"
import heroVisual from "../../assets/hero/01-hero-visual.png"
import iconRedCompany from "../../assets/icons/01-icon-red-company.png"
import iconDebt from "../../assets/icons/01-icon-debt.png"
import iconNationwide from "../../assets/icons/01-icon-nationwide.png"
import iconProfessionalSupport from "../../assets/icons/01-icon-professional-support.png"
import laurelLeft from "../../assets/results/01-results-laurel-left.png"

const LAUREL_CLS = "h-[68px] w-[50px] shrink-0 object-contain"

function StatValue({ value, size = 40 }: { value: string; size?: number }) {
  return (
    <div className="relative flex h-[60px] w-full items-center justify-center">
      <img src={laurelLeft} alt="" aria-hidden className={`${LAUREL_CLS} absolute left-[calc(50%-160px)] top-1/2 -translate-y-1/2`} />
      <span className="whitespace-nowrap font-extrabold leading-none" style={{ color: GOLD, fontSize: `${size}px` }}>
        {value}
      </span>
      <img src={laurelLeft} alt="" aria-hidden className={`${LAUREL_CLS} absolute left-[calc(50%+110px)] top-1/2 -translate-y-1/2 -scale-x-100`} />
    </div>
  )
}

const NAVY = "#1e3a5f"
const NAVY2 = "#16304d"
const GOLD = "#E5C04A"
const RED = "#b03023"
const PAGE_BG = "#fafafa"

const cards = [
  { icon: iconRedCompany, label: "赤字法人", ok: true },
  { icon: iconDebt, label: "債務あり", ok: true },
  { icon: iconNationwide, label: "全国対応\n47都道府県", ok: false },
  { icon: iconProfessionalSupport, label: "士業連携で\n安心サポート", ok: false },
]

const stats: { value: string; label: string; note: string; vSize?: number }[] = [
  { value: "300件以上", label: "法人売却相談", note: "※2025年度実績" },
  { value: "47都道府県", label: "全国対応", note: "", vSize: 32 },
  { value: "100%", label: "秘密厳守", note: "プライバシー徹底保護" },
  { value: "即日対応", label: "最短査定", note: "スピード査定", vSize: 36 },
]

export function Hero() {
  return (
    <section id="hero" style={{ background: PAGE_BG }}>
      {/* ───── ヘッダー：ロゴ左 ｜ 電話中央 ｜ CTA右 ───── */}
      <header className="w-full bg-white" style={{ borderBottom: `1px solid ${NAVY}1a` }}>
        <div className="mx-auto flex h-[96px] w-full max-w-[1536px] items-center justify-between px-10">

          {/* 左：ロゴ */}
          <a href="#hero" className="flex items-center gap-3.5">
            <span className="flex h-12 w-12 items-center justify-center rounded-md" style={{ background: NAVY, color: GOLD }}>
              <Building2 className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[22px] font-extrabold tracking-tight" style={{ color: NAVY }}>法人売却センター</span>
              <span className="text-[12px]" style={{ color: NAVY }}>法人の売却・譲渡を専門サポート</span>
            </span>
          </a>

          {/* 中央：電話番号 */}
          <div className="flex flex-col items-center leading-tight">
            <span className="text-[12px]" style={{ color: NAVY }}>お急ぎの方はお電話でご相談ください</span>
            <a href="tel:03-0000-0000" className="flex items-center gap-2 text-[32px] font-black" style={{ color: NAVY }}>
              <Phone className="h-6 w-6" strokeWidth={2.5} style={{ color: GOLD }} />
              03-XXXX-XXXX
            </a>
            <span className="text-[11px]" style={{ color: NAVY }}>受付時間 9:00-18:00（土日祝日を除く）</span>
          </div>

          {/* 右：CTA */}
          <div className="flex flex-col items-center gap-1">
            <a href="#contact" className="flex items-center gap-2 rounded-md border-2 bg-white px-8 py-3.5 text-[18px] font-extrabold" style={{ color: NAVY, borderColor: NAVY }}>
              <Mail className="h-[22px] w-[22px]" strokeWidth={2} />
              無料で査定してみる
            </a>
            <span className="text-[11px] font-extrabold" style={{ color: GOLD }}>24時間受付中</span>
          </div>

        </div>
      </header>

      {/* ───── メインビジュアルエリア ───── */}
      <div className="w-full px-[10px] py-[10px]">
        <div className="mx-auto w-full max-w-[1516px]">

          <div className="relative flex overflow-hidden bg-white">

            {/* 左カラム：約58% */}
            <div className="relative flex flex-col py-[40px] pl-[60px] pr-[16px]" style={{ flexBasis: "58%", flexShrink: 0 }}>

              {/* 濃紺バッジ */}
              <span className="inline-flex w-fit items-center rounded-lg px-[26px] py-[14px] text-[18px] font-extrabold" style={{ background: NAVY, color: GOLD }}>
                赤字・債務・休眠法人もご相談可能
              </span>

              {/* メインコピー3行 */}
              <p className="hero-heading-lead">放置している法人を</p>
              <p className="hero-heading-main">
                <span className="hero-main-gold">高額</span>
                <span className="hero-main-de">で</span>
                <span className="hero-main-gold">売却</span>
              </p>
              <p className="hero-heading-close">しませんか？</p>

              {/* サブコピー */}
              <p style={{ fontSize: "22px", fontWeight: 600, lineHeight: 1.5, color: NAVY, margin: 0, marginTop: "16px" }}>
                法人売却・事業承継の専門チームが
                <br />
                全国対応・秘密厳守でサポートいたします
              </p>

              {/* 4カード */}
              <div className="mt-[18px] flex gap-[10px]">
                {cards.map((card) => (
                  <div
                    key={card.label}
                    className="flex h-[110px] flex-1 flex-row items-center justify-center gap-[12px] rounded-lg bg-white text-left"
                    style={{ border: `1px solid ${NAVY}22` }}
                  >
                    <img src={card.icon} alt="" aria-hidden className="h-[40px] w-[40px] shrink-0 object-contain" />
                    <span className="whitespace-pre-line text-[16px] font-extrabold leading-tight" style={{ color: NAVY }}>
                      {card.label}
                      {card.ok && <span style={{ color: GOLD }}>OK</span>}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA：赤ボタン＋金バッジ */}
              <div className="relative mt-[16px] w-full">
                <a
                  href="#contact"
                  className="hero-cta-pulse relative flex h-[84px] w-full items-center justify-center rounded-lg px-[32px] text-[28px] font-extrabold text-white"
                  style={{ background: RED }}
                >
                  <span
                    className="absolute -left-[4px] top-1/2 flex h-[72px] w-[72px] -translate-y-1/2 flex-col items-center justify-center rounded-lg text-center text-[11px] font-extrabold leading-tight"
                    style={{ background: GOLD, color: NAVY }}
                  >
                    簡単60秒
                    <br />
                    入力
                  </span>
                  <span className="flex items-center gap-[14px]">
                    <Mail className="h-[28px] w-[28px] shrink-0" strokeWidth={2.25} />
                    <span>無料で査定してみる</span>
                  </span>
                  <ChevronRight className="absolute right-[28px] top-1/2 h-[26px] w-[26px] -translate-y-1/2" strokeWidth={2.5} />
                </a>
              </div>

              {/* CTA下補足 */}
              <p className="mt-[10px] text-center text-[14px]" style={{ color: NAVY }}>
                査定だけでもOK｜しつこい営業は一切いたしません
              </p>
            </div>

            {/* 右カラム：約42%（ヒーロービジュアル） */}
            <div className="relative overflow-hidden" style={{ flexBasis: "42%", flexShrink: 0 }}>
              <img
                src={heroVisual}
                alt="法人売却センター 担当者とオフィスビル群"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "22% 18%" }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden
                style={{
                  background: "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.7) 5%, rgba(255,255,255,0) 16%)",
                  backdropFilter: "blur(1.5px)",
                  WebkitBackdropFilter: "blur(1.5px)",
                  maskImage: "linear-gradient(to right, black 0%, black 8%, transparent 18%)",
                  WebkitMaskImage: "linear-gradient(to right, black 0%, black 8%, transparent 18%)",
                }}
              />
            </div>

            {/* 査定最高額：右側に斜め配置（参考画像準拠） */}
            <div
              className="pointer-events-none absolute left-[41%] top-[124px] z-30 flex flex-col items-start"
              style={{ transform: "rotate(-6deg)", transformOrigin: "left center" }}
              aria-hidden
            >
              <span className="whitespace-nowrap leading-none" style={{ fontSize: "37px", fontWeight: 800, color: RED }}>
                査定最高額
              </span>

              <div className="relative mt-[12px]">
                <svg
                  className="absolute -left-[10px] -bottom-[12px] -z-10 h-[48px] w-[420px]"
                  viewBox="0 0 420 50"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="heroBrush" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#E5C04A" />
                      <stop offset="100%" stopColor="#E5C04A" />
                    </linearGradient>
                  </defs>
                  <path d="M8 40 C 80 33, 150 33, 232 24 C 308 16, 360 14, 412 6 C 372 24, 312 26, 246 31 C 162 37, 84 39, 14 45 Z" fill="url(#heroBrush)" />
                  <path d="M30 37 C 140 30, 260 23, 380 12" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M22 42 C 150 34, 270 28, 392 16" stroke="#846526" strokeOpacity="0.5" strokeWidth="1.3" strokeLinecap="round" />
                  <path d="M318 19 l 16 -2 M348 16 l 20 -3 M384 11 l 18 -3" stroke="#E5C04A" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
                </svg>
                <span className="relative whitespace-nowrap leading-none" style={{ color: RED }}>
                  <span style={{ fontSize: "84px", fontWeight: 900 }}>1,100</span>
                  <span style={{ fontSize: "52px", fontWeight: 700, marginLeft: "2px" }}>万円</span>
                  <span style={{ fontSize: "52px", fontWeight: 700, marginLeft: "4px" }}>！</span>
                </span>
              </div>

              <span className="mt-[16px] whitespace-nowrap leading-none" style={{ fontSize: "24px", fontWeight: 700, color: NAVY }}>
                当日払いの実績アリ
              </span>
              <span className="mt-[8px] self-center whitespace-nowrap" style={{ fontSize: "13px", fontWeight: 600, color: NAVY }}>
                （負債有り法人の実績）
              </span>
            </div>

          </div>

          {/* ───── 実績バー ───── */}
          <div className="flex h-[150px] w-full" style={{ background: NAVY }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-1 flex-col items-center justify-center gap-[6px] text-center"
                style={i > 0 ? { borderLeft: `1px solid ${NAVY2}` } : undefined}
              >
                <span className="text-[16px] font-extrabold text-white/90">{stat.label}</span>
                <StatValue value={stat.value} size={stat.vSize} />
                <span className="text-[13px] text-white/70">{stat.note || " "}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
