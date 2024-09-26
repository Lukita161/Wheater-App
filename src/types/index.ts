export type Search = {
  city: string;
  country: string;
};

export type Wheater = {
  name: string;
  main: {
    temp: number
    temp_max: number
    temp_min: number
  };
};
