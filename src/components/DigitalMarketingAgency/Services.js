import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const query = graphql`
  {
    strapiServicesOne {
        simpleText
        header
        helpText
        image {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
        services {
          id
          icon
          services
        }
    }
    strapiServicesTwo {
        simpleText
        header
        helpText
        image {
            childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
              }
            }
        }
        services {
          id
          icon
          services
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
            items: 3,
        },
        992: {
            items: 3,
        }
    }
};

const Services = () => {
    const data = useStaticQuery(query)
    const {
        strapiServicesOne, strapiServicesTwo
    } = data
    
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])    

    return (
        <React.Fragment>

            {/* Service Right Image Style */}
            <div className="our-mission-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> {strapiServicesTwo.simpleText}
                                    </span>
                                    
                                    <h2>{strapiServicesTwo.header}</h2>
                                    <p>{strapiServicesTwo.helpText}</p>

                                    <ul className="our-mission-list mb-0">
                                        {strapiServicesTwo.services.map(service => (
                                            <li key={service.id}>
                                                <i className={service.icon}></i>
                                                {service.services}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-image">
                                <Image fluid={strapiServicesTwo.image.childImageSharp.fluid} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Right Image Style */}

            {/* START VIDEOS */}
            <div className='container our-videos'>
                <div className="text-center">
                    <div className="col-12">
                        <span className="sub-title">
                            <img src={starIcon} alt="icon" /> Videos
                        </span>

                        <h2>OneTeamWork Videos</h2>
                        <p>Veja os nossos videos para ficar a conhecer mais da nossa parte.</p>
                    </div>
                </div>
                <div className="testimonials-area pt-70 pb-100">

                    {display ? <OwlCarousel 
                            className="testimonials-slides owl-carousel owl-theme"
                            {...options}
                        >
                        <iframe height="350px" width="100%" src="https://www.youtube.com/embed/saqicI45i7I"></iframe>
                        <iframe height="350px" width="100%" src="https://www.youtube.com/embed/QdVX1NGceeU"></iframe>
                        <iframe height="350px" width="100%" src="https://www.youtube.com/embed/7IS-gN2QxyI"></iframe>
                        <iframe height="350px" width="100%" src="https://www.youtube.com/embed/pJ7UlprJcG8"></iframe>
                        <iframe height="350px" width="100%" src="https://www.youtube.com/embed/dK78gsZhXIY"></iframe>
                        </OwlCarousel> : ''}

                </div>
            </div>
            {/* END VIDEOS */}

            {/* Service Left Image Style */}
            <div className="about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <Image fluid={strapiServicesOne.image.childImageSharp.fluid} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> {strapiServicesOne.simpleText}
                                    </span>
                                    
                                    <h2>{strapiServicesOne.header}</h2>
                                    <p>{strapiServicesOne.helpText}</p>
                                    <ul className="about-list mb-0">
                                        {strapiServicesOne.services.map(service => (
                                            <li key={service.id}>
                                                <i className={service.icon}></i>
                                                {service.services}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Left Image Style */}
        </React.Fragment>
    )
}

export default Services;