import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PostsActions } from "../../store/ducks/posts";
import Post from "../../components/Post";
import "./styles.scss";

class Home extends Component {
  state = {
    text: ""
  };

  handleAddPost = () => {
    console.log(this.state.text);
    this.props.addPost(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <Fragment>
        <div className="input-box">
          <input
            placeholder="Escreva o que você está pensando, menos textão!"
            onChange={event => this.setState({ text: event.target.value })}
            value={this.state.text}
          />
          <button onClick={this.handleAddPost}>Adicionar Post</button>
        </div>
        {this.props.posts.map((post, index) => (
          <Post
            key={index}
            message={post.text}
            handleRemove={() => this.props.removePost(post.id)}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
