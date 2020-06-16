import React from 'react'

const styles = {
  active : {
    display : 'inherit'
    
  },
  inactive : {
    display : 'none'
    
  }
};

const titlestyles = {
  active : {
    color : 'green'
  },

  inactive : {
    color : 'black'
  }
};




export default class Accordion extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      active : false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active : !this.state.active
    })
  };


  render(){

    const stateStyle = this.state.active ? styles.active : styles.inactive;
    const titlestate = this.state.active ? titlestyles.active : titlestyles.inactive;
    return(
      <section className="container">
        <a className ="gametitle" style={titlestate}  onClick={this.toggle} >
          {this.props.title}
        </a>
        <p className="gamedescription"    style={stateStyle}>
          {this.props.text}
        </p>
      </section>
    )
  }
}


