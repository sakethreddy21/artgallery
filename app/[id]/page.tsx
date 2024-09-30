"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Star, Heart, MessageCircleHeart, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArtCard } from "@/components/ui/art-card";

type CardType = {
  id: number;
  title: string;
  description:string;
  media: { type: 'image' | 'video'; src: string }[];
  likes: number;
  comments: string[];
};

const Page = () => {
  const params = useParams<{ id: string }>();
  const [card, setCard] = useState<CardType | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const fetchCardById = (id: number): CardType | null => {
    const cards: CardType[] = [
      {
        id: 1,
        title: "The First Rule",
        description: 'This work represents personal reflection and connection with nature, specifically the forest. Each viewer projects their own psychological landscape, recalling childhood memories or recent encounters with nature, and the forest offers everyone a neutral space for reflection and self-discovery. The art captivates the viewer, fostering a deeper connection with nature and inviting personal and collective reflection.',
      
        media: [
          { type: 'image', src: "/art1.png" },
          { type: 'video', src: "/art2.mp4" },
          { type: 'video', src: "/art2.mp4" },
        ],
        likes: 4,
        comments: [
          "This is amazing!",
          "Love the colors and details.",
          "Wow, such a powerful piece of art!",
        ],
      },
      {
        id: 2,
        title: "The Second Rule",
        description: 'This work represents personal reflection and connection with nature, specifically the forest. Each viewer projects their own psychological landscape, recalling childhood memories or recent encounters with nature, and the forest offers everyone a neutral space for reflection and self-discovery. The art captivates the viewer, fostering a deeper connection with nature and inviting personal and collective reflection.',
      
        media: [
          { type: 'video', src: "/art2.mp4" },
          { type: 'video', src: "/art2.mp4" },
          { type: 'video', src: "/art2.mp4" },
        ],
        likes: 4,
        comments: [
          "Incredible!",
          "Such depth in the artwork.",
          "A true masterpiece!",
        ],
      },
    ];

    return cards.find((card) => card.id === id) || null;
  };

  useEffect(() => {
    if (params.id) {
      const id = parseInt(params.id);
      const foundCard = fetchCardById(id);
      setCard(foundCard);
    }
  }, [params.id]);

  const goToNextMedia = () => {
    setCurrentMediaIndex((prevIndex) => {
      // If current index is the last media, cycle to the extra slide
      if (prevIndex === card!.media.length) {
        return 0; // Reset to the first media
      }
      return prevIndex === card!.media.length - 1 ? card!.media.length : prevIndex + 1;
    });
  };

  const goToPreviousMedia = () => {
    setCurrentMediaIndex((prevIndex) => {
      return prevIndex === 0 ? card!.media.length : prevIndex - 1;
    });
  };

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center flex-col items-center w-full">
      <div className="flex flex-row w-full items-center justify-center gap-x-4">
        <button onClick={goToPreviousMedia}><ChevronLeft /></button>
        <div className="relative w-[80%] h-[450px] mb-4 overflow-hidden flex flex-row">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentMediaIndex * 100}%)` }}
          >
            {card.media.map((media, index) => (
              <div className="w-full flex-shrink-0" key={index}>
                {media.type === 'image' ? (
                  <Image
                    src={media.src}
                    alt={card.title}
                    fill
                    className="object-cover rounded-lg w-full h-full"
                  />
                ) : (
                  <video
                    src={media.src}
                    controls
                    autoPlay
                    loop
                    muted
                    className="object-cover rounded-lg w-full h-full"
                  />
                )}
              </div>
            ))}
            {/* Fixed slide showing the card title */}
            <div className="w-full flex-shrink-0 flex items-center justify-center h-full text-4xl font-bold">
            <ArtCard card={card}/>
            </div>
          </div>
        </div>
        <button onClick={goToNextMedia}><ChevronRight /></button>
      </div>
      <div className="flex flex-row w-[70%] justify-between">
        <button className="flex flex-row gap-x-2">
          <Star /> Add to Favourites
        </button>
        <div className="mb-4 flex flex-row gap-x-4">
          <p className="text-lg font-semibold flex gap-x-1">
            <Heart /> {card.likes}
          </p>
          <ul className="flex flex-row gap-x-1">
            <MessageCircleHeart />
            {card.comments.length} Comments
          </ul>
        </div>
      </div>

      <div className="flex w-[70%] p-4 justify-between">
        <div className="flex flex-col">
          <div className="text-[30px] font-semibold">{card.title}</div>
          <div>Year of creation: 2023</div>
        </div>
        <div className="flex flex-col">
          <div className="text-[20px] font-semibold">Materials: Oil and flour on canvas</div>
          <div className="flex justify-end">Size: 80 x 60 cm</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
