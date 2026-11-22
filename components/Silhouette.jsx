const SHAPES = {
  pants: [<path key="a" d="M30 6 H70 L76 86 H56 L50 38 L44 86 H24 Z" fill="var(--sil)" />],
  jacket: [
    <path key="a" d="M30 8 L42 4 Q50 12 58 4 L70 8 L94 62 L82 66 L72 38 L72 86 L28 86 L28 38 L18 66 L6 62 Z" fill="var(--sil)" />,
    <path key="b" d="M50 12 V86" stroke="var(--tint)" strokeWidth="2" />,
  ],
  rain: [
    <path key="a" d="M30 10 Q50 -4 70 10 L94 62 L82 66 L72 38 L72 86 L28 86 L28 38 L18 66 L6 62 Z" fill="var(--sil-dark)" />,
    <path key="b" d="M50 14 V86" stroke="var(--tint)" strokeWidth="2" />,
  ],
  tee: [<path key="a" d="M20 10 L35 4 Q50 16 65 4 L80 10 L94 30 L80 38 L74 30 L74 82 L26 82 L26 30 L20 38 L6 30 Z" fill="var(--sil)" />],
  bag: [
    <path key="a" d="M18 30 H82 L88 78 H12 Z" fill="var(--sil)" />,
    <path key="b" d="M34 30 Q34 8 50 8 Q66 8 66 30" fill="none" stroke="var(--sil-dark)" strokeWidth="4" />,
  ],
  cap: [
    <path key="a" d="M22 56 Q22 18 52 18 Q80 18 80 56 Z" fill="var(--sil)" />,
    <path key="b" d="M70 52 Q94 52 96 62 Q80 64 62 60 Z" fill="var(--sil-dark)" />,
  ],
  shorts: [<path key="a" d="M26 16 H74 L82 66 H56 L50 40 L44 66 H18 Z" fill="var(--sil)" />],
};

export default function Silhouette({ kind, size = 96 }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 100 90" aria-hidden="true">
      {SHAPES[kind]}
    </svg>
  );
}
