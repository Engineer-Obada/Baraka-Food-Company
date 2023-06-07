import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import AddWarehouseForm from './AddWarehouseForm';
import AppDialog from '@crema/core/AppDialog';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import {postDataApi, putDataApi} from '@crema/utility/APIHooks';
import IntlMessages from '@crema/utility/IntlMessages';
import { baseURL } from '@crema/services/ApiConfig';

const validationSchema = yup.object({
  name: yup.string().required(<IntlMessages id='Please Enter Name' />),
  address: yup.string().required(<IntlMessages id='Please Enter Address' />),
  city: yup.string().required(<IntlMessages id='Please Enter City' />),
  
});

const CreateWarehouse = (props) => {

  const {
    isAddWarhouse,
    handleAddContactClose,
    selectedWarehouse,
    onUpdateContact,
    reCallAPI,
  } = props;

  const infoViewActionsContext = useInfoViewActionsContext();


  return (
    <AppDialog
      fullHeight
      open={isAddWarhouse}
      onClose={() => handleAddContactClose()}
    >
      
      <Formik
        validateOnChange={true}
        initialValues={{
          name: selectedWarehouse ? selectedWarehouse.name : '',
          address: selectedWarehouse ? selectedWarehouse.address : '',
          city: selectedWarehouse ? selectedWarehouse.city : '',
    
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          if (selectedWarehouse) {
            const newContact = {
              ...data,
            };
            putDataApi(`${baseURL}/api/warehouse/update/${selectedWarehouse.id}`, infoViewActionsContext, 
               newContact,
            )
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Warehouse updated successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
            onUpdateContact(newContact);
          } else {
            const newContact = {
              ...data,
            };
            postDataApi(`${baseURL}/api/warehouse/add`, infoViewActionsContext, 
              newContact,
            )
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Warehouse created successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          }
          handleAddContactClose();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({values, setFieldValue}) => (
          <AddWarehouseForm
            values={values}
            setFieldValue={setFieldValue}
            handleAddContactClose={handleAddContactClose}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default CreateWarehouse;

CreateWarehouse.defaultProps = {
  selectedWarehouse: null,
};

CreateWarehouse.propTypes = {
  isAddWarhouse: PropTypes.bool.isRequired,
  handleAddContactClose: PropTypes.func.isRequired,
  selectedWarehouse: PropTypes.object,
  onUpdateContact: PropTypes.func,
  reCallAPI: PropTypes.func,
};
