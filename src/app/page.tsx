import RestaurantPage from "./[slug]/page";
interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const HomePage = async ({ params }: RestaurantMenuPageProps) => {
  return (
    <>
      <RestaurantPage params={params} />
    </>
  );
};

export default HomePage;
