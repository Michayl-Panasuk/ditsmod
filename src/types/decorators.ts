import { makeDecorator, makePropDecorator, Provider, Type } from 'ts-di';

import { HttpMethod, ObjectAny, ModuleWithProviders } from './types';
import { ApplicationMetadata, AbstractModuleMetadata } from './default-options';

export interface ModuleDecoratorFactory {
  (data?: ModuleDecorator): any;
  new (data?: ModuleDecorator): ModuleDecorator;
}

export interface ModuleDecorator extends Partial<AbstractModuleMetadata> {
  /**
   * List of modules or `ModuleWithProviders` imported by this module.
   */
  imports?: Array<Type<any> | ModuleWithProviders<{}> | any[]>;
  /**
   * List of modules, `ModuleWithProviders` or providers exported by this
   * module.
   */
  exports?: Array<Type<any> | ModuleWithProviders<{}> | Provider | any[]>;
}

export const Module = makeDecorator('Module', (data: any) => data) as ModuleDecoratorFactory;

export interface RootModuleDecoratorFactory {
  (data?: RootModuleDecorator): any;
  new (data?: RootModuleDecorator): RootModuleDecorator;
}

export interface RootModuleDecorator extends ModuleDecorator, Partial<ApplicationMetadata> {
  exports?: never;
}

export const RootModule = makeDecorator('RootModule', (data: any) => data) as RootModuleDecoratorFactory;

export interface ControllersDecoratorFactory {
  (data?: ControllerDecorator): any;
  new (data?: ControllerDecorator): ControllerDecorator;
}

export interface ControllerDecorator {
  /**
   * Providers per HTTP request.
   */
  providersPerReq?: Provider[];
}

export const Controller = makeDecorator('Controller', (data: any) => data) as ControllersDecoratorFactory;

export type RouteDecoratorFactory = (method: HttpMethod, path?: string) => RouteDecorator;

export type RouteDecorator = <T>(
  target: ObjectAny,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<T>
) => RouteDecoratorMetadata;

export interface RouteDecoratorMetadata {
  [key: string]: RouteMetadata[];
}

export interface RouteMetadata {
  httpMethod: HttpMethod;
  path: string;
}

function route(httpMethod: HttpMethod, path: string = ''): RouteMetadata {
  return { httpMethod, path };
}

export const Route = makePropDecorator('Route', route) as RouteDecoratorFactory;
