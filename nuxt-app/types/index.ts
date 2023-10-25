export interface Post {
  id: number;
  title: string;
  body: string;
  author: {
    username: string;
    name: string;
    id: number;
    profile_image: string;
  };
  image: string;
  tags: [];
  created_at: string;
  comments_count: number;
  comments?: [
    {
      id: number;
      body: string;
      author: {
        id: number;
        profile_image: string;
        username: string;
      };
    }
  ];
}
