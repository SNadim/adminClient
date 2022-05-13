import './post.css';
import { Publish } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const qs = require('qs');


const initialState = {
    id: "",
    cat_id:"",
    title: "",
    description: "",
    image: "",
    author: "",
    tags:"",
    date: "",
}

export default function Post() {

    const [state, setState] = useState(initialState);
    const {id,cat_id, title, description, image, author, tags, date} = state;
    const [file, setFile] = useState(null);
    const [cats, setCats] = useState([]);
    const { postId } = useParams();
    const history = useNavigate();

    const loadCat = async () => {
        await axios.get("http://localhost:5000/categories")
        .then(res=>{setCats(res.data)})
        .then(err=>{console.log(err)});
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/post/${postId}`)
        .then((res)=>setState({...res.data[0]}))
        .then(err=>console.log(err));
        loadCat();
    }, [postId]);

   const handleSubmit = (e)=>{
       e.preventDefault();
       let formData = new FormData();
       formData.append('title',title);
       formData.append('desc',description);
       formData.append('cat',tags);
       formData.append('catId',index(tags));
       formData.append('prevFile',image); 
       formData.append('file',file);

       const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
  
    axios.post(`http://localhost:5000/post/update/${postId}`,formData, config)
    .then(()=>{toast.success("Contact Added Successfully!");})
    .catch((err)=>toast.error(err.response.data));
    setTimeout(()=>{
        history(`/post/${postId}`,{replace:true});
    }, 500)
   }

   function index(cat) {
    for(let i = 0; i< cats.length;i++) {
        if(cats[i].name === cat) {
            return parseInt(cats[i].id);
        }
    }
    return 0;
  }
    
  return (
    <div className='post'>
        <div className="postTitleContainer">
          <h3 className="postTitle">Post</h3>
        </div>
          <div className="postTop">
            <div className="postInfoTop">
                    <img 
                    src={`http://localhost/CRUD/${image}`}
                    alt="" 
                    className="postInfoImg" 
                    />
                </div>
                <div className="postInfoBottom">
                <span className="postTitle">{title}</span>
                    <div className="postInfoItem">
                        <span className="postInfoKey">id:</span>
                        <span style={{marginLeft:"116px"}} className="postInfoValue">{id}</span>
                    </div>
                    <div className="postInfoItem">
                        <span className="postInfoKey">Category:</span>
                        <span style={{marginLeft:"72px"}} className="postInfoValue">{tags}</span>
                    </div>
                    <div className="postInfoItem">
                        <span className="postInfoKey">Description:</span>
                        <span style={{marginLeft:"55px"}} className="postInfoValue postDesc">
                            {description}
                            </span>
                    </div>
                    <div className="postInfoItem">
                        <span className="postInfoKey">author:</span>
                        <span style={{marginLeft:"87px"}} className="postInfoValue">{author}</span>
                    </div>
                    <div className="postInfoItem">
                        <span className="postInfoKey">Date:</span>
                        <span style={{marginLeft:"100px"}} className="postInfoValue">{date}</span>
                    </div>
                </div>
          </div>
      <div className="postBottom">
          <form className="postForm" onSubmit={handleSubmit}>
              <div className="postFormLeft">
                  <label>Post Title</label>
                  <input 
                  type="text" value={title}
                  onChange={(e)=>setState({...state,title: e.target.value})} 
                  />
                  <label>Post Description</label>
                  <textarea 
                  style={{width:"500px"}} 
                  type="text" 
                  rows="20" 
                  value={description} 
                  onChange={(e)=>setState({...state,description: e.target.value})}
                  />
                  <label>Category</label>
                  <select name="inStock" id="inStock" onChange={e=>{setState({...state,tags:e.target.value})}} >
                      {
                          cats.map((items)=>{
                              return <option key={items.id} value={items.name}>{items.name}</option>
                          })
                      }
                  </select>
              </div>
              <div className="postFormRight">
                  <div className="postUpload">
                      {
                          file && (
                            <img 
                            src={URL.createObjectURL(file)} 
                            alt="" 
                            className="postUploadImg" 
                            />
                          )
                      }
                      
                      <label htmlFor="file">
                          <Publish />
                      </label>
                      <input 
                      type="file" 
                      id='file' 
                      style={{display:"none"}}
                      name="postImage"
                      onChange={e=>setFile(e.target.files[0])} 
                      />
                  </div>
                  <button type='submit' className="postButton">Update</button>
              </div>
          </form>
      </div>


    </div>
  )
}
