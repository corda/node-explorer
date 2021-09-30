import React from 'react';
import {
  IconCustom,
  NotificationService,
  Snackbar,
  snackbarIdContext,
} from '@r3/r3-tooling-design-system/lib/exports.js';


const SnackbarComponent = (props) => {
  return (
    <>
      <Snackbar
        className="toasty"
        variant={props.variant}
        button={
          <snackbarIdContext.Consumer>
            {(value) => (
              <IconCustom
                icon="Close"
                className="inline h-5 pb-1 text-blue cursor-pointer"
                onClick={() => NotificationService.dismiss(value)}
              />
            )}
          </snackbarIdContext.Consumer>
        }
      >
        {props.message}
      </Snackbar>
    </>
  );
};

export default SnackbarComponent;
