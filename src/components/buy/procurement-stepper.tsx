import { Check } from "lucide-react";

interface ProcurementStepperProps {
  currentStep: number;
}

const STEPS = [
  { id: 1, label: "Delivery Details" },
  { id: 2, label: "Funding Pathway" },
  { id: 3, label: "Procura / Payment" },
];

export function ProcurementStepper({ currentStep }: ProcurementStepperProps) {
  return (
    <div className="flex items-center justify-between max-w-xl mx-auto mb-12 relative">
      {/* Connector Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-black/10 -z-10" />

      {STEPS.map((step) => {
        const isCompleted = currentStep > step.id;
        const isCurrent = currentStep === step.id;

        return (
          <div key={step.id} className="flex flex-col items-center gap-2 bg-alabaster px-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border transition-colors duration-300 ${
                isCompleted
                  ? "bg-black border-black text-white"
                  : isCurrent
                  ? "bg-white border-black text-black"
                  : "bg-white border-black/20 text-muted"
              }`}
            >
              {isCompleted ? <Check className="w-4 h-4" /> : step.id}
            </div>
            <span
              className={`text-[10px] uppercase tracking-widest font-medium ${
                isCurrent ? "text-black" : "text-muted"
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
