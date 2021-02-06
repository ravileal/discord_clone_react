import React from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage author="Tronirix" data="06/02/2021" content="Bom dia" />

        <ChannelMessage
          author="@Talvez seja um bot"
          data="06/02/2021"
          content={
            <>
              <Mention>@Tronirix</Mention>, Bom dia
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
