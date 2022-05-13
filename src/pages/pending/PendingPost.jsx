import './pendingPost.css';
import { DataGrid } from '@material-ui/data-grid'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

export default function PostList() {
    const [data, setData] = useState([]);
  

  const columns = [
    { field: 'id',headerName: 'ID', width: 150 },
    {
      field: 'title',
      headerName: 'Post Title',
      width: 250,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
    },
    {
      field: 'tags',
      headerName: 'Category',
      width: 200,
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell:(params)=>{
        return (
          <div className='postList'>
            <img src={`http://localhost/CRUD/${params.row.image}`} alt="" className="postListImg" />
          </div>
        )
      }
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 200,
      },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return(
          <>
            <button className='postListEdit' onClick={() => approve(params.id)}>Approve</button>
            <button className='postListEdit' style={{backgroundColor:'red'}} onClick={() => decline(params)}>Decline</button>
          </>
        )
      }
    }
  ];

  const approve = async (id) => {
    axios.post(`http://localhost:5000/post/status/code/${id}`)
        .then(loadData())
        .catch(err=>console.log(err));

  }

  const decline = async (params) => {
    const id = params.row.id;
    const image = params.row.image;   
    if(window.confirm("Are you sure that you wanted to delete that contact ?")) {
      const res = await axios.delete(`http://localhost:5000/post/${id}`, { data: { image } });
      toast.success("Post Delete Successfully!");
      setTimeout(()=>loadData(), 500);
      }
  }

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/post/status/code");
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
