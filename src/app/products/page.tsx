import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5">
      <h1 className="text-red-500">Products Page</h1>
      <Input className="text-red-500 p-4 m-1" placeholder="Username"></Input>
      <Input className="text-red-500 p-4 m-1" placeholder="Password"></Input>
      <Button className="bg-slate-500 text-emerald-300 p-4 m-1">Login</Button>
    </div>
  );
};

export default ProductPage;
