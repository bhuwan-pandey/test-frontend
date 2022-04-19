import Text from "antd/lib/typography/Text";
import React from "react";
import { withRouter } from "react-router-dom";
import "../../assets/css/404.css";

class FourOFour extends React.Component {
  render() {
    return (
      // <div
      //   style={{
      //     width: "100%",
      //     height: "100%",
      //     backgroundImage: 'url("error-gif.gif")',
      //     backgroundSize: "100% 100%",
      //   }}
      // ></div>
      <div id="containerrr">
        <Text className="st0 st1">404</Text>

        <div className="messagee">Page not found</div>
        <h3 className="des">
          It seems like you are lost or one of our developers fell asleep.
        </h3>
      </div>
    );
  }
}

export default withRouter(FourOFour);
