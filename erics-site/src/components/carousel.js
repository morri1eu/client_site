import React, { Component } from 'react'

class Carousel extends Component {

    render() {
        return (
            <div>
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src="https://i.ytimg.com/vi/xLI0pBhGJno/maxresdefault.jpg" alt="Football" />
                                <div className= "caro-cap">
                                <h2>Diversity Built Into Every Session</h2>
                                <h4>Designed for multi-sport athletes to take your game to the next level</h4>
                                </div>
                                
      </div>
                            <div className="item">
                                <img src="https://www.scienceforsport.com/wp-content/uploads/2016/01/Figures-1-and-2-Basketball-shot-and-barbell-jump-squat.jpg" alt="..." />
                                <div className= "caro-cap">
                                <h2>Sport Specific Training</h2>
                                <h4>Get ready for the season</h4>
                                </div>

                            </div>
                            <div className="item">
                                <img src="https://georgiadogs.com/images/2016/9/20/butts17-06.jpg" alt="..." />
                                <div className= "caro-cap">
                                <h2>State Of The Art Facilities</h2>
                                <h4>The best equipment to get the most out of each workout</h4>
                                </div>
                            </div>
  </div>

                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="col-md-1"></div>
                </div>
</div>
                )
}
}

export default Carousel