import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import e = require('express');

// 控制器
@Controller('users')
class AppController {
  constructor(private readonly appService: AppService) {}

  //   @Get()
  //   getHello(): string {
  //     console.log(this.appService, '===appService');
  //     // return this.appService.getHello();
  //     return 'controller getHello()';
  //   }

  //   // 处理没有参数的 GET 请求
  //   @Get()
  //   findAll(): string {
  //     return 'This action returns all users';
  //   }

  // 处理带路径参数的 GET 请求
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns user #${id}`;
  }

  // 处理带查询参数的 GET 请求
  @Get()
  findByAge(@Query('age') age: string): string {
    return `This action returns users of age ${age}`;
  }

  // 处理带路径和查询参数的 GET 请求
  @Get(':id/details')
  findOneWithDetails(@Param('id') id: string, @Query('includePosts') includePosts: boolean): string {
    return `This action returns user #${id} with includePosts=${includePosts}`;
  }
}

export { AppController };

export {};
