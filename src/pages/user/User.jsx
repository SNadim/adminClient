import './user.css';
import { Publish } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    id: "",
    username:"",
    email: "",
    picture: "",
    description: "",
}

export default function Post() {

    const [ state, setState ] = useState(initialState);
    const { id,username, email, picture, description } = state;
    //const [ file, setFile ] = useState(null);
    const { userId } = useParams();
    //const history = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/user/${userId}`)
        .then((res)=>setState({...res.data[0]}))
        .then(err=>console.log(err));
        console.log(userId);
    }, [userId]);
/*
   const handleSubmit = (e)=>{
       e.preventDefault();
       let formData = new FormData();
       formData.append('username',username);
       formData.append('email',email);
       formData.append('description',description);
       formData.append('prevFile',picture); 
       formData.append('file',file);

       const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
  
    axios.post(`http://localhost:5000/user/update/${userId}`,formData, config)
    .then(()=>{toast.success("Contact Updated Successfully!");})
    .catch((err)=>toast.error(err.response.data));
    setTimeout(()=>{
        history(`/user/${userId}`,{replace:true});
    }, 500)
   }    
   */
  return (
    <div className='post'>
        <div className="postTitleContainer">
          <h3 className="postTitle">User Info</h3>
        </div>
          <div className="postTop">
            <div className="postInfoTop">
                    <img 
                    src={`http://localhost/CRUD/${picture}`}
                    alt="" 
                    className="postInfoImg" 
                    />
                </div>
                <div className="postInfoBottom">
                    <div className="postInfoItem">
                        <span className="postInfoKey">id:</span>
                        <span style={{marginLeft:"116px"}} className="postInfoValue">{id}</span>
                    </div>
                    <div className="postInfoItem">
                        <span className="postInfoKey">User Name:</span>
                        <span style={{marginLeft:"57px"}} className="postInfoValue">{username}</span>
                    </div>
                    <div className="postInfoItem">
                        <span className="postInfoKey">Email:</span>
                        <span style={{marginLeft:"90px"}} className="postInfoValue postDesc">
                            {email}
                        </span>
                    </div>
                    <div className="postInfoItem">
                        <span className="postInfoKey">Description:</span>
                        <span style={{marginLeft:"55px"}} className="postInfoValue postDesc">
                            {description}
                            </span>
                    </div>
                </div>
          </div>
      {/* <div className="postBottom">
          <form className="postForm" onSubmit={handleSubmit}>
              <div className="postFormLeft">
                  <label>User Name</label>
                  <input 
                  type="text" value={username}
                  onChange={(e)=>setState({...state,username: e.target.value})} 
                  />
                  <label>User Email</label>
                  <input 
                  type="text" value={email}
                  onChange={(e)=>setState({...state,email: e.target.value})} 
                  />
                  <label>User Description</label>
                  <textarea 
                  style={{width:"500px"}} 
                  type="text" 
                  rows="20" 
                  value={description} 
                  onChange={(e)=>setState({...state,description: e.target.value})}
                  />
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
      </div> */}


    </div>
  )
}
