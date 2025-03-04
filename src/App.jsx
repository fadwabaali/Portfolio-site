import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = () => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange" />

    </mesh>
  );
}

const App = () => {
 
  return (
    <Canvas>
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />

      <color attach="background" args={['#F0F0F0']} />
      
      <RotatingCube />
    </Canvas>
  )
}

export default App;