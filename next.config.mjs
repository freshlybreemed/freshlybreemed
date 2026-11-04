import createMDX from "@next/mdx";

const withMDX = createMDX({});

/** @type {import('next').NextConfig} */
export default withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});
