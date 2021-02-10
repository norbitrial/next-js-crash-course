import Link from "next/link";
import Header from "../components/Header";

export default function Home({ blogPosts }) {
  return (
    <div>
      <Header title="Welcome page" keywords={["web development", "react"]} />

      <h1>Welcome Page</h1>

      <h3>Check out the blog posts:</h3>
      {blogPosts && (
        <ul>
          {blogPosts.map((e) => (
            <li key={e.id}>
              <Link href={`/blog/${e.id}`}>
                <a style={{ fontSize: "0.75rem" }}>{e.id}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/posts`);

  const blogPosts = await res.json();

  return {
    props: {
      blogPosts,
    },
  };
};
