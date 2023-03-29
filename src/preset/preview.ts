import { withColumns } from "../withColumns";

export const decorators = [withColumns];
export const parameters = {
  columns: {
    active: false,
    bgColor: "nr-black",
    columns: 2,
  },
};
