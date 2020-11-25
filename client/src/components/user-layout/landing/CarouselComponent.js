import React, { Component } from 'react'
import {
  UncontrolledCarousel
} from 'reactstrap';

import Image1 from './img/1.jpg';
import Image2 from './img/2.jpg';
import Image3 from './img/3.jpg';
import Image4 from './img/4.jpg';
import Image5 from './img/5.jpg';
import Image6 from './img/6.jpg';
import Image7 from './img/7.jpg';

const items = [
  {
    src: Image1,
    altText: 'Slide 1',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, molestias.',
    header: 'Remeber Your Goals',
    key: '1'
  },
  {
    src: Image2,
    altText: 'Slide 2',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nihil ut quis nobis distinctio ducimus culpa iusto eum? Rem, voluptatibus!',
    header: 'Life hereafter is the key',
    key: '2'
  },
  {
    src: Image3,
    altText: 'Slide 3',
    caption: 'Lorem ipsum dolor sit amet.',
    header: 'Keep learning',
    key: '3'
  },
  {
    src: Image4,
    altText: 'Slide 4',
    caption: 'Lorem ipsum dolor sit amet.',
    header: 'Keep learning',
    key: '4'
  },
  {
    src: Image5,
    altText: 'Slide 5',
    caption: 'Lorem ipsum dolor sit amet.',
    header: 'Keep learning',
    key: '5'
  },
  {
    src: Image6,
    altText: 'Slide 6',
    caption: 'Lorem ipsum dolor sit amet.',
    header: 'Keep learning',
    key: '6'
  },
  {
    src: Image7,
    altText: 'Slide 7',
    caption: 'Lorem ipsum dolor sit amet.',
    header: 'Keep learning',
    key: '7'
  }
];

class CarouselComponent extends Component {
	render() {
		return (
			<UncontrolledCarousel items={items} />
		);
	}
}

export default CarouselComponent;