const nodes = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  left: 6 + (i % 8) * 12.5,
  top: 70 + Math.floor(i / 8) * 5,
  delay: i * 0.12,
  duration: 5 + (i % 5),
  size: 2 + (i % 2),
}));

export default function OceanMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {nodes.map((node) => (
        <span
          key={node.id}
          className="ocean-mesh-node absolute rounded-full bg-[color:var(--accent)]"
          style={{
            left: `${node.left}%`,
            top: `${node.top}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            animationDuration: `${node.duration}s`,
            animationDelay: `${node.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
