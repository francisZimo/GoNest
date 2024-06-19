// 这个装饰器扩展了类的功能，添加了一个新的属性和方法。 添加时间戳

function addTimestamp<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    timestamp = new Date();
  };
}
interface Document {
  timestamp: Date;
}
@addTimestamp
class Document {
  constructor(public title: string) {}
}

const doc = new Document('My Document');
//const doc = new Document("My Document") as Document & { timestamp: Date };
console.log(doc.title); // My Document
console.log(doc.timestamp); // 当前日期和时间
export {};
