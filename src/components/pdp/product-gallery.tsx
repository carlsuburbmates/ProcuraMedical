interface ProductGalleryProps {
  productName: string;
  // images: string[] // Future implementation
}

export function ProductGallery({ productName }: ProductGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Main Image */}
      <div className="aspect-square bg-alabaster flex items-center justify-center border border-black/5">
        <span className="text-muted text-xs uppercase tracking-widest">
          Main Image: {productName}
        </span>
      </div>
      
      {/* Thumbnails (Mock) */}
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square bg-alabaster flex items-center justify-center border border-black/5 hover:border-black/20 transition-colors cursor-pointer">
            <span className="text-[10px] text-muted">View {i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
