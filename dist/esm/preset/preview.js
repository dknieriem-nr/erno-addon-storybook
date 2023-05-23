import { withColumns } from "../withColumns";
import fetchStoryHtml from "../fetchStoryHtml";
export var decorators = [withColumns];
export var parameters = {
  server: {
    fetchStoryHtml: fetchStoryHtml
  }
};