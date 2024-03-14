import { Canvas } from "@react-three/fiber"
import './App.css'
import { BoxGeometry } from "three"
import { OrbitControls } from "@react-three/drei"

const App = () => {
  return (
    <Canvas camera = {{position: [0,0,4]}}>
      <directionalLight position = {[0,1,1]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial wireframe />
      </mesh>
	  <OrbitControls />
    </Canvas>
  )
}

export default App
