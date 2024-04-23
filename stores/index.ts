import React from "react";
import { AssetStore } from "./AssetStore"

export const stores = Object.freeze({
  assetStore: new AssetStore()
})

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;