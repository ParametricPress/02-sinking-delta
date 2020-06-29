const React = require('react');

class LedeA extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { hasError, idyll, updateProps, clickCount, ...props } = this.props;
    return (
      <div className={'lede lede-a'}>
        {props.children}
      </div>
    );
  }
}

module.exports = LedeA;
