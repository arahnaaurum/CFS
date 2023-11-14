import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { searchPosts } from "../../../entities/post/api";
import { StyledForm } from "./search.styled";

type SearchProps = {
  label: string;
  queryParam: string;
}

function Search({ label, queryParam }: SearchProps) {
  const queryClient = useQueryClient();
  
  const [queryValue, setQueryValue] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQueryValue(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate();
  }

  const { mutate } = useMutation({
    mutationFn: () => searchPosts(`${queryParam}=${queryValue}`),
    onSuccess: (data) => {
      queryClient.setQueryData(['posts'], data);
      setQueryValue('');
    },
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label className='label'>{label}</label>
      <input
        type='text'
        className='input'
        placeholder='Введите текст'
        onChange={handleChange}
        value={queryValue}
      >
      </input>
      <button
        type='submit'
        className='searchbtn'
      >
          Поиск
      </button>
    </StyledForm>
  )
}

export default Search;