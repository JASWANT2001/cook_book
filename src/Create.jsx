import React from 'react'
import "./App.css"
import { Formik, useFormik } from 'formik'

function Create() {
    const formik = useFormik({
        initialValues: {
            dishName: "",
            ingredients: "",
            preparation: "",
            type: "",
            image: "",
            instruction: "",
        },
        onSubmit(data) {
            console.log(data)
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='container mt-5 create'>
                    <div className='row'>
                        <div className='col-lg-12 d-flex justify-content-center b1'>
                            <p>Cook-Book</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 mt-3'>
                            <input type="text" className='form-control' placeholder='Dish Name'
                                name='dishName'
                                value={formik.values.dishName}
                                onChange={formik.handleChange} />
                            <span style={{ color: " red" }}></span>
                        </div>
                        <div className='col-lg-6 mt-3 '>
                            <input type="text" className='form-control' placeholder='Ingredients'
                                name='ingredients'
                                value={formik.values.ingredients}
                                onChange={formik.handleChange} />
                            <span style={{ color: " red" }}></span>
                        </div>
                        <div className='col-lg-6 mt-3'>
                            <input type="text" className='form-control' placeholder='Preparation to be done before Cooking'
                                name='preparation'
                                value={formik.values.preparation}
                                onChange={formik.handleChange} />
                            <span style={{ color: " red" }}></span>
                        </div>
                        <div className='col-lg-3 mt-3'>
                            <select className='col-lg-6'
                                name='type'
                                value={formik.values.type}
                                onChange={formik.handleChange}>
                                <option value="veg">Veg</option>
                                <option value="nonVeg">Non-Veg</option>
                            </select>
                            <span style={{ color: " red" }}></span>
                        </div>
                        <div className='col-lg-3 mt-3'>
                            <input type="file" id="imageInput" accept="image/*"
                                name='image'
                                value={formik.values.image}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className='col-lg-6 mt-3'>
                            <input type="text" className='form-control' placeholder='Instruction step by- step'
                                style={{
                                    height: "150px"
                                }}
                                name='instruction'
                                value={formik.values.instruction}
                                onChange={formik.handleChange} />
                            <span style={{ color: " red" }}></span>
                        </div>

                        <div className='col-lg-6 mt-4'>
                            <button className='btn btn-primary'>Submit</button>
                        </div>

                    </div>

                </div >
            </form>
        </>
    )
}

export default Create
