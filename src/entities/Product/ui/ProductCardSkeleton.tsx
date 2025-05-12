type ProductCardSkeletonProps = {
  className?: string;
};

export const ProductCardSkeleton = ({
  className,
}: ProductCardSkeletonProps) => {
  return (
    <div className={`max-w-[175px] ${className}`}>
      <div className="rounded-[20px] skeleton min-h-[160px]" />
      <div className="pl-[3px]">
        <div className="h-[14px] skeleton mt-2.5 rounded-[20px]" />
        <div className="h-4 mt-2 skeleton max-w-[55px] rounded-[20px]" />
      </div>
    </div>
  );
};
