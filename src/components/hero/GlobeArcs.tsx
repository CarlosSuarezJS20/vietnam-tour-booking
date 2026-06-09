export default function GlobeArcs() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      {[100, 200, 300, 400, 500, 600, 700].map((r) => (
        <circle key={`c${r}`} cx="720" cy="450" r={r} fill="none" stroke="white" strokeWidth="0.7" opacity="0.1" />
      ))}
      {[130, 260, 390, 520, 650].map((r) => (
        <ellipse key={`e${r}`} cx="720" cy="450" rx={r} ry={r * 0.5} fill="none" stroke="white" strokeWidth="0.7" opacity="0.1" />
      ))}
    </svg>
  );
}
