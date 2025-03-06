import { useEffect, useRef } from "react";
import * as THREE from "three";
import { setupScene, createPlanet } from "@/lib/three-utils";
import type { Planet } from "@shared/schema";
import { ORBIT_SPEED_MULTIPLIER } from "@/lib/constants";

interface Props {
  planets: Planet[];
  selectedPlanet?: Planet;
  onPlanetClick: (planet: Planet) => void;
}

export default function Visualization({ planets, selectedPlanet, onPlanetClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    if (!containerRef.current) return;

    const { scene, camera, renderer, controls } = setupScene();
    sceneRef.current = scene;
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Create planets
    planets.forEach((planet, index) => {
      const planetMesh = createPlanet(planet.diameter / 10000, planet.color);
      planetMesh.position.x = planet.distanceFromSun / 10;
      planetMesh.userData.planet = planet;
      scene.add(planetMesh);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      // Rotate planets
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.userData.planet) {
          child.rotation.y += 0.01;
          
          // Orbit animation
          const planet = child.userData.planet as Planet;
          const time = Date.now() * 0.001 * ORBIT_SPEED_MULTIPLIER;
          const orbit = (planet.orbitalPeriod / 365) * Math.PI * 2;
          child.position.x = Math.cos(time * orbit) * (planet.distanceFromSun / 10);
          child.position.z = Math.sin(time * orbit) * (planet.distanceFromSun / 10);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [planets]);

  return <div ref={containerRef} className="w-full h-full" />;
}
