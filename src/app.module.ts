import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { StationsModule } from './stations/stations.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [StationsModule, DriversModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
