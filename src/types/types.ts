// posts, users, comments
export type FetchType = {
  id: number;
  body: string;
  title: string;
  name: string;
  email: string;
};

// post
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// user
export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: { city: string };
  phone: string;
  website: string;
  company: { name: string };
};

// comment
export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
