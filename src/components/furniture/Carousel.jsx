import { useRef, useState } from "react"

const Carousel = ({ images }) => {
    const scroll = useRef(null)
    const [current, setCurrent] = useState(0)

    return (
        <div>
            <div
                className="flex w-40 h-40 rounded-2xl overflow-x-scroll snap-x snap-mandatory scrollbar-hide mx-auto"
                ref={scroll}
                onScroll={() => {
                    setCurrent(scroll.current.scrollLeft)
                }}
            >
                {images.map((image, idx) => {
                    return (
                        <img
                            src={image}
                            className="snap-start rounded-2xl mx-1"
                            key={idx}
                            alt={"image" + idx}
                        />
                    )
                })}
            </div>
            <div className="flex gap-1.5 py-1 justify-center">
                {images.map((image, idx) => {
                    const offset = 4 + idx * 168
                    return (
                        <button
                            className={`h-2 w-2 rounded-full transition-color duration-300 ${
                                current >= offset && current < offset + 164
                                    ? "bg-dot"
                                    : "bg-lightdot"
                            }`}
                            key={"dot" + idx}
                            onClick={() => {
                                scroll.current.scrollTo({
                                    top: 0,
                                    left: offset,
                                    behavior: "smooth",
                                })
                            }}
                        ></button>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
