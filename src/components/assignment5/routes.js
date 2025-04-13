import React from "react"; 

function Routes(props){
    const {projection, routes, selectedAirline} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.
    if (selectedAirline === null) {
        return <g></g>;
      }
      const selectedRoutes = [];
      for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        if (route.AirlineID === selectedAirline) {
          selectedRoutes.push(route);
        }
      }   
      const routeLines = [];
      for (let i = 0; i < selectedRoutes.length; i++) {
        const route = selectedRoutes[i];
        const [x1, y1] = projection([route.SourceLongitude, route.SourceLatitude]);
        const [x2, y2] = projection([route.DestLongitude, route.DestLatitude]);    
        routeLines.push(
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#992a5b"
            strokeWidth={0.1}
          />
        );
      }   
      return <g>{routeLines}</g>;
    }

export { Routes }