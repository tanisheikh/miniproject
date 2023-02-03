import { init } from "@rematch/core";
import * as models from "../Models/index";
import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const store = init({ models, plugins: [persistPlugin(persistConfig)] });

console.log("models....", models);

export default store;
