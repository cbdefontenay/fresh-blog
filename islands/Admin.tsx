const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="flex-shrink-0 w-64 bg-blue-600 text-white">
        <div className="flex items-center justify-center h-16 bg-blue-700">
          {/* Profile Image */}
          <img
            className="w-10 h-10 rounded-full"
            src="https://via.placeholder.com/40"
            alt="Profile Image"
          />
          <span className="ml-2">Cyprien</span>
        </div>
        {/* Sidebar Options */}
        <nav className="mt-5">
          <ul>
            <li className="p-4">
              <a className="text-white hover:text-gray-300" href="#option1">
                Option 1
              </a>
            </li>
            <li className="p-4">
              <a className="text-white hover:text-gray-300" href="#option2">
                Option 2
              </a>
            </li>
            <li className="p-4">
              <a className="text-white hover:text-gray-300" href="#option3">
                Option 3
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8">Welcome back Cyprien.</h1>
        {/* Main Content Options */}
        <div>
          <h2 className="text-xl font-bold mb-4" id="option1">
            Option 1
          </h2>
          <p className="text-gray-600">
            This is the content for Option 1. Replace this with your actual
            content.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4" id="option2">
            Option 2
          </h2>
          <p className="text-gray-600">
            This is the content for Option 2. Replace this with your actual
            content.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4" id="option3">
            Option 3
          </h2>
          <p className="text-gray-600">
            This is the content for Option 3. Replace this with your actual
            content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
