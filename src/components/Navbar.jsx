const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white shadow-md z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
      <div className="text-xl font-bold text-gray-800">My Portfolio</div>
      <div className="space-x-4">
        <a href="#intro" className="text-gray-600 hover:text-gray-800">
          Introduction
        </a>
        <a href="#projects" className="text-gray-600 hover:text-gray-800">
          Projects
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com/your-username" // Replace with your actual GitHub username
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          GitHub
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
