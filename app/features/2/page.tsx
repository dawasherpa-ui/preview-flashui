import {
    BadgeDollarSign,
    BookOpenText,
    ExternalLink,
    Facebook,
    Image,
    Link2,
    MapPin,
    PartyPopper,
    Rss,
    ThumbsUp,
    TrendingUp,
    Users,
  } from 'lucide-react'
  
  const features = [
    {
      name: 'Content Discovery',
      description: 'Uncover trending topics your audience loves.',
      icon: ThumbsUp,
    },
    {
      name: 'Market Analysis',
      description: 'Gain insights from competitor strategies.',
      icon: Users,
    },
    {
      name: 'Trend Forecasting',
      description: 'Predict and leverage upcoming niche trends.',
      icon: TrendingUp,
    },
    {
      name: 'AI Content Creation',
      description: 'Generate high-quality blog posts effortlessly.',
      icon: Rss,
    },
    {
      name: 'Visual AI',
      description: 'Create custom images for your content.',
      icon: Image,
    },
    {
      name: 'Social Media Boost',
      description: 'Automate engaging posts across platforms.',
      icon: Facebook,
    },
    {
      name: 'SEO Insights',
      description: 'Monitor and improve your search rankings.',
      icon: MapPin,
    },
    {
      name: 'Site Optimization',
      description: 'Enhance your website structure for SEO.',
      icon: Link2,
    },
    {
      name: 'Comprehensive Audit',
      description: 'Get a full analysis of your SEO performance.',
      icon: PartyPopper,
    },
    {
      name: 'PPC Mastery',
      description: 'Craft effective Google Ads campaigns.',
      icon: BadgeDollarSign,
    },
    {
      name: 'Authority Building',
      description: 'Secure high-quality backlinks to boost credibility.',
      icon: ExternalLink,
    },
    {
      name: 'Keyword Intelligence',
      description: 'Identify and target the most valuable keywords.',
      icon: BookOpenText,
    },
  ]
  
  const FeatureCard = ({ feature }:any) => (
    <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
      <feature.icon
        className="mb-3 h-8 w-8 text-indigo-600 dark:text-indigo-400"
        aria-hidden="true"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {feature.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {feature.description}
      </p>
    </div>
  )
  
  const FeaturesGrid = () => {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-8">
            Supercharge Your Digital Strategy
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Unlock the full potential of your online presence with our comprehensive suite of tools and features.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.name} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturesGrid