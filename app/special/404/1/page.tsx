'use client'
import React from "react"
import Screensaver from "@/components/screensaver"

const exampleImages = [
    {
      url: "https://images.unsplash.com/photo-1564053051381-5cb91813736b?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1637958652502-d19dadaa86c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
const CirclingElementsDemo: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <div
      className="w-full h-full bg-black overflow-hidden flex items-center justify-center relative"
      ref={containerRef}
    >
      <h1 className="z-30 text-3xl md:text-6xl font-extrabold text-white">
        404 Not Found
      </h1>
      {[...exampleImages, ...exampleImages].map((image, index) => (
        <Screensaver
          key={index}
          speed={1}
          startPosition={{ x: index * 3, y: index * 3 }}
          startAngle={40}
          containerRef={containerRef}
        >
          <div className="w-20 h-20 md:w-48 md:h-48 overflow-hidden">
            <img
              src={image.url}
              alt={`Example ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </Screensaver>
      ))}
    </div>
  )
}

export default CirclingElementsDemo
