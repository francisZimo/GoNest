// 从 @nestjs/common 模块中导入 Controller 和 Get 装饰器
import { Controller, Get } from '@nestjs/common';
// 使用 Controller 装饰器标记 AppController 类为控制器
@Controller()
export class AppController {
  // 使用 Get 装饰器标记 index 方法为 HTTP GET 路由处理程序
  @Get()
  index(): string {
    // 返回字符串 'Hello'
    return 'Hello';
  }
}
