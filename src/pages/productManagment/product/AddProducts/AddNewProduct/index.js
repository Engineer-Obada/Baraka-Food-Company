import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/utility/IntlMessages';
import AddProductForm from './AddProductForm';
import PropTypes from 'prop-types';
import AppDialog from '@crema/core/AppDialog';
// import {useAuthUser} from '@crema/utility/AuthHooks';/**/***************** */ */
import {postDataApi, putDataApi} from '@crema/utility/APIHooks';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import { baseURL } from '@crema/services/ApiConfig';

const validationSchema = yup.object({
  name: yup.string().required(<IntlMessages id='Please enter Name!' />),
  categorytId: yup.number().required(<IntlMessages id='Please enter Category!' />),
  weight: yup.number().required(<IntlMessages id='Please enter Weight!' />),
  price: yup.number().required(<IntlMessages id='Please enter price!' />),
  available: yup.boolean().required(<IntlMessages id='Please enter price!' />),
  image: yup.string().required(<IntlMessages id='Please enter price!' />),
});

const AddNewProduct = ({
  isAddProductOpen,
  onCloseAddTask,
  reCallAPI,
  productSlected,
}) => {
  // const {user} = useAuthUser();
  const infoViewActionsContext = useInfoViewActionsContext();

  
  const [userImage, setUserImage] = useState( '/assets/images/placeholder.jpg');

  useEffect(() => {
    setUserImage( '/assets/images/placeholder.jpg',);
  });


  return (
    <AppDialog
      dividers
      maxWidth='md'
      open={isAddProductOpen}
      onClose={() => onCloseAddTask()}
      title={<IntlMessages id='Add New Product' />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          image:productSlected ? productSlected.image :'#',
          name: productSlected ? productSlected.name :'',
          categorytId:productSlected ? productSlected.categorytId : 3,
          available: productSlected ? productSlected.available :false,
          weight:productSlected ? productSlected.weight : 0,
          price: productSlected ? productSlected.price: 0,
          // description:productSlected ? productSlected.description : '',
        
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          if(productSlected){
            const NewProduct = {
              ...data
            } 
            putDataApi(`${baseURL}/api/product/update/${productSlected.id}`,infoViewActionsContext,
              NewProduct
            ).then(()=>{
              reCallAPI();
              infoViewActionsContext.showMessage(
                'Product updated successfully!',
              );
            })
          }
          else{
          const NewProduct = {
            image:'#',
            ...data,
          };
          postDataApi(`${baseURL}/api/product/add`, infoViewActionsContext, 
         NewProduct,
          )
            .then(() => {
              reCallAPI();
              infoViewActionsContext.showMessage(
                'New product has been created successfully!',
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
        {({isSubmitting, values, setFieldValue}) => (
          <AddProductForm
            isSubmitting={isSubmitting}
            values={values}
            setFieldValue={setFieldValue}
            // reCallAPI={reCallAPI}
            userImage={userImage}
            setUserImage={setUserImage}
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
  productSlected: PropTypes.object
};
