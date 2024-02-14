import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from 'react-toastify';
import { allOrders, clearErrors } from '../redux/actions/ordersAction';

const AllOrders = () => {

  const dispatch=useDispatch();
  const {orders,error,loading,success}=useSelector(state=>state.order);

  useEffect(()=>{
    if(error)
    {
      toast.error(error)
      dispatch(clearErrors());
    }
    if(success)
    {
      toast.success("ALL-ORDERS RETRIEVED");
    }
    dispatch(allOrders());
    console.log(orders)
  },[])

  const columns=[
    {
      field:"customerId",
      headerName:"CustomerId",
      minWidth:200
    }, //https://www.youtube.com/watch?v=-F2u__EUQGM
    {
      field:"counter",
      headerName:"Counter",
      type:"number",
      minWidth:100
    },
    {
      field:"items",
      headerName:"Items",
      type:"number",
      minWidth:150
    },
    {
      field:"time",
      headerName:"Time",
      minWidth:150
    },
    {
      field:"orderId",
      headerName:"Order-ID",
      minWidth:300
    },
    {
      field:"status",
      headerName:"Status",
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
    // {id:1,name:"ajmal",counter:3,items:4,time:"3:54",orderId:"222mkmdkvnws33//232",status:"success"},
    // {id:2,name:"jack",counter:2,items:2,time:"4:54",orderId:"222mkmdkvnws33//232",status:"success"},
    // {id:3,name:"jack2",counter:2,items:2,time:"4:54",orderId:"222mkmdkvnws33//232",status:"fail"},
    // {id:4,name:"jack3",counter:2,items:2,time:"4:54",orderId:"222mkmdkvnws33//232",status:"success"},
  ]

  orders?.order?.forEach((or,i)=>{
    rows.push({id:i,customerId:or.customer,counter:or.counter,items:or.orderItems.length,time:new Date(or.createdAt).toLocaleDateString(),orderId:or._id,status:or.paymentInfo.status})
  })

  return (
    <div className='flex gap-3 w-full  bg-[#03254c] rounded-b-xl h-[82vh] max-h-[100%]'>
    <DataGrid sx={{color:"white"}} rows={rows} columns={columns}/>
    </div>
  )
}

export default AllOrders