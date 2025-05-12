import { productService } from '@/entities/Product/api/productService';
import { ButtonLike } from '@/features/toggleLike/ui/ButtonLike';
import { Typography } from '@/shared/ui/Typography';
import Star from '#/public/svg/Star.svg';
import { PlantSizes } from '@/pages/products/[id]/ui/PlantSizes';
import { sizes } from '@/entities/Product/model/sizes';
import { AddToCart } from '@/pages/products/[id]/ui/AddToCart';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id: _id } = await params;
  const id = Number(_id);

  const { name, price, discount, discountedPrice } =
    await productService.getById(id);

  // TODO: product profile (model + rating)
  // TODO: profile sizes

  return (
    <main className="relative">
      <ButtonLike className="top-7 right-7 size-9" productId={id} isLike />
      <div className="bg-linear-[135deg] from-0% from-wild-sand to-100% to-alabaster min-h-[350px]">
        {/* <Image>

    </Image> */}
      </div>
      <div className="container">
        <div className="flex justify-between mt-8">
          <div>
            <Typography variant="h1" className="font-medium text-xl">
              {name}
            </Typography>
          </div>
          <div className="border border-solid border-green items-center rounded-4xl flex text-sm gap-x-1 px-1.5 py-1">
            <Star />
            <Typography className="text-mine-shaft font-medium">4.8</Typography>
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
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come.
        </Typography>
        <section className="mt-5">
          <PlantSizes sizes={sizes} />
        </section>
        <div className="text-[0.9375rem] mt-3 flex gap-2">
          <Typography variant="span" className="text-silver-chalice">
            Category:
          </Typography>
          <Typography variant="span" className="text-dove-gray">
            Potter Plants
          </Typography>
        </div>
        <AddToCart />
      </div>
    </main>
  );
}
