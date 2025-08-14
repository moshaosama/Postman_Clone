interface SelectorRequest {
  select: string;
}

interface SelectorInputRequestData {
  inputTitle: string;
}

export const SelectorRequestData: SelectorRequest[] = [
  {
    select: "Params",
  },

  {
    select: "Authorization",
  },

  {
    select: "Headers",
  },

  {
    select: "Body",
  },

  {
    select: "Scripts",
  },

  {
    select: "Settings",
  },
];

export const SelectorInputRequest: SelectorInputRequestData[] = [
  {
    inputTitle: "none",
  },
  {
    inputTitle: "form-data",
  },
  {
    inputTitle: "x-www-form-urlencoded",
  },
  {
    inputTitle: "raw",
  },
  {
    inputTitle: "binary",
  },
  {
    inputTitle: "GeaphQl",
  },
];
