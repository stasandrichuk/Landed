import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Utils
import { numberWithCommas } from 'utils/price';

// Components
import Press from 'components/Helpers/Press';

// Styles
import s from './index.css';

@observer
export default class Home extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      calc: {
        expand: false,
        monthly: {
          first: 0, // 0.00385
          second: 0, // 0.0049
        },
        downpayment: {
          first: 0, // 20%
          second: 0, // 10%
        },
        landed: {
          first: 0, // 10%
          second: 0, // 0.00385
        },
      },
    };
  }

  componentDidMount() {
    const { app } = this.context;

    window.addEventListener('scroll', this.parallax);

    app.headerSetColor('white');
    app.hideMenu();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax);
  }

  parallax = () => {
    const top = (window.pageYOffset - this.refs.parallax.offsetTop) / 10;

    if (screen.width >= 667) {
      this.refs.parallax.style.backgroundPosition = `0px ${top}px`;
    }
  }

  calculate = () => {
    const value = this.refs.calc.value;
    const defaultValue = this.refs.calc.defaultValue;

    const data = value !== '' ? value : defaultValue;

    const getPrice = (price) => (
      price > 100
        ? numberWithCommas(price.toFixed(0))
        : numberWithCommas(price.toFixed(1))
    );

    if (data !== '') {
      this.setState({
        calc: {
          expand: true,
          monthly: {
            first: getPrice(data * 0.00385),
            second: getPrice(data * 0.0049),
          },
          downpayment: {
            first: getPrice(20 / 100 * data),
            second: getPrice(10 / 100 * data),
          },
          landed: {
            first: getPrice(20 / 100 * data),
            second: getPrice(data * 0.00385),
          },
        },
      });
    }
  }

  render() {
    const { calc: { expand, monthly, downpayment, landed } } = this.state;

    return (
      <section className={s.root}>
        <Helmet title="Home page" />

        <div
          ref="parallax"
          className={s.image}
        >
          <Grid>
            <Row>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={12} mdOffset={0}
                lg={12} lgOffset={0}
              >
                <p className={s.title}>
                  <i>If you work at school,</i>
                  we’ll help you buy a home
                </p>
                <p className={s.intro}>
                  Landed makes buying a home more affordable and less risky by investing alongside you when you make a down payment.
                  Our first priority is helping teachers and school staff become homeowners.
                </p>
                <br />
                <Link
                  to="get-started"
                  className={s['get-started']}
                >
                  Get started
                </Link>
              </Col>
            </Row>
          </Grid>

          <div className={cx(s.calc, s.calcstart, { [s.expland]: expand })}>
            <p className={s.lead}>
              Think you can’t buy a home?
              <br />
              Check out in our calculator
            </p>

            <span className={s.want}>
              I want to buy<br />a home for $
            </span>
            <input
              ref="calc"
              type="text"
              defaultValue=""
              className={s.form}
              onChange={() => { this.calculate(); }}
            />
          </div>

          <div className={cx(s.calc, { [s.expland]: expand })}>
            <div className={s.results}>
              <p className={s.top}>
                Without Landed you had<br />two options:
              </p>

              <div className={s.option}>
                <p className={s.num}>
                  option 1
                </p>
                <div className={s.table}>
                  <div className={cx(s['left-side'], s.red)}>
                    <p className={s.large}>
                      large
                    </p>
                    <p className={s.cost}>
                      downpayment
                    </p>
                    <p className={s.price}>
                      ${downpayment.first}
                    </p>
                  </div>
                  <div className={cx(s['right-side'], s.green)}>
                    <p className={s.small}>
                      small
                    </p>
                    <p className={s.cost}>
                      monthly cost
                    </p>
                    <p className={s.price}>
                      ${monthly.first}
                    </p>
                  </div>
                </div>
              </div>

              <div className={s.option}>
                <p className={s.num}>
                  option 1
                </p>
                <div className={s.table}>
                  <div className={cx(s['left-side'], s.red)}>
                    <p className={s.small}>
                      small
                    </p>
                    <p className={s.cost}>
                      downpayment
                    </p>
                    <p className={s.price}>
                      ${downpayment.second}
                    </p>
                  </div>
                  <div className={cx(s['right-side'], s.green)}>
                    <p className={s.large}>
                      large
                    </p>
                    <p className={s.cost}>
                      monthly cost
                    </p>
                    <p className={s.price}>
                      ${monthly.second}
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <span className={s['left-arrow']} />
              <p className={s.middle}>
                Landed allowes you<br />to take best parts of both
              </p>
              <span className={s['right-arrow']} />

              <div className={s['calc-table']}>
                <div className={s.table}>
                  <div className={s['left-side']}>
                    <p className={s.small}>
                      small
                    </p>
                    <p className={s.cost}>
                      downpayment
                    </p>
                    <p className={s.price}>
                      ${landed.first}
                    </p>
                  </div>
                  <div className={s['right-side']}>
                    <p className={s.small}>
                      small
                    </p>
                    <p className={s.cost}>
                      monthly cost
                    </p>
                    <p className={s.price}>
                      ${landed.second}
                    </p>
                  </div>
                </div>
              </div>

              <Link to="how-it-works" className={s.learn}>
                learn more about how it works
              </Link>

              <div className={s.footer} />
            </div>

          </div>
        </div>

        <div className={s.how}>
          <p className={s.head}>
            What can Landed do for you?
          </p>

          <Grid className={s['one-two-three']}>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
              >
                <img src={require('./files/p1.jpg')} />
                <span className={s.num}>
                  1
                </span>
                <p>
                  <strong>A Landed program is started at your school</strong> and local investors are brought in to back the program.
                </p>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
              >
                <img src={require('./files/p2.jpg')} />
                <span className={s.num}>
                  2
                </span>
                <p>
                  <strong>You apply to receive funds</strong> from your school’s Landed program, covering up to 50% of the downpayment you need.
                </p>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
              >
                <img src={require('./files/p3.jpg')} />
                <span className={s.num}>
                  3
                </span>
                <p>
                  <strong>Landed helps you find and buy a home</strong> near where
                    you work. We pay half the
                    down payment when
                    you re ready to buy
                </p>
              </Col>
            </Row>
          </Grid>

          <i>
            Sound too good to be true?
          </i>

          <span className={s.learn}>
            learn more about how it works
          </span>

        </div>

        <Press />

        {/*
          <div className={s.invest}>
            <i>
              Want to invest in your community while getting<br />a market-rate return?
            </i>
            <span className={s.program}>
              Invest in a Landed Program
            </span>

            <img
              src={ovalLeft}
              className={s['oval-left']}
              role="presentation"
            />
            <img
              src={ovalCenter}
              className={s['oval-center']}
              role="presentation"
            />
            <img
              src={ovalRight}
              className={s['oval-right']}
              role="presentation"
            />
          </div>
        */}
      </section>
    );
  }
}
