import { Injectable } from '@nestjs/common';

// 服务
@Injectable()
class AppService {
  getHello(): string {
    return 'Hello World from service!';
  }
}

export { AppService };
