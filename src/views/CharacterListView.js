import React from "react";
import { connect } from "react-redux";
import {getChar} from '../actions';

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  // constructor() {
  //   super();

  // }

  state = {
    characters:[],
    error: '',
    isLoading: false
  }

  // getChar = () => {
  //   this.props.getChar();
  // }

  componentDidMount() {
    this.props.getChar();
  }

  render() {
    console.log(this.props.characters);
    console.log(this.props.isLoading);
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      return (<div>Loading...</div>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
    console.log(state)
    return{
      characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading,
    error: state.charsReducer.error}
  };

export default connect(mapStateToProps, {getChar})(CharacterListView);
