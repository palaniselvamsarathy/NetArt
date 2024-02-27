import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img src="your_image_url_here" className="img-fluid" alt="Your Image" />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h2>Heading</h2>
              <p>Description content goes here</p>
            </div>
            <div className="col-md-12">
              <img src="your_image_url_here" className="img-fluid" alt="Your Image" />
            </div>
            <div className="col-md-12">
              <p>Another description content goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
