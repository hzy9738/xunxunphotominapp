import tools from "@/common/tools";

type PhotoRequestParam = {
  count: number;
  offset: number;
  album: string;
  filter:string;
  merged: boolean;
  country:string;
  order:string
  q: string;
}

export interface PhotoResponseData {
  ID: string;
  UID: string;
  Type: string;
  TypeSrc: string;
  TakenAt: string;
  TakenAtLocal: string;
  TakenSrc: string;
  TimeZone: string;
  Path: string;
  Name: string;
  Originalname: string;
  Title: string;
  Description: string;
  Year: number;
  Month: number;
  Day: number;
  Country: string;
  Stack: number;
  Favorite: boolean;
  Private: boolean;
  Iso: number;
  FocalLength: number;
  FNumber: number;
  Exposure: string;
  Quality: number;
  Resolution: number;
  Color: number;
  Scan: boolean;
  Panorama: boolean;
  CameraiD: number;
  CameraModel: string;
  CameraMake: string;
  LensiD: number;
  LensModel: string;
  LensMake: string;
  Lat: number;
  Lng: number;
  CelliD: string;
  PlaceiD: string;
  PlaceSrc: string;
  PlaceLabel: string;
  PlaceCity: string;
  PlaceState: string;
  Placecountry: string;
  InstanceiD: string;
  FileUiD: string;
  fileRoot: string;
  Filename: string;
  Hash: string;
  Width: number;
  Height: number;
  Portrait: boolean;
  Merged: boolean;
  CreatedAt: string;
  UpdatedAt: string;
  EditedAt: string;
  CheckedAt: string;
  DeletedAt: string;
  Files: PhotoResponseFile[];
}


export interface PhotoResponseFile {
  UID: string;
  PhotouID: string;
  Name: string;
  Root: string;
  Originalname: string;
  Hash: string;
  Size: number;
  Type: string;
  Mime: string;
  Primary: boolean;
  Portrait: boolean;
  Width: number;
  Height: number;
  Orientation: number;
  AspectRatio: number;
  Colors: string;
  Luminance: string;
  Diff: number;
  Chroma: number;
  CreatedAt: string;
  UpdatedAt: string;
  Markers: any[];
}

export interface FileType {
  name?: string
  url: string
  previewUrl?: string
  type: string
}

//日历列表
export const getPhotoList = (data: PhotoRequestParam) => tools.request({
  url: `photos`,
  data
})

