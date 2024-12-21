import React from "react";

import "../config/config.js";
import axios from "axios";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome_list: "",
    };
  }

  componentDidMount() {
    console.log(global.AppConfig,222)
    let api = "http://localhost:8080/hello";

    // const axios = require("axios");

    axios
      .get(api)

      .then((response) => {
        // handle success

        console.log(response.data);

        let tempData = response.data;

        this.setState({
          welcome_list: tempData,
        });
      })

      .catch(function (error) {
        // handle error

        console.log(error);
      });
  }

  render() {
    return <div>欢迎来到{this.state.welcome_list}</div>;
  }
}

export default Welcome;
