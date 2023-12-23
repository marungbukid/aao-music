
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model ScheduleSongs
 * 
 */
export type ScheduleSongs = $Result.DefaultSelection<Prisma.$ScheduleSongsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Songs
 * const songs = await prisma.song.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Songs
   * const songs = await prisma.song.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs>;

  /**
   * `prisma.scheduleSongs`: Exposes CRUD operations for the **ScheduleSongs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleSongs
    * const scheduleSongs = await prisma.scheduleSongs.findMany()
    * ```
    */
  get scheduleSongs(): Prisma.ScheduleSongsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Song: 'Song',
    Schedule: 'Schedule',
    ScheduleSongs: 'ScheduleSongs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'song' | 'schedule' | 'scheduleSongs'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>,
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      ScheduleSongs: {
        payload: Prisma.$ScheduleSongsPayload<ExtArgs>
        fields: Prisma.ScheduleSongsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleSongsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleSongsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload>
          }
          findFirst: {
            args: Prisma.ScheduleSongsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleSongsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload>
          }
          findMany: {
            args: Prisma.ScheduleSongsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload>[]
          }
          create: {
            args: Prisma.ScheduleSongsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload>
          }
          createMany: {
            args: Prisma.ScheduleSongsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScheduleSongsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload>
          }
          update: {
            args: Prisma.ScheduleSongsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleSongsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleSongsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleSongsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload>
          }
          aggregate: {
            args: Prisma.ScheduleSongsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScheduleSongs>
          }
          groupBy: {
            args: Prisma.ScheduleSongsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleSongsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleSongsCountArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleSongsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    ScheduleSongs: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScheduleSongs?: boolean | SongCountOutputTypeCountScheduleSongsArgs
  }

  // Custom InputTypes

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountScheduleSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleSongsWhereInput
  }



  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    scheduleSongs: number
    Song: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleSongs?: boolean | ScheduleCountOutputTypeCountScheduleSongsArgs
    Song?: boolean | ScheduleCountOutputTypeCountSongArgs
  }

  // Custom InputTypes

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountScheduleSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleSongsWhereInput
  }


  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    id: number | null
    version: number | null
    scheduleId: number | null
  }

  export type SongSumAggregateOutputType = {
    id: number | null
    version: number | null
    scheduleId: number | null
  }

  export type SongMinAggregateOutputType = {
    id: number | null
    name: string | null
    author: string | null
    key: string | null
    chordSheetType: string | null
    version: number | null
    lyric: string | null
    createdAt: Date | null
    scheduleId: number | null
  }

  export type SongMaxAggregateOutputType = {
    id: number | null
    name: string | null
    author: string | null
    key: string | null
    chordSheetType: string | null
    version: number | null
    lyric: string | null
    createdAt: Date | null
    scheduleId: number | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    name: number
    author: number
    key: number
    chordSheetType: number
    version: number
    lyric: number
    createdAt: number
    scheduleId: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    id?: true
    version?: true
    scheduleId?: true
  }

  export type SongSumAggregateInputType = {
    id?: true
    version?: true
    scheduleId?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    name?: true
    author?: true
    key?: true
    chordSheetType?: true
    version?: true
    lyric?: true
    createdAt?: true
    scheduleId?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    name?: true
    author?: true
    key?: true
    chordSheetType?: true
    version?: true
    lyric?: true
    createdAt?: true
    scheduleId?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    name?: true
    author?: true
    key?: true
    chordSheetType?: true
    version?: true
    lyric?: true
    createdAt?: true
    scheduleId?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: number
    name: string
    author: string
    key: string
    chordSheetType: string
    version: number
    lyric: string
    createdAt: Date
    scheduleId: number | null
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    author?: boolean
    key?: boolean
    chordSheetType?: boolean
    version?: boolean
    lyric?: boolean
    createdAt?: boolean
    scheduleId?: boolean
    Schedule?: boolean | Song$ScheduleArgs<ExtArgs>
    ScheduleSongs?: boolean | Song$ScheduleSongsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    name?: boolean
    author?: boolean
    key?: boolean
    chordSheetType?: boolean
    version?: boolean
    lyric?: boolean
    createdAt?: boolean
    scheduleId?: boolean
  }

  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Schedule?: boolean | Song$ScheduleArgs<ExtArgs>
    ScheduleSongs?: boolean | Song$ScheduleSongsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      Schedule: Prisma.$SchedulePayload<ExtArgs> | null
      ScheduleSongs: Prisma.$ScheduleSongsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      author: string
      key: string
      chordSheetType: string
      version: number
      lyric: string
      createdAt: Date
      scheduleId: number | null
    }, ExtArgs["result"]["song"]>
    composites: {}
  }


  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Song that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SongFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
    **/
    create<T extends SongCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongCreateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Songs.
     *     @param {SongCreateManyArgs} args - Arguments to create many Songs.
     *     @example
     *     // Create many Songs
     *     const song = await prisma.song.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
    **/
    delete<T extends SongDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongDeleteArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
    **/
    upsert<T extends SongUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpsertArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Schedule<T extends Song$ScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Song$ScheduleArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ScheduleSongs<T extends Song$ScheduleSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$ScheduleSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Song model
   */ 
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'Int'>
    readonly name: FieldRef<"Song", 'String'>
    readonly author: FieldRef<"Song", 'String'>
    readonly key: FieldRef<"Song", 'String'>
    readonly chordSheetType: FieldRef<"Song", 'String'>
    readonly version: FieldRef<"Song", 'Int'>
    readonly lyric: FieldRef<"Song", 'String'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
    readonly scheduleId: FieldRef<"Song", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }


  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
  }


  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }


  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
  }


  /**
   * Song.Schedule
   */
  export type Song$ScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
  }


  /**
   * Song.ScheduleSongs
   */
  export type Song$ScheduleSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    where?: ScheduleSongsWhereInput
    orderBy?: ScheduleSongsOrderByWithRelationInput | ScheduleSongsOrderByWithRelationInput[]
    cursor?: ScheduleSongsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleSongsScalarFieldEnum | ScheduleSongsScalarFieldEnum[]
  }


  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
  }



  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    date: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    date?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    date?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    date?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    date: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    scheduleSongs?: boolean | Schedule$scheduleSongsArgs<ExtArgs>
    Song?: boolean | Schedule$SongArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    date?: boolean
  }

  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleSongs?: boolean | Schedule$scheduleSongsArgs<ExtArgs>
    Song?: boolean | Schedule$SongArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      scheduleSongs: Prisma.$ScheduleSongsPayload<ExtArgs>[]
      Song: Prisma.$SongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }


  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Schedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
    **/
    create<T extends ScheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Schedules.
     *     @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
    **/
    delete<T extends ScheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
    **/
    upsert<T extends ScheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>
    ): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    scheduleSongs<T extends Schedule$scheduleSongsArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$scheduleSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Song<T extends Schedule$SongArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$SongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Schedule model
   */ 
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly date: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }


  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }


  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }


  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }


  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }


  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }


  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }


  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
  }


  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }


  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }


  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
  }


  /**
   * Schedule.scheduleSongs
   */
  export type Schedule$scheduleSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    where?: ScheduleSongsWhereInput
    orderBy?: ScheduleSongsOrderByWithRelationInput | ScheduleSongsOrderByWithRelationInput[]
    cursor?: ScheduleSongsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleSongsScalarFieldEnum | ScheduleSongsScalarFieldEnum[]
  }


  /**
   * Schedule.Song
   */
  export type Schedule$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
  }



  /**
   * Model ScheduleSongs
   */

  export type AggregateScheduleSongs = {
    _count: ScheduleSongsCountAggregateOutputType | null
    _avg: ScheduleSongsAvgAggregateOutputType | null
    _sum: ScheduleSongsSumAggregateOutputType | null
    _min: ScheduleSongsMinAggregateOutputType | null
    _max: ScheduleSongsMaxAggregateOutputType | null
  }

  export type ScheduleSongsAvgAggregateOutputType = {
    id: number | null
    songId: number | null
    scheduleId: number | null
  }

  export type ScheduleSongsSumAggregateOutputType = {
    id: number | null
    songId: number | null
    scheduleId: number | null
  }

  export type ScheduleSongsMinAggregateOutputType = {
    id: number | null
    songId: number | null
    scheduleId: number | null
  }

  export type ScheduleSongsMaxAggregateOutputType = {
    id: number | null
    songId: number | null
    scheduleId: number | null
  }

  export type ScheduleSongsCountAggregateOutputType = {
    id: number
    songId: number
    scheduleId: number
    _all: number
  }


  export type ScheduleSongsAvgAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
  }

  export type ScheduleSongsSumAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
  }

  export type ScheduleSongsMinAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
  }

  export type ScheduleSongsMaxAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
  }

  export type ScheduleSongsCountAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
    _all?: true
  }

  export type ScheduleSongsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleSongs to aggregate.
     */
    where?: ScheduleSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSongs to fetch.
     */
    orderBy?: ScheduleSongsOrderByWithRelationInput | ScheduleSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleSongs
    **/
    _count?: true | ScheduleSongsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleSongsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSongsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleSongsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleSongsMaxAggregateInputType
  }

  export type GetScheduleSongsAggregateType<T extends ScheduleSongsAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleSongs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleSongs[P]>
      : GetScalarType<T[P], AggregateScheduleSongs[P]>
  }




  export type ScheduleSongsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleSongsWhereInput
    orderBy?: ScheduleSongsOrderByWithAggregationInput | ScheduleSongsOrderByWithAggregationInput[]
    by: ScheduleSongsScalarFieldEnum[] | ScheduleSongsScalarFieldEnum
    having?: ScheduleSongsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleSongsCountAggregateInputType | true
    _avg?: ScheduleSongsAvgAggregateInputType
    _sum?: ScheduleSongsSumAggregateInputType
    _min?: ScheduleSongsMinAggregateInputType
    _max?: ScheduleSongsMaxAggregateInputType
  }

  export type ScheduleSongsGroupByOutputType = {
    id: number
    songId: number
    scheduleId: number | null
    _count: ScheduleSongsCountAggregateOutputType | null
    _avg: ScheduleSongsAvgAggregateOutputType | null
    _sum: ScheduleSongsSumAggregateOutputType | null
    _min: ScheduleSongsMinAggregateOutputType | null
    _max: ScheduleSongsMaxAggregateOutputType | null
  }

  type GetScheduleSongsGroupByPayload<T extends ScheduleSongsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleSongsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleSongsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleSongsGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleSongsGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSongsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    scheduleId?: boolean
    song?: boolean | ScheduleSongs$songArgs<ExtArgs>
    Schedule?: boolean | ScheduleSongs$ScheduleArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleSongs"]>

  export type ScheduleSongsSelectScalar = {
    id?: boolean
    songId?: boolean
    scheduleId?: boolean
  }

  export type ScheduleSongsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | ScheduleSongs$songArgs<ExtArgs>
    Schedule?: boolean | ScheduleSongs$ScheduleArgs<ExtArgs>
  }


  export type $ScheduleSongsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleSongs"
    objects: {
      song: Prisma.$SongPayload<ExtArgs> | null
      Schedule: Prisma.$SchedulePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      songId: number
      scheduleId: number | null
    }, ExtArgs["result"]["scheduleSongs"]>
    composites: {}
  }


  type ScheduleSongsGetPayload<S extends boolean | null | undefined | ScheduleSongsDefaultArgs> = $Result.GetResult<Prisma.$ScheduleSongsPayload, S>

  type ScheduleSongsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScheduleSongsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ScheduleSongsCountAggregateInputType | true
    }

  export interface ScheduleSongsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleSongs'], meta: { name: 'ScheduleSongs' } }
    /**
     * Find zero or one ScheduleSongs that matches the filter.
     * @param {ScheduleSongsFindUniqueArgs} args - Arguments to find a ScheduleSongs
     * @example
     * // Get one ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScheduleSongsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleSongsFindUniqueArgs<ExtArgs>>
    ): Prisma__ScheduleSongsClient<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ScheduleSongs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScheduleSongsFindUniqueOrThrowArgs} args - Arguments to find a ScheduleSongs
     * @example
     * // Get one ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScheduleSongsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleSongsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleSongsClient<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ScheduleSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSongsFindFirstArgs} args - Arguments to find a ScheduleSongs
     * @example
     * // Get one ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScheduleSongsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleSongsFindFirstArgs<ExtArgs>>
    ): Prisma__ScheduleSongsClient<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ScheduleSongs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSongsFindFirstOrThrowArgs} args - Arguments to find a ScheduleSongs
     * @example
     * // Get one ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScheduleSongsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleSongsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleSongsClient<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ScheduleSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSongsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.findMany()
     * 
     * // Get first 10 ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleSongsWithIdOnly = await prisma.scheduleSongs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScheduleSongsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleSongsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ScheduleSongs.
     * @param {ScheduleSongsCreateArgs} args - Arguments to create a ScheduleSongs.
     * @example
     * // Create one ScheduleSongs
     * const ScheduleSongs = await prisma.scheduleSongs.create({
     *   data: {
     *     // ... data to create a ScheduleSongs
     *   }
     * })
     * 
    **/
    create<T extends ScheduleSongsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleSongsCreateArgs<ExtArgs>>
    ): Prisma__ScheduleSongsClient<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ScheduleSongs.
     *     @param {ScheduleSongsCreateManyArgs} args - Arguments to create many ScheduleSongs.
     *     @example
     *     // Create many ScheduleSongs
     *     const scheduleSongs = await prisma.scheduleSongs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScheduleSongsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleSongsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScheduleSongs.
     * @param {ScheduleSongsDeleteArgs} args - Arguments to delete one ScheduleSongs.
     * @example
     * // Delete one ScheduleSongs
     * const ScheduleSongs = await prisma.scheduleSongs.delete({
     *   where: {
     *     // ... filter to delete one ScheduleSongs
     *   }
     * })
     * 
    **/
    delete<T extends ScheduleSongsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleSongsDeleteArgs<ExtArgs>>
    ): Prisma__ScheduleSongsClient<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ScheduleSongs.
     * @param {ScheduleSongsUpdateArgs} args - Arguments to update one ScheduleSongs.
     * @example
     * // Update one ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScheduleSongsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleSongsUpdateArgs<ExtArgs>>
    ): Prisma__ScheduleSongsClient<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ScheduleSongs.
     * @param {ScheduleSongsDeleteManyArgs} args - Arguments to filter ScheduleSongs to delete.
     * @example
     * // Delete a few ScheduleSongs
     * const { count } = await prisma.scheduleSongs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScheduleSongsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleSongsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSongsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScheduleSongsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleSongsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScheduleSongs.
     * @param {ScheduleSongsUpsertArgs} args - Arguments to update or create a ScheduleSongs.
     * @example
     * // Update or create a ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.upsert({
     *   create: {
     *     // ... data to create a ScheduleSongs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleSongs we want to update
     *   }
     * })
    **/
    upsert<T extends ScheduleSongsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleSongsUpsertArgs<ExtArgs>>
    ): Prisma__ScheduleSongsClient<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ScheduleSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSongsCountArgs} args - Arguments to filter ScheduleSongs to count.
     * @example
     * // Count the number of ScheduleSongs
     * const count = await prisma.scheduleSongs.count({
     *   where: {
     *     // ... the filter for the ScheduleSongs we want to count
     *   }
     * })
    **/
    count<T extends ScheduleSongsCountArgs>(
      args?: Subset<T, ScheduleSongsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleSongsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSongsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleSongsAggregateArgs>(args: Subset<T, ScheduleSongsAggregateArgs>): Prisma.PrismaPromise<GetScheduleSongsAggregateType<T>>

    /**
     * Group by ScheduleSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSongsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleSongsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleSongsGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleSongsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleSongsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleSongsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleSongs model
   */
  readonly fields: ScheduleSongsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleSongs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleSongsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    song<T extends ScheduleSongs$songArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleSongs$songArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Schedule<T extends ScheduleSongs$ScheduleArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleSongs$ScheduleArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ScheduleSongs model
   */ 
  interface ScheduleSongsFieldRefs {
    readonly id: FieldRef<"ScheduleSongs", 'Int'>
    readonly songId: FieldRef<"ScheduleSongs", 'Int'>
    readonly scheduleId: FieldRef<"ScheduleSongs", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ScheduleSongs findUnique
   */
  export type ScheduleSongsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSongs to fetch.
     */
    where: ScheduleSongsWhereUniqueInput
  }


  /**
   * ScheduleSongs findUniqueOrThrow
   */
  export type ScheduleSongsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSongs to fetch.
     */
    where: ScheduleSongsWhereUniqueInput
  }


  /**
   * ScheduleSongs findFirst
   */
  export type ScheduleSongsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSongs to fetch.
     */
    where?: ScheduleSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSongs to fetch.
     */
    orderBy?: ScheduleSongsOrderByWithRelationInput | ScheduleSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleSongs.
     */
    cursor?: ScheduleSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleSongs.
     */
    distinct?: ScheduleSongsScalarFieldEnum | ScheduleSongsScalarFieldEnum[]
  }


  /**
   * ScheduleSongs findFirstOrThrow
   */
  export type ScheduleSongsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSongs to fetch.
     */
    where?: ScheduleSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSongs to fetch.
     */
    orderBy?: ScheduleSongsOrderByWithRelationInput | ScheduleSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleSongs.
     */
    cursor?: ScheduleSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleSongs.
     */
    distinct?: ScheduleSongsScalarFieldEnum | ScheduleSongsScalarFieldEnum[]
  }


  /**
   * ScheduleSongs findMany
   */
  export type ScheduleSongsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSongs to fetch.
     */
    where?: ScheduleSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSongs to fetch.
     */
    orderBy?: ScheduleSongsOrderByWithRelationInput | ScheduleSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleSongs.
     */
    cursor?: ScheduleSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSongs.
     */
    skip?: number
    distinct?: ScheduleSongsScalarFieldEnum | ScheduleSongsScalarFieldEnum[]
  }


  /**
   * ScheduleSongs create
   */
  export type ScheduleSongsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleSongs.
     */
    data: XOR<ScheduleSongsCreateInput, ScheduleSongsUncheckedCreateInput>
  }


  /**
   * ScheduleSongs createMany
   */
  export type ScheduleSongsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleSongs.
     */
    data: ScheduleSongsCreateManyInput | ScheduleSongsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ScheduleSongs update
   */
  export type ScheduleSongsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleSongs.
     */
    data: XOR<ScheduleSongsUpdateInput, ScheduleSongsUncheckedUpdateInput>
    /**
     * Choose, which ScheduleSongs to update.
     */
    where: ScheduleSongsWhereUniqueInput
  }


  /**
   * ScheduleSongs updateMany
   */
  export type ScheduleSongsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleSongs.
     */
    data: XOR<ScheduleSongsUpdateManyMutationInput, ScheduleSongsUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleSongs to update
     */
    where?: ScheduleSongsWhereInput
  }


  /**
   * ScheduleSongs upsert
   */
  export type ScheduleSongsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleSongs to update in case it exists.
     */
    where: ScheduleSongsWhereUniqueInput
    /**
     * In case the ScheduleSongs found by the `where` argument doesn't exist, create a new ScheduleSongs with this data.
     */
    create: XOR<ScheduleSongsCreateInput, ScheduleSongsUncheckedCreateInput>
    /**
     * In case the ScheduleSongs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleSongsUpdateInput, ScheduleSongsUncheckedUpdateInput>
  }


  /**
   * ScheduleSongs delete
   */
  export type ScheduleSongsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
    /**
     * Filter which ScheduleSongs to delete.
     */
    where: ScheduleSongsWhereUniqueInput
  }


  /**
   * ScheduleSongs deleteMany
   */
  export type ScheduleSongsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleSongs to delete
     */
    where?: ScheduleSongsWhereInput
  }


  /**
   * ScheduleSongs.song
   */
  export type ScheduleSongs$songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
  }


  /**
   * ScheduleSongs.Schedule
   */
  export type ScheduleSongs$ScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
  }


  /**
   * ScheduleSongs without action
   */
  export type ScheduleSongsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SongScalarFieldEnum: {
    id: 'id',
    name: 'name',
    author: 'author',
    key: 'key',
    chordSheetType: 'chordSheetType',
    version: 'version',
    lyric: 'lyric',
    createdAt: 'createdAt',
    scheduleId: 'scheduleId'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    date: 'date'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const ScheduleSongsScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    scheduleId: 'scheduleId'
  };

  export type ScheduleSongsScalarFieldEnum = (typeof ScheduleSongsScalarFieldEnum)[keyof typeof ScheduleSongsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: IntFilter<"Song"> | number
    name?: StringFilter<"Song"> | string
    author?: StringFilter<"Song"> | string
    key?: StringFilter<"Song"> | string
    chordSheetType?: StringFilter<"Song"> | string
    version?: IntFilter<"Song"> | number
    lyric?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    scheduleId?: IntNullableFilter<"Song"> | number | null
    Schedule?: XOR<ScheduleNullableRelationFilter, ScheduleWhereInput> | null
    ScheduleSongs?: ScheduleSongsListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    key?: SortOrder
    chordSheetType?: SortOrder
    version?: SortOrder
    lyric?: SortOrder
    createdAt?: SortOrder
    scheduleId?: SortOrderInput | SortOrder
    Schedule?: ScheduleOrderByWithRelationInput
    ScheduleSongs?: ScheduleSongsOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    name?: StringFilter<"Song"> | string
    author?: StringFilter<"Song"> | string
    key?: StringFilter<"Song"> | string
    chordSheetType?: StringFilter<"Song"> | string
    version?: IntFilter<"Song"> | number
    lyric?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    scheduleId?: IntNullableFilter<"Song"> | number | null
    Schedule?: XOR<ScheduleNullableRelationFilter, ScheduleWhereInput> | null
    ScheduleSongs?: ScheduleSongsListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    key?: SortOrder
    chordSheetType?: SortOrder
    version?: SortOrder
    lyric?: SortOrder
    createdAt?: SortOrder
    scheduleId?: SortOrderInput | SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Song"> | number
    name?: StringWithAggregatesFilter<"Song"> | string
    author?: StringWithAggregatesFilter<"Song"> | string
    key?: StringWithAggregatesFilter<"Song"> | string
    chordSheetType?: StringWithAggregatesFilter<"Song"> | string
    version?: IntWithAggregatesFilter<"Song"> | number
    lyric?: StringWithAggregatesFilter<"Song"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
    scheduleId?: IntNullableWithAggregatesFilter<"Song"> | number | null
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    date?: DateTimeFilter<"Schedule"> | Date | string
    scheduleSongs?: ScheduleSongsListRelationFilter
    Song?: SongListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    scheduleSongs?: ScheduleSongsOrderByRelationAggregateInput
    Song?: SongOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    date?: DateTimeFilter<"Schedule"> | Date | string
    scheduleSongs?: ScheduleSongsListRelationFilter
    Song?: SongListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    date?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type ScheduleSongsWhereInput = {
    AND?: ScheduleSongsWhereInput | ScheduleSongsWhereInput[]
    OR?: ScheduleSongsWhereInput[]
    NOT?: ScheduleSongsWhereInput | ScheduleSongsWhereInput[]
    id?: IntFilter<"ScheduleSongs"> | number
    songId?: IntFilter<"ScheduleSongs"> | number
    scheduleId?: IntNullableFilter<"ScheduleSongs"> | number | null
    song?: XOR<SongNullableRelationFilter, SongWhereInput> | null
    Schedule?: XOR<ScheduleNullableRelationFilter, ScheduleWhereInput> | null
  }

  export type ScheduleSongsOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrderInput | SortOrder
    song?: SongOrderByWithRelationInput
    Schedule?: ScheduleOrderByWithRelationInput
  }

  export type ScheduleSongsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleSongsWhereInput | ScheduleSongsWhereInput[]
    OR?: ScheduleSongsWhereInput[]
    NOT?: ScheduleSongsWhereInput | ScheduleSongsWhereInput[]
    songId?: IntFilter<"ScheduleSongs"> | number
    scheduleId?: IntNullableFilter<"ScheduleSongs"> | number | null
    song?: XOR<SongNullableRelationFilter, SongWhereInput> | null
    Schedule?: XOR<ScheduleNullableRelationFilter, ScheduleWhereInput> | null
  }, "id">

  export type ScheduleSongsOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrderInput | SortOrder
    _count?: ScheduleSongsCountOrderByAggregateInput
    _avg?: ScheduleSongsAvgOrderByAggregateInput
    _max?: ScheduleSongsMaxOrderByAggregateInput
    _min?: ScheduleSongsMinOrderByAggregateInput
    _sum?: ScheduleSongsSumOrderByAggregateInput
  }

  export type ScheduleSongsScalarWhereWithAggregatesInput = {
    AND?: ScheduleSongsScalarWhereWithAggregatesInput | ScheduleSongsScalarWhereWithAggregatesInput[]
    OR?: ScheduleSongsScalarWhereWithAggregatesInput[]
    NOT?: ScheduleSongsScalarWhereWithAggregatesInput | ScheduleSongsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScheduleSongs"> | number
    songId?: IntWithAggregatesFilter<"ScheduleSongs"> | number
    scheduleId?: IntNullableWithAggregatesFilter<"ScheduleSongs"> | number | null
  }

  export type SongCreateInput = {
    name: string
    author: string
    key: string
    chordSheetType: string
    version?: number
    lyric: string
    createdAt?: Date | string
    Schedule?: ScheduleCreateNestedOneWithoutSongInput
    ScheduleSongs?: ScheduleSongsCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: number
    name: string
    author: string
    key: string
    chordSheetType: string
    version?: number
    lyric: string
    createdAt?: Date | string
    scheduleId?: number | null
    ScheduleSongs?: ScheduleSongsUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chordSheetType?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    lyric?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Schedule?: ScheduleUpdateOneWithoutSongNestedInput
    ScheduleSongs?: ScheduleSongsUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chordSheetType?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    lyric?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    ScheduleSongs?: ScheduleSongsUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: number
    name: string
    author: string
    key: string
    chordSheetType: string
    version?: number
    lyric: string
    createdAt?: Date | string
    scheduleId?: number | null
  }

  export type SongUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chordSheetType?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    lyric?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chordSheetType?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    lyric?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduleCreateInput = {
    date: Date | string
    scheduleSongs?: ScheduleSongsCreateNestedManyWithoutScheduleInput
    Song?: SongCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    date: Date | string
    scheduleSongs?: ScheduleSongsUncheckedCreateNestedManyWithoutScheduleInput
    Song?: SongUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleSongs?: ScheduleSongsUpdateManyWithoutScheduleNestedInput
    Song?: SongUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleSongs?: ScheduleSongsUncheckedUpdateManyWithoutScheduleNestedInput
    Song?: SongUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: number
    date: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleSongsCreateInput = {
    song?: SongCreateNestedOneWithoutScheduleSongsInput
    Schedule?: ScheduleCreateNestedOneWithoutScheduleSongsInput
  }

  export type ScheduleSongsUncheckedCreateInput = {
    id?: number
    songId: number
    scheduleId?: number | null
  }

  export type ScheduleSongsUpdateInput = {
    song?: SongUpdateOneWithoutScheduleSongsNestedInput
    Schedule?: ScheduleUpdateOneWithoutScheduleSongsNestedInput
  }

  export type ScheduleSongsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduleSongsCreateManyInput = {
    id?: number
    songId: number
    scheduleId?: number | null
  }

  export type ScheduleSongsUpdateManyMutationInput = {

  }

  export type ScheduleSongsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ScheduleNullableRelationFilter = {
    is?: ScheduleWhereInput | null
    isNot?: ScheduleWhereInput | null
  }

  export type ScheduleSongsListRelationFilter = {
    every?: ScheduleSongsWhereInput
    some?: ScheduleSongsWhereInput
    none?: ScheduleSongsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScheduleSongsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    key?: SortOrder
    chordSheetType?: SortOrder
    version?: SortOrder
    lyric?: SortOrder
    createdAt?: SortOrder
    scheduleId?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    scheduleId?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    key?: SortOrder
    chordSheetType?: SortOrder
    version?: SortOrder
    lyric?: SortOrder
    createdAt?: SortOrder
    scheduleId?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    key?: SortOrder
    chordSheetType?: SortOrder
    version?: SortOrder
    lyric?: SortOrder
    createdAt?: SortOrder
    scheduleId?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    scheduleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SongListRelationFilter = {
    every?: SongWhereInput
    some?: SongWhereInput
    none?: SongWhereInput
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SongNullableRelationFilter = {
    is?: SongWhereInput | null
    isNot?: SongWhereInput | null
  }

  export type ScheduleSongsCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleSongsAvgOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleSongsMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleSongsMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleSongsSumOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleCreateNestedOneWithoutSongInput = {
    create?: XOR<ScheduleCreateWithoutSongInput, ScheduleUncheckedCreateWithoutSongInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSongInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ScheduleSongsCreateNestedManyWithoutSongInput = {
    create?: XOR<ScheduleSongsCreateWithoutSongInput, ScheduleSongsUncheckedCreateWithoutSongInput> | ScheduleSongsCreateWithoutSongInput[] | ScheduleSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ScheduleSongsCreateOrConnectWithoutSongInput | ScheduleSongsCreateOrConnectWithoutSongInput[]
    createMany?: ScheduleSongsCreateManySongInputEnvelope
    connect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
  }

  export type ScheduleSongsUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<ScheduleSongsCreateWithoutSongInput, ScheduleSongsUncheckedCreateWithoutSongInput> | ScheduleSongsCreateWithoutSongInput[] | ScheduleSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ScheduleSongsCreateOrConnectWithoutSongInput | ScheduleSongsCreateOrConnectWithoutSongInput[]
    createMany?: ScheduleSongsCreateManySongInputEnvelope
    connect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ScheduleUpdateOneWithoutSongNestedInput = {
    create?: XOR<ScheduleCreateWithoutSongInput, ScheduleUncheckedCreateWithoutSongInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSongInput
    upsert?: ScheduleUpsertWithoutSongInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutSongInput, ScheduleUpdateWithoutSongInput>, ScheduleUncheckedUpdateWithoutSongInput>
  }

  export type ScheduleSongsUpdateManyWithoutSongNestedInput = {
    create?: XOR<ScheduleSongsCreateWithoutSongInput, ScheduleSongsUncheckedCreateWithoutSongInput> | ScheduleSongsCreateWithoutSongInput[] | ScheduleSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ScheduleSongsCreateOrConnectWithoutSongInput | ScheduleSongsCreateOrConnectWithoutSongInput[]
    upsert?: ScheduleSongsUpsertWithWhereUniqueWithoutSongInput | ScheduleSongsUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: ScheduleSongsCreateManySongInputEnvelope
    set?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    disconnect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    delete?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    connect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    update?: ScheduleSongsUpdateWithWhereUniqueWithoutSongInput | ScheduleSongsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ScheduleSongsUpdateManyWithWhereWithoutSongInput | ScheduleSongsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ScheduleSongsScalarWhereInput | ScheduleSongsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScheduleSongsUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<ScheduleSongsCreateWithoutSongInput, ScheduleSongsUncheckedCreateWithoutSongInput> | ScheduleSongsCreateWithoutSongInput[] | ScheduleSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ScheduleSongsCreateOrConnectWithoutSongInput | ScheduleSongsCreateOrConnectWithoutSongInput[]
    upsert?: ScheduleSongsUpsertWithWhereUniqueWithoutSongInput | ScheduleSongsUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: ScheduleSongsCreateManySongInputEnvelope
    set?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    disconnect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    delete?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    connect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    update?: ScheduleSongsUpdateWithWhereUniqueWithoutSongInput | ScheduleSongsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ScheduleSongsUpdateManyWithWhereWithoutSongInput | ScheduleSongsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ScheduleSongsScalarWhereInput | ScheduleSongsScalarWhereInput[]
  }

  export type ScheduleSongsCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ScheduleSongsCreateWithoutScheduleInput, ScheduleSongsUncheckedCreateWithoutScheduleInput> | ScheduleSongsCreateWithoutScheduleInput[] | ScheduleSongsUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleSongsCreateOrConnectWithoutScheduleInput | ScheduleSongsCreateOrConnectWithoutScheduleInput[]
    createMany?: ScheduleSongsCreateManyScheduleInputEnvelope
    connect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
  }

  export type SongCreateNestedManyWithoutScheduleInput = {
    create?: XOR<SongCreateWithoutScheduleInput, SongUncheckedCreateWithoutScheduleInput> | SongCreateWithoutScheduleInput[] | SongUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: SongCreateOrConnectWithoutScheduleInput | SongCreateOrConnectWithoutScheduleInput[]
    createMany?: SongCreateManyScheduleInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ScheduleSongsUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ScheduleSongsCreateWithoutScheduleInput, ScheduleSongsUncheckedCreateWithoutScheduleInput> | ScheduleSongsCreateWithoutScheduleInput[] | ScheduleSongsUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleSongsCreateOrConnectWithoutScheduleInput | ScheduleSongsCreateOrConnectWithoutScheduleInput[]
    createMany?: ScheduleSongsCreateManyScheduleInputEnvelope
    connect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<SongCreateWithoutScheduleInput, SongUncheckedCreateWithoutScheduleInput> | SongCreateWithoutScheduleInput[] | SongUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: SongCreateOrConnectWithoutScheduleInput | SongCreateOrConnectWithoutScheduleInput[]
    createMany?: SongCreateManyScheduleInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ScheduleSongsUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ScheduleSongsCreateWithoutScheduleInput, ScheduleSongsUncheckedCreateWithoutScheduleInput> | ScheduleSongsCreateWithoutScheduleInput[] | ScheduleSongsUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleSongsCreateOrConnectWithoutScheduleInput | ScheduleSongsCreateOrConnectWithoutScheduleInput[]
    upsert?: ScheduleSongsUpsertWithWhereUniqueWithoutScheduleInput | ScheduleSongsUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ScheduleSongsCreateManyScheduleInputEnvelope
    set?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    disconnect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    delete?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    connect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    update?: ScheduleSongsUpdateWithWhereUniqueWithoutScheduleInput | ScheduleSongsUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ScheduleSongsUpdateManyWithWhereWithoutScheduleInput | ScheduleSongsUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ScheduleSongsScalarWhereInput | ScheduleSongsScalarWhereInput[]
  }

  export type SongUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<SongCreateWithoutScheduleInput, SongUncheckedCreateWithoutScheduleInput> | SongCreateWithoutScheduleInput[] | SongUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: SongCreateOrConnectWithoutScheduleInput | SongCreateOrConnectWithoutScheduleInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutScheduleInput | SongUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: SongCreateManyScheduleInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutScheduleInput | SongUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: SongUpdateManyWithWhereWithoutScheduleInput | SongUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ScheduleSongsUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ScheduleSongsCreateWithoutScheduleInput, ScheduleSongsUncheckedCreateWithoutScheduleInput> | ScheduleSongsCreateWithoutScheduleInput[] | ScheduleSongsUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleSongsCreateOrConnectWithoutScheduleInput | ScheduleSongsCreateOrConnectWithoutScheduleInput[]
    upsert?: ScheduleSongsUpsertWithWhereUniqueWithoutScheduleInput | ScheduleSongsUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ScheduleSongsCreateManyScheduleInputEnvelope
    set?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    disconnect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    delete?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    connect?: ScheduleSongsWhereUniqueInput | ScheduleSongsWhereUniqueInput[]
    update?: ScheduleSongsUpdateWithWhereUniqueWithoutScheduleInput | ScheduleSongsUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ScheduleSongsUpdateManyWithWhereWithoutScheduleInput | ScheduleSongsUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ScheduleSongsScalarWhereInput | ScheduleSongsScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<SongCreateWithoutScheduleInput, SongUncheckedCreateWithoutScheduleInput> | SongCreateWithoutScheduleInput[] | SongUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: SongCreateOrConnectWithoutScheduleInput | SongCreateOrConnectWithoutScheduleInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutScheduleInput | SongUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: SongCreateManyScheduleInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutScheduleInput | SongUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: SongUpdateManyWithWhereWithoutScheduleInput | SongUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongCreateNestedOneWithoutScheduleSongsInput = {
    create?: XOR<SongCreateWithoutScheduleSongsInput, SongUncheckedCreateWithoutScheduleSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutScheduleSongsInput
    connect?: SongWhereUniqueInput
  }

  export type ScheduleCreateNestedOneWithoutScheduleSongsInput = {
    create?: XOR<ScheduleCreateWithoutScheduleSongsInput, ScheduleUncheckedCreateWithoutScheduleSongsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutScheduleSongsInput
    connect?: ScheduleWhereUniqueInput
  }

  export type SongUpdateOneWithoutScheduleSongsNestedInput = {
    create?: XOR<SongCreateWithoutScheduleSongsInput, SongUncheckedCreateWithoutScheduleSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutScheduleSongsInput
    upsert?: SongUpsertWithoutScheduleSongsInput
    disconnect?: SongWhereInput | boolean
    delete?: SongWhereInput | boolean
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutScheduleSongsInput, SongUpdateWithoutScheduleSongsInput>, SongUncheckedUpdateWithoutScheduleSongsInput>
  }

  export type ScheduleUpdateOneWithoutScheduleSongsNestedInput = {
    create?: XOR<ScheduleCreateWithoutScheduleSongsInput, ScheduleUncheckedCreateWithoutScheduleSongsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutScheduleSongsInput
    upsert?: ScheduleUpsertWithoutScheduleSongsInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutScheduleSongsInput, ScheduleUpdateWithoutScheduleSongsInput>, ScheduleUncheckedUpdateWithoutScheduleSongsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ScheduleCreateWithoutSongInput = {
    date: Date | string
    scheduleSongs?: ScheduleSongsCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutSongInput = {
    id?: number
    date: Date | string
    scheduleSongs?: ScheduleSongsUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutSongInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutSongInput, ScheduleUncheckedCreateWithoutSongInput>
  }

  export type ScheduleSongsCreateWithoutSongInput = {
    Schedule?: ScheduleCreateNestedOneWithoutScheduleSongsInput
  }

  export type ScheduleSongsUncheckedCreateWithoutSongInput = {
    id?: number
    scheduleId?: number | null
  }

  export type ScheduleSongsCreateOrConnectWithoutSongInput = {
    where: ScheduleSongsWhereUniqueInput
    create: XOR<ScheduleSongsCreateWithoutSongInput, ScheduleSongsUncheckedCreateWithoutSongInput>
  }

  export type ScheduleSongsCreateManySongInputEnvelope = {
    data: ScheduleSongsCreateManySongInput | ScheduleSongsCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleUpsertWithoutSongInput = {
    update: XOR<ScheduleUpdateWithoutSongInput, ScheduleUncheckedUpdateWithoutSongInput>
    create: XOR<ScheduleCreateWithoutSongInput, ScheduleUncheckedCreateWithoutSongInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutSongInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutSongInput, ScheduleUncheckedUpdateWithoutSongInput>
  }

  export type ScheduleUpdateWithoutSongInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleSongs?: ScheduleSongsUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleSongs?: ScheduleSongsUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleSongsUpsertWithWhereUniqueWithoutSongInput = {
    where: ScheduleSongsWhereUniqueInput
    update: XOR<ScheduleSongsUpdateWithoutSongInput, ScheduleSongsUncheckedUpdateWithoutSongInput>
    create: XOR<ScheduleSongsCreateWithoutSongInput, ScheduleSongsUncheckedCreateWithoutSongInput>
  }

  export type ScheduleSongsUpdateWithWhereUniqueWithoutSongInput = {
    where: ScheduleSongsWhereUniqueInput
    data: XOR<ScheduleSongsUpdateWithoutSongInput, ScheduleSongsUncheckedUpdateWithoutSongInput>
  }

  export type ScheduleSongsUpdateManyWithWhereWithoutSongInput = {
    where: ScheduleSongsScalarWhereInput
    data: XOR<ScheduleSongsUpdateManyMutationInput, ScheduleSongsUncheckedUpdateManyWithoutSongInput>
  }

  export type ScheduleSongsScalarWhereInput = {
    AND?: ScheduleSongsScalarWhereInput | ScheduleSongsScalarWhereInput[]
    OR?: ScheduleSongsScalarWhereInput[]
    NOT?: ScheduleSongsScalarWhereInput | ScheduleSongsScalarWhereInput[]
    id?: IntFilter<"ScheduleSongs"> | number
    songId?: IntFilter<"ScheduleSongs"> | number
    scheduleId?: IntNullableFilter<"ScheduleSongs"> | number | null
  }

  export type ScheduleSongsCreateWithoutScheduleInput = {
    song?: SongCreateNestedOneWithoutScheduleSongsInput
  }

  export type ScheduleSongsUncheckedCreateWithoutScheduleInput = {
    id?: number
    songId: number
  }

  export type ScheduleSongsCreateOrConnectWithoutScheduleInput = {
    where: ScheduleSongsWhereUniqueInput
    create: XOR<ScheduleSongsCreateWithoutScheduleInput, ScheduleSongsUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleSongsCreateManyScheduleInputEnvelope = {
    data: ScheduleSongsCreateManyScheduleInput | ScheduleSongsCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type SongCreateWithoutScheduleInput = {
    name: string
    author: string
    key: string
    chordSheetType: string
    version?: number
    lyric: string
    createdAt?: Date | string
    ScheduleSongs?: ScheduleSongsCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutScheduleInput = {
    id?: number
    name: string
    author: string
    key: string
    chordSheetType: string
    version?: number
    lyric: string
    createdAt?: Date | string
    ScheduleSongs?: ScheduleSongsUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutScheduleInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutScheduleInput, SongUncheckedCreateWithoutScheduleInput>
  }

  export type SongCreateManyScheduleInputEnvelope = {
    data: SongCreateManyScheduleInput | SongCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleSongsUpsertWithWhereUniqueWithoutScheduleInput = {
    where: ScheduleSongsWhereUniqueInput
    update: XOR<ScheduleSongsUpdateWithoutScheduleInput, ScheduleSongsUncheckedUpdateWithoutScheduleInput>
    create: XOR<ScheduleSongsCreateWithoutScheduleInput, ScheduleSongsUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleSongsUpdateWithWhereUniqueWithoutScheduleInput = {
    where: ScheduleSongsWhereUniqueInput
    data: XOR<ScheduleSongsUpdateWithoutScheduleInput, ScheduleSongsUncheckedUpdateWithoutScheduleInput>
  }

  export type ScheduleSongsUpdateManyWithWhereWithoutScheduleInput = {
    where: ScheduleSongsScalarWhereInput
    data: XOR<ScheduleSongsUpdateManyMutationInput, ScheduleSongsUncheckedUpdateManyWithoutScheduleInput>
  }

  export type SongUpsertWithWhereUniqueWithoutScheduleInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutScheduleInput, SongUncheckedUpdateWithoutScheduleInput>
    create: XOR<SongCreateWithoutScheduleInput, SongUncheckedCreateWithoutScheduleInput>
  }

  export type SongUpdateWithWhereUniqueWithoutScheduleInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutScheduleInput, SongUncheckedUpdateWithoutScheduleInput>
  }

  export type SongUpdateManyWithWhereWithoutScheduleInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutScheduleInput>
  }

  export type SongScalarWhereInput = {
    AND?: SongScalarWhereInput | SongScalarWhereInput[]
    OR?: SongScalarWhereInput[]
    NOT?: SongScalarWhereInput | SongScalarWhereInput[]
    id?: IntFilter<"Song"> | number
    name?: StringFilter<"Song"> | string
    author?: StringFilter<"Song"> | string
    key?: StringFilter<"Song"> | string
    chordSheetType?: StringFilter<"Song"> | string
    version?: IntFilter<"Song"> | number
    lyric?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    scheduleId?: IntNullableFilter<"Song"> | number | null
  }

  export type SongCreateWithoutScheduleSongsInput = {
    name: string
    author: string
    key: string
    chordSheetType: string
    version?: number
    lyric: string
    createdAt?: Date | string
    Schedule?: ScheduleCreateNestedOneWithoutSongInput
  }

  export type SongUncheckedCreateWithoutScheduleSongsInput = {
    id?: number
    name: string
    author: string
    key: string
    chordSheetType: string
    version?: number
    lyric: string
    createdAt?: Date | string
    scheduleId?: number | null
  }

  export type SongCreateOrConnectWithoutScheduleSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutScheduleSongsInput, SongUncheckedCreateWithoutScheduleSongsInput>
  }

  export type ScheduleCreateWithoutScheduleSongsInput = {
    date: Date | string
    Song?: SongCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutScheduleSongsInput = {
    id?: number
    date: Date | string
    Song?: SongUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutScheduleSongsInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutScheduleSongsInput, ScheduleUncheckedCreateWithoutScheduleSongsInput>
  }

  export type SongUpsertWithoutScheduleSongsInput = {
    update: XOR<SongUpdateWithoutScheduleSongsInput, SongUncheckedUpdateWithoutScheduleSongsInput>
    create: XOR<SongCreateWithoutScheduleSongsInput, SongUncheckedCreateWithoutScheduleSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutScheduleSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutScheduleSongsInput, SongUncheckedUpdateWithoutScheduleSongsInput>
  }

  export type SongUpdateWithoutScheduleSongsInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chordSheetType?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    lyric?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Schedule?: ScheduleUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutScheduleSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chordSheetType?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    lyric?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduleUpsertWithoutScheduleSongsInput = {
    update: XOR<ScheduleUpdateWithoutScheduleSongsInput, ScheduleUncheckedUpdateWithoutScheduleSongsInput>
    create: XOR<ScheduleCreateWithoutScheduleSongsInput, ScheduleUncheckedCreateWithoutScheduleSongsInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutScheduleSongsInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutScheduleSongsInput, ScheduleUncheckedUpdateWithoutScheduleSongsInput>
  }

  export type ScheduleUpdateWithoutScheduleSongsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    Song?: SongUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutScheduleSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    Song?: SongUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleSongsCreateManySongInput = {
    id?: number
    scheduleId?: number | null
  }

  export type ScheduleSongsUpdateWithoutSongInput = {
    Schedule?: ScheduleUpdateOneWithoutScheduleSongsNestedInput
  }

  export type ScheduleSongsUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduleSongsUncheckedUpdateManyWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduleSongsCreateManyScheduleInput = {
    id?: number
    songId: number
  }

  export type SongCreateManyScheduleInput = {
    id?: number
    name: string
    author: string
    key: string
    chordSheetType: string
    version?: number
    lyric: string
    createdAt?: Date | string
  }

  export type ScheduleSongsUpdateWithoutScheduleInput = {
    song?: SongUpdateOneWithoutScheduleSongsNestedInput
  }

  export type ScheduleSongsUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleSongsUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type SongUpdateWithoutScheduleInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chordSheetType?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    lyric?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleSongs?: ScheduleSongsUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chordSheetType?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    lyric?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleSongs?: ScheduleSongsUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chordSheetType?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    lyric?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SongCountOutputTypeDefaultArgs instead
     */
    export type SongCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleCountOutputTypeDefaultArgs instead
     */
    export type ScheduleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongDefaultArgs instead
     */
    export type SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleDefaultArgs instead
     */
    export type ScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleSongsDefaultArgs instead
     */
    export type ScheduleSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleSongsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}