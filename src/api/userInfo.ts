import tools from "@/common/tools";

type CalendarRequestPa123ram = {
  count: number;
  offset: number;
  q: string;
  category: string;
  type: string;
  order: string;
}

export interface CalendarResponseDat123a {
  UID: string;
  ParentuID: string;
  Thumb: string;
  Slug: string;
  Type: string;
  Title: string;
  Location: string;
  Category: string;
  Caption: string;
  Description: string;
  Notes: string;
  Filter: string;
  Order: string;
  Template: string;
  Path: string;
  State: string;
  Country: string;
  Year: number;
  Month: number;
  Day: number;
  Favorite: boolean;
  Private: boolean;
  PhotoCount: number;
  LinkCount: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
}


//日历列表
export const getCalendarList213 = (data: CalendarRequestParam) => tools.request({
  url: `albums`,
  params: data
})

