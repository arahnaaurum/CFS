import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../user/api";
import { Post } from "../type";
import { StyledItem } from "./postItem.styled";

type PostItemProps = {
  post: Post;
}

function PostItem ({post}: PostItemProps) {
  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserById(post.userId),
  })

  return (
    <StyledItem key={post.id}>
      <Link to={String(post.id)}>
        <h2 className="title">{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <p><span className="author">Автор:</span> {userQuery.data && userQuery.data.name}</p>
    </StyledItem>
  )
}

export default PostItem;