import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline"
import { PersonAddAlt1, Settings } from "styled-icons/material"

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 5px 3px;

  border-radius: 5px;
  background-color: transparent;

  transition: background-color 0.2s;

  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
  }

  > div * {
    margin-left: 3px;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover, &.active {
    background-color: var(--quinary);
    
    > div span {
      color: var(--white);
    }

    > div * {
      display: flex;
    }

  }

`

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);

`

export const InviteIcon = styled(PersonAddAlt1)`
  width: 16px;
  height: 16px;
  
  color: var(--symbol);

  cursor: pointer;

  transition: color 0.2s;

  display: none;

  &:hover {
    color: var(--white);
  }

`

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  color: var(--symbol);

  cursor: pointer;

  transition: color 0.2s;

  display: none;

  &:hover, &.active {
    color: var(--white);
  }

`
