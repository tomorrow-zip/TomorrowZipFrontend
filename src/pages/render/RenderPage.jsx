// eslint-disable-this-file
import React, { Suspense } from "react"
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
// eslint-disable-next-line import/no-unresolved
import { MTLLoader } from "three/addons/loaders/MTLLoader.js"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import AdotChat from "../../components/common/AdotChat.jsx"

const RenderPage = () => {
    const mtlFile = useLoader(MTLLoader, "/src/assets/3dmodel/ikea-bed.mtl")
    const objectFile = useLoader(
        OBJLoader,
        "/src/assets/3dmodel/ikea-bed.obj",
        (loader) => {
            mtlFile.preload()
            loader.setMaterials(mtlFile)
        }
    )

    return (
        <>
            <div className="py-4 select-none h-28 flex flex-col justify-center">
                <AdotChat>가구를 3D로 살펴보세요!</AdotChat>
            </div>
            <div className="absolute bottom-20 w-full h-full max-h-[calc(100%_-_14rem)] overflow-y-scroll pb-12">
                <Canvas camera={{ fov: 16 }}>
                    <ambientLight intensity={1} />
                    <pointLight position={[-2, -1, -2]} intensity={1} />
                    <Suspense fallback={null}>
                        <mesh>
                            {/*<sphereBufferGeometry />*/}
                            {/*<meshStandardMaterial color="hotpink" />*/}
                            <primitive object={objectFile} />
                        </mesh>
                    </Suspense>
                    <Environment preset="sunset" />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
}

export default RenderPage