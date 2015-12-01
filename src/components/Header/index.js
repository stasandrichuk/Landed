import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* component styles */
import styles from './styles';

export class Header extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    showPhoneMenu: React.PropTypes.bool,
    loginMenu: React.PropTypes.bool,
    showLoginMenu: React.PropTypes.func,
    show: React.PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      error: false,
    };

    this.animateHeader = this.animateHeader.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.animateHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animateHeader);
  }

  animateHeader() {
    window.pageYOffset > 600 ? this.setState({ show: true }) : this.setState({ show: false });
  }

  handleMenu() {
    const { showPhoneMenu } = this.props;

    if (showPhoneMenu) {
      this.actions.show(false);
    } else {
      this.actions.show(true);
    }
  }

  renderNav() {
    return (
      <nav>
        <Link onClick={ () => this.props.show(false) }
              to="about"
              activeClassName="active">
          About
        </Link>
        { /* <Link to="oportuninties"
              activeClassName="active">
          Investment oportuninties
        </Link> */ }
        <a href="https://landed.zendesk.com"
              activeClassName="active">
          F.A.Q.
        </a>
      </nav>
    );
  }

  render() {
    const { show, error } = this.state;
    const { showPhoneMenu, loginMenu } = this.props;

    function renderLogin() {
      return (
        <span>
          <button className={ `login hidden-xs hidden-sm ${ loginMenu && 'hide' }` }>
            Log in
          </button>
          <a href="https://golanded.typeform.com/to/GbesjE">
            <button className={ `signup hidden-xs hidden-sm ${ loginMenu && 'hide' }` }>
              Sign up
            </button>
          </a>
        </span>
      );
    }
    
    document.documentElement.style.overflow = showPhoneMenu ? 'hidden' : 'scroll';

    return (
      <section className={ `${ styles }` }>
        <ReactCSSTransitionGroup transitionName="el-animation"
                                 transitionAppear={ true }
                                 transitionAppearTimeout={ 500 }>
          <div className="top-header">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-md-offset-1 col-lg-offset-1 hidden-xs hidden-sm">
                  <Link to="/">
                    <span className="logo" />
                  </Link>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-xs hidden-sm">
                  { this.renderNav() }
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-right hidden-xs hidden-sm login-fixed-button"
                     onClick={ () => { this.props.showLoginMenu(true); } }>
                  { renderLogin() }
                </div>
                <div className="col-xs-12 col-sm-12 hidden-md hidden-lg text-right"
                     onClick={ () => this.handleMenu() }>
                  <span className={ `burger ${ showPhoneMenu && 'cross' }` } />
                </div>
              </div>
            </div>
            <Link to="/">
              <div className="logo-symbol" />
            </Link>
          </div>
          <div className={ `green-header ${ show && 'show' } hidden-md hidden-lg` } />
          <div className={ `fixed-header ${ show && 'show' } hidden-xs hidden-sm` }>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 fixed-nav">
                  { this.renderNav() }
                </div>
                <div className={ `${ show && 'fixed' } col-xs-12 col-sm-4 col-md-4 col-lg-3 text-right login-fixed-button` }
                     onClick={ () => { this.props.showLoginMenu(true); } }>
                  { renderLogin() }
                </div>
              </div>
            </div>
            <Link to="/">
              <div className="logo-small" />
            </Link>
          </div>
        </ReactCSSTransitionGroup>
        <div className={ `phone-menu ${ showPhoneMenu && 'show' }` }>
          { this.renderNav() }
          <div className="text-center"
               onClick={ () => { this.props.showLoginMenu(true); } }>
            { renderLogin() }
          </div>
        </div>
        <div className={ `login-menu ${ loginMenu && 'show' }` }>
          <span className="cross"
                onClick={ () => { this.props.showLoginMenu(false); } } />
          <input type="email" placeholder="e-mail" />
          <input type="password" placeholder="password" />
          <span className={ `error ${ error && 'show' }` }>
            wrong email/password
          </span>
          <submit onClick={ () => { this.setState({ error: true }); } }>
            Log in
          </submit>
        </div>
        <div className={ `black-layer ${ showPhoneMenu && 'show' }` } />
      </section>
    );
  }
}
