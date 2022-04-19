import { Column } from "@ant-design/charts";
import { SearchOutlined } from "@ant-design/icons";
import {
  Card,
  Col,
  Empty,
  Input,
  message,
  notification,
  Row,
  Select,
} from "antd";
import React from "react";
import { withRouter } from "react-router-dom";
import { axiosInstance } from "../../commons/commons";

class Home extends React.Component {
  state = {
    rates: { base: "EUR", data: {} },
    ipInfo: { data: null, ip: "" },
  };

  getAndPopulateRates = async () => {
    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://api.exchangerate.host/latest" +
        (this.state.baseCurrency ? "?base=" + this.state.baseCurrency : "")
    );
    request.responseType = "json";
    request.send();
    request.onload = () => {
      console.log(request.response);
      this.setState({
        rates: { base: this.state.rates.base, data: request.response.rates },
      });
    };
  };

  getAndPopulateIP = async () => {
    if (!this.state.ipInfo.ip)
      return message.warn("Please enter an valid ip address");
    axiosInstance
      .post("http://ip-api.com/batch", [{ query: this.state.ipInfo.ip }])
      .then((res) => {
        if (res.data && res.data.length) {
          this.setState({
            ipInfo: { ip: this.state.ipInfo.ip, data: res.data[0] },
          });
        } else
          notification.error({
            message: "Fail",
            description: "Something went wrong!",
          });
      })
      .catch((err) =>
        notification.error({
          message: "Fail",
          description: err.message || "Something went wrong!",
        })
      );
  };

  componentDidMount() {
    this.getAndPopulateRates();
    // setInterval(() => {
    //   this.getAndPopulateRates();
    // }, 3000);
  }

  render() {
    return (
      <div>
        <Row gutter={8} style={{ marginTop: 10 }}>
          <Col span={12} xs={24} sm={24} md={12} lg={12}>
            <Card
              title={
                <Row>
                  <Col
                    span={8}
                    xs={12}
                    sm={12}
                    md={8}
                    lg={8}
                    style={{ textAlign: "left" }}
                  >
                    Exchange Rate
                  </Col>
                  <Col span={8} xs={0} sm={0} md={8} lg={8}></Col>
                  <Col span={8} xs={12} sm={12} md={8} lg={8} style={{}}>
                    <Select
                      style={{ width: "100%" }}
                      showSearch
                      placeholder="Select base currency"
                      optionFilterProp="children"
                      onChange={(currency) => {
                        this.setState(
                          {
                            rates: {
                              base: currency,
                              data: this.state.rates.data,
                            },
                          },
                          () => this.getAndPopulateRates()
                        );
                      }}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      value={this.state.rates.base}
                    >
                      {Object.keys(this.state.rates.data || {}).map(
                        (currency) => (
                          <Select.Option value={currency}>
                            {currency}
                          </Select.Option>
                        )
                      )}
                    </Select>
                  </Col>
                </Row>
              }
              bordered
            >
              <Column
                {...{
                  data: Object.keys(this.state.rates.data || {}).map(
                    (currency) => ({
                      unit: currency,
                      rate: this.state.rates.data[currency],
                    })
                  ),
                  xField: "unit",
                  yField: "rate",
                  xAxis: {
                    label: {
                      autoRotate: false,
                    },
                  },
                  slider: {
                    start: 0,
                    end: 1,
                  },
                }}
              />
            </Card>
          </Col>
          <Col span={12} xs={24} sm={24} md={12} lg={12}>
            <Card
              title={
                <Row>
                  <Col
                    span={8}
                    xs={12}
                    sm={12}
                    md={8}
                    lg={8}
                    style={{ textAlign: "left" }}
                  >
                    Ip Info
                  </Col>
                  <Col span={8} xs={0} sm={0} md={8} lg={8}></Col>
                  <Col span={8} xs={12} sm={12} md={8} lg={8} style={{}}>
                    <Input
                      suffix={
                        <SearchOutlined
                          onClick={() => this.getAndPopulateIP()}
                        />
                      }
                      placeholder="Enter IP address"
                      onChange={(event) =>
                        this.setState({
                          ipInfo: { ip: event.target.value, data: null },
                        })
                      }
                    />
                  </Col>
                </Row>
              }
              bordered
            >
              {this.state.ipInfo.data ? (
                Object.keys(this.state.ipInfo.data || {}).map((key) => {
                  if (key !== "status" && key !== "query")
                    return (
                      <div>
                        {key[0].toUpperCase() +
                          key.slice(1) +
                          ": " +
                          this.state.ipInfo.data[key] || "N/A"}
                      </div>
                    );
                  return undefined;
                })
              ) : (
                <Empty />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Home);
