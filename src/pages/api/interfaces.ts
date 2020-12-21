export interface githubInfos {
  avatar_url?: string;
  name?: string;
  bio?: string;
}

export interface IGithubUser {
  githubInfos: githubInfos;
}

export interface repositoriesInfos {
  id?: number;
  name?: string;
  description?: string;
  html_url?: string;
  fork?: boolean;
}

export interface IRepositoriesUser {
  repositoriesInfos: [repositoriesInfos];
}

export interface prismicInfos {
  primary: { name: string; link: { url: string } };
  slice_type: string;
}

export interface IPrismicUser {
  prismicInfos: [prismicInfos];
}

export interface IUser {
  githubInfos?: githubInfos;
  prismicInfos?: [prismicInfos];
  titlePage?: string;
}

export interface cardInfos {
  title?: string;
  description?: string;
  url?: string;
}
