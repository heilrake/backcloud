// Core
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// Other
import { FileEntity } from './entities/file.entity';
import { FileType } from './files.controller';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}
  findAll(userId: number, fileType: FileType) {
    const queryBuilder = this.repository.createQueryBuilder('file');
  }
}
