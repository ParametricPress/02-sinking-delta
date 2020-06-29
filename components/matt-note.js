const React = require('react');

class MattNote extends React.Component {
  render() {
    const { idyll, updateProps, hasError, ...props } = this.props;
    return (
      <div style={{color: '#aa4444', fontFamily: 'monospace'}}>
        {props.children} <em>- Matt C.</em>
      </div>
    );
  }
}


module.exports = MattNote;
