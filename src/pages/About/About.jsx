import React from 'react';

const About = () => {
    return (
        <div className='d-sm-flex mt-5 justify-content-between'>
            <div className='row w-50'>
                <div className='col-sm-6 mb-2'>
                    <img src="https://live.staticflickr.com/65535/52919707055_5906b5be32_m.jpg" alt="" />
                </div>
                <div className='col-sm-6 mb-2'>
                    <img src="https://live.staticflickr.com/65535/52919299291_0510c1b8e1_m.jpg" alt="" />
                </div>
                <div className='col-sm-6'>
                    <img src="https://live.staticflickr.com/65535/52918682212_fba4101d73_m.jpg" alt="" />
                </div>
                <div className='col-sm-6'>
                    <img src="https://live.staticflickr.com/65535/52919759613_ce15fab23c_m.jpg" alt="" />
                </div>
            </div>
            <div className='w-50'>
                <h3 className='text-warning'>About us</h3>
                <h1>Welcome to <span><img src="https://live.staticflickr.com/65535/52919115192_510dffbf4f_q.jpg" alt="" /></span>  Cafe Chefs</h1>
                <p>“Welcome to Restoran” is a common greeting that customers receive when entering a restaurant, typically followed by a friendly welcome and an invitation to be seated.</p>
                <p>This greeting sets the tone for the dining experience, creating a welcoming and hospitable environment that encourages customers to relax and enjoy their meal.</p>
            </div>
        </div>
    );
};

export default About;