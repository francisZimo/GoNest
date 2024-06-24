// 从 @nestjs/core 模块中导入 NestFactory 用于创建 Nest 应用程序
import { NestFactory } from '@nestjs/core';
// 导入应用程序的主模块
import { AppModule } from './app.module';
// 导入 express-session 中间件，用于管理会话
import session from 'express-session';
// 定义一个异步的启动函数
async function bootstrap() {
  // 创建一个 Nest 应用程序实例，传入主模块
  const app = await NestFactory.create(AppModule);
  // 使用 express-session 中间件来管理会话
  app.use(
    session({
      // 定义用于加密会话的密钥
      secret: 'your-secret-key',
      // 在每次请求结束时是否强制保存会话，即使它没有变化
      resave: false,
      // 是否在未初始化时保存会话
      saveUninitialized: false,
      // 定义会话的 cookie 配置
      cookie: {
        // 设置 cookie 的最大存活时间为一天（以毫秒为单位）
        maxAge: 1000 * 60 * 60 * 24,
      },
    })
  );
  // 启动应用程序，监听 3000 端口
  await app.listen(3000);
}
// 调用启动函数，启动应用程序
bootstrap();
