import { useGLTF } from '@react-three/drei'
import React from 'react'
import planeShow from '../assets/3d/plane.glb'


const Plane = ({isRotating, ...props}) => {
  const {scene, animations} = useGLTF(planeShow);
  return (

    <mesh {...props}>
      <primitive  object={scene}/>
    </mesh>
    
  )
}

export default Plane