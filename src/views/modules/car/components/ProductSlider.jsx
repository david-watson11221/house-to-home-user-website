import React, { Component } from "react";
import Slider from "react-slick";
import { MEDIA_URL } from "../../../../services/config/baseUrl.config";

export default class AsNavFor extends Component {
  state = {
    nav1: null,
    nav2: null,
  };

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const { images } = this.props;
    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider className="react-slider-custom" asNavFor={this.state.nav2} ref={(slider) => (this.slider1 = slider)}>
          {images?.map((imgUrl, index) => (
            <figure
              key={index}
              className="slick-slide slick-current slick-active"
              style={{
                width: "694px",
                position: "relative",
                left: "-724px",
                top: "0px",
                zIndex: 998,
                opacity: 0,
              }}
            >
              <img src={`${MEDIA_URL}${imgUrl}`} alt={imgUrl} />
            </figure>
          ))}
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          className="react-slider-custom"
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {images?.map((imgUrl, index) => (
            <figure key={index} className="slick-slide slick-cloned" style={{ width: "151px" }}>
              <img src={`${MEDIA_URL}${imgUrl}`} alt={imgUrl} />
            </figure>
          ))}
        </Slider>
      </div>
    );
  }
}
