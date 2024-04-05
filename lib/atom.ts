import { atom } from "recoil";



export const todoListState = atom({
    key: 'TodoList',
    default: -1,
  });

export const loadingState = atom({
  key:"loading",
  default:false
})