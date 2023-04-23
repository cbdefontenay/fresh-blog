import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { SECRET_EMAIL, SECRET_NAME, SECRET_PASSWORD } from "../utils/datas.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req: Request, ctx: HandlerContext) {
    const form = await req.formData();
    const name = form.get("name")?.toString();
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    const headers = new Headers();

    // Check if the provided email, password, and name match the admin's values from .env file
    if (
      name === SECRET_NAME &&
      email === SECRET_EMAIL &&
      password === SECRET_PASSWORD
    ) {
      // Redirect to "/igelAdminArticles" route
      headers.set("Location", "/igelAdminArticles");
      return new Response(null, {
        status: 302,
        headers,
      });
    } else {
      // Return an error response indicating unauthorized access
      return new Response(
        "You are not the admin of this page, please do not try to login again",
        { status: 401 },
      );
    }
  },
};

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="shadow-md w-11/12 md:w-2/4 lg:w-1/3 p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center font-mono">
          Login
        </h2>

        <form className="w-full" method="post">
          <label htmlFor="name" className="mb-4">
            <span className="text-gray-800 font-semibold">Name:</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              className="w-full border border-gray-300 px-3 py-2 mt-3 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </label>

          <label htmlFor="email" className="mb-4">
            <span className="text-gray-800 font-semibold">Email:</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className="w-full border border-gray-300 px-3 py-2 mt-3 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </label>

          <label htmlFor="password" className="mb-4">
            <span className="text-gray-800 font-semibold">Password:</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              className="w-full border border-gray-300 px-3 py-2 mt-3 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
          >
            Login
          </button>
        </form>
        <p class="my-5 text-center font-mono">
          *Only the administrator of the website can login.
        </p>
      </div>
    </div>
  );
};

export default Login;
