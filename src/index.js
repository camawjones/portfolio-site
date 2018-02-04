import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import VisibilitySensor from 'react-visibility-sensor';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import ProjectGallery from './components/page3';
import LittleBitAnimate from './components/bitanimate';
import Page4 from './components/page4';

import 'bootstrap-css-only';
import './App.css';

class App extends React.Component {
  state = {
    imgUrl: '',
    caption: '',
    show: false
  };

  handleClick = page => {
    scrollToComponent(page, { offset: 0, align: 'top', duration: 1500 });
  };

  onChange = isVisible => {
    isVisible
      ? this.setState({
          show: true
        })
      : this.setState({
          show: false
        });
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    console.log(this.state.show);
  };

  path1Animation() {
    const path = document.querySelector('.path-1');
    if (path) {
      const length = path.getTotalLength();
      console.log(length);
      //clear any transition
      path.style.transition = 'none';
      console.log(path.style.transition);
      //set up starting points
      path.style.strokeDasharray = length + ' ' + length;
      console.log(path.style.strokeDasharray);
      path.style.strokeDashoffset = length;
      //Trigger a layout so styles are calculated & the browser picks up the starting position before animating
      path.getBoundingClientRect();
      //Define our WebkitTransition
      path.style.transition = 'stroke-dashoffset 2s ease';
      console.log(path.style.transition);
      //Go!
      path.style.strokeDashoffset = '0';
    }
  }
  path2Animation = () => {
    const path = document.querySelector('.path-2');
    if (path) {
      const length = path.getTotalLength();
      console.log(length);
      //clear any transition
      path.style.transition = 'none';
      console.log(path.style.transition);
      //set up starting points
      path.style.strokeDasharray = length + ' ' + length;
      console.log(path.style.strokeDasharray);
      path.style.strokeDashoffset = length;
      //Trigger a layout so styles are calculated & the browser picks up the starting position before animating
      path.getBoundingClientRect();
      //Define our WebkitTransition
      path.style.transition = 'stroke-dashoffset 2s ease';
      console.log(path.style.transition);
      //Go!
      path.style.strokeDashoffset = '0';
    }
  };
  path3Animation = () => {
    const path = document.querySelector('.path-3');
    if (path) {
      const length = path.getTotalLength();
      console.log(length);
      //clear any transition
      path.style.transition = 'none';
      console.log(path.style.transition);
      //set up starting points
      path.style.strokeDasharray = length + ' ' + length;
      console.log(path.style.strokeDasharray);
      path.style.strokeDashoffset = length;
      //Trigger a layout so styles are calculated & the browser picks up the starting position before animating
      path.getBoundingClientRect();
      //Define our WebkitTransition
      path.style.transition = 'stroke-dashoffset 2s ease';
      console.log(path.style.transition);
      //Go!
      path.style.strokeDashoffset = '0';
    }
  };

  path4Animation = () => {
    const path = document.querySelector('.path-4');
    if (path) {
      const length = path.getTotalLength();
      console.log(length);
      //clear any transition
      path.style.transition = 'none';
      console.log(path.style.transition);
      //set up starting points
      path.style.strokeDasharray = length + ' ' + length;
      console.log(path.style.strokeDasharray);
      path.style.strokeDashoffset = length;
      //Trigger a layout so styles are calculated & the browser picks up the starting position before animating
      path.getBoundingClientRect();
      //Define our WebkitTransition
      path.style.transition = 'stroke-dashoffset 2s ease';
      console.log(path.style.transition);
      //Go!
      path.style.strokeDashoffset = '0';
    }
  };

  componentDidMount() {
    this.path1Animation();
    this.path2Animation();
    this.path3Animation();
    this.path4Animation();
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <section className="flex align grad-bg">
            <div className="cj-logo flex align">
              <h1 className="name">Cameron Jones</h1>
              <h2 className="title">Web Design & Development</h2>
              <svg
                className="svg-cj"
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="252.21"
                viewBox="0 0 1896 1071"
              >
                <filter height="180%" id="colorMeSaturate">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="saturate"
                    values="5"
                  />
                </filter>
                <g
                  fill="none"
                  filter="url(#colorMeSaturate)"
                  fillRule="evenodd"
                  strokeWidth="238"
                  transform="translate(119 119)"
                >
                  <path
                    className="path-1"
                    stroke="#EACDD0"
                    d="M0,76 C0,123.148832 4.31329077,169.290242 12.5668074,214.051163 C77.4507841,565.933484 385.845419,832.5 756.5,832.5 L756.5,76"
                    transform="matrix(0 -1 -1 0 832.5 832.5)"
                  />
                  <path
                    className="path-2"
                    stroke="#EACDD0"
                    d="M901,76 C901,123.148832 905.313291,169.290242 913.566807,214.051163 C978.450784,565.933484 1286.84542,832.5 1657.5,832.5 L1657.5,76"
                    transform="rotate(-90 1279.25 454.25)"
                  />
                  <path
                    className="path-3"
                    stroke="#FFF"
                    d="M0,0 C0,47.1488324 4.31329077,93.2902417 12.5668074,138.051163 C77.4507841,489.933484 385.845419,756.5 756.5,756.5 L756.5,0"
                    transform="matrix(0 -1 -1 0 756.5 756.5)"
                  />
                  <path
                    className="path-4"
                    stroke="#FFF"
                    d="M901,0 C901,47.1488324 905.313291,93.2902417 913.566807,138.051163 C978.450784,489.933484 1286.84542,756.5 1657.5,756.5 L1657.5,0"
                    transform="rotate(-90 1279.25 378.25)"
                  />
                </g>
              </svg>
            </div>
            <svg
              onClick={() => this.handleClick(this.secondPage)}
              className="arrow1"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="20"
              viewBox="0 0 56 40"
            >
              <polyline
                fill="none"
                stroke="#FEF9FB"
                strokeLinecap="round"
                strokeWidth="5"
                points="695 975.258 720 943 720 943 745 975.258"
                transform="matrix(1 0 0 -1 -692 978.258)"
              />
            </svg>
          </section>
          <section
            className="secondPage flex align"
            ref={section => {
              this.secondPage = section;
            }}
          >
            <div>
              <LittleBitAnimate show={this.state.show} />
              <VisibilitySensor onChange={this.onChange} />
              <div className="white-rec">
                <div className="blue-rec">
                  {`Hey Im Cam, a fullstack developer who makes pixels look pretty so you dont have to.
                  Whether you need a bit of tlc for an existing site or a new and beautiful site with all the bells and whistles, help is at hand. For any further info regarding my skills, previous experience or quotes, please don't hesitate to get in touch!`}
                </div>
              </div>
            </div>
            <svg
              className="arrow2"
              onClick={() =>
                scrollToComponent(this.page3, {
                  offset: 0,
                  align: 'top',
                  duration: 1500
                })
              }
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="20"
              viewBox="0 0 56 40"
            >
              <polyline
                fill="none"
                stroke="#FEF9FB"
                strokeLinecap="round"
                strokeWidth="5"
                points="695 975.258 720 943 720 943 745 975.258"
                transform="matrix(1 0 0 -1 -692 978.258)"
              />
            </svg>
          </section>
          <ProjectGallery
            handleClick={() => this.handleClick(this.page4)}
            className="page3 flex align"
            ref={section => {
              this.page3 = section;
            }}
          />
          <Page4
            className="flex align page4"
            ref={section => {
              this.page4 = section;
            }}
          />
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
