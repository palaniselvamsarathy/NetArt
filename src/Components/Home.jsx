import React from 'react'

const Home = () => {
  return (
    <div className='home-comp'>
      <div className="row">
        <div className="col-12 img-tag">
          <img src="./images/logo.png" className="logo-img" alt="Logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img src="./images/1.png" className="home-img" alt="First" />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="row">
            <div className="col-md-12">
              <p><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
              <ul>
                <li><p> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p></li>
                <li><p> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p></li>
              </ul>
            </div>
            <div className="col-md-12">
              <img src="./images/2.png" className="two-img" alt="Second" />
            </div>
            <div className="col-md-12">
              <p>Government of India has awarded the <b> "National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
