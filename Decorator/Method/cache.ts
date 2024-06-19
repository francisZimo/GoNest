function authorize(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const cacheMap = new Map<string, any>();
  console.log('ha');
  descriptor.value = function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cacheMap.has(key)) {
      return cacheMap.get(key);
    }
    const result = originalMethod.apply(this, args);
    cacheMap.set(key, result);
    return result;
  };
  return descriptor;
}

class AdminPanel {
  @authorize
  deleteUser(userId: string) {
    console.log(`User ${userId} deleted`);
  }
}
const adminPanel = new AdminPanel();
adminPanel.deleteUser('123'); //

export {};
