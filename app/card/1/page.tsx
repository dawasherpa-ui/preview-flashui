import React from 'react';

const PortfolioSection = () => {
  // Portfolio data for reusability
  const portfolioItems = [
    {
      id: 1,
      title: 'Best website collections',
      category: 'Website',
      imageUrl:
        'https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80',
    },
    {
      id: 2,
      title: 'Block of UI kit collections',
      category: 'UI kit',
      imageUrl:
        'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
      id: 3,
      title: 'Ton’s of mobile mockup',
      category: 'Mockups',
      imageUrl:
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 4,
      title: 'Huge collection of animation',
      category: 'Animation',
      imageUrl:
        'https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        {/* Section Title */}
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Blogs
        </h1>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          {/* Loop through portfolio items */}
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="w-full px-8 py-4 backdrop-blur-sm rounded-b-lg bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
