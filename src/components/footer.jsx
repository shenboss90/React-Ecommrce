import React from 'react'

const Footer = () => {
  return (
    <div>
    <section className='bg-dark text-light'>
            <div className='container pt-5 mt-5'>
            <div className="row">
                <div className="col-md">
                    <h3 style={{borderBottom:'4px double white'}}>Get In Touch</h3>
                    <p>Addr:123 New Street,Osogbo,Nigeria</p>
                    <p>Email:awofesobipeace@gmail.com</p>
                    <p>Phone:+234-811-6405-518</p>
                </div>
                <div className="col-md">
                <h3 style={{borderBottom:'4px double white'}}>Useful Links</h3>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className="col-lg">
                <h3 style={{borderBottom:'4px double white'}}>Quick Links</h3>
                <p>Home</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                   
                </div>
                <div className="col-lg">
                <h3 style={{borderBottom:'4px double white'}}>NewsLetters</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ullam, ex quaerat in illo eos aut explicabo labore molestiae delectus.</p>

                </div>
            </div>

            </div>
    </section>

    <footer className='bg-secondary'>
        <div className='container pt-4 pb-2 text-light text-center'>
            <h5>Design by shenboss</h5>

        </div>
       <p>&copy;2023 aseun50@yahoo.com</p>
    </footer>
   
</div>
   
  )
}

export default Footer