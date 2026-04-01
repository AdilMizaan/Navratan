// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

// const nextConfig = {
//   output: 'export',
//   images: { unoptimized: true },
//   trailingSlash: true,  // better static URLs ke liye
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',               // Yeh line static HTML generate karegi
//   images: {
//     unoptimized: true,            // Images ko optimize mat karo (simple export ke liye)
//   },
//   trailingSlash: true,              // URLs mein / end aayega (better static files)
// };

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// --------------------------working--------------------------
// const nextConfig = {
//   output: 'export'
// };

// export default nextConfig;

// -----------------------------------------

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Agar aapne images use ki hain toh ye bhi zaroori ho sakta hai:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;