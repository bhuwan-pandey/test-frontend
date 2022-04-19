import React from "react";
import {
  Layout,
  Menu,
  Tooltip,
  Image,
  Select,
  Typography,
  Col,
  Row,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  tokenKey,
  decodedToken,
  theRoutes,
  theSubMenu,
} from "../../constants/constants";
import "../../assets/css/custom.css";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import FourOFour from "../auth/404";

/**
 * @typedef { { key: string, title: string, for: Array<string>,
 * icon: Icon, childs?: Array<subMenuObj> } } subMenuObj
 */
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      collapsed: true,
      defaultSelectedKeys: [
        window.location.pathname.split("/").pop() || "home",
      ],
      routableProps: {},
      search: { selectedKey: null },
      windowHeight: window.innerHeight,
    };
    this.onNavClick = this.onNavClick.bind(this);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  navaAble = (obj) => {
    this.setState(obj);
  };

  onNavClick = (e) => {
    this.setState({ defaultSelectedKeys: [e.key] });
    if (!this.state.collapsed) this.toggle();
  };

  /**
   * parse menu no matter how branched/deep it is
   * @param {Array<subMenuObj>} subMenu object of sub menus
   * @returns
   */
  menuParser = (subMenu = []) => {
    let parsedMenus = [];
    for (let sub of subMenu) {
      if (sub.childs && sub.childs.length) {
        // if loggedin user priviledged to see this sub menu
        if (sub.for.includes(decodedToken.value.role))
          parsedMenus.push(
            <Menu.SubMenu
              key={sub.key}
              icon={
                <Tooltip key={sub.key} title={sub.title}>
                  {sub.icon}
                </Tooltip>
              }
              title={
                <Tooltip key={sub.key} title={sub.title}>
                  <label>{sub.title}</label>
                </Tooltip>
              }
            >
              {this.menuParser(sub.childs)}
            </Menu.SubMenu>
          );
      } else {
        // if loggedin user priviledged to see this menu item
        if (sub.for.includes(decodedToken.value.role))
          parsedMenus.push(
            <Menu.Item icon={sub.icon} key={sub.key} onClick={this.onNavClick}>
              {sub.title}
            </Menu.Item>
          );
      }
    }
    return parsedMenus;
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth={40}

          // style={{ background: "#2CA9DF" }}
        >
          <div className="toggle" />
          <div
            style={{
              height: 60,
              textAlign: "center",
              paddingTop: this.state.collapsed ? 25 : 10,
              // paddingLeft: 10,
            }}
            onClick={this.toggle}
          >
            <Image
              alt="Sample"
              src=""
              width={this.state.collapsed ? 16 : 100}
              height={this.state.collapsed ? 16 : 45}
              preview={false}
            ></Image>
          </div>
          <Menu
            style={{ width: this.state.collapsed ? 40 : null }}
            key="1"
            theme="dark"
            mode="vertical"
            selectedKeys={this.state.defaultSelectedKeys}
            // defaultSelectedKeys={this.state.defaultSelectedKeys}
            // defaultOpenKeys={this.state.defaultSelectedKeys}
          >
            {this.menuParser(theSubMenu)}
          </Menu>
        </Layout.Sider>
        <Layout className="site-layout">
          <Layout.Header
            className="site-layout-background"
            style={{ padding: 0 }}
          >
            <Row>
              <Col
                span={20}
                xs={{ span: 0 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: 16,
                    width: "100%",
                  }}
                >
                  <Typography.Paragraph
                    ellipsis={{
                      rows: 1,
                      tooltip: true,
                    }}
                    style={{ color: "white", fontWeight: "bold", margin: 0 }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: 16,
                        width: 16,
                        height: 16,
                      }}
                      onClick={this.toggle}
                    >
                      {React.createElement(
                        this.state.collapsed
                          ? MenuUnfoldOutlined
                          : MenuFoldOutlined
                      )}
                    </span>
                    &nbsp;Sample Test
                  </Typography.Paragraph>
                </span>
              </Col>
              <Col
                span={0}
                xs={{ span: 14 }}
                sm={{ span: 5 }}
                md={{ span: 6 }}
                lg={{ span: 6 }}
              >
                <Select
                  showSearch
                  autoClearSearchValue
                  suffixIcon={<SearchOutlined />}
                  value={this.state.search.selectedValue}
                  style={{
                    width: "100%",
                    borderRadius: "24px",
                    MozBorderRadius: "24px",
                  }}
                  dropdownStyle={{
                    borderRadius: "10px",
                    MozBorderRadius: "10px",
                  }}
                  placeholder="Search"
                  optionFilterProp="children"
                  onSearch={this.onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  onChange={(val) => {
                    this.setState({
                      search: {
                        selectedKey: val,
                      },
                      defaultSelectedKeys: [val],
                    });
                  }}
                >
                  {theRoutes.map((route) => {
                    if (route.key !== "login") {
                      return route.for.includes(decodedToken.value.role) ? (
                        <Select.Option key={route.key} value={route.key}>
                          {route.name}
                        </Select.Option>
                      ) : null;
                    }
                    return null;
                  })}
                </Select>
              </Col>
              <Col
                span={0}
                xs={{ span: 1 }}
                sm={{ span: 1 }}
                md={{ span: 2 }}
                lg={{ span: 2 }}
              ></Col>
              <Col
                span={4}
                xs={{ span: 9 }}
                sm={{ span: 6 }}
                md={{ span: 4 }}
                lg={{ span: 4 }}
              >
                <Select
                  value={decodedToken.value.username}
                  style={{
                    // color: "w",
                    width: "99%",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                  onChange={(val) => {
                    if (val === "logout") {
                      localStorage.removeItem(tokenKey);
                      window.location.replace("login");
                    }
                  }}
                >
                  <Select.Option key="2" value="logout">
                    <span>
                      {React.createElement(LogoutOutlined)}
                      &nbsp;&nbsp;Logout
                    </span>
                  </Select.Option>
                </Select>
              </Col>
            </Row>
          </Layout.Header>
          <Layout.Content>
            <div
              id="theBody"
              className="thebody"
              style={{
                margin: "0px 0px 0px 0px",
                backgroundColor: "white",
                overflowY: "auto",
                overflowX: "hidden",
                height: this.state.windowHeight - 98, //98=header+footer
              }}
            >
              <BrowserRouter>
                <Switch>
                  {theRoutes.map((route) => {
                    return route.for.indexOf(decodedToken.value.role) !== -1 ? (
                      <Route
                        exact
                        {...route}
                        component={() => (
                          <route.component
                            navChange={this.onNavClick}
                          ></route.component>
                        )}
                      ></Route>
                    ) : null;
                  })}
                  <Route component={FourOFour}></Route>
                </Switch>
                <Redirect
                  to={{
                    pathname: "/" + this.state.defaultSelectedKeys[0],
                    ...this.state.routableProps,
                  }}
                ></Redirect>
              </BrowserRouter>
            </div>
          </Layout.Content>
          <Layout.Footer
            style={{
              textAlign: "center",
              backgroundColor: "#001529",
              paddingTop: "0px",
              paddingBottom: "0px",
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            <h3 style={{ color: "white" }}>
              {"By "}
              <a
                href="http://www.example.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "yellow" }}
              >
                Daemon
              </a>
              {" © "}
              {new Date().getFullYear()}
            </h3>
          </Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Navbar);
