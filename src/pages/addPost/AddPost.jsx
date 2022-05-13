import { useState } from 'react';
import './addPost.css';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const initialState = {
  title: "",
  desc: "",
};

export default function AddPost() {

  const [state, setState] = useState(initialState);
  const {title, desc } = state;
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [cat, setCat] = useState("");
  const [catId, setCatId] = useState("");
  const history = useNavigate();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state,[name]: value});
}

const loadData = async () => {
  const response = await axios.get("http://localhost:5000/categories");
  setData(response.data);
};

const handleSubmit = (e)=>{
  e.preventDefault();
  if(!title || !desc || !file || !cat || !catId) {
    toast.error("Please provide value into each input field!");
  } else {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('cat',cat);
    formData.append('catId', catId);
    formData.append('file', file);


    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
  }

    axios.post("http://localhost:5000/post",formData, config).then(() => {
      setState({title: "", desc: "", cat: ""})
  }).catch((err)=>toast.error(err.response.data));
  toast.success("Contact Added Successfully!");
  setTimeout(()=>{
      history("/addpost",{replace:true});
  }, 500)
  }
}

useEffect(()=>{
  loadData();
},[]);

function index(cat) {
  for(let i = 0; i< data.length;i++) {
      if(data[i].name === cat) {
          return parseInt(data[i].id);
      }
  }
  return 0;
}

  return (
    <div className='addPost'>
        <h3 className='addPostTitle'>Add New Post</h3>
        <div className="addPostWrapper">
            <form className="addPostForm" onSubmit={handleSubmit}>
              <div className="addPostItem">
                <label>Title</label>
                <input 
                type="text" 
                className='addPostInput' 
                placeholder='Enter Post Title...' 
                name='title'
                onChange={handleInputChange}
                /><br />
              </div>        
              <div className="addPostItem">
                  <label>Category</label>
                  <select onChange={e=>{setCat(e.target.value);setCatId(index(e.target.value))}} className='addPostCategory'>
                     {
                       data.map((item)=>{
                         return <option key={item.id} value={item.name}>{item.name}</option>
                       })
                     }
             
                  </select><br />
              </div>
              <div className="addPostItem">
                <label>Upload Image</label>
                <input 
                type="file" 
                className='addPostFile' 
                name='postImage'
                onChange={(e)=>setFile(e.target.files[0])} 
                /><br />
              </div>
              <div className="addPostItem">
                <label htmlFor='description'>Content</label>
                <textarea
                 name="desc" 
                 id="description" 
                 placeholder='Description...' 
                 className='addPostDesc'
                 onChange={handleInputChange} 
                 ></textarea><br />
              </div>
                <div className="addPostItem">
                  <button type='submit' className="addPostSubmit">Save</button>
                </div>
            </form>
            {
              file && (
                <img 
                 className='addPostImg' 
                 src={URL.createObjectURL(file)} 
                 alt="" 
                 />
              )
            }
            
        </div>
    </div>
  )
}
