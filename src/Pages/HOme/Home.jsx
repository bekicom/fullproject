import React from 'react'

import imgHeader from "../HOme/img/Illustration.png"
import imgNumber from "../HOme/img/pointer 1.png"
import imgProjects from "../HOme/img/Our Work.png"
import imgUser from "../HOme/img/Icon.png"
// import imgClients from "../HOme/img/Testimonials.png"
// import imgEnd from "../HOme/img/FAQ.png"
// import imgEnd1 from "../HOme/img/Contact form.png"
// import imgEnd2 from "../HOme/img/Blog.png"

import "../HOme/home.css"
export default function Home() {
  return (
    <div className='wrapper'>

      <div className="main_holder">
      <div className="txt"> 
       <h1>Building stellar websites for early startups</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <div className="btns">
          <button className='bg_yellow'>View our work</button>
          <button className='bg_non'>View Pricing</button>
        </div>
        </div>
        <div className="img_holder">
          <img src={imgHeader} alt="" />
        </div>
      </div>

      <div className="work_holder">
        <div className="work_txt">
          <h1>How we work</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <span>Get in touch with us →</span>
        </div>
        <div className="work_carts">
          <div className="cart">
              <img src={imgNumber} alt="" />
              <p>Strategy</p>
              <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</span>
          </div>
          <div className="cart">
              <img src={imgNumber} alt="" />
              <p>Strategy</p>
              <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</span>
          </div>
          <div className="cart">
              <img src={imgNumber} alt="" />
              <p>Strategy</p>
              <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</span>
          </div>
          <div className="cart">
              <img src={imgNumber} alt="" />
              <p>Strategy</p>
              <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</span>
          </div>
        </div>
      </div>

      <div className="projects_holder">
      <img src={imgProjects} alt="" />
      </div>

      <div className="design_holder">
        <p>Features</p>
        <h1>Design that solves problems, one product at a time</h1>
        <div className="carts_user">
        <div className='d_flex'>
        <div className="cart_suport">
            <img src={imgUser} alt="" />
            <p>Uses Client First</p>
            <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </span>
          </div>
          <div className="cart_suport">
            <img src={imgUser} alt="" />
            <p>Uses Client First</p>
            <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </span>
          </div>
          <div className="cart_suport">
            <img src={imgUser} alt="" />
            <p>Uses Client First</p>
            <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </span>
          </div>
        </div>
        <div className='d_flex'>
        <div className="cart_suport">
            <img src={imgUser} alt="" />
            <p>Uses Client First</p>
            <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </span>
          </div>
          <div className="cart_suport">
            <img src={imgUser} alt="" />
            <p>Uses Client First</p>
            <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </span>
          </div>
          <div className="cart_suport">
            <img src={imgUser} alt="" />
            <p>Uses Client First</p>
            <span>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </span>
          </div>
        </div>
        </div>
      </div>

      {/* <div className="client_holder">
          <img src={imgClients} alt="" />
      </div> */}
      <div className="clients_holder">
        <div className="txt_clients">
          <h1>What our clients say about us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
        <div className="img_clients">
          <p>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</p>

        </div>
      </div>
      {/* <div className="end">
        <img src={imgEnd} alt="" />
        <img src={imgEnd1} alt="" />
        <img src={imgEnd2} alt="" />
      </div> */}
    </div>
  )
}
