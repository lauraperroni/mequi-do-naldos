import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const RestaurantMenuPage = async ({ params }: RestaurantMenuPageProps) => {
  const { slug } = await params;

  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: {
      menuCategories: {
        include: { products: true },
      },
    },
  });

  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <div>
        <RestaurantHeader restaurant={restaurant} image={true} />
        <RestaurantCategories restaurant={restaurant} />
      </div>
    </>
  );
};

export default RestaurantMenuPage;
