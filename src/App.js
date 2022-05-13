import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/sidebar/SideBar';
import Login from './pages/login/Login';
import TopBar from './components/topBar/TopBar';
import CategoryList from './pages/categoryList/CategoryList';
import Home from './pages/home/Home';
import AddCategory from './pages/addCategory/AddCategory';
import PostList from './pages/postList/PostList';
import AddPost from './pages/addPost/AddPost';
import Post from './pages/post/Post';
import Category from './pages/category/Category';
import TitleSlogan from './pages/titleSlogan/TitleSlogan';
import PendingPost from './pages/pending/PendingPost';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <TopBar />
      <ToastContainer position='top-center' />
      <div className='container'>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/titleslogan" element={<TitleSlogan />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/category/:catId" element={<Category />} />
          <Route path="/addcat" element={<AddCategory />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/pending" element={<PendingPost />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
        {/* <Login /> */}
      </div>
    </Router>
  );
}

export default App;
