import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import { putDataApi, useGetDataApi } from '@crema/utility/APIHooks';
import IntlMessages from '@crema/utility/IntlMessages';
import { baseURL } from '@crema/services/ApiConfig';
import AddPickerForm from './AddPickerForm';
import Shiper from 'pages/salesManagment/Shipers';
// import Shiper from 'pages/salesManagment/Shipers';

const validationSchema = yup.object({
  shippingId: yup.number().required(<IntlMessages id='Please Select Product' />),
  
});

const AddPicker = (props) => {
  const {
    // handleAddProductClose,
    orderId
  } = props;

  const infoViewActionsContext = useInfoViewActionsContext();
  const[{apiData:PickerData}] = useGetDataApi(`${baseURL}/api/shipping/viewShippingInWarehouse/${orderId}`,[])

  return (

    <>
      <Formik
        validateOnChange={true}
        initialValues={{
          shippingId:  1,
    
        }}
        validationSchema={validationSchema}
        onSubmit={ (data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          const NewItem = {
            ...data,
          };
      
            console.log('shippingId',data);
            putDataApi(`${baseURL}/api/shipping/assignOrderToShipping/${orderId}`, infoViewActionsContext,
            NewItem
            )
              .then(() => {
                // reCallAPI();
                infoViewActionsContext.showMessage(
                  'Item Added successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          // handleAddProductClose();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({values, setFieldValue}) => (
          <AddPickerForm
            values={values}
            setFieldValue={setFieldValue}
            orderId={orderId}
            PickerData={PickerData}
            // handleAddProductClose={handleAddProductClose}
          />
        )}
      </Formik>
          
      <Shiper PickerData={PickerData}/>
      </>
  );
};

export default AddPicker;

AddPicker.defaultProps = {
  selectedWarehouse: null,
};

AddPicker.propTypes = {
  isAddProduct: PropTypes.bool.isRequired,
  // handleAddProductClose: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
  orderId: PropTypes.number,
};
