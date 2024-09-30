"use client"

import { useState } from "react";
import { FocusCards } from "@/components/ui/focus-cards";

// Explicitly type the Card object structure
type CardType = {
  id: number;
  title: string;
  src: string;
  description:string;
  likes: number;
  comments: string[];
};

export function FocusCardsDemo() {
  // Add explicit typing for the cards state
  const [cards, setCards] = useState<CardType[]>([
    
    
    
    {
      id: 1,
      title: "Silence of Love",
      src: "/art1.png",
      description: 'This work represents personal reflection and connection with nature, specifically the forest. Each viewer projects their own psychological landscape, recalling childhood memories or recent encounters with nature, and the forest offers everyone a neutral space for reflection and self-discovery. The art captivates the viewer, fostering a deeper connection with nature and inviting personal and collective reflection.',
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
      src: "/art1.png",
      description: 'This work represents personal reflection and connection with nature, specifically the forest. Each viewer projects their own psychological landscape, recalling childhood memories or recent encounters with nature, and the forest offers everyone a neutral space for reflection and self-discovery. The art captivates the viewer, fostering a deeper connection with nature and inviting personal and collective reflection.',
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      title: "The Third Rule",
      src: "/art1.png",
      description: 'This work represents personal reflection and connection with nature, specifically the forest. Each viewer projects their own psychological landscape, recalling childhood memories or recent encounters with nature, and the forest offers everyone a neutral space for reflection and self-discovery. The art captivates the viewer, fostering a deeper connection with nature and inviting personal and collective reflection.',
      
      likes: 0,
      comments: [],
    },
    {
      id: 4,
      title: "The Fourth Rule",
      src: "/art1.png",
      description: 'This work represents personal reflection and connection with nature, specifically the forest. Each viewer projects their own psychological landscape, recalling childhood memories or recent encounters with nature, and the forest offers everyone a neutral space for reflection and self-discovery. The art captivates the viewer, fostering a deeper connection with nature and inviting personal and collective reflection.',
      
      likes: 0,
      comments: [],
    },
    {
      id: 5,
      title: "The Fifth Rule",
      src: "/art1.png",
      description: 'This work represents personal reflection and connection with nature, specifically the forest. Each viewer projects their own psychological landscape, recalling childhood memories or recent encounters with nature, and the forest offers everyone a neutral space for reflection and self-discovery. The art captivates the viewer, fostering a deeper connection with nature and inviting personal and collective reflection.',
      
      likes: 0,
      comments: [],
    },
    {
      id: 6,
      title: "The Sixth Rule",
      src: "/art1.png",
      description: 'This work represents personal reflection and connection with nature, specifically the forest. Each viewer projects their own psychological landscape, recalling childhood memories or recent encounters with nature, and the forest offers everyone a neutral space for reflection and self-discovery. The art captivates the viewer, fostering a deeper connection with nature and inviting personal and collective reflection.',
      
      likes: 0,
      comments: [],
    },
  ]);

  // Handler for liking a card
  const handleLike = (id: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, likes: card.likes + 1 } : card
      )
    );
  };

  // Handler for adding a comment
  const handleComment = (id: number, comment: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, comments: [...card.comments, comment] }
          : card
      )
    );
  };

  return <FocusCards cards={cards} onLike={handleLike} onComment={handleComment} />;
}
