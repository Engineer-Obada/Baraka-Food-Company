import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import { putDataApi, useGetDataApi } from '@crema/utility/APIHooks';
import IntlMessages from '@crema/utility/IntlMessages';
import { baseURL } from '@crema/services/ApiConfig';
import AddPickerForm from './AddPickerForm';
import Pickerjob from 'pages/salesManagment/Pickers';

const validationSchema = yup.object({
  pickerId: yup.number().required(<IntlMessages id='Please Select Product' />),
  
});

const AddPicker = (props) => {
  const {
    // handleAddProductClose,
    orderId
  } = props;
  const[{apiData:PickerData}] = useGetDataApi(`${baseURL}/api/picker/showPickerInWarehouse/${orderId}`,[])

  const infoViewActionsContext = useInfoViewActionsContext();

  return (

    <>
      <Formik
        validateOnChange={true}
        initialValues={{
          pickerId:  1,
    
        }}
        validationSchema={validationSchema}
        onSubmit={ (data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
            const NewItem = {
              ...data,
            };
        
            
            putDataApi(`${baseURL}/api/order/assignOrderToPicker/${orderId}`, infoViewActionsContext,
            NewItem,
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
      {/* {console.log('PickerData',PickerData)} */}
      <Pickerjob PickerData={PickerData} />
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
  PickerData: PropTypes.object,
};
