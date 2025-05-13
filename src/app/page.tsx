import { Catalog } from '@/pages/main/ui/Catalog/ui/Catalog';
import { MainHeader } from '@/pages/main/ui/MainHeader/ui/MainHeader';
import { Footer } from '@/widgets/Footer/ui/Footer';

type HomePageProps = {};

export default function HomePage() {
  return (
    <>
      <main className="grow">
        <MainHeader />
        <Catalog />
      </main>
      <Footer />
    </>
  );
}
