import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppDialog from '@crema/core/AppDialog';
// import {useAuthUser} from '@crema/utility/AuthHooks';/**/***************** */ */
import {postDataApi} from '@crema/utility/APIHooks';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import { baseURL } from '@crema/services/ApiConfig';
import SendNoteForm from './SendNoteForm';

const validationSchema = yup.object({
  note: yup.string().required(<IntlMessages id='Note is required!' />),
  
});


const SendNote = ({
  isOpenNote,
  onClickCloseNote,
  reCallAPI,
  productIdNote,
  orderIdNote,
}) => {
  // const {user} = useAuthUser();
  const infoViewActionsContext = useInfoViewActionsContext();

 

  return (
    <AppDialog
      dividers
      maxWidth='md'
      open={isOpenNote}
      onClose={() => onClickCloseNote()}
      title={<IntlMessages id='Send Note To Customer' />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          message:'',
        
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          console.log('dataMessage',data);
          postDataApi(`${baseURL}/api/order/note/${orderIdNote}/${productIdNote}`, infoViewActionsContext, /*** */
             {
              message:data.note
             }
          )
            .then(() => {
              infoViewActionsContext.showMessage(
                'Note Send To Customer  successfully!',
              );
            })
            .catch((error) => {
              infoViewActionsContext.fetchError(error.message);
            });

            onClickCloseNote();
          resetForm();
          setSubmitting(false);
        }}
      
      >
        {({isSubmitting, values, setFieldValue}) => (
          <SendNoteForm
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

export default SendNote;

SendNote.propTypes = {
  isOpenNote: PropTypes.bool.isRequired,
  onClickCloseNote: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
  customerSelectedReject: PropTypes.object,
  orderIdNote: PropTypes.number,
  productIdNote: PropTypes.number,
};
