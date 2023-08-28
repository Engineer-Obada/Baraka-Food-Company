import React from 'react';
import { Box, Button} from '@mui/material';
import { Form} from 'formik';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import {Fonts} from 'shared/constants/AppEnums';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';




const AddNewCategory = (props) => {
  const { setUserImage } = props;




  return (
    <Form noValidate autoComplete='off'>
    
    <AppTextField
          name="image"
          type="file"
          accept="image/*"
          inputProps={{ onChange: (event) => setUserImage(event.target.files[0]) }}
        />
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
            <IntlMessages id='categoryDetails' />
          </Box>

          <div>
            <AppTextField
              sx={{
                width: '100%',
                mb: {xs: 4, xl: 6},
              }}
              variant='outlined'
              label={<IntlMessages id='nameCategory' />} // nameCategory
              name='nameCategory'
            />
        
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

export default AddNewCategory;

AddNewCategory.propTypes = {
  values: PropTypes.object.isRequired,
  userImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  setUserImage: PropTypes.func,
  setFieldValue: PropTypes.func,

};
