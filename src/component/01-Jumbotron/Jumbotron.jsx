import React from 'react'
import TextJumbotrons from './TextJumbotrons'

export default function Jumbotron() {
  return (
    <div className="Jumbotrons">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <TextJumbotrons title="Selamat Datang Di Foodshop" />
            <img src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="CarouselImage" />
          </div>
          <div className="carousel-item">
            <TextJumbotrons title="Delivery Order & Gratis Ongkir *" />
            <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="CarouselImage" />
          </div>
          <div className="carousel-item">
            <TextJumbotrons title="Promo Medan Great Sale Discount 10%" />
            <img src="https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="CarouselImage" />
          </div>
        </div>
      </div>
    </div>
  )
}
