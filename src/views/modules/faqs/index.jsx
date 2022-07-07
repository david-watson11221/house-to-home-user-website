import React from "react";
import { useState } from "react";

const FAQS = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravid dolor sit amet lacus accumsan et viverra justo commodo.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravid dolor sit amet lacus accumsan et viverra justo commodo.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravid dolor sit amet lacus accumsan et viverra justo commodo.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravid dolor sit amet lacus accumsan et viverra justo commodo.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravid dolor sit amet lacus accumsan et viverra justo commodo.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravid dolor sit amet lacus accumsan et viverra justo commodo.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet.",
  },
];

export default function Faqs() {
  return (
    <section className="secfaqs py-md-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="finspired_top heading_main text-md-center text-left mb-md-5 mb-1">
              <h3 className="h_57 mb-md-3 mb-1">FAQs</h3>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="faqs_image">
              {/* <img src="assets/images/faqs_img.png" alt="" /> */}
              <div id="faqs"></div>
            </div>
          </div>
          <div className="col-md-8">
            <Accordian data={FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Accordian({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="faqs_text">
      <ul className="myaccordi faqs_boxm">
        {data?.map((el, index) => (
          <li
            key={index}
            className={`${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="d-flex align-items-center faqs_boxt">
              <div className="faqs_boxtl">
                <h4>Q.</h4>
              </div>
              <div className="faqs_boxtc">
                <p>{el?.question}</p>
              </div>
              <div className="faqs_boxtr">
                <i className="far fa-plus" />
                <i className="far fa-minus" />
              </div>
            </div>
            <div className="d-flex align-items-center faqs_boxb">
              <div className="faqs_boxbl">
                <p>{el?.answer}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
