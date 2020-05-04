import * as React from 'react';
export const NavRef = React.createRef();
export function navigate(name, params) {
  NavRef.current?.navigate(name, params);
}
