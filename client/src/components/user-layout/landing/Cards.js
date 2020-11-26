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
  state = { windowWidth: window.innerWidth };
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  getWidth = () => this.state.windowWidth;
  render() {
    let cardValues = [
      {
        title: "Expenses",
        subtitle: "Subtitle",
        text: this.getWidth(),
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
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, error?",
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

    const cardContents = cardValues.map(
      ({ title, subtitle, text, link, image }) => (
        <Col lg="3" md="4" sm="6" className="text-center mb-5">
          <Card className="card-styles h-100">
            <CardBody className="d-flex flex-column">
              <CardImg top height="50px" src={image} alt="Card image cap" />
              <CardTitle tag="h5" className="my-3">
                {title}
              </CardTitle>
              <CardText>{text}</CardText>
              <Button className="mt-auto card-button">
                <Link to={link}>View</Link>
              </Button>
            </CardBody>
          </Card>
        </Col>
      )
    );
    return (
      <Container className="bg-light text-center p-3 card-container">
        <h1>Reach your goals, track activities</h1>
        <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, quidem?</p>
        <Row>{cardContents}</Row>
      </Container>
    );
  }
}

export default Cards;
