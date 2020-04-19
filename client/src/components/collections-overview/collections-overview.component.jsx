import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector";
import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = (state) =>
  createStructuredSelector({
    collections: selectShopCollectionsForPreview,
  });

export default connect(mapStateToProps)(CollectionsOverview);
