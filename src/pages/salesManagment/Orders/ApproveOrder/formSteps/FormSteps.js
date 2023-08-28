import { string, object } from "yup";
import { Formikstepers } from "./formikSteper/Formikstepers";
import { Step1 } from "./steps/Step1/Step1";
import { Step3 } from "./steps/Step3/Step3";
import { Step2 } from "./steps/Step2/Step2";
import PropTypes from 'prop-types';

export function FormSteps({orderId}) {
    const sleep = (time) => new Promise((acc) => setTimeout(acc, time));
    return (

        <Formikstepers
        validationSchema={object({
          description:string(),
        })}
        initialValues={{
          note: '',
        }}
        onSubmit={ async (values) => {
          try{
            await sleep(3000);
            console.log(values)
          }
          catch(error){
            console.error('Error submitting form:', error);
          }
        }}
      >
          <Step1 orderId={orderId} key={1}/>
          <Step3 orderId={orderId} key={2}/>
          <Step2 key={3}/>
      </Formikstepers>
    
    );
  }
  FormSteps.propTypes = {
    orderId: PropTypes.number,
   
  };
  