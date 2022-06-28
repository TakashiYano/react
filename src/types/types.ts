import { ReactNode } from "react";

export type FetchArrayType = {
  id: string;
  body: string;
  title: string;
  name: string;
  email: string;
}[];

export type PostType = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  username: string;
  address: { city: string };
  phone: string;
  website: string;
  company: { name: string };
};

export type CommentType = {
  name: string;
  email: string;
  body: string;
};

export type LayoutType = {
  children: ReactNode;
};

export type CommentsByPostIdType = {
  id: string | undefined;
};

export type UsersByUserIdType = {
  id: string | undefined;
};

export type PostsByUserIdType = {
  id: string | undefined;
};
