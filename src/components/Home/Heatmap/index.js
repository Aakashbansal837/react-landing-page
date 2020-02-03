import React, { Component } from "react";
import "../../../styles/index.scss";
import { heatmapDisc } from "../../../constants";
import Coverage from "./Coverage";

class Heatmap extends Component {
  state = {
    name: "Godda",
    data: {
      villages: 0,
      schools: 0,
      teachers: 0,
      students: 0
    }
  };
  setHeatMapData(name, data) {
    this.setState({
      name: name,
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
              <div className="htmp-mp">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-10 col-xs-12">
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
                  <div className="col-md-6 col-lg-6 col-sm-10 col-xs-12">
                    <center>
                      <div className="container-fluid">
                        <div className="htmp-data">
                          <div className="row">
                            <div
                              className="col-12 px-0"
                              data-aos="zoom-in-down"
                              data-aos-duration="1000"
                            >
                              <center className="htmp-data-ht">
                                {this.state.name}
                              </center>
                            </div>
                            <div className="col">
                              <div className="row">
                                <div className="col-6 px-0">
                                  <div
                                    className="htmp-data-box"
                                    data-aos="zoom-in-right"
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
                                    data-aos="zoom-in-left"
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
                                    data-aos="zoom-in-right"
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
                                    data-aos="zoom-in-left"
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
