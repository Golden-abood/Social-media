import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  async createPost(@Body() createCatDto) {
    this.postsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return this.postsService.findAll();
  }
  // @Get('/:id')
  // async findPostById(@Param('id') id: string) {
  //   return this.postsService.findById(id);
  // }
}
