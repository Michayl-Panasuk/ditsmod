import { ReflectiveInjector, ResolvedReflectiveProvider, TypeProvider, Type } from '@ts-stack/di';
import { ModuleType, ModuleWithOptions } from '../decorators/module';
import { CanActivate } from '../decorators/route';

/**
 * `http.METHODS`
 */
export type HttpMethod =
  | 'ACL'
  | 'BIND'
  | 'CHECKOUT'
  | 'CONNECT'
  | 'COPY'
  | 'DELETE'
  | 'GET'
  | 'HEAD'
  | 'LINK'
  | 'LOCK'
  | 'M-SEARCH'
  | 'MERGE'
  | 'MKACTIVITY'
  | 'MKCALENDAR'
  | 'MKCOL'
  | 'MOVE'
  | 'NOTIFY'
  | 'OPTIONS'
  | 'PATCH'
  | 'POST'
  | 'PROPFIND'
  | 'PROPPATCH'
  | 'PURGE'
  | 'PUT'
  | 'REBIND'
  | 'REPORT'
  | 'SEARCH'
  | 'SOURCE'
  | 'SUBSCRIBE'
  | 'TRACE'
  | 'UNBIND'
  | 'UNLINK'
  | 'UNLOCK'
  | 'UNSUBSCRIBE';

export interface GuardItems {
  guard: Type<CanActivate>;
  params?: any[];
}

export type RouteHandler = () => {
  /**
   * Injector per module.
   */
  injector: ReflectiveInjector;
  /**
   * Resolved providers per request.
   */
  providers: ResolvedReflectiveProvider[];
  controller: TypeProvider;
  /**
   * Method of the class controller.
   */
  method: string;
  /**
   * Need or not to parse body.
   */
  parseBody: boolean;
  /**
   * An array of DI tokens used to look up `CanActivate()` handlers,
   * in order to determine if the current user is allowed to activate the controller.
   * By default, any user can activate.
   */
  guardItems: GuardItems[];
};

export class Router {
  on(method: HttpMethod, path: string, handle: RouteHandler): this {
    return this;
  }

  all(path: string, handle: RouteHandler): this {
    return this;
  }

  find(method: HttpMethod, path: string): RouterReturns {
    return { handle: null, params: null };
  }
}

export class RouterReturns {
  handle: RouteHandler;
  params: RouteParam[];
}

export interface RouteParam {
  key: string;
  value: string;
}

export interface ImportsWithPrefixDecorator {
  prefix: string;
  module: Type<any> | ModuleWithOptions<any> | any[];
}

export interface ImportsWithPrefix {
  prefix: string;
  module: ModuleType | ModuleWithOptions<any>;
}
