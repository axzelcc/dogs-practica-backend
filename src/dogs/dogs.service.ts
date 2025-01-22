import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from './entities/dog.entity';
import { Repository } from 'typeorm';
import { Breed } from 'src/breed/entities/breed.entity';

@Injectable()
export class DogsService {

  constructor(
    @InjectRepository(Dog)
    private readonly dogRepository: Repository<Dog>,

    @InjectRepository(Breed)
    private readonly breedRepository: Repository<Breed>
  ){}

  async create(@Body() createDogDto: CreateDogDto) {
    const breed = await this.breedRepository.findOne({ where: {id: createDogDto.breed} });
  
    if (!breed) {
      throw new NotFoundException(`No se encontró la raza `);
    }
    return await this.dogRepository.save({...createDogDto, breed: breed});
  }

  async findAll() {
    return await this.dogRepository.find();
  }

  async findOne(id: number) {
    const dog = await this.dogRepository.findOne({
      where: { id },
    });
  
    if (!dog) {
      throw new NotFoundException(`El perro con ID #${id} no se encontró`);
    }
  
    return dog;
  }

  async update(id: number, updateDogDto: UpdateDogDto) {
    const breed = await this.breedRepository.findOne({ where: {id: updateDogDto.breed} });
    

    if (!breed) {
      throw new NotFoundException(`No se encontró ${breed}`);
    }
  
    // Actualiza el registro
    const updateDog = await this.dogRepository.update(id, {...updateDogDto, breed: breed})
    
    return "Se actualizó con éxito"
  }
  

  async remove(id: number): Promise<string> {
    // Busca el registro por ID
    const dog = await this.dogRepository.findOne({ where: { id } });
  
    if (!dog) {
      throw new NotFoundException(`El perro con ID #${id} no se encontró`);
    }
  
    // Elimina el registro encontrado
    await this.dogRepository.remove(dog);
  
    return `El perro con ID #${id} fue eliminado exitosamente.`;
  }
  
}
