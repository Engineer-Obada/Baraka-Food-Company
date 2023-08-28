import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AddNewCategory from './AddNewCategory';
import AppCard from '@crema/core/AppCard';
import { postDataApi } from '@crema/utility/APIHooks';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import { baseURL } from '@crema/services/ApiConfig';

const validationSchema = yup.object({
  nameCategory: yup.string().required(<IntlMessages id='validation.nameRequired' />),
  image: yup.mixed().required('Image is required'), // Added image field validation

});

const FormCategory = (props) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const {reCallAPI} = props;



  return (
    <AppCard  >
      <Formik
        validateOnChange={true}
        initialValues={{
          nameCategory: '',
          image: null, // Added image field
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          console.log('data',data);
        
          const newProduct = {
            ...data,
          };
          setSubmitting(true);

          postDataApi(`${baseURL}/api/category/add`,infoViewActionsContext,
            newProduct
           ).then(() => {
                reCallAPI();
            infoViewActionsContext.showMessage(
                      'category created successfully!',
                    );
                  })
                  .catch((error) => {
                    infoViewActionsContext.fetchError(error.message);
                  });
                  resetForm();
                  setSubmitting(false);
        
       }
      }    
        
      >
        {({values, setFieldValue}) => (
          <AddNewCategory
            values={values}
            setFieldValue={setFieldValue}
            userImage={values.image} // Pass the userImage value to the AddProductForm component
            setUserImage={(image) => setFieldValue('image', image)} // Update the userImage value when the user selects an image
          />
        )}
      </Formik>
      </AppCard>
  );
};

export default FormCategory;

// FormCategory.defaultProps = {
//   selectContact: null,
// };

FormCategory.propTypes = {
  selectContact: PropTypes.object,
  reCallAPI: PropTypes.func,
  setUserImage: PropTypes.func,
};
