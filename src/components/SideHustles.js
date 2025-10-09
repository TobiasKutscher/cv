"use client";

import React, { useState, useEffect } from 'react';
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
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
    video: null,
    links: [
      {
        icon: '🌐',
        type: '  Website',
        href: 'https://schenkwerk.com'
      }
    ]  
  }
];

function HustleCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full w-full">
      <Link href={href} className="cursor-pointer">
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
      </Link>
      <CardHeader className="px-6 py-4">
        <div className="space-y-2">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <time className="font-sans text-sm text-muted-foreground">{dates}</time>
          <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-6">
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                className="px-3 py-1 text-sm"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-6 pb-6">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-3">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge variant="outline" key={idx} className="flex gap-2 px-3 py-2 text-sm">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

export default function SideHustles() {
  return (
    <div className="mx-auto">
      <h2 className="mb-12 text-4xl font-bold">🚴 Side Hustles</h2>
      <div className="flex justify-center">
        <div className="max-w-lg w-full">
          {hustles.map((hustle, index) => (
            <HustleCard key={index} {...hustle} />
          ))}
        </div>
      </div>
    </div>
  );
}
