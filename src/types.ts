interface IUserItem {
    name: string;
  }
  
  export interface IUrlsItem {
    regular: string;
    full?: string;
    small?: string;
  }
  
  export interface IResultItem {
    id: string;
    alt_description: string;
    likes: number;
    user: IUserItem;
    urls: IUrlsItem;
  }
  
  export interface Data {
    total: number;
    total_pages: number;
    results: IResultItem[];
  }

  export {}