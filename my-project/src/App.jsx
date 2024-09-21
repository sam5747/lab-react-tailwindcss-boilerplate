import React from 'react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-red-500 py-4 w-full px-8">
        <div className="container mx-auto flex flex-row justify-between items-center w-max" aria-label="Main Navigation">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl mx-10">Kalvium</span>
          </div>
          <ul className="flex space-x-6 text-white font-semibold">
            <li className="hover:text-gray-200 cursor-pointer">About Us</li>
            <li className="hover:text-gray-200 cursor-pointer">Contacts</li>
            <li className="hover:text-gray-200 cursor-pointer">Courses</li>
          </ul>
          <button className="text-white border-2 mx-10 border-white px-4 py-2 rounded hover:bg-white hover:text-red-500 transition duration-200" aria-label="Login Button">
            Login
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto mt-8 text-center">
        {/* Button */}
        <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition duration-200" aria-label="Button One">
          Button One
        </button>

        {/* Alert */}
        <div className="alert bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 max-w-lg mx-auto" role="alert">
          <strong className="font-bold">Alert!</strong>
          <span className="block">This is awesome!</span>
        </div>

        {/* Store Section */}
        <section className="mt-16 bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
          <img 
            src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" 
            alt="Kalvium Logo"
            className="h-12 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">Kalvium Store</h2>
          <p className="text-gray-600">You have a new course!</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-300 text-center py-4 mt-16 text-gray-700">
        <p>&copy; 2021 Copyright: Kalvium</p>
      </footer>
    </div>
  );
}

export default App;