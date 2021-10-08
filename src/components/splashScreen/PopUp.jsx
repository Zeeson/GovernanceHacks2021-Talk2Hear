import React, { Component } from 'react'
import Carousel from "react-elastic-carousel";
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

const Items = [
  { id: 1, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore laudantium magnam quas, laboriosam maxime repellendus ipsam nostrum iusto hic cumque eligendi ipsa! Nam et vero minima iusto deleniti harum?" },
  { id: 2, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore laudantium magnam quas, laboriosam maxime repellendus ipsam nostrum iusto hic cumque eligendi ipsa! Nam et vero minima iusto deleniti harum?" },
  { id: 3, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore laudantium magnam quas, laboriosam maxime repellendus ipsam nostrum iusto hic cumque eligendi ipsa! Nam et vero minima iusto deleniti harum?" },
  { id: 4, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore laudantium magnam quas, laboriosam maxime repellendus ipsam nostrum iusto hic cumque eligendi ipsa! Nam et vero minima iusto deleniti harum?" },
  { id: 5, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore laudantium magnam quas, laboriosam maxime repellendus ipsam nostrum iusto hic cumque eligendi ipsa! Nam et vero minima iusto deleniti harum?" },
];

export default class PopUp extends Component {
    handleClick = () => {
        this.props.toggle()
    }
    render() {
        return (
          <Modal className="modal">
            <ModalCont className="modal_conent">
              <span className="close" onClick={this.handleClick}>
                <FaTimes/>
              </span>
                    <Carousel className="slide" enableAutoPlay autoPlaySpeed={5500}>
                        <div className="item_list">
                        {Items.map((item) => (
                                <Item key={item.id}>{item.title}</Item>
                        ))}
                    </div>
                    </Carousel>
                    
            </ModalCont>
          </Modal>
        );
    }
}


const Modal = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.352);
  transition: all 3s cubic-bezier(0.88, 0.19, 0.37, 1.11);
  transform: scale(0);
  animation-name: showIn;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-fill-mode: both;
  animation-delay: 0.2s;

  @keyframes showIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;


const ModalCont = styled.div`
  background: rgb(252, 252, 252);
  position: absolute;
  padding: 10px;
  top: 20%;
  left: 20%;
  right: 20%;
  bottom: 20%;
  border-radius: 30px;

  .close {
      position: absolute;
      right: 30px;
      top: 30px;
      z-index: 5;
      font-size: 20px;
  }

  .slide {
    display: flex;
   min-height: 100%;
    align-items: center;
  }

  .rec.rec-arrow {
   display: none;
  }
  .rec.rec-dot {
   display: none;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    border-radius: 50%;
  }
`;

const Item = styled.div`
min-height: 100%;
text-align: center;
display: flex;
align-items: center;
`;