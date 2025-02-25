"use client";

<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
=======
>>>>>>> 39678f3cac0389303769a6b2e1c94fced3beb944
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
=======
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
>>>>>>> upstream/aula-05

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
  image: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
=======
const RestaurantHeader = ({ restaurant, image }: RestaurantHeaderProps) => {
>>>>>>> 39678f3cac0389303769a6b2e1c94fced3beb944
  const router = useRouter();
  const handleBackClick = () => router.back();

  if (!image) {
    return (
      <>
        <div className="relative z-30 h-[250px] w-full">
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-4 z-50 rounded-full"
            onClick={() => handleBackClick()}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-4 z-50 rounded-full"
          >
            <ScrollTextIcon />
          </Button>
        </div>
        ;
      </>
    );
  }
  return (
    <>
      <div className="relative z-30 h-[250px] w-full">
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-4 z-50 rounded-full"
          onClick={() => handleBackClick()}
        >
          <ChevronLeftIcon />
        </Button>
        <Image
          src={restaurant.coverImageUrl}
          alt={restaurant.name}
          fill
          className="absolute object-cover"
        />
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-4 z-50 rounded-full"
        >
          <ScrollTextIcon />
        </Button>
      </div>
      ;
    </>
=======

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const handleBackClick = () => router.back();
  const handleOrdersClick = () => router.push(`/${slug}/orders`);
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleOrdersClick}
      >
        <ScrollTextIcon />
      </Button>
    </div>
>>>>>>> upstream/aula-05
  );
};

export default RestaurantHeader;
