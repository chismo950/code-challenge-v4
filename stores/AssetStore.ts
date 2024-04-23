import { action, makeObservable, observable } from "mobx";
import { Asset } from '@chain-registry/types'
import { assets } from "chain-registry";

export class AssetStore {
  constructor() {
    makeObservable(this)
  }
  @observable
  assets: Asset[] = [
    assets.find(item=>{return item.chain_name==='teritori'})?.assets.find(item=>{return item.symbol==='TORI'})!,
    assets.find(item=>{return item.chain_name==='terra'})?.assets.find(item=>{return item.symbol==='USTC'})!
  ]

  @action
  addAsset(asset:Asset) {
    if (!this.assets.find(item=>{return item.symbol===asset.symbol})) {
      this.assets = [...this.assets, asset]
    }
  }
}