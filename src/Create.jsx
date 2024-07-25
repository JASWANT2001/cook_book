import React from 'react'
import "./App.css"

function Create() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-center c1'>
                        <h3>Cook-Book</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mt-3'>
                        <input type="text" className='form-control' placeholder='Dish Name' />
                        <span style={{ color: " red" }}></span>
                    </div>
                    <div className='col-lg-6 mt-3 '>
                        <input type="text" className='form-control' placeholder='Ingredients' />
                        <span style={{ color: " red" }}></span>
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <input type="text" className='form-control' placeholder='Preparation to be done before Cooking' />
                        <span style={{ color: " red" }}></span>
                    </div>
                    <div className='col-lg-3 mt-3'>
                        <select className='col-lg-6'>
                            <option value="veg">Veg</option>
                            <option value="nonVeg">Non-Veg</option>
                        </select>
                        <span style={{ color: " red" }}></span>
                    </div>
                    <div className='col-lg-3 mt-3'>
                        <input type="file" id="imageInput" accept="image/*" />
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <input type="text" className='form-control' placeholder='Instruction step by- step'
                            style={{
                                height: "150px"
                            }} />
                        <span style={{ color: " red" }}></span>
                    </div>

                    <div className='col-lg-6 mt-4'>
                        <button className='btn btn-primary'>Submit</button>
                    </div>

                </div>

            </div >
        </>
    )
}

export default Create
