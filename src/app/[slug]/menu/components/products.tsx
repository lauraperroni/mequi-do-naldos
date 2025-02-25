import { Product } from "@prisma/client";
<<<<<<< HEAD
import Link from "next/link";
import Image from "next/image";
=======
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

import { formatCurrency } from "@/helpers/format-currency";
>>>>>>> upstream/aula-05

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
<<<<<<< HEAD
=======
  const { slug } = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const consumptionMethod = searchParams.get("consumptionMethod");
>>>>>>> upstream/aula-05
  return (
    <div className="space-y-3 px-5">
      {products.map((product) => (
        <Link
          key={product.id}
<<<<<<< HEAD
          href="/"
          className="flex items-center justify-between gap-10 border-b py-3"
        >
=======
          href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}`}
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          {/* ESQUERDA */}
>>>>>>> upstream/aula-05
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
<<<<<<< HEAD
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>
=======
              {formatCurrency(product.price)}
            </p>
          </div>

          {/* DIREITA */}
>>>>>>> upstream/aula-05
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
