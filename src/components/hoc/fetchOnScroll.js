import React, {Component} from 'react';

export default function (InnerComponent) {
  class FetchOnScrollComponent extends Component {
    componentDidMount() {
      if (this.props.shouldScroll) {
        this.props.scrollFunction();
      }

      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = (event) => {
      if (this.isAtBottom()) {
        this.props.scrollFunction();
      }
    }

    isAtBottom() {
      const d = document.documentElement;
      const offset = d.scrollTop + window.innerHeight;
      const height = d.offsetHeight;

      return offset + 100 > height;
    }

    render() {
      const {scrollFunction, shouldScroll, ...props} = this.props;

      return <InnerComponent {...props} />;
    }
  }

  return FetchOnScrollComponent;
}
