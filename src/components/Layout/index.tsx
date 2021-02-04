import React from "react";

import { Grid } from "./styles";

import Serverlist from "../ServerList";

const Layout: React.FC = () => {
  return (
    <Grid>
      <Serverlist />
    </Grid>
  );
};

export default Layout;
