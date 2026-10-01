const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: 8 + (i % 7) * 13,
  top: 62 + Math.floor(i / 7) * 11,
  duration: 8 + (i % 5),
  delay: i * 0.4,
  size: 2 + (i % 2),
}));

export default function OceanParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="ocean-particle absolute rounded-full bg-[color:var(--accent)]"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
