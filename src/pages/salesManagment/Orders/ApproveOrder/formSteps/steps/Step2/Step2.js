import AppTextField from "@crema/core/AppFormComponents/AppTextField";
import {  Step } from "@mui/material";

import { Fonts } from "shared/constants/AppEnums";

export function Step2() {
    return (
      <div>
        <Step label="Note">
        <AppTextField
            sx={{
              width: '100%',
              fontWeight: Fonts.LIGHT,
              marginBottom: 5,
              marginTop:10,
              '& .css-1rpt010-MuiInputBase-input-MuiOutlinedInput-input':{
                height:200
              }
            }}
            variant='outlined'
            name='note'
            placeholder='Send Note' 
        />
        </Step>
        </div>
    );
  }