import tools from "@/common/tools";

type LoginParam = {
  username: string;
  password: string;
}



export interface Config {
  mode: string;
  name: string;
  version: string;
  copyright: string;
  flags: string;
  baseUri: string;
  staticUri: string;
  apiUri: string;
  contentUri: string;
  siteUrl: string;
  siteDomain: string;
  siteAuthor: string;
  siteTitle: string;
  siteCaption: string;
  siteDescription: string;
  sitePreview: string;
  appName: string;
  appMode: string;
  appIcon: string;
  debug: boolean;
  test: boolean;
  demo: boolean;
  sponsor: boolean;
  readonly: boolean;
  uploadNSFW: boolean;
  public: boolean;
  experimental: boolean;
  albumCategories?: any;
  people: any[];
  status: string;
  mapKey: string;
  downloadToken: string;
  previewToken: string;
  jsHash: string;
  cssHash: string;
  years: number[];
  clip: number;
}


export interface LoginResponseInfo {
  config: Config;
  id: string;
  status: string;
}

//登录
export const login = (data: LoginParam) => tools.request({
  url: `session`,
  data,
  method: 'POST'
})

