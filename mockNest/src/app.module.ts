// 从 @nestjs/common 模块中导入 Module 装饰器
import { Module } from '@nestjs/common';
// 从当前目录导入 AppController 控制器
import { AppController } from './app.controller';
import { UserController } from './user.controller';
import { UseClassLoggerService, UseValueLoggerService, UseValueLoggerServiceStringToken, UseFactoryLoggerService } from './logger.service';
// 使用 @Module 装饰器定义一个模块
@Module({
  // 在模块中注册控制器
  controllers: [AppController, UserController],
  providers: [
    {
      provide: UseClassLoggerService,
      useClass: UseClassLoggerService,
    },
    {
      provide: UseValueLoggerService,
      useValue: new UseValueLoggerService(),
    },
    {
      provide: 'StringToken',
      useValue: new UseValueLoggerServiceStringToken(),
    },
    {
      provide: 'FactoryToken',
      useFactory: () => new UseFactoryLoggerService(),
    },
  ],
})
// 定义并导出 AppModule 模块
export class AppModule {}
