import { useState } from "react"

const NAVY = "#1a2744"
const ORANGE = "#e8550a"

const steps = [
  { no: "STEP 01", title: "お問い合わせ" },
  { no: "STEP 02", title: "内容確認" },
  { no: "STEP 03", title: "査定・ご提案" },
]

export function ContactSection() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 送信処理は未実装（フォーム見た目のみ）
    console.log("form submit", form)
  }

  return (
    <section id="お問い合わせ" className="py-16 md:py-24 text-white" style={{ background: NAVY }}>
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center">
          <p className="text-xs font-bold tracking-widest mb-2 opacity-70">CONTACT</p>
          <h2 className="text-2xl md:text-4xl font-black mb-8 leading-snug">
            まずはお気軽に<br />
            ご相談ください
          </h2>

          <p className="text-sm leading-relaxed mb-12 opacity-80">
            法人の状況は一社ごとに異なります。<br />
            現在の状況を確認したうえで、<br />
            最適なご提案をいたします。<br />
            秘密厳守・相談無料で対応しております。
          </p>

          {/* 3STEP */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mb-14">
            {steps.map((s) => (
              <div key={s.no} className="flex-1 flex flex-col items-center">
                <span className="text-sm font-black tracking-widest mb-2" style={{ color: ORANGE }}>
                  {s.no}
                </span>
                <div className="w-6 h-[2px] mb-3" style={{ background: ORANGE }} />
                <p className="text-base md:text-lg font-bold text-white">{s.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== フォーム ===== */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 md:p-10 text-left"
          style={{ color: NAVY }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-bold mb-2">会社名</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 text-sm"
                style={{ borderColor: "#d1d5db" }}
                placeholder="株式会社○○"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                ご担当者名 <span style={{ color: ORANGE }}>※必須</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-3 text-sm"
                style={{ borderColor: "#d1d5db" }}
                placeholder="山田 太郎"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-bold mb-2">
                メールアドレス <span style={{ color: ORANGE }}>※必須</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-3 text-sm"
                style={{ borderColor: "#d1d5db" }}
                placeholder="info@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">電話番号</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 text-sm"
                style={{ borderColor: "#d1d5db" }}
                placeholder="000-0000-0000"
              />
            </div>
          </div>

          <div className="mb-7">
            <label className="block text-sm font-bold mb-2">ご相談内容</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full border rounded px-4 py-3 text-sm resize-none"
              style={{ borderColor: "#d1d5db" }}
              placeholder="現在の法人の状況などをご記入ください"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-bold py-4 rounded text-base"
            style={{ background: ORANGE }}
          >
            この内容で送信する
          </button>
        </form>

        {/* 電話・メール */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14">
          <div>
            <p className="text-xs opacity-60 mb-1 text-center">お電話でのご相談</p>
            <a href="tel:0120-000-000" className="text-3xl font-black tracking-wide" style={{ color: "#f0c040" }}>
              0120-000-000
            </a>
            <p className="text-xs opacity-50 mt-1 text-center">受付時間 9:00〜18:00（土日祝除く）</p>
          </div>
          <div className="hidden md:block w-px h-16 opacity-20 bg-white" />
          <div className="text-center">
            <p className="text-xs opacity-60 mb-1">メールでのご相談</p>
            <a href="mailto:info@jcao.jp" className="text-base font-bold underline opacity-80">
              info@jcao.jp（仮）
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
