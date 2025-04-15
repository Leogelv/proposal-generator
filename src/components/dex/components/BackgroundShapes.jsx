import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { Float, Sphere, Icosahedron } from '@react-three/drei';

const BackgroundShapes = () => {
  const groupRef = useRef();
  
  // Generate random positions for the shapes
  const shapes = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: [
        MathUtils.randFloatSpread(40),
        MathUtils.randFloatSpread(30),
        MathUtils.randFloatSpread(40) - 20
      ],
      scale: MathUtils.randFloat(0.3, 1.5),
      rotation: MathUtils.randFloat(0, Math.PI * 2),
      speed: MathUtils.randFloat(0.01, 0.05),
      type: Math.random() > 0.5 ? 'sphere' : 'icosahedron'
    }));
  }, []);
  
  // Slowly rotate the entire group
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03;
      groupRef.current.rotation.x += delta * 0.01;
    }
  });
  
  return (
    <>
      {/* Ambient and directional light for the 3D objects */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#8b5cf6" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#3b82f6" />
      
      {/* Group containing all shapes */}
      <group ref={groupRef}>
        {shapes.map((shape, i) => (
          <Float
            key={i}
            speed={shape.speed * 2} 
            rotationIntensity={shape.speed} 
            floatIntensity={shape.speed * 10}
            position={shape.position}
          >
            {shape.type === 'sphere' ? (
              <Sphere args={[shape.scale, 8, 8]}>
                <meshStandardMaterial 
                  color={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#10b981"} 
                  roughness={0.7}
                  metalness={0.2}
                  transparent
                  opacity={0.3}
                  wireframe={i % 4 === 0}
                />
              </Sphere>
            ) : (
              <Icosahedron args={[shape.scale, 0]}>
                <meshStandardMaterial 
                  color={i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#3b82f6" : "#8b5cf6"} 
                  roughness={0.6}
                  metalness={0.3}
                  transparent
                  opacity={0.3}
                  wireframe={i % 5 === 0}
                />
              </Icosahedron>
            )}
          </Float>
        ))}
      </group>
    </>
  );
};

export default BackgroundShapes; 