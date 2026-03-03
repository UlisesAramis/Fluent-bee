import React from "react";

type Plan = {
  id: string;
  minutes: number;
  price: number;
};

type PricingPlansProps = {
  className?: string;
};

const plans: Plan[] = [
  { id: "plan-15", minutes: 15, price: 10 },
  { id: "plan-30", minutes: 30, price: 3 },
  { id: "plan-60", minutes: 60, price: 6 },
];

const PricingPlans: React.FC<PricingPlansProps> = ({ className }) => {
  return (
    <div className={`flex flex-col w-5/6 mx-auto space-y-5 ${className}`}>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="flex border-2 border-black rounded-lg overflow-hidden"
        >
          <div className="w-1/2 bg-white p-4 text-center font-semibold">
            {plan.minutes} minutos
          </div>
          <div className="w-1/2 bg-solar-neon p-4 text-center font-bold">
            {plan.price} dólares
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
