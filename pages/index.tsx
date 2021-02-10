import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header title="Welcome page" keywords={["web development", "react"]} />

      <h1>Welcome Page</h1>

      <Link href="/blog/1">Check out blog post 1</Link>
    </div>
  );
}
