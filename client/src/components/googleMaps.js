import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={11}
    defaultCenter={props.center}
  >
  </GoogleMap>
))

export default MyMapComponent;