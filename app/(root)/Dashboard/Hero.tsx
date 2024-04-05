import HeroImg from "@/assets/heroImg.jpg";
import Image from "next/image";

export default function Hero() {
  // Calculate viewport dimensions
  const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  return (
    <>
      <div style={{ height: viewportHeight, width: viewportWidth }}>
        <Image src={HeroImg} alt="hero Img" layout="fill" objectFit="cover" />
      </div>
    </>
  );
}
