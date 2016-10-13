import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';
import Scroll, {Element, scroller} from 'react-scroll';

// Components
import Press from 'components/Helpers/Press';

// Styles
import s from './index.css';

@observer
export default class Home extends Component {

  static contextTypes = {
    app: PropTypes.object,
    calc: PropTypes.object,
  };

  componentDidMount() {
    const { app } = this.context;

    // window.addEventListener('scroll', this.parallax);

    app.headerSetColor('white');
    app.hideMenu();

    window.scrollTo(0, 0);
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

  render() {
    const { calc: {
      calculate,
      data: { expand, monthly, downpayment },
    } } = this.context;

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
                  If you work at a school,<br />
                  we’ll help you buy a home
                </p>
              </Col>
            </Row>
          </Grid>

          <div className={cx(s.calc, s.calcstart, { [s.expand]: expand })}>
            <p className={s.lead}>
              Think you can’t buy a home?
              <br />
              Let us surprise you.
            </p>
            <br />
            <span className={s.want}>
              <i>I want to buy<br />a home for</i>
            </span>
            <span className={s.dollar}>$</span>
            <input
              ref="calc"
              type="text"
              defaultValue="800000"
              className={s.form}
              onChange={() => { calculate(this.refs.calc.value, this.refs.calc.defaultValue); }}
            />
            <button
              className={s.learn}
              onClick={() => {
                scroller.scrollTo('calcStart', {
                  duration: 1200,
                  delay: 100,
                  smooth: true,
                });
              }}
            >
              go
            </button>
            <Link to="/how-it-works">
              go
            </Link>
          </div>

          <Element name="calcStart" />

          <div className={cx(s.calc, { [s.expand]: expand })}>
            <div className={s.results}>
              <p className={s.top}>
                Normally, you'd have two options:
              </p>

              <div className={s.option}>
                <p className={s.num}>
                  Total home costs with a 80% mortgage
                </p>
                <div className={s.table}>
                  <div className={cx(s['left-side'], s.red)}>
                    <p className={s.large}>
                      large
                    </p>
                    <p className={s.cost}>
                      down payment
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
                  Total home costs with a 90% mortgage
                </p>
                <div className={s.table}>
                  <div className={cx(s['left-side'], s.green)}>
                    <p className={s.small}>
                      small
                    </p>
                    <p className={s.cost}>
                      down payment
                    </p>
                    <p className={s.price}>
                      ${downpayment.second}
                    </p>
                  </div>
                  <div className={cx(s['right-side'], s.red)}>
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
                Landed let's you put down 10%<br />but pay less each month
              </p>
              <span className={s['right-arrow']} />

              <div className={s['calc-table']}>
                <div className={s.table}>
                  <div className={s['left-side']}>
                    <p className={s.small}>
                      small
                    </p>
                    <p className={s.cost}>
                      down payment
                    </p>
                    <p className={s.price}>
                      ${downpayment.second}
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
                      ${monthly.first}
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
            We make down payment support easy
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
                  <strong>You apply to receive funds</strong> from your school’s Landed program, covering up to 50% of the down payment.
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
                  <strong>Landed helps you find and buy a home</strong> near where you work. We pay half the down payment when you’re ready to buy.
                </p>
              </Col>
            </Row>
          </Grid>

          <Link
            to="/get-landed"
            className={s.learn}
          >
            bring Landed to your school
          </Link>

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
