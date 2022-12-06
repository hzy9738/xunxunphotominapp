import {createStore, createTypedHooks} from "easy-peasy";
import session, {SessionModel} from "@/stores/models/session";

export interface StoreModel {
  session: SessionModel;
}

const model: StoreModel = {
  session
};

const store = createStore(model)

const { useStoreActions, useStoreDispatch, useStoreState } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreDispatch, useStoreState };

export default store;
