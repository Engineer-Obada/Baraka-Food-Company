import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppDialog from '@crema/core/AppDialog';
// import {useAuthUser} from '@crema/utility/AuthHooks';/**/***************** */ */
import { putDataApi} from '@crema/utility/APIHooks';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import RejectOrderForm from './RejectOrderForm';
import { baseURL } from '@crema/services/ApiConfig';

const validationSchema = yup.object({
  reason: yup.string().required(<IntlMessages id='Reason of Reject is required!' />),
  
});

const RejectOrder = ({
  orderIdReject,
  isOpenReject,
  onClickCloseReject,
  reCallAPI,
 
}) => {
  // const {user} = useAuthUser();
  const infoViewActionsContext = useInfoViewActionsContext();

 

  return (
    <AppDialog
      dividers
      maxWidth='md'
      open={isOpenReject}
      onClose={() => onClickCloseReject()}
      title={<IntlMessages id='Reject Order' />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          reason:'',
        
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          const ReasonRejected = {
            orderIdReject,
            ...data,
          };
          console.log("Reason",ReasonRejected);
          putDataApi(`${baseURL}/api/order/reject/`, infoViewActionsContext, 
          ReasonRejected,
          )
            .then(() => {
              infoViewActionsContext.showMessage(
                'Customer has been Rejected successfully!',
              );
            })
            .catch((error) => {
              infoViewActionsContext.fetchError(error.message);
            });

            onClickCloseReject();
          resetForm();
          setSubmitting(false);
        }}
      
      >
        {({isSubmitting, values, setFieldValue}) => (
          <RejectOrderForm
            isSubmitting={isSubmitting}
            values={values}
            setFieldValue={setFieldValue}
            reCallAPI={reCallAPI}
          />
        )}
      </Formik>
      
    </AppDialog>
  );
};

export default RejectOrder;

RejectOrder.propTypes = {
  isOpenReject: PropTypes.bool.isRequired,
  onClickCloseReject: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
  orderIdReject: PropTypes.number,
};
