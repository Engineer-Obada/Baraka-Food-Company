import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import AddProductForm from './AddProductForm';
import AppDialog from '@crema/core/AppDialog';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import {postDataApi} from '@crema/utility/APIHooks';
import IntlMessages from '@crema/utility/IntlMessages';
import { baseURL } from '@crema/services/ApiConfig';

const validationSchema = yup.object({
  quantity: yup.number().required(<IntlMessages id='Please Enter Quantity' />),
  productId: yup.number().required(<IntlMessages id='Please Select Product' />),
  
});

const AddProduct = (props) => {

  const {
    isAddProduct,
    handleAddProductClose,
    // reCallAPI,
    idWarehouse
  } = props;

  const infoViewActionsContext = useInfoViewActionsContext();


  return (
    <AppDialog
      fullHeight
      open={isAddProduct}
      onClose={() => handleAddProductClose()}
    >
      
      <Formik
        validateOnChange={true}
        initialValues={{
          quantity : 0,
          productId:  7,
    
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
            const NewProduct = {
              ...data,
            };
          console.log('NewProduct',NewProduct);

            postDataApi(`${baseURL}/api/stock/add/${idWarehouse}`, infoViewActionsContext, 
              NewProduct,
            )
              .then(() => {
                // reCallAPI();
                // infoViewActionsContext.showMessage(
                //   'Warehouse created successfully!',
                // );
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
          <AddProductForm
            values={values}
            setFieldValue={setFieldValue}
            handleAddProductClose={handleAddProductClose}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default AddProduct;

AddProduct.defaultProps = {
  selectedWarehouse: null,
};

AddProduct.propTypes = {
  isAddProduct: PropTypes.bool.isRequired,
  handleAddProductClose: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
  idWarehouse: PropTypes.number,
};
