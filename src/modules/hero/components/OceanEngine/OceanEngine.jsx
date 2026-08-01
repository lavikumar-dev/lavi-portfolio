import OceanCanvas from "./OceanCanvas";
import OceanMesh from "./OceanMesh";
import OceanParticles from "./OceanParticles";

export default function OceanEngine() {
  return (
    <>
      <OceanCanvas />
      <OceanMesh />
      <OceanParticles />
    </>
  );
}