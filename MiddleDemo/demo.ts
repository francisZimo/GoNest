class Request {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
}
class Response {
  send(message: string) {
    console.log(message);
  }
}

// class SimpleExpress {
//   middlewares: any[];
//   constructor() {
//     this.middlewares = [];
//   }
//   use(middleware: any) {
//     this.middlewares.push(middleware);
//   }
//   handleRequest(req, res) {
//     const chain = this.middlewares;
//     let index = 0;
//     const next = (err = '') => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       if (index < chain.length) {
//         const middleware = chain[index++];
//         middleware(req, res, next);
//       }
//     };
//     next();
//   }
// }
class SimpleExpress {
  middlewares: any[];

  constructor() {
    this.middlewares = [];
  }

  use(middleware: any) {
    this.middlewares.push(middleware);
  }

  handleRequest() {
    const chain = this.middlewares;
    let index = 0;
    const next = (index) => {
      if (index < chain.length) {
        const middleware = chain[index];
        index++;
        middleware(req, res, next);
      }
    };
    next(index);
  }
}

const app = new SimpleExpress();
app.use((req, res, next) => {
  console.log(`Middleware 1: ${req.url}`);
  next();
});
app.use((req, res, next) => {
  console.log(`Middleware 2`);
  next();
});
app.use((req, res, next) => {
  console.log(`Middleware 3`);
  res.send('Hello from Middleware 3');
});
const req = new Request('/test');
const res = new Response();
app.handleRequest(req, res);

export {};
