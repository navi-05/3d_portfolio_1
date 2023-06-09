/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 monitor.gltf --transform
Author: vesicalsnail (https://sketchfab.com/milansaman21)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/acer-monitor-07debcacbbec408faa54f61097bf3881
Title: Acer monitor
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/monitor-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.56, -0.03]}>
        <group position={[0.04, -0.21, 0]} scale={[0.34, 0.31, 0.03]}>
          <group position={[0.65, 0.01, 0.09]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[76.2, 6.51, 5.98]}>
            <mesh geometry={nodes.Object_18.geometry} material={materials['gold.plug']} />
            <mesh geometry={nodes.Object_19.geometry} material={materials['plastic.hdmi']} />
          </group>
          <mesh geometry={nodes.Object_16.geometry} material={materials['metaal.']} />
        </group>
        <group position={[-0.23, -0.21, 0]} scale={0.31}>
          <group position={[0.2, 0.01, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_25.geometry} material={materials['metal.hdmi']} />
            <mesh geometry={nodes.Object_26.geometry} material={materials['plastic.hdmi']} />
          </group>
          <group position={[0.01, 0.01, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_28.geometry} material={materials['metal.hdmi']} />
            <mesh geometry={nodes.Object_29.geometry} material={materials['plastic.hdmi']} />
          </group>
          <group position={[-0.19, 0.01, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_31.geometry} material={materials['metal.hdmi']} />
            <mesh geometry={nodes.Object_32.geometry} material={materials['plastic.hdmi']} />
          </group>
          <mesh geometry={nodes.Object_21.geometry} material={materials['metaal.']} />
          <mesh geometry={nodes.Object_23.geometry} material={materials['plastic.hdmi']} position={[-0.37, 0.02, 0]} scale={0.02} />
        </group>
        <group position={[0.6, -0.26, 0.02]}>
          <mesh geometry={nodes.Object_34.geometry} material={materials['noise_knoppen.001']} />
          <mesh geometry={nodes.Object_35.geometry} material={materials['logo.coutout.smooth.001']} />
        </group>
        <group position={[0, -0.38, -0.02]}>
          <mesh geometry={nodes.Object_37.geometry} material={materials['achter.onder.noise.001']} />
          <mesh geometry={nodes.Object_38.geometry} material={materials['logo.coutout.smooth']} />
          <mesh geometry={nodes.Object_39.geometry} material={materials.metaal_voetstuk} />
          <mesh geometry={nodes.Object_41.geometry} material={materials.metaal_voetstuk} />
          <mesh geometry={nodes.Object_42.geometry} material={materials['achter.onder.noise.001']} />
          <mesh geometry={nodes.Object_44.geometry} material={materials.zwart_metaal} />
        </group>
        <mesh geometry={nodes.Object_7.geometry} material={materials['achter.onder.noise.001']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['achter.ribbel.001']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['logo.coutout.smooth.001']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['achter.onder.vlak.001']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['noise_knoppen.001']} position={[0, -0.38, 0.03]} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['noise_knoppen.001']} position={[0, -0.38, 0.03]} />
      </group>
      <group position={[0, 0.56, 0.01]}>
        <mesh geometry={nodes.Object_46.geometry} material={materials['rand.ribbel']} />
        <mesh geometry={nodes.Object_47.geometry} material={materials['achter.onder.noise.001']} />
      </group>
      <group position={[0, 0.21, 0.03]}>
        <mesh geometry={nodes.Object_49.geometry} material={materials['logo.coutout.smooth.001']} />
        <mesh geometry={nodes.Object_50.geometry} material={materials['indictor.light']} />
        <mesh geometry={nodes.Object_51.geometry} material={materials['achter.onder.noise.001']} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.acer_logo} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <mesh geometry={nodes.Object_5.geometry} material={materials.screen} />
    </group>
  )
}

useGLTF.preload('/monitor-transformed.glb')
