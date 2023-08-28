import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {Field, Form} from 'formik';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import {Fonts} from 'shared/constants/AppEnums';
import {styled} from '@mui/material/styles';
import { useGetDataApi } from '@crema/utility/APIHooks';
import { baseURL } from '@crema/services/ApiConfig';

const StyledDivider = styled(Divider)(({theme}) => ({
  marginTop: 20,
  marginBottom: 20,
  [theme.breakpoints.up('xl')]: {
    marginTop: 32,
    marginBottom: 32,
  },
}));




const AddPickerForm = (props) => {
  const {isSubmitting,values}= props;
 const [{apiData:warehouses}]= useGetDataApi(`${baseURL}/api/warehouse`,[])

  // const {messages} = useIntl();


  return (
    
    <Form
      style={{
        width: '100%',
      }}
      noValidate
      autoComplete='off'
      values={values}
    >
    
        
      <div>
      <AppGridContainer spacing={5}>
            <Grid item xs={12} sm={6} md={6}>
        <AppTextField
          sx={{
            width: '100%',
            fontWeight: Fonts.LIGHT,
            marginBottom: 5,
          }}
          variant='outlined'
          label={<IntlMessages id='First Name' />}       //firstName
          name='firstName'
        />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <AppTextField
        
          sx={{
            width: '100%',
            fontWeight: Fonts.LIGHT,
            marginBottom: 5,
          }}
          variant='outlined'
          label={<IntlMessages id='Last Name' />}       //lastName
          name='lastName'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <AppTextField
          sx={{
            width: '100%',
            fontWeight: Fonts.LIGHT,
            marginBottom: 5,
          }}
          variant='outlined'
          label={<IntlMessages id='Email' />}       //email
          name='email'
          type='email'
        />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <AppTextField
          sx={{
            width: '100%',
            fontWeight: Fonts.LIGHT,
            marginBottom: 5,
          }}
          variant='outlined'
          label={<IntlMessages id='Password' />}       //password
          name='password'
          type='password'
        />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <AppTextField
          sx={{
            width: '100%',
            fontWeight: Fonts.LIGHT,
            marginBottom: 5,
          }}
          variant='outlined'
          label={<IntlMessages id='Phone' />}       //phoneNum
          name='phoneNum'
        />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <FormControl
                  variant='outlined'
                  sx={{
                    width: '100%',
                  }}
                >
                  <InputLabel id='warehouseId'>
                    <IntlMessages id='Select-Warehouse' />
                  </InputLabel>
                  <Field
                    name='warehouseId'
                    label={<IntlMessages id='Select-Warehouse'/>}      //Role
                    labelId='warehouseId'
                    as={Select}
                    sx={{
                      width: '100%',
                      mb: {xs: 4, xl: 6},
                      textAlign:'left',

                    }}
                  >
                    {warehouses.data && warehouses.data.map((role) => {
                      return (
                        <MenuItem
                          value={role.id}
                          key={role.id}
                          sx={{
                            cursor: 'pointer',
                          }}
                        >
                          {role.name}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>
            </Grid>
</AppGridContainer>
       


        <StyledDivider />
      </div>
      <div style={{textAlign: 'right'}}>
        <Button
          sx={{
            position: 'relative',
            minWidth: 100,
          }}
          color='primary'
          variant='outlined'
          disabled={isSubmitting}
          type='submit'
        >
          <IntlMessages id='common.save' />
        </Button>
      </div>
    </Form>
  );
};

export default AddPickerForm;

AddPickerForm.defaultProps = {
  isSubmitting: false,
};

AddPickerForm.propTypes = {
  isSubmitting: PropTypes.bool,
  values: PropTypes.object,
  apiData: PropTypes.object,
  setFieldValue: PropTypes.func,

};
