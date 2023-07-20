import React from 'react'
import Card from './Card'
import Package from './data'


function Home() {
    return (
        <div>
            {/* carousel section */}
            <div id="carouselIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + "carousel/beautiful-tropical-beach-sea (1).jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "carousel/beautiful-tropical-beach-sea-sand-with-palm-tree.jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "carousel/beautiful-tropical-beach-sea.jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "carousel/chair-table-dinning-beach-sea-with-blue-sky.jpg"} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* our package section */}
            <h1 className='text-center my-3'>
                Our packages
            </h1>
            <div className='container'>
                <div className='row'>
                    {Package.map((values) => {
                        return <Card
                            title={values.title}
                            image={values.images}
                            description={values.description}
                            key={values.id}
                        />
                    })}
                </div>
            </div>

            {/* 3rd section */}
            <h1 className='text-center text-danger my-4'>
                Frequently Asked Questions
            </h1>
            <div className='container mb-3'>
                <div className="accordion " id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>What types of accommodations do you offer?</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We offer a wide range of accommodations to suit every traveler's needs and preferences. Our options include luxury hotels, boutique resorts, all-inclusive resorts, villas, and private rentals.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Can you help me plan a trip within my budget?</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Absolutely! We understand that everyone has different budgets, which is why we offer a range of options to suit every price point. Our team can work with you to create a customized trip that fits within your budget while still providing a memorable experience.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Do you offer travel insurance?</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes, we highly recommend travel insurance to protect our clients' investments and provide peace of mind. We offer a variety of travel insurance options that cover everything from medical emergencies to trip cancellations and delays. Our team can provide guidance on the best option for your specific trip.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home