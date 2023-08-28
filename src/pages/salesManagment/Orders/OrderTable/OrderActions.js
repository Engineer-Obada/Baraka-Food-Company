import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useJWTAuth } from '@crema/services/auth/jwt-auth/JWTAuthProvider';
import { BiReceipt } from 'react-icons/bi';

const OrderActions = ({onClickOpenEdit,onClickOpenReject,onClickOpenApprove,onDeleteOrder,data,onClickOpenApprovSale,onClickOpenApprovWarehous,onClickOpenApprovWarehousfinal}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const role=useJWTAuth().user.role;
  console.log("role",role);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /*********************************************** */
  const nvaigate = useNavigate();
  const handleOpenClickEdit = () => {
    onClickOpenEdit(data.id)
  };

  const handleOpenClickReject = () => {
    onClickOpenReject(data.id)
  };
  const handleOpenClickApprove = () => {
 
    onClickOpenApprove(data.id)
  };

  const handleOpenClickApproveSale = () => {
    onClickOpenApprovSale(data.id)
  };
  const handleOpenClickApproveWarehous = () => {
    onClickOpenApprovWarehous(data.id)
  };
  const handleOpenClickApproveWarehousfinal = () => {
    onClickOpenApprovWarehousfinal(data.id)
  };

  const handelDelete = ()=>{
    onDeleteOrder(data.id)
  }

  const handelViewOrder = (e)=>{
    nvaigate(`/order/view/${data.id}`);
    e.stopPropagation();
  }
  const handelViewinvoice = (e)=>{
    nvaigate(`/invoice/view/${data.id}`);
    e.stopPropagation();
  }

/********************************************** */

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        aria-controls='alpha-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <IconButton
        aria-controls='alpha-menu'
        aria-haspopup='true'
        onClick={handelViewinvoice}
      >
        <BiReceipt />
      </IconButton>
      <Menu
        id='alpha-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem style={{fontSize: 14}} onClick={handelViewOrder}>
          View Order
        </MenuItem>


        {/* <MenuItem style={{fontSize: 14}} onClick={handleOpenClickApprove}>
          Approve Credit
        </MenuItem> */}
        {role === "Credit Manager" ? (<MenuItem style={{fontSize: 14}} onClick={handleOpenClickApprove}>
          Approve Credit
        </MenuItem>): role === "Admin"?(<MenuItem style={{fontSize: 14}} onClick={handleOpenClickApprove}>
          Approve Credit
        </MenuItem>):<></>}



        {/* <MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveSale}>
          Approve Sale 
        </MenuItem> */}
         {role === "Sale Manager" ? (<MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveSale}>
          Approve Sale
        </MenuItem>): role === "Admin"?(<MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveSale}>
          Approve Sale
        </MenuItem>):<></>}



        {/* <MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveWarehous}>
          Approve warehouse  
        </MenuItem>  */}
        {role === "Warehouse Manager" ? (<MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveWarehous}>
          Initial warehouse manager approval
        </MenuItem>): role === "Admin"?(<MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveWarehous}>
          Initial warehouse manager approval
        </MenuItem>):<></>}
        {role === "Warehouse Manager" ? (<MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveWarehous}>
          Final warehouse manager approval
        </MenuItem>): role === "Admin"?(<MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveWarehousfinal}>
          Final warehouse manager approval
        </MenuItem>):<></>}

   {/* <MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveWarehous}>
          Initial warehouse manager approval
        </MenuItem>
      <MenuItem style={{fontSize: 14}} onClick={handleOpenClickApproveWarehousfinal}>
          Final warehouse manager approval
        </MenuItem> */}



        {/* <MenuItem style={{fontSize: 14}} onClick={handleOpenClickEdit}>
          Edit
        </MenuItem> */}
           {role === "Warehouse Manager" ? (<></>):(<MenuItem style={{fontSize: 14}} onClick={handleOpenClickEdit}>
            Edit
        </MenuItem>)}
        
       
        {/* <MenuItem style={{fontSize: 14}} onClick={(handleOpenClickReject)}>
          Reject
        </MenuItem> */}
         {role === "Warehouse Manager" ? (<></>):(<MenuItem style={{fontSize: 14}} onClick={handleOpenClickReject}>
          Reject
        </MenuItem>)}

        <MenuItem style={{fontSize: 14}} onClick={handelDelete}>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default OrderActions;
OrderActions.propTypes = {
  onClickOpenEdit: PropTypes.func,
  onClickOpenApprove: PropTypes.func,
  onClickOpenReject: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  handleOpenClickApprove: PropTypes.func,
  onClickOpenApprovSale: PropTypes.func,
  onClickOpenApprovWarehous: PropTypes.func,
  onClickOpenApprovWarehousfinal: PropTypes.func,
  data: PropTypes.object,
};
