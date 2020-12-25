export interface IArtCollections {
  elapsedMilliseconds: number;
  count: number;
  countFacets: {
    hasimage: number,
    ondisplay: number,
  };
  artObjects: [{
    links: any,
    id: string,
    objectNumber: string,
    title: string,
    hasImage: boolean,
    principalOrFirstMaker: string,
    longTitle: string,
    showImage: boolean,
    permitDownload: boolean,
    webImage: {
      guid: string,
      offsetPercentageX: number,
      offsetPercentageY: number,
      width: number,
      height: number,
      url: string,
    },
    headerImage: {
      guid: string,
      offsetPercentageX: number,
      offsetPercentageY: number,
      width: number,
      height: number,
      url: string,
    },
    productionPlaces: any,
  }];
  facets: [{
    name: string,
    facets: [{
      key: string,
      value: number,
    }],
  }];
}

export interface IActionArtCollections {
  type: string;
  artItem: IArtCollections;
}

export interface ILoadingArtItems {
  pageSize: number;
  totalPicturesCount: number;
  currentPage: number;
  query: string;
}

export interface IState {
  isFavorite: [];
  artCollections: IArtCollections;
  loadingArtItems: ILoadingArtItems;
  btnList: {
    btnList: [],
    btnText: number,
  };
  isLoading: boolean;
  info: [];
  id: string;
  isFavoriteList: [];
}

export interface IActionSetCurrentPage {
  type: string;
  num: number;
  title: string;
}

export interface IActionIsLoading {
  type: string;
  isLoading: boolean;
}

export interface IActionInfo {
  type: string;
  id: string;
}

export interface IFavorite {
  type: string;
  id: string;
  data: boolean;
  title: [];
  url: [];
  addNewFavorite: [{
    id: string,
    title: string,
    url: string,
  }];
  todo: any;
}

export interface IDetail {
  dateOfBirth: number;
  name: string;
  dateOfDeath: number;
}

export interface IArt {
  art: {
    links: any,
    id: string,
    objectNumber: string,
    title: string,
    hasImage: boolean,
    principalOrFirstMaker: string,
    longTitle: string,
    showImage: boolean,
    permitDownload: boolean,
    webImage: {
      guid: string,
      offsetPercentageX: number,
      offsetPercentageY: number,
      width: number,
      height: number,
      url: string,
    },
    headerImage: {
      guid: string,
      offsetPercentageX: number,
      offsetPercentageY: number,
      width: number,
      height: number,
      url: string,
    },
    productionPlaces: any,
  },
}

export interface IFavoriteList {
  id: string,
  title: string[],
  url: string[],
}

export interface IArtObjects {
  links: any,
  id: string,
  objectNumber: string,
  title: string,
  hasImage: boolean,
  principalOrFirstMaker: string,
  longTitle: string,
  showImage: boolean,
  permitDownload: boolean,
  webImage: {
    guid: string,
    offsetPercentageX: number,
    offsetPercentageY: number,
    width: number,
    height: number,
    url: string,
  },
  headerImage: {
    guid: string,
    offsetPercentageX: number,
    offsetPercentageY: number,
    width: number,
    height: number,
    url: string,
  },
  productionPlaces: any,
}
