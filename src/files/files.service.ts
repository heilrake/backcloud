// Core
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// Other
import { FileEntity, FileType } from './entities/file.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}

  findAll(userId: number, fileType: FileType) {
    const queryBuilder = this.repository.createQueryBuilder('file');
    queryBuilder.where('file.userId = :userId', { userId });

    if (fileType === FileType.PHOTOS) {
      queryBuilder.andWhere('file.mimetype ILIKE :type', { type: '%image%' });
    }

    if (fileType === FileType.TRASH) {
      queryBuilder.andWhere('file.deletedAt IS NOT NULL');
    }

    return queryBuilder.getMany();
  }
  create(file: Express.Multer.File, userId: number) {
    return this.repository.save({});
  }

  async remove(userId: number, ids: string) {
    const idsArray = ids.split(',');
    const queryBuilder = this.repository.createQueryBuilder('file');

    queryBuilder.where('id IN (: ...ids) AND userId = :userId', {
      ids: idsArray,
      userId,
    });

    return queryBuilder.softDelete().execute();
  }
}
