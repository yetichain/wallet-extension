import { SettingsType } from "@/libs/settings-state/types";

export interface YetiWindow {
  yeti: {
    providers: {
      [key: string]: any;
    };
    settings: SettingsType;
  };
  [key: string]: any;
}
