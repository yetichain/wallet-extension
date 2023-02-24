import { ProviderName, UIExportOptions } from "@/types/provider";
import getRoutes from "./routes";
const uiexport: UIExportOptions = {
  providerName: ProviderName.yeti,
  routes: getRoutes(ProviderName.yeti),
};
export default uiexport;
