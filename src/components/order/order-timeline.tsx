"use client";

import { Check, Clock, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStepProps {
  label: string;
  status: "complete" | "current" | "upcoming";
  icon: React.ElementType;
  date?: string;
}

function TimelineStep({ label, status, icon: Icon, date }: TimelineStepProps) {
  return (
    <div className="flex flex-col items-center text-center relative z-10">
      <div className={cn(
        "h-12 w-12 rounded-full flex items-center justify-center border-2 mb-3 transition-colors duration-500",
        status === "complete" ? "bg-black border-black text-white" :
        status === "current" ? "bg-white border-black text-black" :
        "bg-white border-zinc-200 text-zinc-300"
      )}>
        <Icon className="w-5 h-5" />
      </div>
      <span className={cn(
        "text-sm font-medium mb-1",
        status === "upcoming" ? "text-zinc-400" : "text-zinc-900"
      )}>{label}</span>
      {date && <span className="text-xs text-zinc-500">{date}</span>}
    </div>
  );
}

export function OrderTimeline() {
  return (
    <div className="relative flex justify-between w-full max-w-2xl mx-auto mb-16">
      {/* Progress Bar Background */}
      <div className="absolute top-6 left-0 right-0 h-0.5 bg-zinc-100 -z-0" />
      {/* Progress Bar Active (33% for Step 1) */}
      <div className="absolute top-6 left-0 w-1/3 h-0.5 bg-black -z-0" />

      <TimelineStep 
        label="Order Received" 
        status="complete" 
        icon={Check} 
        date="Today"
      />
      <TimelineStep 
        label="Payment Pending" 
        status="current" 
        icon={Clock} 
      />
      <TimelineStep 
        label="Shipped" 
        status="upcoming" 
        icon={Truck} 
      />
    </div>
  );
}
