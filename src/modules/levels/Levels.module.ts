import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LevelsResolver } from './infra/graphql/resolvers/Levels.resolver';
import { Level } from './infra/typeorm/entities/Level';
import { LevelsRepository } from './infra/typeorm/repositories/LevelsRepository';
import { FindLevelByIdUseCase } from './useCases/findLevelById/FindLevelById.useCase';

@Module({
  imports: [TypeOrmModule.forFeature([Level])],
  providers: [
    LevelsResolver,
    FindLevelByIdUseCase,
    {
      provide: 'LevelsRepository',
      inject: [LevelsRepository],
      useClass: LevelsRepository,
    },
  ],
})
export class LevelsModule {}
