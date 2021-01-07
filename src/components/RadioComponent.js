import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const RadioComponent = (props) => {

    const {data, type} = props;

    console.log("data: ", data);
    console.log("type: ", type);

    const handleChange = (event) => {
        const {
            target: {
                value,
            },
        } = event;
        console.log("radio component value: ", value);
        props.input(value);
      };

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend"> Choose your {type} </FormLabel>
                <RadioGroup onChange={handleChange}>
                {
                    data.map(item => (
                        <FormControlLabel value={item} control={<Radio />} label={item} />    
                    ))
                }

                </RadioGroup>
            </FormControl>

        </div>
    );
};


export default RadioComponent;
