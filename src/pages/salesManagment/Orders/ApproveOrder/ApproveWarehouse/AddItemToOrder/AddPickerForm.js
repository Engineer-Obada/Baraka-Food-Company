import React from 'react';
import {Box, Button, Select} from '@mui/material';
import { Form} from 'formik';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';


const AddPickerForm = (props) => {

  const{setFieldValue,PickerData} = props

  // const[{apiData:PickerData}] = useGetDataApi(`${baseURL}/api/picker/showPickerInWarehouse/${orderId}`,[])
  const inputLabel = React.useRef(null);

  return (
    <>
    <Form noValidate autoComplete='off'>
      <Box>
        <Box >
          <div>
                 
            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={4}>
                <FormControl
                  variant='outlined'
                  sx={{
                    width: '100%',
                  }}
                >
                   <InputLabel                                // Product
                  ref={inputLabel}
                  id='assigned-to-select-outlined-label'
                >
                  <IntlMessages id='Pickers' />
                </InputLabel>
                <Select
                  labelId='assigned-to-select-outlined-label'
                 
                  label={<IntlMessages id='Pickers' />}
                  onChange={(event) =>{
                    setFieldValue('pickerId', event.target.value)
                  }}
                  sx={{
                    width: '100%',

                  }}
                  
                  
                >
                  {PickerData.data && PickerData.data.picker.map((product) => {
                    return (
                      <MenuItem
                        value={product.id}
                        key={product.id}
                        sx={{
                          cursor: 'pointer',
                          inputVariant: 'outlined',
                      
                        }}
                      >
                        <Box
                       
                        display='flex' alignItems='center'>
                          {product.image ? (
                            <Avatar
                            sx={{
                              marginRight: 2,
                            }}
                          >
                            {product.name[0].toUpperCase()}
                          </Avatar>
                          
                          ) : (
                            <Avatar
                            sx={{
                              marginRight: 2,
                            }}
                            src={product.image}
                          />
                          )}
                          <span style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                         }}>{product.firstName}</span>
                        </Box>
                      </MenuItem>
                    );
                  })}
                </Select>
                </FormControl>
              </Grid>
           
              <Grid item xs={12} md={4}>
              <Box
        sx={{
          // pb: 4,
          // mx: -1,
          // textAlign: 'right',
        }}
      >
        <Button
          sx={{
            position: 'relative',
            minWidth: 100,
          }}
          color='primary'
          variant='outlined'
          type='submit'
        >
          <IntlMessages id='Add Picker' />
        </Button>
      </Box>
              </Grid>
            </AppGridContainer>
          </div>
        </Box>
      </Box>

    
    </Form>
    </>
  );
};

export default AddPickerForm;

AddPickerForm.propTypes = {
  values: PropTypes.object.isRequired,
  PickerData: PropTypes.object.isRequired,
  userImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  setUserImage: PropTypes.func,
  setFieldValue: PropTypes.func,
  // handleAddContactClose: PropTypes.func,
    // add new prop type for isActive
    isActive: PropTypes.bool,
    orderId: PropTypes.number
};
