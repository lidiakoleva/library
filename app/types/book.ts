export type Author = {
  key: string;
  name: string;
};

export type Book = {
  key: string;
  title: string;
  authors: Author[];
  cover_id: number;
};

export type BookQuery = {};
