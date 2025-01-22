import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './entities/dog.entity';
import { Breed } from 'src/breed/entities/breed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dog, Breed])],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
