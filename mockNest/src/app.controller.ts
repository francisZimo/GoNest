// 从 @nestjs/common 模块中导入 Controller 和 Get 装饰器
import { Controller, Get, Inject } from '@nestjs/common';
// 使用 Controller 装饰器标记 AppController 类为控制器
import { UseClassLoggerService, UseValueLoggerService, UseFactoryLoggerService, UseValueLoggerServiceStringToken } from './logger.service';
@Controller()
export class AppController {
  // 使用 Get 装饰器标记 index 方法为 HTTP GET 路由处理程序
  constructor(
    private readonly useClassLoggerService: UseClassLoggerService,
    private readonly useValueLoggerService: UseValueLoggerService,
    @Inject('StringToken') private readonly useValueLoggerServiceStringToken: UseValueLoggerServiceStringToken,
    @Inject('FactoryToken') private readonly useFactoryLoggerService: UseFactoryLoggerService
  ) {}
  @Get()
  index(): string {
    // 返回字符串 'Hello'
    this.useClassLoggerService.log('useClassLoggerService');
    this.useValueLoggerService.log('useValueLoggerService');
    this.useValueLoggerServiceStringToken.log('StringToken');
    this.useFactoryLoggerService.log('FactoryToken');
    return 'Hello';
  }
}
