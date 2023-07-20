import React from 'react'

function Card(props) {

    // var cardImage=require(`${process.env.PUBLIC_URL}${props.image}`);
    return (
        <div className='col-xs-12 col-sm-6 col-md-4 my-4'>
            <div class="card" >
                <img src={process.env.PUBLIC_URL + props.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a class="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Card