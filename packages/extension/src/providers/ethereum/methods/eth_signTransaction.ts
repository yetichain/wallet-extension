import { getCustomError } from "@/libs/error";
import { MiddlewareFunction } from "@yetiwallet/types";
import EthereumProvider from "..";
const method: MiddlewareFunction = function (
  this: EthereumProvider,
  payload,
  res,
  next
): void {
  if (payload.method !== "eth_signTransaction") return next();
  else return res(getCustomError("Not implemented"));
};
export default method;
