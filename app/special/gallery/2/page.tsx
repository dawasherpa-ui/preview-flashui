"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/app/utils/cn";

interface Element {
  id: number;
  width: number;
  img: string;
  title: string;
  description: string;
}

interface Column {
  id: number;
  elements: Element[];
}

const items: Column[] = [
  {
    id: 1,
    elements: [
      {
        id: 1,
        width: 250,
        img: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837719/download_rdxjld.webp",
        title: "Title 1",
        description: "Description 1",
      },
      {
        id: 2,
        width: 100,
        img: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp",
        title: "Title 2",
        description: "Description 2",
      },
    ],
  },
  {
    id: 2,
    elements: [
      {
        id: 3,
        width: 100,
        img:"https://images.unsplash.com/photo-1637958653605-4590ff5fc440?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 3",
        description: "Description 3",
      },
      {
        id: 4,
        width: 250,
        img: "https://images.unsplash.com/photo-1614315517650-3771cf72d18a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title 4",
        description: "Description 4",
      },
    ],
  },
];

const Two = () => {
  const [activeItem, setActiveItem] = useState<Element | null>(null);

  const allElements = items.flatMap((column) => column.elements);

  const handleItemClick = (ele: Element) => {
    setActiveItem(ele);
  };

  return (
    <div className="h-full center w-full flex flex-col gap-5 relative">
      {!activeItem && (
        <motion.div
          className={cn("flex flex-col gap-5")}
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {items.map((column) => (
            <motion.div
              className={cn("flex items-center justify-center gap-5")}
              key={column.id}
              animate={{
                opacity: activeItem !== null ? 0 : 1,
                willChange: "auto",
              }}
            >
              {column.elements.map((ele, index) => (
                <Gallery
                  item={ele}
                  key={index}
                  onClick={() => handleItemClick(ele)}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, willChange: "auto" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-5"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeItem.id}
              className="flex flex-col items-center justify-center gap-5"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              layout
            >
              <motion.div
                layoutId={`card-${activeItem.id}`}
                className="w-[400px] h-[400px] rounded-3xl relative font-bold text-5xl cursor-pointer overflow-hidden z-10"
                onClick={() => setActiveItem(null)}
              >
                <img
                  src={activeItem.img}
                  alt=""
                  className="w-full object-cover h-full"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                  <h3 className="text-lg font-semibold">{activeItem.title}</h3>
                  <p className="text-sm">{activeItem.description}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 justify-center items-center"
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {allElements
                  .filter((ele) => ele.id !== activeItem.id)
                  .map((ele) => (
                    <Gallery
                      key={ele.id}
                      item={ele}
                      onClick={() => handleItemClick(ele)}
                      isSmall
                    />
                  ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

const Gallery = (props: {
  item: Element;
  onClick: () => void;
  isSmall?: boolean;
}) => {
  return (
    <motion.div
      style={{
        width: props.isSmall ? 80 : props.item.width,
        height: props.isSmall ? 80 : 150,
      }}
      className={cn(
        "rounded-2xl cursor-pointer text-3xl center overflow-hidden relative"
      )}
      layoutId={`card-${props.item.id}`}
      onClick={props.onClick}
    >
      <motion.img
        src={props.item.img}
        alt=""
        className="w-full object-cover h-full"
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  );
};

export default Two;

  
