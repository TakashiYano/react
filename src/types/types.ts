export type PostsType = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export type UsersType = {
  id: string;
  name: string;
  email: string;
  username: string;
  address: { city: string };
  phone: string;
  website: string;
  company: { name: string };
};

export type CommentsType = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};
