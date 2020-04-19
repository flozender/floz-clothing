import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubTitleContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => (
  <MenuItemContainer size={size}>
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer
      className="content"
      onClick={() => history.push(`${linkUrl}`)}
    >
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubTitleContainer>SHOP NOW</SubTitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
