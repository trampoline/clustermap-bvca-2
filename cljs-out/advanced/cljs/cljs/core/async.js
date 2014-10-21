// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t63265 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63265 = (function (f,fn_handler,meta63266){
this.f = f;
this.fn_handler = fn_handler;
this.meta63266 = meta63266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63265.cljs$lang$type = true;
cljs.core.async.t63265.cljs$lang$ctorStr = "cljs.core.async/t63265";
cljs.core.async.t63265.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t63265");
});
cljs.core.async.t63265.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t63265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t63265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t63265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63267){var self__ = this;
var _63267__$1 = this;return self__.meta63266;
});
cljs.core.async.t63265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63267,meta63266__$1){var self__ = this;
var _63267__$1 = this;return (new cljs.core.async.t63265(self__.f,self__.fn_handler,meta63266__$1));
});
cljs.core.async.__GT_t63265 = (function __GT_t63265(f__$1,fn_handler__$1,meta63266){return (new cljs.core.async.t63265(f__$1,fn_handler__$1,meta63266));
});
}
return (new cljs.core.async.t63265(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__63269 = buff;if(G__63269)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__63269.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__63269.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__63269);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__63269);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_63286 = (function (){var G__63283 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__63283) : cljs.core.deref.call(null,G__63283));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__63284_63287 = val_63286;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__63284_63287) : fn1.call(null,G__63284_63287));
} else
{cljs.core.async.impl.dispatch.run(((function (val_63286,ret){
return (function (){var G__63285 = val_63286;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__63285) : fn1.call(null,G__63285));
});})(val_63286,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;var G__63296 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__63296) : cljs.core.deref.call(null,G__63296));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__63297 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__63297) : cljs.core.deref.call(null,G__63297));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__63298_63300 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__63298_63300) : fn1.call(null,G__63298_63300));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__63299 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__63299) : fn1.call(null,G__63299));
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4506__auto___63301 = n;var x_63302 = (0);while(true){
if((x_63302 < n__4506__auto___63301))
{(a[x_63302] = (0));
{
var G__63303 = (x_63302 + (1));
x_63302 = G__63303;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__63304 = (i + (1));
i = G__63304;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__63312 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__63312) : cljs.core.atom.call(null,G__63312));
})();if(typeof cljs.core.async.t63313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63313 = (function (flag,alt_flag,meta63314){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta63314 = meta63314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63313.cljs$lang$type = true;
cljs.core.async.t63313.cljs$lang$ctorStr = "cljs.core.async/t63313";
cljs.core.async.t63313.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t63313");
});})(flag))
;
cljs.core.async.t63313.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t63313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__63316 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__63316) : cljs.core.deref.call(null,G__63316));
});})(flag))
;
cljs.core.async.t63313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__63317_63319 = self__.flag;var G__63318_63320 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__63317_63319,G__63318_63320) : cljs.core.reset_BANG_.call(null,G__63317_63319,G__63318_63320));
return true;
});})(flag))
;
cljs.core.async.t63313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_63315){var self__ = this;
var _63315__$1 = this;return self__.meta63314;
});})(flag))
;
cljs.core.async.t63313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_63315,meta63314__$1){var self__ = this;
var _63315__$1 = this;return (new cljs.core.async.t63313(self__.flag,self__.alt_flag,meta63314__$1));
});})(flag))
;
cljs.core.async.__GT_t63313 = ((function (flag){
return (function __GT_t63313(flag__$1,alt_flag__$1,meta63314){return (new cljs.core.async.t63313(flag__$1,alt_flag__$1,meta63314));
});})(flag))
;
}
return (new cljs.core.async.t63313(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t63324 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63324 = (function (cb,flag,alt_handler,meta63325){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta63325 = meta63325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63324.cljs$lang$type = true;
cljs.core.async.t63324.cljs$lang$ctorStr = "cljs.core.async/t63324";
cljs.core.async.t63324.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t63324");
});
cljs.core.async.t63324.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t63324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t63324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t63324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63326){var self__ = this;
var _63326__$1 = this;return self__.meta63325;
});
cljs.core.async.t63324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63326,meta63325__$1){var self__ = this;
var _63326__$1 = this;return (new cljs.core.async.t63324(self__.cb,self__.flag,self__.alt_handler,meta63325__$1));
});
cljs.core.async.__GT_t63324 = (function __GT_t63324(cb__$1,flag__$1,alt_handler__$1,meta63325){return (new cljs.core.async.t63324(cb__$1,flag__$1,alt_handler__$1,meta63325));
});
}
return (new cljs.core.async.t63324(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$1126.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__63334 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__63334) : port.call(null,G__63334));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__63335 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__63335) : port.call(null,G__63335));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63327_SHARP_){var G__63336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63327_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__63336) : fret.call(null,G__63336));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63328_SHARP_){var G__63337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63328_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__63337) : fret.call(null,G__63337));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63338 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__63338) : cljs.core.deref.call(null,G__63338));
})(),(function (){var or__3637__auto__ = wport;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__63339 = (i + (1));
i = G__63339;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3637__auto__ = ret;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$1111))
{var temp__4126__auto__ = (function (){var and__3625__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3625__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3625__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1111.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$1111], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__63340){var map__63342 = p__63340;var map__63342__$1 = ((cljs.core.seq_QMARK_(map__63342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63342):map__63342);var opts = map__63342__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__63340 = null;if (arguments.length > 1) {
  p__63340 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__63340);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__63343){
var ports = cljs.core.first(arglist__63343);
var p__63340 = cljs.core.rest(arglist__63343);
return alts_BANG___delegate(ports,p__63340);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5819__auto___63441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___63441){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___63441){
return (function (state_63417){var state_val_63418 = (state_63417[(1)]);if((state_val_63418 === (7)))
{var inst_63413 = (state_63417[(2)]);var state_63417__$1 = state_63417;var statearr_63419_63442 = state_63417__$1;(statearr_63419_63442[(2)] = inst_63413);
(statearr_63419_63442[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (1)))
{var state_63417__$1 = state_63417;var statearr_63420_63443 = state_63417__$1;(statearr_63420_63443[(2)] = null);
(statearr_63420_63443[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (4)))
{var inst_63396 = (state_63417[(7)]);var inst_63396__$1 = (state_63417[(2)]);var inst_63397 = (inst_63396__$1 == null);var state_63417__$1 = (function (){var statearr_63421 = state_63417;(statearr_63421[(7)] = inst_63396__$1);
return statearr_63421;
})();if(cljs.core.truth_(inst_63397))
{var statearr_63422_63444 = state_63417__$1;(statearr_63422_63444[(1)] = (5));
} else
{var statearr_63423_63445 = state_63417__$1;(statearr_63423_63445[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (13)))
{var state_63417__$1 = state_63417;var statearr_63424_63446 = state_63417__$1;(statearr_63424_63446[(2)] = null);
(statearr_63424_63446[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (6)))
{var inst_63396 = (state_63417[(7)]);var state_63417__$1 = state_63417;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63417__$1,(11),to,inst_63396);
} else
{if((state_val_63418 === (3)))
{var inst_63415 = (state_63417[(2)]);var state_63417__$1 = state_63417;return cljs.core.async.impl.ioc_helpers.return_chan(state_63417__$1,inst_63415);
} else
{if((state_val_63418 === (12)))
{var state_63417__$1 = state_63417;var statearr_63425_63447 = state_63417__$1;(statearr_63425_63447[(2)] = null);
(statearr_63425_63447[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (2)))
{var state_63417__$1 = state_63417;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63417__$1,(4),from);
} else
{if((state_val_63418 === (11)))
{var inst_63406 = (state_63417[(2)]);var state_63417__$1 = state_63417;if(cljs.core.truth_(inst_63406))
{var statearr_63426_63448 = state_63417__$1;(statearr_63426_63448[(1)] = (12));
} else
{var statearr_63427_63449 = state_63417__$1;(statearr_63427_63449[(1)] = (13));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (9)))
{var state_63417__$1 = state_63417;var statearr_63428_63450 = state_63417__$1;(statearr_63428_63450[(2)] = null);
(statearr_63428_63450[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (5)))
{var state_63417__$1 = state_63417;if(cljs.core.truth_(close_QMARK_))
{var statearr_63429_63451 = state_63417__$1;(statearr_63429_63451[(1)] = (8));
} else
{var statearr_63430_63452 = state_63417__$1;(statearr_63430_63452[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (14)))
{var inst_63411 = (state_63417[(2)]);var state_63417__$1 = state_63417;var statearr_63431_63453 = state_63417__$1;(statearr_63431_63453[(2)] = inst_63411);
(statearr_63431_63453[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (10)))
{var inst_63403 = (state_63417[(2)]);var state_63417__$1 = state_63417;var statearr_63432_63454 = state_63417__$1;(statearr_63432_63454[(2)] = inst_63403);
(statearr_63432_63454[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63418 === (8)))
{var inst_63400 = cljs.core.async.close_BANG_(to);var state_63417__$1 = state_63417;var statearr_63433_63455 = state_63417__$1;(statearr_63433_63455[(2)] = inst_63400);
(statearr_63433_63455[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___63441))
;return ((function (switch__5804__auto__,c__5819__auto___63441){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_63437 = [null,null,null,null,null,null,null,null];(statearr_63437[(0)] = state_machine__5805__auto__);
(statearr_63437[(1)] = (1));
return statearr_63437;
});
var state_machine__5805__auto____1 = (function (state_63417){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_63417);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e63438){if((e63438 instanceof Object))
{var ex__5808__auto__ = e63438;var statearr_63439_63456 = state_63417;(statearr_63439_63456[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_63417);
return cljs.core.constant$keyword$1120;
} else
{throw e63438;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__63457 = state_63417;
state_63417 = G__63457;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_63417){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_63417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___63441))
})();var state__5821__auto__ = (function (){var statearr_63440 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_63440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___63441);
return statearr_63440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___63441))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0))))));
}
var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var process = ((function (jobs,results){
return (function (p__63643){var vec__63644 = p__63643;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63644,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63644,(1),null);var job = vec__63644;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__5819__auto___63828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___63828,res,vec__63644,v,p,job,jobs,results){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___63828,res,vec__63644,v,p,job,jobs,results){
return (function (state_63649){var state_val_63650 = (state_63649[(1)]);if((state_val_63650 === (2)))
{var inst_63646 = (state_63649[(2)]);var inst_63647 = cljs.core.async.close_BANG_(res);var state_63649__$1 = (function (){var statearr_63651 = state_63649;(statearr_63651[(7)] = inst_63646);
return statearr_63651;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_63649__$1,inst_63647);
} else
{if((state_val_63650 === (1)))
{var state_63649__$1 = state_63649;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63649__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5819__auto___63828,res,vec__63644,v,p,job,jobs,results))
;return ((function (switch__5804__auto__,c__5819__auto___63828,res,vec__63644,v,p,job,jobs,results){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_63655 = [null,null,null,null,null,null,null,null];(statearr_63655[(0)] = state_machine__5805__auto__);
(statearr_63655[(1)] = (1));
return statearr_63655;
});
var state_machine__5805__auto____1 = (function (state_63649){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_63649);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e63656){if((e63656 instanceof Object))
{var ex__5808__auto__ = e63656;var statearr_63657_63829 = state_63649;(statearr_63657_63829[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_63649);
return cljs.core.constant$keyword$1120;
} else
{throw e63656;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__63830 = state_63649;
state_63649 = G__63830;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_63649){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_63649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___63828,res,vec__63644,v,p,job,jobs,results))
})();var state__5821__auto__ = (function (){var statearr_63658 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_63658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___63828);
return statearr_63658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___63828,res,vec__63644,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__63659){var vec__63660 = p__63659;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63660,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63660,(1),null);var job = vec__63660;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__63661_63831 = v;var G__63662_63832 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__63661_63831,G__63662_63832) : xf.call(null,G__63661_63831,G__63662_63832));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4506__auto___63833 = n;var __63834 = (0);while(true){
if((__63834 < n__4506__auto___63833))
{var G__63663_63835 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__63663_63835) {
case "async":
var c__5819__auto___63837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__63834,c__5819__auto___63837,G__63663_63835,n__4506__auto___63833,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__63834,c__5819__auto___63837,G__63663_63835,n__4506__auto___63833,jobs,results,process,async){
return (function (state_63676){var state_val_63677 = (state_63676[(1)]);if((state_val_63677 === (7)))
{var inst_63672 = (state_63676[(2)]);var state_63676__$1 = state_63676;var statearr_63678_63838 = state_63676__$1;(statearr_63678_63838[(2)] = inst_63672);
(statearr_63678_63838[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63677 === (6)))
{var state_63676__$1 = state_63676;var statearr_63679_63839 = state_63676__$1;(statearr_63679_63839[(2)] = null);
(statearr_63679_63839[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63677 === (5)))
{var state_63676__$1 = state_63676;var statearr_63680_63840 = state_63676__$1;(statearr_63680_63840[(2)] = null);
(statearr_63680_63840[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63677 === (4)))
{var inst_63666 = (state_63676[(2)]);var inst_63667 = async(inst_63666);var state_63676__$1 = state_63676;if(cljs.core.truth_(inst_63667))
{var statearr_63681_63841 = state_63676__$1;(statearr_63681_63841[(1)] = (5));
} else
{var statearr_63682_63842 = state_63676__$1;(statearr_63682_63842[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63677 === (3)))
{var inst_63674 = (state_63676[(2)]);var state_63676__$1 = state_63676;return cljs.core.async.impl.ioc_helpers.return_chan(state_63676__$1,inst_63674);
} else
{if((state_val_63677 === (2)))
{var state_63676__$1 = state_63676;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63676__$1,(4),jobs);
} else
{if((state_val_63677 === (1)))
{var state_63676__$1 = state_63676;var statearr_63683_63843 = state_63676__$1;(statearr_63683_63843[(2)] = null);
(statearr_63683_63843[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
});})(__63834,c__5819__auto___63837,G__63663_63835,n__4506__auto___63833,jobs,results,process,async))
;return ((function (__63834,switch__5804__auto__,c__5819__auto___63837,G__63663_63835,n__4506__auto___63833,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_63687 = [null,null,null,null,null,null,null];(statearr_63687[(0)] = state_machine__5805__auto__);
(statearr_63687[(1)] = (1));
return statearr_63687;
});
var state_machine__5805__auto____1 = (function (state_63676){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_63676);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e63688){if((e63688 instanceof Object))
{var ex__5808__auto__ = e63688;var statearr_63689_63844 = state_63676;(statearr_63689_63844[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_63676);
return cljs.core.constant$keyword$1120;
} else
{throw e63688;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__63845 = state_63676;
state_63676 = G__63845;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_63676){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_63676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__63834,switch__5804__auto__,c__5819__auto___63837,G__63663_63835,n__4506__auto___63833,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_63690 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_63690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___63837);
return statearr_63690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(__63834,c__5819__auto___63837,G__63663_63835,n__4506__auto___63833,jobs,results,process,async))
);

break;
case "compute":
var c__5819__auto___63846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__63834,c__5819__auto___63846,G__63663_63835,n__4506__auto___63833,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__63834,c__5819__auto___63846,G__63663_63835,n__4506__auto___63833,jobs,results,process,async){
return (function (state_63703){var state_val_63704 = (state_63703[(1)]);if((state_val_63704 === (7)))
{var inst_63699 = (state_63703[(2)]);var state_63703__$1 = state_63703;var statearr_63705_63847 = state_63703__$1;(statearr_63705_63847[(2)] = inst_63699);
(statearr_63705_63847[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63704 === (6)))
{var state_63703__$1 = state_63703;var statearr_63706_63848 = state_63703__$1;(statearr_63706_63848[(2)] = null);
(statearr_63706_63848[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63704 === (5)))
{var state_63703__$1 = state_63703;var statearr_63707_63849 = state_63703__$1;(statearr_63707_63849[(2)] = null);
(statearr_63707_63849[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63704 === (4)))
{var inst_63693 = (state_63703[(2)]);var inst_63694 = process(inst_63693);var state_63703__$1 = state_63703;if(cljs.core.truth_(inst_63694))
{var statearr_63708_63850 = state_63703__$1;(statearr_63708_63850[(1)] = (5));
} else
{var statearr_63709_63851 = state_63703__$1;(statearr_63709_63851[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63704 === (3)))
{var inst_63701 = (state_63703[(2)]);var state_63703__$1 = state_63703;return cljs.core.async.impl.ioc_helpers.return_chan(state_63703__$1,inst_63701);
} else
{if((state_val_63704 === (2)))
{var state_63703__$1 = state_63703;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63703__$1,(4),jobs);
} else
{if((state_val_63704 === (1)))
{var state_63703__$1 = state_63703;var statearr_63710_63852 = state_63703__$1;(statearr_63710_63852[(2)] = null);
(statearr_63710_63852[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
});})(__63834,c__5819__auto___63846,G__63663_63835,n__4506__auto___63833,jobs,results,process,async))
;return ((function (__63834,switch__5804__auto__,c__5819__auto___63846,G__63663_63835,n__4506__auto___63833,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_63714 = [null,null,null,null,null,null,null];(statearr_63714[(0)] = state_machine__5805__auto__);
(statearr_63714[(1)] = (1));
return statearr_63714;
});
var state_machine__5805__auto____1 = (function (state_63703){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_63703);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e63715){if((e63715 instanceof Object))
{var ex__5808__auto__ = e63715;var statearr_63716_63853 = state_63703;(statearr_63716_63853[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_63703);
return cljs.core.constant$keyword$1120;
} else
{throw e63715;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__63854 = state_63703;
state_63703 = G__63854;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_63703){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_63703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__63834,switch__5804__auto__,c__5819__auto___63846,G__63663_63835,n__4506__auto___63833,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_63717 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_63717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___63846);
return statearr_63717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(__63834,c__5819__auto___63846,G__63663_63835,n__4506__auto___63833,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__63855 = (__63834 + (1));
__63834 = G__63855;
continue;
}
} else
{}
break;
}
var c__5819__auto___63856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___63856,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___63856,jobs,results,process,async){
return (function (state_63739){var state_val_63740 = (state_63739[(1)]);if((state_val_63740 === (9)))
{var inst_63732 = (state_63739[(2)]);var state_63739__$1 = (function (){var statearr_63741 = state_63739;(statearr_63741[(7)] = inst_63732);
return statearr_63741;
})();var statearr_63742_63857 = state_63739__$1;(statearr_63742_63857[(2)] = null);
(statearr_63742_63857[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63740 === (8)))
{var inst_63725 = (state_63739[(8)]);var inst_63730 = (state_63739[(2)]);var state_63739__$1 = (function (){var statearr_63743 = state_63739;(statearr_63743[(9)] = inst_63730);
return statearr_63743;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63739__$1,(9),results,inst_63725);
} else
{if((state_val_63740 === (7)))
{var inst_63735 = (state_63739[(2)]);var state_63739__$1 = state_63739;var statearr_63744_63858 = state_63739__$1;(statearr_63744_63858[(2)] = inst_63735);
(statearr_63744_63858[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63740 === (6)))
{var inst_63720 = (state_63739[(10)]);var inst_63725 = (state_63739[(8)]);var inst_63725__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_63726 = cljs.core.PersistentVector.EMPTY_NODE;var inst_63727 = [inst_63720,inst_63725__$1];var inst_63728 = (new cljs.core.PersistentVector(null,2,(5),inst_63726,inst_63727,null));var state_63739__$1 = (function (){var statearr_63745 = state_63739;(statearr_63745[(8)] = inst_63725__$1);
return statearr_63745;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63739__$1,(8),jobs,inst_63728);
} else
{if((state_val_63740 === (5)))
{var inst_63723 = cljs.core.async.close_BANG_(jobs);var state_63739__$1 = state_63739;var statearr_63746_63859 = state_63739__$1;(statearr_63746_63859[(2)] = inst_63723);
(statearr_63746_63859[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63740 === (4)))
{var inst_63720 = (state_63739[(10)]);var inst_63720__$1 = (state_63739[(2)]);var inst_63721 = (inst_63720__$1 == null);var state_63739__$1 = (function (){var statearr_63747 = state_63739;(statearr_63747[(10)] = inst_63720__$1);
return statearr_63747;
})();if(cljs.core.truth_(inst_63721))
{var statearr_63748_63860 = state_63739__$1;(statearr_63748_63860[(1)] = (5));
} else
{var statearr_63749_63861 = state_63739__$1;(statearr_63749_63861[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63740 === (3)))
{var inst_63737 = (state_63739[(2)]);var state_63739__$1 = state_63739;return cljs.core.async.impl.ioc_helpers.return_chan(state_63739__$1,inst_63737);
} else
{if((state_val_63740 === (2)))
{var state_63739__$1 = state_63739;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63739__$1,(4),from);
} else
{if((state_val_63740 === (1)))
{var state_63739__$1 = state_63739;var statearr_63750_63862 = state_63739__$1;(statearr_63750_63862[(2)] = null);
(statearr_63750_63862[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___63856,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto___63856,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_63754 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_63754[(0)] = state_machine__5805__auto__);
(statearr_63754[(1)] = (1));
return statearr_63754;
});
var state_machine__5805__auto____1 = (function (state_63739){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_63739);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e63755){if((e63755 instanceof Object))
{var ex__5808__auto__ = e63755;var statearr_63756_63863 = state_63739;(statearr_63756_63863[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_63739);
return cljs.core.constant$keyword$1120;
} else
{throw e63755;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__63864 = state_63739;
state_63739 = G__63864;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_63739){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_63739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___63856,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_63757 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_63757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___63856);
return statearr_63757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___63856,jobs,results,process,async))
);
var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,jobs,results,process,async){
return (function (state_63795){var state_val_63796 = (state_63795[(1)]);if((state_val_63796 === (7)))
{var inst_63791 = (state_63795[(2)]);var state_63795__$1 = state_63795;var statearr_63797_63865 = state_63795__$1;(statearr_63797_63865[(2)] = inst_63791);
(statearr_63797_63865[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (20)))
{var state_63795__$1 = state_63795;var statearr_63798_63866 = state_63795__$1;(statearr_63798_63866[(2)] = null);
(statearr_63798_63866[(1)] = (21));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (1)))
{var state_63795__$1 = state_63795;var statearr_63799_63867 = state_63795__$1;(statearr_63799_63867[(2)] = null);
(statearr_63799_63867[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (4)))
{var inst_63760 = (state_63795[(7)]);var inst_63760__$1 = (state_63795[(2)]);var inst_63761 = (inst_63760__$1 == null);var state_63795__$1 = (function (){var statearr_63800 = state_63795;(statearr_63800[(7)] = inst_63760__$1);
return statearr_63800;
})();if(cljs.core.truth_(inst_63761))
{var statearr_63801_63868 = state_63795__$1;(statearr_63801_63868[(1)] = (5));
} else
{var statearr_63802_63869 = state_63795__$1;(statearr_63802_63869[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (15)))
{var inst_63773 = (state_63795[(8)]);var state_63795__$1 = state_63795;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63795__$1,(18),to,inst_63773);
} else
{if((state_val_63796 === (21)))
{var inst_63786 = (state_63795[(2)]);var state_63795__$1 = state_63795;var statearr_63803_63870 = state_63795__$1;(statearr_63803_63870[(2)] = inst_63786);
(statearr_63803_63870[(1)] = (13));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (13)))
{var inst_63788 = (state_63795[(2)]);var state_63795__$1 = (function (){var statearr_63804 = state_63795;(statearr_63804[(9)] = inst_63788);
return statearr_63804;
})();var statearr_63805_63871 = state_63795__$1;(statearr_63805_63871[(2)] = null);
(statearr_63805_63871[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (6)))
{var inst_63760 = (state_63795[(7)]);var state_63795__$1 = state_63795;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63795__$1,(11),inst_63760);
} else
{if((state_val_63796 === (17)))
{var inst_63781 = (state_63795[(2)]);var state_63795__$1 = state_63795;if(cljs.core.truth_(inst_63781))
{var statearr_63806_63872 = state_63795__$1;(statearr_63806_63872[(1)] = (19));
} else
{var statearr_63807_63873 = state_63795__$1;(statearr_63807_63873[(1)] = (20));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (3)))
{var inst_63793 = (state_63795[(2)]);var state_63795__$1 = state_63795;return cljs.core.async.impl.ioc_helpers.return_chan(state_63795__$1,inst_63793);
} else
{if((state_val_63796 === (12)))
{var inst_63770 = (state_63795[(10)]);var state_63795__$1 = state_63795;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63795__$1,(14),inst_63770);
} else
{if((state_val_63796 === (2)))
{var state_63795__$1 = state_63795;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63795__$1,(4),results);
} else
{if((state_val_63796 === (19)))
{var state_63795__$1 = state_63795;var statearr_63808_63874 = state_63795__$1;(statearr_63808_63874[(2)] = null);
(statearr_63808_63874[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (11)))
{var inst_63770 = (state_63795[(2)]);var state_63795__$1 = (function (){var statearr_63809 = state_63795;(statearr_63809[(10)] = inst_63770);
return statearr_63809;
})();var statearr_63810_63875 = state_63795__$1;(statearr_63810_63875[(2)] = null);
(statearr_63810_63875[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (9)))
{var state_63795__$1 = state_63795;var statearr_63811_63876 = state_63795__$1;(statearr_63811_63876[(2)] = null);
(statearr_63811_63876[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (5)))
{var state_63795__$1 = state_63795;if(cljs.core.truth_(close_QMARK_))
{var statearr_63812_63877 = state_63795__$1;(statearr_63812_63877[(1)] = (8));
} else
{var statearr_63813_63878 = state_63795__$1;(statearr_63813_63878[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (14)))
{var inst_63773 = (state_63795[(8)]);var inst_63775 = (state_63795[(11)]);var inst_63773__$1 = (state_63795[(2)]);var inst_63774 = (inst_63773__$1 == null);var inst_63775__$1 = cljs.core.not(inst_63774);var state_63795__$1 = (function (){var statearr_63814 = state_63795;(statearr_63814[(8)] = inst_63773__$1);
(statearr_63814[(11)] = inst_63775__$1);
return statearr_63814;
})();if(inst_63775__$1)
{var statearr_63815_63879 = state_63795__$1;(statearr_63815_63879[(1)] = (15));
} else
{var statearr_63816_63880 = state_63795__$1;(statearr_63816_63880[(1)] = (16));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (16)))
{var inst_63775 = (state_63795[(11)]);var state_63795__$1 = state_63795;var statearr_63817_63881 = state_63795__$1;(statearr_63817_63881[(2)] = inst_63775);
(statearr_63817_63881[(1)] = (17));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (10)))
{var inst_63767 = (state_63795[(2)]);var state_63795__$1 = state_63795;var statearr_63818_63882 = state_63795__$1;(statearr_63818_63882[(2)] = inst_63767);
(statearr_63818_63882[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (18)))
{var inst_63778 = (state_63795[(2)]);var state_63795__$1 = state_63795;var statearr_63819_63883 = state_63795__$1;(statearr_63819_63883[(2)] = inst_63778);
(statearr_63819_63883[(1)] = (17));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63796 === (8)))
{var inst_63764 = cljs.core.async.close_BANG_(to);var state_63795__$1 = state_63795;var statearr_63820_63884 = state_63795__$1;(statearr_63820_63884[(2)] = inst_63764);
(statearr_63820_63884[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto__,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto__,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_63824 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63824[(0)] = state_machine__5805__auto__);
(statearr_63824[(1)] = (1));
return statearr_63824;
});
var state_machine__5805__auto____1 = (function (state_63795){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_63795);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e63825){if((e63825 instanceof Object))
{var ex__5808__auto__ = e63825;var statearr_63826_63885 = state_63795;(statearr_63826_63885[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_63795);
return cljs.core.constant$keyword$1120;
} else
{throw e63825;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__63886 = state_63795;
state_63795 = G__63886;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_63795){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_63795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_63827 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_63827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_63827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,jobs,results,process,async))
);
return c__5819__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$1127);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$1128);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5819__auto___64009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___64009,tc,fc){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___64009,tc,fc){
return (function (state_63983){var state_val_63984 = (state_63983[(1)]);if((state_val_63984 === (7)))
{var inst_63979 = (state_63983[(2)]);var state_63983__$1 = state_63983;var statearr_63985_64010 = state_63983__$1;(statearr_63985_64010[(2)] = inst_63979);
(statearr_63985_64010[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (1)))
{var state_63983__$1 = state_63983;var statearr_63986_64011 = state_63983__$1;(statearr_63986_64011[(2)] = null);
(statearr_63986_64011[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (4)))
{var inst_63960 = (state_63983[(7)]);var inst_63960__$1 = (state_63983[(2)]);var inst_63961 = (inst_63960__$1 == null);var state_63983__$1 = (function (){var statearr_63987 = state_63983;(statearr_63987[(7)] = inst_63960__$1);
return statearr_63987;
})();if(cljs.core.truth_(inst_63961))
{var statearr_63988_64012 = state_63983__$1;(statearr_63988_64012[(1)] = (5));
} else
{var statearr_63989_64013 = state_63983__$1;(statearr_63989_64013[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (13)))
{var state_63983__$1 = state_63983;var statearr_63990_64014 = state_63983__$1;(statearr_63990_64014[(2)] = null);
(statearr_63990_64014[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (6)))
{var inst_63960 = (state_63983[(7)]);var inst_63966 = (function (){var G__63991 = inst_63960;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__63991) : p.call(null,G__63991));
})();var state_63983__$1 = state_63983;if(cljs.core.truth_(inst_63966))
{var statearr_63992_64015 = state_63983__$1;(statearr_63992_64015[(1)] = (9));
} else
{var statearr_63993_64016 = state_63983__$1;(statearr_63993_64016[(1)] = (10));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (3)))
{var inst_63981 = (state_63983[(2)]);var state_63983__$1 = state_63983;return cljs.core.async.impl.ioc_helpers.return_chan(state_63983__$1,inst_63981);
} else
{if((state_val_63984 === (12)))
{var state_63983__$1 = state_63983;var statearr_63994_64017 = state_63983__$1;(statearr_63994_64017[(2)] = null);
(statearr_63994_64017[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (2)))
{var state_63983__$1 = state_63983;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63983__$1,(4),ch);
} else
{if((state_val_63984 === (11)))
{var inst_63960 = (state_63983[(7)]);var inst_63970 = (state_63983[(2)]);var state_63983__$1 = state_63983;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63983__$1,(8),inst_63970,inst_63960);
} else
{if((state_val_63984 === (9)))
{var state_63983__$1 = state_63983;var statearr_63995_64018 = state_63983__$1;(statearr_63995_64018[(2)] = tc);
(statearr_63995_64018[(1)] = (11));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (5)))
{var inst_63963 = cljs.core.async.close_BANG_(tc);var inst_63964 = cljs.core.async.close_BANG_(fc);var state_63983__$1 = (function (){var statearr_63996 = state_63983;(statearr_63996[(8)] = inst_63963);
return statearr_63996;
})();var statearr_63997_64019 = state_63983__$1;(statearr_63997_64019[(2)] = inst_63964);
(statearr_63997_64019[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (14)))
{var inst_63977 = (state_63983[(2)]);var state_63983__$1 = state_63983;var statearr_63998_64020 = state_63983__$1;(statearr_63998_64020[(2)] = inst_63977);
(statearr_63998_64020[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (10)))
{var state_63983__$1 = state_63983;var statearr_63999_64021 = state_63983__$1;(statearr_63999_64021[(2)] = fc);
(statearr_63999_64021[(1)] = (11));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_63984 === (8)))
{var inst_63972 = (state_63983[(2)]);var state_63983__$1 = state_63983;if(cljs.core.truth_(inst_63972))
{var statearr_64000_64022 = state_63983__$1;(statearr_64000_64022[(1)] = (12));
} else
{var statearr_64001_64023 = state_63983__$1;(statearr_64001_64023[(1)] = (13));
}
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___64009,tc,fc))
;return ((function (switch__5804__auto__,c__5819__auto___64009,tc,fc){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_64005 = [null,null,null,null,null,null,null,null,null];(statearr_64005[(0)] = state_machine__5805__auto__);
(statearr_64005[(1)] = (1));
return statearr_64005;
});
var state_machine__5805__auto____1 = (function (state_63983){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_63983);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e64006){if((e64006 instanceof Object))
{var ex__5808__auto__ = e64006;var statearr_64007_64024 = state_63983;(statearr_64007_64024[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_63983);
return cljs.core.constant$keyword$1120;
} else
{throw e64006;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__64025 = state_63983;
state_63983 = G__64025;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_63983){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_63983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___64009,tc,fc))
})();var state__5821__auto__ = (function (){var statearr_64008 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_64008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___64009);
return statearr_64008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___64009,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_64074){var state_val_64075 = (state_64074[(1)]);if((state_val_64075 === (7)))
{var inst_64070 = (state_64074[(2)]);var state_64074__$1 = state_64074;var statearr_64076_64094 = state_64074__$1;(statearr_64076_64094[(2)] = inst_64070);
(statearr_64076_64094[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64075 === (6)))
{var inst_64063 = (state_64074[(7)]);var inst_64060 = (state_64074[(8)]);var inst_64067 = (function (){var G__64077 = inst_64060;var G__64078 = inst_64063;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__64077,G__64078) : f.call(null,G__64077,G__64078));
})();var inst_64060__$1 = inst_64067;var state_64074__$1 = (function (){var statearr_64079 = state_64074;(statearr_64079[(8)] = inst_64060__$1);
return statearr_64079;
})();var statearr_64080_64095 = state_64074__$1;(statearr_64080_64095[(2)] = null);
(statearr_64080_64095[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64075 === (5)))
{var inst_64060 = (state_64074[(8)]);var state_64074__$1 = state_64074;var statearr_64081_64096 = state_64074__$1;(statearr_64081_64096[(2)] = inst_64060);
(statearr_64081_64096[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64075 === (4)))
{var inst_64063 = (state_64074[(7)]);var inst_64063__$1 = (state_64074[(2)]);var inst_64064 = (inst_64063__$1 == null);var state_64074__$1 = (function (){var statearr_64082 = state_64074;(statearr_64082[(7)] = inst_64063__$1);
return statearr_64082;
})();if(cljs.core.truth_(inst_64064))
{var statearr_64083_64097 = state_64074__$1;(statearr_64083_64097[(1)] = (5));
} else
{var statearr_64084_64098 = state_64074__$1;(statearr_64084_64098[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64075 === (3)))
{var inst_64072 = (state_64074[(2)]);var state_64074__$1 = state_64074;return cljs.core.async.impl.ioc_helpers.return_chan(state_64074__$1,inst_64072);
} else
{if((state_val_64075 === (2)))
{var state_64074__$1 = state_64074;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64074__$1,(4),ch);
} else
{if((state_val_64075 === (1)))
{var inst_64060 = init;var state_64074__$1 = (function (){var statearr_64085 = state_64074;(statearr_64085[(8)] = inst_64060);
return statearr_64085;
})();var statearr_64086_64099 = state_64074__$1;(statearr_64086_64099[(2)] = null);
(statearr_64086_64099[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_64090 = [null,null,null,null,null,null,null,null,null];(statearr_64090[(0)] = state_machine__5805__auto__);
(statearr_64090[(1)] = (1));
return statearr_64090;
});
var state_machine__5805__auto____1 = (function (state_64074){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_64074);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e64091){if((e64091 instanceof Object))
{var ex__5808__auto__ = e64091;var statearr_64092_64100 = state_64074;(statearr_64092_64100[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_64074);
return cljs.core.constant$keyword$1120;
} else
{throw e64091;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__64101 = state_64074;
state_64074 = G__64101;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_64074){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_64074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_64093 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_64093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_64093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_64178){var state_val_64179 = (state_64178[(1)]);if((state_val_64179 === (7)))
{var inst_64160 = (state_64178[(2)]);var state_64178__$1 = state_64178;var statearr_64180_64203 = state_64178__$1;(statearr_64180_64203[(2)] = inst_64160);
(statearr_64180_64203[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (1)))
{var inst_64154 = cljs.core.seq(coll);var inst_64155 = inst_64154;var state_64178__$1 = (function (){var statearr_64181 = state_64178;(statearr_64181[(7)] = inst_64155);
return statearr_64181;
})();var statearr_64182_64204 = state_64178__$1;(statearr_64182_64204[(2)] = null);
(statearr_64182_64204[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (4)))
{var inst_64155 = (state_64178[(7)]);var inst_64158 = cljs.core.first(inst_64155);var state_64178__$1 = state_64178;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64178__$1,(7),ch,inst_64158);
} else
{if((state_val_64179 === (13)))
{var inst_64172 = (state_64178[(2)]);var state_64178__$1 = state_64178;var statearr_64183_64205 = state_64178__$1;(statearr_64183_64205[(2)] = inst_64172);
(statearr_64183_64205[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (6)))
{var inst_64163 = (state_64178[(2)]);var state_64178__$1 = state_64178;if(cljs.core.truth_(inst_64163))
{var statearr_64184_64206 = state_64178__$1;(statearr_64184_64206[(1)] = (8));
} else
{var statearr_64185_64207 = state_64178__$1;(statearr_64185_64207[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (3)))
{var inst_64176 = (state_64178[(2)]);var state_64178__$1 = state_64178;return cljs.core.async.impl.ioc_helpers.return_chan(state_64178__$1,inst_64176);
} else
{if((state_val_64179 === (12)))
{var state_64178__$1 = state_64178;var statearr_64186_64208 = state_64178__$1;(statearr_64186_64208[(2)] = null);
(statearr_64186_64208[(1)] = (13));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (2)))
{var inst_64155 = (state_64178[(7)]);var state_64178__$1 = state_64178;if(cljs.core.truth_(inst_64155))
{var statearr_64187_64209 = state_64178__$1;(statearr_64187_64209[(1)] = (4));
} else
{var statearr_64188_64210 = state_64178__$1;(statearr_64188_64210[(1)] = (5));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (11)))
{var inst_64169 = cljs.core.async.close_BANG_(ch);var state_64178__$1 = state_64178;var statearr_64189_64211 = state_64178__$1;(statearr_64189_64211[(2)] = inst_64169);
(statearr_64189_64211[(1)] = (13));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (9)))
{var state_64178__$1 = state_64178;if(cljs.core.truth_(close_QMARK_))
{var statearr_64190_64212 = state_64178__$1;(statearr_64190_64212[(1)] = (11));
} else
{var statearr_64191_64213 = state_64178__$1;(statearr_64191_64213[(1)] = (12));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (5)))
{var inst_64155 = (state_64178[(7)]);var state_64178__$1 = state_64178;var statearr_64192_64214 = state_64178__$1;(statearr_64192_64214[(2)] = inst_64155);
(statearr_64192_64214[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (10)))
{var inst_64174 = (state_64178[(2)]);var state_64178__$1 = state_64178;var statearr_64193_64215 = state_64178__$1;(statearr_64193_64215[(2)] = inst_64174);
(statearr_64193_64215[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64179 === (8)))
{var inst_64155 = (state_64178[(7)]);var inst_64165 = cljs.core.next(inst_64155);var inst_64155__$1 = inst_64165;var state_64178__$1 = (function (){var statearr_64194 = state_64178;(statearr_64194[(7)] = inst_64155__$1);
return statearr_64194;
})();var statearr_64195_64216 = state_64178__$1;(statearr_64195_64216[(2)] = null);
(statearr_64195_64216[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_64199 = [null,null,null,null,null,null,null,null];(statearr_64199[(0)] = state_machine__5805__auto__);
(statearr_64199[(1)] = (1));
return statearr_64199;
});
var state_machine__5805__auto____1 = (function (state_64178){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_64178);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e64200){if((e64200 instanceof Object))
{var ex__5808__auto__ = e64200;var statearr_64201_64217 = state_64178;(statearr_64201_64217[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_64178);
return cljs.core.constant$keyword$1120;
} else
{throw e64200;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__64218 = state_64178;
state_64178 = G__64218;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_64178){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_64178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_64202 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_64202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_64202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj64220 = {};return obj64220;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3625__auto__ = _;if(and__3625__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4273__auto__ = (((_ == null))?null:_);return (function (){var or__3637__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__64224 = x__4273__auto__;return goog.typeOf(G__64224);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj64226 = {};return obj64226;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__64230 = x__4273__auto__;return goog.typeOf(G__64230);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__64234 = x__4273__auto__;return goog.typeOf(G__64234);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__64238 = x__4273__auto__;return goog.typeOf(G__64238);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__64468 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__64468) : cljs.core.atom.call(null,G__64468));
})();var m = (function (){if(typeof cljs.core.async.t64469 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64469 = (function (cs,ch,mult,meta64470){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta64470 = meta64470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64469.cljs$lang$type = true;
cljs.core.async.t64469.cljs$lang$ctorStr = "cljs.core.async/t64469";
cljs.core.async.t64469.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t64469");
});})(cs))
;
cljs.core.async.t64469.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t64469.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t64469.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t64469.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__64472_64697 = self__.cs;var G__64473_64698 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__64472_64697,G__64473_64698) : cljs.core.reset_BANG_.call(null,G__64472_64697,G__64473_64698));
return null;
});})(cs))
;
cljs.core.async.t64469.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t64469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t64469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_64471){var self__ = this;
var _64471__$1 = this;return self__.meta64470;
});})(cs))
;
cljs.core.async.t64469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_64471,meta64470__$1){var self__ = this;
var _64471__$1 = this;return (new cljs.core.async.t64469(self__.cs,self__.ch,self__.mult,meta64470__$1));
});})(cs))
;
cljs.core.async.__GT_t64469 = ((function (cs){
return (function __GT_t64469(cs__$1,ch__$1,mult__$1,meta64470){return (new cljs.core.async.t64469(cs__$1,ch__$1,mult__$1,meta64470));
});})(cs))
;
}
return (new cljs.core.async.t64469(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__64474 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__64474) : cljs.core.atom.call(null,G__64474));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5819__auto___64699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___64699,cs,m,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___64699,cs,m,dchan,dctr,done){
return (function (state_64605){var state_val_64606 = (state_64605[(1)]);if((state_val_64606 === (7)))
{var inst_64601 = (state_64605[(2)]);var state_64605__$1 = state_64605;var statearr_64607_64700 = state_64605__$1;(statearr_64607_64700[(2)] = inst_64601);
(statearr_64607_64700[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (20)))
{var inst_64506 = (state_64605[(7)]);var inst_64516 = cljs.core.first(inst_64506);var inst_64517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64516,(0),null);var inst_64518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64516,(1),null);var state_64605__$1 = (function (){var statearr_64608 = state_64605;(statearr_64608[(8)] = inst_64517);
return statearr_64608;
})();if(cljs.core.truth_(inst_64518))
{var statearr_64609_64701 = state_64605__$1;(statearr_64609_64701[(1)] = (22));
} else
{var statearr_64610_64702 = state_64605__$1;(statearr_64610_64702[(1)] = (23));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (27)))
{var inst_64548 = (state_64605[(9)]);var inst_64477 = (state_64605[(10)]);var inst_64546 = (state_64605[(11)]);var inst_64553 = (state_64605[(12)]);var inst_64553__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_64546,inst_64548);var inst_64554 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_64553__$1,inst_64477,done);var state_64605__$1 = (function (){var statearr_64611 = state_64605;(statearr_64611[(12)] = inst_64553__$1);
return statearr_64611;
})();if(cljs.core.truth_(inst_64554))
{var statearr_64612_64703 = state_64605__$1;(statearr_64612_64703[(1)] = (30));
} else
{var statearr_64613_64704 = state_64605__$1;(statearr_64613_64704[(1)] = (31));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (1)))
{var state_64605__$1 = state_64605;var statearr_64614_64705 = state_64605__$1;(statearr_64614_64705[(2)] = null);
(statearr_64614_64705[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (24)))
{var inst_64506 = (state_64605[(7)]);var inst_64523 = (state_64605[(2)]);var inst_64524 = cljs.core.next(inst_64506);var inst_64486 = inst_64524;var inst_64487 = null;var inst_64488 = (0);var inst_64489 = (0);var state_64605__$1 = (function (){var statearr_64615 = state_64605;(statearr_64615[(13)] = inst_64489);
(statearr_64615[(14)] = inst_64523);
(statearr_64615[(15)] = inst_64486);
(statearr_64615[(16)] = inst_64487);
(statearr_64615[(17)] = inst_64488);
return statearr_64615;
})();var statearr_64616_64706 = state_64605__$1;(statearr_64616_64706[(2)] = null);
(statearr_64616_64706[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (39)))
{var state_64605__$1 = state_64605;var statearr_64620_64707 = state_64605__$1;(statearr_64620_64707[(2)] = null);
(statearr_64620_64707[(1)] = (41));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (4)))
{var inst_64477 = (state_64605[(10)]);var inst_64477__$1 = (state_64605[(2)]);var inst_64478 = (inst_64477__$1 == null);var state_64605__$1 = (function (){var statearr_64621 = state_64605;(statearr_64621[(10)] = inst_64477__$1);
return statearr_64621;
})();if(cljs.core.truth_(inst_64478))
{var statearr_64622_64708 = state_64605__$1;(statearr_64622_64708[(1)] = (5));
} else
{var statearr_64623_64709 = state_64605__$1;(statearr_64623_64709[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (15)))
{var inst_64489 = (state_64605[(13)]);var inst_64486 = (state_64605[(15)]);var inst_64487 = (state_64605[(16)]);var inst_64488 = (state_64605[(17)]);var inst_64502 = (state_64605[(2)]);var inst_64503 = (inst_64489 + (1));var tmp64617 = inst_64486;var tmp64618 = inst_64487;var tmp64619 = inst_64488;var inst_64486__$1 = tmp64617;var inst_64487__$1 = tmp64618;var inst_64488__$1 = tmp64619;var inst_64489__$1 = inst_64503;var state_64605__$1 = (function (){var statearr_64624 = state_64605;(statearr_64624[(13)] = inst_64489__$1);
(statearr_64624[(18)] = inst_64502);
(statearr_64624[(15)] = inst_64486__$1);
(statearr_64624[(16)] = inst_64487__$1);
(statearr_64624[(17)] = inst_64488__$1);
return statearr_64624;
})();var statearr_64625_64710 = state_64605__$1;(statearr_64625_64710[(2)] = null);
(statearr_64625_64710[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (21)))
{var inst_64527 = (state_64605[(2)]);var state_64605__$1 = state_64605;var statearr_64629_64711 = state_64605__$1;(statearr_64629_64711[(2)] = inst_64527);
(statearr_64629_64711[(1)] = (18));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (31)))
{var inst_64553 = (state_64605[(12)]);var inst_64557 = done(null);var inst_64558 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_64553);var state_64605__$1 = (function (){var statearr_64630 = state_64605;(statearr_64630[(19)] = inst_64557);
return statearr_64630;
})();var statearr_64631_64712 = state_64605__$1;(statearr_64631_64712[(2)] = inst_64558);
(statearr_64631_64712[(1)] = (32));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (32)))
{var inst_64548 = (state_64605[(9)]);var inst_64547 = (state_64605[(20)]);var inst_64545 = (state_64605[(21)]);var inst_64546 = (state_64605[(11)]);var inst_64560 = (state_64605[(2)]);var inst_64561 = (inst_64548 + (1));var tmp64626 = inst_64547;var tmp64627 = inst_64545;var tmp64628 = inst_64546;var inst_64545__$1 = tmp64627;var inst_64546__$1 = tmp64628;var inst_64547__$1 = tmp64626;var inst_64548__$1 = inst_64561;var state_64605__$1 = (function (){var statearr_64632 = state_64605;(statearr_64632[(22)] = inst_64560);
(statearr_64632[(9)] = inst_64548__$1);
(statearr_64632[(20)] = inst_64547__$1);
(statearr_64632[(21)] = inst_64545__$1);
(statearr_64632[(11)] = inst_64546__$1);
return statearr_64632;
})();var statearr_64633_64713 = state_64605__$1;(statearr_64633_64713[(2)] = null);
(statearr_64633_64713[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (40)))
{var inst_64573 = (state_64605[(23)]);var inst_64577 = done(null);var inst_64578 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_64573);var state_64605__$1 = (function (){var statearr_64634 = state_64605;(statearr_64634[(24)] = inst_64577);
return statearr_64634;
})();var statearr_64635_64714 = state_64605__$1;(statearr_64635_64714[(2)] = inst_64578);
(statearr_64635_64714[(1)] = (41));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (33)))
{var inst_64564 = (state_64605[(25)]);var inst_64566 = cljs.core.chunked_seq_QMARK_(inst_64564);var state_64605__$1 = state_64605;if(inst_64566)
{var statearr_64636_64715 = state_64605__$1;(statearr_64636_64715[(1)] = (36));
} else
{var statearr_64637_64716 = state_64605__$1;(statearr_64637_64716[(1)] = (37));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (13)))
{var inst_64496 = (state_64605[(26)]);var inst_64499 = cljs.core.async.close_BANG_(inst_64496);var state_64605__$1 = state_64605;var statearr_64638_64717 = state_64605__$1;(statearr_64638_64717[(2)] = inst_64499);
(statearr_64638_64717[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (22)))
{var inst_64517 = (state_64605[(8)]);var inst_64520 = cljs.core.async.close_BANG_(inst_64517);var state_64605__$1 = state_64605;var statearr_64639_64718 = state_64605__$1;(statearr_64639_64718[(2)] = inst_64520);
(statearr_64639_64718[(1)] = (24));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (36)))
{var inst_64564 = (state_64605[(25)]);var inst_64568 = cljs.core.chunk_first(inst_64564);var inst_64569 = cljs.core.chunk_rest(inst_64564);var inst_64570 = cljs.core.count(inst_64568);var inst_64545 = inst_64569;var inst_64546 = inst_64568;var inst_64547 = inst_64570;var inst_64548 = (0);var state_64605__$1 = (function (){var statearr_64640 = state_64605;(statearr_64640[(9)] = inst_64548);
(statearr_64640[(20)] = inst_64547);
(statearr_64640[(21)] = inst_64545);
(statearr_64640[(11)] = inst_64546);
return statearr_64640;
})();var statearr_64641_64719 = state_64605__$1;(statearr_64641_64719[(2)] = null);
(statearr_64641_64719[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (41)))
{var inst_64564 = (state_64605[(25)]);var inst_64580 = (state_64605[(2)]);var inst_64581 = cljs.core.next(inst_64564);var inst_64545 = inst_64581;var inst_64546 = null;var inst_64547 = (0);var inst_64548 = (0);var state_64605__$1 = (function (){var statearr_64642 = state_64605;(statearr_64642[(27)] = inst_64580);
(statearr_64642[(9)] = inst_64548);
(statearr_64642[(20)] = inst_64547);
(statearr_64642[(21)] = inst_64545);
(statearr_64642[(11)] = inst_64546);
return statearr_64642;
})();var statearr_64643_64720 = state_64605__$1;(statearr_64643_64720[(2)] = null);
(statearr_64643_64720[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (43)))
{var state_64605__$1 = state_64605;var statearr_64644_64721 = state_64605__$1;(statearr_64644_64721[(2)] = null);
(statearr_64644_64721[(1)] = (44));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (29)))
{var inst_64589 = (state_64605[(2)]);var state_64605__$1 = state_64605;var statearr_64645_64722 = state_64605__$1;(statearr_64645_64722[(2)] = inst_64589);
(statearr_64645_64722[(1)] = (26));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (44)))
{var inst_64598 = (state_64605[(2)]);var state_64605__$1 = (function (){var statearr_64646 = state_64605;(statearr_64646[(28)] = inst_64598);
return statearr_64646;
})();var statearr_64647_64723 = state_64605__$1;(statearr_64647_64723[(2)] = null);
(statearr_64647_64723[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (6)))
{var inst_64537 = (state_64605[(29)]);var inst_64536 = (function (){var G__64648 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64648) : cljs.core.deref.call(null,G__64648));
})();var inst_64537__$1 = cljs.core.keys(inst_64536);var inst_64538 = cljs.core.count(inst_64537__$1);var inst_64539 = (function (){var G__64649 = dctr;var G__64650 = inst_64538;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__64649,G__64650) : cljs.core.reset_BANG_.call(null,G__64649,G__64650));
})();var inst_64544 = cljs.core.seq(inst_64537__$1);var inst_64545 = inst_64544;var inst_64546 = null;var inst_64547 = (0);var inst_64548 = (0);var state_64605__$1 = (function (){var statearr_64651 = state_64605;(statearr_64651[(9)] = inst_64548);
(statearr_64651[(20)] = inst_64547);
(statearr_64651[(30)] = inst_64539);
(statearr_64651[(29)] = inst_64537__$1);
(statearr_64651[(21)] = inst_64545);
(statearr_64651[(11)] = inst_64546);
return statearr_64651;
})();var statearr_64652_64724 = state_64605__$1;(statearr_64652_64724[(2)] = null);
(statearr_64652_64724[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (28)))
{var inst_64564 = (state_64605[(25)]);var inst_64545 = (state_64605[(21)]);var inst_64564__$1 = cljs.core.seq(inst_64545);var state_64605__$1 = (function (){var statearr_64653 = state_64605;(statearr_64653[(25)] = inst_64564__$1);
return statearr_64653;
})();if(inst_64564__$1)
{var statearr_64654_64725 = state_64605__$1;(statearr_64654_64725[(1)] = (33));
} else
{var statearr_64655_64726 = state_64605__$1;(statearr_64655_64726[(1)] = (34));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (25)))
{var inst_64548 = (state_64605[(9)]);var inst_64547 = (state_64605[(20)]);var inst_64550 = (inst_64548 < inst_64547);var inst_64551 = inst_64550;var state_64605__$1 = state_64605;if(cljs.core.truth_(inst_64551))
{var statearr_64656_64727 = state_64605__$1;(statearr_64656_64727[(1)] = (27));
} else
{var statearr_64657_64728 = state_64605__$1;(statearr_64657_64728[(1)] = (28));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (34)))
{var state_64605__$1 = state_64605;var statearr_64658_64729 = state_64605__$1;(statearr_64658_64729[(2)] = null);
(statearr_64658_64729[(1)] = (35));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (17)))
{var state_64605__$1 = state_64605;var statearr_64659_64730 = state_64605__$1;(statearr_64659_64730[(2)] = null);
(statearr_64659_64730[(1)] = (18));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (3)))
{var inst_64603 = (state_64605[(2)]);var state_64605__$1 = state_64605;return cljs.core.async.impl.ioc_helpers.return_chan(state_64605__$1,inst_64603);
} else
{if((state_val_64606 === (12)))
{var inst_64532 = (state_64605[(2)]);var state_64605__$1 = state_64605;var statearr_64660_64731 = state_64605__$1;(statearr_64660_64731[(2)] = inst_64532);
(statearr_64660_64731[(1)] = (9));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (2)))
{var state_64605__$1 = state_64605;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64605__$1,(4),ch);
} else
{if((state_val_64606 === (23)))
{var state_64605__$1 = state_64605;var statearr_64661_64732 = state_64605__$1;(statearr_64661_64732[(2)] = null);
(statearr_64661_64732[(1)] = (24));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (35)))
{var inst_64587 = (state_64605[(2)]);var state_64605__$1 = state_64605;var statearr_64662_64733 = state_64605__$1;(statearr_64662_64733[(2)] = inst_64587);
(statearr_64662_64733[(1)] = (29));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (19)))
{var inst_64506 = (state_64605[(7)]);var inst_64510 = cljs.core.chunk_first(inst_64506);var inst_64511 = cljs.core.chunk_rest(inst_64506);var inst_64512 = cljs.core.count(inst_64510);var inst_64486 = inst_64511;var inst_64487 = inst_64510;var inst_64488 = inst_64512;var inst_64489 = (0);var state_64605__$1 = (function (){var statearr_64663 = state_64605;(statearr_64663[(13)] = inst_64489);
(statearr_64663[(15)] = inst_64486);
(statearr_64663[(16)] = inst_64487);
(statearr_64663[(17)] = inst_64488);
return statearr_64663;
})();var statearr_64664_64734 = state_64605__$1;(statearr_64664_64734[(2)] = null);
(statearr_64664_64734[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (11)))
{var inst_64486 = (state_64605[(15)]);var inst_64506 = (state_64605[(7)]);var inst_64506__$1 = cljs.core.seq(inst_64486);var state_64605__$1 = (function (){var statearr_64665 = state_64605;(statearr_64665[(7)] = inst_64506__$1);
return statearr_64665;
})();if(inst_64506__$1)
{var statearr_64666_64735 = state_64605__$1;(statearr_64666_64735[(1)] = (16));
} else
{var statearr_64667_64736 = state_64605__$1;(statearr_64667_64736[(1)] = (17));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (9)))
{var inst_64534 = (state_64605[(2)]);var state_64605__$1 = state_64605;var statearr_64668_64737 = state_64605__$1;(statearr_64668_64737[(2)] = inst_64534);
(statearr_64668_64737[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (5)))
{var inst_64484 = (function (){var G__64669 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64669) : cljs.core.deref.call(null,G__64669));
})();var inst_64485 = cljs.core.seq(inst_64484);var inst_64486 = inst_64485;var inst_64487 = null;var inst_64488 = (0);var inst_64489 = (0);var state_64605__$1 = (function (){var statearr_64670 = state_64605;(statearr_64670[(13)] = inst_64489);
(statearr_64670[(15)] = inst_64486);
(statearr_64670[(16)] = inst_64487);
(statearr_64670[(17)] = inst_64488);
return statearr_64670;
})();var statearr_64671_64738 = state_64605__$1;(statearr_64671_64738[(2)] = null);
(statearr_64671_64738[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (14)))
{var state_64605__$1 = state_64605;var statearr_64672_64739 = state_64605__$1;(statearr_64672_64739[(2)] = null);
(statearr_64672_64739[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (45)))
{var inst_64595 = (state_64605[(2)]);var state_64605__$1 = state_64605;var statearr_64673_64740 = state_64605__$1;(statearr_64673_64740[(2)] = inst_64595);
(statearr_64673_64740[(1)] = (44));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (26)))
{var inst_64537 = (state_64605[(29)]);var inst_64591 = (state_64605[(2)]);var inst_64592 = cljs.core.seq(inst_64537);var state_64605__$1 = (function (){var statearr_64674 = state_64605;(statearr_64674[(31)] = inst_64591);
return statearr_64674;
})();if(inst_64592)
{var statearr_64675_64741 = state_64605__$1;(statearr_64675_64741[(1)] = (42));
} else
{var statearr_64676_64742 = state_64605__$1;(statearr_64676_64742[(1)] = (43));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (16)))
{var inst_64506 = (state_64605[(7)]);var inst_64508 = cljs.core.chunked_seq_QMARK_(inst_64506);var state_64605__$1 = state_64605;if(inst_64508)
{var statearr_64677_64743 = state_64605__$1;(statearr_64677_64743[(1)] = (19));
} else
{var statearr_64678_64744 = state_64605__$1;(statearr_64678_64744[(1)] = (20));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (38)))
{var inst_64584 = (state_64605[(2)]);var state_64605__$1 = state_64605;var statearr_64679_64745 = state_64605__$1;(statearr_64679_64745[(2)] = inst_64584);
(statearr_64679_64745[(1)] = (35));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (30)))
{var state_64605__$1 = state_64605;var statearr_64680_64746 = state_64605__$1;(statearr_64680_64746[(2)] = null);
(statearr_64680_64746[(1)] = (32));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (10)))
{var inst_64489 = (state_64605[(13)]);var inst_64487 = (state_64605[(16)]);var inst_64495 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_64487,inst_64489);var inst_64496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64495,(0),null);var inst_64497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64495,(1),null);var state_64605__$1 = (function (){var statearr_64681 = state_64605;(statearr_64681[(26)] = inst_64496);
return statearr_64681;
})();if(cljs.core.truth_(inst_64497))
{var statearr_64682_64747 = state_64605__$1;(statearr_64682_64747[(1)] = (13));
} else
{var statearr_64683_64748 = state_64605__$1;(statearr_64683_64748[(1)] = (14));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (18)))
{var inst_64530 = (state_64605[(2)]);var state_64605__$1 = state_64605;var statearr_64684_64749 = state_64605__$1;(statearr_64684_64749[(2)] = inst_64530);
(statearr_64684_64749[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (42)))
{var state_64605__$1 = state_64605;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64605__$1,(45),dchan);
} else
{if((state_val_64606 === (37)))
{var inst_64573 = (state_64605[(23)]);var inst_64477 = (state_64605[(10)]);var inst_64564 = (state_64605[(25)]);var inst_64573__$1 = cljs.core.first(inst_64564);var inst_64574 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_64573__$1,inst_64477,done);var state_64605__$1 = (function (){var statearr_64685 = state_64605;(statearr_64685[(23)] = inst_64573__$1);
return statearr_64685;
})();if(cljs.core.truth_(inst_64574))
{var statearr_64686_64750 = state_64605__$1;(statearr_64686_64750[(1)] = (39));
} else
{var statearr_64687_64751 = state_64605__$1;(statearr_64687_64751[(1)] = (40));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64606 === (8)))
{var inst_64489 = (state_64605[(13)]);var inst_64488 = (state_64605[(17)]);var inst_64491 = (inst_64489 < inst_64488);var inst_64492 = inst_64491;var state_64605__$1 = state_64605;if(cljs.core.truth_(inst_64492))
{var statearr_64688_64752 = state_64605__$1;(statearr_64688_64752[(1)] = (10));
} else
{var statearr_64689_64753 = state_64605__$1;(statearr_64689_64753[(1)] = (11));
}
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___64699,cs,m,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___64699,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_64693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64693[(0)] = state_machine__5805__auto__);
(statearr_64693[(1)] = (1));
return statearr_64693;
});
var state_machine__5805__auto____1 = (function (state_64605){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_64605);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e64694){if((e64694 instanceof Object))
{var ex__5808__auto__ = e64694;var statearr_64695_64754 = state_64605;(statearr_64695_64754[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_64605);
return cljs.core.constant$keyword$1120;
} else
{throw e64694;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__64755 = state_64605;
state_64605 = G__64755;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_64605){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_64605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___64699,cs,m,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_64696 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_64696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___64699);
return statearr_64696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___64699,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj64760 = {};return obj64760;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__64764 = x__4273__auto__;return goog.typeOf(G__64764);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__64768 = x__4273__auto__;return goog.typeOf(G__64768);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__64772 = x__4273__auto__;return goog.typeOf(G__64772);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__64776 = x__4273__auto__;return goog.typeOf(G__64776);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__64780 = x__4273__auto__;return goog.typeOf(G__64780);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__64781){var map__64787 = p__64781;var map__64787__$1 = ((cljs.core.seq_QMARK_(map__64787))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64787):map__64787);var opts = map__64787__$1;var statearr_64788_64792 = state;(statearr_64788_64792[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__64787,map__64787__$1,opts){
return (function (val){var statearr_64789_64793 = state;(statearr_64789_64793[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__64787,map__64787__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_64790_64794 = state;(statearr_64790_64794[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__64791 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64791) : cljs.core.deref.call(null,G__64791));
})());
return cljs.core.constant$keyword$1120;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__64781 = null;if (arguments.length > 3) {
  p__64781 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__64781);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__64795){
var state = cljs.core.first(arglist__64795);
arglist__64795 = cljs.core.next(arglist__64795);
var cont_block = cljs.core.first(arglist__64795);
arglist__64795 = cljs.core.next(arglist__64795);
var ports = cljs.core.first(arglist__64795);
var p__64781 = cljs.core.rest(arglist__64795);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__64781);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__64929 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__64929) : cljs.core.atom.call(null,G__64929));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1129,null,cljs.core.constant$keyword$1130,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$1131);var solo_mode = (function (){var G__64930 = cljs.core.constant$keyword$1130;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__64930) : cljs.core.atom.call(null,G__64930));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__64931 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__64931) : attr.call(null,G__64931));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__64932 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64932) : cljs.core.deref.call(null,G__64932));
})();var mode = (function (){var G__64933 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64933) : cljs.core.deref.call(null,G__64933));
})();var solos = pick(cljs.core.constant$keyword$1131,chs);var pauses = pick(cljs.core.constant$keyword$1129,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1132,solos,cljs.core.constant$keyword$1133,pick(cljs.core.constant$keyword$1130,chs),cljs.core.constant$keyword$1134,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$1129)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t64934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64934 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta64935){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta64935 = meta64935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64934.cljs$lang$type = true;
cljs.core.async.t64934.cljs$lang$ctorStr = "cljs.core.async/t64934";
cljs.core.async.t64934.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t64934");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64934.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t64934.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64934.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64934.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__64937_65062 = self__.cs;var G__64938_65063 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__64937_65062,G__64938_65063) : cljs.core.reset_BANG_.call(null,G__64937_65062,G__64938_65063));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64934.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64934.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__64939 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__64939) : self__.solo_modes.call(null,G__64939));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__64940_65064 = self__.solo_mode;var G__64941_65065 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__64940_65064,G__64941_65065) : cljs.core.reset_BANG_.call(null,G__64940_65064,G__64941_65065));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64934.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t64934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_64936){var self__ = this;
var _64936__$1 = this;return self__.meta64935;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t64934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_64936,meta64935__$1){var self__ = this;
var _64936__$1 = this;return (new cljs.core.async.t64934(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta64935__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t64934 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t64934(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64935){return (new cljs.core.async.t64934(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64935));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t64934(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5819__auto___65066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_65013){var state_val_65014 = (state_65013[(1)]);if((state_val_65014 === (7)))
{var inst_64955 = (state_65013[(7)]);var inst_64960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64955);var state_65013__$1 = state_65013;var statearr_65015_65067 = state_65013__$1;(statearr_65015_65067[(2)] = inst_64960);
(statearr_65015_65067[(1)] = (9));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (20)))
{var inst_64970 = (state_65013[(8)]);var state_65013__$1 = state_65013;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65013__$1,(23),out,inst_64970);
} else
{if((state_val_65014 === (1)))
{var inst_64945 = (state_65013[(9)]);var inst_64945__$1 = calc_state();var inst_64946 = cljs.core.seq_QMARK_(inst_64945__$1);var state_65013__$1 = (function (){var statearr_65016 = state_65013;(statearr_65016[(9)] = inst_64945__$1);
return statearr_65016;
})();if(inst_64946)
{var statearr_65017_65068 = state_65013__$1;(statearr_65017_65068[(1)] = (2));
} else
{var statearr_65018_65069 = state_65013__$1;(statearr_65018_65069[(1)] = (3));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (24)))
{var inst_64963 = (state_65013[(10)]);var inst_64955 = inst_64963;var state_65013__$1 = (function (){var statearr_65019 = state_65013;(statearr_65019[(7)] = inst_64955);
return statearr_65019;
})();var statearr_65020_65070 = state_65013__$1;(statearr_65020_65070[(2)] = null);
(statearr_65020_65070[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (4)))
{var inst_64945 = (state_65013[(9)]);var inst_64951 = (state_65013[(2)]);var inst_64952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64951,cljs.core.constant$keyword$1134);var inst_64953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64951,cljs.core.constant$keyword$1133);var inst_64954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64951,cljs.core.constant$keyword$1132);var inst_64955 = inst_64945;var state_65013__$1 = (function (){var statearr_65021 = state_65013;(statearr_65021[(11)] = inst_64954);
(statearr_65021[(7)] = inst_64955);
(statearr_65021[(12)] = inst_64953);
(statearr_65021[(13)] = inst_64952);
return statearr_65021;
})();var statearr_65022_65071 = state_65013__$1;(statearr_65022_65071[(2)] = null);
(statearr_65022_65071[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (15)))
{var state_65013__$1 = state_65013;var statearr_65023_65072 = state_65013__$1;(statearr_65023_65072[(2)] = null);
(statearr_65023_65072[(1)] = (16));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (21)))
{var inst_64963 = (state_65013[(10)]);var inst_64955 = inst_64963;var state_65013__$1 = (function (){var statearr_65024 = state_65013;(statearr_65024[(7)] = inst_64955);
return statearr_65024;
})();var statearr_65025_65073 = state_65013__$1;(statearr_65025_65073[(2)] = null);
(statearr_65025_65073[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (13)))
{var inst_65009 = (state_65013[(2)]);var state_65013__$1 = state_65013;var statearr_65026_65074 = state_65013__$1;(statearr_65026_65074[(2)] = inst_65009);
(statearr_65026_65074[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (22)))
{var inst_65007 = (state_65013[(2)]);var state_65013__$1 = state_65013;var statearr_65027_65075 = state_65013__$1;(statearr_65027_65075[(2)] = inst_65007);
(statearr_65027_65075[(1)] = (13));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (6)))
{var inst_65011 = (state_65013[(2)]);var state_65013__$1 = state_65013;return cljs.core.async.impl.ioc_helpers.return_chan(state_65013__$1,inst_65011);
} else
{if((state_val_65014 === (25)))
{var state_65013__$1 = state_65013;var statearr_65028_65076 = state_65013__$1;(statearr_65028_65076[(2)] = null);
(statearr_65028_65076[(1)] = (26));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (17)))
{var inst_64986 = (state_65013[(14)]);var state_65013__$1 = state_65013;var statearr_65029_65077 = state_65013__$1;(statearr_65029_65077[(2)] = inst_64986);
(statearr_65029_65077[(1)] = (19));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (3)))
{var inst_64945 = (state_65013[(9)]);var state_65013__$1 = state_65013;var statearr_65030_65078 = state_65013__$1;(statearr_65030_65078[(2)] = inst_64945);
(statearr_65030_65078[(1)] = (4));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (12)))
{var inst_64966 = (state_65013[(15)]);var inst_64986 = (state_65013[(14)]);var inst_64971 = (state_65013[(16)]);var inst_64986__$1 = (function (){var G__65031 = inst_64971;return (inst_64966.cljs$core$IFn$_invoke$arity$1 ? inst_64966.cljs$core$IFn$_invoke$arity$1(G__65031) : inst_64966.call(null,G__65031));
})();var state_65013__$1 = (function (){var statearr_65032 = state_65013;(statearr_65032[(14)] = inst_64986__$1);
return statearr_65032;
})();if(cljs.core.truth_(inst_64986__$1))
{var statearr_65033_65079 = state_65013__$1;(statearr_65033_65079[(1)] = (17));
} else
{var statearr_65034_65080 = state_65013__$1;(statearr_65034_65080[(1)] = (18));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (2)))
{var inst_64945 = (state_65013[(9)]);var inst_64948 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64945);var state_65013__$1 = state_65013;var statearr_65035_65081 = state_65013__$1;(statearr_65035_65081[(2)] = inst_64948);
(statearr_65035_65081[(1)] = (4));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (23)))
{var inst_64998 = (state_65013[(2)]);var state_65013__$1 = state_65013;if(cljs.core.truth_(inst_64998))
{var statearr_65036_65082 = state_65013__$1;(statearr_65036_65082[(1)] = (24));
} else
{var statearr_65037_65083 = state_65013__$1;(statearr_65037_65083[(1)] = (25));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (19)))
{var inst_64995 = (state_65013[(2)]);var state_65013__$1 = state_65013;if(cljs.core.truth_(inst_64995))
{var statearr_65038_65084 = state_65013__$1;(statearr_65038_65084[(1)] = (20));
} else
{var statearr_65039_65085 = state_65013__$1;(statearr_65039_65085[(1)] = (21));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (11)))
{var inst_64970 = (state_65013[(8)]);var inst_64976 = (inst_64970 == null);var state_65013__$1 = state_65013;if(cljs.core.truth_(inst_64976))
{var statearr_65040_65086 = state_65013__$1;(statearr_65040_65086[(1)] = (14));
} else
{var statearr_65041_65087 = state_65013__$1;(statearr_65041_65087[(1)] = (15));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (9)))
{var inst_64963 = (state_65013[(10)]);var inst_64963__$1 = (state_65013[(2)]);var inst_64964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64963__$1,cljs.core.constant$keyword$1134);var inst_64965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64963__$1,cljs.core.constant$keyword$1133);var inst_64966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64963__$1,cljs.core.constant$keyword$1132);var state_65013__$1 = (function (){var statearr_65042 = state_65013;(statearr_65042[(17)] = inst_64965);
(statearr_65042[(15)] = inst_64966);
(statearr_65042[(10)] = inst_64963__$1);
return statearr_65042;
})();return cljs.core.async.ioc_alts_BANG_(state_65013__$1,(10),inst_64964);
} else
{if((state_val_65014 === (5)))
{var inst_64955 = (state_65013[(7)]);var inst_64958 = cljs.core.seq_QMARK_(inst_64955);var state_65013__$1 = state_65013;if(inst_64958)
{var statearr_65043_65088 = state_65013__$1;(statearr_65043_65088[(1)] = (7));
} else
{var statearr_65044_65089 = state_65013__$1;(statearr_65044_65089[(1)] = (8));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (14)))
{var inst_64971 = (state_65013[(16)]);var inst_64978 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_64971);var state_65013__$1 = state_65013;var statearr_65045_65090 = state_65013__$1;(statearr_65045_65090[(2)] = inst_64978);
(statearr_65045_65090[(1)] = (16));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (26)))
{var inst_65003 = (state_65013[(2)]);var state_65013__$1 = state_65013;var statearr_65046_65091 = state_65013__$1;(statearr_65046_65091[(2)] = inst_65003);
(statearr_65046_65091[(1)] = (22));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (16)))
{var inst_64981 = (state_65013[(2)]);var inst_64982 = calc_state();var inst_64955 = inst_64982;var state_65013__$1 = (function (){var statearr_65047 = state_65013;(statearr_65047[(7)] = inst_64955);
(statearr_65047[(18)] = inst_64981);
return statearr_65047;
})();var statearr_65048_65092 = state_65013__$1;(statearr_65048_65092[(2)] = null);
(statearr_65048_65092[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (10)))
{var inst_64970 = (state_65013[(8)]);var inst_64971 = (state_65013[(16)]);var inst_64969 = (state_65013[(2)]);var inst_64970__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64969,(0),null);var inst_64971__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64969,(1),null);var inst_64972 = (inst_64970__$1 == null);var inst_64973 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64971__$1,change);var inst_64974 = (inst_64972) || (inst_64973);var state_65013__$1 = (function (){var statearr_65049 = state_65013;(statearr_65049[(8)] = inst_64970__$1);
(statearr_65049[(16)] = inst_64971__$1);
return statearr_65049;
})();if(cljs.core.truth_(inst_64974))
{var statearr_65050_65093 = state_65013__$1;(statearr_65050_65093[(1)] = (11));
} else
{var statearr_65051_65094 = state_65013__$1;(statearr_65051_65094[(1)] = (12));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (18)))
{var inst_64965 = (state_65013[(17)]);var inst_64966 = (state_65013[(15)]);var inst_64971 = (state_65013[(16)]);var inst_64990 = cljs.core.empty_QMARK_(inst_64966);var inst_64991 = (function (){var G__65052 = inst_64971;return (inst_64965.cljs$core$IFn$_invoke$arity$1 ? inst_64965.cljs$core$IFn$_invoke$arity$1(G__65052) : inst_64965.call(null,G__65052));
})();var inst_64992 = cljs.core.not(inst_64991);var inst_64993 = (inst_64990) && (inst_64992);var state_65013__$1 = state_65013;var statearr_65053_65095 = state_65013__$1;(statearr_65053_65095[(2)] = inst_64993);
(statearr_65053_65095[(1)] = (19));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65014 === (8)))
{var inst_64955 = (state_65013[(7)]);var state_65013__$1 = state_65013;var statearr_65054_65096 = state_65013__$1;(statearr_65054_65096[(2)] = inst_64955);
(statearr_65054_65096[(1)] = (9));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___65066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5804__auto__,c__5819__auto___65066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_65058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65058[(0)] = state_machine__5805__auto__);
(statearr_65058[(1)] = (1));
return statearr_65058;
});
var state_machine__5805__auto____1 = (function (state_65013){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65013);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65059){if((e65059 instanceof Object))
{var ex__5808__auto__ = e65059;var statearr_65060_65097 = state_65013;(statearr_65060_65097[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65013);
return cljs.core.constant$keyword$1120;
} else
{throw e65059;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65098 = state_65013;
state_65013 = G__65098;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65013){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5821__auto__ = (function (){var statearr_65061 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65066);
return statearr_65061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj65100 = {};return obj65100;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__65104 = x__4273__auto__;return goog.typeOf(G__65104);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__65108 = x__4273__auto__;return goog.typeOf(G__65108);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__65114 = x__4273__auto__;return goog.typeOf(G__65114);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__65116 = x__4273__auto__;return goog.typeOf(G__65116);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__65255 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__65255) : cljs.core.atom.call(null,G__65255));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3637__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__65257 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__65257) : cljs.core.deref.call(null,G__65257));
})(),topic);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3637__auto__,mults){
return (function (p1__65117_SHARP_){if(cljs.core.truth_((function (){var G__65258 = topic;return (p1__65117_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__65117_SHARP_.cljs$core$IFn$_invoke$arity$1(G__65258) : p1__65117_SHARP_.call(null,G__65258));
})()))
{return p1__65117_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__65117_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__65259 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__65259) : buf_fn.call(null,G__65259));
})())));
}
});})(or__3637__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t65260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65260 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta65261){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta65261 = meta65261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65260.cljs$lang$type = true;
cljs.core.async.t65260.cljs$lang$ctorStr = "cljs.core.async/t65260";
cljs.core.async.t65260.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t65260");
});})(mults,ensure_mult))
;
cljs.core.async.t65260.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t65260.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__65263 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__65263) : self__.ensure_mult.call(null,G__65263));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t65260.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__65264 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__65264) : cljs.core.deref.call(null,G__65264));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t65260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__65265 = self__.mults;var G__65266 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__65265,G__65266) : cljs.core.reset_BANG_.call(null,G__65265,G__65266));
});})(mults,ensure_mult))
;
cljs.core.async.t65260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t65260.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t65260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t65260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_65262){var self__ = this;
var _65262__$1 = this;return self__.meta65261;
});})(mults,ensure_mult))
;
cljs.core.async.t65260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_65262,meta65261__$1){var self__ = this;
var _65262__$1 = this;return (new cljs.core.async.t65260(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta65261__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t65260 = ((function (mults,ensure_mult){
return (function __GT_t65260(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta65261){return (new cljs.core.async.t65260(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta65261));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t65260(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5819__auto___65389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65389,mults,ensure_mult,p){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65389,mults,ensure_mult,p){
return (function (state_65338){var state_val_65339 = (state_65338[(1)]);if((state_val_65339 === (7)))
{var inst_65334 = (state_65338[(2)]);var state_65338__$1 = state_65338;var statearr_65340_65390 = state_65338__$1;(statearr_65340_65390[(2)] = inst_65334);
(statearr_65340_65390[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (20)))
{var state_65338__$1 = state_65338;var statearr_65341_65391 = state_65338__$1;(statearr_65341_65391[(2)] = null);
(statearr_65341_65391[(1)] = (21));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (1)))
{var state_65338__$1 = state_65338;var statearr_65342_65392 = state_65338__$1;(statearr_65342_65392[(2)] = null);
(statearr_65342_65392[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (24)))
{var inst_65317 = (state_65338[(7)]);var inst_65326 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_65317);var state_65338__$1 = state_65338;var statearr_65343_65393 = state_65338__$1;(statearr_65343_65393[(2)] = inst_65326);
(statearr_65343_65393[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (4)))
{var inst_65269 = (state_65338[(8)]);var inst_65269__$1 = (state_65338[(2)]);var inst_65270 = (inst_65269__$1 == null);var state_65338__$1 = (function (){var statearr_65344 = state_65338;(statearr_65344[(8)] = inst_65269__$1);
return statearr_65344;
})();if(cljs.core.truth_(inst_65270))
{var statearr_65345_65394 = state_65338__$1;(statearr_65345_65394[(1)] = (5));
} else
{var statearr_65346_65395 = state_65338__$1;(statearr_65346_65395[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (15)))
{var inst_65311 = (state_65338[(2)]);var state_65338__$1 = state_65338;var statearr_65347_65396 = state_65338__$1;(statearr_65347_65396[(2)] = inst_65311);
(statearr_65347_65396[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (21)))
{var inst_65331 = (state_65338[(2)]);var state_65338__$1 = (function (){var statearr_65348 = state_65338;(statearr_65348[(9)] = inst_65331);
return statearr_65348;
})();var statearr_65349_65397 = state_65338__$1;(statearr_65349_65397[(2)] = null);
(statearr_65349_65397[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (13)))
{var inst_65293 = (state_65338[(10)]);var inst_65295 = cljs.core.chunked_seq_QMARK_(inst_65293);var state_65338__$1 = state_65338;if(inst_65295)
{var statearr_65350_65398 = state_65338__$1;(statearr_65350_65398[(1)] = (16));
} else
{var statearr_65351_65399 = state_65338__$1;(statearr_65351_65399[(1)] = (17));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (22)))
{var inst_65323 = (state_65338[(2)]);var state_65338__$1 = state_65338;if(cljs.core.truth_(inst_65323))
{var statearr_65352_65400 = state_65338__$1;(statearr_65352_65400[(1)] = (23));
} else
{var statearr_65353_65401 = state_65338__$1;(statearr_65353_65401[(1)] = (24));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (6)))
{var inst_65269 = (state_65338[(8)]);var inst_65319 = (state_65338[(11)]);var inst_65317 = (state_65338[(7)]);var inst_65317__$1 = (function (){var G__65354 = inst_65269;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__65354) : topic_fn.call(null,G__65354));
})();var inst_65318 = (function (){var G__65355 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__65355) : cljs.core.deref.call(null,G__65355));
})();var inst_65319__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65318,inst_65317__$1);var state_65338__$1 = (function (){var statearr_65356 = state_65338;(statearr_65356[(11)] = inst_65319__$1);
(statearr_65356[(7)] = inst_65317__$1);
return statearr_65356;
})();if(cljs.core.truth_(inst_65319__$1))
{var statearr_65357_65402 = state_65338__$1;(statearr_65357_65402[(1)] = (19));
} else
{var statearr_65358_65403 = state_65338__$1;(statearr_65358_65403[(1)] = (20));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (25)))
{var inst_65328 = (state_65338[(2)]);var state_65338__$1 = state_65338;var statearr_65359_65404 = state_65338__$1;(statearr_65359_65404[(2)] = inst_65328);
(statearr_65359_65404[(1)] = (21));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (17)))
{var inst_65293 = (state_65338[(10)]);var inst_65302 = cljs.core.first(inst_65293);var inst_65303 = cljs.core.async.muxch_STAR_(inst_65302);var inst_65304 = cljs.core.async.close_BANG_(inst_65303);var inst_65305 = cljs.core.next(inst_65293);var inst_65279 = inst_65305;var inst_65280 = null;var inst_65281 = (0);var inst_65282 = (0);var state_65338__$1 = (function (){var statearr_65360 = state_65338;(statearr_65360[(12)] = inst_65304);
(statearr_65360[(13)] = inst_65282);
(statearr_65360[(14)] = inst_65279);
(statearr_65360[(15)] = inst_65280);
(statearr_65360[(16)] = inst_65281);
return statearr_65360;
})();var statearr_65361_65405 = state_65338__$1;(statearr_65361_65405[(2)] = null);
(statearr_65361_65405[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (3)))
{var inst_65336 = (state_65338[(2)]);var state_65338__$1 = state_65338;return cljs.core.async.impl.ioc_helpers.return_chan(state_65338__$1,inst_65336);
} else
{if((state_val_65339 === (12)))
{var inst_65313 = (state_65338[(2)]);var state_65338__$1 = state_65338;var statearr_65362_65406 = state_65338__$1;(statearr_65362_65406[(2)] = inst_65313);
(statearr_65362_65406[(1)] = (9));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (2)))
{var state_65338__$1 = state_65338;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65338__$1,(4),ch);
} else
{if((state_val_65339 === (23)))
{var state_65338__$1 = state_65338;var statearr_65363_65407 = state_65338__$1;(statearr_65363_65407[(2)] = null);
(statearr_65363_65407[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (19)))
{var inst_65269 = (state_65338[(8)]);var inst_65319 = (state_65338[(11)]);var inst_65321 = cljs.core.async.muxch_STAR_(inst_65319);var state_65338__$1 = state_65338;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65338__$1,(22),inst_65321,inst_65269);
} else
{if((state_val_65339 === (11)))
{var inst_65279 = (state_65338[(14)]);var inst_65293 = (state_65338[(10)]);var inst_65293__$1 = cljs.core.seq(inst_65279);var state_65338__$1 = (function (){var statearr_65364 = state_65338;(statearr_65364[(10)] = inst_65293__$1);
return statearr_65364;
})();if(inst_65293__$1)
{var statearr_65365_65408 = state_65338__$1;(statearr_65365_65408[(1)] = (13));
} else
{var statearr_65366_65409 = state_65338__$1;(statearr_65366_65409[(1)] = (14));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (9)))
{var inst_65315 = (state_65338[(2)]);var state_65338__$1 = state_65338;var statearr_65367_65410 = state_65338__$1;(statearr_65367_65410[(2)] = inst_65315);
(statearr_65367_65410[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (5)))
{var inst_65276 = (function (){var G__65368 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__65368) : cljs.core.deref.call(null,G__65368));
})();var inst_65277 = cljs.core.vals(inst_65276);var inst_65278 = cljs.core.seq(inst_65277);var inst_65279 = inst_65278;var inst_65280 = null;var inst_65281 = (0);var inst_65282 = (0);var state_65338__$1 = (function (){var statearr_65369 = state_65338;(statearr_65369[(13)] = inst_65282);
(statearr_65369[(14)] = inst_65279);
(statearr_65369[(15)] = inst_65280);
(statearr_65369[(16)] = inst_65281);
return statearr_65369;
})();var statearr_65370_65411 = state_65338__$1;(statearr_65370_65411[(2)] = null);
(statearr_65370_65411[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (14)))
{var state_65338__$1 = state_65338;var statearr_65374_65412 = state_65338__$1;(statearr_65374_65412[(2)] = null);
(statearr_65374_65412[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (16)))
{var inst_65293 = (state_65338[(10)]);var inst_65297 = cljs.core.chunk_first(inst_65293);var inst_65298 = cljs.core.chunk_rest(inst_65293);var inst_65299 = cljs.core.count(inst_65297);var inst_65279 = inst_65298;var inst_65280 = inst_65297;var inst_65281 = inst_65299;var inst_65282 = (0);var state_65338__$1 = (function (){var statearr_65375 = state_65338;(statearr_65375[(13)] = inst_65282);
(statearr_65375[(14)] = inst_65279);
(statearr_65375[(15)] = inst_65280);
(statearr_65375[(16)] = inst_65281);
return statearr_65375;
})();var statearr_65376_65413 = state_65338__$1;(statearr_65376_65413[(2)] = null);
(statearr_65376_65413[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (10)))
{var inst_65282 = (state_65338[(13)]);var inst_65279 = (state_65338[(14)]);var inst_65280 = (state_65338[(15)]);var inst_65281 = (state_65338[(16)]);var inst_65287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_65280,inst_65282);var inst_65288 = cljs.core.async.muxch_STAR_(inst_65287);var inst_65289 = cljs.core.async.close_BANG_(inst_65288);var inst_65290 = (inst_65282 + (1));var tmp65371 = inst_65279;var tmp65372 = inst_65280;var tmp65373 = inst_65281;var inst_65279__$1 = tmp65371;var inst_65280__$1 = tmp65372;var inst_65281__$1 = tmp65373;var inst_65282__$1 = inst_65290;var state_65338__$1 = (function (){var statearr_65377 = state_65338;(statearr_65377[(13)] = inst_65282__$1);
(statearr_65377[(14)] = inst_65279__$1);
(statearr_65377[(17)] = inst_65289);
(statearr_65377[(15)] = inst_65280__$1);
(statearr_65377[(16)] = inst_65281__$1);
return statearr_65377;
})();var statearr_65378_65414 = state_65338__$1;(statearr_65378_65414[(2)] = null);
(statearr_65378_65414[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (18)))
{var inst_65308 = (state_65338[(2)]);var state_65338__$1 = state_65338;var statearr_65379_65415 = state_65338__$1;(statearr_65379_65415[(2)] = inst_65308);
(statearr_65379_65415[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65339 === (8)))
{var inst_65282 = (state_65338[(13)]);var inst_65281 = (state_65338[(16)]);var inst_65284 = (inst_65282 < inst_65281);var inst_65285 = inst_65284;var state_65338__$1 = state_65338;if(cljs.core.truth_(inst_65285))
{var statearr_65380_65416 = state_65338__$1;(statearr_65380_65416[(1)] = (10));
} else
{var statearr_65381_65417 = state_65338__$1;(statearr_65381_65417[(1)] = (11));
}
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___65389,mults,ensure_mult,p))
;return ((function (switch__5804__auto__,c__5819__auto___65389,mults,ensure_mult,p){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_65385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65385[(0)] = state_machine__5805__auto__);
(statearr_65385[(1)] = (1));
return statearr_65385;
});
var state_machine__5805__auto____1 = (function (state_65338){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65338);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65386){if((e65386 instanceof Object))
{var ex__5808__auto__ = e65386;var statearr_65387_65418 = state_65338;(statearr_65387_65418[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65338);
return cljs.core.constant$keyword$1120;
} else
{throw e65386;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65419 = state_65338;
state_65338 = G__65419;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65338){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65389,mults,ensure_mult,p))
})();var state__5821__auto__ = (function (){var statearr_65388 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65389);
return statearr_65388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65389,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__65500 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__65500) : cljs.core.atom.call(null,G__65500));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5819__auto___65573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65573,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65573,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_65539){var state_val_65540 = (state_65539[(1)]);if((state_val_65540 === (7)))
{var state_65539__$1 = state_65539;var statearr_65541_65574 = state_65539__$1;(statearr_65541_65574[(2)] = null);
(statearr_65541_65574[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (1)))
{var state_65539__$1 = state_65539;var statearr_65542_65575 = state_65539__$1;(statearr_65542_65575[(2)] = null);
(statearr_65542_65575[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (4)))
{var inst_65503 = (state_65539[(7)]);var inst_65505 = (inst_65503 < cnt);var state_65539__$1 = state_65539;if(cljs.core.truth_(inst_65505))
{var statearr_65543_65576 = state_65539__$1;(statearr_65543_65576[(1)] = (6));
} else
{var statearr_65544_65577 = state_65539__$1;(statearr_65544_65577[(1)] = (7));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (15)))
{var inst_65535 = (state_65539[(2)]);var state_65539__$1 = state_65539;var statearr_65545_65578 = state_65539__$1;(statearr_65545_65578[(2)] = inst_65535);
(statearr_65545_65578[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (13)))
{var inst_65528 = cljs.core.async.close_BANG_(out);var state_65539__$1 = state_65539;var statearr_65546_65579 = state_65539__$1;(statearr_65546_65579[(2)] = inst_65528);
(statearr_65546_65579[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (6)))
{var state_65539__$1 = state_65539;var statearr_65547_65580 = state_65539__$1;(statearr_65547_65580[(2)] = null);
(statearr_65547_65580[(1)] = (11));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (3)))
{var inst_65537 = (state_65539[(2)]);var state_65539__$1 = state_65539;return cljs.core.async.impl.ioc_helpers.return_chan(state_65539__$1,inst_65537);
} else
{if((state_val_65540 === (12)))
{var inst_65525 = (state_65539[(8)]);var inst_65525__$1 = (state_65539[(2)]);var inst_65526 = cljs.core.some(cljs.core.nil_QMARK_,inst_65525__$1);var state_65539__$1 = (function (){var statearr_65548 = state_65539;(statearr_65548[(8)] = inst_65525__$1);
return statearr_65548;
})();if(cljs.core.truth_(inst_65526))
{var statearr_65549_65581 = state_65539__$1;(statearr_65549_65581[(1)] = (13));
} else
{var statearr_65550_65582 = state_65539__$1;(statearr_65550_65582[(1)] = (14));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (2)))
{var inst_65502 = (function (){var G__65551 = dctr;var G__65552 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__65551,G__65552) : cljs.core.reset_BANG_.call(null,G__65551,G__65552));
})();var inst_65503 = (0);var state_65539__$1 = (function (){var statearr_65553 = state_65539;(statearr_65553[(7)] = inst_65503);
(statearr_65553[(9)] = inst_65502);
return statearr_65553;
})();var statearr_65554_65583 = state_65539__$1;(statearr_65554_65583[(2)] = null);
(statearr_65554_65583[(1)] = (4));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (11)))
{var inst_65503 = (state_65539[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_65539,(10),Object,null,(9));var inst_65512 = (function (){var G__65555 = inst_65503;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__65555) : chs__$1.call(null,G__65555));
})();var inst_65513 = (function (){var G__65556 = inst_65503;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__65556) : done.call(null,G__65556));
})();var inst_65514 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_65512,inst_65513);var state_65539__$1 = state_65539;var statearr_65557_65584 = state_65539__$1;(statearr_65557_65584[(2)] = inst_65514);
cljs.core.async.impl.ioc_helpers.process_exception(state_65539__$1);
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (9)))
{var inst_65503 = (state_65539[(7)]);var inst_65516 = (state_65539[(2)]);var inst_65517 = (inst_65503 + (1));var inst_65503__$1 = inst_65517;var state_65539__$1 = (function (){var statearr_65558 = state_65539;(statearr_65558[(7)] = inst_65503__$1);
(statearr_65558[(10)] = inst_65516);
return statearr_65558;
})();var statearr_65559_65585 = state_65539__$1;(statearr_65559_65585[(2)] = null);
(statearr_65559_65585[(1)] = (4));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (5)))
{var inst_65523 = (state_65539[(2)]);var state_65539__$1 = (function (){var statearr_65560 = state_65539;(statearr_65560[(11)] = inst_65523);
return statearr_65560;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65539__$1,(12),dchan);
} else
{if((state_val_65540 === (14)))
{var inst_65525 = (state_65539[(8)]);var inst_65530 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_65525);var state_65539__$1 = state_65539;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65539__$1,(16),out,inst_65530);
} else
{if((state_val_65540 === (16)))
{var inst_65532 = (state_65539[(2)]);var state_65539__$1 = (function (){var statearr_65561 = state_65539;(statearr_65561[(12)] = inst_65532);
return statearr_65561;
})();var statearr_65562_65586 = state_65539__$1;(statearr_65562_65586[(2)] = null);
(statearr_65562_65586[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (10)))
{var inst_65507 = (state_65539[(2)]);var inst_65508 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_65539__$1 = (function (){var statearr_65563 = state_65539;(statearr_65563[(13)] = inst_65507);
return statearr_65563;
})();var statearr_65564_65587 = state_65539__$1;(statearr_65564_65587[(2)] = inst_65508);
cljs.core.async.impl.ioc_helpers.process_exception(state_65539__$1);
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65540 === (8)))
{var inst_65521 = (state_65539[(2)]);var state_65539__$1 = state_65539;var statearr_65565_65588 = state_65539__$1;(statearr_65565_65588[(2)] = inst_65521);
(statearr_65565_65588[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___65573,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___65573,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_65569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65569[(0)] = state_machine__5805__auto__);
(statearr_65569[(1)] = (1));
return statearr_65569;
});
var state_machine__5805__auto____1 = (function (state_65539){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65539);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65570){if((e65570 instanceof Object))
{var ex__5808__auto__ = e65570;var statearr_65571_65589 = state_65539;(statearr_65571_65589[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65539);
return cljs.core.constant$keyword$1120;
} else
{throw e65570;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65590 = state_65539;
state_65539 = G__65590;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65539){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65573,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_65572 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65573);
return statearr_65572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65573,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___65700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65700,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65700,out){
return (function (state_65676){var state_val_65677 = (state_65676[(1)]);if((state_val_65677 === (7)))
{var inst_65656 = (state_65676[(7)]);var inst_65655 = (state_65676[(8)]);var inst_65655__$1 = (state_65676[(2)]);var inst_65656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65655__$1,(0),null);var inst_65657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65655__$1,(1),null);var inst_65658 = (inst_65656__$1 == null);var state_65676__$1 = (function (){var statearr_65678 = state_65676;(statearr_65678[(7)] = inst_65656__$1);
(statearr_65678[(9)] = inst_65657);
(statearr_65678[(8)] = inst_65655__$1);
return statearr_65678;
})();if(cljs.core.truth_(inst_65658))
{var statearr_65679_65701 = state_65676__$1;(statearr_65679_65701[(1)] = (8));
} else
{var statearr_65680_65702 = state_65676__$1;(statearr_65680_65702[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65677 === (1)))
{var inst_65647 = cljs.core.vec(chs);var inst_65648 = inst_65647;var state_65676__$1 = (function (){var statearr_65681 = state_65676;(statearr_65681[(10)] = inst_65648);
return statearr_65681;
})();var statearr_65682_65703 = state_65676__$1;(statearr_65682_65703[(2)] = null);
(statearr_65682_65703[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65677 === (4)))
{var inst_65648 = (state_65676[(10)]);var state_65676__$1 = state_65676;return cljs.core.async.ioc_alts_BANG_(state_65676__$1,(7),inst_65648);
} else
{if((state_val_65677 === (6)))
{var inst_65672 = (state_65676[(2)]);var state_65676__$1 = state_65676;var statearr_65683_65704 = state_65676__$1;(statearr_65683_65704[(2)] = inst_65672);
(statearr_65683_65704[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65677 === (3)))
{var inst_65674 = (state_65676[(2)]);var state_65676__$1 = state_65676;return cljs.core.async.impl.ioc_helpers.return_chan(state_65676__$1,inst_65674);
} else
{if((state_val_65677 === (2)))
{var inst_65648 = (state_65676[(10)]);var inst_65650 = cljs.core.count(inst_65648);var inst_65651 = (inst_65650 > (0));var state_65676__$1 = state_65676;if(cljs.core.truth_(inst_65651))
{var statearr_65685_65705 = state_65676__$1;(statearr_65685_65705[(1)] = (4));
} else
{var statearr_65686_65706 = state_65676__$1;(statearr_65686_65706[(1)] = (5));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65677 === (11)))
{var inst_65648 = (state_65676[(10)]);var inst_65665 = (state_65676[(2)]);var tmp65684 = inst_65648;var inst_65648__$1 = tmp65684;var state_65676__$1 = (function (){var statearr_65687 = state_65676;(statearr_65687[(11)] = inst_65665);
(statearr_65687[(10)] = inst_65648__$1);
return statearr_65687;
})();var statearr_65688_65707 = state_65676__$1;(statearr_65688_65707[(2)] = null);
(statearr_65688_65707[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65677 === (9)))
{var inst_65656 = (state_65676[(7)]);var state_65676__$1 = state_65676;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65676__$1,(11),out,inst_65656);
} else
{if((state_val_65677 === (5)))
{var inst_65670 = cljs.core.async.close_BANG_(out);var state_65676__$1 = state_65676;var statearr_65689_65708 = state_65676__$1;(statearr_65689_65708[(2)] = inst_65670);
(statearr_65689_65708[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65677 === (10)))
{var inst_65668 = (state_65676[(2)]);var state_65676__$1 = state_65676;var statearr_65690_65709 = state_65676__$1;(statearr_65690_65709[(2)] = inst_65668);
(statearr_65690_65709[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65677 === (8)))
{var inst_65656 = (state_65676[(7)]);var inst_65657 = (state_65676[(9)]);var inst_65655 = (state_65676[(8)]);var inst_65648 = (state_65676[(10)]);var inst_65660 = (function (){var c = inst_65657;var v = inst_65656;var vec__65653 = inst_65655;var cs = inst_65648;return ((function (c,v,vec__65653,cs,inst_65656,inst_65657,inst_65655,inst_65648,state_val_65677,c__5819__auto___65700,out){
return (function (p1__65591_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__65591_SHARP_);
});
;})(c,v,vec__65653,cs,inst_65656,inst_65657,inst_65655,inst_65648,state_val_65677,c__5819__auto___65700,out))
})();var inst_65661 = cljs.core.filterv(inst_65660,inst_65648);var inst_65648__$1 = inst_65661;var state_65676__$1 = (function (){var statearr_65691 = state_65676;(statearr_65691[(10)] = inst_65648__$1);
return statearr_65691;
})();var statearr_65692_65710 = state_65676__$1;(statearr_65692_65710[(2)] = null);
(statearr_65692_65710[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___65700,out))
;return ((function (switch__5804__auto__,c__5819__auto___65700,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_65696 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65696[(0)] = state_machine__5805__auto__);
(statearr_65696[(1)] = (1));
return statearr_65696;
});
var state_machine__5805__auto____1 = (function (state_65676){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65676);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65697){if((e65697 instanceof Object))
{var ex__5808__auto__ = e65697;var statearr_65698_65711 = state_65676;(statearr_65698_65711[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65676);
return cljs.core.constant$keyword$1120;
} else
{throw e65697;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65712 = state_65676;
state_65676 = G__65712;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65676){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65700,out))
})();var state__5821__auto__ = (function (){var statearr_65699 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65700);
return statearr_65699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65700,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___65808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65808,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65808,out){
return (function (state_65785){var state_val_65786 = (state_65785[(1)]);if((state_val_65786 === (7)))
{var inst_65767 = (state_65785[(7)]);var inst_65767__$1 = (state_65785[(2)]);var inst_65768 = (inst_65767__$1 == null);var inst_65769 = cljs.core.not(inst_65768);var state_65785__$1 = (function (){var statearr_65787 = state_65785;(statearr_65787[(7)] = inst_65767__$1);
return statearr_65787;
})();if(inst_65769)
{var statearr_65788_65809 = state_65785__$1;(statearr_65788_65809[(1)] = (8));
} else
{var statearr_65789_65810 = state_65785__$1;(statearr_65789_65810[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65786 === (1)))
{var inst_65762 = (0);var state_65785__$1 = (function (){var statearr_65790 = state_65785;(statearr_65790[(8)] = inst_65762);
return statearr_65790;
})();var statearr_65791_65811 = state_65785__$1;(statearr_65791_65811[(2)] = null);
(statearr_65791_65811[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65786 === (4)))
{var state_65785__$1 = state_65785;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65785__$1,(7),ch);
} else
{if((state_val_65786 === (6)))
{var inst_65780 = (state_65785[(2)]);var state_65785__$1 = state_65785;var statearr_65792_65812 = state_65785__$1;(statearr_65792_65812[(2)] = inst_65780);
(statearr_65792_65812[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65786 === (3)))
{var inst_65782 = (state_65785[(2)]);var inst_65783 = cljs.core.async.close_BANG_(out);var state_65785__$1 = (function (){var statearr_65793 = state_65785;(statearr_65793[(9)] = inst_65782);
return statearr_65793;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_65785__$1,inst_65783);
} else
{if((state_val_65786 === (2)))
{var inst_65762 = (state_65785[(8)]);var inst_65764 = (inst_65762 < n);var state_65785__$1 = state_65785;if(cljs.core.truth_(inst_65764))
{var statearr_65794_65813 = state_65785__$1;(statearr_65794_65813[(1)] = (4));
} else
{var statearr_65795_65814 = state_65785__$1;(statearr_65795_65814[(1)] = (5));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65786 === (11)))
{var inst_65762 = (state_65785[(8)]);var inst_65772 = (state_65785[(2)]);var inst_65773 = (inst_65762 + (1));var inst_65762__$1 = inst_65773;var state_65785__$1 = (function (){var statearr_65796 = state_65785;(statearr_65796[(10)] = inst_65772);
(statearr_65796[(8)] = inst_65762__$1);
return statearr_65796;
})();var statearr_65797_65815 = state_65785__$1;(statearr_65797_65815[(2)] = null);
(statearr_65797_65815[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65786 === (9)))
{var state_65785__$1 = state_65785;var statearr_65798_65816 = state_65785__$1;(statearr_65798_65816[(2)] = null);
(statearr_65798_65816[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65786 === (5)))
{var state_65785__$1 = state_65785;var statearr_65799_65817 = state_65785__$1;(statearr_65799_65817[(2)] = null);
(statearr_65799_65817[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65786 === (10)))
{var inst_65777 = (state_65785[(2)]);var state_65785__$1 = state_65785;var statearr_65800_65818 = state_65785__$1;(statearr_65800_65818[(2)] = inst_65777);
(statearr_65800_65818[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65786 === (8)))
{var inst_65767 = (state_65785[(7)]);var state_65785__$1 = state_65785;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65785__$1,(11),out,inst_65767);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___65808,out))
;return ((function (switch__5804__auto__,c__5819__auto___65808,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_65804 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_65804[(0)] = state_machine__5805__auto__);
(statearr_65804[(1)] = (1));
return statearr_65804;
});
var state_machine__5805__auto____1 = (function (state_65785){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65785);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65805){if((e65805 instanceof Object))
{var ex__5808__auto__ = e65805;var statearr_65806_65819 = state_65785;(statearr_65806_65819[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65785);
return cljs.core.constant$keyword$1120;
} else
{throw e65805;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65820 = state_65785;
state_65785 = G__65820;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65785){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65808,out))
})();var state__5821__auto__ = (function (){var statearr_65807 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65808);
return statearr_65807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65808,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t65833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65833 = (function (ch,f,map_LT_,meta65834){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta65834 = meta65834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65833.cljs$lang$type = true;
cljs.core.async.t65833.cljs$lang$ctorStr = "cljs.core.async/t65833";
cljs.core.async.t65833.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t65833");
});
cljs.core.async.t65833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t65833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t65833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t65833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t65836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65836 = (function (fn1,_,meta65834,ch,f,map_LT_,meta65837){
this.fn1 = fn1;
this._ = _;
this.meta65834 = meta65834;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta65837 = meta65837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65836.cljs$lang$type = true;
cljs.core.async.t65836.cljs$lang$ctorStr = "cljs.core.async/t65836";
cljs.core.async.t65836.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t65836");
});})(___$1))
;
cljs.core.async.t65836.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t65836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t65836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__65821_SHARP_){var G__65839 = (((p1__65821_SHARP_ == null))?null:(function (){var G__65840 = p1__65821_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__65840) : self__.f.call(null,G__65840));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__65839) : f1.call(null,G__65839));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t65836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_65838){var self__ = this;
var _65838__$1 = this;return self__.meta65837;
});})(___$1))
;
cljs.core.async.t65836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_65838,meta65837__$1){var self__ = this;
var _65838__$1 = this;return (new cljs.core.async.t65836(self__.fn1,self__._,self__.meta65834,self__.ch,self__.f,self__.map_LT_,meta65837__$1));
});})(___$1))
;
cljs.core.async.__GT_t65836 = ((function (___$1){
return (function __GT_t65836(fn1__$1,___$2,meta65834__$1,ch__$2,f__$2,map_LT___$2,meta65837){return (new cljs.core.async.t65836(fn1__$1,___$2,meta65834__$1,ch__$2,f__$2,map_LT___$2,meta65837));
});})(___$1))
;
}
return (new cljs.core.async.t65836(fn1,___$1,self__.meta65834,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3625__auto__ = ret;if(cljs.core.truth_(and__3625__auto__))
{return !(((function (){var G__65841 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__65841) : cljs.core.deref.call(null,G__65841));
})() == null));
} else
{return and__3625__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__65842 = (function (){var G__65843 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__65843) : cljs.core.deref.call(null,G__65843));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__65842) : self__.f.call(null,G__65842));
})());
} else
{return ret;
}
});
cljs.core.async.t65833.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t65833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t65833.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t65833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65835){var self__ = this;
var _65835__$1 = this;return self__.meta65834;
});
cljs.core.async.t65833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65835,meta65834__$1){var self__ = this;
var _65835__$1 = this;return (new cljs.core.async.t65833(self__.ch,self__.f,self__.map_LT_,meta65834__$1));
});
cljs.core.async.__GT_t65833 = (function __GT_t65833(ch__$1,f__$1,map_LT___$1,meta65834){return (new cljs.core.async.t65833(ch__$1,f__$1,map_LT___$1,meta65834));
});
}
return (new cljs.core.async.t65833(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t65848 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65848 = (function (ch,f,map_GT_,meta65849){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta65849 = meta65849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65848.cljs$lang$type = true;
cljs.core.async.t65848.cljs$lang$ctorStr = "cljs.core.async/t65848";
cljs.core.async.t65848.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t65848");
});
cljs.core.async.t65848.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t65848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__65851 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__65851) : self__.f.call(null,G__65851));
})(),fn1);
});
cljs.core.async.t65848.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t65848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t65848.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t65848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t65848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65850){var self__ = this;
var _65850__$1 = this;return self__.meta65849;
});
cljs.core.async.t65848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65850,meta65849__$1){var self__ = this;
var _65850__$1 = this;return (new cljs.core.async.t65848(self__.ch,self__.f,self__.map_GT_,meta65849__$1));
});
cljs.core.async.__GT_t65848 = (function __GT_t65848(ch__$1,f__$1,map_GT___$1,meta65849){return (new cljs.core.async.t65848(ch__$1,f__$1,map_GT___$1,meta65849));
});
}
return (new cljs.core.async.t65848(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t65856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65856 = (function (ch,p,filter_GT_,meta65857){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta65857 = meta65857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65856.cljs$lang$type = true;
cljs.core.async.t65856.cljs$lang$ctorStr = "cljs.core.async/t65856";
cljs.core.async.t65856.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t65856");
});
cljs.core.async.t65856.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t65856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__65859 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__65859) : self__.p.call(null,G__65859));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t65856.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t65856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t65856.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t65856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t65856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t65856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65858){var self__ = this;
var _65858__$1 = this;return self__.meta65857;
});
cljs.core.async.t65856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65858,meta65857__$1){var self__ = this;
var _65858__$1 = this;return (new cljs.core.async.t65856(self__.ch,self__.p,self__.filter_GT_,meta65857__$1));
});
cljs.core.async.__GT_t65856 = (function __GT_t65856(ch__$1,p__$1,filter_GT___$1,meta65857){return (new cljs.core.async.t65856(ch__$1,p__$1,filter_GT___$1,meta65857));
});
}
return (new cljs.core.async.t65856(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___65947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65947,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65947,out){
return (function (state_65925){var state_val_65926 = (state_65925[(1)]);if((state_val_65926 === (7)))
{var inst_65921 = (state_65925[(2)]);var state_65925__$1 = state_65925;var statearr_65927_65948 = state_65925__$1;(statearr_65927_65948[(2)] = inst_65921);
(statearr_65927_65948[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65926 === (1)))
{var state_65925__$1 = state_65925;var statearr_65928_65949 = state_65925__$1;(statearr_65928_65949[(2)] = null);
(statearr_65928_65949[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65926 === (4)))
{var inst_65907 = (state_65925[(7)]);var inst_65907__$1 = (state_65925[(2)]);var inst_65908 = (inst_65907__$1 == null);var state_65925__$1 = (function (){var statearr_65929 = state_65925;(statearr_65929[(7)] = inst_65907__$1);
return statearr_65929;
})();if(cljs.core.truth_(inst_65908))
{var statearr_65930_65950 = state_65925__$1;(statearr_65930_65950[(1)] = (5));
} else
{var statearr_65931_65951 = state_65925__$1;(statearr_65931_65951[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65926 === (6)))
{var inst_65907 = (state_65925[(7)]);var inst_65912 = (function (){var G__65932 = inst_65907;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__65932) : p.call(null,G__65932));
})();var state_65925__$1 = state_65925;if(cljs.core.truth_(inst_65912))
{var statearr_65933_65952 = state_65925__$1;(statearr_65933_65952[(1)] = (8));
} else
{var statearr_65934_65953 = state_65925__$1;(statearr_65934_65953[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65926 === (3)))
{var inst_65923 = (state_65925[(2)]);var state_65925__$1 = state_65925;return cljs.core.async.impl.ioc_helpers.return_chan(state_65925__$1,inst_65923);
} else
{if((state_val_65926 === (2)))
{var state_65925__$1 = state_65925;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65925__$1,(4),ch);
} else
{if((state_val_65926 === (11)))
{var inst_65915 = (state_65925[(2)]);var state_65925__$1 = state_65925;var statearr_65935_65954 = state_65925__$1;(statearr_65935_65954[(2)] = inst_65915);
(statearr_65935_65954[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65926 === (9)))
{var state_65925__$1 = state_65925;var statearr_65936_65955 = state_65925__$1;(statearr_65936_65955[(2)] = null);
(statearr_65936_65955[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65926 === (5)))
{var inst_65910 = cljs.core.async.close_BANG_(out);var state_65925__$1 = state_65925;var statearr_65937_65956 = state_65925__$1;(statearr_65937_65956[(2)] = inst_65910);
(statearr_65937_65956[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65926 === (10)))
{var inst_65918 = (state_65925[(2)]);var state_65925__$1 = (function (){var statearr_65938 = state_65925;(statearr_65938[(8)] = inst_65918);
return statearr_65938;
})();var statearr_65939_65957 = state_65925__$1;(statearr_65939_65957[(2)] = null);
(statearr_65939_65957[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65926 === (8)))
{var inst_65907 = (state_65925[(7)]);var state_65925__$1 = state_65925;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65925__$1,(11),out,inst_65907);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___65947,out))
;return ((function (switch__5804__auto__,c__5819__auto___65947,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_65943 = [null,null,null,null,null,null,null,null,null];(statearr_65943[(0)] = state_machine__5805__auto__);
(statearr_65943[(1)] = (1));
return statearr_65943;
});
var state_machine__5805__auto____1 = (function (state_65925){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65925);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65944){if((e65944 instanceof Object))
{var ex__5808__auto__ = e65944;var statearr_65945_65958 = state_65925;(statearr_65945_65958[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65925);
return cljs.core.constant$keyword$1120;
} else
{throw e65944;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65959 = state_65925;
state_65925 = G__65959;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65925){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65947,out))
})();var state__5821__auto__ = (function (){var statearr_65946 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65947);
return statearr_65946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65947,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_66129){var state_val_66130 = (state_66129[(1)]);if((state_val_66130 === (7)))
{var inst_66125 = (state_66129[(2)]);var state_66129__$1 = state_66129;var statearr_66131_66173 = state_66129__$1;(statearr_66131_66173[(2)] = inst_66125);
(statearr_66131_66173[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (20)))
{var inst_66095 = (state_66129[(7)]);var inst_66106 = (state_66129[(2)]);var inst_66107 = cljs.core.next(inst_66095);var inst_66081 = inst_66107;var inst_66082 = null;var inst_66083 = (0);var inst_66084 = (0);var state_66129__$1 = (function (){var statearr_66132 = state_66129;(statearr_66132[(8)] = inst_66083);
(statearr_66132[(9)] = inst_66081);
(statearr_66132[(10)] = inst_66084);
(statearr_66132[(11)] = inst_66082);
(statearr_66132[(12)] = inst_66106);
return statearr_66132;
})();var statearr_66133_66174 = state_66129__$1;(statearr_66133_66174[(2)] = null);
(statearr_66133_66174[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (1)))
{var state_66129__$1 = state_66129;var statearr_66134_66175 = state_66129__$1;(statearr_66134_66175[(2)] = null);
(statearr_66134_66175[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (4)))
{var inst_66070 = (state_66129[(13)]);var inst_66070__$1 = (state_66129[(2)]);var inst_66071 = (inst_66070__$1 == null);var state_66129__$1 = (function (){var statearr_66135 = state_66129;(statearr_66135[(13)] = inst_66070__$1);
return statearr_66135;
})();if(cljs.core.truth_(inst_66071))
{var statearr_66136_66176 = state_66129__$1;(statearr_66136_66176[(1)] = (5));
} else
{var statearr_66137_66177 = state_66129__$1;(statearr_66137_66177[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (15)))
{var state_66129__$1 = state_66129;var statearr_66141_66178 = state_66129__$1;(statearr_66141_66178[(2)] = null);
(statearr_66141_66178[(1)] = (16));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (21)))
{var state_66129__$1 = state_66129;var statearr_66142_66179 = state_66129__$1;(statearr_66142_66179[(2)] = null);
(statearr_66142_66179[(1)] = (23));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (13)))
{var inst_66083 = (state_66129[(8)]);var inst_66081 = (state_66129[(9)]);var inst_66084 = (state_66129[(10)]);var inst_66082 = (state_66129[(11)]);var inst_66091 = (state_66129[(2)]);var inst_66092 = (inst_66084 + (1));var tmp66138 = inst_66083;var tmp66139 = inst_66081;var tmp66140 = inst_66082;var inst_66081__$1 = tmp66139;var inst_66082__$1 = tmp66140;var inst_66083__$1 = tmp66138;var inst_66084__$1 = inst_66092;var state_66129__$1 = (function (){var statearr_66143 = state_66129;(statearr_66143[(8)] = inst_66083__$1);
(statearr_66143[(9)] = inst_66081__$1);
(statearr_66143[(10)] = inst_66084__$1);
(statearr_66143[(11)] = inst_66082__$1);
(statearr_66143[(14)] = inst_66091);
return statearr_66143;
})();var statearr_66144_66180 = state_66129__$1;(statearr_66144_66180[(2)] = null);
(statearr_66144_66180[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (22)))
{var state_66129__$1 = state_66129;var statearr_66145_66181 = state_66129__$1;(statearr_66145_66181[(2)] = null);
(statearr_66145_66181[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (6)))
{var inst_66070 = (state_66129[(13)]);var inst_66079 = (function (){var G__66146 = inst_66070;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66146) : f.call(null,G__66146));
})();var inst_66080 = cljs.core.seq(inst_66079);var inst_66081 = inst_66080;var inst_66082 = null;var inst_66083 = (0);var inst_66084 = (0);var state_66129__$1 = (function (){var statearr_66147 = state_66129;(statearr_66147[(8)] = inst_66083);
(statearr_66147[(9)] = inst_66081);
(statearr_66147[(10)] = inst_66084);
(statearr_66147[(11)] = inst_66082);
return statearr_66147;
})();var statearr_66148_66182 = state_66129__$1;(statearr_66148_66182[(2)] = null);
(statearr_66148_66182[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (17)))
{var inst_66095 = (state_66129[(7)]);var inst_66099 = cljs.core.chunk_first(inst_66095);var inst_66100 = cljs.core.chunk_rest(inst_66095);var inst_66101 = cljs.core.count(inst_66099);var inst_66081 = inst_66100;var inst_66082 = inst_66099;var inst_66083 = inst_66101;var inst_66084 = (0);var state_66129__$1 = (function (){var statearr_66149 = state_66129;(statearr_66149[(8)] = inst_66083);
(statearr_66149[(9)] = inst_66081);
(statearr_66149[(10)] = inst_66084);
(statearr_66149[(11)] = inst_66082);
return statearr_66149;
})();var statearr_66150_66183 = state_66129__$1;(statearr_66150_66183[(2)] = null);
(statearr_66150_66183[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (3)))
{var inst_66127 = (state_66129[(2)]);var state_66129__$1 = state_66129;return cljs.core.async.impl.ioc_helpers.return_chan(state_66129__$1,inst_66127);
} else
{if((state_val_66130 === (12)))
{var inst_66115 = (state_66129[(2)]);var state_66129__$1 = state_66129;var statearr_66151_66184 = state_66129__$1;(statearr_66151_66184[(2)] = inst_66115);
(statearr_66151_66184[(1)] = (9));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (2)))
{var state_66129__$1 = state_66129;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66129__$1,(4),in$);
} else
{if((state_val_66130 === (23)))
{var inst_66123 = (state_66129[(2)]);var state_66129__$1 = state_66129;var statearr_66152_66185 = state_66129__$1;(statearr_66152_66185[(2)] = inst_66123);
(statearr_66152_66185[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (19)))
{var inst_66110 = (state_66129[(2)]);var state_66129__$1 = state_66129;var statearr_66153_66186 = state_66129__$1;(statearr_66153_66186[(2)] = inst_66110);
(statearr_66153_66186[(1)] = (16));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (11)))
{var inst_66095 = (state_66129[(7)]);var inst_66081 = (state_66129[(9)]);var inst_66095__$1 = cljs.core.seq(inst_66081);var state_66129__$1 = (function (){var statearr_66154 = state_66129;(statearr_66154[(7)] = inst_66095__$1);
return statearr_66154;
})();if(inst_66095__$1)
{var statearr_66155_66187 = state_66129__$1;(statearr_66155_66187[(1)] = (14));
} else
{var statearr_66156_66188 = state_66129__$1;(statearr_66156_66188[(1)] = (15));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (9)))
{var inst_66117 = (state_66129[(2)]);var inst_66118 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_66129__$1 = (function (){var statearr_66157 = state_66129;(statearr_66157[(15)] = inst_66117);
return statearr_66157;
})();if(cljs.core.truth_(inst_66118))
{var statearr_66158_66189 = state_66129__$1;(statearr_66158_66189[(1)] = (21));
} else
{var statearr_66159_66190 = state_66129__$1;(statearr_66159_66190[(1)] = (22));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (5)))
{var inst_66073 = cljs.core.async.close_BANG_(out);var state_66129__$1 = state_66129;var statearr_66160_66191 = state_66129__$1;(statearr_66160_66191[(2)] = inst_66073);
(statearr_66160_66191[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (14)))
{var inst_66095 = (state_66129[(7)]);var inst_66097 = cljs.core.chunked_seq_QMARK_(inst_66095);var state_66129__$1 = state_66129;if(inst_66097)
{var statearr_66161_66192 = state_66129__$1;(statearr_66161_66192[(1)] = (17));
} else
{var statearr_66162_66193 = state_66129__$1;(statearr_66162_66193[(1)] = (18));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (16)))
{var inst_66113 = (state_66129[(2)]);var state_66129__$1 = state_66129;var statearr_66163_66194 = state_66129__$1;(statearr_66163_66194[(2)] = inst_66113);
(statearr_66163_66194[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66130 === (10)))
{var inst_66084 = (state_66129[(10)]);var inst_66082 = (state_66129[(11)]);var inst_66089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_66082,inst_66084);var state_66129__$1 = state_66129;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66129__$1,(13),out,inst_66089);
} else
{if((state_val_66130 === (18)))
{var inst_66095 = (state_66129[(7)]);var inst_66104 = cljs.core.first(inst_66095);var state_66129__$1 = state_66129;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66129__$1,(20),out,inst_66104);
} else
{if((state_val_66130 === (8)))
{var inst_66083 = (state_66129[(8)]);var inst_66084 = (state_66129[(10)]);var inst_66086 = (inst_66084 < inst_66083);var inst_66087 = inst_66086;var state_66129__$1 = state_66129;if(cljs.core.truth_(inst_66087))
{var statearr_66164_66195 = state_66129__$1;(statearr_66164_66195[(1)] = (10));
} else
{var statearr_66165_66196 = state_66129__$1;(statearr_66165_66196[(1)] = (11));
}
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_66169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66169[(0)] = state_machine__5805__auto__);
(statearr_66169[(1)] = (1));
return statearr_66169;
});
var state_machine__5805__auto____1 = (function (state_66129){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_66129);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e66170){if((e66170 instanceof Object))
{var ex__5808__auto__ = e66170;var statearr_66171_66197 = state_66129;(statearr_66171_66197[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_66129);
return cljs.core.constant$keyword$1120;
} else
{throw e66170;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__66198 = state_66129;
state_66129 = G__66198;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_66129){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_66129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_66172 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_66172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_66172;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___66303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___66303,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___66303,out){
return (function (state_66278){var state_val_66279 = (state_66278[(1)]);if((state_val_66279 === (7)))
{var inst_66273 = (state_66278[(2)]);var state_66278__$1 = state_66278;var statearr_66280_66304 = state_66278__$1;(statearr_66280_66304[(2)] = inst_66273);
(statearr_66280_66304[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66279 === (1)))
{var inst_66255 = null;var state_66278__$1 = (function (){var statearr_66281 = state_66278;(statearr_66281[(7)] = inst_66255);
return statearr_66281;
})();var statearr_66282_66305 = state_66278__$1;(statearr_66282_66305[(2)] = null);
(statearr_66282_66305[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66279 === (4)))
{var inst_66258 = (state_66278[(8)]);var inst_66258__$1 = (state_66278[(2)]);var inst_66259 = (inst_66258__$1 == null);var inst_66260 = cljs.core.not(inst_66259);var state_66278__$1 = (function (){var statearr_66283 = state_66278;(statearr_66283[(8)] = inst_66258__$1);
return statearr_66283;
})();if(inst_66260)
{var statearr_66284_66306 = state_66278__$1;(statearr_66284_66306[(1)] = (5));
} else
{var statearr_66285_66307 = state_66278__$1;(statearr_66285_66307[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66279 === (6)))
{var state_66278__$1 = state_66278;var statearr_66286_66308 = state_66278__$1;(statearr_66286_66308[(2)] = null);
(statearr_66286_66308[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66279 === (3)))
{var inst_66275 = (state_66278[(2)]);var inst_66276 = cljs.core.async.close_BANG_(out);var state_66278__$1 = (function (){var statearr_66287 = state_66278;(statearr_66287[(9)] = inst_66275);
return statearr_66287;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_66278__$1,inst_66276);
} else
{if((state_val_66279 === (2)))
{var state_66278__$1 = state_66278;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66278__$1,(4),ch);
} else
{if((state_val_66279 === (11)))
{var inst_66258 = (state_66278[(8)]);var inst_66267 = (state_66278[(2)]);var inst_66255 = inst_66258;var state_66278__$1 = (function (){var statearr_66288 = state_66278;(statearr_66288[(7)] = inst_66255);
(statearr_66288[(10)] = inst_66267);
return statearr_66288;
})();var statearr_66289_66309 = state_66278__$1;(statearr_66289_66309[(2)] = null);
(statearr_66289_66309[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66279 === (9)))
{var inst_66258 = (state_66278[(8)]);var state_66278__$1 = state_66278;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66278__$1,(11),out,inst_66258);
} else
{if((state_val_66279 === (5)))
{var inst_66255 = (state_66278[(7)]);var inst_66258 = (state_66278[(8)]);var inst_66262 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66258,inst_66255);var state_66278__$1 = state_66278;if(inst_66262)
{var statearr_66291_66310 = state_66278__$1;(statearr_66291_66310[(1)] = (8));
} else
{var statearr_66292_66311 = state_66278__$1;(statearr_66292_66311[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66279 === (10)))
{var inst_66270 = (state_66278[(2)]);var state_66278__$1 = state_66278;var statearr_66293_66312 = state_66278__$1;(statearr_66293_66312[(2)] = inst_66270);
(statearr_66293_66312[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66279 === (8)))
{var inst_66255 = (state_66278[(7)]);var tmp66290 = inst_66255;var inst_66255__$1 = tmp66290;var state_66278__$1 = (function (){var statearr_66294 = state_66278;(statearr_66294[(7)] = inst_66255__$1);
return statearr_66294;
})();var statearr_66295_66313 = state_66278__$1;(statearr_66295_66313[(2)] = null);
(statearr_66295_66313[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___66303,out))
;return ((function (switch__5804__auto__,c__5819__auto___66303,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_66299 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_66299[(0)] = state_machine__5805__auto__);
(statearr_66299[(1)] = (1));
return statearr_66299;
});
var state_machine__5805__auto____1 = (function (state_66278){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_66278);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e66300){if((e66300 instanceof Object))
{var ex__5808__auto__ = e66300;var statearr_66301_66314 = state_66278;(statearr_66301_66314[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_66278);
return cljs.core.constant$keyword$1120;
} else
{throw e66300;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__66315 = state_66278;
state_66278 = G__66315;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_66278){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_66278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___66303,out))
})();var state__5821__auto__ = (function (){var statearr_66302 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_66302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___66303);
return statearr_66302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___66303,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___66453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___66453,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___66453,out){
return (function (state_66423){var state_val_66424 = (state_66423[(1)]);if((state_val_66424 === (7)))
{var inst_66419 = (state_66423[(2)]);var state_66423__$1 = state_66423;var statearr_66425_66454 = state_66423__$1;(statearr_66425_66454[(2)] = inst_66419);
(statearr_66425_66454[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (1)))
{var inst_66386 = (new Array(n));var inst_66387 = inst_66386;var inst_66388 = (0);var state_66423__$1 = (function (){var statearr_66426 = state_66423;(statearr_66426[(7)] = inst_66387);
(statearr_66426[(8)] = inst_66388);
return statearr_66426;
})();var statearr_66427_66455 = state_66423__$1;(statearr_66427_66455[(2)] = null);
(statearr_66427_66455[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (4)))
{var inst_66391 = (state_66423[(9)]);var inst_66391__$1 = (state_66423[(2)]);var inst_66392 = (inst_66391__$1 == null);var inst_66393 = cljs.core.not(inst_66392);var state_66423__$1 = (function (){var statearr_66428 = state_66423;(statearr_66428[(9)] = inst_66391__$1);
return statearr_66428;
})();if(inst_66393)
{var statearr_66429_66456 = state_66423__$1;(statearr_66429_66456[(1)] = (5));
} else
{var statearr_66430_66457 = state_66423__$1;(statearr_66430_66457[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (15)))
{var inst_66413 = (state_66423[(2)]);var state_66423__$1 = state_66423;var statearr_66431_66458 = state_66423__$1;(statearr_66431_66458[(2)] = inst_66413);
(statearr_66431_66458[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (13)))
{var state_66423__$1 = state_66423;var statearr_66432_66459 = state_66423__$1;(statearr_66432_66459[(2)] = null);
(statearr_66432_66459[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (6)))
{var inst_66388 = (state_66423[(8)]);var inst_66409 = (inst_66388 > (0));var state_66423__$1 = state_66423;if(cljs.core.truth_(inst_66409))
{var statearr_66433_66460 = state_66423__$1;(statearr_66433_66460[(1)] = (12));
} else
{var statearr_66434_66461 = state_66423__$1;(statearr_66434_66461[(1)] = (13));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (3)))
{var inst_66421 = (state_66423[(2)]);var state_66423__$1 = state_66423;return cljs.core.async.impl.ioc_helpers.return_chan(state_66423__$1,inst_66421);
} else
{if((state_val_66424 === (12)))
{var inst_66387 = (state_66423[(7)]);var inst_66411 = cljs.core.vec(inst_66387);var state_66423__$1 = state_66423;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66423__$1,(15),out,inst_66411);
} else
{if((state_val_66424 === (2)))
{var state_66423__$1 = state_66423;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66423__$1,(4),ch);
} else
{if((state_val_66424 === (11)))
{var inst_66403 = (state_66423[(2)]);var inst_66404 = (new Array(n));var inst_66387 = inst_66404;var inst_66388 = (0);var state_66423__$1 = (function (){var statearr_66435 = state_66423;(statearr_66435[(7)] = inst_66387);
(statearr_66435[(10)] = inst_66403);
(statearr_66435[(8)] = inst_66388);
return statearr_66435;
})();var statearr_66436_66462 = state_66423__$1;(statearr_66436_66462[(2)] = null);
(statearr_66436_66462[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (9)))
{var inst_66387 = (state_66423[(7)]);var inst_66401 = cljs.core.vec(inst_66387);var state_66423__$1 = state_66423;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66423__$1,(11),out,inst_66401);
} else
{if((state_val_66424 === (5)))
{var inst_66396 = (state_66423[(11)]);var inst_66391 = (state_66423[(9)]);var inst_66387 = (state_66423[(7)]);var inst_66388 = (state_66423[(8)]);var inst_66395 = (inst_66387[inst_66388] = inst_66391);var inst_66396__$1 = (inst_66388 + (1));var inst_66397 = (inst_66396__$1 < n);var state_66423__$1 = (function (){var statearr_66437 = state_66423;(statearr_66437[(11)] = inst_66396__$1);
(statearr_66437[(12)] = inst_66395);
return statearr_66437;
})();if(cljs.core.truth_(inst_66397))
{var statearr_66438_66463 = state_66423__$1;(statearr_66438_66463[(1)] = (8));
} else
{var statearr_66439_66464 = state_66423__$1;(statearr_66439_66464[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (14)))
{var inst_66416 = (state_66423[(2)]);var inst_66417 = cljs.core.async.close_BANG_(out);var state_66423__$1 = (function (){var statearr_66441 = state_66423;(statearr_66441[(13)] = inst_66416);
return statearr_66441;
})();var statearr_66442_66465 = state_66423__$1;(statearr_66442_66465[(2)] = inst_66417);
(statearr_66442_66465[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (10)))
{var inst_66407 = (state_66423[(2)]);var state_66423__$1 = state_66423;var statearr_66443_66466 = state_66423__$1;(statearr_66443_66466[(2)] = inst_66407);
(statearr_66443_66466[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66424 === (8)))
{var inst_66396 = (state_66423[(11)]);var inst_66387 = (state_66423[(7)]);var tmp66440 = inst_66387;var inst_66387__$1 = tmp66440;var inst_66388 = inst_66396;var state_66423__$1 = (function (){var statearr_66444 = state_66423;(statearr_66444[(7)] = inst_66387__$1);
(statearr_66444[(8)] = inst_66388);
return statearr_66444;
})();var statearr_66445_66467 = state_66423__$1;(statearr_66445_66467[(2)] = null);
(statearr_66445_66467[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___66453,out))
;return ((function (switch__5804__auto__,c__5819__auto___66453,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_66449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66449[(0)] = state_machine__5805__auto__);
(statearr_66449[(1)] = (1));
return statearr_66449;
});
var state_machine__5805__auto____1 = (function (state_66423){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_66423);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e66450){if((e66450 instanceof Object))
{var ex__5808__auto__ = e66450;var statearr_66451_66468 = state_66423;(statearr_66451_66468[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_66423);
return cljs.core.constant$keyword$1120;
} else
{throw e66450;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__66469 = state_66423;
state_66423 = G__66469;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_66423){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_66423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___66453,out))
})();var state__5821__auto__ = (function (){var statearr_66452 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_66452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___66453);
return statearr_66452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___66453,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___66617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___66617,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___66617,out){
return (function (state_66586){var state_val_66587 = (state_66586[(1)]);if((state_val_66587 === (7)))
{var inst_66582 = (state_66586[(2)]);var state_66586__$1 = state_66586;var statearr_66588_66618 = state_66586__$1;(statearr_66588_66618[(2)] = inst_66582);
(statearr_66588_66618[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (1)))
{var inst_66545 = [];var inst_66546 = inst_66545;var inst_66547 = cljs.core.constant$keyword$1135;var state_66586__$1 = (function (){var statearr_66589 = state_66586;(statearr_66589[(7)] = inst_66547);
(statearr_66589[(8)] = inst_66546);
return statearr_66589;
})();var statearr_66590_66619 = state_66586__$1;(statearr_66590_66619[(2)] = null);
(statearr_66590_66619[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (4)))
{var inst_66550 = (state_66586[(9)]);var inst_66550__$1 = (state_66586[(2)]);var inst_66551 = (inst_66550__$1 == null);var inst_66552 = cljs.core.not(inst_66551);var state_66586__$1 = (function (){var statearr_66591 = state_66586;(statearr_66591[(9)] = inst_66550__$1);
return statearr_66591;
})();if(inst_66552)
{var statearr_66592_66620 = state_66586__$1;(statearr_66592_66620[(1)] = (5));
} else
{var statearr_66593_66621 = state_66586__$1;(statearr_66593_66621[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (15)))
{var inst_66576 = (state_66586[(2)]);var state_66586__$1 = state_66586;var statearr_66594_66622 = state_66586__$1;(statearr_66594_66622[(2)] = inst_66576);
(statearr_66594_66622[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (13)))
{var state_66586__$1 = state_66586;var statearr_66595_66623 = state_66586__$1;(statearr_66595_66623[(2)] = null);
(statearr_66595_66623[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (6)))
{var inst_66546 = (state_66586[(8)]);var inst_66571 = inst_66546.length;var inst_66572 = (inst_66571 > (0));var state_66586__$1 = state_66586;if(cljs.core.truth_(inst_66572))
{var statearr_66596_66624 = state_66586__$1;(statearr_66596_66624[(1)] = (12));
} else
{var statearr_66597_66625 = state_66586__$1;(statearr_66597_66625[(1)] = (13));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (3)))
{var inst_66584 = (state_66586[(2)]);var state_66586__$1 = state_66586;return cljs.core.async.impl.ioc_helpers.return_chan(state_66586__$1,inst_66584);
} else
{if((state_val_66587 === (12)))
{var inst_66546 = (state_66586[(8)]);var inst_66574 = cljs.core.vec(inst_66546);var state_66586__$1 = state_66586;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66586__$1,(15),out,inst_66574);
} else
{if((state_val_66587 === (2)))
{var state_66586__$1 = state_66586;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66586__$1,(4),ch);
} else
{if((state_val_66587 === (11)))
{var inst_66550 = (state_66586[(9)]);var inst_66554 = (state_66586[(10)]);var inst_66564 = (state_66586[(2)]);var inst_66565 = [];var inst_66566 = inst_66565.push(inst_66550);var inst_66546 = inst_66565;var inst_66547 = inst_66554;var state_66586__$1 = (function (){var statearr_66598 = state_66586;(statearr_66598[(7)] = inst_66547);
(statearr_66598[(8)] = inst_66546);
(statearr_66598[(11)] = inst_66566);
(statearr_66598[(12)] = inst_66564);
return statearr_66598;
})();var statearr_66599_66626 = state_66586__$1;(statearr_66599_66626[(2)] = null);
(statearr_66599_66626[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (9)))
{var inst_66546 = (state_66586[(8)]);var inst_66562 = cljs.core.vec(inst_66546);var state_66586__$1 = state_66586;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66586__$1,(11),out,inst_66562);
} else
{if((state_val_66587 === (5)))
{var inst_66547 = (state_66586[(7)]);var inst_66550 = (state_66586[(9)]);var inst_66554 = (state_66586[(10)]);var inst_66554__$1 = (function (){var G__66600 = inst_66550;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66600) : f.call(null,G__66600));
})();var inst_66555 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66554__$1,inst_66547);var inst_66556 = cljs.core.keyword_identical_QMARK_(inst_66547,cljs.core.constant$keyword$1135);var inst_66557 = (inst_66555) || (inst_66556);var state_66586__$1 = (function (){var statearr_66601 = state_66586;(statearr_66601[(10)] = inst_66554__$1);
return statearr_66601;
})();if(cljs.core.truth_(inst_66557))
{var statearr_66602_66627 = state_66586__$1;(statearr_66602_66627[(1)] = (8));
} else
{var statearr_66603_66628 = state_66586__$1;(statearr_66603_66628[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (14)))
{var inst_66579 = (state_66586[(2)]);var inst_66580 = cljs.core.async.close_BANG_(out);var state_66586__$1 = (function (){var statearr_66605 = state_66586;(statearr_66605[(13)] = inst_66579);
return statearr_66605;
})();var statearr_66606_66629 = state_66586__$1;(statearr_66606_66629[(2)] = inst_66580);
(statearr_66606_66629[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (10)))
{var inst_66569 = (state_66586[(2)]);var state_66586__$1 = state_66586;var statearr_66607_66630 = state_66586__$1;(statearr_66607_66630[(2)] = inst_66569);
(statearr_66607_66630[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66587 === (8)))
{var inst_66550 = (state_66586[(9)]);var inst_66546 = (state_66586[(8)]);var inst_66554 = (state_66586[(10)]);var inst_66559 = inst_66546.push(inst_66550);var tmp66604 = inst_66546;var inst_66546__$1 = tmp66604;var inst_66547 = inst_66554;var state_66586__$1 = (function (){var statearr_66608 = state_66586;(statearr_66608[(14)] = inst_66559);
(statearr_66608[(7)] = inst_66547);
(statearr_66608[(8)] = inst_66546__$1);
return statearr_66608;
})();var statearr_66609_66631 = state_66586__$1;(statearr_66609_66631[(2)] = null);
(statearr_66609_66631[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5819__auto___66617,out))
;return ((function (switch__5804__auto__,c__5819__auto___66617,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_66613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66613[(0)] = state_machine__5805__auto__);
(statearr_66613[(1)] = (1));
return statearr_66613;
});
var state_machine__5805__auto____1 = (function (state_66586){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_66586);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e66614){if((e66614 instanceof Object))
{var ex__5808__auto__ = e66614;var statearr_66615_66632 = state_66586;(statearr_66615_66632[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_66586);
return cljs.core.constant$keyword$1120;
} else
{throw e66614;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__66633 = state_66586;
state_66586 = G__66633;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_66586){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_66586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___66617,out))
})();var state__5821__auto__ = (function (){var statearr_66616 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_66616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___66617);
return statearr_66616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___66617,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
