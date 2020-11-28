import React, { Component, Fragment } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
  CardFooter,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  NavLink,
} from "reactstrap";
// https://www.flaticon.com/
import { Link } from "react-router-dom";
import Image1 from "./icons/wallet.svg";
import Image2 from "./icons/glass-of-water.svg";
import Image3 from "./icons/time.svg";
import Image4 from "./icons/to-do.svg";
import Image5 from "./icons/groceries.svg";
import Image6 from "./icons/care.svg";

class Cards extends Component {
  state = {
    activeIndex: 0,
    animating: false,
    cardCarousel: true,
  };
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  getWidth = () => this.state.windowWidth;

  getNumCards = () => {
    // get number of cards per row
    const width = this.state.windowWidth;
    if (width < 576) return 1;
    else if (width < 768) return 2;
    else if (width < 992) return 3;
    else return 4;
  };

  getNumRows = () => Math.ceil(this.cardValues.length / this.getNumCards());

  cardValues = [
    {
      title: "Expenses",
      subtitle: "Subtitle",
      text: 4,
      link: "/todo",
      image: Image1,
    },
    {
      title: "Water",
      subtitle: "Subtitle",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, error?",
      link: "/todo",
      image: Image2,
    },
    {
      title: "Time",
      subtitle: "Subtitle",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, error?",
      link: "/todo",
      image: Image3,
    },
    {
      title: "Todo",
      subtitle: "Subtitle",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, error?",
      link: "/todo",
      image: Image4,
    },
    {
      title: "Household",
      subtitle: "Subtitle",
      text:
        "Lorem ipsum dolor sit amet consecteturdolor sit amet consectetur Tempora, error?",
      link: "/todo",
      image: Image5,
    },
    {
      title: "Health",
      subtitle: "Subtitle",
      text: "Lorem, ipsum error?",
      link: "/todo",
      image: Image6,
    },
  ];
  next = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === this.getNumRows() - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.getNumRows() - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  toggleCardCarousal = () => {
    this.setState({
      cardCarousel: !this.state.cardCarousel,
    });
  };

  render() {
    const cardItems = this.cardValues.map(({ title, text, link, image }) => (
      <Col lg="3" md="4" sm="6" className="text-center mb-5">
        <Card className="card-styles h-100">
          <CardBody className="d-flex flex-column">
            <CardImg top height="50px" src={image} alt="Card Image" />
            <CardTitle tag="h5" className="my-3">
              {title}
            </CardTitle>
            <CardText>{text}</CardText>
            <Link to={link} className="btn mt-auto card-button text-white">
              View
            </Link>
          </CardBody>
        </Card>
      </Col>
    ));

    const cardContent = <Row className="bg-light py-2 px-5">{cardItems}</Row>;

    const carouselItems = [];
    for (var i = 0; i < cardItems.length; i += this.getNumCards()) {
      const currItem = cardItems.slice(i, i + this.getNumCards());
      carouselItems.push(
        <CarouselItem
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
        >
          <Row className="bg-light py-2 px-5">{currItem}</Row>
        </CarouselItem>
      );
    }

    const carouselContent = (
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={carouselItems.map((item, index) => ({
            item: item,
            src: index,
          }))}
          activeIndex={this.state.activeIndex}
          onClickHandler={this.goToIndex}
        />
        {carouselItems}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );

    return (
      <Container className="text-center card-container my-3">
        <h1>Reach your goals, track activities</h1>
        <p className="lead">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
          quidem?
        </p>
        <div id="cards">
          {this.state.cardCarousel ? carouselContent : cardContent}
        </div>
        <NavLink
          className="btn btn-dark px-5 mx-auto mt-3 d-inline-block"
          href="#cards"
          onClick={this.toggleCardCarousal}
        >
          {this.state.cardCarousel ? "SEE ALL" : "SEE LESS"}
        </NavLink>
      </Container>
    );
  }
}

export default Cards;
