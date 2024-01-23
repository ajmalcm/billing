import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from "@mui/icons-material/Delete";

const Allcustomers = () => {

  const columns=[
    {
      field:"name",
      headerName:"Name",
      minWidth:150
    },
    {
      field:"phone",
      headerName:"Phone",
      type:"number",
      minWidth:150
    },
    {
      field:"paymentId",
      headerName:"Payment-ID",
      minWidth:300
    },
    {
      field:"orderId",
      headerName:"Order-ID",
      minWidth:300
    },
    {
      field:"date",
      headerName:"Date",
      minWidth:150
    },
    {
      field:"action",
      headerName:"Action",
      type:"number",
      minWidth:150,
      sortable:false,
      renderCell:(params)=>{
        return(
          <DeleteIcon/>
        )
      }
    }
  ]

  const rows=[
    {id:1,name:"ajmal",phone:3,paymentId:"222mkmdkvnws33",date:"3:54",orderId:"222mkmdkvnws33//232"},
    {id:2,name:"jack",phone:2,paymentId:"222mkmdkvnws33",date:"4:54",orderId:"222mkmdkvnws33//232"},
    {id:3,name:"jack2",phone:2,paymentId:"222mkmdkvnws33",date:"4:54",orderId:"222mkmdkvnws33//232"},
    {id:4,name:"jack3",phone:2,paymentId:"222mkmdkvnws33",date:"4:54",orderId:"222mkmdkvnws33//232"},
  ]

  return (
    <div className='flex gap-3 w-full  bg-[#03254c] rounded-b-xl h-[82vh] max-h-[100%]'>
    <DataGrid sx={{color:"white"}} rows={rows} columns={columns} />
    </div>
  )
}

export default Allcustomers