"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Card Component
export const Card = React.memo(
  ({
    card,
  }: {
    card: any
  }) => {
    const [comment, setComment] = useState("");

    console.log(card.description)

    return (
      <div
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full h-full transition-all duration-300 ease-out "
        )}
      >
        {card.media.map((media: { type: string; src: string | StaticImport }, index: React.Key | null | undefined) => (
          <div className="w-full flex-shrink-0 " key={index}>
            {media.type === 'image' && (
              <Image
                src={media.src}
                alt={card.title}
                fill
                className="object-cover rounded-lg w-full h-full blur-md scale-[1.0]"
              />
            )}
          </div>
        ))}

        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-end py-4 px-4 duration-300"
          )}
        >
          <div className=" bg-opacity-50 p-2 rounded-md">
            <div
              className="text-[18px] font-medium text-blue-200 shadow-lg"
            >
              {card.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

// ArtCard Component
export function ArtCard({
  card,
}: {
  card: any
}) {
  return (
    <div className="w-full h-full">
      <Card
        card={card}
      />
    </div>
  );
}
