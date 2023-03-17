import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import Image from "gatsby-image"
import serviceIcon1 from '../../assets/images/services/service-icon1.png'
import serviceIcon2 from '../../assets/images/services/service-icon2.png'
import serviceIcon3 from '../../assets/images/services/service-icon3.png'

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        allStrapiCompanyServices(sort: {fields: slug, order: DESC}) {
        nodes {
            Button
            Icon {
                childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
            Link
            Subtitle
            Title
            slug
        }
    }
}
`

const FeaturedServices = () => {
    const data = useStaticQuery(query);
    const {
        allStrapiCompanyServices: { nodes: services },
    } = data;
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="features" /> 
                        O que fazemos
                    </span>
                    <h2>Somos o seu People & Business Partner.</h2>
                    <p>A OneTeamWork nasceu com o propósito de colaborar com as organizações no seu crescimento,
através de novas soluções e metodologias de Gestão, com vista a uma maior eficiência
operacional e competitividade.</p>
                </div>

                <div className="row">

                    {
                        services.map((service, index) => {
                            return (
                                <div className={"col-lg-3 col-sm-6"}>
                                    <div className="single-services-item-box">
                                        <div className="service-icon">
                                            <Image fluid={service.Icon.childImageSharp.fluid} />
                                        </div>
                                        <h3>
                                            <Link to={service.Link}>
                                                {service.Title}
                                            </Link>
                                        </h3>
                                        <p>{service.Subtitle}</p>

                                        <Link to={service.Link} className="read-more-btn">
                                            {service.Button} 
                                            <i className="flaticon-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    }

                    {/* <div className="col-lg-3 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon1} alt="features" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Lorem Ipsum
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link to="/service-details" className="read-more-btn">
                                Lorem More 
                                <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon2} alt="features" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Lorem Ipsum
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link to="/service-details" className="read-more-btn">
                                Lorem More 
                                <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon2} alt="features" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Lorem Ipsum
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link to="/service-details" className="read-more-btn">
                                Lorem More 
                                <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon3} alt="features" />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                    Lorem Ipsum
                                </Link>
                            </h3>
 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link to="/service-details" className="read-more-btn">
                                Lorem More 
                                <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default FeaturedServices