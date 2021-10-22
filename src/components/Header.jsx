import React from 'react';
import '../styles/Header.scss';
import { TopNavBar, Dropdown, IconCustom, Option } from 'r3-tooling-design-system';
import * as ActionType from '../store/Actions'
import { connect } from 'react-redux';
import logoSrc from '../crda-logo.svg';


const Header = (props) => {

  const logo = (
    <a href="#">
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
          <span style={{ display: "block", paddingBottom: 3 }}>{props.profile.name}</span>
          <Dropdown closeOnSelectOption positionX="right" positionY="bottom" trigger={<IconCustom className="h-5" icon="Account" />}>
            <Option disabled value="one">
              <span style={{ display: "block", paddingBottom: 3 }}>{props.profile.name}</span>
              <span style={{ fontSize: 12, display: "block" }}>{props.profile.city}, {props.profile.country}</span>
            </Option>
           
          </Dropdown>
          <IconCustom className="h-5" icon="ExitToApp"  onClick={props.onLogout} />
        </>}
/>
      // <div className="Header">
      //     <div>
      //           <img src="crda-logo.svg" width="100%" alt="Corda Logo" className="Logo"/>
      //           <div className="profile">
      //             <Button variant="outlined" ref={anchorRef} onClick={handleToggle}>{props.profile.name}</Button>
      //             <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
      //                 {({ TransitionProps, placement }) => (
      //                   <Grow
      //                     {...TransitionProps}
      //                     style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
      //                   >
      //                     <Paper>
      //                       <div style={{padding: 10}}>
      //                           <span style={{display: "block", paddingBottom: 3}}>{props.profile.name}</span>
      //                           <span style={{fontSize: 12, display: "block"}}>{props.profile.city}, {props.profile.country}</span>
      //                       </div>
      //                       <hr style={{margin: 0}}/>
      //                       <ClickAwayListener onClickAway={handleClose}>
      //                         <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{padding: 0}}>
      //                           <MenuItem onClick={props.onLogout}>Logout</MenuItem>
      //                         </MenuList>
      //                       </ClickAwayListener>
      //                     </Paper>
      //                   </Grow>
      //                 )}
      //               </Popper>
      //           </div>
      //     </div>
      // </div>
    
  
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