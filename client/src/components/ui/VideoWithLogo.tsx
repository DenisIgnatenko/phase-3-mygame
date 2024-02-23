import React from 'react';

export default function VideoWithLogo(): JSX.Element {
  return (
    <div style={{ width: '100%' }}>
      <video
        src="/mygame.mp4"
        style={{
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '16px',
        }}
        autoPlay
        loop
        muted
      >
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}
