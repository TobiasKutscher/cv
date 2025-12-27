"use client";

import React, { useState, useEffect } from 'react';
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const hustles = [
  {
    title: 'Schenkwerk',
    description: 'B2B2C Gutschein-As-a-Service Solution für Gastro und Einzelhandel',
    href: 'https://schenkwerk.com',
    dates: '2023 - Present',
    tags: ['SaaS', 'B2B2C', 'Gutscheine', 'Gastro', 'Einzelhandel'],
    image: '/schenkwerk.png',
    video: null
  },
  {
    title: 'AI Trainer @ BFI Wien',
    description: 'Leitung & Entwicklung von Kursen zu AI Agents & Vibe Coding',
    href: 'https://www.bfi.wien/kurs/2831/KB002120/ai-agents-prozesse-im-arbeitsalltag-mit-kiagenten-automatisieren/25BTDB0213',
    dates: '2024 - Present',
    tags: ['AI', 'Vibe Coding', 'AI Agents', 'BFI', 'Kursleitung'],
    image: '/BFI.png',
    video: null
  }
];

function HustleCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link href={href} target="_blank" className="block h-full">
      <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full w-full cursor-pointer">
        {isClient && video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-72 w-full object-cover object-top"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="h-72 w-full overflow-hidden object-cover object-top"
          />
        ) : null}
        <CardHeader className="px-4 md:px-6 py-3 md:py-4">
          <div className="space-y-2">
            <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
            <time className="font-sans text-xs md:text-sm text-muted-foreground">{dates}</time>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm md:text-base text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-4 md:px-6 pb-4 md:pb-6">
          {tags && tags.length > 0 && (
            <div className="mt-3 md:mt-4 flex flex-wrap gap-1 md:gap-2">
              {tags.map((tag) => (
                <Badge
                  className="px-2 md:px-3 py-1 text-xs md:text-sm"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}

export default function SideHustles() {
  return (
    <div className="mx-auto">
      <h2 className="mb-8 md:mb-12 text-3xl md:text-4xl font-bold">🚴 Side Hustles</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {hustles.map((hustle, index) => (
            <HustleCard key={index} {...hustle} />
          ))}
        </div>
      </div>
    </div>
  );
}
