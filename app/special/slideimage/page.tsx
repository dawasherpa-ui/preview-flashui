"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

type Card = {
  id: number;
  image: string;
};

const cardsData: Card[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1613919517761-0d9e719d3244?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

const Swipe = () => {
  const [cards, setCards] = useState<Card[]>(cardsData);
  return (
    <div className="h-full w-full grid place-items-center">
      {cards
        .slice()
        .reverse()
        .map((card, index) => (
          <Card
            key={card.id}
            item={card}
            cards={cards}
            setCards={setCards}
            index={index}
          />
        ))}
    </div>
  );
};

interface CardProps {
  cards: Card[];
  item: Card;
  setCards: Dispatch<SetStateAction<Card[]>>;
  index: number;
}

function Card({ item, cards, setCards, index }: CardProps) {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-160, 0, 160], [0, 1, 0]);
  const cardsRotation = useTransform(x, [-160, 160], [-20, 20]);

  const frontCard = index === 0;

  const rotate = useTransform(() => {
    const newOffset = frontCard ? 0 : index % 2 ? 10 : -10;

    return `${cardsRotation.get() + newOffset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((prevCards) => prevCards.filter((card) => card.id !== item.id));
    }
  };

  return (
    <motion.img
      src={item.image}
      drag={frontCard ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      alt="bossadi zenith"
      className="h-96 origin-bottom border-4 w-80 rounded-2xl object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        opacity,
        rotate,
        x,
        transition: ".125s transform",
        gridRow: 1,
        gridColumn: 1,
        zIndex: cards.length - index,
      }}
      onDragEnd={handleDragEnd}
    />
  );
}

export default Swipe;
