import { ImageResponse } from 'next/og';
import PORTRAIT_B64 from './og-photo';

export const runtime = 'edge';
export const alt = 'Khanzadi Wazir Ali - AI Engineer & Full Stack Developer';
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
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#000000',
          position: 'relative',
          padding: '0 80px',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: 640,
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '10px 24px',
              border: '2px solid rgba(216,180,254,0.6)',
              borderRadius: 9999,
              color: '#d8b4fe',
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 6,
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: '#ffffff',
              marginTop: 30,
              lineHeight: 1.1,
            }}
          >
            Khanzadi Wazir Ali
          </div>
          <div
            style={{
              color: '#a78bfa',
              fontSize: 30,
              fontWeight: 700,
              marginTop: 22,
            }}
          >
            AI Engineer &amp; Full Stack Developer
          </div>
          <div style={{ marginTop: 10, color: '#c4b5fd', fontSize: 24, fontWeight: 500 }}>
            Shopify · AI Automation
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: 330,
            height: 330,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: -6,
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #6366f1, #a855f7, #d946ef)',
            }}
          />
          <img
            src={PORTRAIT_B64}
            alt=""
            width={318}
            height={318}
            style={{
              borderRadius: '9999px',
              objectFit: 'cover',
              border: '6px solid #000000',
            }}
          />
        </div>
      </div>
    ),
    size
  );
}