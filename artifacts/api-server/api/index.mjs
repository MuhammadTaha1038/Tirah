// Re-export the compiled Express app for Vercel serverless function detection.
// The actual compilation is done by `buildCommand` (esbuild via build.mjs) which
// produces ../dist/index.mjs before Vercel processes this file.
export { default } from '../dist/index.mjs';
