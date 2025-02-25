import { useParams } from "next/navigation";
import router from "next/router";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const handleOrdersClick = () => router.push(`/${slug}`);

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleOrdersClick}
      ></Button>
    </>
  );
};

export default HomePage;
