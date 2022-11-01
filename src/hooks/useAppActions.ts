import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { todoSliceActions } from "../store/slices/todoSlice";

const actionsToBind = {
  ...todoSliceActions,
};

export const useAppActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionsToBind, dispatch);
};
