const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About WDA</h3>
            <p className="text-sm">
              Workforce Development Analysis provides comprehensive solutions for workforce management and development.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/workforce-main" className="hover:text-primary">Workforce Main</a></li>
              <li><a href="/workforce-insights" className="hover:text-primary">Workforce Insights</a></li>
              <li><a href="/blog" className="hover:text-primary">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Vitthal Sawant</li>
              <li>Email: vitthalsawant300@gmail.com</li>
              <li>Phone: 8308075485</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Workforce Development Analysis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;