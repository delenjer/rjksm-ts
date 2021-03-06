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
  selectValue: string;
}

export interface IState {
  isError: boolean;
  isActiveModal: boolean;
  isLoadingContent: boolean;
  isFavorite: [];
  artCollections: IArtCollections;
  loadingArtItems: ILoadingArtItems;
  btnList: {
    btnList: [],
    btnText: number,
  };
  isLoading: boolean;
  info: string;
  id: string;
  isFavoriteList: [];
}

export interface IActionSetCurrentPage {
  value: string;
  type: string;
  num: number;
  title: string;
}

export interface IActionIsLoading {
  type: string;
  isLoading: boolean;
  isLoadingContent: boolean;
}

export interface IErrorMessage {
  type: string;
  isError: boolean;
}

export interface IActionModal {
  type: string;
  isAction: boolean;
}

export interface IInfo {
  type: string;
  data: any;
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
