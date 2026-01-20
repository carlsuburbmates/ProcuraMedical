export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-12 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="prose prose-zinc max-w-none">
        {children}
      </div>
    </div>
  );
}
