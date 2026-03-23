import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '../hooks/useMousePosition'

// spinning torus knot
function TorusKnot({ mousePosition }) {
    const meshRef = useRef() // to hold mesh object to put it in the animation loop
    const speed = 0.05

    useFrame((state, delta) => { // run every frame, render loop in Three.js docs
        if (!meshRef.current) return

        // spin mesh 
        meshRef.current.rotation.x += delta * 0.15
        meshRef.current.rotation.y += delta * 0.25

        // move mesh towards mouse position
        meshRef.current.rotation.x += (mousePosition.y * 0.3 - meshRef.current.rotation.x) * speed
        meshRef.current.rotation.y += (mousePosition.x * 0.3 - meshRef.current.rotation.y) * speed

        // this is called linear interpolation in Computer Graphics (course I took in UG Computer Science)
    })

    return (
        // adds floating animation 
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          {/*
              <mesh> is for shape and surface
              <torusKnotGeometry> defines the shape -> [radius, tube, tubularSegments, radialSegments]
          */}
          <mesh ref={meshRef}>
              <torusKnotGeometry args={[1, 0.35, 128, 16]} />
              {/*
                MeshDistortMaterial adds distortion effect
              */}
              <MeshDistortMaterial
                color="#00ffc8"
                emissive="#00ffc8"
                emissiveIntensity={0.2}
                metalness={0.8}
                roughness={0.1}
                wireframe={false}
                distort={0.3}
                speed={2}
              />
          </mesh>
        </Float>
    )
}

// floating code effect
function CodeParticles() {
  // useMemo caches heavy calculation so all 300 random positions don't get recalculated
  // only recalculates when dependency array changes
  const particles = useMemo(() => {
    const count = 300
    // Float32Array is more efficient than regular JS array for passing data to the GPU
    const positions = new Float32Array(count * 3) // 3 for 3 difference dimensions (x, y, z)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30 
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30 
    }
    return positions
  }, [])

  const particlesRef = useRef()

  useFrame((state) => {
    if (!particlesRef.current) return
    // rotate particle cloud over time
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  return (
    // <points> renders vertex as a dot
    <points ref={particlesRef}>
      {/*
        <bufferGeometry> to define custom geometry via raw data arrays, better than creating 300 mesh objects
      */}
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#00ffc8"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  )
}

export default function HeroScene() {
  const mousePosition = useMousePosition()

  return (
    /*
      positioning Canvas so it fills the hero section as a background layer
      3D canvas behind all HTML text
    */
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      {/*
        camera is 6 units back on the z axis looking at the origin
      */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7b61ff" />
        <pointLight position={[-10, -5, -5]} intensity={0.5} color="#00ffc8" />

        <TorusKnot mousePosition={mousePosition} />
        <CodeParticles />
        <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  )
}