import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Input, notification, Row } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Password from "antd/lib/input/Password";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { withRouter } from "react-router-dom";
import { axiosInstance } from "../../commons/commons";
import { tokenKey } from "../../constants/constants";
import { loginUrl } from "../../constants/url";

class LoginForm extends React.Component {
  state = {
    username: null,
    password: null,
    remember: true,
    loading: false,
    activeKey: "user",
  };

  onLoginClicked = async () => {
    this.setState({ loading: true });
    await axiosInstance
      .post(loginUrl, this.state)
      .then((res) => {
        if (!res.data.success)
          return notification.error({
            message: "Fail",
            description: res.data.message,
          });
        localStorage.setItem(tokenKey, res.data.message.token);
        window.location.replace("/");
      })
      .catch((err) => {
        return notification.error({
          message: "Error",
          description: err.message,
        });
      });
    this.setState({ loading: false });
  };

  componentDidMount = () => {};

  render() {
    return (
      <div className="loginWrap">
        <div style={{ height: window.innerHeight / 2 - 293 / 2 }}></div>
        <Row>
          <Col
            span={8}
            xs={{ span: 2 }}
            sm={{ span: 6 }}
            md={{ span: 6 }}
            lg={{ span: 8 }}
          ></Col>
          <Col
            span={8}
            xs={{ span: 20 }}
            sm={{ span: 12 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <div
              className="loginDiv"
              style={{
                height: "100%",
                width: "100%",
                borderBottom: "1px outset black",
              }}
            >
              <Row>
                <Col span={24} style={{ textAlign: "center" }}>
                  <Header className="site-layout-background">
                    <h2 style={{ color: "white" }}>LOGIN</h2>
                  </Header>
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col span={3} style={{ textAlign: "right" }}></Col>
                <Col span={18}>
                  <Input
                    autoFocus
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Username"
                    prefix={<UserOutlined />}
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                    value={this.state.username}
                  ></Input>
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col span={3} style={{ textAlign: "right" }}></Col>
                <Col span={18}>
                  <Password
                    placeholder="Password"
                    disabled={!this.state.username}
                    style={{ width: "100%" }}
                    prefix={<LockOutlined />}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    value={this.state.password}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") this.onLoginClicked();
                    }}
                  ></Password>
                </Col>
              </Row>
              <Row style={{ marginTop: 10 }}>
                <Col span={3}></Col>
                <Col span={9}>
                  <Checkbox
                    checked={this.state.remember}
                    onChange={(e) =>
                      this.setState({ remember: e.target.checked })
                    }
                  >
                    Remember me
                  </Checkbox>
                </Col>
              </Row>
              <Row style={{ marginTop: 20, marginBottom: 20 }}>
                <Col span={3}></Col>
                <Col span={18}>
                  <Button
                    style={{ width: "100%" }}
                    loading={this.state.loading}
                    onClick={() => this.onLoginClicked()}
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(LoginForm);
