import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../user/api";
import { Post } from "../type";

type PostContentProps = {
  post: Post;
}

function PostContent({ post }: PostContentProps) {
  const userQuery = useQuery({
    queryKey: ['singlePostAuthor'],
    queryFn: () => getUserById(post.userId),
  })

  return (
    <>
      <h1 className="title">
        {post.title}
      </h1>
      <p className="text">{post.body}</p>
      <p><span className="author">Автор:</span> {userQuery?.data && userQuery.data.name}</p>
    </>
  )
}

export default PostContent;