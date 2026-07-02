import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0B1E35',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gold bottom border accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: '#C5A028',
          }}
        />
        {/* CL text */}
        <span
          style={{
            color: '#FFFFFF',
            fontSize: 13,
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          CL
        </span>
      </div>
    ),
    { ...size }
  );
}
