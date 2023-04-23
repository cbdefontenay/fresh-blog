// import { Handlers } from "$fresh/server.ts";

// export const handler: Handlers = {
//   /**
//    * Create a new post
//    */
//   async POST(req: Request) {
//     try {
//       const body = await req.json();

//       return Response.json({
//         data: {},
//       });
//     } catch (error) {
//       return Response.json({
//         error: error.message,
//       });
//     }
//   },

//   /**
//    * Get all posts
//    */
//   async GET() {
//     try {
//       const posts = [];
//       const { data } = await data.forEach((post: any) => {
//         posts.push({
//           _id: post.ref.id,
//           ...post.data,
//         });
//       });
//       return Response.json({
//         data: posts,
//       });
//     } catch (error) {
//       return Response.json({
//         error: error.message,
//       });
//     }
//   },

//   /**
//    * Update a post
//    */
//   async PUT(req: Request) {
//     try {
//       const body = await req.json();
//       return Response.json({
//         data: post.data,
//       });
//     } catch (error) {
//       return Response.json({
//         error: error.message,
//       });
//     }
//   },

//   /**
//    * Delete a post
//    */
//   async DELETE(req: Request) {
//     try {
//       const body = await req.json();
//       return Response.json({
//         data: post.data,
//       });
//     } catch (error) {
//       return Response.json({
//         error: error.message,
//       });
//     }
//   },
// };
