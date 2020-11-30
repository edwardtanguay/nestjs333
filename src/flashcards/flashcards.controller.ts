import { Controller, Get, Post, Redirect, Param } from '@nestjs/common';

@Controller('flashcards')
export class FlashcardsController {
	@Post()
	create(): string {
		return 'This action adds a new flashcard';
	}

	@Get()
	findAll(): string {
		return 'This action returns all flashcards';
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return `This action returns a #${id} flashcard`;
	}
}




