import React from 'react'
import {Link} from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        strapiRecentProjects {
            subTitle
            title
            shortText
        }
        allStrapiProjects {
            nodes {
                slug
                subTitle
                title
                content
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

const Projects = () => {
    const data = useStaticQuery(query)
    const {
        strapiRecentProjects: {subTitle, title, shortText},
        allStrapiProjects: { nodes: projects },
    } = data
    return (
        <section className="projects-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Projects</span>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                {
                        projects.slice(0,6).map((project, idx) => {
                            return(
                                <div className="col-lg-4 col-md-6" key={idx}>
                                    <div className="single-projects-box">
                                        <div className="image">
                                            <img 
                                                src={project.image.childImageSharp.fluid.src} 
                                                alt="Project Image" 
                                            />
                                            <Link className="link-btn" to={`/projects/${project.slug}`}>
                                                <i className='bx bx-plus'></i>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <h3>
                                                <Link to={`/projects/${project.slug}`}>
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <span>{project.subTitle}</span>
                                        </div>
                                    </div>
                                </div>
                           )
                        })
                    }
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project1} alt="image" />

                                <Link to="/case-studies-details" className="link-btn">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/case-studies-details">
                                        Lorem Ipsum
                                    </Link>
                                </h3>
                                <span>Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project2} alt="image" />

                                <Link to="/case-studies-details" className="link-btn">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/case-studies-details">
                                        Lorem Ipsum
                                    </Link>
                                </h3>
                                <span>Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project3} alt="image" />

                                <Link to="/case-studies-details" className="link-btn">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/case-studies-details">
                                        Lorem Ipsum
                                    </Link>
                                </h3>
                                <span>Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project4} alt="image" />

                                <Link to="/case-studies-details" className="link-btn">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/case-studies-details">
                                        Lorem Ipsum
                                    </Link>
                                </h3>
                                <span>Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box ">
                            <div className="image">
                                <img src={project5} alt="image" />

                                <Link to="/case-studies-details" className="link-btn">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/case-studies-details">
                                        Lorem Ipsum
                                    </Link>
                                </h3>
                                <span>Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project6} alt="image" />

                                <Link to="/case-studies-details" className="link-btn">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/case-studies-details">
                                        Lorem Ipsum
                                    </Link>
                                </h3>
                                <span>Lorem Ipsum</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Projects