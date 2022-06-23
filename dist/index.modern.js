import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

var styles = {"growl":"_2Nm_9","active":"_3sodH","growlClose":"_3JGMO"};

var Growl = function Growl(_ref) {
  var _classNames;

  var active = _ref.active,
      message = _ref.message,
      onDismissed = _ref.onDismissed;
  return React.createElement("div", {
    className: classNames(styles.growl, (_classNames = {}, _classNames[styles.active] = active, _classNames))
  }, message, React.createElement("div", {
    onClick: onDismissed,
    className: styles.growlClose
  }));
};

function useGrowl(timeout) {
  if (timeout === void 0) {
    timeout = 3000;
  }

  var _useState = useState(false),
      growlActive = _useState[0],
      setGrowlActive = _useState[1];

  var timerRef = useRef();
  useEffect(function () {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    if (growlActive) {
      timerRef.current = window.setTimeout(function () {
        setGrowlActive(false);
      }, timeout);
    }
  }, [growlActive, timeout]);
  return [growlActive, function (active) {
    setGrowlActive(active);
  }];
}

export { Growl, useGrowl };
//# sourceMappingURL=index.modern.js.map
