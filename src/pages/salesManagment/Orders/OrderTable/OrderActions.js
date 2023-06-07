import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const OrderActions = ({onClickOpenEdit,onClickOpenReject,onDeleteOrder,data}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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

  const handelDelete = ()=>{
    onDeleteOrder(data.id)
  }

  const handelViewOrder = (e)=>{
    nvaigate(`/order/view/${data.id}`);
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
        <MenuItem style={{fontSize: 14}} onClick={handleClose}>
          Approve
        </MenuItem>
        <MenuItem style={{fontSize: 14}} onClick={handleOpenClickEdit}>
          Edit
        </MenuItem>
        <MenuItem style={{fontSize: 14}} onClick={(handleOpenClickReject)}>
          Reject
        </MenuItem>
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
  onClickOpenReject: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  data: PropTypes.object,
};
