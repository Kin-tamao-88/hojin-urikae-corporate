import { Mail, ChevronRight } from 'lucide-react'
import heroConsultation from '../../assets/hero/hero-consultation.png'
import jcaoLogo from '../../assets/hero/jcao-logo-top.png'
import jcaoIcon from '../../assets/hero/jcao-icon-trimmed.png'

const NAVY = '#1a2744'
const ORANGE = '#e8550a'

export default function Hero() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e8e8e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={jcaoLogo} alt="日本法人査定機構" style={{ height: '80px', width: 'auto', marginLeft: '102px' }} />
        </div>
        <a href="#contact" style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          backgroundColor: ORANGE, color: '#ffffff',
          padding: '16px 26px', textDecoration: 'none',
          transition: 'background-color 0.2s ease',
        }}
          onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#c94208')}
          onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = ORANGE)}
        >
          <Mail style={{ width: '16px', height: '16px', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', lineHeight: 1.3 }}>法人価値を無料で診断する</div>
            <div style={{ fontSize: '0.68rem', opacity: 0.9, lineHeight: 1.3 }}>24時間受付中</div>
          </div>
          <ChevronRight style={{ width: '16px', height: '16px', flexShrink: 0 }} strokeWidth={2.5} />
        </a>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#F5F2EC',
        height: '560px',
      }}>

        {/* 右ブリード画像 */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '55%',
          height: '100%',
        }}>
          <img
            src={heroConsultation}
            alt="法人の無料相談の様子"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          {/* 左端フェードオーバーレイ */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, #F5F2EC 0%, transparent 25%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* テキストエリア */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 ',
          padding: '0 146px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>

            {/* テキストブロック左横のシンボルロゴ */}
            <img
              src={jcaoIcon}
              alt="日本法人査定機構"
              style={{ height: '175px', width: 'auto', flexShrink: 0, opacity: 0.80 }}
            />

            {/* テキストブロック */}
            <div>

              {/* 1行目 */}
              <p style={{ fontSize: '38px', color: NAVY, fontWeight: 800, margin: '0 0 15px 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                不要な法人が
              </p>

              {/* 2行目 */}
              <h1 style={{
                fontSize: '68px',
                color: ORANGE,
                fontWeight: 900,
                lineHeight: 1.0,
                margin: 0,
                whiteSpace: 'nowrap',
                letterSpacing: '-0.02em',
              }}>
                高額資金に変わる
              </h1>

              {/* 2行目下 直線アンダーライン */}
              <div style={{
                height: '3px',
                background: ORANGE,
                width: '70%',
                marginTop: '6px',
                marginBottom: '38px',
              }} />

              {/* 3行目 */}
              <p style={{ fontSize: '32px', color: '#1a2744', fontWeight: 800, marginBottom: '20px' }}>
                <span style={{ background: 'linear-gradient(transparent 56%, rgba(255,218,60,0.55) 66%)', padding: '0 3px' }}>
                  法人査定は<span style={{ position: 'relative', display: 'inline-block' }}>JCAO</span>にご相談ください。
                </span>
              </p>

              {/* 5〜6行目 */}
              <p style={{ fontSize: '16px', color: '#374151', margin: '0 0 4px 0', fontWeight: 700 }}>
                休眠法人・赤字法人・債務超過法人にも
              </p>
              <p style={{ fontSize: '16px', color: '#374151', margin: 0, fontWeight: 700 }}>
                価値が残っている可能性があります。
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ===== 3カラム特徴エリア ===== */}
      <section style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #D1D5DB',
        padding: '40px 0',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}>

          {/* 01 */}
          <div style={{ borderRight: '1px solid #D1D5DB', padding: '0 48px' }}>
            <p style={{ fontSize: '40px', fontWeight: 900, color: ORANGE, lineHeight: 1, margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>01</p>
            <h3 style={{ fontSize: '21px', fontWeight: 800, color: NAVY, margin: '0 0 6px 0', letterSpacing: '-0.01em' }}>
              法人価値を診断
            </h3>
            <div style={{ width: '48px', height: '2px', background: ORANGE, marginBottom: 12 }} />
            <div style={{ width: '87%', height: 1, background: '#CBD5E1', marginBottom: 14 }} />
            <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
              <span style={{ color: '#e53935', fontWeight: 700 }}>赤字決算・借入・税金未払いなど</span><br />様々な課題に対応可能
            </p>
          </div>

          {/* 02 */}
          <div style={{ borderRight: '1px solid #D1D5DB', padding: '0 48px' }}>
            <p style={{ fontSize: '40px', fontWeight: 900, color: ORANGE, lineHeight: 1, margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>02</p>
            <h3 style={{ fontSize: '21px', fontWeight: 800, color: NAVY, margin: '0 0 6px 0', letterSpacing: '-0.01em' }}>
              適正価格を算出
            </h3>
            <div style={{ width: '48px', height: '2px', background: ORANGE, marginBottom: 12 }} />
            <div style={{ width: '87%', height: 1, background: '#CBD5E1', marginBottom: 14 }} />
            <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
              独自の評価基準で売却可能価格を<br /><span style={{ color: '#e53935', fontWeight: 700 }}>24時間以内にご提示</span>
            </p>
          </div>

          {/* 03 */}
          <div style={{ padding: '0 48px' }}>
            <p style={{ fontSize: '40px', fontWeight: 900, color: ORANGE, lineHeight: 1, margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>03</p>
            <h3 style={{ fontSize: '21px', fontWeight: 800, color: NAVY, margin: '0 0 6px 0', letterSpacing: '-0.01em' }}>
              最適な売却先をご紹介
            </h3>
            <div style={{ width: '48px', height: '2px', background: ORANGE, marginBottom: 12 }} />
            <div style={{ width: '87%', height: 1, background: '#CBD5E1', marginBottom: 14 }} />
            <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
              業界トップクラスのネットワークで<br /><span style={{ color: '#e53935', fontWeight: 700 }}>売却希望のご成約率96%</span>
            </p>
          </div>
        </div>

      </section>
    </>
  )
}
