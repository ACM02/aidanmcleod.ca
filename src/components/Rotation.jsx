import React, { useEffect, useState } from 'react';

function MultiOrbit() {
  // Define planets with different orbit radii, sizes, colors, and speeds
  const planets = [
    { radius: 100, size: 8, color: 'bg-blue-500', speed: 0.16 },
    { radius: 160, size: 10, color: 'bg-green-500', speed: 0.08 },
    { radius: 220, size: 14, color: 'bg-red-500', speed: 0.04 },
    { radius: 280, size: 20, color: 'bg-yellow-400', speed: 0.02 },
  ];

  // Keep an array of rotations, one per planet
  const [rotations, setRotations] = useState(planets.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setRotations((prev) =>
        prev.map((r, i) => r + planets[i].speed) // increment each planet's rotation
      );
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden flex justify-center items-center -z-10">
      <>
        {/* Render each orbit path + planet */}
        {planets.map((planet, i) => (
          <React.Fragment key={i}>
            {/* Orbit Path (dotted circle) */}
            <div
              className="absolute border-2 border-dotted rounded-full border-gray-400/60"
              style={{
                width: `${planet.radius * 2 + 2}px`,
                height: `${planet.radius * 2 + 2}px`,
              }}
            />

            {/* Planet */}
            <div
              className={`absolute rounded-full ${planet.color} shadow-[0_0_10px_3px_rgba(255,255,255,0.5)]`}
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                transform: `rotate(${rotations[i]}deg) translateX(${planet.radius}px) rotate(-${rotations[i]}deg)`,
                transition: 'transform 0.016s linear',
              }}
            />
          </React.Fragment>
        ))}

        {/* Optional center (the “star”) */}
        <div className="w-6 h-6 bg-yellow-500 rounded-full absolute shadow-[0_0_20px_5px_rgba(255,255,255,0.5)]" />
      </>

    </div>
  );
}

export default MultiOrbit;
