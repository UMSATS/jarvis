import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Wireframe } from "@react-three/drei"
import { MeshBasicMaterial } from 'three';
import './App.css'

const Box = ({ onSelect }) => {
	const mesh = useRef();
	const [hovered, setHover] = useState(false);
	const [selected, setSelected] = useState(false);
  
	useFrame(() => (mesh.current.rotation.y += 0.01));
  
	return (
	  <mesh
		ref={mesh}
		scale={selected ? [1.2, 1.2, 1.2] : [1, 1, 1]}
		onClick={(event) => onSelect(event, mesh)}
		onPointerOver={() => setHover(true)}
		onPointerOut={() => setHover(false)}>
		<boxGeometry args={[1, 2, 1]} />
		<meshBasicMaterial
		  color={selected ? 'red' : hovered ? 'cyan' : 'blue'}
		  wireframe={true}
		/>
	  </mesh>
	);
  };
  

const App = () => {
  return (
    <Canvas camera = {{position: [0,0,4]}}>
    	<Box />
	  	<OrbitControls />
    </Canvas>
  )
}

export default App
