import { ButtonLike } from '@/features/toggleLike/ui/ButtonLike';
import { Typography } from '@/shared/ui/Typography';
import Star from '#/public/svg/Star.svg';
import { PlantSizes } from '@/pages/products/[id]/ui/PlantSizes';
import { AddToCart } from '@/pages/products/[id]/ui/AddToCart';
import { products } from '@/entities/Product/model/constants/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { categories } from '@/entities/Product/model/categories';
import { DifferentProducts } from '@/pages/products/[id]/ui/DifferentProducts';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id: _id } = await params;
  const id = Number(_id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const { name, discount, discountedPrice, price, sizes, imageUrl, category } =
    product;

  const findCategory = categories.find((c) => c.value === category);

  if (!findCategory) {
    throw new Error(`Category ${category} in product ${id} not found`);
  }

  return (
    <main>
      <div className="md:container">
        <div className="md:flex md:gap-14 md:mt-20">
          <div className="relative md:size-[444px]">
            <ButtonLike
              className="top-7 right-7 size-9"
              productId={id}
              isLike
            />
            <div className="bg-linear-[135deg] from-0% from-wild-sand to-100% to-alabaster min-h-[350px] flex justify-center items-center">
              <Image width={400} height={400} src={`/${imageUrl}`} alt={name} />
            </div>
          </div>
          <div className="container md:no-container">
            <div className="flex justify-between mt-8 md:mt-0">
              <div>
                <Typography variant="h1" className="font-medium text-xl">
                  {name}
                </Typography>
              </div>
              <div className="border border-solid border-green items-center rounded-4xl flex text-sm gap-x-1 px-1.5 py-1">
                <Star />
                <Typography className="text-mine-shaft font-medium">
                  4.8
                </Typography>
                <Typography variant="span" className="text-dove-gray">
                  (19)
                </Typography>
              </div>
            </div>
            <div className="flex text-xl items-center mt-1">
              <Typography className="text-green font-bold" variant="p">
                ${discount ? discountedPrice : price}
              </Typography>
              {discount ? (
                <>
                  <Typography
                    className="text-silver-chalice line-through ml-2"
                    variant="span"
                  >
                    {price}
                  </Typography>
                  <div className="rounded-[7px] outline-green outline text-green px-1 ml-3 text-sm">
                    -{discount}%
                  </div>
                </>
              ) : null}
            </div>
            <Typography className="line-clamp-3 text-sm text-dove-gray mt-3">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come.
            </Typography>
            <section className="mt-5">
              <PlantSizes sizes={sizes} />
            </section>
            <div className="text-[0.9375rem] mt-3 flex gap-2">
              <Typography variant="span" className="text-silver-chalice">
                Category:
              </Typography>
              <Typography variant="span" className="text-dove-gray">
                {findCategory?.label}
              </Typography>
            </div>
            <AddToCart productId={id} />
          </div>
        </div>
      </div>
      <DifferentProducts productId={id} />
    </main>
  );
}
