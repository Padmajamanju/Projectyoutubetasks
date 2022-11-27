import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts';
const App=() =>{
  const [post,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(10);
  useEffect(()=>{
    const fetchPosts=async()=>{
      setLoading(true);
      const res=await axios 
      .get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);
  console.log(post)
  return (
    <div className="App">
        <h2 className='text-primary mb'>My App</h2>
    </div>
  );
}

export default App;
