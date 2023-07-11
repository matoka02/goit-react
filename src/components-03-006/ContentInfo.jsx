import { Component } from 'react';

class ContentInfo extends Component {
  state = { };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (prevProps.searchText !== this.props.searchText) {
      fetch()
    }
  };

  render(){
    return(<></>)
  }
};

export default ContentInfo;
