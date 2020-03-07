import { ORM } from '@ts-stack/mod';

import { User } from '3-orm/app/entities/user';

const { MysqlEntity, MysqlColumn } = ORM;

@MysqlEntity({ tableName: 'user' })
export class MysqlUser extends User {
  @MysqlColumn({ isPrimaryColumn: true })
  userId: number;
  @MysqlColumn()
  userName: string;
  @MysqlColumn()
  password: string;
}
