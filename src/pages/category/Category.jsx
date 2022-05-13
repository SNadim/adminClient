import './category.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const initialState = {
  id: "",
  name: "",
};

export default function Category() {
  const { catId } = useParams();
  const [state, setState] = useState(initialState);
  const {id, name } = state;
  const [cat, setCat] = useState("");

  useEffect(()=>{
    axios.get(`http://localhost:5000/categories/${catId}`)
    .then((res)=>setState({...res.data[0]}))
    .then(err=>console.log(err));
}, [catId]);

const handleSubmit = (e) => {
  e.preventDefault();
  if(!cat) {

  } else {
    if(catId) {
      axios.put(`http://localhost:5000/categories/${catId}`, {
                    cat
                }).then(() => {
                    setCat("");
                    setState({...state,name: cat});
                }).catch((err)=>console.log(err));

    } else {

    }
  }
}


  return (
    <div className='category'>
      <h3 className="catTitle">Category</h3>
      <div className="catTop">
        <div className="catInfoItem">
          <span className="catInfoKey">Category:</span>
          <span className="catInfoValue">{name}</span>
        </div>
      </div>
      <div className="catBottom">
        <form className="catForm" onSubmit={handleSubmit}>
          <label>Category</label>
          <input
           type="text"
           placeholder='category...' 
           name="name"
           value={cat}
           onChange={(e)=>{setCat(e.target.value)}} 
           /><br />
          <button type='submit' className="catButton">Update</button>
        </form>
      </div>
    </div>
  )
}
