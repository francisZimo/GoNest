import 'reflect-metadata';
export function Inject(token: any): ParameterDecorator {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    const existingInjectedTokens = Reflect.getMetadata('injectedTokens', target) || [];
    existingInjectedTokens[parameterIndex] = token;
    Reflect.defineMetadata('injectedTokens', existingInjectedTokens, target);
  };
}
