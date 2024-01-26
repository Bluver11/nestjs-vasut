import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DriversService {

    constructor(private readonly db: PrismaService){}

  create(createDriverDto: CreateDriverDto) {
    return this.db.drivers.create({
      data: createDriverDto
    }) ;
  }

  findAll() {
    return this.db.drivers.findMany() ;
  }

  findOne(id: number) {
    return this.db.drivers.findFirstOrThrow({
      where: { id }
    });
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    return this.db.drivers.update({
      data: updateDriverDto,
      where:{ id  }
    });
  }

  remove(id: number) {
    return this.db.drivers.delete({
      where:{id}
    });
  }
}
