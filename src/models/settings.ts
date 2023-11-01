export interface settingsItem {
  id: number;
  value: boolean;
}

export interface settingsRedux {
  ids: string[];
  entities: settingsItem[];
}

export const SettingOptions = {
  devMode: 0,
  darkMode: 1,
};
