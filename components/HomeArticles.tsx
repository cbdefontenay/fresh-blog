const HomeArticles = () => {
  return (
    <div class="flex flex-wrap justify-center">
      <div class="bg-white rounded-lg shadow-md p-6 m-4 w-64">
        <h2 class="text-lg font-semibold mb-4">Blog Title 1</h2>
        <p class="text-gray-600 mb-4">Short excerpt of the article content.</p>
        <a
          href="/blog"
          class="block text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Read the Article
        </a>
      </div>
      <div class="bg-white rounded-lg shadow-md p-6 m-4 w-64">
        <h2 class="text-lg font-semibold mb-4">Blog Title 2</h2>
        <p class="text-gray-600 mb-4">Short excerpt of the article content.</p>
        <a
          href="/blog"
          class="block text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Read the Article
        </a>
      </div>
    </div>
  );
};

export default HomeArticles;
