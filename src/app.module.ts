import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsModule } from './dogs/dogs.module';
import { BreedModule } from './breed/breed.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
      
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      autoLoadEntities: true,      
    }),
      
    DogsModule,
      
    BreedModule,
    
    
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}