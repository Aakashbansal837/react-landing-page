import React, { Component } from "react";
import { heatmapDisc } from "../../../constants";
import Coverage from "./Coverage";

const MainData = {
  name: "Godda ( District )",
  data: {
    villages: 201,
    schools: 246,
    teachers: 2017,
    students: 53765
  }
};

class Heatmap extends Component {
  state = MainData;
  setHeatMapData(name, data) {
    this.setState({
      name: name + " ( Block )",
      data: data
    });
  }
  render() {
    return (
      <div className="htmp">
        <center className="htmp-header">Heatmap/coverage</center>
        <div className="container htmp-txt">
          <div className="row">
            <center>
              <div
                className="col-md-10 col-lg-10 col-sm-10 col-xs-12"
                data-aos="fade-in-up"
                data-aos-duration="1000"
              >
                <span className="htmp-disc">{heatmapDisc}</span>
              </div>
            </center>
            <div className="col">
              <div className="htmp-mp" onClick={() => this.setState(MainData)}>
                <div className="row">
                  <div className="col-md-1 col-lg-1 d-none d-md-block"></div>
                  <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                    <div
                      className="htmp-map"
                      data-aos="zoom-out"
                      data-aos-duration="1500"
                    >
                      <center>
                        <Coverage
                          setHeatMapData={this.setHeatMapData.bind(this)}
                        />
                      </center>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <center>
                      <div className="container-fluid">
                        <div className="htmp-data">
                          <div className="row">
                            <div
                              className="col-12 px-0"
                              data-aos="zoom-in-down"
                              data-aos-duration="1000"
                            >
                              <center
                                style={{ cursor: "pointer" }}
                                className="htmp-data-ht"
                              >
                                {this.state.name}
                              </center>
                            </div>
                            <div className="col">
                              <div className="row">
                                <div className="col-6 px-0">
                                  <div
                                    className="htmp-data-box"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                  >
                                    <center>
                                      <span className="htmp-data-ht-blue">
                                        {this.state.data.villages}
                                      </span>
                                      <br />
                                      <span className="htmp-data-ht-black">
                                        Number of Villages
                                      </span>
                                    </center>
                                  </div>
                                </div>
                                <div className="col-6 px-0">
                                  <div
                                    className="htmp-data-box"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                  >
                                    <center>
                                      <span className="htmp-data-ht-blue">
                                        {this.state.data.schools}
                                      </span>
                                      <br />
                                      <span className="htmp-data-ht-black">
                                        Number of Schools
                                      </span>
                                    </center>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-6 px-0">
                                  <div
                                    className="htmp-data-box"
                                    data-aos="zoom-out"
                                    data-aos-duration="1000"
                                  >
                                    <center>
                                      <span className="htmp-data-ht-blue">
                                        {this.state.data.teachers}
                                      </span>
                                      <br />
                                      <span className="htmp-data-ht-black">
                                        Number of Teachers
                                      </span>
                                    </center>
                                  </div>
                                </div>
                                <div className="col-6 px-0">
                                  <div
                                    className="htmp-data-box"
                                    data-aos="zoom-out"
                                    data-aos-duration="1000"
                                  >
                                    <center>
                                      <span className="htmp-data-ht-blue">
                                        {this.state.data.students}
                                      </span>
                                      <br />
                                      <span className="htmp-data-ht-black">
                                        Number of Students
                                      </span>
                                    </center>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="htmp-bg"></div>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Heatmap;
