// 从 '@nestjs/common' 模块导入 Controller、Get、Request 和 Req 装饰器
import { Controller, Get, Request, Req } from '@nestjs/common';
// 从 'express' 模块导入 Request 类型并重命名为 ExpressRequest
import { Request as ExpressRequest } from 'express';
// 使用 @Controller 装饰器定义 'users' 路由
@Controller('users')
export class UserController {
  // 使用 @Get 装饰器定义根路径的 GET 请求处理函数
  @Get()
  findAllUsers(): string {
    // 返回一个字符串，表示此操作返回所有用户
    return 'This action returns all users';
  }
  // 使用 @Get 装饰器定义 '/info' 路径的 GET 请求处理函数
  @Get('info')
  getUserInfo(): string {
    // 返回一个字符串，表示此操作返回用户信息
    return 'This action returns the info of user';
  }
  // 使用 @Get 装饰器定义 '/req' 路径的 GET 请求处理函数
  @Get('req')
  // 处理请求的函数，使用 @Request 和 @Req 装饰器注入 ExpressRequest 对象
  handleRequest(@Request() request: ExpressRequest, @Req() req: ExpressRequest): string {
    // 输出请求的 URL
    console.log(req.url);
    // 输出请求的路径
    console.log(req.path);
    // 输出请求的方法
    console.log(req.method);
    // 返回一个字符串，表示请求已处理
    return 'Request handled';
  }
}
