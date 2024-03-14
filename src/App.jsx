import { Canvas } from "@react-three/fiber"
import './App.css'
import { AmbientLight, BoxGeometry } from "three"
import { OrbitControls, Wireframe } from "@react-three/drei"

const App = () => {
  return (
    <Canvas camera = {{position: [0,0,4]}}>
    	<mesh>
    		<boxGeometry args={[1, 2, 1]} />
        	<meshBasicMaterial wireframe color="blue" />
      	</mesh>
	  	<OrbitControls />
    </Canvas>
  )
}

export default App
