import React from 'react'

const Footer = () => {
  return (
    <div className='footer-parent mt-5'>
        <div className="col-12 footer-main-div">
            <h4><b>C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVER SEGMENTS</b></h4>
            <h6 className='footer-content'> 
                <div>
                    CHEMICALS & PROCESS <span>| </span>
                    POWER <span>| </span> 
                    WATER & WASTE WATER <span>| </span> 
                    OILS & GAS <span>| </span>
                    PHARMA <span>| </span>
                    SUGARS & DISTILLERIES <span>| </span>
                    PAPER & PULP <span>| </span>
                    MARINE & DEFENCE <span>| </span>
                    METAL & MINING <span>| </span>
                    FOOD & BEVERAGE <span>| </span>
                </div>
                <div>
                    PETRCHEMICAL & REFINERIES <span>| </span>
                    SOLAR <span>| </span>
                    BUILDING <span>| </span>
                    HVAC <span>| </span>
                    FIRE FIGHTING <span>| </span>
                    AGRICULTURE & RESIDENTAL
                </div>
            </h6>
        </div>
        <div></div>
        <div className="col-12 red-div">
            <div className='img-div'>
                {/* <img src="./images/tf2.jpg" alt="TollFree" /> */}
                {/* <box-icon name='phone' color='white' ></box-icon>
                 */}
                <i class='bx bx-phone'></i>
                <h5>Toll free <b>1800 200 1234</b></h5>
            </div>
            <div className='img-div'>
                {/* <img src="./images/fb.png" alt="Facebook" /> */}
                <i class='bx bxl-facebook-circle' ></i>
                {/* <box-icon name='facebook' type='logo' color='whi' ></box-icon>
                 */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg> */}
                <h5><a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a></h5>
            </div>
            <div className='img-div'>
                <img src="./images/ws.jpg" alt="Website" />
                <h5><a href="www.crigroups.com">www.crigroups.com</a></h5>
            </div>
        </div>
    </div>
    )
}

export default Footer
