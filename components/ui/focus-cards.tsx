"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { MessageCircleHeart , ChevronRight, ChevronLeft} from 'lucide-react';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onLike,
    onComment,
  }: {
    card: {
      id: number;
      title: string;
      description:string;
      src: string;
      likes: number;
      comments: string[];
    };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onLike: (id: number) => void;  // Add the onLike handler
    onComment: (id: number, comment: string) => void;  // Add the onComment handler
  }) => {
    const router = useRouter();
    const [comment, setComment] = useState("");

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
       
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />

<div
          className={cn(
            "absolute  bg-black/50 flex flex-col justify-end py-4 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          
          <button
           
            className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"
          >
            {card.title}
          </button>
        </div>
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex flex-col justify-end py-4 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >


          <button
            onClick={() => router.push(`/${card.id}`)}
            className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"
          >
            View more
          </button>

          {/* Like and Comment section */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => onLike(card.id)}  // Trigger the onLike handler
              className="text-sm text-white"
            >
              {card.likes} 👍
            </button>
           
            <button
              onClick={() => {
                onComment(card.id, comment);  // Trigger the onComment handler
                setComment(""); // Reset comment field
              }}
              className="text-sm text-white flex flex-row items-center gap-x-1"
            >
              {card.comments.length} <MessageCircleHeart/>
            </button>
          </div>

        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type CardType = {
  id: number;
  title: string;
  description:string;
  src: string;
  likes: number;
  comments: string[];
};

export function FocusCards({
  cards,
  onLike,
  onComment,
}: {
  cards: CardType[];
  onLike: (id: number) => void;
  onComment: (id: number, comment: string) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onLike={onLike}  // Pass the onLike prop
          onComment={onComment}  // Pass the onComment prop
        />
      ))}
    </div>
  );
}
