import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('flashcards')
export class FlashcardsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This shows all flashcards';
  }
}