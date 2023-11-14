import { Post } from "../type"
import PostItem from "./postItem";
import { StyledList } from "./postList.styled";

type PostListProps = {
  posts: Post[];
}

function PostList ({posts}: PostListProps) {
  return (
    <StyledList>
      {posts.map((post) => (<PostItem key={post.id} post={post} />))}
    </StyledList>
  )
}

export default PostList;