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

export interface IState {
  artCollections: IArtCollections
}
