export interface IDevice {
  name: string;
  model: string;
  graphics: string;
  processor: string;
  operatingSystem: string;
}

export interface IToken {
  id: string;
  device: IDevice;
  date: string;
}
