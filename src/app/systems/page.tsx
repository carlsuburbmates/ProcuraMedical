import { SystemCard } from "@/components/systems/system-card";

export default function SystemsIndexPage() {
  return (
    <div className="container-wide py-12 md:py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="h1 mb-6">Systems</h1>
        <p className="text-xl text-muted leading-relaxed">
          Browse our curated infrastructure categories. Selected for clinical compliance,
          durability, and procurement readiness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SystemCard
          name="Hygiene"
          descriptor="Bathroom and Toilet Infrastructure"
          href="/systems/hygiene"
        />
        <SystemCard
          name="Mobility"
          descriptor="Mobility and Transfer Infrastructure"
          href="/systems/mobility"
        />
        <SystemCard
          name="Rehab"
          descriptor="Rehabilitation and Tech Systems"
          href="/systems/rehab"
        />
      </div>
    </div>
  );
}
