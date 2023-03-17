import React from 'react'
import { Link } from 'gatsby'
import ReactWOW from 'react-wow'
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import bannerImg3 from '../../assets/images/banner-img3.png'

const query = graphql`
  {
    strapiDefaultBanner {
        header
        helpText
        btnText
        btnLink
        image {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
    }
  }
`

const MainBanner = () => {
    const data = useStaticQuery(query)
    const { strapiDefaultBanner: { header, helpText, btnText, btnLink, image } } = data
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">One Team Work</span>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>{header}</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>{helpText}</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to={btnLink} className="default-btn">
                                        <i className="flaticon-right"></i>
                                        {btnText} <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="banner-wrapper-image">
                                <Image fluid={image.childImageSharp.fluid} />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
