import tokyoSkyline from "../../assets/hero/corp-s2.png"

const NAVY = "#1a2744"
const ORANGE = "#e8550a"

export function MessageSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">

      {/* 背景：右下ビル群（薄く） */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none opacity-[0.08] md:opacity-[0.18]"
        style={{
          width: "70%",
          height: "75%",
          backgroundImage: `url(${tokyoSkyline})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
          maskImage: "linear-gradient(to top left, black 10%, transparent 65%)",
          WebkitMaskImage: "linear-gradient(to top left, black 10%, transparent 65%)",
        }}
      />

      {/* 右下：ネイビー斜め帯＋肩書（PC専用） */}
      <div
        className="hidden md:block absolute bottom-0 right-0"
        style={{
          width: "32%",
          height: "120px",
          background: NAVY,
          clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <div className="h-full flex items-center justify-end pr-12 gap-4">
          <div className="text-right">
            <p className="text-white/70 text-xs mb-1">代表取締役</p>
            <p className="text-white text-xl font-black tracking-wide">JCAO</p>
          </div>
          <div className="w-px h-10 bg-white/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-left md:text-left">

        {/* ラベル・見出し：SP/PC共に中央 */}
        <p className="text-xs md:text-sm font-bold tracking-widest mb-3 text-center" style={{ color: ORANGE }}>
          MESSAGE
        </p>
        <h2 className="text-3xl md:text-4xl font-black mb-5 md:mb-3 text-center" style={{ color: NAVY }}>
          代表メッセージ
        </h2>
        <div className="w-12 h-[3px] mb-10 mx-auto" style={{ background: ORANGE }} />

        {/* SP：引用文（3行構成・左揃え） */}
        <div className="md:hidden mb-6" style={{ maxWidth: "330px" }}>
          <p style={{ fontSize: "28px", fontWeight: 700, lineHeight: 1.45, color: NAVY, margin: 0 }}>
            「会社を持つって、<br />
            こんなにお金が<br />
            かかるものだったのか。」
          </p>
        </div>

        {/* PC：引用文（既存レイアウト） */}
        <p className="hidden md:block text-3xl font-bold leading-relaxed mb-3" style={{ color: NAVY }}>
          「会社を持つって、
          <span className="ml-6 block md:inline">こんなにお金がかかるものだったのか。」</span>
        </p>

        <div className="w-12 h-[3px] mb-8" style={{ background: ORANGE }} />

        {/* 本文：SP左揃え・14px / PC左揃え */}
        <div className="text-sm md:text-base leading-[1.9] space-y-4 md:space-y-5" style={{ color: "#374151" }}>
          <p>
            設立にも、維持にも、そして解散にも——<br />
            法人というのは、持っているだけでコストが生まれ続けます。
          </p>
          <p>
            「使わなくなった会社を、ただ眠らせておくしかない」<br />
            そう諦めている経営者の方が、日本にはたくさんいます。
          </p>
          <p>JCAOは、そんな現実に向き合い、法人に残された価値を次につなぐためのサービスです。</p>
          <p>
            あなたの法人に残っている価値を、
            <span className="font-bold" style={{ color: ORANGE }}>必要としている人へ繋ぐ。</span>
          </p>
          <p>
            無駄なコストが掛からない、最適な提案で価値を生みだし<br />
            次のビジネスへの架け橋になることが私たちの使命です。
          </p>
        </div>

        {/* SP専用：肩書 */}
        <div className="md:hidden mt-10 text-right pr-2">
          <p className="text-xs mb-1" style={{ color: "#9ca3af" }}>代表取締役</p>
          <p className="text-lg font-black tracking-wide" style={{ color: NAVY }}>JCAO</p>
        </div>
      </div>
    </section>
  )
}
