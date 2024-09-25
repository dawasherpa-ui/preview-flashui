import { Zap, Brush, Terminal, Smartphone, Users, RefreshCcw,  } from 'lucide-react'

interface Feature {
  id: number
  name: string
  description: string
  icon: JSX.Element
}

const iconSize = 24

const FeaturesData: Feature[] = [
  {
    id: 1,
    name: 'Lightning Fast',
    description: 'Experience blazing-fast performance with optimized components.',
    icon: <Zap size={iconSize} />,
  },
  {
    id: 2,
    name: 'Stylish Design',
    description: 'Create stunning UIs with our beautifully crafted components.',
    icon: <Brush size={iconSize} />,
  },
  {
    id: 3,
    name: 'Developer-Centric',
    description: 'Built by developers, for developers, with a focus on productivity.',
    icon: <Terminal size={iconSize} />,
  },
  {
    id: 4,
    name: 'Mobile-First',
    description: 'Ensure a great user experience across all devices and screen sizes.',
    icon: <Smartphone size={iconSize} />,
  },
  {
    id: 5,
    name: 'User-Friendly',
    description: 'Intuitive interfaces that your users will love and appreciate.',
    icon: <Users size={iconSize} />,
  },
  {
    id: 6,
    name: 'Continuous Updates',
    description: 'Stay ahead with regular feature updates and improvements.',
    icon: <RefreshCcw size={iconSize} />,
  },
]

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="mb-4 p-3 bg-blue-500 rounded-full text-white">
      {feature.icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
      {feature.name}
    </h3>
    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
      {feature.description}
    </p>
  </div>
)

const FeaturesGrid = () => (
  <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
    {FeaturesData.map((feature) => (
      <FeatureCard key={feature.id} feature={feature} />
    ))}
  </div>
)

const FeaturesWithHeading = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        Discover the Codex Advantage
      </h2>
      <p className="mb-12 max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-400">
        Elevate your projects with our cutting-edge component library designed for modern web development.
      </p>
      <FeaturesGrid />
    </div>
  </section>
)

export default FeaturesWithHeading