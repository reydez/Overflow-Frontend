import React from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, FormHelperText, Radio } from '@mui/material'
const PostFormMui = () => {
    return (
        <FormControl
            component="fieldset"
            variant="filled"
            disabled
        >
            <FormLabel
                component="legend"
                htmlFor="residence-type-radio"
            >
                Residence
            </FormLabel>
            <RadioGroup
                aria-label="residence"
                id="residence-type-radio"
                defaultValue="homeowner"
                name="radio-buttons-group"
            // onChange={handleRadioChange}
            >
                <FormControlLabel
                    value="homeowner"
                    control={<Radio />}
                    label="Homeowner"
                />
                <FormControlLabel
                    value="renter"
                    control={<Radio />}
                    label="Renter"
                />
                <FormControlLabel
                    value="nomad"
                    control={<Radio />}
                    label="Nomad" />
            </RadioGroup>
            <FormHelperText>Disabled</FormHelperText>
        </FormControl>
    )
}

export default PostFormMui