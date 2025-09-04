import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlignmentModule } from './alignment/alignment.module';
import { PieceJointeModule } from './piece-jointe/piece-jointe.module';
import { TerrainModule } from './terrain/terrain.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: +(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || '123',
      database: process.env.DATABASE_NAME || 'alignment_db',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production', 
    }),
    AlignmentModule,
    PieceJointeModule,
    TerrainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}