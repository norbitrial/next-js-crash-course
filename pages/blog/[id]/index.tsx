import { useRouter } from "next/router";
import Header from "../../../components/Header";

const BlogPost = ({ blogPost }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {blogPost.id ? (
        <>
          <Header title={blogPost.title} keywords={blogPost.hashtags} />
          <h1>{`this would be a random blog post with id ${blogPost.id}`}</h1>
          <p>
            <strong>Title:</strong> {blogPost.title}
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            <span
              dangerouslySetInnerHTML={{ __html: blogPost.description }}
            ></span>
          </p>
        </>
      ) : (
        <span>Not found :(</span>
      )}
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${context.params.id}`
  );

  const blogPost = await res.json();

  return {
    props: {
      blogPost,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/posts");

  const blogPosts = await res.json();

  const ids = blogPosts.map((p) => p.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
