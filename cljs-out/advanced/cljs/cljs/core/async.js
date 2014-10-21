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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t64444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64444 = (function (f,fn_handler,meta64445){
this.f = f;
this.fn_handler = fn_handler;
this.meta64445 = meta64445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64444.cljs$lang$type = true;
cljs.core.async.t64444.cljs$lang$ctorStr = "cljs.core.async/t64444";
cljs.core.async.t64444.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t64444");
});
cljs.core.async.t64444.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t64444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t64444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t64444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64446){var self__ = this;
var _64446__$1 = this;return self__.meta64445;
});
cljs.core.async.t64444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64446,meta64445__$1){var self__ = this;
var _64446__$1 = this;return (new cljs.core.async.t64444(self__.f,self__.fn_handler,meta64445__$1));
});
cljs.core.async.__GT_t64444 = (function __GT_t64444(f__$1,fn_handler__$1,meta64445){return (new cljs.core.async.t64444(f__$1,fn_handler__$1,meta64445));
});
}
return (new cljs.core.async.t64444(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__64448 = buff;if(G__64448)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__64448.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__64448.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__64448);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__64448);
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
{var val_64465 = (function (){var G__64462 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64462) : cljs.core.deref.call(null,G__64462));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__64463_64466 = val_64465;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__64463_64466) : fn1.call(null,G__64463_64466));
} else
{cljs.core.async.impl.dispatch.run(((function (val_64465,ret){
return (function (){var G__64464 = val_64465;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__64464) : fn1.call(null,G__64464));
});})(val_64465,ret))
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
{var ret = temp__4124__auto__;var G__64475 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64475) : cljs.core.deref.call(null,G__64475));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__64476 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64476) : cljs.core.deref.call(null,G__64476));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__64477_64479 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__64477_64479) : fn1.call(null,G__64477_64479));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__64478 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__64478) : fn1.call(null,G__64478));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4506__auto___64480 = n;var x_64481 = (0);while(true){
if((x_64481 < n__4506__auto___64480))
{(a[x_64481] = (0));
{
var G__64482 = (x_64481 + (1));
x_64481 = G__64482;
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
var G__64483 = (i + (1));
i = G__64483;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__64491 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__64491) : cljs.core.atom.call(null,G__64491));
})();if(typeof cljs.core.async.t64492 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64492 = (function (flag,alt_flag,meta64493){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta64493 = meta64493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64492.cljs$lang$type = true;
cljs.core.async.t64492.cljs$lang$ctorStr = "cljs.core.async/t64492";
cljs.core.async.t64492.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t64492");
});})(flag))
;
cljs.core.async.t64492.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t64492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__64495 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64495) : cljs.core.deref.call(null,G__64495));
});})(flag))
;
cljs.core.async.t64492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__64496_64498 = self__.flag;var G__64497_64499 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__64496_64498,G__64497_64499) : cljs.core.reset_BANG_.call(null,G__64496_64498,G__64497_64499));
return true;
});})(flag))
;
cljs.core.async.t64492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_64494){var self__ = this;
var _64494__$1 = this;return self__.meta64493;
});})(flag))
;
cljs.core.async.t64492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_64494,meta64493__$1){var self__ = this;
var _64494__$1 = this;return (new cljs.core.async.t64492(self__.flag,self__.alt_flag,meta64493__$1));
});})(flag))
;
cljs.core.async.__GT_t64492 = ((function (flag){
return (function __GT_t64492(flag__$1,alt_flag__$1,meta64493){return (new cljs.core.async.t64492(flag__$1,alt_flag__$1,meta64493));
});})(flag))
;
}
return (new cljs.core.async.t64492(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t64503 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64503 = (function (cb,flag,alt_handler,meta64504){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta64504 = meta64504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64503.cljs$lang$type = true;
cljs.core.async.t64503.cljs$lang$ctorStr = "cljs.core.async/t64503";
cljs.core.async.t64503.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t64503");
});
cljs.core.async.t64503.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t64503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t64503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t64503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64505){var self__ = this;
var _64505__$1 = this;return self__.meta64504;
});
cljs.core.async.t64503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64505,meta64504__$1){var self__ = this;
var _64505__$1 = this;return (new cljs.core.async.t64503(self__.cb,self__.flag,self__.alt_handler,meta64504__$1));
});
cljs.core.async.__GT_t64503 = (function __GT_t64503(cb__$1,flag__$1,alt_handler__$1,meta64504){return (new cljs.core.async.t64503(cb__$1,flag__$1,alt_handler__$1,meta64504));
});
}
return (new cljs.core.async.t64503(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$1126.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__64513 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__64513) : port.call(null,G__64513));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__64514 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__64514) : port.call(null,G__64514));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__64506_SHARP_){var G__64515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64506_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__64515) : fret.call(null,G__64515));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__64507_SHARP_){var G__64516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64507_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__64516) : fret.call(null,G__64516));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64517 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__64517) : cljs.core.deref.call(null,G__64517));
})(),(function (){var or__3637__auto__ = wport;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__64518 = (i + (1));
i = G__64518;
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
var alts_BANG___delegate = function (ports,p__64519){var map__64521 = p__64519;var map__64521__$1 = ((cljs.core.seq_QMARK_(map__64521))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64521):map__64521);var opts = map__64521__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__64519 = null;if (arguments.length > 1) {
  p__64519 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__64519);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__64522){
var ports = cljs.core.first(arglist__64522);
var p__64519 = cljs.core.rest(arglist__64522);
return alts_BANG___delegate(ports,p__64519);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5819__auto___64620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___64620){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___64620){
return (function (state_64596){var state_val_64597 = (state_64596[(1)]);if((state_val_64597 === (7)))
{var inst_64592 = (state_64596[(2)]);var state_64596__$1 = state_64596;var statearr_64598_64621 = state_64596__$1;(statearr_64598_64621[(2)] = inst_64592);
(statearr_64598_64621[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (1)))
{var state_64596__$1 = state_64596;var statearr_64599_64622 = state_64596__$1;(statearr_64599_64622[(2)] = null);
(statearr_64599_64622[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (4)))
{var inst_64575 = (state_64596[(7)]);var inst_64575__$1 = (state_64596[(2)]);var inst_64576 = (inst_64575__$1 == null);var state_64596__$1 = (function (){var statearr_64600 = state_64596;(statearr_64600[(7)] = inst_64575__$1);
return statearr_64600;
})();if(cljs.core.truth_(inst_64576))
{var statearr_64601_64623 = state_64596__$1;(statearr_64601_64623[(1)] = (5));
} else
{var statearr_64602_64624 = state_64596__$1;(statearr_64602_64624[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (13)))
{var state_64596__$1 = state_64596;var statearr_64603_64625 = state_64596__$1;(statearr_64603_64625[(2)] = null);
(statearr_64603_64625[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (6)))
{var inst_64575 = (state_64596[(7)]);var state_64596__$1 = state_64596;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64596__$1,(11),to,inst_64575);
} else
{if((state_val_64597 === (3)))
{var inst_64594 = (state_64596[(2)]);var state_64596__$1 = state_64596;return cljs.core.async.impl.ioc_helpers.return_chan(state_64596__$1,inst_64594);
} else
{if((state_val_64597 === (12)))
{var state_64596__$1 = state_64596;var statearr_64604_64626 = state_64596__$1;(statearr_64604_64626[(2)] = null);
(statearr_64604_64626[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (2)))
{var state_64596__$1 = state_64596;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64596__$1,(4),from);
} else
{if((state_val_64597 === (11)))
{var inst_64585 = (state_64596[(2)]);var state_64596__$1 = state_64596;if(cljs.core.truth_(inst_64585))
{var statearr_64605_64627 = state_64596__$1;(statearr_64605_64627[(1)] = (12));
} else
{var statearr_64606_64628 = state_64596__$1;(statearr_64606_64628[(1)] = (13));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (9)))
{var state_64596__$1 = state_64596;var statearr_64607_64629 = state_64596__$1;(statearr_64607_64629[(2)] = null);
(statearr_64607_64629[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (5)))
{var state_64596__$1 = state_64596;if(cljs.core.truth_(close_QMARK_))
{var statearr_64608_64630 = state_64596__$1;(statearr_64608_64630[(1)] = (8));
} else
{var statearr_64609_64631 = state_64596__$1;(statearr_64609_64631[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (14)))
{var inst_64590 = (state_64596[(2)]);var state_64596__$1 = state_64596;var statearr_64610_64632 = state_64596__$1;(statearr_64610_64632[(2)] = inst_64590);
(statearr_64610_64632[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (10)))
{var inst_64582 = (state_64596[(2)]);var state_64596__$1 = state_64596;var statearr_64611_64633 = state_64596__$1;(statearr_64611_64633[(2)] = inst_64582);
(statearr_64611_64633[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64597 === (8)))
{var inst_64579 = cljs.core.async.close_BANG_(to);var state_64596__$1 = state_64596;var statearr_64612_64634 = state_64596__$1;(statearr_64612_64634[(2)] = inst_64579);
(statearr_64612_64634[(1)] = (10));
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
});})(c__5819__auto___64620))
;return ((function (switch__5804__auto__,c__5819__auto___64620){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_64616 = [null,null,null,null,null,null,null,null];(statearr_64616[(0)] = state_machine__5805__auto__);
(statearr_64616[(1)] = (1));
return statearr_64616;
});
var state_machine__5805__auto____1 = (function (state_64596){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_64596);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e64617){if((e64617 instanceof Object))
{var ex__5808__auto__ = e64617;var statearr_64618_64635 = state_64596;(statearr_64618_64635[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_64596);
return cljs.core.constant$keyword$1120;
} else
{throw e64617;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__64636 = state_64596;
state_64596 = G__64636;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_64596){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_64596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___64620))
})();var state__5821__auto__ = (function (){var statearr_64619 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_64619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___64620);
return statearr_64619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___64620))
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
return (function (p__64822){var vec__64823 = p__64822;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64823,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64823,(1),null);var job = vec__64823;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__5819__auto___65007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65007,res,vec__64823,v,p,job,jobs,results){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65007,res,vec__64823,v,p,job,jobs,results){
return (function (state_64828){var state_val_64829 = (state_64828[(1)]);if((state_val_64829 === (2)))
{var inst_64825 = (state_64828[(2)]);var inst_64826 = cljs.core.async.close_BANG_(res);var state_64828__$1 = (function (){var statearr_64830 = state_64828;(statearr_64830[(7)] = inst_64825);
return statearr_64830;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_64828__$1,inst_64826);
} else
{if((state_val_64829 === (1)))
{var state_64828__$1 = state_64828;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64828__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5819__auto___65007,res,vec__64823,v,p,job,jobs,results))
;return ((function (switch__5804__auto__,c__5819__auto___65007,res,vec__64823,v,p,job,jobs,results){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_64834 = [null,null,null,null,null,null,null,null];(statearr_64834[(0)] = state_machine__5805__auto__);
(statearr_64834[(1)] = (1));
return statearr_64834;
});
var state_machine__5805__auto____1 = (function (state_64828){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_64828);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e64835){if((e64835 instanceof Object))
{var ex__5808__auto__ = e64835;var statearr_64836_65008 = state_64828;(statearr_64836_65008[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_64828);
return cljs.core.constant$keyword$1120;
} else
{throw e64835;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65009 = state_64828;
state_64828 = G__65009;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_64828){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_64828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65007,res,vec__64823,v,p,job,jobs,results))
})();var state__5821__auto__ = (function (){var statearr_64837 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_64837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65007);
return statearr_64837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65007,res,vec__64823,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__64838){var vec__64839 = p__64838;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64839,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64839,(1),null);var job = vec__64839;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__64840_65010 = v;var G__64841_65011 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__64840_65010,G__64841_65011) : xf.call(null,G__64840_65010,G__64841_65011));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4506__auto___65012 = n;var __65013 = (0);while(true){
if((__65013 < n__4506__auto___65012))
{var G__64842_65014 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__64842_65014) {
case "async":
var c__5819__auto___65016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__65013,c__5819__auto___65016,G__64842_65014,n__4506__auto___65012,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__65013,c__5819__auto___65016,G__64842_65014,n__4506__auto___65012,jobs,results,process,async){
return (function (state_64855){var state_val_64856 = (state_64855[(1)]);if((state_val_64856 === (7)))
{var inst_64851 = (state_64855[(2)]);var state_64855__$1 = state_64855;var statearr_64857_65017 = state_64855__$1;(statearr_64857_65017[(2)] = inst_64851);
(statearr_64857_65017[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64856 === (6)))
{var state_64855__$1 = state_64855;var statearr_64858_65018 = state_64855__$1;(statearr_64858_65018[(2)] = null);
(statearr_64858_65018[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64856 === (5)))
{var state_64855__$1 = state_64855;var statearr_64859_65019 = state_64855__$1;(statearr_64859_65019[(2)] = null);
(statearr_64859_65019[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64856 === (4)))
{var inst_64845 = (state_64855[(2)]);var inst_64846 = async(inst_64845);var state_64855__$1 = state_64855;if(cljs.core.truth_(inst_64846))
{var statearr_64860_65020 = state_64855__$1;(statearr_64860_65020[(1)] = (5));
} else
{var statearr_64861_65021 = state_64855__$1;(statearr_64861_65021[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64856 === (3)))
{var inst_64853 = (state_64855[(2)]);var state_64855__$1 = state_64855;return cljs.core.async.impl.ioc_helpers.return_chan(state_64855__$1,inst_64853);
} else
{if((state_val_64856 === (2)))
{var state_64855__$1 = state_64855;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64855__$1,(4),jobs);
} else
{if((state_val_64856 === (1)))
{var state_64855__$1 = state_64855;var statearr_64862_65022 = state_64855__$1;(statearr_64862_65022[(2)] = null);
(statearr_64862_65022[(1)] = (2));
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
});})(__65013,c__5819__auto___65016,G__64842_65014,n__4506__auto___65012,jobs,results,process,async))
;return ((function (__65013,switch__5804__auto__,c__5819__auto___65016,G__64842_65014,n__4506__auto___65012,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_64866 = [null,null,null,null,null,null,null];(statearr_64866[(0)] = state_machine__5805__auto__);
(statearr_64866[(1)] = (1));
return statearr_64866;
});
var state_machine__5805__auto____1 = (function (state_64855){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_64855);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e64867){if((e64867 instanceof Object))
{var ex__5808__auto__ = e64867;var statearr_64868_65023 = state_64855;(statearr_64868_65023[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_64855);
return cljs.core.constant$keyword$1120;
} else
{throw e64867;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65024 = state_64855;
state_64855 = G__65024;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_64855){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_64855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__65013,switch__5804__auto__,c__5819__auto___65016,G__64842_65014,n__4506__auto___65012,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_64869 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_64869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65016);
return statearr_64869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(__65013,c__5819__auto___65016,G__64842_65014,n__4506__auto___65012,jobs,results,process,async))
);

break;
case "compute":
var c__5819__auto___65025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__65013,c__5819__auto___65025,G__64842_65014,n__4506__auto___65012,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__65013,c__5819__auto___65025,G__64842_65014,n__4506__auto___65012,jobs,results,process,async){
return (function (state_64882){var state_val_64883 = (state_64882[(1)]);if((state_val_64883 === (7)))
{var inst_64878 = (state_64882[(2)]);var state_64882__$1 = state_64882;var statearr_64884_65026 = state_64882__$1;(statearr_64884_65026[(2)] = inst_64878);
(statearr_64884_65026[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64883 === (6)))
{var state_64882__$1 = state_64882;var statearr_64885_65027 = state_64882__$1;(statearr_64885_65027[(2)] = null);
(statearr_64885_65027[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64883 === (5)))
{var state_64882__$1 = state_64882;var statearr_64886_65028 = state_64882__$1;(statearr_64886_65028[(2)] = null);
(statearr_64886_65028[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64883 === (4)))
{var inst_64872 = (state_64882[(2)]);var inst_64873 = process(inst_64872);var state_64882__$1 = state_64882;if(cljs.core.truth_(inst_64873))
{var statearr_64887_65029 = state_64882__$1;(statearr_64887_65029[(1)] = (5));
} else
{var statearr_64888_65030 = state_64882__$1;(statearr_64888_65030[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64883 === (3)))
{var inst_64880 = (state_64882[(2)]);var state_64882__$1 = state_64882;return cljs.core.async.impl.ioc_helpers.return_chan(state_64882__$1,inst_64880);
} else
{if((state_val_64883 === (2)))
{var state_64882__$1 = state_64882;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64882__$1,(4),jobs);
} else
{if((state_val_64883 === (1)))
{var state_64882__$1 = state_64882;var statearr_64889_65031 = state_64882__$1;(statearr_64889_65031[(2)] = null);
(statearr_64889_65031[(1)] = (2));
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
});})(__65013,c__5819__auto___65025,G__64842_65014,n__4506__auto___65012,jobs,results,process,async))
;return ((function (__65013,switch__5804__auto__,c__5819__auto___65025,G__64842_65014,n__4506__auto___65012,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_64893 = [null,null,null,null,null,null,null];(statearr_64893[(0)] = state_machine__5805__auto__);
(statearr_64893[(1)] = (1));
return statearr_64893;
});
var state_machine__5805__auto____1 = (function (state_64882){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_64882);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e64894){if((e64894 instanceof Object))
{var ex__5808__auto__ = e64894;var statearr_64895_65032 = state_64882;(statearr_64895_65032[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_64882);
return cljs.core.constant$keyword$1120;
} else
{throw e64894;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65033 = state_64882;
state_64882 = G__65033;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_64882){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_64882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__65013,switch__5804__auto__,c__5819__auto___65025,G__64842_65014,n__4506__auto___65012,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_64896 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_64896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65025);
return statearr_64896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(__65013,c__5819__auto___65025,G__64842_65014,n__4506__auto___65012,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__65034 = (__65013 + (1));
__65013 = G__65034;
continue;
}
} else
{}
break;
}
var c__5819__auto___65035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65035,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65035,jobs,results,process,async){
return (function (state_64918){var state_val_64919 = (state_64918[(1)]);if((state_val_64919 === (9)))
{var inst_64911 = (state_64918[(2)]);var state_64918__$1 = (function (){var statearr_64920 = state_64918;(statearr_64920[(7)] = inst_64911);
return statearr_64920;
})();var statearr_64921_65036 = state_64918__$1;(statearr_64921_65036[(2)] = null);
(statearr_64921_65036[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64919 === (8)))
{var inst_64904 = (state_64918[(8)]);var inst_64909 = (state_64918[(2)]);var state_64918__$1 = (function (){var statearr_64922 = state_64918;(statearr_64922[(9)] = inst_64909);
return statearr_64922;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64918__$1,(9),results,inst_64904);
} else
{if((state_val_64919 === (7)))
{var inst_64914 = (state_64918[(2)]);var state_64918__$1 = state_64918;var statearr_64923_65037 = state_64918__$1;(statearr_64923_65037[(2)] = inst_64914);
(statearr_64923_65037[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64919 === (6)))
{var inst_64899 = (state_64918[(10)]);var inst_64904 = (state_64918[(8)]);var inst_64904__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_64905 = cljs.core.PersistentVector.EMPTY_NODE;var inst_64906 = [inst_64899,inst_64904__$1];var inst_64907 = (new cljs.core.PersistentVector(null,2,(5),inst_64905,inst_64906,null));var state_64918__$1 = (function (){var statearr_64924 = state_64918;(statearr_64924[(8)] = inst_64904__$1);
return statearr_64924;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64918__$1,(8),jobs,inst_64907);
} else
{if((state_val_64919 === (5)))
{var inst_64902 = cljs.core.async.close_BANG_(jobs);var state_64918__$1 = state_64918;var statearr_64925_65038 = state_64918__$1;(statearr_64925_65038[(2)] = inst_64902);
(statearr_64925_65038[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64919 === (4)))
{var inst_64899 = (state_64918[(10)]);var inst_64899__$1 = (state_64918[(2)]);var inst_64900 = (inst_64899__$1 == null);var state_64918__$1 = (function (){var statearr_64926 = state_64918;(statearr_64926[(10)] = inst_64899__$1);
return statearr_64926;
})();if(cljs.core.truth_(inst_64900))
{var statearr_64927_65039 = state_64918__$1;(statearr_64927_65039[(1)] = (5));
} else
{var statearr_64928_65040 = state_64918__$1;(statearr_64928_65040[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64919 === (3)))
{var inst_64916 = (state_64918[(2)]);var state_64918__$1 = state_64918;return cljs.core.async.impl.ioc_helpers.return_chan(state_64918__$1,inst_64916);
} else
{if((state_val_64919 === (2)))
{var state_64918__$1 = state_64918;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64918__$1,(4),from);
} else
{if((state_val_64919 === (1)))
{var state_64918__$1 = state_64918;var statearr_64929_65041 = state_64918__$1;(statearr_64929_65041[(2)] = null);
(statearr_64929_65041[(1)] = (2));
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
});})(c__5819__auto___65035,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto___65035,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_64933 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_64933[(0)] = state_machine__5805__auto__);
(statearr_64933[(1)] = (1));
return statearr_64933;
});
var state_machine__5805__auto____1 = (function (state_64918){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_64918);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e64934){if((e64934 instanceof Object))
{var ex__5808__auto__ = e64934;var statearr_64935_65042 = state_64918;(statearr_64935_65042[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_64918);
return cljs.core.constant$keyword$1120;
} else
{throw e64934;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65043 = state_64918;
state_64918 = G__65043;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_64918){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_64918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65035,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_64936 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_64936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65035);
return statearr_64936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65035,jobs,results,process,async))
);
var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,jobs,results,process,async){
return (function (state_64974){var state_val_64975 = (state_64974[(1)]);if((state_val_64975 === (7)))
{var inst_64970 = (state_64974[(2)]);var state_64974__$1 = state_64974;var statearr_64976_65044 = state_64974__$1;(statearr_64976_65044[(2)] = inst_64970);
(statearr_64976_65044[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (20)))
{var state_64974__$1 = state_64974;var statearr_64977_65045 = state_64974__$1;(statearr_64977_65045[(2)] = null);
(statearr_64977_65045[(1)] = (21));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (1)))
{var state_64974__$1 = state_64974;var statearr_64978_65046 = state_64974__$1;(statearr_64978_65046[(2)] = null);
(statearr_64978_65046[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (4)))
{var inst_64939 = (state_64974[(7)]);var inst_64939__$1 = (state_64974[(2)]);var inst_64940 = (inst_64939__$1 == null);var state_64974__$1 = (function (){var statearr_64979 = state_64974;(statearr_64979[(7)] = inst_64939__$1);
return statearr_64979;
})();if(cljs.core.truth_(inst_64940))
{var statearr_64980_65047 = state_64974__$1;(statearr_64980_65047[(1)] = (5));
} else
{var statearr_64981_65048 = state_64974__$1;(statearr_64981_65048[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (15)))
{var inst_64952 = (state_64974[(8)]);var state_64974__$1 = state_64974;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64974__$1,(18),to,inst_64952);
} else
{if((state_val_64975 === (21)))
{var inst_64965 = (state_64974[(2)]);var state_64974__$1 = state_64974;var statearr_64982_65049 = state_64974__$1;(statearr_64982_65049[(2)] = inst_64965);
(statearr_64982_65049[(1)] = (13));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (13)))
{var inst_64967 = (state_64974[(2)]);var state_64974__$1 = (function (){var statearr_64983 = state_64974;(statearr_64983[(9)] = inst_64967);
return statearr_64983;
})();var statearr_64984_65050 = state_64974__$1;(statearr_64984_65050[(2)] = null);
(statearr_64984_65050[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (6)))
{var inst_64939 = (state_64974[(7)]);var state_64974__$1 = state_64974;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64974__$1,(11),inst_64939);
} else
{if((state_val_64975 === (17)))
{var inst_64960 = (state_64974[(2)]);var state_64974__$1 = state_64974;if(cljs.core.truth_(inst_64960))
{var statearr_64985_65051 = state_64974__$1;(statearr_64985_65051[(1)] = (19));
} else
{var statearr_64986_65052 = state_64974__$1;(statearr_64986_65052[(1)] = (20));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (3)))
{var inst_64972 = (state_64974[(2)]);var state_64974__$1 = state_64974;return cljs.core.async.impl.ioc_helpers.return_chan(state_64974__$1,inst_64972);
} else
{if((state_val_64975 === (12)))
{var inst_64949 = (state_64974[(10)]);var state_64974__$1 = state_64974;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64974__$1,(14),inst_64949);
} else
{if((state_val_64975 === (2)))
{var state_64974__$1 = state_64974;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64974__$1,(4),results);
} else
{if((state_val_64975 === (19)))
{var state_64974__$1 = state_64974;var statearr_64987_65053 = state_64974__$1;(statearr_64987_65053[(2)] = null);
(statearr_64987_65053[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (11)))
{var inst_64949 = (state_64974[(2)]);var state_64974__$1 = (function (){var statearr_64988 = state_64974;(statearr_64988[(10)] = inst_64949);
return statearr_64988;
})();var statearr_64989_65054 = state_64974__$1;(statearr_64989_65054[(2)] = null);
(statearr_64989_65054[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (9)))
{var state_64974__$1 = state_64974;var statearr_64990_65055 = state_64974__$1;(statearr_64990_65055[(2)] = null);
(statearr_64990_65055[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (5)))
{var state_64974__$1 = state_64974;if(cljs.core.truth_(close_QMARK_))
{var statearr_64991_65056 = state_64974__$1;(statearr_64991_65056[(1)] = (8));
} else
{var statearr_64992_65057 = state_64974__$1;(statearr_64992_65057[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (14)))
{var inst_64954 = (state_64974[(11)]);var inst_64952 = (state_64974[(8)]);var inst_64952__$1 = (state_64974[(2)]);var inst_64953 = (inst_64952__$1 == null);var inst_64954__$1 = cljs.core.not(inst_64953);var state_64974__$1 = (function (){var statearr_64993 = state_64974;(statearr_64993[(11)] = inst_64954__$1);
(statearr_64993[(8)] = inst_64952__$1);
return statearr_64993;
})();if(inst_64954__$1)
{var statearr_64994_65058 = state_64974__$1;(statearr_64994_65058[(1)] = (15));
} else
{var statearr_64995_65059 = state_64974__$1;(statearr_64995_65059[(1)] = (16));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (16)))
{var inst_64954 = (state_64974[(11)]);var state_64974__$1 = state_64974;var statearr_64996_65060 = state_64974__$1;(statearr_64996_65060[(2)] = inst_64954);
(statearr_64996_65060[(1)] = (17));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (10)))
{var inst_64946 = (state_64974[(2)]);var state_64974__$1 = state_64974;var statearr_64997_65061 = state_64974__$1;(statearr_64997_65061[(2)] = inst_64946);
(statearr_64997_65061[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (18)))
{var inst_64957 = (state_64974[(2)]);var state_64974__$1 = state_64974;var statearr_64998_65062 = state_64974__$1;(statearr_64998_65062[(2)] = inst_64957);
(statearr_64998_65062[(1)] = (17));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_64975 === (8)))
{var inst_64943 = cljs.core.async.close_BANG_(to);var state_64974__$1 = state_64974;var statearr_64999_65063 = state_64974__$1;(statearr_64999_65063[(2)] = inst_64943);
(statearr_64999_65063[(1)] = (10));
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
var state_machine__5805__auto____0 = (function (){var statearr_65003 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65003[(0)] = state_machine__5805__auto__);
(statearr_65003[(1)] = (1));
return statearr_65003;
});
var state_machine__5805__auto____1 = (function (state_64974){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_64974);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65004){if((e65004 instanceof Object))
{var ex__5808__auto__ = e65004;var statearr_65005_65064 = state_64974;(statearr_65005_65064[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_64974);
return cljs.core.constant$keyword$1120;
} else
{throw e65004;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65065 = state_64974;
state_64974 = G__65065;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_64974){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_64974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_65006 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_65006;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5819__auto___65188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65188,tc,fc){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65188,tc,fc){
return (function (state_65162){var state_val_65163 = (state_65162[(1)]);if((state_val_65163 === (7)))
{var inst_65158 = (state_65162[(2)]);var state_65162__$1 = state_65162;var statearr_65164_65189 = state_65162__$1;(statearr_65164_65189[(2)] = inst_65158);
(statearr_65164_65189[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (1)))
{var state_65162__$1 = state_65162;var statearr_65165_65190 = state_65162__$1;(statearr_65165_65190[(2)] = null);
(statearr_65165_65190[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (4)))
{var inst_65139 = (state_65162[(7)]);var inst_65139__$1 = (state_65162[(2)]);var inst_65140 = (inst_65139__$1 == null);var state_65162__$1 = (function (){var statearr_65166 = state_65162;(statearr_65166[(7)] = inst_65139__$1);
return statearr_65166;
})();if(cljs.core.truth_(inst_65140))
{var statearr_65167_65191 = state_65162__$1;(statearr_65167_65191[(1)] = (5));
} else
{var statearr_65168_65192 = state_65162__$1;(statearr_65168_65192[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (13)))
{var state_65162__$1 = state_65162;var statearr_65169_65193 = state_65162__$1;(statearr_65169_65193[(2)] = null);
(statearr_65169_65193[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (6)))
{var inst_65139 = (state_65162[(7)]);var inst_65145 = (function (){var G__65170 = inst_65139;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__65170) : p.call(null,G__65170));
})();var state_65162__$1 = state_65162;if(cljs.core.truth_(inst_65145))
{var statearr_65171_65194 = state_65162__$1;(statearr_65171_65194[(1)] = (9));
} else
{var statearr_65172_65195 = state_65162__$1;(statearr_65172_65195[(1)] = (10));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (3)))
{var inst_65160 = (state_65162[(2)]);var state_65162__$1 = state_65162;return cljs.core.async.impl.ioc_helpers.return_chan(state_65162__$1,inst_65160);
} else
{if((state_val_65163 === (12)))
{var state_65162__$1 = state_65162;var statearr_65173_65196 = state_65162__$1;(statearr_65173_65196[(2)] = null);
(statearr_65173_65196[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (2)))
{var state_65162__$1 = state_65162;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65162__$1,(4),ch);
} else
{if((state_val_65163 === (11)))
{var inst_65139 = (state_65162[(7)]);var inst_65149 = (state_65162[(2)]);var state_65162__$1 = state_65162;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65162__$1,(8),inst_65149,inst_65139);
} else
{if((state_val_65163 === (9)))
{var state_65162__$1 = state_65162;var statearr_65174_65197 = state_65162__$1;(statearr_65174_65197[(2)] = tc);
(statearr_65174_65197[(1)] = (11));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (5)))
{var inst_65142 = cljs.core.async.close_BANG_(tc);var inst_65143 = cljs.core.async.close_BANG_(fc);var state_65162__$1 = (function (){var statearr_65175 = state_65162;(statearr_65175[(8)] = inst_65142);
return statearr_65175;
})();var statearr_65176_65198 = state_65162__$1;(statearr_65176_65198[(2)] = inst_65143);
(statearr_65176_65198[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (14)))
{var inst_65156 = (state_65162[(2)]);var state_65162__$1 = state_65162;var statearr_65177_65199 = state_65162__$1;(statearr_65177_65199[(2)] = inst_65156);
(statearr_65177_65199[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (10)))
{var state_65162__$1 = state_65162;var statearr_65178_65200 = state_65162__$1;(statearr_65178_65200[(2)] = fc);
(statearr_65178_65200[(1)] = (11));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65163 === (8)))
{var inst_65151 = (state_65162[(2)]);var state_65162__$1 = state_65162;if(cljs.core.truth_(inst_65151))
{var statearr_65179_65201 = state_65162__$1;(statearr_65179_65201[(1)] = (12));
} else
{var statearr_65180_65202 = state_65162__$1;(statearr_65180_65202[(1)] = (13));
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
});})(c__5819__auto___65188,tc,fc))
;return ((function (switch__5804__auto__,c__5819__auto___65188,tc,fc){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_65184 = [null,null,null,null,null,null,null,null,null];(statearr_65184[(0)] = state_machine__5805__auto__);
(statearr_65184[(1)] = (1));
return statearr_65184;
});
var state_machine__5805__auto____1 = (function (state_65162){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65162);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65185){if((e65185 instanceof Object))
{var ex__5808__auto__ = e65185;var statearr_65186_65203 = state_65162;(statearr_65186_65203[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65162);
return cljs.core.constant$keyword$1120;
} else
{throw e65185;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65204 = state_65162;
state_65162 = G__65204;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65162){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65188,tc,fc))
})();var state__5821__auto__ = (function (){var statearr_65187 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65188);
return statearr_65187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65188,tc,fc))
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
return (function (state_65253){var state_val_65254 = (state_65253[(1)]);if((state_val_65254 === (7)))
{var inst_65249 = (state_65253[(2)]);var state_65253__$1 = state_65253;var statearr_65255_65273 = state_65253__$1;(statearr_65255_65273[(2)] = inst_65249);
(statearr_65255_65273[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65254 === (6)))
{var inst_65239 = (state_65253[(7)]);var inst_65242 = (state_65253[(8)]);var inst_65246 = (function (){var G__65256 = inst_65239;var G__65257 = inst_65242;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__65256,G__65257) : f.call(null,G__65256,G__65257));
})();var inst_65239__$1 = inst_65246;var state_65253__$1 = (function (){var statearr_65258 = state_65253;(statearr_65258[(7)] = inst_65239__$1);
return statearr_65258;
})();var statearr_65259_65274 = state_65253__$1;(statearr_65259_65274[(2)] = null);
(statearr_65259_65274[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65254 === (5)))
{var inst_65239 = (state_65253[(7)]);var state_65253__$1 = state_65253;var statearr_65260_65275 = state_65253__$1;(statearr_65260_65275[(2)] = inst_65239);
(statearr_65260_65275[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65254 === (4)))
{var inst_65242 = (state_65253[(8)]);var inst_65242__$1 = (state_65253[(2)]);var inst_65243 = (inst_65242__$1 == null);var state_65253__$1 = (function (){var statearr_65261 = state_65253;(statearr_65261[(8)] = inst_65242__$1);
return statearr_65261;
})();if(cljs.core.truth_(inst_65243))
{var statearr_65262_65276 = state_65253__$1;(statearr_65262_65276[(1)] = (5));
} else
{var statearr_65263_65277 = state_65253__$1;(statearr_65263_65277[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65254 === (3)))
{var inst_65251 = (state_65253[(2)]);var state_65253__$1 = state_65253;return cljs.core.async.impl.ioc_helpers.return_chan(state_65253__$1,inst_65251);
} else
{if((state_val_65254 === (2)))
{var state_65253__$1 = state_65253;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65253__$1,(4),ch);
} else
{if((state_val_65254 === (1)))
{var inst_65239 = init;var state_65253__$1 = (function (){var statearr_65264 = state_65253;(statearr_65264[(7)] = inst_65239);
return statearr_65264;
})();var statearr_65265_65278 = state_65253__$1;(statearr_65265_65278[(2)] = null);
(statearr_65265_65278[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_65269 = [null,null,null,null,null,null,null,null,null];(statearr_65269[(0)] = state_machine__5805__auto__);
(statearr_65269[(1)] = (1));
return statearr_65269;
});
var state_machine__5805__auto____1 = (function (state_65253){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65253);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65270){if((e65270 instanceof Object))
{var ex__5808__auto__ = e65270;var statearr_65271_65279 = state_65253;(statearr_65271_65279[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65253);
return cljs.core.constant$keyword$1120;
} else
{throw e65270;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65280 = state_65253;
state_65253 = G__65280;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65253){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_65272 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_65272;
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
return (function (state_65357){var state_val_65358 = (state_65357[(1)]);if((state_val_65358 === (7)))
{var inst_65339 = (state_65357[(2)]);var state_65357__$1 = state_65357;var statearr_65359_65382 = state_65357__$1;(statearr_65359_65382[(2)] = inst_65339);
(statearr_65359_65382[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (1)))
{var inst_65333 = cljs.core.seq(coll);var inst_65334 = inst_65333;var state_65357__$1 = (function (){var statearr_65360 = state_65357;(statearr_65360[(7)] = inst_65334);
return statearr_65360;
})();var statearr_65361_65383 = state_65357__$1;(statearr_65361_65383[(2)] = null);
(statearr_65361_65383[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (4)))
{var inst_65334 = (state_65357[(7)]);var inst_65337 = cljs.core.first(inst_65334);var state_65357__$1 = state_65357;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65357__$1,(7),ch,inst_65337);
} else
{if((state_val_65358 === (13)))
{var inst_65351 = (state_65357[(2)]);var state_65357__$1 = state_65357;var statearr_65362_65384 = state_65357__$1;(statearr_65362_65384[(2)] = inst_65351);
(statearr_65362_65384[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (6)))
{var inst_65342 = (state_65357[(2)]);var state_65357__$1 = state_65357;if(cljs.core.truth_(inst_65342))
{var statearr_65363_65385 = state_65357__$1;(statearr_65363_65385[(1)] = (8));
} else
{var statearr_65364_65386 = state_65357__$1;(statearr_65364_65386[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (3)))
{var inst_65355 = (state_65357[(2)]);var state_65357__$1 = state_65357;return cljs.core.async.impl.ioc_helpers.return_chan(state_65357__$1,inst_65355);
} else
{if((state_val_65358 === (12)))
{var state_65357__$1 = state_65357;var statearr_65365_65387 = state_65357__$1;(statearr_65365_65387[(2)] = null);
(statearr_65365_65387[(1)] = (13));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (2)))
{var inst_65334 = (state_65357[(7)]);var state_65357__$1 = state_65357;if(cljs.core.truth_(inst_65334))
{var statearr_65366_65388 = state_65357__$1;(statearr_65366_65388[(1)] = (4));
} else
{var statearr_65367_65389 = state_65357__$1;(statearr_65367_65389[(1)] = (5));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (11)))
{var inst_65348 = cljs.core.async.close_BANG_(ch);var state_65357__$1 = state_65357;var statearr_65368_65390 = state_65357__$1;(statearr_65368_65390[(2)] = inst_65348);
(statearr_65368_65390[(1)] = (13));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (9)))
{var state_65357__$1 = state_65357;if(cljs.core.truth_(close_QMARK_))
{var statearr_65369_65391 = state_65357__$1;(statearr_65369_65391[(1)] = (11));
} else
{var statearr_65370_65392 = state_65357__$1;(statearr_65370_65392[(1)] = (12));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (5)))
{var inst_65334 = (state_65357[(7)]);var state_65357__$1 = state_65357;var statearr_65371_65393 = state_65357__$1;(statearr_65371_65393[(2)] = inst_65334);
(statearr_65371_65393[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (10)))
{var inst_65353 = (state_65357[(2)]);var state_65357__$1 = state_65357;var statearr_65372_65394 = state_65357__$1;(statearr_65372_65394[(2)] = inst_65353);
(statearr_65372_65394[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65358 === (8)))
{var inst_65334 = (state_65357[(7)]);var inst_65344 = cljs.core.next(inst_65334);var inst_65334__$1 = inst_65344;var state_65357__$1 = (function (){var statearr_65373 = state_65357;(statearr_65373[(7)] = inst_65334__$1);
return statearr_65373;
})();var statearr_65374_65395 = state_65357__$1;(statearr_65374_65395[(2)] = null);
(statearr_65374_65395[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_65378 = [null,null,null,null,null,null,null,null];(statearr_65378[(0)] = state_machine__5805__auto__);
(statearr_65378[(1)] = (1));
return statearr_65378;
});
var state_machine__5805__auto____1 = (function (state_65357){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65357);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65379){if((e65379 instanceof Object))
{var ex__5808__auto__ = e65379;var statearr_65380_65396 = state_65357;(statearr_65380_65396[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65357);
return cljs.core.constant$keyword$1120;
} else
{throw e65379;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65397 = state_65357;
state_65357 = G__65397;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65357){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_65381 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_65381;
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
cljs.core.async.Mux = (function (){var obj65399 = {};return obj65399;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3625__auto__ = _;if(and__3625__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4273__auto__ = (((_ == null))?null:_);return (function (){var or__3637__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__65403 = x__4273__auto__;return goog.typeOf(G__65403);
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
cljs.core.async.Mult = (function (){var obj65405 = {};return obj65405;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__65409 = x__4273__auto__;return goog.typeOf(G__65409);
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
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__65413 = x__4273__auto__;return goog.typeOf(G__65413);
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
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__65417 = x__4273__auto__;return goog.typeOf(G__65417);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__65647 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__65647) : cljs.core.atom.call(null,G__65647));
})();var m = (function (){if(typeof cljs.core.async.t65648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65648 = (function (cs,ch,mult,meta65649){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta65649 = meta65649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65648.cljs$lang$type = true;
cljs.core.async.t65648.cljs$lang$ctorStr = "cljs.core.async/t65648";
cljs.core.async.t65648.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t65648");
});})(cs))
;
cljs.core.async.t65648.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t65648.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t65648.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t65648.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__65651_65876 = self__.cs;var G__65652_65877 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__65651_65876,G__65652_65877) : cljs.core.reset_BANG_.call(null,G__65651_65876,G__65652_65877));
return null;
});})(cs))
;
cljs.core.async.t65648.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t65648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t65648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_65650){var self__ = this;
var _65650__$1 = this;return self__.meta65649;
});})(cs))
;
cljs.core.async.t65648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_65650,meta65649__$1){var self__ = this;
var _65650__$1 = this;return (new cljs.core.async.t65648(self__.cs,self__.ch,self__.mult,meta65649__$1));
});})(cs))
;
cljs.core.async.__GT_t65648 = ((function (cs){
return (function __GT_t65648(cs__$1,ch__$1,mult__$1,meta65649){return (new cljs.core.async.t65648(cs__$1,ch__$1,mult__$1,meta65649));
});})(cs))
;
}
return (new cljs.core.async.t65648(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__65653 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__65653) : cljs.core.atom.call(null,G__65653));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5819__auto___65878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___65878,cs,m,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___65878,cs,m,dchan,dctr,done){
return (function (state_65784){var state_val_65785 = (state_65784[(1)]);if((state_val_65785 === (7)))
{var inst_65780 = (state_65784[(2)]);var state_65784__$1 = state_65784;var statearr_65786_65879 = state_65784__$1;(statearr_65786_65879[(2)] = inst_65780);
(statearr_65786_65879[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (20)))
{var inst_65685 = (state_65784[(7)]);var inst_65695 = cljs.core.first(inst_65685);var inst_65696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65695,(0),null);var inst_65697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65695,(1),null);var state_65784__$1 = (function (){var statearr_65787 = state_65784;(statearr_65787[(8)] = inst_65696);
return statearr_65787;
})();if(cljs.core.truth_(inst_65697))
{var statearr_65788_65880 = state_65784__$1;(statearr_65788_65880[(1)] = (22));
} else
{var statearr_65789_65881 = state_65784__$1;(statearr_65789_65881[(1)] = (23));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (27)))
{var inst_65656 = (state_65784[(9)]);var inst_65727 = (state_65784[(10)]);var inst_65732 = (state_65784[(11)]);var inst_65725 = (state_65784[(12)]);var inst_65732__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_65725,inst_65727);var inst_65733 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_65732__$1,inst_65656,done);var state_65784__$1 = (function (){var statearr_65790 = state_65784;(statearr_65790[(11)] = inst_65732__$1);
return statearr_65790;
})();if(cljs.core.truth_(inst_65733))
{var statearr_65791_65882 = state_65784__$1;(statearr_65791_65882[(1)] = (30));
} else
{var statearr_65792_65883 = state_65784__$1;(statearr_65792_65883[(1)] = (31));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (1)))
{var state_65784__$1 = state_65784;var statearr_65793_65884 = state_65784__$1;(statearr_65793_65884[(2)] = null);
(statearr_65793_65884[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (24)))
{var inst_65685 = (state_65784[(7)]);var inst_65702 = (state_65784[(2)]);var inst_65703 = cljs.core.next(inst_65685);var inst_65665 = inst_65703;var inst_65666 = null;var inst_65667 = (0);var inst_65668 = (0);var state_65784__$1 = (function (){var statearr_65794 = state_65784;(statearr_65794[(13)] = inst_65666);
(statearr_65794[(14)] = inst_65665);
(statearr_65794[(15)] = inst_65702);
(statearr_65794[(16)] = inst_65668);
(statearr_65794[(17)] = inst_65667);
return statearr_65794;
})();var statearr_65795_65885 = state_65784__$1;(statearr_65795_65885[(2)] = null);
(statearr_65795_65885[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (39)))
{var state_65784__$1 = state_65784;var statearr_65799_65886 = state_65784__$1;(statearr_65799_65886[(2)] = null);
(statearr_65799_65886[(1)] = (41));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (4)))
{var inst_65656 = (state_65784[(9)]);var inst_65656__$1 = (state_65784[(2)]);var inst_65657 = (inst_65656__$1 == null);var state_65784__$1 = (function (){var statearr_65800 = state_65784;(statearr_65800[(9)] = inst_65656__$1);
return statearr_65800;
})();if(cljs.core.truth_(inst_65657))
{var statearr_65801_65887 = state_65784__$1;(statearr_65801_65887[(1)] = (5));
} else
{var statearr_65802_65888 = state_65784__$1;(statearr_65802_65888[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (15)))
{var inst_65666 = (state_65784[(13)]);var inst_65665 = (state_65784[(14)]);var inst_65668 = (state_65784[(16)]);var inst_65667 = (state_65784[(17)]);var inst_65681 = (state_65784[(2)]);var inst_65682 = (inst_65668 + (1));var tmp65796 = inst_65666;var tmp65797 = inst_65665;var tmp65798 = inst_65667;var inst_65665__$1 = tmp65797;var inst_65666__$1 = tmp65796;var inst_65667__$1 = tmp65798;var inst_65668__$1 = inst_65682;var state_65784__$1 = (function (){var statearr_65803 = state_65784;(statearr_65803[(13)] = inst_65666__$1);
(statearr_65803[(18)] = inst_65681);
(statearr_65803[(14)] = inst_65665__$1);
(statearr_65803[(16)] = inst_65668__$1);
(statearr_65803[(17)] = inst_65667__$1);
return statearr_65803;
})();var statearr_65804_65889 = state_65784__$1;(statearr_65804_65889[(2)] = null);
(statearr_65804_65889[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (21)))
{var inst_65706 = (state_65784[(2)]);var state_65784__$1 = state_65784;var statearr_65808_65890 = state_65784__$1;(statearr_65808_65890[(2)] = inst_65706);
(statearr_65808_65890[(1)] = (18));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (31)))
{var inst_65732 = (state_65784[(11)]);var inst_65736 = done(null);var inst_65737 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_65732);var state_65784__$1 = (function (){var statearr_65809 = state_65784;(statearr_65809[(19)] = inst_65736);
return statearr_65809;
})();var statearr_65810_65891 = state_65784__$1;(statearr_65810_65891[(2)] = inst_65737);
(statearr_65810_65891[(1)] = (32));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (32)))
{var inst_65727 = (state_65784[(10)]);var inst_65726 = (state_65784[(20)]);var inst_65725 = (state_65784[(12)]);var inst_65724 = (state_65784[(21)]);var inst_65739 = (state_65784[(2)]);var inst_65740 = (inst_65727 + (1));var tmp65805 = inst_65726;var tmp65806 = inst_65725;var tmp65807 = inst_65724;var inst_65724__$1 = tmp65807;var inst_65725__$1 = tmp65806;var inst_65726__$1 = tmp65805;var inst_65727__$1 = inst_65740;var state_65784__$1 = (function (){var statearr_65811 = state_65784;(statearr_65811[(10)] = inst_65727__$1);
(statearr_65811[(20)] = inst_65726__$1);
(statearr_65811[(12)] = inst_65725__$1);
(statearr_65811[(22)] = inst_65739);
(statearr_65811[(21)] = inst_65724__$1);
return statearr_65811;
})();var statearr_65812_65892 = state_65784__$1;(statearr_65812_65892[(2)] = null);
(statearr_65812_65892[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (40)))
{var inst_65752 = (state_65784[(23)]);var inst_65756 = done(null);var inst_65757 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_65752);var state_65784__$1 = (function (){var statearr_65813 = state_65784;(statearr_65813[(24)] = inst_65756);
return statearr_65813;
})();var statearr_65814_65893 = state_65784__$1;(statearr_65814_65893[(2)] = inst_65757);
(statearr_65814_65893[(1)] = (41));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (33)))
{var inst_65743 = (state_65784[(25)]);var inst_65745 = cljs.core.chunked_seq_QMARK_(inst_65743);var state_65784__$1 = state_65784;if(inst_65745)
{var statearr_65815_65894 = state_65784__$1;(statearr_65815_65894[(1)] = (36));
} else
{var statearr_65816_65895 = state_65784__$1;(statearr_65816_65895[(1)] = (37));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (13)))
{var inst_65675 = (state_65784[(26)]);var inst_65678 = cljs.core.async.close_BANG_(inst_65675);var state_65784__$1 = state_65784;var statearr_65817_65896 = state_65784__$1;(statearr_65817_65896[(2)] = inst_65678);
(statearr_65817_65896[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (22)))
{var inst_65696 = (state_65784[(8)]);var inst_65699 = cljs.core.async.close_BANG_(inst_65696);var state_65784__$1 = state_65784;var statearr_65818_65897 = state_65784__$1;(statearr_65818_65897[(2)] = inst_65699);
(statearr_65818_65897[(1)] = (24));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (36)))
{var inst_65743 = (state_65784[(25)]);var inst_65747 = cljs.core.chunk_first(inst_65743);var inst_65748 = cljs.core.chunk_rest(inst_65743);var inst_65749 = cljs.core.count(inst_65747);var inst_65724 = inst_65748;var inst_65725 = inst_65747;var inst_65726 = inst_65749;var inst_65727 = (0);var state_65784__$1 = (function (){var statearr_65819 = state_65784;(statearr_65819[(10)] = inst_65727);
(statearr_65819[(20)] = inst_65726);
(statearr_65819[(12)] = inst_65725);
(statearr_65819[(21)] = inst_65724);
return statearr_65819;
})();var statearr_65820_65898 = state_65784__$1;(statearr_65820_65898[(2)] = null);
(statearr_65820_65898[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (41)))
{var inst_65743 = (state_65784[(25)]);var inst_65759 = (state_65784[(2)]);var inst_65760 = cljs.core.next(inst_65743);var inst_65724 = inst_65760;var inst_65725 = null;var inst_65726 = (0);var inst_65727 = (0);var state_65784__$1 = (function (){var statearr_65821 = state_65784;(statearr_65821[(10)] = inst_65727);
(statearr_65821[(20)] = inst_65726);
(statearr_65821[(27)] = inst_65759);
(statearr_65821[(12)] = inst_65725);
(statearr_65821[(21)] = inst_65724);
return statearr_65821;
})();var statearr_65822_65899 = state_65784__$1;(statearr_65822_65899[(2)] = null);
(statearr_65822_65899[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (43)))
{var state_65784__$1 = state_65784;var statearr_65823_65900 = state_65784__$1;(statearr_65823_65900[(2)] = null);
(statearr_65823_65900[(1)] = (44));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (29)))
{var inst_65768 = (state_65784[(2)]);var state_65784__$1 = state_65784;var statearr_65824_65901 = state_65784__$1;(statearr_65824_65901[(2)] = inst_65768);
(statearr_65824_65901[(1)] = (26));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (44)))
{var inst_65777 = (state_65784[(2)]);var state_65784__$1 = (function (){var statearr_65825 = state_65784;(statearr_65825[(28)] = inst_65777);
return statearr_65825;
})();var statearr_65826_65902 = state_65784__$1;(statearr_65826_65902[(2)] = null);
(statearr_65826_65902[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (6)))
{var inst_65716 = (state_65784[(29)]);var inst_65715 = (function (){var G__65827 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__65827) : cljs.core.deref.call(null,G__65827));
})();var inst_65716__$1 = cljs.core.keys(inst_65715);var inst_65717 = cljs.core.count(inst_65716__$1);var inst_65718 = (function (){var G__65828 = dctr;var G__65829 = inst_65717;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__65828,G__65829) : cljs.core.reset_BANG_.call(null,G__65828,G__65829));
})();var inst_65723 = cljs.core.seq(inst_65716__$1);var inst_65724 = inst_65723;var inst_65725 = null;var inst_65726 = (0);var inst_65727 = (0);var state_65784__$1 = (function (){var statearr_65830 = state_65784;(statearr_65830[(30)] = inst_65718);
(statearr_65830[(10)] = inst_65727);
(statearr_65830[(29)] = inst_65716__$1);
(statearr_65830[(20)] = inst_65726);
(statearr_65830[(12)] = inst_65725);
(statearr_65830[(21)] = inst_65724);
return statearr_65830;
})();var statearr_65831_65903 = state_65784__$1;(statearr_65831_65903[(2)] = null);
(statearr_65831_65903[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (28)))
{var inst_65743 = (state_65784[(25)]);var inst_65724 = (state_65784[(21)]);var inst_65743__$1 = cljs.core.seq(inst_65724);var state_65784__$1 = (function (){var statearr_65832 = state_65784;(statearr_65832[(25)] = inst_65743__$1);
return statearr_65832;
})();if(inst_65743__$1)
{var statearr_65833_65904 = state_65784__$1;(statearr_65833_65904[(1)] = (33));
} else
{var statearr_65834_65905 = state_65784__$1;(statearr_65834_65905[(1)] = (34));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (25)))
{var inst_65727 = (state_65784[(10)]);var inst_65726 = (state_65784[(20)]);var inst_65729 = (inst_65727 < inst_65726);var inst_65730 = inst_65729;var state_65784__$1 = state_65784;if(cljs.core.truth_(inst_65730))
{var statearr_65835_65906 = state_65784__$1;(statearr_65835_65906[(1)] = (27));
} else
{var statearr_65836_65907 = state_65784__$1;(statearr_65836_65907[(1)] = (28));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (34)))
{var state_65784__$1 = state_65784;var statearr_65837_65908 = state_65784__$1;(statearr_65837_65908[(2)] = null);
(statearr_65837_65908[(1)] = (35));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (17)))
{var state_65784__$1 = state_65784;var statearr_65838_65909 = state_65784__$1;(statearr_65838_65909[(2)] = null);
(statearr_65838_65909[(1)] = (18));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (3)))
{var inst_65782 = (state_65784[(2)]);var state_65784__$1 = state_65784;return cljs.core.async.impl.ioc_helpers.return_chan(state_65784__$1,inst_65782);
} else
{if((state_val_65785 === (12)))
{var inst_65711 = (state_65784[(2)]);var state_65784__$1 = state_65784;var statearr_65839_65910 = state_65784__$1;(statearr_65839_65910[(2)] = inst_65711);
(statearr_65839_65910[(1)] = (9));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (2)))
{var state_65784__$1 = state_65784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65784__$1,(4),ch);
} else
{if((state_val_65785 === (23)))
{var state_65784__$1 = state_65784;var statearr_65840_65911 = state_65784__$1;(statearr_65840_65911[(2)] = null);
(statearr_65840_65911[(1)] = (24));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (35)))
{var inst_65766 = (state_65784[(2)]);var state_65784__$1 = state_65784;var statearr_65841_65912 = state_65784__$1;(statearr_65841_65912[(2)] = inst_65766);
(statearr_65841_65912[(1)] = (29));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (19)))
{var inst_65685 = (state_65784[(7)]);var inst_65689 = cljs.core.chunk_first(inst_65685);var inst_65690 = cljs.core.chunk_rest(inst_65685);var inst_65691 = cljs.core.count(inst_65689);var inst_65665 = inst_65690;var inst_65666 = inst_65689;var inst_65667 = inst_65691;var inst_65668 = (0);var state_65784__$1 = (function (){var statearr_65842 = state_65784;(statearr_65842[(13)] = inst_65666);
(statearr_65842[(14)] = inst_65665);
(statearr_65842[(16)] = inst_65668);
(statearr_65842[(17)] = inst_65667);
return statearr_65842;
})();var statearr_65843_65913 = state_65784__$1;(statearr_65843_65913[(2)] = null);
(statearr_65843_65913[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (11)))
{var inst_65685 = (state_65784[(7)]);var inst_65665 = (state_65784[(14)]);var inst_65685__$1 = cljs.core.seq(inst_65665);var state_65784__$1 = (function (){var statearr_65844 = state_65784;(statearr_65844[(7)] = inst_65685__$1);
return statearr_65844;
})();if(inst_65685__$1)
{var statearr_65845_65914 = state_65784__$1;(statearr_65845_65914[(1)] = (16));
} else
{var statearr_65846_65915 = state_65784__$1;(statearr_65846_65915[(1)] = (17));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (9)))
{var inst_65713 = (state_65784[(2)]);var state_65784__$1 = state_65784;var statearr_65847_65916 = state_65784__$1;(statearr_65847_65916[(2)] = inst_65713);
(statearr_65847_65916[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (5)))
{var inst_65663 = (function (){var G__65848 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__65848) : cljs.core.deref.call(null,G__65848));
})();var inst_65664 = cljs.core.seq(inst_65663);var inst_65665 = inst_65664;var inst_65666 = null;var inst_65667 = (0);var inst_65668 = (0);var state_65784__$1 = (function (){var statearr_65849 = state_65784;(statearr_65849[(13)] = inst_65666);
(statearr_65849[(14)] = inst_65665);
(statearr_65849[(16)] = inst_65668);
(statearr_65849[(17)] = inst_65667);
return statearr_65849;
})();var statearr_65850_65917 = state_65784__$1;(statearr_65850_65917[(2)] = null);
(statearr_65850_65917[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (14)))
{var state_65784__$1 = state_65784;var statearr_65851_65918 = state_65784__$1;(statearr_65851_65918[(2)] = null);
(statearr_65851_65918[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (45)))
{var inst_65774 = (state_65784[(2)]);var state_65784__$1 = state_65784;var statearr_65852_65919 = state_65784__$1;(statearr_65852_65919[(2)] = inst_65774);
(statearr_65852_65919[(1)] = (44));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (26)))
{var inst_65716 = (state_65784[(29)]);var inst_65770 = (state_65784[(2)]);var inst_65771 = cljs.core.seq(inst_65716);var state_65784__$1 = (function (){var statearr_65853 = state_65784;(statearr_65853[(31)] = inst_65770);
return statearr_65853;
})();if(inst_65771)
{var statearr_65854_65920 = state_65784__$1;(statearr_65854_65920[(1)] = (42));
} else
{var statearr_65855_65921 = state_65784__$1;(statearr_65855_65921[(1)] = (43));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (16)))
{var inst_65685 = (state_65784[(7)]);var inst_65687 = cljs.core.chunked_seq_QMARK_(inst_65685);var state_65784__$1 = state_65784;if(inst_65687)
{var statearr_65856_65922 = state_65784__$1;(statearr_65856_65922[(1)] = (19));
} else
{var statearr_65857_65923 = state_65784__$1;(statearr_65857_65923[(1)] = (20));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (38)))
{var inst_65763 = (state_65784[(2)]);var state_65784__$1 = state_65784;var statearr_65858_65924 = state_65784__$1;(statearr_65858_65924[(2)] = inst_65763);
(statearr_65858_65924[(1)] = (35));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (30)))
{var state_65784__$1 = state_65784;var statearr_65859_65925 = state_65784__$1;(statearr_65859_65925[(2)] = null);
(statearr_65859_65925[(1)] = (32));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (10)))
{var inst_65666 = (state_65784[(13)]);var inst_65668 = (state_65784[(16)]);var inst_65674 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_65666,inst_65668);var inst_65675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65674,(0),null);var inst_65676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65674,(1),null);var state_65784__$1 = (function (){var statearr_65860 = state_65784;(statearr_65860[(26)] = inst_65675);
return statearr_65860;
})();if(cljs.core.truth_(inst_65676))
{var statearr_65861_65926 = state_65784__$1;(statearr_65861_65926[(1)] = (13));
} else
{var statearr_65862_65927 = state_65784__$1;(statearr_65862_65927[(1)] = (14));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (18)))
{var inst_65709 = (state_65784[(2)]);var state_65784__$1 = state_65784;var statearr_65863_65928 = state_65784__$1;(statearr_65863_65928[(2)] = inst_65709);
(statearr_65863_65928[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (42)))
{var state_65784__$1 = state_65784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65784__$1,(45),dchan);
} else
{if((state_val_65785 === (37)))
{var inst_65752 = (state_65784[(23)]);var inst_65656 = (state_65784[(9)]);var inst_65743 = (state_65784[(25)]);var inst_65752__$1 = cljs.core.first(inst_65743);var inst_65753 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_65752__$1,inst_65656,done);var state_65784__$1 = (function (){var statearr_65864 = state_65784;(statearr_65864[(23)] = inst_65752__$1);
return statearr_65864;
})();if(cljs.core.truth_(inst_65753))
{var statearr_65865_65929 = state_65784__$1;(statearr_65865_65929[(1)] = (39));
} else
{var statearr_65866_65930 = state_65784__$1;(statearr_65866_65930[(1)] = (40));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_65785 === (8)))
{var inst_65668 = (state_65784[(16)]);var inst_65667 = (state_65784[(17)]);var inst_65670 = (inst_65668 < inst_65667);var inst_65671 = inst_65670;var state_65784__$1 = state_65784;if(cljs.core.truth_(inst_65671))
{var statearr_65867_65931 = state_65784__$1;(statearr_65867_65931[(1)] = (10));
} else
{var statearr_65868_65932 = state_65784__$1;(statearr_65868_65932[(1)] = (11));
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
});})(c__5819__auto___65878,cs,m,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___65878,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_65872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65872[(0)] = state_machine__5805__auto__);
(statearr_65872[(1)] = (1));
return statearr_65872;
});
var state_machine__5805__auto____1 = (function (state_65784){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_65784);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e65873){if((e65873 instanceof Object))
{var ex__5808__auto__ = e65873;var statearr_65874_65933 = state_65784;(statearr_65874_65933[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_65784);
return cljs.core.constant$keyword$1120;
} else
{throw e65873;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__65934 = state_65784;
state_65784 = G__65934;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_65784){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_65784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___65878,cs,m,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_65875 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_65875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___65878);
return statearr_65875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___65878,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj65939 = {};return obj65939;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__65943 = x__4273__auto__;return goog.typeOf(G__65943);
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
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__65947 = x__4273__auto__;return goog.typeOf(G__65947);
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
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__65951 = x__4273__auto__;return goog.typeOf(G__65951);
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
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__65955 = x__4273__auto__;return goog.typeOf(G__65955);
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
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__65959 = x__4273__auto__;return goog.typeOf(G__65959);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__65960){var map__65966 = p__65960;var map__65966__$1 = ((cljs.core.seq_QMARK_(map__65966))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65966):map__65966);var opts = map__65966__$1;var statearr_65967_65971 = state;(statearr_65967_65971[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__65966,map__65966__$1,opts){
return (function (val){var statearr_65968_65972 = state;(statearr_65968_65972[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__65966,map__65966__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_65969_65973 = state;(statearr_65969_65973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__65970 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__65970) : cljs.core.deref.call(null,G__65970));
})());
return cljs.core.constant$keyword$1120;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__65960 = null;if (arguments.length > 3) {
  p__65960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__65960);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__65974){
var state = cljs.core.first(arglist__65974);
arglist__65974 = cljs.core.next(arglist__65974);
var cont_block = cljs.core.first(arglist__65974);
arglist__65974 = cljs.core.next(arglist__65974);
var ports = cljs.core.first(arglist__65974);
var p__65960 = cljs.core.rest(arglist__65974);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__65960);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__66108 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__66108) : cljs.core.atom.call(null,G__66108));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1129,null,cljs.core.constant$keyword$1130,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$1131);var solo_mode = (function (){var G__66109 = cljs.core.constant$keyword$1130;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__66109) : cljs.core.atom.call(null,G__66109));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__66110 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__66110) : attr.call(null,G__66110));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__66111 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__66111) : cljs.core.deref.call(null,G__66111));
})();var mode = (function (){var G__66112 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__66112) : cljs.core.deref.call(null,G__66112));
})();var solos = pick(cljs.core.constant$keyword$1131,chs);var pauses = pick(cljs.core.constant$keyword$1129,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1132,solos,cljs.core.constant$keyword$1133,pick(cljs.core.constant$keyword$1130,chs),cljs.core.constant$keyword$1134,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$1129)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t66113 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t66113 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta66114){
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
this.meta66114 = meta66114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t66113.cljs$lang$type = true;
cljs.core.async.t66113.cljs$lang$ctorStr = "cljs.core.async/t66113";
cljs.core.async.t66113.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t66113");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t66113.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t66113.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t66113.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t66113.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__66116_66241 = self__.cs;var G__66117_66242 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__66116_66241,G__66117_66242) : cljs.core.reset_BANG_.call(null,G__66116_66241,G__66117_66242));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t66113.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t66113.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__66118 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__66118) : self__.solo_modes.call(null,G__66118));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__66119_66243 = self__.solo_mode;var G__66120_66244 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__66119_66243,G__66120_66244) : cljs.core.reset_BANG_.call(null,G__66119_66243,G__66120_66244));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t66113.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t66113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t66113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_66115){var self__ = this;
var _66115__$1 = this;return self__.meta66114;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t66113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_66115,meta66114__$1){var self__ = this;
var _66115__$1 = this;return (new cljs.core.async.t66113(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta66114__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t66113 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t66113(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta66114){return (new cljs.core.async.t66113(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta66114));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t66113(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5819__auto___66245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___66245,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___66245,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_66192){var state_val_66193 = (state_66192[(1)]);if((state_val_66193 === (7)))
{var inst_66134 = (state_66192[(7)]);var inst_66139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66134);var state_66192__$1 = state_66192;var statearr_66194_66246 = state_66192__$1;(statearr_66194_66246[(2)] = inst_66139);
(statearr_66194_66246[(1)] = (9));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (20)))
{var inst_66149 = (state_66192[(8)]);var state_66192__$1 = state_66192;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66192__$1,(23),out,inst_66149);
} else
{if((state_val_66193 === (1)))
{var inst_66124 = (state_66192[(9)]);var inst_66124__$1 = calc_state();var inst_66125 = cljs.core.seq_QMARK_(inst_66124__$1);var state_66192__$1 = (function (){var statearr_66195 = state_66192;(statearr_66195[(9)] = inst_66124__$1);
return statearr_66195;
})();if(inst_66125)
{var statearr_66196_66247 = state_66192__$1;(statearr_66196_66247[(1)] = (2));
} else
{var statearr_66197_66248 = state_66192__$1;(statearr_66197_66248[(1)] = (3));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (24)))
{var inst_66142 = (state_66192[(10)]);var inst_66134 = inst_66142;var state_66192__$1 = (function (){var statearr_66198 = state_66192;(statearr_66198[(7)] = inst_66134);
return statearr_66198;
})();var statearr_66199_66249 = state_66192__$1;(statearr_66199_66249[(2)] = null);
(statearr_66199_66249[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (4)))
{var inst_66124 = (state_66192[(9)]);var inst_66130 = (state_66192[(2)]);var inst_66131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66130,cljs.core.constant$keyword$1134);var inst_66132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66130,cljs.core.constant$keyword$1133);var inst_66133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66130,cljs.core.constant$keyword$1132);var inst_66134 = inst_66124;var state_66192__$1 = (function (){var statearr_66200 = state_66192;(statearr_66200[(11)] = inst_66131);
(statearr_66200[(7)] = inst_66134);
(statearr_66200[(12)] = inst_66133);
(statearr_66200[(13)] = inst_66132);
return statearr_66200;
})();var statearr_66201_66250 = state_66192__$1;(statearr_66201_66250[(2)] = null);
(statearr_66201_66250[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (15)))
{var state_66192__$1 = state_66192;var statearr_66202_66251 = state_66192__$1;(statearr_66202_66251[(2)] = null);
(statearr_66202_66251[(1)] = (16));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (21)))
{var inst_66142 = (state_66192[(10)]);var inst_66134 = inst_66142;var state_66192__$1 = (function (){var statearr_66203 = state_66192;(statearr_66203[(7)] = inst_66134);
return statearr_66203;
})();var statearr_66204_66252 = state_66192__$1;(statearr_66204_66252[(2)] = null);
(statearr_66204_66252[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (13)))
{var inst_66188 = (state_66192[(2)]);var state_66192__$1 = state_66192;var statearr_66205_66253 = state_66192__$1;(statearr_66205_66253[(2)] = inst_66188);
(statearr_66205_66253[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (22)))
{var inst_66186 = (state_66192[(2)]);var state_66192__$1 = state_66192;var statearr_66206_66254 = state_66192__$1;(statearr_66206_66254[(2)] = inst_66186);
(statearr_66206_66254[(1)] = (13));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (6)))
{var inst_66190 = (state_66192[(2)]);var state_66192__$1 = state_66192;return cljs.core.async.impl.ioc_helpers.return_chan(state_66192__$1,inst_66190);
} else
{if((state_val_66193 === (25)))
{var state_66192__$1 = state_66192;var statearr_66207_66255 = state_66192__$1;(statearr_66207_66255[(2)] = null);
(statearr_66207_66255[(1)] = (26));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (17)))
{var inst_66165 = (state_66192[(14)]);var state_66192__$1 = state_66192;var statearr_66208_66256 = state_66192__$1;(statearr_66208_66256[(2)] = inst_66165);
(statearr_66208_66256[(1)] = (19));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (3)))
{var inst_66124 = (state_66192[(9)]);var state_66192__$1 = state_66192;var statearr_66209_66257 = state_66192__$1;(statearr_66209_66257[(2)] = inst_66124);
(statearr_66209_66257[(1)] = (4));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (12)))
{var inst_66145 = (state_66192[(15)]);var inst_66165 = (state_66192[(14)]);var inst_66150 = (state_66192[(16)]);var inst_66165__$1 = (function (){var G__66210 = inst_66150;return (inst_66145.cljs$core$IFn$_invoke$arity$1 ? inst_66145.cljs$core$IFn$_invoke$arity$1(G__66210) : inst_66145.call(null,G__66210));
})();var state_66192__$1 = (function (){var statearr_66211 = state_66192;(statearr_66211[(14)] = inst_66165__$1);
return statearr_66211;
})();if(cljs.core.truth_(inst_66165__$1))
{var statearr_66212_66258 = state_66192__$1;(statearr_66212_66258[(1)] = (17));
} else
{var statearr_66213_66259 = state_66192__$1;(statearr_66213_66259[(1)] = (18));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (2)))
{var inst_66124 = (state_66192[(9)]);var inst_66127 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66124);var state_66192__$1 = state_66192;var statearr_66214_66260 = state_66192__$1;(statearr_66214_66260[(2)] = inst_66127);
(statearr_66214_66260[(1)] = (4));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (23)))
{var inst_66177 = (state_66192[(2)]);var state_66192__$1 = state_66192;if(cljs.core.truth_(inst_66177))
{var statearr_66215_66261 = state_66192__$1;(statearr_66215_66261[(1)] = (24));
} else
{var statearr_66216_66262 = state_66192__$1;(statearr_66216_66262[(1)] = (25));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (19)))
{var inst_66174 = (state_66192[(2)]);var state_66192__$1 = state_66192;if(cljs.core.truth_(inst_66174))
{var statearr_66217_66263 = state_66192__$1;(statearr_66217_66263[(1)] = (20));
} else
{var statearr_66218_66264 = state_66192__$1;(statearr_66218_66264[(1)] = (21));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (11)))
{var inst_66149 = (state_66192[(8)]);var inst_66155 = (inst_66149 == null);var state_66192__$1 = state_66192;if(cljs.core.truth_(inst_66155))
{var statearr_66219_66265 = state_66192__$1;(statearr_66219_66265[(1)] = (14));
} else
{var statearr_66220_66266 = state_66192__$1;(statearr_66220_66266[(1)] = (15));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (9)))
{var inst_66142 = (state_66192[(10)]);var inst_66142__$1 = (state_66192[(2)]);var inst_66143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66142__$1,cljs.core.constant$keyword$1134);var inst_66144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66142__$1,cljs.core.constant$keyword$1133);var inst_66145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66142__$1,cljs.core.constant$keyword$1132);var state_66192__$1 = (function (){var statearr_66221 = state_66192;(statearr_66221[(15)] = inst_66145);
(statearr_66221[(10)] = inst_66142__$1);
(statearr_66221[(17)] = inst_66144);
return statearr_66221;
})();return cljs.core.async.ioc_alts_BANG_(state_66192__$1,(10),inst_66143);
} else
{if((state_val_66193 === (5)))
{var inst_66134 = (state_66192[(7)]);var inst_66137 = cljs.core.seq_QMARK_(inst_66134);var state_66192__$1 = state_66192;if(inst_66137)
{var statearr_66222_66267 = state_66192__$1;(statearr_66222_66267[(1)] = (7));
} else
{var statearr_66223_66268 = state_66192__$1;(statearr_66223_66268[(1)] = (8));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (14)))
{var inst_66150 = (state_66192[(16)]);var inst_66157 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_66150);var state_66192__$1 = state_66192;var statearr_66224_66269 = state_66192__$1;(statearr_66224_66269[(2)] = inst_66157);
(statearr_66224_66269[(1)] = (16));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (26)))
{var inst_66182 = (state_66192[(2)]);var state_66192__$1 = state_66192;var statearr_66225_66270 = state_66192__$1;(statearr_66225_66270[(2)] = inst_66182);
(statearr_66225_66270[(1)] = (22));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (16)))
{var inst_66160 = (state_66192[(2)]);var inst_66161 = calc_state();var inst_66134 = inst_66161;var state_66192__$1 = (function (){var statearr_66226 = state_66192;(statearr_66226[(7)] = inst_66134);
(statearr_66226[(18)] = inst_66160);
return statearr_66226;
})();var statearr_66227_66271 = state_66192__$1;(statearr_66227_66271[(2)] = null);
(statearr_66227_66271[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (10)))
{var inst_66149 = (state_66192[(8)]);var inst_66150 = (state_66192[(16)]);var inst_66148 = (state_66192[(2)]);var inst_66149__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66148,(0),null);var inst_66150__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66148,(1),null);var inst_66151 = (inst_66149__$1 == null);var inst_66152 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66150__$1,change);var inst_66153 = (inst_66151) || (inst_66152);var state_66192__$1 = (function (){var statearr_66228 = state_66192;(statearr_66228[(8)] = inst_66149__$1);
(statearr_66228[(16)] = inst_66150__$1);
return statearr_66228;
})();if(cljs.core.truth_(inst_66153))
{var statearr_66229_66272 = state_66192__$1;(statearr_66229_66272[(1)] = (11));
} else
{var statearr_66230_66273 = state_66192__$1;(statearr_66230_66273[(1)] = (12));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (18)))
{var inst_66145 = (state_66192[(15)]);var inst_66150 = (state_66192[(16)]);var inst_66144 = (state_66192[(17)]);var inst_66169 = cljs.core.empty_QMARK_(inst_66145);var inst_66170 = (function (){var G__66231 = inst_66150;return (inst_66144.cljs$core$IFn$_invoke$arity$1 ? inst_66144.cljs$core$IFn$_invoke$arity$1(G__66231) : inst_66144.call(null,G__66231));
})();var inst_66171 = cljs.core.not(inst_66170);var inst_66172 = (inst_66169) && (inst_66171);var state_66192__$1 = state_66192;var statearr_66232_66274 = state_66192__$1;(statearr_66232_66274[(2)] = inst_66172);
(statearr_66232_66274[(1)] = (19));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66193 === (8)))
{var inst_66134 = (state_66192[(7)]);var state_66192__$1 = state_66192;var statearr_66233_66275 = state_66192__$1;(statearr_66233_66275[(2)] = inst_66134);
(statearr_66233_66275[(1)] = (9));
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
});})(c__5819__auto___66245,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5804__auto__,c__5819__auto___66245,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_66237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66237[(0)] = state_machine__5805__auto__);
(statearr_66237[(1)] = (1));
return statearr_66237;
});
var state_machine__5805__auto____1 = (function (state_66192){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_66192);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e66238){if((e66238 instanceof Object))
{var ex__5808__auto__ = e66238;var statearr_66239_66276 = state_66192;(statearr_66239_66276[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_66192);
return cljs.core.constant$keyword$1120;
} else
{throw e66238;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__66277 = state_66192;
state_66192 = G__66277;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_66192){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_66192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___66245,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5821__auto__ = (function (){var statearr_66240 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_66240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___66245);
return statearr_66240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___66245,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj66279 = {};return obj66279;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__66283 = x__4273__auto__;return goog.typeOf(G__66283);
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
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__66287 = x__4273__auto__;return goog.typeOf(G__66287);
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
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__66293 = x__4273__auto__;return goog.typeOf(G__66293);
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
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__66295 = x__4273__auto__;return goog.typeOf(G__66295);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__66434 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__66434) : cljs.core.atom.call(null,G__66434));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3637__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__66436 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__66436) : cljs.core.deref.call(null,G__66436));
})(),topic);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3637__auto__,mults){
return (function (p1__66296_SHARP_){if(cljs.core.truth_((function (){var G__66437 = topic;return (p1__66296_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__66296_SHARP_.cljs$core$IFn$_invoke$arity$1(G__66437) : p1__66296_SHARP_.call(null,G__66437));
})()))
{return p1__66296_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66296_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__66438 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__66438) : buf_fn.call(null,G__66438));
})())));
}
});})(or__3637__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t66439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t66439 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta66440){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta66440 = meta66440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t66439.cljs$lang$type = true;
cljs.core.async.t66439.cljs$lang$ctorStr = "cljs.core.async/t66439";
cljs.core.async.t66439.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t66439");
});})(mults,ensure_mult))
;
cljs.core.async.t66439.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t66439.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__66442 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__66442) : self__.ensure_mult.call(null,G__66442));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t66439.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__66443 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__66443) : cljs.core.deref.call(null,G__66443));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t66439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__66444 = self__.mults;var G__66445 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__66444,G__66445) : cljs.core.reset_BANG_.call(null,G__66444,G__66445));
});})(mults,ensure_mult))
;
cljs.core.async.t66439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t66439.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t66439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t66439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_66441){var self__ = this;
var _66441__$1 = this;return self__.meta66440;
});})(mults,ensure_mult))
;
cljs.core.async.t66439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_66441,meta66440__$1){var self__ = this;
var _66441__$1 = this;return (new cljs.core.async.t66439(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta66440__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t66439 = ((function (mults,ensure_mult){
return (function __GT_t66439(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta66440){return (new cljs.core.async.t66439(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta66440));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t66439(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5819__auto___66568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___66568,mults,ensure_mult,p){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___66568,mults,ensure_mult,p){
return (function (state_66517){var state_val_66518 = (state_66517[(1)]);if((state_val_66518 === (7)))
{var inst_66513 = (state_66517[(2)]);var state_66517__$1 = state_66517;var statearr_66519_66569 = state_66517__$1;(statearr_66519_66569[(2)] = inst_66513);
(statearr_66519_66569[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (20)))
{var state_66517__$1 = state_66517;var statearr_66520_66570 = state_66517__$1;(statearr_66520_66570[(2)] = null);
(statearr_66520_66570[(1)] = (21));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (1)))
{var state_66517__$1 = state_66517;var statearr_66521_66571 = state_66517__$1;(statearr_66521_66571[(2)] = null);
(statearr_66521_66571[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (24)))
{var inst_66496 = (state_66517[(7)]);var inst_66505 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_66496);var state_66517__$1 = state_66517;var statearr_66522_66572 = state_66517__$1;(statearr_66522_66572[(2)] = inst_66505);
(statearr_66522_66572[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (4)))
{var inst_66448 = (state_66517[(8)]);var inst_66448__$1 = (state_66517[(2)]);var inst_66449 = (inst_66448__$1 == null);var state_66517__$1 = (function (){var statearr_66523 = state_66517;(statearr_66523[(8)] = inst_66448__$1);
return statearr_66523;
})();if(cljs.core.truth_(inst_66449))
{var statearr_66524_66573 = state_66517__$1;(statearr_66524_66573[(1)] = (5));
} else
{var statearr_66525_66574 = state_66517__$1;(statearr_66525_66574[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (15)))
{var inst_66490 = (state_66517[(2)]);var state_66517__$1 = state_66517;var statearr_66526_66575 = state_66517__$1;(statearr_66526_66575[(2)] = inst_66490);
(statearr_66526_66575[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (21)))
{var inst_66510 = (state_66517[(2)]);var state_66517__$1 = (function (){var statearr_66527 = state_66517;(statearr_66527[(9)] = inst_66510);
return statearr_66527;
})();var statearr_66528_66576 = state_66517__$1;(statearr_66528_66576[(2)] = null);
(statearr_66528_66576[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (13)))
{var inst_66472 = (state_66517[(10)]);var inst_66474 = cljs.core.chunked_seq_QMARK_(inst_66472);var state_66517__$1 = state_66517;if(inst_66474)
{var statearr_66529_66577 = state_66517__$1;(statearr_66529_66577[(1)] = (16));
} else
{var statearr_66530_66578 = state_66517__$1;(statearr_66530_66578[(1)] = (17));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (22)))
{var inst_66502 = (state_66517[(2)]);var state_66517__$1 = state_66517;if(cljs.core.truth_(inst_66502))
{var statearr_66531_66579 = state_66517__$1;(statearr_66531_66579[(1)] = (23));
} else
{var statearr_66532_66580 = state_66517__$1;(statearr_66532_66580[(1)] = (24));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (6)))
{var inst_66448 = (state_66517[(8)]);var inst_66498 = (state_66517[(11)]);var inst_66496 = (state_66517[(7)]);var inst_66496__$1 = (function (){var G__66533 = inst_66448;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__66533) : topic_fn.call(null,G__66533));
})();var inst_66497 = (function (){var G__66534 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__66534) : cljs.core.deref.call(null,G__66534));
})();var inst_66498__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66497,inst_66496__$1);var state_66517__$1 = (function (){var statearr_66535 = state_66517;(statearr_66535[(11)] = inst_66498__$1);
(statearr_66535[(7)] = inst_66496__$1);
return statearr_66535;
})();if(cljs.core.truth_(inst_66498__$1))
{var statearr_66536_66581 = state_66517__$1;(statearr_66536_66581[(1)] = (19));
} else
{var statearr_66537_66582 = state_66517__$1;(statearr_66537_66582[(1)] = (20));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (25)))
{var inst_66507 = (state_66517[(2)]);var state_66517__$1 = state_66517;var statearr_66538_66583 = state_66517__$1;(statearr_66538_66583[(2)] = inst_66507);
(statearr_66538_66583[(1)] = (21));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (17)))
{var inst_66472 = (state_66517[(10)]);var inst_66481 = cljs.core.first(inst_66472);var inst_66482 = cljs.core.async.muxch_STAR_(inst_66481);var inst_66483 = cljs.core.async.close_BANG_(inst_66482);var inst_66484 = cljs.core.next(inst_66472);var inst_66458 = inst_66484;var inst_66459 = null;var inst_66460 = (0);var inst_66461 = (0);var state_66517__$1 = (function (){var statearr_66539 = state_66517;(statearr_66539[(12)] = inst_66483);
(statearr_66539[(13)] = inst_66461);
(statearr_66539[(14)] = inst_66459);
(statearr_66539[(15)] = inst_66458);
(statearr_66539[(16)] = inst_66460);
return statearr_66539;
})();var statearr_66540_66584 = state_66517__$1;(statearr_66540_66584[(2)] = null);
(statearr_66540_66584[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (3)))
{var inst_66515 = (state_66517[(2)]);var state_66517__$1 = state_66517;return cljs.core.async.impl.ioc_helpers.return_chan(state_66517__$1,inst_66515);
} else
{if((state_val_66518 === (12)))
{var inst_66492 = (state_66517[(2)]);var state_66517__$1 = state_66517;var statearr_66541_66585 = state_66517__$1;(statearr_66541_66585[(2)] = inst_66492);
(statearr_66541_66585[(1)] = (9));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (2)))
{var state_66517__$1 = state_66517;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66517__$1,(4),ch);
} else
{if((state_val_66518 === (23)))
{var state_66517__$1 = state_66517;var statearr_66542_66586 = state_66517__$1;(statearr_66542_66586[(2)] = null);
(statearr_66542_66586[(1)] = (25));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (19)))
{var inst_66448 = (state_66517[(8)]);var inst_66498 = (state_66517[(11)]);var inst_66500 = cljs.core.async.muxch_STAR_(inst_66498);var state_66517__$1 = state_66517;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66517__$1,(22),inst_66500,inst_66448);
} else
{if((state_val_66518 === (11)))
{var inst_66472 = (state_66517[(10)]);var inst_66458 = (state_66517[(15)]);var inst_66472__$1 = cljs.core.seq(inst_66458);var state_66517__$1 = (function (){var statearr_66543 = state_66517;(statearr_66543[(10)] = inst_66472__$1);
return statearr_66543;
})();if(inst_66472__$1)
{var statearr_66544_66587 = state_66517__$1;(statearr_66544_66587[(1)] = (13));
} else
{var statearr_66545_66588 = state_66517__$1;(statearr_66545_66588[(1)] = (14));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (9)))
{var inst_66494 = (state_66517[(2)]);var state_66517__$1 = state_66517;var statearr_66546_66589 = state_66517__$1;(statearr_66546_66589[(2)] = inst_66494);
(statearr_66546_66589[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (5)))
{var inst_66455 = (function (){var G__66547 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__66547) : cljs.core.deref.call(null,G__66547));
})();var inst_66456 = cljs.core.vals(inst_66455);var inst_66457 = cljs.core.seq(inst_66456);var inst_66458 = inst_66457;var inst_66459 = null;var inst_66460 = (0);var inst_66461 = (0);var state_66517__$1 = (function (){var statearr_66548 = state_66517;(statearr_66548[(13)] = inst_66461);
(statearr_66548[(14)] = inst_66459);
(statearr_66548[(15)] = inst_66458);
(statearr_66548[(16)] = inst_66460);
return statearr_66548;
})();var statearr_66549_66590 = state_66517__$1;(statearr_66549_66590[(2)] = null);
(statearr_66549_66590[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (14)))
{var state_66517__$1 = state_66517;var statearr_66553_66591 = state_66517__$1;(statearr_66553_66591[(2)] = null);
(statearr_66553_66591[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (16)))
{var inst_66472 = (state_66517[(10)]);var inst_66476 = cljs.core.chunk_first(inst_66472);var inst_66477 = cljs.core.chunk_rest(inst_66472);var inst_66478 = cljs.core.count(inst_66476);var inst_66458 = inst_66477;var inst_66459 = inst_66476;var inst_66460 = inst_66478;var inst_66461 = (0);var state_66517__$1 = (function (){var statearr_66554 = state_66517;(statearr_66554[(13)] = inst_66461);
(statearr_66554[(14)] = inst_66459);
(statearr_66554[(15)] = inst_66458);
(statearr_66554[(16)] = inst_66460);
return statearr_66554;
})();var statearr_66555_66592 = state_66517__$1;(statearr_66555_66592[(2)] = null);
(statearr_66555_66592[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (10)))
{var inst_66461 = (state_66517[(13)]);var inst_66459 = (state_66517[(14)]);var inst_66458 = (state_66517[(15)]);var inst_66460 = (state_66517[(16)]);var inst_66466 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_66459,inst_66461);var inst_66467 = cljs.core.async.muxch_STAR_(inst_66466);var inst_66468 = cljs.core.async.close_BANG_(inst_66467);var inst_66469 = (inst_66461 + (1));var tmp66550 = inst_66459;var tmp66551 = inst_66458;var tmp66552 = inst_66460;var inst_66458__$1 = tmp66551;var inst_66459__$1 = tmp66550;var inst_66460__$1 = tmp66552;var inst_66461__$1 = inst_66469;var state_66517__$1 = (function (){var statearr_66556 = state_66517;(statearr_66556[(13)] = inst_66461__$1);
(statearr_66556[(14)] = inst_66459__$1);
(statearr_66556[(17)] = inst_66468);
(statearr_66556[(15)] = inst_66458__$1);
(statearr_66556[(16)] = inst_66460__$1);
return statearr_66556;
})();var statearr_66557_66593 = state_66517__$1;(statearr_66557_66593[(2)] = null);
(statearr_66557_66593[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (18)))
{var inst_66487 = (state_66517[(2)]);var state_66517__$1 = state_66517;var statearr_66558_66594 = state_66517__$1;(statearr_66558_66594[(2)] = inst_66487);
(statearr_66558_66594[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66518 === (8)))
{var inst_66461 = (state_66517[(13)]);var inst_66460 = (state_66517[(16)]);var inst_66463 = (inst_66461 < inst_66460);var inst_66464 = inst_66463;var state_66517__$1 = state_66517;if(cljs.core.truth_(inst_66464))
{var statearr_66559_66595 = state_66517__$1;(statearr_66559_66595[(1)] = (10));
} else
{var statearr_66560_66596 = state_66517__$1;(statearr_66560_66596[(1)] = (11));
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
});})(c__5819__auto___66568,mults,ensure_mult,p))
;return ((function (switch__5804__auto__,c__5819__auto___66568,mults,ensure_mult,p){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_66564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66564[(0)] = state_machine__5805__auto__);
(statearr_66564[(1)] = (1));
return statearr_66564;
});
var state_machine__5805__auto____1 = (function (state_66517){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_66517);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e66565){if((e66565 instanceof Object))
{var ex__5808__auto__ = e66565;var statearr_66566_66597 = state_66517;(statearr_66566_66597[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_66517);
return cljs.core.constant$keyword$1120;
} else
{throw e66565;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__66598 = state_66517;
state_66517 = G__66598;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_66517){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_66517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___66568,mults,ensure_mult,p))
})();var state__5821__auto__ = (function (){var statearr_66567 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_66567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___66568);
return statearr_66567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___66568,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__66679 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__66679) : cljs.core.atom.call(null,G__66679));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5819__auto___66752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___66752,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___66752,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_66718){var state_val_66719 = (state_66718[(1)]);if((state_val_66719 === (7)))
{var state_66718__$1 = state_66718;var statearr_66720_66753 = state_66718__$1;(statearr_66720_66753[(2)] = null);
(statearr_66720_66753[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (1)))
{var state_66718__$1 = state_66718;var statearr_66721_66754 = state_66718__$1;(statearr_66721_66754[(2)] = null);
(statearr_66721_66754[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (4)))
{var inst_66682 = (state_66718[(7)]);var inst_66684 = (inst_66682 < cnt);var state_66718__$1 = state_66718;if(cljs.core.truth_(inst_66684))
{var statearr_66722_66755 = state_66718__$1;(statearr_66722_66755[(1)] = (6));
} else
{var statearr_66723_66756 = state_66718__$1;(statearr_66723_66756[(1)] = (7));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (15)))
{var inst_66714 = (state_66718[(2)]);var state_66718__$1 = state_66718;var statearr_66724_66757 = state_66718__$1;(statearr_66724_66757[(2)] = inst_66714);
(statearr_66724_66757[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (13)))
{var inst_66707 = cljs.core.async.close_BANG_(out);var state_66718__$1 = state_66718;var statearr_66725_66758 = state_66718__$1;(statearr_66725_66758[(2)] = inst_66707);
(statearr_66725_66758[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (6)))
{var state_66718__$1 = state_66718;var statearr_66726_66759 = state_66718__$1;(statearr_66726_66759[(2)] = null);
(statearr_66726_66759[(1)] = (11));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (3)))
{var inst_66716 = (state_66718[(2)]);var state_66718__$1 = state_66718;return cljs.core.async.impl.ioc_helpers.return_chan(state_66718__$1,inst_66716);
} else
{if((state_val_66719 === (12)))
{var inst_66704 = (state_66718[(8)]);var inst_66704__$1 = (state_66718[(2)]);var inst_66705 = cljs.core.some(cljs.core.nil_QMARK_,inst_66704__$1);var state_66718__$1 = (function (){var statearr_66727 = state_66718;(statearr_66727[(8)] = inst_66704__$1);
return statearr_66727;
})();if(cljs.core.truth_(inst_66705))
{var statearr_66728_66760 = state_66718__$1;(statearr_66728_66760[(1)] = (13));
} else
{var statearr_66729_66761 = state_66718__$1;(statearr_66729_66761[(1)] = (14));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (2)))
{var inst_66681 = (function (){var G__66730 = dctr;var G__66731 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__66730,G__66731) : cljs.core.reset_BANG_.call(null,G__66730,G__66731));
})();var inst_66682 = (0);var state_66718__$1 = (function (){var statearr_66732 = state_66718;(statearr_66732[(7)] = inst_66682);
(statearr_66732[(9)] = inst_66681);
return statearr_66732;
})();var statearr_66733_66762 = state_66718__$1;(statearr_66733_66762[(2)] = null);
(statearr_66733_66762[(1)] = (4));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (11)))
{var inst_66682 = (state_66718[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66718,(10),Object,null,(9));var inst_66691 = (function (){var G__66734 = inst_66682;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__66734) : chs__$1.call(null,G__66734));
})();var inst_66692 = (function (){var G__66735 = inst_66682;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__66735) : done.call(null,G__66735));
})();var inst_66693 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_66691,inst_66692);var state_66718__$1 = state_66718;var statearr_66736_66763 = state_66718__$1;(statearr_66736_66763[(2)] = inst_66693);
cljs.core.async.impl.ioc_helpers.process_exception(state_66718__$1);
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (9)))
{var inst_66682 = (state_66718[(7)]);var inst_66695 = (state_66718[(2)]);var inst_66696 = (inst_66682 + (1));var inst_66682__$1 = inst_66696;var state_66718__$1 = (function (){var statearr_66737 = state_66718;(statearr_66737[(10)] = inst_66695);
(statearr_66737[(7)] = inst_66682__$1);
return statearr_66737;
})();var statearr_66738_66764 = state_66718__$1;(statearr_66738_66764[(2)] = null);
(statearr_66738_66764[(1)] = (4));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (5)))
{var inst_66702 = (state_66718[(2)]);var state_66718__$1 = (function (){var statearr_66739 = state_66718;(statearr_66739[(11)] = inst_66702);
return statearr_66739;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66718__$1,(12),dchan);
} else
{if((state_val_66719 === (14)))
{var inst_66704 = (state_66718[(8)]);var inst_66709 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_66704);var state_66718__$1 = state_66718;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66718__$1,(16),out,inst_66709);
} else
{if((state_val_66719 === (16)))
{var inst_66711 = (state_66718[(2)]);var state_66718__$1 = (function (){var statearr_66740 = state_66718;(statearr_66740[(12)] = inst_66711);
return statearr_66740;
})();var statearr_66741_66765 = state_66718__$1;(statearr_66741_66765[(2)] = null);
(statearr_66741_66765[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (10)))
{var inst_66686 = (state_66718[(2)]);var inst_66687 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_66718__$1 = (function (){var statearr_66742 = state_66718;(statearr_66742[(13)] = inst_66686);
return statearr_66742;
})();var statearr_66743_66766 = state_66718__$1;(statearr_66743_66766[(2)] = inst_66687);
cljs.core.async.impl.ioc_helpers.process_exception(state_66718__$1);
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66719 === (8)))
{var inst_66700 = (state_66718[(2)]);var state_66718__$1 = state_66718;var statearr_66744_66767 = state_66718__$1;(statearr_66744_66767[(2)] = inst_66700);
(statearr_66744_66767[(1)] = (5));
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
});})(c__5819__auto___66752,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___66752,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_66748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66748[(0)] = state_machine__5805__auto__);
(statearr_66748[(1)] = (1));
return statearr_66748;
});
var state_machine__5805__auto____1 = (function (state_66718){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_66718);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e66749){if((e66749 instanceof Object))
{var ex__5808__auto__ = e66749;var statearr_66750_66768 = state_66718;(statearr_66750_66768[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_66718);
return cljs.core.constant$keyword$1120;
} else
{throw e66749;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__66769 = state_66718;
state_66718 = G__66769;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_66718){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_66718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___66752,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_66751 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_66751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___66752);
return statearr_66751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___66752,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___66879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___66879,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___66879,out){
return (function (state_66855){var state_val_66856 = (state_66855[(1)]);if((state_val_66856 === (7)))
{var inst_66835 = (state_66855[(7)]);var inst_66834 = (state_66855[(8)]);var inst_66834__$1 = (state_66855[(2)]);var inst_66835__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66834__$1,(0),null);var inst_66836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66834__$1,(1),null);var inst_66837 = (inst_66835__$1 == null);var state_66855__$1 = (function (){var statearr_66857 = state_66855;(statearr_66857[(9)] = inst_66836);
(statearr_66857[(7)] = inst_66835__$1);
(statearr_66857[(8)] = inst_66834__$1);
return statearr_66857;
})();if(cljs.core.truth_(inst_66837))
{var statearr_66858_66880 = state_66855__$1;(statearr_66858_66880[(1)] = (8));
} else
{var statearr_66859_66881 = state_66855__$1;(statearr_66859_66881[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66856 === (1)))
{var inst_66826 = cljs.core.vec(chs);var inst_66827 = inst_66826;var state_66855__$1 = (function (){var statearr_66860 = state_66855;(statearr_66860[(10)] = inst_66827);
return statearr_66860;
})();var statearr_66861_66882 = state_66855__$1;(statearr_66861_66882[(2)] = null);
(statearr_66861_66882[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66856 === (4)))
{var inst_66827 = (state_66855[(10)]);var state_66855__$1 = state_66855;return cljs.core.async.ioc_alts_BANG_(state_66855__$1,(7),inst_66827);
} else
{if((state_val_66856 === (6)))
{var inst_66851 = (state_66855[(2)]);var state_66855__$1 = state_66855;var statearr_66862_66883 = state_66855__$1;(statearr_66862_66883[(2)] = inst_66851);
(statearr_66862_66883[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66856 === (3)))
{var inst_66853 = (state_66855[(2)]);var state_66855__$1 = state_66855;return cljs.core.async.impl.ioc_helpers.return_chan(state_66855__$1,inst_66853);
} else
{if((state_val_66856 === (2)))
{var inst_66827 = (state_66855[(10)]);var inst_66829 = cljs.core.count(inst_66827);var inst_66830 = (inst_66829 > (0));var state_66855__$1 = state_66855;if(cljs.core.truth_(inst_66830))
{var statearr_66864_66884 = state_66855__$1;(statearr_66864_66884[(1)] = (4));
} else
{var statearr_66865_66885 = state_66855__$1;(statearr_66865_66885[(1)] = (5));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66856 === (11)))
{var inst_66827 = (state_66855[(10)]);var inst_66844 = (state_66855[(2)]);var tmp66863 = inst_66827;var inst_66827__$1 = tmp66863;var state_66855__$1 = (function (){var statearr_66866 = state_66855;(statearr_66866[(11)] = inst_66844);
(statearr_66866[(10)] = inst_66827__$1);
return statearr_66866;
})();var statearr_66867_66886 = state_66855__$1;(statearr_66867_66886[(2)] = null);
(statearr_66867_66886[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66856 === (9)))
{var inst_66835 = (state_66855[(7)]);var state_66855__$1 = state_66855;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66855__$1,(11),out,inst_66835);
} else
{if((state_val_66856 === (5)))
{var inst_66849 = cljs.core.async.close_BANG_(out);var state_66855__$1 = state_66855;var statearr_66868_66887 = state_66855__$1;(statearr_66868_66887[(2)] = inst_66849);
(statearr_66868_66887[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66856 === (10)))
{var inst_66847 = (state_66855[(2)]);var state_66855__$1 = state_66855;var statearr_66869_66888 = state_66855__$1;(statearr_66869_66888[(2)] = inst_66847);
(statearr_66869_66888[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66856 === (8)))
{var inst_66836 = (state_66855[(9)]);var inst_66835 = (state_66855[(7)]);var inst_66827 = (state_66855[(10)]);var inst_66834 = (state_66855[(8)]);var inst_66839 = (function (){var c = inst_66836;var v = inst_66835;var vec__66832 = inst_66834;var cs = inst_66827;return ((function (c,v,vec__66832,cs,inst_66836,inst_66835,inst_66827,inst_66834,state_val_66856,c__5819__auto___66879,out){
return (function (p1__66770_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__66770_SHARP_);
});
;})(c,v,vec__66832,cs,inst_66836,inst_66835,inst_66827,inst_66834,state_val_66856,c__5819__auto___66879,out))
})();var inst_66840 = cljs.core.filterv(inst_66839,inst_66827);var inst_66827__$1 = inst_66840;var state_66855__$1 = (function (){var statearr_66870 = state_66855;(statearr_66870[(10)] = inst_66827__$1);
return statearr_66870;
})();var statearr_66871_66889 = state_66855__$1;(statearr_66871_66889[(2)] = null);
(statearr_66871_66889[(1)] = (2));
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
});})(c__5819__auto___66879,out))
;return ((function (switch__5804__auto__,c__5819__auto___66879,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_66875 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66875[(0)] = state_machine__5805__auto__);
(statearr_66875[(1)] = (1));
return statearr_66875;
});
var state_machine__5805__auto____1 = (function (state_66855){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_66855);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e66876){if((e66876 instanceof Object))
{var ex__5808__auto__ = e66876;var statearr_66877_66890 = state_66855;(statearr_66877_66890[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_66855);
return cljs.core.constant$keyword$1120;
} else
{throw e66876;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__66891 = state_66855;
state_66855 = G__66891;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_66855){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_66855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___66879,out))
})();var state__5821__auto__ = (function (){var statearr_66878 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_66878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___66879);
return statearr_66878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___66879,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___66987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___66987,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___66987,out){
return (function (state_66964){var state_val_66965 = (state_66964[(1)]);if((state_val_66965 === (7)))
{var inst_66946 = (state_66964[(7)]);var inst_66946__$1 = (state_66964[(2)]);var inst_66947 = (inst_66946__$1 == null);var inst_66948 = cljs.core.not(inst_66947);var state_66964__$1 = (function (){var statearr_66966 = state_66964;(statearr_66966[(7)] = inst_66946__$1);
return statearr_66966;
})();if(inst_66948)
{var statearr_66967_66988 = state_66964__$1;(statearr_66967_66988[(1)] = (8));
} else
{var statearr_66968_66989 = state_66964__$1;(statearr_66968_66989[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66965 === (1)))
{var inst_66941 = (0);var state_66964__$1 = (function (){var statearr_66969 = state_66964;(statearr_66969[(8)] = inst_66941);
return statearr_66969;
})();var statearr_66970_66990 = state_66964__$1;(statearr_66970_66990[(2)] = null);
(statearr_66970_66990[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66965 === (4)))
{var state_66964__$1 = state_66964;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66964__$1,(7),ch);
} else
{if((state_val_66965 === (6)))
{var inst_66959 = (state_66964[(2)]);var state_66964__$1 = state_66964;var statearr_66971_66991 = state_66964__$1;(statearr_66971_66991[(2)] = inst_66959);
(statearr_66971_66991[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66965 === (3)))
{var inst_66961 = (state_66964[(2)]);var inst_66962 = cljs.core.async.close_BANG_(out);var state_66964__$1 = (function (){var statearr_66972 = state_66964;(statearr_66972[(9)] = inst_66961);
return statearr_66972;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_66964__$1,inst_66962);
} else
{if((state_val_66965 === (2)))
{var inst_66941 = (state_66964[(8)]);var inst_66943 = (inst_66941 < n);var state_66964__$1 = state_66964;if(cljs.core.truth_(inst_66943))
{var statearr_66973_66992 = state_66964__$1;(statearr_66973_66992[(1)] = (4));
} else
{var statearr_66974_66993 = state_66964__$1;(statearr_66974_66993[(1)] = (5));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66965 === (11)))
{var inst_66941 = (state_66964[(8)]);var inst_66951 = (state_66964[(2)]);var inst_66952 = (inst_66941 + (1));var inst_66941__$1 = inst_66952;var state_66964__$1 = (function (){var statearr_66975 = state_66964;(statearr_66975[(10)] = inst_66951);
(statearr_66975[(8)] = inst_66941__$1);
return statearr_66975;
})();var statearr_66976_66994 = state_66964__$1;(statearr_66976_66994[(2)] = null);
(statearr_66976_66994[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66965 === (9)))
{var state_66964__$1 = state_66964;var statearr_66977_66995 = state_66964__$1;(statearr_66977_66995[(2)] = null);
(statearr_66977_66995[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66965 === (5)))
{var state_66964__$1 = state_66964;var statearr_66978_66996 = state_66964__$1;(statearr_66978_66996[(2)] = null);
(statearr_66978_66996[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66965 === (10)))
{var inst_66956 = (state_66964[(2)]);var state_66964__$1 = state_66964;var statearr_66979_66997 = state_66964__$1;(statearr_66979_66997[(2)] = inst_66956);
(statearr_66979_66997[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_66965 === (8)))
{var inst_66946 = (state_66964[(7)]);var state_66964__$1 = state_66964;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66964__$1,(11),out,inst_66946);
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
});})(c__5819__auto___66987,out))
;return ((function (switch__5804__auto__,c__5819__auto___66987,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_66983 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_66983[(0)] = state_machine__5805__auto__);
(statearr_66983[(1)] = (1));
return statearr_66983;
});
var state_machine__5805__auto____1 = (function (state_66964){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_66964);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e66984){if((e66984 instanceof Object))
{var ex__5808__auto__ = e66984;var statearr_66985_66998 = state_66964;(statearr_66985_66998[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_66964);
return cljs.core.constant$keyword$1120;
} else
{throw e66984;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__66999 = state_66964;
state_66964 = G__66999;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_66964){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_66964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___66987,out))
})();var state__5821__auto__ = (function (){var statearr_66986 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_66986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___66987);
return statearr_66986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___66987,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t67012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67012 = (function (ch,f,map_LT_,meta67013){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta67013 = meta67013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67012.cljs$lang$type = true;
cljs.core.async.t67012.cljs$lang$ctorStr = "cljs.core.async/t67012";
cljs.core.async.t67012.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t67012");
});
cljs.core.async.t67012.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t67012.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t67012.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t67012.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t67015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67015 = (function (fn1,_,meta67013,ch,f,map_LT_,meta67016){
this.fn1 = fn1;
this._ = _;
this.meta67013 = meta67013;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta67016 = meta67016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67015.cljs$lang$type = true;
cljs.core.async.t67015.cljs$lang$ctorStr = "cljs.core.async/t67015";
cljs.core.async.t67015.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t67015");
});})(___$1))
;
cljs.core.async.t67015.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t67015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t67015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__67000_SHARP_){var G__67018 = (((p1__67000_SHARP_ == null))?null:(function (){var G__67019 = p1__67000_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__67019) : self__.f.call(null,G__67019));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__67018) : f1.call(null,G__67018));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t67015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_67017){var self__ = this;
var _67017__$1 = this;return self__.meta67016;
});})(___$1))
;
cljs.core.async.t67015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_67017,meta67016__$1){var self__ = this;
var _67017__$1 = this;return (new cljs.core.async.t67015(self__.fn1,self__._,self__.meta67013,self__.ch,self__.f,self__.map_LT_,meta67016__$1));
});})(___$1))
;
cljs.core.async.__GT_t67015 = ((function (___$1){
return (function __GT_t67015(fn1__$1,___$2,meta67013__$1,ch__$2,f__$2,map_LT___$2,meta67016){return (new cljs.core.async.t67015(fn1__$1,___$2,meta67013__$1,ch__$2,f__$2,map_LT___$2,meta67016));
});})(___$1))
;
}
return (new cljs.core.async.t67015(fn1,___$1,self__.meta67013,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3625__auto__ = ret;if(cljs.core.truth_(and__3625__auto__))
{return !(((function (){var G__67020 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67020) : cljs.core.deref.call(null,G__67020));
})() == null));
} else
{return and__3625__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__67021 = (function (){var G__67022 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67022) : cljs.core.deref.call(null,G__67022));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__67021) : self__.f.call(null,G__67021));
})());
} else
{return ret;
}
});
cljs.core.async.t67012.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t67012.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t67012.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t67012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67014){var self__ = this;
var _67014__$1 = this;return self__.meta67013;
});
cljs.core.async.t67012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67014,meta67013__$1){var self__ = this;
var _67014__$1 = this;return (new cljs.core.async.t67012(self__.ch,self__.f,self__.map_LT_,meta67013__$1));
});
cljs.core.async.__GT_t67012 = (function __GT_t67012(ch__$1,f__$1,map_LT___$1,meta67013){return (new cljs.core.async.t67012(ch__$1,f__$1,map_LT___$1,meta67013));
});
}
return (new cljs.core.async.t67012(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t67027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67027 = (function (ch,f,map_GT_,meta67028){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta67028 = meta67028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67027.cljs$lang$type = true;
cljs.core.async.t67027.cljs$lang$ctorStr = "cljs.core.async/t67027";
cljs.core.async.t67027.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t67027");
});
cljs.core.async.t67027.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t67027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__67030 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__67030) : self__.f.call(null,G__67030));
})(),fn1);
});
cljs.core.async.t67027.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t67027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t67027.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t67027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t67027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67029){var self__ = this;
var _67029__$1 = this;return self__.meta67028;
});
cljs.core.async.t67027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67029,meta67028__$1){var self__ = this;
var _67029__$1 = this;return (new cljs.core.async.t67027(self__.ch,self__.f,self__.map_GT_,meta67028__$1));
});
cljs.core.async.__GT_t67027 = (function __GT_t67027(ch__$1,f__$1,map_GT___$1,meta67028){return (new cljs.core.async.t67027(ch__$1,f__$1,map_GT___$1,meta67028));
});
}
return (new cljs.core.async.t67027(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t67035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67035 = (function (ch,p,filter_GT_,meta67036){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta67036 = meta67036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67035.cljs$lang$type = true;
cljs.core.async.t67035.cljs$lang$ctorStr = "cljs.core.async/t67035";
cljs.core.async.t67035.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"cljs.core.async/t67035");
});
cljs.core.async.t67035.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t67035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__67038 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__67038) : self__.p.call(null,G__67038));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t67035.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t67035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t67035.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t67035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t67035.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t67035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67037){var self__ = this;
var _67037__$1 = this;return self__.meta67036;
});
cljs.core.async.t67035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67037,meta67036__$1){var self__ = this;
var _67037__$1 = this;return (new cljs.core.async.t67035(self__.ch,self__.p,self__.filter_GT_,meta67036__$1));
});
cljs.core.async.__GT_t67035 = (function __GT_t67035(ch__$1,p__$1,filter_GT___$1,meta67036){return (new cljs.core.async.t67035(ch__$1,p__$1,filter_GT___$1,meta67036));
});
}
return (new cljs.core.async.t67035(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___67126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___67126,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___67126,out){
return (function (state_67104){var state_val_67105 = (state_67104[(1)]);if((state_val_67105 === (7)))
{var inst_67100 = (state_67104[(2)]);var state_67104__$1 = state_67104;var statearr_67106_67127 = state_67104__$1;(statearr_67106_67127[(2)] = inst_67100);
(statearr_67106_67127[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67105 === (1)))
{var state_67104__$1 = state_67104;var statearr_67107_67128 = state_67104__$1;(statearr_67107_67128[(2)] = null);
(statearr_67107_67128[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67105 === (4)))
{var inst_67086 = (state_67104[(7)]);var inst_67086__$1 = (state_67104[(2)]);var inst_67087 = (inst_67086__$1 == null);var state_67104__$1 = (function (){var statearr_67108 = state_67104;(statearr_67108[(7)] = inst_67086__$1);
return statearr_67108;
})();if(cljs.core.truth_(inst_67087))
{var statearr_67109_67129 = state_67104__$1;(statearr_67109_67129[(1)] = (5));
} else
{var statearr_67110_67130 = state_67104__$1;(statearr_67110_67130[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67105 === (6)))
{var inst_67086 = (state_67104[(7)]);var inst_67091 = (function (){var G__67111 = inst_67086;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__67111) : p.call(null,G__67111));
})();var state_67104__$1 = state_67104;if(cljs.core.truth_(inst_67091))
{var statearr_67112_67131 = state_67104__$1;(statearr_67112_67131[(1)] = (8));
} else
{var statearr_67113_67132 = state_67104__$1;(statearr_67113_67132[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67105 === (3)))
{var inst_67102 = (state_67104[(2)]);var state_67104__$1 = state_67104;return cljs.core.async.impl.ioc_helpers.return_chan(state_67104__$1,inst_67102);
} else
{if((state_val_67105 === (2)))
{var state_67104__$1 = state_67104;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67104__$1,(4),ch);
} else
{if((state_val_67105 === (11)))
{var inst_67094 = (state_67104[(2)]);var state_67104__$1 = state_67104;var statearr_67114_67133 = state_67104__$1;(statearr_67114_67133[(2)] = inst_67094);
(statearr_67114_67133[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67105 === (9)))
{var state_67104__$1 = state_67104;var statearr_67115_67134 = state_67104__$1;(statearr_67115_67134[(2)] = null);
(statearr_67115_67134[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67105 === (5)))
{var inst_67089 = cljs.core.async.close_BANG_(out);var state_67104__$1 = state_67104;var statearr_67116_67135 = state_67104__$1;(statearr_67116_67135[(2)] = inst_67089);
(statearr_67116_67135[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67105 === (10)))
{var inst_67097 = (state_67104[(2)]);var state_67104__$1 = (function (){var statearr_67117 = state_67104;(statearr_67117[(8)] = inst_67097);
return statearr_67117;
})();var statearr_67118_67136 = state_67104__$1;(statearr_67118_67136[(2)] = null);
(statearr_67118_67136[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67105 === (8)))
{var inst_67086 = (state_67104[(7)]);var state_67104__$1 = state_67104;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67104__$1,(11),out,inst_67086);
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
});})(c__5819__auto___67126,out))
;return ((function (switch__5804__auto__,c__5819__auto___67126,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_67122 = [null,null,null,null,null,null,null,null,null];(statearr_67122[(0)] = state_machine__5805__auto__);
(statearr_67122[(1)] = (1));
return statearr_67122;
});
var state_machine__5805__auto____1 = (function (state_67104){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_67104);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e67123){if((e67123 instanceof Object))
{var ex__5808__auto__ = e67123;var statearr_67124_67137 = state_67104;(statearr_67124_67137[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_67104);
return cljs.core.constant$keyword$1120;
} else
{throw e67123;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__67138 = state_67104;
state_67104 = G__67138;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_67104){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_67104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___67126,out))
})();var state__5821__auto__ = (function (){var statearr_67125 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_67125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___67126);
return statearr_67125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___67126,out))
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
return (function (state_67308){var state_val_67309 = (state_67308[(1)]);if((state_val_67309 === (7)))
{var inst_67304 = (state_67308[(2)]);var state_67308__$1 = state_67308;var statearr_67310_67352 = state_67308__$1;(statearr_67310_67352[(2)] = inst_67304);
(statearr_67310_67352[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (20)))
{var inst_67274 = (state_67308[(7)]);var inst_67285 = (state_67308[(2)]);var inst_67286 = cljs.core.next(inst_67274);var inst_67260 = inst_67286;var inst_67261 = null;var inst_67262 = (0);var inst_67263 = (0);var state_67308__$1 = (function (){var statearr_67311 = state_67308;(statearr_67311[(8)] = inst_67263);
(statearr_67311[(9)] = inst_67260);
(statearr_67311[(10)] = inst_67262);
(statearr_67311[(11)] = inst_67261);
(statearr_67311[(12)] = inst_67285);
return statearr_67311;
})();var statearr_67312_67353 = state_67308__$1;(statearr_67312_67353[(2)] = null);
(statearr_67312_67353[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (1)))
{var state_67308__$1 = state_67308;var statearr_67313_67354 = state_67308__$1;(statearr_67313_67354[(2)] = null);
(statearr_67313_67354[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (4)))
{var inst_67249 = (state_67308[(13)]);var inst_67249__$1 = (state_67308[(2)]);var inst_67250 = (inst_67249__$1 == null);var state_67308__$1 = (function (){var statearr_67314 = state_67308;(statearr_67314[(13)] = inst_67249__$1);
return statearr_67314;
})();if(cljs.core.truth_(inst_67250))
{var statearr_67315_67355 = state_67308__$1;(statearr_67315_67355[(1)] = (5));
} else
{var statearr_67316_67356 = state_67308__$1;(statearr_67316_67356[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (15)))
{var state_67308__$1 = state_67308;var statearr_67320_67357 = state_67308__$1;(statearr_67320_67357[(2)] = null);
(statearr_67320_67357[(1)] = (16));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (21)))
{var state_67308__$1 = state_67308;var statearr_67321_67358 = state_67308__$1;(statearr_67321_67358[(2)] = null);
(statearr_67321_67358[(1)] = (23));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (13)))
{var inst_67263 = (state_67308[(8)]);var inst_67260 = (state_67308[(9)]);var inst_67262 = (state_67308[(10)]);var inst_67261 = (state_67308[(11)]);var inst_67270 = (state_67308[(2)]);var inst_67271 = (inst_67263 + (1));var tmp67317 = inst_67260;var tmp67318 = inst_67262;var tmp67319 = inst_67261;var inst_67260__$1 = tmp67317;var inst_67261__$1 = tmp67319;var inst_67262__$1 = tmp67318;var inst_67263__$1 = inst_67271;var state_67308__$1 = (function (){var statearr_67322 = state_67308;(statearr_67322[(8)] = inst_67263__$1);
(statearr_67322[(9)] = inst_67260__$1);
(statearr_67322[(10)] = inst_67262__$1);
(statearr_67322[(11)] = inst_67261__$1);
(statearr_67322[(14)] = inst_67270);
return statearr_67322;
})();var statearr_67323_67359 = state_67308__$1;(statearr_67323_67359[(2)] = null);
(statearr_67323_67359[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (22)))
{var state_67308__$1 = state_67308;var statearr_67324_67360 = state_67308__$1;(statearr_67324_67360[(2)] = null);
(statearr_67324_67360[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (6)))
{var inst_67249 = (state_67308[(13)]);var inst_67258 = (function (){var G__67325 = inst_67249;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67325) : f.call(null,G__67325));
})();var inst_67259 = cljs.core.seq(inst_67258);var inst_67260 = inst_67259;var inst_67261 = null;var inst_67262 = (0);var inst_67263 = (0);var state_67308__$1 = (function (){var statearr_67326 = state_67308;(statearr_67326[(8)] = inst_67263);
(statearr_67326[(9)] = inst_67260);
(statearr_67326[(10)] = inst_67262);
(statearr_67326[(11)] = inst_67261);
return statearr_67326;
})();var statearr_67327_67361 = state_67308__$1;(statearr_67327_67361[(2)] = null);
(statearr_67327_67361[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (17)))
{var inst_67274 = (state_67308[(7)]);var inst_67278 = cljs.core.chunk_first(inst_67274);var inst_67279 = cljs.core.chunk_rest(inst_67274);var inst_67280 = cljs.core.count(inst_67278);var inst_67260 = inst_67279;var inst_67261 = inst_67278;var inst_67262 = inst_67280;var inst_67263 = (0);var state_67308__$1 = (function (){var statearr_67328 = state_67308;(statearr_67328[(8)] = inst_67263);
(statearr_67328[(9)] = inst_67260);
(statearr_67328[(10)] = inst_67262);
(statearr_67328[(11)] = inst_67261);
return statearr_67328;
})();var statearr_67329_67362 = state_67308__$1;(statearr_67329_67362[(2)] = null);
(statearr_67329_67362[(1)] = (8));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (3)))
{var inst_67306 = (state_67308[(2)]);var state_67308__$1 = state_67308;return cljs.core.async.impl.ioc_helpers.return_chan(state_67308__$1,inst_67306);
} else
{if((state_val_67309 === (12)))
{var inst_67294 = (state_67308[(2)]);var state_67308__$1 = state_67308;var statearr_67330_67363 = state_67308__$1;(statearr_67330_67363[(2)] = inst_67294);
(statearr_67330_67363[(1)] = (9));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (2)))
{var state_67308__$1 = state_67308;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67308__$1,(4),in$);
} else
{if((state_val_67309 === (23)))
{var inst_67302 = (state_67308[(2)]);var state_67308__$1 = state_67308;var statearr_67331_67364 = state_67308__$1;(statearr_67331_67364[(2)] = inst_67302);
(statearr_67331_67364[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (19)))
{var inst_67289 = (state_67308[(2)]);var state_67308__$1 = state_67308;var statearr_67332_67365 = state_67308__$1;(statearr_67332_67365[(2)] = inst_67289);
(statearr_67332_67365[(1)] = (16));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (11)))
{var inst_67260 = (state_67308[(9)]);var inst_67274 = (state_67308[(7)]);var inst_67274__$1 = cljs.core.seq(inst_67260);var state_67308__$1 = (function (){var statearr_67333 = state_67308;(statearr_67333[(7)] = inst_67274__$1);
return statearr_67333;
})();if(inst_67274__$1)
{var statearr_67334_67366 = state_67308__$1;(statearr_67334_67366[(1)] = (14));
} else
{var statearr_67335_67367 = state_67308__$1;(statearr_67335_67367[(1)] = (15));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (9)))
{var inst_67296 = (state_67308[(2)]);var inst_67297 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_67308__$1 = (function (){var statearr_67336 = state_67308;(statearr_67336[(15)] = inst_67296);
return statearr_67336;
})();if(cljs.core.truth_(inst_67297))
{var statearr_67337_67368 = state_67308__$1;(statearr_67337_67368[(1)] = (21));
} else
{var statearr_67338_67369 = state_67308__$1;(statearr_67338_67369[(1)] = (22));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (5)))
{var inst_67252 = cljs.core.async.close_BANG_(out);var state_67308__$1 = state_67308;var statearr_67339_67370 = state_67308__$1;(statearr_67339_67370[(2)] = inst_67252);
(statearr_67339_67370[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (14)))
{var inst_67274 = (state_67308[(7)]);var inst_67276 = cljs.core.chunked_seq_QMARK_(inst_67274);var state_67308__$1 = state_67308;if(inst_67276)
{var statearr_67340_67371 = state_67308__$1;(statearr_67340_67371[(1)] = (17));
} else
{var statearr_67341_67372 = state_67308__$1;(statearr_67341_67372[(1)] = (18));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (16)))
{var inst_67292 = (state_67308[(2)]);var state_67308__$1 = state_67308;var statearr_67342_67373 = state_67308__$1;(statearr_67342_67373[(2)] = inst_67292);
(statearr_67342_67373[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67309 === (10)))
{var inst_67263 = (state_67308[(8)]);var inst_67261 = (state_67308[(11)]);var inst_67268 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_67261,inst_67263);var state_67308__$1 = state_67308;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67308__$1,(13),out,inst_67268);
} else
{if((state_val_67309 === (18)))
{var inst_67274 = (state_67308[(7)]);var inst_67283 = cljs.core.first(inst_67274);var state_67308__$1 = state_67308;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67308__$1,(20),out,inst_67283);
} else
{if((state_val_67309 === (8)))
{var inst_67263 = (state_67308[(8)]);var inst_67262 = (state_67308[(10)]);var inst_67265 = (inst_67263 < inst_67262);var inst_67266 = inst_67265;var state_67308__$1 = state_67308;if(cljs.core.truth_(inst_67266))
{var statearr_67343_67374 = state_67308__$1;(statearr_67343_67374[(1)] = (10));
} else
{var statearr_67344_67375 = state_67308__$1;(statearr_67344_67375[(1)] = (11));
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
var state_machine__5805__auto____0 = (function (){var statearr_67348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_67348[(0)] = state_machine__5805__auto__);
(statearr_67348[(1)] = (1));
return statearr_67348;
});
var state_machine__5805__auto____1 = (function (state_67308){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_67308);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e67349){if((e67349 instanceof Object))
{var ex__5808__auto__ = e67349;var statearr_67350_67376 = state_67308;(statearr_67350_67376[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_67308);
return cljs.core.constant$keyword$1120;
} else
{throw e67349;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__67377 = state_67308;
state_67308 = G__67377;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_67308){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_67308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_67351 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_67351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_67351;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___67482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___67482,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___67482,out){
return (function (state_67457){var state_val_67458 = (state_67457[(1)]);if((state_val_67458 === (7)))
{var inst_67452 = (state_67457[(2)]);var state_67457__$1 = state_67457;var statearr_67459_67483 = state_67457__$1;(statearr_67459_67483[(2)] = inst_67452);
(statearr_67459_67483[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67458 === (1)))
{var inst_67434 = null;var state_67457__$1 = (function (){var statearr_67460 = state_67457;(statearr_67460[(7)] = inst_67434);
return statearr_67460;
})();var statearr_67461_67484 = state_67457__$1;(statearr_67461_67484[(2)] = null);
(statearr_67461_67484[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67458 === (4)))
{var inst_67437 = (state_67457[(8)]);var inst_67437__$1 = (state_67457[(2)]);var inst_67438 = (inst_67437__$1 == null);var inst_67439 = cljs.core.not(inst_67438);var state_67457__$1 = (function (){var statearr_67462 = state_67457;(statearr_67462[(8)] = inst_67437__$1);
return statearr_67462;
})();if(inst_67439)
{var statearr_67463_67485 = state_67457__$1;(statearr_67463_67485[(1)] = (5));
} else
{var statearr_67464_67486 = state_67457__$1;(statearr_67464_67486[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67458 === (6)))
{var state_67457__$1 = state_67457;var statearr_67465_67487 = state_67457__$1;(statearr_67465_67487[(2)] = null);
(statearr_67465_67487[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67458 === (3)))
{var inst_67454 = (state_67457[(2)]);var inst_67455 = cljs.core.async.close_BANG_(out);var state_67457__$1 = (function (){var statearr_67466 = state_67457;(statearr_67466[(9)] = inst_67454);
return statearr_67466;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_67457__$1,inst_67455);
} else
{if((state_val_67458 === (2)))
{var state_67457__$1 = state_67457;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67457__$1,(4),ch);
} else
{if((state_val_67458 === (11)))
{var inst_67437 = (state_67457[(8)]);var inst_67446 = (state_67457[(2)]);var inst_67434 = inst_67437;var state_67457__$1 = (function (){var statearr_67467 = state_67457;(statearr_67467[(10)] = inst_67446);
(statearr_67467[(7)] = inst_67434);
return statearr_67467;
})();var statearr_67468_67488 = state_67457__$1;(statearr_67468_67488[(2)] = null);
(statearr_67468_67488[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67458 === (9)))
{var inst_67437 = (state_67457[(8)]);var state_67457__$1 = state_67457;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67457__$1,(11),out,inst_67437);
} else
{if((state_val_67458 === (5)))
{var inst_67437 = (state_67457[(8)]);var inst_67434 = (state_67457[(7)]);var inst_67441 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67437,inst_67434);var state_67457__$1 = state_67457;if(inst_67441)
{var statearr_67470_67489 = state_67457__$1;(statearr_67470_67489[(1)] = (8));
} else
{var statearr_67471_67490 = state_67457__$1;(statearr_67471_67490[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67458 === (10)))
{var inst_67449 = (state_67457[(2)]);var state_67457__$1 = state_67457;var statearr_67472_67491 = state_67457__$1;(statearr_67472_67491[(2)] = inst_67449);
(statearr_67472_67491[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67458 === (8)))
{var inst_67434 = (state_67457[(7)]);var tmp67469 = inst_67434;var inst_67434__$1 = tmp67469;var state_67457__$1 = (function (){var statearr_67473 = state_67457;(statearr_67473[(7)] = inst_67434__$1);
return statearr_67473;
})();var statearr_67474_67492 = state_67457__$1;(statearr_67474_67492[(2)] = null);
(statearr_67474_67492[(1)] = (2));
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
});})(c__5819__auto___67482,out))
;return ((function (switch__5804__auto__,c__5819__auto___67482,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_67478 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_67478[(0)] = state_machine__5805__auto__);
(statearr_67478[(1)] = (1));
return statearr_67478;
});
var state_machine__5805__auto____1 = (function (state_67457){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_67457);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e67479){if((e67479 instanceof Object))
{var ex__5808__auto__ = e67479;var statearr_67480_67493 = state_67457;(statearr_67480_67493[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_67457);
return cljs.core.constant$keyword$1120;
} else
{throw e67479;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__67494 = state_67457;
state_67457 = G__67494;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_67457){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_67457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___67482,out))
})();var state__5821__auto__ = (function (){var statearr_67481 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_67481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___67482);
return statearr_67481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___67482,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___67632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___67632,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___67632,out){
return (function (state_67602){var state_val_67603 = (state_67602[(1)]);if((state_val_67603 === (7)))
{var inst_67598 = (state_67602[(2)]);var state_67602__$1 = state_67602;var statearr_67604_67633 = state_67602__$1;(statearr_67604_67633[(2)] = inst_67598);
(statearr_67604_67633[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (1)))
{var inst_67565 = (new Array(n));var inst_67566 = inst_67565;var inst_67567 = (0);var state_67602__$1 = (function (){var statearr_67605 = state_67602;(statearr_67605[(7)] = inst_67566);
(statearr_67605[(8)] = inst_67567);
return statearr_67605;
})();var statearr_67606_67634 = state_67602__$1;(statearr_67606_67634[(2)] = null);
(statearr_67606_67634[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (4)))
{var inst_67570 = (state_67602[(9)]);var inst_67570__$1 = (state_67602[(2)]);var inst_67571 = (inst_67570__$1 == null);var inst_67572 = cljs.core.not(inst_67571);var state_67602__$1 = (function (){var statearr_67607 = state_67602;(statearr_67607[(9)] = inst_67570__$1);
return statearr_67607;
})();if(inst_67572)
{var statearr_67608_67635 = state_67602__$1;(statearr_67608_67635[(1)] = (5));
} else
{var statearr_67609_67636 = state_67602__$1;(statearr_67609_67636[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (15)))
{var inst_67592 = (state_67602[(2)]);var state_67602__$1 = state_67602;var statearr_67610_67637 = state_67602__$1;(statearr_67610_67637[(2)] = inst_67592);
(statearr_67610_67637[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (13)))
{var state_67602__$1 = state_67602;var statearr_67611_67638 = state_67602__$1;(statearr_67611_67638[(2)] = null);
(statearr_67611_67638[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (6)))
{var inst_67567 = (state_67602[(8)]);var inst_67588 = (inst_67567 > (0));var state_67602__$1 = state_67602;if(cljs.core.truth_(inst_67588))
{var statearr_67612_67639 = state_67602__$1;(statearr_67612_67639[(1)] = (12));
} else
{var statearr_67613_67640 = state_67602__$1;(statearr_67613_67640[(1)] = (13));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (3)))
{var inst_67600 = (state_67602[(2)]);var state_67602__$1 = state_67602;return cljs.core.async.impl.ioc_helpers.return_chan(state_67602__$1,inst_67600);
} else
{if((state_val_67603 === (12)))
{var inst_67566 = (state_67602[(7)]);var inst_67590 = cljs.core.vec(inst_67566);var state_67602__$1 = state_67602;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67602__$1,(15),out,inst_67590);
} else
{if((state_val_67603 === (2)))
{var state_67602__$1 = state_67602;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67602__$1,(4),ch);
} else
{if((state_val_67603 === (11)))
{var inst_67582 = (state_67602[(2)]);var inst_67583 = (new Array(n));var inst_67566 = inst_67583;var inst_67567 = (0);var state_67602__$1 = (function (){var statearr_67614 = state_67602;(statearr_67614[(7)] = inst_67566);
(statearr_67614[(10)] = inst_67582);
(statearr_67614[(8)] = inst_67567);
return statearr_67614;
})();var statearr_67615_67641 = state_67602__$1;(statearr_67615_67641[(2)] = null);
(statearr_67615_67641[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (9)))
{var inst_67566 = (state_67602[(7)]);var inst_67580 = cljs.core.vec(inst_67566);var state_67602__$1 = state_67602;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67602__$1,(11),out,inst_67580);
} else
{if((state_val_67603 === (5)))
{var inst_67566 = (state_67602[(7)]);var inst_67567 = (state_67602[(8)]);var inst_67570 = (state_67602[(9)]);var inst_67575 = (state_67602[(11)]);var inst_67574 = (inst_67566[inst_67567] = inst_67570);var inst_67575__$1 = (inst_67567 + (1));var inst_67576 = (inst_67575__$1 < n);var state_67602__$1 = (function (){var statearr_67616 = state_67602;(statearr_67616[(12)] = inst_67574);
(statearr_67616[(11)] = inst_67575__$1);
return statearr_67616;
})();if(cljs.core.truth_(inst_67576))
{var statearr_67617_67642 = state_67602__$1;(statearr_67617_67642[(1)] = (8));
} else
{var statearr_67618_67643 = state_67602__$1;(statearr_67618_67643[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (14)))
{var inst_67595 = (state_67602[(2)]);var inst_67596 = cljs.core.async.close_BANG_(out);var state_67602__$1 = (function (){var statearr_67620 = state_67602;(statearr_67620[(13)] = inst_67595);
return statearr_67620;
})();var statearr_67621_67644 = state_67602__$1;(statearr_67621_67644[(2)] = inst_67596);
(statearr_67621_67644[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (10)))
{var inst_67586 = (state_67602[(2)]);var state_67602__$1 = state_67602;var statearr_67622_67645 = state_67602__$1;(statearr_67622_67645[(2)] = inst_67586);
(statearr_67622_67645[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67603 === (8)))
{var inst_67566 = (state_67602[(7)]);var inst_67575 = (state_67602[(11)]);var tmp67619 = inst_67566;var inst_67566__$1 = tmp67619;var inst_67567 = inst_67575;var state_67602__$1 = (function (){var statearr_67623 = state_67602;(statearr_67623[(7)] = inst_67566__$1);
(statearr_67623[(8)] = inst_67567);
return statearr_67623;
})();var statearr_67624_67646 = state_67602__$1;(statearr_67624_67646[(2)] = null);
(statearr_67624_67646[(1)] = (2));
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
});})(c__5819__auto___67632,out))
;return ((function (switch__5804__auto__,c__5819__auto___67632,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_67628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_67628[(0)] = state_machine__5805__auto__);
(statearr_67628[(1)] = (1));
return statearr_67628;
});
var state_machine__5805__auto____1 = (function (state_67602){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_67602);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e67629){if((e67629 instanceof Object))
{var ex__5808__auto__ = e67629;var statearr_67630_67647 = state_67602;(statearr_67630_67647[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_67602);
return cljs.core.constant$keyword$1120;
} else
{throw e67629;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__67648 = state_67602;
state_67602 = G__67648;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_67602){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_67602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___67632,out))
})();var state__5821__auto__ = (function (){var statearr_67631 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_67631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___67632);
return statearr_67631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___67632,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5819__auto___67796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___67796,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___67796,out){
return (function (state_67765){var state_val_67766 = (state_67765[(1)]);if((state_val_67766 === (7)))
{var inst_67761 = (state_67765[(2)]);var state_67765__$1 = state_67765;var statearr_67767_67797 = state_67765__$1;(statearr_67767_67797[(2)] = inst_67761);
(statearr_67767_67797[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (1)))
{var inst_67724 = [];var inst_67725 = inst_67724;var inst_67726 = cljs.core.constant$keyword$1135;var state_67765__$1 = (function (){var statearr_67768 = state_67765;(statearr_67768[(7)] = inst_67726);
(statearr_67768[(8)] = inst_67725);
return statearr_67768;
})();var statearr_67769_67798 = state_67765__$1;(statearr_67769_67798[(2)] = null);
(statearr_67769_67798[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (4)))
{var inst_67729 = (state_67765[(9)]);var inst_67729__$1 = (state_67765[(2)]);var inst_67730 = (inst_67729__$1 == null);var inst_67731 = cljs.core.not(inst_67730);var state_67765__$1 = (function (){var statearr_67770 = state_67765;(statearr_67770[(9)] = inst_67729__$1);
return statearr_67770;
})();if(inst_67731)
{var statearr_67771_67799 = state_67765__$1;(statearr_67771_67799[(1)] = (5));
} else
{var statearr_67772_67800 = state_67765__$1;(statearr_67772_67800[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (15)))
{var inst_67755 = (state_67765[(2)]);var state_67765__$1 = state_67765;var statearr_67773_67801 = state_67765__$1;(statearr_67773_67801[(2)] = inst_67755);
(statearr_67773_67801[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (13)))
{var state_67765__$1 = state_67765;var statearr_67774_67802 = state_67765__$1;(statearr_67774_67802[(2)] = null);
(statearr_67774_67802[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (6)))
{var inst_67725 = (state_67765[(8)]);var inst_67750 = inst_67725.length;var inst_67751 = (inst_67750 > (0));var state_67765__$1 = state_67765;if(cljs.core.truth_(inst_67751))
{var statearr_67775_67803 = state_67765__$1;(statearr_67775_67803[(1)] = (12));
} else
{var statearr_67776_67804 = state_67765__$1;(statearr_67776_67804[(1)] = (13));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (3)))
{var inst_67763 = (state_67765[(2)]);var state_67765__$1 = state_67765;return cljs.core.async.impl.ioc_helpers.return_chan(state_67765__$1,inst_67763);
} else
{if((state_val_67766 === (12)))
{var inst_67725 = (state_67765[(8)]);var inst_67753 = cljs.core.vec(inst_67725);var state_67765__$1 = state_67765;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67765__$1,(15),out,inst_67753);
} else
{if((state_val_67766 === (2)))
{var state_67765__$1 = state_67765;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67765__$1,(4),ch);
} else
{if((state_val_67766 === (11)))
{var inst_67729 = (state_67765[(9)]);var inst_67733 = (state_67765[(10)]);var inst_67743 = (state_67765[(2)]);var inst_67744 = [];var inst_67745 = inst_67744.push(inst_67729);var inst_67725 = inst_67744;var inst_67726 = inst_67733;var state_67765__$1 = (function (){var statearr_67777 = state_67765;(statearr_67777[(7)] = inst_67726);
(statearr_67777[(11)] = inst_67743);
(statearr_67777[(8)] = inst_67725);
(statearr_67777[(12)] = inst_67745);
return statearr_67777;
})();var statearr_67778_67805 = state_67765__$1;(statearr_67778_67805[(2)] = null);
(statearr_67778_67805[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (9)))
{var inst_67725 = (state_67765[(8)]);var inst_67741 = cljs.core.vec(inst_67725);var state_67765__$1 = state_67765;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67765__$1,(11),out,inst_67741);
} else
{if((state_val_67766 === (5)))
{var inst_67726 = (state_67765[(7)]);var inst_67729 = (state_67765[(9)]);var inst_67733 = (state_67765[(10)]);var inst_67733__$1 = (function (){var G__67779 = inst_67729;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67779) : f.call(null,G__67779));
})();var inst_67734 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67733__$1,inst_67726);var inst_67735 = cljs.core.keyword_identical_QMARK_(inst_67726,cljs.core.constant$keyword$1135);var inst_67736 = (inst_67734) || (inst_67735);var state_67765__$1 = (function (){var statearr_67780 = state_67765;(statearr_67780[(10)] = inst_67733__$1);
return statearr_67780;
})();if(cljs.core.truth_(inst_67736))
{var statearr_67781_67806 = state_67765__$1;(statearr_67781_67806[(1)] = (8));
} else
{var statearr_67782_67807 = state_67765__$1;(statearr_67782_67807[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (14)))
{var inst_67758 = (state_67765[(2)]);var inst_67759 = cljs.core.async.close_BANG_(out);var state_67765__$1 = (function (){var statearr_67784 = state_67765;(statearr_67784[(13)] = inst_67758);
return statearr_67784;
})();var statearr_67785_67808 = state_67765__$1;(statearr_67785_67808[(2)] = inst_67759);
(statearr_67785_67808[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (10)))
{var inst_67748 = (state_67765[(2)]);var state_67765__$1 = state_67765;var statearr_67786_67809 = state_67765__$1;(statearr_67786_67809[(2)] = inst_67748);
(statearr_67786_67809[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_67766 === (8)))
{var inst_67729 = (state_67765[(9)]);var inst_67733 = (state_67765[(10)]);var inst_67725 = (state_67765[(8)]);var inst_67738 = inst_67725.push(inst_67729);var tmp67783 = inst_67725;var inst_67725__$1 = tmp67783;var inst_67726 = inst_67733;var state_67765__$1 = (function (){var statearr_67787 = state_67765;(statearr_67787[(7)] = inst_67726);
(statearr_67787[(8)] = inst_67725__$1);
(statearr_67787[(14)] = inst_67738);
return statearr_67787;
})();var statearr_67788_67810 = state_67765__$1;(statearr_67788_67810[(2)] = null);
(statearr_67788_67810[(1)] = (2));
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
});})(c__5819__auto___67796,out))
;return ((function (switch__5804__auto__,c__5819__auto___67796,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_67792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_67792[(0)] = state_machine__5805__auto__);
(statearr_67792[(1)] = (1));
return statearr_67792;
});
var state_machine__5805__auto____1 = (function (state_67765){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_67765);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e67793){if((e67793 instanceof Object))
{var ex__5808__auto__ = e67793;var statearr_67794_67811 = state_67765;(statearr_67794_67811[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_67765);
return cljs.core.constant$keyword$1120;
} else
{throw e67793;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__67812 = state_67765;
state_67765 = G__67812;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_67765){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_67765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___67796,out))
})();var state__5821__auto__ = (function (){var statearr_67795 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_67795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___67796);
return statearr_67795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___67796,out))
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
