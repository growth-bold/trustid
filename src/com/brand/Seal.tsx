/**
 * Seal — con dấu bảo chứng của Hiệp hội bảo chứng nhân dạng số.
 */
export const Seal = ({ size = 88 }) => {
  return (
    <span
      style={{ display: "inline-flex", filter: "drop-shadow(0 2px 5px rgba(15,23,43,0.28))" }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        role="img"
        aria-label="Con dấu bảo chứng — Hiệp hội bảo chứng nhân dạng số"
      >
        <defs>
          <radialGradient id="sealDisc" cx="42%" cy="36%" r="72%">
            <stop offset="0%" stopColor="#fbf6ea" />
            <stop offset="62%" stopColor="#f3ead4" />
            <stop offset="100%" stopColor="#e6d7b6" />
          </radialGradient>
          <path id="sealTop" d="M 30 100 A 70 70 0 0 1 170 100" fill="none" />
          <path id="sealBot" d="M 168 100 A 68 68 0 0 0 32 100" fill="none" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="url(#sealDisc)" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="#19283d" strokeWidth="2" />
        <circle cx="100" cy="100" r="84" fill="none" stroke="#c79a2b" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#19283d" strokeWidth="1.25" />
        <g
          fill="#19283d"
          style={{ fontFamily: "Georgia, 'Noto Serif', serif", fontWeight: 700, letterSpacing: "1.6px" }}
        >
          <text fontSize="12.5">
            <textPath href="#sealTop" startOffset="50%" textAnchor="middle">
              HIỆP HỘI BẢO CHỨNG NHÂN DẠNG SỐ
            </textPath>
          </text>
          <text fontSize="11">
            <textPath href="#sealBot" startOffset="50%" textAnchor="middle">
              ★ VIETID TRUST · EST. 2025 ★
            </textPath>
          </text>
        </g>
        <g transform="translate(100 100)">
          <path
            d="M 0 -34 L 26 -24 L 26 4 C 26 22 14 32 0 38 C -14 32 -26 22 -26 4 L -26 -24 Z"
            fill="none"
            stroke="#19283d"
            strokeWidth="2.25"
          />
          <path
            d="M 0 -18 C 10 -18 16 -10 16 0 M 0 -10 C 6 -10 10 -5 10 2 M 0 -2 C 3 -2 4 1 4 6 M 0 -18 C -10 -18 -16 -10 -16 0 M 0 -10 C -6 -10 -10 -5 -10 2 M 0 -2 C -3 -2 -4 1 -4 6"
            fill="none"
            stroke="#c79a2b"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M 0 8 C 5 12 9 16 0 24 C -9 16 -5 12 0 8 Z" fill="#b0121f" />
          <path
            d="M 0 -30 l 2.2 4.6 l 5 .5 l -3.7 3.4 l 1 4.9 l -4.5 -2.5 l -4.5 2.5 l 1 -4.9 l -3.7 -3.4 l 5 -.5 Z"
            fill="#c79a2b"
          />
        </g>
      </svg>
    </span>
  );
};

export default Seal;
