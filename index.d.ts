export = utility;
export as namespace utility;

declare namespace utility {

  // ** Defines For Array **

  /**
   * Array random slice with items count.
   * @param {Array} arr
   * @param {Number} num, number of sub items.
   * @return {Array}
   */
  function randomSlice(arr: any[], num?: number): any[];

  /**
   * Remove one exists element from an array
   * @param {Array} arr
   * @param  {Number} index - remove element index
   * @return {Array} the array instance
   */
  function spliceOne(arr: any[], index: number): any[];


  // ** Defines For Crypto **

  /**
   * hash
   *
   * @param {String} method hash method, e.g.: 'md5', 'sha1'
   * @param {String|Buffer} s
   * @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
   * @return {String} md5 hash string
   * @public
   */
  function hash(
    method: 'md5' | 'sha1',
    s: string | Buffer,
    format?: 'hex' | 'base64',
  ): string;

  /**
   * md5 hash
   *
   * @param {String|Buffer} s
   * @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
   * @return {String} md5 hash string
   * @public
   */
  function md5(
    s: string | Buffer,
    format?: 'hex' | 'base64',
  ): string;

  /**
   * sha1 hash
   *
   * @param {String|Buffer} s
   * @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
   * @return {String} sha1 hash string
   * @public
   */
  function sha1(
    s: string | Buffer,
    format?: 'hex' | 'base64',
  ): string;

  /**
   * sha256 hash
   *
   * @param {String|Buffer} s
   * @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
   * @return {String} sha256 hash string
   * @public
   */
  function sha256(
    s: string | Buffer,
    format?: 'hex' | 'base64',
  ): string;

  /**
   * HMAC algorithm.
   *
   * Equal bash:
   *
   * ```bash
   * $ echo -n "$data" | openssl dgst -binary -$algorithm -hmac "$key" | openssl $encoding
   * ```
   *
   * @param {String} algorithm, dependent on the available algorithms supported by the version of OpenSSL on the platform.
   *   Examples are 'sha1', 'md5', 'sha256', 'sha512', etc.
   *   On recent releases, `openssl list-message-digest-algorithms` will display the available digest algorithms.
   * @param {String} key, the hmac key to be used.
   * @param {String|Buffer} data, content string.
   * @param {String} [encoding='base64']
   * @return {String} digest string.
   */
  function hmac(
    algorithm: string,
    key: string,
    data: string | Buffer,
    encoding?: 'base64' | string,
  ): string;

  /**
   * Base64 encode string.
   *
   * @param {String|Buffer} s
   * @param {Boolean} [urlsafe=false] Encode string s using a URL-safe alphabet,
   *   which substitutes - instead of + and _ instead of / in the standard Base64 alphabet.
   * @return {String} base64 encode format string.
   */
  function base64encode(
    s: string | Buffer,
    urlsafe?: boolean,
  ): string;

  /**
   * Base64 string decode.
   *
   * @param {String} encode, base64 encoding string.
   * @param {Boolean} [urlsafe=false] Decode string s using a URL-safe alphabet,
   *   which substitutes - instead of + and _ instead of / in the standard Base64 alphabet.
   * @param {encoding} [encoding=utf8] if encoding = buffer, will return Buffer instance
   * @return {String|Buffer} plain text.
   */
  function base64decode(
    encode: string,
    urlsafe?: boolean,
    encoding?: 'utf8' | 'buffer',
  ): string | Buffer;


  // ** Defines For Date **

  interface IYYYYMMDDHHmmssStaticOptions {
    dateSep?: string,
    timeSep?: string,
  }

  /**
   * Access log format date. format: `moment().format('DD/MMM/YYYY:HH:mm:ss ZZ')`
   *
   * @return {String}
   */
  function accessLogDate(d: Date): string;

  /**
   * Normal log format date. format: `moment().format('YYYY-MM-DD HH:mm:ss.SSS')`
   *
   * @return {String}
   */
  function logDate(
    d: string | Date,
    msSep?: string,
  ): string;

  /**
   * `moment().format('YYYY-MM-DD HH:mm:ss')` format date string.
   *
   * @return {String}
   */
  function YYYYMMDDHHmmss(
    d: Date,
    options?: IYYYYMMDDHHmmssStaticOptions,
  ): string;

  /**
   * `moment().format('YYYY-MM-DD')` format date string.
   *
   * @return {String}
   */
  function YYYYMMDD(
    d: string | Date,
    sep?: string,
  ): string;

  /**
   * return datetime struct.
   *
   * @return {Object} date
   *  - {Number} YYYYMMDD, 20130401
   *  - {Number} H, 0, 1, 9, 12, 23
   */
  function datestruct(now?: Date): Date;

  /**
   * Get Unix's timestamp in seconds.
   * @return {Number}
   */
  function timestamp(
    t?: string,
  ): number;


  // ** Defines For Function Method **

  /**
   * A empty function.
   *
   * @return {Function}
   * @public
   */
  function noop(): () => any;

  /**
   * Get a function parameter's names.
   *
   * @param {Function} func
   * @param {Boolean} [useCache], default is true
   * @return {Array} names
   */
  function getParamNames(
    func: (...args: any[]) => any,
    cache?: boolean,
  ): string[];
}