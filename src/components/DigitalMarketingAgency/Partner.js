import React from 'react'
import ReactWOW from 'react-wow'
import partner1 from '../../assets/images/partner/partner1.png'
import partner2 from '../../assets/images/partner/partner2.png'
import partner3 from '../../assets/images/partner/partner3.png'
import partner4 from '../../assets/images/partner/partner4.png'
import partner5 from '../../assets/images/partner/partner5.png'
import partner6 from '../../assets/images/partner/partner6.png'
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ]
};

const Partner = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="partner-area pt-100 pb-70">
            <div className="container">
                <OwlCarousel className="d-block d-md-none case-study-slides owl-carousel owl-theme" {...options}>
                <div className="col-lg-2col-md-4">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <img src={partner1} alt="partner" />
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-md-4">
                        <ReactWOW delay='.2s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <img src={partner2} alt="partner" />
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-md-4">
                        <ReactWOW delay='.3s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src={partner3} alt="partner" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-md-4">
                        <ReactWOW delay='.4s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src={partner4} alt="partner" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-md-4">
                        <ReactWOW delay='.5s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src={partner5} alt="partner" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-md-4">
                        <ReactWOW delay='.6s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src={partner6} alt="partner" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                </OwlCarousel>
                <div className="d-none d-md-flex row align-items-center">
                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <img src={partner1} alt="partner" />
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.2s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <img src={partner2} alt="partner" />
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.3s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src={partner3} alt="partner" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.4s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src={partner4} alt="partner" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.5s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src={partner5} alt="partner" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.6s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                    <img src={partner6} alt="partner" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </div>
        // <div className="partner-area pt-100 pb-70">
        //     <div className="container">
                // <div className="row align-items-center">
                //     <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                //         <ReactWOW delay='.1s' animation='fadeInUp'>
                //             <div className="single-partner-item">
                //                 <img src={partner1} alt="partner" />
                //             </div>
                //         </ReactWOW>
                //     </div>

                //     <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                //         <ReactWOW delay='.2s' animation='fadeInUp'>
                //             <div className="single-partner-item">
                //                 <img src={partner2} alt="partner" />
                //             </div>
                //         </ReactWOW>
                //     </div>

                //     <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                //         <ReactWOW delay='.3s' animation='fadeInUp'>
                //             <div className="single-partner-item">
                //                 <div className="single-partner-item">
                //                     <img src={partner3} alt="partner" />
                //                 </div>
                //             </div>
                //         </ReactWOW>
                //     </div>

                //     <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                //         <ReactWOW delay='.4s' animation='fadeInUp'>
                //             <div className="single-partner-item">
                //                 <div className="single-partner-item">
                //                     <img src={partner4} alt="partner" />
                //                 </div>
                //             </div>
                //         </ReactWOW>
                //     </div>

                //     <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                //         <ReactWOW delay='.5s' animation='fadeInUp'>
                //             <div className="single-partner-item">
                //                 <div className="single-partner-item">
                //                     <img src={partner5} alt="partner" />
                //                 </div>
                //             </div>
                //         </ReactWOW>
                //     </div>

                //     <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                //         <ReactWOW delay='.6s' animation='fadeInUp'>
                //             <div className="single-partner-item">
                //                 <div className="single-partner-item">
                //                     <img src={partner6} alt="partner" />
                //                 </div>
                //             </div>
                //         </ReactWOW>
                //     </div>
                // </div>
        //     </div>

        //     <div className="divider"></div>
        // </div>
    )
}

export default Partner