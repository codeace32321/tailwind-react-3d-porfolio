import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'

{/* <div className="absolute top-28 left-0 right-0 z-10 flex item-center justify-center">
    POPUP
</div> */}


// this function is for screen adjustment
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition= [0, -6.5, -43];
    let Rotation = [0.1, 4.7, 0];

    
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];

    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, Rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();




  return (
    <section className="w-full h-screen relative">
      
      <Canvas className='w-full h-screen bg-transparent'
      camera={{near:0.1, far:1000}}
      >
        <Suspense fallback={<Loader/>}>
        
        <directionalLight 
        position={[1, 1, 10,]} 
        intensity={1.5}
        />

        <ambientLight 
        intensity={0.5}/
        >

        <pointLight/>

        <hemisphereLight 
        skyColor="#b1e1ff" 
        groundColor="#000000" 
        intensity={1}
        
        />

        </Suspense>
        <Sky/>
        <Island
        position ={islandPosition}
        scale = {islandScale}
        rotation ={islandRotation}
        />

      </Canvas>
    </section>
  )
}

export default Home