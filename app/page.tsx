//import Image from "next/image";

import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/users">users</Link>
      {/* Using Next.js's Link component improves navigation efficiency by preventing the redownload of shared resources like CSS and JavaScript. This enhances the loading speed of web applications. */}
      <ProductCard></ProductCard>
    </main>
  );
}
