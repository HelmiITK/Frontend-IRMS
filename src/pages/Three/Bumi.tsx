import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
// import bgimage from "../../assets/BgDashboard.png";
import * as THREE from "three";
import bumi from "../../assets/earth-shape-heart-earth-texture-from-nasa_974729-129688.avif";

const Bumi: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Setup scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 0.9, 0.1, 30);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(260, 260);
    mount.appendChild(renderer.domElement);

    // Load Earth texture
    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load(bumi);

    // load bg imgae
    // const loader2 = new THREE.TextureLoader();
    // loader2.load(bgimage, (texture) => {
    //   scene.background = texture;
    // });

    // Create sphere (Earth)
    const geometry = new THREE.SphereGeometry(0.8, 60, 60); // Radius, widthSegments, heightSegments
    const material = new THREE.MeshStandardMaterial({
      map: earthTexture, // Apply the Earth texture
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Pindahkan posisi Bumi ke kiri atas
    earth.position.set(0.1, 0.4, 0);

    // Add lights
    const light = new THREE.DirectionalLight(0xffffff, 8);
    light.position.set(18, 3, 4);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Set camera position
    camera.position.z = 2;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.005; // Rotate Earth slowly
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <div ref={mountRef}></div>;
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Bumi;
