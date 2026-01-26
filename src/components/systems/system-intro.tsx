interface SystemIntroProps {
  name: string;
  descriptor: string;
  description: string;
}

export function SystemIntro({ name, descriptor, description }: SystemIntroProps) {
  return (
    <section className="py-12 border-b border-black/5">
      <div className="container-wide">
        <div className="max-w-4xl">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-black mb-3 block">
            System: {name}
          </span>
          <h1 className="h1 text-4xl md:text-5xl mb-6">{descriptor}</h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
