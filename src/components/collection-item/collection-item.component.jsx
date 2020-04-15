import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameSpan,
  PriceSpan,
  CollectionItemButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>${price}</PriceSpan>
      </CollectionFooterContainer>
      <CollectionItemButton
        className="custom-button"
        inverted
        onClick={() => addItem(item)}
      >
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
