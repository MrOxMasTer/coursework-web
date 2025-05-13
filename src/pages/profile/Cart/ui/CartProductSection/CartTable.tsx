'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/shadcnui/Table';
import { Typography } from '@/shared/ui/Typography';
import Delete from '#/public/svg/Delete.svg';
import { CounterToCart } from '@/features/counterToCart/ui/CounterToCart';
import type { CartProduct } from '@/entities/Cart/model/types';
import Image from 'next/image';
import { useCartStore } from '@/entities/Cart/api/useCartStore';

type CartTableProps = {
  cartProducts: CartProduct[];
};

export const CartTable = ({ cartProducts }: CartTableProps) => {
  const removeToCart = useCartStore((state) => state.removeToCart);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Table className="hidden md:block bg-white border-spacing-y-2.5 border-separate">
      <TableHeader>
        <TableRow className="font-medium text-mine-shaft border-b-green/50 *:pl-0">
          <TableHead className="w-[312px]">Products</TableHead>
          <TableHead className="w-[146px]">Price</TableHead>
          <TableHead className="text-center w-[163px]">Quantity</TableHead>
          <TableHead className="text-center w-[111px]">Total</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {cartProducts.map(
          ({
            product: {
              id,
              name,
              imageUrl,
              price,
              description,
              discountedPrice,
              discount,
            },
            count,
            size,
          }) => {
            const handleMinusCart = () => {
              if (count > 1) {
                return addToCart(id, size, count - 1);
              }

              return;
            };

            const handlePlusCart = () => {
              if (count < 99) {
                return addToCart(id, size, count + 1);
              }

              return;
            };

            const total = (discountedPrice ?? price) * count;

            return (
              <TableRow className="border-none bg-alabaster *:pl-0" key={id}>
                <TableCell className="font-medium flex gap-3.5 p-0">
                  <div className="size-[70px]">
                    <Image
                      width={70}
                      height={70}
                      src={`/${imageUrl}`}
                      alt={description}
                    />
                  </div>
                  <div>
                    <Typography className="font-medium text-mine-shaft mt-4">
                      {name}
                    </Typography>
                    <Typography className="flex gap-2">
                      Size:
                      <Typography variant="span">{size}</Typography>
                    </Typography>
                  </div>
                </TableCell>
                <TableCell className="text-left align-middle py-0 font-medium text-dove-gray">
                  <div className="flex">
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
                </TableCell>
                <TableCell className="py-0">
                  <CounterToCart
                    variant="base"
                    state={count}
                    handleMinus={handleMinusCart}
                    handlePlus={handlePlusCart}
                  />
                </TableCell>
                <TableCell className="py-0 text-center">${total}</TableCell>
                <TableCell className="py-0 pr-4">
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => removeToCart(id)}
                      type="button"
                      className="size-fit"
                    >
                      <Delete />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            );
          },
        )}
      </TableBody>
    </Table>
  );
};
