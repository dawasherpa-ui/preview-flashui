'use client'
import { cn } from '@/app/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects.',
    monthlyPrice: 29,
    annualPrice: 290,
    link: 'https://example.com/starter',
    features: [
      'Up to 5 projects',
      'Basic analytics',
      'Community support',
      '1GB storage',
      'Weekly backups',
    ],
  },
  {
    name: 'Pro',
    description: 'Ideal for growing businesses and teams.',
    monthlyPrice: 79,
    annualPrice: 790,
    link: 'https://example.com/pro',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Daily backups',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Tailored solutions for large organizations.',
    monthlyPrice: 199,
    annualPrice: 1990,
    link: 'https://example.com/enterprise',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom AI model training',
      'Unlimited storage',
      'Real-time backups',
      'On-premise deployment option',
    ],
  },
]

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section className="relative w-full overflow-hidden py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <Header />
        <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
        <PricingCards billingCycle={billingCycle} />
      </div>
    </section>
  )
}

const Header = () => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Choose Your Perfect Plan</h2>
    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Flexible pricing options to suit your needs. Start small and scale as you grow.
    </p>
  </div>
)

const BillingToggle = ({ billingCycle, setBillingCycle }:any) => (
  <div className="flex justify-center mb-12">
    <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-full">
      <button
        onClick={() => setBillingCycle('monthly')}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-all',
          billingCycle === 'monthly'
            ? 'bg-blue-500 text-white'
            : 'text-gray-700 dark:text-gray-300'
        )}
      >
        Monthly
      </button>
      <button
        onClick={() => setBillingCycle('annual')}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-all',
          billingCycle === 'annual'
            ? 'bg-blue-500 text-white'
            : 'text-gray-700 dark:text-gray-300'
        )}
      >
        Annual
      </button>
    </div>
  </div>
)

const PricingCards = ({ billingCycle }:any) => (
  <div className="grid gap-8 lg:grid-cols-3">
    {pricingPlans.map((plan, index) => (
      <PricingCard key={index} plan={plan} billingCycle={billingCycle} />
    ))}
  </div>
)

const PricingCard = ({ plan, billingCycle }:any) => (
  <div className={cn(
    "flex flex-col rounded-2xl border p-8 shadow-lg transition-all hover:shadow-xl",
    plan.popular ? "border-blue-500 dark:border-blue-400" : "border-gray-200 dark:border-gray-700"
  )}>
    {plan.popular && (
      <div className="mb-4 flex items-center justify-center gap-1 rounded-full bg-blue-100 dark:bg-blue-900 py-1 text-sm font-medium text-blue-600 dark:text-blue-400">
        <Star size={16} />
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold">{plan.name}</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-400">{plan.description}</p>
    <div className="my-8">
      <span className="text-4xl font-bold">
        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
      </span>
      <span className="text-gray-600 dark:text-gray-400">
        /{billingCycle === 'monthly' ? 'month' : 'year'}
      </span>
    </div>
    <ul className="mb-8 space-y-4 flex-grow">
      {plan.features.map((feature:any, idx:number) => (
        <li key={idx} className="flex items-center gap-2">
          <Check className="text-green-500" size={18} />
          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      onClick={() => window.open(plan.link)}
      className={cn(
        "w-full rounded-lg py-3 font-medium transition-colors",
        plan.popular
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      )}
    >
      Get Started
    </button>
  </div>
)

export default function PricingPage() {
  return <Pricing />
}