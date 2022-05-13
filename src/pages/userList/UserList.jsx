import './userList.css';
import { DataGrid } from '@material-ui/data-grid'
import { useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

export default function PostList() {
    const [data, setData] = useState([]);
  

  const columns = [
    { field: 'id',headerName: 'Serial No.', width: 150 },
    {
      field: 'username',
      headerName: 'User Name',
      width: 300,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 300,
      },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
    },
    {
      field: 'picture',
      headerName: 'Image',
      width: 200,
      renderCell:(params)=>{
        return (
          <div className='postList'>
            <img src={`http://localhost/CRUD/${params.row.picture}`} alt="" className="postListImg" />
          </div>
        )
      }
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return(
          <>
            <Link to={"/user/"+params.row.id}><button className='postListEdit'>Edit</button></Link>
            <DeleteOutline className='postListDelete' onClick={() => deleteContact(params)} />
          </>
        )
      }
    }
  ];

  const deleteContact = async (params) => {
    const id = params.row.id;
    const image = params.row.picture; 

    if(window.confirm("Are you sure that you wanted to delete that contact ?")) {
      const res = await axios.delete(`http://localhost:5000/user/${id}`, { data: { image } });
      toast.success("Post Delete Successfully!");
      setTimeout(()=>loadData(), 500);

      }
  }

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/user");
    setData(response.data);
};

  useEffect(()=>{
    
    loadData();
  },[]);

  return (
    <div className='postList'>
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
