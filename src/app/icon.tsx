import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #d946ef 100%)',
          borderRadius: 14,
          fontFamily: 'sans-serif',
        }}
      >
        <span
          style={{
            color: '#ffffff',
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: -1,
          }}
        >
          KW
        </span>
      </div>
    ),
    size
  );
}