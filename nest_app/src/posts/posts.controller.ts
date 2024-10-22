import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  async create(@Body() createCatDto) {
    this.songsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return this.songsService.findAll();
  }
}
