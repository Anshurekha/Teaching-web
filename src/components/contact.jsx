import React from 'react'
import './contact.css'
import { FaAddressBook } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";




const Contact = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center', fontFamily: 'cursive', color: 'darkgreen' }}>GET IN TOUCH</h1>

            <div className='con2'>
                <img src="https://images.pexels.com/photos/19891092/pexels-photo-19891092/free-photo-of-the-word-contact-is-spelled-out-in-scrabble-letters.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p>The contact page is a crucial component of any website, serving as a bridge between the business and its audience. It provides visitors with a direct means of communication, allowing them to ask questions, provide feedback, or inquire about products or services. A well-designed contact page is clear and user-friendly, featuring a contact form with fields for name, email, and message, as well as additional information such as phone numbers, address, and social media links. By making it easy for visitors to reach out, the contact page plays a vital role in building trust and fostering meaningful connections with the audience.</p>

            </div>
            <div className='con1'>
                <div className='cn'>
                    <h1><FaAddressBook style={{ backgroundColor: 'grey', height: '60px', width: 'auto', padding: '5px' }} /></h1>
                    <h1>Address</h1>
                    <div className='c1'>
                        <h3> plot-123,</h3>
                        <h3> city-khannagar</h3>
                        <h3> po-khannagra</h3>
                        <h3> pin-5000</h3>
                        <h3> dist-Navi</h3>
                        <h3> state-Mumbai,</h3>
                        <h3> India</h3>
                    </div>
                </div>
                <div >
                    <h1><IoIosContact style={{ backgroundColor: 'grey', height: '60px', width: 'auto', padding: '5px' }} /></h1>
                    <h1>Contact</h1>
                    <div className='c2'>
                        <h3>contact info</h3>
                        <h3>ph1-4678235580</h3>
                        <h3>ph2-8976543210</h3>
                        <h3>ph3-9807654321</h3>
                        <h3>tel-9087-67777</h3>
                    </div>
                </div>
                <div>
                    <h1><MdEmail style={{ backgroundColor: 'grey', height: '60px', width: 'auto', padding: '5px' }} /></h1>
                    <h1>Email</h1>
                    <div className='c3'>
                        <h3>sfgakssk@123.com</h3>
                        <h3>sgfdugdwgg@5616t6.ac.in</h3>
                        <h3>sgxfjwv.37263@hjwshjh.ac.in</h3>

                    </div>
                </div>
            </div>

            <div  className='con4'>
                <div className='text' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo rem quidem? Reprehenderit libero numquam magni quis. Dolore officiis quam minus fugiat eius molestiae labore. Quasi assumenda vero tempora, est nam, accusamus officia vitae animi minus earum alias! Libero quibusdam inventore aut dignissimos error minima nam, perferendis culpa veritatis! Obcaecati nulla ullam sunt autem, quia atque voluptatem, repudiandae veniam expedita ad, animi cumque odio ipsum non voluptate quisquam reprehenderit temporibus vero dolorem necessitatibus? Illo consectetur vitae temporibus totam magnam voluptas deleniti eos labore aliquam unde, odit tenetur. Veritatis nobis magnam, quam adipisci a sit necessitatibus nam assumenda ut voluptatem fuga?</p>
                </div>
                <div className='message' >
                <h1  >Message us</h1>
                <img src="https://media.istockphoto.com/id/1217600996/photo/contact-us-email-phone-communication-support-on-touch-screen.jpg?s=612x612&w=0&k=20&c=VuN7xQh4G3VwPI0IfsySCTri8_HgEFMQOcYv1OIPX2c=" alt="" />

                </div>


            </div>



        </>
    )
}

export default Contact
