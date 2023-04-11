import {
  sendToBackgroundFromAction,
  sendToBackgroundFromNewWindow,
  getCurrentContext,
} from "@/libs/messenger/extension";
import { InternalOnMessageResponse } from "@/types/messenger";
import { ProviderName } from "@/types/provider";
import { RPCRequestType } from "@yetiwallet/types";

const sendUsingInternalMessengers = (
  req: RPCRequestType
): Promise<InternalOnMessageResponse> => {
  const context = getCurrentContext();
  if (context === "popup") {
    return sendToBackgroundFromAction({
      message: JSON.stringify(req),
      provider: ProviderName.yeti,
    });
  } else if (context === "new-window") {
    return sendToBackgroundFromNewWindow({
      message: JSON.stringify(req),
      provider: ProviderName.yeti,
    });
  } else {
    throw new Error(`internal-messenger: unknown context ${context}`);
  }
};

export default sendUsingInternalMessengers;
