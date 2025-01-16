"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/app/utils/cn";

const items = [
  {
    title: "SPACE",
    city: "Orlando",
    state: "FL",
    image:
      "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SPACE",
    city: "Leadville",
    state: "CO",
    image:
      "https://images.unsplash.com/photo-1614315517650-3771cf72d18a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SPACE",
    city: "Paradise",
    state: "WA",
    image:
      "https://images.unsplash.com/photo-1637958653605-4590ff5fc440?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SPACE",
    city: "White Sulphur Springs",
    state: "MT",
    image:
      "https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function NavigationIndicator({ index }: { index: number }) {
  return (
    <div className="absolute right-0 top-0 z-10 flex gap-1 p-[75px] px-16">
      {Array.from({ length: items.length }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            width: index === i ? 20 : 10,
          }}
          className={cn("h-[3px] rounded-full bg-white/30 transition-colors", {
            "bg-white": index === i,
          })}
        />
      ))}
    </div>
  );
}

function NavButton({
  direction,
  index,
  setIndex,
  setStatus,
}: {
  direction: "next" | "previous";
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleClick = () => {
    if (direction === "previous" && index > 0) {
      setIndex((prev) => prev - 1);
    } else if (direction === "next" && index < items.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const isPrevious = direction === "previous";

  return (
    <button
      aria-label={isPrevious ? "Previous" : "Next"}
      type="button"
      onMouseDown={() => setStatus(direction)}
      onMouseUp={() => setStatus("idle")}
      onClick={handleClick}
      className={cn(
        "group absolute top-0 isolate flex h-full w-1/3 items-center",
        isPrevious ? "!left-0 pl-8 " : "right-0 justify-end pr-8"
      )}
    >
      <div
        className={cn(
          "size-full absolute top-0 opacity-0 backdrop-blur-md transition-opacity duration-500 ease-out inset-0",
          isPrevious
            ? "[mask:linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] group-hover:opacity-100"
            : "[mask:linear-gradient(270deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] group-hover:opacity-100"
        )}
      />
      <div
        className={cn(
          "size-full absolute top-0  from-black/0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100",
          isPrevious ? "bg-gradient-to-l" : "to-transparent bg-gradient-to-r"
        )}
      />
      {isPrevious ? (
        <ChevronLeft className="size-8 z-10 text-white/30 transition-colors duration-500 ease-out group-hover:text-white" />
      ) : (
        <ChevronRight className="size-8 z-10 text-white/30 transition-colors duration-500 ease-out group-hover:text-white" />
      )}
    </button>
  );
}

const PerspectiveContainer = ({
  index,
  setIndex,
  status,
  setStatus,
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const location = items[index];
  const isPressingNext = status === "next";
  const isPressingPrevious = status === "previous";

  return (
    <div className="size-full">
      <div className="w-full h-screen relative isolate overflow-hidden border border-border bg-[#e3e3e3] font-medium tracking-tight">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{
              filter: "blur(8px)",
              transform: "perspective(2000px) rotateY(0deg)",
            }}
            animate={
              isPressingNext
                ? {
                    transform: "perspective(800px) rotateY(10deg)",
                    filter: "blur(0px)",
                  }
                : isPressingPrevious
                ? {
                    transform: "perspective(800px) rotateY(-10deg)",
                    filter: "blur(0px)",
                  }
                : { filter: "blur(0px)" }
            }
            exit={{ filter: "blur(8px)" }}
            className="size-full relative"
          >
            <Image
              src={location.image}
              alt={location.title}
              width={1000}
              height={1000}
              className="size-full scale-150 object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-0 top-0 z-0 h-1/2 w-full backdrop-blur-md [mask:linear-gradient(180deg,rgba(0,0,255,1)_0%,rgba(0,0,255,0)_100%)]" />
        <div className="absolute left-0 top-0 z-0 h-1/2 w-full bg-gradient-to-b from-black/40" />

        <motion.div
          initial={{
            transform: "perspective(1000px) rotateY(0deg)",
          }}
          animate={
            isPressingNext
              ? {
                  transform: "perspective(800px) rotateY(20deg)",
                }
              : isPressingPrevious
              ? {
                  transform: "perspective(800px) rotateY(-20deg)",
                }
              : {}
          }
          className="absolute left-0 top-0 z-20 w-full p-14 px-16"
        >
          <div className="absolute top-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
            <div className="text-2xl font-bold md:text-4xl">
              {location.city}
            </div>
            <div className="mt-2 text-sm md:mt-4 md:text-lg opacity-90">
              {`lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur adipiscing elit. Sed sed diam nonum et justo utet dolor. Etiam`}
            </div>
          </div>
        </motion.div>

        <NavigationIndicator index={index} />

        <NavButton
          direction="previous"
          index={index}
          setIndex={setIndex}
          setStatus={setStatus}
        />

        <NavButton
          direction="next"
          index={index}
          setIndex={setIndex}
          setStatus={setStatus}
        />
      </div>
    </div>
  );
};

const Perspective = () => {
  const [index, setIndex] = React.useState(2);
  const [status, setStatus] = React.useState("idle");

  return (
    <PerspectiveContainer
      index={index}
      setIndex={setIndex}
      status={status}
      setStatus={setStatus}
    />
  );
};

export default Perspective;
