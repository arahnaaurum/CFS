import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../entities/post/api';
import { useState } from 'react';
import PostList from '../entities/post/ui/postList';
import Pagination from '../shared/ui/pagination/pagination';
import Search from '../shared/ui/search/search';
import { StyledContainer } from './posts.styled';

function Posts() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  })

  if (postsQuery.isLoading) return (<h1>Загрузка...</h1>);
  if (postsQuery.isError) return (<h1>Что-то пошло не так</h1>);
  
  return (
    <main>
      <StyledContainer>
      <h1>Посты</h1>
      {postsQuery.data &&
        <>
          <h2>Поиск</h2>
          <Search label='По названию' queryParam='title_like'/>
          <Search label='По содержанию' queryParam='body_like'/>
          <PostList posts={postsQuery.data.slice((currentPage-1)*10, currentPage*10)} />
          <Pagination
            total={postsQuery.data.length}
            perPage={10}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      }
      </StyledContainer>
    </main>
  )
}

export default Posts