import React from 'react'
// import images from './images'
import './About.css'
// import footer from './Home'
const About = () => {
  return (
    <>
    <div className='cls1'>
    <p className='clsp1'>Who we are...</p>
    <h1 className='clsp2'>Engaging, inspiring, enlightening.</h1>
    </div>
    <div className='cls2'>
      <h1>About Us</h1>
      <p>Teaching is engaging, as it captivates learners' attention and involves them actively. It is inspiring, as it motivates and encourages students to learn and grow. Teaching is enlightening, as it illuminates new concepts and ideas, expanding students' knowledge. It is impactful, shaping minds and shaping the future. Ultimately, teaching is a rewarding experience that leaves a lasting impression on both teachers and students alike.</p>
    </div>

    <div className="container1">
    <div className="item">
        <img src="https://as1.ftcdn.net/v2/jpg/02/87/45/00/1000_F_287450059_Y0kZWAxy0sD6HwgpYjhYwbSB8pRij717.jpg" alt="img" />
        <p>It is at school that I learn so much. I learn so many different subjects. There are many interesting co-curricular activities too. I also participate in extra-curricular activities like music, dance, art, craft and plays. I also get the opportunity to take part in sports and games on the sports grounds at school. I am part of the school’s volleyball team. Our teachers teach us with a great deal of care and patience, and I am very grateful to the teachers. At school I have many good friends. We study, play and eat together. I love my school very much.</p>
    </div>
    <div className="item">
        <p>The canteen, often the heart of any institution or workplace, serves as a hub for social interactions and sustenance. It is a space where individuals gather to refuel both body and mind, offering a variety of meals and snacks to cater to diverse tastes and dietary needs. Beyond its practical function, the canteen fosters a sense of community, providing a place for people to connect, unwind, and share moments of camaraderie. With its lively atmosphere and diverse offerings, the canteen plays a vital role in enhancing the overall experience of the institution or workplace, serving as a place not just to eat but also to socialize and relax.</p>
        <img src="https://images.unsplash.com/photo-1529022805552-1c88a713c1c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FudGVlbnxlbnwwfHwwfHx8MA%3D%3D" alt="img" />
    </div>
    <div className="item">
        <img src="https://static.toiimg.com/thumb/msid-98248575,width-1280,height-720,resizemode-4/98248575.jpg" alt="" />
        <p>The library is a sanctuary of knowledge, a place where the past, present, and future converge on shelves lined with books. It is a haven for the curious, offering a wealth of information waiting to be discovered. Within its walls, minds are enriched, imaginations are sparked, and perspectives are broadened. The library is a symbol of learning and education, providing resources for research, study, and contemplation. It stands as a beacon of enlightenment in the community, welcoming all who seek to explore, learn, and grow.</p>
    </div>
    <div className="item">
        <p>The playground is a vibrant and bustling space where children's laughter fills the air. It's a place of joy and excitement, where kids can run, jump, and play freely. The playground is a melting pot of imagination and creativity, with children turning ordinary equipment into spaceships, castles, and forts. It's a place where friendships are formed and social skills are developed, as children learn to share, take turns, and communicate with each other. The playground is not just a physical space but also a place where memories are made, adventures are had, and childhood is truly cherished.</p>
        <img src="https://i.pinimg.com/originals/42/22/31/4222311cca56615347841ab0f02d9fd3.jpg" alt="" />
    </div>

    <a className='see' href="https://thebrainiacacademy.in/" style={{padding:'30px', fontSize:'30px'}}>Learn more about our Institute..</a>
</div>


<div className="responsive-container-block outer-container">
  <div className="responsive-container-block inner-container">
    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
      <p className="text-blk heading-text">
        Meet our  team
      </p>
      <p className="text-blk sub-heading-text">
      Our team is a diverse group of individuals, each bringing unique skills and experiences to the table. We are united by our passion for excellence and our commitment to delivering the best results for our clients. From creative thinkers to analytical minds, our team members complement each other, ensuring that we approach every project from multiple perspectives. Together, we strive to achieve our goals, support each other's growth, and create a positive impact on the world around us.</p>
    </div>
    <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card1">
          <img className="card1-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
          <p className="text-blk name">
            Gustavo Workman
          </p>
          <p className="text-blk position">
            CEO
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card1">
          <img className="card1-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg"/>
          <p className="text-blk name">
            Gustavo Workman
          </p>
          <p className="text-blk position">
            CEO
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card1">
          <img className="card1-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg"/>
          <p className="text-blk name">
            Gustavo Workman
          </p>
          <p className="text-blk position">
            CEO
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card1">
          <img className="card1-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
          <p className="text-blk name">
            Gustavo Workman
          </p>
          <p className="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default About
