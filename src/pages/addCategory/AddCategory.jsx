import './addCategory.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate , useParams  } from 'react-router-dom';

export default function AddCategory() {
  const [cat, setCat] = useState("");
  const history = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(cat) {
      axios.post("http://localhost:5000/categories", {
        cat
    }).then(() => {
      setCat("")
    }).catch((err)=>toast.error(err.response.data));
    toast.success("Category Added Successfully!");
    setTimeout(()=>{
        history("/addcat",{replace:true});
    }, 500)
    } else {
      toast.error("Please provide category!");
    }
  }
  return (
    <div className='addCategory'>
        <h3 className='categoryTitle'>Add New Category</h3>
        <form className="addCategoryWrapper" onSubmit={handlerSubmit} >
            <input 
            type="text" 
            placeholder='Enter Category Name...'
            value={cat}
            onChange={e=>setCat(e.target.value)}
             /><br />
            <button type='submit' className='addCategorySubmit'>Save</button>
        </form>
    </div>
  )
}
