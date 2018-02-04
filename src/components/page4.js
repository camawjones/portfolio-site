import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

class Page4 extends React.Component {
  state = {
    visible: false
  };

  onChange = isVisible => {
    isVisible
      ? this.setState({
          visible: true
        })
      : this.setState({
          visible: false
        });
  };

  render() {
    const componentClasses = ['shy'];
    const componentClassesMail = ['email'];
    if (this.state.visible) {
      componentClasses.push('show');
      componentClassesMail.push('show');
    }

    return (
      <section className="flex align page4">
        <div className="mail">
          <VisibilitySensor onChange={this.onChange} />
          <p className={componentClasses.join(' ')}>
            {"Don't be shy, say hi!"}
          </p>
          <div className={componentClassesMail.join(' ')}>
            <div>
              <i className="fa fa-envelope" aria-hidden="true" />{' '}
              camawjones@gmail.com
            </div>
            <p>
              <i className="fa fa-phone" aria-hidden="true" /> +447884063956
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Page4;
