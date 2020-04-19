import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectShopCollection } from "../../redux/shop/shop.selector";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
