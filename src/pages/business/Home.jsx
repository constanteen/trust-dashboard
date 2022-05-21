import React from 'react';
import DashboardNav from '../../components/DashboardNav';
import HelpLogo from "../../assets/images/help.png";
import AnnouncementLogo from "../../assets/images/announcement.png";

export default function BusinessHome() {
	return (
    <>
      <DashboardNav />
      <section className="m-4">
        <div class="row">
          <div class="col-8">
            <div className="row">
              <div className="col">
                <div class="card border-0 card_shadow bg-primary">
                  <div class="card-body p-4 text-white">
                    <div>Account Balance</div>
                    <p className="h3 fw-normal mt-2 mb-4">$1,000,000</p>
                    <div>
                      <button type="button" className="btn btn-light px-4 text-primary">
                        Add Money
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card border-0 card_shadow">
                  <div class="card-body p-4 text-dark">
                    <div>Money In</div>
                    <p className="h3 fw-normal mt-2 mb-4">$20,000</p>
                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-primary px-3 text-white">
                        Request Money
                      </button>
                      <button type="button" className="btn btn-primary px-3 text-white">
                        View Transactions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card border-0 card_shadow">
              <div class="card-body p-4 text-dark">
                <div>Money Out</div>
                <p className="h3 fw-normal mt-2 mb-4">$15,000</p>
                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-primary text-white">
                    Add Money
                  </button>
                  <button type="button" className="btn btn-primary text-white">
                    View Transactions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SEND MONEY */}
        <div class="row mt-4">
          <div className="col-8">
            <div class="card border-0 card_shadow">
              <div class="card-body">
                <div className="row">
                  <div className="col-8">
                    <p>Send Money</p>
                    <div>
                      <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-4 col-form-label">Recepient 1</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control" id="staticEmail" placeholder="Add wallet address, email, mobile number" />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-4 col-form-label">Recepient 2</label>
                        <div class="col-sm-8">
                          <input type="password" class="form-control" id="inputPassword" placeholder="Add wallet address, email, mobile number" />
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto">
                      <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-primary px-3 text-white ms-auto">
                          Add Recepient
                        </button>
                        <button type="button" className="btn btn-primary px-3 text-white ms-4 w-25">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <p>&nbsp;</p>
                    <div className="">
                      <div className="mb-3 row">
                        <div className="col-12">
                          <input type="text"  class="form-control text-center" id="recepientOneAmount" placeholder="Amount" />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <div className="col-12">
                          <input type="text"  class="form-control text-center" id="recepientTwoAmount" placeholder="Amount" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <p>&nbsp;</p>
                    <div className="">
                      <div className="mb-3 row">
                        <div className="col-12">
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Reason</option>
                            <option value="1">Payroll</option>
                            <option value="2">Travel</option>
                            <option value="3">Subscriptions</option>
                            <option value="3">Professional Fees</option>
                            <option value="3">Utilities</option>
                          </select>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <div className="col-12">
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Reason</option>
                            <option value="1">Payroll</option>
                            <option value="2">Travel</option>
                            <option value="3">Subscriptions</option>
                            <option value="3">Professional Fees</option>
                            <option value="3">Utilities</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-0 h-100">
              <div className="card-body card_shadow">
              <p>Announcement</p>
              <div className="d-flex justify-content-center">
                <img src={AnnouncementLogo} width={80} />
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* CREATE AN INVOICE  */}
        <div class="row mt-4">
          <div className="col-8">
            <div class="card border-0 card_shadow">
              <div class="card-body">
                <div className="row">
                  <p>Create an Invoice</p>
                  <div className="col-2"></div>
                  <div className="col-6">
                    <div>
                      <div class="mb-3 row">
                        <div class="">
                          <input type="text" class="form-control" id="invoiceName" placeholder="Customer wallet address, email, mobile number" />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <div class="">
                          <textarea type="text" class="form-control" id="inputPassword" placeholder="Item description" />
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto">
                      <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-primary px-5 text-white ms-auto">
                          Send
                        </button>
                        <button type="button" className="btn btn-primary px-3 text-white ms-4">
                          More Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="">
                      <div className="mb-3 row">
                        <div className="col-8">
                          <input type="text"  class="form-control text-center" id="recepientOneAmount" placeholder="Item Amount" />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <div className="col-8">
                          <input type="text"  class="form-control text-center" id="recepientTwoAmount" placeholder="Currency" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-0 h-100">
              <div className="card-body card_shadow">
                <p>Help Center</p>
                <div className="d-flex justify-content-center">
                  <img src={HelpLogo} width={250} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
	);
}
