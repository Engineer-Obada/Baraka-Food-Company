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
  created: yup.string().required(<IntlMessages id='Please enter date!' />),

});

const FormCategory = (props) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const {reCallAPI} = props;



  return (
    <AppCard  >
      <Formik
        validateOnChange={true}
        initialValues={{
          nameCategory: 'Apple',
          created_at:'2/2/2023',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          console.log('data');

          setSubmitting(true);
          const newCategory ={
            ...data
          }
          postDataApi(`${baseURL}/api/category/add`,infoViewActionsContext,
           newCategory
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
};
