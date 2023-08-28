import React from 'react';
import {Box, Button, Select} from '@mui/material';
import {Field, Form} from 'formik';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {Fonts} from 'shared/constants/AppEnums';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';


const AddWarehouseForm = () => {
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
            <IntlMessages id='WarhouseDetails' />
          </Box>

          <div>
            <AppTextField
              sx={{
                width: '100%',
                mb: {xs: 4, xl: 6},
              }}
              variant='outlined'
              label={<IntlMessages id='WarehouseName' />} // WarehouseName
              name='name'
            />         
            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant='outlined'
                  sx={{
                    width: '100%',
                  }}
                >
                  <InputLabel id='address'>
                    <IntlMessages id='Select-Address' />
                  </InputLabel>
                  <Field
                    name='address'
                    label={<IntlMessages id='Select-Address' />}      //Address
                    labelId='address'
                    as={Select}
                    sx={{
                      width: '100%',
                      mb: {xs: 4, xl: 6},
                    }}
                  >
                        <MenuItem
                          value={"Broadway - New York City, NY"}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          Broadway - New York City, NY
                        </MenuItem>
                        <MenuItem
                          value={"Pennsylvania Avenue - Washington, D.C."}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          Pennsylvania Avenue - Washington, D.C.
                        </MenuItem>
                        <MenuItem
                          value={"Rodeo Drive - Beverly Hills, CA"}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          Rodeo Drive - Beverly Hills, CA
                        </MenuItem>
                        <MenuItem
                          value={"Sunset Boulevard - Los Angeles, CA"}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          Sunset Boulevard - Los Angeles, CA
                        </MenuItem>
                        <MenuItem
                          value={"Bourbon Street - New Orleans, LA"}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          Bourbon Street - New Orleans, LA
                        </MenuItem>
                  
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant='outlined'
                  sx={{
                    width: '100%',
                  }}
                >
                  <InputLabel id='city'>
                    <IntlMessages id='Select-City' />
                  </InputLabel>
                  <Field
                    name='city'
                    label={<IntlMessages id='Select-City' />}      //City
                    labelId='city'
                    as={Select}
                    sx={{
                      width: '100%',
                      mb: {xs: 4, xl: 6},
                    }}
                  >
                        <MenuItem
                          value={"New York City, New York"}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          New York City, New York
                        </MenuItem>
                        <MenuItem
                          value={"Chicago, Illinois"}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          Chicago, Illinois
                        </MenuItem>
                        <MenuItem
                          value={"Los Angeles, California"}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          Los Angeles, California
                        </MenuItem>
                  
                  </Field>
                </FormControl>
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

export default AddWarehouseForm;

AddWarehouseForm.propTypes = {
  values: PropTypes.object.isRequired,
  userImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  setUserImage: PropTypes.func,
  setFieldValue: PropTypes.func,
  handleAddContactClose: PropTypes.func,
    // add new prop type for isActive
    isActive: PropTypes.bool
};
