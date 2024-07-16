import React from 'react';
import './Loader.css';

const Loader = ({ fadingOut }) => {
  const r = 500;
  const w = 8 * r;
  const h = 0.5 * w;
  const x = -0.5 * w;
  const y = -0.5 * h;
  const c = Math.round(r / Math.SQRT2);
  const l = Math.ceil((3 * Math.PI + 4) * r);
  const d = Math.floor(Math.PI * r);

  return (
    <div className={`Loader ${fadingOut ? 'fade-out' : ''}`}>
      <svg viewBox={`${x} ${y} ${w} ${h}`}>
        <path
          id="inf"
          d={`M${c}${-c}A${r} ${r} 0 1 1 ${c} ${c}L${-c}${-c}A${r} ${r} 0 1 0${-c} ${c}z`}
        />
        <use
          xlinkHref="#inf"
          strokeDasharray={`${d} ${l - d}`}
          strokeDashoffset={`${l}px`}
        />
      </svg>
    </div>
  );
}

export default Loader;
