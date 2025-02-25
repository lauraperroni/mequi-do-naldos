import { notFound } from "next/navigation";
<<<<<<< HEAD
<<<<<<< HEAD
import RestaurantHeader from "./components/header";
import RestaurantCategories from "./components/categories";
import { db } from "@/lib/prisma";

=======

import { db } from "@/lib/prisma";

import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

>>>>>>> upstream/aula-05
=======

import { db } from "@/lib/prisma";

import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

>>>>>>> 39678f3cac0389303769a6b2e1c94fced3beb944
interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

<<<<<<< HEAD
<<<<<<< HEAD
const isConsumptionMethodValid = (value: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(value);
=======
const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
>>>>>>> upstream/aula-05
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
=======
const RestaurantMenuPage = async ({ params }: RestaurantMenuPageProps) => {
>>>>>>> 39678f3cac0389303769a6b2e1c94fced3beb944
  const { slug } = await params;
<<<<<<< HEAD

=======
  const { consumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }
>>>>>>> upstream/aula-05
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: {
      menuCategories: {
        include: { products: true },
      },
    },
  });
<<<<<<< HEAD

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
=======
  if (!restaurant) {
    return notFound();
  }
  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </div>
>>>>>>> upstream/aula-05
  );
};

export default RestaurantMenuPage;
<<<<<<< HEAD
=======

// http://localhost:3000/fsw-donalds/menu?consumptionMethod=dine_in
>>>>>>> upstream/aula-05
