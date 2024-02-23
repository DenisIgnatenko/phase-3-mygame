import React from 'react';

export default function VideoWithLogo(): JSX.Element {
  return (
    <div style={{ width: '100%' }}>
      <video src="/mygame.mp4" autoPlay loop muted>
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}
