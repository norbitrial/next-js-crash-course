import { useRouter } from "next/router";

const BlogPost = ({ blogPost }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {blogPost.id ? (
        <>
          <h1>{`this would be a random blog post with id ${blogPost.id}`}</h1>
          <p>
            <strong>Title:</strong> {blogPost.title}
          </p>
          <p style={{ fontSize: "0.75rem" }}>{blogPost.body}</p>
        </>
      ) : (
        <span>Not found :(</span>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const blogPost = await res.json();

  return {
    props: {
      blogPost,
    },
  };
};

export default BlogPost;
