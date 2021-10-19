import React from 'react';
import '../styles/Header.scss';
import { TopNavBar, Dropdown, IconCustom, Option } from 'r3-tooling-design-system';
import * as ActionType from '../store/Actions'
import { connect } from 'react-redux';
import logoSrc from '../crda-logo.svg';


const Header = (props) => {

  const logo = (
    <a href="/">
      <img src={logoSrc} alt="logo-alt-txt" width="100px" />
    </a>
  );

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

  
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

      prevOpen.current = open;
    }, [open]);
  
  return (
    <TopNavBar
      logo={logo}
      center={
        <>
          <Dropdown closeOnSelectOption positionX="right" positionY="bottom" trigger={<IconCustom className="h-5" icon="Account" />}>
            <Option value="one">{props.profile.name}</Option>
           
          </Dropdown>
          <IconCustom className="h-5" icon="ExitToApp"  onClick={props.onLogout} />
        </>}
/>
  
  );
}

const mapStateToProps = state => {
  return {
    profile: state.common.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onLogout: () => dispatch({type: ActionType.LOGOUT}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);