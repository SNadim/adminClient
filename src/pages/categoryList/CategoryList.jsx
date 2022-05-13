import './categoryList.css';
import { DataGrid } from '@material-ui/data-grid'
import { useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function CategoryList() {
  const [data, setData] = useState([]);

  const columns = [
    { field: 'id',headerName: 'Serial No.', width: 200 },
    {
      field: 'name',
      headerName: 'Category Name',
      width: 800,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return(
          <>
            <Link to={"/category/"+params.row.id}><button className='categoryListEdit'>Edit</button></Link>
            <DeleteOutline className='categoryListDelete' onClick={() => deleteContact(params.row.id)} />
          </>
        )
      }
    }
  ];

  const deleteContact = (id) => {
    if(window.confirm("Are you sure that you wanted to delete that contact ?")) {
      axios.delete(`http://localhost:5000/categories/${id}`);
      toast.success("Category Delete Successfully!");
      setTimeout(()=>loadData(), 500);

  }
  }

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/categories");
    setData(response.data);
};

  useEffect(()=>{
    
    loadData();
  },[]);


  return (
    <div className="categoryList">
     <div className="searchPanel">
        <label>Search: </label>
        <input type="text" placeholder='Search Category' />
     </div>
      <DataGrid
      rows={data}
      columns = {columns}
      pageSize= {10}
      rowsPerPageOptions ={[5]}
      disableSelectionOnClick
      checkboxSelection
       />
    </div>
  )
}
