import React, { Fragment } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";

export default function About() {
     return (
          <Fragment>
               <section id="Comp_About">
                    <div className="row justify-content-lg-evenly">
                         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex">
                              <img
                                   src="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                   className="w-50 "
                                   alt="CardImage"
                                   style={{ clipPath : 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)' }}
                              />
                              <img
                                   src="https://restorangaruda.com/images/about-1.jpg"
                                   className="w-50 "
                                   alt="CardImage"
                                   style={{clipPath : 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)'}}
                              />
                         </div>
                         <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                           <HeadingSection subHeading="WeLcomE" titleHeading="FoodShop.com" description="Restoran FoodShop.com telah berdiri sejak 2021 oleh IJlal Naufal Hibrizi hingga saat ini Anjay:v Kami bergerak dibidang mengelolah makanan yang spesifik yaitu Minang dan Melayu, dimana alasan untuk mendirikan rumah makan ini adalah merupakan hasil survey bahwa masih kurangnya sarana rumah makan terutama yang menyediakan makanan spesifik Minang dan Melayu dikota Cibitung." />
          </div>
                    </div>
               </section>
          </Fragment>
     );
}
