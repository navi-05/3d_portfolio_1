import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'

import Monitor from './Monitor'

const Desc = styled.div`
  width: 200px;
  height: 80px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const WebDesign = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
          <Monitor />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>
      We design products with a strong focus on both world class design and 
      ensuring your product is a market success.
    </Desc>
    </>
  )
}

export default WebDesign