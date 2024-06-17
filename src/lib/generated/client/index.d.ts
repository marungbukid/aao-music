
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model SongLead
 * 
 */
export type SongLead = $Result.DefaultSelection<Prisma.$SongLeadPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model LocationSongLead
 * 
 */
export type LocationSongLead = $Result.DefaultSelection<Prisma.$LocationSongLeadPayload>

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

  /**
   * `prisma.songLead`: Exposes CRUD operations for the **SongLead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongLeads
    * const songLeads = await prisma.songLead.findMany()
    * ```
    */
  get songLead(): Prisma.SongLeadDelegate<ExtArgs>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs>;

  /**
   * `prisma.locationSongLead`: Exposes CRUD operations for the **LocationSongLead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationSongLeads
    * const locationSongLeads = await prisma.locationSongLead.findMany()
    * ```
    */
  get locationSongLead(): Prisma.LocationSongLeadDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    ScheduleSongs: 'ScheduleSongs',
    SongLead: 'SongLead',
    Location: 'Location',
    LocationSongLead: 'LocationSongLead'
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
      modelProps: 'song' | 'schedule' | 'scheduleSongs' | 'songLead' | 'location' | 'locationSongLead'
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
          createManyAndReturn: {
            args: Prisma.SongCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
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
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
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
          createManyAndReturn: {
            args: Prisma.ScheduleSongsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleSongsPayload>[]
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
      SongLead: {
        payload: Prisma.$SongLeadPayload<ExtArgs>
        fields: Prisma.SongLeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongLeadFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongLeadFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload>
          }
          findFirst: {
            args: Prisma.SongLeadFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongLeadFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload>
          }
          findMany: {
            args: Prisma.SongLeadFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload>[]
          }
          create: {
            args: Prisma.SongLeadCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload>
          }
          createMany: {
            args: Prisma.SongLeadCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongLeadCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload>[]
          }
          delete: {
            args: Prisma.SongLeadDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload>
          }
          update: {
            args: Prisma.SongLeadUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload>
          }
          deleteMany: {
            args: Prisma.SongLeadDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SongLeadUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SongLeadUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongLeadPayload>
          }
          aggregate: {
            args: Prisma.SongLeadAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSongLead>
          }
          groupBy: {
            args: Prisma.SongLeadGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SongLeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongLeadCountArgs<ExtArgs>,
            result: $Utils.Optional<SongLeadCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>,
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      LocationSongLead: {
        payload: Prisma.$LocationSongLeadPayload<ExtArgs>
        fields: Prisma.LocationSongLeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationSongLeadFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationSongLeadFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload>
          }
          findFirst: {
            args: Prisma.LocationSongLeadFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationSongLeadFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload>
          }
          findMany: {
            args: Prisma.LocationSongLeadFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload>[]
          }
          create: {
            args: Prisma.LocationSongLeadCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload>
          }
          createMany: {
            args: Prisma.LocationSongLeadCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationSongLeadCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload>[]
          }
          delete: {
            args: Prisma.LocationSongLeadDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload>
          }
          update: {
            args: Prisma.LocationSongLeadUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload>
          }
          deleteMany: {
            args: Prisma.LocationSongLeadDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LocationSongLeadUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LocationSongLeadUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationSongLeadPayload>
          }
          aggregate: {
            args: Prisma.LocationSongLeadAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocationSongLead>
          }
          groupBy: {
            args: Prisma.LocationSongLeadGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocationSongLeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationSongLeadCountArgs<ExtArgs>,
            result: $Utils.Optional<LocationSongLeadCountAggregateOutputType> | number
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Count Type SongLeadCountOutputType
   */

  export type SongLeadCountOutputType = {
    Schedule: number
    LocationSongLead: number
  }

  export type SongLeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Schedule?: boolean | SongLeadCountOutputTypeCountScheduleArgs
    LocationSongLead?: boolean | SongLeadCountOutputTypeCountLocationSongLeadArgs
  }

  // Custom InputTypes
  /**
   * SongLeadCountOutputType without action
   */
  export type SongLeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLeadCountOutputType
     */
    select?: SongLeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongLeadCountOutputType without action
   */
  export type SongLeadCountOutputTypeCountScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * SongLeadCountOutputType without action
   */
  export type SongLeadCountOutputTypeCountLocationSongLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationSongLeadWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    locationSongLead: number
    SongLead: number
    Schedule: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationSongLead?: boolean | LocationCountOutputTypeCountLocationSongLeadArgs
    SongLead?: boolean | LocationCountOutputTypeCountSongLeadArgs
    Schedule?: boolean | LocationCountOutputTypeCountScheduleArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountLocationSongLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationSongLeadWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountSongLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongLeadWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
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

  export type SongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  export type SongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Schedule?: boolean | Song$ScheduleArgs<ExtArgs>
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
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
     * Find one Song that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
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
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
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
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends SongCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'createManyAndReturn'>>

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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
   * Song createManyAndReturn
   */
  export type SongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
    songLeadId: number | null
    locationId: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
    songLeadId: number | null
    locationId: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    date: Date | null
    songLeadId: number | null
    locationId: number | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    songLeadId: number | null
    locationId: number | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    date: number
    songLeadId: number
    locationId: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
    songLeadId?: true
    locationId?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
    songLeadId?: true
    locationId?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    date?: true
    songLeadId?: true
    locationId?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    date?: true
    songLeadId?: true
    locationId?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    date?: true
    songLeadId?: true
    locationId?: true
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
    songLeadId: number | null
    locationId: number | null
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
    songLeadId?: boolean
    locationId?: boolean
    scheduleSongs?: boolean | Schedule$scheduleSongsArgs<ExtArgs>
    Song?: boolean | Schedule$SongArgs<ExtArgs>
    songLead?: boolean | Schedule$songLeadArgs<ExtArgs>
    location?: boolean | Schedule$locationArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    songLeadId?: boolean
    locationId?: boolean
    songLead?: boolean | Schedule$songLeadArgs<ExtArgs>
    location?: boolean | Schedule$locationArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    date?: boolean
    songLeadId?: boolean
    locationId?: boolean
  }

  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleSongs?: boolean | Schedule$scheduleSongsArgs<ExtArgs>
    Song?: boolean | Schedule$SongArgs<ExtArgs>
    songLead?: boolean | Schedule$songLeadArgs<ExtArgs>
    location?: boolean | Schedule$locationArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songLead?: boolean | Schedule$songLeadArgs<ExtArgs>
    location?: boolean | Schedule$locationArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      scheduleSongs: Prisma.$ScheduleSongsPayload<ExtArgs>[]
      Song: Prisma.$SongPayload<ExtArgs>[]
      songLead: Prisma.$SongLeadPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      songLeadId: number | null
      locationId: number | null
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
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
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
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
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ScheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'createManyAndReturn'>>

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

    songLead<T extends Schedule$songLeadArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$songLeadArgs<ExtArgs>>): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    location<T extends Schedule$locationArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
    readonly songLeadId: FieldRef<"Schedule", 'Int'>
    readonly locationId: FieldRef<"Schedule", 'Int'>
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
   * Schedule.songLead
   */
  export type Schedule$songLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    where?: SongLeadWhereInput
  }

  /**
   * Schedule.location
   */
  export type Schedule$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
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
     * Choose, which related nodes to fetch as well
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
    order: number | null
  }

  export type ScheduleSongsSumAggregateOutputType = {
    id: number | null
    songId: number | null
    scheduleId: number | null
    order: number | null
  }

  export type ScheduleSongsMinAggregateOutputType = {
    id: number | null
    songId: number | null
    scheduleId: number | null
    preferredKey: string | null
    order: number | null
  }

  export type ScheduleSongsMaxAggregateOutputType = {
    id: number | null
    songId: number | null
    scheduleId: number | null
    preferredKey: string | null
    order: number | null
  }

  export type ScheduleSongsCountAggregateOutputType = {
    id: number
    songId: number
    scheduleId: number
    preferredKey: number
    order: number
    _all: number
  }


  export type ScheduleSongsAvgAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
    order?: true
  }

  export type ScheduleSongsSumAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
    order?: true
  }

  export type ScheduleSongsMinAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
    preferredKey?: true
    order?: true
  }

  export type ScheduleSongsMaxAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
    preferredKey?: true
    order?: true
  }

  export type ScheduleSongsCountAggregateInputType = {
    id?: true
    songId?: true
    scheduleId?: true
    preferredKey?: true
    order?: true
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
    preferredKey: string | null
    order: number
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
    preferredKey?: boolean
    order?: boolean
    song?: boolean | ScheduleSongs$songArgs<ExtArgs>
    Schedule?: boolean | ScheduleSongs$ScheduleArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleSongs"]>

  export type ScheduleSongsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    scheduleId?: boolean
    preferredKey?: boolean
    order?: boolean
    song?: boolean | ScheduleSongs$songArgs<ExtArgs>
    Schedule?: boolean | ScheduleSongs$ScheduleArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleSongs"]>

  export type ScheduleSongsSelectScalar = {
    id?: boolean
    songId?: boolean
    scheduleId?: boolean
    preferredKey?: boolean
    order?: boolean
  }

  export type ScheduleSongsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | ScheduleSongs$songArgs<ExtArgs>
    Schedule?: boolean | ScheduleSongs$ScheduleArgs<ExtArgs>
  }
  export type ScheduleSongsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
      preferredKey: string | null
      order: number
    }, ExtArgs["result"]["scheduleSongs"]>
    composites: {}
  }

  type ScheduleSongsGetPayload<S extends boolean | null | undefined | ScheduleSongsDefaultArgs> = $Result.GetResult<Prisma.$ScheduleSongsPayload, S>

  type ScheduleSongsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScheduleSongsFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
     * Find one ScheduleSongs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
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
     * @param {ScheduleSongsFindManyArgs} args - Arguments to filter and select certain fields only.
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
     * @param {ScheduleSongsCreateManyArgs} args - Arguments to create many ScheduleSongs.
     * @example
     * // Create many ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ScheduleSongsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleSongsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleSongs and returns the data saved in the database.
     * @param {ScheduleSongsCreateManyAndReturnArgs} args - Arguments to create many ScheduleSongs.
     * @example
     * // Create many ScheduleSongs
     * const scheduleSongs = await prisma.scheduleSongs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleSongs and only return the `id`
     * const scheduleSongsWithIdOnly = await prisma.scheduleSongs.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ScheduleSongsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleSongsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSongsPayload<ExtArgs>, T, 'createManyAndReturn'>>

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
    readonly preferredKey: FieldRef<"ScheduleSongs", 'String'>
    readonly order: FieldRef<"ScheduleSongs", 'Int'>
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
   * ScheduleSongs createManyAndReturn
   */
  export type ScheduleSongsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSongs
     */
    select?: ScheduleSongsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ScheduleSongs.
     */
    data: ScheduleSongsCreateManyInput | ScheduleSongsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSongsIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSongsInclude<ExtArgs> | null
  }


  /**
   * Model SongLead
   */

  export type AggregateSongLead = {
    _count: SongLeadCountAggregateOutputType | null
    _avg: SongLeadAvgAggregateOutputType | null
    _sum: SongLeadSumAggregateOutputType | null
    _min: SongLeadMinAggregateOutputType | null
    _max: SongLeadMaxAggregateOutputType | null
  }

  export type SongLeadAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type SongLeadSumAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type SongLeadMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    locationId: number | null
  }

  export type SongLeadMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    locationId: number | null
  }

  export type SongLeadCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    locationId: number
    _all: number
  }


  export type SongLeadAvgAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type SongLeadSumAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type SongLeadMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    locationId?: true
  }

  export type SongLeadMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    locationId?: true
  }

  export type SongLeadCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    locationId?: true
    _all?: true
  }

  export type SongLeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongLead to aggregate.
     */
    where?: SongLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongLeads to fetch.
     */
    orderBy?: SongLeadOrderByWithRelationInput | SongLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongLeads
    **/
    _count?: true | SongLeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongLeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongLeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongLeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongLeadMaxAggregateInputType
  }

  export type GetSongLeadAggregateType<T extends SongLeadAggregateArgs> = {
        [P in keyof T & keyof AggregateSongLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongLead[P]>
      : GetScalarType<T[P], AggregateSongLead[P]>
  }




  export type SongLeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongLeadWhereInput
    orderBy?: SongLeadOrderByWithAggregationInput | SongLeadOrderByWithAggregationInput[]
    by: SongLeadScalarFieldEnum[] | SongLeadScalarFieldEnum
    having?: SongLeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongLeadCountAggregateInputType | true
    _avg?: SongLeadAvgAggregateInputType
    _sum?: SongLeadSumAggregateInputType
    _min?: SongLeadMinAggregateInputType
    _max?: SongLeadMaxAggregateInputType
  }

  export type SongLeadGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    locationId: number | null
    _count: SongLeadCountAggregateOutputType | null
    _avg: SongLeadAvgAggregateOutputType | null
    _sum: SongLeadSumAggregateOutputType | null
    _min: SongLeadMinAggregateOutputType | null
    _max: SongLeadMaxAggregateOutputType | null
  }

  type GetSongLeadGroupByPayload<T extends SongLeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongLeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongLeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongLeadGroupByOutputType[P]>
            : GetScalarType<T[P], SongLeadGroupByOutputType[P]>
        }
      >
    >


  export type SongLeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    locationId?: boolean
    Schedule?: boolean | SongLead$ScheduleArgs<ExtArgs>
    Location?: boolean | SongLead$LocationArgs<ExtArgs>
    LocationSongLead?: boolean | SongLead$LocationSongLeadArgs<ExtArgs>
    _count?: boolean | SongLeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songLead"]>

  export type SongLeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    locationId?: boolean
    Location?: boolean | SongLead$LocationArgs<ExtArgs>
  }, ExtArgs["result"]["songLead"]>

  export type SongLeadSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    locationId?: boolean
  }

  export type SongLeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Schedule?: boolean | SongLead$ScheduleArgs<ExtArgs>
    Location?: boolean | SongLead$LocationArgs<ExtArgs>
    LocationSongLead?: boolean | SongLead$LocationSongLeadArgs<ExtArgs>
    _count?: boolean | SongLeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SongLeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Location?: boolean | SongLead$LocationArgs<ExtArgs>
  }

  export type $SongLeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SongLead"
    objects: {
      Schedule: Prisma.$SchedulePayload<ExtArgs>[]
      Location: Prisma.$LocationPayload<ExtArgs> | null
      LocationSongLead: Prisma.$LocationSongLeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      locationId: number | null
    }, ExtArgs["result"]["songLead"]>
    composites: {}
  }

  type SongLeadGetPayload<S extends boolean | null | undefined | SongLeadDefaultArgs> = $Result.GetResult<Prisma.$SongLeadPayload, S>

  type SongLeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongLeadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SongLeadCountAggregateInputType | true
    }

  export interface SongLeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongLead'], meta: { name: 'SongLead' } }
    /**
     * Find zero or one SongLead that matches the filter.
     * @param {SongLeadFindUniqueArgs} args - Arguments to find a SongLead
     * @example
     * // Get one SongLead
     * const songLead = await prisma.songLead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongLeadFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SongLeadFindUniqueArgs<ExtArgs>>
    ): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SongLead that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SongLeadFindUniqueOrThrowArgs} args - Arguments to find a SongLead
     * @example
     * // Get one SongLead
     * const songLead = await prisma.songLead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongLeadFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongLeadFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SongLead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLeadFindFirstArgs} args - Arguments to find a SongLead
     * @example
     * // Get one SongLead
     * const songLead = await prisma.songLead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongLeadFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SongLeadFindFirstArgs<ExtArgs>>
    ): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SongLead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLeadFindFirstOrThrowArgs} args - Arguments to find a SongLead
     * @example
     * // Get one SongLead
     * const songLead = await prisma.songLead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongLeadFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongLeadFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SongLeads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongLeads
     * const songLeads = await prisma.songLead.findMany()
     * 
     * // Get first 10 SongLeads
     * const songLeads = await prisma.songLead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songLeadWithIdOnly = await prisma.songLead.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SongLeadFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongLeadFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SongLead.
     * @param {SongLeadCreateArgs} args - Arguments to create a SongLead.
     * @example
     * // Create one SongLead
     * const SongLead = await prisma.songLead.create({
     *   data: {
     *     // ... data to create a SongLead
     *   }
     * })
     * 
    **/
    create<T extends SongLeadCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongLeadCreateArgs<ExtArgs>>
    ): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SongLeads.
     * @param {SongLeadCreateManyArgs} args - Arguments to create many SongLeads.
     * @example
     * // Create many SongLeads
     * const songLead = await prisma.songLead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SongLeadCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongLeadCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SongLeads and returns the data saved in the database.
     * @param {SongLeadCreateManyAndReturnArgs} args - Arguments to create many SongLeads.
     * @example
     * // Create many SongLeads
     * const songLead = await prisma.songLead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SongLeads and only return the `id`
     * const songLeadWithIdOnly = await prisma.songLead.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends SongLeadCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, SongLeadCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a SongLead.
     * @param {SongLeadDeleteArgs} args - Arguments to delete one SongLead.
     * @example
     * // Delete one SongLead
     * const SongLead = await prisma.songLead.delete({
     *   where: {
     *     // ... filter to delete one SongLead
     *   }
     * })
     * 
    **/
    delete<T extends SongLeadDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongLeadDeleteArgs<ExtArgs>>
    ): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SongLead.
     * @param {SongLeadUpdateArgs} args - Arguments to update one SongLead.
     * @example
     * // Update one SongLead
     * const songLead = await prisma.songLead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongLeadUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongLeadUpdateArgs<ExtArgs>>
    ): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SongLeads.
     * @param {SongLeadDeleteManyArgs} args - Arguments to filter SongLeads to delete.
     * @example
     * // Delete a few SongLeads
     * const { count } = await prisma.songLead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongLeadDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongLeadDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongLeads
     * const songLead = await prisma.songLead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongLeadUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongLeadUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SongLead.
     * @param {SongLeadUpsertArgs} args - Arguments to update or create a SongLead.
     * @example
     * // Update or create a SongLead
     * const songLead = await prisma.songLead.upsert({
     *   create: {
     *     // ... data to create a SongLead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongLead we want to update
     *   }
     * })
    **/
    upsert<T extends SongLeadUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongLeadUpsertArgs<ExtArgs>>
    ): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SongLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLeadCountArgs} args - Arguments to filter SongLeads to count.
     * @example
     * // Count the number of SongLeads
     * const count = await prisma.songLead.count({
     *   where: {
     *     // ... the filter for the SongLeads we want to count
     *   }
     * })
    **/
    count<T extends SongLeadCountArgs>(
      args?: Subset<T, SongLeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongLeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SongLeadAggregateArgs>(args: Subset<T, SongLeadAggregateArgs>): Prisma.PrismaPromise<GetSongLeadAggregateType<T>>

    /**
     * Group by SongLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongLeadGroupByArgs} args - Group by arguments.
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
      T extends SongLeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongLeadGroupByArgs['orderBy'] }
        : { orderBy?: SongLeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SongLeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SongLead model
   */
  readonly fields: SongLeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SongLead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongLeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Schedule<T extends SongLead$ScheduleArgs<ExtArgs> = {}>(args?: Subset<T, SongLead$ScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findMany'> | Null>;

    Location<T extends SongLead$LocationArgs<ExtArgs> = {}>(args?: Subset<T, SongLead$LocationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    LocationSongLead<T extends SongLead$LocationSongLeadArgs<ExtArgs> = {}>(args?: Subset<T, SongLead$LocationSongLeadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the SongLead model
   */ 
  interface SongLeadFieldRefs {
    readonly id: FieldRef<"SongLead", 'Int'>
    readonly firstName: FieldRef<"SongLead", 'String'>
    readonly lastName: FieldRef<"SongLead", 'String'>
    readonly locationId: FieldRef<"SongLead", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SongLead findUnique
   */
  export type SongLeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    /**
     * Filter, which SongLead to fetch.
     */
    where: SongLeadWhereUniqueInput
  }

  /**
   * SongLead findUniqueOrThrow
   */
  export type SongLeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    /**
     * Filter, which SongLead to fetch.
     */
    where: SongLeadWhereUniqueInput
  }

  /**
   * SongLead findFirst
   */
  export type SongLeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    /**
     * Filter, which SongLead to fetch.
     */
    where?: SongLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongLeads to fetch.
     */
    orderBy?: SongLeadOrderByWithRelationInput | SongLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongLeads.
     */
    cursor?: SongLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongLeads.
     */
    distinct?: SongLeadScalarFieldEnum | SongLeadScalarFieldEnum[]
  }

  /**
   * SongLead findFirstOrThrow
   */
  export type SongLeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    /**
     * Filter, which SongLead to fetch.
     */
    where?: SongLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongLeads to fetch.
     */
    orderBy?: SongLeadOrderByWithRelationInput | SongLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongLeads.
     */
    cursor?: SongLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongLeads.
     */
    distinct?: SongLeadScalarFieldEnum | SongLeadScalarFieldEnum[]
  }

  /**
   * SongLead findMany
   */
  export type SongLeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    /**
     * Filter, which SongLeads to fetch.
     */
    where?: SongLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongLeads to fetch.
     */
    orderBy?: SongLeadOrderByWithRelationInput | SongLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongLeads.
     */
    cursor?: SongLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongLeads.
     */
    skip?: number
    distinct?: SongLeadScalarFieldEnum | SongLeadScalarFieldEnum[]
  }

  /**
   * SongLead create
   */
  export type SongLeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    /**
     * The data needed to create a SongLead.
     */
    data: XOR<SongLeadCreateInput, SongLeadUncheckedCreateInput>
  }

  /**
   * SongLead createMany
   */
  export type SongLeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongLeads.
     */
    data: SongLeadCreateManyInput | SongLeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SongLead createManyAndReturn
   */
  export type SongLeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SongLeads.
     */
    data: SongLeadCreateManyInput | SongLeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongLead update
   */
  export type SongLeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    /**
     * The data needed to update a SongLead.
     */
    data: XOR<SongLeadUpdateInput, SongLeadUncheckedUpdateInput>
    /**
     * Choose, which SongLead to update.
     */
    where: SongLeadWhereUniqueInput
  }

  /**
   * SongLead updateMany
   */
  export type SongLeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongLeads.
     */
    data: XOR<SongLeadUpdateManyMutationInput, SongLeadUncheckedUpdateManyInput>
    /**
     * Filter which SongLeads to update
     */
    where?: SongLeadWhereInput
  }

  /**
   * SongLead upsert
   */
  export type SongLeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    /**
     * The filter to search for the SongLead to update in case it exists.
     */
    where: SongLeadWhereUniqueInput
    /**
     * In case the SongLead found by the `where` argument doesn't exist, create a new SongLead with this data.
     */
    create: XOR<SongLeadCreateInput, SongLeadUncheckedCreateInput>
    /**
     * In case the SongLead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongLeadUpdateInput, SongLeadUncheckedUpdateInput>
  }

  /**
   * SongLead delete
   */
  export type SongLeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    /**
     * Filter which SongLead to delete.
     */
    where: SongLeadWhereUniqueInput
  }

  /**
   * SongLead deleteMany
   */
  export type SongLeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongLeads to delete
     */
    where?: SongLeadWhereInput
  }

  /**
   * SongLead.Schedule
   */
  export type SongLead$ScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * SongLead.Location
   */
  export type SongLead$LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * SongLead.LocationSongLead
   */
  export type SongLead$LocationSongLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    where?: LocationSongLeadWhereInput
    orderBy?: LocationSongLeadOrderByWithRelationInput | LocationSongLeadOrderByWithRelationInput[]
    cursor?: LocationSongLeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationSongLeadScalarFieldEnum | LocationSongLeadScalarFieldEnum[]
  }

  /**
   * SongLead without action
   */
  export type SongLeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    lat: Decimal | null
    long: Decimal | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    lat: Decimal | null
    long: Decimal | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    address: string | null
    lat: Decimal | null
    long: Decimal | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    address: string | null
    lat: Decimal | null
    long: Decimal | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    address: number
    lat: number
    long: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    lat?: true
    long?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    lat?: true
    long?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    address?: true
    lat?: true
    long?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    address?: true
    lat?: true
    long?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    address?: true
    lat?: true
    long?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    address: string
    lat: Decimal
    long: Decimal
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    lat?: boolean
    long?: boolean
    locationSongLead?: boolean | Location$locationSongLeadArgs<ExtArgs>
    SongLead?: boolean | Location$SongLeadArgs<ExtArgs>
    Schedule?: boolean | Location$ScheduleArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    lat?: boolean
    long?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    address?: boolean
    lat?: boolean
    long?: boolean
  }

  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationSongLead?: boolean | Location$locationSongLeadArgs<ExtArgs>
    SongLead?: boolean | Location$SongLeadArgs<ExtArgs>
    Schedule?: boolean | Location$ScheduleArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      locationSongLead: Prisma.$LocationSongLeadPayload<ExtArgs>[]
      SongLead: Prisma.$SongLeadPayload<ExtArgs>[]
      Schedule: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      lat: Prisma.Decimal
      long: Prisma.Decimal
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends LocationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationCreateArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LocationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends LocationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends LocationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    locationSongLead<T extends Location$locationSongLeadArgs<ExtArgs> = {}>(args?: Subset<T, Location$locationSongLeadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'findMany'> | Null>;

    SongLead<T extends Location$SongLeadArgs<ExtArgs> = {}>(args?: Subset<T, Location$SongLeadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'findMany'> | Null>;

    Schedule<T extends Location$ScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Location$ScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly address: FieldRef<"Location", 'String'>
    readonly lat: FieldRef<"Location", 'Decimal'>
    readonly long: FieldRef<"Location", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }

  /**
   * Location.locationSongLead
   */
  export type Location$locationSongLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    where?: LocationSongLeadWhereInput
    orderBy?: LocationSongLeadOrderByWithRelationInput | LocationSongLeadOrderByWithRelationInput[]
    cursor?: LocationSongLeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationSongLeadScalarFieldEnum | LocationSongLeadScalarFieldEnum[]
  }

  /**
   * Location.SongLead
   */
  export type Location$SongLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongLead
     */
    select?: SongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongLeadInclude<ExtArgs> | null
    where?: SongLeadWhereInput
    orderBy?: SongLeadOrderByWithRelationInput | SongLeadOrderByWithRelationInput[]
    cursor?: SongLeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongLeadScalarFieldEnum | SongLeadScalarFieldEnum[]
  }

  /**
   * Location.Schedule
   */
  export type Location$ScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model LocationSongLead
   */

  export type AggregateLocationSongLead = {
    _count: LocationSongLeadCountAggregateOutputType | null
    _avg: LocationSongLeadAvgAggregateOutputType | null
    _sum: LocationSongLeadSumAggregateOutputType | null
    _min: LocationSongLeadMinAggregateOutputType | null
    _max: LocationSongLeadMaxAggregateOutputType | null
  }

  export type LocationSongLeadAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    songLeadId: number | null
  }

  export type LocationSongLeadSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    songLeadId: number | null
  }

  export type LocationSongLeadMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    songLeadId: number | null
  }

  export type LocationSongLeadMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    songLeadId: number | null
  }

  export type LocationSongLeadCountAggregateOutputType = {
    id: number
    locationId: number
    songLeadId: number
    _all: number
  }


  export type LocationSongLeadAvgAggregateInputType = {
    id?: true
    locationId?: true
    songLeadId?: true
  }

  export type LocationSongLeadSumAggregateInputType = {
    id?: true
    locationId?: true
    songLeadId?: true
  }

  export type LocationSongLeadMinAggregateInputType = {
    id?: true
    locationId?: true
    songLeadId?: true
  }

  export type LocationSongLeadMaxAggregateInputType = {
    id?: true
    locationId?: true
    songLeadId?: true
  }

  export type LocationSongLeadCountAggregateInputType = {
    id?: true
    locationId?: true
    songLeadId?: true
    _all?: true
  }

  export type LocationSongLeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationSongLead to aggregate.
     */
    where?: LocationSongLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationSongLeads to fetch.
     */
    orderBy?: LocationSongLeadOrderByWithRelationInput | LocationSongLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationSongLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationSongLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationSongLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationSongLeads
    **/
    _count?: true | LocationSongLeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationSongLeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSongLeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationSongLeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationSongLeadMaxAggregateInputType
  }

  export type GetLocationSongLeadAggregateType<T extends LocationSongLeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationSongLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationSongLead[P]>
      : GetScalarType<T[P], AggregateLocationSongLead[P]>
  }




  export type LocationSongLeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationSongLeadWhereInput
    orderBy?: LocationSongLeadOrderByWithAggregationInput | LocationSongLeadOrderByWithAggregationInput[]
    by: LocationSongLeadScalarFieldEnum[] | LocationSongLeadScalarFieldEnum
    having?: LocationSongLeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationSongLeadCountAggregateInputType | true
    _avg?: LocationSongLeadAvgAggregateInputType
    _sum?: LocationSongLeadSumAggregateInputType
    _min?: LocationSongLeadMinAggregateInputType
    _max?: LocationSongLeadMaxAggregateInputType
  }

  export type LocationSongLeadGroupByOutputType = {
    id: number
    locationId: number | null
    songLeadId: number
    _count: LocationSongLeadCountAggregateOutputType | null
    _avg: LocationSongLeadAvgAggregateOutputType | null
    _sum: LocationSongLeadSumAggregateOutputType | null
    _min: LocationSongLeadMinAggregateOutputType | null
    _max: LocationSongLeadMaxAggregateOutputType | null
  }

  type GetLocationSongLeadGroupByPayload<T extends LocationSongLeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationSongLeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationSongLeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationSongLeadGroupByOutputType[P]>
            : GetScalarType<T[P], LocationSongLeadGroupByOutputType[P]>
        }
      >
    >


  export type LocationSongLeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    songLeadId?: boolean
    songLead?: boolean | SongLeadDefaultArgs<ExtArgs>
    Location?: boolean | LocationSongLead$LocationArgs<ExtArgs>
  }, ExtArgs["result"]["locationSongLead"]>

  export type LocationSongLeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    songLeadId?: boolean
    songLead?: boolean | SongLeadDefaultArgs<ExtArgs>
    Location?: boolean | LocationSongLead$LocationArgs<ExtArgs>
  }, ExtArgs["result"]["locationSongLead"]>

  export type LocationSongLeadSelectScalar = {
    id?: boolean
    locationId?: boolean
    songLeadId?: boolean
  }

  export type LocationSongLeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songLead?: boolean | SongLeadDefaultArgs<ExtArgs>
    Location?: boolean | LocationSongLead$LocationArgs<ExtArgs>
  }
  export type LocationSongLeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songLead?: boolean | SongLeadDefaultArgs<ExtArgs>
    Location?: boolean | LocationSongLead$LocationArgs<ExtArgs>
  }

  export type $LocationSongLeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationSongLead"
    objects: {
      songLead: Prisma.$SongLeadPayload<ExtArgs>
      Location: Prisma.$LocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number | null
      songLeadId: number
    }, ExtArgs["result"]["locationSongLead"]>
    composites: {}
  }

  type LocationSongLeadGetPayload<S extends boolean | null | undefined | LocationSongLeadDefaultArgs> = $Result.GetResult<Prisma.$LocationSongLeadPayload, S>

  type LocationSongLeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LocationSongLeadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocationSongLeadCountAggregateInputType | true
    }

  export interface LocationSongLeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationSongLead'], meta: { name: 'LocationSongLead' } }
    /**
     * Find zero or one LocationSongLead that matches the filter.
     * @param {LocationSongLeadFindUniqueArgs} args - Arguments to find a LocationSongLead
     * @example
     * // Get one LocationSongLead
     * const locationSongLead = await prisma.locationSongLead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationSongLeadFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LocationSongLeadFindUniqueArgs<ExtArgs>>
    ): Prisma__LocationSongLeadClient<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LocationSongLead that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LocationSongLeadFindUniqueOrThrowArgs} args - Arguments to find a LocationSongLead
     * @example
     * // Get one LocationSongLead
     * const locationSongLead = await prisma.locationSongLead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationSongLeadFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationSongLeadFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LocationSongLeadClient<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LocationSongLead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationSongLeadFindFirstArgs} args - Arguments to find a LocationSongLead
     * @example
     * // Get one LocationSongLead
     * const locationSongLead = await prisma.locationSongLead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationSongLeadFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationSongLeadFindFirstArgs<ExtArgs>>
    ): Prisma__LocationSongLeadClient<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LocationSongLead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationSongLeadFindFirstOrThrowArgs} args - Arguments to find a LocationSongLead
     * @example
     * // Get one LocationSongLead
     * const locationSongLead = await prisma.locationSongLead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationSongLeadFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationSongLeadFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LocationSongLeadClient<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LocationSongLeads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationSongLeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationSongLeads
     * const locationSongLeads = await prisma.locationSongLead.findMany()
     * 
     * // Get first 10 LocationSongLeads
     * const locationSongLeads = await prisma.locationSongLead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationSongLeadWithIdOnly = await prisma.locationSongLead.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationSongLeadFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationSongLeadFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LocationSongLead.
     * @param {LocationSongLeadCreateArgs} args - Arguments to create a LocationSongLead.
     * @example
     * // Create one LocationSongLead
     * const LocationSongLead = await prisma.locationSongLead.create({
     *   data: {
     *     // ... data to create a LocationSongLead
     *   }
     * })
     * 
    **/
    create<T extends LocationSongLeadCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationSongLeadCreateArgs<ExtArgs>>
    ): Prisma__LocationSongLeadClient<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LocationSongLeads.
     * @param {LocationSongLeadCreateManyArgs} args - Arguments to create many LocationSongLeads.
     * @example
     * // Create many LocationSongLeads
     * const locationSongLead = await prisma.locationSongLead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LocationSongLeadCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationSongLeadCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocationSongLeads and returns the data saved in the database.
     * @param {LocationSongLeadCreateManyAndReturnArgs} args - Arguments to create many LocationSongLeads.
     * @example
     * // Create many LocationSongLeads
     * const locationSongLead = await prisma.locationSongLead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocationSongLeads and only return the `id`
     * const locationSongLeadWithIdOnly = await prisma.locationSongLead.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends LocationSongLeadCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationSongLeadCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a LocationSongLead.
     * @param {LocationSongLeadDeleteArgs} args - Arguments to delete one LocationSongLead.
     * @example
     * // Delete one LocationSongLead
     * const LocationSongLead = await prisma.locationSongLead.delete({
     *   where: {
     *     // ... filter to delete one LocationSongLead
     *   }
     * })
     * 
    **/
    delete<T extends LocationSongLeadDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LocationSongLeadDeleteArgs<ExtArgs>>
    ): Prisma__LocationSongLeadClient<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LocationSongLead.
     * @param {LocationSongLeadUpdateArgs} args - Arguments to update one LocationSongLead.
     * @example
     * // Update one LocationSongLead
     * const locationSongLead = await prisma.locationSongLead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationSongLeadUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationSongLeadUpdateArgs<ExtArgs>>
    ): Prisma__LocationSongLeadClient<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LocationSongLeads.
     * @param {LocationSongLeadDeleteManyArgs} args - Arguments to filter LocationSongLeads to delete.
     * @example
     * // Delete a few LocationSongLeads
     * const { count } = await prisma.locationSongLead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationSongLeadDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationSongLeadDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationSongLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationSongLeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationSongLeads
     * const locationSongLead = await prisma.locationSongLead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationSongLeadUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LocationSongLeadUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LocationSongLead.
     * @param {LocationSongLeadUpsertArgs} args - Arguments to update or create a LocationSongLead.
     * @example
     * // Update or create a LocationSongLead
     * const locationSongLead = await prisma.locationSongLead.upsert({
     *   create: {
     *     // ... data to create a LocationSongLead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationSongLead we want to update
     *   }
     * })
    **/
    upsert<T extends LocationSongLeadUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LocationSongLeadUpsertArgs<ExtArgs>>
    ): Prisma__LocationSongLeadClient<$Result.GetResult<Prisma.$LocationSongLeadPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LocationSongLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationSongLeadCountArgs} args - Arguments to filter LocationSongLeads to count.
     * @example
     * // Count the number of LocationSongLeads
     * const count = await prisma.locationSongLead.count({
     *   where: {
     *     // ... the filter for the LocationSongLeads we want to count
     *   }
     * })
    **/
    count<T extends LocationSongLeadCountArgs>(
      args?: Subset<T, LocationSongLeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationSongLeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationSongLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationSongLeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationSongLeadAggregateArgs>(args: Subset<T, LocationSongLeadAggregateArgs>): Prisma.PrismaPromise<GetLocationSongLeadAggregateType<T>>

    /**
     * Group by LocationSongLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationSongLeadGroupByArgs} args - Group by arguments.
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
      T extends LocationSongLeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationSongLeadGroupByArgs['orderBy'] }
        : { orderBy?: LocationSongLeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationSongLeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationSongLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationSongLead model
   */
  readonly fields: LocationSongLeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationSongLead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationSongLeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    songLead<T extends SongLeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongLeadDefaultArgs<ExtArgs>>): Prisma__SongLeadClient<$Result.GetResult<Prisma.$SongLeadPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Location<T extends LocationSongLead$LocationArgs<ExtArgs> = {}>(args?: Subset<T, LocationSongLead$LocationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the LocationSongLead model
   */ 
  interface LocationSongLeadFieldRefs {
    readonly id: FieldRef<"LocationSongLead", 'Int'>
    readonly locationId: FieldRef<"LocationSongLead", 'Int'>
    readonly songLeadId: FieldRef<"LocationSongLead", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LocationSongLead findUnique
   */
  export type LocationSongLeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    /**
     * Filter, which LocationSongLead to fetch.
     */
    where: LocationSongLeadWhereUniqueInput
  }

  /**
   * LocationSongLead findUniqueOrThrow
   */
  export type LocationSongLeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    /**
     * Filter, which LocationSongLead to fetch.
     */
    where: LocationSongLeadWhereUniqueInput
  }

  /**
   * LocationSongLead findFirst
   */
  export type LocationSongLeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    /**
     * Filter, which LocationSongLead to fetch.
     */
    where?: LocationSongLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationSongLeads to fetch.
     */
    orderBy?: LocationSongLeadOrderByWithRelationInput | LocationSongLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationSongLeads.
     */
    cursor?: LocationSongLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationSongLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationSongLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationSongLeads.
     */
    distinct?: LocationSongLeadScalarFieldEnum | LocationSongLeadScalarFieldEnum[]
  }

  /**
   * LocationSongLead findFirstOrThrow
   */
  export type LocationSongLeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    /**
     * Filter, which LocationSongLead to fetch.
     */
    where?: LocationSongLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationSongLeads to fetch.
     */
    orderBy?: LocationSongLeadOrderByWithRelationInput | LocationSongLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationSongLeads.
     */
    cursor?: LocationSongLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationSongLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationSongLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationSongLeads.
     */
    distinct?: LocationSongLeadScalarFieldEnum | LocationSongLeadScalarFieldEnum[]
  }

  /**
   * LocationSongLead findMany
   */
  export type LocationSongLeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    /**
     * Filter, which LocationSongLeads to fetch.
     */
    where?: LocationSongLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationSongLeads to fetch.
     */
    orderBy?: LocationSongLeadOrderByWithRelationInput | LocationSongLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationSongLeads.
     */
    cursor?: LocationSongLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationSongLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationSongLeads.
     */
    skip?: number
    distinct?: LocationSongLeadScalarFieldEnum | LocationSongLeadScalarFieldEnum[]
  }

  /**
   * LocationSongLead create
   */
  export type LocationSongLeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    /**
     * The data needed to create a LocationSongLead.
     */
    data: XOR<LocationSongLeadCreateInput, LocationSongLeadUncheckedCreateInput>
  }

  /**
   * LocationSongLead createMany
   */
  export type LocationSongLeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationSongLeads.
     */
    data: LocationSongLeadCreateManyInput | LocationSongLeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocationSongLead createManyAndReturn
   */
  export type LocationSongLeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LocationSongLeads.
     */
    data: LocationSongLeadCreateManyInput | LocationSongLeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationSongLead update
   */
  export type LocationSongLeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    /**
     * The data needed to update a LocationSongLead.
     */
    data: XOR<LocationSongLeadUpdateInput, LocationSongLeadUncheckedUpdateInput>
    /**
     * Choose, which LocationSongLead to update.
     */
    where: LocationSongLeadWhereUniqueInput
  }

  /**
   * LocationSongLead updateMany
   */
  export type LocationSongLeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationSongLeads.
     */
    data: XOR<LocationSongLeadUpdateManyMutationInput, LocationSongLeadUncheckedUpdateManyInput>
    /**
     * Filter which LocationSongLeads to update
     */
    where?: LocationSongLeadWhereInput
  }

  /**
   * LocationSongLead upsert
   */
  export type LocationSongLeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    /**
     * The filter to search for the LocationSongLead to update in case it exists.
     */
    where: LocationSongLeadWhereUniqueInput
    /**
     * In case the LocationSongLead found by the `where` argument doesn't exist, create a new LocationSongLead with this data.
     */
    create: XOR<LocationSongLeadCreateInput, LocationSongLeadUncheckedCreateInput>
    /**
     * In case the LocationSongLead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationSongLeadUpdateInput, LocationSongLeadUncheckedUpdateInput>
  }

  /**
   * LocationSongLead delete
   */
  export type LocationSongLeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
    /**
     * Filter which LocationSongLead to delete.
     */
    where: LocationSongLeadWhereUniqueInput
  }

  /**
   * LocationSongLead deleteMany
   */
  export type LocationSongLeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationSongLeads to delete
     */
    where?: LocationSongLeadWhereInput
  }

  /**
   * LocationSongLead.Location
   */
  export type LocationSongLead$LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * LocationSongLead without action
   */
  export type LocationSongLeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationSongLead
     */
    select?: LocationSongLeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationSongLeadInclude<ExtArgs> | null
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
    date: 'date',
    songLeadId: 'songLeadId',
    locationId: 'locationId'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const ScheduleSongsScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    scheduleId: 'scheduleId',
    preferredKey: 'preferredKey',
    order: 'order'
  };

  export type ScheduleSongsScalarFieldEnum = (typeof ScheduleSongsScalarFieldEnum)[keyof typeof ScheduleSongsScalarFieldEnum]


  export const SongLeadScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    locationId: 'locationId'
  };

  export type SongLeadScalarFieldEnum = (typeof SongLeadScalarFieldEnum)[keyof typeof SongLeadScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    address: 'address',
    lat: 'lat',
    long: 'long'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const LocationSongLeadScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    songLeadId: 'songLeadId'
  };

  export type LocationSongLeadScalarFieldEnum = (typeof LocationSongLeadScalarFieldEnum)[keyof typeof LocationSongLeadScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
    songLeadId?: IntNullableFilter<"Schedule"> | number | null
    locationId?: IntNullableFilter<"Schedule"> | number | null
    scheduleSongs?: ScheduleSongsListRelationFilter
    Song?: SongListRelationFilter
    songLead?: XOR<SongLeadNullableRelationFilter, SongLeadWhereInput> | null
    location?: XOR<LocationNullableRelationFilter, LocationWhereInput> | null
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    songLeadId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    scheduleSongs?: ScheduleSongsOrderByRelationAggregateInput
    Song?: SongOrderByRelationAggregateInput
    songLead?: SongLeadOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    date?: DateTimeFilter<"Schedule"> | Date | string
    songLeadId?: IntNullableFilter<"Schedule"> | number | null
    locationId?: IntNullableFilter<"Schedule"> | number | null
    scheduleSongs?: ScheduleSongsListRelationFilter
    Song?: SongListRelationFilter
    songLead?: XOR<SongLeadNullableRelationFilter, SongLeadWhereInput> | null
    location?: XOR<LocationNullableRelationFilter, LocationWhereInput> | null
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    songLeadId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
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
    songLeadId?: IntNullableWithAggregatesFilter<"Schedule"> | number | null
    locationId?: IntNullableWithAggregatesFilter<"Schedule"> | number | null
  }

  export type ScheduleSongsWhereInput = {
    AND?: ScheduleSongsWhereInput | ScheduleSongsWhereInput[]
    OR?: ScheduleSongsWhereInput[]
    NOT?: ScheduleSongsWhereInput | ScheduleSongsWhereInput[]
    id?: IntFilter<"ScheduleSongs"> | number
    songId?: IntFilter<"ScheduleSongs"> | number
    scheduleId?: IntNullableFilter<"ScheduleSongs"> | number | null
    preferredKey?: StringNullableFilter<"ScheduleSongs"> | string | null
    order?: IntFilter<"ScheduleSongs"> | number
    song?: XOR<SongNullableRelationFilter, SongWhereInput> | null
    Schedule?: XOR<ScheduleNullableRelationFilter, ScheduleWhereInput> | null
  }

  export type ScheduleSongsOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrderInput | SortOrder
    preferredKey?: SortOrderInput | SortOrder
    order?: SortOrder
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
    preferredKey?: StringNullableFilter<"ScheduleSongs"> | string | null
    order?: IntFilter<"ScheduleSongs"> | number
    song?: XOR<SongNullableRelationFilter, SongWhereInput> | null
    Schedule?: XOR<ScheduleNullableRelationFilter, ScheduleWhereInput> | null
  }, "id">

  export type ScheduleSongsOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrderInput | SortOrder
    preferredKey?: SortOrderInput | SortOrder
    order?: SortOrder
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
    preferredKey?: StringNullableWithAggregatesFilter<"ScheduleSongs"> | string | null
    order?: IntWithAggregatesFilter<"ScheduleSongs"> | number
  }

  export type SongLeadWhereInput = {
    AND?: SongLeadWhereInput | SongLeadWhereInput[]
    OR?: SongLeadWhereInput[]
    NOT?: SongLeadWhereInput | SongLeadWhereInput[]
    id?: IntFilter<"SongLead"> | number
    firstName?: StringFilter<"SongLead"> | string
    lastName?: StringFilter<"SongLead"> | string
    locationId?: IntNullableFilter<"SongLead"> | number | null
    Schedule?: ScheduleListRelationFilter
    Location?: XOR<LocationNullableRelationFilter, LocationWhereInput> | null
    LocationSongLead?: LocationSongLeadListRelationFilter
  }

  export type SongLeadOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    locationId?: SortOrderInput | SortOrder
    Schedule?: ScheduleOrderByRelationAggregateInput
    Location?: LocationOrderByWithRelationInput
    LocationSongLead?: LocationSongLeadOrderByRelationAggregateInput
  }

  export type SongLeadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SongLeadWhereInput | SongLeadWhereInput[]
    OR?: SongLeadWhereInput[]
    NOT?: SongLeadWhereInput | SongLeadWhereInput[]
    firstName?: StringFilter<"SongLead"> | string
    lastName?: StringFilter<"SongLead"> | string
    locationId?: IntNullableFilter<"SongLead"> | number | null
    Schedule?: ScheduleListRelationFilter
    Location?: XOR<LocationNullableRelationFilter, LocationWhereInput> | null
    LocationSongLead?: LocationSongLeadListRelationFilter
  }, "id">

  export type SongLeadOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    locationId?: SortOrderInput | SortOrder
    _count?: SongLeadCountOrderByAggregateInput
    _avg?: SongLeadAvgOrderByAggregateInput
    _max?: SongLeadMaxOrderByAggregateInput
    _min?: SongLeadMinOrderByAggregateInput
    _sum?: SongLeadSumOrderByAggregateInput
  }

  export type SongLeadScalarWhereWithAggregatesInput = {
    AND?: SongLeadScalarWhereWithAggregatesInput | SongLeadScalarWhereWithAggregatesInput[]
    OR?: SongLeadScalarWhereWithAggregatesInput[]
    NOT?: SongLeadScalarWhereWithAggregatesInput | SongLeadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SongLead"> | number
    firstName?: StringWithAggregatesFilter<"SongLead"> | string
    lastName?: StringWithAggregatesFilter<"SongLead"> | string
    locationId?: IntNullableWithAggregatesFilter<"SongLead"> | number | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    address?: StringFilter<"Location"> | string
    lat?: DecimalFilter<"Location"> | Decimal | DecimalJsLike | number | string
    long?: DecimalFilter<"Location"> | Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadListRelationFilter
    SongLead?: SongLeadListRelationFilter
    Schedule?: ScheduleListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    locationSongLead?: LocationSongLeadOrderByRelationAggregateInput
    SongLead?: SongLeadOrderByRelationAggregateInput
    Schedule?: ScheduleOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringFilter<"Location"> | string
    lat?: DecimalFilter<"Location"> | Decimal | DecimalJsLike | number | string
    long?: DecimalFilter<"Location"> | Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadListRelationFilter
    SongLead?: SongLeadListRelationFilter
    Schedule?: ScheduleListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    address?: StringWithAggregatesFilter<"Location"> | string
    lat?: DecimalWithAggregatesFilter<"Location"> | Decimal | DecimalJsLike | number | string
    long?: DecimalWithAggregatesFilter<"Location"> | Decimal | DecimalJsLike | number | string
  }

  export type LocationSongLeadWhereInput = {
    AND?: LocationSongLeadWhereInput | LocationSongLeadWhereInput[]
    OR?: LocationSongLeadWhereInput[]
    NOT?: LocationSongLeadWhereInput | LocationSongLeadWhereInput[]
    id?: IntFilter<"LocationSongLead"> | number
    locationId?: IntNullableFilter<"LocationSongLead"> | number | null
    songLeadId?: IntFilter<"LocationSongLead"> | number
    songLead?: XOR<SongLeadRelationFilter, SongLeadWhereInput>
    Location?: XOR<LocationNullableRelationFilter, LocationWhereInput> | null
  }

  export type LocationSongLeadOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrderInput | SortOrder
    songLeadId?: SortOrder
    songLead?: SongLeadOrderByWithRelationInput
    Location?: LocationOrderByWithRelationInput
  }

  export type LocationSongLeadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationSongLeadWhereInput | LocationSongLeadWhereInput[]
    OR?: LocationSongLeadWhereInput[]
    NOT?: LocationSongLeadWhereInput | LocationSongLeadWhereInput[]
    locationId?: IntNullableFilter<"LocationSongLead"> | number | null
    songLeadId?: IntFilter<"LocationSongLead"> | number
    songLead?: XOR<SongLeadRelationFilter, SongLeadWhereInput>
    Location?: XOR<LocationNullableRelationFilter, LocationWhereInput> | null
  }, "id">

  export type LocationSongLeadOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrderInput | SortOrder
    songLeadId?: SortOrder
    _count?: LocationSongLeadCountOrderByAggregateInput
    _avg?: LocationSongLeadAvgOrderByAggregateInput
    _max?: LocationSongLeadMaxOrderByAggregateInput
    _min?: LocationSongLeadMinOrderByAggregateInput
    _sum?: LocationSongLeadSumOrderByAggregateInput
  }

  export type LocationSongLeadScalarWhereWithAggregatesInput = {
    AND?: LocationSongLeadScalarWhereWithAggregatesInput | LocationSongLeadScalarWhereWithAggregatesInput[]
    OR?: LocationSongLeadScalarWhereWithAggregatesInput[]
    NOT?: LocationSongLeadScalarWhereWithAggregatesInput | LocationSongLeadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LocationSongLead"> | number
    locationId?: IntNullableWithAggregatesFilter<"LocationSongLead"> | number | null
    songLeadId?: IntWithAggregatesFilter<"LocationSongLead"> | number
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
    songLead?: SongLeadCreateNestedOneWithoutScheduleInput
    location?: LocationCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    date: Date | string
    songLeadId?: number | null
    locationId?: number | null
    scheduleSongs?: ScheduleSongsUncheckedCreateNestedManyWithoutScheduleInput
    Song?: SongUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleSongs?: ScheduleSongsUpdateManyWithoutScheduleNestedInput
    Song?: SongUpdateManyWithoutScheduleNestedInput
    songLead?: SongLeadUpdateOneWithoutScheduleNestedInput
    location?: LocationUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    songLeadId?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    scheduleSongs?: ScheduleSongsUncheckedUpdateManyWithoutScheduleNestedInput
    Song?: SongUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: number
    date: Date | string
    songLeadId?: number | null
    locationId?: number | null
  }

  export type ScheduleUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    songLeadId?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduleSongsCreateInput = {
    preferredKey?: string | null
    order?: number
    song?: SongCreateNestedOneWithoutScheduleSongsInput
    Schedule?: ScheduleCreateNestedOneWithoutScheduleSongsInput
  }

  export type ScheduleSongsUncheckedCreateInput = {
    id?: number
    songId: number
    scheduleId?: number | null
    preferredKey?: string | null
    order?: number
  }

  export type ScheduleSongsUpdateInput = {
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    song?: SongUpdateOneWithoutScheduleSongsNestedInput
    Schedule?: ScheduleUpdateOneWithoutScheduleSongsNestedInput
  }

  export type ScheduleSongsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleSongsCreateManyInput = {
    id?: number
    songId: number
    scheduleId?: number | null
    preferredKey?: string | null
    order?: number
  }

  export type ScheduleSongsUpdateManyMutationInput = {
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleSongsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SongLeadCreateInput = {
    firstName: string
    lastName: string
    Schedule?: ScheduleCreateNestedManyWithoutSongLeadInput
    Location?: LocationCreateNestedOneWithoutSongLeadInput
    LocationSongLead?: LocationSongLeadCreateNestedManyWithoutSongLeadInput
  }

  export type SongLeadUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    locationId?: number | null
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutSongLeadInput
    LocationSongLead?: LocationSongLeadUncheckedCreateNestedManyWithoutSongLeadInput
  }

  export type SongLeadUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    Schedule?: ScheduleUpdateManyWithoutSongLeadNestedInput
    Location?: LocationUpdateOneWithoutSongLeadNestedInput
    LocationSongLead?: LocationSongLeadUpdateManyWithoutSongLeadNestedInput
  }

  export type SongLeadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    Schedule?: ScheduleUncheckedUpdateManyWithoutSongLeadNestedInput
    LocationSongLead?: LocationSongLeadUncheckedUpdateManyWithoutSongLeadNestedInput
  }

  export type SongLeadCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    locationId?: number | null
  }

  export type SongLeadUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type SongLeadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationCreateInput = {
    address: string
    lat?: Decimal | DecimalJsLike | number | string
    long?: Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadCreateNestedManyWithoutLocationInput
    SongLead?: SongLeadCreateNestedManyWithoutLocationInput
    Schedule?: ScheduleCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    address: string
    lat?: Decimal | DecimalJsLike | number | string
    long?: Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadUncheckedCreateNestedManyWithoutLocationInput
    SongLead?: SongLeadUncheckedCreateNestedManyWithoutLocationInput
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadUpdateManyWithoutLocationNestedInput
    SongLead?: SongLeadUpdateManyWithoutLocationNestedInput
    Schedule?: ScheduleUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadUncheckedUpdateManyWithoutLocationNestedInput
    SongLead?: SongLeadUncheckedUpdateManyWithoutLocationNestedInput
    Schedule?: ScheduleUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    address: string
    lat?: Decimal | DecimalJsLike | number | string
    long?: Decimal | DecimalJsLike | number | string
  }

  export type LocationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LocationSongLeadCreateInput = {
    songLead: SongLeadCreateNestedOneWithoutLocationSongLeadInput
    Location?: LocationCreateNestedOneWithoutLocationSongLeadInput
  }

  export type LocationSongLeadUncheckedCreateInput = {
    id?: number
    locationId?: number | null
    songLeadId: number
  }

  export type LocationSongLeadUpdateInput = {
    songLead?: SongLeadUpdateOneRequiredWithoutLocationSongLeadNestedInput
    Location?: LocationUpdateOneWithoutLocationSongLeadNestedInput
  }

  export type LocationSongLeadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    songLeadId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationSongLeadCreateManyInput = {
    id?: number
    locationId?: number | null
    songLeadId: number
  }

  export type LocationSongLeadUpdateManyMutationInput = {

  }

  export type LocationSongLeadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    songLeadId?: IntFieldUpdateOperationsInput | number
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

  export type SongLeadNullableRelationFilter = {
    is?: SongLeadWhereInput | null
    isNot?: SongLeadWhereInput | null
  }

  export type LocationNullableRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    songLeadId?: SortOrder
    locationId?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    songLeadId?: SortOrder
    locationId?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    songLeadId?: SortOrder
    locationId?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    songLeadId?: SortOrder
    locationId?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    songLeadId?: SortOrder
    locationId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SongNullableRelationFilter = {
    is?: SongWhereInput | null
    isNot?: SongWhereInput | null
  }

  export type ScheduleSongsCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
    preferredKey?: SortOrder
    order?: SortOrder
  }

  export type ScheduleSongsAvgOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
    order?: SortOrder
  }

  export type ScheduleSongsMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
    preferredKey?: SortOrder
    order?: SortOrder
  }

  export type ScheduleSongsMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
    preferredKey?: SortOrder
    order?: SortOrder
  }

  export type ScheduleSongsSumOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    scheduleId?: SortOrder
    order?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type LocationSongLeadListRelationFilter = {
    every?: LocationSongLeadWhereInput
    some?: LocationSongLeadWhereInput
    none?: LocationSongLeadWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationSongLeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongLeadCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    locationId?: SortOrder
  }

  export type SongLeadAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type SongLeadMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    locationId?: SortOrder
  }

  export type SongLeadMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    locationId?: SortOrder
  }

  export type SongLeadSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SongLeadListRelationFilter = {
    every?: SongLeadWhereInput
    some?: SongLeadWhereInput
    none?: SongLeadWhereInput
  }

  export type SongLeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type SongLeadRelationFilter = {
    is?: SongLeadWhereInput
    isNot?: SongLeadWhereInput
  }

  export type LocationSongLeadCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    songLeadId?: SortOrder
  }

  export type LocationSongLeadAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    songLeadId?: SortOrder
  }

  export type LocationSongLeadMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    songLeadId?: SortOrder
  }

  export type LocationSongLeadMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    songLeadId?: SortOrder
  }

  export type LocationSongLeadSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    songLeadId?: SortOrder
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

  export type SongLeadCreateNestedOneWithoutScheduleInput = {
    create?: XOR<SongLeadCreateWithoutScheduleInput, SongLeadUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: SongLeadCreateOrConnectWithoutScheduleInput
    connect?: SongLeadWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutScheduleInput = {
    create?: XOR<LocationCreateWithoutScheduleInput, LocationUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: LocationCreateOrConnectWithoutScheduleInput
    connect?: LocationWhereUniqueInput
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

  export type SongLeadUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<SongLeadCreateWithoutScheduleInput, SongLeadUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: SongLeadCreateOrConnectWithoutScheduleInput
    upsert?: SongLeadUpsertWithoutScheduleInput
    disconnect?: SongLeadWhereInput | boolean
    delete?: SongLeadWhereInput | boolean
    connect?: SongLeadWhereUniqueInput
    update?: XOR<XOR<SongLeadUpdateToOneWithWhereWithoutScheduleInput, SongLeadUpdateWithoutScheduleInput>, SongLeadUncheckedUpdateWithoutScheduleInput>
  }

  export type LocationUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<LocationCreateWithoutScheduleInput, LocationUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: LocationCreateOrConnectWithoutScheduleInput
    upsert?: LocationUpsertWithoutScheduleInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutScheduleInput, LocationUpdateWithoutScheduleInput>, LocationUncheckedUpdateWithoutScheduleInput>
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type ScheduleCreateNestedManyWithoutSongLeadInput = {
    create?: XOR<ScheduleCreateWithoutSongLeadInput, ScheduleUncheckedCreateWithoutSongLeadInput> | ScheduleCreateWithoutSongLeadInput[] | ScheduleUncheckedCreateWithoutSongLeadInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutSongLeadInput | ScheduleCreateOrConnectWithoutSongLeadInput[]
    createMany?: ScheduleCreateManySongLeadInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type LocationCreateNestedOneWithoutSongLeadInput = {
    create?: XOR<LocationCreateWithoutSongLeadInput, LocationUncheckedCreateWithoutSongLeadInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSongLeadInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationSongLeadCreateNestedManyWithoutSongLeadInput = {
    create?: XOR<LocationSongLeadCreateWithoutSongLeadInput, LocationSongLeadUncheckedCreateWithoutSongLeadInput> | LocationSongLeadCreateWithoutSongLeadInput[] | LocationSongLeadUncheckedCreateWithoutSongLeadInput[]
    connectOrCreate?: LocationSongLeadCreateOrConnectWithoutSongLeadInput | LocationSongLeadCreateOrConnectWithoutSongLeadInput[]
    createMany?: LocationSongLeadCreateManySongLeadInputEnvelope
    connect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutSongLeadInput = {
    create?: XOR<ScheduleCreateWithoutSongLeadInput, ScheduleUncheckedCreateWithoutSongLeadInput> | ScheduleCreateWithoutSongLeadInput[] | ScheduleUncheckedCreateWithoutSongLeadInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutSongLeadInput | ScheduleCreateOrConnectWithoutSongLeadInput[]
    createMany?: ScheduleCreateManySongLeadInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type LocationSongLeadUncheckedCreateNestedManyWithoutSongLeadInput = {
    create?: XOR<LocationSongLeadCreateWithoutSongLeadInput, LocationSongLeadUncheckedCreateWithoutSongLeadInput> | LocationSongLeadCreateWithoutSongLeadInput[] | LocationSongLeadUncheckedCreateWithoutSongLeadInput[]
    connectOrCreate?: LocationSongLeadCreateOrConnectWithoutSongLeadInput | LocationSongLeadCreateOrConnectWithoutSongLeadInput[]
    createMany?: LocationSongLeadCreateManySongLeadInputEnvelope
    connect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
  }

  export type ScheduleUpdateManyWithoutSongLeadNestedInput = {
    create?: XOR<ScheduleCreateWithoutSongLeadInput, ScheduleUncheckedCreateWithoutSongLeadInput> | ScheduleCreateWithoutSongLeadInput[] | ScheduleUncheckedCreateWithoutSongLeadInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutSongLeadInput | ScheduleCreateOrConnectWithoutSongLeadInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutSongLeadInput | ScheduleUpsertWithWhereUniqueWithoutSongLeadInput[]
    createMany?: ScheduleCreateManySongLeadInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutSongLeadInput | ScheduleUpdateWithWhereUniqueWithoutSongLeadInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutSongLeadInput | ScheduleUpdateManyWithWhereWithoutSongLeadInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type LocationUpdateOneWithoutSongLeadNestedInput = {
    create?: XOR<LocationCreateWithoutSongLeadInput, LocationUncheckedCreateWithoutSongLeadInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSongLeadInput
    upsert?: LocationUpsertWithoutSongLeadInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutSongLeadInput, LocationUpdateWithoutSongLeadInput>, LocationUncheckedUpdateWithoutSongLeadInput>
  }

  export type LocationSongLeadUpdateManyWithoutSongLeadNestedInput = {
    create?: XOR<LocationSongLeadCreateWithoutSongLeadInput, LocationSongLeadUncheckedCreateWithoutSongLeadInput> | LocationSongLeadCreateWithoutSongLeadInput[] | LocationSongLeadUncheckedCreateWithoutSongLeadInput[]
    connectOrCreate?: LocationSongLeadCreateOrConnectWithoutSongLeadInput | LocationSongLeadCreateOrConnectWithoutSongLeadInput[]
    upsert?: LocationSongLeadUpsertWithWhereUniqueWithoutSongLeadInput | LocationSongLeadUpsertWithWhereUniqueWithoutSongLeadInput[]
    createMany?: LocationSongLeadCreateManySongLeadInputEnvelope
    set?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    disconnect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    delete?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    connect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    update?: LocationSongLeadUpdateWithWhereUniqueWithoutSongLeadInput | LocationSongLeadUpdateWithWhereUniqueWithoutSongLeadInput[]
    updateMany?: LocationSongLeadUpdateManyWithWhereWithoutSongLeadInput | LocationSongLeadUpdateManyWithWhereWithoutSongLeadInput[]
    deleteMany?: LocationSongLeadScalarWhereInput | LocationSongLeadScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutSongLeadNestedInput = {
    create?: XOR<ScheduleCreateWithoutSongLeadInput, ScheduleUncheckedCreateWithoutSongLeadInput> | ScheduleCreateWithoutSongLeadInput[] | ScheduleUncheckedCreateWithoutSongLeadInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutSongLeadInput | ScheduleCreateOrConnectWithoutSongLeadInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutSongLeadInput | ScheduleUpsertWithWhereUniqueWithoutSongLeadInput[]
    createMany?: ScheduleCreateManySongLeadInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutSongLeadInput | ScheduleUpdateWithWhereUniqueWithoutSongLeadInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutSongLeadInput | ScheduleUpdateManyWithWhereWithoutSongLeadInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type LocationSongLeadUncheckedUpdateManyWithoutSongLeadNestedInput = {
    create?: XOR<LocationSongLeadCreateWithoutSongLeadInput, LocationSongLeadUncheckedCreateWithoutSongLeadInput> | LocationSongLeadCreateWithoutSongLeadInput[] | LocationSongLeadUncheckedCreateWithoutSongLeadInput[]
    connectOrCreate?: LocationSongLeadCreateOrConnectWithoutSongLeadInput | LocationSongLeadCreateOrConnectWithoutSongLeadInput[]
    upsert?: LocationSongLeadUpsertWithWhereUniqueWithoutSongLeadInput | LocationSongLeadUpsertWithWhereUniqueWithoutSongLeadInput[]
    createMany?: LocationSongLeadCreateManySongLeadInputEnvelope
    set?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    disconnect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    delete?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    connect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    update?: LocationSongLeadUpdateWithWhereUniqueWithoutSongLeadInput | LocationSongLeadUpdateWithWhereUniqueWithoutSongLeadInput[]
    updateMany?: LocationSongLeadUpdateManyWithWhereWithoutSongLeadInput | LocationSongLeadUpdateManyWithWhereWithoutSongLeadInput[]
    deleteMany?: LocationSongLeadScalarWhereInput | LocationSongLeadScalarWhereInput[]
  }

  export type LocationSongLeadCreateNestedManyWithoutLocationInput = {
    create?: XOR<LocationSongLeadCreateWithoutLocationInput, LocationSongLeadUncheckedCreateWithoutLocationInput> | LocationSongLeadCreateWithoutLocationInput[] | LocationSongLeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationSongLeadCreateOrConnectWithoutLocationInput | LocationSongLeadCreateOrConnectWithoutLocationInput[]
    createMany?: LocationSongLeadCreateManyLocationInputEnvelope
    connect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
  }

  export type SongLeadCreateNestedManyWithoutLocationInput = {
    create?: XOR<SongLeadCreateWithoutLocationInput, SongLeadUncheckedCreateWithoutLocationInput> | SongLeadCreateWithoutLocationInput[] | SongLeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SongLeadCreateOrConnectWithoutLocationInput | SongLeadCreateOrConnectWithoutLocationInput[]
    createMany?: SongLeadCreateManyLocationInputEnvelope
    connect?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutLocationInput = {
    create?: XOR<ScheduleCreateWithoutLocationInput, ScheduleUncheckedCreateWithoutLocationInput> | ScheduleCreateWithoutLocationInput[] | ScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutLocationInput | ScheduleCreateOrConnectWithoutLocationInput[]
    createMany?: ScheduleCreateManyLocationInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type LocationSongLeadUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<LocationSongLeadCreateWithoutLocationInput, LocationSongLeadUncheckedCreateWithoutLocationInput> | LocationSongLeadCreateWithoutLocationInput[] | LocationSongLeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationSongLeadCreateOrConnectWithoutLocationInput | LocationSongLeadCreateOrConnectWithoutLocationInput[]
    createMany?: LocationSongLeadCreateManyLocationInputEnvelope
    connect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
  }

  export type SongLeadUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<SongLeadCreateWithoutLocationInput, SongLeadUncheckedCreateWithoutLocationInput> | SongLeadCreateWithoutLocationInput[] | SongLeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SongLeadCreateOrConnectWithoutLocationInput | SongLeadCreateOrConnectWithoutLocationInput[]
    createMany?: SongLeadCreateManyLocationInputEnvelope
    connect?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<ScheduleCreateWithoutLocationInput, ScheduleUncheckedCreateWithoutLocationInput> | ScheduleCreateWithoutLocationInput[] | ScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutLocationInput | ScheduleCreateOrConnectWithoutLocationInput[]
    createMany?: ScheduleCreateManyLocationInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type LocationSongLeadUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationSongLeadCreateWithoutLocationInput, LocationSongLeadUncheckedCreateWithoutLocationInput> | LocationSongLeadCreateWithoutLocationInput[] | LocationSongLeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationSongLeadCreateOrConnectWithoutLocationInput | LocationSongLeadCreateOrConnectWithoutLocationInput[]
    upsert?: LocationSongLeadUpsertWithWhereUniqueWithoutLocationInput | LocationSongLeadUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationSongLeadCreateManyLocationInputEnvelope
    set?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    disconnect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    delete?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    connect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    update?: LocationSongLeadUpdateWithWhereUniqueWithoutLocationInput | LocationSongLeadUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationSongLeadUpdateManyWithWhereWithoutLocationInput | LocationSongLeadUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationSongLeadScalarWhereInput | LocationSongLeadScalarWhereInput[]
  }

  export type SongLeadUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SongLeadCreateWithoutLocationInput, SongLeadUncheckedCreateWithoutLocationInput> | SongLeadCreateWithoutLocationInput[] | SongLeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SongLeadCreateOrConnectWithoutLocationInput | SongLeadCreateOrConnectWithoutLocationInput[]
    upsert?: SongLeadUpsertWithWhereUniqueWithoutLocationInput | SongLeadUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SongLeadCreateManyLocationInputEnvelope
    set?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
    disconnect?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
    delete?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
    connect?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
    update?: SongLeadUpdateWithWhereUniqueWithoutLocationInput | SongLeadUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SongLeadUpdateManyWithWhereWithoutLocationInput | SongLeadUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SongLeadScalarWhereInput | SongLeadScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ScheduleCreateWithoutLocationInput, ScheduleUncheckedCreateWithoutLocationInput> | ScheduleCreateWithoutLocationInput[] | ScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutLocationInput | ScheduleCreateOrConnectWithoutLocationInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutLocationInput | ScheduleUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ScheduleCreateManyLocationInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutLocationInput | ScheduleUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutLocationInput | ScheduleUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type LocationSongLeadUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationSongLeadCreateWithoutLocationInput, LocationSongLeadUncheckedCreateWithoutLocationInput> | LocationSongLeadCreateWithoutLocationInput[] | LocationSongLeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationSongLeadCreateOrConnectWithoutLocationInput | LocationSongLeadCreateOrConnectWithoutLocationInput[]
    upsert?: LocationSongLeadUpsertWithWhereUniqueWithoutLocationInput | LocationSongLeadUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationSongLeadCreateManyLocationInputEnvelope
    set?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    disconnect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    delete?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    connect?: LocationSongLeadWhereUniqueInput | LocationSongLeadWhereUniqueInput[]
    update?: LocationSongLeadUpdateWithWhereUniqueWithoutLocationInput | LocationSongLeadUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationSongLeadUpdateManyWithWhereWithoutLocationInput | LocationSongLeadUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationSongLeadScalarWhereInput | LocationSongLeadScalarWhereInput[]
  }

  export type SongLeadUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SongLeadCreateWithoutLocationInput, SongLeadUncheckedCreateWithoutLocationInput> | SongLeadCreateWithoutLocationInput[] | SongLeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SongLeadCreateOrConnectWithoutLocationInput | SongLeadCreateOrConnectWithoutLocationInput[]
    upsert?: SongLeadUpsertWithWhereUniqueWithoutLocationInput | SongLeadUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SongLeadCreateManyLocationInputEnvelope
    set?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
    disconnect?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
    delete?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
    connect?: SongLeadWhereUniqueInput | SongLeadWhereUniqueInput[]
    update?: SongLeadUpdateWithWhereUniqueWithoutLocationInput | SongLeadUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SongLeadUpdateManyWithWhereWithoutLocationInput | SongLeadUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SongLeadScalarWhereInput | SongLeadScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ScheduleCreateWithoutLocationInput, ScheduleUncheckedCreateWithoutLocationInput> | ScheduleCreateWithoutLocationInput[] | ScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutLocationInput | ScheduleCreateOrConnectWithoutLocationInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutLocationInput | ScheduleUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ScheduleCreateManyLocationInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutLocationInput | ScheduleUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutLocationInput | ScheduleUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type SongLeadCreateNestedOneWithoutLocationSongLeadInput = {
    create?: XOR<SongLeadCreateWithoutLocationSongLeadInput, SongLeadUncheckedCreateWithoutLocationSongLeadInput>
    connectOrCreate?: SongLeadCreateOrConnectWithoutLocationSongLeadInput
    connect?: SongLeadWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutLocationSongLeadInput = {
    create?: XOR<LocationCreateWithoutLocationSongLeadInput, LocationUncheckedCreateWithoutLocationSongLeadInput>
    connectOrCreate?: LocationCreateOrConnectWithoutLocationSongLeadInput
    connect?: LocationWhereUniqueInput
  }

  export type SongLeadUpdateOneRequiredWithoutLocationSongLeadNestedInput = {
    create?: XOR<SongLeadCreateWithoutLocationSongLeadInput, SongLeadUncheckedCreateWithoutLocationSongLeadInput>
    connectOrCreate?: SongLeadCreateOrConnectWithoutLocationSongLeadInput
    upsert?: SongLeadUpsertWithoutLocationSongLeadInput
    connect?: SongLeadWhereUniqueInput
    update?: XOR<XOR<SongLeadUpdateToOneWithWhereWithoutLocationSongLeadInput, SongLeadUpdateWithoutLocationSongLeadInput>, SongLeadUncheckedUpdateWithoutLocationSongLeadInput>
  }

  export type LocationUpdateOneWithoutLocationSongLeadNestedInput = {
    create?: XOR<LocationCreateWithoutLocationSongLeadInput, LocationUncheckedCreateWithoutLocationSongLeadInput>
    connectOrCreate?: LocationCreateOrConnectWithoutLocationSongLeadInput
    upsert?: LocationUpsertWithoutLocationSongLeadInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutLocationSongLeadInput, LocationUpdateWithoutLocationSongLeadInput>, LocationUncheckedUpdateWithoutLocationSongLeadInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ScheduleCreateWithoutSongInput = {
    date: Date | string
    scheduleSongs?: ScheduleSongsCreateNestedManyWithoutScheduleInput
    songLead?: SongLeadCreateNestedOneWithoutScheduleInput
    location?: LocationCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutSongInput = {
    id?: number
    date: Date | string
    songLeadId?: number | null
    locationId?: number | null
    scheduleSongs?: ScheduleSongsUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutSongInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutSongInput, ScheduleUncheckedCreateWithoutSongInput>
  }

  export type ScheduleSongsCreateWithoutSongInput = {
    preferredKey?: string | null
    order?: number
    Schedule?: ScheduleCreateNestedOneWithoutScheduleSongsInput
  }

  export type ScheduleSongsUncheckedCreateWithoutSongInput = {
    id?: number
    scheduleId?: number | null
    preferredKey?: string | null
    order?: number
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
    songLead?: SongLeadUpdateOneWithoutScheduleNestedInput
    location?: LocationUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    songLeadId?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
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
    preferredKey?: StringNullableFilter<"ScheduleSongs"> | string | null
    order?: IntFilter<"ScheduleSongs"> | number
  }

  export type ScheduleSongsCreateWithoutScheduleInput = {
    preferredKey?: string | null
    order?: number
    song?: SongCreateNestedOneWithoutScheduleSongsInput
  }

  export type ScheduleSongsUncheckedCreateWithoutScheduleInput = {
    id?: number
    songId: number
    preferredKey?: string | null
    order?: number
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

  export type SongLeadCreateWithoutScheduleInput = {
    firstName: string
    lastName: string
    Location?: LocationCreateNestedOneWithoutSongLeadInput
    LocationSongLead?: LocationSongLeadCreateNestedManyWithoutSongLeadInput
  }

  export type SongLeadUncheckedCreateWithoutScheduleInput = {
    id?: number
    firstName: string
    lastName: string
    locationId?: number | null
    LocationSongLead?: LocationSongLeadUncheckedCreateNestedManyWithoutSongLeadInput
  }

  export type SongLeadCreateOrConnectWithoutScheduleInput = {
    where: SongLeadWhereUniqueInput
    create: XOR<SongLeadCreateWithoutScheduleInput, SongLeadUncheckedCreateWithoutScheduleInput>
  }

  export type LocationCreateWithoutScheduleInput = {
    address: string
    lat?: Decimal | DecimalJsLike | number | string
    long?: Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadCreateNestedManyWithoutLocationInput
    SongLead?: SongLeadCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutScheduleInput = {
    id?: number
    address: string
    lat?: Decimal | DecimalJsLike | number | string
    long?: Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadUncheckedCreateNestedManyWithoutLocationInput
    SongLead?: SongLeadUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutScheduleInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutScheduleInput, LocationUncheckedCreateWithoutScheduleInput>
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

  export type SongLeadUpsertWithoutScheduleInput = {
    update: XOR<SongLeadUpdateWithoutScheduleInput, SongLeadUncheckedUpdateWithoutScheduleInput>
    create: XOR<SongLeadCreateWithoutScheduleInput, SongLeadUncheckedCreateWithoutScheduleInput>
    where?: SongLeadWhereInput
  }

  export type SongLeadUpdateToOneWithWhereWithoutScheduleInput = {
    where?: SongLeadWhereInput
    data: XOR<SongLeadUpdateWithoutScheduleInput, SongLeadUncheckedUpdateWithoutScheduleInput>
  }

  export type SongLeadUpdateWithoutScheduleInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    Location?: LocationUpdateOneWithoutSongLeadNestedInput
    LocationSongLead?: LocationSongLeadUpdateManyWithoutSongLeadNestedInput
  }

  export type SongLeadUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    LocationSongLead?: LocationSongLeadUncheckedUpdateManyWithoutSongLeadNestedInput
  }

  export type LocationUpsertWithoutScheduleInput = {
    update: XOR<LocationUpdateWithoutScheduleInput, LocationUncheckedUpdateWithoutScheduleInput>
    create: XOR<LocationCreateWithoutScheduleInput, LocationUncheckedCreateWithoutScheduleInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutScheduleInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutScheduleInput, LocationUncheckedUpdateWithoutScheduleInput>
  }

  export type LocationUpdateWithoutScheduleInput = {
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadUpdateManyWithoutLocationNestedInput
    SongLead?: SongLeadUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadUncheckedUpdateManyWithoutLocationNestedInput
    SongLead?: SongLeadUncheckedUpdateManyWithoutLocationNestedInput
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
    songLead?: SongLeadCreateNestedOneWithoutScheduleInput
    location?: LocationCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutScheduleSongsInput = {
    id?: number
    date: Date | string
    songLeadId?: number | null
    locationId?: number | null
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
    songLead?: SongLeadUpdateOneWithoutScheduleNestedInput
    location?: LocationUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutScheduleSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    songLeadId?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    Song?: SongUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateWithoutSongLeadInput = {
    date: Date | string
    scheduleSongs?: ScheduleSongsCreateNestedManyWithoutScheduleInput
    Song?: SongCreateNestedManyWithoutScheduleInput
    location?: LocationCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutSongLeadInput = {
    id?: number
    date: Date | string
    locationId?: number | null
    scheduleSongs?: ScheduleSongsUncheckedCreateNestedManyWithoutScheduleInput
    Song?: SongUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutSongLeadInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutSongLeadInput, ScheduleUncheckedCreateWithoutSongLeadInput>
  }

  export type ScheduleCreateManySongLeadInputEnvelope = {
    data: ScheduleCreateManySongLeadInput | ScheduleCreateManySongLeadInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutSongLeadInput = {
    address: string
    lat?: Decimal | DecimalJsLike | number | string
    long?: Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadCreateNestedManyWithoutLocationInput
    Schedule?: ScheduleCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutSongLeadInput = {
    id?: number
    address: string
    lat?: Decimal | DecimalJsLike | number | string
    long?: Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadUncheckedCreateNestedManyWithoutLocationInput
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutSongLeadInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutSongLeadInput, LocationUncheckedCreateWithoutSongLeadInput>
  }

  export type LocationSongLeadCreateWithoutSongLeadInput = {
    Location?: LocationCreateNestedOneWithoutLocationSongLeadInput
  }

  export type LocationSongLeadUncheckedCreateWithoutSongLeadInput = {
    id?: number
    locationId?: number | null
  }

  export type LocationSongLeadCreateOrConnectWithoutSongLeadInput = {
    where: LocationSongLeadWhereUniqueInput
    create: XOR<LocationSongLeadCreateWithoutSongLeadInput, LocationSongLeadUncheckedCreateWithoutSongLeadInput>
  }

  export type LocationSongLeadCreateManySongLeadInputEnvelope = {
    data: LocationSongLeadCreateManySongLeadInput | LocationSongLeadCreateManySongLeadInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleUpsertWithWhereUniqueWithoutSongLeadInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutSongLeadInput, ScheduleUncheckedUpdateWithoutSongLeadInput>
    create: XOR<ScheduleCreateWithoutSongLeadInput, ScheduleUncheckedCreateWithoutSongLeadInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutSongLeadInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutSongLeadInput, ScheduleUncheckedUpdateWithoutSongLeadInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutSongLeadInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutSongLeadInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: IntFilter<"Schedule"> | number
    date?: DateTimeFilter<"Schedule"> | Date | string
    songLeadId?: IntNullableFilter<"Schedule"> | number | null
    locationId?: IntNullableFilter<"Schedule"> | number | null
  }

  export type LocationUpsertWithoutSongLeadInput = {
    update: XOR<LocationUpdateWithoutSongLeadInput, LocationUncheckedUpdateWithoutSongLeadInput>
    create: XOR<LocationCreateWithoutSongLeadInput, LocationUncheckedCreateWithoutSongLeadInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutSongLeadInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutSongLeadInput, LocationUncheckedUpdateWithoutSongLeadInput>
  }

  export type LocationUpdateWithoutSongLeadInput = {
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadUpdateManyWithoutLocationNestedInput
    Schedule?: ScheduleUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutSongLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationSongLead?: LocationSongLeadUncheckedUpdateManyWithoutLocationNestedInput
    Schedule?: ScheduleUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationSongLeadUpsertWithWhereUniqueWithoutSongLeadInput = {
    where: LocationSongLeadWhereUniqueInput
    update: XOR<LocationSongLeadUpdateWithoutSongLeadInput, LocationSongLeadUncheckedUpdateWithoutSongLeadInput>
    create: XOR<LocationSongLeadCreateWithoutSongLeadInput, LocationSongLeadUncheckedCreateWithoutSongLeadInput>
  }

  export type LocationSongLeadUpdateWithWhereUniqueWithoutSongLeadInput = {
    where: LocationSongLeadWhereUniqueInput
    data: XOR<LocationSongLeadUpdateWithoutSongLeadInput, LocationSongLeadUncheckedUpdateWithoutSongLeadInput>
  }

  export type LocationSongLeadUpdateManyWithWhereWithoutSongLeadInput = {
    where: LocationSongLeadScalarWhereInput
    data: XOR<LocationSongLeadUpdateManyMutationInput, LocationSongLeadUncheckedUpdateManyWithoutSongLeadInput>
  }

  export type LocationSongLeadScalarWhereInput = {
    AND?: LocationSongLeadScalarWhereInput | LocationSongLeadScalarWhereInput[]
    OR?: LocationSongLeadScalarWhereInput[]
    NOT?: LocationSongLeadScalarWhereInput | LocationSongLeadScalarWhereInput[]
    id?: IntFilter<"LocationSongLead"> | number
    locationId?: IntNullableFilter<"LocationSongLead"> | number | null
    songLeadId?: IntFilter<"LocationSongLead"> | number
  }

  export type LocationSongLeadCreateWithoutLocationInput = {
    songLead: SongLeadCreateNestedOneWithoutLocationSongLeadInput
  }

  export type LocationSongLeadUncheckedCreateWithoutLocationInput = {
    id?: number
    songLeadId: number
  }

  export type LocationSongLeadCreateOrConnectWithoutLocationInput = {
    where: LocationSongLeadWhereUniqueInput
    create: XOR<LocationSongLeadCreateWithoutLocationInput, LocationSongLeadUncheckedCreateWithoutLocationInput>
  }

  export type LocationSongLeadCreateManyLocationInputEnvelope = {
    data: LocationSongLeadCreateManyLocationInput | LocationSongLeadCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type SongLeadCreateWithoutLocationInput = {
    firstName: string
    lastName: string
    Schedule?: ScheduleCreateNestedManyWithoutSongLeadInput
    LocationSongLead?: LocationSongLeadCreateNestedManyWithoutSongLeadInput
  }

  export type SongLeadUncheckedCreateWithoutLocationInput = {
    id?: number
    firstName: string
    lastName: string
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutSongLeadInput
    LocationSongLead?: LocationSongLeadUncheckedCreateNestedManyWithoutSongLeadInput
  }

  export type SongLeadCreateOrConnectWithoutLocationInput = {
    where: SongLeadWhereUniqueInput
    create: XOR<SongLeadCreateWithoutLocationInput, SongLeadUncheckedCreateWithoutLocationInput>
  }

  export type SongLeadCreateManyLocationInputEnvelope = {
    data: SongLeadCreateManyLocationInput | SongLeadCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutLocationInput = {
    date: Date | string
    scheduleSongs?: ScheduleSongsCreateNestedManyWithoutScheduleInput
    Song?: SongCreateNestedManyWithoutScheduleInput
    songLead?: SongLeadCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutLocationInput = {
    id?: number
    date: Date | string
    songLeadId?: number | null
    scheduleSongs?: ScheduleSongsUncheckedCreateNestedManyWithoutScheduleInput
    Song?: SongUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutLocationInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutLocationInput, ScheduleUncheckedCreateWithoutLocationInput>
  }

  export type ScheduleCreateManyLocationInputEnvelope = {
    data: ScheduleCreateManyLocationInput | ScheduleCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type LocationSongLeadUpsertWithWhereUniqueWithoutLocationInput = {
    where: LocationSongLeadWhereUniqueInput
    update: XOR<LocationSongLeadUpdateWithoutLocationInput, LocationSongLeadUncheckedUpdateWithoutLocationInput>
    create: XOR<LocationSongLeadCreateWithoutLocationInput, LocationSongLeadUncheckedCreateWithoutLocationInput>
  }

  export type LocationSongLeadUpdateWithWhereUniqueWithoutLocationInput = {
    where: LocationSongLeadWhereUniqueInput
    data: XOR<LocationSongLeadUpdateWithoutLocationInput, LocationSongLeadUncheckedUpdateWithoutLocationInput>
  }

  export type LocationSongLeadUpdateManyWithWhereWithoutLocationInput = {
    where: LocationSongLeadScalarWhereInput
    data: XOR<LocationSongLeadUpdateManyMutationInput, LocationSongLeadUncheckedUpdateManyWithoutLocationInput>
  }

  export type SongLeadUpsertWithWhereUniqueWithoutLocationInput = {
    where: SongLeadWhereUniqueInput
    update: XOR<SongLeadUpdateWithoutLocationInput, SongLeadUncheckedUpdateWithoutLocationInput>
    create: XOR<SongLeadCreateWithoutLocationInput, SongLeadUncheckedCreateWithoutLocationInput>
  }

  export type SongLeadUpdateWithWhereUniqueWithoutLocationInput = {
    where: SongLeadWhereUniqueInput
    data: XOR<SongLeadUpdateWithoutLocationInput, SongLeadUncheckedUpdateWithoutLocationInput>
  }

  export type SongLeadUpdateManyWithWhereWithoutLocationInput = {
    where: SongLeadScalarWhereInput
    data: XOR<SongLeadUpdateManyMutationInput, SongLeadUncheckedUpdateManyWithoutLocationInput>
  }

  export type SongLeadScalarWhereInput = {
    AND?: SongLeadScalarWhereInput | SongLeadScalarWhereInput[]
    OR?: SongLeadScalarWhereInput[]
    NOT?: SongLeadScalarWhereInput | SongLeadScalarWhereInput[]
    id?: IntFilter<"SongLead"> | number
    firstName?: StringFilter<"SongLead"> | string
    lastName?: StringFilter<"SongLead"> | string
    locationId?: IntNullableFilter<"SongLead"> | number | null
  }

  export type ScheduleUpsertWithWhereUniqueWithoutLocationInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutLocationInput, ScheduleUncheckedUpdateWithoutLocationInput>
    create: XOR<ScheduleCreateWithoutLocationInput, ScheduleUncheckedCreateWithoutLocationInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutLocationInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutLocationInput, ScheduleUncheckedUpdateWithoutLocationInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutLocationInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutLocationInput>
  }

  export type SongLeadCreateWithoutLocationSongLeadInput = {
    firstName: string
    lastName: string
    Schedule?: ScheduleCreateNestedManyWithoutSongLeadInput
    Location?: LocationCreateNestedOneWithoutSongLeadInput
  }

  export type SongLeadUncheckedCreateWithoutLocationSongLeadInput = {
    id?: number
    firstName: string
    lastName: string
    locationId?: number | null
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutSongLeadInput
  }

  export type SongLeadCreateOrConnectWithoutLocationSongLeadInput = {
    where: SongLeadWhereUniqueInput
    create: XOR<SongLeadCreateWithoutLocationSongLeadInput, SongLeadUncheckedCreateWithoutLocationSongLeadInput>
  }

  export type LocationCreateWithoutLocationSongLeadInput = {
    address: string
    lat?: Decimal | DecimalJsLike | number | string
    long?: Decimal | DecimalJsLike | number | string
    SongLead?: SongLeadCreateNestedManyWithoutLocationInput
    Schedule?: ScheduleCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutLocationSongLeadInput = {
    id?: number
    address: string
    lat?: Decimal | DecimalJsLike | number | string
    long?: Decimal | DecimalJsLike | number | string
    SongLead?: SongLeadUncheckedCreateNestedManyWithoutLocationInput
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutLocationSongLeadInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutLocationSongLeadInput, LocationUncheckedCreateWithoutLocationSongLeadInput>
  }

  export type SongLeadUpsertWithoutLocationSongLeadInput = {
    update: XOR<SongLeadUpdateWithoutLocationSongLeadInput, SongLeadUncheckedUpdateWithoutLocationSongLeadInput>
    create: XOR<SongLeadCreateWithoutLocationSongLeadInput, SongLeadUncheckedCreateWithoutLocationSongLeadInput>
    where?: SongLeadWhereInput
  }

  export type SongLeadUpdateToOneWithWhereWithoutLocationSongLeadInput = {
    where?: SongLeadWhereInput
    data: XOR<SongLeadUpdateWithoutLocationSongLeadInput, SongLeadUncheckedUpdateWithoutLocationSongLeadInput>
  }

  export type SongLeadUpdateWithoutLocationSongLeadInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    Schedule?: ScheduleUpdateManyWithoutSongLeadNestedInput
    Location?: LocationUpdateOneWithoutSongLeadNestedInput
  }

  export type SongLeadUncheckedUpdateWithoutLocationSongLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    Schedule?: ScheduleUncheckedUpdateManyWithoutSongLeadNestedInput
  }

  export type LocationUpsertWithoutLocationSongLeadInput = {
    update: XOR<LocationUpdateWithoutLocationSongLeadInput, LocationUncheckedUpdateWithoutLocationSongLeadInput>
    create: XOR<LocationCreateWithoutLocationSongLeadInput, LocationUncheckedCreateWithoutLocationSongLeadInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutLocationSongLeadInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutLocationSongLeadInput, LocationUncheckedUpdateWithoutLocationSongLeadInput>
  }

  export type LocationUpdateWithoutLocationSongLeadInput = {
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SongLead?: SongLeadUpdateManyWithoutLocationNestedInput
    Schedule?: ScheduleUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutLocationSongLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    long?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    SongLead?: SongLeadUncheckedUpdateManyWithoutLocationNestedInput
    Schedule?: ScheduleUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ScheduleSongsCreateManySongInput = {
    id?: number
    scheduleId?: number | null
    preferredKey?: string | null
    order?: number
  }

  export type ScheduleSongsUpdateWithoutSongInput = {
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    Schedule?: ScheduleUpdateOneWithoutScheduleSongsNestedInput
  }

  export type ScheduleSongsUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleSongsUncheckedUpdateManyWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleSongsCreateManyScheduleInput = {
    id?: number
    songId: number
    preferredKey?: string | null
    order?: number
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
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    song?: SongUpdateOneWithoutScheduleSongsNestedInput
  }

  export type ScheduleSongsUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleSongsUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    preferredKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
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

  export type ScheduleCreateManySongLeadInput = {
    id?: number
    date: Date | string
    locationId?: number | null
  }

  export type LocationSongLeadCreateManySongLeadInput = {
    id?: number
    locationId?: number | null
  }

  export type ScheduleUpdateWithoutSongLeadInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleSongs?: ScheduleSongsUpdateManyWithoutScheduleNestedInput
    Song?: SongUpdateManyWithoutScheduleNestedInput
    location?: LocationUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutSongLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    scheduleSongs?: ScheduleSongsUncheckedUpdateManyWithoutScheduleNestedInput
    Song?: SongUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutSongLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationSongLeadUpdateWithoutSongLeadInput = {
    Location?: LocationUpdateOneWithoutLocationSongLeadNestedInput
  }

  export type LocationSongLeadUncheckedUpdateWithoutSongLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationSongLeadUncheckedUpdateManyWithoutSongLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationSongLeadCreateManyLocationInput = {
    id?: number
    songLeadId: number
  }

  export type SongLeadCreateManyLocationInput = {
    id?: number
    firstName: string
    lastName: string
  }

  export type ScheduleCreateManyLocationInput = {
    id?: number
    date: Date | string
    songLeadId?: number | null
  }

  export type LocationSongLeadUpdateWithoutLocationInput = {
    songLead?: SongLeadUpdateOneRequiredWithoutLocationSongLeadNestedInput
  }

  export type LocationSongLeadUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    songLeadId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationSongLeadUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    songLeadId?: IntFieldUpdateOperationsInput | number
  }

  export type SongLeadUpdateWithoutLocationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    Schedule?: ScheduleUpdateManyWithoutSongLeadNestedInput
    LocationSongLead?: LocationSongLeadUpdateManyWithoutSongLeadNestedInput
  }

  export type SongLeadUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    Schedule?: ScheduleUncheckedUpdateManyWithoutSongLeadNestedInput
    LocationSongLead?: LocationSongLeadUncheckedUpdateManyWithoutSongLeadNestedInput
  }

  export type SongLeadUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUpdateWithoutLocationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleSongs?: ScheduleSongsUpdateManyWithoutScheduleNestedInput
    Song?: SongUpdateManyWithoutScheduleNestedInput
    songLead?: SongLeadUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    songLeadId?: NullableIntFieldUpdateOperationsInput | number | null
    scheduleSongs?: ScheduleSongsUncheckedUpdateManyWithoutScheduleNestedInput
    Song?: SongUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    songLeadId?: NullableIntFieldUpdateOperationsInput | number | null
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
     * @deprecated Use SongLeadCountOutputTypeDefaultArgs instead
     */
    export type SongLeadCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongLeadCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationCountOutputTypeDefaultArgs instead
     */
    export type LocationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use SongLeadDefaultArgs instead
     */
    export type SongLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongLeadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationDefaultArgs instead
     */
    export type LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationSongLeadDefaultArgs instead
     */
    export type LocationSongLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationSongLeadDefaultArgs<ExtArgs>

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