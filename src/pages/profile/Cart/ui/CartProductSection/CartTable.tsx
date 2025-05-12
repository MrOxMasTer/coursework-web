'use client';

import type { Product } from '@/entities/Product/model/types';
import { sizes } from '@/entities/Product/model/sizes';
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
import { useCounter } from '@/features/counterToCart/api/useCounter';

type CartTableProps = {
  products: Product[];
};

export const CartTable = ({ products }: CartTableProps) => {
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
        {products.map(
          ({ id, name, imageUrl, price, discount, discountedPrice }) => {
            const total = 100;

            const { count, handlePlus, handleMinus } = useCounter(0);

            return (
              <TableRow className="border-none bg-alabaster *:pl-0" key={id}>
                <TableCell className="font-medium flex gap-3.5 p-0">
                  <div className="size-[70px]">{/* <Image></Image> */}</div>
                  <div>
                    <Typography className="font-medium text-mine-shaft mt-4">
                      {name}
                    </Typography>
                    <Typography className="flex gap-2">
                      Size:
                      <Typography variant="span">{sizes[0].value}</Typography>
                    </Typography>
                  </div>
                </TableCell>
                <TableCell className="text-left align-middle py-0 font-medium text-dove-gray">
                  ${price}
                </TableCell>
                <TableCell className="py-0">
                  <CounterToCart
                    variant="base"
                    state={count}
                    handleMinus={handleMinus}
                    handlePlus={handlePlus}
                  />
                </TableCell>
                <TableCell className="py-0 text-center">${total}</TableCell>
                <TableCell className="py-0 pr-4 place-items-center">
                  <div className="size-fit">
                    <Delete />
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
