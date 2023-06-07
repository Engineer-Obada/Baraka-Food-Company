import React from 'react';
import {Box, Button, Select} from '@mui/material';
import { Form} from 'formik';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {Fonts} from 'shared/constants/AppEnums';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import { useGetDataApi } from '@crema/utility/APIHooks';
import Avatar from '@mui/material/Avatar';
import { baseURL } from '@crema/services/ApiConfig';

const AddItemForm = (props) => {

  const{setFieldValue} = props

  const[{apiData:ProductData}] = useGetDataApi(`${baseURL}/api/product`,[])
  const inputLabel = React.useRef(null);

  return (
    <Form noValidate autoComplete='off'>
      <Box
        sx={{
          padding: 5,
          ml: -6,
          mr: -6,
        }}
      >
        <Box
          sx={{
            pb: 5,
            px: 5,
            mx: -5,
            mb: 5,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            component='h6'
            sx={{
              mb: {xs: 4, xl: 6},
              fontSize: 14,
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            <IntlMessages id='Add Product to Warehouse' />
          </Box>

          <div>
                 
            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={12}>
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
                        <Box display='flex' alignItems='center'>
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
                          <span>{product.name}</span>
                        </Box>
                      </MenuItem>
                    );
                  })}
                </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12}>
              <AppTextField
              sx={{
                width: '100%',
                mb: {xs: 4, xl: 6},
              }}
              variant='outlined'
              label={<IntlMessages id='Quantity' />} // quantity
              name='quantity'
              type='number'
            />   
              </Grid>
            </AppGridContainer>
          </div>
        </Box>
      </Box>

      <Box
        sx={{
          pb: 4,
          mx: -1,
          textAlign: 'right',
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
          <IntlMessages id='common.save' />
        </Button>
      </Box>
    </Form>
  );
};

export default AddItemForm;

AddItemForm.propTypes = {
  values: PropTypes.object.isRequired,
  userImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  setUserImage: PropTypes.func,
  setFieldValue: PropTypes.func,
  handleAddContactClose: PropTypes.func,
    // add new prop type for isActive
    isActive: PropTypes.bool
};
