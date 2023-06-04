import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide' 
import TrustedBy from '../../components/trustedBy/TrustedBy'
import '../home/Home.scss'
import {cards,projects} from '../../data.js' 
import CatCard from '../../components/catCard/CatCard.jsx';
import ProjectCard from '../../components/projectCard/ProjectCard.jsx';

const Home = () => {
  return (
    <div className='home'>
      <Featured/>  
      <TrustedBy/>   
      <Slide slidesToShow={5} arrowsScroll={5}> 
        {  
          cards.map(card=>( 
            <CatCard item={card} key={card.id}/>
          ))
        }       
      </Slide>   
      <div className="features">
        <div className="container">
          <div className="item"> 
            <h1>A whole world of Freelance talent at your fingertips</h1>
            <div className="title"> 
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high quality service at every price point. No hourly rate, just project-based pricing</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>Find a freelancer to begin working on your project within minutes</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, everytime
            </div>
            <p>Always know what you'll pay upfront. Your payment isn't released untill you approve the work</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>Find high quality service at every price point. No hourly rate, just project-based pricing</p>
          </div>
          <div className="item"> 
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div> 

      <div className="features dark">
        <div className="container">
          <div className="item"> 
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experinece
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with onepowerful workspace
            </div> 
            <button>Explore fiverr Business</button>
          </div>
          <div className="item"> 
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={5} arrowsScroll={5}> 
        {  
          projects.map(card=>(
            <ProjectCard item={card} key={card.id}/>
          )) 
        }   
      </Slide>

    </div>
  )
}

export default Home
