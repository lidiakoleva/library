export type Author = {
  key: string;
  name: string;
};

export type Book = {
  key: string;
  title: string;
  authors: Author[];
  description?: string;
  cover_id?: string;
  cover_edition_key?: string;
};

export type BookQuery = {};

export type BookRating = {
  summary: {
    average: string;
  };
};
