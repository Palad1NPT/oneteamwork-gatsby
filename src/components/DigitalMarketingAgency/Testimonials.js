import React from 'react'

import shape9 from '../../assets/images/shape/vector-shape9.png'
import shape10 from '../../assets/images/shape/vector-shape10.png'
import Loadable from '@loadable/component'
import { graphql, useStaticQuery } from "gatsby"

const OwlCarousel = Loadable(() => import('react-owl-carousel3'))
 
const query = graphql`
{
    strapiTestimonials {
        subTitle
        title
        shortText
        item {
            id
            name
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            feedbackText
            designation
        }
    }
}
` 

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
};

const Testimonials = () => {
    const data = useStaticQuery(query)
    const {strapiTestimonials: {
        subTitle, title, shortText, item
    }} = data 

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="testimonials-area bg-23173a pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                > 
                    {item.map(list => (
                        <div className="single-testimonials-box">
                            <img 
                                src={list.image.childImageSharp.fluid.src} 
                                className="shadow-sm"
                                alt="Client Image" 
                            />
                            <p>{list.feedbackText}</p>
                            <div className="client-info">
                                <h3>{list.name}</h3>
                                <span>{list.designation}</span>
                            </div>
                        </div>
                    ))}
                    {/* <div className="single-testimonials-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client1} alt="testimonial" />
                                <div className="title">
                                    <h3>Lorem Person</h3>
                                    <span>CEO at Lorem Company</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </OwlCarousel> : ''}
            </div>

            <div className="vector-shape9">
                <img src={shape9} alt="shape" />
            </div>
            <div className="vector-shape10">
                <img src={shape10} alt="shape" />
            </div>
        </section>
    )
}

export default Testimonials