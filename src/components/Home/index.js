import React, { Component } from 'react';
import { connect } from "react-redux";

class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Home
            </div>
        )
    }
}


const mapStateToProps = (state) => {  
    return {
      home: state.home
    }
  }
  
  const mapDispatchToProps = (dispatch) => {  
      return {
          onClick(data){
            console.log(3)
          }
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Home);  
