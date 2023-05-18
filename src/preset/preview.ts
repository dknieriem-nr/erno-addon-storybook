import { withColumns } from "../withColumns";
import fetchStoryHtml from "../fetchStoryHtml";

export const decorators = [withColumns];
export const parameters = {
  server: { fetchStoryHtml },
  columns: {
    active: false,
    bgColor: "nr-black",
    columns: 2,
  },
};
