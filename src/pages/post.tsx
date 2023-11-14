import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../entities/post/api";
import { StyledContainer } from "./post.styled";
import PostContent from "../entities/post/ui/postContent";

function Post() {
  const { id } = useParams();
  const postQuery = useQuery({
    queryKey: ['singlePost'],
    queryFn: () =>  {if (id) return getPostById(+id)} ,
  });

  if (postQuery.isLoading) return (<h1>Загрузка...</h1>);
  if (!postQuery.data || postQuery.isError) return (<h1>Что-то пошло не так</h1>);

  return (
    <main>
      <StyledContainer>
        <PostContent
          post={postQuery.data}
        />
        <Link to={'/'} className="back"> Вернуться назад </Link>
      </StyledContainer>
    </main>
  )
}

export default Post;