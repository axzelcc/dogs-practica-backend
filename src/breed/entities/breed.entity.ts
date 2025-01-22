import { Dog } from "src/dogs/entities/dog.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Breed {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Dog, (dog) => dog.breed)
    dogs: Dog[];
}
