const React = require('react');

class LedeB extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { hasError, idyll, updateProps, clickCount, ...props } = this.props;
    return (
      <div className={'lede lede-b'}>
        {props.children}
      </div>
    );
  }
}

module.exports = LedeB;
