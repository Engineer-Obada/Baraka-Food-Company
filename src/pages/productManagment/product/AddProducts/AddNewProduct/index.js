import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/utility/IntlMessages';
import AddProductForm from './AddProductForm';
import PropTypes from 'prop-types';
import AppDialog from '@crema/core/AppDialog';
import { postDataApi, putDataApi } from '@crema/utility/APIHooks';
import { useInfoViewActionsContext } from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import { baseURL } from '@crema/services/ApiConfig';

const validationSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  categorytId: yup.number().required(),
  weight: yup.number().required(),
  price: yup.number().required(),
  available: yup.boolean().required(),
  image: yup.mixed().required('Image is required'), // Added image field validation
});

const AddNewProduct = ({
  isAddProductOpen,
  onCloseAddTask,
  reCallAPI,
  productSelected,
}) => {
  const infoViewActionsContext = useInfoViewActionsContext();

  return (
    <AppDialog
      onClose={onCloseAddTask}
      title={<IntlMessages id="addNewProduct" />}
      open={isAddProductOpen}
      maxWidth='md'
    >
      <Formik
        initialValues={{
          name: '',
          description: '',
          categorytId: '',
          weight: '',
          price: '',
          available: 1,
          image: null, // Added image field
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          if (productSelected) {
            const updatedProduct = {
              ...values,
            };
            putDataApi(
              `${baseURL}/api/product/update/${productSelected.id}`,
              infoViewActionsContext,
              updatedProduct
            )
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Product updated successfully!'
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          } else {
            const newProduct = {
              ...values,
            };
            postDataApi(
              `${baseURL}/api/product/add`,
              infoViewActionsContext,
              newProduct
            )
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'New product has been created successfully!'
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          }

          onCloseAddTask();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <AddProductForm
            isSubmitting={isSubmitting}
            values={values}
            setFieldValue={setFieldValue}
            userImage={values.image} // Pass the userImage value to the AddProductForm component
            setUserImage={(image) => setFieldValue('image', image)} // Update the userImage value when the user selects an image
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default AddNewProduct;

AddNewProduct.propTypes = {
  isAddProductOpen: PropTypes.bool.isRequired,
  onCloseAddTask: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
  selectedDate: PropTypes.string,
  productSelected: PropTypes.object,
};