import { Injectable, Injector, Type } from '@ts-stack/di';

import { Request } from '../../../request';
import { EntityModel } from '../decorators/entity';
import { MetadataProvider } from '../services-per-app/metadata-provider';
import { FindParams } from '../mapping/types';

@Injectable()
export class EntityManager {
  constructor(protected req: Request, protected injector: Injector, protected metadataProvider: MetadataProvider) {}

  find<T extends EntityModel>(Entity: T, params: FindParams<T>): Promise<T['prototype'][]> {
    const metadata = this.getMetadata(Entity);
    const whereStatement = metadata.primaryColumns.map((k: any) => `${k} = ?`).join(' and ');
    const sql = `select * from ${metadata.tableName} where ${whereStatement};`;
    return this.query(metadata, sql);
  }

  flush() {}

  protected getMetadata(Entity: EntityModel): any {}

  protected query(metadata: any, sql: string, params?: string[]) {
    const dbService = this.injector.get(metadata.dbService);
    return dbService.query(sql, params);
  }
}
