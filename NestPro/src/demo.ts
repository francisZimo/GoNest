import { Module, Injectable, Controller, Get, NestMiddleware, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

// 服务
@Injectable()
class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// 控制器
@Controller()
class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(this.appService, '===appService');
    return this.appService.getHello();
  }
}

// 中间件
class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    next();
  }
}

// 模块
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}

// 创建和启动应用
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();
