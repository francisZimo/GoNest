class Express {
  constructor() {
    this.middlewares = [];
  }

  // 用于注册中间件
  use(middleware) {
    this.middlewares.push(middleware);
  }

  // 模拟请求处理过程
  handle(req, res) {
    const next = (index) => {
      if (index >= this.middlewares.length) return; // 如果所有中间件都已执行完毕，结束

      const middleware = this.middlewares[index];

      try {
        middleware(req, res, () => next(index + 1)); // 调用当前中间件并传递 next 函数
      } catch (err) {
        console.error('Middleware error:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    };

    next(0); // 从第一个中间件开始执行
  }
}

// 创建一个模拟的请求和响应对象
const req = {};
const res = {
  statusCode: 200,
  end: (message) => console.log(`Response: ${message}`),
};

// 创建 Express 实例
const app = new Express();

// 注册第一个中间件
app.use((req, res, next) => {
  console.log('第一个中间件');
  req.customProperty = '这是第一个中间件添加的属性';
  next(); // 将控制权交给下一个中间件
});

// 注册第二个中间件
app.use((req, res, next) => {
  console.log('第二个中间件');
  console.log(req.customProperty); // 输出：这是第一个中间件添加的属性
  next(); // 将控制权交给下一个中间件
});

// 注册路由处理器（作为最后一个中间件）
app.use((req, res) => {
  console.log('路由处理器');
  res.end('Hello World!');
});

// 模拟处理请求
app.handle(req, res);

class Express1 {
  middlewares: any[];

  constructor() {}
  use(md) {
    this.middlewares.push(md);
  }

  hand(req, res) {
    const nest = (index) => {
      if (index >= this.middlewares.length) return;
      const cur = nest[index];
      try {
        cur(req, res, () => nest(index + 1));
      } catch (err) {
        console.error('Middleware error:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    };
    nest(0);
  }
}
