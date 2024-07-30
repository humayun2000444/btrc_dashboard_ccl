import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Col,
  Nav,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import "../../../../assets/scss/pages/authentication.scss";
import ConsultantLoginJWT from "./ConsultantLoginJWT";
import LoginNavbar from "./LoginNavbar";

class ConsultantLogin extends React.Component {
  state = {
    activeTab: "1",
  };
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };
  render() {
    return (
      <div>
        <LoginNavbar />

        <div className="bg-authentication" style={{ backgroundColor: "#fff" }}>
          <div className="responsive-top">
            <Row className="m-0 justify-content-center">
              <Col
                lg="6"
                md="6"
                className="d-lg-block-bg d-none text-center align-self-center px-1 py-0"
              >
                <div
                  className="flexbox-container"
                  style={{ backgroundColor: "#EAF6F9" }}
                >
                  {/*   <img src={loginImg} alt="loginImg" />*/}
                </div>
              </Col>
              <Col lg="6" md="6" className="p-0  ">
                <div
                  className="flexbox-container2"
                  style={{ backgroundColor: "#fff" }}
                >
                  <Card
                    className="rounded-0 mb-0 px-2 md-p"
                    style={{ boxShadow: "none", width: "100%" }}
                  >
                    <CardHeader className="pb-1">
                      <CardTitle>
                        <h4 className="mb-0">Consultant Login</h4>
                      </CardTitle>
                    </CardHeader>
                    <p className=" pl-4 auth-title">
                      Welcome back, please login to your account.
                    </p>
                    <Nav tabs className="px-2"></Nav>

                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <ConsultantLoginJWT />
                      </TabPane>

                      {/* <TabPane tabId="2">
                      <LoginFirebase />
                    </TabPane>
                    
                    <TabPane tabId="3">
                      <LoginAuth0 />
                    </TabPane> */}
                    </TabContent>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default ConsultantLogin;
