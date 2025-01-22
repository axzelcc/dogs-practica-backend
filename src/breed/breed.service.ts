import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(Breed)
    private readonly breedRepository: Repository<Breed>,
  ){}

  async create(name: string): Promise<Breed> {
    const breed = this.breedRepository.create({ name });
    return await this.breedRepository.save(breed);
  }

  async findAll(): Promise<Breed[]> {
    return await this.breedRepository.find();
  }

  async findOne(id: number): Promise<Breed> {
    const breed = await this.breedRepository.findOne({ where: { id } });
    if (!breed) {
      throw new NotFoundException(`La raza con ID #${id} no se encontró`);
    }
    return breed;
  }

  async update(id: number, name: string): Promise<Breed> {
    const breed = await this.findOne(id);
    breed.name = name;
    return await this.breedRepository.save(breed);
  }

  async remove(id: number): Promise<void> {
    const breed = await this.findOne(id);
    await this.breedRepository.remove(breed);
  }
}
