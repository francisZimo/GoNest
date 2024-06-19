// 权限
function authorize(target: any, key: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    if (args[0] === '123') {
      return method.apply(this, args);
    } else {
      console.log('Unauthorized');
    }
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
