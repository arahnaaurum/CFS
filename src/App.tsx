import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './shared/ui/layout/layout';
import Posts from './pages/posts';
import Post from './pages/post';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path='/:id' element={<Post />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
