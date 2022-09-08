
/*
 * JsSIP v3.7.5
 * the Javascript SIP library
 * Copyright: 2012-2021 José Luis Millán <jmillan@aliax.net> (https://github.com/jmillan)
 * Homepage: https://jssip.net
 * License: MIT
 */


// ("use strict");
/*
 * AudioCodes WebRTC API v1.14.1
 * © 2021 AudioCodes Ltd. All rights reserved.
 *
 */
class AudioCodesUA {
    // static JsSIP= 
        /*
 * JsSIP v3.9.1
 * the Javascript SIP library
 * Copyright: 2012-2022 
 * Homepage: https://jssip.net
 * License: MIT
 */
    JsSipInit(){
        !(function (e) {
            if (false && "object" == typeof exports && "undefined" != typeof module) module.exports = e();
            else if (false &&  "function" == typeof define && define.amd) define([], e);
            else {
                ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JsSIP = e();
            }
        })(function () {
            return (function e(t, n, r) {
                function s(o, l) {
                    if (!n[o]) {
                        if (!t[o]) {
                            var u = "function" == typeof require && require;
                            if (!l && u) return u(o, !0);
                            if (i) return i(o, !0);
                            var a = new Error("Cannot find module '" + o + "'");
                            throw ((a.code = "MODULE_NOT_FOUND"), a);
                        }
                        var c = (n[o] = { exports: {} });
                        t[o][0].call(
                            c.exports,
                            function (e) {
                                return s(t[o][1][e] || e);
                            },
                            c,
                            c.exports,
                            e,
                            t,
                            n,
                            r
                        );
                    }
                    return n[o].exports;
                }
                for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
                return s;
            })(
                {
                    1: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                var n;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (
                                        Array.isArray(e) ||
                                        (n = (function (e, t) {
                                            if (!e) return;
                                            if ("string" == typeof e) return s(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                        })(e)) ||
                                        (t && e && "number" == typeof e.length)
                                    ) {
                                        n && (e = n);
                                        var r = 0,
                                            i = function () {};
                                        return {
                                            s: i,
                                            n: function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: i,
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var o,
                                    l = !0,
                                    u = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return (l = e.done), e;
                                    },
                                    e: function (e) {
                                        (u = !0), (o = e);
                                    },
                                    f: function () {
                                        try {
                                            l || null == n.return || n.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    },
                                };
                            }
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                                return r;
                            }
                            var i = e("./Utils"),
                                o = e("./Constants"),
                                l = e("./Grammar"),
                                u = e("./URI"),
                                a = e("./Socket"),
                                c = e("./Exceptions");
                            n.settings = {
                                authorization_user: null,
                                password: null,
                                realm: null,
                                ha1: null,
                                authorization_jwt: null,
                                display_name: null,
                                uri: null,
                                contact_uri: null,
                                instance_id: null,
                                use_preloaded_route: !1,
                                session_timers: !0,
                                session_timers_refresh_method: o.UPDATE,
                                session_timers_force_refresher: !1,
                                no_answer_timeout: 60,
                                register: !0,
                                register_expires: 600,
                                registrar_server: null,
                                sockets: null,
                                connection_recovery_max_interval: o.CONNECTION_RECOVERY_MAX_INTERVAL,
                                connection_recovery_min_interval: o.CONNECTION_RECOVERY_MIN_INTERVAL,
                                via_host: "".concat(i.createRandomToken(12), ".invalid"),
                            };
                            var h = {
                                mandatory: {
                                    sockets: function (e) {
                                        var t = [];
                                        if (a.isSocket(e)) t.push({ socket: e });
                                        else {
                                            if (!Array.isArray(e) || !e.length) return;
                                            var n,
                                                s = r(e);
                                            try {
                                                for (s.s(); !(n = s.n()).done; ) {
                                                    var i = n.value;
                                                    Object.prototype.hasOwnProperty.call(i, "socket") && a.isSocket(i.socket) ? t.push(i) : a.isSocket(i) && t.push({ socket: i });
                                                }
                                            } catch (e) {
                                                s.e(e);
                                            } finally {
                                                s.f();
                                            }
                                        }
                                        return t;
                                    },
                                    uri: function (e) {
                                        /^sip:/i.test(e) || (e = "".concat(o.SIP, ":").concat(e));
                                        var t = u.parse(e);
                                        return t && t.user ? t : void 0;
                                    },
                                },
                                optional: {
                                    authorization_user: function (e) {
                                        return -1 === l.parse('"'.concat(e, '"'), "quoted_string") ? void 0 : e;
                                    },
                                    authorization_jwt: function (e) {
                                        if ("string" == typeof e) return e;
                                    },
                                    user_agent: function (e) {
                                        if ("string" == typeof e) return e;
                                    },
                                    connection_recovery_max_interval: function (e) {
                                        if (i.isDecimal(e)) {
                                            var t = Number(e);
                                            if (t > 0) return t;
                                        }
                                    },
                                    connection_recovery_min_interval: function (e) {
                                        if (i.isDecimal(e)) {
                                            var t = Number(e);
                                            if (t > 0) return t;
                                        }
                                    },
                                    contact_uri: function (e) {
                                        if ("string" == typeof e) {
                                            var t = l.parse(e, "SIP_URI");
                                            if (-1 !== t) return t;
                                        }
                                    },
                                    display_name: function (e) {
                                        return e;
                                    },
                                    instance_id: function (e) {
                                        return /^uuid:/i.test(e) && (e = e.substr(5)), -1 === l.parse(e, "uuid") ? void 0 : e;
                                    },
                                    no_answer_timeout: function (e) {
                                        if (i.isDecimal(e)) {
                                            var t = Number(e);
                                            if (t > 0) return t;
                                        }
                                    },
                                    session_timers: function (e) {
                                        if ("boolean" == typeof e) return e;
                                    },
                                    session_timers_refresh_method: function (e) {
                                        if ("string" == typeof e && ((e = e.toUpperCase()) === o.INVITE || e === o.UPDATE)) return e;
                                    },
                                    session_timers_force_refresher: function (e) {
                                        if ("boolean" == typeof e) return e;
                                    },
                                    password: function (e) {
                                        return String(e);
                                    },
                                    realm: function (e) {
                                        return String(e);
                                    },
                                    ha1: function (e) {
                                        return String(e);
                                    },
                                    register: function (e) {
                                        if ("boolean" == typeof e) return e;
                                    },
                                    register_expires: function (e) {
                                        if (i.isDecimal(e)) {
                                            var t = Number(e);
                                            if (t > 0) return t;
                                        }
                                    },
                                    registrar_server: function (e) {
                                        /^sip:/i.test(e) || (e = "".concat(o.SIP, ":").concat(e));
                                        var t = u.parse(e);
                                        return t ? (t.user ? void 0 : t) : void 0;
                                    },
                                    use_preloaded_route: function (e) {
                                        if ("boolean" == typeof e) return e;
                                    },
                                },
                            };
                            n.load = function (e, t) {
                                for (var n in h.mandatory) {
                                    if (!t.hasOwnProperty(n)) throw new c.ConfigurationError(n);
                                    var r = t[n],
                                        s = h.mandatory[n](r);
                                    if (void 0 === s) throw new c.ConfigurationError(n, r);
                                    e[n] = s;
                                }
                                for (var o in h.optional)
                                    if (t.hasOwnProperty(o)) {
                                        var l = t[o];
                                        if (i.isEmpty(l)) continue;
                                        var u = h.optional[o](l);
                                        if (void 0 === u) throw new c.ConfigurationError(o, l);
                                        e[o] = u;
                                    }
                            };
                        },
                        { "./Constants": 2, "./Exceptions": 6, "./Grammar": 7, "./Socket": 20, "./URI": 25, "./Utils": 26 },
                    ],
                    2: [
                        function (e, t, n) {
                            "use strict";
                            var r = e("../package.json");
                            t.exports = {
                                USER_AGENT: "".concat(r.title, " ").concat(r.version),
                                SIP: "sip",
                                SIPS: "sips",
                                causes: {
                                    CONNECTION_ERROR: "Connection Error",
                                    REQUEST_TIMEOUT: "Request Timeout",
                                    SIP_FAILURE_CODE: "SIP Failure Code",
                                    INTERNAL_ERROR: "Internal Error",
                                    BUSY: "Busy",
                                    REJECTED: "Rejected",
                                    REDIRECTED: "Redirected",
                                    UNAVAILABLE: "Unavailable",
                                    NOT_FOUND: "Not Found",
                                    ADDRESS_INCOMPLETE: "Address Incomplete",
                                    INCOMPATIBLE_SDP: "Incompatible SDP",
                                    MISSING_SDP: "Missing SDP",
                                    AUTHENTICATION_ERROR: "Authentication Error",
                                    BYE: "Terminated",
                                    WEBRTC_ERROR: "WebRTC Error",
                                    CANCELED: "Canceled",
                                    NO_ANSWER: "No Answer",
                                    EXPIRES: "Expires",
                                    NO_ACK: "No ACK",
                                    DIALOG_ERROR: "Dialog Error",
                                    USER_DENIED_MEDIA_ACCESS: "User Denied Media Access",
                                    BAD_MEDIA_DESCRIPTION: "Bad Media Description",
                                    RTP_TIMEOUT: "RTP Timeout",
                                },
                                SIP_ERROR_CAUSES: {
                                    REDIRECTED: [300, 301, 302, 305, 380],
                                    BUSY: [486, 600],
                                    REJECTED: [403, 603],
                                    NOT_FOUND: [404, 604],
                                    UNAVAILABLE: [480, 410, 408, 430],
                                    ADDRESS_INCOMPLETE: [484, 424],
                                    INCOMPATIBLE_SDP: [488, 606],
                                    AUTHENTICATION_ERROR: [401, 407],
                                },
                                ACK: "ACK",
                                BYE: "BYE",
                                CANCEL: "CANCEL",
                                INFO: "INFO",
                                INVITE: "INVITE",
                                MESSAGE: "MESSAGE",
                                NOTIFY: "NOTIFY",
                                OPTIONS: "OPTIONS",
                                REGISTER: "REGISTER",
                                REFER: "REFER",
                                UPDATE: "UPDATE",
                                SUBSCRIBE: "SUBSCRIBE",
                                DTMF_TRANSPORT: { INFO: "INFO", RFC2833: "RFC2833" },
                                REASON_PHRASE: {
                                    100: "Trying",
                                    180: "Ringing",
                                    181: "Call Is Being Forwarded",
                                    182: "Queued",
                                    183: "Session Progress",
                                    199: "Early Dialog Terminated",
                                    200: "OK",
                                    202: "Accepted",
                                    204: "No Notification",
                                    300: "Multiple Choices",
                                    301: "Moved Permanently",
                                    302: "Moved Temporarily",
                                    305: "Use Proxy",
                                    380: "Alternative Service",
                                    400: "Bad Request",
                                    401: "Unauthorized",
                                    402: "Payment Required",
                                    403: "Forbidden",
                                    404: "Not Found",
                                    405: "Method Not Allowed",
                                    406: "Not Acceptable",
                                    407: "Proxy Authentication Required",
                                    408: "Request Timeout",
                                    410: "Gone",
                                    412: "Conditional Request Failed",
                                    413: "Request Entity Too Large",
                                    414: "Request-URI Too Long",
                                    415: "Unsupported Media Type",
                                    416: "Unsupported URI Scheme",
                                    417: "Unknown Resource-Priority",
                                    420: "Bad Extension",
                                    421: "Extension Required",
                                    422: "Session Interval Too Small",
                                    423: "Interval Too Brief",
                                    424: "Bad Location Information",
                                    428: "Use Identity Header",
                                    429: "Provide Referrer Identity",
                                    430: "Flow Failed",
                                    433: "Anonymity Disallowed",
                                    436: "Bad Identity-Info",
                                    437: "Unsupported Certificate",
                                    438: "Invalid Identity Header",
                                    439: "First Hop Lacks Outbound Support",
                                    440: "Max-Breadth Exceeded",
                                    469: "Bad Info Package",
                                    470: "Consent Needed",
                                    478: "Unresolvable Destination",
                                    480: "Temporarily Unavailable",
                                    481: "Call/Transaction Does Not Exist",
                                    482: "Loop Detected",
                                    483: "Too Many Hops",
                                    484: "Address Incomplete",
                                    485: "Ambiguous",
                                    486: "Busy Here",
                                    487: "Request Terminated",
                                    488: "Not Acceptable Here",
                                    489: "Bad Event",
                                    491: "Request Pending",
                                    493: "Undecipherable",
                                    494: "Security Agreement Required",
                                    500: "JsSIP Internal Error",
                                    501: "Not Implemented",
                                    502: "Bad Gateway",
                                    503: "Service Unavailable",
                                    504: "Server Time-out",
                                    505: "Version Not Supported",
                                    513: "Message Too Large",
                                    580: "Precondition Failure",
                                    600: "Busy Everywhere",
                                    603: "Decline",
                                    604: "Does Not Exist Anywhere",
                                    606: "Not Acceptable",
                                },
                                ALLOWED_METHODS: "INVITE,ACK,CANCEL,BYE,UPDATE,MESSAGE,OPTIONS,REFER,INFO,NOTIFY",
                                ACCEPTED_BODY_TYPES: "application/sdp, application/dtmf-relay",
                                MAX_FORWARDS: 69,
                                SESSION_EXPIRES: 90,
                                MIN_SESSION_EXPIRES: 60,
                                CONNECTION_RECOVERY_MAX_INTERVAL: 30,
                                CONNECTION_RECOVERY_MIN_INTERVAL: 2,
                            };
                        },
                        { "../package.json": 38 },
                    ],
                    3: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }
                            function s(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var i = e("./SIPMessage"),
                                o = e("./Constants"),
                                l = e("./Transactions"),
                                u = e("./Dialog/RequestSender"),
                                a = e("./Utils"),
                                c = e("debug")("JsSIP:Dialog"),
                                h = { STATUS_EARLY: 1, STATUS_CONFIRMED: 2 };
                            t.exports = (function () {
                                function e(t, n, s) {
                                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.STATUS_CONFIRMED;
                                    if ((r(this, e), (this._owner = t), (this._ua = t._ua), (this._uac_pending_reply = !1), (this._uas_pending_reply = !1), !n.hasHeader("contact")))
                                        return { error: "unable to create a Dialog without Contact header field" };
                                    n instanceof i.IncomingResponse && (o = n.status_code < 200 ? h.STATUS_EARLY : h.STATUS_CONFIRMED);
                                    var l = n.parseHeader("contact");
                                    "UAS" === s
                                        ? ((this._id = {
                                              call_id: n.call_id,
                                              local_tag: n.to_tag,
                                              remote_tag: n.from_tag,
                                              toString: function () {
                                                  return this.call_id + this.local_tag + this.remote_tag;
                                              },
                                          }),
                                          (this._state = o),
                                          (this._remote_seqnum = n.cseq),
                                          (this._local_uri = n.parseHeader("to").uri),
                                          (this._remote_uri = n.parseHeader("from").uri),
                                          (this._remote_target = l.uri),
                                          (this._route_set = n.getHeaders("record-route")),
                                          (this._ack_seqnum = this._remote_seqnum))
                                        : "UAC" === s &&
                                          ((this._id = {
                                              call_id: n.call_id,
                                              local_tag: n.from_tag,
                                              remote_tag: n.to_tag,
                                              toString: function () {
                                                  return this.call_id + this.local_tag + this.remote_tag;
                                              },
                                          }),
                                          (this._state = o),
                                          (this._local_seqnum = n.cseq),
                                          (this._local_uri = n.parseHeader("from").uri),
                                          (this._remote_uri = n.parseHeader("to").uri),
                                          (this._remote_target = l.uri),
                                          (this._route_set = n.getHeaders("record-route").reverse()),
                                          (this._ack_seqnum = null)),
                                        this._ua.newDialog(this),
                                        c("new ".concat(s, " dialog created with status ").concat(this._state === h.STATUS_EARLY ? "EARLY" : "CONFIRMED"));
                                }
                                var t, n, f;
                                return (
                                    (t = e),
                                    (f = [
                                        {
                                            key: "C",
                                            get: function () {
                                                return h;
                                            },
                                        },
                                    ]),
                                    (n = [
                                        {
                                            key: "id",
                                            get: function () {
                                                return this._id;
                                            },
                                        },
                                        {
                                            key: "local_seqnum",
                                            get: function () {
                                                return this._local_seqnum;
                                            },
                                            set: function (e) {
                                                this._local_seqnum = e;
                                            },
                                        },
                                        {
                                            key: "owner",
                                            get: function () {
                                                return this._owner;
                                            },
                                        },
                                        {
                                            key: "uac_pending_reply",
                                            get: function () {
                                                return this._uac_pending_reply;
                                            },
                                            set: function (e) {
                                                this._uac_pending_reply = e;
                                            },
                                        },
                                        {
                                            key: "uas_pending_reply",
                                            get: function () {
                                                return this._uas_pending_reply;
                                            },
                                        },
                                        {
                                            key: "update",
                                            value: function (e, t) {
                                                (this._state = h.STATUS_CONFIRMED), c("dialog ".concat(this._id.toString(), "  changed to CONFIRMED state")), "UAC" === t && (this._route_set = e.getHeaders("record-route").reverse());
                                            },
                                        },
                                        {
                                            key: "terminate",
                                            value: function () {
                                                c("dialog ".concat(this._id.toString(), " deleted")), this._ua.destroyDialog(this);
                                            },
                                        },
                                        {
                                            key: "sendRequest",
                                            value: function (e) {
                                                var t = this,
                                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                    r = a.cloneArray(n.extraHeaders),
                                                    s = a.cloneObject(n.eventHandlers),
                                                    i = n.body || null,
                                                    o = this._createRequest(e, r, i);
                                                s.onAuthenticated = function () {
                                                    t._local_seqnum += 1;
                                                };
                                                var l = new u(this, o, s);
                                                return l.send(), o;
                                            },
                                        },
                                        {
                                            key: "receiveRequest",
                                            value: function (e) {
                                                this._checkInDialogRequest(e) && (e.method === o.ACK && null !== this._ack_seqnum ? (this._ack_seqnum = null) : e.method === o.INVITE && (this._ack_seqnum = e.cseq), this._owner.receiveRequest(e));
                                            },
                                        },
                                        {
                                            key: "_createRequest",
                                            value: function (e, t, n) {
                                                (t = a.cloneArray(t)), this._local_seqnum || (this._local_seqnum = Math.floor(1e4 * Math.random()));
                                                var r = e === o.CANCEL || e === o.ACK ? this._local_seqnum : (this._local_seqnum += 1);
                                                return new i.OutgoingRequest(
                                                    e,
                                                    this._remote_target,
                                                    this._ua,
                                                    { cseq: r, call_id: this._id.call_id, from_uri: this._local_uri, from_tag: this._id.local_tag, to_uri: this._remote_uri, to_tag: this._id.remote_tag, route_set: this._route_set },
                                                    t,
                                                    n
                                                );
                                            },
                                        },
                                        {
                                            key: "_checkInDialogRequest",
                                            value: function (e) {
                                                var t = this;
                                                if (this._remote_seqnum)
                                                    if (e.cseq < this._remote_seqnum) {
                                                        if (e.method !== o.ACK) return e.reply(500), !1;
                                                        if (null === this._ack_seqnum || e.cseq !== this._ack_seqnum) return !1;
                                                    } else e.cseq > this._remote_seqnum && (this._remote_seqnum = e.cseq);
                                                else this._remote_seqnum = e.cseq;
                                                if (e.method === o.INVITE || (e.method === o.UPDATE && e.body)) {
                                                    if (!0 === this._uac_pending_reply) e.reply(491);
                                                    else {
                                                        if (!0 === this._uas_pending_reply) {
                                                            var n = 1 + ((10 * Math.random()) | 0);
                                                            return e.reply(500, null, ["Retry-After:".concat(n)]), !1;
                                                        }
                                                        (this._uas_pending_reply = !0),
                                                            e.server_transaction.on("stateChanged", function n() {
                                                                (e.server_transaction.state !== l.C.STATUS_ACCEPTED && e.server_transaction.state !== l.C.STATUS_COMPLETED && e.server_transaction.state !== l.C.STATUS_TERMINATED) ||
                                                                    (e.server_transaction.removeListener("stateChanged", n), (t._uas_pending_reply = !1));
                                                            });
                                                    }
                                                    e.hasHeader("contact") &&
                                                        e.server_transaction.on("stateChanged", function () {
                                                            e.server_transaction.state === l.C.STATUS_ACCEPTED && (t._remote_target = e.parseHeader("contact").uri);
                                                        });
                                                } else
                                                    e.method === o.NOTIFY &&
                                                        e.hasHeader("contact") &&
                                                        e.server_transaction.on("stateChanged", function () {
                                                            e.server_transaction.state === l.C.STATUS_COMPLETED && (t._remote_target = e.parseHeader("contact").uri);
                                                        });
                                                return !0;
                                            },
                                        },
                                    ]) && s(t.prototype, n),
                                    f && s(t, f),
                                    e
                                );
                            })();
                        },
                        { "./Constants": 2, "./Dialog/RequestSender": 4, "./SIPMessage": 19, "./Transactions": 22, "./Utils": 26, debug: 29 },
                    ],
                    4: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var s = e("../Constants"),
                                i = e("../Transactions"),
                                o = e("../RTCSession"),
                                l = e("../RequestSender"),
                                u = { onRequestTimeout: function () {}, onTransportError: function () {}, onSuccessResponse: function () {}, onErrorResponse: function () {}, onAuthenticated: function () {}, onDialogError: function () {} };
                            t.exports = (function () {
                                function e(t, n, r) {
                                    for (var s in ((function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, e),
                                    (this._dialog = t),
                                    (this._ua = t._ua),
                                    (this._request = n),
                                    (this._eventHandlers = r),
                                    (this._reattempt = !1),
                                    (this._reattemptTimer = null),
                                    u))
                                        Object.prototype.hasOwnProperty.call(u, s) && (this._eventHandlers[s] || (this._eventHandlers[s] = u[s]));
                                }
                                var t, n, a;
                                return (
                                    (t = e),
                                    (n = [
                                        {
                                            key: "request",
                                            get: function () {
                                                return this._request;
                                            },
                                        },
                                        {
                                            key: "send",
                                            value: function () {
                                                var e = this,
                                                    t = new l(this._ua, this._request, {
                                                        onRequestTimeout: function () {
                                                            e._eventHandlers.onRequestTimeout();
                                                        },
                                                        onTransportError: function () {
                                                            e._eventHandlers.onTransportError();
                                                        },
                                                        onAuthenticated: function (t) {
                                                            e._eventHandlers.onAuthenticated(t);
                                                        },
                                                        onReceiveResponse: function (t) {
                                                            e._receiveResponse(t);
                                                        },
                                                    });
                                                t.send(),
                                                    (this._request.method === s.INVITE || (this._request.method === s.UPDATE && this._request.body)) &&
                                                        t.clientTransaction.state !== i.C.STATUS_TERMINATED &&
                                                        ((this._dialog.uac_pending_reply = !0),
                                                        t.clientTransaction.on("stateChanged", function n() {
                                                            (t.clientTransaction.state !== i.C.STATUS_ACCEPTED && t.clientTransaction.state !== i.C.STATUS_COMPLETED && t.clientTransaction.state !== i.C.STATUS_TERMINATED) ||
                                                                (t.clientTransaction.removeListener("stateChanged", n), (e._dialog.uac_pending_reply = !1));
                                                        }));
                                            },
                                        },
                                        {
                                            key: "_receiveResponse",
                                            value: function (e) {
                                                var t = this;
                                                408 === e.status_code || 481 === e.status_code
                                                    ? this._eventHandlers.onDialogError(e)
                                                    : e.method === s.INVITE && 491 === e.status_code
                                                    ? this._reattempt
                                                        ? e.status_code >= 200 && e.status_code < 300
                                                            ? this._eventHandlers.onSuccessResponse(e)
                                                            : e.status_code >= 300 && this._eventHandlers.onErrorResponse(e)
                                                        : ((this._request.cseq = this._dialog.local_seqnum += 1),
                                                          (this._reattemptTimer = setTimeout(function () {
                                                              t._dialog.owner.status !== o.C.STATUS_TERMINATED && ((t._reattempt = !0), t._request_sender.send());
                                                          }, 1e3)))
                                                    : e.status_code >= 200 && e.status_code < 300
                                                    ? this._eventHandlers.onSuccessResponse(e)
                                                    : e.status_code >= 300 && this._eventHandlers.onErrorResponse(e);
                                            },
                                        },
                                    ]) && r(t.prototype, n),
                                    a && r(t, a),
                                    e
                                );
                            })();
                        },
                        { "../Constants": 2, "../RTCSession": 12, "../RequestSender": 18, "../Transactions": 22 },
                    ],
                    5: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var s = e("./Utils"),
                                i = e("debug")("JsSIP:DigestAuthentication"),
                                o = e("debug")("JsSIP:ERROR:DigestAuthentication");
                            (o.log = console.warn.bind(console)),
                                (t.exports = (function () {
                                    function e(t) {
                                        !(function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, e),
                                            (this._credentials = t),
                                            (this._cnonce = null),
                                            (this._nc = 0),
                                            (this._ncHex = "00000000"),
                                            (this._algorithm = null),
                                            (this._realm = null),
                                            (this._nonce = null),
                                            (this._opaque = null),
                                            (this._stale = null),
                                            (this._qop = null),
                                            (this._method = null),
                                            (this._uri = null),
                                            (this._ha1 = null),
                                            (this._response = null);
                                    }
                                    var t, n, l;
                                    return (
                                        (t = e),
                                        (n = [
                                            {
                                                key: "get",
                                                value: function (e) {
                                                    switch (e) {
                                                        case "realm":
                                                            return this._realm;
                                                        case "ha1":
                                                            return this._ha1;
                                                        default:
                                                            return void o('get() | cannot get "%s" parameter', e);
                                                    }
                                                },
                                            },
                                            {
                                                key: "authenticate",
                                                value: function (e, t) {
                                                    var n = e.method,
                                                        r = e.ruri,
                                                        l = e.body,
                                                        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                                    if (((this._algorithm = t.algorithm), (this._realm = t.realm), (this._nonce = t.nonce), (this._opaque = t.opaque), (this._stale = t.stale), this._algorithm)) {
                                                        if ("MD5" !== this._algorithm) return o('authenticate() | challenge with Digest algorithm different than "MD5", authentication aborted'), !1;
                                                    } else this._algorithm = "MD5";
                                                    if (!this._nonce) return o("authenticate() | challenge without Digest nonce, authentication aborted"), !1;
                                                    if (!this._realm) return o("authenticate() | challenge without Digest realm, authentication aborted"), !1;
                                                    if (!this._credentials.password) {
                                                        if (!this._credentials.ha1) return o("authenticate() | no plain SIP password nor ha1 provided, authentication aborted"), !1;
                                                        if (this._credentials.realm !== this._realm)
                                                            return (
                                                                o('authenticate() | no plain SIP password, and stored `realm` does not match the given `realm`, cannot authenticate [stored:"%s", given:"%s"]', this._credentials.realm, this._realm),
                                                                !1
                                                            );
                                                    }
                                                    if (t.qop)
                                                        if (t.qop.indexOf("auth-int") > -1) this._qop = "auth-int";
                                                        else {
                                                            if (!(t.qop.indexOf("auth") > -1)) return o('authenticate() | challenge without Digest qop different than "auth" or "auth-int", authentication aborted'), !1;
                                                            this._qop = "auth";
                                                        }
                                                    else this._qop = null;
                                                    (this._method = n), (this._uri = r), (this._cnonce = u || s.createRandomToken(12)), (this._nc += 1);
                                                    var a,
                                                        c,
                                                        h = Number(this._nc).toString(16);
                                                    return (
                                                        (this._ncHex = "00000000".substr(0, 8 - h.length) + h),
                                                        4294967296 === this._nc && ((this._nc = 1), (this._ncHex = "00000001")),
                                                        this._credentials.password
                                                            ? (this._ha1 = s.calculateMD5("".concat(this._credentials.username, ":").concat(this._realm, ":").concat(this._credentials.password)))
                                                            : (this._ha1 = this._credentials.ha1),
                                                        "auth" === this._qop
                                                            ? ((a = "".concat(this._method, ":").concat(this._uri)),
                                                              (c = s.calculateMD5(a)),
                                                              i('authenticate() | using qop=auth [a2:"%s"]', a),
                                                              (this._response = s.calculateMD5("".concat(this._ha1, ":").concat(this._nonce, ":").concat(this._ncHex, ":").concat(this._cnonce, ":auth:").concat(c))))
                                                            : "auth-int" === this._qop
                                                            ? ((a = ""
                                                                  .concat(this._method, ":")
                                                                  .concat(this._uri, ":")
                                                                  .concat(s.calculateMD5(l || ""))),
                                                              (c = s.calculateMD5(a)),
                                                              i('authenticate() | using qop=auth-int [a2:"%s"]', a),
                                                              (this._response = s.calculateMD5("".concat(this._ha1, ":").concat(this._nonce, ":").concat(this._ncHex, ":").concat(this._cnonce, ":auth-int:").concat(c))))
                                                            : null === this._qop &&
                                                              ((a = "".concat(this._method, ":").concat(this._uri)),
                                                              (c = s.calculateMD5(a)),
                                                              i('authenticate() | using qop=null [a2:"%s"]', a),
                                                              (this._response = s.calculateMD5("".concat(this._ha1, ":").concat(this._nonce, ":").concat(c)))),
                                                        i("authenticate() | response generated"),
                                                        !0
                                                    );
                                                },
                                            },
                                            {
                                                key: "toString",
                                                value: function () {
                                                    var e = [];
                                                    if (!this._response) throw new Error("response field does not exist, cannot generate Authorization header");
                                                    return (
                                                        e.push("algorithm=".concat(this._algorithm)),
                                                        e.push('username="'.concat(this._credentials.username, '"')),
                                                        e.push('realm="'.concat(this._realm, '"')),
                                                        e.push('nonce="'.concat(this._nonce, '"')),
                                                        e.push('uri="'.concat(this._uri, '"')),
                                                        e.push('response="'.concat(this._response, '"')),
                                                        this._opaque && e.push('opaque="'.concat(this._opaque, '"')),
                                                        this._qop && (e.push("qop=".concat(this._qop)), e.push('cnonce="'.concat(this._cnonce, '"')), e.push("nc=".concat(this._ncHex))),
                                                        "Digest ".concat(e.join(", "))
                                                    );
                                                },
                                            },
                                        ]) && r(t.prototype, n),
                                        l && r(t, l),
                                        e
                                    );
                                })());
                        },
                        { "./Utils": 26, debug: 29 },
                    ],
                    6: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }
                            function i(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && h(e, t);
                            }
                            function o(e) {
                                var t = c();
                                return function () {
                                    var n,
                                        r = f(e);
                                    if (t) {
                                        var s = f(this).constructor;
                                        n = Reflect.construct(r, arguments, s);
                                    } else n = r.apply(this, arguments);
                                    return l(this, n);
                                };
                            }
                            function l(e, t) {
                                return !t || ("object" !== r(t) && "function" != typeof t)
                                    ? (function (e) {
                                          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                          return e;
                                      })(e)
                                    : t;
                            }
                            function u(e) {
                                var t = "function" == typeof Map ? new Map() : void 0;
                                return (u = function (e) {
                                    if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                                    var n;
                                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, r);
                                    }
                                    function r() {
                                        return a(e, arguments, f(this).constructor);
                                    }
                                    return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), h(r, e);
                                })(e);
                            }
                            function a(e, t, n) {
                                return (a = c()
                                    ? Reflect.construct
                                    : function (e, t, n) {
                                          var r = [null];
                                          r.push.apply(r, t);
                                          var s = new (Function.bind.apply(e, r))();
                                          return n && h(s, n.prototype), s;
                                      }).apply(null, arguments);
                            }
                            function c() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function h(e, t) {
                                return (h =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    })(e, t);
                            }
                            function f(e) {
                                return (f = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      })(e);
                            }
                            var d = (function (e) {
                                    i(n, e);
                                    var t = o(n);
                                    function n(e, r) {
                                        var i;
                                        return (
                                            s(this, n),
                                            ((i = t.call(this)).code = 1),
                                            (i.name = "CONFIGURATION_ERROR"),
                                            (i.parameter = e),
                                            (i.value = r),
                                            (i.message = i.value ? "Invalid value ".concat(JSON.stringify(i.value), ' for parameter "').concat(i.parameter, '"') : "Missing parameter: ".concat(i.parameter)),
                                            i
                                        );
                                    }
                                    return n;
                                })(u(Error)),
                                _ = (function (e) {
                                    i(n, e);
                                    var t = o(n);
                                    function n(e) {
                                        var r;
                                        return s(this, n), ((r = t.call(this)).code = 2), (r.name = "INVALID_STATE_ERROR"), (r.status = e), (r.message = "Invalid status: ".concat(e)), r;
                                    }
                                    return n;
                                })(u(Error)),
                                p = (function (e) {
                                    i(n, e);
                                    var t = o(n);
                                    function n(e) {
                                        var r;
                                        return s(this, n), ((r = t.call(this)).code = 3), (r.name = "NOT_SUPPORTED_ERROR"), (r.message = e), r;
                                    }
                                    return n;
                                })(u(Error)),
                                m = (function (e) {
                                    i(n, e);
                                    var t = o(n);
                                    function n(e) {
                                        var r;
                                        return s(this, n), ((r = t.call(this)).code = 4), (r.name = "NOT_READY_ERROR"), (r.message = e), r;
                                    }
                                    return n;
                                })(u(Error));
                            t.exports = { ConfigurationError: d, InvalidStateError: _, NotSupportedError: p, NotReadyError: m };
                        },
                        {},
                    ],
                    7: [
                        function (e, t, n) {
                            "use strict";
                            t.exports = (function () {
                                function t(e) {
                                    return (
                                        '"' +
                                        e
                                            .replace(/\\/g, "\\\\")
                                            .replace(/"/g, '\\"')
                                            .replace(/\x08/g, "\\b")
                                            .replace(/\t/g, "\\t")
                                            .replace(/\n/g, "\\n")
                                            .replace(/\f/g, "\\f")
                                            .replace(/\r/g, "\\r")
                                            .replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g, escape) +
                                        '"'
                                    );
                                }
                                var n = {
                                    parse: function (n, r) {
                                        var s = {
                                            CRLF: a,
                                            DIGIT: c,
                                            ALPHA: h,
                                            HEXDIG: f,
                                            WSP: d,
                                            OCTET: _,
                                            DQUOTE: p,
                                            SP: m,
                                            HTAB: v,
                                            alphanum: g,
                                            reserved: y,
                                            unreserved: T,
                                            mark: C,
                                            escaped: S,
                                            LWS: E,
                                            SWS: A,
                                            HCOLON: b,
                                            TEXT_UTF8_TRIM: R,
                                            TEXT_UTF8char: w,
                                            UTF8_NONASCII: I,
                                            UTF8_CONT: O,
                                            LHEX: function () {
                                                var e;
                                                null === (e = c()) && (/^[a-f]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[a-f]")));
                                                return e;
                                            },
                                            token: k,
                                            token_nodot: N,
                                            separators: function () {
                                                var e;
                                                40 === n.charCodeAt(i) ? ((e = "("), i++) : ((e = null), u('"("'));
                                                null === e &&
                                                    (41 === n.charCodeAt(i) ? ((e = ")"), i++) : ((e = null), u('")"')),
                                                    null === e &&
                                                        (60 === n.charCodeAt(i) ? ((e = "<"), i++) : ((e = null), u('"<"')),
                                                        null === e &&
                                                            (62 === n.charCodeAt(i) ? ((e = ">"), i++) : ((e = null), u('">"')),
                                                            null === e &&
                                                                (64 === n.charCodeAt(i) ? ((e = "@"), i++) : ((e = null), u('"@"')),
                                                                null === e &&
                                                                    (44 === n.charCodeAt(i) ? ((e = ","), i++) : ((e = null), u('","')),
                                                                    null === e &&
                                                                        (59 === n.charCodeAt(i) ? ((e = ";"), i++) : ((e = null), u('";"')),
                                                                        null === e &&
                                                                            (58 === n.charCodeAt(i) ? ((e = ":"), i++) : ((e = null), u('":"')),
                                                                            null === e &&
                                                                                (92 === n.charCodeAt(i) ? ((e = "\\"), i++) : ((e = null), u('"\\\\"')),
                                                                                null === e &&
                                                                                    null === (e = p()) &&
                                                                                    (47 === n.charCodeAt(i) ? ((e = "/"), i++) : ((e = null), u('"/"')),
                                                                                    null === e &&
                                                                                        (91 === n.charCodeAt(i) ? ((e = "["), i++) : ((e = null), u('"["')),
                                                                                        null === e &&
                                                                                            (93 === n.charCodeAt(i) ? ((e = "]"), i++) : ((e = null), u('"]"')),
                                                                                            null === e &&
                                                                                                (63 === n.charCodeAt(i) ? ((e = "?"), i++) : ((e = null), u('"?"')),
                                                                                                null === e &&
                                                                                                    (61 === n.charCodeAt(i) ? ((e = "="), i++) : ((e = null), u('"="')),
                                                                                                    null === e &&
                                                                                                        (123 === n.charCodeAt(i) ? ((e = "{"), i++) : ((e = null), u('"{"')),
                                                                                                        null === e &&
                                                                                                            (125 === n.charCodeAt(i) ? ((e = "}"), i++) : ((e = null), u('"}"')), null === e && null === (e = m()) && (e = v()))))))))))))))));
                                                return e;
                                            },
                                            word: U,
                                            STAR: x,
                                            SLASH: P,
                                            EQUAL: D,
                                            LPAREN: M,
                                            RPAREN: q,
                                            RAQUOT: L,
                                            LAQUOT: H,
                                            COMMA: F,
                                            SEMI: j,
                                            COLON: G,
                                            LDQUOT: B,
                                            RDQUOT: W,
                                            comment: function e() {
                                                var t, n, r, s;
                                                if (((s = i), null !== (t = M()))) {
                                                    for (n = [], null === (r = V()) && null === (r = J()) && (r = e()); null !== r; ) n.push(r), null === (r = V()) && null === (r = J()) && (r = e());
                                                    null !== n && null !== (r = q()) ? (t = [t, n, r]) : ((t = null), (i = s));
                                                } else (t = null), (i = s);
                                                return t;
                                            },
                                            ctext: V,
                                            quoted_string: K,
                                            quoted_string_clean: Y,
                                            qdtext: z,
                                            quoted_pair: J,
                                            SIP_URI_noparams: $,
                                            SIP_URI: X,
                                            uri_scheme: Q,
                                            uri_scheme_sips: Z,
                                            uri_scheme_sip: ee,
                                            userinfo: te,
                                            user: ne,
                                            user_unreserved: re,
                                            password: se,
                                            hostport: ie,
                                            host: oe,
                                            hostname: le,
                                            domainlabel: ue,
                                            toplabel: ae,
                                            IPv6reference: ce,
                                            IPv6address: he,
                                            h16: fe,
                                            ls32: de,
                                            IPv4address: _e,
                                            dec_octet: pe,
                                            port: me,
                                            uri_parameters: ve,
                                            uri_parameter: ge,
                                            transport_param: ye,
                                            user_param: Te,
                                            method_param: Ce,
                                            ttl_param: Se,
                                            maddr_param: Ee,
                                            lr_param: Ae,
                                            other_param: be,
                                            pname: Re,
                                            pvalue: we,
                                            paramchar: Ie,
                                            param_unreserved: Oe,
                                            headers: ke,
                                            header: Ne,
                                            hname: Ue,
                                            hvalue: xe,
                                            hnv_unreserved: Pe,
                                            Request_Response: function () {
                                                var e;
                                                null === (e = ct()) && (e = De());
                                                return e;
                                            },
                                            Request_Line: De,
                                            Request_URI: Me,
                                            absoluteURI: qe,
                                            hier_part: Le,
                                            net_path: He,
                                            abs_path: Fe,
                                            opaque_part: je,
                                            uric: Ge,
                                            uric_no_slash: Be,
                                            path_segments: We,
                                            segment: Ve,
                                            param: Ke,
                                            pchar: Ye,
                                            scheme: ze,
                                            authority: Je,
                                            srvr: $e,
                                            reg_name: Xe,
                                            query: Qe,
                                            SIP_Version: Ze,
                                            INVITEm: et,
                                            ACKm: tt,
                                            OPTIONSm: nt,
                                            BYEm: rt,
                                            CANCELm: st,
                                            REGISTERm: it,
                                            SUBSCRIBEm: ot,
                                            NOTIFYm: lt,
                                            REFERm: ut,
                                            Method: at,
                                            Status_Line: ct,
                                            Status_Code: ht,
                                            extension_code: ft,
                                            Reason_Phrase: dt,
                                            Allow_Events: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = qt()))) {
                                                    for (t = [], o = i, null !== (n = F()) && null !== (r = qt()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = F()) && null !== (r = qt()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            Call_ID: function () {
                                                var e, t, r, s, o, l;
                                                (s = i),
                                                    (o = i),
                                                    null !== (e = U())
                                                        ? ((l = i),
                                                          64 === n.charCodeAt(i) ? ((t = "@"), i++) : ((t = null), u('"@"')),
                                                          null !== t && null !== (r = U()) ? (t = [t, r]) : ((t = null), (i = l)),
                                                          null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = o)))
                                                        : ((e = null), (i = o));
                                                null !== e &&
                                                    (e = (function (e) {
                                                        Fn = n.substring(i, e);
                                                    })(s));
                                                null === e && (i = s);
                                                return e;
                                            },
                                            Contact: function () {
                                                var e, t, n, r, s, o, l;
                                                if (((s = i), null === (e = x())))
                                                    if (((o = i), null !== (e = _t()))) {
                                                        for (t = [], l = i, null !== (n = F()) && null !== (r = _t()) ? (n = [n, r]) : ((n = null), (i = l)); null !== n; )
                                                            t.push(n), (l = i), null !== (n = F()) && null !== (r = _t()) ? (n = [n, r]) : ((n = null), (i = l));
                                                        null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                                    } else (e = null), (i = o);
                                                null !== e &&
                                                    (e = (function (e) {
                                                        var t, n;
                                                        for (n = Fn.multi_header.length, t = 0; t < n; t++)
                                                            if (null === Fn.multi_header[t].parsed) {
                                                                Fn = null;
                                                                break;
                                                            }
                                                        Fn = null !== Fn ? Fn.multi_header : -1;
                                                    })());
                                                null === e && (i = s);
                                                return e;
                                            },
                                            contact_param: _t,
                                            name_addr: pt,
                                            display_name: mt,
                                            contact_params: vt,
                                            c_p_q: gt,
                                            c_p_expires: yt,
                                            delta_seconds: Tt,
                                            qvalue: Ct,
                                            generic_param: St,
                                            gen_value: Et,
                                            Content_Disposition: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = At()))) {
                                                    for (t = [], o = i, null !== (n = j()) && null !== (r = bt()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = j()) && null !== (r = bt()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            disp_type: At,
                                            disp_param: bt,
                                            handling_param: Rt,
                                            Content_Encoding: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = k()))) {
                                                    for (t = [], o = i, null !== (n = F()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = F()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            Content_Length: function () {
                                                var e, t, n;
                                                if (((n = i), null !== (t = c()))) for (e = []; null !== t; ) e.push(t), (t = c());
                                                else e = null;
                                                null !== e && (e = void (Fn = parseInt(e.join(""))));
                                                null === e && (i = n);
                                                return e;
                                            },
                                            Content_Type: function () {
                                                var e, t;
                                                (t = i),
                                                    null !== (e = wt()) &&
                                                        (e = (function (e) {
                                                            Fn = n.substring(i, e);
                                                        })(t));
                                                null === e && (i = t);
                                                return e;
                                            },
                                            media_type: wt,
                                            m_type: It,
                                            discrete_type: Ot,
                                            composite_type: kt,
                                            extension_token: Nt,
                                            x_token: Ut,
                                            m_subtype: xt,
                                            m_parameter: Pt,
                                            m_value: Dt,
                                            CSeq: function () {
                                                var e, t, n, r;
                                                (r = i), null !== (e = Mt()) && null !== (t = E()) && null !== (n = at()) ? (e = [e, t, n]) : ((e = null), (i = r));
                                                return e;
                                            },
                                            CSeq_value: Mt,
                                            Expires: function () {
                                                var e, t;
                                                (t = i), null !== (e = Tt()) && (e = void (Fn = e));
                                                null === e && (i = t);
                                                return e;
                                            },
                                            Event: function () {
                                                var e, t, n, r, s, o, l;
                                                if (((s = i), (o = i), null !== (e = qt()))) {
                                                    for (t = [], l = i, null !== (n = j()) && null !== (r = St()) ? (n = [n, r]) : ((n = null), (i = l)); null !== n; )
                                                        t.push(n), (l = i), null !== (n = j()) && null !== (r = St()) ? (n = [n, r]) : ((n = null), (i = l));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                                } else (e = null), (i = o);
                                                null !== e && ((u = e[0]), (e = void (Fn.event = u.join("").toLowerCase())));
                                                var u;
                                                null === e && (i = s);
                                                return e;
                                            },
                                            event_type: qt,
                                            From: function () {
                                                var e, t, n, r, s, o, l;
                                                (s = i), (o = i), null === (e = $()) && (e = pt());
                                                if (null !== e) {
                                                    for (t = [], l = i, null !== (n = j()) && null !== (r = Lt()) ? (n = [n, r]) : ((n = null), (i = l)); null !== n; )
                                                        t.push(n), (l = i), null !== (n = j()) && null !== (r = Lt()) ? (n = [n, r]) : ((n = null), (i = l));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                                } else (e = null), (i = o);
                                                null !== e &&
                                                    (e = (function (e) {
                                                        var t = Fn.tag;
                                                        try {
                                                            (Fn = new Hn(Fn.uri, Fn.display_name, Fn.params)), t && Fn.setParam("tag", t);
                                                        } catch (e) {
                                                            Fn = -1;
                                                        }
                                                    })());
                                                null === e && (i = s);
                                                return e;
                                            },
                                            from_param: Lt,
                                            tag_param: Ht,
                                            Max_Forwards: function () {
                                                var e, t, n;
                                                if (((n = i), null !== (t = c()))) for (e = []; null !== t; ) e.push(t), (t = c());
                                                else e = null;
                                                null !== e && (e = void (Fn = parseInt(e.join(""))));
                                                null === e && (i = n);
                                                return e;
                                            },
                                            Min_Expires: function () {
                                                var e, t;
                                                (t = i), null !== (e = Tt()) && (e = void (Fn = e));
                                                null === e && (i = t);
                                                return e;
                                            },
                                            Name_Addr_Header: function () {
                                                var e, t, n, r, s, o, l, u, a, c;
                                                (u = i), (a = i), (e = []), (t = mt());
                                                for (; null !== t; ) e.push(t), (t = mt());
                                                if (null !== e)
                                                    if (null !== (t = H()))
                                                        if (null !== (n = X()))
                                                            if (null !== (r = L())) {
                                                                for (s = [], c = i, null !== (o = j()) && null !== (l = St()) ? (o = [o, l]) : ((o = null), (i = c)); null !== o; )
                                                                    s.push(o), (c = i), null !== (o = j()) && null !== (l = St()) ? (o = [o, l]) : ((o = null), (i = c));
                                                                null !== s ? (e = [e, t, n, r, s]) : ((e = null), (i = a));
                                                            } else (e = null), (i = a);
                                                        else (e = null), (i = a);
                                                    else (e = null), (i = a);
                                                else (e = null), (i = a);
                                                null !== e &&
                                                    (e = (function (e) {
                                                        try {
                                                            Fn = new Hn(Fn.uri, Fn.display_name, Fn.params);
                                                        } catch (e) {
                                                            Fn = -1;
                                                        }
                                                    })());
                                                null === e && (i = u);
                                                return e;
                                            },
                                            Proxy_Authenticate: function () {
                                                return Ft();
                                            },
                                            challenge: Ft,
                                            other_challenge: jt,
                                            auth_param: Gt,
                                            digest_cln: Bt,
                                            realm: Wt,
                                            realm_value: Vt,
                                            domain: Kt,
                                            URI: Yt,
                                            nonce: zt,
                                            nonce_value: Jt,
                                            opaque: $t,
                                            stale: Xt,
                                            algorithm: Qt,
                                            qop_options: Zt,
                                            qop_value: en,
                                            Proxy_Require: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = k()))) {
                                                    for (t = [], o = i, null !== (n = F()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = F()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            Record_Route: function () {
                                                var e, t, n, r, s, o, l;
                                                if (((s = i), (o = i), null !== (e = tn()))) {
                                                    for (t = [], l = i, null !== (n = F()) && null !== (r = tn()) ? (n = [n, r]) : ((n = null), (i = l)); null !== n; )
                                                        t.push(n), (l = i), null !== (n = F()) && null !== (r = tn()) ? (n = [n, r]) : ((n = null), (i = l));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                                } else (e = null), (i = o);
                                                null !== e &&
                                                    (e = (function (e) {
                                                        var t, n;
                                                        for (n = Fn.multi_header.length, t = 0; t < n; t++)
                                                            if (null === Fn.multi_header[t].parsed) {
                                                                Fn = null;
                                                                break;
                                                            }
                                                        Fn = null !== Fn ? Fn.multi_header : -1;
                                                    })());
                                                null === e && (i = s);
                                                return e;
                                            },
                                            rec_route: tn,
                                            Reason: function () {
                                                var e, t, r, s, o, l, a;
                                                (o = i), (l = i), "sip" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"SIP"'));
                                                null === e && (e = k());
                                                if (null !== e) {
                                                    for (t = [], a = i, null !== (r = j()) && null !== (s = nn()) ? (r = [r, s]) : ((r = null), (i = a)); null !== r; )
                                                        t.push(r), (a = i), null !== (r = j()) && null !== (s = nn()) ? (r = [r, s]) : ((r = null), (i = a));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = l));
                                                } else (e = null), (i = l);
                                                null !== e &&
                                                    (e = (function (e, t) {
                                                        if (((Fn.protocol = t.toLowerCase()), Fn.params || (Fn.params = {}), Fn.params.text && '"' === Fn.params.text[0])) {
                                                            var n = Fn.params.text;
                                                            (Fn.text = n.substring(1, n.length - 1)), delete Fn.params.text;
                                                        }
                                                    })(0, e[0]));
                                                null === e && (i = o);
                                                return e;
                                            },
                                            reason_param: nn,
                                            reason_cause: rn,
                                            Require: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = k()))) {
                                                    for (t = [], o = i, null !== (n = F()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = F()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            Route: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = sn()))) {
                                                    for (t = [], o = i, null !== (n = F()) && null !== (r = sn()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = F()) && null !== (r = sn()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            route_param: sn,
                                            Subscription_State: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = on()))) {
                                                    for (t = [], o = i, null !== (n = j()) && null !== (r = ln()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = j()) && null !== (r = ln()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            substate_value: on,
                                            subexp_params: ln,
                                            event_reason_value: un,
                                            Subject: function () {
                                                var e;
                                                return (e = null !== (e = R()) ? e : "");
                                            },
                                            Supported: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = k()))) {
                                                    for (t = [], o = i, null !== (n = F()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = F()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return (e = null !== e ? e : "");
                                            },
                                            To: function () {
                                                var e, t, n, r, s, o, l;
                                                (s = i), (o = i), null === (e = $()) && (e = pt());
                                                if (null !== e) {
                                                    for (t = [], l = i, null !== (n = j()) && null !== (r = an()) ? (n = [n, r]) : ((n = null), (i = l)); null !== n; )
                                                        t.push(n), (l = i), null !== (n = j()) && null !== (r = an()) ? (n = [n, r]) : ((n = null), (i = l));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                                } else (e = null), (i = o);
                                                null !== e &&
                                                    (e = (function (e) {
                                                        var t = Fn.tag;
                                                        try {
                                                            (Fn = new Hn(Fn.uri, Fn.display_name, Fn.params)), t && Fn.setParam("tag", t);
                                                        } catch (e) {
                                                            Fn = -1;
                                                        }
                                                    })());
                                                null === e && (i = s);
                                                return e;
                                            },
                                            to_param: an,
                                            Via: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = cn()))) {
                                                    for (t = [], o = i, null !== (n = F()) && null !== (r = cn()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = F()) && null !== (r = cn()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            via_param: cn,
                                            via_params: hn,
                                            via_ttl: fn,
                                            via_maddr: dn,
                                            via_received: _n,
                                            via_branch: pn,
                                            response_port: mn,
                                            rport: vn,
                                            sent_protocol: gn,
                                            protocol_name: yn,
                                            transport: Tn,
                                            sent_by: Cn,
                                            via_host: Sn,
                                            via_port: En,
                                            ttl: An,
                                            WWW_Authenticate: function () {
                                                return Ft();
                                            },
                                            Session_Expires: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = bn()))) {
                                                    for (t = [], o = i, null !== (n = j()) && null !== (r = Rn()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = j()) && null !== (r = Rn()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            s_e_expires: bn,
                                            s_e_params: Rn,
                                            s_e_refresher: wn,
                                            extension_header: function () {
                                                var e, t, n, r;
                                                (r = i), null !== (e = k()) && null !== (t = b()) && null !== (n = In()) ? (e = [e, t, n]) : ((e = null), (i = r));
                                                return e;
                                            },
                                            header_value: In,
                                            message_body: function () {
                                                var e, t;
                                                (e = []), (t = _());
                                                for (; null !== t; ) e.push(t), (t = _());
                                                return e;
                                            },
                                            uuid_URI: function () {
                                                var e, t, r;
                                                (r = i), "uuid:" === n.substr(i, 5) ? ((e = "uuid:"), (i += 5)) : ((e = null), u('"uuid:"'));
                                                null !== e && null !== (t = On()) ? (e = [e, t]) : ((e = null), (i = r));
                                                return e;
                                            },
                                            uuid: On,
                                            hex4: kn,
                                            hex8: Nn,
                                            hex12: Un,
                                            Refer_To: function () {
                                                var e, t, n, r, s, o, l;
                                                (s = i), (o = i), null === (e = $()) && (e = pt());
                                                if (null !== e) {
                                                    for (t = [], l = i, null !== (n = j()) && null !== (r = St()) ? (n = [n, r]) : ((n = null), (i = l)); null !== n; )
                                                        t.push(n), (l = i), null !== (n = j()) && null !== (r = St()) ? (n = [n, r]) : ((n = null), (i = l));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                                } else (e = null), (i = o);
                                                null !== e &&
                                                    (e = (function (e) {
                                                        try {
                                                            Fn = new Hn(Fn.uri, Fn.display_name, Fn.params);
                                                        } catch (e) {
                                                            Fn = -1;
                                                        }
                                                    })());
                                                null === e && (i = s);
                                                return e;
                                            },
                                            Replaces: function () {
                                                var e, t, n, r, s, o;
                                                if (((s = i), null !== (e = xn()))) {
                                                    for (t = [], o = i, null !== (n = j()) && null !== (r = Pn()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                        t.push(n), (o = i), null !== (n = j()) && null !== (r = Pn()) ? (n = [n, r]) : ((n = null), (i = o));
                                                    null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                                } else (e = null), (i = s);
                                                return e;
                                            },
                                            call_id: xn,
                                            replaces_param: Pn,
                                            to_tag: Dn,
                                            from_tag: Mn,
                                            early_flag: qn,
                                        };
                                        if (void 0 !== r) {
                                            if (void 0 === s[r]) throw new Error("Invalid rule name: " + t(r) + ".");
                                        } else r = "CRLF";
                                        var i = 0,
                                            o = 0,
                                            l = [];
                                        function u(e) {
                                            i < o || (i > o && ((o = i), (l = [])), l.push(e));
                                        }
                                        function a() {
                                            var e;
                                            return "\r\n" === n.substr(i, 2) ? ((e = "\r\n"), (i += 2)) : ((e = null), u('"\\r\\n"')), e;
                                        }
                                        function c() {
                                            var e;
                                            return /^[0-9]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[0-9]")), e;
                                        }
                                        function h() {
                                            var e;
                                            return /^[a-zA-Z]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[a-zA-Z]")), e;
                                        }
                                        function f() {
                                            var e;
                                            return /^[0-9a-fA-F]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[0-9a-fA-F]")), e;
                                        }
                                        function d() {
                                            var e;
                                            return null === (e = m()) && (e = v()), e;
                                        }
                                        function _() {
                                            var e;
                                            return /^[\0-\xFF]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[\\0-\\xFF]")), e;
                                        }
                                        function p() {
                                            var e;
                                            return /^["]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u('["]')), e;
                                        }
                                        function m() {
                                            var e;
                                            return 32 === n.charCodeAt(i) ? ((e = " "), i++) : ((e = null), u('" "')), e;
                                        }
                                        function v() {
                                            var e;
                                            return 9 === n.charCodeAt(i) ? ((e = "\t"), i++) : ((e = null), u('"\\t"')), e;
                                        }
                                        function g() {
                                            var e;
                                            return /^[a-zA-Z0-9]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[a-zA-Z0-9]")), e;
                                        }
                                        function y() {
                                            var e;
                                            return (
                                                59 === n.charCodeAt(i) ? ((e = ";"), i++) : ((e = null), u('";"')),
                                                null === e &&
                                                    (47 === n.charCodeAt(i) ? ((e = "/"), i++) : ((e = null), u('"/"')),
                                                    null === e &&
                                                        (63 === n.charCodeAt(i) ? ((e = "?"), i++) : ((e = null), u('"?"')),
                                                        null === e &&
                                                            (58 === n.charCodeAt(i) ? ((e = ":"), i++) : ((e = null), u('":"')),
                                                            null === e &&
                                                                (64 === n.charCodeAt(i) ? ((e = "@"), i++) : ((e = null), u('"@"')),
                                                                null === e &&
                                                                    (38 === n.charCodeAt(i) ? ((e = "&"), i++) : ((e = null), u('"&"')),
                                                                    null === e &&
                                                                        (61 === n.charCodeAt(i) ? ((e = "="), i++) : ((e = null), u('"="')),
                                                                        null === e &&
                                                                            (43 === n.charCodeAt(i) ? ((e = "+"), i++) : ((e = null), u('"+"')),
                                                                            null === e &&
                                                                                (36 === n.charCodeAt(i) ? ((e = "$"), i++) : ((e = null), u('"$"')), null === e && (44 === n.charCodeAt(i) ? ((e = ","), i++) : ((e = null), u('","'))))))))))),
                                                e
                                            );
                                        }
                                        function T() {
                                            var e;
                                            return null === (e = g()) && (e = C()), e;
                                        }
                                        function C() {
                                            var e;
                                            return (
                                                45 === n.charCodeAt(i) ? ((e = "-"), i++) : ((e = null), u('"-"')),
                                                null === e &&
                                                    (95 === n.charCodeAt(i) ? ((e = "_"), i++) : ((e = null), u('"_"')),
                                                    null === e &&
                                                        (46 === n.charCodeAt(i) ? ((e = "."), i++) : ((e = null), u('"."')),
                                                        null === e &&
                                                            (33 === n.charCodeAt(i) ? ((e = "!"), i++) : ((e = null), u('"!"')),
                                                            null === e &&
                                                                (126 === n.charCodeAt(i) ? ((e = "~"), i++) : ((e = null), u('"~"')),
                                                                null === e &&
                                                                    (42 === n.charCodeAt(i) ? ((e = "*"), i++) : ((e = null), u('"*"')),
                                                                    null === e &&
                                                                        (39 === n.charCodeAt(i) ? ((e = "'"), i++) : ((e = null), u('"\'"')),
                                                                        null === e && (40 === n.charCodeAt(i) ? ((e = "("), i++) : ((e = null), u('"("')), null === e && (41 === n.charCodeAt(i) ? ((e = ")"), i++) : ((e = null), u('")"')))))))))),
                                                e
                                            );
                                        }
                                        function S() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                37 === n.charCodeAt(i) ? ((e = "%"), i++) : ((e = null), u('"%"')),
                                                null !== e && null !== (t = f()) && null !== (r = f()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && (e = e.join("")),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function E() {
                                            var e, t, n, r, s, o;
                                            for (r = i, s = i, o = i, e = [], t = d(); null !== t; ) e.push(t), (t = d());
                                            if ((null !== e && null !== (t = a()) ? (e = [e, t]) : ((e = null), (i = o)), null !== (e = null !== e ? e : ""))) {
                                                if (null !== (n = d())) for (t = []; null !== n; ) t.push(n), (n = d());
                                                else t = null;
                                                null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                            } else (e = null), (i = s);
                                            return null !== e && (e = " "), null === e && (i = r), e;
                                        }
                                        function A() {
                                            var e;
                                            return (e = null !== (e = E()) ? e : "");
                                        }
                                        function b() {
                                            var e, t, r, s, o;
                                            for (s = i, o = i, e = [], null === (t = m()) && (t = v()); null !== t; ) e.push(t), null === (t = m()) && (t = v());
                                            return (
                                                null !== e ? (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')), null !== t && null !== (r = A()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && (e = ":"),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function R() {
                                            var e, t, r, s, o, l, u;
                                            if (((o = i), (l = i), null !== (t = w()))) for (e = []; null !== t; ) e.push(t), (t = w());
                                            else e = null;
                                            if (null !== e) {
                                                for (t = [], u = i, r = [], s = E(); null !== s; ) r.push(s), (s = E());
                                                for (null !== r && null !== (s = w()) ? (r = [r, s]) : ((r = null), (i = u)); null !== r; ) {
                                                    for (t.push(r), u = i, r = [], s = E(); null !== s; ) r.push(s), (s = E());
                                                    null !== r && null !== (s = w()) ? (r = [r, s]) : ((r = null), (i = u));
                                                }
                                                null !== t ? (e = [e, t]) : ((e = null), (i = l));
                                            } else (e = null), (i = l);
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return n.substring(i, e);
                                                    })(o)),
                                                null === e && (i = o),
                                                e
                                            );
                                        }
                                        function w() {
                                            var e;
                                            return /^[!-~]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[!-~]")), null === e && (e = I()), e;
                                        }
                                        function I() {
                                            var e;
                                            return /^[\x80-\uFFFF]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[\\x80-\\uFFFF]")), e;
                                        }
                                        function O() {
                                            var e;
                                            return /^[\x80-\xBF]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[\\x80-\\xBF]")), e;
                                        }
                                        function k() {
                                            var e, t, r;
                                            if (
                                                ((r = i),
                                                null === (t = g()) &&
                                                    (45 === n.charCodeAt(i) ? ((t = "-"), i++) : ((t = null), u('"-"')),
                                                    null === t &&
                                                        (46 === n.charCodeAt(i) ? ((t = "."), i++) : ((t = null), u('"."')),
                                                        null === t &&
                                                            (33 === n.charCodeAt(i) ? ((t = "!"), i++) : ((t = null), u('"!"')),
                                                            null === t &&
                                                                (37 === n.charCodeAt(i) ? ((t = "%"), i++) : ((t = null), u('"%"')),
                                                                null === t &&
                                                                    (42 === n.charCodeAt(i) ? ((t = "*"), i++) : ((t = null), u('"*"')),
                                                                    null === t &&
                                                                        (95 === n.charCodeAt(i) ? ((t = "_"), i++) : ((t = null), u('"_"')),
                                                                        null === t &&
                                                                            (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"')),
                                                                            null === t &&
                                                                                (96 === n.charCodeAt(i) ? ((t = "`"), i++) : ((t = null), u('"`"')),
                                                                                null === t &&
                                                                                    (39 === n.charCodeAt(i) ? ((t = "'"), i++) : ((t = null), u('"\'"')), null === t && (126 === n.charCodeAt(i) ? ((t = "~"), i++) : ((t = null), u('"~"')))))))))))),
                                                null !== t)
                                            )
                                                for (e = []; null !== t; )
                                                    e.push(t),
                                                        null === (t = g()) &&
                                                            (45 === n.charCodeAt(i) ? ((t = "-"), i++) : ((t = null), u('"-"')),
                                                            null === t &&
                                                                (46 === n.charCodeAt(i) ? ((t = "."), i++) : ((t = null), u('"."')),
                                                                null === t &&
                                                                    (33 === n.charCodeAt(i) ? ((t = "!"), i++) : ((t = null), u('"!"')),
                                                                    null === t &&
                                                                        (37 === n.charCodeAt(i) ? ((t = "%"), i++) : ((t = null), u('"%"')),
                                                                        null === t &&
                                                                            (42 === n.charCodeAt(i) ? ((t = "*"), i++) : ((t = null), u('"*"')),
                                                                            null === t &&
                                                                                (95 === n.charCodeAt(i) ? ((t = "_"), i++) : ((t = null), u('"_"')),
                                                                                null === t &&
                                                                                    (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"')),
                                                                                    null === t &&
                                                                                        (96 === n.charCodeAt(i) ? ((t = "`"), i++) : ((t = null), u('"`"')),
                                                                                        null === t &&
                                                                                            (39 === n.charCodeAt(i) ? ((t = "'"), i++) : ((t = null), u('"\'"')),
                                                                                            null === t && (126 === n.charCodeAt(i) ? ((t = "~"), i++) : ((t = null), u('"~"'))))))))))));
                                            else e = null;
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return n.substring(i, e);
                                                    })(r)),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function N() {
                                            var e, t, r;
                                            if (
                                                ((r = i),
                                                null === (t = g()) &&
                                                    (45 === n.charCodeAt(i) ? ((t = "-"), i++) : ((t = null), u('"-"')),
                                                    null === t &&
                                                        (33 === n.charCodeAt(i) ? ((t = "!"), i++) : ((t = null), u('"!"')),
                                                        null === t &&
                                                            (37 === n.charCodeAt(i) ? ((t = "%"), i++) : ((t = null), u('"%"')),
                                                            null === t &&
                                                                (42 === n.charCodeAt(i) ? ((t = "*"), i++) : ((t = null), u('"*"')),
                                                                null === t &&
                                                                    (95 === n.charCodeAt(i) ? ((t = "_"), i++) : ((t = null), u('"_"')),
                                                                    null === t &&
                                                                        (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"')),
                                                                        null === t &&
                                                                            (96 === n.charCodeAt(i) ? ((t = "`"), i++) : ((t = null), u('"`"')),
                                                                            null === t &&
                                                                                (39 === n.charCodeAt(i) ? ((t = "'"), i++) : ((t = null), u('"\'"')), null === t && (126 === n.charCodeAt(i) ? ((t = "~"), i++) : ((t = null), u('"~"'))))))))))),
                                                null !== t)
                                            )
                                                for (e = []; null !== t; )
                                                    e.push(t),
                                                        null === (t = g()) &&
                                                            (45 === n.charCodeAt(i) ? ((t = "-"), i++) : ((t = null), u('"-"')),
                                                            null === t &&
                                                                (33 === n.charCodeAt(i) ? ((t = "!"), i++) : ((t = null), u('"!"')),
                                                                null === t &&
                                                                    (37 === n.charCodeAt(i) ? ((t = "%"), i++) : ((t = null), u('"%"')),
                                                                    null === t &&
                                                                        (42 === n.charCodeAt(i) ? ((t = "*"), i++) : ((t = null), u('"*"')),
                                                                        null === t &&
                                                                            (95 === n.charCodeAt(i) ? ((t = "_"), i++) : ((t = null), u('"_"')),
                                                                            null === t &&
                                                                                (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"')),
                                                                                null === t &&
                                                                                    (96 === n.charCodeAt(i) ? ((t = "`"), i++) : ((t = null), u('"`"')),
                                                                                    null === t &&
                                                                                        (39 === n.charCodeAt(i) ? ((t = "'"), i++) : ((t = null), u('"\'"')),
                                                                                        null === t && (126 === n.charCodeAt(i) ? ((t = "~"), i++) : ((t = null), u('"~"')))))))))));
                                            else e = null;
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return n.substring(i, e);
                                                    })(r)),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function U() {
                                            var e, t, r;
                                            if (
                                                ((r = i),
                                                null === (t = g()) &&
                                                    (45 === n.charCodeAt(i) ? ((t = "-"), i++) : ((t = null), u('"-"')),
                                                    null === t &&
                                                        (46 === n.charCodeAt(i) ? ((t = "."), i++) : ((t = null), u('"."')),
                                                        null === t &&
                                                            (33 === n.charCodeAt(i) ? ((t = "!"), i++) : ((t = null), u('"!"')),
                                                            null === t &&
                                                                (37 === n.charCodeAt(i) ? ((t = "%"), i++) : ((t = null), u('"%"')),
                                                                null === t &&
                                                                    (42 === n.charCodeAt(i) ? ((t = "*"), i++) : ((t = null), u('"*"')),
                                                                    null === t &&
                                                                        (95 === n.charCodeAt(i) ? ((t = "_"), i++) : ((t = null), u('"_"')),
                                                                        null === t &&
                                                                            (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"')),
                                                                            null === t &&
                                                                                (96 === n.charCodeAt(i) ? ((t = "`"), i++) : ((t = null), u('"`"')),
                                                                                null === t &&
                                                                                    (39 === n.charCodeAt(i) ? ((t = "'"), i++) : ((t = null), u('"\'"')),
                                                                                    null === t &&
                                                                                        (126 === n.charCodeAt(i) ? ((t = "~"), i++) : ((t = null), u('"~"')),
                                                                                        null === t &&
                                                                                            (40 === n.charCodeAt(i) ? ((t = "("), i++) : ((t = null), u('"("')),
                                                                                            null === t &&
                                                                                                (41 === n.charCodeAt(i) ? ((t = ")"), i++) : ((t = null), u('")"')),
                                                                                                null === t &&
                                                                                                    (60 === n.charCodeAt(i) ? ((t = "<"), i++) : ((t = null), u('"<"')),
                                                                                                    null === t &&
                                                                                                        (62 === n.charCodeAt(i) ? ((t = ">"), i++) : ((t = null), u('">"')),
                                                                                                        null === t &&
                                                                                                            (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                                                            null === t &&
                                                                                                                (92 === n.charCodeAt(i) ? ((t = "\\"), i++) : ((t = null), u('"\\\\"')),
                                                                                                                null === t &&
                                                                                                                    null === (t = p()) &&
                                                                                                                    (47 === n.charCodeAt(i) ? ((t = "/"), i++) : ((t = null), u('"/"')),
                                                                                                                    null === t &&
                                                                                                                        (91 === n.charCodeAt(i) ? ((t = "["), i++) : ((t = null), u('"["')),
                                                                                                                        null === t &&
                                                                                                                            (93 === n.charCodeAt(i) ? ((t = "]"), i++) : ((t = null), u('"]"')),
                                                                                                                            null === t &&
                                                                                                                                (63 === n.charCodeAt(i) ? ((t = "?"), i++) : ((t = null), u('"?"')),
                                                                                                                                null === t &&
                                                                                                                                    (123 === n.charCodeAt(i) ? ((t = "{"), i++) : ((t = null), u('"{"')),
                                                                                                                                    null === t && (125 === n.charCodeAt(i) ? ((t = "}"), i++) : ((t = null), u('"}"')))))))))))))))))))))))),
                                                null !== t)
                                            )
                                                for (e = []; null !== t; )
                                                    e.push(t),
                                                        null === (t = g()) &&
                                                            (45 === n.charCodeAt(i) ? ((t = "-"), i++) : ((t = null), u('"-"')),
                                                            null === t &&
                                                                (46 === n.charCodeAt(i) ? ((t = "."), i++) : ((t = null), u('"."')),
                                                                null === t &&
                                                                    (33 === n.charCodeAt(i) ? ((t = "!"), i++) : ((t = null), u('"!"')),
                                                                    null === t &&
                                                                        (37 === n.charCodeAt(i) ? ((t = "%"), i++) : ((t = null), u('"%"')),
                                                                        null === t &&
                                                                            (42 === n.charCodeAt(i) ? ((t = "*"), i++) : ((t = null), u('"*"')),
                                                                            null === t &&
                                                                                (95 === n.charCodeAt(i) ? ((t = "_"), i++) : ((t = null), u('"_"')),
                                                                                null === t &&
                                                                                    (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"')),
                                                                                    null === t &&
                                                                                        (96 === n.charCodeAt(i) ? ((t = "`"), i++) : ((t = null), u('"`"')),
                                                                                        null === t &&
                                                                                            (39 === n.charCodeAt(i) ? ((t = "'"), i++) : ((t = null), u('"\'"')),
                                                                                            null === t &&
                                                                                                (126 === n.charCodeAt(i) ? ((t = "~"), i++) : ((t = null), u('"~"')),
                                                                                                null === t &&
                                                                                                    (40 === n.charCodeAt(i) ? ((t = "("), i++) : ((t = null), u('"("')),
                                                                                                    null === t &&
                                                                                                        (41 === n.charCodeAt(i) ? ((t = ")"), i++) : ((t = null), u('")"')),
                                                                                                        null === t &&
                                                                                                            (60 === n.charCodeAt(i) ? ((t = "<"), i++) : ((t = null), u('"<"')),
                                                                                                            null === t &&
                                                                                                                (62 === n.charCodeAt(i) ? ((t = ">"), i++) : ((t = null), u('">"')),
                                                                                                                null === t &&
                                                                                                                    (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                                                                    null === t &&
                                                                                                                        (92 === n.charCodeAt(i) ? ((t = "\\"), i++) : ((t = null), u('"\\\\"')),
                                                                                                                        null === t &&
                                                                                                                            null === (t = p()) &&
                                                                                                                            (47 === n.charCodeAt(i) ? ((t = "/"), i++) : ((t = null), u('"/"')),
                                                                                                                            null === t &&
                                                                                                                                (91 === n.charCodeAt(i) ? ((t = "["), i++) : ((t = null), u('"["')),
                                                                                                                                null === t &&
                                                                                                                                    (93 === n.charCodeAt(i) ? ((t = "]"), i++) : ((t = null), u('"]"')),
                                                                                                                                    null === t &&
                                                                                                                                        (63 === n.charCodeAt(i) ? ((t = "?"), i++) : ((t = null), u('"?"')),
                                                                                                                                        null === t &&
                                                                                                                                            (123 === n.charCodeAt(i) ? ((t = "{"), i++) : ((t = null), u('"{"')),
                                                                                                                                            null === t && (125 === n.charCodeAt(i) ? ((t = "}"), i++) : ((t = null), u('"}"'))))))))))))))))))))))));
                                            else e = null;
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return n.substring(i, e);
                                                    })(r)),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function x() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = A()) ? (42 === n.charCodeAt(i) ? ((t = "*"), i++) : ((t = null), u('"*"')), null !== t && null !== (r = A()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && (e = "*"),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function P() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = A()) ? (47 === n.charCodeAt(i) ? ((t = "/"), i++) : ((t = null), u('"/"')), null !== t && null !== (r = A()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && (e = "/"),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function D() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = A()) ? (61 === n.charCodeAt(i) ? ((t = "="), i++) : ((t = null), u('"="')), null !== t && null !== (r = A()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && (e = "="),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function M() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = A()) ? (40 === n.charCodeAt(i) ? ((t = "("), i++) : ((t = null), u('"("')), null !== t && null !== (r = A()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && (e = "("),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function q() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = A()) ? (41 === n.charCodeAt(i) ? ((t = ")"), i++) : ((t = null), u('")"')), null !== t && null !== (r = A()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && (e = ")"),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function L() {
                                            var e, t, r, s;
                                            return (
                                                (r = i),
                                                (s = i),
                                                62 === n.charCodeAt(i) ? ((e = ">"), i++) : ((e = null), u('">"')),
                                                null !== e && null !== (t = A()) ? (e = [e, t]) : ((e = null), (i = s)),
                                                null !== e && (e = ">"),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function H() {
                                            var e, t, r, s;
                                            return (
                                                (r = i),
                                                (s = i),
                                                null !== (e = A()) ? (60 === n.charCodeAt(i) ? ((t = "<"), i++) : ((t = null), u('"<"')), null !== t ? (e = [e, t]) : ((e = null), (i = s))) : ((e = null), (i = s)),
                                                null !== e && (e = "<"),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function F() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = A()) ? (44 === n.charCodeAt(i) ? ((t = ","), i++) : ((t = null), u('","')), null !== t && null !== (r = A()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && (e = ","),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function j() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = A()) ? (59 === n.charCodeAt(i) ? ((t = ";"), i++) : ((t = null), u('";"')), null !== t && null !== (r = A()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && (e = ";"),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function G() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = A()) ? (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')), null !== t && null !== (r = A()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && (e = ":"),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function B() {
                                            var e, t, n, r;
                                            return (n = i), (r = i), null !== (e = A()) && null !== (t = p()) ? (e = [e, t]) : ((e = null), (i = r)), null !== e && (e = '"'), null === e && (i = n), e;
                                        }
                                        function W() {
                                            var e, t, n, r;
                                            return (n = i), (r = i), null !== (e = p()) && null !== (t = A()) ? (e = [e, t]) : ((e = null), (i = r)), null !== e && (e = '"'), null === e && (i = n), e;
                                        }
                                        function V() {
                                            var e;
                                            return (
                                                /^[!-']/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[!-']")),
                                                null === e &&
                                                    (/^[*-[]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[*-[]")),
                                                    null === e && (/^[\]-~]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[\\]-~]")), null === e && null === (e = I()) && (e = E()))),
                                                e
                                            );
                                        }
                                        function K() {
                                            var e, t, r, s, o, l;
                                            if (((o = i), (l = i), null !== (e = A())))
                                                if (null !== (t = p())) {
                                                    for (r = [], null === (s = z()) && (s = J()); null !== s; ) r.push(s), null === (s = z()) && (s = J());
                                                    null !== r && null !== (s = p()) ? (e = [e, t, r, s]) : ((e = null), (i = l));
                                                } else (e = null), (i = l);
                                            else (e = null), (i = l);
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return n.substring(i, e);
                                                    })(o)),
                                                null === e && (i = o),
                                                e
                                            );
                                        }
                                        function Y() {
                                            var e, t, r, s, o, l;
                                            if (((o = i), (l = i), null !== (e = A())))
                                                if (null !== (t = p())) {
                                                    for (r = [], null === (s = z()) && (s = J()); null !== s; ) r.push(s), null === (s = z()) && (s = J());
                                                    null !== r && null !== (s = p()) ? (e = [e, t, r, s]) : ((e = null), (i = l));
                                                } else (e = null), (i = l);
                                            else (e = null), (i = l);
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        var t = n.substring(i, e).trim();
                                                        return t.substring(1, t.length - 1).replace(/\\([\x00-\x09\x0b-\x0c\x0e-\x7f])/g, "$1");
                                                    })(o)),
                                                null === e && (i = o),
                                                e
                                            );
                                        }
                                        function z() {
                                            var e;
                                            return (
                                                null === (e = E()) &&
                                                    (33 === n.charCodeAt(i) ? ((e = "!"), i++) : ((e = null), u('"!"')),
                                                    null === e &&
                                                        (/^[#-[]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[#-[]")),
                                                        null === e && (/^[\]-~]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[\\]-~]")), null === e && (e = I())))),
                                                e
                                            );
                                        }
                                        function J() {
                                            var e, t, r;
                                            return (
                                                (r = i),
                                                92 === n.charCodeAt(i) ? ((e = "\\"), i++) : ((e = null), u('"\\\\"')),
                                                null !== e
                                                    ? (/^[\0-\t]/.test(n.charAt(i)) ? ((t = n.charAt(i)), i++) : ((t = null), u("[\\0-\\t]")),
                                                      null === t &&
                                                          (/^[\x0B-\f]/.test(n.charAt(i)) ? ((t = n.charAt(i)), i++) : ((t = null), u("[\\x0B-\\f]")),
                                                          null === t && (/^[\x0E-]/.test(n.charAt(i)) ? ((t = n.charAt(i)), i++) : ((t = null), u("[\\x0E-]")))),
                                                      null !== t ? (e = [e, t]) : ((e = null), (i = r)))
                                                    : ((e = null), (i = r)),
                                                e
                                            );
                                        }
                                        function $() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (o = i),
                                                (l = i),
                                                null !== (e = Q())
                                                    ? (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                      null !== t && null !== (r = null !== (r = te()) ? r : "") && null !== (s = ie()) ? (e = [e, t, r, s]) : ((e = null), (i = l)))
                                                    : ((e = null), (i = l)),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        try {
                                                            (Fn.uri = new Ln(Fn.scheme, Fn.user, Fn.host, Fn.port)), delete Fn.scheme, delete Fn.user, delete Fn.host, delete Fn.host_type, delete Fn.port;
                                                        } catch (e) {
                                                            Fn = -1;
                                                        }
                                                    })()),
                                                null === e && (i = o),
                                                e
                                            );
                                        }
                                        function X() {
                                            var e, t, s, o, l, a, c, h;
                                            return (
                                                (c = i),
                                                (h = i),
                                                null !== (e = Q())
                                                    ? (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                      null !== t && null !== (s = null !== (s = te()) ? s : "") && null !== (o = ie()) && null !== (l = ve()) && null !== (a = null !== (a = ke()) ? a : "")
                                                          ? (e = [e, t, s, o, l, a])
                                                          : ((e = null), (i = h)))
                                                    : ((e = null), (i = h)),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        try {
                                                            (Fn.uri = new Ln(Fn.scheme, Fn.user, Fn.host, Fn.port, Fn.uri_params, Fn.uri_headers)),
                                                                delete Fn.scheme,
                                                                delete Fn.user,
                                                                delete Fn.host,
                                                                delete Fn.host_type,
                                                                delete Fn.port,
                                                                delete Fn.uri_params,
                                                                "SIP_URI" === r && (Fn = Fn.uri);
                                                        } catch (e) {
                                                            Fn = -1;
                                                        }
                                                    })()),
                                                null === e && (i = c),
                                                e
                                            );
                                        }
                                        function Q() {
                                            var e;
                                            return null === (e = Z()) && (e = ee()), e;
                                        }
                                        function Z() {
                                            var e, t, r;
                                            return (
                                                (t = i),
                                                "sips" === n.substr(i, 4).toLowerCase() ? ((e = n.substr(i, 4)), (i += 4)) : ((e = null), u('"sips"')),
                                                null !== e && ((r = e), (e = void (Fn.scheme = r.toLowerCase()))),
                                                null === e && (i = t),
                                                e
                                            );
                                        }
                                        function ee() {
                                            var e, t, r;
                                            return (
                                                (t = i),
                                                "sip" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"sip"')),
                                                null !== e && ((r = e), (e = void (Fn.scheme = r.toLowerCase()))),
                                                null === e && (i = t),
                                                e
                                            );
                                        }
                                        function te() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = ne())
                                                    ? ((l = i),
                                                      58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                      null !== t && null !== (r = se()) ? (t = [t, r]) : ((t = null), (i = l)),
                                                      null !== (t = null !== t ? t : "") ? (64 === n.charCodeAt(i) ? ((r = "@"), i++) : ((r = null), u('"@"')), null !== r ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)))
                                                    : ((e = null), (i = o)),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        Fn.user = decodeURIComponent(n.substring(i - 1, e));
                                                    })(s)),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function ne() {
                                            var e, t;
                                            if ((null === (t = T()) && null === (t = S()) && (t = re()), null !== t)) for (e = []; null !== t; ) e.push(t), null === (t = T()) && null === (t = S()) && (t = re());
                                            else e = null;
                                            return e;
                                        }
                                        function re() {
                                            var e;
                                            return (
                                                38 === n.charCodeAt(i) ? ((e = "&"), i++) : ((e = null), u('"&"')),
                                                null === e &&
                                                    (61 === n.charCodeAt(i) ? ((e = "="), i++) : ((e = null), u('"="')),
                                                    null === e &&
                                                        (43 === n.charCodeAt(i) ? ((e = "+"), i++) : ((e = null), u('"+"')),
                                                        null === e &&
                                                            (36 === n.charCodeAt(i) ? ((e = "$"), i++) : ((e = null), u('"$"')),
                                                            null === e &&
                                                                (44 === n.charCodeAt(i) ? ((e = ","), i++) : ((e = null), u('","')),
                                                                null === e &&
                                                                    (59 === n.charCodeAt(i) ? ((e = ";"), i++) : ((e = null), u('";"')),
                                                                    null === e && (63 === n.charCodeAt(i) ? ((e = "?"), i++) : ((e = null), u('"?"')), null === e && (47 === n.charCodeAt(i) ? ((e = "/"), i++) : ((e = null), u('"/"'))))))))),
                                                e
                                            );
                                        }
                                        function se() {
                                            var e, t, r;
                                            for (
                                                r = i,
                                                    e = [],
                                                    null === (t = T()) &&
                                                        null === (t = S()) &&
                                                        (38 === n.charCodeAt(i) ? ((t = "&"), i++) : ((t = null), u('"&"')),
                                                        null === t &&
                                                            (61 === n.charCodeAt(i) ? ((t = "="), i++) : ((t = null), u('"="')),
                                                            null === t &&
                                                                (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"')),
                                                                null === t && (36 === n.charCodeAt(i) ? ((t = "$"), i++) : ((t = null), u('"$"')), null === t && (44 === n.charCodeAt(i) ? ((t = ","), i++) : ((t = null), u('","')))))));
                                                null !== t;
        
                                            )
                                                e.push(t),
                                                    null === (t = T()) &&
                                                        null === (t = S()) &&
                                                        (38 === n.charCodeAt(i) ? ((t = "&"), i++) : ((t = null), u('"&"')),
                                                        null === t &&
                                                            (61 === n.charCodeAt(i) ? ((t = "="), i++) : ((t = null), u('"="')),
                                                            null === t &&
                                                                (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"')),
                                                                null === t && (36 === n.charCodeAt(i) ? ((t = "$"), i++) : ((t = null), u('"$"')), null === t && (44 === n.charCodeAt(i) ? ((t = ","), i++) : ((t = null), u('","')))))));
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        Fn.password = n.substring(i, e);
                                                    })(r)),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function ie() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                null !== (e = oe())
                                                    ? ((o = i),
                                                      58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                      null !== t && null !== (r = me()) ? (t = [t, r]) : ((t = null), (i = o)),
                                                      null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = s)))
                                                    : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function oe() {
                                            var e, t;
                                            return (
                                                (t = i),
                                                null === (e = le()) && null === (e = _e()) && (e = ce()),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return (Fn.host = n.substring(i, e).toLowerCase()), Fn.host;
                                                    })(t)),
                                                null === e && (i = t),
                                                e
                                            );
                                        }
                                        function le() {
                                            var e, t, r, s, o, l;
                                            for (
                                                s = i, o = i, e = [], l = i, null !== (t = ue()) ? (46 === n.charCodeAt(i) ? ((r = "."), i++) : ((r = null), u('"."')), null !== r ? (t = [t, r]) : ((t = null), (i = l))) : ((t = null), (i = l));
                                                null !== t;
        
                                            )
                                                e.push(t), (l = i), null !== (t = ue()) ? (46 === n.charCodeAt(i) ? ((r = "."), i++) : ((r = null), u('"."')), null !== r ? (t = [t, r]) : ((t = null), (i = l))) : ((t = null), (i = l));
                                            return (
                                                null !== e && null !== (t = ae())
                                                    ? (46 === n.charCodeAt(i) ? ((r = "."), i++) : ((r = null), u('"."')), null !== (r = null !== r ? r : "") ? (e = [e, t, r]) : ((e = null), (i = o)))
                                                    : ((e = null), (i = o)),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return (Fn.host_type = "domain"), n.substring(i, e);
                                                    })(s)),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function ue() {
                                            var e, t, r, s;
                                            if (((s = i), null !== (e = g()))) {
                                                for (
                                                    t = [], null === (r = g()) && (45 === n.charCodeAt(i) ? ((r = "-"), i++) : ((r = null), u('"-"')), null === r && (95 === n.charCodeAt(i) ? ((r = "_"), i++) : ((r = null), u('"_"'))));
                                                    null !== r;
        
                                                )
                                                    t.push(r), null === (r = g()) && (45 === n.charCodeAt(i) ? ((r = "-"), i++) : ((r = null), u('"-"')), null === r && (95 === n.charCodeAt(i) ? ((r = "_"), i++) : ((r = null), u('"_"'))));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                            } else (e = null), (i = s);
                                            return e;
                                        }
                                        function ae() {
                                            var e, t, r, s;
                                            if (((s = i), null !== (e = h()))) {
                                                for (
                                                    t = [], null === (r = g()) && (45 === n.charCodeAt(i) ? ((r = "-"), i++) : ((r = null), u('"-"')), null === r && (95 === n.charCodeAt(i) ? ((r = "_"), i++) : ((r = null), u('"_"'))));
                                                    null !== r;
        
                                                )
                                                    t.push(r), null === (r = g()) && (45 === n.charCodeAt(i) ? ((r = "-"), i++) : ((r = null), u('"-"')), null === r && (95 === n.charCodeAt(i) ? ((r = "_"), i++) : ((r = null), u('"_"'))));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                            } else (e = null), (i = s);
                                            return e;
                                        }
                                        function ce() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                (o = i),
                                                91 === n.charCodeAt(i) ? ((e = "["), i++) : ((e = null), u('"["')),
                                                null !== e && null !== (t = he()) ? (93 === n.charCodeAt(i) ? ((r = "]"), i++) : ((r = null), u('"]"')), null !== r ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return (Fn.host_type = "IPv6"), n.substring(i, e);
                                                    })(s)),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function he() {
                                            var e, t, r, s, o, l, a, c, h, f, d, _, p, m, v, g;
                                            return (
                                                (m = i),
                                                (v = i),
                                                null !== (e = fe())
                                                    ? (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                      null !== t && null !== (r = fe())
                                                          ? (58 === n.charCodeAt(i) ? ((s = ":"), i++) : ((s = null), u('":"')),
                                                            null !== s && null !== (o = fe())
                                                                ? (58 === n.charCodeAt(i) ? ((l = ":"), i++) : ((l = null), u('":"')),
                                                                  null !== l && null !== (a = fe())
                                                                      ? (58 === n.charCodeAt(i) ? ((c = ":"), i++) : ((c = null), u('":"')),
                                                                        null !== c && null !== (h = fe())
                                                                            ? (58 === n.charCodeAt(i) ? ((f = ":"), i++) : ((f = null), u('":"')),
                                                                              null !== f && null !== (d = fe())
                                                                                  ? (58 === n.charCodeAt(i) ? ((_ = ":"), i++) : ((_ = null), u('":"')),
                                                                                    null !== _ && null !== (p = de()) ? (e = [e, t, r, s, o, l, a, c, h, f, d, _, p]) : ((e = null), (i = v)))
                                                                                  : ((e = null), (i = v)))
                                                                            : ((e = null), (i = v)))
                                                                      : ((e = null), (i = v)))
                                                                : ((e = null), (i = v)))
                                                          : ((e = null), (i = v)))
                                                    : ((e = null), (i = v)),
                                                null === e &&
                                                    ((v = i),
                                                    "::" === n.substr(i, 2) ? ((e = "::"), (i += 2)) : ((e = null), u('"::"')),
                                                    null !== e && null !== (t = fe())
                                                        ? (58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')),
                                                          null !== r && null !== (s = fe())
                                                              ? (58 === n.charCodeAt(i) ? ((o = ":"), i++) : ((o = null), u('":"')),
                                                                null !== o && null !== (l = fe())
                                                                    ? (58 === n.charCodeAt(i) ? ((a = ":"), i++) : ((a = null), u('":"')),
                                                                      null !== a && null !== (c = fe())
                                                                          ? (58 === n.charCodeAt(i) ? ((h = ":"), i++) : ((h = null), u('":"')),
                                                                            null !== h && null !== (f = fe())
                                                                                ? (58 === n.charCodeAt(i) ? ((d = ":"), i++) : ((d = null), u('":"')),
                                                                                  null !== d && null !== (_ = de()) ? (e = [e, t, r, s, o, l, a, c, h, f, d, _]) : ((e = null), (i = v)))
                                                                                : ((e = null), (i = v)))
                                                                          : ((e = null), (i = v)))
                                                                    : ((e = null), (i = v)))
                                                              : ((e = null), (i = v)))
                                                        : ((e = null), (i = v)),
                                                    null === e &&
                                                        ((v = i),
                                                        "::" === n.substr(i, 2) ? ((e = "::"), (i += 2)) : ((e = null), u('"::"')),
                                                        null !== e && null !== (t = fe())
                                                            ? (58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')),
                                                              null !== r && null !== (s = fe())
                                                                  ? (58 === n.charCodeAt(i) ? ((o = ":"), i++) : ((o = null), u('":"')),
                                                                    null !== o && null !== (l = fe())
                                                                        ? (58 === n.charCodeAt(i) ? ((a = ":"), i++) : ((a = null), u('":"')),
                                                                          null !== a && null !== (c = fe())
                                                                              ? (58 === n.charCodeAt(i) ? ((h = ":"), i++) : ((h = null), u('":"')), null !== h && null !== (f = de()) ? (e = [e, t, r, s, o, l, a, c, h, f]) : ((e = null), (i = v)))
                                                                              : ((e = null), (i = v)))
                                                                        : ((e = null), (i = v)))
                                                                  : ((e = null), (i = v)))
                                                            : ((e = null), (i = v)),
                                                        null === e &&
                                                            ((v = i),
                                                            "::" === n.substr(i, 2) ? ((e = "::"), (i += 2)) : ((e = null), u('"::"')),
                                                            null !== e && null !== (t = fe())
                                                                ? (58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')),
                                                                  null !== r && null !== (s = fe())
                                                                      ? (58 === n.charCodeAt(i) ? ((o = ":"), i++) : ((o = null), u('":"')),
                                                                        null !== o && null !== (l = fe())
                                                                            ? (58 === n.charCodeAt(i) ? ((a = ":"), i++) : ((a = null), u('":"')), null !== a && null !== (c = de()) ? (e = [e, t, r, s, o, l, a, c]) : ((e = null), (i = v)))
                                                                            : ((e = null), (i = v)))
                                                                      : ((e = null), (i = v)))
                                                                : ((e = null), (i = v)),
                                                            null === e &&
                                                                ((v = i),
                                                                "::" === n.substr(i, 2) ? ((e = "::"), (i += 2)) : ((e = null), u('"::"')),
                                                                null !== e && null !== (t = fe())
                                                                    ? (58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')),
                                                                      null !== r && null !== (s = fe())
                                                                          ? (58 === n.charCodeAt(i) ? ((o = ":"), i++) : ((o = null), u('":"')), null !== o && null !== (l = de()) ? (e = [e, t, r, s, o, l]) : ((e = null), (i = v)))
                                                                          : ((e = null), (i = v)))
                                                                    : ((e = null), (i = v)),
                                                                null === e &&
                                                                    ((v = i),
                                                                    "::" === n.substr(i, 2) ? ((e = "::"), (i += 2)) : ((e = null), u('"::"')),
                                                                    null !== e && null !== (t = fe())
                                                                        ? (58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')), null !== r && null !== (s = de()) ? (e = [e, t, r, s]) : ((e = null), (i = v)))
                                                                        : ((e = null), (i = v)),
                                                                    null === e &&
                                                                        ((v = i),
                                                                        "::" === n.substr(i, 2) ? ((e = "::"), (i += 2)) : ((e = null), u('"::"')),
                                                                        null !== e && null !== (t = de()) ? (e = [e, t]) : ((e = null), (i = v)),
                                                                        null === e &&
                                                                            ((v = i),
                                                                            "::" === n.substr(i, 2) ? ((e = "::"), (i += 2)) : ((e = null), u('"::"')),
                                                                            null !== e && null !== (t = fe()) ? (e = [e, t]) : ((e = null), (i = v)),
                                                                            null === e &&
                                                                                ((v = i),
                                                                                null !== (e = fe())
                                                                                    ? ("::" === n.substr(i, 2) ? ((t = "::"), (i += 2)) : ((t = null), u('"::"')),
                                                                                      null !== t && null !== (r = fe())
                                                                                          ? (58 === n.charCodeAt(i) ? ((s = ":"), i++) : ((s = null), u('":"')),
                                                                                            null !== s && null !== (o = fe())
                                                                                                ? (58 === n.charCodeAt(i) ? ((l = ":"), i++) : ((l = null), u('":"')),
                                                                                                  null !== l && null !== (a = fe())
                                                                                                      ? (58 === n.charCodeAt(i) ? ((c = ":"), i++) : ((c = null), u('":"')),
                                                                                                        null !== c && null !== (h = fe())
                                                                                                            ? (58 === n.charCodeAt(i) ? ((f = ":"), i++) : ((f = null), u('":"')),
                                                                                                              null !== f && null !== (d = de()) ? (e = [e, t, r, s, o, l, a, c, h, f, d]) : ((e = null), (i = v)))
                                                                                                            : ((e = null), (i = v)))
                                                                                                      : ((e = null), (i = v)))
                                                                                                : ((e = null), (i = v)))
                                                                                          : ((e = null), (i = v)))
                                                                                    : ((e = null), (i = v)),
                                                                                null === e &&
                                                                                    ((v = i),
                                                                                    null !== (e = fe())
                                                                                        ? ((g = i),
                                                                                          58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                                          null !== t && null !== (r = fe()) ? (t = [t, r]) : ((t = null), (i = g)),
                                                                                          null !== (t = null !== t ? t : "")
                                                                                              ? ("::" === n.substr(i, 2) ? ((r = "::"), (i += 2)) : ((r = null), u('"::"')),
                                                                                                null !== r && null !== (s = fe())
                                                                                                    ? (58 === n.charCodeAt(i) ? ((o = ":"), i++) : ((o = null), u('":"')),
                                                                                                      null !== o && null !== (l = fe())
                                                                                                          ? (58 === n.charCodeAt(i) ? ((a = ":"), i++) : ((a = null), u('":"')),
                                                                                                            null !== a && null !== (c = fe())
                                                                                                                ? (58 === n.charCodeAt(i) ? ((h = ":"), i++) : ((h = null), u('":"')),
                                                                                                                  null !== h && null !== (f = de()) ? (e = [e, t, r, s, o, l, a, c, h, f]) : ((e = null), (i = v)))
                                                                                                                : ((e = null), (i = v)))
                                                                                                          : ((e = null), (i = v)))
                                                                                                    : ((e = null), (i = v)))
                                                                                              : ((e = null), (i = v)))
                                                                                        : ((e = null), (i = v)),
                                                                                    null === e &&
                                                                                        ((v = i),
                                                                                        null !== (e = fe())
                                                                                            ? ((g = i),
                                                                                              58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                                              null !== t && null !== (r = fe()) ? (t = [t, r]) : ((t = null), (i = g)),
                                                                                              null !== (t = null !== t ? t : "")
                                                                                                  ? ((g = i),
                                                                                                    58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')),
                                                                                                    null !== r && null !== (s = fe()) ? (r = [r, s]) : ((r = null), (i = g)),
                                                                                                    null !== (r = null !== r ? r : "")
                                                                                                        ? ("::" === n.substr(i, 2) ? ((s = "::"), (i += 2)) : ((s = null), u('"::"')),
                                                                                                          null !== s && null !== (o = fe())
                                                                                                              ? (58 === n.charCodeAt(i) ? ((l = ":"), i++) : ((l = null), u('":"')),
                                                                                                                null !== l && null !== (a = fe())
                                                                                                                    ? (58 === n.charCodeAt(i) ? ((c = ":"), i++) : ((c = null), u('":"')),
                                                                                                                      null !== c && null !== (h = de()) ? (e = [e, t, r, s, o, l, a, c, h]) : ((e = null), (i = v)))
                                                                                                                    : ((e = null), (i = v)))
                                                                                                              : ((e = null), (i = v)))
                                                                                                        : ((e = null), (i = v)))
                                                                                                  : ((e = null), (i = v)))
                                                                                            : ((e = null), (i = v)),
                                                                                        null === e &&
                                                                                            ((v = i),
                                                                                            null !== (e = fe())
                                                                                                ? ((g = i),
                                                                                                  58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                                                  null !== t && null !== (r = fe()) ? (t = [t, r]) : ((t = null), (i = g)),
                                                                                                  null !== (t = null !== t ? t : "")
                                                                                                      ? ((g = i),
                                                                                                        58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')),
                                                                                                        null !== r && null !== (s = fe()) ? (r = [r, s]) : ((r = null), (i = g)),
                                                                                                        null !== (r = null !== r ? r : "")
                                                                                                            ? ((g = i),
                                                                                                              58 === n.charCodeAt(i) ? ((s = ":"), i++) : ((s = null), u('":"')),
                                                                                                              null !== s && null !== (o = fe()) ? (s = [s, o]) : ((s = null), (i = g)),
                                                                                                              null !== (s = null !== s ? s : "")
                                                                                                                  ? ("::" === n.substr(i, 2) ? ((o = "::"), (i += 2)) : ((o = null), u('"::"')),
                                                                                                                    null !== o && null !== (l = fe())
                                                                                                                        ? (58 === n.charCodeAt(i) ? ((a = ":"), i++) : ((a = null), u('":"')),
                                                                                                                          null !== a && null !== (c = de()) ? (e = [e, t, r, s, o, l, a, c]) : ((e = null), (i = v)))
                                                                                                                        : ((e = null), (i = v)))
                                                                                                                  : ((e = null), (i = v)))
                                                                                                            : ((e = null), (i = v)))
                                                                                                      : ((e = null), (i = v)))
                                                                                                : ((e = null), (i = v)),
                                                                                            null === e &&
                                                                                                ((v = i),
                                                                                                null !== (e = fe())
                                                                                                    ? ((g = i),
                                                                                                      58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                                                      null !== t && null !== (r = fe()) ? (t = [t, r]) : ((t = null), (i = g)),
                                                                                                      null !== (t = null !== t ? t : "")
                                                                                                          ? ((g = i),
                                                                                                            58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')),
                                                                                                            null !== r && null !== (s = fe()) ? (r = [r, s]) : ((r = null), (i = g)),
                                                                                                            null !== (r = null !== r ? r : "")
                                                                                                                ? ((g = i),
                                                                                                                  58 === n.charCodeAt(i) ? ((s = ":"), i++) : ((s = null), u('":"')),
                                                                                                                  null !== s && null !== (o = fe()) ? (s = [s, o]) : ((s = null), (i = g)),
                                                                                                                  null !== (s = null !== s ? s : "")
                                                                                                                      ? ((g = i),
                                                                                                                        58 === n.charCodeAt(i) ? ((o = ":"), i++) : ((o = null), u('":"')),
                                                                                                                        null !== o && null !== (l = fe()) ? (o = [o, l]) : ((o = null), (i = g)),
                                                                                                                        null !== (o = null !== o ? o : "")
                                                                                                                            ? ("::" === n.substr(i, 2) ? ((l = "::"), (i += 2)) : ((l = null), u('"::"')),
                                                                                                                              null !== l && null !== (a = de()) ? (e = [e, t, r, s, o, l, a]) : ((e = null), (i = v)))
                                                                                                                            : ((e = null), (i = v)))
                                                                                                                      : ((e = null), (i = v)))
                                                                                                                : ((e = null), (i = v)))
                                                                                                          : ((e = null), (i = v)))
                                                                                                    : ((e = null), (i = v)),
                                                                                                null === e &&
                                                                                                    ((v = i),
                                                                                                    null !== (e = fe())
                                                                                                        ? ((g = i),
                                                                                                          58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                                                          null !== t && null !== (r = fe()) ? (t = [t, r]) : ((t = null), (i = g)),
                                                                                                          null !== (t = null !== t ? t : "")
                                                                                                              ? ((g = i),
                                                                                                                58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')),
                                                                                                                null !== r && null !== (s = fe()) ? (r = [r, s]) : ((r = null), (i = g)),
                                                                                                                null !== (r = null !== r ? r : "")
                                                                                                                    ? ((g = i),
                                                                                                                      58 === n.charCodeAt(i) ? ((s = ":"), i++) : ((s = null), u('":"')),
                                                                                                                      null !== s && null !== (o = fe()) ? (s = [s, o]) : ((s = null), (i = g)),
                                                                                                                      null !== (s = null !== s ? s : "")
                                                                                                                          ? ((g = i),
                                                                                                                            58 === n.charCodeAt(i) ? ((o = ":"), i++) : ((o = null), u('":"')),
                                                                                                                            null !== o && null !== (l = fe()) ? (o = [o, l]) : ((o = null), (i = g)),
                                                                                                                            null !== (o = null !== o ? o : "")
                                                                                                                                ? ((g = i),
                                                                                                                                  58 === n.charCodeAt(i) ? ((l = ":"), i++) : ((l = null), u('":"')),
                                                                                                                                  null !== l && null !== (a = fe()) ? (l = [l, a]) : ((l = null), (i = g)),
                                                                                                                                  null !== (l = null !== l ? l : "")
                                                                                                                                      ? ("::" === n.substr(i, 2) ? ((a = "::"), (i += 2)) : ((a = null), u('"::"')),
                                                                                                                                        null !== a && null !== (c = fe()) ? (e = [e, t, r, s, o, l, a, c]) : ((e = null), (i = v)))
                                                                                                                                      : ((e = null), (i = v)))
                                                                                                                                : ((e = null), (i = v)))
                                                                                                                          : ((e = null), (i = v)))
                                                                                                                    : ((e = null), (i = v)))
                                                                                                              : ((e = null), (i = v)))
                                                                                                        : ((e = null), (i = v)),
                                                                                                    null === e &&
                                                                                                        ((v = i),
                                                                                                        null !== (e = fe())
                                                                                                            ? ((g = i),
                                                                                                              58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                                                              null !== t && null !== (r = fe()) ? (t = [t, r]) : ((t = null), (i = g)),
                                                                                                              null !== (t = null !== t ? t : "")
                                                                                                                  ? ((g = i),
                                                                                                                    58 === n.charCodeAt(i) ? ((r = ":"), i++) : ((r = null), u('":"')),
                                                                                                                    null !== r && null !== (s = fe()) ? (r = [r, s]) : ((r = null), (i = g)),
                                                                                                                    null !== (r = null !== r ? r : "")
                                                                                                                        ? ((g = i),
                                                                                                                          58 === n.charCodeAt(i) ? ((s = ":"), i++) : ((s = null), u('":"')),
                                                                                                                          null !== s && null !== (o = fe()) ? (s = [s, o]) : ((s = null), (i = g)),
                                                                                                                          null !== (s = null !== s ? s : "")
                                                                                                                              ? ((g = i),
                                                                                                                                58 === n.charCodeAt(i) ? ((o = ":"), i++) : ((o = null), u('":"')),
                                                                                                                                null !== o && null !== (l = fe()) ? (o = [o, l]) : ((o = null), (i = g)),
                                                                                                                                null !== (o = null !== o ? o : "")
                                                                                                                                    ? ((g = i),
                                                                                                                                      58 === n.charCodeAt(i) ? ((l = ":"), i++) : ((l = null), u('":"')),
                                                                                                                                      null !== l && null !== (a = fe()) ? (l = [l, a]) : ((l = null), (i = g)),
                                                                                                                                      null !== (l = null !== l ? l : "")
                                                                                                                                          ? ((g = i),
                                                                                                                                            58 === n.charCodeAt(i) ? ((a = ":"), i++) : ((a = null), u('":"')),
                                                                                                                                            null !== a && null !== (c = fe()) ? (a = [a, c]) : ((a = null), (i = g)),
                                                                                                                                            null !== (a = null !== a ? a : "")
                                                                                                                                                ? ("::" === n.substr(i, 2) ? ((c = "::"), (i += 2)) : ((c = null), u('"::"')),
                                                                                                                                                  null !== c ? (e = [e, t, r, s, o, l, a, c]) : ((e = null), (i = v)))
                                                                                                                                                : ((e = null), (i = v)))
                                                                                                                                          : ((e = null), (i = v)))
                                                                                                                                    : ((e = null), (i = v)))
                                                                                                                              : ((e = null), (i = v)))
                                                                                                                        : ((e = null), (i = v)))
                                                                                                                  : ((e = null), (i = v)))
                                                                                                            : ((e = null), (i = v)))))))))))))))),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return (Fn.host_type = "IPv6"), n.substring(i, e);
                                                    })(m)),
                                                null === e && (i = m),
                                                e
                                            );
                                        }
                                        function fe() {
                                            var e, t, n, r, s;
                                            return (
                                                (s = i),
                                                null !== (e = f()) && null !== (t = null !== (t = f()) ? t : "") && null !== (n = null !== (n = f()) ? n : "") && null !== (r = null !== (r = f()) ? r : "")
                                                    ? (e = [e, t, n, r])
                                                    : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function de() {
                                            var e, t, r, s;
                                            return (
                                                (s = i),
                                                null !== (e = fe()) ? (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')), null !== t && null !== (r = fe()) ? (e = [e, t, r]) : ((e = null), (i = s))) : ((e = null), (i = s)),
                                                null === e && (e = _e()),
                                                e
                                            );
                                        }
                                        function _e() {
                                            var e, t, r, s, o, l, a, c, h;
                                            return (
                                                (c = i),
                                                (h = i),
                                                null !== (e = pe())
                                                    ? (46 === n.charCodeAt(i) ? ((t = "."), i++) : ((t = null), u('"."')),
                                                      null !== t && null !== (r = pe())
                                                          ? (46 === n.charCodeAt(i) ? ((s = "."), i++) : ((s = null), u('"."')),
                                                            null !== s && null !== (o = pe())
                                                                ? (46 === n.charCodeAt(i) ? ((l = "."), i++) : ((l = null), u('"."')), null !== l && null !== (a = pe()) ? (e = [e, t, r, s, o, l, a]) : ((e = null), (i = h)))
                                                                : ((e = null), (i = h)))
                                                          : ((e = null), (i = h)))
                                                    : ((e = null), (i = h)),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return (Fn.host_type = "IPv4"), n.substring(i, e);
                                                    })(c)),
                                                null === e && (i = c),
                                                e
                                            );
                                        }
                                        function pe() {
                                            var e, t, r, s;
                                            return (
                                                (s = i),
                                                "25" === n.substr(i, 2) ? ((e = "25"), (i += 2)) : ((e = null), u('"25"')),
                                                null !== e ? (/^[0-5]/.test(n.charAt(i)) ? ((t = n.charAt(i)), i++) : ((t = null), u("[0-5]")), null !== t ? (e = [e, t]) : ((e = null), (i = s))) : ((e = null), (i = s)),
                                                null === e &&
                                                    ((s = i),
                                                    50 === n.charCodeAt(i) ? ((e = "2"), i++) : ((e = null), u('"2"')),
                                                    null !== e ? (/^[0-4]/.test(n.charAt(i)) ? ((t = n.charAt(i)), i++) : ((t = null), u("[0-4]")), null !== t && null !== (r = c()) ? (e = [e, t, r]) : ((e = null), (i = s))) : ((e = null), (i = s)),
                                                    null === e &&
                                                        ((s = i),
                                                        49 === n.charCodeAt(i) ? ((e = "1"), i++) : ((e = null), u('"1"')),
                                                        null !== e && null !== (t = c()) && null !== (r = c()) ? (e = [e, t, r]) : ((e = null), (i = s)),
                                                        null === e &&
                                                            ((s = i),
                                                            /^[1-9]/.test(n.charAt(i)) ? ((e = n.charAt(i)), i++) : ((e = null), u("[1-9]")),
                                                            null !== e && null !== (t = c()) ? (e = [e, t]) : ((e = null), (i = s)),
                                                            null === e && (e = c())))),
                                                e
                                            );
                                        }
                                        function me() {
                                            var e, t, n, r, s, o, l, u;
                                            return (
                                                (o = i),
                                                (l = i),
                                                null !== (e = null !== (e = c()) ? e : "") &&
                                                null !== (t = null !== (t = c()) ? t : "") &&
                                                null !== (n = null !== (n = c()) ? n : "") &&
                                                null !== (r = null !== (r = c()) ? r : "") &&
                                                null !== (s = null !== (s = c()) ? s : "")
                                                    ? (e = [e, t, n, r, s])
                                                    : ((e = null), (i = l)),
                                                null !== e && ((u = e), (u = parseInt(u.join(""))), (Fn.port = u), (e = u)),
                                                null === e && (i = o),
                                                e
                                            );
                                        }
                                        function ve() {
                                            var e, t, r, s;
                                            for (e = [], s = i, 59 === n.charCodeAt(i) ? ((t = ";"), i++) : ((t = null), u('";"')), null !== t && null !== (r = ge()) ? (t = [t, r]) : ((t = null), (i = s)); null !== t; )
                                                e.push(t), (s = i), 59 === n.charCodeAt(i) ? ((t = ";"), i++) : ((t = null), u('";"')), null !== t && null !== (r = ge()) ? (t = [t, r]) : ((t = null), (i = s));
                                            return e;
                                        }
                                        function ge() {
                                            var e;
                                            return null === (e = ye()) && null === (e = Te()) && null === (e = Ce()) && null === (e = Se()) && null === (e = Ee()) && null === (e = Ae()) && (e = be()), e;
                                        }
                                        function ye() {
                                            var e, t, r, s, o;
                                            return (
                                                (r = i),
                                                (s = i),
                                                "transport=" === n.substr(i, 10).toLowerCase() ? ((e = n.substr(i, 10)), (i += 10)) : ((e = null), u('"transport="')),
                                                null !== e
                                                    ? ("udp" === n.substr(i, 3).toLowerCase() ? ((t = n.substr(i, 3)), (i += 3)) : ((t = null), u('"udp"')),
                                                      null === t &&
                                                          ("tcp" === n.substr(i, 3).toLowerCase() ? ((t = n.substr(i, 3)), (i += 3)) : ((t = null), u('"tcp"')),
                                                          null === t &&
                                                              ("sctp" === n.substr(i, 4).toLowerCase() ? ((t = n.substr(i, 4)), (i += 4)) : ((t = null), u('"sctp"')),
                                                              null === t && ("tls" === n.substr(i, 3).toLowerCase() ? ((t = n.substr(i, 3)), (i += 3)) : ((t = null), u('"tls"')), null === t && (t = k())))),
                                                      null !== t ? (e = [e, t]) : ((e = null), (i = s)))
                                                    : ((e = null), (i = s)),
                                                null !== e && ((o = e[1]), Fn.uri_params || (Fn.uri_params = {}), (e = void (Fn.uri_params.transport = o.toLowerCase()))),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function Te() {
                                            var e, t, r, s, o;
                                            return (
                                                (r = i),
                                                (s = i),
                                                "user=" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"user="')),
                                                null !== e
                                                    ? ("phone" === n.substr(i, 5).toLowerCase() ? ((t = n.substr(i, 5)), (i += 5)) : ((t = null), u('"phone"')),
                                                      null === t && ("ip" === n.substr(i, 2).toLowerCase() ? ((t = n.substr(i, 2)), (i += 2)) : ((t = null), u('"ip"')), null === t && (t = k())),
                                                      null !== t ? (e = [e, t]) : ((e = null), (i = s)))
                                                    : ((e = null), (i = s)),
                                                null !== e && ((o = e[1]), Fn.uri_params || (Fn.uri_params = {}), (e = void (Fn.uri_params.user = o.toLowerCase()))),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function Ce() {
                                            var e, t, r, s, o;
                                            return (
                                                (r = i),
                                                (s = i),
                                                "method=" === n.substr(i, 7).toLowerCase() ? ((e = n.substr(i, 7)), (i += 7)) : ((e = null), u('"method="')),
                                                null !== e && null !== (t = at()) ? (e = [e, t]) : ((e = null), (i = s)),
                                                null !== e && ((o = e[1]), Fn.uri_params || (Fn.uri_params = {}), (e = void (Fn.uri_params.method = o))),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function Se() {
                                            var e, t, r, s, o;
                                            return (
                                                (r = i),
                                                (s = i),
                                                "ttl=" === n.substr(i, 4).toLowerCase() ? ((e = n.substr(i, 4)), (i += 4)) : ((e = null), u('"ttl="')),
                                                null !== e && null !== (t = An()) ? (e = [e, t]) : ((e = null), (i = s)),
                                                null !== e && ((o = e[1]), Fn.params || (Fn.params = {}), (e = void (Fn.params.ttl = o))),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function Ee() {
                                            var e, t, r, s, o;
                                            return (
                                                (r = i),
                                                (s = i),
                                                "maddr=" === n.substr(i, 6).toLowerCase() ? ((e = n.substr(i, 6)), (i += 6)) : ((e = null), u('"maddr="')),
                                                null !== e && null !== (t = oe()) ? (e = [e, t]) : ((e = null), (i = s)),
                                                null !== e && ((o = e[1]), Fn.uri_params || (Fn.uri_params = {}), (e = void (Fn.uri_params.maddr = o))),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function Ae() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "lr" === n.substr(i, 2).toLowerCase() ? ((e = n.substr(i, 2)), (i += 2)) : ((e = null), u('"lr"')),
                                                null !== e
                                                    ? ((l = i),
                                                      61 === n.charCodeAt(i) ? ((t = "="), i++) : ((t = null), u('"="')),
                                                      null !== t && null !== (r = k()) ? (t = [t, r]) : ((t = null), (i = l)),
                                                      null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = o)))
                                                    : ((e = null), (i = o)),
                                                null !== e && (Fn.uri_params || (Fn.uri_params = {}), (e = void (Fn.uri_params.lr = void 0))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function be() {
                                            var e, t, r, s, o, l, a, c;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = Re())
                                                    ? ((l = i),
                                                      61 === n.charCodeAt(i) ? ((t = "="), i++) : ((t = null), u('"="')),
                                                      null !== t && null !== (r = we()) ? (t = [t, r]) : ((t = null), (i = l)),
                                                      null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = o)))
                                                    : ((e = null), (i = o)),
                                                null !== e && ((a = e[0]), (c = e[1]), Fn.uri_params || (Fn.uri_params = {}), (c = void 0 === c ? void 0 : c[1]), (e = void (Fn.uri_params[a.toLowerCase()] = c))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function Re() {
                                            var e, t, n;
                                            if (((n = i), null !== (t = Ie()))) for (e = []; null !== t; ) e.push(t), (t = Ie());
                                            else e = null;
                                            return null !== e && (e = e.join("")), null === e && (i = n), e;
                                        }
                                        function we() {
                                            var e, t, n;
                                            if (((n = i), null !== (t = Ie()))) for (e = []; null !== t; ) e.push(t), (t = Ie());
                                            else e = null;
                                            return null !== e && (e = e.join("")), null === e && (i = n), e;
                                        }
                                        function Ie() {
                                            var e;
                                            return null === (e = Oe()) && null === (e = T()) && (e = S()), e;
                                        }
                                        function Oe() {
                                            var e;
                                            return (
                                                91 === n.charCodeAt(i) ? ((e = "["), i++) : ((e = null), u('"["')),
                                                null === e &&
                                                    (93 === n.charCodeAt(i) ? ((e = "]"), i++) : ((e = null), u('"]"')),
                                                    null === e &&
                                                        (47 === n.charCodeAt(i) ? ((e = "/"), i++) : ((e = null), u('"/"')),
                                                        null === e &&
                                                            (58 === n.charCodeAt(i) ? ((e = ":"), i++) : ((e = null), u('":"')),
                                                            null === e &&
                                                                (38 === n.charCodeAt(i) ? ((e = "&"), i++) : ((e = null), u('"&"')),
                                                                null === e && (43 === n.charCodeAt(i) ? ((e = "+"), i++) : ((e = null), u('"+"')), null === e && (36 === n.charCodeAt(i) ? ((e = "$"), i++) : ((e = null), u('"$"')))))))),
                                                e
                                            );
                                        }
                                        function ke() {
                                            var e, t, r, s, o, l, a;
                                            if (((l = i), 63 === n.charCodeAt(i) ? ((e = "?"), i++) : ((e = null), u('"?"')), null !== e))
                                                if (null !== (t = Ne())) {
                                                    for (r = [], a = i, 38 === n.charCodeAt(i) ? ((s = "&"), i++) : ((s = null), u('"&"')), null !== s && null !== (o = Ne()) ? (s = [s, o]) : ((s = null), (i = a)); null !== s; )
                                                        r.push(s), (a = i), 38 === n.charCodeAt(i) ? ((s = "&"), i++) : ((s = null), u('"&"')), null !== s && null !== (o = Ne()) ? (s = [s, o]) : ((s = null), (i = a));
                                                    null !== r ? (e = [e, t, r]) : ((e = null), (i = l));
                                                } else (e = null), (i = l);
                                            else (e = null), (i = l);
                                            return e;
                                        }
                                        function Ne() {
                                            var e, t, r, s, o, l, a;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = Ue()) ? (61 === n.charCodeAt(i) ? ((t = "="), i++) : ((t = null), u('"="')), null !== t && null !== (r = xe()) ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e &&
                                                    ((l = e[0]),
                                                    (a = e[2]),
                                                    (l = l.join("").toLowerCase()),
                                                    (a = a.join("")),
                                                    Fn.uri_headers || (Fn.uri_headers = {}),
                                                    (e = void (Fn.uri_headers[l] ? Fn.uri_headers[l].push(a) : (Fn.uri_headers[l] = [a])))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function Ue() {
                                            var e, t;
                                            if ((null === (t = Pe()) && null === (t = T()) && (t = S()), null !== t)) for (e = []; null !== t; ) e.push(t), null === (t = Pe()) && null === (t = T()) && (t = S());
                                            else e = null;
                                            return e;
                                        }
                                        function xe() {
                                            var e, t;
                                            for (e = [], null === (t = Pe()) && null === (t = T()) && (t = S()); null !== t; ) e.push(t), null === (t = Pe()) && null === (t = T()) && (t = S());
                                            return e;
                                        }
                                        function Pe() {
                                            var e;
                                            return (
                                                91 === n.charCodeAt(i) ? ((e = "["), i++) : ((e = null), u('"["')),
                                                null === e &&
                                                    (93 === n.charCodeAt(i) ? ((e = "]"), i++) : ((e = null), u('"]"')),
                                                    null === e &&
                                                        (47 === n.charCodeAt(i) ? ((e = "/"), i++) : ((e = null), u('"/"')),
                                                        null === e &&
                                                            (63 === n.charCodeAt(i) ? ((e = "?"), i++) : ((e = null), u('"?"')),
                                                            null === e &&
                                                                (58 === n.charCodeAt(i) ? ((e = ":"), i++) : ((e = null), u('":"')),
                                                                null === e && (43 === n.charCodeAt(i) ? ((e = "+"), i++) : ((e = null), u('"+"')), null === e && (36 === n.charCodeAt(i) ? ((e = "$"), i++) : ((e = null), u('"$"')))))))),
                                                e
                                            );
                                        }
                                        function De() {
                                            var e, t, n, r, s, o;
                                            return (o = i), null !== (e = at()) && null !== (t = m()) && null !== (n = Me()) && null !== (r = m()) && null !== (s = Ze()) ? (e = [e, t, n, r, s]) : ((e = null), (i = o)), e;
                                        }
                                        function Me() {
                                            var e;
                                            return null === (e = X()) && (e = qe()), e;
                                        }
                                        function qe() {
                                            var e, t, r, s;
                                            return (
                                                (s = i),
                                                null !== (e = ze())
                                                    ? (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                      null !== t ? (null === (r = Le()) && (r = je()), null !== r ? (e = [e, t, r]) : ((e = null), (i = s))) : ((e = null), (i = s)))
                                                    : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function Le() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                null === (e = He()) && (e = Fe()),
                                                null !== e
                                                    ? ((o = i),
                                                      63 === n.charCodeAt(i) ? ((t = "?"), i++) : ((t = null), u('"?"')),
                                                      null !== t && null !== (r = Qe()) ? (t = [t, r]) : ((t = null), (i = o)),
                                                      null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = s)))
                                                    : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function He() {
                                            var e, t, r, s;
                                            return (
                                                (s = i),
                                                "//" === n.substr(i, 2) ? ((e = "//"), (i += 2)) : ((e = null), u('"//"')),
                                                null !== e && null !== (t = Je()) && null !== (r = null !== (r = Fe()) ? r : "") ? (e = [e, t, r]) : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function Fe() {
                                            var e, t, r;
                                            return (r = i), 47 === n.charCodeAt(i) ? ((e = "/"), i++) : ((e = null), u('"/"')), null !== e && null !== (t = We()) ? (e = [e, t]) : ((e = null), (i = r)), e;
                                        }
                                        function je() {
                                            var e, t, n, r;
                                            if (((r = i), null !== (e = Be()))) {
                                                for (t = [], n = Ge(); null !== n; ) t.push(n), (n = Ge());
                                                null !== t ? (e = [e, t]) : ((e = null), (i = r));
                                            } else (e = null), (i = r);
                                            return e;
                                        }
                                        function Ge() {
                                            var e;
                                            return null === (e = y()) && null === (e = T()) && (e = S()), e;
                                        }
                                        function Be() {
                                            var e;
                                            return (
                                                null === (e = T()) &&
                                                    null === (e = S()) &&
                                                    (59 === n.charCodeAt(i) ? ((e = ";"), i++) : ((e = null), u('";"')),
                                                    null === e &&
                                                        (63 === n.charCodeAt(i) ? ((e = "?"), i++) : ((e = null), u('"?"')),
                                                        null === e &&
                                                            (58 === n.charCodeAt(i) ? ((e = ":"), i++) : ((e = null), u('":"')),
                                                            null === e &&
                                                                (64 === n.charCodeAt(i) ? ((e = "@"), i++) : ((e = null), u('"@"')),
                                                                null === e &&
                                                                    (38 === n.charCodeAt(i) ? ((e = "&"), i++) : ((e = null), u('"&"')),
                                                                    null === e &&
                                                                        (61 === n.charCodeAt(i) ? ((e = "="), i++) : ((e = null), u('"="')),
                                                                        null === e &&
                                                                            (43 === n.charCodeAt(i) ? ((e = "+"), i++) : ((e = null), u('"+"')),
                                                                            null === e &&
                                                                                (36 === n.charCodeAt(i) ? ((e = "$"), i++) : ((e = null), u('"$"')), null === e && (44 === n.charCodeAt(i) ? ((e = ","), i++) : ((e = null), u('","'))))))))))),
                                                e
                                            );
                                        }
                                        function We() {
                                            var e, t, r, s, o, l;
                                            if (((o = i), null !== (e = Ve()))) {
                                                for (t = [], l = i, 47 === n.charCodeAt(i) ? ((r = "/"), i++) : ((r = null), u('"/"')), null !== r && null !== (s = Ve()) ? (r = [r, s]) : ((r = null), (i = l)); null !== r; )
                                                    t.push(r), (l = i), 47 === n.charCodeAt(i) ? ((r = "/"), i++) : ((r = null), u('"/"')), null !== r && null !== (s = Ve()) ? (r = [r, s]) : ((r = null), (i = l));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                            } else (e = null), (i = o);
                                            return e;
                                        }
                                        function Ve() {
                                            var e, t, r, s, o, l;
                                            for (o = i, e = [], t = Ye(); null !== t; ) e.push(t), (t = Ye());
                                            if (null !== e) {
                                                for (t = [], l = i, 59 === n.charCodeAt(i) ? ((r = ";"), i++) : ((r = null), u('";"')), null !== r && null !== (s = Ke()) ? (r = [r, s]) : ((r = null), (i = l)); null !== r; )
                                                    t.push(r), (l = i), 59 === n.charCodeAt(i) ? ((r = ";"), i++) : ((r = null), u('";"')), null !== r && null !== (s = Ke()) ? (r = [r, s]) : ((r = null), (i = l));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                            } else (e = null), (i = o);
                                            return e;
                                        }
                                        function Ke() {
                                            var e, t;
                                            for (e = [], t = Ye(); null !== t; ) e.push(t), (t = Ye());
                                            return e;
                                        }
                                        function Ye() {
                                            var e;
                                            return (
                                                null === (e = T()) &&
                                                    null === (e = S()) &&
                                                    (58 === n.charCodeAt(i) ? ((e = ":"), i++) : ((e = null), u('":"')),
                                                    null === e &&
                                                        (64 === n.charCodeAt(i) ? ((e = "@"), i++) : ((e = null), u('"@"')),
                                                        null === e &&
                                                            (38 === n.charCodeAt(i) ? ((e = "&"), i++) : ((e = null), u('"&"')),
                                                            null === e &&
                                                                (61 === n.charCodeAt(i) ? ((e = "="), i++) : ((e = null), u('"="')),
                                                                null === e &&
                                                                    (43 === n.charCodeAt(i) ? ((e = "+"), i++) : ((e = null), u('"+"')),
                                                                    null === e && (36 === n.charCodeAt(i) ? ((e = "$"), i++) : ((e = null), u('"$"')), null === e && (44 === n.charCodeAt(i) ? ((e = ","), i++) : ((e = null), u('","'))))))))),
                                                e
                                            );
                                        }
                                        function ze() {
                                            var e, t, r, s, o;
                                            if (((s = i), (o = i), null !== (e = h()))) {
                                                for (
                                                    t = [],
                                                        null === (r = h()) &&
                                                            null === (r = c()) &&
                                                            (43 === n.charCodeAt(i) ? ((r = "+"), i++) : ((r = null), u('"+"')),
                                                            null === r && (45 === n.charCodeAt(i) ? ((r = "-"), i++) : ((r = null), u('"-"')), null === r && (46 === n.charCodeAt(i) ? ((r = "."), i++) : ((r = null), u('"."')))));
                                                    null !== r;
        
                                                )
                                                    t.push(r),
                                                        null === (r = h()) &&
                                                            null === (r = c()) &&
                                                            (43 === n.charCodeAt(i) ? ((r = "+"), i++) : ((r = null), u('"+"')),
                                                            null === r && (45 === n.charCodeAt(i) ? ((r = "-"), i++) : ((r = null), u('"-"')), null === r && (46 === n.charCodeAt(i) ? ((r = "."), i++) : ((r = null), u('"."')))));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                            } else (e = null), (i = o);
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        Fn.scheme = n.substring(i, e);
                                                    })(s)),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function Je() {
                                            var e;
                                            return null === (e = $e()) && (e = Xe()), e;
                                        }
                                        function $e() {
                                            var e, t, r, s;
                                            return (
                                                (r = i),
                                                (s = i),
                                                null !== (e = te()) ? (64 === n.charCodeAt(i) ? ((t = "@"), i++) : ((t = null), u('"@"')), null !== t ? (e = [e, t]) : ((e = null), (i = s))) : ((e = null), (i = s)),
                                                null !== (e = null !== e ? e : "") && null !== (t = ie()) ? (e = [e, t]) : ((e = null), (i = r)),
                                                (e = null !== e ? e : "")
                                            );
                                        }
                                        function Xe() {
                                            var e, t;
                                            if (
                                                (null === (t = T()) &&
                                                    null === (t = S()) &&
                                                    (36 === n.charCodeAt(i) ? ((t = "$"), i++) : ((t = null), u('"$"')),
                                                    null === t &&
                                                        (44 === n.charCodeAt(i) ? ((t = ","), i++) : ((t = null), u('","')),
                                                        null === t &&
                                                            (59 === n.charCodeAt(i) ? ((t = ";"), i++) : ((t = null), u('";"')),
                                                            null === t &&
                                                                (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                null === t &&
                                                                    (64 === n.charCodeAt(i) ? ((t = "@"), i++) : ((t = null), u('"@"')),
                                                                    null === t &&
                                                                        (38 === n.charCodeAt(i) ? ((t = "&"), i++) : ((t = null), u('"&"')),
                                                                        null === t && (61 === n.charCodeAt(i) ? ((t = "="), i++) : ((t = null), u('"="')), null === t && (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"')))))))))),
                                                null !== t)
                                            )
                                                for (e = []; null !== t; )
                                                    e.push(t),
                                                        null === (t = T()) &&
                                                            null === (t = S()) &&
                                                            (36 === n.charCodeAt(i) ? ((t = "$"), i++) : ((t = null), u('"$"')),
                                                            null === t &&
                                                                (44 === n.charCodeAt(i) ? ((t = ","), i++) : ((t = null), u('","')),
                                                                null === t &&
                                                                    (59 === n.charCodeAt(i) ? ((t = ";"), i++) : ((t = null), u('";"')),
                                                                    null === t &&
                                                                        (58 === n.charCodeAt(i) ? ((t = ":"), i++) : ((t = null), u('":"')),
                                                                        null === t &&
                                                                            (64 === n.charCodeAt(i) ? ((t = "@"), i++) : ((t = null), u('"@"')),
                                                                            null === t &&
                                                                                (38 === n.charCodeAt(i) ? ((t = "&"), i++) : ((t = null), u('"&"')),
                                                                                null === t &&
                                                                                    (61 === n.charCodeAt(i) ? ((t = "="), i++) : ((t = null), u('"="')), null === t && (43 === n.charCodeAt(i) ? ((t = "+"), i++) : ((t = null), u('"+"'))))))))));
                                            else e = null;
                                            return e;
                                        }
                                        function Qe() {
                                            var e, t;
                                            for (e = [], t = Ge(); null !== t; ) e.push(t), (t = Ge());
                                            return e;
                                        }
                                        function Ze() {
                                            var e, t, r, s, o, l, a, h;
                                            if (((a = i), (h = i), "sip" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"SIP"')), null !== e))
                                                if ((47 === n.charCodeAt(i) ? ((t = "/"), i++) : ((t = null), u('"/"')), null !== t)) {
                                                    if (null !== (s = c())) for (r = []; null !== s; ) r.push(s), (s = c());
                                                    else r = null;
                                                    if (null !== r)
                                                        if ((46 === n.charCodeAt(i) ? ((s = "."), i++) : ((s = null), u('"."')), null !== s)) {
                                                            if (null !== (l = c())) for (o = []; null !== l; ) o.push(l), (l = c());
                                                            else o = null;
                                                            null !== o ? (e = [e, t, r, s, o]) : ((e = null), (i = h));
                                                        } else (e = null), (i = h);
                                                    else (e = null), (i = h);
                                                } else (e = null), (i = h);
                                            else (e = null), (i = h);
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        Fn.sip_version = n.substring(i, e);
                                                    })(a)),
                                                null === e && (i = a),
                                                e
                                            );
                                        }
                                        function et() {
                                            var e;
                                            return "INVITE" === n.substr(i, 6) ? ((e = "INVITE"), (i += 6)) : ((e = null), u('"INVITE"')), e;
                                        }
                                        function tt() {
                                            var e;
                                            return "ACK" === n.substr(i, 3) ? ((e = "ACK"), (i += 3)) : ((e = null), u('"ACK"')), e;
                                        }
                                        function nt() {
                                            var e;
                                            return "OPTIONS" === n.substr(i, 7) ? ((e = "OPTIONS"), (i += 7)) : ((e = null), u('"OPTIONS"')), e;
                                        }
                                        function rt() {
                                            var e;
                                            return "BYE" === n.substr(i, 3) ? ((e = "BYE"), (i += 3)) : ((e = null), u('"BYE"')), e;
                                        }
                                        function st() {
                                            var e;
                                            return "CANCEL" === n.substr(i, 6) ? ((e = "CANCEL"), (i += 6)) : ((e = null), u('"CANCEL"')), e;
                                        }
                                        function it() {
                                            var e;
                                            return "REGISTER" === n.substr(i, 8) ? ((e = "REGISTER"), (i += 8)) : ((e = null), u('"REGISTER"')), e;
                                        }
                                        function ot() {
                                            var e;
                                            return "SUBSCRIBE" === n.substr(i, 9) ? ((e = "SUBSCRIBE"), (i += 9)) : ((e = null), u('"SUBSCRIBE"')), e;
                                        }
                                        function lt() {
                                            var e;
                                            return "NOTIFY" === n.substr(i, 6) ? ((e = "NOTIFY"), (i += 6)) : ((e = null), u('"NOTIFY"')), e;
                                        }
                                        function ut() {
                                            var e;
                                            return "REFER" === n.substr(i, 5) ? ((e = "REFER"), (i += 5)) : ((e = null), u('"REFER"')), e;
                                        }
                                        function at() {
                                            var e, t;
                                            return (
                                                (t = i),
                                                null === (e = et()) &&
                                                    null === (e = tt()) &&
                                                    null === (e = nt()) &&
                                                    null === (e = rt()) &&
                                                    null === (e = st()) &&
                                                    null === (e = it()) &&
                                                    null === (e = ot()) &&
                                                    null === (e = lt()) &&
                                                    null === (e = ut()) &&
                                                    (e = k()),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return (Fn.method = n.substring(i, e)), Fn.method;
                                                    })(t)),
                                                null === e && (i = t),
                                                e
                                            );
                                        }
                                        function ct() {
                                            var e, t, n, r, s, o;
                                            return (o = i), null !== (e = Ze()) && null !== (t = m()) && null !== (n = ht()) && null !== (r = m()) && null !== (s = dt()) ? (e = [e, t, n, r, s]) : ((e = null), (i = o)), e;
                                        }
                                        function ht() {
                                            var e, t, n;
                                            return (t = i), null !== (e = ft()) && ((n = e), (e = void (Fn.status_code = parseInt(n.join(""))))), null === e && (i = t), e;
                                        }
                                        function ft() {
                                            var e, t, n, r;
                                            return (r = i), null !== (e = c()) && null !== (t = c()) && null !== (n = c()) ? (e = [e, t, n]) : ((e = null), (i = r)), e;
                                        }
                                        function dt() {
                                            var e, t, r;
                                            for (r = i, e = [], null === (t = y()) && null === (t = T()) && null === (t = S()) && null === (t = I()) && null === (t = O()) && null === (t = m()) && (t = v()); null !== t; )
                                                e.push(t), null === (t = y()) && null === (t = T()) && null === (t = S()) && null === (t = I()) && null === (t = O()) && null === (t = m()) && (t = v());
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        Fn.reason_phrase = n.substring(i, e);
                                                    })(r)),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function _t() {
                                            var e, t, n, r, s, o, l;
                                            if (((s = i), (o = i), null === (e = $()) && (e = pt()), null !== e)) {
                                                for (t = [], l = i, null !== (n = j()) && null !== (r = vt()) ? (n = [n, r]) : ((n = null), (i = l)); null !== n; )
                                                    t.push(n), (l = i), null !== (n = j()) && null !== (r = vt()) ? (n = [n, r]) : ((n = null), (i = l));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                            } else (e = null), (i = o);
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        var t;
                                                        Fn.multi_header || (Fn.multi_header = []);
                                                        try {
                                                            (t = new Hn(Fn.uri, Fn.display_name, Fn.params)), delete Fn.uri, delete Fn.display_name, delete Fn.params;
                                                        } catch (e) {
                                                            t = null;
                                                        }
                                                        Fn.multi_header.push({ possition: i, offset: e, parsed: t });
                                                    })(s)),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function pt() {
                                            var e, t, n, r, s;
                                            return (s = i), null !== (e = null !== (e = mt()) ? e : "") && null !== (t = H()) && null !== (n = X()) && null !== (r = L()) ? (e = [e, t, n, r]) : ((e = null), (i = s)), e;
                                        }
                                        function mt() {
                                            var e, t, n, r, s, o, l, u;
                                            if (((s = i), (o = i), null !== (e = k()))) {
                                                for (t = [], l = i, null !== (n = E()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = l)); null !== n; )
                                                    t.push(n), (l = i), null !== (n = E()) && null !== (r = k()) ? (n = [n, r]) : ((n = null), (i = l));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                            } else (e = null), (i = o);
                                            return (
                                                null === e && (e = Y()),
                                                null !== e &&
                                                    ((u = e),
                                                    (e = void (Fn.display_name =
                                                        "string" == typeof u
                                                            ? u
                                                            : u[1].reduce(function (e, t) {
                                                                  return e + t[0] + t[1];
                                                              }, u[0])))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function vt() {
                                            var e;
                                            return null === (e = gt()) && null === (e = yt()) && (e = St()), e;
                                        }
                                        function gt() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "q" === n.substr(i, 1).toLowerCase() ? ((e = n.substr(i, 1)), i++) : ((e = null), u('"q"')),
                                                null !== e && null !== (t = D()) && null !== (r = Ct()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), Fn.params || (Fn.params = {}), (e = void (Fn.params.q = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function yt() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "expires" === n.substr(i, 7).toLowerCase() ? ((e = n.substr(i, 7)), (i += 7)) : ((e = null), u('"expires"')),
                                                null !== e && null !== (t = D()) && null !== (r = Tt()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), Fn.params || (Fn.params = {}), (e = void (Fn.params.expires = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function Tt() {
                                            var e, t, n;
                                            if (((n = i), null !== (t = c()))) for (e = []; null !== t; ) e.push(t), (t = c());
                                            else e = null;
                                            return null !== e && (e = parseInt(e.join(""))), null === e && (i = n), e;
                                        }
                                        function Ct() {
                                            var e, t, r, s, o, l, a, h;
                                            return (
                                                (l = i),
                                                (a = i),
                                                48 === n.charCodeAt(i) ? ((e = "0"), i++) : ((e = null), u('"0"')),
                                                null !== e
                                                    ? ((h = i),
                                                      46 === n.charCodeAt(i) ? ((t = "."), i++) : ((t = null), u('"."')),
                                                      null !== t && null !== (r = null !== (r = c()) ? r : "") && null !== (s = null !== (s = c()) ? s : "") && null !== (o = null !== (o = c()) ? o : "") ? (t = [t, r, s, o]) : ((t = null), (i = h)),
                                                      null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = a)))
                                                    : ((e = null), (i = a)),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        return parseFloat(n.substring(i, e));
                                                    })(l)),
                                                null === e && (i = l),
                                                e
                                            );
                                        }
                                        function St() {
                                            var e, t, n, r, s, o, l, u;
                                            return (
                                                (r = i),
                                                (s = i),
                                                null !== (e = k())
                                                    ? ((o = i), null !== (t = D()) && null !== (n = Et()) ? (t = [t, n]) : ((t = null), (i = o)), null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = s)))
                                                    : ((e = null), (i = s)),
                                                null !== e && ((l = e[0]), (u = e[1]), Fn.params || (Fn.params = {}), (u = void 0 === u ? void 0 : u[1]), (e = void (Fn.params[l.toLowerCase()] = u))),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function Et() {
                                            var e;
                                            return null === (e = k()) && null === (e = oe()) && (e = K()), e;
                                        }
                                        function At() {
                                            var e;
                                            return (
                                                "render" === n.substr(i, 6).toLowerCase() ? ((e = n.substr(i, 6)), (i += 6)) : ((e = null), u('"render"')),
                                                null === e &&
                                                    ("session" === n.substr(i, 7).toLowerCase() ? ((e = n.substr(i, 7)), (i += 7)) : ((e = null), u('"session"')),
                                                    null === e &&
                                                        ("icon" === n.substr(i, 4).toLowerCase() ? ((e = n.substr(i, 4)), (i += 4)) : ((e = null), u('"icon"')),
                                                        null === e && ("alert" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"alert"')), null === e && (e = k())))),
                                                e
                                            );
                                        }
                                        function bt() {
                                            var e;
                                            return null === (e = Rt()) && (e = St()), e;
                                        }
                                        function Rt() {
                                            var e, t, r, s;
                                            return (
                                                (s = i),
                                                "handling" === n.substr(i, 8).toLowerCase() ? ((e = n.substr(i, 8)), (i += 8)) : ((e = null), u('"handling"')),
                                                null !== e && null !== (t = D())
                                                    ? ("optional" === n.substr(i, 8).toLowerCase() ? ((r = n.substr(i, 8)), (i += 8)) : ((r = null), u('"optional"')),
                                                      null === r && ("required" === n.substr(i, 8).toLowerCase() ? ((r = n.substr(i, 8)), (i += 8)) : ((r = null), u('"required"')), null === r && (r = k())),
                                                      null !== r ? (e = [e, t, r]) : ((e = null), (i = s)))
                                                    : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function wt() {
                                            var e, t, n, r, s, o, l, u;
                                            if (((l = i), null !== (e = It())))
                                                if (null !== (t = P()))
                                                    if (null !== (n = xt())) {
                                                        for (r = [], u = i, null !== (s = j()) && null !== (o = Pt()) ? (s = [s, o]) : ((s = null), (i = u)); null !== s; )
                                                            r.push(s), (u = i), null !== (s = j()) && null !== (o = Pt()) ? (s = [s, o]) : ((s = null), (i = u));
                                                        null !== r ? (e = [e, t, n, r]) : ((e = null), (i = l));
                                                    } else (e = null), (i = l);
                                                else (e = null), (i = l);
                                            else (e = null), (i = l);
                                            return e;
                                        }
                                        function It() {
                                            var e;
                                            return null === (e = Ot()) && (e = kt()), e;
                                        }
                                        function Ot() {
                                            var e;
                                            return (
                                                "text" === n.substr(i, 4).toLowerCase() ? ((e = n.substr(i, 4)), (i += 4)) : ((e = null), u('"text"')),
                                                null === e &&
                                                    ("image" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"image"')),
                                                    null === e &&
                                                        ("audio" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"audio"')),
                                                        null === e &&
                                                            ("video" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"video"')),
                                                            null === e && ("application" === n.substr(i, 11).toLowerCase() ? ((e = n.substr(i, 11)), (i += 11)) : ((e = null), u('"application"')), null === e && (e = Nt()))))),
                                                e
                                            );
                                        }
                                        function kt() {
                                            var e;
                                            return (
                                                "message" === n.substr(i, 7).toLowerCase() ? ((e = n.substr(i, 7)), (i += 7)) : ((e = null), u('"message"')),
                                                null === e && ("multipart" === n.substr(i, 9).toLowerCase() ? ((e = n.substr(i, 9)), (i += 9)) : ((e = null), u('"multipart"')), null === e && (e = Nt())),
                                                e
                                            );
                                        }
                                        function Nt() {
                                            var e;
                                            return null === (e = k()) && (e = Ut()), e;
                                        }
                                        function Ut() {
                                            var e, t, r;
                                            return (r = i), "x-" === n.substr(i, 2).toLowerCase() ? ((e = n.substr(i, 2)), (i += 2)) : ((e = null), u('"x-"')), null !== e && null !== (t = k()) ? (e = [e, t]) : ((e = null), (i = r)), e;
                                        }
                                        function xt() {
                                            var e;
                                            return null === (e = Nt()) && (e = k()), e;
                                        }
                                        function Pt() {
                                            var e, t, n, r;
                                            return (r = i), null !== (e = k()) && null !== (t = D()) && null !== (n = Dt()) ? (e = [e, t, n]) : ((e = null), (i = r)), e;
                                        }
                                        function Dt() {
                                            var e;
                                            return null === (e = k()) && (e = K()), e;
                                        }
                                        function Mt() {
                                            var e, t, n, r;
                                            if (((n = i), null !== (t = c()))) for (e = []; null !== t; ) e.push(t), (t = c());
                                            else e = null;
                                            return null !== e && ((r = e), (e = void (Fn.value = parseInt(r.join(""))))), null === e && (i = n), e;
                                        }
                                        function qt() {
                                            var e, t, r, s, o, l;
                                            if (((o = i), null !== (e = N()))) {
                                                for (t = [], l = i, 46 === n.charCodeAt(i) ? ((r = "."), i++) : ((r = null), u('"."')), null !== r && null !== (s = N()) ? (r = [r, s]) : ((r = null), (i = l)); null !== r; )
                                                    t.push(r), (l = i), 46 === n.charCodeAt(i) ? ((r = "."), i++) : ((r = null), u('"."')), null !== r && null !== (s = N()) ? (r = [r, s]) : ((r = null), (i = l));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                            } else (e = null), (i = o);
                                            return e;
                                        }
                                        function Lt() {
                                            var e;
                                            return null === (e = Ht()) && (e = St()), e;
                                        }
                                        function Ht() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "tag" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"tag"')),
                                                null !== e && null !== (t = D()) && null !== (r = k()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.tag = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function Ft() {
                                            var e, t, r, s, o, l, a, c;
                                            if (((a = i), "digest" === n.substr(i, 6).toLowerCase() ? ((e = n.substr(i, 6)), (i += 6)) : ((e = null), u('"Digest"')), null !== e))
                                                if (null !== (t = E()))
                                                    if (null !== (r = Bt())) {
                                                        for (s = [], c = i, null !== (o = F()) && null !== (l = Bt()) ? (o = [o, l]) : ((o = null), (i = c)); null !== o; )
                                                            s.push(o), (c = i), null !== (o = F()) && null !== (l = Bt()) ? (o = [o, l]) : ((o = null), (i = c));
                                                        null !== s ? (e = [e, t, r, s]) : ((e = null), (i = a));
                                                    } else (e = null), (i = a);
                                                else (e = null), (i = a);
                                            else (e = null), (i = a);
                                            return null === e && (e = jt()), e;
                                        }
                                        function jt() {
                                            var e, t, n, r, s, o, l, u;
                                            if (((l = i), null !== (e = k())))
                                                if (null !== (t = E()))
                                                    if (null !== (n = Gt())) {
                                                        for (r = [], u = i, null !== (s = F()) && null !== (o = Gt()) ? (s = [s, o]) : ((s = null), (i = u)); null !== s; )
                                                            r.push(s), (u = i), null !== (s = F()) && null !== (o = Gt()) ? (s = [s, o]) : ((s = null), (i = u));
                                                        null !== r ? (e = [e, t, n, r]) : ((e = null), (i = l));
                                                    } else (e = null), (i = l);
                                                else (e = null), (i = l);
                                            else (e = null), (i = l);
                                            return e;
                                        }
                                        function Gt() {
                                            var e, t, n, r;
                                            return (r = i), null !== (e = k()) && null !== (t = D()) ? (null === (n = k()) && (n = K()), null !== n ? (e = [e, t, n]) : ((e = null), (i = r))) : ((e = null), (i = r)), e;
                                        }
                                        function Bt() {
                                            var e;
                                            return null === (e = Wt()) && null === (e = Kt()) && null === (e = zt()) && null === (e = $t()) && null === (e = Xt()) && null === (e = Qt()) && null === (e = Zt()) && (e = Gt()), e;
                                        }
                                        function Wt() {
                                            var e, t, r, s;
                                            return (
                                                (s = i),
                                                "realm" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"realm"')),
                                                null !== e && null !== (t = D()) && null !== (r = Vt()) ? (e = [e, t, r]) : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function Vt() {
                                            var e, t, n;
                                            return (t = i), null !== (e = Y()) && ((n = e), (e = void (Fn.realm = n))), null === e && (i = t), e;
                                        }
                                        function Kt() {
                                            var e, t, r, s, o, l, a, c, h;
                                            if (((c = i), "domain" === n.substr(i, 6).toLowerCase() ? ((e = n.substr(i, 6)), (i += 6)) : ((e = null), u('"domain"')), null !== e))
                                                if (null !== (t = D()))
                                                    if (null !== (r = B()))
                                                        if (null !== (s = Yt())) {
                                                            if (((o = []), (h = i), null !== (a = m()))) for (l = []; null !== a; ) l.push(a), (a = m());
                                                            else l = null;
                                                            for (null !== l && null !== (a = Yt()) ? (l = [l, a]) : ((l = null), (i = h)); null !== l; ) {
                                                                if ((o.push(l), (h = i), null !== (a = m()))) for (l = []; null !== a; ) l.push(a), (a = m());
                                                                else l = null;
                                                                null !== l && null !== (a = Yt()) ? (l = [l, a]) : ((l = null), (i = h));
                                                            }
                                                            null !== o && null !== (l = W()) ? (e = [e, t, r, s, o, l]) : ((e = null), (i = c));
                                                        } else (e = null), (i = c);
                                                    else (e = null), (i = c);
                                                else (e = null), (i = c);
                                            else (e = null), (i = c);
                                            return e;
                                        }
                                        function Yt() {
                                            var e;
                                            return null === (e = qe()) && (e = Fe()), e;
                                        }
                                        function zt() {
                                            var e, t, r, s;
                                            return (
                                                (s = i),
                                                "nonce" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"nonce"')),
                                                null !== e && null !== (t = D()) && null !== (r = Jt()) ? (e = [e, t, r]) : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function Jt() {
                                            var e, t, n;
                                            return (t = i), null !== (e = Y()) && ((n = e), (e = void (Fn.nonce = n))), null === e && (i = t), e;
                                        }
                                        function $t() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "opaque" === n.substr(i, 6).toLowerCase() ? ((e = n.substr(i, 6)), (i += 6)) : ((e = null), u('"opaque"')),
                                                null !== e && null !== (t = D()) && null !== (r = Y()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.opaque = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function Xt() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                "stale" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"stale"')),
                                                null !== e && null !== (t = D())
                                                    ? ((o = i),
                                                      "true" === n.substr(i, 4).toLowerCase() ? ((r = n.substr(i, 4)), (i += 4)) : ((r = null), u('"true"')),
                                                      null !== r && (r = void (Fn.stale = !0)),
                                                      null === r && (i = o),
                                                      null === r &&
                                                          ((o = i), "false" === n.substr(i, 5).toLowerCase() ? ((r = n.substr(i, 5)), (i += 5)) : ((r = null), u('"false"')), null !== r && (r = void (Fn.stale = !1)), null === r && (i = o)),
                                                      null !== r ? (e = [e, t, r]) : ((e = null), (i = s)))
                                                    : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function Qt() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "algorithm" === n.substr(i, 9).toLowerCase() ? ((e = n.substr(i, 9)), (i += 9)) : ((e = null), u('"algorithm"')),
                                                null !== e && null !== (t = D())
                                                    ? ("md5" === n.substr(i, 3).toLowerCase() ? ((r = n.substr(i, 3)), (i += 3)) : ((r = null), u('"MD5"')),
                                                      null === r && ("md5-sess" === n.substr(i, 8).toLowerCase() ? ((r = n.substr(i, 8)), (i += 8)) : ((r = null), u('"MD5-sess"')), null === r && (r = k())),
                                                      null !== r ? (e = [e, t, r]) : ((e = null), (i = o)))
                                                    : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.algorithm = l.toUpperCase()))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function Zt() {
                                            var e, t, r, s, o, l, a, c, h, f;
                                            if (((c = i), "qop" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"qop"')), null !== e))
                                                if (null !== (t = D()))
                                                    if (null !== (r = B())) {
                                                        if (((h = i), null !== (s = en()))) {
                                                            for (o = [], f = i, 44 === n.charCodeAt(i) ? ((l = ","), i++) : ((l = null), u('","')), null !== l && null !== (a = en()) ? (l = [l, a]) : ((l = null), (i = f)); null !== l; )
                                                                o.push(l), (f = i), 44 === n.charCodeAt(i) ? ((l = ","), i++) : ((l = null), u('","')), null !== l && null !== (a = en()) ? (l = [l, a]) : ((l = null), (i = f));
                                                            null !== o ? (s = [s, o]) : ((s = null), (i = h));
                                                        } else (s = null), (i = h);
                                                        null !== s && null !== (o = W()) ? (e = [e, t, r, s, o]) : ((e = null), (i = c));
                                                    } else (e = null), (i = c);
                                                else (e = null), (i = c);
                                            else (e = null), (i = c);
                                            return e;
                                        }
                                        function en() {
                                            var e, t, r;
                                            return (
                                                (t = i),
                                                "auth-int" === n.substr(i, 8).toLowerCase() ? ((e = n.substr(i, 8)), (i += 8)) : ((e = null), u('"auth-int"')),
                                                null === e && ("auth" === n.substr(i, 4).toLowerCase() ? ((e = n.substr(i, 4)), (i += 4)) : ((e = null), u('"auth"')), null === e && (e = k())),
                                                null !== e && ((r = e), Fn.qop || (Fn.qop = []), (e = void Fn.qop.push(r.toLowerCase()))),
                                                null === e && (i = t),
                                                e
                                            );
                                        }
                                        function tn() {
                                            var e, t, n, r, s, o, l;
                                            if (((s = i), (o = i), null !== (e = pt()))) {
                                                for (t = [], l = i, null !== (n = j()) && null !== (r = St()) ? (n = [n, r]) : ((n = null), (i = l)); null !== n; )
                                                    t.push(n), (l = i), null !== (n = j()) && null !== (r = St()) ? (n = [n, r]) : ((n = null), (i = l));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = o));
                                            } else (e = null), (i = o);
                                            return (
                                                null !== e &&
                                                    (e = (function (e) {
                                                        var t;
                                                        Fn.multi_header || (Fn.multi_header = []);
                                                        try {
                                                            (t = new Hn(Fn.uri, Fn.display_name, Fn.params)), delete Fn.uri, delete Fn.display_name, delete Fn.params;
                                                        } catch (e) {
                                                            t = null;
                                                        }
                                                        Fn.multi_header.push({ possition: i, offset: e, parsed: t });
                                                    })(s)),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function nn() {
                                            var e;
                                            return null === (e = rn()) && (e = St()), e;
                                        }
                                        function rn() {
                                            var e, t, r, s, o, l, a;
                                            if (((o = i), (l = i), "cause" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"cause"')), null !== e))
                                                if (null !== (t = D())) {
                                                    if (null !== (s = c())) for (r = []; null !== s; ) r.push(s), (s = c());
                                                    else r = null;
                                                    null !== r ? (e = [e, t, r]) : ((e = null), (i = l));
                                                } else (e = null), (i = l);
                                            else (e = null), (i = l);
                                            return null !== e && ((a = e[2]), (e = void (Fn.cause = parseInt(a.join(""))))), null === e && (i = o), e;
                                        }
                                        function sn() {
                                            var e, t, n, r, s, o;
                                            if (((s = i), null !== (e = pt()))) {
                                                for (t = [], o = i, null !== (n = j()) && null !== (r = St()) ? (n = [n, r]) : ((n = null), (i = o)); null !== n; )
                                                    t.push(n), (o = i), null !== (n = j()) && null !== (r = St()) ? (n = [n, r]) : ((n = null), (i = o));
                                                null !== t ? (e = [e, t]) : ((e = null), (i = s));
                                            } else (e = null), (i = s);
                                            return e;
                                        }
                                        function on() {
                                            var e, t;
                                            return (
                                                (t = i),
                                                "active" === n.substr(i, 6).toLowerCase() ? ((e = n.substr(i, 6)), (i += 6)) : ((e = null), u('"active"')),
                                                null === e &&
                                                    ("pending" === n.substr(i, 7).toLowerCase() ? ((e = n.substr(i, 7)), (i += 7)) : ((e = null), u('"pending"')),
                                                    null === e && ("terminated" === n.substr(i, 10).toLowerCase() ? ((e = n.substr(i, 10)), (i += 10)) : ((e = null), u('"terminated"')), null === e && (e = k()))),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        Fn.state = n.substring(i, e);
                                                    })(t)),
                                                null === e && (i = t),
                                                e
                                            );
                                        }
                                        function ln() {
                                            var e, t, r, s, o, l, a, c;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "reason" === n.substr(i, 6).toLowerCase() ? ((e = n.substr(i, 6)), (i += 6)) : ((e = null), u('"reason"')),
                                                null !== e && null !== (t = D()) && null !== (r = un()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && (e = void (void 0 !== (l = e[2]) && (Fn.reason = l))),
                                                null === e && (i = s),
                                                null === e &&
                                                    ((s = i),
                                                    (o = i),
                                                    "expires" === n.substr(i, 7).toLowerCase() ? ((e = n.substr(i, 7)), (i += 7)) : ((e = null), u('"expires"')),
                                                    null !== e && null !== (t = D()) && null !== (r = Tt()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                    null !== e && (e = void (void 0 !== (c = e[2]) && (Fn.expires = c))),
                                                    null === e && (i = s),
                                                    null === e &&
                                                        ((s = i),
                                                        (o = i),
                                                        "retry_after" === n.substr(i, 11).toLowerCase() ? ((e = n.substr(i, 11)), (i += 11)) : ((e = null), u('"retry_after"')),
                                                        null !== e && null !== (t = D()) && null !== (r = Tt()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                        null !== e && (e = void (void 0 !== (a = e[2]) && (Fn.retry_after = a))),
                                                        null === e && (i = s),
                                                        null === e && (e = St()))),
                                                e
                                            );
                                        }
                                        function un() {
                                            var e;
                                            return (
                                                "deactivated" === n.substr(i, 11).toLowerCase() ? ((e = n.substr(i, 11)), (i += 11)) : ((e = null), u('"deactivated"')),
                                                null === e &&
                                                    ("probation" === n.substr(i, 9).toLowerCase() ? ((e = n.substr(i, 9)), (i += 9)) : ((e = null), u('"probation"')),
                                                    null === e &&
                                                        ("rejected" === n.substr(i, 8).toLowerCase() ? ((e = n.substr(i, 8)), (i += 8)) : ((e = null), u('"rejected"')),
                                                        null === e &&
                                                            ("timeout" === n.substr(i, 7).toLowerCase() ? ((e = n.substr(i, 7)), (i += 7)) : ((e = null), u('"timeout"')),
                                                            null === e &&
                                                                ("giveup" === n.substr(i, 6).toLowerCase() ? ((e = n.substr(i, 6)), (i += 6)) : ((e = null), u('"giveup"')),
                                                                null === e &&
                                                                    ("noresource" === n.substr(i, 10).toLowerCase() ? ((e = n.substr(i, 10)), (i += 10)) : ((e = null), u('"noresource"')),
                                                                    null === e && ("invariant" === n.substr(i, 9).toLowerCase() ? ((e = n.substr(i, 9)), (i += 9)) : ((e = null), u('"invariant"')), null === e && (e = k()))))))),
                                                e
                                            );
                                        }
                                        function an() {
                                            var e;
                                            return null === (e = Ht()) && (e = St()), e;
                                        }
                                        function cn() {
                                            var e, t, n, r, s, o, l, u;
                                            if (((l = i), null !== (e = gn())))
                                                if (null !== (t = E()))
                                                    if (null !== (n = Cn())) {
                                                        for (r = [], u = i, null !== (s = j()) && null !== (o = hn()) ? (s = [s, o]) : ((s = null), (i = u)); null !== s; )
                                                            r.push(s), (u = i), null !== (s = j()) && null !== (o = hn()) ? (s = [s, o]) : ((s = null), (i = u));
                                                        null !== r ? (e = [e, t, n, r]) : ((e = null), (i = l));
                                                    } else (e = null), (i = l);
                                                else (e = null), (i = l);
                                            else (e = null), (i = l);
                                            return e;
                                        }
                                        function hn() {
                                            var e;
                                            return null === (e = fn()) && null === (e = dn()) && null === (e = _n()) && null === (e = pn()) && null === (e = mn()) && (e = St()), e;
                                        }
                                        function fn() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "ttl" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"ttl"')),
                                                null !== e && null !== (t = D()) && null !== (r = An()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.ttl = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function dn() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "maddr" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"maddr"')),
                                                null !== e && null !== (t = D()) && null !== (r = oe()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.maddr = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function _n() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "received" === n.substr(i, 8).toLowerCase() ? ((e = n.substr(i, 8)), (i += 8)) : ((e = null), u('"received"')),
                                                null !== e && null !== (t = D()) ? (null === (r = _e()) && (r = he()), null !== r ? (e = [e, t, r]) : ((e = null), (i = o))) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.received = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function pn() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "branch" === n.substr(i, 6).toLowerCase() ? ((e = n.substr(i, 6)), (i += 6)) : ((e = null), u('"branch"')),
                                                null !== e && null !== (t = D()) && null !== (r = k()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.branch = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function mn() {
                                            var e, t, r, s, o;
                                            return (
                                                (s = i),
                                                "rport" === n.substr(i, 5).toLowerCase() ? ((e = n.substr(i, 5)), (i += 5)) : ((e = null), u('"rport"')),
                                                null !== e
                                                    ? ((o = i), null !== (t = D()) && null !== (r = vn()) ? (t = [t, r]) : ((t = null), (i = o)), null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = s)))
                                                    : ((e = null), (i = s)),
                                                e
                                            );
                                        }
                                        function vn() {
                                            var e, t, n, r, s, o, l, u;
                                            return (
                                                (o = i),
                                                (l = i),
                                                null !== (e = null !== (e = c()) ? e : "") &&
                                                null !== (t = null !== (t = c()) ? t : "") &&
                                                null !== (n = null !== (n = c()) ? n : "") &&
                                                null !== (r = null !== (r = c()) ? r : "") &&
                                                null !== (s = null !== (s = c()) ? s : "")
                                                    ? (e = [e, t, n, r, s])
                                                    : ((e = null), (i = l)),
                                                null !== e && ((u = e), (e = void (Fn.rport = parseInt(u.join(""))))),
                                                null === e && (i = o),
                                                e
                                            );
                                        }
                                        function gn() {
                                            var e, t, n, r, s, o;
                                            return (o = i), null !== (e = yn()) && null !== (t = P()) && null !== (n = k()) && null !== (r = P()) && null !== (s = Tn()) ? (e = [e, t, n, r, s]) : ((e = null), (i = o)), e;
                                        }
                                        function yn() {
                                            var e, t, r;
                                            return (
                                                (t = i),
                                                "sip" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"SIP"')),
                                                null === e && (e = k()),
                                                null !== e && ((r = e), (e = void (Fn.protocol = r))),
                                                null === e && (i = t),
                                                e
                                            );
                                        }
                                        function Tn() {
                                            var e, t, r;
                                            return (
                                                (t = i),
                                                "udp" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"UDP"')),
                                                null === e &&
                                                    ("tcp" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"TCP"')),
                                                    null === e &&
                                                        ("tls" === n.substr(i, 3).toLowerCase() ? ((e = n.substr(i, 3)), (i += 3)) : ((e = null), u('"TLS"')),
                                                        null === e && ("sctp" === n.substr(i, 4).toLowerCase() ? ((e = n.substr(i, 4)), (i += 4)) : ((e = null), u('"SCTP"')), null === e && (e = k())))),
                                                null !== e && ((r = e), (e = void (Fn.transport = r))),
                                                null === e && (i = t),
                                                e
                                            );
                                        }
                                        function Cn() {
                                            var e, t, n, r, s;
                                            return (
                                                (r = i),
                                                null !== (e = Sn())
                                                    ? ((s = i), null !== (t = G()) && null !== (n = En()) ? (t = [t, n]) : ((t = null), (i = s)), null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = r)))
                                                    : ((e = null), (i = r)),
                                                e
                                            );
                                        }
                                        function Sn() {
                                            var e, t;
                                            return (
                                                (t = i),
                                                null === (e = _e()) && null === (e = ce()) && (e = le()),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        Fn.host = n.substring(i, e);
                                                    })(t)),
                                                null === e && (i = t),
                                                e
                                            );
                                        }
                                        function En() {
                                            var e, t, n, r, s, o, l, u;
                                            return (
                                                (o = i),
                                                (l = i),
                                                null !== (e = null !== (e = c()) ? e : "") &&
                                                null !== (t = null !== (t = c()) ? t : "") &&
                                                null !== (n = null !== (n = c()) ? n : "") &&
                                                null !== (r = null !== (r = c()) ? r : "") &&
                                                null !== (s = null !== (s = c()) ? s : "")
                                                    ? (e = [e, t, n, r, s])
                                                    : ((e = null), (i = l)),
                                                null !== e && ((u = e), (e = void (Fn.port = parseInt(u.join(""))))),
                                                null === e && (i = o),
                                                e
                                            );
                                        }
                                        function An() {
                                            var e, t, n, r, s;
                                            return (
                                                (r = i),
                                                (s = i),
                                                null !== (e = c()) && null !== (t = null !== (t = c()) ? t : "") && null !== (n = null !== (n = c()) ? n : "") ? (e = [e, t, n]) : ((e = null), (i = s)),
                                                null !== e && (e = parseInt(e.join(""))),
                                                null === e && (i = r),
                                                e
                                            );
                                        }
                                        function bn() {
                                            var e, t, n;
                                            return (t = i), null !== (e = Tt()) && ((n = e), (e = void (Fn.expires = n))), null === e && (i = t), e;
                                        }
                                        function Rn() {
                                            var e;
                                            return null === (e = wn()) && (e = St()), e;
                                        }
                                        function wn() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "refresher" === n.substr(i, 9).toLowerCase() ? ((e = n.substr(i, 9)), (i += 9)) : ((e = null), u('"refresher"')),
                                                null !== e && null !== (t = D())
                                                    ? ("uac" === n.substr(i, 3).toLowerCase() ? ((r = n.substr(i, 3)), (i += 3)) : ((r = null), u('"uac"')),
                                                      null === r && ("uas" === n.substr(i, 3).toLowerCase() ? ((r = n.substr(i, 3)), (i += 3)) : ((r = null), u('"uas"'))),
                                                      null !== r ? (e = [e, t, r]) : ((e = null), (i = o)))
                                                    : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.refresher = l.toLowerCase()))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function In() {
                                            var e, t;
                                            for (e = [], null === (t = w()) && null === (t = O()) && (t = E()); null !== t; ) e.push(t), null === (t = w()) && null === (t = O()) && (t = E());
                                            return e;
                                        }
                                        function On() {
                                            var e, t, r, s, o, l, a, c, h, f, d;
                                            return (
                                                (f = i),
                                                (d = i),
                                                null !== (e = Nn())
                                                    ? (45 === n.charCodeAt(i) ? ((t = "-"), i++) : ((t = null), u('"-"')),
                                                      null !== t && null !== (r = kn())
                                                          ? (45 === n.charCodeAt(i) ? ((s = "-"), i++) : ((s = null), u('"-"')),
                                                            null !== s && null !== (o = kn())
                                                                ? (45 === n.charCodeAt(i) ? ((l = "-"), i++) : ((l = null), u('"-"')),
                                                                  null !== l && null !== (a = kn())
                                                                      ? (45 === n.charCodeAt(i) ? ((c = "-"), i++) : ((c = null), u('"-"')), null !== c && null !== (h = Un()) ? (e = [e, t, r, s, o, l, a, c, h]) : ((e = null), (i = d)))
                                                                      : ((e = null), (i = d)))
                                                                : ((e = null), (i = d)))
                                                          : ((e = null), (i = d)))
                                                    : ((e = null), (i = d)),
                                                null !== e &&
                                                    (e = (function (e, t) {
                                                        Fn = n.substring(i + 5, e);
                                                    })(f, e[0])),
                                                null === e && (i = f),
                                                e
                                            );
                                        }
                                        function kn() {
                                            var e, t, n, r, s;
                                            return (s = i), null !== (e = f()) && null !== (t = f()) && null !== (n = f()) && null !== (r = f()) ? (e = [e, t, n, r]) : ((e = null), (i = s)), e;
                                        }
                                        function Nn() {
                                            var e, t, n;
                                            return (n = i), null !== (e = kn()) && null !== (t = kn()) ? (e = [e, t]) : ((e = null), (i = n)), e;
                                        }
                                        function Un() {
                                            var e, t, n, r;
                                            return (r = i), null !== (e = kn()) && null !== (t = kn()) && null !== (n = kn()) ? (e = [e, t, n]) : ((e = null), (i = r)), e;
                                        }
                                        function xn() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                null !== (e = U())
                                                    ? ((l = i),
                                                      64 === n.charCodeAt(i) ? ((t = "@"), i++) : ((t = null), u('"@"')),
                                                      null !== t && null !== (r = U()) ? (t = [t, r]) : ((t = null), (i = l)),
                                                      null !== (t = null !== t ? t : "") ? (e = [e, t]) : ((e = null), (i = o)))
                                                    : ((e = null), (i = o)),
                                                null !== e &&
                                                    (e = (function (e) {
                                                        Fn.call_id = n.substring(i, e);
                                                    })(s)),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function Pn() {
                                            var e;
                                            return null === (e = Dn()) && null === (e = Mn()) && null === (e = qn()) && (e = St()), e;
                                        }
                                        function Dn() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "to-tag" === n.substr(i, 6) ? ((e = "to-tag"), (i += 6)) : ((e = null), u('"to-tag"')),
                                                null !== e && null !== (t = D()) && null !== (r = k()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.to_tag = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function Mn() {
                                            var e, t, r, s, o, l;
                                            return (
                                                (s = i),
                                                (o = i),
                                                "from-tag" === n.substr(i, 8) ? ((e = "from-tag"), (i += 8)) : ((e = null), u('"from-tag"')),
                                                null !== e && null !== (t = D()) && null !== (r = k()) ? (e = [e, t, r]) : ((e = null), (i = o)),
                                                null !== e && ((l = e[2]), (e = void (Fn.from_tag = l))),
                                                null === e && (i = s),
                                                e
                                            );
                                        }
                                        function qn() {
                                            var e, t;
                                            return (t = i), "early-only" === n.substr(i, 10) ? ((e = "early-only"), (i += 10)) : ((e = null), u('"early-only"')), null !== e && (e = void (Fn.early_only = !0)), null === e && (i = t), e;
                                        }
                                        var Ln = e("./URI"),
                                            Hn = e("./NameAddrHeader"),
                                            Fn = {};
                                        if (null === s[r]() || i !== n.length) {
                                            var jn = Math.max(i, o),
                                                Gn = jn < n.length ? n.charAt(jn) : null,
                                                Bn = (function () {
                                                    for (var e = 1, t = 1, r = !1, s = 0; s < Math.max(i, o); s++) {
                                                        var l = n.charAt(s);
                                                        "\n" === l ? (r || e++, (t = 1), (r = !1)) : "\r" === l || "\u2028" === l || "\u2029" === l ? (e++, (t = 1), (r = !0)) : (t++, (r = !1));
                                                    }
                                                    return { line: e, column: t };
                                                })();
                                            return (
                                                new this.SyntaxError(
                                                    (function (e) {
                                                        e.sort();
                                                        for (var t = null, n = [], r = 0; r < e.length; r++) e[r] !== t && (n.push(e[r]), (t = e[r]));
                                                        return n;
                                                    })(l),
                                                    Gn,
                                                    jn,
                                                    Bn.line,
                                                    Bn.column
                                                ),
                                                -1
                                            );
                                        }
                                        return Fn;
                                    },
                                    toSource: function () {
                                        return this._source;
                                    },
                                    SyntaxError: function (e, n, r, s, i) {
                                        (this.name = "SyntaxError"),
                                            (this.expected = e),
                                            (this.found = n),
                                            (this.message = (function (e, n) {
                                                var r;
                                                switch (e.length) {
                                                    case 0:
                                                        r = "end of input";
                                                        break;
                                                    case 1:
                                                        r = e[0];
                                                        break;
                                                    default:
                                                        r = e.slice(0, e.length - 1).join(", ") + " or " + e[e.length - 1];
                                                }
                                                return "Expected " + r + " but " + (n ? t(n) : "end of input") + " found.";
                                            })(e, n)),
                                            (this.offset = r),
                                            (this.line = s),
                                            (this.column = i);
                                    },
                                };
                                return (n.SyntaxError.prototype = Error.prototype), n;
                            })();
                        },
                        { "./NameAddrHeader": 10, "./URI": 25 },
                    ],
                    8: [
                        function (e, t, n) {
                            "use strict";
                            var r = e("../package.json"),
                                s = e("./Constants"),
                                i = e("./Exceptions"),
                                o = e("./Utils"),
                                l = e("./UA"),
                                u = e("./URI"),
                                a = e("./NameAddrHeader"),
                                c = e("./Grammar"),
                                h = e("./WebSocketInterface");
                            e("debug")("JsSIP")("version %s", r.version),
                                (t.exports = {
                                    C: s,
                                    Exceptions: i,
                                    Utils: o,
                                    UA: l,
                                    URI: u,
                                    NameAddrHeader: a,
                                    WebSocketInterface: h,
                                    Grammar: c,
                                    debug: e("debug"),
                                    get name() {
                                        return r.title;
                                    },
                                    get version() {
                                        return r.version;
                                    },
                                });
                        },
                        { "../package.json": 38, "./Constants": 2, "./Exceptions": 6, "./Grammar": 7, "./NameAddrHeader": 10, "./UA": 24, "./URI": 25, "./Utils": 26, "./WebSocketInterface": 27, debug: 29 },
                    ],
                    9: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            function i(e, t) {
                                return (i =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    })(e, t);
                            }
                            function o(e) {
                                var t = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var n,
                                        r = u(e);
                                    if (t) {
                                        var s = u(this).constructor;
                                        n = Reflect.construct(r, arguments, s);
                                    } else n = r.apply(this, arguments);
                                    return l(this, n);
                                };
                            }
                            function l(e, t) {
                                return !t || ("object" !== r(t) && "function" != typeof t)
                                    ? (function (e) {
                                          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                          return e;
                                      })(e)
                                    : t;
                            }
                            function u(e) {
                                return (u = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      })(e);
                            }
                            var a = e("events").EventEmitter,
                                c = e("./Constants"),
                                h = e("./SIPMessage"),
                                f = e("./Utils"),
                                d = e("./RequestSender"),
                                _ = e("./Exceptions"),
                                p = e("debug")("JsSIP:Message");
                            t.exports = (function (e) {
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
                                })(u, e);
                                var t,
                                    n,
                                    r,
                                    l = o(u);
                                function u(e) {
                                    var t;
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, u),
                                        ((t = l.call(this))._ua = e),
                                        (t._request = null),
                                        (t._closed = !1),
                                        (t._direction = null),
                                        (t._local_identity = null),
                                        (t._remote_identity = null),
                                        (t._is_replied = !1),
                                        (t._data = {}),
                                        t
                                    );
                                }
                                return (
                                    (t = u),
                                    (n = [
                                        {
                                            key: "direction",
                                            get: function () {
                                                return this._direction;
                                            },
                                        },
                                        {
                                            key: "local_identity",
                                            get: function () {
                                                return this._local_identity;
                                            },
                                        },
                                        {
                                            key: "remote_identity",
                                            get: function () {
                                                return this._remote_identity;
                                            },
                                        },
                                        {
                                            key: "send",
                                            value: function (e, t) {
                                                var n = this,
                                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                                    s = e;
                                                if (void 0 === e || void 0 === t) throw new TypeError("Not enough arguments");
                                                if (!(e = this._ua.normalizeTarget(e))) throw new TypeError("Invalid target: ".concat(s));
                                                var i = f.cloneArray(r.extraHeaders),
                                                    o = f.cloneObject(r.eventHandlers),
                                                    l = r.contentType || "text/plain";
                                                for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && this.on(u, o[u]);
                                                i.push("Content-Type: ".concat(l)), (this._request = new h.OutgoingRequest(c.MESSAGE, e, this._ua, null, i)), t && (this._request.body = t);
                                                var a = new d(this._ua, this._request, {
                                                    onRequestTimeout: function () {
                                                        n._onRequestTimeout();
                                                    },
                                                    onTransportError: function () {
                                                        n._onTransportError();
                                                    },
                                                    onReceiveResponse: function (e) {
                                                        n._receiveResponse(e);
                                                    },
                                                });
                                                this._newMessage("local", this._request), a.send();
                                            },
                                        },
                                        {
                                            key: "init_incoming",
                                            value: function (e) {
                                                (this._request = e), this._newMessage("remote", e), this._is_replied || ((this._is_replied = !0), e.reply(200)), this._close();
                                            },
                                        },
                                        {
                                            key: "accept",
                                            value: function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    t = f.cloneArray(e.extraHeaders),
                                                    n = e.body;
                                                if ("incoming" !== this._direction) throw new _.NotSupportedError('"accept" not supported for outgoing Message');
                                                if (this._is_replied) throw new Error("incoming Message already replied");
                                                (this._is_replied = !0), this._request.reply(200, null, t, n);
                                            },
                                        },
                                        {
                                            key: "reject",
                                            value: function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    t = e.status_code || 480,
                                                    n = e.reason_phrase,
                                                    r = f.cloneArray(e.extraHeaders),
                                                    s = e.body;
                                                if ("incoming" !== this._direction) throw new _.NotSupportedError('"reject" not supported for outgoing Message');
                                                if (this._is_replied) throw new Error("incoming Message already replied");
                                                if (t < 300 || t >= 700) throw new TypeError("Invalid status_code: ".concat(t));
                                                (this._is_replied = !0), this._request.reply(t, n, r, s);
                                            },
                                        },
                                        {
                                            key: "_receiveResponse",
                                            value: function (e) {
                                                if (!this._closed)
                                                    switch (!0) {
                                                        case /^1[0-9]{2}$/.test(e.status_code):
                                                            break;
                                                        case /^2[0-9]{2}$/.test(e.status_code):
                                                            this._succeeded("remote", e);
                                                            break;
                                                        default:
                                                            var t = f.sipErrorCause(e.status_code);
                                                            this._failed("remote", e, t);
                                                    }
                                            },
                                        },
                                        {
                                            key: "_onRequestTimeout",
                                            value: function () {
                                                this._closed || this._failed("system", null, c.causes.REQUEST_TIMEOUT);
                                            },
                                        },
                                        {
                                            key: "_onTransportError",
                                            value: function () {
                                                this._closed || this._failed("system", null, c.causes.CONNECTION_ERROR);
                                            },
                                        },
                                        {
                                            key: "_close",
                                            value: function () {
                                                (this._closed = !0), this._ua.destroyMessage(this);
                                            },
                                        },
                                        {
                                            key: "_newMessage",
                                            value: function (e, t) {
                                                "remote" === e
                                                    ? ((this._direction = "incoming"), (this._local_identity = t.to), (this._remote_identity = t.from))
                                                    : "local" === e && ((this._direction = "outgoing"), (this._local_identity = t.from), (this._remote_identity = t.to)),
                                                    this._ua.newMessage(this, { originator: e, message: this, request: t });
                                            },
                                        },
                                        {
                                            key: "_failed",
                                            value: function (e, t, n) {
                                                p("MESSAGE failed"), this._close(), p('emit "failed"'), this.emit("failed", { originator: e, response: t || null, cause: n });
                                            },
                                        },
                                        {
                                            key: "_succeeded",
                                            value: function (e, t) {
                                                p("MESSAGE succeeded"), this._close(), p('emit "succeeded"'), this.emit("succeeded", { originator: e, response: t });
                                            },
                                        },
                                    ]) && s(t.prototype, n),
                                    r && s(t, r),
                                    u
                                );
                            })(a);
                        },
                        { "./Constants": 2, "./Exceptions": 6, "./RequestSender": 18, "./SIPMessage": 19, "./Utils": 26, debug: 29, events: 31 },
                    ],
                    10: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var s = e("./URI"),
                                i = e("./Grammar");
                            t.exports = (function () {
                                function e(t, n, r) {
                                    if (
                                        ((function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, e),
                                        !(t && t instanceof s))
                                    )
                                        throw new TypeError('missing or invalid "uri" parameter');
                                    for (var i in ((this._uri = t), (this._parameters = {}), (this.display_name = n), r)) Object.prototype.hasOwnProperty.call(r, i) && this.setParam(i, r[i]);
                                }
                                var t, n, o;
                                return (
                                    (t = e),
                                    (o = [
                                        {
                                            key: "parse",
                                            value: function (e) {
                                                return -1 !== (e = i.parse(e, "Name_Addr_Header")) ? e : void 0;
                                            },
                                        },
                                    ]),
                                    (n = [
                                        {
                                            key: "uri",
                                            get: function () {
                                                return this._uri;
                                            },
                                        },
                                        {
                                            key: "display_name",
                                            get: function () {
                                                return this._display_name;
                                            },
                                            set: function (e) {
                                                this._display_name = 0 === e ? "0" : e;
                                            },
                                        },
                                        {
                                            key: "setParam",
                                            value: function (e, t) {
                                                e && (this._parameters[e.toLowerCase()] = null == t ? null : t.toString());
                                            },
                                        },
                                        {
                                            key: "getParam",
                                            value: function (e) {
                                                if (e) return this._parameters[e.toLowerCase()];
                                            },
                                        },
                                        {
                                            key: "hasParam",
                                            value: function (e) {
                                                if (e) return !!this._parameters.hasOwnProperty(e.toLowerCase());
                                            },
                                        },
                                        {
                                            key: "deleteParam",
                                            value: function (e) {
                                                if (((e = e.toLowerCase()), this._parameters.hasOwnProperty(e))) {
                                                    var t = this._parameters[e];
                                                    return delete this._parameters[e], t;
                                                }
                                            },
                                        },
                                        {
                                            key: "clearParams",
                                            value: function () {
                                                this._parameters = {};
                                            },
                                        },
                                        {
                                            key: "clone",
                                            value: function () {
                                                return new e(this._uri.clone(), this._display_name, JSON.parse(JSON.stringify(this._parameters)));
                                            },
                                        },
                                        {
                                            key: "_quote",
                                            value: function (e) {
                                                return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
                                            },
                                        },
                                        {
                                            key: "toString",
                                            value: function () {
                                                var e = this._display_name ? '"'.concat(this._quote(this._display_name), '" ') : "";
                                                for (var t in ((e += "<".concat(this._uri.toString(), ">")), this._parameters))
                                                    Object.prototype.hasOwnProperty.call(this._parameters, t) && ((e += ";".concat(t)), null !== this._parameters[t] && (e += "=".concat(this._parameters[t])));
                                                return e;
                                            },
                                        },
                                    ]) && r(t.prototype, n),
                                    o && r(t, o),
                                    e
                                );
                            })();
                        },
                        { "./Grammar": 7, "./URI": 25 },
                    ],
                    11: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                var n;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (
                                        Array.isArray(e) ||
                                        (n = (function (e, t) {
                                            if (!e) return;
                                            if ("string" == typeof e) return s(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                        })(e)) ||
                                        (t && e && "number" == typeof e.length)
                                    ) {
                                        n && (e = n);
                                        var r = 0,
                                            i = function () {};
                                        return {
                                            s: i,
                                            n: function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: i,
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var o,
                                    l = !0,
                                    u = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return (l = e.done), e;
                                    },
                                    e: function (e) {
                                        (u = !0), (o = e);
                                    },
                                    f: function () {
                                        try {
                                            l || null == n.return || n.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    },
                                };
                            }
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                                return r;
                            }
                            var i = e("./Grammar"),
                                o = e("./SIPMessage"),
                                l = e("debug")("JsSIP:ERROR:Parser");
                            function u(e, t) {
                                var n = t,
                                    r = 0,
                                    s = 0;
                                if (e.substring(n, n + 2).match(/(^\r\n)/)) return -2;
                                for (; 0 === r; ) {
                                    if (-1 === (s = e.indexOf("\r\n", n))) return s;
                                    !e.substring(s + 2, s + 4).match(/(^\r\n)/) && e.charAt(s + 2).match(/(^\s+)/) ? (n = s + 2) : (r = s);
                                }
                                return r;
                            }
                            function a(e, t, n, s) {
                                var l,
                                    u = t.indexOf(":", n),
                                    a = t.substring(n, u).trim(),
                                    c = t.substring(u + 1, s).trim();
                                switch (a.toLowerCase()) {
                                    case "via":
                                    case "v":
                                        e.addHeader("via", c), 1 === e.getHeaders("via").length ? (l = e.parseHeader("Via")) && ((e.via = l), (e.via_branch = l.branch)) : (l = 0);
                                        break;
                                    case "from":
                                    case "f":
                                        e.setHeader("from", c), (l = e.parseHeader("from")) && ((e.from = l), (e.from_tag = l.getParam("tag")));
                                        break;
                                    case "to":
                                    case "t":
                                        e.setHeader("to", c), (l = e.parseHeader("to")) && ((e.to = l), (e.to_tag = l.getParam("tag")));
                                        break;
                                    case "record-route":
                                        if (-1 === (l = i.parse(c, "Record_Route"))) l = void 0;
                                        else {
                                            var h,
                                                f = r(l);
                                            try {
                                                for (f.s(); !(h = f.n()).done; ) {
                                                    var d = h.value;
                                                    e.addHeader("record-route", c.substring(d.possition, d.offset)), (e.headers["Record-Route"][e.getHeaders("record-route").length - 1].parsed = d.parsed);
                                                }
                                            } catch (e) {
                                                f.e(e);
                                            } finally {
                                                f.f();
                                            }
                                        }
                                        break;
                                    case "call-id":
                                    case "i":
                                        e.setHeader("call-id", c), (l = e.parseHeader("call-id")) && (e.call_id = c);
                                        break;
                                    case "contact":
                                    case "m":
                                        if (-1 === (l = i.parse(c, "Contact"))) l = void 0;
                                        else {
                                            var _,
                                                p = r(l);
                                            try {
                                                for (p.s(); !(_ = p.n()).done; ) {
                                                    var m = _.value;
                                                    e.addHeader("contact", c.substring(m.possition, m.offset)), (e.headers.Contact[e.getHeaders("contact").length - 1].parsed = m.parsed);
                                                }
                                            } catch (e) {
                                                p.e(e);
                                            } finally {
                                                p.f();
                                            }
                                        }
                                        break;
                                    case "content-length":
                                    case "l":
                                        e.setHeader("content-length", c), (l = e.parseHeader("content-length"));
                                        break;
                                    case "content-type":
                                    case "c":
                                        e.setHeader("content-type", c), (l = e.parseHeader("content-type"));
                                        break;
                                    case "cseq":
                                        e.setHeader("cseq", c), (l = e.parseHeader("cseq")) && (e.cseq = l.value), e instanceof o.IncomingResponse && (e.method = l.method);
                                        break;
                                    case "max-forwards":
                                        e.setHeader("max-forwards", c), (l = e.parseHeader("max-forwards"));
                                        break;
                                    case "www-authenticate":
                                        e.setHeader("www-authenticate", c), (l = e.parseHeader("www-authenticate"));
                                        break;
                                    case "proxy-authenticate":
                                        e.setHeader("proxy-authenticate", c), (l = e.parseHeader("proxy-authenticate"));
                                        break;
                                    case "session-expires":
                                    case "x":
                                        e.setHeader("session-expires", c), (l = e.parseHeader("session-expires")) && ((e.session_expires = l.expires), (e.session_expires_refresher = l.refresher));
                                        break;
                                    case "refer-to":
                                    case "r":
                                        e.setHeader("refer-to", c), (l = e.parseHeader("refer-to")) && (e.refer_to = l);
                                        break;
                                    case "replaces":
                                        e.setHeader("replaces", c), (l = e.parseHeader("replaces")) && (e.replaces = l);
                                        break;
                                    case "event":
                                    case "o":
                                        e.setHeader("event", c), (l = e.parseHeader("event")) && (e.event = l);
                                        break;
                                    default:
                                        e.addHeader(a, c), (l = 0);
                                }
                                return void 0 !== l || { error: 'error parsing header "'.concat(a, '"') };
                            }
                            (l.log = console.warn.bind(console)),
                                (n.parseMessage = function (e, t) {
                                    var n,
                                        r,
                                        s = e.indexOf("\r\n");
                                    if (-1 !== s) {
                                        var c = e.substring(0, s),
                                            h = i.parse(c, "Request_Response");
                                        if (-1 !== h) {
                                            h.status_code ? (((n = new o.IncomingResponse()).status_code = h.status_code), (n.reason_phrase = h.reason_phrase)) : (((n = new o.IncomingRequest(t)).method = h.method), (n.ruri = h.uri)), (n.data = e);
                                            for (var f = s + 2; ; ) {
                                                if (-2 === (s = u(e, f))) {
                                                    r = f + 2;
                                                    break;
                                                }
                                                if (-1 === s) return void l("parseMessage() | malformed message");
                                                if (!0 !== (h = a(n, e, f, s))) return void l("parseMessage() |", h.error);
                                                f = s + 2;
                                            }
                                            if (n.hasHeader("content-length")) {
                                                var d = n.getHeader("content-length");
                                                n.body = e.substr(r, d);
                                            } else n.body = e.substring(r);
                                            return n;
                                        }
                                        l('parseMessage() | error parsing first line of SIP message: "'.concat(c, '"'));
                                    } else l("parseMessage() | no CRLF found, not a SIP message");
                                });
                        },
                        { "./Grammar": 7, "./SIPMessage": 19, debug: 29 },
                    ],
                    12: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                var n;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (
                                        Array.isArray(e) ||
                                        (n = (function (e, t) {
                                            if (!e) return;
                                            if ("string" == typeof e) return i(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
                                        })(e)) ||
                                        (t && e && "number" == typeof e.length)
                                    ) {
                                        n && (e = n);
                                        var r = 0,
                                            s = function () {};
                                        return {
                                            s: s,
                                            n: function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: s,
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var o,
                                    l = !0,
                                    u = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return (l = e.done), e;
                                    },
                                    e: function (e) {
                                        (u = !0), (o = e);
                                    },
                                    f: function () {
                                        try {
                                            l || null == n.return || n.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    },
                                };
                            }
                            function i(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                                return r;
                            }
                            function o(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            function l(e, t) {
                                return (l =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    })(e, t);
                            }
                            function u(e) {
                                var t = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var n,
                                        r = c(e);
                                    if (t) {
                                        var s = c(this).constructor;
                                        n = Reflect.construct(r, arguments, s);
                                    } else n = r.apply(this, arguments);
                                    return a(this, n);
                                };
                            }
                            function a(e, t) {
                                return !t || ("object" !== r(t) && "function" != typeof t)
                                    ? (function (e) {
                                          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                          return e;
                                      })(e)
                                    : t;
                            }
                            function c(e) {
                                return (c = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      })(e);
                            }
                            var h = e("events").EventEmitter,
                                f = e("sdp-transform"),
                                d = e("./Constants"),
                                _ = e("./Exceptions"),
                                p = e("./Transactions"),
                                m = e("./Utils"),
                                v = e("./Timers"),
                                g = e("./SIPMessage"),
                                y = e("./Dialog"),
                                T = e("./RequestSender"),
                                C = e("./RTCSession/DTMF"),
                                S = e("./RTCSession/Info"),
                                E = e("./RTCSession/ReferNotifier"),
                                A = e("./RTCSession/ReferSubscriber"),
                                b = e("./URI"),
                                R = e("debug")("JsSIP:RTCSession"),
                                w = e("debug")("JsSIP:ERROR:RTCSession");
                            w.log = console.warn.bind(console);
                            var I = {
                                    STATUS_NULL: 0,
                                    STATUS_INVITE_SENT: 1,
                                    STATUS_1XX_RECEIVED: 2,
                                    STATUS_INVITE_RECEIVED: 3,
                                    STATUS_WAITING_FOR_ANSWER: 4,
                                    STATUS_ANSWERED: 5,
                                    STATUS_WAITING_FOR_ACK: 6,
                                    STATUS_CANCELED: 7,
                                    STATUS_TERMINATED: 8,
                                    STATUS_CONFIRMED: 9,
                                },
                                O = ["audio", "video"];
                            t.exports = (function (e) {
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && l(e, t);
                                })(a, e);
                                var t,
                                    n,
                                    r,
                                    i = u(a);
                                function a(e) {
                                    var t;
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, a),
                                        R("new"),
                                        ((t = i.call(this))._id = null),
                                        (t._ua = e),
                                        (t._status = I.STATUS_NULL),
                                        (t._dialog = null),
                                        (t._earlyDialogs = {}),
                                        (t._contact = null),
                                        (t._from_tag = null),
                                        (t._to_tag = null),
                                        (t._connection = null),
                                        (t._connectionPromiseQueue = Promise.resolve()),
                                        (t._request = null),
                                        (t._is_canceled = !1),
                                        (t._cancel_reason = ""),
                                        (t._is_confirmed = !1),
                                        (t._late_sdp = !1),
                                        (t._rtcOfferConstraints = null),
                                        (t._rtcAnswerConstraints = null),
                                        (t._localMediaStream = null),
                                        (t._localMediaStreamLocallyGenerated = !1),
                                        (t._rtcReady = !0),
                                        (t._timers = { ackTimer: null, expiresTimer: null, invite2xxTimer: null, userNoAnswerTimer: null }),
                                        (t._direction = null),
                                        (t._local_identity = null),
                                        (t._remote_identity = null),
                                        (t._start_time = null),
                                        (t._end_time = null),
                                        (t._tones = null),
                                        (t._audioMuted = !1),
                                        (t._videoMuted = !1),
                                        (t._localHold = !1),
                                        (t._remoteHold = !1),
                                        (t._sessionTimers = {
                                            enabled: t._ua.configuration.session_timers,
                                            refreshMethod: t._ua.configuration.session_timers_refresh_method,
                                            defaultExpires: d.SESSION_EXPIRES,
                                            currentExpires: null,
                                            running: !1,
                                            refresher: !1,
                                            timer: null,
                                        }),
                                        (t._referSubscribers = {}),
                                        (t._data = {}),
                                        t
                                    );
                                }
                                return (
                                    (t = a),
                                    (r = [
                                        {
                                            key: "C",
                                            get: function () {
                                                return I;
                                            },
                                        },
                                    ]),
                                    (n = [
                                        {
                                            key: "C",
                                            get: function () {
                                                return I;
                                            },
                                        },
                                        {
                                            key: "causes",
                                            get: function () {
                                                return d.causes;
                                            },
                                        },
                                        {
                                            key: "id",
                                            get: function () {
                                                return this._id;
                                            },
                                        },
                                        {
                                            key: "connection",
                                            get: function () {
                                                return this._connection;
                                            },
                                        },
                                        {
                                            key: "contact",
                                            get: function () {
                                                return this._contact;
                                            },
                                        },
                                        {
                                            key: "direction",
                                            get: function () {
                                                return this._direction;
                                            },
                                        },
                                        {
                                            key: "local_identity",
                                            get: function () {
                                                return this._local_identity;
                                            },
                                        },
                                        {
                                            key: "remote_identity",
                                            get: function () {
                                                return this._remote_identity;
                                            },
                                        },
                                        {
                                            key: "start_time",
                                            get: function () {
                                                return this._start_time;
                                            },
                                        },
                                        {
                                            key: "end_time",
                                            get: function () {
                                                return this._end_time;
                                            },
                                        },
                                        {
                                            key: "data",
                                            get: function () {
                                                return this._data;
                                            },
                                            set: function (e) {
                                                this._data = e;
                                            },
                                        },
                                        {
                                            key: "status",
                                            get: function () {
                                                return this._status;
                                            },
                                        },
                                        {
                                            key: "isInProgress",
                                            value: function () {
                                                switch (this._status) {
                                                    case I.STATUS_NULL:
                                                    case I.STATUS_INVITE_SENT:
                                                    case I.STATUS_1XX_RECEIVED:
                                                    case I.STATUS_INVITE_RECEIVED:
                                                    case I.STATUS_WAITING_FOR_ANSWER:
                                                        return !0;
                                                    default:
                                                        return !1;
                                                }
                                            },
                                        },
                                        {
                                            key: "isEstablished",
                                            value: function () {
                                                switch (this._status) {
                                                    case I.STATUS_ANSWERED:
                                                    case I.STATUS_WAITING_FOR_ACK:
                                                    case I.STATUS_CONFIRMED:
                                                        return !0;
                                                    default:
                                                        return !1;
                                                }
                                            },
                                        },
                                        {
                                            key: "isEnded",
                                            value: function () {
                                                switch (this._status) {
                                                    case I.STATUS_CANCELED:
                                                    case I.STATUS_TERMINATED:
                                                        return !0;
                                                    default:
                                                        return !1;
                                                }
                                            },
                                        },
                                        {
                                            key: "isMuted",
                                            value: function () {
                                                return { audio: this._audioMuted, video: this._videoMuted };
                                            },
                                        },
                                        {
                                            key: "isOnHold",
                                            value: function () {
                                                return { local: this._localHold, remote: this._remoteHold };
                                            },
                                        },
                                        {
                                            key: "connect",
                                            value: function (e) {
                                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                                R("connect()");
                                                var r = e,
                                                    s = m.cloneObject(t.eventHandlers),
                                                    i = m.cloneArray(t.extraHeaders),
                                                    o = m.cloneObject(t.mediaConstraints, { audio: !0, video: !0 }),
                                                    l = t.mediaStream || null,
                                                    u = m.cloneObject(t.pcConfig, { iceServers: [] }),
                                                    a = t.rtcConstraints || null,
                                                    c = t.rtcOfferConstraints || null;
                                                if (((this._rtcOfferConstraints = c), (this._rtcAnswerConstraints = t.rtcAnswerConstraints || null), (this._data = t.data || this._data), void 0 === e)) throw new TypeError("Not enough arguments");
                                                if (this._status !== I.STATUS_NULL) throw new _.InvalidStateError(this._status);
                                                if (!window.RTCPeerConnection) throw new _.NotSupportedError("WebRTC not supported");
                                                if (!(e = this._ua.normalizeTarget(e))) throw new TypeError("Invalid target: ".concat(r));
                                                for (var h in (this._sessionTimers.enabled &&
                                                    m.isDecimal(t.sessionTimersExpires) &&
                                                    (t.sessionTimersExpires >= d.MIN_SESSION_EXPIRES ? (this._sessionTimers.defaultExpires = t.sessionTimersExpires) : (this._sessionTimers.defaultExpires = d.SESSION_EXPIRES)),
                                                s))
                                                    Object.prototype.hasOwnProperty.call(s, h) && this.on(h, s[h]);
                                                this._from_tag = m.newTag();
                                                var f = t.anonymous || !1,
                                                    p = { from_tag: this._from_tag };
                                                (this._contact = this._ua.contact.toString({ anonymous: f, outbound: !0 })),
                                                    f
                                                        ? ((p.from_display_name = "Anonymous"),
                                                          (p.from_uri = new b("sip", "anonymous", "anonymous.invalid")),
                                                          i.push("P-Preferred-Identity: ".concat(this._ua.configuration.uri.toString())),
                                                          i.push("Privacy: id"))
                                                        : t.fromUserName && ((p.from_uri = new b("sip", t.fromUserName, this._ua.configuration.uri.host)), i.push("P-Preferred-Identity: ".concat(this._ua.configuration.uri.toString()))),
                                                    t.fromDisplayName && (p.from_display_name = t.fromDisplayName),
                                                    i.push("Contact: ".concat(this._contact)),
                                                    i.push("Content-Type: application/sdp"),
                                                    this._sessionTimers.enabled && i.push("Session-Expires: ".concat(this._sessionTimers.defaultExpires).concat(this._ua.configuration.session_timers_force_refresher ? ";refresher=uac" : "")),
                                                    (this._request = new g.InitialOutgoingInviteRequest(e, this._ua, p, i)),
                                                    (this._id = this._request.call_id + this._from_tag),
                                                    this._createRTCConnection(u, a),
                                                    (this._direction = "outgoing"),
                                                    (this._local_identity = this._request.from),
                                                    (this._remote_identity = this._request.to),
                                                    n && n(this),
                                                    this._newRTCSession("local", this._request),
                                                    this._sendInitialRequest(o, c, l);
                                            },
                                        },
                                        {
                                            key: "init_incoming",
                                            value: function (e, t) {
                                                var n,
                                                    r = this;
                                                R("init_incoming()");
                                                var s = e.hasHeader("Content-Type") ? e.getHeader("Content-Type").toLowerCase() : void 0;
                                                if (e.body && "application/sdp" !== s) e.reply(415);
                                                else if (
                                                    ((this._status = I.STATUS_INVITE_RECEIVED),
                                                    (this._from_tag = e.from_tag),
                                                    (this._id = e.call_id + this._from_tag),
                                                    (this._request = e),
                                                    (this._contact = this._ua.contact.toString()),
                                                    e.hasHeader("expires") && (n = 1e3 * e.getHeader("expires")),
                                                    (e.to_tag = m.newTag()),
                                                    this._createDialog(e, "UAS", !0))
                                                ) {
                                                    if (
                                                        (e.body ? (this._late_sdp = !1) : (this._late_sdp = !0),
                                                        (this._status = I.STATUS_WAITING_FOR_ANSWER),
                                                        (this._timers.userNoAnswerTimer = setTimeout(function () {
                                                            e.reply(408), r._failed("local", null, d.causes.NO_ANSWER);
                                                        }, this._ua.configuration.no_answer_timeout)),
                                                        n &&
                                                            (this._timers.expiresTimer = setTimeout(function () {
                                                                r._status === I.STATUS_WAITING_FOR_ANSWER && (e.reply(487), r._failed("system", null, d.causes.EXPIRES));
                                                            }, n)),
                                                        (this._direction = "incoming"),
                                                        (this._local_identity = e.to),
                                                        (this._remote_identity = e.from),
                                                        t && t(this),
                                                        this._newRTCSession("remote", e),
                                                        this._status !== I.STATUS_TERMINATED)
                                                    ) {
                                                        var i = ["Contact: ".concat(this._contact)],
                                                            o = this._ua.modes.ringing_header_mode;
                                                        void 0 !== o && (Array.isArray(o) ? (i = i.concat(o)) : i.push(o)), e.reply(180, null, i), this._progress("local", null);
                                                    }
                                                } else e.reply(500, "Missing Contact header field");
                                            },
                                        },
                                        {
                                            key: "answer",
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                R("answer()");
                                                var n = this._request,
                                                    r = m.cloneArray(t.extraHeaders),
                                                    i = m.cloneObject(t.mediaConstraints),
                                                    o = t.mediaStream || null,
                                                    l = m.cloneObject(t.pcConfig, { iceServers: [] }),
                                                    u = t.rtcConstraints || null,
                                                    a = t.rtcAnswerConstraints || null,
                                                    c = m.cloneObject(t.rtcOfferConstraints),
                                                    h = !1,
                                                    f = !1,
                                                    p = !1,
                                                    v = !1;
                                                if (((this._rtcAnswerConstraints = a), (this._rtcOfferConstraints = t.rtcOfferConstraints || null), (this._data = t.data || this._data), "incoming" !== this._direction))
                                                    throw new _.NotSupportedError('"answer" not supported for outgoing RTCSession');
                                                if (this._status !== I.STATUS_WAITING_FOR_ANSWER) throw new _.InvalidStateError(this._status);
                                                if (
                                                    (this._sessionTimers.enabled &&
                                                        m.isDecimal(t.sessionTimersExpires) &&
                                                        (t.sessionTimersExpires >= d.MIN_SESSION_EXPIRES ? (this._sessionTimers.defaultExpires = t.sessionTimersExpires) : (this._sessionTimers.defaultExpires = d.SESSION_EXPIRES)),
                                                    (this._status = I.STATUS_ANSWERED),
                                                    this._createDialog(n, "UAS"))
                                                ) {
                                                    clearTimeout(this._timers.userNoAnswerTimer), r.unshift("Contact: ".concat(this._contact));
                                                    var g = n.parseSDP();
                                                    Array.isArray(g.media) || (g.media = [g.media]);
                                                    var y,
                                                        T = s(g.media);
                                                    try {
                                                        for (T.s(); !(y = T.n()).done; ) {
                                                            var C = y.value;
                                                            "audio" === C.type && ((h = !0), (C.direction && "sendrecv" !== C.direction) || (p = !0)), "video" === C.type && ((f = !0), (C.direction && "sendrecv" !== C.direction) || (v = !0));
                                                        }
                                                    } catch (e) {
                                                        T.e(e);
                                                    } finally {
                                                        T.f();
                                                    }
                                                    if (o && !1 === i.audio) {
                                                        var S,
                                                            E = s(o.getAudioTracks());
                                                        try {
                                                            for (E.s(); !(S = E.n()).done; ) {
                                                                var A = S.value;
                                                                o.removeTrack(A);
                                                            }
                                                        } catch (e) {
                                                            E.e(e);
                                                        } finally {
                                                            E.f();
                                                        }
                                                    }
                                                    if (o && !1 === i.video) {
                                                        var b,
                                                            O = s(o.getVideoTracks());
                                                        try {
                                                            for (O.s(); !(b = O.n()).done; ) {
                                                                var k = b.value;
                                                                o.removeTrack(k);
                                                            }
                                                        } catch (e) {
                                                            O.e(e);
                                                        } finally {
                                                            O.f();
                                                        }
                                                    }
                                                    o || void 0 !== i.audio || (i.audio = p),
                                                        o || void 0 !== i.video || (i.video = v),
                                                        o || h || c.offerToReceiveAudio || (i.audio = !1),
                                                        o || f || c.offerToReceiveVideo || (i.video = !1),
                                                        this._createRTCConnection(l, u),
                                                        Promise.resolve()
                                                            .then(function () {
                                                                return (
                                                                    o ||
                                                                    (i.audio || i.video
                                                                        ? ((e._localMediaStreamLocallyGenerated = !0),
                                                                          navigator.mediaDevices.getUserMedia(i).catch(function (t) {
                                                                              if (e._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                                              throw (
                                                                                  (n.reply(480),
                                                                                  e._failed("local", null, d.causes.USER_DENIED_MEDIA_ACCESS),
                                                                                  w('emit "getusermediafailed" [error:%o]', t),
                                                                                  e.emit("getusermediafailed", t),
                                                                                  new Error("getUserMedia() failed"))
                                                                              );
                                                                          }))
                                                                        : void 0)
                                                                );
                                                            })
                                                            .then(function (t) {
                                                                if (e._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                                (e._localMediaStream = t),
                                                                    t &&
                                                                        t.getTracks().forEach(function (n) {
                                                                            e._connection.addTrack(n, t);
                                                                        });
                                                            })
                                                            .then(function () {
                                                                if (!e._late_sdp) {
                                                                    var t = { originator: "remote", type: "offer", sdp: n.body };
                                                                    R('emit "sdp"'), e.emit("sdp", t);
                                                                    var r = new RTCSessionDescription({ type: "offer", sdp: t.sdp });
                                                                    return (
                                                                        (e._connectionPromiseQueue = e._connectionPromiseQueue
                                                                            .then(function () {
                                                                                return e._connection.setRemoteDescription(r);
                                                                            })
                                                                            .catch(function (t) {
                                                                                throw (
                                                                                    (n.reply(488),
                                                                                    e._failed("system", null, d.causes.WEBRTC_ERROR),
                                                                                    w('emit "peerconnection:setremotedescriptionfailed" [error:%o]', t),
                                                                                    e.emit("peerconnection:setremotedescriptionfailed", t),
                                                                                    new Error("peerconnection.setRemoteDescription() failed"))
                                                                                );
                                                                            })),
                                                                        e._connectionPromiseQueue
                                                                    );
                                                                }
                                                            })
                                                            .then(function () {
                                                                if (e._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                                return (
                                                                    e._connecting(n),
                                                                    e._late_sdp
                                                                        ? e._createLocalDescription("offer", e._rtcOfferConstraints).catch(function () {
                                                                              throw (n.reply(500), new Error("_createLocalDescription() failed"));
                                                                          })
                                                                        : e._createLocalDescription("answer", a).catch(function () {
                                                                              throw (n.reply(500), new Error("_createLocalDescription() failed"));
                                                                          })
                                                                );
                                                            })
                                                            .then(function (t) {
                                                                if (e._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                                e._handleSessionTimersInIncomingRequest(n, r),
                                                                    n.reply(
                                                                        200,
                                                                        null,
                                                                        r,
                                                                        t,
                                                                        function () {
                                                                            (e._status = I.STATUS_WAITING_FOR_ACK), e._setInvite2xxTimer(n, t), e._setACKTimer(), e._accepted("local");
                                                                        },
                                                                        function () {
                                                                            e._failed("system", null, d.causes.CONNECTION_ERROR);
                                                                        }
                                                                    );
                                                            })
                                                            .catch(function (t) {
                                                                e._status !== I.STATUS_TERMINATED && w(t);
                                                            });
                                                } else n.reply(500, "Error creating dialog");
                                            },
                                        },
                                        {
                                            key: "terminate",
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                R("terminate()");
                                                var n,
                                                    r = t.cause || d.causes.BYE,
                                                    s = m.cloneArray(t.extraHeaders),
                                                    i = t.body,
                                                    o = t.status_code,
                                                    l = t.reason_phrase;
                                                if (this._status === I.STATUS_TERMINATED) throw new _.InvalidStateError(this._status);
                                                switch (this._status) {
                                                    case I.STATUS_NULL:
                                                    case I.STATUS_INVITE_SENT:
                                                    case I.STATUS_1XX_RECEIVED:
                                                        if ((R("canceling session"), o && (o < 200 || o >= 700))) throw new TypeError("Invalid status_code: ".concat(o));
                                                        o && ((l = l || d.REASON_PHRASE[o] || ""), (n = "SIP ;cause=".concat(o, ' ;text="').concat(l, '"'))),
                                                            this._status === I.STATUS_NULL || this._status === I.STATUS_INVITE_SENT
                                                                ? ((this._is_canceled = !0), (this._cancel_reason = n))
                                                                : this._status === I.STATUS_1XX_RECEIVED && this._request.cancel(n),
                                                            (this._status = I.STATUS_CANCELED),
                                                            this._failed("local", null, d.causes.CANCELED);
                                                        break;
                                                    case I.STATUS_WAITING_FOR_ANSWER:
                                                    case I.STATUS_ANSWERED:
                                                        if ((R("rejecting session"), (o = o || 480) < 300 || o >= 700)) throw new TypeError("Invalid status_code: ".concat(o));
                                                        this._request.reply(o, l, s, i), this._failed("local", null, d.causes.REJECTED);
                                                        break;
                                                    case I.STATUS_WAITING_FOR_ACK:
                                                    case I.STATUS_CONFIRMED:
                                                        if ((R("terminating session"), (l = t.reason_phrase || d.REASON_PHRASE[o] || ""), o && (o < 200 || o >= 700))) throw new TypeError("Invalid status_code: ".concat(o));
                                                        if (
                                                            (o && s.push("Reason: SIP ;cause=".concat(o, '; text="').concat(l, '"')),
                                                            this._status === I.STATUS_WAITING_FOR_ACK && "incoming" === this._direction && this._request.server_transaction.state !== p.C.STATUS_TERMINATED)
                                                        ) {
                                                            var u = this._dialog;
                                                            (this.receiveRequest = function (t) {
                                                                t.method === d.ACK && (e.sendRequest(d.BYE, { extraHeaders: s, body: i }), u.terminate());
                                                            }),
                                                                this._request.server_transaction.on("stateChanged", function () {
                                                                    e._request.server_transaction.state === p.C.STATUS_TERMINATED && (e.sendRequest(d.BYE, { extraHeaders: s, body: i }), u.terminate());
                                                                }),
                                                                this._ended("local", null, r),
                                                                (this._dialog = u),
                                                                this._ua.newDialog(u);
                                                        } else this.sendRequest(d.BYE, { extraHeaders: s, body: i }), this._ended("local", null, r);
                                                }
                                            },
                                        },
                                        {
                                            key: "sendDTMF",
                                            value: function (e) {
                                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                R("sendDTMF() | tones: %s", e);
                                                var n = 0,
                                                    r = t.duration || null,
                                                    s = t.interToneGap || null,
                                                    i = t.transportType || d.DTMF_TRANSPORT.INFO;
                                                if (void 0 === e) throw new TypeError("Not enough arguments");
                                                if (this._status !== I.STATUS_CONFIRMED && this._status !== I.STATUS_WAITING_FOR_ACK) throw new _.InvalidStateError(this._status);
                                                if (i !== d.DTMF_TRANSPORT.INFO && i !== d.DTMF_TRANSPORT.RFC2833) throw new TypeError("invalid transportType: ".concat(i));
                                                if (("number" == typeof e && (e = e.toString()), !e || "string" != typeof e || !e.match(/^[0-9A-DR#*,]+$/i))) throw new TypeError("Invalid tones: ".concat(e));
                                                if (r && !m.isDecimal(r)) throw new TypeError("Invalid tone duration: ".concat(r));
                                                if (
                                                    (r
                                                        ? r < C.C.MIN_DURATION
                                                            ? (R('"duration" value is lower than the minimum allowed, setting it to '.concat(C.C.MIN_DURATION, " milliseconds")), (r = C.C.MIN_DURATION))
                                                            : r > C.C.MAX_DURATION
                                                            ? (R('"duration" value is greater than the maximum allowed, setting it to '.concat(C.C.MAX_DURATION, " milliseconds")), (r = C.C.MAX_DURATION))
                                                            : (r = Math.abs(r))
                                                        : (r = C.C.DEFAULT_DURATION),
                                                    (t.duration = r),
                                                    s && !m.isDecimal(s))
                                                )
                                                    throw new TypeError("Invalid interToneGap: ".concat(s));
                                                if (
                                                    (s
                                                        ? s < C.C.MIN_INTER_TONE_GAP
                                                            ? (R('"interToneGap" value is lower than the minimum allowed, setting it to '.concat(C.C.MIN_INTER_TONE_GAP, " milliseconds")), (s = C.C.MIN_INTER_TONE_GAP))
                                                            : (s = Math.abs(s))
                                                        : (s = C.C.DEFAULT_INTER_TONE_GAP),
                                                    i !== d.DTMF_TRANSPORT.RFC2833)
                                                )
                                                    this._tones ? (this._tones += e) : ((this._tones = e), l.call(this));
                                                else {
                                                    var o = this._getDTMFRTPSender();
                                                    o && ((e = o.toneBuffer + e), o.insertDTMF(e, r, s));
                                                }
                                                function l() {
                                                    var e,
                                                        i = this;
                                                    if (this._status === I.STATUS_TERMINATED || !this._tones || n >= this._tones.length) this._tones = null;
                                                    else {
                                                        var o = this._tones[n];
                                                        if (((n += 1), "," === o)) e = 2e3;
                                                        else {
                                                            var u = new C(this);
                                                            (t.eventHandlers = {
                                                                onFailed: function () {
                                                                    i._tones = null;
                                                                },
                                                            }),
                                                                u.send(o, t),
                                                                (e = r + s);
                                                        }
                                                        setTimeout(l.bind(this), e);
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "sendInfo",
                                            value: function (e, t) {
                                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                                if ((R("sendInfo()"), this._status !== I.STATUS_CONFIRMED && this._status !== I.STATUS_WAITING_FOR_ACK)) throw new _.InvalidStateError(this._status);
                                                var r = new S(this);
                                                r.send(e, t, n);
                                            },
                                        },
                                        {
                                            key: "mute",
                                            value: function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { audio: !0, video: !1 };
                                                R("mute()");
                                                var t = !1,
                                                    n = !1;
                                                !1 === this._audioMuted && e.audio && ((t = !0), (this._audioMuted = !0), this._toggleMuteAudio(!0)),
                                                    !1 === this._videoMuted && e.video && ((n = !0), (this._videoMuted = !0), this._toggleMuteVideo(!0)),
                                                    (!0 !== t && !0 !== n) || this._onmute({ audio: t, video: n });
                                            },
                                        },
                                        {
                                            key: "unmute",
                                            value: function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { audio: !0, video: !0 };
                                                R("unmute()");
                                                var t = !1,
                                                    n = !1;
                                                !0 === this._audioMuted && e.audio && ((t = !0), (this._audioMuted = !1), !1 === this._localHold && this._toggleMuteAudio(!1)),
                                                    !0 === this._videoMuted && e.video && ((n = !0), (this._videoMuted = !1), !1 === this._localHold && this._toggleMuteVideo(!1)),
                                                    (!0 !== t && !0 !== n) || this._onunmute({ audio: t, video: n });
                                            },
                                        },
                                        {
                                            key: "hold",
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    n = arguments.length > 1 ? arguments[1] : void 0;
                                                if ((R("hold()"), this._status !== I.STATUS_WAITING_FOR_ACK && this._status !== I.STATUS_CONFIRMED)) return !1;
                                                if (!0 === this._localHold) return !1;
                                                if (!this._isReadyToReOffer()) return !1;
                                                (this._localHold = !0), this._onhold("local");
                                                var r = {
                                                    succeeded: function () {
                                                        n && n();
                                                    },
                                                    failed: function () {
                                                        e.terminate({ cause: d.causes.WEBRTC_ERROR, status_code: 500, reason_phrase: "Hold Failed" });
                                                    },
                                                };
                                                return t.useUpdate ? this._sendUpdate({ sdpOffer: !0, eventHandlers: r, extraHeaders: t.extraHeaders }) : this._sendReinvite({ eventHandlers: r, extraHeaders: t.extraHeaders }), !0;
                                            },
                                        },
                                        {
                                            key: "unhold",
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    n = arguments.length > 1 ? arguments[1] : void 0;
                                                if ((R("unhold()"), this._status !== I.STATUS_WAITING_FOR_ACK && this._status !== I.STATUS_CONFIRMED)) return !1;
                                                if (!1 === this._localHold) return !1;
                                                if (!this._isReadyToReOffer()) return !1;
                                                (this._localHold = !1), this._onunhold("local");
                                                var r = {
                                                    succeeded: function () {
                                                        n && n();
                                                    },
                                                    failed: function () {
                                                        e.terminate({ cause: d.causes.WEBRTC_ERROR, status_code: 500, reason_phrase: "Unhold Failed" });
                                                    },
                                                };
                                                return t.useUpdate ? this._sendUpdate({ sdpOffer: !0, eventHandlers: r, extraHeaders: t.extraHeaders }) : this._sendReinvite({ eventHandlers: r, extraHeaders: t.extraHeaders }), !0;
                                            },
                                        },
                                        {
                                            key: "renegotiate",
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    n = arguments.length > 1 ? arguments[1] : void 0;
                                                R("renegotiate()");
                                                var r = t.rtcOfferConstraints || null;
                                                if (this._status !== I.STATUS_WAITING_FOR_ACK && this._status !== I.STATUS_CONFIRMED) return !1;
                                                if (!this._isReadyToReOffer()) return !1;
                                                var s = {
                                                    succeeded: function () {
                                                        n && n();
                                                    },
                                                    failed: function () {
                                                        e.terminate({ cause: d.causes.WEBRTC_ERROR, status_code: 500, reason_phrase: "Media Renegotiation Failed" });
                                                    },
                                                };
                                                return (
                                                    this._setLocalMediaStatus(),
                                                    t.useUpdate
                                                        ? this._sendUpdate({ sdpOffer: !0, eventHandlers: s, rtcOfferConstraints: r, extraHeaders: t.extraHeaders })
                                                        : this._sendReinvite({ eventHandlers: s, rtcOfferConstraints: r, extraHeaders: t.extraHeaders }),
                                                    !0
                                                );
                                            },
                                        },
                                        {
                                            key: "refer",
                                            value: function (e, t) {
                                                var n = this;
                                                R("refer()");
                                                var r = e;
                                                if (this._status !== I.STATUS_WAITING_FOR_ACK && this._status !== I.STATUS_CONFIRMED) return !1;
                                                if (!(e = this._ua.normalizeTarget(e))) throw new TypeError("Invalid target: ".concat(r));
                                                var s = new A(this);
                                                s.sendRefer(e, t);
                                                var i = s.id;
                                                return (
                                                    (this._referSubscribers[i] = s),
                                                    s.on("requestFailed", function () {
                                                        delete n._referSubscribers[i];
                                                    }),
                                                    s.on("accepted", function () {
                                                        delete n._referSubscribers[i];
                                                    }),
                                                    s.on("failed", function () {
                                                        delete n._referSubscribers[i];
                                                    }),
                                                    s
                                                );
                                            },
                                        },
                                        {
                                            key: "sendRequest",
                                            value: function (e, t) {
                                                return R("sendRequest()"), this._dialog.sendRequest(e, t);
                                            },
                                        },
                                        {
                                            key: "receiveRequest",
                                            value: function (e) {
                                                var t = this;
                                                if ((R("receiveRequest()"), e.method === d.CANCEL))
                                                    (this._status !== I.STATUS_WAITING_FOR_ANSWER && this._status !== I.STATUS_ANSWERED) ||
                                                        ((this._status = I.STATUS_CANCELED), this._request.reply(487), this._failed("remote", e, d.causes.CANCELED));
                                                else
                                                    switch (e.method) {
                                                        case d.ACK:
                                                            if (this._status !== I.STATUS_WAITING_FOR_ACK) return;
                                                            if (((this._status = I.STATUS_CONFIRMED), clearTimeout(this._timers.ackTimer), clearTimeout(this._timers.invite2xxTimer), this._late_sdp)) {
                                                                if (!e.body) {
                                                                    this.terminate({ cause: d.causes.MISSING_SDP, status_code: 400 });
                                                                    break;
                                                                }
                                                                var n = { originator: "remote", type: "answer", sdp: e.body };
                                                                R('emit "sdp"'), this.emit("sdp", n);
                                                                var r = new RTCSessionDescription({ type: "answer", sdp: n.sdp });
                                                                this._connectionPromiseQueue = this._connectionPromiseQueue
                                                                    .then(function () {
                                                                        return t._connection.setRemoteDescription(r);
                                                                    })
                                                                    .then(function () {
                                                                        t._is_confirmed || t._confirmed("remote", e);
                                                                    })
                                                                    .catch(function (e) {
                                                                        t.terminate({ cause: d.causes.BAD_MEDIA_DESCRIPTION, status_code: 488 }),
                                                                            w('emit "peerconnection:setremotedescriptionfailed" [error:%o]', e),
                                                                            t.emit("peerconnection:setremotedescriptionfailed", e);
                                                                    });
                                                            } else this._is_confirmed || this._confirmed("remote", e);
                                                            break;
                                                        case d.BYE:
                                                            this._status === I.STATUS_CONFIRMED || this._status === I.STATUS_WAITING_FOR_ACK
                                                                ? (e.reply(200), this._ended("remote", e, d.causes.BYE))
                                                                : this._status === I.STATUS_INVITE_RECEIVED || this._status === I.STATUS_WAITING_FOR_ANSWER
                                                                ? (e.reply(200), this._request.reply(487, "BYE Received"), this._ended("remote", e, d.causes.BYE))
                                                                : e.reply(403, "Wrong Status");
                                                            break;
                                                        case d.INVITE:
                                                            this._status === I.STATUS_CONFIRMED ? (e.hasHeader("replaces") ? this._receiveReplaces(e) : this._receiveReinvite(e)) : e.reply(403, "Wrong Status");
                                                            break;
                                                        case d.INFO:
                                                            if (
                                                                this._status === I.STATUS_1XX_RECEIVED ||
                                                                this._status === I.STATUS_WAITING_FOR_ANSWER ||
                                                                this._status === I.STATUS_ANSWERED ||
                                                                this._status === I.STATUS_WAITING_FOR_ACK ||
                                                                this._status === I.STATUS_CONFIRMED
                                                            ) {
                                                                var s = e.hasHeader("Content-Type") ? e.getHeader("Content-Type").toLowerCase() : void 0;
                                                                s && s.match(/^application\/dtmf-relay/i) ? new C(this).init_incoming(e) : void 0 !== s ? new S(this).init_incoming(e) : e.reply(415);
                                                            } else e.reply(403, "Wrong Status");
                                                            break;
                                                        case d.UPDATE:
                                                            this._status === I.STATUS_CONFIRMED ? this._receiveUpdate(e) : e.reply(403, "Wrong Status");
                                                            break;
                                                        case d.REFER:
                                                            this._status === I.STATUS_CONFIRMED ? this._receiveRefer(e) : e.reply(403, "Wrong Status");
                                                            break;
                                                        case d.NOTIFY:
                                                            var i = { event: e.event, request: e, taken: !1 };
                                                            if ((this.emit("sipEvent", i), i.taken)) {
                                                                e.reply(200);
                                                                break;
                                                            }
                                                            this._status === I.STATUS_CONFIRMED ? this._receiveNotify(e) : e.reply(403, "Wrong Status");
                                                            break;
                                                        default:
                                                            e.reply(501);
                                                    }
                                            },
                                        },
                                        {
                                            key: "onTransportError",
                                            value: function () {
                                                w("onTransportError()"), this._status !== I.STATUS_TERMINATED && this.terminate({ status_code: 500, reason_phrase: d.causes.CONNECTION_ERROR, cause: d.causes.CONNECTION_ERROR });
                                            },
                                        },
                                        {
                                            key: "onRequestTimeout",
                                            value: function () {
                                                w("onRequestTimeout()"), this._status !== I.STATUS_TERMINATED && this.terminate({ status_code: 408, reason_phrase: d.causes.REQUEST_TIMEOUT, cause: d.causes.REQUEST_TIMEOUT });
                                            },
                                        },
                                        {
                                            key: "onDialogError",
                                            value: function () {
                                                w("onDialogError()"), this._status !== I.STATUS_TERMINATED && this.terminate({ status_code: 500, reason_phrase: d.causes.DIALOG_ERROR, cause: d.causes.DIALOG_ERROR });
                                            },
                                        },
                                        {
                                            key: "newDTMF",
                                            value: function (e) {
                                                R("newDTMF()"), this.emit("newDTMF", e);
                                            },
                                        },
                                        {
                                            key: "newInfo",
                                            value: function (e) {
                                                R("newInfo()"), this.emit("newInfo", e);
                                            },
                                        },
                                        {
                                            key: "_isReadyToReOffer",
                                            value: function () {
                                                return this._rtcReady
                                                    ? this._dialog
                                                        ? (!0 !== this._dialog.uac_pending_reply && !0 !== this._dialog.uas_pending_reply) || (R("_isReadyToReOffer() | there is another INVITE/UPDATE transaction in progress"), !1)
                                                        : (R("_isReadyToReOffer() | session not established yet"), !1)
                                                    : (R("_isReadyToReOffer() | internal WebRTC status not ready"), !1);
                                            },
                                        },
                                        {
                                            key: "_close",
                                            value: function () {
                                                if (
                                                    (R("close()"),
                                                    this._localMediaStream && this._localMediaStreamLocallyGenerated && (R("close() | closing local MediaStream"), m.closeMediaStream(this._localMediaStream)),
                                                    this._status !== I.STATUS_TERMINATED)
                                                ) {
                                                    if (((this._status = I.STATUS_TERMINATED), this._connection))
                                                        try {
                                                            this._connection.close();
                                                        } catch (e) {
                                                            w("close() | error closing the RTCPeerConnection: %o", e);
                                                        }
                                                    for (var e in this._timers) Object.prototype.hasOwnProperty.call(this._timers, e) && clearTimeout(this._timers[e]);
                                                    for (var t in (clearTimeout(this._sessionTimers.timer), this._dialog && (this._dialog.terminate(), delete this._dialog), this._earlyDialogs))
                                                        Object.prototype.hasOwnProperty.call(this._earlyDialogs, t) && (this._earlyDialogs[t].terminate(), delete this._earlyDialogs[t]);
                                                    for (var n in this._referSubscribers) Object.prototype.hasOwnProperty.call(this._referSubscribers, n) && delete this._referSubscribers[n];
                                                    this._ua.destroyRTCSession(this);
                                                }
                                            },
                                        },
                                        {
                                            key: "_setInvite2xxTimer",
                                            value: function (e, t) {
                                                var n = v.T1;
                                                this._timers.invite2xxTimer = setTimeout(
                                                    function r() {
                                                        this._status === I.STATUS_WAITING_FOR_ACK &&
                                                            (e.reply(200, null, ["Contact: ".concat(this._contact)], t), n < v.T2 && (n *= 2) > v.T2 && (n = v.T2), (this._timers.invite2xxTimer = setTimeout(r.bind(this), n)));
                                                    }.bind(this),
                                                    n
                                                );
                                            },
                                        },
                                        {
                                            key: "_setACKTimer",
                                            value: function () {
                                                var e = this;
                                                this._timers.ackTimer = setTimeout(function () {
                                                    e._status === I.STATUS_WAITING_FOR_ACK && (R("no ACK received, terminating the session"), clearTimeout(e._timers.invite2xxTimer), e.sendRequest(d.BYE), e._ended("remote", null, d.causes.NO_ACK));
                                                }, v.TIMER_H);
                                            },
                                        },
                                        {
                                            key: "_createRTCConnection",
                                            value: function (e, t) {
                                                var n = this;
                                                (this._connection = new RTCPeerConnection(e, t)),
                                                    this._connection.addEventListener("iceconnectionstatechange", function () {
                                                        var e = n._connection.iceConnectionState;
                                                        if (
                                                            ("failed" === e && n.terminate({ cause: d.causes.RTP_TIMEOUT, status_code: 408, reason_phrase: d.causes.RTP_TIMEOUT }),
                                                            void 0 !== n._ua.modes.chrome_rtp_timeout_fix && navigator.webkitGetUserMedia && "disconnected" === e)
                                                        ) {
                                                            var t = n._ua.modes.chrome_rtp_timeout_fix;
                                                            R("AC: Chrome RTP timeout fix: iceConnectionState==disconnected: check that this will continue for " + t + " seconds..."),
                                                                (function e() {
                                                                    "disconnected" === n._connection.iceConnectionState
                                                                        ? t-- > 0
                                                                            ? setTimeout(function () {
                                                                                  return e();
                                                                              }, 1e3)
                                                                            : (R("AC: Chrome RTP timeout fix: Hangup call"), n.terminate({ cause: d.causes.RTP_TIMEOUT, status_code: 408, reason_phrase: d.causes.RTP_TIMEOUT }))
                                                                        : R("AC: Chrome RTP timeout fix: iceConnectionState=" + n._connection.iceConnectionState);
                                                                })();
                                                        }
                                                    }),
                                                    R('emit "peerconnection"'),
                                                    this.emit("peerconnection", { peerconnection: this._connection });
                                            },
                                        },
                                        {
                                            key: "_createLocalDescription",
                                            value: function (e, t) {
                                                var n = this;
                                                if ((R("createLocalDescription()"), "offer" !== e && "answer" !== e)) throw new Error('createLocalDescription() | invalid type "'.concat(e, '"'));
                                                var r = this._connection;
                                                return (
                                                    (this._rtcReady = !1),
                                                    Promise.resolve()
                                                        .then(function () {
                                                            return "offer" === e
                                                                ? r.createOffer(t).catch(function (e) {
                                                                      return w('emit "peerconnection:createofferfailed" [error:%o]', e), n.emit("peerconnection:createofferfailed", e), Promise.reject(e);
                                                                  })
                                                                : r.createAnswer(t).catch(function (e) {
                                                                      return w('emit "peerconnection:createanswerfailed" [error:%o]', e), n.emit("peerconnection:createanswerfailed", e), Promise.reject(e);
                                                                  });
                                                        })
                                                        .then(function (e) {
                                                            return r.setLocalDescription(e).catch(function (e) {
                                                                return (n._rtcReady = !0), w('emit "peerconnection:setlocaldescriptionfailed" [error:%o]', e), n.emit("peerconnection:setlocaldescriptionfailed", e), Promise.reject(e);
                                                            });
                                                        })
                                                        .then(function () {
                                                            if (!("complete" !== r.iceGatheringState || (t && t.iceRestart))) {
                                                                n._rtcReady = !0;
                                                                var s = { originator: "local", type: e, sdp: r.localDescription.sdp };
                                                                return R('emit "sdp"'), n.emit("sdp", s), Promise.resolve(s.sdp);
                                                            }
                                                            return new Promise(function (t) {
                                                                var s,
                                                                    i,
                                                                    o = !1,
                                                                    l = function () {
                                                                        r.removeEventListener("icecandidate", s), r.removeEventListener("icegatheringstatechange", i), (o = !0), (n._rtcReady = !0);
                                                                        var l = { originator: "local", type: e, sdp: r.localDescription.sdp };
                                                                        R('emit "sdp"'), n.emit("sdp", l), t(l.sdp);
                                                                    };
                                                                r.addEventListener(
                                                                    "icecandidate",
                                                                    (s = function (e) {
                                                                        var t = e.candidate;
                                                                        t ? n.emit("icecandidate", { candidate: t, ready: l }) : o || l();
                                                                    })
                                                                ),
                                                                    r.addEventListener(
                                                                        "icegatheringstatechange",
                                                                        (i = function () {
                                                                            "complete" !== r.iceGatheringState || o || l();
                                                                        })
                                                                    ),
                                                                    void 0 !== n._ua.modes.ice_timeout_fix &&
                                                                        setTimeout(function () {
                                                                            o || (R("AC: ICE gathering timeout fix"), l());
                                                                        }, n._ua.modes.ice_timeout_fix);
                                                            });
                                                        })
                                                );
                                            },
                                        },
                                        {
                                            key: "_createDialog",
                                            value: function (e, t, n) {
                                                var r = "UAS" === t ? e.to_tag : e.from_tag,
                                                    s = "UAS" === t ? e.from_tag : e.to_tag,
                                                    i = e.call_id + r + s,
                                                    o = this._earlyDialogs[i];
                                                if (n) return !!o || ((o = new y(this, e, t, y.C.STATUS_EARLY)).error ? (R(o.error), this._failed("remote", e, d.causes.INTERNAL_ERROR), !1) : ((this._earlyDialogs[i] = o), !0));
                                                if (((this._from_tag = e.from_tag), (this._to_tag = e.to_tag), o)) return o.update(e, t), (this._dialog = o), delete this._earlyDialogs[i], !0;
                                                var l = new y(this, e, t);
                                                return l.error ? (R(l.error), this._failed("remote", e, d.causes.INTERNAL_ERROR), !1) : ((this._dialog = l), !0);
                                            },
                                        },
                                        {
                                            key: "_receiveReinvite",
                                            value: function (e) {
                                                var t = this;
                                                R("receiveReinvite()");
                                                var n = e.hasHeader("Content-Type") ? e.getHeader("Content-Type").toLowerCase() : void 0,
                                                    r = {
                                                        request: e,
                                                        callback: void 0,
                                                        reject: function () {
                                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                            s = !0;
                                                            var n = t.status_code || 403,
                                                                r = t.reason_phrase || "",
                                                                i = m.cloneArray(t.extraHeaders);
                                                            if (this._status !== I.STATUS_CONFIRMED) return !1;
                                                            if (n < 300 || n >= 700) throw new TypeError("Invalid status_code: ".concat(n));
                                                            e.reply(n, r, i);
                                                        }.bind(this),
                                                    },
                                                    s = !1;
                                                if ((this.emit("reinvite", r), !s)) {
                                                    if (((this._late_sdp = !1), !e.body))
                                                        return (
                                                            (this._late_sdp = !0),
                                                            this._remoteHold && ((this._remoteHold = !1), this._onunhold("remote")),
                                                            void (this._connectionPromiseQueue = this._connectionPromiseQueue
                                                                .then(function () {
                                                                    return t._createLocalDescription("offer", t._rtcOfferConstraints);
                                                                })
                                                                .then(function (e) {
                                                                    i.call(t, e);
                                                                })
                                                                .catch(function () {
                                                                    e.reply(500);
                                                                }))
                                                        );
                                                    if ("application/sdp" !== n) return R("invalid Content-Type"), void e.reply(415);
                                                    this._processInDialogSdpOffer(e)
                                                        .then(function (e) {
                                                            t._status !== I.STATUS_TERMINATED && i.call(t, e);
                                                        })
                                                        .catch(function (e) {
                                                            w(e);
                                                        });
                                                }
                                                function i(t) {
                                                    var n = this,
                                                        s = ["Contact: ".concat(this._contact)];
                                                    this._handleSessionTimersInIncomingRequest(e, s),
                                                        this._late_sdp && (t = this._mangleOffer(t)),
                                                        e.reply(200, null, s, t, function () {
                                                            (n._status = I.STATUS_WAITING_FOR_ACK), n._setInvite2xxTimer(e, t), n._setACKTimer();
                                                        }),
                                                        "function" == typeof r.callback && r.callback();
                                                }
                                            },
                                        },
                                        {
                                            key: "_receiveUpdate",
                                            value: function (e) {
                                                var t = this;
                                                R("receiveUpdate()");
                                                var n = e.hasHeader("Content-Type") ? e.getHeader("Content-Type").toLowerCase() : void 0,
                                                    r = {
                                                        request: e,
                                                        callback: void 0,
                                                        reject: function () {
                                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                            s = !0;
                                                            var n = t.status_code || 403,
                                                                r = t.reason_phrase || "",
                                                                i = m.cloneArray(t.extraHeaders);
                                                            if (this._status !== I.STATUS_CONFIRMED) return !1;
                                                            if (n < 300 || n >= 700) throw new TypeError("Invalid status_code: ".concat(n));
                                                            e.reply(n, r, i);
                                                        }.bind(this),
                                                    },
                                                    s = !1;
                                                if ((this.emit("update", r), !s))
                                                    if (e.body) {
                                                        if ("application/sdp" !== n) return R("invalid Content-Type"), void e.reply(415);
                                                        this._processInDialogSdpOffer(e)
                                                            .then(function (e) {
                                                                t._status !== I.STATUS_TERMINATED && i.call(t, e);
                                                            })
                                                            .catch(function (e) {
                                                                w(e);
                                                            });
                                                    } else i.call(this, null);
                                                function i(t) {
                                                    var n = ["Contact: ".concat(this._contact)];
                                                    this._handleSessionTimersInIncomingRequest(e, n), e.reply(200, null, n, t), "function" == typeof r.callback && r.callback();
                                                }
                                            },
                                        },
                                        {
                                            key: "_processInDialogSdpOffer",
                                            value: function (e) {
                                                var t = this;
                                                R("_processInDialogSdpOffer()");
                                                var n,
                                                    r = e.parseSDP(),
                                                    i = !1,
                                                    o = s(r.media);
                                                try {
                                                    for (o.s(); !(n = o.n()).done; ) {
                                                        var l = n.value;
                                                        if (-1 !== O.indexOf(l.type)) {
                                                            var u = l.direction || r.direction || "sendrecv";
                                                            if ("sendonly" !== u && "inactive" !== u) {
                                                                i = !1;
                                                                break;
                                                            }
                                                            i = !0;
                                                        }
                                                    }
                                                } catch (e) {
                                                    o.e(e);
                                                } finally {
                                                    o.f();
                                                }
                                                var a = { originator: "remote", type: "offer", sdp: e.body };
                                                R('emit "sdp"'), this.emit("sdp", a);
                                                var c = new RTCSessionDescription({ type: "offer", sdp: a.sdp });
                                                return (
                                                    (this._connectionPromiseQueue = this._connectionPromiseQueue
                                                        .then(function () {
                                                            if (t._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                            return t._connection.setRemoteDescription(c).catch(function (n) {
                                                                throw (e.reply(488), w('emit "peerconnection:setremotedescriptionfailed" [error:%o]', n), t.emit("peerconnection:setremotedescriptionfailed", n), n);
                                                            });
                                                        })
                                                        .then(function () {
                                                            if (t._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                            !0 === t._remoteHold && !1 === i ? ((t._remoteHold = !1), t._onunhold("remote")) : !1 === t._remoteHold && !0 === i && ((t._remoteHold = !0), t._onhold("remote"));
                                                        })
                                                        .then(function () {
                                                            if (t._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                            return t._createLocalDescription("answer", t._rtcAnswerConstraints).catch(function (t) {
                                                                throw (e.reply(500), w('emit "peerconnection:createtelocaldescriptionfailed" [error:%o]', t), t);
                                                            });
                                                        })
                                                        .catch(function (e) {
                                                            w("_processInDialogSdpOffer() failed [error: %o]", e);
                                                        })),
                                                    this._connectionPromiseQueue
                                                );
                                            },
                                        },
                                        {
                                            key: "_receiveRefer",
                                            value: function (e) {
                                                var t = this;
                                                if ((R("receiveRefer()"), !e.refer_to)) return R("no Refer-To header field present in REFER"), void e.reply(400);
                                                if (e.refer_to.uri.scheme !== d.SIP) return R("Refer-To header field points to a non-SIP URI scheme"), void e.reply(416);
                                                e.reply(202);
                                                var n = new E(this, e.cseq);
                                                function r(t) {
                                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                    if (((t = "function" == typeof t ? t : null), this._status !== I.STATUS_WAITING_FOR_ACK && this._status !== I.STATUS_CONFIRMED)) return !1;
                                                    var s = new a(this._ua);
                                                    if (
                                                        (s.on("progress", function (e) {
                                                            var t = e.response;
                                                            n.notify(t.status_code, t.reason_phrase);
                                                        }),
                                                        s.on("accepted", function (e) {
                                                            var t = e.response;
                                                            n.notify(t.status_code, t.reason_phrase);
                                                        }),
                                                        s.on("_failed", function (e) {
                                                            var t = e.message,
                                                                r = e.cause;
                                                            t ? n.notify(t.status_code, t.reason_phrase) : n.notify(487, r);
                                                        }),
                                                        e.refer_to.uri.hasHeader("replaces"))
                                                    ) {
                                                        var i = decodeURIComponent(e.refer_to.uri.getHeader("replaces"));
                                                        (r.extraHeaders = m.cloneArray(r.extraHeaders)), r.extraHeaders.push("Replaces: ".concat(i));
                                                    }
                                                    s.connect(e.refer_to.uri.toAor(), r, t);
                                                }
                                                function s() {
                                                    n.notify(603);
                                                }
                                                R('emit "refer"'),
                                                    this.emit("refer", {
                                                        request: e,
                                                        accept: function (e, n) {
                                                            r.call(t, e, n);
                                                        },
                                                        reject: function () {
                                                            s.call(t);
                                                        },
                                                    });
                                            },
                                        },
                                        {
                                            key: "_receiveNotify",
                                            value: function (e) {
                                                switch ((R("receiveNotify()"), e.event || e.reply(400), e.event.event)) {
                                                    case "refer":
                                                        var t, n;
                                                        if (e.event.params && e.event.params.id) (t = e.event.params.id), (n = this._referSubscribers[t]);
                                                        else {
                                                            if (1 !== Object.keys(this._referSubscribers).length) return void e.reply(400, "Missing event id parameter");
                                                            n = this._referSubscribers[Object.keys(this._referSubscribers)[0]];
                                                        }
                                                        if (!n) return void e.reply(481, "Subscription does not exist");
                                                        n.receiveNotify(e), e.reply(200);
                                                        break;
                                                    default:
                                                        e.reply(489);
                                                }
                                            },
                                        },
                                        {
                                            key: "_receiveReplaces",
                                            value: function (e) {
                                                var t = this;
                                                function n(t) {
                                                    var n = this;
                                                    if (this._status !== I.STATUS_WAITING_FOR_ACK && this._status !== I.STATUS_CONFIRMED) return !1;
                                                    var r = new a(this._ua);
                                                    r.on("confirmed", function () {
                                                        n.terminate();
                                                    }),
                                                        r.init_incoming(e, t);
                                                }
                                                function r() {
                                                    R("Replaced INVITE rejected by the user"), e.reply(486);
                                                }
                                                R("receiveReplaces()"),
                                                    this.emit("replaces", {
                                                        request: e,
                                                        accept: function (e) {
                                                            n.call(t, e);
                                                        },
                                                        reject: function () {
                                                            r.call(t);
                                                        },
                                                    });
                                            },
                                        },
                                        {
                                            key: "_sendInitialRequest",
                                            value: function (e, t, n) {
                                                var r = this,
                                                    s = new T(this._ua, this._request, {
                                                        onRequestTimeout: function () {
                                                            r.onRequestTimeout();
                                                        },
                                                        onTransportError: function () {
                                                            r.onTransportError();
                                                        },
                                                        onAuthenticated: function (e) {
                                                            r._request = e;
                                                        },
                                                        onReceiveResponse: function (e) {
                                                            r._receiveInviteResponse(e);
                                                        },
                                                    });
                                                Promise.resolve()
                                                    .then(function () {
                                                        return (
                                                            n ||
                                                            (e.audio || e.video
                                                                ? ((r._localMediaStreamLocallyGenerated = !0),
                                                                  navigator.mediaDevices.getUserMedia(e).catch(function (e) {
                                                                      if (r._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                                      throw (r._failed("local", null, d.causes.USER_DENIED_MEDIA_ACCESS), w('emit "getusermediafailed" [error:%o]', e), r.emit("getusermediafailed", e), e);
                                                                  }))
                                                                : void 0)
                                                        );
                                                    })
                                                    .then(function (e) {
                                                        if (r._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                        return (
                                                            (r._localMediaStream = e),
                                                            e &&
                                                                e.getTracks().forEach(function (t) {
                                                                    r._connection.addTrack(t, e);
                                                                }),
                                                            r._connecting(r._request),
                                                            r._createLocalDescription("offer", t).catch(function (e) {
                                                                throw (r._failed("local", null, d.causes.WEBRTC_ERROR), e);
                                                            })
                                                        );
                                                    })
                                                    .then(function (e) {
                                                        if (r._is_canceled || r._status === I.STATUS_TERMINATED) throw new Error("terminated");
                                                        (r._request.body = e), (r._status = I.STATUS_INVITE_SENT), R('emit "sending" [request:%o]', r._request), r.emit("sending", { request: r._request }), s.send();
                                                    })
                                                    .catch(function (e) {
                                                        r._status !== I.STATUS_TERMINATED && w(e);
                                                    });
                                            },
                                        },
                                        {
                                            key: "_getDTMFRTPSender",
                                            value: function () {
                                                var e = this._connection.getSenders().find(function (e) {
                                                    return e.track && "audio" === e.track.kind;
                                                });
                                                if (e && e.dtmf) return e.dtmf;
                                                w("sendDTMF() | no local audio track to send DTMF with");
                                            },
                                        },
                                        {
                                            key: "_receiveInviteResponse",
                                            value: function (e) {
                                                var t = this;
                                                if ((R("receiveInviteResponse()"), this._dialog && e.status_code >= 200 && e.status_code <= 299)) {
                                                    if (this._dialog.id.call_id === e.call_id && this._dialog.id.local_tag === e.from_tag && this._dialog.id.remote_tag === e.to_tag) return void this.sendRequest(d.ACK);
                                                    var n = new y(this, e, "UAC");
                                                    return void 0 !== n.error ? void R(n.error) : (this.sendRequest(d.ACK), void this.sendRequest(d.BYE));
                                                }
                                                if (this._is_canceled) e.status_code >= 100 && e.status_code < 200 ? this._request.cancel(this._cancel_reason) : e.status_code >= 200 && e.status_code < 299 && this._acceptAndTerminate(e);
                                                else if (this._status === I.STATUS_INVITE_SENT || this._status === I.STATUS_1XX_RECEIVED)
                                                    switch (!0) {
                                                        case /^100$/.test(e.status_code):
                                                            this._status = I.STATUS_1XX_RECEIVED;
                                                            break;
                                                        case /^1[0-9]{2}$/.test(e.status_code):
                                                            if (!e.to_tag) {
                                                                R("1xx response received without to tag");
                                                                break;
                                                            }
                                                            if (e.hasHeader("contact") && !this._createDialog(e, "UAC", !0)) break;
                                                            if (((this._status = I.STATUS_1XX_RECEIVED), !e.body)) {
                                                                this._progress("remote", e);
                                                                break;
                                                            }
                                                            var r = { originator: "remote", type: "answer", sdp: e.body };
                                                            R('emit "sdp"'), this.emit("sdp", r);
                                                            var s = new RTCSessionDescription({ type: "answer", sdp: r.sdp });
                                                            this._connectionPromiseQueue = this._connectionPromiseQueue
                                                                .then(function () {
                                                                    return t._connection.setRemoteDescription(s);
                                                                })
                                                                .then(function () {
                                                                    return t._progress("remote", e);
                                                                })
                                                                .catch(function (e) {
                                                                    w('emit "peerconnection:setremotedescriptionfailed" [error:%o]', e), t.emit("peerconnection:setremotedescriptionfailed", e);
                                                                });
                                                            break;
                                                        case /^2[0-9]{2}$/.test(e.status_code):
                                                            if (((this._status = I.STATUS_CONFIRMED), !e.body)) {
                                                                this._acceptAndTerminate(e, 400, d.causes.MISSING_SDP), this._failed("remote", e, d.causes.BAD_MEDIA_DESCRIPTION);
                                                                break;
                                                            }
                                                            if (!this._createDialog(e, "UAC")) break;
                                                            var i = { originator: "remote", type: "answer", sdp: e.body };
                                                            R('emit "sdp"'), this.emit("sdp", i);
                                                            var o = new RTCSessionDescription({ type: "answer", sdp: i.sdp });
                                                            this._connectionPromiseQueue = this._connectionPromiseQueue
                                                                .then(function () {
                                                                    if ("stable" === t._connection.signalingState)
                                                                        return t._connection
                                                                            .createOffer(t._rtcOfferConstraints)
                                                                            .then(function (e) {
                                                                                return t._connection.setLocalDescription(e);
                                                                            })
                                                                            .catch(function (n) {
                                                                                t._acceptAndTerminate(e, 500, n.toString()), t._failed("local", e, d.causes.WEBRTC_ERROR);
                                                                            });
                                                                })
                                                                .then(function () {
                                                                    t._connection
                                                                        .setRemoteDescription(o)
                                                                        .then(function () {
                                                                            t._handleSessionTimersInIncomingResponse(e), t._accepted("remote", e), t.sendRequest(d.ACK), t._confirmed("local", null);
                                                                        })
                                                                        .catch(function (n) {
                                                                            t._acceptAndTerminate(e, 488, "Not Acceptable Here"),
                                                                                t._failed("remote", e, d.causes.BAD_MEDIA_DESCRIPTION),
                                                                                w('emit "peerconnection:setremotedescriptionfailed" [error:%o]', n),
                                                                                t.emit("peerconnection:setremotedescriptionfailed", n);
                                                                        });
                                                                });
                                                            break;
                                                        default:
                                                            var l = m.sipErrorCause(e.status_code);
                                                            this._failed("remote", e, l);
                                                    }
                                            },
                                        },
                                        {
                                            key: "_sendReinvite",
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                R("sendReinvite()");
                                                var n = m.cloneArray(t.extraHeaders),
                                                    r = m.cloneObject(t.eventHandlers),
                                                    s = t.rtcOfferConstraints || this._rtcOfferConstraints || null,
                                                    i = !1;
                                                function o(e) {
                                                    var t = this;
                                                    if (this._status !== I.STATUS_TERMINATED && (this.sendRequest(d.ACK), !i))
                                                        if ((this._handleSessionTimersInIncomingResponse(e), e.body))
                                                            if (e.hasHeader("Content-Type") && "application/sdp" === e.getHeader("Content-Type").toLowerCase()) {
                                                                var n = { originator: "remote", type: "answer", sdp: e.body };
                                                                R('emit "sdp"'), this.emit("sdp", n);
                                                                var s = new RTCSessionDescription({ type: "answer", sdp: n.sdp });
                                                                this._connectionPromiseQueue = this._connectionPromiseQueue
                                                                    .then(function () {
                                                                        return t._connection.setRemoteDescription(s);
                                                                    })
                                                                    .then(function () {
                                                                        r.succeeded && r.succeeded(e);
                                                                    })
                                                                    .catch(function (e) {
                                                                        l.call(t), w('emit "peerconnection:setremotedescriptionfailed" [error:%o]', e), t.emit("peerconnection:setremotedescriptionfailed", e);
                                                                    });
                                                            } else l.call(this);
                                                        else l.call(this);
                                                }
                                                function l(e) {
                                                    r.failed && r.failed(e);
                                                }
                                                n.push("Contact: ".concat(this._contact)),
                                                    n.push("Content-Type: application/sdp"),
                                                    this._sessionTimers.running && n.push("Session-Expires: ".concat(this._sessionTimers.currentExpires, ";refresher=").concat(this._sessionTimers.refresher ? "uac" : "uas")),
                                                    (this._connectionPromiseQueue = this._connectionPromiseQueue
                                                        .then(function () {
                                                            return e._createLocalDescription("offer", s);
                                                        })
                                                        .then(function (t) {
                                                            var r = { originator: "local", type: "offer", sdp: (t = e._mangleOffer(t)) };
                                                            R('emit "sdp"'),
                                                                e.emit("sdp", r),
                                                                e.sendRequest(d.INVITE, {
                                                                    extraHeaders: n,
                                                                    body: t,
                                                                    eventHandlers: {
                                                                        onSuccessResponse: function (t) {
                                                                            o.call(e, t), (i = !0);
                                                                        },
                                                                        onErrorResponse: function (t) {
                                                                            l.call(e, t);
                                                                        },
                                                                        onTransportError: function () {
                                                                            e.onTransportError();
                                                                        },
                                                                        onRequestTimeout: function () {
                                                                            e.onRequestTimeout();
                                                                        },
                                                                        onDialogError: function () {
                                                                            e.onDialogError();
                                                                        },
                                                                    },
                                                                });
                                                        })
                                                        .catch(function () {
                                                            l();
                                                        }));
                                            },
                                        },
                                        {
                                            key: "_sendUpdate",
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                R("sendUpdate()");
                                                var n = m.cloneArray(t.extraHeaders),
                                                    r = m.cloneObject(t.eventHandlers),
                                                    s = t.rtcOfferConstraints || this._rtcOfferConstraints || null,
                                                    i = t.sdpOffer || !1,
                                                    o = !1;
                                                function l(e) {
                                                    var t = this;
                                                    if (this._status !== I.STATUS_TERMINATED && !o)
                                                        if ((this._handleSessionTimersInIncomingResponse(e), i)) {
                                                            if (!e.body) return void u.call(this);
                                                            if (!e.hasHeader("Content-Type") || "application/sdp" !== e.getHeader("Content-Type").toLowerCase()) return void u.call(this);
                                                            var n = { originator: "remote", type: "answer", sdp: e.body };
                                                            R('emit "sdp"'), this.emit("sdp", n);
                                                            var s = new RTCSessionDescription({ type: "answer", sdp: n.sdp });
                                                            this._connectionPromiseQueue = this._connectionPromiseQueue
                                                                .then(function () {
                                                                    return t._connection.setRemoteDescription(s);
                                                                })
                                                                .then(function () {
                                                                    r.succeeded && r.succeeded(e);
                                                                })
                                                                .catch(function (e) {
                                                                    u.call(t), w('emit "peerconnection:setremotedescriptionfailed" [error:%o]', e), t.emit("peerconnection:setremotedescriptionfailed", e);
                                                                });
                                                        } else r.succeeded && r.succeeded(e);
                                                }
                                                function u(e) {
                                                    r.failed && r.failed(e);
                                                }
                                                n.push("Contact: ".concat(this._contact)),
                                                    this._sessionTimers.running && n.push("Session-Expires: ".concat(this._sessionTimers.currentExpires, ";refresher=").concat(this._sessionTimers.refresher ? "uac" : "uas")),
                                                    i
                                                        ? (n.push("Content-Type: application/sdp"),
                                                          (this._connectionPromiseQueue = this._connectionPromiseQueue
                                                              .then(function () {
                                                                  return e._createLocalDescription("offer", s);
                                                              })
                                                              .then(function (t) {
                                                                  var r = { originator: "local", type: "offer", sdp: (t = e._mangleOffer(t)) };
                                                                  R('emit "sdp"'),
                                                                      e.emit("sdp", r),
                                                                      e.sendRequest(d.UPDATE, {
                                                                          extraHeaders: n,
                                                                          body: t,
                                                                          eventHandlers: {
                                                                              onSuccessResponse: function (t) {
                                                                                  l.call(e, t), (o = !0);
                                                                              },
                                                                              onErrorResponse: function (t) {
                                                                                  u.call(e, t);
                                                                              },
                                                                              onTransportError: function () {
                                                                                  e.onTransportError();
                                                                              },
                                                                              onRequestTimeout: function () {
                                                                                  e.onRequestTimeout();
                                                                              },
                                                                              onDialogError: function () {
                                                                                  e.onDialogError();
                                                                              },
                                                                          },
                                                                      });
                                                              })
                                                              .catch(function () {
                                                                  u.call(e);
                                                              })))
                                                        : this.sendRequest(d.UPDATE, {
                                                              extraHeaders: n,
                                                              eventHandlers: {
                                                                  onSuccessResponse: function (t) {
                                                                      l.call(e, t);
                                                                  },
                                                                  onErrorResponse: function (t) {
                                                                      u.call(e, t);
                                                                  },
                                                                  onTransportError: function () {
                                                                      e.onTransportError();
                                                                  },
                                                                  onRequestTimeout: function () {
                                                                      e.onRequestTimeout();
                                                                  },
                                                                  onDialogError: function () {
                                                                      e.onDialogError();
                                                                  },
                                                              },
                                                          });
                                            },
                                        },
                                        {
                                            key: "_acceptAndTerminate",
                                            value: function (e, t, n) {
                                                R("acceptAndTerminate()");
                                                var r = [];
                                                t && ((n = n || d.REASON_PHRASE[t] || ""), r.push("Reason: SIP ;cause=".concat(t, '; text="').concat(n, '"'))),
                                                    (this._dialog || this._createDialog(e, "UAC")) && (this.sendRequest(d.ACK), this.sendRequest(d.BYE, { extraHeaders: r })),
                                                    (this._status = I.STATUS_TERMINATED);
                                            },
                                        },
                                        {
                                            key: "_mangleOffer",
                                            value: function (e) {
                                                if (!this._localHold && !this._remoteHold) return e;
                                                if (((e = f.parse(e)), this._localHold && !this._remoteHold)) {
                                                    R("mangleOffer() | me on hold, mangling offer");
                                                    var t,
                                                        n = s(e.media);
                                                    try {
                                                        for (n.s(); !(t = n.n()).done; ) {
                                                            var r = t.value;
                                                            -1 !== O.indexOf(r.type) &&
                                                                (r.direction ? ("sendrecv" === r.direction ? (r.direction = "sendonly") : "recvonly" === r.direction && (r.direction = "inactive")) : (r.direction = "sendonly"));
                                                        }
                                                    } catch (e) {
                                                        n.e(e);
                                                    } finally {
                                                        n.f();
                                                    }
                                                } else if (this._localHold && this._remoteHold) {
                                                    R("mangleOffer() | both on hold, mangling offer");
                                                    var i,
                                                        o = s(e.media);
                                                    try {
                                                        for (o.s(); !(i = o.n()).done; ) {
                                                            var l = i.value;
                                                            -1 !== O.indexOf(l.type) && (l.direction = "inactive");
                                                        }
                                                    } catch (e) {
                                                        o.e(e);
                                                    } finally {
                                                        o.f();
                                                    }
                                                } else if (this._remoteHold) {
                                                    R("mangleOffer() | remote on hold, mangling offer");
                                                    var u,
                                                        a = s(e.media);
                                                    try {
                                                        for (a.s(); !(u = a.n()).done; ) {
                                                            var c = u.value;
                                                            -1 !== O.indexOf(c.type) &&
                                                                (c.direction ? ("sendrecv" === c.direction ? (c.direction = "recvonly") : "recvonly" === c.direction && (c.direction = "inactive")) : (c.direction = "recvonly"));
                                                        }
                                                    } catch (e) {
                                                        a.e(e);
                                                    } finally {
                                                        a.f();
                                                    }
                                                }
                                                return f.write(e);
                                            },
                                        },
                                        {
                                            key: "_setLocalMediaStatus",
                                            value: function () {
                                                var e = !0,
                                                    t = !0;
                                                (this._localHold || this._remoteHold) && ((e = !1), (t = !1)), this._audioMuted && (e = !1), this._videoMuted && (t = !1), this._toggleMuteAudio(!e), this._toggleMuteVideo(!t);
                                            },
                                        },
                                        {
                                            key: "_handleSessionTimersInIncomingRequest",
                                            value: function (e, t) {
                                                var n;
                                                this._sessionTimers.enabled &&
                                                    (e.session_expires && e.session_expires >= d.MIN_SESSION_EXPIRES
                                                        ? ((this._sessionTimers.currentExpires = e.session_expires), (n = e.session_expires_refresher || "uas"))
                                                        : ((this._sessionTimers.currentExpires = this._sessionTimers.defaultExpires), (n = "uas")),
                                                    t.push("Session-Expires: ".concat(this._sessionTimers.currentExpires, ";refresher=").concat(n)),
                                                    (this._sessionTimers.refresher = "uas" === n),
                                                    this._runSessionTimer());
                                            },
                                        },
                                        {
                                            key: "_handleSessionTimersInIncomingResponse",
                                            value: function (e) {
                                                var t;
                                                this._sessionTimers.enabled &&
                                                    (e.session_expires && e.session_expires >= d.MIN_SESSION_EXPIRES
                                                        ? ((this._sessionTimers.currentExpires = e.session_expires), (t = e.session_expires_refresher || "uac"))
                                                        : ((this._sessionTimers.currentExpires = this._sessionTimers.defaultExpires), (t = "uac")),
                                                    (this._sessionTimers.refresher = "uac" === t),
                                                    this._runSessionTimer());
                                            },
                                        },
                                        {
                                            key: "_runSessionTimer",
                                            value: function () {
                                                var e = this,
                                                    t = this._sessionTimers.currentExpires;
                                                (this._sessionTimers.running = !0),
                                                    clearTimeout(this._sessionTimers.timer),
                                                    this._sessionTimers.refresher
                                                        ? (this._sessionTimers.timer = setTimeout(function () {
                                                              e._status !== I.STATUS_TERMINATED && (R("runSessionTimer() | sending session refresh request"), e._sessionTimers.refreshMethod === d.UPDATE ? e._sendUpdate() : e._sendReinvite());
                                                          }, 500 * t))
                                                        : (this._sessionTimers.timer = setTimeout(function () {
                                                              e._status !== I.STATUS_TERMINATED &&
                                                                  (w("runSessionTimer() | timer expired, terminating the session"), e.terminate({ cause: d.causes.REQUEST_TIMEOUT, status_code: 408, reason_phrase: "Session Timer Expired" }));
                                                          }, 1100 * t));
                                            },
                                        },
                                        {
                                            key: "_toggleMuteAudio",
                                            value: function (e) {
                                                var t,
                                                    n = s(
                                                        this._connection.getSenders().filter(function (e) {
                                                            return e.track && "audio" === e.track.kind;
                                                        })
                                                    );
                                                try {
                                                    for (n.s(); !(t = n.n()).done; ) t.value.track.enabled = !e;
                                                } catch (e) {
                                                    n.e(e);
                                                } finally {
                                                    n.f();
                                                }
                                            },
                                        },
                                        {
                                            key: "_toggleMuteVideo",
                                            value: function (e) {
                                                var t,
                                                    n = s(
                                                        this._connection.getSenders().filter(function (e) {
                                                            return e.track && "video" === e.track.kind;
                                                        })
                                                    );
                                                try {
                                                    for (n.s(); !(t = n.n()).done; ) t.value.track.enabled = !e;
                                                } catch (e) {
                                                    n.e(e);
                                                } finally {
                                                    n.f();
                                                }
                                            },
                                        },
                                        {
                                            key: "_newRTCSession",
                                            value: function (e, t) {
                                                R("newRTCSession()"), this._ua.newRTCSession(this, { originator: e, session: this, request: t });
                                            },
                                        },
                                        {
                                            key: "_connecting",
                                            value: function (e) {
                                                R("session connecting"), R('emit "connecting"'), this.emit("connecting", { request: e });
                                            },
                                        },
                                        {
                                            key: "_progress",
                                            value: function (e, t) {
                                                R("session progress"), R('emit "progress"'), this.emit("progress", { originator: e, response: t || null });
                                            },
                                        },
                                        {
                                            key: "_accepted",
                                            value: function (e, t) {
                                                R("session accepted"), (this._start_time = new Date()), R('emit "accepted"'), this.emit("accepted", { originator: e, response: t || null });
                                            },
                                        },
                                        {
                                            key: "_confirmed",
                                            value: function (e, t) {
                                                R("session confirmed"), (this._is_confirmed = !0), R('emit "confirmed"'), this.emit("confirmed", { originator: e, ack: t || null });
                                            },
                                        },
                                        {
                                            key: "_ended",
                                            value: function (e, t, n) {
                                                R("session ended"), (this._end_time = new Date()), this._close(), R('emit "ended"'), this.emit("ended", { originator: e, message: t || null, cause: n });
                                            },
                                        },
                                        {
                                            key: "_failed",
                                            value: function (e, t, n) {
                                                R("session failed"),
                                                    R('emit "_failed"'),
                                                    this.emit("_failed", { originator: e, message: t || null, cause: n }),
                                                    this._close(),
                                                    R('emit "failed"'),
                                                    this.emit("failed", { originator: e, message: t || null, cause: n });
                                            },
                                        },
                                        {
                                            key: "_onhold",
                                            value: function (e) {
                                                R("session onhold"), this._setLocalMediaStatus(), R('emit "hold"'), this.emit("hold", { originator: e });
                                            },
                                        },
                                        {
                                            key: "_onunhold",
                                            value: function (e) {
                                                R("session onunhold"), this._setLocalMediaStatus(), R('emit "unhold"'), this.emit("unhold", { originator: e });
                                            },
                                        },
                                        {
                                            key: "_onmute",
                                            value: function (e) {
                                                var t = e.audio,
                                                    n = e.video;
                                                R("session onmute"), this._setLocalMediaStatus(), R('emit "muted"'), this.emit("muted", { audio: t, video: n });
                                            },
                                        },
                                        {
                                            key: "_onunmute",
                                            value: function (e) {
                                                var t = e.audio,
                                                    n = e.video;
                                                R("session onunmute"), this._setLocalMediaStatus(), R('emit "unmuted"'), this.emit("unmuted", { audio: t, video: n });
                                            },
                                        },
                                    ]) && o(t.prototype, n),
                                    r && o(t, r),
                                    a
                                );
                            })(h);
                        },
                        {
                            "./Constants": 2,
                            "./Dialog": 3,
                            "./Exceptions": 6,
                            "./RTCSession/DTMF": 13,
                            "./RTCSession/Info": 14,
                            "./RTCSession/ReferNotifier": 15,
                            "./RTCSession/ReferSubscriber": 16,
                            "./RequestSender": 18,
                            "./SIPMessage": 19,
                            "./Timers": 21,
                            "./Transactions": 22,
                            "./URI": 25,
                            "./Utils": 26,
                            debug: 29,
                            events: 31,
                            "sdp-transform": 35,
                        },
                    ],
                    13: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            function i(e, t) {
                                return (i =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    })(e, t);
                            }
                            function o(e) {
                                var t = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var n,
                                        r = u(e);
                                    if (t) {
                                        var s = u(this).constructor;
                                        n = Reflect.construct(r, arguments, s);
                                    } else n = r.apply(this, arguments);
                                    return l(this, n);
                                };
                            }
                            function l(e, t) {
                                return !t || ("object" !== r(t) && "function" != typeof t)
                                    ? (function (e) {
                                          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                          return e;
                                      })(e)
                                    : t;
                            }
                            function u(e) {
                                return (u = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      })(e);
                            }
                            var a = e("events").EventEmitter,
                                c = e("../Constants"),
                                h = e("../Exceptions"),
                                f = e("../Utils"),
                                d = e("debug")("JsSIP:RTCSession:DTMF");
                            e("debug")("JsSIP:ERROR:RTCSession:DTMF").log = console.warn.bind(console);
                            var _ = { MIN_DURATION: 70, MAX_DURATION: 6e3, DEFAULT_DURATION: 100, MIN_INTER_TONE_GAP: 50, DEFAULT_INTER_TONE_GAP: 500 };
                            (t.exports = (function (e) {
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
                                })(u, e);
                                var t,
                                    n,
                                    r,
                                    l = o(u);
                                function u(e) {
                                    var t;
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, u),
                                        ((t = l.call(this))._session = e),
                                        (t._direction = null),
                                        (t._tone = null),
                                        (t._duration = null),
                                        (t._request = null),
                                        t
                                    );
                                }
                                return (
                                    (t = u),
                                    (n = [
                                        {
                                            key: "tone",
                                            get: function () {
                                                return this._tone;
                                            },
                                        },
                                        {
                                            key: "duration",
                                            get: function () {
                                                return this._duration;
                                            },
                                        },
                                        {
                                            key: "send",
                                            value: function (e) {
                                                var t = this,
                                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if (void 0 === e) throw new TypeError("Not enough arguments");
                                                if (((this._direction = "outgoing"), this._session.status !== this._session.C.STATUS_CONFIRMED && this._session.status !== this._session.C.STATUS_WAITING_FOR_ACK))
                                                    throw new h.InvalidStateError(this._session.status);
                                                var r = f.cloneArray(n.extraHeaders);
                                                if (((this.eventHandlers = f.cloneObject(n.eventHandlers)), "string" == typeof e)) e = e.toUpperCase();
                                                else {
                                                    if ("number" != typeof e) throw new TypeError("Invalid tone: ".concat(e));
                                                    e = e.toString();
                                                }
                                                if (!e.match(/^[0-9A-DR#*]$/)) throw new TypeError("Invalid tone: ".concat(e));
                                                (this._tone = e), (this._duration = n.duration), r.push("Content-Type: application/dtmf-relay");
                                                var s = "Signal=".concat(this._tone, "\r\n");
                                                (s += "Duration=".concat(this._duration)),
                                                    this._session.newDTMF({ originator: "local", dtmf: this, request: this._request }),
                                                    this._session.sendRequest(c.INFO, {
                                                        extraHeaders: r,
                                                        eventHandlers: {
                                                            onSuccessResponse: function (e) {
                                                                t.emit("succeeded", { originator: "remote", response: e });
                                                            },
                                                            onErrorResponse: function (e) {
                                                                t.eventHandlers.onFailed && t.eventHandlers.onFailed(), t.emit("failed", { originator: "remote", response: e });
                                                            },
                                                            onRequestTimeout: function () {
                                                                t._session.onRequestTimeout();
                                                            },
                                                            onTransportError: function () {
                                                                t._session.onTransportError();
                                                            },
                                                            onDialogError: function () {
                                                                t._session.onDialogError();
                                                            },
                                                        },
                                                        body: s,
                                                    });
                                            },
                                        },
                                        {
                                            key: "init_incoming",
                                            value: function (e) {
                                                var t = /^(Signal\s*?=\s*?)([0-9A-D#*]{1})(\s)?.*/,
                                                    n = /^(Duration\s?=\s?)([0-9]{1,4})(\s)?.*/;
                                                if (((this._direction = "incoming"), (this._request = e), e.reply(200), e.body)) {
                                                    var r = e.body.split("\n");
                                                    r.length >= 1 && t.test(r[0]) && (this._tone = r[0].replace(t, "$2")), r.length >= 2 && n.test(r[1]) && (this._duration = parseInt(r[1].replace(n, "$2"), 10));
                                                }
                                                this._duration || (this._duration = _.DEFAULT_DURATION), this._tone ? this._session.newDTMF({ originator: "remote", dtmf: this, request: e }) : d("invalid INFO DTMF received, discarded");
                                            },
                                        },
                                    ]) && s(t.prototype, n),
                                    r && s(t, r),
                                    u
                                );
                            })(a)),
                                (t.exports.C = _);
                        },
                        { "../Constants": 2, "../Exceptions": 6, "../Utils": 26, debug: 29, events: 31 },
                    ],
                    14: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            function i(e, t) {
                                return (i =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    })(e, t);
                            }
                            function o(e) {
                                var t = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var n,
                                        r = u(e);
                                    if (t) {
                                        var s = u(this).constructor;
                                        n = Reflect.construct(r, arguments, s);
                                    } else n = r.apply(this, arguments);
                                    return l(this, n);
                                };
                            }
                            function l(e, t) {
                                return !t || ("object" !== r(t) && "function" != typeof t)
                                    ? (function (e) {
                                          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                          return e;
                                      })(e)
                                    : t;
                            }
                            function u(e) {
                                return (u = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      })(e);
                            }
                            var a = e("events").EventEmitter;
                            e("debug")("JsSIP:ERROR:RTCSession:Info").log = console.warn.bind(console);
                            var c = e("../Constants"),
                                h = e("../Exceptions"),
                                f = e("../Utils");
                            t.exports = (function (e) {
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
                                })(u, e);
                                var t,
                                    n,
                                    r,
                                    l = o(u);
                                function u(e) {
                                    var t;
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, u),
                                        ((t = l.call(this))._session = e),
                                        (t._direction = null),
                                        (t._contentType = null),
                                        (t._body = null),
                                        t
                                    );
                                }
                                return (
                                    (t = u),
                                    (n = [
                                        {
                                            key: "contentType",
                                            get: function () {
                                                return this._contentType;
                                            },
                                        },
                                        {
                                            key: "body",
                                            get: function () {
                                                return this._body;
                                            },
                                        },
                                        {
                                            key: "send",
                                            value: function (e, t) {
                                                var n = this,
                                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                                if (((this._direction = "outgoing"), t && void 0 === e)) throw new TypeError("Not enough arguments");
                                                if (this._session.status !== this._session.C.STATUS_CONFIRMED && this._session.status !== this._session.C.STATUS_WAITING_FOR_ACK) throw new h.InvalidStateError(this._session.status);
                                                (this._contentType = e), (this._body = t);
                                                var s = f.cloneArray(r.extraHeaders);
                                                e && s.push("Content-Type: ".concat(e)),
                                                    this._session.newInfo({ originator: "local", info: this, request: this.request }),
                                                    this._session.sendRequest(c.INFO, {
                                                        extraHeaders: s,
                                                        eventHandlers: {
                                                            onSuccessResponse: function (e) {
                                                                n.emit("succeeded", { originator: "remote", response: e });
                                                            },
                                                            onErrorResponse: function (e) {
                                                                n.emit("failed", { originator: "remote", response: e });
                                                            },
                                                            onTransportError: function () {
                                                                n._session.onTransportError();
                                                            },
                                                            onRequestTimeout: function () {
                                                                n._session.onRequestTimeout();
                                                            },
                                                            onDialogError: function () {
                                                                n._session.onDialogError();
                                                            },
                                                        },
                                                        body: t,
                                                    });
                                            },
                                        },
                                        {
                                            key: "init_incoming",
                                            value: function (e) {
                                                (this._direction = "incoming"),
                                                    (this.request = e),
                                                    e.reply(200),
                                                    (this._contentType = e.hasHeader("Content-Type") ? e.getHeader("Content-Type").toLowerCase() : void 0),
                                                    (this._body = e.body),
                                                    this._session.newInfo({ originator: "remote", info: this, request: e });
                                            },
                                        },
                                    ]) && s(t.prototype, n),
                                    r && s(t, r),
                                    u
                                );
                            })(a);
                        },
                        { "../Constants": 2, "../Exceptions": 6, "../Utils": 26, debug: 29, events: 31 },
                    ],
                    15: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var s = e("../Constants"),
                                i = e("debug")("JsSIP:RTCSession:ReferNotifier"),
                                o = "refer",
                                l = "message/sipfrag;version=2.0",
                                u = 300;
                            t.exports = (function () {
                                function e(t, n, r) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, e),
                                        (this._session = t),
                                        (this._id = n),
                                        (this._expires = r || u),
                                        (this._active = !0),
                                        this.notify(100);
                                }
                                var t, n, a;
                                return (
                                    (t = e),
                                    (n = [
                                        {
                                            key: "notify",
                                            value: function (e, t) {
                                                if ((i("notify()"), !1 !== this._active)) {
                                                    var n;
                                                    (t = t || s.REASON_PHRASE[e] || ""), (n = e >= 200 ? "terminated;reason=noresource" : "active;expires=".concat(this._expires));
                                                    try {
                                                        this._session.sendRequest(s.NOTIFY, {
                                                            extraHeaders: ["Event: ".concat(o, ";id=").concat(this._id), "Subscription-State: ".concat(n), "Content-Type: ".concat(l)],
                                                            body: "SIP/2.0 ".concat(e, " ").concat(t),
                                                            eventHandlers: {
                                                                onErrorResponse: function () {
                                                                    this._active = !1;
                                                                },
                                                            },
                                                        });
                                                    } catch (e) {
                                                        i("send NOTIFY exception [ignored]");
                                                    }
                                                }
                                            },
                                        },
                                    ]) && r(t.prototype, n),
                                    a && r(t, a),
                                    e
                                );
                            })();
                        },
                        { "../Constants": 2, debug: 29 },
                    ],
                    16: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            function i(e, t) {
                                return (i =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    })(e, t);
                            }
                            function o(e) {
                                var t = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var n,
                                        r = u(e);
                                    if (t) {
                                        var s = u(this).constructor;
                                        n = Reflect.construct(r, arguments, s);
                                    } else n = r.apply(this, arguments);
                                    return l(this, n);
                                };
                            }
                            function l(e, t) {
                                return !t || ("object" !== r(t) && "function" != typeof t)
                                    ? (function (e) {
                                          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                          return e;
                                      })(e)
                                    : t;
                            }
                            function u(e) {
                                return (u = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      })(e);
                            }
                            var a = e("events").EventEmitter,
                                c = e("../Constants"),
                                h = e("../Grammar"),
                                f = e("../Utils"),
                                d = e("debug")("JsSIP:RTCSession:ReferSubscriber");
                            t.exports = (function (e) {
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
                                })(u, e);
                                var t,
                                    n,
                                    r,
                                    l = o(u);
                                function u(e) {
                                    var t;
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, u),
                                        ((t = l.call(this))._id = null),
                                        (t._session = e),
                                        t
                                    );
                                }
                                return (
                                    (t = u),
                                    (n = [
                                        {
                                            key: "id",
                                            get: function () {
                                                return this._id;
                                            },
                                        },
                                        {
                                            key: "sendRefer",
                                            value: function (e) {
                                                var t = this,
                                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                d("sendRefer()");
                                                var r = f.cloneArray(n.extraHeaders),
                                                    s = f.cloneObject(n.eventHandlers);
                                                for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && this.on(i, s[i]);
                                                var o = null;
                                                n.replaces && ((o = n.replaces._request.call_id), (o += ";to-tag=".concat(n.replaces._to_tag)), (o += ";from-tag=".concat(n.replaces._from_tag)), (o = encodeURIComponent(o)));
                                                var l = "Refer-To: <".concat(e).concat(o ? "?Replaces=".concat(o) : "", ">");
                                                r.push(l);
                                                var u = "Referred-By: <".concat(this._session._ua._configuration.uri._scheme, ":").concat(this._session._ua._configuration.uri._user, "@").concat(this._session._ua._configuration.uri._host, ">");
                                                r.push(u), r.push("Contact: ".concat(this._session.contact));
                                                var a = this._session.sendRequest(c.REFER, {
                                                    extraHeaders: r,
                                                    eventHandlers: {
                                                        onSuccessResponse: function (e) {
                                                            t._requestSucceeded(e);
                                                        },
                                                        onErrorResponse: function (e) {
                                                            t._requestFailed(e, c.causes.REJECTED);
                                                        },
                                                        onTransportError: function () {
                                                            t._requestFailed(null, c.causes.CONNECTION_ERROR);
                                                        },
                                                        onRequestTimeout: function () {
                                                            t._requestFailed(null, c.causes.REQUEST_TIMEOUT);
                                                        },
                                                        onDialogError: function () {
                                                            t._requestFailed(null, c.causes.DIALOG_ERROR);
                                                        },
                                                    },
                                                });
                                                this._id = a.cseq;
                                            },
                                        },
                                        {
                                            key: "receiveNotify",
                                            value: function (e) {
                                                if ((d("receiveNotify()"), e.body)) {
                                                    var t = h.parse(e.body.trim(), "Status_Line");
                                                    if (-1 !== t)
                                                        switch (!0) {
                                                            case /^100$/.test(t.status_code):
                                                                this.emit("trying", { request: e, status_line: t });
                                                                break;
                                                            case /^1[0-9]{2}$/.test(t.status_code):
                                                                this.emit("progress", { request: e, status_line: t });
                                                                break;
                                                            case /^2[0-9]{2}$/.test(t.status_code):
                                                                this.emit("accepted", { request: e, status_line: t });
                                                                break;
                                                            default:
                                                                this.emit("failed", { request: e, status_line: t });
                                                        }
                                                    else d('receiveNotify() | error parsing NOTIFY body: "'.concat(e.body, '"'));
                                                }
                                            },
                                        },
                                        {
                                            key: "_requestSucceeded",
                                            value: function (e) {
                                                d("REFER succeeded"), d('emit "requestSucceeded"'), this.emit("requestSucceeded", { response: e });
                                            },
                                        },
                                        {
                                            key: "_requestFailed",
                                            value: function (e, t) {
                                                d("REFER failed"), d('emit "requestFailed"'), this.emit("requestFailed", { response: e || null, cause: t });
                                            },
                                        },
                                    ]) && s(t.prototype, n),
                                    r && s(t, r),
                                    u
                                );
                            })(a);
                        },
                        { "../Constants": 2, "../Grammar": 7, "../Utils": 26, debug: 29, events: 31 },
                    ],
                    17: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var s = e("./Utils"),
                                i = e("./Constants"),
                                o = e("./SIPMessage"),
                                l = e("./RequestSender"),
                                u = e("debug")("JsSIP:Registrator");
                            t.exports = (function () {
                                function e(t, n) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, e);
                                    (this._ua = t),
                                        (this._transport = n),
                                        (this._registrar = t.configuration.registrar_server),
                                        (this._expires = t.configuration.register_expires),
                                        (this._call_id = s.createRandomToken(22)),
                                        (this._cseq = 0),
                                        (this._to_uri = t.configuration.uri),
                                        (this._registrationTimer = null),
                                        (this._registering = !1),
                                        (this._registered = !1),
                                        (this._contact = this._ua.contact.toString()),
                                        (this._contact += ";+sip.ice"),
                                        (this._extraHeaders = []),
                                        (this._extraContactParams = ""),
                                        (this._contact += ";reg-id=".concat(1)),
                                        (this._contact += ';+sip.instance="<urn:uuid:'.concat(this._ua.configuration.instance_id, '>"'));
                                }
                                var t, n, a;
                                return (
                                    (t = e),
                                    (n = [
                                        {
                                            key: "registered",
                                            get: function () {
                                                return this._registered;
                                            },
                                        },
                                        {
                                            key: "setExtraHeaders",
                                            value: function (e) {
                                                Array.isArray(e) || (e = []), (this._extraHeaders = e.slice());
                                            },
                                        },
                                        {
                                            key: "setExtraContactParams",
                                            value: function (e) {
                                                for (var t in (e instanceof Object || (e = {}), (this._extraContactParams = ""), e))
                                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                                        var n = e[t];
                                                        (this._extraContactParams += ";".concat(t)), n && (this._extraContactParams += "=".concat(n));
                                                    }
                                            },
                                        },
                                        {
                                            key: "register",
                                            value: function () {
                                                var e = this;
                                                if (this._registering) u("Register request in progress...");
                                                else {
                                                    var t = this._extraHeaders.slice();
                                                    t.push("Contact: ".concat(this._contact, ";expires=").concat(this._expires).concat(this._extraContactParams)), t.push("Expires: ".concat(this._expires));
                                                    var n = new o.OutgoingRequest(i.REGISTER, this._registrar, this._ua, { to_uri: this._to_uri, call_id: this._call_id, cseq: (this._cseq += 1) }, t),
                                                        r = new l(this._ua, n, {
                                                            onRequestTimeout: function () {
                                                                e._registrationFailure(null, i.causes.REQUEST_TIMEOUT);
                                                            },
                                                            onTransportError: function () {
                                                                e._registrationFailure(null, i.causes.CONNECTION_ERROR);
                                                            },
                                                            onAuthenticated: function () {
                                                                e._cseq += 1;
                                                            },
                                                            onReceiveResponse: function (t) {
                                                                if (t.cseq === e._cseq)
                                                                    switch ((null !== e._registrationTimer && (clearTimeout(e._registrationTimer), (e._registrationTimer = null)), !0)) {
                                                                        case /^1[0-9]{2}$/.test(t.status_code):
                                                                            break;
                                                                        case /^2[0-9]{2}$/.test(t.status_code):
                                                                            if (((e._registering = !1), !t.hasHeader("Contact"))) {
                                                                                u("no Contact header in response to REGISTER, response ignored");
                                                                                break;
                                                                            }
                                                                            var n = t.headers.Contact.reduce(function (e, t) {
                                                                                return e.concat(t.parsed);
                                                                            }, []).find(function (t) {
                                                                                return t.uri.user === e._ua.contact.uri.user;
                                                                            });
                                                                            if (!n) {
                                                                                u("no Contact header pointing to us, response ignored");
                                                                                break;
                                                                            }
                                                                            var r = n.getParam("expires");
                                                                            !r && t.hasHeader("expires") && (r = t.getHeader("expires")), r || (r = e._expires), (r = Number(r)) < 10 && (r = 10);
                                                                            var o = r >= 140 ? (1e3 * r) / 2 + Math.floor(1e3 * (r / 2 - 70) * Math.random()) : 1e3 * r - 5e3;
                                                                            (e._registrationTimer = setTimeout(function () {
                                                                                (e._registrationTimer = null), 0 === e._ua.listeners("registrationExpiring").length ? e.register() : e._ua.emit("registrationExpiring");
                                                                            }, o)),
                                                                                n.hasParam("temp-gruu") && (e._ua.contact.temp_gruu = n.getParam("temp-gruu").replace(/"/g, "")),
                                                                                n.hasParam("pub-gruu") && (e._ua.contact.pub_gruu = n.getParam("pub-gruu").replace(/"/g, "")),
                                                                                e._registered || ((e._registered = !0), e._ua.registered({ response: t }));
                                                                            break;
                                                                        case /^423$/.test(t.status_code):
                                                                            t.hasHeader("min-expires")
                                                                                ? ((e._expires = Number(t.getHeader("min-expires"))), e._expires < 10 && (e._expires = 10), e.register())
                                                                                : (u("423 response received for REGISTER without Min-Expires"), e._registrationFailure(t, i.causes.SIP_FAILURE_CODE));
                                                                            break;
                                                                        default:
                                                                            var l = s.sipErrorCause(t.status_code);
                                                                            e._registrationFailure(t, l);
                                                                    }
                                                            },
                                                        });
                                                    (this._registering = !0), r.send();
                                                }
                                            },
                                        },
                                        {
                                            key: "unregister",
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                if (this._registered) {
                                                    (this._registered = !1), null !== this._registrationTimer && (clearTimeout(this._registrationTimer), (this._registrationTimer = null));
                                                    var n = this._extraHeaders.slice();
                                                    t.all ? n.push("Contact: *".concat(this._extraContactParams)) : n.push("Contact: ".concat(this._contact, ";expires=0").concat(this._extraContactParams)), n.push("Expires: 0");
                                                    var r = new o.OutgoingRequest(i.REGISTER, this._registrar, this._ua, { to_uri: this._to_uri, call_id: this._call_id, cseq: (this._cseq += 1) }, n),
                                                        a = new l(this._ua, r, {
                                                            onRequestTimeout: function () {
                                                                e._unregistered(null, i.causes.REQUEST_TIMEOUT);
                                                            },
                                                            onTransportError: function () {
                                                                e._unregistered(null, i.causes.CONNECTION_ERROR);
                                                            },
                                                            onAuthenticated: function () {
                                                                e._cseq += 1;
                                                            },
                                                            onReceiveResponse: function (t) {
                                                                switch (!0) {
                                                                    case /^1[0-9]{2}$/.test(t.status_code):
                                                                        break;
                                                                    case /^2[0-9]{2}$/.test(t.status_code):
                                                                        e._unregistered(t);
                                                                        break;
                                                                    default:
                                                                        var n = s.sipErrorCause(t.status_code);
                                                                        e._unregistered(t, n);
                                                                }
                                                            },
                                                        });
                                                    a.send();
                                                } else u("already unregistered");
                                            },
                                        },
                                        {
                                            key: "close",
                                            value: function () {
                                                this._registered && this.unregister();
                                            },
                                        },
                                        {
                                            key: "onTransportClosed",
                                            value: function () {
                                                (this._registering = !1),
                                                    null !== this._registrationTimer && (clearTimeout(this._registrationTimer), (this._registrationTimer = null)),
                                                    this._registered && ((this._registered = !1), this._ua.unregistered({}));
                                            },
                                        },
                                        {
                                            key: "_registrationFailure",
                                            value: function (e, t) {
                                                (this._registering = !1), this._ua.registrationFailed({ response: e || null, cause: t }), this._registered && ((this._registered = !1), this._ua.unregistered({ response: e || null, cause: t }));
                                            },
                                        },
                                        {
                                            key: "_unregistered",
                                            value: function (e, t) {
                                                (this._registering = !1), (this._registered = !1), this._ua.unregistered({ response: e || null, cause: t || null });
                                            },
                                        },
                                    ]) && r(t.prototype, n),
                                    a && r(t, a),
                                    e
                                );
                            })();
                        },
                        { "./Constants": 2, "./RequestSender": 18, "./SIPMessage": 19, "./Utils": 26, debug: 29 },
                    ],
                    18: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }
                            function s(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var i = e("./Constants"),
                                o = e("./DigestAuthentication"),
                                l = e("./Transactions"),
                                u = e("debug")("JsSIP:RequestSender"),
                                a = { onRequestTimeout: function () {}, onTransportError: function () {}, onReceiveResponse: function () {}, onAuthenticated: function () {} };
                            t.exports = (function () {
                                function e(t, n, s) {
                                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                    for (var l in (r(this, e), (this._ua = t), (this._eventHandlers = s), (this._method = n.method), (this._request = n), (this._auth = null), (this._challenged = !1), (this._staled = !1), (this._config2 = o), a))
                                        Object.prototype.hasOwnProperty.call(a, l) && (this._eventHandlers[l] || (this._eventHandlers[l] = a[l]));
                                    t.status !== t.C.STATUS_USER_CLOSED || (this._method === i.BYE && this._method === i.ACK) || this._eventHandlers.onTransportError();
                                }
                                var t, n, c;
                                return (
                                    (t = e),
                                    (n = [
                                        {
                                            key: "send",
                                            value: function () {
                                                var e = this,
                                                    t = {
                                                        onRequestTimeout: function () {
                                                            e._eventHandlers.onRequestTimeout();
                                                        },
                                                        onTransportError: function () {
                                                            e._eventHandlers.onTransportError();
                                                        },
                                                        onReceiveResponse: function (t) {
                                                            e._receiveResponse(t);
                                                        },
                                                    };
                                                switch (this._method) {
                                                    case "INVITE":
                                                        this.clientTransaction = new l.InviteClientTransaction(this._ua, this._ua.transport, this._request, t);
                                                        break;
                                                    case "ACK":
                                                        this.clientTransaction = new l.AckClientTransaction(this._ua, this._ua.transport, this._request, t);
                                                        break;
                                                    default:
                                                        this.clientTransaction = new l.NonInviteClientTransaction(this._ua, this._ua.transport, this._request, t);
                                                }
                                                this._ua._configuration.authorization_jwt && this._request.setHeader("Authorization", this._ua._configuration.authorization_jwt), this.clientTransaction.send();
                                            },
                                        },
                                        {
                                            key: "_receiveResponse",
                                            value: function (e) {
                                                var t,
                                                    n,
                                                    r = e.status_code;
                                                if ((401 !== r && 407 !== r) || (null === this._config2 && null === this._ua.configuration.password && null === this._ua.configuration.ha1)) this._eventHandlers.onReceiveResponse(e);
                                                else {
                                                    if ((401 === e.status_code ? ((t = e.parseHeader("www-authenticate")), (n = "authorization")) : ((t = e.parseHeader("proxy-authenticate")), (n = "proxy-authorization")), !t))
                                                        return u("".concat(e.status_code, " with wrong or missing challenge, cannot authenticate")), void this._eventHandlers.onReceiveResponse(e);
                                                    if (!this._challenged || (!this._staled && !0 === t.stale)) {
                                                        if (!this._auth) {
                                                            var s = this._config2 ? this._config2 : this._ua.configuration;
                                                            this._auth = new o({ username: s.authorization_user, password: s.password, realm: s.realm, ha1: s.ha1 });
                                                        }
                                                        if (!this._auth.authenticate(this._request, t)) return void this._eventHandlers.onReceiveResponse(e);
                                                        (this._challenged = !0),
                                                            this._config2
                                                                ? ((this._config2.realm = this._auth.get("realm")), (this._config2.ha1 = this._auth.get("ha1")))
                                                                : (this._ua.set("realm", this._auth.get("realm")), this._ua.set("ha1", this._auth.get("ha1"))),
                                                            t.stale && (this._staled = !0),
                                                            (this._request = this._request.clone()),
                                                            (this._request.cseq += 1),
                                                            this._request.setHeader("cseq", "".concat(this._request.cseq, " ").concat(this._method)),
                                                            this._request.setHeader(n, this._auth.toString()),
                                                            this._eventHandlers.onAuthenticated(this._request),
                                                            this.send();
                                                    } else this._eventHandlers.onReceiveResponse(e);
                                                }
                                            },
                                        },
                                    ]) && s(t.prototype, n),
                                    c && s(t, c),
                                    e
                                );
                            })();
                        },
                        { "./Constants": 2, "./DigestAuthentication": 5, "./Transactions": 22, debug: 29 },
                    ],
                    19: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
                            }
                            function i(e, t) {
                                return (i =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    })(e, t);
                            }
                            function o(e) {
                                var t = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var n,
                                        r = u(e);
                                    if (t) {
                                        var s = u(this).constructor;
                                        n = Reflect.construct(r, arguments, s);
                                    } else n = r.apply(this, arguments);
                                    return l(this, n);
                                };
                            }
                            function l(e, t) {
                                return !t || ("object" !== r(t) && "function" != typeof t)
                                    ? (function (e) {
                                          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                          return e;
                                      })(e)
                                    : t;
                            }
                            function u(e) {
                                return (u = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      })(e);
                            }
                            function a(e, t) {
                                var n;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (
                                        Array.isArray(e) ||
                                        (n = (function (e, t) {
                                            if (!e) return;
                                            if ("string" == typeof e) return c(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
                                        })(e)) ||
                                        (t && e && "number" == typeof e.length)
                                    ) {
                                        n && (e = n);
                                        var r = 0,
                                            s = function () {};
                                        return {
                                            s: s,
                                            n: function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: s,
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var i,
                                    o = !0,
                                    l = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return (o = e.done), e;
                                    },
                                    e: function (e) {
                                        (l = !0), (i = e);
                                    },
                                    f: function () {
                                        try {
                                            o || null == n.return || n.return();
                                        } finally {
                                            if (l) throw i;
                                        }
                                    },
                                };
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                                return r;
                            }
                            function h(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }
                            function f(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            function d(e, t, n) {
                                return t && f(e.prototype, t), n && f(e, n), e;
                            }
                            var _ = e("sdp-transform"),
                                p = e("./Constants"),
                                m = e("./Utils"),
                                v = e("./NameAddrHeader"),
                                g = e("./Grammar"),
                                y = e("debug")("JsSIP:SIPMessage"),
                                T = (function () {
                                    function e(t, n, r, s, i, o) {
                                        if ((h(this, e), !t || !n || !r)) return null;
                                        (s = s || {}),
                                            (this.ua = r),
                                            (this.headers = {}),
                                            (this.method = t),
                                            (this.ruri = n),
                                            (this.body = o),
                                            (this.extraHeaders = m.cloneArray(i)),
                                            s.route_set ? this.setHeader("route", s.route_set) : r.configuration.use_preloaded_route && this.setHeader("route", "<".concat(r.transport.sip_uri, ";lr>")),
                                            this.setHeader("via", ""),
                                            this.setHeader("max-forwards", p.MAX_FORWARDS);
                                        var l = s.to_uri || n,
                                            u = s.to_tag ? { tag: s.to_tag } : null,
                                            a = void 0 !== s.to_display_name ? s.to_display_name : null;
                                        (this.to = new v(l, a, u)), this.setHeader("to", this.to.toString());
                                        var c,
                                            f = s.from_uri || r.configuration.uri,
                                            d = { tag: s.from_tag || m.newTag() };
                                        (c = void 0 !== s.from_display_name ? s.from_display_name : r.configuration.display_name ? r.configuration.display_name : null), (this.from = new v(f, c, d)), this.setHeader("from", this.from.toString());
                                        var _ = s.call_id || r.configuration.jssip_id + m.createRandomToken(15);
                                        (this.call_id = _), this.setHeader("call-id", _);
                                        var g = s.cseq || Math.floor(1e4 * Math.random());
                                        (this.cseq = g), this.setHeader("cseq", "".concat(g, " ").concat(t));
                                    }
                                    return (
                                        d(e, [
                                            {
                                                key: "setHeader",
                                                value: function (e, t) {
                                                    for (var n = new RegExp("^\\s*".concat(e, "\\s*:"), "i"), r = 0; r < this.extraHeaders.length; r++) n.test(this.extraHeaders[r]) && this.extraHeaders.splice(r, 1);
                                                    this.headers[m.headerize(e)] = Array.isArray(t) ? t : [t];
                                                },
                                            },
                                            {
                                                key: "getHeader",
                                                value: function (e) {
                                                    var t = this.headers[m.headerize(e)];
                                                    if (t) {
                                                        if (t[0]) return t[0];
                                                    } else {
                                                        var n,
                                                            r = new RegExp("^\\s*".concat(e, "\\s*:"), "i"),
                                                            s = a(this.extraHeaders);
                                                        try {
                                                            for (s.s(); !(n = s.n()).done; ) {
                                                                var i = n.value;
                                                                if (r.test(i)) return i.substring(i.indexOf(":") + 1).trim();
                                                            }
                                                        } catch (e) {
                                                            s.e(e);
                                                        } finally {
                                                            s.f();
                                                        }
                                                    }
                                                },
                                            },
                                            {
                                                key: "getHeaders",
                                                value: function (e) {
                                                    var t = this.headers[m.headerize(e)],
                                                        n = [];
                                                    if (t) {
                                                        var r,
                                                            s = a(t);
                                                        try {
                                                            for (s.s(); !(r = s.n()).done; ) {
                                                                var i = r.value;
                                                                n.push(i);
                                                            }
                                                        } catch (e) {
                                                            s.e(e);
                                                        } finally {
                                                            s.f();
                                                        }
                                                        return n;
                                                    }
                                                    var o,
                                                        l = new RegExp("^\\s*".concat(e, "\\s*:"), "i"),
                                                        u = a(this.extraHeaders);
                                                    try {
                                                        for (u.s(); !(o = u.n()).done; ) {
                                                            var c = o.value;
                                                            l.test(c) && n.push(c.substring(c.indexOf(":") + 1).trim());
                                                        }
                                                    } catch (e) {
                                                        u.e(e);
                                                    } finally {
                                                        u.f();
                                                    }
                                                    return n;
                                                },
                                            },
                                            {
                                                key: "hasHeader",
                                                value: function (e) {
                                                    if (this.headers[m.headerize(e)]) return !0;
                                                    var t,
                                                        n = new RegExp("^\\s*".concat(e, "\\s*:"), "i"),
                                                        r = a(this.extraHeaders);
                                                    try {
                                                        for (r.s(); !(t = r.n()).done; ) {
                                                            var s = t.value;
                                                            if (n.test(s)) return !0;
                                                        }
                                                    } catch (e) {
                                                        r.e(e);
                                                    } finally {
                                                        r.f();
                                                    }
                                                    return !1;
                                                },
                                            },
                                            {
                                                key: "parseSDP",
                                                value: function (e) {
                                                    return (!e && this.sdp) || (this.sdp = _.parse(this.body || "")), this.sdp;
                                                },
                                            },
                                            {
                                                key: "toString",
                                                value: function () {
                                                    var e = "".concat(this.method, " ").concat(this.ruri, " SIP/2.0\r\n");
                                                    for (var t in this.headers)
                                                        if (Object.prototype.hasOwnProperty.call(this.headers, t)) {
                                                            var n,
                                                                r = a(this.headers[t]);
                                                            try {
                                                                for (r.s(); !(n = r.n()).done; ) {
                                                                    var s = n.value;
                                                                    e += "".concat(t, ": ").concat(s, "\r\n");
                                                                }
                                                            } catch (e) {
                                                                r.e(e);
                                                            } finally {
                                                                r.f();
                                                            }
                                                        }
                                                    var i,
                                                        o = a(this.extraHeaders);
                                                    try {
                                                        for (o.s(); !(i = o.n()).done; ) {
                                                            var l = i.value;
                                                            e += "".concat(l.trim(), "\r\n");
                                                        }
                                                    } catch (e) {
                                                        o.e(e);
                                                    } finally {
                                                        o.f();
                                                    }
                                                    var u = [];
                                                    switch (this.method) {
                                                        case p.REGISTER:
                                                            u.push("path", "gruu");
                                                            break;
                                                        case p.INVITE:
                                                            this.ua.configuration.session_timers && u.push("timer"), (this.ua.contact.pub_gruu || this.ua.contact.temp_gruu) && u.push("gruu"), u.push("ice", "replaces");
                                                            break;
                                                        case p.UPDATE:
                                                            this.ua.configuration.session_timers && u.push("timer"), u.push("ice");
                                                    }
                                                    u.push("outbound");
                                                    var c = this.ua.configuration.user_agent || p.USER_AGENT;
                                                    if (((e += "Allow: ".concat(p.ALLOWED_METHODS, "\r\n")), (e += "Supported: ".concat(u, "\r\n")), (e += "User-Agent: ".concat(c, "\r\n")), this.body)) {
                                                        var h = m.str_utf8_length(this.body);
                                                        (e += "Content-Length: ".concat(h, "\r\n\r\n")), (e += this.body);
                                                    } else e += "Content-Length: 0\r\n\r\n";
                                                    return e;
                                                },
                                            },
                                            {
                                                key: "clone",
                                                value: function () {
                                                    var t = new e(this.method, this.ruri, this.ua);
                                                    return (
                                                        Object.keys(this.headers).forEach(function (e) {
                                                            t.headers[e] = this.headers[e].slice();
                                                        }, this),
                                                        (t.body = this.body),
                                                        (t.extraHeaders = m.cloneArray(this.extraHeaders)),
                                                        (t.to = this.to),
                                                        (t.from = this.from),
                                                        (t.call_id = this.call_id),
                                                        (t.cseq = this.cseq),
                                                        t
                                                    );
                                                },
                                            },
                                        ]),
                                        e
                                    );
                                })(),
                                C = (function (e) {
                                    s(n, e);
                                    var t = o(n);
                                    function n(e, r, s, i, o) {
                                        var l;
                                        return h(this, n), ((l = t.call(this, p.INVITE, e, r, s, i, o)).transaction = null), l;
                                    }
                                    return (
                                        d(n, [
                                            {
                                                key: "cancel",
                                                value: function (e) {
                                                    this.transaction.cancel(e);
                                                },
                                            },
                                            {
                                                key: "clone",
                                                value: function () {
                                                    var e = new n(this.ruri, this.ua);
                                                    return (
                                                        Object.keys(this.headers).forEach(function (t) {
                                                            e.headers[t] = this.headers[t].slice();
                                                        }, this),
                                                        (e.body = this.body),
                                                        (e.extraHeaders = m.cloneArray(this.extraHeaders)),
                                                        (e.to = this.to),
                                                        (e.from = this.from),
                                                        (e.call_id = this.call_id),
                                                        (e.cseq = this.cseq),
                                                        (e.transaction = this.transaction),
                                                        e
                                                    );
                                                },
                                            },
                                        ]),
                                        n
                                    );
                                })(T),
                                S = (function () {
                                    function e() {
                                        h(this, e),
                                            (this.data = null),
                                            (this.headers = null),
                                            (this.method = null),
                                            (this.via = null),
                                            (this.via_branch = null),
                                            (this.call_id = null),
                                            (this.cseq = null),
                                            (this.from = null),
                                            (this.from_tag = null),
                                            (this.to = null),
                                            (this.to_tag = null),
                                            (this.body = null),
                                            (this.sdp = null);
                                    }
                                    return (
                                        d(e, [
                                            {
                                                key: "addHeader",
                                                value: function (e, t) {
                                                    var n = { raw: t };
                                                    (e = m.headerize(e)), this.headers[e] ? this.headers[e].push(n) : (this.headers[e] = [n]);
                                                },
                                            },
                                            {
                                                key: "getHeader",
                                                value: function (e) {
                                                    var t = this.headers[m.headerize(e)];
                                                    if (t) return t[0] ? t[0].raw : void 0;
                                                },
                                            },
                                            {
                                                key: "getHeaders",
                                                value: function (e) {
                                                    var t = this.headers[m.headerize(e)],
                                                        n = [];
                                                    if (!t) return [];
                                                    var r,
                                                        s = a(t);
                                                    try {
                                                        for (s.s(); !(r = s.n()).done; ) {
                                                            var i = r.value;
                                                            n.push(i.raw);
                                                        }
                                                    } catch (e) {
                                                        s.e(e);
                                                    } finally {
                                                        s.f();
                                                    }
                                                    return n;
                                                },
                                            },
                                            {
                                                key: "hasHeader",
                                                value: function (e) {
                                                    return !!this.headers[m.headerize(e)];
                                                },
                                            },
                                            {
                                                key: "parseHeader",
                                                value: function (e) {
                                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                                    if (((e = m.headerize(e)), this.headers[e])) {
                                                        if (!(t >= this.headers[e].length)) {
                                                            var n = this.headers[e][t],
                                                                r = n.raw;
                                                            if (n.parsed) return n.parsed;
                                                            var s = g.parse(r, e.replace(/-/g, "_"));
                                                            return -1 === s ? (this.headers[e].splice(t, 1), void y('error parsing "'.concat(e, '" header field with value "').concat(r, '"'))) : ((n.parsed = s), s);
                                                        }
                                                        y('not so many "'.concat(e, '" headers present'));
                                                    } else y('header "'.concat(e, '" not present'));
                                                },
                                            },
                                            {
                                                key: "s",
                                                value: function (e, t) {
                                                    return this.parseHeader(e, t);
                                                },
                                            },
                                            {
                                                key: "setHeader",
                                                value: function (e, t) {
                                                    var n = { raw: t };
                                                    this.headers[m.headerize(e)] = [n];
                                                },
                                            },
                                            {
                                                key: "parseSDP",
                                                value: function (e) {
                                                    return (!e && this.sdp) || (this.sdp = _.parse(this.body || "")), this.sdp;
                                                },
                                            },
                                            {
                                                key: "toString",
                                                value: function () {
                                                    return this.data;
                                                },
                                            },
                                        ]),
                                        e
                                    );
                                })(),
                                E = (function (e) {
                                    s(n, e);
                                    var t = o(n);
                                    function n(e) {
                                        var r;
                                        return h(this, n), ((r = t.call(this)).ua = e), (r.headers = {}), (r.ruri = null), (r.transport = null), (r.server_transaction = null), r;
                                    }
                                    return (
                                        d(n, [
                                            {
                                                key: "reply",
                                                value: function (e, t, n, r, s, i) {
                                                    var o = [],
                                                        l = this.getHeader("To");
                                                    if (((t = t || null), !(e = e || null) || e < 100 || e > 699)) throw new TypeError("Invalid status_code: ".concat(e));
                                                    if (t && "string" != typeof t && !(t instanceof String)) throw new TypeError("Invalid reason_phrase: ".concat(t));
                                                    (t = t || p.REASON_PHRASE[e] || ""), (n = m.cloneArray(n));
                                                    var u = "SIP/2.0 ".concat(e, " ").concat(t, "\r\n");
                                                    if (this.method === p.INVITE && e > 100 && e <= 200) {
                                                        var c,
                                                            h = a(this.getHeaders("record-route"));
                                                        try {
                                                            for (h.s(); !(c = h.n()).done; ) {
                                                                var f = c.value;
                                                                u += "Record-Route: ".concat(f, "\r\n");
                                                            }
                                                        } catch (e) {
                                                            h.e(e);
                                                        } finally {
                                                            h.f();
                                                        }
                                                    }
                                                    var d,
                                                        _ = a(this.getHeaders("via"));
                                                    try {
                                                        for (_.s(); !(d = _.n()).done; ) {
                                                            var v = d.value;
                                                            u += "Via: ".concat(v, "\r\n");
                                                        }
                                                    } catch (e) {
                                                        _.e(e);
                                                    } finally {
                                                        _.f();
                                                    }
                                                    !this.to_tag && e > 100 ? (l += ";tag=".concat(m.newTag())) : this.to_tag && !this.s("to").hasParam("tag") && (l += ";tag=".concat(this.to_tag)),
                                                        (u += "To: ".concat(l, "\r\n")),
                                                        (u += "From: ".concat(this.getHeader("From"), "\r\n")),
                                                        (u += "Call-ID: ".concat(this.call_id, "\r\n")),
                                                        (u += "CSeq: ".concat(this.cseq, " ").concat(this.method, "\r\n"));
                                                    var g,
                                                        y = a(n);
                                                    try {
                                                        for (y.s(); !(g = y.n()).done; ) {
                                                            var T = g.value;
                                                            u += "".concat(T.trim(), "\r\n");
                                                        }
                                                    } catch (e) {
                                                        y.e(e);
                                                    } finally {
                                                        y.f();
                                                    }
                                                    switch (this.method) {
                                                        case p.INVITE:
                                                            this.ua.configuration.session_timers && o.push("timer"), (this.ua.contact.pub_gruu || this.ua.contact.temp_gruu) && o.push("gruu"), o.push("ice", "replaces");
                                                            break;
                                                        case p.UPDATE:
                                                            this.ua.configuration.session_timers && o.push("timer"), r && o.push("ice"), o.push("replaces");
                                                    }
                                                    if (
                                                        (o.push("outbound"),
                                                        this.method === p.OPTIONS
                                                            ? ((u += "Allow: ".concat(p.ALLOWED_METHODS, "\r\n")), (u += "Accept: ".concat(p.ACCEPTED_BODY_TYPES, "\r\n")))
                                                            : 405 === e
                                                            ? (u += "Allow: ".concat(p.ALLOWED_METHODS, "\r\n"))
                                                            : 415 === e && (u += "Accept: ".concat(p.ACCEPTED_BODY_TYPES, "\r\n")),
                                                        (u += "Supported: ".concat(o, "\r\n")),
                                                        r)
                                                    ) {
                                                        var C = m.str_utf8_length(r);
                                                        (u += "Content-Type: application/sdp\r\n"), (u += "Content-Length: ".concat(C, "\r\n\r\n")), (u += r);
                                                    } else u += "Content-Length: ".concat(0, "\r\n\r\n");
                                                    this.server_transaction.receiveResponse(e, u, s, i);
                                                },
                                            },
                                            {
                                                key: "reply_sl",
                                                value: function () {
                                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                                        n = this.getHeaders("via");
                                                    if (!e || e < 100 || e > 699) throw new TypeError("Invalid status_code: ".concat(e));
                                                    if (t && "string" != typeof t && !(t instanceof String)) throw new TypeError("Invalid reason_phrase: ".concat(t));
                                                    t = t || p.REASON_PHRASE[e] || "";
                                                    var r,
                                                        s = "SIP/2.0 ".concat(e, " ").concat(t, "\r\n"),
                                                        i = a(n);
                                                    try {
                                                        for (i.s(); !(r = i.n()).done; ) {
                                                            var o = r.value;
                                                            s += "Via: ".concat(o, "\r\n");
                                                        }
                                                    } catch (e) {
                                                        i.e(e);
                                                    } finally {
                                                        i.f();
                                                    }
                                                    var l = this.getHeader("To");
                                                    !this.to_tag && e > 100 ? (l += ";tag=".concat(m.newTag())) : this.to_tag && !this.s("to").hasParam("tag") && (l += ";tag=".concat(this.to_tag)),
                                                        (s += "To: ".concat(l, "\r\n")),
                                                        (s += "From: ".concat(this.getHeader("From"), "\r\n")),
                                                        (s += "Call-ID: ".concat(this.call_id, "\r\n")),
                                                        (s += "CSeq: ".concat(this.cseq, " ").concat(this.method, "\r\n")),
                                                        (s += "Content-Length: ".concat(0, "\r\n\r\n")),
                                                        this.transport.send(s);
                                                },
                                            },
                                        ]),
                                        n
                                    );
                                })(S),
                                A = (function (e) {
                                    s(n, e);
                                    var t = o(n);
                                    function n() {
                                        var e;
                                        return h(this, n), ((e = t.call(this)).headers = {}), (e.status_code = null), (e.reason_phrase = null), e;
                                    }
                                    return n;
                                })(S);
                            t.exports = { OutgoingRequest: T, InitialOutgoingInviteRequest: C, IncomingRequest: E, IncomingResponse: A };
                        },
                        { "./Constants": 2, "./Grammar": 7, "./NameAddrHeader": 10, "./Utils": 26, debug: 29, "sdp-transform": 35 },
                    ],
                    20: [
                        function (e, t, n) {
                            "use strict";
                            var r = e("./Utils"),
                                s = e("./Grammar"),
                                i = e("debug")("JsSIP:ERROR:Socket");
                            (i.log = console.warn.bind(console)),
                                (n.isSocket = function (e) {
                                    if (Array.isArray(e)) return !1;
                                    if (void 0 === e) return i("undefined JsSIP.Socket instance"), !1;
                                    try {
                                        if (!r.isString(e.url)) throw (i("missing or invalid JsSIP.Socket url property"), new Error());
                                        if (!r.isString(e.via_transport)) throw (i("missing or invalid JsSIP.Socket via_transport property"), new Error());
                                        if (-1 === s.parse(e.sip_uri, "SIP_URI")) throw (i("missing or invalid JsSIP.Socket sip_uri property"), new Error());
                                    } catch (e) {
                                        return !1;
                                    }
                                    try {
                                        ["connect", "disconnect", "send"].forEach(function (t) {
                                            if (!r.isFunction(e[t])) throw (i("missing or invalid JsSIP.Socket method: ".concat(t)), new Error());
                                        });
                                    } catch (e) {
                                        return !1;
                                    }
                                    return !0;
                                });
                        },
                        { "./Grammar": 7, "./Utils": 26, debug: 29 },
                    ],
                    21: [
                        function (e, t, n) {
                            "use strict";
                            var r = 500;
                            t.exports = { T1: r, T2: 4e3, T4: 5e3, TIMER_B: 32e3, TIMER_D: 0, TIMER_F: 32e3, TIMER_H: 32e3, TIMER_I: 0, TIMER_J: 0, TIMER_K: 0, TIMER_L: 32e3, TIMER_M: 32e3, PROVISIONAL_RESPONSE_INTERVAL: 6e4 };
                        },
                        {},
                    ],
                    22: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }
                            function i(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            function o(e, t, n) {
                                return t && i(e.prototype, t), n && i(e, n), e;
                            }
                            function l(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && u(e, t);
                            }
                            function u(e, t) {
                                return (u =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    })(e, t);
                            }
                            function a(e) {
                                var t = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var n,
                                        r = f(e);
                                    if (t) {
                                        var s = f(this).constructor;
                                        n = Reflect.construct(r, arguments, s);
                                    } else n = r.apply(this, arguments);
                                    return c(this, n);
                                };
                            }
                            function c(e, t) {
                                return !t || ("object" !== r(t) && "function" != typeof t) ? h(e) : t;
                            }
                            function h(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            }
                            function f(e) {
                                return (f = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      })(e);
                            }
                            var d = e("events").EventEmitter,
                                _ = e("./Constants"),
                                p = e("./SIPMessage"),
                                m = e("./Timers"),
                                v = e("debug")("JsSIP:NonInviteClientTransaction"),
                                g = e("debug")("JsSIP:InviteClientTransaction"),
                                y = e("debug")("JsSIP:AckClientTransaction"),
                                T = e("debug")("JsSIP:NonInviteServerTransaction"),
                                C = e("debug")("JsSIP:InviteServerTransaction"),
                                S = {
                                    STATUS_TRYING: 1,
                                    STATUS_PROCEEDING: 2,
                                    STATUS_CALLING: 3,
                                    STATUS_ACCEPTED: 4,
                                    STATUS_COMPLETED: 5,
                                    STATUS_TERMINATED: 6,
                                    STATUS_CONFIRMED: 7,
                                    NON_INVITE_CLIENT: "nict",
                                    NON_INVITE_SERVER: "nist",
                                    INVITE_CLIENT: "ict",
                                    INVITE_SERVER: "ist",
                                },
                                E = (function (e) {
                                    l(n, e);
                                    var t = a(n);
                                    function n(e, r, i, o) {
                                        var l;
                                        s(this, n), ((l = t.call(this)).type = S.NON_INVITE_CLIENT), (l.id = "z9hG4bK".concat(Math.floor(1e7 * Math.random()))), (l.ua = e), (l.transport = r), (l.request = i), (l.eventHandlers = o);
                                        var u = "SIP/2.0/".concat(r.via_transport);
                                        return (u += " ".concat(e.configuration.via_host, ";branch=").concat(l.id)), l.request.setHeader("via", u), l.ua.newTransaction(h(l)), l;
                                    }
                                    return (
                                        o(n, [
                                            {
                                                key: "C",
                                                get: function () {
                                                    return S;
                                                },
                                            },
                                            {
                                                key: "stateChanged",
                                                value: function (e) {
                                                    (this.state = e), this.emit("stateChanged");
                                                },
                                            },
                                            {
                                                key: "send",
                                                value: function () {
                                                    var e = this;
                                                    this.stateChanged(S.STATUS_TRYING),
                                                        (this.F = setTimeout(function () {
                                                            e.timer_F();
                                                        }, m.TIMER_F)),
                                                        this.transport.send(this.request) || this.onTransportError();
                                                },
                                            },
                                            {
                                                key: "onTransportError",
                                                value: function () {
                                                    v("transport error occurred, deleting transaction ".concat(this.id)),
                                                        clearTimeout(this.F),
                                                        this.stateChanged(S.STATUS_TERMINATED),
                                                        this.ua.destroyTransaction(this),
                                                        this.eventHandlers.onTransportError();
                                                },
                                            },
                                            {
                                                key: "timer_F",
                                                value: function () {
                                                    v("Timer F expired for transaction ".concat(this.id)), this.stateChanged(S.STATUS_TERMINATED), this.ua.destroyTransaction(this), this.eventHandlers.onRequestTimeout();
                                                },
                                            },
                                            {
                                                key: "timer_K",
                                                value: function () {
                                                    this.stateChanged(S.STATUS_TERMINATED), this.ua.destroyTransaction(this);
                                                },
                                            },
                                            {
                                                key: "receiveResponse",
                                                value: function (e) {
                                                    var t = e.status_code;
                                                    if (t < 200)
                                                        switch (this.state) {
                                                            case S.STATUS_TRYING:
                                                            case S.STATUS_PROCEEDING:
                                                                this.stateChanged(S.STATUS_PROCEEDING), this.eventHandlers.onReceiveResponse(e);
                                                        }
                                                    else
                                                        switch (this.state) {
                                                            case S.STATUS_TRYING:
                                                            case S.STATUS_PROCEEDING:
                                                                this.stateChanged(S.STATUS_COMPLETED), clearTimeout(this.F), 408 === t ? this.eventHandlers.onRequestTimeout() : this.eventHandlers.onReceiveResponse(e), this.timer_K();
                                                        }
                                                },
                                            },
                                        ]),
                                        n
                                    );
                                })(d),
                                A = (function (e) {
                                    l(n, e);
                                    var t = a(n);
                                    function n(e, r, i, o) {
                                        var l;
                                        s(this, n),
                                            ((l = t.call(this)).type = S.INVITE_CLIENT),
                                            (l.id = "z9hG4bK".concat(Math.floor(1e7 * Math.random()))),
                                            (l.ua = e),
                                            (l.transport = r),
                                            (l.request = i),
                                            (l.eventHandlers = o),
                                            (i.transaction = h(l));
                                        var u = "SIP/2.0/".concat(r.via_transport);
                                        return (u += " ".concat(e.configuration.via_host, ";branch=").concat(l.id)), l.request.setHeader("via", u), l.ua.newTransaction(h(l)), l;
                                    }
                                    return (
                                        o(n, [
                                            {
                                                key: "C",
                                                get: function () {
                                                    return S;
                                                },
                                            },
                                            {
                                                key: "stateChanged",
                                                value: function (e) {
                                                    (this.state = e), this.emit("stateChanged");
                                                },
                                            },
                                            {
                                                key: "send",
                                                value: function () {
                                                    var e = this;
                                                    this.stateChanged(S.STATUS_CALLING),
                                                        (this.B = setTimeout(function () {
                                                            e.timer_B();
                                                        }, m.TIMER_B)),
                                                        this.transport.send(this.request) || this.onTransportError();
                                                },
                                            },
                                            {
                                                key: "onTransportError",
                                                value: function () {
                                                    clearTimeout(this.B),
                                                        clearTimeout(this.M),
                                                        this.state !== S.STATUS_ACCEPTED && (g("transport error occurred, deleting transaction ".concat(this.id)), this.eventHandlers.onTransportError()),
                                                        this.stateChanged(S.STATUS_TERMINATED),
                                                        this.ua.destroyTransaction(this);
                                                },
                                            },
                                            {
                                                key: "timer_M",
                                                value: function () {
                                                    g("Timer M expired for transaction ".concat(this.id)), this.state === S.STATUS_ACCEPTED && (clearTimeout(this.B), this.stateChanged(S.STATUS_TERMINATED), this.ua.destroyTransaction(this));
                                                },
                                            },
                                            {
                                                key: "timer_B",
                                                value: function () {
                                                    g("Timer B expired for transaction ".concat(this.id)),
                                                        this.state === S.STATUS_CALLING && (this.stateChanged(S.STATUS_TERMINATED), this.ua.destroyTransaction(this), this.eventHandlers.onRequestTimeout());
                                                },
                                            },
                                            {
                                                key: "timer_D",
                                                value: function () {
                                                    g("Timer D expired for transaction ".concat(this.id)), clearTimeout(this.B), this.stateChanged(S.STATUS_TERMINATED), this.ua.destroyTransaction(this);
                                                },
                                            },
                                            {
                                                key: "sendACK",
                                                value: function (e) {
                                                    var t = new p.OutgoingRequest(_.ACK, this.request.ruri, this.ua, { route_set: this.request.getHeaders("route"), call_id: this.request.getHeader("call-id"), cseq: this.request.cseq });
                                                    t.setHeader("from", this.request.getHeader("from")), t.setHeader("via", this.request.getHeader("via")), t.setHeader("to", e.getHeader("to")), this.transport.send(t), this.timer_D();
                                                },
                                            },
                                            {
                                                key: "cancel",
                                                value: function (e) {
                                                    if (this.state === S.STATUS_PROCEEDING) {
                                                        var t = new p.OutgoingRequest(_.CANCEL, this.request.ruri, this.ua, { route_set: this.request.getHeaders("route"), call_id: this.request.getHeader("call-id"), cseq: this.request.cseq });
                                                        t.setHeader("from", this.request.getHeader("from")),
                                                            t.setHeader("via", this.request.getHeader("via")),
                                                            t.setHeader("to", this.request.getHeader("to")),
                                                            e && t.setHeader("reason", e),
                                                            this.transport.send(t);
                                                    }
                                                },
                                            },
                                            {
                                                key: "receiveResponse",
                                                value: function (e) {
                                                    var t = this,
                                                        n = e.status_code;
                                                    if (n >= 100 && n <= 199)
                                                        switch (this.state) {
                                                            case S.STATUS_CALLING:
                                                                this.stateChanged(S.STATUS_PROCEEDING), this.eventHandlers.onReceiveResponse(e);
                                                                break;
                                                            case S.STATUS_PROCEEDING:
                                                                this.eventHandlers.onReceiveResponse(e);
                                                        }
                                                    else if (n >= 200 && n <= 299)
                                                        switch (this.state) {
                                                            case S.STATUS_CALLING:
                                                            case S.STATUS_PROCEEDING:
                                                                this.stateChanged(S.STATUS_ACCEPTED),
                                                                    (this.M = setTimeout(function () {
                                                                        t.timer_M();
                                                                    }, m.TIMER_M)),
                                                                    this.eventHandlers.onReceiveResponse(e);
                                                                break;
                                                            case S.STATUS_ACCEPTED:
                                                                this.eventHandlers.onReceiveResponse(e);
                                                        }
                                                    else if (n >= 300 && n <= 699)
                                                        switch (this.state) {
                                                            case S.STATUS_CALLING:
                                                            case S.STATUS_PROCEEDING:
                                                                this.stateChanged(S.STATUS_COMPLETED), this.sendACK(e), this.eventHandlers.onReceiveResponse(e);
                                                                break;
                                                            case S.STATUS_COMPLETED:
                                                                this.sendACK(e);
                                                        }
                                                },
                                            },
                                        ]),
                                        n
                                    );
                                })(d),
                                b = (function (e) {
                                    l(n, e);
                                    var t = a(n);
                                    function n(e, r, i, o) {
                                        var l;
                                        s(this, n), ((l = t.call(this)).id = "z9hG4bK".concat(Math.floor(1e7 * Math.random()))), (l.transport = r), (l.request = i), (l.eventHandlers = o);
                                        var u = "SIP/2.0/".concat(r.via_transport);
                                        return (u += " ".concat(e.configuration.via_host, ";branch=").concat(l.id)), l.request.setHeader("via", u), l;
                                    }
                                    return (
                                        o(n, [
                                            {
                                                key: "C",
                                                get: function () {
                                                    return S;
                                                },
                                            },
                                            {
                                                key: "send",
                                                value: function () {
                                                    this.transport.send(this.request) || this.onTransportError();
                                                },
                                            },
                                            {
                                                key: "onTransportError",
                                                value: function () {
                                                    y("transport error occurred for transaction ".concat(this.id)), this.eventHandlers.onTransportError();
                                                },
                                            },
                                        ]),
                                        n
                                    );
                                })(d),
                                R = (function (e) {
                                    l(n, e);
                                    var t = a(n);
                                    function n(e, r, i) {
                                        var o;
                                        return (
                                            s(this, n),
                                            ((o = t.call(this)).type = S.NON_INVITE_SERVER),
                                            (o.id = i.via_branch),
                                            (o.ua = e),
                                            (o.transport = r),
                                            (o.request = i),
                                            (o.last_response = ""),
                                            (i.server_transaction = h(o)),
                                            (o.state = S.STATUS_TRYING),
                                            e.newTransaction(h(o)),
                                            o
                                        );
                                    }
                                    return (
                                        o(n, [
                                            {
                                                key: "C",
                                                get: function () {
                                                    return S;
                                                },
                                            },
                                            {
                                                key: "stateChanged",
                                                value: function (e) {
                                                    (this.state = e), this.emit("stateChanged");
                                                },
                                            },
                                            {
                                                key: "timer_J",
                                                value: function () {
                                                    T("Timer J expired for transaction ".concat(this.id)), this.stateChanged(S.STATUS_TERMINATED), this.ua.destroyTransaction(this);
                                                },
                                            },
                                            {
                                                key: "onTransportError",
                                                value: function () {
                                                    this.transportError || ((this.transportError = !0), T("transport error occurred, deleting transaction ".concat(this.id)), this.stateChanged(S.STATUS_TERMINATED), this.ua.destroyTransaction(this));
                                                },
                                            },
                                            {
                                                key: "receiveResponse",
                                                value: function (e, t, n, r) {
                                                    if (100 === e)
                                                        switch (this.state) {
                                                            case S.STATUS_TRYING:
                                                                this.stateChanged(S.STATUS_PROCEEDING), this.transport.send(t) || this.onTransportError();
                                                                break;
                                                            case S.STATUS_PROCEEDING:
                                                                (this.last_response = t), this.transport.send(t) ? n && n() : (this.onTransportError(), r && r());
                                                        }
                                                    else if (e >= 200 && e <= 699)
                                                        switch (this.state) {
                                                            case S.STATUS_TRYING:
                                                            case S.STATUS_PROCEEDING:
                                                                this.stateChanged(S.STATUS_COMPLETED), (this.last_response = t), this.timer_J(), this.transport.send(t) ? n && n() : (this.onTransportError(), r && r());
                                                        }
                                                },
                                            },
                                        ]),
                                        n
                                    );
                                })(d),
                                w = (function (e) {
                                    l(n, e);
                                    var t = a(n);
                                    function n(e, r, i) {
                                        var o;
                                        return (
                                            s(this, n),
                                            ((o = t.call(this)).type = S.INVITE_SERVER),
                                            (o.id = i.via_branch),
                                            (o.ua = e),
                                            (o.transport = r),
                                            (o.request = i),
                                            (o.last_response = ""),
                                            (i.server_transaction = h(o)),
                                            (o.state = S.STATUS_PROCEEDING),
                                            e.newTransaction(h(o)),
                                            (o.resendProvisionalTimer = null),
                                            i.reply(100),
                                            o
                                        );
                                    }
                                    return (
                                        o(n, [
                                            {
                                                key: "C",
                                                get: function () {
                                                    return S;
                                                },
                                            },
                                            {
                                                key: "stateChanged",
                                                value: function (e) {
                                                    (this.state = e), this.emit("stateChanged");
                                                },
                                            },
                                            {
                                                key: "timer_H",
                                                value: function () {
                                                    C("Timer H expired for transaction ".concat(this.id)),
                                                        this.state === S.STATUS_COMPLETED && C("ACK not received, dialog will be terminated"),
                                                        this.stateChanged(S.STATUS_TERMINATED),
                                                        this.ua.destroyTransaction(this);
                                                },
                                            },
                                            {
                                                key: "timer_I",
                                                value: function () {
                                                    this.stateChanged(S.STATUS_TERMINATED), this.ua.destroyTransaction(this);
                                                },
                                            },
                                            {
                                                key: "timer_L",
                                                value: function () {
                                                    C("Timer L expired for transaction ".concat(this.id)), this.state === S.STATUS_ACCEPTED && (this.stateChanged(S.STATUS_TERMINATED), this.ua.destroyTransaction(this));
                                                },
                                            },
                                            {
                                                key: "onTransportError",
                                                value: function () {
                                                    this.transportError ||
                                                        ((this.transportError = !0),
                                                        C("transport error occurred, deleting transaction ".concat(this.id)),
                                                        null !== this.resendProvisionalTimer && (clearInterval(this.resendProvisionalTimer), (this.resendProvisionalTimer = null)),
                                                        clearTimeout(this.L),
                                                        clearTimeout(this.H),
                                                        this.stateChanged(S.STATUS_TERMINATED),
                                                        this.ua.destroyTransaction(this));
                                                },
                                            },
                                            {
                                                key: "resend_provisional",
                                                value: function () {
                                                    this.transport.send(this.last_response) || this.onTransportError();
                                                },
                                            },
                                            {
                                                key: "receiveResponse",
                                                value: function (e, t, n, r) {
                                                    var s = this;
                                                    if (e >= 100 && e <= 199)
                                                        switch (this.state) {
                                                            case S.STATUS_PROCEEDING:
                                                                this.transport.send(t) || this.onTransportError(), (this.last_response = t);
                                                        }
                                                    if (e > 100 && e <= 199 && this.state === S.STATUS_PROCEEDING)
                                                        null === this.resendProvisionalTimer &&
                                                            (this.resendProvisionalTimer = setInterval(function () {
                                                                s.resend_provisional();
                                                            }, m.PROVISIONAL_RESPONSE_INTERVAL));
                                                    else if (e >= 200 && e <= 299)
                                                        switch (this.state) {
                                                            case S.STATUS_PROCEEDING:
                                                                this.stateChanged(S.STATUS_ACCEPTED),
                                                                    (this.last_response = t),
                                                                    (this.L = setTimeout(function () {
                                                                        s.timer_L();
                                                                    }, m.TIMER_L)),
                                                                    null !== this.resendProvisionalTimer && (clearInterval(this.resendProvisionalTimer), (this.resendProvisionalTimer = null));
                                                            case S.STATUS_ACCEPTED:
                                                                this.transport.send(t) ? n && n() : (this.onTransportError(), r && r());
                                                        }
                                                    else if (e >= 300 && e <= 699)
                                                        switch (this.state) {
                                                            case S.STATUS_PROCEEDING:
                                                                null !== this.resendProvisionalTimer && (clearInterval(this.resendProvisionalTimer), (this.resendProvisionalTimer = null)),
                                                                    this.transport.send(t)
                                                                        ? (this.stateChanged(S.STATUS_COMPLETED),
                                                                          (this.H = setTimeout(function () {
                                                                              s.timer_H();
                                                                          }, m.TIMER_H)),
                                                                          n && n())
                                                                        : (this.onTransportError(), r && r());
                                                        }
                                                },
                                            },
                                        ]),
                                        n
                                    );
                                })(d);
                            t.exports = {
                                C: S,
                                NonInviteClientTransaction: E,
                                InviteClientTransaction: A,
                                AckClientTransaction: b,
                                NonInviteServerTransaction: R,
                                InviteServerTransaction: w,
                                checkTransaction: function (e, t) {
                                    var n,
                                        r = e._transactions;
                                    switch (t.method) {
                                        case _.INVITE:
                                            if ((n = r.ist[t.via_branch])) {
                                                switch (n.state) {
                                                    case S.STATUS_PROCEEDING:
                                                        n.transport.send(n.last_response);
                                                }
                                                return !0;
                                            }
                                            break;
                                        case _.ACK:
                                            if (!(n = r.ist[t.via_branch])) return !1;
                                            if (n.state === S.STATUS_ACCEPTED) return !1;
                                            if (n.state === S.STATUS_COMPLETED) return (n.state = S.STATUS_CONFIRMED), n.timer_I(), !0;
                                            break;
                                        case _.CANCEL:
                                            return (n = r.ist[t.via_branch]) ? (t.reply_sl(200), n.state !== S.STATUS_PROCEEDING) : (t.reply_sl(481), !0);
                                        default:
                                            if ((n = r.nist[t.via_branch])) {
                                                switch (n.state) {
                                                    case S.STATUS_TRYING:
                                                        break;
                                                    case S.STATUS_PROCEEDING:
                                                    case S.STATUS_COMPLETED:
                                                        n.transport.send(n.last_response);
                                                }
                                                return !0;
                                            }
                                    }
                                },
                            };
                        },
                        { "./Constants": 2, "./SIPMessage": 19, "./Timers": 21, debug: 29, events: 31 },
                    ],
                    23: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                var n;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (
                                        Array.isArray(e) ||
                                        (n = (function (e, t) {
                                            if (!e) return;
                                            if ("string" == typeof e) return s(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                        })(e)) ||
                                        (t && e && "number" == typeof e.length)
                                    ) {
                                        n && (e = n);
                                        var r = 0,
                                            i = function () {};
                                        return {
                                            s: i,
                                            n: function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: i,
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var o,
                                    l = !0,
                                    u = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return (l = e.done), e;
                                    },
                                    e: function (e) {
                                        (u = !0), (o = e);
                                    },
                                    f: function () {
                                        try {
                                            l || null == n.return || n.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    },
                                };
                            }
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                                return r;
                            }
                            function i(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }
                            function o(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var l = e("./Socket"),
                                u = e("debug")("JsSIP:Transport"),
                                a = e("debug")("JsSIP:ERROR:Transport"),
                                c = e("./Constants");
                            a.log = console.warn.bind(console);
                            var h = {
                                STATUS_CONNECTED: 0,
                                STATUS_CONNECTING: 1,
                                STATUS_DISCONNECTED: 2,
                                SOCKET_STATUS_READY: 0,
                                SOCKET_STATUS_ERROR: 1,
                                recovery_options: { min_interval: c.CONNECTION_RECOVERY_MIN_INTERVAL, max_interval: c.CONNECTION_RECOVERY_MAX_INTERVAL },
                            };
                            t.exports = (function () {
                                function e(t, n) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.recovery_options;
                                    i(this, e),
                                        u("new()"),
                                        (this._ua = t),
                                        (this.status = h.STATUS_DISCONNECTED),
                                        (this.socket = null),
                                        (this.sockets = []),
                                        (this.recovery_options = r),
                                        (this.recover_attempts = 0),
                                        (this.recovery_timer = null),
                                        (this.close_requested = !1);
                                    try {
                                        this.textDecoder = new TextDecoder("utf8");
                                    } catch (e) {
                                        a("cannot use TextDecoder: ".concat(e));
                                    }
                                    if (void 0 === n) throw new TypeError("Invalid argument. undefined 'sockets' argument");
                                    n instanceof Array || (n = [n]),
                                        n.forEach(function (e) {
                                            if (!l.isSocket(e.socket)) throw new TypeError("Invalid argument. invalid 'JsSIP.Socket' instance");
                                            if (e.weight && !Number(e.weight)) throw new TypeError("Invalid argument. 'weight' attribute is not a number");
                                            this.sockets.push({ socket: e.socket, weight: e.weight || 0, status: h.SOCKET_STATUS_READY });
                                        }, this),
                                        this._getSocket();
                                }
                                var t, n, s;
                                return (
                                    (t = e),
                                    (n = [
                                        {
                                            key: "via_transport",
                                            get: function () {
                                                return this.socket.via_transport;
                                            },
                                        },
                                        {
                                            key: "url",
                                            get: function () {
                                                return this.socket.url;
                                            },
                                        },
                                        {
                                            key: "sip_uri",
                                            get: function () {
                                                return this.socket.sip_uri;
                                            },
                                        },
                                        {
                                            key: "connect",
                                            value: function () {
                                                u("connect()"),
                                                    this.isConnected()
                                                        ? u("Transport is already connected")
                                                        : this.isConnecting()
                                                        ? u("Transport is connecting")
                                                        : ((this.close_requested = !1),
                                                          (this.status = h.STATUS_CONNECTING),
                                                          this.onconnecting({ socket: this.socket, attempts: this.recover_attempts }),
                                                          this.close_requested ||
                                                              ((this.socket.onconnect = this._onConnect.bind(this)),
                                                              (this.socket.ondisconnect = this._onDisconnect.bind(this)),
                                                              (this.socket.ondata = this._onData.bind(this)),
                                                              this.socket.connect()));
                                            },
                                        },
                                        {
                                            key: "disconnect",
                                            value: function () {
                                                u("close()"),
                                                    (this.close_requested = !0),
                                                    (this.recover_attempts = 0),
                                                    (this.status = h.STATUS_DISCONNECTED),
                                                    null !== this.recovery_timer && (clearTimeout(this.recovery_timer), (this.recovery_timer = null)),
                                                    (this.socket.onconnect = function () {}),
                                                    (this.socket.ondisconnect = function () {}),
                                                    (this.socket.ondata = function () {}),
                                                    this.socket.disconnect(),
                                                    this.ondisconnect({ socket: this.socket, error: !1 });
                                            },
                                        },
                                        {
                                            key: "send",
                                            value: function (e) {
                                                if ((u("send()"), !this.isConnected())) return a("unable to send message, transport is not connected"), !1;
                                                var t = e.toString();
                                                return u("sending message:\n\n".concat(t, "\n")), this.socket.send(t);
                                            },
                                        },
                                        {
                                            key: "isConnected",
                                            value: function () {
                                                return this.status === h.STATUS_CONNECTED;
                                            },
                                        },
                                        {
                                            key: "isConnecting",
                                            value: function () {
                                                return this.status === h.STATUS_CONNECTING;
                                            },
                                        },
                                        {
                                            key: "_get_number_of_sbc",
                                            value: function () {
                                                return this.sockets.length;
                                            },
                                        },
                                        {
                                            key: "_switch_sbc",
                                            value: function () {
                                                var e = this.ondisconnect;
                                                (this.ondisconnect = function () {}),
                                                    this.disconnect(),
                                                    (this.ondisconnect = e),
                                                    (this.close_requested = !1),
                                                    this.sockets.forEach(function (e) {
                                                        this.socket === e.socket && (e.status = h.SOCKET_STATUS_ERROR);
                                                    }, this),
                                                    this._getSocket(),
                                                    this.connect();
                                            },
                                        },
                                        {
                                            key: "_register_redirect",
                                            value: function (e) {
                                                var t,
                                                    n = null,
                                                    s = r(this.sockets);
                                                try {
                                                    for (s.s(); !(t = s.n()).done; ) {
                                                        var i = t.value;
                                                        if (i.socket.url === e) {
                                                            n = i.socket;
                                                            break;
                                                        }
                                                    }
                                                } catch (e) {
                                                    s.e(e);
                                                } finally {
                                                    s.f();
                                                }
                                                if (null === n && !e.includes(":", 6)) {
                                                    e += ":443";
                                                    var o,
                                                        l = r(this.sockets);
                                                    try {
                                                        for (l.s(); !(o = l.n()).done; ) {
                                                            var u = o.value;
                                                            if (u.socket.url === e) {
                                                                n = u.socket;
                                                                break;
                                                            }
                                                        }
                                                    } catch (e) {
                                                        l.e(e);
                                                    } finally {
                                                        l.f();
                                                    }
                                                }
                                                if (null === n) return !1;
                                                var a = this.ondisconnect;
                                                return (this.ondisconnect = function () {}), this.disconnect(), (this.ondisconnect = a), (this.socket = n), this.connect(), !0;
                                            },
                                        },
                                        {
                                            key: "_reconnect",
                                            value: function () {
                                                var e = this;
                                                this.recover_attempts += 1;
                                                var t = Math.floor(Math.random() * Math.pow(2, this.recover_attempts) + 1);
                                                t < this.recovery_options.min_interval ? (t = this.recovery_options.min_interval) : t > this.recovery_options.max_interval && (t = this.recovery_options.max_interval),
                                                    u("reconnection attempt: ".concat(this.recover_attempts, ". next connection attempt in ").concat(t, " seconds")),
                                                    (this.recovery_timer = setTimeout(function () {
                                                        e.close_requested || e.isConnected() || e.isConnecting() || (e._getSocket(), e.connect());
                                                    }, 1e3 * t));
                                            },
                                        },
                                        {
                                            key: "_getSocket",
                                            value: function () {
                                                var e = [];
                                                if (
                                                    (this.sockets.forEach(function (t) {
                                                        t.status !== h.SOCKET_STATUS_ERROR && (0 === e.length ? e.push(t) : t.weight > e[0].weight ? (e = [t]) : t.weight === e[0].weight && e.push(t));
                                                    }),
                                                    0 === e.length)
                                                )
                                                    return (
                                                        this.sockets.forEach(function (e) {
                                                            e.status = h.SOCKET_STATUS_READY;
                                                        }),
                                                        void this._getSocket()
                                                    );
                                                var t = Math.floor(Math.random() * e.length);
                                                this.socket = e[t].socket;
                                            },
                                        },
                                        {
                                            key: "_onConnect",
                                            value: function () {
                                                (this.recover_attempts = 0),
                                                    (this._ha_connect_time = void 0),
                                                    (this.status = h.STATUS_CONNECTED),
                                                    null !== this.recovery_timer && (clearTimeout(this.recovery_timer), (this.recovery_timer = null)),
                                                    this.onconnect({ socket: this });
                                            },
                                        },
                                        {
                                            key: "_onDisconnect",
                                            value: function (e, t, n) {
                                                var r = this.status;
                                                if (((this.status = h.STATUS_DISCONNECTED), this.ondisconnect({ socket: this.socket, error: e, code: t, reason: n }), !this.close_requested)) {
                                                    if (void 0 !== this._ua.modes.sbc_ha_pairs_mode) {
                                                        if (r === h.STATUS_CONNECTED)
                                                            return (
                                                                u("AC: SBC HA pairs mode: Reconnect to the same SBC " + this._ua.modes.sbc_ha_pairs_mode + " seconds left"),
                                                                (this._ha_connect_time = new Date().getTime() + 1e3 * this._ua.modes.sbc_ha_pairs_mode),
                                                                void this._connect2()
                                                            );
                                                        if (void 0 !== this._ha_connect_time) {
                                                            var s = this._ha_connect_time - new Date().getTime();
                                                            if (s > 0) return u("AC: SBC HA pairs mode: Repeat " + s / 1e3 + " seconds left"), void this._connect2();
                                                            u("AC: SBC HA pairs mode: Failed"), (this._ha_connect_time = void 0);
                                                        }
                                                    }
                                                    this.sockets.forEach(function (e) {
                                                        this.socket === e.socket && (e.status = h.SOCKET_STATUS_ERROR);
                                                    }, this),
                                                        this._reconnect();
                                                }
                                            },
                                        },
                                        {
                                            key: "_connect2",
                                            value: function () {
                                                var e = this,
                                                    t = 0;
                                                if (this._ha_last_connect) {
                                                    var n = new Date().getTime() - this._ha_last_connect;
                                                    t = n > 500 ? 0 : 500 - n;
                                                }
                                                this.recovery_timer = setTimeout(function () {
                                                    e.close_requested || e.isConnected() || e.isConnecting() || ((e._ha_last_connect = new Date().getTime()), e.connect());
                                                }, t);
                                            },
                                        },
                                        {
                                            key: "_onData",
                                            value: function (e) {
                                                if ("\r\n" !== e) {
                                                    if ("string" != typeof e) {
                                                        try {
                                                            e = this.textDecoder ? this.textDecoder.decode(e) : String.fromCharCode.apply(null, new Uint8Array(e));
                                                        } catch (e) {
                                                            return void u("received binary message failed to be converted into string, message discarded");
                                                        }
                                                        u("received binary message:\n\n".concat(e, "\n"));
                                                    } else u("received text message:\n\n".concat(e, "\n"));
                                                    this.ondata({ transport: this, message: e });
                                                } else u("received message with CRLF Keep Alive response");
                                            },
                                        },
                                    ]) && o(t.prototype, n),
                                    s && o(t, s),
                                    e
                                );
                            })();
                        },
                        { "./Constants": 2, "./Socket": 20, debug: 29 },
                    ],
                    24: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            function i(e, t) {
                                return (i =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    })(e, t);
                            }
                            function o(e) {
                                var t = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var n,
                                        r = a(e);
                                    if (t) {
                                        var s = a(this).constructor;
                                        n = Reflect.construct(r, arguments, s);
                                    } else n = r.apply(this, arguments);
                                    return l(this, n);
                                };
                            }
                            function l(e, t) {
                                return !t || ("object" !== r(t) && "function" != typeof t) ? u(e) : t;
                            }
                            function u(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            }
                            function a(e) {
                                return (a = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      })(e);
                            }
                            var c = e("events").EventEmitter,
                                h = e("./Constants"),
                                f = e("./Registrator"),
                                d = e("./RTCSession"),
                                _ = e("./Message"),
                                p = e("./Transactions"),
                                m = e("./Transport"),
                                v = e("./Utils"),
                                g = e("./Exceptions"),
                                y = e("./URI"),
                                T = e("./Parser"),
                                C = e("./SIPMessage"),
                                S = e("./RequestSender"),
                                E = e("./sanityCheck"),
                                A = e("./Config"),
                                b = e("debug")("JsSIP:UA"),
                                R = e("debug")("JsSIP:ERROR:UA");
                            R.log = console.warn.bind(console);
                            var w = { STATUS_INIT: 0, STATUS_READY: 1, STATUS_USER_CLOSED: 2, STATUS_NOT_READY: 3, CONFIGURATION_ERROR: 1, NETWORK_ERROR: 2 };
                            function I(e) {
                                this.emit("connecting", e);
                            }
                            function O(e) {
                                this._status !== w.STATUS_USER_CLOSED && ((this._status = w.STATUS_READY), (this._error = null), this.emit("connected", e), this._dynConfiguration.register && this._registrator.register());
                            }
                            function k(e) {
                                for (var t = 0, n = ["nict", "ict", "nist", "ist"]; t < n.length; t++) {
                                    var r = n[t];
                                    for (var s in this._transactions[r]) Object.prototype.hasOwnProperty.call(this._transactions[r], s) && this._transactions[r][s].onTransportError();
                                }
                                this.emit("disconnected", e), this._registrator.onTransportClosed(), this._status !== w.STATUS_USER_CLOSED && ((this._status = w.STATUS_NOT_READY), (this._error = w.NETWORK_ERROR));
                            }
                            function N(e) {
                                var t = e.transport,
                                    n = e.message;
                                if ((n = T.parseMessage(n, this)) && !(this._status === w.STATUS_USER_CLOSED && n instanceof C.IncomingRequest) && E(n, this, t))
                                    if (n instanceof C.IncomingRequest) (n.transport = t), this.receiveRequest(n);
                                    else if (n instanceof C.IncomingResponse) {
                                        var r;
                                        switch (n.method) {
                                            case h.INVITE:
                                                (r = this._transactions.ict[n.via_branch]) && r.receiveResponse(n);
                                                break;
                                            case h.ACK:
                                                break;
                                            default:
                                                (r = this._transactions.nict[n.via_branch]) && r.receiveResponse(n);
                                        }
                                    }
                            }
                            t.exports = (function (e) {
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
                                })(a, e);
                                var t,
                                    n,
                                    r,
                                    l = o(a);
                                function a(e) {
                                    var t;
                                    if (
                                        ((function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, a),
                                        ((t = l.call(this)).modes = {}),
                                        (t._cache = { credentials: {} }),
                                        (t._configuration = Object.assign({}, A.settings)),
                                        (t._dynConfiguration = {}),
                                        (t._dialogs = {}),
                                        (t._applicants = {}),
                                        (t._sessions = {}),
                                        (t._transport = null),
                                        (t._contact = null),
                                        (t._status = w.STATUS_INIT),
                                        (t._error = null),
                                        (t._transactions = { nist: {}, nict: {}, ist: {}, ict: {} }),
                                        (t._data = {}),
                                        (t._closeTimer = null),
                                        void 0 === e)
                                    )
                                        throw new TypeError("Not enough arguments");
                                    try {
                                        t._loadConfig(e);
                                    } catch (e) {
                                        throw ((t._status = w.STATUS_NOT_READY), (t._error = w.CONFIGURATION_ERROR), e);
                                    }
                                    return (t._registrator = new f(u(t))), t;
                                }
                                return (
                                    (t = a),
                                    (r = [
                                        {
                                            key: "C",
                                            get: function () {
                                                return w;
                                            },
                                        },
                                    ]),
                                    (n = [
                                        {
                                            key: "C",
                                            get: function () {
                                                return w;
                                            },
                                        },
                                        {
                                            key: "status",
                                            get: function () {
                                                return this._status;
                                            },
                                        },
                                        {
                                            key: "contact",
                                            get: function () {
                                                return this._contact;
                                            },
                                        },
                                        {
                                            key: "configuration",
                                            get: function () {
                                                return this._configuration;
                                            },
                                        },
                                        {
                                            key: "transport",
                                            get: function () {
                                                return this._transport;
                                            },
                                        },
                                        {
                                            key: "start",
                                            value: function () {
                                                b("start()"),
                                                    this._status === w.STATUS_INIT
                                                        ? this._transport.connect()
                                                        : this._status === w.STATUS_USER_CLOSED
                                                        ? (b("restarting UA"),
                                                          null !== this._closeTimer && (clearTimeout(this._closeTimer), (this._closeTimer = null), this._transport.disconnect()),
                                                          (this._status = w.STATUS_INIT),
                                                          this._transport.connect())
                                                        : this._status === w.STATUS_READY
                                                        ? b("UA is in READY status, not restarted")
                                                        : b("ERROR: connection is down, Auto-Recovery system is trying to reconnect"),
                                                    (this._dynConfiguration.register = this._configuration.register);
                                            },
                                        },
                                        {
                                            key: "register",
                                            value: function () {
                                                b("register()"), (this._dynConfiguration.register = !0), this._registrator.register();
                                            },
                                        },
                                        {
                                            key: "unregister",
                                            value: function (e) {
                                                b("unregister()"), (this._dynConfiguration.register = !1), this._registrator.unregister(e);
                                            },
                                        },
                                        {
                                            key: "registrator",
                                            value: function () {
                                                return this._registrator;
                                            },
                                        },
                                        {
                                            key: "isRegistered",
                                            value: function () {
                                                return this._registrator.registered;
                                            },
                                        },
                                        {
                                            key: "isConnected",
                                            value: function () {
                                                return this._transport.isConnected();
                                            },
                                        },
                                        {
                                            key: "call",
                                            value: function (e, t) {
                                                b("call()");
                                                var n = new d(this);
                                                return n.connect(e, t), n;
                                            },
                                        },
                                        {
                                            key: "sendMessage",
                                            value: function (e, t, n) {
                                                b("sendMessage()");
                                                var r = new _(this);
                                                return r.send(e, t, n), r;
                                            },
                                        },
                                        {
                                            key: "sendRequest",
                                            value: function (e, t, n, r, s, i, o) {
                                                b("sendRequest()");
                                                var l = new C.OutgoingRequest(e, this.normalizeTarget(t), this, n, r, s);
                                                new S(this, l, i, o).send();
                                            },
                                        },
                                        {
                                            key: "terminateSessions",
                                            value: function (e) {
                                                for (var t in (b("terminateSessions()"), this._sessions)) this._sessions[t].isEnded() || this._sessions[t].terminate(e);
                                            },
                                        },
                                        {
                                            key: "stop",
                                            value: function () {
                                                var e = this;
                                                if ((b("stop()"), (this._dynConfiguration = {}), this._status !== w.STATUS_USER_CLOSED)) {
                                                    this._registrator.close();
                                                    var t = Object.keys(this._sessions).length;
                                                    for (var n in this._sessions)
                                                        if (Object.prototype.hasOwnProperty.call(this._sessions, n)) {
                                                            b("closing session ".concat(n));
                                                            try {
                                                                this._sessions[n].terminate();
                                                            } catch (e) {}
                                                        }
                                                    for (var r in this._applicants)
                                                        if (Object.prototype.hasOwnProperty.call(this._applicants, r))
                                                            try {
                                                                this._applicants[r].close();
                                                            } catch (e) {}
                                                    (this._status = w.STATUS_USER_CLOSED),
                                                        0 === Object.keys(this._transactions.nict).length + Object.keys(this._transactions.nist).length + Object.keys(this._transactions.ict).length + Object.keys(this._transactions.ist).length &&
                                                        0 === t
                                                            ? this._transport.disconnect()
                                                            : (this._closeTimer = setTimeout(function () {
                                                                  (e._closeTimer = null), e._transport.disconnect();
                                                              }, 2e3));
                                                } else b("UA already closed");
                                            },
                                        },
                                        {
                                            key: "normalizeTarget",
                                            value: function (e) {
                                                return v.normalizeTarget(e, this._configuration.hostport_params);
                                            },
                                        },
                                        {
                                            key: "get",
                                            value: function (e) {
                                                switch (e) {
                                                    case "authorization_user":
                                                        return this._configuration.authorization_user;
                                                    case "realm":
                                                        return this._configuration.realm;
                                                    case "ha1":
                                                        return this._configuration.ha1;
                                                    case "authorization_jwt":
                                                        return this._configuration.authorization_jwt;
                                                    default:
                                                        return void R('get() | cannot get "%s" parameter in runtime', e);
                                                }
                                            },
                                        },
                                        {
                                            key: "set",
                                            value: function (e, t) {
                                                switch (e) {
                                                    case "authorization_user":
                                                        this._configuration.authorization_user = String(t);
                                                        break;
                                                    case "password":
                                                        this._configuration.password = String(t);
                                                        break;
                                                    case "realm":
                                                        this._configuration.realm = String(t);
                                                        break;
                                                    case "ha1":
                                                        (this._configuration.ha1 = String(t)), (this._configuration.password = null);
                                                        break;
                                                    case "authorization_jwt":
                                                        this._configuration.authorization_jwt = String(t);
                                                        break;
                                                    case "display_name":
                                                        this._configuration.display_name = t;
                                                        break;
                                                    default:
                                                        return R('set() | cannot set "%s" parameter in runtime', e), !1;
                                                }
                                                return !0;
                                            },
                                        },
                                        {
                                            key: "registerRedirect",
                                            value: function (e) {
                                                return this._transport._register_redirect(e);
                                            },
                                        },
                                        {
                                            key: "switchSBC",
                                            value: function () {
                                                this._transport._get_number_of_sbc() < 2 ? b("switchSBC: ignored, no other SBC set") : (this._registrator._unregistered(null, h.causes.CONNECTION_ERROR), this._transport._switch_sbc());
                                            },
                                        },
                                        {
                                            key: "getNumberOfSBC",
                                            value: function () {
                                                return this._transport._get_number_of_sbc();
                                            },
                                        },
                                        {
                                            key: "newTransaction",
                                            value: function (e) {
                                                (this._transactions[e.type][e.id] = e), this.emit("newTransaction", { transaction: e });
                                            },
                                        },
                                        {
                                            key: "destroyTransaction",
                                            value: function (e) {
                                                delete this._transactions[e.type][e.id], this.emit("transactionDestroyed", { transaction: e });
                                            },
                                        },
                                        {
                                            key: "newDialog",
                                            value: function (e) {
                                                this._dialogs[e.id] = e;
                                            },
                                        },
                                        {
                                            key: "destroyDialog",
                                            value: function (e) {
                                                delete this._dialogs[e.id];
                                            },
                                        },
                                        {
                                            key: "newMessage",
                                            value: function (e, t) {
                                                (this._applicants[e] = e), this.emit("newMessage", t);
                                            },
                                        },
                                        {
                                            key: "destroyMessage",
                                            value: function (e) {
                                                delete this._applicants[e];
                                            },
                                        },
                                        {
                                            key: "newRTCSession",
                                            value: function (e, t) {
                                                (this._sessions[e.id] = e), this.emit("newRTCSession", t);
                                            },
                                        },
                                        {
                                            key: "destroyRTCSession",
                                            value: function (e) {
                                                delete this._sessions[e.id];
                                            },
                                        },
                                        {
                                            key: "registered",
                                            value: function (e) {
                                                this.emit("registered", e);
                                            },
                                        },
                                        {
                                            key: "unregistered",
                                            value: function (e) {
                                                this.emit("unregistered", e);
                                            },
                                        },
                                        {
                                            key: "registrationFailed",
                                            value: function (e) {
                                                this.emit("registrationFailed", e);
                                            },
                                        },
                                        {
                                            key: "receiveRequest",
                                            value: function (e) {
                                                var t = e.method;
                                                if (e.ruri.user !== this._configuration.uri.user && e.ruri.user !== this._contact.uri.user) return b("Request-URI does not point to us"), void (e.method !== h.ACK && e.reply_sl(404));
                                                if (e.ruri.scheme !== h.SIPS) {
                                                    if (!p.checkTransaction(this, e)) {
                                                        if ((t === h.INVITE ? new p.InviteServerTransaction(this, this._transport, e) : t !== h.ACK && t !== h.CANCEL && new p.NonInviteServerTransaction(this, this._transport, e), t === h.OPTIONS))
                                                            e.reply(200);
                                                        else if (t === h.MESSAGE) {
                                                            if (0 === this.listeners("newMessage").length) return void e.reply(405);
                                                            new _(this).init_incoming(e);
                                                        } else if (t === h.SUBSCRIBE) {
                                                            if (0 === this.listeners("newSubscribe").length) return void e.reply(405);
                                                        } else if (t === h.INVITE && !e.to_tag && 0 === this.listeners("newRTCSession").length) return void e.reply(405);
                                                        var n, r;
                                                        if (e.to_tag)
                                                            (n = this._findDialog(e.call_id, e.from_tag, e.to_tag))
                                                                ? n.receiveRequest(e)
                                                                : t === h.NOTIFY
                                                                ? (r = this._findSession(e))
                                                                    ? r.receiveRequest(e)
                                                                    : (b("received NOTIFY request for a non existent subscription"), e.reply(481, "Subscription does not exist"))
                                                                : t !== h.ACK && e.reply(481);
                                                        else
                                                            switch (t) {
                                                                case h.INVITE:
                                                                    if (window.RTCPeerConnection)
                                                                        if (e.hasHeader("replaces")) {
                                                                            var s = e.replaces;
                                                                            (n = this._findDialog(s.call_id, s.from_tag, s.to_tag)) ? ((r = n.owner).isEnded() ? e.reply(603) : r.receiveRequest(e)) : e.reply(481);
                                                                        } else (r = new d(this)).init_incoming(e);
                                                                    else R("INVITE received but WebRTC is not supported"), e.reply(488);
                                                                    break;
                                                                case h.BYE:
                                                                    e.reply(481);
                                                                    break;
                                                                case h.CANCEL:
                                                                    (r = this._findSession(e)) ? r.receiveRequest(e) : b("received CANCEL request for a non existent session");
                                                                    break;
                                                                case h.ACK:
                                                                    break;
                                                                case h.NOTIFY:
                                                                    this.emit("sipEvent", { event: e.event, request: e }), e.reply(200);
                                                                    break;
                                                                case h.SUBSCRIBE:
                                                                    this.emit("newSubscribe", { event: e.event, request: e });
                                                                    break;
                                                                default:
                                                                    e.reply(405);
                                                            }
                                                    }
                                                } else e.reply_sl(416);
                                            },
                                        },
                                        {
                                            key: "_findSession",
                                            value: function (e) {
                                                var t = e.call_id,
                                                    n = e.from_tag,
                                                    r = e.to_tag,
                                                    s = t + n,
                                                    i = this._sessions[s],
                                                    o = t + r,
                                                    l = this._sessions[o];
                                                return i || l || null;
                                            },
                                        },
                                        {
                                            key: "_findDialog",
                                            value: function (e, t, n) {
                                                var r = e + t + n,
                                                    s = this._dialogs[r];
                                                return s || ((r = e + n + t), (s = this._dialogs[r]) || null);
                                            },
                                        },
                                        {
                                            key: "_loadConfig",
                                            value: function (e) {
                                                try {
                                                    A.load(this._configuration, e);
                                                } catch (e) {
                                                    throw e;
                                                }
                                                0 === this._configuration.display_name && (this._configuration.display_name = "0"),
                                                    this._configuration.instance_id || (this._configuration.instance_id = v.newUUID()),
                                                    (this._configuration.jssip_id = v.createRandomToken(5));
                                                var t = this._configuration.uri.clone();
                                                (t.user = null), (this._configuration.hostport_params = t.toString().replace(/^sip:/i, ""));
                                                try {
                                                    (this._transport = new m(this, this._configuration.sockets, {
                                                        max_interval: this._configuration.connection_recovery_max_interval,
                                                        min_interval: this._configuration.connection_recovery_min_interval,
                                                    })),
                                                        (this._transport.onconnecting = I.bind(this)),
                                                        (this._transport.onconnect = O.bind(this)),
                                                        (this._transport.ondisconnect = k.bind(this)),
                                                        (this._transport.ondata = N.bind(this));
                                                } catch (e) {
                                                    throw (R(e), new g.ConfigurationError("sockets", this._configuration.sockets));
                                                }
                                                if ((delete this._configuration.sockets, this._configuration.authorization_user || (this._configuration.authorization_user = this._configuration.uri.user), !this._configuration.registrar_server)) {
                                                    var n = this._configuration.uri.clone();
                                                    (n.user = null), n.clearParams(), n.clearHeaders(), (this._configuration.registrar_server = n);
                                                }
                                                (this._configuration.no_answer_timeout *= 1e3),
                                                    this._configuration.contact_uri
                                                        ? (this._configuration.via_host = this._configuration.contact_uri.host)
                                                        : (this._configuration.contact_uri = new y("sip", v.createRandomToken(8), this._configuration.via_host, null, { transport: "ws" })),
                                                    (this._contact = {
                                                        pub_gruu: null,
                                                        temp_gruu: null,
                                                        uri: this._configuration.contact_uri,
                                                        toString: function () {
                                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                                t = e.anonymous || null,
                                                                n = e.outbound || null,
                                                                r = "<";
                                                            return (
                                                                (r += t ? this.temp_gruu || "sip:anonymous@anonymous.invalid;transport=ws" : this.pub_gruu || this.uri.toString()),
                                                                !n || (t ? this.temp_gruu : this.pub_gruu) || (r += ";ob"),
                                                                (r += ">")
                                                            );
                                                        },
                                                    });
                                                var r = ["authorization_user", "password", "realm", "ha1", "authorization_jwt", "display_name", "register"];
                                                for (var s in this._configuration)
                                                    Object.prototype.hasOwnProperty.call(this._configuration, s) &&
                                                        (-1 !== r.indexOf(s) ? Object.defineProperty(this._configuration, s, { writable: !0, configurable: !1 }) : Object.defineProperty(this._configuration, s, { writable: !1, configurable: !1 }));
                                                for (var i in (b("configuration parameters after validation:"), this._configuration))
                                                    if (Object.prototype.hasOwnProperty.call(A.settings, i))
                                                        switch (i) {
                                                            case "uri":
                                                            case "registrar_server":
                                                                b("- ".concat(i, ": ").concat(this._configuration[i]));
                                                                break;
                                                            case "password":
                                                            case "ha1":
                                                            case "authorization_jwt":
                                                                b("- ".concat(i, ": NOT SHOWN"));
                                                                break;
                                                            default:
                                                                b("- ".concat(i, ": ").concat(JSON.stringify(this._configuration[i])));
                                                        }
                                            },
                                        },
                                    ]) && s(t.prototype, n),
                                    r && s(t, r),
                                    a
                                );
                            })(c);
                        },
                        {
                            "./Config": 1,
                            "./Constants": 2,
                            "./Exceptions": 6,
                            "./Message": 9,
                            "./Parser": 11,
                            "./RTCSession": 12,
                            "./Registrator": 17,
                            "./RequestSender": 18,
                            "./SIPMessage": 19,
                            "./Transactions": 22,
                            "./Transport": 23,
                            "./URI": 25,
                            "./Utils": 26,
                            "./sanityCheck": 28,
                            debug: 29,
                            events: 31,
                        },
                    ],
                    25: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                var n;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (
                                        Array.isArray(e) ||
                                        (n = (function (e, t) {
                                            if (!e) return;
                                            if ("string" == typeof e) return s(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                        })(e)) ||
                                        (t && e && "number" == typeof e.length)
                                    ) {
                                        n && (e = n);
                                        var r = 0,
                                            i = function () {};
                                        return {
                                            s: i,
                                            n: function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: i,
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var o,
                                    l = !0,
                                    u = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return (l = e.done), e;
                                    },
                                    e: function (e) {
                                        (u = !0), (o = e);
                                    },
                                    f: function () {
                                        try {
                                            l || null == n.return || n.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    },
                                };
                            }
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                                return r;
                            }
                            function i(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }
                            function o(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var l = e("./Constants"),
                                u = e("./Utils"),
                                a = e("./Grammar");
                            t.exports = (function () {
                                function e(t, n, r, s) {
                                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                                        u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                                    if ((i(this, e), !r)) throw new TypeError('missing or invalid "host" parameter');
                                    for (var a in ((this._parameters = {}), (this._headers = {}), (this._scheme = t || l.SIP), (this._user = n), (this._host = r), (this._port = s), o))
                                        Object.prototype.hasOwnProperty.call(o, a) && this.setParam(a, o[a]);
                                    for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && this.setHeader(c, u[c]);
                                }
                                var t, n, s;
                                return (
                                    (t = e),
                                    (s = [
                                        {
                                            key: "parse",
                                            value: function (e) {
                                                return -1 !== (e = a.parse(e, "SIP_URI")) ? e : void 0;
                                            },
                                        },
                                    ]),
                                    (n = [
                                        {
                                            key: "scheme",
                                            get: function () {
                                                return this._scheme;
                                            },
                                            set: function (e) {
                                                this._scheme = e.toLowerCase();
                                            },
                                        },
                                        {
                                            key: "user",
                                            get: function () {
                                                return this._user;
                                            },
                                            set: function (e) {
                                                this._user = e;
                                            },
                                        },
                                        {
                                            key: "host",
                                            get: function () {
                                                return this._host;
                                            },
                                            set: function (e) {
                                                this._host = e.toLowerCase();
                                            },
                                        },
                                        {
                                            key: "port",
                                            get: function () {
                                                return this._port;
                                            },
                                            set: function (e) {
                                                this._port = 0 === e ? e : parseInt(e, 10) || null;
                                            },
                                        },
                                        {
                                            key: "setParam",
                                            value: function (e, t) {
                                                e && (this._parameters[e.toLowerCase()] = null == t ? null : t.toString());
                                            },
                                        },
                                        {
                                            key: "getParam",
                                            value: function (e) {
                                                if (e) return this._parameters[e.toLowerCase()];
                                            },
                                        },
                                        {
                                            key: "hasParam",
                                            value: function (e) {
                                                if (e) return !!this._parameters.hasOwnProperty(e.toLowerCase());
                                            },
                                        },
                                        {
                                            key: "deleteParam",
                                            value: function (e) {
                                                if (((e = e.toLowerCase()), this._parameters.hasOwnProperty(e))) {
                                                    var t = this._parameters[e];
                                                    return delete this._parameters[e], t;
                                                }
                                            },
                                        },
                                        {
                                            key: "clearParams",
                                            value: function () {
                                                this._parameters = {};
                                            },
                                        },
                                        {
                                            key: "setHeader",
                                            value: function (e, t) {
                                                this._headers[u.headerize(e)] = Array.isArray(t) ? t : [t];
                                            },
                                        },
                                        {
                                            key: "getHeader",
                                            value: function (e) {
                                                if (e) return this._headers[u.headerize(e)];
                                            },
                                        },
                                        {
                                            key: "hasHeader",
                                            value: function (e) {
                                                if (e) return !!this._headers.hasOwnProperty(u.headerize(e));
                                            },
                                        },
                                        {
                                            key: "deleteHeader",
                                            value: function (e) {
                                                if (((e = u.headerize(e)), this._headers.hasOwnProperty(e))) {
                                                    var t = this._headers[e];
                                                    return delete this._headers[e], t;
                                                }
                                            },
                                        },
                                        {
                                            key: "clearHeaders",
                                            value: function () {
                                                this._headers = {};
                                            },
                                        },
                                        {
                                            key: "clone",
                                            value: function () {
                                                return new e(this._scheme, this._user, this._host, this._port, JSON.parse(JSON.stringify(this._parameters)), JSON.parse(JSON.stringify(this._headers)));
                                            },
                                        },
                                        {
                                            key: "toString",
                                            value: function () {
                                                var e = [],
                                                    t = "".concat(this._scheme, ":");
                                                for (var n in (this._user && (t += "".concat(u.escapeUser(this._user), "@")), (t += this._host), (this._port || 0 === this._port) && (t += ":".concat(this._port)), this._parameters))
                                                    Object.prototype.hasOwnProperty.call(this._parameters, n) && ((t += ";".concat(n)), null !== this._parameters[n] && (t += "=".concat(this._parameters[n])));
                                                for (var s in this._headers)
                                                    if (Object.prototype.hasOwnProperty.call(this._headers, s)) {
                                                        var i,
                                                            o = r(this._headers[s]);
                                                        try {
                                                            for (o.s(); !(i = o.n()).done; ) {
                                                                var l = i.value;
                                                                e.push("".concat(s, "=").concat(l));
                                                            }
                                                        } catch (e) {
                                                            o.e(e);
                                                        } finally {
                                                            o.f();
                                                        }
                                                    }
                                                return e.length > 0 && (t += "?".concat(e.join("&"))), t;
                                            },
                                        },
                                        {
                                            key: "toAor",
                                            value: function (e) {
                                                var t = "".concat(this._scheme, ":");
                                                return this._user && (t += "".concat(u.escapeUser(this._user), "@")), (t += this._host), e && (this._port || 0 === this._port) && (t += ":".concat(this._port)), t;
                                            },
                                        },
                                    ]) && o(t.prototype, n),
                                    s && o(t, s),
                                    e
                                );
                            })();
                        },
                        { "./Constants": 2, "./Grammar": 7, "./Utils": 26 },
                    ],
                    26: [
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                return (r =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          })(e);
                            }
                            function s(e, t) {
                                var n;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (
                                        Array.isArray(e) ||
                                        (n = (function (e, t) {
                                            if (!e) return;
                                            if ("string" == typeof e) return i(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
                                        })(e)) ||
                                        (t && e && "number" == typeof e.length)
                                    ) {
                                        n && (e = n);
                                        var r = 0,
                                            s = function () {};
                                        return {
                                            s: s,
                                            n: function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: s,
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var o,
                                    l = !0,
                                    u = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return (l = e.done), e;
                                    },
                                    e: function (e) {
                                        (u = !0), (o = e);
                                    },
                                    f: function () {
                                        try {
                                            l || null == n.return || n.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    },
                                };
                            }
                            function i(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                                return r;
                            }
                            var o = e("./Constants"),
                                l = e("./URI"),
                                u = e("./Grammar");
                            n.str_utf8_length = function (e) {
                                return unescape(encodeURIComponent(e)).length;
                            };
                            var a = (n.isFunction = function (e) {
                                return void 0 !== e && "[object Function]" === Object.prototype.toString.call(e);
                            });
                            (n.isString = function (e) {
                                return void 0 !== e && "[object String]" === Object.prototype.toString.call(e);
                            }),
                                (n.isDecimal = function (e) {
                                    return !isNaN(e) && parseFloat(e) === parseInt(e, 10);
                                }),
                                (n.isEmpty = function (e) {
                                    return null === e || "" === e || void 0 === e || (Array.isArray(e) && 0 === e.length) || ("number" == typeof e && isNaN(e));
                                }),
                                (n.hasMethods = function (e) {
                                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                                    for (var s = 0, i = n; s < i.length; s++) {
                                        var o = i[s];
                                        if (a(e[o])) return !1;
                                    }
                                    return !0;
                                });
                            var c = (n.createRandomToken = function (e) {
                                var t,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                                    r = "";
                                for (t = 0; t < e; t++) r += ((Math.random() * n) | 0).toString(n);
                                return r;
                            });
                            (n.newTag = function () {
                                return c(10);
                            }),
                                (n.newUUID = function () {
                                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                                        var t = (16 * Math.random()) | 0;
                                        return ("x" === e ? t : (3 & t) | 8).toString(16);
                                    });
                                }),
                                (n.hostType = function (e) {
                                    if (e) return -1 !== (e = u.parse(e, "host")) ? e.host_type : void 0;
                                });
                            var h = (n.escapeUser = function (e) {
                                return encodeURIComponent(decodeURIComponent(e)).replace(/%3A/gi, ":").replace(/%2B/gi, "+").replace(/%3F/gi, "?").replace(/%2F/gi, "/");
                            });
                            (n.normalizeTarget = function (e, t) {
                                if (e) {
                                    if (e instanceof l) return e;
                                    if ("string" == typeof e) {
                                        var n,
                                            r,
                                            s,
                                            i = e.split("@");
                                        switch (i.length) {
                                            case 1:
                                                if (!t) return;
                                                (n = e), (r = t);
                                                break;
                                            case 2:
                                                (n = i[0]), (r = i[1]);
                                                break;
                                            default:
                                                (n = i.slice(0, i.length - 1).join("@")), (r = i[i.length - 1]);
                                        }
                                        return (n = n.replace(/^(sips?|tel):/i, "")), /^[-.()]*\+?[0-9\-.()]+$/.test(n) && (n = n.replace(/[-.()]/g, "")), (e = "".concat(o.SIP, ":").concat(h(n), "@").concat(r)), (s = l.parse(e)) ? s : void 0;
                                    }
                                } else;
                            }),
                                (n.headerize = function (e) {
                                    var t,
                                        n = { "Call-Id": "Call-ID", Cseq: "CSeq", "Www-Authenticate": "WWW-Authenticate" },
                                        r = e.toLowerCase().replace(/_/g, "-").split("-"),
                                        s = "",
                                        i = r.length;
                                    for (t = 0; t < i; t++) 0 !== t && (s += "-"), (s += r[t].charAt(0).toUpperCase() + r[t].substring(1));
                                    return n[s] && (s = n[s]), s;
                                }),
                                (n.sipErrorCause = function (e) {
                                    for (var t in o.SIP_ERROR_CAUSES) if (-1 !== o.SIP_ERROR_CAUSES[t].indexOf(e)) return o.causes[t];
                                    return o.causes.SIP_FAILURE_CODE;
                                }),
                                (n.getRandomTestNetIP = function () {
                                    return "192.0.2.".concat(((e = 1), (t = 254), Math.floor(Math.random() * (t - e + 1) + e)));
                                    var e, t;
                                }),
                                (n.calculateMD5 = function (e) {
                                    function t(e, t) {
                                        return (e << t) | (e >>> (32 - t));
                                    }
                                    function n(e, t) {
                                        var n = 2147483648 & e,
                                            r = 2147483648 & t,
                                            s = 1073741824 & e,
                                            i = 1073741824 & t,
                                            o = (1073741823 & e) + (1073741823 & t);
                                        return s & i ? 2147483648 ^ o ^ n ^ r : s | i ? (1073741824 & o ? 3221225472 ^ o ^ n ^ r : 1073741824 ^ o ^ n ^ r) : o ^ n ^ r;
                                    }
                                    function r(e, r, s, i, o, l, u) {
                                        return (
                                            (e = n(
                                                e,
                                                n(
                                                    n(
                                                        (function (e, t, n) {
                                                            return (e & t) | (~e & n);
                                                        })(r, s, i),
                                                        o
                                                    ),
                                                    u
                                                )
                                            )),
                                            n(t(e, l), r)
                                        );
                                    }
                                    function s(e, r, s, i, o, l, u) {
                                        return (
                                            (e = n(
                                                e,
                                                n(
                                                    n(
                                                        (function (e, t, n) {
                                                            return (e & n) | (t & ~n);
                                                        })(r, s, i),
                                                        o
                                                    ),
                                                    u
                                                )
                                            )),
                                            n(t(e, l), r)
                                        );
                                    }
                                    function i(e, r, s, i, o, l, u) {
                                        return (
                                            (e = n(
                                                e,
                                                n(
                                                    n(
                                                        (function (e, t, n) {
                                                            return e ^ t ^ n;
                                                        })(r, s, i),
                                                        o
                                                    ),
                                                    u
                                                )
                                            )),
                                            n(t(e, l), r)
                                        );
                                    }
                                    function o(e, r, s, i, o, l, u) {
                                        return (
                                            (e = n(
                                                e,
                                                n(
                                                    n(
                                                        (function (e, t, n) {
                                                            return t ^ (e | ~n);
                                                        })(r, s, i),
                                                        o
                                                    ),
                                                    u
                                                )
                                            )),
                                            n(t(e, l), r)
                                        );
                                    }
                                    function l(e) {
                                        var t,
                                            n = "",
                                            r = "";
                                        for (t = 0; t <= 3; t++) n += (r = "0".concat(((e >>> (8 * t)) & 255).toString(16))).substr(r.length - 2, 2);
                                        return n;
                                    }
                                    var u, a, c, h, f, d, _, p, m, v;
                                    for (
                                        u = (function (e) {
                                            for (var t, n = e.length, r = n + 8, s = 16 * ((r - (r % 64)) / 64 + 1), i = new Array(s - 1), o = 0, l = 0; l < n; ) (o = (l % 4) * 8), (i[(t = (l - (l % 4)) / 4)] = i[t] | (e.charCodeAt(l) << o)), l++;
                                            return (o = (l % 4) * 8), (i[(t = (l - (l % 4)) / 4)] = i[t] | (128 << o)), (i[s - 2] = n << 3), (i[s - 1] = n >>> 29), i;
                                        })(
                                            (e = (function (e) {
                                                e = e.replace(/\r\n/g, "\n");
                                                for (var t = "", n = 0; n < e.length; n++) {
                                                    var r = e.charCodeAt(n);
                                                    r < 128
                                                        ? (t += String.fromCharCode(r))
                                                        : r > 127 && r < 2048
                                                        ? ((t += String.fromCharCode((r >> 6) | 192)), (t += String.fromCharCode((63 & r) | 128)))
                                                        : ((t += String.fromCharCode((r >> 12) | 224)), (t += String.fromCharCode(((r >> 6) & 63) | 128)), (t += String.fromCharCode((63 & r) | 128)));
                                                }
                                                return t;
                                            })(e))
                                        ),
                                            _ = 1732584193,
                                            p = 4023233417,
                                            m = 2562383102,
                                            v = 271733878,
                                            a = 0;
                                        a < u.length;
                                        a += 16
                                    )
                                        (c = _),
                                            (h = p),
                                            (f = m),
                                            (d = v),
                                            (_ = r(_, p, m, v, u[a + 0], 7, 3614090360)),
                                            (v = r(v, _, p, m, u[a + 1], 12, 3905402710)),
                                            (m = r(m, v, _, p, u[a + 2], 17, 606105819)),
                                            (p = r(p, m, v, _, u[a + 3], 22, 3250441966)),
                                            (_ = r(_, p, m, v, u[a + 4], 7, 4118548399)),
                                            (v = r(v, _, p, m, u[a + 5], 12, 1200080426)),
                                            (m = r(m, v, _, p, u[a + 6], 17, 2821735955)),
                                            (p = r(p, m, v, _, u[a + 7], 22, 4249261313)),
                                            (_ = r(_, p, m, v, u[a + 8], 7, 1770035416)),
                                            (v = r(v, _, p, m, u[a + 9], 12, 2336552879)),
                                            (m = r(m, v, _, p, u[a + 10], 17, 4294925233)),
                                            (p = r(p, m, v, _, u[a + 11], 22, 2304563134)),
                                            (_ = r(_, p, m, v, u[a + 12], 7, 1804603682)),
                                            (v = r(v, _, p, m, u[a + 13], 12, 4254626195)),
                                            (m = r(m, v, _, p, u[a + 14], 17, 2792965006)),
                                            (_ = s(_, (p = r(p, m, v, _, u[a + 15], 22, 1236535329)), m, v, u[a + 1], 5, 4129170786)),
                                            (v = s(v, _, p, m, u[a + 6], 9, 3225465664)),
                                            (m = s(m, v, _, p, u[a + 11], 14, 643717713)),
                                            (p = s(p, m, v, _, u[a + 0], 20, 3921069994)),
                                            (_ = s(_, p, m, v, u[a + 5], 5, 3593408605)),
                                            (v = s(v, _, p, m, u[a + 10], 9, 38016083)),
                                            (m = s(m, v, _, p, u[a + 15], 14, 3634488961)),
                                            (p = s(p, m, v, _, u[a + 4], 20, 3889429448)),
                                            (_ = s(_, p, m, v, u[a + 9], 5, 568446438)),
                                            (v = s(v, _, p, m, u[a + 14], 9, 3275163606)),
                                            (m = s(m, v, _, p, u[a + 3], 14, 4107603335)),
                                            (p = s(p, m, v, _, u[a + 8], 20, 1163531501)),
                                            (_ = s(_, p, m, v, u[a + 13], 5, 2850285829)),
                                            (v = s(v, _, p, m, u[a + 2], 9, 4243563512)),
                                            (m = s(m, v, _, p, u[a + 7], 14, 1735328473)),
                                            (_ = i(_, (p = s(p, m, v, _, u[a + 12], 20, 2368359562)), m, v, u[a + 5], 4, 4294588738)),
                                            (v = i(v, _, p, m, u[a + 8], 11, 2272392833)),
                                            (m = i(m, v, _, p, u[a + 11], 16, 1839030562)),
                                            (p = i(p, m, v, _, u[a + 14], 23, 4259657740)),
                                            (_ = i(_, p, m, v, u[a + 1], 4, 2763975236)),
                                            (v = i(v, _, p, m, u[a + 4], 11, 1272893353)),
                                            (m = i(m, v, _, p, u[a + 7], 16, 4139469664)),
                                            (p = i(p, m, v, _, u[a + 10], 23, 3200236656)),
                                            (_ = i(_, p, m, v, u[a + 13], 4, 681279174)),
                                            (v = i(v, _, p, m, u[a + 0], 11, 3936430074)),
                                            (m = i(m, v, _, p, u[a + 3], 16, 3572445317)),
                                            (p = i(p, m, v, _, u[a + 6], 23, 76029189)),
                                            (_ = i(_, p, m, v, u[a + 9], 4, 3654602809)),
                                            (v = i(v, _, p, m, u[a + 12], 11, 3873151461)),
                                            (m = i(m, v, _, p, u[a + 15], 16, 530742520)),
                                            (_ = o(_, (p = i(p, m, v, _, u[a + 2], 23, 3299628645)), m, v, u[a + 0], 6, 4096336452)),
                                            (v = o(v, _, p, m, u[a + 7], 10, 1126891415)),
                                            (m = o(m, v, _, p, u[a + 14], 15, 2878612391)),
                                            (p = o(p, m, v, _, u[a + 5], 21, 4237533241)),
                                            (_ = o(_, p, m, v, u[a + 12], 6, 1700485571)),
                                            (v = o(v, _, p, m, u[a + 3], 10, 2399980690)),
                                            (m = o(m, v, _, p, u[a + 10], 15, 4293915773)),
                                            (p = o(p, m, v, _, u[a + 1], 21, 2240044497)),
                                            (_ = o(_, p, m, v, u[a + 8], 6, 1873313359)),
                                            (v = o(v, _, p, m, u[a + 15], 10, 4264355552)),
                                            (m = o(m, v, _, p, u[a + 6], 15, 2734768916)),
                                            (p = o(p, m, v, _, u[a + 13], 21, 1309151649)),
                                            (_ = o(_, p, m, v, u[a + 4], 6, 4149444226)),
                                            (v = o(v, _, p, m, u[a + 11], 10, 3174756917)),
                                            (m = o(m, v, _, p, u[a + 2], 15, 718787259)),
                                            (p = o(p, m, v, _, u[a + 9], 21, 3951481745)),
                                            (_ = n(_, c)),
                                            (p = n(p, h)),
                                            (m = n(m, f)),
                                            (v = n(v, d));
                                    return (l(_) + l(p) + l(m) + l(v)).toLowerCase();
                                }),
                                (n.closeMediaStream = function (e) {
                                    if (e)
                                        try {
                                            if (e.getTracks) {
                                                var t,
                                                    n = s(e.getTracks());
                                                try {
                                                    for (n.s(); !(t = n.n()).done; ) {
                                                        t.value.stop();
                                                    }
                                                } catch (e) {
                                                    n.e(e);
                                                } finally {
                                                    n.f();
                                                }
                                            } else {
                                                var i,
                                                    o = s(e.getAudioTracks());
                                                try {
                                                    for (o.s(); !(i = o.n()).done; ) {
                                                        i.value.stop();
                                                    }
                                                } catch (e) {
                                                    o.e(e);
                                                } finally {
                                                    o.f();
                                                }
                                                var l,
                                                    u = s(e.getVideoTracks());
                                                try {
                                                    for (u.s(); !(l = u.n()).done; ) {
                                                        l.value.stop();
                                                    }
                                                } catch (e) {
                                                    u.e(e);
                                                } finally {
                                                    u.f();
                                                }
                                            }
                                        } catch (t) {
                                            ("function" != typeof e.stop && "object" !== r(e.stop)) || e.stop();
                                        }
                                }),
                                (n.cloneArray = function (e) {
                                    return (e && e.slice()) || [];
                                }),
                                (n.cloneObject = function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return (e && Object.assign({}, e)) || t;
                                });
                        },
                        { "./Constants": 2, "./Grammar": 7, "./URI": 25 },
                    ],
                    27: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            var s = e("./Grammar"),
                                i = e("debug")("JsSIP:WebSocketInterface"),
                                o = e("debug")("JsSIP:ERROR:WebSocketInterface");
                            (o.log = console.warn.bind(console)),
                                (t.exports = (function () {
                                    function e(t) {
                                        !(function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, e),
                                            i('new() [url:"%s"]', t),
                                            (this._url = t),
                                            (this._sip_uri = null),
                                            (this._via_transport = null),
                                            (this._ws = null);
                                        var n = s.parse(t, "absoluteURI");
                                        if (-1 === n) throw (o("invalid WebSocket URI: ".concat(t)), new TypeError("Invalid argument: ".concat(t)));
                                        if ("wss" !== n.scheme && "ws" !== n.scheme) throw (o("invalid WebSocket URI scheme: ".concat(n.scheme)), new TypeError("Invalid argument: ".concat(t)));
                                        (this._sip_uri = "sip:".concat(n.host).concat(n.port ? ":".concat(n.port) : "", ";transport=ws")), (this._via_transport = n.scheme.toUpperCase());
                                    }
                                    var t, n, l;
                                    return (
                                        (t = e),
                                        (n = [
                                            {
                                                key: "via_transport",
                                                get: function () {
                                                    return this._via_transport;
                                                },
                                                set: function (e) {
                                                    this._via_transport = e.toUpperCase();
                                                },
                                            },
                                            {
                                                key: "sip_uri",
                                                get: function () {
                                                    return this._sip_uri;
                                                },
                                            },
                                            {
                                                key: "url",
                                                get: function () {
                                                    return this._url;
                                                },
                                            },
                                            {
                                                key: "connect",
                                                value: function () {
                                                    if ((i("connect()"), this.isConnected())) i("WebSocket ".concat(this._url, " is already connected"));
                                                    else if (this.isConnecting()) i("WebSocket ".concat(this._url, " is connecting"));
                                                    else {
                                                        this._ws && this.disconnect(), i("connecting to WebSocket ".concat(this._url));
                                                        try {
                                                            (this._ws = new WebSocket(this._url, "sip")),
                                                                (this._ws.binaryType = "arraybuffer"),
                                                                (this._ws.onopen = this._onOpen.bind(this)),
                                                                (this._ws.onclose = this._onClose.bind(this)),
                                                                (this._ws.onmessage = this._onMessage.bind(this)),
                                                                (this._ws.onerror = this._onError.bind(this));
                                                        } catch (e) {
                                                            this._onError(e);
                                                        }
                                                    }
                                                },
                                            },
                                            {
                                                key: "disconnect",
                                                value: function () {
                                                    i("disconnect()"),
                                                        this._ws &&
                                                            ((this._ws.onopen = function () {}), (this._ws.onclose = function () {}), (this._ws.onmessage = function () {}), (this._ws.onerror = function () {}), this._ws.close(), (this._ws = null));
                                                },
                                            },
                                            {
                                                key: "send",
                                                value: function (e) {
                                                    return i("send()"), this.isConnected() ? (this._ws.send(e), !0) : (o("unable to send message, WebSocket is not open"), !1);
                                                },
                                            },
                                            {
                                                key: "isConnected",
                                                value: function () {
                                                    return this._ws && this._ws.readyState === this._ws.OPEN;
                                                },
                                            },
                                            {
                                                key: "isConnecting",
                                                value: function () {
                                                    return this._ws && this._ws.readyState === this._ws.CONNECTING;
                                                },
                                            },
                                            {
                                                key: "_onOpen",
                                                value: function () {
                                                    i("WebSocket ".concat(this._url, " connected")), this.onconnect();
                                                },
                                            },
                                            {
                                                key: "_onClose",
                                                value: function (e) {
                                                    var t = e.wasClean,
                                                        n = e.code,
                                                        r = e.reason;
                                                    i("WebSocket ".concat(this._url, " closed")), !1 === t && i("WebSocket abrupt disconnection"), this.ondisconnect(!t, n, r);
                                                },
                                            },
                                            {
                                                key: "_onMessage",
                                                value: function (e) {
                                                    var t = e.data;
                                                    i("received WebSocket message"), this.ondata(t);
                                                },
                                            },
                                            {
                                                key: "_onError",
                                                value: function (e) {
                                                    o("WebSocket ".concat(this._url, " error: "), e);
                                                },
                                            },
                                        ]) && r(t.prototype, n),
                                        l && r(t, l),
                                        e
                                    );
                                })());
                        },
                        { "./Grammar": 7, debug: 29 },
                    ],
                    28: [
                        function (e, t, n) {
                            "use strict";
                            function r(e, t) {
                                var n;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (
                                        Array.isArray(e) ||
                                        (n = (function (e, t) {
                                            if (!e) return;
                                            if ("string" == typeof e) return s(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                        })(e)) ||
                                        (t && e && "number" == typeof e.length)
                                    ) {
                                        n && (e = n);
                                        var r = 0,
                                            i = function () {};
                                        return {
                                            s: i,
                                            n: function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: i,
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var o,
                                    l = !0,
                                    u = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return (l = e.done), e;
                                    },
                                    e: function (e) {
                                        (u = !0), (o = e);
                                    },
                                    f: function () {
                                        try {
                                            l || null == n.return || n.return();
                                        } finally {
                                            if (u) throw o;
                                        }
                                    },
                                };
                            }
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                                return r;
                            }
                            var i,
                                o,
                                l,
                                u = e("./Constants"),
                                a = e("./SIPMessage"),
                                c = e("./Utils"),
                                h = e("debug")("JsSIP:sanityCheck"),
                                f = [
                                    function () {
                                        for (var e = 0, t = ["from", "to", "call_id", "cseq", "via"]; e < t.length; e++) {
                                            var n = t[e];
                                            if (!i.hasHeader(n)) return h("missing mandatory header field : ".concat(n, ", dropping the response")), !1;
                                        }
                                    },
                                ],
                                d = [
                                    function () {
                                        if ("sip" !== i.s("to").uri.scheme) return p(416), !1;
                                    },
                                    function () {
                                        if (!i.to_tag && i.call_id.substr(0, 5) === o.configuration.jssip_id) return p(482), !1;
                                    },
                                    function () {
                                        var e = c.str_utf8_length(i.body),
                                            t = i.getHeader("content-length");
                                        if (e < t) return p(400), !1;
                                    },
                                    function () {
                                        var e,
                                            t = i.from_tag,
                                            n = i.call_id,
                                            r = i.cseq;
                                        if (i.to_tag) return;
                                        if (i.method === u.INVITE) {
                                            if (o._transactions.ist[i.via_branch]) return !1;
                                            for (var s in o._transactions.ist)
                                                if (Object.prototype.hasOwnProperty.call(o._transactions.ist, s) && (e = o._transactions.ist[s]).request.from_tag === t && e.request.call_id === n && e.request.cseq === r) return p(482), !1;
                                        } else {
                                            if (o._transactions.nist[i.via_branch]) return !1;
                                            for (var l in o._transactions.nist)
                                                if (Object.prototype.hasOwnProperty.call(o._transactions.nist, l) && (e = o._transactions.nist[l]).request.from_tag === t && e.request.call_id === n && e.request.cseq === r) return p(482), !1;
                                        }
                                    },
                                ],
                                _ = [
                                    function () {
                                        if (i.getHeaders("via").length > 1) return h("more than one Via header field present in the response, dropping the response"), !1;
                                    },
                                    function () {
                                        var e = c.str_utf8_length(i.body),
                                            t = i.getHeader("content-length");
                                        if (e < t) return h("message body length is lower than the value in Content-Length header field, dropping the response"), !1;
                                    },
                                ];
                            function p(e) {
                                var t,
                                    n,
                                    s = i.getHeaders("via"),
                                    o = "SIP/2.0 ".concat(e, " ").concat(u.REASON_PHRASE[e], "\r\n"),
                                    a = r(s);
                                try {
                                    for (a.s(); !(n = a.n()).done; ) {
                                        var h = n.value;
                                        o += "Via: ".concat(h, "\r\n");
                                    }
                                } catch (e) {
                                    a.e(e);
                                } finally {
                                    a.f();
                                }
                                (t = i.getHeader("To")),
                                    i.to_tag || (t += ";tag=".concat(c.newTag())),
                                    (o += "To: ".concat(t, "\r\n")),
                                    (o += "From: ".concat(i.getHeader("From"), "\r\n")),
                                    (o += "Call-ID: ".concat(i.call_id, "\r\n")),
                                    (o += "CSeq: ".concat(i.cseq, " ").concat(i.method, "\r\n")),
                                    (o += "\r\n"),
                                    l.send(o);
                            }
                            t.exports = function (e, t, n) {
                                (i = e), (o = t), (l = n);
                                var s,
                                    u = r(f);
                                try {
                                    for (u.s(); !(s = u.n()).done; ) {
                                        if (!1 === (0, s.value)()) return !1;
                                    }
                                } catch (e) {
                                    u.e(e);
                                } finally {
                                    u.f();
                                }
                                if (i instanceof a.IncomingRequest) {
                                    var c,
                                        h = r(d);
                                    try {
                                        for (h.s(); !(c = h.n()).done; ) {
                                            if (!1 === (0, c.value)()) return !1;
                                        }
                                    } catch (e) {
                                        h.e(e);
                                    } finally {
                                        h.f();
                                    }
                                } else if (i instanceof a.IncomingResponse) {
                                    var p,
                                        m = r(_);
                                    try {
                                        for (m.s(); !(p = m.n()).done; ) {
                                            if (!1 === (0, p.value)()) return !1;
                                        }
                                    } catch (e) {
                                        m.e(e);
                                    } finally {
                                        m.f();
                                    }
                                }
                                return !0;
                            };
                        },
                        { "./Constants": 2, "./SIPMessage": 19, "./Utils": 26, debug: 29 },
                    ],
                    29: [
                        function (e, t, n) {
                            (function (r) {
                                (function () {
                                    (n.formatArgs = function (e) {
                                        if (((e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff)), !this.useColors)) return;
                                        const n = "color: " + this.color;
                                        e.splice(1, 0, n, "color: inherit");
                                        let r = 0,
                                            s = 0;
                                        e[0].replace(/%[a-zA-Z%]/g, (e) => {
                                            "%%" !== e && (r++, "%c" === e && (s = r));
                                        }),
                                            e.splice(s, 0, n);
                                    }),
                                        (n.save = function (e) {
                                            try {
                                                e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug");
                                            } catch (e) {}
                                        }),
                                        (n.load = function () {
                                            let e;
                                            try {
                                                e = n.storage.getItem("debug");
                                            } catch (e) {}
                                            !e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
                                            return e;
                                        }),
                                        (n.useColors = function () {
                                            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                                            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                                            return (
                                                ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
                                                ("undefined" != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                                                ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
                                                ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                                            );
                                        }),
                                        (n.storage = (function () {
                                            try {
                                                return localStorage;
                                            } catch (e) {}
                                        })()),
                                        (n.destroy = (() => {
                                            let e = !1;
                                            return () => {
                                                e || ((e = !0), console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                                            };
                                        })()),
                                        (n.colors = [
                                            "#0000CC",
                                            "#0000FF",
                                            "#0033CC",
                                            "#0033FF",
                                            "#0066CC",
                                            "#0066FF",
                                            "#0099CC",
                                            "#0099FF",
                                            "#00CC00",
                                            "#00CC33",
                                            "#00CC66",
                                            "#00CC99",
                                            "#00CCCC",
                                            "#00CCFF",
                                            "#3300CC",
                                            "#3300FF",
                                            "#3333CC",
                                            "#3333FF",
                                            "#3366CC",
                                            "#3366FF",
                                            "#3399CC",
                                            "#3399FF",
                                            "#33CC00",
                                            "#33CC33",
                                            "#33CC66",
                                            "#33CC99",
                                            "#33CCCC",
                                            "#33CCFF",
                                            "#6600CC",
                                            "#6600FF",
                                            "#6633CC",
                                            "#6633FF",
                                            "#66CC00",
                                            "#66CC33",
                                            "#9900CC",
                                            "#9900FF",
                                            "#9933CC",
                                            "#9933FF",
                                            "#99CC00",
                                            "#99CC33",
                                            "#CC0000",
                                            "#CC0033",
                                            "#CC0066",
                                            "#CC0099",
                                            "#CC00CC",
                                            "#CC00FF",
                                            "#CC3300",
                                            "#CC3333",
                                            "#CC3366",
                                            "#CC3399",
                                            "#CC33CC",
                                            "#CC33FF",
                                            "#CC6600",
                                            "#CC6633",
                                            "#CC9900",
                                            "#CC9933",
                                            "#CCCC00",
                                            "#CCCC33",
                                            "#FF0000",
                                            "#FF0033",
                                            "#FF0066",
                                            "#FF0099",
                                            "#FF00CC",
                                            "#FF00FF",
                                            "#FF3300",
                                            "#FF3333",
                                            "#FF3366",
                                            "#FF3399",
                                            "#FF33CC",
                                            "#FF33FF",
                                            "#FF6600",
                                            "#FF6633",
                                            "#FF9900",
                                            "#FF9933",
                                            "#FFCC00",
                                            "#FFCC33",
                                        ]),
                                        (n.log = console.debug || console.log || (() => {})),
                                        (t.exports = e("./common")(n));
                                    const { formatters: s } = t.exports;
                                    s.j = function (e) {
                                        try {
                                            return JSON.stringify(e);
                                        } catch (e) {
                                            return "[UnexpectedJSONParseError]: " + e.message;
                                        }
                                    };
                                }.call(this));
                            }.call(this, e("_process")));
                        },
                        { "./common": 30, _process: 33 },
                    ],
                    30: [
                        function (e, t, n) {
                            t.exports = function (t) {
                                function n(e) {
                                    let t,
                                        s = null;
                                    function i(...e) {
                                        if (!i.enabled) return;
                                        const r = i,
                                            s = Number(new Date()),
                                            o = s - (t || s);
                                        (r.diff = o), (r.prev = t), (r.curr = s), (t = s), (e[0] = n.coerce(e[0])), "string" != typeof e[0] && e.unshift("%O");
                                        let l = 0;
                                        (e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, s) => {
                                            if ("%%" === t) return "%";
                                            l++;
                                            const i = n.formatters[s];
                                            if ("function" == typeof i) {
                                                const n = e[l];
                                                (t = i.call(r, n)), e.splice(l, 1), l--;
                                            }
                                            return t;
                                        })),
                                            n.formatArgs.call(r, e);
                                        (r.log || n.log).apply(r, e);
                                    }
                                    return (
                                        (i.namespace = e),
                                        (i.useColors = n.useColors()),
                                        (i.color = n.selectColor(e)),
                                        (i.extend = r),
                                        (i.destroy = n.destroy),
                                        Object.defineProperty(i, "enabled", {
                                            enumerable: !0,
                                            configurable: !1,
                                            get: () => (null === s ? n.enabled(e) : s),
                                            set: (e) => {
                                                s = e;
                                            },
                                        }),
                                        "function" == typeof n.init && n.init(i),
                                        i
                                    );
                                }
                                function r(e, t) {
                                    const r = n(this.namespace + (void 0 === t ? ":" : t) + e);
                                    return (r.log = this.log), r;
                                }
                                function s(e) {
                                    return e
                                        .toString()
                                        .substring(2, e.toString().length - 2)
                                        .replace(/\.\*\?$/, "*");
                                }
                                return (
                                    (n.debug = n),
                                    (n.default = n),
                                    (n.coerce = function (e) {
                                        if (e instanceof Error) return e.stack || e.message;
                                        return e;
                                    }),
                                    (n.disable = function () {
                                        const e = [...n.names.map(s), ...n.skips.map(s).map((e) => "-" + e)].join(",");
                                        return n.enable(""), e;
                                    }),
                                    (n.enable = function (e) {
                                        let t;
                                        n.save(e), (n.names = []), (n.skips = []);
                                        const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                                            s = r.length;
                                        for (t = 0; t < s; t++) r[t] && ("-" === (e = r[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
                                    }),
                                    (n.enabled = function (e) {
                                        if ("*" === e[e.length - 1]) return !0;
                                        let t, r;
                                        for (t = 0, r = n.skips.length; t < r; t++) if (n.skips[t].test(e)) return !1;
                                        for (t = 0, r = n.names.length; t < r; t++) if (n.names[t].test(e)) return !0;
                                        return !1;
                                    }),
                                    (n.humanize = e("ms")),
                                    (n.destroy = function () {
                                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
                                    }),
                                    Object.keys(t).forEach((e) => {
                                        n[e] = t[e];
                                    }),
                                    (n.names = []),
                                    (n.skips = []),
                                    (n.formatters = {}),
                                    (n.selectColor = function (e) {
                                        let t = 0;
                                        for (let n = 0; n < e.length; n++) (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
                                        return n.colors[Math.abs(t) % n.colors.length];
                                    }),
                                    n.enable(n.load()),
                                    n
                                );
                            };
                        },
                        { ms: 32 },
                    ],
                    31: [
                        function (e, t, n) {
                            "use strict";
                            var r,
                                s = "object" == typeof Reflect ? Reflect : null,
                                i =
                                    s && "function" == typeof s.apply
                                        ? s.apply
                                        : function (e, t, n) {
                                              return Function.prototype.apply.call(e, t, n);
                                          };
                            r =
                                s && "function" == typeof s.ownKeys
                                    ? s.ownKeys
                                    : Object.getOwnPropertySymbols
                                    ? function (e) {
                                          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                                      }
                                    : function (e) {
                                          return Object.getOwnPropertyNames(e);
                                      };
                            var o =
                                Number.isNaN ||
                                function (e) {
                                    return e != e;
                                };
                            function l() {
                                l.init.call(this);
                            }
                            (t.exports = l),
                                (t.exports.once = function (e, t) {
                                    return new Promise(function (n, r) {
                                        function s(n) {
                                            e.removeListener(t, i), r(n);
                                        }
                                        function i() {
                                            "function" == typeof e.removeListener && e.removeListener("error", s), n([].slice.call(arguments));
                                        }
                                        v(e, t, i, { once: !0 }),
                                            "error" !== t &&
                                                (function (e, t, n) {
                                                    "function" == typeof e.on && v(e, "error", t, n);
                                                })(e, s, { once: !0 });
                                    });
                                }),
                                (l.EventEmitter = l),
                                (l.prototype._events = void 0),
                                (l.prototype._eventsCount = 0),
                                (l.prototype._maxListeners = void 0);
                            var u = 10;
                            function a(e) {
                                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                            }
                            function c(e) {
                                return void 0 === e._maxListeners ? l.defaultMaxListeners : e._maxListeners;
                            }
                            function h(e, t, n, r) {
                                var s, i, o, l;
                                if (
                                    (a(n),
                                    void 0 === (i = e._events) ? ((i = e._events = Object.create(null)), (e._eventsCount = 0)) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), (i = e._events)), (o = i[t])),
                                    void 0 === o)
                                )
                                    (o = i[t] = n), ++e._eventsCount;
                                else if (("function" == typeof o ? (o = i[t] = r ? [n, o] : [o, n]) : r ? o.unshift(n) : o.push(n), (s = c(e)) > 0 && o.length > s && !o.warned)) {
                                    o.warned = !0;
                                    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                                    (u.name = "MaxListenersExceededWarning"), (u.emitter = e), (u.type = t), (u.count = o.length), (l = u), console && console.warn && console.warn(l);
                                }
                                return e;
                            }
                            function f() {
                                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
                            }
                            function d(e, t, n) {
                                var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
                                    s = f.bind(r);
                                return (s.listener = n), (r.wrapFn = s), s;
                            }
                            function _(e, t, n) {
                                var r = e._events;
                                if (void 0 === r) return [];
                                var s = r[t];
                                return void 0 === s
                                    ? []
                                    : "function" == typeof s
                                    ? n
                                        ? [s.listener || s]
                                        : [s]
                                    : n
                                    ? (function (e) {
                                          for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                                          return t;
                                      })(s)
                                    : m(s, s.length);
                            }
                            function p(e) {
                                var t = this._events;
                                if (void 0 !== t) {
                                    var n = t[e];
                                    if ("function" == typeof n) return 1;
                                    if (void 0 !== n) return n.length;
                                }
                                return 0;
                            }
                            function m(e, t) {
                                for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                                return n;
                            }
                            function v(e, t, n, r) {
                                if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
                                else {
                                    if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                                    e.addEventListener(t, function s(i) {
                                        r.once && e.removeEventListener(t, s), n(i);
                                    });
                                }
                            }
                            Object.defineProperty(l, "defaultMaxListeners", {
                                enumerable: !0,
                                get: function () {
                                    return u;
                                },
                                set: function (e) {
                                    if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                                    u = e;
                                },
                            }),
                                (l.init = function () {
                                    (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) || ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
                                }),
                                (l.prototype.setMaxListeners = function (e) {
                                    if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                                    return (this._maxListeners = e), this;
                                }),
                                (l.prototype.getMaxListeners = function () {
                                    return c(this);
                                }),
                                (l.prototype.emit = function (e) {
                                    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                                    var r = "error" === e,
                                        s = this._events;
                                    if (void 0 !== s) r = r && void 0 === s.error;
                                    else if (!r) return !1;
                                    if (r) {
                                        var o;
                                        if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                                        var l = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                                        throw ((l.context = o), l);
                                    }
                                    var u = s[e];
                                    if (void 0 === u) return !1;
                                    if ("function" == typeof u) i(u, this, t);
                                    else {
                                        var a = u.length,
                                            c = m(u, a);
                                        for (n = 0; n < a; ++n) i(c[n], this, t);
                                    }
                                    return !0;
                                }),
                                (l.prototype.addListener = function (e, t) {
                                    return h(this, e, t, !1);
                                }),
                                (l.prototype.on = l.prototype.addListener),
                                (l.prototype.prependListener = function (e, t) {
                                    return h(this, e, t, !0);
                                }),
                                (l.prototype.once = function (e, t) {
                                    return a(t), this.on(e, d(this, e, t)), this;
                                }),
                                (l.prototype.prependOnceListener = function (e, t) {
                                    return a(t), this.prependListener(e, d(this, e, t)), this;
                                }),
                                (l.prototype.removeListener = function (e, t) {
                                    var n, r, s, i, o;
                                    if ((a(t), void 0 === (r = this._events))) return this;
                                    if (void 0 === (n = r[e])) return this;
                                    if (n === t || n.listener === t) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
                                    else if ("function" != typeof n) {
                                        for (s = -1, i = n.length - 1; i >= 0; i--)
                                            if (n[i] === t || n[i].listener === t) {
                                                (o = n[i].listener), (s = i);
                                                break;
                                            }
                                        if (s < 0) return this;
                                        0 === s
                                            ? n.shift()
                                            : (function (e, t) {
                                                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                                                  e.pop();
                                              })(n, s),
                                            1 === n.length && (r[e] = n[0]),
                                            void 0 !== r.removeListener && this.emit("removeListener", e, o || t);
                                    }
                                    return this;
                                }),
                                (l.prototype.off = l.prototype.removeListener),
                                (l.prototype.removeAllListeners = function (e) {
                                    var t, n, r;
                                    if (void 0 === (n = this._events)) return this;
                                    if (void 0 === n.removeListener)
                                        return 0 === arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== n[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]), this;
                                    if (0 === arguments.length) {
                                        var s,
                                            i = Object.keys(n);
                                        for (r = 0; r < i.length; ++r) "removeListener" !== (s = i[r]) && this.removeAllListeners(s);
                                        return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
                                    }
                                    if ("function" == typeof (t = n[e])) this.removeListener(e, t);
                                    else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
                                    return this;
                                }),
                                (l.prototype.listeners = function (e) {
                                    return _(this, e, !0);
                                }),
                                (l.prototype.rawListeners = function (e) {
                                    return _(this, e, !1);
                                }),
                                (l.listenerCount = function (e, t) {
                                    return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t);
                                }),
                                (l.prototype.listenerCount = p),
                                (l.prototype.eventNames = function () {
                                    return this._eventsCount > 0 ? r(this._events) : [];
                                });
                        },
                        {},
                    ],
                    32: [
                        function (e, t, n) {
                            var r = 1e3,
                                s = 6e4,
                                i = 60 * s,
                                o = 24 * i;
                            function l(e, t, n, r) {
                                var s = t >= 1.5 * n;
                                return Math.round(e / n) + " " + r + (s ? "s" : "");
                            }
                            t.exports = function (e, t) {
                                t = t || {};
                                var n = typeof e;
                                if ("string" === n && e.length > 0)
                                    return (function (e) {
                                        if ((e = String(e)).length > 100) return;
                                        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                                        if (!t) return;
                                        var n = parseFloat(t[1]);
                                        switch ((t[2] || "ms").toLowerCase()) {
                                            case "years":
                                            case "year":
                                            case "yrs":
                                            case "yr":
                                            case "y":
                                                return 315576e5 * n;
                                            case "weeks":
                                            case "week":
                                            case "w":
                                                return 6048e5 * n;
                                            case "days":
                                            case "day":
                                            case "d":
                                                return n * o;
                                            case "hours":
                                            case "hour":
                                            case "hrs":
                                            case "hr":
                                            case "h":
                                                return n * i;
                                            case "minutes":
                                            case "minute":
                                            case "mins":
                                            case "min":
                                            case "m":
                                                return n * s;
                                            case "seconds":
                                            case "second":
                                            case "secs":
                                            case "sec":
                                            case "s":
                                                return n * r;
                                            case "milliseconds":
                                            case "millisecond":
                                            case "msecs":
                                            case "msec":
                                            case "ms":
                                                return n;
                                            default:
                                                return;
                                        }
                                    })(e);
                                if ("number" === n && isFinite(e))
                                    return t.long
                                        ? (function (e) {
                                              var t = Math.abs(e);
                                              if (t >= o) return l(e, t, o, "day");
                                              if (t >= i) return l(e, t, i, "hour");
                                              if (t >= s) return l(e, t, s, "minute");
                                              if (t >= r) return l(e, t, r, "second");
                                              return e + " ms";
                                          })(e)
                                        : (function (e) {
                                              var t = Math.abs(e);
                                              if (t >= o) return Math.round(e / o) + "d";
                                              if (t >= i) return Math.round(e / i) + "h";
                                              if (t >= s) return Math.round(e / s) + "m";
                                              if (t >= r) return Math.round(e / r) + "s";
                                              return e + "ms";
                                          })(e);
                                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
                            };
                        },
                        {},
                    ],
                    33: [
                        function (e, t, n) {
                            var r,
                                s,
                                i = (t.exports = {});
                            function o() {
                                throw new Error("setTimeout has not been defined");
                            }
                            function l() {
                                throw new Error("clearTimeout has not been defined");
                            }
                            function u(e) {
                                if (r === setTimeout) return setTimeout(e, 0);
                                if ((r === o || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
                                try {
                                    return r(e, 0);
                                } catch (t) {
                                    try {
                                        return r.call(null, e, 0);
                                    } catch (t) {
                                        return r.call(this, e, 0);
                                    }
                                }
                            }
                            !(function () {
                                try {
                                    r = "function" == typeof setTimeout ? setTimeout : o;
                                } catch (e) {
                                    r = o;
                                }
                                try {
                                    s = "function" == typeof clearTimeout ? clearTimeout : l;
                                } catch (e) {
                                    s = l;
                                }
                            })();
                            var a,
                                c = [],
                                h = !1,
                                f = -1;
                            function d() {
                                h && a && ((h = !1), a.length ? (c = a.concat(c)) : (f = -1), c.length && _());
                            }
                            function _() {
                                if (!h) {
                                    var e = u(d);
                                    h = !0;
                                    for (var t = c.length; t; ) {
                                        for (a = c, c = []; ++f < t; ) a && a[f].run();
                                        (f = -1), (t = c.length);
                                    }
                                    (a = null),
                                        (h = !1),
                                        (function (e) {
                                            if (s === clearTimeout) return clearTimeout(e);
                                            if ((s === l || !s) && clearTimeout) return (s = clearTimeout), clearTimeout(e);
                                            try {
                                                s(e);
                                            } catch (t) {
                                                try {
                                                    return s.call(null, e);
                                                } catch (t) {
                                                    return s.call(this, e);
                                                }
                                            }
                                        })(e);
                                }
                            }
                            function p(e, t) {
                                (this.fun = e), (this.array = t);
                            }
                            function m() {}
                            (i.nextTick = function (e) {
                                var t = new Array(arguments.length - 1);
                                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                c.push(new p(e, t)), 1 !== c.length || h || u(_);
                            }),
                                (p.prototype.run = function () {
                                    this.fun.apply(null, this.array);
                                }),
                                (i.title = "browser"),
                                (i.browser = !0),
                                (i.env = {}),
                                (i.argv = []),
                                (i.version = ""),
                                (i.versions = {}),
                                (i.on = m),
                                (i.addListener = m),
                                (i.once = m),
                                (i.off = m),
                                (i.removeListener = m),
                                (i.removeAllListeners = m),
                                (i.emit = m),
                                (i.prependListener = m),
                                (i.prependOnceListener = m),
                                (i.listeners = function (e) {
                                    return [];
                                }),
                                (i.binding = function (e) {
                                    throw new Error("process.binding is not supported");
                                }),
                                (i.cwd = function () {
                                    return "/";
                                }),
                                (i.chdir = function (e) {
                                    throw new Error("process.chdir is not supported");
                                }),
                                (i.umask = function () {
                                    return 0;
                                });
                        },
                        {},
                    ],
                    34: [
                        function (e, t, n) {
                            var r = (t.exports = {
                                v: [{ name: "version", reg: /^(\d*)$/ }],
                                o: [{ name: "origin", reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/, names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"], format: "%s %s %d %s IP%d %s" }],
                                s: [{ name: "name" }],
                                i: [{ name: "description" }],
                                u: [{ name: "uri" }],
                                e: [{ name: "email" }],
                                p: [{ name: "phone" }],
                                z: [{ name: "timezones" }],
                                r: [{ name: "repeats" }],
                                t: [{ name: "timing", reg: /^(\d*) (\d*)/, names: ["start", "stop"], format: "%d %d" }],
                                c: [{ name: "connection", reg: /^IN IP(\d) (\S*)/, names: ["version", "ip"], format: "IN IP%d %s" }],
                                b: [{ push: "bandwidth", reg: /^(TIAS|AS|CT|RR|RS):(\d*)/, names: ["type", "limit"], format: "%s:%s" }],
                                m: [{ reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/, names: ["type", "port", "protocol", "payloads"], format: "%s %d %s %s" }],
                                a: [
                                    {
                                        push: "rtp",
                                        reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                                        names: ["payload", "codec", "rate", "encoding"],
                                        format: function (e) {
                                            return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
                                        },
                                    },
                                    { push: "fmtp", reg: /^fmtp:(\d*) ([\S| ]*)/, names: ["payload", "config"], format: "fmtp:%d %s" },
                                    { name: "control", reg: /^control:(.*)/, format: "control:%s" },
                                    {
                                        name: "rtcp",
                                        reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                                        names: ["port", "netType", "ipVer", "address"],
                                        format: function (e) {
                                            return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
                                        },
                                    },
                                    { push: "rtcpFbTrrInt", reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/, names: ["payload", "value"], format: "rtcp-fb:%s trr-int %d" },
                                    {
                                        push: "rtcpFb",
                                        reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                                        names: ["payload", "type", "subtype"],
                                        format: function (e) {
                                            return null != e.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
                                        },
                                    },
                                    {
                                        push: "ext",
                                        reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
                                        names: ["value", "direction", "encrypt-uri", "uri", "config"],
                                        format: function (e) {
                                            return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "");
                                        },
                                    },
                                    { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ },
                                    {
                                        push: "crypto",
                                        reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                                        names: ["id", "suite", "config", "sessionConfig"],
                                        format: function (e) {
                                            return null != e.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
                                        },
                                    },
                                    { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" },
                                    { name: "connectionType", reg: /^connection:(new|existing)/, format: "connection:%s" },
                                    { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" },
                                    { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" },
                                    { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" },
                                    { name: "maxptime", reg: /^maxptime:(\d*(?:\.\d*)*)/, format: "maxptime:%d" },
                                    { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ },
                                    { name: "icelite", reg: /^(ice-lite)/ },
                                    { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" },
                                    { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" },
                                    { name: "fingerprint", reg: /^fingerprint:(\S*) (\S*)/, names: ["type", "hash"], format: "fingerprint:%s %s" },
                                    {
                                        push: "candidates",
                                        reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                                        names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
                                        format: function (e) {
                                            var t = "candidate:%s %d %s %d %s %d typ %s";
                                            return (
                                                (t += null != e.raddr ? " raddr %s rport %d" : "%v%v"),
                                                (t += null != e.tcptype ? " tcptype %s" : "%v"),
                                                null != e.generation && (t += " generation %d"),
                                                (t += null != e["network-id"] ? " network-id %d" : "%v"),
                                                (t += null != e["network-cost"] ? " network-cost %d" : "%v")
                                            );
                                        },
                                    },
                                    { name: "endOfCandidates", reg: /^(end-of-candidates)/ },
                                    { name: "remoteCandidates", reg: /^remote-candidates:(.*)/, format: "remote-candidates:%s" },
                                    { name: "iceOptions", reg: /^ice-options:(\S*)/, format: "ice-options:%s" },
                                    {
                                        push: "ssrcs",
                                        reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
                                        names: ["id", "attribute", "value"],
                                        format: function (e) {
                                            var t = "ssrc:%d";
                                            return null != e.attribute && ((t += " %s"), null != e.value && (t += ":%s")), t;
                                        },
                                    },
                                    { push: "ssrcGroups", reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/, names: ["semantics", "ssrcs"], format: "ssrc-group:%s %s" },
                                    { name: "msidSemantic", reg: /^msid-semantic:\s?(\w*) (\S*)/, names: ["semantic", "token"], format: "msid-semantic: %s %s" },
                                    { push: "groups", reg: /^group:(\w*) (.*)/, names: ["type", "mids"], format: "group:%s %s" },
                                    { name: "rtcpMux", reg: /^(rtcp-mux)/ },
                                    { name: "rtcpRsize", reg: /^(rtcp-rsize)/ },
                                    {
                                        name: "sctpmap",
                                        reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
                                        names: ["sctpmapNumber", "app", "maxMessageSize"],
                                        format: function (e) {
                                            return null != e.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
                                        },
                                    },
                                    { name: "xGoogleFlag", reg: /^x-google-flag:([^\s]*)/, format: "x-google-flag:%s" },
                                    {
                                        push: "rids",
                                        reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                                        names: ["id", "direction", "params"],
                                        format: function (e) {
                                            return e.params ? "rid:%s %s %s" : "rid:%s %s";
                                        },
                                    },
                                    {
                                        push: "imageattrs",
                                        reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
                                        names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
                                        format: function (e) {
                                            return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "");
                                        },
                                    },
                                    {
                                        name: "simulcast",
                                        reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
                                        names: ["dir1", "list1", "dir2", "list2"],
                                        format: function (e) {
                                            return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "");
                                        },
                                    },
                                    { name: "simulcast_03", reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/, names: ["value"], format: "simulcast: %s" },
                                    { name: "framerate", reg: /^framerate:(\d+(?:$|\.\d+))/, format: "framerate:%s" },
                                    { name: "sourceFilter", reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/, names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"], format: "source-filter: %s %s %s %s %s" },
                                    { name: "bundleOnly", reg: /^(bundle-only)/ },
                                    { name: "label", reg: /^label:(.+)/, format: "label:%s" },
                                    { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" },
                                    { name: "maxMessageSize", reg: /^max-message-size:(\d+)$/, format: "max-message-size:%s" },
                                    {
                                        push: "tsRefClocks",
                                        reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
                                        names: ["clksrc", "clksrcExt"],
                                        format: function (e) {
                                            return "ts-refclk:%s" + (null != e.clksrcExt ? "=%s" : "");
                                        },
                                    },
                                    {
                                        name: "mediaClk",
                                        reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
                                        names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
                                        format: function (e) {
                                            var t = "mediaclk:";
                                            return (t += null != e.id ? "id=%s %s" : "%v%s"), (t += null != e.mediaClockValue ? "=%s" : ""), (t += null != e.rateNumerator ? " rate=%s" : ""), (t += null != e.rateDenominator ? "/%s" : "");
                                        },
                                    },
                                    { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" },
                                    { name: "content", reg: /^content:(.+)/, format: "content:%s" },
                                    { name: "bfcpFloorCtrl", reg: /^floorctrl:(c-only|s-only|c-s)/, format: "floorctrl:%s" },
                                    { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" },
                                    { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" },
                                    { name: "bfcpFloorId", reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/, names: ["id", "mStream"], format: "floorid:%s mstrm:%s" },
                                    { push: "invalid", names: ["value"] },
                                ],
                            });
                            Object.keys(r).forEach(function (e) {
                                r[e].forEach(function (e) {
                                    e.reg || (e.reg = /(.*)/), e.format || (e.format = "%s");
                                });
                            });
                        },
                        {},
                    ],
                    35: [
                        function (e, t, n) {
                            var r = e("./parser"),
                                s = e("./writer");
                            (n.write = s),
                                (n.parse = r.parse),
                                (n.parseParams = r.parseParams),
                                (n.parseFmtpConfig = r.parseFmtpConfig),
                                (n.parsePayloads = r.parsePayloads),
                                (n.parseRemoteCandidates = r.parseRemoteCandidates),
                                (n.parseImageAttributes = r.parseImageAttributes),
                                (n.parseSimulcastStreamList = r.parseSimulcastStreamList);
                        },
                        { "./parser": 36, "./writer": 37 },
                    ],
                    36: [
                        function (e, t, n) {
                            var r = function (e) {
                                    return String(Number(e)) === e ? Number(e) : e;
                                },
                                s = function (e, t, n) {
                                    var s = e.name && e.names;
                                    e.push && !t[e.push] ? (t[e.push] = []) : s && !t[e.name] && (t[e.name] = {});
                                    var i = e.push ? {} : s ? t[e.name] : t;
                                    !(function (e, t, n, s) {
                                        if (s && !n) t[s] = r(e[1]);
                                        else for (var i = 0; i < n.length; i += 1) null != e[i + 1] && (t[n[i]] = r(e[i + 1]));
                                    })(n.match(e.reg), i, e.names, e.name),
                                        e.push && t[e.push].push(i);
                                },
                                i = e("./grammar"),
                                o = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
                            n.parse = function (e) {
                                var t = {},
                                    n = [],
                                    r = t;
                                return (
                                    e
                                        .split(/(\r\n|\r|\n)/)
                                        .filter(o)
                                        .forEach(function (e) {
                                            var t = e[0],
                                                o = e.slice(2);
                                            "m" === t && (n.push({ rtp: [], fmtp: [] }), (r = n[n.length - 1]));
                                            for (var l = 0; l < (i[t] || []).length; l += 1) {
                                                var u = i[t][l];
                                                if (u.reg.test(o)) return s(u, r, o);
                                            }
                                        }),
                                    (t.media = n),
                                    t
                                );
                            };
                            var l = function (e, t) {
                                var n = t.split(/=(.+)/, 2);
                                return 2 === n.length ? (e[n[0]] = r(n[1])) : 1 === n.length && t.length > 1 && (e[n[0]] = void 0), e;
                            };
                            (n.parseParams = function (e) {
                                return e.split(/;\s?/).reduce(l, {});
                            }),
                                (n.parseFmtpConfig = n.parseParams),
                                (n.parsePayloads = function (e) {
                                    return e.toString().split(" ").map(Number);
                                }),
                                (n.parseRemoteCandidates = function (e) {
                                    for (var t = [], n = e.split(" ").map(r), s = 0; s < n.length; s += 3) t.push({ component: n[s], ip: n[s + 1], port: n[s + 2] });
                                    return t;
                                }),
                                (n.parseImageAttributes = function (e) {
                                    return e.split(" ").map(function (e) {
                                        return e
                                            .substring(1, e.length - 1)
                                            .split(",")
                                            .reduce(l, {});
                                    });
                                }),
                                (n.parseSimulcastStreamList = function (e) {
                                    return e.split(";").map(function (e) {
                                        return e.split(",").map(function (e) {
                                            var t,
                                                n = !1;
                                            return "~" !== e[0] ? (t = r(e)) : ((t = r(e.substring(1, e.length))), (n = !0)), { scid: t, paused: n };
                                        });
                                    });
                                });
                        },
                        { "./grammar": 34 },
                    ],
                    37: [
                        function (e, t, n) {
                            var r = e("./grammar"),
                                s = /%[sdv%]/g,
                                i = function (e) {
                                    var t = 1,
                                        n = arguments,
                                        r = n.length;
                                    return e.replace(s, function (e) {
                                        if (t >= r) return e;
                                        var s = n[t];
                                        switch (((t += 1), e)) {
                                            case "%%":
                                                return "%";
                                            case "%s":
                                                return String(s);
                                            case "%d":
                                                return Number(s);
                                            case "%v":
                                                return "";
                                        }
                                    });
                                },
                                o = function (e, t, n) {
                                    var r = [e + "=" + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format)];
                                    if (t.names)
                                        for (var s = 0; s < t.names.length; s += 1) {
                                            var o = t.names[s];
                                            t.name ? r.push(n[t.name][o]) : r.push(n[t.names[s]]);
                                        }
                                    else r.push(n[t.name]);
                                    return i.apply(null, r);
                                },
                                l = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
                                u = ["i", "c", "b", "a"];
                            t.exports = function (e, t) {
                                (t = t || {}),
                                    null == e.version && (e.version = 0),
                                    null == e.name && (e.name = " "),
                                    e.media.forEach(function (e) {
                                        null == e.payloads && (e.payloads = "");
                                    });
                                var n = t.outerOrder || l,
                                    s = t.innerOrder || u,
                                    i = [];
                                return (
                                    n.forEach(function (t) {
                                        r[t].forEach(function (n) {
                                            n.name in e && null != e[n.name]
                                                ? i.push(o(t, n, e))
                                                : n.push in e &&
                                                  null != e[n.push] &&
                                                  e[n.push].forEach(function (e) {
                                                      i.push(o(t, n, e));
                                                  });
                                        });
                                    }),
                                    e.media.forEach(function (e) {
                                        i.push(o("m", r.m[0], e)),
                                            s.forEach(function (t) {
                                                r[t].forEach(function (n) {
                                                    n.name in e && null != e[n.name]
                                                        ? i.push(o(t, n, e))
                                                        : n.push in e &&
                                                          null != e[n.push] &&
                                                          e[n.push].forEach(function (e) {
                                                              i.push(o(t, n, e));
                                                          });
                                                });
                                            });
                                    }),
                                    i.join("\r\n") + "\r\n"
                                );
                            };
                        },
                        { "./grammar": 34 },
                    ],
                    38: [
                        function (e, t, n) {
                            t.exports = {
                                name: "jssip",
                                title: "JsSIP",
                                description: "the Javascript SIP library",
                                version: "3.7.5",
                                homepage: "https://jssip.net",
                                author: "José Luis Millán <jmillan@aliax.net> (https://github.com/jmillan)",
                                contributors: ["Iñaki Baz Castillo <ibc@aliax.net> (https://github.com/ibc)"],
                                types: "lib/JsSIP.d.ts",
                                main: "lib-es5/JsSIP.js",
                                keywords: ["sip", "websocket", "webrtc", "node", "browser", "library"],
                                license: "MIT",
                                repository: { type: "git", url: "https://github.com/versatica/JsSIP.git" },
                                bugs: { url: "https://github.com/versatica/JsSIP/issues" },
                                dependencies: { "@types/debug": "^4.1.5", "@types/node": "^14.14.34", debug: "^4.3.1", events: "^3.3.0", "sdp-transform": "^2.14.1" },
                                devDependencies: {
                                    "@babel/core": "^7.13.10",
                                    "@babel/preset-env": "^7.13.10",
                                    "ansi-colors": "^3.2.4",
                                    browserify: "^16.5.1",
                                    eslint: "^5.16.0",
                                    "fancy-log": "^1.3.3",
                                    gulp: "^4.0.2",
                                    "gulp-babel": "^8.0.0",
                                    "gulp-eslint": "^5.0.0",
                                    "gulp-expect-file": "^1.0.2",
                                    "gulp-header": "^2.0.9",
                                    "gulp-nodeunit-runner": "^0.2.2",
                                    "gulp-plumber": "^1.2.1",
                                    "gulp-rename": "^1.4.0",
                                    "gulp-uglify-es": "^1.0.4",
                                    pegjs: "^0.7.0",
                                    "vinyl-buffer": "^1.0.1",
                                    "vinyl-source-stream": "^2.0.0",
                                },
                                scripts: { lint: "gulp lint", test: "gulp test", prepublishOnly: "gulp babel" },
                            };
                        },
                        {},
                    ],
                },
                {},
                [8]
            )(8);
        });
        
        
    }
    
    constructor() {
    
           this.JsSipInit.call(window);
            (this._isInitialized = !1),
            (this.serverConfig = {}),
            (this.account = { user: null, userAuth: null, displayName: null, password: null, registerExpires: 600, useSessionTimer: !1 }),
            (this.constraints = { chrome: { audio: !0, video: !0 }, firefox: { audio: !0, video: !0 }, safari: { audio: !0, video: !0 }, ios_safari: { audio: !0, video: !0 }, other: { audio: !0, video: !0 } }),
            (this.chromiumBased = [
                { n: "Edge", s: "edg/" },
                { n: "Opera", s: "opr/" },
                { n: "Samsung", s: "samsungbrowser/" },
                { n: "Yandex", s: "yabrowser/" },
            ]),
            (this.modes = { video_call_audio_answer_firefox_fix: !0, video_call_audio_answer_safari_fix: !0, ice_timeout_fix: 2e3, chrome_rtp_timeout_fix: 13, sbc_ha_pairs_mode: void 0, ringing_header_mode: void 0 }),
            (this.listeners = {}),
            (this.registerExtraHeaders = null),
            (this.jssipUA = null),
            (this.browser = ""),
            (this.browserVersion = 0),
            (this.browserName = ""),
            (this.reconnectMin = 2),
            (this.reconnectMax = 30),
            (this.u17 = void 0),
            (this.activeCalls = 0),
            (this.wsSocket = null),
            (this.wsOnMessage = null),
            (this.wsPingMs = 0),
            (this.wsOrigPingMs = 0),
            (this.wsThrottlingPingMs = 0),
            (this.wsVisibility = !1),
            (this.wsCall = !1),
            (this.wsLog = 0),
            (this.wsPongTimeout = !0),
            (this.wsIsThrottling = !1),
            (this.wsPingJob = null),
            (this.wsPingTime = null),
            (this.wsNextPingTime = null),
            (this.wsPongReceived = !1),
            (this.wsPongSupported = null),
            (this.wsPongTimeoutTime = null),
            (this.wsPongDelays = null),
            (this.wsPongDelaysIx = 0),
            (this.wsPongReport = 0),
            (this.wsPongReportCounter = 0),
            (this.wsPongDist = !1),
            (this.dtmfUseWebRTC = !0),
            (this.dtmfDuration = 250),
            (this.dtmfInterToneGap = 250),
            (this.enableAddVideo = !1),
            (this.oauthToken = null),
            (this.oauthTokenUseInInvite = !0),
            (this.networkPriority = void 0),
            (AudioCodesUA.ac_log = console.log),
            void 0 === AudioCodesUA.instance && (AudioCodesUA.instance = this),
            this._detectBrowser(),
            (this.webrtcapi = AudioCodesWebRTCWrapper),
            (this.replacedCall = null),
            (this.AUDIO = Symbol("audio")),
            (this.VIDEO = Symbol("video")),
            (this.RECVONLY_VIDEO = Symbol("recvonly_video")),
            AudioCodesUA.instance
       
    }
    version() {
        return "1.14.1";
    }
    getBrowserName() {
        return this.browserName;
    }
    getBrowser() {
        return this.browser;
    }
    getBrowserVersion() {
        return this.browserVersion;
    }
    getWR() {
        return this.webrtcapi;
    }
    checkAvailableDevices() {
        return this.getWR().checkAvailableDevices();
    }
    getServerAddress() {
        if (null === this.wsSocket) return null;
        let e = this.wsSocket.url;
        return e.endsWith("/") && (e = e.slice(0, -1)), e;
    }
    setOAuthToken(e, s = !0) {
        (this.oauthToken = e), (this.oauthTokenUseInInvite = s), this.setRegisterExtraHeaders(this.registerExtraHeaders);
    }
    setUserAgent(e) {
        this.u17 = e;
    }
    setChromeAudioConstraints(e) {
        AudioCodesUA.ac_log("AC: setChromeAudioConstraints= " + e);
        let s,
            i = e
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e.length > 0);
        if (0 === i.length) s = !0;
        else {
            s = {};
            for (let e of i) s[e] = !0;
        }
        this.setConstraints("chrome", "audio", s);
    }
    setConstraints(e, s, i) {
        if ((AudioCodesUA.ac_log("AC: setConstraints " + e + " " + s, i), void 0 === this.constraints[e])) throw "Unsupported browser: " + e;
        if (void 0 === this.constraints[e][s]) throw "Wrong type: " + s;
        this.constraints[e][s] = i;
    }
    setBrowsersConstraints(e) {
        for (let s of Object.keys(e)) {
            let i = e[s];
            void 0 !== i.audio && this.setConstraints(s, "audio", i.audio), void 0 !== i.video && this.setConstraints(s, "video", i.video);
        }
    }
    setServerConfig(e, s, i = []) {
        (this.serverConfig = { addresses: e, domain: s, iceServers: this._convertIceList(i) }), AudioCodesUA.ac_log("AC: setServerConfig()", this.serverConfig);
    }
    setReconnectIntervals(e, s) {
        AudioCodesUA.ac_log("AC: setReconnectIntervals min=" + e + " max=" + s), (this.reconnectMin = e), (this.reconnectMax = s);
    }
    setAccount(e, s, i, t) {
        (void 0 !== s && null !== s && 0 !== s.length) || (s = void 0), (void 0 !== t && null !== t && 0 !== t.length) || (t = e);
        let o = this.account;
        (o.user = e), (o.displayName = s), (o.password = i), (o.authUser = t);
    }
    setRegisterExpires(e) {
        AudioCodesUA.ac_log("AC: setRegisterExpires=" + e), (this.account.registerExpires = e);
    }
    setUseSessionTimer(e) {
        AudioCodesUA.ac_log("AC: setUseSessionTimer=" + e), (this.account.useSessionTimer = e);
    }
    setDtmfOptions(e, s = null, i = null) {
        AudioCodesUA.ac_log(`AC: setDtmfOptions useWebRTC=${e} duration=${s} interToneGap=${i}`), (this.dtmfUseWebRTC = e), null !== s && (this.dtmfDuration = s), null !== i && (this.dtmfInterToneGap = i);
    }
    setEnableAddVideo(e) {
        AudioCodesUA.ac_log("AC: setEnableAddVideo=" + e), (this.enableAddVideo = e);
    }
    getEnableAddVideo() {
        return this.enableAddVideo;
    }
    getAccount() {
        return this.account;
    }
    setListeners(e) {
        AudioCodesUA.ac_log("AC: setListeners()");
        for (let s of ["loginStateChanged", "outgoingCallProgress", "callTerminated", "callConfirmed", "callShowStreams", "incomingCall", "callHoldStateChanged"]) if (!(s in e)) throw "listener missed method: " + s;
        this.listeners = e;
    }
    static getSessionStatusName(e) {
        switch (e) {
            case 0:
                return "NULL (0)";
            case 1:
                return "INVITE_SENT (1)";
            case 2:
                return "1XX_RECEIVED (2)";
            case 3:
                return "INVITE_RECEIVED (3)";
            case 4:
                return "WAITING_FOR_ANSWER (4)";
            case 5:
                return "ANSWERED (5)";
            case 6:
                return "WAITING_FOR_ACK (6)";
            case 7:
                return "CANCELED (7)";
            case 8:
                return "TERMINATED (8)";
            case 9:
                return "CONFIRMED (9)";
            default:
                return "Unknown (" + e + ")";
        }
    }
    setJsSipLogger(e) {
        JsSIP.debug.log = e;
    }
    setAcLogger(e) {
        AudioCodesUA.ac_log = e;
    }
    isInitialized() {
        return this._isInitialized;
    }
    setModes(e = {}) {
        AudioCodesUA.ac_log("AC: setModes() " + JSON.stringify(e)), Object.assign(this.modes, e), this._normalizeModes();
    }
    _normalizeModes() {
        function e(e, s) {
            return "number" == typeof e && e <= s ? void 0 : e;
        }
        let s = this.modes;
        (s.sbc_ha_pairs_mode = e(s.sbc_ha_pairs_mode, 0)), (s.chrome_rtp_timeout_fix = e(s.chrome_rtp_timeout_fix, 0));
    }
    init(e = !0) {
        if ((AudioCodesUA.ac_log("AC: init() autoLogin=" + e), this._isInitialized)) return;
        (this._isInitialized = !0), JsSIP.debug.enable("JsSIP:*"), (JsSIP.debug.formatArgs = function () {});
        let s = [];
        for (let e of this.serverConfig.addresses) e instanceof Array ? s.push({ socket: new JsSIP.WebSocketInterface(e[0]), weight: e[1] }) : s.push(new JsSIP.WebSocketInterface(e));
        let i = {
            sockets: s,
            uri: "sip:" + this.account.user + "@" + this.serverConfig.domain,
            contact_uri: "sip:" + this.account.user + "@" + this._randomToken(12) + ".invalid;transport=ws",
            authorization_user: this.account.authUser,
            password: this.account.password,
            register: e,
            session_timers: this.account.useSessionTimer,
            register_expires: this.account.registerExpires,
            user_agent: this.u17,
            connection_recovery_min_interval: this.reconnectMin,
            connection_recovery_max_interval: this.reconnectMax,
        };
        this.account.displayName && this.account.displayName.length > 0 && (i.display_name = this.account.displayName),
            (this.jssipUA = new JsSIP.UA(i)),
            this.setRegisterExtraHeaders(this.registerExtraHeaders),
            this._setUACallbacks(),
            AudioCodesUA.ac_log("AC: applied SDK modes: " + JSON.stringify(this.modes, (e, s) => (void 0 === s ? "<undefined>" : s))),
            (this.jssipUA.modes = this.modes),
            this.jssipUA.start();
    }
    deinit() {
        (this._isInitialized = !1), this.jssipUA && this.jssipUA.stop();
    }
    setRegisterExtraHeaders(e) {
        if (((this.registerExtraHeaders = e), this.jssipUA)) {
            let s = null !== e ? e : [];
            null !== this.oauthToken && (s = s.slice()).push("Authorization: Bearer " + this.oauthToken), this.jssipUA.registrator().setExtraHeaders(s);
        }
    }
    login() {
        AudioCodesUA.ac_log("AC: login()"), this.jssipUA.register();
    }
    logout() {
        AudioCodesUA.ac_log("AC: logout()"), this.jssipUA.isRegistered() && this.jssipUA.unregister();
    }
    switchSBC() {
        AudioCodesUA.ac_log("AC: switchSBC()"), this.jssipUA.switchSBC();
    }
    getNumberOfSBC() {
        return this.jssipUA.getNumberOfSBC();
    }
    setWebSocketKeepAlive(e, s = !0, i = !0, t = 0, o = !1) {
        if (
            (AudioCodesUA.ac_log("AC: setWebSocketKeepAlive pingInterval=" + e + " pongTimeout=" + s + " timerThrottlingBestEffort=" + JSON.stringify(i) + " pongReport=" + t + " pongDist=" + o),
            "number" != typeof e || "boolean" != typeof s)
        )
            throw "setWebSocketKeepAlive: wrong type of 1st or 2nd argument";
        let n;
        (this.wsPingMs = this.wsOrigPingMs = 1e3 * e), (this.wsPongTimeout = s), (this.wsPongReport = t), (this.wsPongDist = o), (this.wsPongReportCounter = 0), (this.wsIsThrottling = !1);
        let r = (n = !0 === i ? { log: 0, chrome: { interval: 62, visibility: !0, call: !0, log: 1 } } : !1 === i ? { log: 0 } : i)[this.browser];
        (this.wsThrottlingPingMs = r && void 0 !== r.interval ? 1e3 * r.interval : 0),
            (this.wsVisibility = !(!r || void 0 === r.visibility) && r.visibility),
            (this.wsCall = !(!r || void 0 === r.call) && r.call),
            (this.wsLog = r && void 0 !== r.log ? r.log : n.log),
            (this.wsPongDelays = new Array(this.wsPongReport > 0 ? this.wsPongReport : 50)),
            (this.wsPongDelaysIx = 0),
            0 !== this.wsOrigPingMs && 0 !== this.wsThrottlingPingMs && this.wsVisibility && document.addEventListener("visibilitychange", this._onVisibilityChange.bind(this));
    }
    _pingLog() {
        return ` (ping=${this.wsPingMs / 1e3} sec)`;
    }
    _visibilityLog(e) {
        let s = "AC: keep-alive: Page is " + (document.hidden ? "hidden" : "visible");
        document.hidden && (this.wsCall && (s += ", " + (0 === this.activeCalls ? "no active call" : "active call")), (s += " and " + (this.wsIsThrottling ? "was" : "was not") + " trottling")),
            e && (s += this._pingLog()),
            AudioCodesUA.ac_log(s);
    }
    _activeCallsLog(e) {
        let s = `AC: keep-alive: ${0 === this.activeCalls ? "Call ended" : "Call started"}`;
        0 === this.activeCalls && (this.wsVisibility && (s += ", page is " + (document.hidden ? "hidden" : "visible")), (s += " and " + (this.wsIsThrottling ? "was" : "was not") + " trottling")),
            e && (s += this._pingLog()),
            AudioCodesUA.ac_log(s);
    }
    _onActiveCallsChange(e) {
        if (((this.activeCalls += e), this.wsCall && 0 !== this.wsPingMs && 0 !== this.wsThrottlingPingMs))
            if ((this.activeCalls < 0 && AudioCodesUA.ac_log("Warning: keep-alive: activeCalls < 0"), 0 === this.activeCalls)) {
                if ((!this.wsVisibility || document.hidden) && this.wsIsThrottling && this.wsPingMs < this.wsThrottlingPingMs) return (this.wsPingMs = this.wsThrottlingPingMs), void this._activeCallsLog(!0);
                this.wsLog >= 2 && this._activeCallsLog(!1);
            } else if (1 === this.activeCalls && e > 0) {
                if (this.wsPingMs > this.wsOrigPingMs) return (this.wsPingMs = this.wsOrigPingMs), void this._activeCallsLog(!0);
                this.wsLog >= 2 && this._activeCallsLog(!1);
            }
    }
    _onVisibilityChange() {
        if (this.wsVisibility && 0 !== this.wsPingMs && 0 !== this.wsThrottlingPingMs)
            if (document.hidden) {
                if (this.wsCall && 0 === this.activeCalls && this.wsIsThrottling && this.wsPingMs < this.wsThrottlingPingMs) return (this.wsPingMs = this.wsThrottlingPingMs), void this._visibilityLog(!0);
                this.wsLog >= 2 && this._visibilityLog(!1);
            } else {
                if (this.wsPingMs > this.wsOrigPingMs) return (this.wsPingMs = this.wsOrigPingMs), void this._visibilityLog(!0);
                this.wsLog >= 2 && this._visibilityLog(!1);
            }
    }
    _onMessageHook(e) {
        "\r\n" === e.data ? this._onPong() : this.wsOnMessage(e);
    }
    _onPong() {
        let e;
        (this.wsPongReceived = !0),
            null === this.wsPongSupported && (AudioCodesUA.ac_log("AC: keep-alive: Server supports CRLF pong"), (this.wsPongSupported = !0)),
            null !== this.wsPongTimeoutTime
                ? ((e = Date.now() - this.wsPongTimeoutTime), (this.wsPongTimeoutTime = null), AudioCodesUA.ac_log("AC: keep-alive: Received pong that exceeded the timeout, delay=" + e))
                : (e = Date.now() - this.wsPingTime),
            (this.wsPongDelays[this.wsPongDelaysIx] = e),
            (this.wsPongDelaysIx = this.wsPongDelaysIx + 1),
            this.wsPongDelaysIx === this.wsPongDelays.length && (this.wsPongDelaysIx = 0),
            this.wsPongReport > 0 && this.wsPongReportCounter++;
    }
    _onPongTimeout(e) {
        if ((AudioCodesUA.ac_log(`AC: keep-alive: Pong timeout (not received within ${e / 1e3} seconds)`), AudioCodesUA.ac_log("AC: keep-alive: Previous pongs statistics: " + this._createPongReport(!0)), this.wsPongTimeout)) {
            AudioCodesUA.ac_log("AC: keep-alive: Close websocket connection"), this._stopWsKeepAlive();
            try {
                this.wsSocket.close();
            } catch (e) {
                AudioCodesUA.ac_log("AC: Close websocket error", e);
            }
        } else AudioCodesUA.ac_log("AC: keep-alive: Warning: websocket is not closed, because pongTimeout=false");
    }
    _sendPing() {
        try {
            let e = Date.now();
            if (null !== this.wsPingTime) {
                let s = e - this.wsNextPingTime;
                this.wsLog >= 3 && AudioCodesUA.ac_log(`AC: keep-alive: timer deviation (ms): ${s}`);
                let i = this.wsPingMs;
                if (
                    (Math.abs(s) >= 1e4 &&
                        ((this.wsLog > 0 || !this.wsIsThrottling) &&
                            (AudioCodesUA.ac_log(`AC: keep-alive detected timer throttling: ${Math.round(s / 1e3)} seconds ${s > 0 ? "later" : "earlier"}`),
                            0 === this.wsLog && AudioCodesUA.ac_log("AC: keep-alive: The next timer throttling will not be shown in the logs, because log==0")),
                        (this.wsIsThrottling = !0),
                        this.wsPingMs < this.wsThrottlingPingMs && ((this.wsPingMs = this.wsThrottlingPingMs), AudioCodesUA.ac_log("AC: keep-alive: ping interval increased" + this._pingLog()))),
                    null !== this.wsPongSupported || this.wsPongReceived || (AudioCodesUA.ac_log("AC: keep-alive: Server does not support CRLF pong."), (this.wsPongSupported = !1)),
                    this.wsPongSupported && !this.wsPongReceived && null === this.wsPongTimeoutTime)
                ) {
                    if ((this._onPongTimeout(i), this.wsPongTimeout)) return;
                    this.wsPongTimeoutTime = this.wsPingTime;
                }
            }
            (this.wsPingTime = e),
                (this.wsNextPingTime = this.wsPingTime + this.wsPingMs),
                (this.wsPongReceived = !1),
                this.wsSocket.readyState === WebSocket.OPEN ? this.wsSocket.send("\r\n\r\n") : AudioCodesUA.ac_log("AC: keep-alive: Warning: Cannot send Ping, websocket state=" + this.wsSocket.readyState),
                (this.wsPingJob = setTimeout(this._sendPing.bind(this), this.wsPingMs)),
                this.wsPongReport > 0 && this.wsPongReportCounter >= this.wsPongReport && ((this.wsPongReportCounter = 0), AudioCodesUA.ac_log("AC: keep-alive: Pong statistics: " + this._createPongReport(this.wsPongDist)));
        } catch (e) {
            AudioCodesUA.ac_log("AC: keep-alive: send ping error", e);
        }
    }
    _startWsKeepAlive(e) {
        (this.wsSocket = e),
            0 !== this.wsPingMs &&
                ((this.wsOnMessage = e.onmessage), (e.onmessage = this._onMessageHook.bind(this)), this._stopWsKeepAlive(), (this.wsPingTime = null), (this.wsPingJob = setTimeout(this._sendPing.bind(this), this.wsPingMs)));
    }
    _stopWsKeepAlive() {
        null !== this.wsPingJob && (clearTimeout(this.wsPingJob), (this.wsPingJob = null));
    }
    _createPongReport(e) {
        let s,
            i = "",
            t = !1,
            o = 1e6,
            n = 0;
        e && (s = new Array((this.wsPingMs / 1e3) * 4).fill(0));
        let r = 0;
        for (let i = 0; i < this.wsPongDelays.length; i++) {
            let a = this.wsPongDelays[i];
            if (void 0 !== a && (r++, a < o && (o = a), a > n && (n = a), e)) {
                let e = Math.floor(a / 250);
                e >= s.length && ((e = s.length - 1), (t = !0)), s[e]++;
            }
        }
        if (e) {
            i = "\r\npongs distribution (1/4 second step): ";
            for (let e = 0; e < s.length; e++) (i += s[e].toString()), e !== s.length - 1 && (i += (e + 1) % 4 == 0 ? "," : " ");
            t && (i += " (+)");
        }
        return `pongs=${r} delay=${o}..${n} ms${i}`;
    }
    _setUACallbacks() {
        this.jssipUA.on("connected", (e) => {
            AudioCodesUA.ac_log('AC>>: loginStateChanged: isLogin=false "connected"'), this._startWsKeepAlive(e.socket.socket._ws), this.listeners.loginStateChanged(!1, "connected", null);
        }),
            this.jssipUA.on("disconnected", () => {
                this._stopWsKeepAlive(), AudioCodesUA.ac_log('AC>>: loginStateChanged: isLogin=false "disconnected"'), this.listeners.loginStateChanged(!1, "disconnected", null);
            }),
            this.jssipUA.on("registered", (e) => {
                AudioCodesUA.ac_log('AC>>: loginStateChanged: isLogin=true "login"'), this.listeners.loginStateChanged(!0, "login", e.response);
            }),
            this.jssipUA.on("unregistered", (e) => {
                AudioCodesUA.ac_log('AC>>: loginStateChanged: isLogin=false "logout"'), this.listeners.loginStateChanged(!1, "logout", e.response);
            }),
            this.jssipUA.on("registrationFailed", (e) => {
                if (e.response && e.response.status_code >= 300 && e.response.status_code < 400)
                    if (this.jssipUA.registerRedirect) {
                        let s = e.response.parseHeader("contact");
                        if (s) {
                            let e = s.uri,
                                i = "wss://" + e.host;
                            if ((e.port && 443 !== e.port && (i += ":" + e.port.toString()), AudioCodesUA.ac_log('AC>>: loginStateChanged: isLogin=false "redirection" ' + i), this.jssipUA.registerRedirect(i))) return;
                            AudioCodesUA.ac_log("AC: redirect url missed in server addresses, please see setServerConfig()");
                        } else AudioCodesUA.ac_log('AC: 3xx response without "Contact" is ignored');
                    } else AudioCodesUA.ac_log("AC: REGISTER 3xx redirection is not supported in the original JsSIP");
                AudioCodesUA.ac_log('AC>>: loginStateChanged: isLogin=false "login failed"'), this.listeners.loginStateChanged(!1, "login failed", e.response ? e.response : null);
            }),
            this.jssipUA.on("newMessage", (e) => {
                "remote" === e.originator &&
                    (AudioCodesUA.ac_log("AC>>: incomingMessage", e),
                    this.listeners.incomingMessage && this.listeners.incomingMessage(null, AudioCodesUA.instance._get_from(e.request), AudioCodesUA.instance._get_content_type(e.request), e.request.body, e.request));
            }),
            this.jssipUA.on("sipEvent", (e) => {
                this.listeners.incomingNotify &&
                    (AudioCodesUA.ac_log("AC>>: incoming out of dialog NOTIFY", e),
                    this.listeners.incomingNotify(null, e.event ? e.event.event : null, AudioCodesUA.instance._get_from(e.request), AudioCodesUA.instance._get_content_type(e.request), e.request.body, e.request));
            }),
            this.jssipUA.on("newRTCSession", function (e) {
                AudioCodesUA.ac_log(`AC: event ${"remote" === e.originator ? "incoming" : "outgoing"} "newRTCSession"`, e);
                let s,
                    i = new AudioCodesSession(e.session);
                if (
                    (i.js_session.on("sipEvent", function (e) {
                        if (!AudioCodesUA.instance.listeners.incomingNotify) return;
                        let s = this.data.ac_session;
                        AudioCodesUA.ac_log("AC>>: incoming NOTIFY", s, e),
                            (e.taken = AudioCodesUA.instance.listeners.incomingNotify(
                                s,
                                e.event ? e.event.event : null,
                                AudioCodesUA.instance._get_from(e.request),
                                AudioCodesUA.instance._get_content_type(e.request),
                                e.request.body,
                                e.request
                            ));
                    }),
                    i.js_session.on("newInfo", function (e) {
                        if (!AudioCodesUA.instance.listeners.incomingInfo) return;
                        if ("local" === e.originator) return;
                        let s = this.data.ac_session;
                        AudioCodesUA.ac_log("AC>>: incoming INFO", s, e),
                            AudioCodesUA.instance.listeners.incomingInfo(s, AudioCodesUA.instance._get_from(e.request), AudioCodesUA.instance._get_content_type(e.request), e.request.body, e.request);
                    }),
                    i.js_session.on("replaces", function (e) {
                        (AudioCodesUA.instance.replacedCall = this.data.ac_session), AudioCodesUA.ac_log("AC>>: incoming INVITE with Replaces. This call will be replaced:", this.data.ac_session), e.accept();
                    }),
                    i.js_session.on("sdp", function (e) {
                        AudioCodesUA.instance._sdp_checking(this, e);
                    }),
                    i.js_session.on("connecting", function () {}),
                    i.js_session.on("reinvite", function (e) {
                        if (!AudioCodesUA.instance.listeners.callIncomingReinvite) return;
                        let s = this.data.ac_session;
                        AudioCodesUA.ac_log("AC>>: callIncomingReinvite start"),
                            AudioCodesUA.instance.listeners.callIncomingReinvite(s, !0, e.request),
                            (e.callback = function () {
                                AudioCodesUA.ac_log("AC>>: callIncomingIncomingReinvite end"), AudioCodesUA.instance.listeners.callIncomingReinvite(s, !1, null);
                            });
                    }),
                    i.js_session.on("hold", function (e) {
                        let s = this.data.ac_session,
                            i = "remote" === e.originator;
                        AudioCodesUA.ac_log(`AC>>: callHoldStateChanged isHold=true isRemote=${i} session:`, s), AudioCodesUA.instance.listeners.callHoldStateChanged(s, !0, i);
                    }),
                    i.js_session.on("unhold", function (e) {
                        let s = this.data.ac_session,
                            i = "remote" === e.originator;
                        AudioCodesUA.ac_log(`AC>>: callHoldStateChanged isHold=false isRemote=${i} session:`, s), AudioCodesUA.instance.listeners.callHoldStateChanged(s, !1, i);
                    }),
                    i.js_session.on("progress", function (e) {
                        if ("remote" === e.originator) {
                            let s = this.data.ac_session;
                            AudioCodesUA.ac_log("AC>>: outgoingCallProgress", s), AudioCodesUA.instance.listeners.outgoingCallProgress(s, e.response);
                        }
                    }),
                    i.js_session.on("failed", function (e) {
                        let s = this.data.ac_session,
                            i = null;
                        if ("Redirected" === e.cause && e.message && e.message.headers) {
                            let s = e.message.parseHeader("Contact");
                            s && (i = s.uri.toString());
                        }
                        AudioCodesUA.ac_log("AC>>: callTerminated (failed)", s, e.cause, i), AudioCodesUA.instance.listeners.callTerminated(s, e.message, e.cause, i);
                    }),
                    i.js_session.on("accepted", function (e) {
                        let s = this.data.ac_session;
                        (s.data._accepted = !0), "remote" === e.originator && (s.data._ok_response = e.response);
                    }),
                    "remote" === e.originator && null !== AudioCodesUA.instance.replacedCall && i.js_session.removeAllListeners("confirmed"),
                    i.js_session.on("confirmed", function () {
                        let e,
                            s = this.data.ac_session,
                            t = null;
                        "_ok_response" in s.data ? ((t = s.data._ok_response), delete s.data._ok_response, (e = "ACK sent")) : (e = "ACK received"),
                            i.data._video_call_audio_answer_firefox &&
                                ((i.data._video_call_audio_answer_firefox = !1), AudioCodesUA.ac_log("AC: [video call/audio answer] Firefox workaround. Send re-INVITE"), i.sendReInvite({ showStreams: !0 })),
                            AudioCodesUA.ac_log("AC>>: callConfirmed", s, e),
                            AudioCodesUA.instance._onActiveCallsChange.call(AudioCodesUA.instance, 1),
                            AudioCodesUA.instance.listeners.callConfirmed(s, t, e);
                    }),
                    i.js_session.on("ended", function (e) {
                        let s = this.data.ac_session;
                        s.data._screenSharing && s._onEndedScreenSharing.call(s, "call terminated"),
                            AudioCodesUA.ac_log("AC>>: callTerminated (ended)", s, e.cause),
                            AudioCodesUA.instance._onActiveCallsChange.call(AudioCodesUA.instance, -1),
                            AudioCodesUA.instance.listeners.callTerminated(s, e.message, e.cause);
                    }),
                    i.js_session.on("refer", function (e) {
                        if (AudioCodesUA.instance.listeners.transfereeCreatedCall) {
                            let s,
                                i = this.data.ac_session;
                            if ((s = !AudioCodesUA.instance.listeners.transfereeRefer || AudioCodesUA.instance.listeners.transfereeRefer(i, e.request))) {
                                let s;
                                AudioCodesUA.ac_log("AC>>: incoming REFER accepted"), (s = i.isScreenSharing() ? i.doesScreenSharingReplaceCamera() : i.hasSendVideo());
                                let t = AudioCodesUA.instance._callOptions(s, !0);
                                e.accept((e) => {
                                    e.data._created_by_refer = i;
                                }, t);
                            } else AudioCodesUA.ac_log("AC>>: incoming REFER rejected"), e.reject();
                        } else AudioCodesUA.ac_log("AC>>: incoming REFER rejected, because transfereeCreatedCall is not set"), e.reject();
                    }),
                    i._setEnabledReceiveVideo(AudioCodesUA.instance.enableAddVideo),
                    i.js_session.connection
                        ? (AudioCodesUA.instance._set_connection_listener(i), AudioCodesUA.ac_log('AC: connection exists, set "track" listener'))
                        : (AudioCodesUA.ac_log("AC: peer connection does not exist, wait creation"),
                          i.js_session.on("peerconnection", () => {
                              AudioCodesUA.instance._set_connection_listener(i), AudioCodesUA.ac_log('AC: [event connection] connection created, set "track" listener');
                          })),
                    (s = "remote" === e.originator ? e.request.from : e.request.to),
                    (i.data._user = s.uri.user),
                    (i.data._host = s.uri.host),
                    (i.data._display_name = s.display_name),
                    (i.data._create_time = new Date()),
                    "remote" === e.originator)
                ) {
                    let s,
                        t,
                        o,
                        n = null;
                    if ((null !== AudioCodesUA.instance.replacedCall && ((n = AudioCodesUA.instance.replacedCall), (AudioCodesUA.instance.replacedCall = null)), e.request.body)) {
                        o = !0;
                        let i = new AudioCodesSDP(e.request.body);
                        [s, t] = i.getMediaDirection("video", !0);
                    } else (o = !1), (s = t = !0), AudioCodesUA.ac_log("AC: warning incoming INVITE without SDP");
                    i._setVideoState(s, t),
                        AudioCodesUA.ac_log(`AC>>: incomingCall ${i.hasVideo() ? "video" : "audio"} from "${i.data._display_name}" ${i.data._user}`, i, n),
                        AudioCodesUA.instance.listeners.incomingCall(i, e.request, n, o);
                } else i.js_session.data._created_by_refer ? (AudioCodesUA.ac_log("AC>>: outgoing call created by REFER"), (i.data._created_by_refer = i.js_session.data._created_by_refer), AudioCodesUA.instance.listeners.transfereeCreatedCall(i)) : AudioCodesUA.ac_log("AC>>: outgoing call created by phone.call()");
            });
    }
    _get_from(e) {
        return { user: e.from.uri.user, host: e.from.uri.host, displayName: e.from.display_name ? e.from.display_name : null };
    }
    _get_content_type(e) {
        let s = e.headers["Content-Type"];
        return s && s.length > 0 ? s[0].parsed : null;
    }
    _set_connection_listener(e) {
        AudioCodesUA.instance.getWR().connection.addEventListener(e.js_session.connection, "track", (s) => {
            if ((AudioCodesUA.ac_log('AC>>: "track"  event kind: ' + s.track.kind, s), s.streams.length > 0)) {
                let i = s.streams[0];
                AudioCodesUA.ac_log("AC: set call remote stream: " + i.id, e), (e.data._remoteMediaStream = i);
            } else AudioCodesUA.ac_log('AC: Warning "track" event without stream');
            if ("video" === s.track.kind) {
                if (!e.hasEnabledReceiveVideo()) {
                    e.data._video_call_audio_answer_safari &&
                        ((s.track.onmute = () => {
                            AudioCodesUA.ac_log('AC: [video call/audio answer] Safari fix. Fired video track "mute" event.  Call callShowStream'), (s.track.onmute = null);
                            let i = e.getRTCLocalStream(),
                                t = e.getRTCRemoteStream();
                            AudioCodesUA.ac_log("AC>>: callShowStreams", e, i, t), AudioCodesUA.instance.listeners.callShowStreams(e, i, t);
                        }),
                        AudioCodesUA.ac_log('AC: [video call/audio answer] Safari fix. Set video track "mute" event listener'),
                        (e.data._video_call_audio_answer_safari = !1)),
                        AudioCodesUA.ac_log('AC>>: event "track" video and !hasEnabledReceiveVideo therefore change transceiver direction.', e);
                    let i = AudioCodesUA.instance.getWR().connection.getTransceiver(e.js_session.connection, "video");
                    if (null !== i) {
                        let s = e.hasEnabledSendVideo() ? "sendonly" : "inactive";
                        AudioCodesUA.instance.getWR().transceiver.setDirection(i, s);
                    }
                }
                return;
            }
            let i = e.getRTCLocalStream(),
                t = e.getRTCRemoteStream();
            AudioCodesUA.ac_log("AC>>: callShowStreams", e, i, t), AudioCodesUA.instance.listeners.callShowStreams(e, i, t);
        });
    }
    _sdp_checking(e, s) {
        let i,
            t,
            o,
            n = s.originator + " " + s.type,
            r = e.data.ac_session;
        try {
            (i = new AudioCodesSDP(s.sdp)), ([t, o] = i.getMediaDirection("video", "remote" === s.originator));
        } catch (s) {
            return void AudioCodesUA.ac_log("AC: cannot parse SDP", s);
        }
        let a = r.data._initial;
        switch (("answer" === s.type && (r.data._initial = !1), AudioCodesUA.ac_log(`AC: Event "sdp" ${a ? "initial" : ""} ${n}   Session state:${AudioCodesUA.getSessionStatusName(e._status)}`), n)) {
            case "remote offer":
                break;
            case "remote answer":
                if (r.isLocalHold() || r.isRemoteHold()) break;
                r._setVideoState(t, o);
                break;
            case "local offer":
                AudioCodesUA.instance.networkPriority && AudioCodesUA.instance._set_senders_dscp(e);
                break;
            case "local answer":
                if (r.isLocalHold() || r.isRemoteHold()) break;
                AudioCodesUA.instance.networkPriority && AudioCodesUA.instance._set_senders_dscp(e), r._setVideoState(t, o);
        }
    }
    _set_senders_dscp(e) {
        if ("chrome" !== AudioCodesUA.instance.browser) return;
        AudioCodesUA.ac_log("AC: _set_senders_dscp()");
        let s = AudioCodesUA.instance.networkPriority;
        AudioCodesUA.instance._set_dscp(e, "audio", s), AudioCodesUA.instance._set_dscp(e, "video", s);
    }
    _set_dscp(e, s, i) {
        let t = e.connection,
            o = AudioCodesUA.instance.getWR().connection.getTransceiver(t, s);
        return o || "video" !== s
            ? Promise.resolve()
                  .then(() => {
                      let e = o.sender.getParameters();
                      if (!e) throw "getParameters returns undefined";
                      let t = e.encodings;
                      if (!t) throw "encodings is undefined";
                      if (0 === t.length) throw "encodings is empty array";
                      let n = t[0].networkPriority;
                      if (!n) throw "networkPriority is undefined";
                      return n === i || ((t[0].networkPriority = i), o.sender.setParameters(e).then(() => (AudioCodesUA.ac_log(`AC: DSCP: ${s} "${i}"`), !0)));
                  })
                  .catch((e) => (AudioCodesUA.ac_log(`AC: DSCP: ${s} error: ${e}`), !1))
            : Promise.resolve(!1);
    }
    _convertIceList(e) {
        let s = [];
        for (let i of e) "string" == typeof i && (i = { urls: "stun:" + i }), s.push(i);
        return s;
    }
    _randomToken(e) {
        let s = "";
        for (let i = 0; i < e; i++) s += Math.floor(36 * Math.random()).toString(36);
        return s;
    }
    _detectBrowser() {
        try {
            let e = navigator.userAgent;
            if (((this.browser = "other"), (this.browserName = e), (this.browserVersion = 0), navigator.mozGetUserMedia))
                (this.browser = "firefox"), (this.browserName = e.match(/Firefox\/([.\d]+)$/)[0]), (this.browserVersion = parseInt(e.match(/Firefox\/(\d+)\./)[1], 10));
            else if (navigator.webkitGetUserMedia) {
                (this.browser = "chrome"), (this.browserName = e.match(/Chrom(e|ium)\/([.\d]+)/)[0]), (this.browserVersion = parseInt(e.match(/Chrom(e|ium)\/(\d+)\./)[2], 10));
                let s = e.toLowerCase();
                for (let e = 0; e < this.chromiumBased.length; e++) {
                    let i = this.chromiumBased[e].s,
                        t = s.indexOf(i);
                    if (-1 !== t) {
                        let o = s.substring(t + i.length).match(/([.\d]+)/)[1];
                        this.browserName += " (" + this.chromiumBased[e].n + "/" + o + ")";
                        break;
                    }
                }
            } else
                window.safari
                    ? ((this.browser = "safari"), (this.browserName = "Safari/" + e.match(/Version\/([.\d]+)/)[1]), (this.browserVersion = parseInt(e.match(/Version\/(\d+)\./)[1], 10)))
                    : -1 !== e.indexOf("Edge/") && ((this.browser = "other"), (this.browserName = e.match(/Edge\/([.\d]+)/)[0]), (this.browserVersion = parseInt(e.match(/Edge\/(\d+).(\d+)$/)[2], 10)));
            /iPad|iPhone|iPod/.test(e) && ((this.browser = "ios_safari"), (this.browserName = e), (this.browserVersion = parseInt(e.match(/Version\/(\d+)\./)[1], 10)));
        } catch (e) {
            AudioCodesUA.ac_log("AC: Browser detection error", e), (this.browser = "other"), (this.browserName = navigator.userAgent), (this.browserVersion = 0);
        }
    }
    _callOptions(e, s, i = null, t = null) {
        let o = {};
        if ("chrome" === this.browser && this.networkPriority) {
            const e = { rtcConstraints: { optional: [{ googDscp: !0 }] } };
            Object.assign(o, e);
        }
        return (
            null !== t && Object.assign(o, t),
            (o.mediaConstraints = { audio: this.constraints[this.browser].audio }),
            e && (o.mediaConstraints.video = this.constraints[this.browser].video),
            void 0 === o.pcConfig && (o.pcConfig = {}),
            (o.pcConfig.iceServers = this.serverConfig.iceServers),
            null !== i && (i = i.slice()),
            null !== this.oauthToken && this.oauthTokenUseInInvite && s && (null === i && (i = []), i.push("Authorization: Bearer " + this.oauthToken)),
            null !== i && (o.extraHeaders = i),
            o
        );
    }
    call(e, s, i = null, t = null) {
        if ((!1 === e ? (e = AudioCodesUA.instance.AUDIO) : !0 === e && (e = AudioCodesUA.instance.VIDEO), "symbol" != typeof e || ![AudioCodesUA.instance.AUDIO, AudioCodesUA.instance.VIDEO].includes(e)))
            throw "Illegal videoOption=" + e.toString();
        AudioCodesUA.ac_log(`AC: call ${e.description} to ${s}`);
        let o = this._callOptions(e === AudioCodesUA.instance.VIDEO, !0, i, t),
            n = this.jssipUA.call(s, o);
        o.mediaStream && (n._localMediaStreamLocallyGenerated = !0);
        let r = n.data.ac_session;
        return r._setEnabledSendVideo(e === AudioCodesUA.instance.VIDEO), e === AudioCodesUA.instance.VIDEO && r._setEnabledReceiveVideo(!0), r;
    }
    sendMessage(e, s, i = "text/plain") {
        return (
            AudioCodesUA.ac_log(`AC: sendMessage to: ${e} "${s}"`),
            new Promise((t, o) => {
                let n = { contentType: i, eventHandlers: { succeeded: (e) => t(e), failed: (e) => o(e) } };
                this.jssipUA.sendMessage(e, s, n);
            })
        );
    }
    isScreenSharingSupported() {
        return AudioCodesUA.instance.getWR().hasDisplayMedia();
    }
    openScreenSharing() {
        return this.isScreenSharingSupported()
            ? (AudioCodesUA.ac_log("AC: openScreenSharing()"),
              AudioCodesUA.instance
                  .getWR()
                  .getDisplayMedia()
                  .then((e) => e)
                  .catch((e) => {
                      throw (AudioCodesUA.ac_log("AC: openScreenSharing() error", e), e);
                  }))
            : (AudioCodesUA.ac_log("AC: openScreenSharing: screen sharing is not supported in the browser"), Promise.reject("Screen sharing is not supported"));
    }
    closeScreenSharing(e) {
        if ((AudioCodesUA.ac_log("AC: closeScreenSharing()"), e)) {
            let s = e.getVideoTracks();
            if (0 == s.length) return;
            let i = s[0];
            "live" === i.readyState && (i.stop(), i.dispatchEvent(new Event("ended")));
        }
    }
    setNetworkPriority(e) {
        if ((AudioCodesUA.ac_log("AC: setNetworkPriority=" + e), void 0 !== e && "high" !== e && "medium" !== e && "low" !== e && "very-low" !== e)) throw "setNetworkPriority: illegal value";
        this.networkPriority = e;
    }
}
class AudioCodesSession {
    constructor(e) {
        (this.js_session = e),
            (this.data = { _user: null, _display_name: null, _create_time: null, _initial: !0, _remoteMediaStream: null, _wasUsedSendVideo: !1, _screenSharing: null, _video: { send: !1, receive: !1, enabledSend: !1, enabledReceive: !1 } }),
            (e.data.ac_session = this);
    }
    getRTCPeerConnection() {
        return this.js_session.connection;
    }
    getRTCLocalStream() {
        return this.js_session._localMediaStream;
    }
    getRTCRemoteStream() {
        return this.data._remoteMediaStream;
    }
    isEstablished() {
        return this.js_session.isEstablished();
    }
    isTerminated() {
        return this.js_session.isEnded();
    }
    isOutgoing() {
        return "outgoing" === this.js_session.direction;
    }
    isAudioMuted() {
        return this.js_session.isMuted().audio;
    }
    isVideoMuted() {
        return this.js_session.isMuted().video;
    }
    wasAccepted() {
        return !0 === this.data._accepted;
    }
    getReplacesHeader() {
        if (!this.js_session.isEstablished() || !this.js_session._dialog) return AudioCodesUA.ac_log("getReplacesHeader(): call is not established"), null;
        let e = this.js_session._dialog.id;
        return `${e.call_id};to-tag=${e.remote_tag};from-tag=${e.local_tag}`;
    }
    muteAudio(e) {
        AudioCodesUA.ac_log(`AC: muteAudio() arg=${e} `), e ? this.js_session.mute({ audio: !0, video: !1 }) : this.js_session.unmute({ audio: !0, video: !1 });
    }
    muteVideo(e) {
        AudioCodesUA.ac_log(`AC: muteVideo() arg=${e} `), e ? this.js_session.mute({ audio: !1, video: !0 }) : this.js_session.unmute({ audio: !1, video: !0 });
    }
    sendDTMF(e) {
        let s = AudioCodesUA.instance.dtmfUseWebRTC;
        if (s && ["safari", "ios_safari"].includes(AudioCodesUA.instance.browser)) {
            void 0 === AudioCodesUA.instance.getWR().connection.getDTMFSender(this.js_session.connection) && (s = !1);
        }
        AudioCodesUA.ac_log(`AC: sendDTMF() tone=${e} ${s ? "[RFC2833]" : "[INFO]"}`);
        let i = { duration: AudioCodesUA.instance.dtmfDuration, interToneGap: AudioCodesUA.instance.dtmfInterToneGap, transportType: s ? "RFC2833" : "INFO" };
        this.js_session.sendDTMF(e, i);
    }
    sendInfo(e, s, i = null) {
        AudioCodesUA.ac_log("AC: sendInfo()", e, s, i);
        let t = null !== i ? { extraHeaders: i } : void 0;
        this.js_session.sendInfo(s, e, t);
    }
    duration() {
        let e = this.js_session.start_time;
        if (!e) return 0;
        let s = this.js_session.end_time;
        return s || (s = new Date()), Math.floor((s.getTime() - e.getTime()) / 1e3);
    }
    hasSendVideo() {
        return this.data._video.send;
    }
    hasReceiveVideo() {
        return this.data._video.receive;
    }
    hasVideo() {
        return this.hasSendVideo() && this.hasReceiveVideo();
    }
    getVideoState() {
        return this.hasSendVideo() && this.hasReceiveVideo() ? "sendrecv" : this.hasSendVideo() ? "sendonly" : this.hasReceiveVideo() ? "recvonly" : "inactive";
    }
    _setVideoState(e, s) {
        AudioCodesUA.ac_log(`AC: _setVideoState(send=${e}, receive=${s})`), (this.data._video.send = e), (this.data._video.receive = s);
    }
    hasEnabledSendVideo() {
        return this.data._video.enabledSend;
    }
    hasEnabledReceiveVideo() {
        return this.data._video.enabledReceive;
    }
    getEnabledVideoState() {
        return this.hasEnabledSendVideo() && this.hasEnabledReceiveVideo() ? "sendrecv" : this.hasEnabledSendVideo() ? "sendonly" : this.hasEnabledReceiveVideo() ? "recvonly" : "inactive";
    }
    _setEnabledSendVideo(e) {
        AudioCodesUA.ac_log(`AC: _setEnabledSendVideo(${e})`), (this.data._video.enabledSend = e);
    }
    _setEnabledReceiveVideo(e) {
        AudioCodesUA.ac_log(`AC: _setEnabledReceiveVideo(${e})`), (this.data._video.enabledReceive = e);
    }
    answer(e, s = null, i = null) {
        if (this.data._answer_called) return void AudioCodesUA.ac_log("AC: answer() is already called. [Ignored]");
        if (
            ((this.data._answer_called = !0),
            !1 === e ? (e = AudioCodesUA.instance.AUDIO) : !0 === e && (e = AudioCodesUA.instance.VIDEO),
            "symbol" != typeof e || ![AudioCodesUA.instance.AUDIO, AudioCodesUA.instance.RECVONLY_VIDEO, AudioCodesUA.instance.VIDEO].includes(e))
        )
            throw "Illegal videoOption=" + e.toString();
        if (
            (AudioCodesUA.ac_log(`AC: ${e.description} answer`),
            this.hasVideo() ||
                (e !== AudioCodesUA.instance.RECVONLY_VIDEO && e !== AudioCodesUA.instance.VIDEO) ||
                (AudioCodesUA.ac_log('AC: incoming INVITE without video, so answer can be only "audio"'), (e = AudioCodesUA.instance.AUDIO)),
            this.hasVideo() && e === AudioCodesUA.instance.AUDIO)
        ) {
            let e = AudioCodesUA.instance,
                s = e.browser,
                i = e.modes,
                t = e.browserVersion;
            "firefox" === s && i.video_call_audio_answer_firefox_fix
                ? (this.data._video_call_audio_answer_firefox = !0)
                : ("safari" !== s && "ios_safari" !== s) || (((!0 === i.video_call_audio_answer_safari_fix && t < 14) || "force" === i.video_call_audio_answer_safari_fix) && (this.data._video_call_audio_answer_safari = !0));
        }
        switch (e) {
            case AudioCodesUA.instance.AUDIO:
                this._setEnabledSendVideo(!1), this._setEnabledReceiveVideo(!this.hasVideo() && AudioCodesUA.instance.enableAddVideo), this._setVideoState(!1, !1);
                break;
            case AudioCodesUA.instance.VIDEO:
                this._setEnabledSendVideo(!0), this._setEnabledReceiveVideo(!0), this._setVideoState(!0, !0);
                break;
            case AudioCodesUA.instance.RECVONLY_VIDEO:
                this._setEnabledSendVideo(!1), this._setEnabledReceiveVideo(!0), this._setVideoState(!1, !0);
        }
        let t = AudioCodesUA.instance._callOptions(e === AudioCodesUA.instance.VIDEO, !1, s, i);
        Promise.resolve()
            .then(() => (t.mediaStream ? t.mediaStream : AudioCodesUA.instance.getWR().getUserMedia(t.mediaConstraints)))
            .then((e) => {
                (t.mediaStream = e), (this.js_session._localMediaStreamLocallyGenerated = !0), AudioCodesUA.ac_log("AC: answer options:", t), this.js_session.answer(t);
            })
            .catch((e) => {
                AudioCodesUA.ac_log("AC: getUserMedia failure", e), this.reject(488);
            });
    }
    reject(e = 486, s = null) {
        AudioCodesUA.ac_log("AC: reject()");
        try {
            let i = { status_code: e };
            s && (i.extraHeaders = s), this.js_session.terminate(i);
        } catch (e) {
            AudioCodesUA.ac_log("AC: call reject error:", e);
        }
    }
    terminate() {
        AudioCodesUA.ac_log("AC: terminate()");
        try {
            this.js_session.terminate();
        } catch (e) {
            AudioCodesUA.ac_log("AC: call terminate error:", e);
        }
    }
    redirect(e, s = 302, i = null) {
        AudioCodesUA.ac_log("AC: redirect() callTo=%s", e);
        try {
            let t = { status_code: s, extraHeaders: ["Contact: " + AudioCodesUA.instance.jssipUA.normalizeTarget(e)] };
            i && t.extraHeaders.push(...i), this.js_session.terminate(t);
        } catch (e) {
            AudioCodesUA.ac_log("AC: call redirect error:", e);
        }
    }
    isLocalHold() {
        return this.js_session.isOnHold().local;
    }
    isRemoteHold() {
        return this.js_session.isOnHold().remote;
    }
    isReadyToReOffer() {
        return this.js_session._isReadyToReOffer();
    }
    hold(e) {
        return (
            AudioCodesUA.ac_log(`AC: hold(${e})`),
            new Promise((s, i) => {
                (e ? this.js_session.hold : this.js_session.unhold).call(this.js_session, {}, () => {
                    AudioCodesUA.ac_log("AC: hold()/unhold() is completed"), s();
                }) || (AudioCodesUA.ac_log("AC: hold()/unhold() failed"), i());
            })
        );
    }
    enableReceiveVideo(e) {
        this._setEnabledReceiveVideo(e);
        let s = this.getRTCPeerConnection(),
            i = AudioCodesUA.instance.getWR().connection.getTransceiver(s, "video");
        if (null !== i) {
            let e = this.getEnabledVideoState();
            AudioCodesUA.instance.getWR().transceiver.setDirection(i, e);
        }
        return AudioCodesUA.ac_log(`AC: enableReceiveVideo(${e}) ${null !== i ? "" : "No video transceiver"}`), null !== i;
    }
    startSendingVideo(e = {}) {
        let s = e && !1 !== e.enabledReceiveVideo;
        return this.hasEnabledSendVideo()
            ? (AudioCodesUA.ac_log("AC: startSendingVideo(). Already started"), Promise.reject("video already started"))
            : (AudioCodesUA.ac_log("AC: startSendingVideo()"),
              AudioCodesUA.instance
                  .getWR()
                  .getUserMedia({ video: !0 })
                  .catch((e) => {
                      throw (AudioCodesUA.ac_log("AC: startSendingVideo() getUserMedia failure", e), e);
                  })
                  .then((e) => {
                      let i = e.getVideoTracks()[0];
                      this.getRTCLocalStream().addTrack(i), this._setEnabledSendVideo(!0), this._setEnabledReceiveVideo(s);
                      let t = this.data._wasUsedSendVideo;
                      return AudioCodesUA.instance
                          .getWR()
                          .connection.addVideo(this.getRTCPeerConnection(), this.getRTCLocalStream(), i, this.hasEnabledReceiveVideo(), t)
                          .catch((e) => {
                              throw (AudioCodesUA.ac_log("AC: startSendingVideo(). Adding video error", e), e);
                          });
                  })
                  .then(() => this._renegotiate(e)));
    }
    stopSendingVideo(e = {}) {
        return this.hasEnabledSendVideo()
            ? (AudioCodesUA.ac_log("AC: stopSendingVideo()"),
              AudioCodesUA.instance
                  .getWR()
                  .connection.removeVideo(this.getRTCPeerConnection(), this.getRTCLocalStream())
                  .catch((e) => {
                      throw (AudioCodesUA.ac_log("AC: stopSendingVideo(). Remove video error", e), e);
                  })
                  .then(() => (this._setEnabledSendVideo(!1), (this.data._wasUsedSendVideo = !0), this._renegotiate(e))))
            : (AudioCodesUA.ac_log("AC: stopSendingVideo(). Already stopped"), Promise.reject("video already stopped"));
    }
    _doRenegotiate(e) {
        return this.js_session.isEnded()
            ? Promise.reject("call is ended")
            : new Promise((s) => {
                  if (!this.js_session.renegotiate(e, () => s(!0))) return s(!1);
              });
    }
    _renegotiate(e, s = 30, i = 500) {
        return (
            AudioCodesUA.ac_log(`AC: _renegotiate() attemptsLeft=${s}`),
            this._doRenegotiate(e)
                .then((t) => {
                    if (t) return AudioCodesUA.ac_log("AC: Renegotiation success"), !0;
                    if (s <= 1) throw "Too many attempts";
                    return new Promise((e) => setTimeout(e, i)).then(() => this._renegotiate(e, s - 1, i));
                })
                .catch((e) => {
                    throw (AudioCodesUA.ac_log("AC: Renegotiation failed", e), e);
                })
        );
    }
    sendReInvite(e = {}) {
        return (
            AudioCodesUA.ac_log("AC: sendReInvite()"),
            this._renegotiate(e).then(() => {
                if (e.showStreams) {
                    let e = this.getRTCLocalStream(),
                        s = this.getRTCRemoteStream();
                    AudioCodesUA.ac_log("AC>>: [after send re-INVITE] callShowStreams", this, e, s), AudioCodesUA.instance.listeners.callShowStreams(this, e, s);
                }
            })
        );
    }
    startScreenSharing(e, s = { localScreenSharing: !0, enabledReceiveVideo: !0, separateVideo: !1 }) {
        if ((AudioCodesUA.ac_log("AC: startScreenSharing"), !e)) return Promise.reject("missed stream argument");
        if (this.data._screenSharing) return Promise.reject("the call is already using screen-sharing");
        let i = s && !1 !== s.enabledReceiveVideo,
            t = e.getVideoTracks()[0],
            o = void 0;
        s.localScreenSharing && ((o = this._onEndedScreenSharingTrack.bind(this)), t.addEventListener("ended", o)), (this.data._screenSharing = { stream: e, onended: o, hadSendVideo: this.hasSendVideo() });
        let n = this.data._wasUsedSendVideo;
        return (
            this._setEnabledSendVideo(!0),
            this._setEnabledReceiveVideo(i),
            AudioCodesUA.instance
                .getWR()
                .connection.addVideo(this.getRTCPeerConnection(), this.getRTCLocalStream(), t, this.hasEnabledReceiveVideo(), n)
                .catch((e) => {
                    throw (AudioCodesUA.ac_log("AC: startScreenSharing() error", e), (this.data._screenSharing = null), e);
                })
                .then(() => {
                    return this._renegotiate({ extraHeaders: ["X-Screen-Sharing: on"] });
                })
        );
    }
    stopScreenSharing() {
        return AudioCodesUA.ac_log("AC: stopScreenSharing"), this.data._screenSharing ? this._onEndedScreenSharing("called stopScreenSharing()") : Promise.reject("the call does not use screen-sharing");
    }
    isScreenSharing() {
        return !!this.data._screenSharing;
    }
    doesScreenSharingReplaceCamera() {
        let e = this.data._screenSharing;
        return e && e.hadSendVideo;
    }
    _onEndedScreenSharingTrack() {
        return this._onEndedScreenSharing("track ended");
    }
    _onEndedScreenSharing(e) {
        let s = this.data._screenSharing;
        this.data._screenSharing = null;
        let i = s.stream,
            t = s.onended;
        if (i && t) {
            i.getVideoTracks()[0].removeEventListener("ended", t);
        }
        return Promise.resolve()
            .then(() => {
                if (!this.isTerminated()) {
                    let e = this.getRTCPeerConnection(),
                        i = this.getRTCLocalStream(),
                        t = { extraHeaders: ["X-Screen-Sharing: off"] };
                    return s.hadSendVideo
                        ? (AudioCodesUA.ac_log("AC: screen sharing stopped - restore previously sending video track"), AudioCodesUA.instance.getWR().connection.replaceSenderTrack(e, "video", i), this._renegotiate(t))
                        : (AudioCodesUA.ac_log("AC: screen sharing stopped - stop send video"), this.stopSendingVideo(t));
                }
            })
            .then(() => {
                AudioCodesUA.instance.listeners.callScreenSharingEnded && (AudioCodesUA.ac_log(`AC>>: callScreenSharingEnded "${e}"`, this, i), AudioCodesUA.instance.listeners.callScreenSharingEnded(this, i));
            });
    }
    setRemoteHoldState() {
        this.js_session._remoteHold = !0;
    }
    sendRefer(e, s = null) {
        if (!AudioCodesUA.instance.listeners.transferorNotification) throw "transferorNotification missed in phone.setListeners()";
        let i = this,
            t = {
                eventHandlers: {
                    requestSucceeded() {
                        AudioCodesUA.ac_log("AC>>: transferorNotification progress [REFER accepted]"), AudioCodesUA.instance.listeners.transferorNotification(i, 0);
                    },
                    requestFailed() {
                        AudioCodesUA.ac_log("AC>>: transferorNotification failed [REFER failed]"), AudioCodesUA.instance.listeners.transferorNotification(i, -1);
                    },
                    trying() {
                        AudioCodesUA.ac_log("AC>>: transferorNotification progress [NOTIFY 1xx]"), AudioCodesUA.instance.listeners.transferorNotification(i, 0);
                    },
                    progress() {
                        AudioCodesUA.ac_log("AC>>: transferorNotification progress [NOTIFY 1xx]"), AudioCodesUA.instance.listeners.transferorNotification(i, 0);
                    },
                    accepted() {
                        AudioCodesUA.ac_log("AC>>: transferorNotification success [NOTIFY 2xx]"), AudioCodesUA.instance.listeners.transferorNotification(i, 1);
                    },
                    failed() {
                        AudioCodesUA.ac_log("AC>>: transferorNotification failed [NOTIFY >= 300]"), AudioCodesUA.instance.listeners.transferorNotification(i, -1);
                    },
                },
            };
        null !== s && (t.replaces = s.js_session), this.js_session.refer(e, t);
    }
}
class AudioCodesSDP {
    constructor(e) {
        (this.start = []), (this.media = []);
        let s = e
                .split("\n")
                .map((e) => e.trim())
                .filter((e) => e.length > 0),
            i = this.start;
        for (let e of s) e.startsWith("m=") && ((i = []), this.media.push(i)), i.push(e);
    }
    getMedia(e) {
        for (let s of this.media) if (s.length > 0 && s[0].startsWith("m=" + e)) return s;
        return null;
    }
    checkSendRecv(e) {
        switch (e) {
            case "a=sendrecv":
                return "sendrecv";
            case "a=sendonly":
                return "sendonly";
            case "a=recvonly":
                return "recvonly";
            case "a=inactive":
                return "inactive";
            default:
                return null;
        }
    }
    getMediaDirectionValue(e) {
        let s,
            i = this.getMedia(e);
        if (null === i) return null;
        let t = "sendrecv";
        for (let e of this.start)
            if (null !== (s = this.checkSendRecv(e))) {
                t = s;
                break;
            }
        for (let e of i)
            if (null !== (s = this.checkSendRecv(e))) {
                t = s;
                break;
            }
        return t;
    }
    getMediaDirection(e, s) {
        let i = this.getMediaDirectionValue(e);
        switch (i) {
            case "sendrecv":
                return [!0, !0, i];
            case "sendonly":
                return s ? [!1, !0, i] : [!0, !1, i];
            case "recvonly":
                return s ? [!0, !1, i] : [!1, !0, i];
            case null:
            case "inactive":
                return [!1, !1, i];
        }
    }
    toString() {
        let e = this.start;
        for (let s of this.media) e = e.concat(s);
        return e.join("\r\n") + "\r\n";
    }
}
let AudioCodesWebRTCWrapper = {
    getUserMedia: (e) => (AudioCodesUA.ac_log("[webrtc] getUserMedia constraints", e), navigator.mediaDevices.getUserMedia(e)),
    hasDisplayMedia: () => navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia,
    getDisplayMedia: () => (AudioCodesUA.ac_log("[webrtc] getDisplayMedia"), navigator.mediaDevices.getDisplayMedia({ video: !0 })),
    checkAvailableDevices() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return Promise.reject("WebRTC is not supported");
        let e = !1,
            s = !1,
            i = !1;
        return navigator.mediaDevices.enumerateDevices().then(
            (t) => (
                t.forEach(function (t) {
                    switch (t.kind) {
                        case "videoinput":
                            e = !0;
                            break;
                        case "audioinput":
                            s = !0;
                            break;
                        case "audiooutput":
                            i = !0;
                    }
                }),
                void 0 === navigator.webkitGetUserMedia && (i = !0),
                i ? (s ? Promise.resolve(e) : Promise.reject("Missing a microphone! Please connect one and reload")) : Promise.reject("Missing a speaker! Please connect one and reload")
            )
        );
    },
    transceiver: {
        setDirection(e, s) {
            let i = "";
            null !== e.sender.track ? (i = e.sender.track.kind) : null !== e.receiver.track && (i = e.receiver.track.kind), AudioCodesUA.ac_log(`[webrtc] set ${i} transceiver direction=${s}`), (e.direction = s);
        },
    },
    stream: {
        getInfo(e) {
            function s(e) {
                return e.length > 0 ? e[0].enabled.toString() : "-";
            }
            return null === e ? Promise.resolve("stream is null") : Promise.resolve(`audio: ${s(e.getAudioTracks())} video: ${s(e.getVideoTracks())}`);
        },
    },
    connection: {
        getTransceiversInfo(e) {
            function s(e) {
                return null === e ? "none" : `d=${e.direction} c=${e.currentDirection}`;
            }
            let i = e.getTransceivers(),
                t = AudioCodesUA.instance.getWR().connection.getTransceiver(e, "audio"),
                o = AudioCodesUA.instance.getWR().connection.getTransceiver(e, "video");
            return Promise.resolve(`(${i.length}) audio ${s(t)} video ${s(o)}`);
        },
        getTransceiver(e, s) {
            for (let i of e.getTransceivers()) {
                if (null !== i.sender && null !== i.sender.track && i.sender.track.kind === s) return i;
                if (null !== i.receiver && null !== i.receiver.track && i.receiver.track.kind === s) return i;
            }
            return null;
        },
        addEventListener: (e, s, i) => (AudioCodesUA.ac_log("[webrtc] Connection addEventListener " + s), "track" !== s ? Promise.reject("Wrong event name: " + s) : (e.addEventListener(s, i), Promise.resolve())),
        getDTMFSender(e) {
            let s = e.getSenders().find((e) => e.track && "audio" === e.track.kind);
            if (s && s.dtmf) return s.dtmf;
        },
        addVideo(e, s, i, t, o) {
            AudioCodesUA.ac_log("[webrtc] Connection addVideo");
            let n = AudioCodesUA.instance.getWR().connection.getTransceiver(e, "video");
            if (null !== n) {
                let e = t ? "sendrecv" : "sendonly";
                AudioCodesUA.instance.getWR().transceiver.setDirection(n, e);
            }
            return null === n || (null === n.sender.track && !o)
                ? (AudioCodesUA.ac_log("[webrtc] addVideo (connection addTrack)"), e.addTrack(i, s), Promise.resolve(!0))
                : (AudioCodesUA.ac_log("[webrtc] addVideo (video transceiver sender replaceTrack)"), n.sender.replaceTrack(i).then(() => !1));
        },
        removeVideo(e, s) {
            AudioCodesUA.ac_log("[webrtc] Connection removeVideo");
            let i = AudioCodesUA.instance.getWR().connection.getTransceiver(e, "video");
            if (null === i) return Promise.reject("no video transceiver found");
            if ((e.removeTrack(i.sender), s)) for (let e of s.getVideoTracks()) s.removeTrack(e), e.stop();
            return Promise.resolve();
        },
        replaceSenderTrack(e, s, i) {
            AudioCodesUA.ac_log("[webrtc] ReplaceSenderTrack " + s);
            let t = null;
            for (let i of e.getSenders())
                if (null !== i.track && i.track.kind === s) {
                    t = i;
                    break;
                }
            if (null === t) return Promise.reject(`No ${s} sender`);
            let o = "audio" === s ? i.getAudioTracks() : i.getVideoTracks();
            return 0 === o.length ? Promise.reject(`No ${s} track`) : t.replaceTrack(o[0]);
        },
        getStats(e, s) {
            let i = "";
            return e.getStats(null).then(
                (e) => (
                    e.forEach((e) => {
                        if (s.includes(e.type)) {
                            i += " {";
                            let s = !0;
                            for (let t of Object.keys(e)) s ? (s = !1) : (i += ","), (i += t + "=" + e[t]);
                            i += "} \r\n";
                        }
                    }),
                    i
                )
            );
        },
    },
};
export {AudioCodesUA};
