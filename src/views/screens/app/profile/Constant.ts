export interface IntroProps {
  id: string;
  icon: string;
  title: string;
  data: Array<any>;
  type: number;

}

export interface AboutItems {
  idData: string;
  titleData: string;
}

export interface Educations {
  idData: string;
  titleData: string;
  isGrad: boolean;
}

export interface Exeriances {
    idData:string;
    titleData:string;
    valueDefault:string;
    year:string;
}