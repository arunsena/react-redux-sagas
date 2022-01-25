// fetch the data
// data = [{name: 'yorkie', size: 'SM'}, {name: 'yorkie1', size: 'MD', {name: 'yorkie2', size: 'LG'}]

// app.js
// 1. connect to store using connect(mapstatetoprops, mapdisptachtoprops)(componentGoeshere);
// 2. dispatch the actions.
// 3. consume data in child components

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "./actions";

import PostsContainer from "./PostsContainer";

const MainApp = (props) => {
  const { actions } = props;

  console.log("We are in MainApp", { actions }); // it will print 2 times

  useEffect(() => {
    // dispatch
    actions.fetchPosts();
  }, [actions]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <PostsContainer></PostsContainer>
      <PostsContainer></PostsContainer>
      <PostsContainer></PostsContainer>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(postActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
