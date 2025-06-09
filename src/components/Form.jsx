import React, { useEffect, useState } from 'react'
import { FieldArray, FormikProvider, useFormik } from 'formik'
import '../style/form.css'
import { validationSchema } from '../helper/Validation'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../app/getApiSlice'

const Form = () => {
    const [isShow, setIsShow] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state => state.getData.getData)
    console.log(user)
    const initialValues = {
        name: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        altPhone: '',
        location:'',
        pincode:'',
        work: ['']
    }

    const handleMoreWork = () => {
        setIsShow(prev => !prev)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const { values, handleChange, handleBlur,errors,touched } = formik

    useEffect(() => {
        dispatch(getAllData())
    },[])

    return (
        <div className='form'>
            <form className='inner_form' onSubmit={formik.handleSubmit}>
                <div className='basic_fields'>
                    <div className='form_fields'>
                        <label>Name</label>
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
                    <div className='form_fields'>
                            <label>Location</label>
                            <div className='fields'>
                                <input type='text' name='location' placeholder='Enter Location' onBlur={handleBlur} value={values.state} onChange={handleChange} />
                                {touched.state && errors.state && <span className='error'>{errors.state}</span>}
                            </div>
                    </div>
                    <div className='form_fields'>
                            <label>Pincode</label>
                            <div className='fields'>
                                <input type='text' name='Pincode' placeholder='Enter Location' onBlur={handleBlur} value={values.state} onChange={handleChange} />
                                {touched.state && errors.state && <span className='error'>{errors.state}</span>}
                            </div>
                    </div>
                    {
                        isShow && <>
                        
                        <FormikProvider value={formik}>
                            <FieldArray name="work">
                                {({ push, remove }) => (
                                    <div className='form_work_fields'>
                                    {values.work.map((val, index) => (
                                        <div key={index} className='form_fields_work_input'>
                                         <label>Work</label>

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
                        </>
                    }
                    {
                        !isShow ? <div className='other_button_class'> <button type="button" onClick={handleMoreWork} className='other-btn'>Other</button></div>: ''
                    }

              
                </div>
                <button type='submit'>Submit</button>
            </form>
            <div>
           
            </div>
           
        </div>
    )
}

export default Form;