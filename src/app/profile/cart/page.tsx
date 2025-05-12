import { CartProductSection } from '@/pages/profile/Cart/ui/CartProductSection/CartProductSection';
import { CartTotalsSection } from '@/pages/profile/Cart/ui/CartTotalsSection/CartTotalsSection';
import { Typography } from '@/shared/ui/Typography';

export default function CartPage() {
  return (
    <main>
      <Typography
        className="mt-10 font-medium text-xl text-center"
        variant="h1"
      >
        Cart
      </Typography>
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between mt-16 md:gap-[86px]">
          <CartProductSection />
          <CartTotalsSection />
        </div>
      </div>
    </main>
  );
}
