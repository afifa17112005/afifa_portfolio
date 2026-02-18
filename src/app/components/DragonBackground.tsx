
import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Stars, useGLTF, useAnimations, Environment, ContactShadows } from '@react-three/drei';

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode, fallback: React.ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error("Dragon 3D Component Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

function DragonModel() {
    const group = useRef<THREE.Group>(null);
    // Using a public CC0 Dragon model from PMNDRS market
    // If this URL fails, the ErrorBoundary will catch it.
    const { scene, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dragon/model.gltf');
    const { actions } = useAnimations(animations, group);

    // Play animation if available
    useFrame((state) => {
        if (actions && actions['Flying']) {
            actions['Flying'].play();
        }
        // Slowly rotate the dragon to show it off
        if (group.current) {
            group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
        }
    });

    return (
        <group ref={group} dispose={null} scale={2} position={[0, -2, 0]}>
            <primitive object={scene} />
        </group>
    );
}

function Loader() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="gray" wireframe />
        </mesh>
    )
}

function FallbackDragon() {
    return (
        <group>
            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="red" wireframe />
            </mesh>
            <mesh position={[0, 2, 0]}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial color="red" wireframe />
            </mesh>
        </group>
    );
}

export function DragonBackground() {
    return (
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none fade-in">
            <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2563eb" />

                <ErrorBoundary fallback={<FallbackDragon />}>
                    <Suspense fallback={<Loader />}>
                        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.5, 0.5]}>
                            <DragonModel />
                        </Float>
                        <Environment preset="city" />
                    </Suspense>
                </ErrorBoundary>

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
            </Canvas>
        </div>
    );
}

// Preload the model
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dragon/model.gltf');
