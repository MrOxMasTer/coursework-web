import { Catalog } from '@/pages/main/ui/Catalog/ui/Catalog';
import { MainHeader } from '@/pages/main/ui/MainHeader/ui/MainHeader';

type HomePageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default function HomePage({ searchParams }: HomePageProps) {
  return (
    <main className="grow">
      <MainHeader />
      <Catalog searchParams={searchParams} />
    </main>
  );
}
