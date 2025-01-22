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
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5433,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'root',
      autoLoadEntities: true,
      synchronize: true, // ¡No usar en producción!
    }),
      
    DogsModule,
      
    BreedModule,
    
    
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}