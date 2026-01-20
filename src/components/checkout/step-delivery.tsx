"use client";

import { useState } from "react";
import { useCheckoutStore } from "@/lib/store";
import { deliverySchema, DeliveryDetails } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function StepDelivery() {
  const { setDeliveryDetails, setStep, deliveryDetails } = useCheckoutStore();
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Initialize with existing data or empty strings
  const [formData, setFormData] = useState<DeliveryDetails>(deliveryDetails || {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    postcode: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = deliverySchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) newErrors[err.path[0].toString()] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    setDeliveryDetails(result.data);
    setStep(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#171a20] mb-6 tracking-tight">Delivery Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Full Name</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={cn(
              "w-full p-4 bg-[#F2F3F1] border-b-2 border-transparent focus:border-[#171a20] outline-none transition-all placeholder-gray-400 text-sm font-medium",
              errors.fullName ? "border-red-500 bg-red-50" : ""
            )}
            placeholder="Jane Doe"
          />
          {errors.fullName && <p className="text-xs text-red-500 font-bold">{errors.fullName}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={cn(
                "w-full p-4 bg-[#F2F3F1] border-b-2 border-transparent focus:border-[#171a20] outline-none transition-all placeholder-gray-400 text-sm font-medium",
                errors.email ? "border-red-500 bg-red-50" : ""
              )}
              placeholder="jane@example.com"
            />
            {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={cn(
                "w-full p-4 bg-[#F2F3F1] border-b-2 border-transparent focus:border-[#171a20] outline-none transition-all placeholder-gray-400 text-sm font-medium",
                errors.phone ? "border-red-500 bg-red-50" : ""
              )}
              placeholder="0400 000 000"
            />
             {errors.phone && <p className="text-xs text-red-500 font-bold">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={cn(
              "w-full p-4 bg-[#F2F3F1] border-b-2 border-transparent focus:border-[#171a20] outline-none transition-all placeholder-gray-400 text-sm font-medium",
              errors.address ? "border-red-500 bg-red-50" : ""
            )}
            placeholder="123 Example St"
          />
           {errors.address && <p className="text-xs text-red-500 font-bold">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">State</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={cn(
                "w-full p-4 bg-[#F2F3F1] border-b-2 border-transparent focus:border-[#171a20] outline-none transition-all placeholder-gray-400 text-sm font-medium",
                errors.state ? "border-red-500 bg-red-50" : ""
              )}
              placeholder="NSW"
            />
             {errors.state && <p className="text-xs text-red-500 font-bold">{errors.state}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Postcode</label>
            <input
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className={cn(
                "w-full p-4 bg-[#F2F3F1] border-b-2 border-transparent focus:border-[#171a20] outline-none transition-all placeholder-gray-400 text-sm font-medium",
                errors.postcode ? "border-red-500 bg-red-50" : ""
              )}
              placeholder="2000"
            />
             {errors.postcode && <p className="text-xs text-red-500 font-bold">{errors.postcode}</p>}
          </div>
        </div>

        <button 
          type="submit"
          className="w-full mt-8 btn-tesla-dark py-4 text-sm font-bold uppercase tracking-wide shadow-lg hover:shadow-xl"
        >
          Continue
        </button>
      </form>
    </motion.div>
  );
}
