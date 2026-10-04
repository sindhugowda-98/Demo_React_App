import React from "react";

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#home"
      aria-label="StabiBlend home"
    >
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 44 44">
          <path d="M22 5c-8 7-12 13-12 20a12 12 0 0 0 24 0C34 18 30 12 22 5Z" />
          <path d="M15 28c5-1 10-5 13-11M17 33c1-5 4-8 9-10" />
        </svg>
      </span>
      <span className="brand-name">
        stabi<span>blend</span>
        <small>BIOTECH SOLUTIONS</small>
      </span>
    </a>
  );
}


export default Brand;
