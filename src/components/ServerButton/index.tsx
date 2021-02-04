import React from "react";

import Logo from "../../assets/discord_logo.png";

import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={isHome ? "active" : selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Discord" />}
    </Button>
  );
};

export default ServerButton;
