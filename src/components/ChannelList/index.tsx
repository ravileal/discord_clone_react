import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";
import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="geral" />
      <ChannelButton channelName="games" />
      <ChannelButton channelName="estudos" />
      <ChannelButton channelName="imagens" />
      <ChannelButton channelName="videos" />
    </Container>
  );
};

export default ChannelList;
