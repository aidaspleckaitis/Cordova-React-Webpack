import React, { Suspense } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../style/index.scss";
import reduxActions from "../reduxActions";

const Button = React.lazy(() => import("./components/Button"));

class App extends React.Component {
  componentDidMount() {
    const { fetchIssues } = this.props;
    fetchIssues();
  }

  render() {
    const { issuesList, sampleValue, increment } = this.props;
    console.log("sampleValue: ", sampleValue);
    console.log("issuesList: ", issuesList);
    return (
      <div className="App">
        <h1>Cordova!</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Button greeting="React!" />
          <Button greeting="Cordova!" />
          <Button greeting="React-Native!" action={increment} />
          <Button greeting="Styled Components!" />
          <Button greeting="Webpack!" />
          <Button greeting="Code Splitting!" />
          {sampleValue}
        </Suspense>
      </div>
    );
  }
}

const enhance = connect(
  state => ({
    sampleValue: reduxActions.selectors.getSample(state),
    issuesList: state.data.data
  }),
  dispatch =>
    bindActionCreators(
      {
        increment: reduxActions.actions.sample,
        fetchIssues: reduxActions.actions.fetchIssues
      },
      dispatch
    )
);

export default enhance(App);
