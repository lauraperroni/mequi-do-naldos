import { notFound } from "next/navigation";
import RestaurantHeader from "./components/header";
import RestaurantCategories from "./components/categories";
import { db } from "@/lib/prisma";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (value: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(value);
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
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
        <RestaurantHeader restaurant={restaurant} />
        <RestaurantCategories restaurant={restaurant} />
      </div>
    </>
  );
};

export default RestaurantMenuPage;
