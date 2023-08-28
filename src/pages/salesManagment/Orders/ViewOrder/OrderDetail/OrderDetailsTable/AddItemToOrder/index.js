import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import AddItemForm from './AddItemForm';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import {postDataApi} from '@crema/utility/APIHooks';
import IntlMessages from '@crema/utility/IntlMessages';
import { baseURL } from '@crema/services/ApiConfig';

const validationSchema = yup.object({
  productId: yup.number().required(<IntlMessages id='Please Select Product' />),
  
});

const AddItem = (props) => {

  const {
    handleAddProductClose,
    reCallAPI,
    orderId
  } = props;

  const infoViewActionsContext = useInfoViewActionsContext();


  return (

      
      <Formik
        validateOnChange={true}
        initialValues={{
          productId:  7,
    
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
            const NewProduct = {
              ...data,
            };
            postDataApi(`${baseURL}/api/order/addItem/`, infoViewActionsContext, orderId,/*******/
              NewProduct,
            )
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Item Added successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          handleAddProductClose();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({values, setFieldValue}) => (
          <AddItemForm
            values={values}
            setFieldValue={setFieldValue}
            handleAddProductClose={handleAddProductClose}
          />
        )}
      </Formik>

  );
};

export default AddItem;

AddItem.defaultProps = {
  selectedWarehouse: null,
};

AddItem.propTypes = {
  isAddProduct: PropTypes.bool.isRequired,
  handleAddProductClose: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
  orderId: PropTypes.number,
};
