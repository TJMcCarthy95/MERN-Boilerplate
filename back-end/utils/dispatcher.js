const Logger = require("./logger.js");

// 1xx === Informational response
// 2xx === Success
// 3xx === Redirection
// 4xx === Client errors
// 5xx === Server errors
const status_responses = [
  { code: 100, message: "Continue" },
  { code: 101, message: "Switching Protocols" },
  { code: 102, message: "Processing (WebDAV; RFC 2518)" },
  { code: 103, message: "Early Hints (RFC 8297)" },
  { code: 200, message: "OK" },
  { code: 201, message: "Created" },
  { code: 202, message: "Accepted" },
  { code: 203, message: "Non-Authoritative Information" },
  { code: 204, message: "No Content" },
  { code: 205, message: "Reset Content" },
  { code: 206, message: "Partial Content (RFC 7233)" },
  { code: 207, message: "Multi-Status (WebDAV; RFC 4918)" },
  { code: 208, message: "Already Reported (WebDAV; RFC 5842)" },
  { code: 226, message: "IM Used (RFC 3229)" },
  { code: 300, message: "Multiple Choices" },
  { code: 301, message: "Moved Permanently" },
  { code: 302, message: "Found" },
  { code: 303, message: "See Other" },
  { code: 304, message: "Not Modified (RFC 7232)" },
  { code: 305, message: "Use Proxy" },
  { code: 307, message: "Temporary Redirect" },
  { code: 308, message: "Permanent Redirect (RFC 7538)" },
  { code: 400, message: "Bad Request" },
  { code: 401, message: "Unauthorized (RFC 7235)" },
  { code: 402, message: "Payment Required" },
  { code: 403, message: "Forbidden" },
  { code: 404, message: "Not Found" },
  { code: 405, message: "Method Not Allowed" },
  { code: 406, message: "Not Acceptable" },
  { code: 407, message: "Proxy Authentication Required (RFC 7235)" },
  { code: 408, message: "Request Timeout" },
  { code: 409, message: "Conflict" },
  { code: 410, message: "Gone" },
  { code: 411, message: "Length Required" },
  { code: 412, message: "Precondition Failed (RFC 7232)" },
  { code: 413, message: "Payload Too Large (RFC 7231)" },
  { code: 414, message: "URI Too Long (RFC 7231)" },
  { code: 415, message: "Unsupported Media Type" },
  { code: 416, message: "Range Not Satisfiable (RFC 7233)" },
  { code: 417, message: "Expectation Failed" },
  { code: 418, message: "I'm a teapot (RFC 2324, RFC 7168)" },
  { code: 421, message: "Misdirected Request (RFC 7540)" },
  { code: 422, message: "Unprocessable Entity (WebDAV; RFC 4918)" },
  { code: 423, message: "Locked (WebDAV; RFC 4918)" },
  { code: 424, message: "Failed Dependency (WebDAV; RFC 4918)" },
  { code: 426, message: "Upgrade Required" },
  { code: 428, message: "Precondition Required (RFC 6585)" },
  { code: 429, message: "Too Many Requests (RFC 6585)" },
  { code: 431, message: "Request Header Fields Too Large (RFC 6585)" },
  { code: 451, message: "Unavailable For Legal Reasons (RFC 7725)" },
  { code: 500, message: "Internal Server Error" },
  { code: 501, message: "Not Implemented" },
  { code: 502, message: "Bad Gateway" },
  { code: 503, message: "Service Unavailable" },
  { code: 504, message: "Gateway Timeout" },
  { code: 505, message: "HTTP Version Not Supported" },
  { code: 506, message: "Variant Also Negotiates (RFC 2295)" },
  { code: 507, message: "Insufficient Storage (WebDAV; RFC 4918)" },
  { code: 508, message: "Loop Detected (WebDAV; RFC 5842)" },
  { code: 510, message: "Not Extended (RFC 2774)" },
  { code: 511, message: "Network Authentication Required (RFC 6585)" },
]

get_code = err => {
  if (!!err) {
    if(isNaN(err)) {
      return 500;
    } else {
      return err;
    }
  } else {
    return 200;
  }
};

dispatcher = (res, err, payload, message = null) => {

  let response = {
    success: err ? false : true,
    status: get_code(err),
    err: isNaN(err) ? err : undefined
  };

  let status = status_responses.find(status => status.code === response.status);
  response = {
    message: (message ? `${message} - ` : "") + status.message,
    ...response,
  }

  if (err) Logger.error(`${JSON.stringify(response)}`);
  return res.status(response.status).json({ ...response, data: payload });
};

module.exports = dispatcher;
