import React from 'react'
import { FieldArray, FormikProvider, useFormik } from 'formik'
import '../style/form.css'
import { validationSchema } from '../helper/Validation'

const Form = () => {
    const initialValues = {
        name: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        altPhone: '',
        work: ['']
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const { values, handleChange, handleBlur,errors,touched } = formik

    return (
        <div className='form'>
            <form className='inner_form' onSubmit={formik.handleSubmit}>
                <div className='basic_fields'>
                    <div className='form_fields'>
                        <label>N claame</label>
                        <div className='fields'>
                            <input type='text' name='name' placeholder='Enter name' onBlur={handleBlur} value={values.name} onChange={handleChange} />
                            {touched.name && errors.name && <span className='error'>{errors.name}</span>}
                        </div>
                    </div >
                    <div className='form_fields' >
                        <label>Phone</label>
                        <div className='fields'>
                            <input type='text' name='phone' placeholder='Enter phone' value={values.phone} onBlur={handleBlur} onChange={handleChange} />
                            {touched.phone && errors.phone && <span className='error'>{errors.phone}</span>}
                        </div>
                        
                    </div>
                    <div className='form_fields' >
                        <label>Alt Phone</label>
                        <div className='fields'>
                            <input type='text' name='altPhone' placeholder='Enter Alternate number' onBlur={handleBlur} value={values.altPhone} onChange={handleChange} />
                        </div>
                        
                    </div>
                </div>
                <div className='address_fields'>
                    <div className='form_fields'>
                        <label>Address</label>
                        <div className='fields'>
                            <input type='text' name='address' placeholder='Enter Address' onBlur={handleBlur} value={values.address} onChange={handleChange} />
                            { touched.address && errors.address && <span className='error'>{errors.address}</span>}
                        </div>
                    </div>
                    <div className='form_fields'>
                        <label>City</label>
                        <div className='fields'>
                            <input type='text' name='city' placeholder='Enter City' onBlur={handleBlur} value={values.city} onChange={handleChange} />
                            {touched.city && errors.city && <span className='error'>{errors.city}</span>}
                        </div>
                    </div >
                    <div className='form_fields'>
                        <label>State</label>
                        <div className='fields'>
                            <input type='text' name='state' placeholder='Enter State' onBlur={handleBlur} value={values.state} onChange={handleChange} />
                            {touched.state && errors.state && <span className='error'>{errors.state}</span>}
                        </div>
                        
                    </div>
                </div>
                <div className='work_fields'>
                <label>Work</label>
                <FormikProvider value={formik}>
                    <FieldArray name="work">
                        {({ push, remove }) => (
                            <div className='form_work_fields'>
                            {values.work.map((val, index) => (
                                <div key={index} className='form_fields_work_input'>
                                    <div className='moreworkinput'>
                                        <input
                                            type='text'
                                            name={`work[${index}]`}
                                            placeholder='Enter work'
                                            value={values.work[index]}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                  
                                    {index > 0 && (
                                        <button type="button" onClick={() => remove(index)} className='remove-btn'>-</button>
                                    )}
                                      </div>
                                    {touched.work?.[index] && errors.work?.[index] && (
                                            <span className='error'>{errors.work[index]}</span>
                                        )}
                                </div>
                            ))}
                            <button type="button" onClick={() => push('')} className='add-btn'>+ Add Work</button>
                            </div>
                        )}
                        </FieldArray>
                    </FormikProvider>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;