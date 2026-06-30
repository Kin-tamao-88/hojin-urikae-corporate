import { Check } from "lucide-react"

const NAVY = "#1a2744"
const ORANGE = "#e8550a"

const targets = [
  "休眠法人",
  "赤字法人",
  "債務超過法人",
  "事業停止中の法人",
  "後継者不在法人",
  "解散を検討中の法人",
  "清算前の法人",
  "資産保有法人",
]

export function TargetSection() {
  return (
    <section className="bg-white py-[56px] md:py-[120px]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-6">

        {/* 見出し */}
        <div className="text-center mb-10 md:mb-[60px]">
          <p className="text-xs md:text-sm font-bold tracking-widest mb-2" style={{ color: ORANGE }}>
            TARGET
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
            対応可能な法人
          </h2>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2b3445", lineHeight: 1.9 }}>
            休眠法人・赤字法人だけでなく、<br />
            さまざまな状況の法人についてご相談いただけます。
          </p>
        </div>

        {/* 2カラム：左60% / 右40%（SP縦積み） */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">

          {/* 左：対応法人一覧（タグ風） */}
          <div className="w-full md:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {targets.map((t) => (
                <div
                  key={t}
                  className="bg-white text-center py-3 px-4 md:py-[14px] md:px-5"
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    className="text-[14px] md:text-base"
                    style={{
                      fontWeight: 600,
                      lineHeight: 1.5,
                      color: NAVY,
                    }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 右：補足説明 */}
          <div className="w-full md:w-[40%] flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-5" style={{ color: NAVY }}>
              このような法人も<br />
              ご相談ください。
            </h3>
            <p
              className="text-[14px] md:text-base"
              style={{ color: "#2b3445", lineHeight: 1.9 }}
            >
              <span className="block md:inline">法人の状況によって、</span>
              <span className="block md:inline">ご提案できる内容は異なります。</span>
              <span className="block md:inline">「価値がない」と判断する前に、</span>
              <span className="block md:inline">まずはお気軽にご相談ください。</span>
            </p>

            {/* 下部：ネイビー細線＋秘密厳守表記 */}
            <div className="flex items-center gap-3 mt-6 pt-5 md:mt-8 md:pt-6" style={{ borderTop: `1px solid ${NAVY}` }}>
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: ORANGE }} strokeWidth={3} />
              <span className="text-sm font-semibold" style={{ color: NAVY }}>
                秘密厳守・全国オンライン対応
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
