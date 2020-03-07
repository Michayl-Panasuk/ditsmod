import { RootModule, ORM } from '@ts-stack/mod';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { mysqlMap } from './mapping/mysql/mysql-map';

const { OrmModule } = ORM;

@RootModule({
  imports: [HelloWorldModule],
  exports: [OrmModule.withOptions(mysqlMap)],
  controllers: [],
  providersPerApp: [],
  providersPerMod: [],
  providersPerReq: []
})
export class AppModule {}
