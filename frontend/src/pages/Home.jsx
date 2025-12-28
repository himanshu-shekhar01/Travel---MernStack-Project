import React from 'react'
import '../styles/home.css'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImage from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeatureList from '../components/Featured-tours/FeatureList'
import Experience from '../shared/Experience'
import ImageGallery from '../components/Image-gallery/ImageGallery'
import Testimonials from '../components/testimonials/Testimonials'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return (
    <div className='full'>
      <section>
        <div className="left">
          <div className="hero_content">
            <div className="hero_subtitle flex items-center">
              <Subtitle subtitle={'Know Before You'} />
              <img src={worldImage} alt="" className="w-15 h-15" />
            </div>

            <h1 className="hero_title text-4xl font-semibold">
              Traveling opens door <br />
              to creating <span className="highlight text-orange-400">memories</span>
            </h1>

            <p className="hero_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque perferendis eligendi perspiciatis similique ipsum doloribus eum.
            </p>
          </div>
          <SearchBar />
        </div>
        <div className="right">
          <div className="hero__img-box">
          <img src={heroImg02} alt="" />
          </div>

          <div className="hero__img-box mt-5">
            <video src={heroVideo} controls autoPlay muted  />
          </div>

          <div className="hero__img-box mt-10">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>
      <h5 className='service_subtitle'>What we serve</h5>
      <div className="flex gap-10 items-center">
        <h2 className="service_title w-1/4">
          We offer our best services
        </h2>
        <ServiceList />
      </div>
      <div className="explore">
        <Subtitle subtitle="Explore" />
        <h2 className="featured_tour_title">
          Our Featured Tour
        </h2>
            <FeatureList />

      </div>
      <div className='experience'>
        <Subtitle subtitle={"Experience"} />
        <Experience/>
      </div>

      <div className='gallery'>
        <Subtitle subtitle={"Gallery"} />
        <h2 className="featured_tour_title">
         Visit Our Customers tour Gallery
        </h2>
        <ImageGallery/>
      </div>

      <div className='testimonials'>
        <Subtitle subtitle={"Testimonials"} />
        <h2 className="featured_tour_title">
          What our customers are saying
        </h2>
        <Testimonials/>
      </div>

      {/* Newsletter starts */}

      <div className="newletter">
        <Newsletter/>
      </div>
      
    </div>
  )
}

export default Home
