import { Module } from '@nestjs/common';

// 从当前目录导入 AppController 控制器
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 使用 @Module 装饰器定义一个模块
@Module({
  imports: [],
  // 在 controllers 属性中指定当前模块包含的控制器
  controllers: [AppController],
  providers: [AppService],
})
// 定义并导出 AppModule 模块
export class AppModule {}
