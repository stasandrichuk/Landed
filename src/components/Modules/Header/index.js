import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

// Styles
import s from './index.css';

export default class Header extends Component {
  render() {
    return (
      <section className={s.root}>
        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <span className={s.logo} />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={8}
              className={s.nav}
            >
              <Link
                to="/active-programs"
                activeClassName={s.active}
              >
                Active Programs
              </Link>
              <Link
                to="/how-it-works"
                activeClassName={s.active}
              >
                How it Works
              </Link>
              <Link
                to="/invest"
                activeClassName={s.active}
              >
                Invest
              </Link>
              <Link
                to="/about"
                activeClassName={s.active}
              >
                About
              </Link>
              <Link
                to="/get-landed"
                className={s['get-landed']}
                activeClassName={s.active}
              >
                Get Landed
              </Link>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}