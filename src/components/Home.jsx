import React, { useState, useEffect } from 'react';
import './style.css';
import { SlArrowRight } from "react-icons/sl";
import { IoSchoolSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';






import teach7 from './images/img5.png';
import teach8 from './images/class8.png';
import teach9 from './images/cls9.jpeg';
import teach10 from './images/cls10.jpeg';
import teach11 from './images/cls11.jpeg';
import teach12 from './images/cls12.jpeg';
import photo from './images/photo.png';

const Home = () => {
  const [showFullText, setShowFullText] = useState(false);



  return (
    <>
    <div className='slid'>
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhqh5AuOi9fZGJZ6nLdRCiQKph7my5i4O1ZdHu4wANh3IFqbYS_cLWcvm5QHgLPNkBU0&usqp=CAU" alt="img" />
      <div className='slid2'>
       <img src={photo} alt="" /> 
      <h1>Brainiacs Institute</h1>
      <h4>Welocome To Our Institue</h4>
      <p>LET'S READ , LEARN , ACHIEVE SUCCESS & MAKE OUR FUTURE BETTER</p>

      </div>

    </div>
     
      <div className='container'>
      <ul>
        <li><img src="https://img.freepik.com/premium-vector/cute-kid-reading-book-children-day-illustration-sticker-kid-sitting-ground-read_917129-87.jpg" alt="" /></li>
        <li><img src="https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg" alt="" /></li>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYI3F__0wDHTWFDYOLm5FnuFcTpSsVewxJdfM3SZ80IkyXnF2ebkwZr4kAMZY-mC_wtKQ&usqp=CAU" alt="" /></li>
        <li><img src="https://www.shutterstock.com/image-illustration/happy-face-man-holding-chart-260nw-2341609141.jpg" alt="" /></li>

      </ul>

        <p>If there’s one thing that’s certain in life is that everything is constantly changing. You may suffer losses when it comes to loved ones, finances, belongings, and the like. But, the thing that you can never lose is your education.
          {showFullText || <span></span>}</p>
        {!showFullText && <button className="read-more" onClick={() => setShowFullText(true)}>Read More</button>}
        {showFullText && (<p>
          Perhaps you’ve heard this important lesson from the philosopher Maimonides before. The main message here is that you can do something for someone and it will be of help at the time, but if you don’t teach them how to do it themselves, they will forever be dependent. That’s one of the most beautiful things about teaching and education– once you share knowledge or obtain knowledge, there is power and capability gained forever.

          “Education’s purpose is to replace an empty mind with an open one.“ – Malcolm Forbes
            No matter where you come from or how you see the world, one of the benefits of obtaining an education will be that it will open your mind to new perspectives. For example, at the University of the People, students from over 200 countries and territories attend our online institution. That means that peers get to communicate and learn about different cultures and places without even having to leave home.
          A teacher has a major contribution in making the future of a child. From play group to graduation, I have changed many Schools and Colleges and thus it is obvious that I have encountered with different types of teachers. Some of them were very friendly and some were very strict, some only scolded us on our mistakes whereas some punished us severely.

          Apart from all the differences, there was something common in all of them. They all wanted to make us progress every time and be successful in our life. After our parents, only Teachers are those who want to see us successful.</p>
      )}

      </div>
      <div className='container2'>
        <img src={teach7} alt="img" />
        <div>
          <h2>Put Research Into Action</h2>
          <p>From the building blocks of reading to classroom strategies to creating inclusive classrooms — we’re here to help you understand everything you need to know to help young children grow as readers and writers.</p>
        </div>
      </div>

<div className='cards'>
  <h1>All Class Notes And content To Teach</h1>
  <div className="card">
  <div>
    <img src={teach8} alt="Placeholder" className="card-img" />
    <div className="card-content">
      <h3 className="card-title">8th Class</h3>
      <p className="card-text">Let's go to 8th class contents</p>
      <a href="https://www.extramarks.com/studymaterials/cbse/cbse-class-8-syllabus/" className="card-link"><SlArrowRight/></a>
    </div>
  </div>
</div>

  <div className="card">
  <div>
    <img src={teach9} alt="Placeholder" className="card-img" />
    <div className="card-content">
      <h3 className="card-title">9th Class</h3>
      <p className="card-text">Let's go to 9th class contents</p>
      <a href="https://byjus.com/cbse/cbse-class-9-syllabus/" className="card-link"><SlArrowRight/></a>
    </div>
  </div>
  </div>


  <div className="card">
  <div>
    <img src={teach10} alt="Placeholder" className="card-img" />
    <div className="card-content">
      <h3 className="card-title">10th Class</h3>
      <p className="card-text">Let's go to 10th class contents</p>
      <a href="https://byjus.com/cbse/cbse-class-10-syllabus/" className="card-link"><SlArrowRight/></a>
    </div>
  </div>
  </div>


  <div className="card">
  <div>
    <img src={teach11} alt="Placeholder" className="card-img" />
    <div className="card-content">
      <h3 className="card-title">11th Class</h3>
      <p className="card-text">Let's go to 11th class contents</p>
      <a href="11" className="card-link"><SlArrowRight/></a>
    </div>
  </div>
  </div>


  <div className="card">
  <div>
    <img src={teach12} alt="Placeholder" className="card-img" />
    <div className="card-content">
      <h3 className="card-title">12th Class</h3>
      <p className="card-text">Let's go to 12th class contents</p>
      <a href="https://byjus.com/cbse/cbse-class-12-syllabus/" className="card-link"><SlArrowRight/></a>
    </div>
  </div>
</div>
</div>

{/* our achievements */}
<div className='achieve1'>
  <h1>OUR ACHIEVEMENTS</h1>
  <div className='achieve2'>
    <div><IoSchoolSharp/><p>15 Schools</p></div> 
    <div><GiTeacher /><p>12 Teachers</p></div>
    <div><PiStudentFill /><p>300 Students</p></div>
    <div><FaAward /><p>30 Awards</p></div>
    <div><RiParentFill /><p>500 parents</p></div>
  </div>
</div>


<div>
  <h1>TESTIMONIALS</h1>
  <div>
  <div className="mainly">
  <ul className="cardshift">
    <li className="cards_item">
      <div className="cardd">
        <div className="card_imagee"><img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="mixed vegetable salad in a mason jar. "/></div>
        <div className="card_contentt">
          <h2 className="card_titlee">Goutam Patani</h2>
          <div className="card_textt">
            <p> I cannot teach anybody anything; I can only make them think.</p>
            <p>Knowledge is food for thought, and while food is perishable, thoughts persist. Teachers feed the whole world, many times over.</p>
            <p>Learning may begin in the classroom, but it certainly doesn’t end there. Teachers set up the signs for the road ahead that is life itself. They inspire students to learn wherever life may take them.</p>
          </div>
        </div>
      </div>
    </li>

    <li className="cards_item">
      <div className="cardd">
        <div className="card_imagee"><img src="https://www.verywellmind.com/thmb/pwEmuUJ6KO9OF8jeiQCDyKnaVQI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1187609003-73c8baf32a6a46a6b84fe931e0c51e7e.jpg" alt="a Reuben sandwich on wax paper. "/></div>
        <div className="card_contentt">
          <h2 classNames="card_titlee">Shivangi Sharma</h2>
          <div classNames="card_textt">
            <p>The carving and chipping away to create a masterpiece take years of dedication. Teachers help students discover their interests, passions, and ultimately themselves.</p>
            <p>If someone is going down the wrong road, he doesn’t need motivation to speed him up. What he needs is education to turn him around.</p>
          </div>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="cardd">
        <div className="card_imagee"><img src="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg" alt="A side view of a plate of figs and berries. "/></div>
        <div className="card_contentt">
          <h2 className="card_titlee">Rosan Kumar Kapur</h2>
          <div className="card_textt">
            <p>Maybe detention isn’t always the solution. For kids who can’t tell right from left or wrong from right, pointing them in the right direction may be more effective. For teachers, that means teaching life lessons that aren’t necessarily common knowledge.</p>
            <p>The dream begins, most of the time, with a teacher who believes in you, who tugs and pushes and leads you on to the next plateau, sometimes poking you with a sharp stick called truth.</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
  </div>
</div>

<div className='Join'>
  <h1>Do You Want To JoIn Us <SiHomeassistantcommunitystore /></h1>
  
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSevXC1HNrgRCH_6v9_1ikJn_nHSdxzYtchx_v21gA525hYWGg/viewform">Lets Get Started</a>

</div>

<div className='vist'>
  <p>Thank you for your <span>Visit </span>in our site</p>
</div>




    


  </>

  );
};

export default Home;
