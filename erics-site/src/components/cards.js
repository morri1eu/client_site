import React, { Component } from 'react'
import image from '../IMG_3273b.jpg'

class Cards extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
            <h2 className="margin-top">Meet the Team!</h2>
            </div>
            <div className="row">
                <div class="card col-sm-3" style={{ width: "33.3%" }}>
                    <img class="card-img-top evan" src={image} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Evan Morris Baseball/Strength Training</h5>
                        <p class="card-text">Former pitcher for Orchard Lake St. Mary's and CMU. Focuses of core strength and translates it to sport specific skills</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-sm-3" style={{ width: "33.3%" }}>
                    <img class="card-img-top eric" src="http://www.seatonathletics.com/wp-content/uploads/2015/10/sa_staff_ericbusbee.jpg" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Eric Busbee Lead Trainer</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ligula facilisis, commodo sapien a, malesuada nibh. Quisque eget

.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-sm-3" style={{ width: "33.3%" }}>
                    <img class="card-img-top eric" src="http://www.seatonathletics.com/wp-content/uploads/2015/10/sa_staff_ericbusbee.jpg" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Eric Busbee Lead Trainer</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ligula facilisis, commodo sapien a, malesuada nibh. Quisque eget.

</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            </div>
        )


    }
}

export default Cards