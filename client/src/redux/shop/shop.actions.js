import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());

  collectionRef.onSnapshot(
    async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    },
    (error) => dispatch(fetchCollectionsFailure(error.message))
  );
};
