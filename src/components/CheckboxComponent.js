import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const CheckboxComponent = (props) => {

    const {type, data} = props;

    console.log("checkbox: ", data);
    console.log("type: ", type);

    const [listOfToppingChoices, setListOfToppingChoices] = useState([]);

    const handleChange = (event) => {
        const {
            target: {
                name,
            },
        } = event;

        if (event.target.checked === false){
            console.log("unchecked fam! ", event.target.name);
            setListOfToppingChoices(prevState => prevState.filter(item => item !== event.target.name));
            return;
        }

        console.log("checkbox component newest topping clicked value: ", name);
        console.log('before adding topping choices: ', listOfToppingChoices);
        setListOfToppingChoices([
            ...listOfToppingChoices, name            
        ]);
        console.log('after adding topping choices: ', listOfToppingChoices);
    };

    useEffect(() => {
        props.input(listOfToppingChoices);
      }, [listOfToppingChoices, props]);

    return (
        <div>
            <FormLabel component="legend"> Choose your {type} </FormLabel>
        
            {
                data.map(item => (
                    <FormControlLabel
                    control={<Checkbox name={item} onChange={handleChange} />}
                    label={item}
                  />
                ))
            }
            

        </div>
    );
};


export default CheckboxComponent;
