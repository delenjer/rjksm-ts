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
}

export interface IState {
  artCollections: IArtCollections;
  loadingArtItems: ILoadingArtItems;
  btnList: {
    btnList: [],
    btnText: number,
  };
  isLoading: boolean;
  info: [];
  id: string;
}

export interface IActionSetCurrentPage {
  type: string;
  num: number;
}

export interface IActionIsLoading {
  type: string;
  isLoading: boolean;
}

export interface IActionInfo {
  type: string;
  id: string;
}

export interface IDetail {
  dateOfBirth: number;
  name: string;
  dateOfDeath: number;
}
