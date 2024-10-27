import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private readonly posts = [
    {
      id: 1,
      profilePicture: '',
      image: '',
      title: 'Golde',
      body: 'abood',
      comments: [],
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'Golde',
      body: 'abood',
    },
    {
      id: 3,
      title: 'Golde',
      body: 'abood',
    },
  ];

  create(post) {
    this.posts.push(post);
  }

  findAll() {
    return this.posts;
  }

  findById(id: string) {
    return this.posts.find((post) => post.id === parseInt(id));
  }
}
