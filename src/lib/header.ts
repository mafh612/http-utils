export enum HttpRequestHeader {
  /**
   * standard header fields
   */
  ACCEPT = 'accept',
  ACCEPT_CHARSET = 'accept-charset',
  ACCEPT_DATETIME = 'accept-datetime',
  ACCEPT_ENCODING = 'accept-encoding',
  ACCEPT_LANGUAGE = 'accept-language',
  ACCESS_CONTROL_REQUEST_METHOD = 'access-control-request-method',
  ACCESS_CONTROL_REQUEST_HEADERS = 'access-control-request-headers',
  AUTHORIZATION = 'authorization',
  A_IM = 'a-im',
  CACHE_CONTROL = 'cache-control',
  CONNECTION = 'connection',
  CONTENT_LENGTH = 'content-length',
  CONTENT_MD5 = 'content-md5',
  CONTENT_TYPE = 'content-type',
  COOKIE = 'cookie',
  DATE = 'date',
  EXPECT = 'expect',
  FORWARDED = 'forwarded',
  FROM = 'from',
  HOST = 'host',
  HTTP2_SETTINGS = 'http2-settings',
  IF_MATCH = 'if-match',
  IF_MODIFIED_SINCE = 'if-modified-since',
  IF_NONE_MATCH = 'if-none-match',
  IF_RANGE = 'if-range',
  IF_UNMODIFIED_SINCE = 'if-unmodified-since',
  MAX_FORWARDS = 'max-forwards',
  ORIGIN = 'origin',
  PRAGMA = 'pragma',
  PROXY_AUTHORIZATION = 'proxy-authorization',
  RANGE = 'range',
  REFERER = 'referer',
  TE = 'te',
  TRAILER = 'trailer',
  TRANSFER_ENCODING = 'transfer-encoding',
  UPGRADE = 'upgrade',
  USER_AGENT = 'user-agent',
  VIA = 'via',
  WARNING = 'warning',
  /**
   * non standard common header fields
   */
  DNT = 'dnt',
  FRONT_END_HTTPS = 'front-end-https',
  PROXY_CONNECTION = 'proxy-connection',
  SAVE_DATA = 'save-data',
  UPGRADE_INSECURE_REQUESTS = 'upgrade-insecure-requests',
  X_ATT_DEVICEID = 'x-att-deviceid',
  X_CORRELATION_ID = 'x-correlation-id',
  X_CSRF_TOKEN = 'x-csrf-token',
  X_FORWARDED_FOR = 'x-forwarded-for',
  X_FORWARDED_HOST = 'x-forwarded-host',
  X_FORWARDED_PROTO = 'x-forwarded-proto',
  X_HTTP_METHOD_OVERRIDE = 'x-http-method-override',
  X_REQUEST_ID = 'x-request-id',
  X_REQUESTED_WITH = 'x-requested-with',
  X_UIDH = 'x-uidh',
  X_WAP_PROFILE = 'x-wap-profile'
}

export enum HttpResponseHeader {
  /**
   * standard header fields
   */
  ACCEPT_PATCH = 'accept-patch',
  ACCEPT_RANGES = 'accept-ranges',
  ACCESS_CONTROL_ALLOW_CREDENTIALS = 'access-control-allow-credentials',
  ACCESS_CONTROL_ALLOW_HEADERS = 'access-control-allow-headers',
  ACCESS_CONTROL_ALLOW_METHODS = 'access-control-allow-methods',
  ACCESS_CONTROL_ALLOW_ORIGIN = 'access-control-allow-origin',
  ACCESS_CONTROL_EXPOSE_HEADERS = 'access-control-expose-headers',
  ACCESS_CONTROL_MAX_AGE = 'access-control-max-age',
  AGE = 'age',
  ALLOW = 'allow',
  ALT_SVC = 'alt-svc',
  CACHE_CONTROL = 'cache-control',
  CONNECTION = 'connection',
  CONTENT_DISPOSITION = 'content-disposition',
  CONTENT_ENCODING = 'content-encoding',
  CONTENT_LANGUAGE = 'content-language',
  CONTENT_LENGTH = 'content-length',
  CONTENT_LOCATION = 'content-location',
  CONTENT_MD5 = 'content-md5',
  CONTENT_RANGE = 'content-range',
  CONTENT_TYPE = 'content-type',
  DATE = 'date',
  DELTA_BASE = 'delta-base',
  ETAG = 'etag',
  EXPIRES = 'expires',
  IM = 'im',
  LAST_MODIFIED = 'last-modified',
  LINK = 'link',
  LOCATION = 'location',
  P3P = 'p3p',
  PRAGMA = 'pragma',
  PROXY_AUTHENTICATE = 'proxy-authenticate',
  PUBLIC_KEY_PINS = 'public-key-pins',
  RETRY_AFTER = 'retry-after',
  SERVER = 'server',
  SET_COOKIE = 'set-cookie',
  STRICT_TRANSPORT_SECURITY = 'strict-transport-security',
  TK = 'tk',
  TRAILER = 'trailer',
  TRANSFER_ENCODING = 'transfer-encoding',
  UPGRADE = 'upgrade',
  VARY = 'vary',
  VIA = 'via',
  WARNING = 'warning',
  WWW_AUTHENTICATE = 'www-authenticate',
  X_FRAME_OPTIONS = 'x-frame-options',
  /**
   * non standard common header fields
   */
  CONTENT_SECURITY_POLICY = 'content-security-policy',
  X_CONTENT_SECURITY_POLICY = 'x-content-security-policy',
  X_WEBKIT_CSP = 'x-webkit-csp',
  REFRESH = 'refresh',
  STATUS = 'status',
  TIMING_ALLOW_ORIGIN = 'timing-allow-origin',
  X_CONTENT_DURATION = 'x-content-duration',
  X_CONTENT_TYPE_OPTIONS = 'x-content-type-options',
  X_POWERED_BY = 'x-powered-by',
  X_REQUEST_ID = 'x-request-id',
  X_CORRELATION_ID = 'x-correlation-id',
  X_UA_COMPATIBLE = 'x-ua-compatible',
  X_XSS_PROTECTION = 'x-xss-protection'
}
