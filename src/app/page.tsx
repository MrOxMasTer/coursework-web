type HomePageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default function HomePage({ searchParams }: HomePageProps) {
  return (
    <main className="grow">
      {/* <MainHeader /> */}
      {/* <Catalog searchParams={searchParams} /> */}
    </main>
  );
}
