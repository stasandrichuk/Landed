import React, { Component } from 'react';

/* stories */
import { FirstStory } from './_first-story';
import { SecondStory } from './_second-story';

const RENTAL = [{
  prop: 'Investment Percentage',
  val: '10% (half of the down payment).',
}, {
  prop: 'Shared Appreciation / Depreciation',
  val: '25% of the change in home value (up or down).',
}, {
  prop: 'Expiration',
  val: '7 years. Homeowner must then refinance and pay-off the investment.',
}, {
  prop: 'Investor Protection',
  val:  'Can force a sale in the case of illegal activity, intentional value destruction, failure to pay home costs.',
}, {
  prop: 'Repair Handling',
  val: 'Homeowner handles all repairs.',
/*  prop: 'Base Rent',
  val: 'Market rent.',
}, {
  prop: 'Rent Discount/Premium',
  val: 'None.',
}, {
  prop: 'Rent Increases',
  val: 'Assessed annually based on local rent index. ',
}, {
  prop: 'Rent Increase Limit',
  val: 'No more than 20% every 3 years.',
}, {
  prop: 'Rent Period',
  val: '5 years.  Resident can move out early but responsible for sublet.',
}, {
  prop: 'Repair Handling',
  val: 'Resident pays for minor repairs.  Major repairs paid by investor.',
*/
}];

const PURCHASE = [{
  prop: 'Buy-Back Timeline',
  val: 'Can buy-back any amount at any time, after 1 year.',
}, {
  prop: 'Early Buy-Back Price',
  val: 'Buy-back price based on local price index.',
}, {
  prop: 'Minimum Early Buy-Back Price',
  val: 'No lower than the original investment amount.',
}];

const diego = require('./files/diego.jpg');
const jennifer = require('./files/jennifer.jpg');


export class Employer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showFirstStory: false,
      showSecondStory: false,
    };
  }

  render() {
    const { showFirstStory, showSecondStory } = this.state;

    function renderTable(data) {
      return data.map((field, key) =>
        <div className="row"
             key={ key }>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
            <p className="field-prop">
              { field.prop }
            </p>
          </div>
          <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
            <p className="field-val">
              { field.val }
            </p>
          </div>
        </div>
      );
    }

    function renderLandedSupport() {
      return (
        <div className="landed-support">
          <p className="title">
            Landed Support
          </p>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Legal and compliance infrastructure
              </p>
            </span>
          </div>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Investor dashboards and reporting
              </p>
            </span>
          </div>
          <div className="list">
            <span className="icon" />
            <span className="text">
              <p>
                Ongoing support and mediation
              </p>
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row lease-and-shared">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p className="ul-title">
              Employer / Union Benefits
            </p>
            <ul>
              <li>
                Expand your recruitment pool. 
              </li>
              <li>
                Build engagement and loyalty.
              </li>
              <li>
                D
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p className="ul-title">
              Landed Advantage
            </p>
            <ul>
              <li>
                <strong>Stay at arm's length.</strong> Don't put the relationship between faculty and administration at risk. 
              </li>
              <li>
                <strong>No increase in overhead.</strong> Landed takes care of all regulatory and compliance infrastructure.
              </li>
              <li>
                <strong>Leverage Landed's network.</strong> Through standardization, Landed makes the investment more compelling.
              </li>
            </ul>
          </div>
        </div>

        {/*<div className="row terms">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <p className="title">
              Standard terms
            </p>
            <p className="text">
              Our basic terms have been developed based on years of experience and reflect what an independent investor might accept.
            </p>
            <div className="hidden-xs hidden-sm">
              { renderLandedSupport() }
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 terms-table">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Option Terms
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Example
              </p>
            </div>
            { renderTable(RENTAL) }

            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 left-side">
              <p className="field-name-prop">
                Buy-Back Terms
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 right-side">
              <p className="field-name-val">
                Example
              </p>
            </div>
            { renderTable(PURCHASE) }
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="hidden-md hidden-lg">
              { renderLandedSupport() }
            </div>
          </div>
        </div>

        <div className="row examples">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p className="title">
              Examples
            </p>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 story-block">
            <div className="row"
                 onClick={() => this.setState({showFirstStory: !showFirstStory ? true : false, showSecondStory: false})}>
              <div className="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                <img src={ diego } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showFirstStory && 'active'}`}>
                  
                  <span className="story-title">
                    Diego
                      <br />

                  </span>
                  Getting simple help from parents.
                  <br />
                                    <span className="read">
                    Read Diego’s story
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 story-block">
            <div className="row"
                 onClick={() => this.setState({showFirstStory: false, showSecondStory: !showSecondStory ? true : false})}>
              <div className="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                <img src={ jennifer } />
              </div>
              <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9">
                <p className={`text ${showSecondStory && 'active'}`}>
                  <span className="story-title">
                    Jennifer
                    <br />
                  </span>
                  Fair deal from her community.
                  <br />
                  <span className="read">
                    Read Jennifer’s story
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className={`story ${showFirstStory && 'show'}`}>
              <FirstStory />
            </div>
            <div className={`story ${showSecondStory && 'show'}`}>
              <SecondStory />
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}
