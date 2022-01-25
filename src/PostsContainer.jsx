import React from "react";
import { connect } from "react-redux";

import Posts from "./Posts";

const PostsContainer = (props) => {
  const { data } = props;

  console.log("We are in PostsContainer", { data });

  return <Posts posts={data}></Posts>;
};

const mapStateToProps = (state) => ({
  data: state.posts.data,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
