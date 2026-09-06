import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Khanzadi Wazir Ali - Full Stack Developer & AI Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -160,
            left: -120,
            width: 560,
            height: 560,
            borderRadius: '9999px',
            background: 'radial-gradient(circle, #818cf8 0%, rgba(99,102,241,0.0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            right: -140,
            width: 600,
            height: 600,
            borderRadius: '9999px',
            background: 'radial-gradient(circle, #d946ef 0%, rgba(217,70,239,0.0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 90,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 720,
            height: 3,
            background: 'linear-gradient(to right, #6366f1, #a855f7, #d946ef)',
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '10px 26px',
              border: '2px solid rgba(216,180,254,0.6)',
              borderRadius: 9999,
              color: '#d8b4fe',
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 6,
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              color: '#ffffff',
              marginTop: 34,
              lineHeight: 1.1,
            }}
          >
            Khanzadi Wazir Ali
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#a78bfa',
              fontSize: 34,
              fontWeight: 600,
              marginTop: 26,
            }}
          >
            <div>Full Stack Developer</div>
            <div style={{ marginTop: 10, color: '#c4b5fd', fontSize: 26, fontWeight: 500 }}>
              Shopify · AI Automation
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}