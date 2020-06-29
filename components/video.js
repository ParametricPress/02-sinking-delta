const React = require('react');

class Video extends React.Component {
  render() {
    const { idyll, updateProps, hasError, ...props } = this.props;
    return (
      <video src={this.props.src} muted={true} controls={false} autoPlay={true} loop={true} style={props.style} />
    );
  }
}


module.exports = Video;
