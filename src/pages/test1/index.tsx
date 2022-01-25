import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, Button } from "reactstrap"
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
    inputnumber : number | string
}
const labelInit = (value : number | string) => {
    let label : number | string = value;
    if(typeof  value === 'number') {
        label = value % 22 === 0 ? 'candybar' : value % 11 === 0 ? 'bar' : value % 2 === 0 ? 'candy' : value ;
    }
    return label;
}

const Index = () => {

    /*
    state handeling
    */
   const [inpNumber, setInpNumber] = useState<number | string>("");

    // validation
    const validation = useFormik({
        initialValues: {
            inputnumber: '',
        },
        validationSchema: Yup.object({
            inputnumber: Yup.string().required('Please Enter inputnumber'),
        }),
        onSubmit: (values: FormValues) => {
            setInpNumber(labelInit(values.inputnumber))
        },
    });
    return (
        <div className='p-3'>
            <Form
             noValidate
             onSubmit={(e: any) => {
                 e.preventDefault();
                 validation.handleSubmit();
                 return false;
             }}
            >
                <FormGroup>
                    <Label htmlFor="inputnumber">
                        Enter the Number
                    </Label>
                        <Input
                            id="inputnumber"
                            name="inputnumber"
                            placeholder="Please enter the number"
                            type="number"
                            value={validation.values.inputnumber || ''}
                            onBlur={validation.handleBlur}
                            onChange={validation.handleChange}
                            invalid={validation.errors.inputnumber ? true : false}
                        />
                        {
                            validation.errors.inputnumber ? 
                            <FormFeedback type="invalid">{validation.errors.inputnumber}</FormFeedback> : null
                        }
                </FormGroup>
                <Button type='submit'>Enter</Button>
            </Form>
            <div>
                The Label is : {inpNumber}
            </div>
        </div>
    );
}

export default Index;