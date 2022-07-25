import React from "react";

function Tabs() {
  return (
    <div className="row justify-content-end mt-2 mb-5">
      <div className="col-lg-4 w-100">
        <nav className="d-none d-sm-none d-md-block">
          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Dividends
            </a>
            <a
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Accounts
            </a>
          </div>
        </nav>
        <div className="tab-content py-1 px-1 px-sm-0" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="mr-2 ml-2">
              <div className="card-content">
                <div className="d-flex justify-content-between">
                  <a href="/#">
                    <small>
                      Available balance
                      <i className="fa fa-angle-down ml-1"></i>
                    </small>
                  </a>
                  <a href="/#">
                    <small>
                      Robinhood Main
                      <i className="fa fa-angle-down ml-1"></i>
                    </small>
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>$78.28</h5>
                  <h5>$78.28</h5>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mb-0">Cash</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">$78.28</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>5 accounts</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>$78.28</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between mb-0">
                  <div>
                    <h6 className="mb-0">Investments</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">$78.28</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>5 accounts</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>+$0.70 (2.85%)</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mb-0">Credit Cards</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">-$5376.36</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>5 accounts</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>53% used</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mb-0">Loans</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">-$8000.53</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>5 accounts</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>206.33 due on 3/11</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mb-0">Property</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">$56,739,398.27</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>3 properties</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>206.33 due on 3/11</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between mb-0">
                  <div style={{ color: "grey" }}>
                    <p className="mb-0">ASSETS</p>
                  </div>
                  <div style={{ color: "grey" }}>
                    <p className="mb-0">$2,987.45</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0 mb-0">
                  <div style={{ color: "grey" }}>
                    <p>DEBTS</p>
                  </div>
                  <div style={{ color: "grey" }}>
                    <p>-$11,402.60</p>
                  </div>
                </div>
                <hr className="bg-white mt-0 mb-0" />
                <div
                  className="d-flex justify-content-between"
                  style={{ color: "grey" }}
                >
                  <p>NET WORTH</p>
                  <p>-$8,415.15</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col text-center">
                  <button className="btn btn-dark account-btn bg-transparent mt-3 text-center">
                    Add Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="mr-2 ml-2">
              <div className="card-content">
                <div className="d-flex justify-content-between">
                  <a href="/#">
                    <small>
                      Available balance
                      <i className="fa fa-angle-down ml-1"></i>
                    </small>
                  </a>
                  <a href="/#">
                    <small>
                      Robinhood Main
                      <i className="fa fa-angle-down ml-1"></i>
                    </small>
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>$78.28</h5>
                  <h5>$78.28</h5>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mb-0">Cash</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">$78.28</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>5 accounts</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>$78.28</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between mb-0">
                  <div>
                    <h6 className="mb-0">Investments</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">$78.28</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>5 accounts</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>+$0.70 (2.85%)</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mb-0">Credit Cards</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">-$5376.36</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>5 accounts</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>53% used</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mb-0">Loans</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">-$8000.53</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>5 accounts</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>206.33 due on 3/11</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mb-0">Property</h6>
                  </div>
                  <div>
                    <h6 className="mb-0">$56,739,398.27</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0">
                  <div>
                    <small style={{ color: "grey" }}>3 properties</small>
                  </div>
                  <div>
                    <small style={{ color: "grey" }}>206.33 due on 3/11</small>
                  </div>
                </div>
              </div>
              <div className="card-content mt-2">
                <div className="d-flex justify-content-between mb-0">
                  <div style={{ color: "grey" }}>
                    <p className="mb-0">ASSETS</p>
                  </div>
                  <div style={{ color: "grey" }}>
                    <p className="mb-0">$2,987.45</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-0 mb-0">
                  <div style={{ color: "grey" }}>
                    <p>DEBTS</p>
                  </div>
                  <div style={{ color: "grey" }}>
                    <p>-$11,402.60</p>
                  </div>
                </div>
                <hr className="bg-white mt-0 mb-0" />
                <div
                  className="d-flex justify-content-between"
                  style={{ color: "grey" }}
                >
                  <p>NET WORTH</p>
                  <p>-$8,415.15</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col text-center">
                  <button className="btn btn-dark account-btn bg-transparent mt-3 text-center">
                    Add Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
