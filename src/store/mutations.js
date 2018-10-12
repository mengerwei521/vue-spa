/*
包含n个用于直接更新状态数据方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS
} from "./mutation-type";

export default {
  [RECEIVE_ADDRESS] (state , {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops
  }
}
