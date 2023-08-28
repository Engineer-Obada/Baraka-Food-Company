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
import { useGetDataApi } from '@crema/utility/APIHooks';
import Avatar from '@mui/material/Avatar';
import { baseURL } from '@crema/services/ApiConfig';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import { Fonts } from 'shared/constants/AppEnums';

const AddItemForm = (props) => {

  const{setFieldValue} = props

  const[{apiData:ProductData}] = useGetDataApi(`${baseURL}/api/product`,[])
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
                  <IntlMessages id='Product' />
                </InputLabel>
                <Select
                  labelId='assigned-to-select-outlined-label'
                 
                  label={<IntlMessages id='Product' />}
                  onChange={(event) =>{
                    setFieldValue('productId', event.target.value)
                  }}
                  sx={{
                    width: '100%',

                  }}
                  
                  
                >
                  {ProductData.data && ProductData.data.map((product) => {
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
                         }}>{product.name}</span>
                        </Box>
                      </MenuItem>
                    );
                  })}
                </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
              <AppTextField
            sx={{
              width: '100%',
              fontWeight: Fonts.LIGHT,
            }}
            variant='outlined'
            name='orderedQuantity'
        />
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
          <IntlMessages id='Add Item' />
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

export default AddItemForm;

AddItemForm.propTypes = {
  values: PropTypes.object.isRequired,
  userImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  setUserImage: PropTypes.func,
  setFieldValue: PropTypes.func,
  // handleAddContactClose: PropTypes.func,
    // add new prop type for isActive
    isActive: PropTypes.bool
};
