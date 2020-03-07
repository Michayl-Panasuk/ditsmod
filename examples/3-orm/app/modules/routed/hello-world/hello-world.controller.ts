import { Controller, Response, Route, ORM } from '@ts-stack/mod';

import { User } from '3-orm/app/entities/user';

@Controller()
export class HelloWorldController {
  constructor(private res: Response, private entityManager: ORM.EntityManager) {}

  @Route('GET')
  async findUser() {
    const params: ORM.FindParams<typeof User> = {
      select: { password: 0 },
      where: { userId: 1, userName: '' }
    };
    const users = await this.entityManager.find(User, params);
    if (users[0]) {
      const userName = users[0].userName;
      this.res.send(`Hello, ${userName}`);
    } else {
      this.res.send('user not found');
    }
  }
}
