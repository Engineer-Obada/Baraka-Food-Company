import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import StickyNote2Outlined from '@mui/icons-material/StickyNote2Outlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Fonts} from 'shared/constants/AppEnums';
import {styled} from '@mui/material/styles';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import {postDataApi, putDataApi} from '@crema/utility/APIHooks';
import { baseURL } from '@crema/services/ApiConfig';

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  padding: 8,
  '&:first-of-type': {
    paddingLeft: 20,
  },
  '&:last-of-type': {
    paddingRight: 20,
  },
}));
const TableItem = ({data,reCallAPI,orderId,onClickOpenNote}) => {
  const infoViewActionsContext = useInfoViewActionsContext();

  const onRemoveItem = (item) => {
    postDataApi(`${baseURL}/api/order/deleteItem/${orderId}/${item.id}`, infoViewActionsContext)
      .then(() => {
        reCallAPI();
        infoViewActionsContext.showMessage("Item Deleted successfully")
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onDecrement = () => {
    putDataApi(`${baseURL}/api/order/decrementItem/${orderId}/${data.id}`, infoViewActionsContext)
      .then(() => {
        reCallAPI();
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  const onIncrement = () => {
    putDataApi(`${baseURL}/api/order/incrementItem/${orderId}/${data.id}`, infoViewActionsContext)
      .then(() => {
        reCallAPI();
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const handleOpenClickNote = () => {
    onClickOpenNote(data.id)
  };

  return (
    <TableRow key={data.id} className='item-hover'>
      <StyledTableCell>
        <Box display='flex'>
          <Avatar sx={{mr: 3.5}} src={data.image} />
          <Box>
            <Box fontSize={14} fontWeight={Fonts.MEDIUM}>
              {data.name}
            </Box>
            <Box color='text.secondary' fontSize={14}>
              Brand: {data.category.nameCategory}
            </Box>
          </Box>
        </Box>
      </StyledTableCell>
      <StyledTableCell align='left' fontWeight={Fonts.MEDIUM}>
        {/* ${+data.mrp - +data.discount} */}
        {
          data.price
        }
      </StyledTableCell>
      <StyledTableCell align='left' fontWeight={Fonts.MEDIUM}>
        {/* ${+data.mrp - +data.discount} */}
        {
          data.pivot.orderedQuantity
        }
      </StyledTableCell>
      
      <StyledTableCell align='left'>
        <Box
          border={1}
          borderRadius={4}
          display='flex'
          borderColor='text.secondary'
          alignItems='center'
          justifyContent='center'
          width={100}
          height={36}
        >
          <AddIcon className='pointer' onClick={onIncrement} />
          <Box component='span' px={3}>
            {data.pivot.approvedQuantity}
          </Box>
          <RemoveIcon className='pointer' onClick={onDecrement} />
        </Box>
      </StyledTableCell>

      <StyledTableCell align='left' fontWeight={Fonts.MEDIUM}>
        {/* ${+data.mrp - +data.discount} */}
        {
          data.pivot.pricePeices
        }
      </StyledTableCell>

      <StyledTableCell align='left' fontWeight={Fonts.MEDIUM}>
        {/* ${(+data.mrp - +data.discount) * +data.count} */}
        {
          data.warehouse[0].quantity
        }
      </StyledTableCell>
      
      <StyledTableCell component='th' scope='row'>
        <CancelOutlined 
        className='pointer'
        onClick={() => onRemoveItem(data)} />
        <StickyNote2Outlined
        className='pointer'
        onClick={() => handleOpenClickNote()} />
      </StyledTableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object.isRequired,
  setTableData: PropTypes.func,
  onClickOpenNote: PropTypes.func,
  orderId: PropTypes.number,
  reCallAPI: PropTypes.func,
};
