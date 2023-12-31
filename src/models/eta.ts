export interface FavouriteEta {
  id: string;
  stopTag: number;
  routeTag: number;
  stopId?: string;
}

export interface BranchEta extends FavouriteEta {
  branchTag: string;
  stopTitle: string;
  destination: string;
  etas?: number[];
  routeTitle: string;
}

export interface FavouriteEtaRedux {
  ids: string[];
  entities: { [key: string]: FavouriteEta };
}

export interface EtaContainerParams {
  dataUrl: string;
  shdShowTitle?: boolean;
  shdFilterNonFavourite?: boolean;
  stopId?: string;
  isLoaded?: boolean;
}
