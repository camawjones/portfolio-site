import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';



class ProjectGallery extends React.Component {
  state = {
    counter: 0,
    visible: false
  }


  onChange = (isVisible) => {
    isVisible ? this.setState({
      visible: true
    })
      : this.setState({
        visible: false
      });
    console.log(this.state.visible);
  }

  increment() {
    const counts = this.state.counter;
    if(counts < 3){
      this.setState(prevState => ({ counter: prevState.counter + 1 }));
    } else {
      this.setState({
        counter: 0
      });
    }
  }

  render() {

    const slides = [{
      _id: 1,
      title: 'Attack Of The Clunes',
      imageUrl1: '/assets/clunes-laptop.png',
      caption1: 'This a game I built based on Martin Clunes as every character in the Star Wars universe. Using javascript and jQuery, I implemented collision detection in order to trigger various events.',
      link: 'https://glacial-earth-52489.herokuapp.com/'
    }, {
      _id: 2,
      title: 'Lookalove (Where The Stars Align)',
      imageUrl1: '/assets/lookalovescreen.png',
      caption1: 'Lookalove (Where The Stars Align) is a full MERN stack mobile-first site that aims to be a dating app for professional lookalikes to find the partner of their dreams!',
      link: 'https://serene-anchorage-28490.herokuapp.com/'
    },{
      _id: 3,
      title: 'CharityApp',
      imageUrl1: '/assets/charity-laptop.png',
      caption1: 'CharityApp was a group fully RESTful MEAN stack project in which we used Google Places API and Google Maps API in order to map out all the registered Charities on our platform. ',
      link: 'https://charityapp-cam.herokuapp.com/'
    },{
      _id: 4,
      title: 'Gigl',
      imageUrl1: '/assets/gigl-laptop.png',
      caption1: 'Using Javascript and EJS I created a fully restful services platform for freelance web designers to upload their portfolios, skills, and for others to review and hire them.',
      link: 'https://gigl-project.herokuapp.com/'
    }
    ];

    const componentClasses = ['rightrec'];
    const componentClassesLeft = ['leftrec'];
    const componentText = ['proj-text'];
    const componentImg= ['projImg'];
    if (this.state.visible) {
      componentClasses.push('show');
      componentClassesLeft.push('show');
      componentText.push('show');
      componentImg.push('show');
    }

    return (
      <section className="flex align grad-bg" ref={(section) => {
        this.page4 = section;
      }}>
        <div className="container flex align">
          <h1 className="mywork">My Work</h1>
          <div className="flex align whiterec">
            <div className="flex align">
              <div className={componentClasses.join(' ')}>
              </div>
              {/* content container */}

              <div className="pinkrec middlerec">
                <div className="arrowrightsmall">
                  <img className="arrowsmall" src="/assets/oval-arrow.png" onClick={() => this.increment()} />
                </div>
                <div className={componentText.join(' ')}>
                  <a href={slides[this.state.counter].link}><h1 className="projtitle">{slides[this.state.counter].title}</h1></a>
                  <div className="projcaption">
                    {slides[this.state.counter].caption1}
                  </div>
                  <VisibilitySensor onChange={this.onChange} />
                </div>
                <img className={componentImg.join(' ')} src={slides[this.state.counter].imageUrl1}/>
              </div>
              <div className={componentClassesLeft.join(' ')} transform="translate(30 -20)">
              </div>
            </div>
          </div>
        </div>
        {/* clicking through projects */}
        <img src="/assets/oval-arrow.png" onClick={() => this.increment()} className="arrowright" />
        <svg onClick={this.props.handleClick} className="arrow3" xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 56 40">
          <polyline fill="none" stroke="#FEF9FB" strokeLinecap="round" strokeWidth="5" points="695 975.258 720 943 720 943 745 975.258" transform="matrix(1 0 0 -1 -692 978.258)"/>
        </svg>
      </section>
    );
  }

}

export default ProjectGallery;
