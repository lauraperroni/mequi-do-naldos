"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
<<<<<<< HEAD
import { useParams, useRouter } from "next/navigation";
=======
import { useRouter } from "next/navigation";
>>>>>>> 39678f3cac0389303769a6b2e1c94fced3beb944

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Pick<Product, "name" | "imageUrl">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
<<<<<<< HEAD
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const handleBackClick = () => router.back();
  const handleOrdersClick = () => router.push(`/${slug}/orders`);
=======
  const router = useRouter();
  const handleBackClick = () => router.back();
>>>>>>> 39678f3cac0389303769a6b2e1c94fced3beb944
  return (
    <div className="relative min-h-[300px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>

      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-contain"
      />

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
<<<<<<< HEAD
        onClick={handleOrdersClick}
=======
>>>>>>> 39678f3cac0389303769a6b2e1c94fced3beb944
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default ProductHeader;
