import React from 'react'
import "./App.css"


function Recipies() {
  return (
    <>
      <div className='container recipe'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='row mt-5'>
              <div className='col-lg-6'>
                <div class="card"
                  style={{ width: "18rem;" }}>
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Dish Name</h5>
                    <p class="card-text">Description</p>
                    <a href="#" class="btn btn-primary">View Recipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 mt-5'>
            <h1 style={{
              fontWeight: "600",
              color: "rgb(65, 56, 46)",
              fontSize: "100px"
            }}>Taste the experience</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipies
