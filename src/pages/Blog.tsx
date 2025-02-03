const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Workforce Development",
      excerpt: "Exploring emerging trends in workforce development and their impact on organizations.",
      date: "2024-02-15",
    },
    {
      title: "Skills Gap Analysis: A Comprehensive Guide",
      excerpt: "Understanding how to identify and address skills gaps in your organization.",
      date: "2024-02-10",
    },
    {
      title: "Employee Retention Strategies",
      excerpt: "Effective strategies for maintaining high employee retention rates.",
      date: "2024-02-05",
    },
    {
      title: "Digital Transformation in Workforce Management",
      excerpt: "How digital tools are revolutionizing workforce management practices.",
      date: "2024-01-30",
    },
    {
      title: "Building a Learning Culture",
      excerpt: "Steps to create an environment that promotes continuous learning and development.",
      date: "2024-01-25",
    },
    {
      title: "Remote Work Best Practices",
      excerpt: "Maximizing productivity and engagement in remote work environments.",
      date: "2024-01-20",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-secondary-dark mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold mb-2 text-secondary-dark">{post.title}</h2>
              <p className="text-secondary mb-4">{post.excerpt}</p>
              <button className="text-primary hover:text-primary-dark font-medium">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;