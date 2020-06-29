const React = require('react');

class MattNote extends React.Component {
  render() {
    const { idyll, updateProps, hasError, ...props } = this.props;
    return (
      <div stlye={{color: 'red', fontFamily: 'monospace'}}>
        {props.children}
      </div>
    );
  }
}


module.exports = MattNote;
