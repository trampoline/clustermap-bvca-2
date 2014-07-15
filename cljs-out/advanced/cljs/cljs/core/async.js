// Compiled by ClojureScript 0.0-2261
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t36900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36900 = (function (f,fn_handler,meta36901){
this.f = f;
this.fn_handler = fn_handler;
this.meta36901 = meta36901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36900.cljs$lang$type = true;
cljs.core.async.t36900.cljs$lang$ctorStr = "cljs.core.async/t36900";
cljs.core.async.t36900.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t36900");
});
cljs.core.async.t36900.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t36900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t36900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36902){var self__ = this;
var _36902__$1 = this;return self__.meta36901;
});
cljs.core.async.t36900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36902,meta36901__$1){var self__ = this;
var _36902__$1 = this;return (new cljs.core.async.t36900(self__.f,self__.fn_handler,meta36901__$1));
});
cljs.core.async.__GT_t36900 = (function __GT_t36900(f__$1,fn_handler__$1,meta36901){return (new cljs.core.async.t36900(f__$1,fn_handler__$1,meta36901));
});
}
return (new cljs.core.async.t36900(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__36904 = buff;if(G__36904)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__36904.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__36904.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36904);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36904);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
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
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
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
{var val_36905 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36905) : fn1.call(null,val_36905));
} else
{cljs.core.async.impl.dispatch.run(((function (val_36905,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36905) : fn1.call(null,val_36905));
});})(val_36905,ret))
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
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___36906 = n;var x_36907 = (0);while(true){
if((x_36907 < n__4399__auto___36906))
{(a[x_36907] = (0));
{
var G__36908 = (x_36907 + (1));
x_36907 = G__36908;
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
var G__36909 = (i + (1));
i = G__36909;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t36913 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36913 = (function (flag,alt_flag,meta36914){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36914 = meta36914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36913.cljs$lang$type = true;
cljs.core.async.t36913.cljs$lang$ctorStr = "cljs.core.async/t36913";
cljs.core.async.t36913.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t36913");
});})(flag))
;
cljs.core.async.t36913.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t36913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t36913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36915){var self__ = this;
var _36915__$1 = this;return self__.meta36914;
});})(flag))
;
cljs.core.async.t36913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36915,meta36914__$1){var self__ = this;
var _36915__$1 = this;return (new cljs.core.async.t36913(self__.flag,self__.alt_flag,meta36914__$1));
});})(flag))
;
cljs.core.async.__GT_t36913 = ((function (flag){
return (function __GT_t36913(flag__$1,alt_flag__$1,meta36914){return (new cljs.core.async.t36913(flag__$1,alt_flag__$1,meta36914));
});})(flag))
;
}
return (new cljs.core.async.t36913(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t36919 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36919 = (function (cb,flag,alt_handler,meta36920){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36920 = meta36920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36919.cljs$lang$type = true;
cljs.core.async.t36919.cljs$lang$ctorStr = "cljs.core.async/t36919";
cljs.core.async.t36919.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t36919");
});
cljs.core.async.t36919.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t36919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t36919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36921){var self__ = this;
var _36921__$1 = this;return self__.meta36920;
});
cljs.core.async.t36919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36921,meta36920__$1){var self__ = this;
var _36921__$1 = this;return (new cljs.core.async.t36919(self__.cb,self__.flag,self__.alt_handler,meta36920__$1));
});
cljs.core.async.__GT_t36919 = (function __GT_t36919(cb__$1,flag__$1,alt_handler__$1,meta36920){return (new cljs.core.async.t36919(cb__$1,flag__$1,alt_handler__$1,meta36920));
});
}
return (new cljs.core.async.t36919(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$659.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36922_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36922_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36922_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__36923 = (i + (1));
i = G__36923;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$645))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$645], null));
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
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
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
var alts_BANG___delegate = function (ports,p__36924){var map__36926 = p__36924;var map__36926__$1 = ((cljs.core.seq_QMARK_(map__36926))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36926):map__36926);var opts = map__36926__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__36924 = null;if (arguments.length > 1) {
  p__36924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__36924);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36927){
var ports = cljs.core.first(arglist__36927);
var p__36924 = cljs.core.rest(arglist__36927);
return alts_BANG___delegate(ports,p__36924);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36935 = (function (ch,f,map_LT_,meta36936){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36936 = meta36936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36935.cljs$lang$type = true;
cljs.core.async.t36935.cljs$lang$ctorStr = "cljs.core.async/t36935";
cljs.core.async.t36935.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t36935");
});
cljs.core.async.t36935.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t36935.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t36938 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36938 = (function (fn1,_,meta36936,ch,f,map_LT_,meta36939){
this.fn1 = fn1;
this._ = _;
this.meta36936 = meta36936;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36939 = meta36939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36938.cljs$lang$type = true;
cljs.core.async.t36938.cljs$lang$ctorStr = "cljs.core.async/t36938";
cljs.core.async.t36938.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t36938");
});})(___$1))
;
cljs.core.async.t36938.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t36938.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t36938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__36928_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__36928_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36928_SHARP_) : self__.f.call(null,p1__36928_SHARP_)))) : f1.call(null,(((p1__36928_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36928_SHARP_) : self__.f.call(null,p1__36928_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t36938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36940){var self__ = this;
var _36940__$1 = this;return self__.meta36939;
});})(___$1))
;
cljs.core.async.t36938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36940,meta36939__$1){var self__ = this;
var _36940__$1 = this;return (new cljs.core.async.t36938(self__.fn1,self__._,self__.meta36936,self__.ch,self__.f,self__.map_LT_,meta36939__$1));
});})(___$1))
;
cljs.core.async.__GT_t36938 = ((function (___$1){
return (function __GT_t36938(fn1__$1,___$2,meta36936__$1,ch__$2,f__$2,map_LT___$2,meta36939){return (new cljs.core.async.t36938(fn1__$1,___$2,meta36936__$1,ch__$2,f__$2,map_LT___$2,meta36939));
});})(___$1))
;
}
return (new cljs.core.async.t36938(fn1,___$1,self__.meta36936,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t36935.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36937){var self__ = this;
var _36937__$1 = this;return self__.meta36936;
});
cljs.core.async.t36935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36937,meta36936__$1){var self__ = this;
var _36937__$1 = this;return (new cljs.core.async.t36935(self__.ch,self__.f,self__.map_LT_,meta36936__$1));
});
cljs.core.async.__GT_t36935 = (function __GT_t36935(ch__$1,f__$1,map_LT___$1,meta36936){return (new cljs.core.async.t36935(ch__$1,f__$1,map_LT___$1,meta36936));
});
}
return (new cljs.core.async.t36935(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36944 = (function (ch,f,map_GT_,meta36945){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36945 = meta36945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36944.cljs$lang$type = true;
cljs.core.async.t36944.cljs$lang$ctorStr = "cljs.core.async/t36944";
cljs.core.async.t36944.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t36944");
});
cljs.core.async.t36944.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t36944.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36944.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36946){var self__ = this;
var _36946__$1 = this;return self__.meta36945;
});
cljs.core.async.t36944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36946,meta36945__$1){var self__ = this;
var _36946__$1 = this;return (new cljs.core.async.t36944(self__.ch,self__.f,self__.map_GT_,meta36945__$1));
});
cljs.core.async.__GT_t36944 = (function __GT_t36944(ch__$1,f__$1,map_GT___$1,meta36945){return (new cljs.core.async.t36944(ch__$1,f__$1,map_GT___$1,meta36945));
});
}
return (new cljs.core.async.t36944(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36950 = (function (ch,p,filter_GT_,meta36951){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36951 = meta36951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36950.cljs$lang$type = true;
cljs.core.async.t36950.cljs$lang$ctorStr = "cljs.core.async/t36950";
cljs.core.async.t36950.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t36950");
});
cljs.core.async.t36950.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t36950.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36950.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36952){var self__ = this;
var _36952__$1 = this;return self__.meta36951;
});
cljs.core.async.t36950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36952,meta36951__$1){var self__ = this;
var _36952__$1 = this;return (new cljs.core.async.t36950(self__.ch,self__.p,self__.filter_GT_,meta36951__$1));
});
cljs.core.async.__GT_t36950 = (function __GT_t36950(ch__$1,p__$1,filter_GT___$1,meta36951){return (new cljs.core.async.t36950(ch__$1,p__$1,filter_GT___$1,meta36951));
});
}
return (new cljs.core.async.t36950(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___37035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___37035,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___37035,out){
return (function (state_37014){var state_val_37015 = (state_37014[(1)]);if((state_val_37015 === (7)))
{var inst_37010 = (state_37014[(2)]);var state_37014__$1 = state_37014;var statearr_37016_37036 = state_37014__$1;(statearr_37016_37036[(2)] = inst_37010);
(statearr_37016_37036[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37015 === (1)))
{var state_37014__$1 = state_37014;var statearr_37017_37037 = state_37014__$1;(statearr_37017_37037[(2)] = null);
(statearr_37017_37037[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37015 === (4)))
{var inst_36996 = (state_37014[(7)]);var inst_36996__$1 = (state_37014[(2)]);var inst_36997 = (inst_36996__$1 == null);var state_37014__$1 = (function (){var statearr_37018 = state_37014;(statearr_37018[(7)] = inst_36996__$1);
return statearr_37018;
})();if(cljs.core.truth_(inst_36997))
{var statearr_37019_37038 = state_37014__$1;(statearr_37019_37038[(1)] = (5));
} else
{var statearr_37020_37039 = state_37014__$1;(statearr_37020_37039[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37015 === (6)))
{var inst_36996 = (state_37014[(7)]);var inst_37001 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36996) : p.call(null,inst_36996));var state_37014__$1 = state_37014;if(cljs.core.truth_(inst_37001))
{var statearr_37021_37040 = state_37014__$1;(statearr_37021_37040[(1)] = (8));
} else
{var statearr_37022_37041 = state_37014__$1;(statearr_37022_37041[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37015 === (3)))
{var inst_37012 = (state_37014[(2)]);var state_37014__$1 = state_37014;return cljs.core.async.impl.ioc_helpers.return_chan(state_37014__$1,inst_37012);
} else
{if((state_val_37015 === (2)))
{var state_37014__$1 = state_37014;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37014__$1,(4),ch);
} else
{if((state_val_37015 === (11)))
{var inst_37004 = (state_37014[(2)]);var state_37014__$1 = state_37014;var statearr_37023_37042 = state_37014__$1;(statearr_37023_37042[(2)] = inst_37004);
(statearr_37023_37042[(1)] = (10));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37015 === (9)))
{var state_37014__$1 = state_37014;var statearr_37024_37043 = state_37014__$1;(statearr_37024_37043[(2)] = null);
(statearr_37024_37043[(1)] = (10));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37015 === (5)))
{var inst_36999 = cljs.core.async.close_BANG_(out);var state_37014__$1 = state_37014;var statearr_37025_37044 = state_37014__$1;(statearr_37025_37044[(2)] = inst_36999);
(statearr_37025_37044[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37015 === (10)))
{var inst_37007 = (state_37014[(2)]);var state_37014__$1 = (function (){var statearr_37026 = state_37014;(statearr_37026[(8)] = inst_37007);
return statearr_37026;
})();var statearr_37027_37045 = state_37014__$1;(statearr_37027_37045[(2)] = null);
(statearr_37027_37045[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37015 === (8)))
{var inst_36996 = (state_37014[(7)]);var state_37014__$1 = state_37014;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37014__$1,(11),out,inst_36996);
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
});})(c__5693__auto___37035,out))
;return ((function (switch__5678__auto__,c__5693__auto___37035,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37031 = [null,null,null,null,null,null,null,null,null];(statearr_37031[(0)] = state_machine__5679__auto__);
(statearr_37031[(1)] = (1));
return statearr_37031;
});
var state_machine__5679__auto____1 = (function (state_37014){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37014);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37032){if((e37032 instanceof Object))
{var ex__5682__auto__ = e37032;var statearr_37033_37046 = state_37014;(statearr_37033_37046[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37014);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e37032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__37047 = state_37014;
state_37014 = G__37047;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37014){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___37035,out))
})();var state__5695__auto__ = (function (){var statearr_37034 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___37035);
return statearr_37034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___37035,out))
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
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37199){var state_val_37200 = (state_37199[(1)]);if((state_val_37200 === (7)))
{var inst_37195 = (state_37199[(2)]);var state_37199__$1 = state_37199;var statearr_37201_37238 = state_37199__$1;(statearr_37201_37238[(2)] = inst_37195);
(statearr_37201_37238[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (20)))
{var inst_37170 = (state_37199[(7)]);var inst_37181 = (state_37199[(2)]);var inst_37182 = cljs.core.next(inst_37170);var inst_37156 = inst_37182;var inst_37157 = null;var inst_37158 = (0);var inst_37159 = (0);var state_37199__$1 = (function (){var statearr_37202 = state_37199;(statearr_37202[(8)] = inst_37159);
(statearr_37202[(9)] = inst_37156);
(statearr_37202[(10)] = inst_37157);
(statearr_37202[(11)] = inst_37181);
(statearr_37202[(12)] = inst_37158);
return statearr_37202;
})();var statearr_37203_37239 = state_37199__$1;(statearr_37203_37239[(2)] = null);
(statearr_37203_37239[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (1)))
{var state_37199__$1 = state_37199;var statearr_37204_37240 = state_37199__$1;(statearr_37204_37240[(2)] = null);
(statearr_37204_37240[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (4)))
{var inst_37145 = (state_37199[(13)]);var inst_37145__$1 = (state_37199[(2)]);var inst_37146 = (inst_37145__$1 == null);var state_37199__$1 = (function (){var statearr_37208 = state_37199;(statearr_37208[(13)] = inst_37145__$1);
return statearr_37208;
})();if(cljs.core.truth_(inst_37146))
{var statearr_37209_37241 = state_37199__$1;(statearr_37209_37241[(1)] = (5));
} else
{var statearr_37210_37242 = state_37199__$1;(statearr_37210_37242[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (15)))
{var state_37199__$1 = state_37199;var statearr_37211_37243 = state_37199__$1;(statearr_37211_37243[(2)] = null);
(statearr_37211_37243[(1)] = (16));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (13)))
{var inst_37159 = (state_37199[(8)]);var inst_37156 = (state_37199[(9)]);var inst_37157 = (state_37199[(10)]);var inst_37158 = (state_37199[(12)]);var inst_37166 = (state_37199[(2)]);var inst_37167 = (inst_37159 + (1));var tmp37205 = inst_37156;var tmp37206 = inst_37157;var tmp37207 = inst_37158;var inst_37156__$1 = tmp37205;var inst_37157__$1 = tmp37206;var inst_37158__$1 = tmp37207;var inst_37159__$1 = inst_37167;var state_37199__$1 = (function (){var statearr_37212 = state_37199;(statearr_37212[(8)] = inst_37159__$1);
(statearr_37212[(9)] = inst_37156__$1);
(statearr_37212[(10)] = inst_37157__$1);
(statearr_37212[(14)] = inst_37166);
(statearr_37212[(12)] = inst_37158__$1);
return statearr_37212;
})();var statearr_37213_37244 = state_37199__$1;(statearr_37213_37244[(2)] = null);
(statearr_37213_37244[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (6)))
{var inst_37145 = (state_37199[(13)]);var inst_37150 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37145) : f.call(null,inst_37145));var inst_37155 = cljs.core.seq(inst_37150);var inst_37156 = inst_37155;var inst_37157 = null;var inst_37158 = (0);var inst_37159 = (0);var state_37199__$1 = (function (){var statearr_37214 = state_37199;(statearr_37214[(8)] = inst_37159);
(statearr_37214[(9)] = inst_37156);
(statearr_37214[(10)] = inst_37157);
(statearr_37214[(12)] = inst_37158);
return statearr_37214;
})();var statearr_37215_37245 = state_37199__$1;(statearr_37215_37245[(2)] = null);
(statearr_37215_37245[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (17)))
{var inst_37170 = (state_37199[(7)]);var inst_37174 = cljs.core.chunk_first(inst_37170);var inst_37175 = cljs.core.chunk_rest(inst_37170);var inst_37176 = cljs.core.count(inst_37174);var inst_37156 = inst_37175;var inst_37157 = inst_37174;var inst_37158 = inst_37176;var inst_37159 = (0);var state_37199__$1 = (function (){var statearr_37216 = state_37199;(statearr_37216[(8)] = inst_37159);
(statearr_37216[(9)] = inst_37156);
(statearr_37216[(10)] = inst_37157);
(statearr_37216[(12)] = inst_37158);
return statearr_37216;
})();var statearr_37217_37246 = state_37199__$1;(statearr_37217_37246[(2)] = null);
(statearr_37217_37246[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (3)))
{var inst_37197 = (state_37199[(2)]);var state_37199__$1 = state_37199;return cljs.core.async.impl.ioc_helpers.return_chan(state_37199__$1,inst_37197);
} else
{if((state_val_37200 === (12)))
{var inst_37190 = (state_37199[(2)]);var state_37199__$1 = state_37199;var statearr_37218_37247 = state_37199__$1;(statearr_37218_37247[(2)] = inst_37190);
(statearr_37218_37247[(1)] = (9));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (2)))
{var state_37199__$1 = state_37199;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37199__$1,(4),in$);
} else
{if((state_val_37200 === (19)))
{var inst_37185 = (state_37199[(2)]);var state_37199__$1 = state_37199;var statearr_37219_37248 = state_37199__$1;(statearr_37219_37248[(2)] = inst_37185);
(statearr_37219_37248[(1)] = (16));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (11)))
{var inst_37156 = (state_37199[(9)]);var inst_37170 = (state_37199[(7)]);var inst_37170__$1 = cljs.core.seq(inst_37156);var state_37199__$1 = (function (){var statearr_37220 = state_37199;(statearr_37220[(7)] = inst_37170__$1);
return statearr_37220;
})();if(inst_37170__$1)
{var statearr_37221_37249 = state_37199__$1;(statearr_37221_37249[(1)] = (14));
} else
{var statearr_37222_37250 = state_37199__$1;(statearr_37222_37250[(1)] = (15));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (9)))
{var inst_37192 = (state_37199[(2)]);var state_37199__$1 = (function (){var statearr_37223 = state_37199;(statearr_37223[(15)] = inst_37192);
return statearr_37223;
})();var statearr_37224_37251 = state_37199__$1;(statearr_37224_37251[(2)] = null);
(statearr_37224_37251[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (5)))
{var inst_37148 = cljs.core.async.close_BANG_(out);var state_37199__$1 = state_37199;var statearr_37225_37252 = state_37199__$1;(statearr_37225_37252[(2)] = inst_37148);
(statearr_37225_37252[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (14)))
{var inst_37170 = (state_37199[(7)]);var inst_37172 = cljs.core.chunked_seq_QMARK_(inst_37170);var state_37199__$1 = state_37199;if(inst_37172)
{var statearr_37226_37253 = state_37199__$1;(statearr_37226_37253[(1)] = (17));
} else
{var statearr_37227_37254 = state_37199__$1;(statearr_37227_37254[(1)] = (18));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (16)))
{var inst_37188 = (state_37199[(2)]);var state_37199__$1 = state_37199;var statearr_37228_37255 = state_37199__$1;(statearr_37228_37255[(2)] = inst_37188);
(statearr_37228_37255[(1)] = (12));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37200 === (10)))
{var inst_37159 = (state_37199[(8)]);var inst_37157 = (state_37199[(10)]);var inst_37164 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37157,inst_37159);var state_37199__$1 = state_37199;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37199__$1,(13),out,inst_37164);
} else
{if((state_val_37200 === (18)))
{var inst_37170 = (state_37199[(7)]);var inst_37179 = cljs.core.first(inst_37170);var state_37199__$1 = state_37199;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37199__$1,(20),out,inst_37179);
} else
{if((state_val_37200 === (8)))
{var inst_37159 = (state_37199[(8)]);var inst_37158 = (state_37199[(12)]);var inst_37161 = (inst_37159 < inst_37158);var inst_37162 = inst_37161;var state_37199__$1 = state_37199;if(cljs.core.truth_(inst_37162))
{var statearr_37229_37256 = state_37199__$1;(statearr_37229_37256[(1)] = (10));
} else
{var statearr_37230_37257 = state_37199__$1;(statearr_37230_37257[(1)] = (11));
}
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37234[(0)] = state_machine__5679__auto__);
(statearr_37234[(1)] = (1));
return statearr_37234;
});
var state_machine__5679__auto____1 = (function (state_37199){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37199);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37235){if((e37235 instanceof Object))
{var ex__5682__auto__ = e37235;var statearr_37236_37258 = state_37199;(statearr_37236_37258[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37199);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e37235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__37259 = state_37199;
state_37199 = G__37259;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37199){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37237 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
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
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
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
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___37340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___37340){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___37340){
return (function (state_37319){var state_val_37320 = (state_37319[(1)]);if((state_val_37320 === (7)))
{var inst_37315 = (state_37319[(2)]);var state_37319__$1 = state_37319;var statearr_37321_37341 = state_37319__$1;(statearr_37321_37341[(2)] = inst_37315);
(statearr_37321_37341[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37320 === (1)))
{var state_37319__$1 = state_37319;var statearr_37322_37342 = state_37319__$1;(statearr_37322_37342[(2)] = null);
(statearr_37322_37342[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37320 === (4)))
{var inst_37302 = (state_37319[(7)]);var inst_37302__$1 = (state_37319[(2)]);var inst_37303 = (inst_37302__$1 == null);var state_37319__$1 = (function (){var statearr_37323 = state_37319;(statearr_37323[(7)] = inst_37302__$1);
return statearr_37323;
})();if(cljs.core.truth_(inst_37303))
{var statearr_37324_37343 = state_37319__$1;(statearr_37324_37343[(1)] = (5));
} else
{var statearr_37325_37344 = state_37319__$1;(statearr_37325_37344[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37320 === (6)))
{var inst_37302 = (state_37319[(7)]);var state_37319__$1 = state_37319;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37319__$1,(11),to,inst_37302);
} else
{if((state_val_37320 === (3)))
{var inst_37317 = (state_37319[(2)]);var state_37319__$1 = state_37319;return cljs.core.async.impl.ioc_helpers.return_chan(state_37319__$1,inst_37317);
} else
{if((state_val_37320 === (2)))
{var state_37319__$1 = state_37319;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37319__$1,(4),from);
} else
{if((state_val_37320 === (11)))
{var inst_37312 = (state_37319[(2)]);var state_37319__$1 = (function (){var statearr_37326 = state_37319;(statearr_37326[(8)] = inst_37312);
return statearr_37326;
})();var statearr_37327_37345 = state_37319__$1;(statearr_37327_37345[(2)] = null);
(statearr_37327_37345[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37320 === (9)))
{var state_37319__$1 = state_37319;var statearr_37328_37346 = state_37319__$1;(statearr_37328_37346[(2)] = null);
(statearr_37328_37346[(1)] = (10));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37320 === (5)))
{var state_37319__$1 = state_37319;if(cljs.core.truth_(close_QMARK_))
{var statearr_37329_37347 = state_37319__$1;(statearr_37329_37347[(1)] = (8));
} else
{var statearr_37330_37348 = state_37319__$1;(statearr_37330_37348[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37320 === (10)))
{var inst_37309 = (state_37319[(2)]);var state_37319__$1 = state_37319;var statearr_37331_37349 = state_37319__$1;(statearr_37331_37349[(2)] = inst_37309);
(statearr_37331_37349[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37320 === (8)))
{var inst_37306 = cljs.core.async.close_BANG_(to);var state_37319__$1 = state_37319;var statearr_37332_37350 = state_37319__$1;(statearr_37332_37350[(2)] = inst_37306);
(statearr_37332_37350[(1)] = (10));
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___37340))
;return ((function (switch__5678__auto__,c__5693__auto___37340){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37336 = [null,null,null,null,null,null,null,null,null];(statearr_37336[(0)] = state_machine__5679__auto__);
(statearr_37336[(1)] = (1));
return statearr_37336;
});
var state_machine__5679__auto____1 = (function (state_37319){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37319);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37337){if((e37337 instanceof Object))
{var ex__5682__auto__ = e37337;var statearr_37338_37351 = state_37319;(statearr_37338_37351[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37319);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e37337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__37352 = state_37319;
state_37319 = G__37352;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37319){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___37340))
})();var state__5695__auto__ = (function (){var statearr_37339 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___37340);
return statearr_37339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___37340))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5693__auto___37439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___37439,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___37439,tc,fc){
return (function (state_37417){var state_val_37418 = (state_37417[(1)]);if((state_val_37418 === (7)))
{var inst_37413 = (state_37417[(2)]);var state_37417__$1 = state_37417;var statearr_37419_37440 = state_37417__$1;(statearr_37419_37440[(2)] = inst_37413);
(statearr_37419_37440[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37418 === (1)))
{var state_37417__$1 = state_37417;var statearr_37420_37441 = state_37417__$1;(statearr_37420_37441[(2)] = null);
(statearr_37420_37441[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37418 === (4)))
{var inst_37398 = (state_37417[(7)]);var inst_37398__$1 = (state_37417[(2)]);var inst_37399 = (inst_37398__$1 == null);var state_37417__$1 = (function (){var statearr_37421 = state_37417;(statearr_37421[(7)] = inst_37398__$1);
return statearr_37421;
})();if(cljs.core.truth_(inst_37399))
{var statearr_37422_37442 = state_37417__$1;(statearr_37422_37442[(1)] = (5));
} else
{var statearr_37423_37443 = state_37417__$1;(statearr_37423_37443[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37418 === (6)))
{var inst_37398 = (state_37417[(7)]);var inst_37404 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37398) : p.call(null,inst_37398));var state_37417__$1 = state_37417;if(cljs.core.truth_(inst_37404))
{var statearr_37424_37444 = state_37417__$1;(statearr_37424_37444[(1)] = (9));
} else
{var statearr_37425_37445 = state_37417__$1;(statearr_37425_37445[(1)] = (10));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37418 === (3)))
{var inst_37415 = (state_37417[(2)]);var state_37417__$1 = state_37417;return cljs.core.async.impl.ioc_helpers.return_chan(state_37417__$1,inst_37415);
} else
{if((state_val_37418 === (2)))
{var state_37417__$1 = state_37417;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37417__$1,(4),ch);
} else
{if((state_val_37418 === (11)))
{var inst_37398 = (state_37417[(7)]);var inst_37408 = (state_37417[(2)]);var state_37417__$1 = state_37417;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37417__$1,(8),inst_37408,inst_37398);
} else
{if((state_val_37418 === (9)))
{var state_37417__$1 = state_37417;var statearr_37426_37446 = state_37417__$1;(statearr_37426_37446[(2)] = tc);
(statearr_37426_37446[(1)] = (11));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37418 === (5)))
{var inst_37401 = cljs.core.async.close_BANG_(tc);var inst_37402 = cljs.core.async.close_BANG_(fc);var state_37417__$1 = (function (){var statearr_37427 = state_37417;(statearr_37427[(8)] = inst_37401);
return statearr_37427;
})();var statearr_37428_37447 = state_37417__$1;(statearr_37428_37447[(2)] = inst_37402);
(statearr_37428_37447[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37418 === (10)))
{var state_37417__$1 = state_37417;var statearr_37429_37448 = state_37417__$1;(statearr_37429_37448[(2)] = fc);
(statearr_37429_37448[(1)] = (11));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37418 === (8)))
{var inst_37410 = (state_37417[(2)]);var state_37417__$1 = (function (){var statearr_37430 = state_37417;(statearr_37430[(9)] = inst_37410);
return statearr_37430;
})();var statearr_37431_37449 = state_37417__$1;(statearr_37431_37449[(2)] = null);
(statearr_37431_37449[(1)] = (2));
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___37439,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___37439,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37435 = [null,null,null,null,null,null,null,null,null,null];(statearr_37435[(0)] = state_machine__5679__auto__);
(statearr_37435[(1)] = (1));
return statearr_37435;
});
var state_machine__5679__auto____1 = (function (state_37417){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37417);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37436){if((e37436 instanceof Object))
{var ex__5682__auto__ = e37436;var statearr_37437_37450 = state_37417;(statearr_37437_37450[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37417);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e37436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__37451 = state_37417;
state_37417 = G__37451;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37417){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___37439,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_37438 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___37439);
return statearr_37438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___37439,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37498){var state_val_37499 = (state_37498[(1)]);if((state_val_37499 === (7)))
{var inst_37494 = (state_37498[(2)]);var state_37498__$1 = state_37498;var statearr_37500_37516 = state_37498__$1;(statearr_37500_37516[(2)] = inst_37494);
(statearr_37500_37516[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37499 === (6)))
{var inst_37487 = (state_37498[(7)]);var inst_37484 = (state_37498[(8)]);var inst_37491 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37484,inst_37487) : f.call(null,inst_37484,inst_37487));var inst_37484__$1 = inst_37491;var state_37498__$1 = (function (){var statearr_37501 = state_37498;(statearr_37501[(8)] = inst_37484__$1);
return statearr_37501;
})();var statearr_37502_37517 = state_37498__$1;(statearr_37502_37517[(2)] = null);
(statearr_37502_37517[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37499 === (5)))
{var inst_37484 = (state_37498[(8)]);var state_37498__$1 = state_37498;var statearr_37503_37518 = state_37498__$1;(statearr_37503_37518[(2)] = inst_37484);
(statearr_37503_37518[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37499 === (4)))
{var inst_37487 = (state_37498[(7)]);var inst_37487__$1 = (state_37498[(2)]);var inst_37488 = (inst_37487__$1 == null);var state_37498__$1 = (function (){var statearr_37504 = state_37498;(statearr_37504[(7)] = inst_37487__$1);
return statearr_37504;
})();if(cljs.core.truth_(inst_37488))
{var statearr_37505_37519 = state_37498__$1;(statearr_37505_37519[(1)] = (5));
} else
{var statearr_37506_37520 = state_37498__$1;(statearr_37506_37520[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37499 === (3)))
{var inst_37496 = (state_37498[(2)]);var state_37498__$1 = state_37498;return cljs.core.async.impl.ioc_helpers.return_chan(state_37498__$1,inst_37496);
} else
{if((state_val_37499 === (2)))
{var state_37498__$1 = state_37498;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37498__$1,(4),ch);
} else
{if((state_val_37499 === (1)))
{var inst_37484 = init;var state_37498__$1 = (function (){var statearr_37507 = state_37498;(statearr_37507[(8)] = inst_37484);
return statearr_37507;
})();var statearr_37508_37521 = state_37498__$1;(statearr_37508_37521[(2)] = null);
(statearr_37508_37521[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37512 = [null,null,null,null,null,null,null,null,null];(statearr_37512[(0)] = state_machine__5679__auto__);
(statearr_37512[(1)] = (1));
return statearr_37512;
});
var state_machine__5679__auto____1 = (function (state_37498){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37498);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37513){if((e37513 instanceof Object))
{var ex__5682__auto__ = e37513;var statearr_37514_37522 = state_37498;(statearr_37514_37522[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37498);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e37513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__37523 = state_37498;
state_37498 = G__37523;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37498){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37515 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37585){var state_val_37586 = (state_37585[(1)]);if((state_val_37586 === (7)))
{var inst_37566 = (state_37585[(7)]);var inst_37571 = (state_37585[(2)]);var inst_37572 = cljs.core.next(inst_37566);var inst_37566__$1 = inst_37572;var state_37585__$1 = (function (){var statearr_37587 = state_37585;(statearr_37587[(7)] = inst_37566__$1);
(statearr_37587[(8)] = inst_37571);
return statearr_37587;
})();var statearr_37588_37606 = state_37585__$1;(statearr_37588_37606[(2)] = null);
(statearr_37588_37606[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37586 === (1)))
{var inst_37565 = cljs.core.seq(coll);var inst_37566 = inst_37565;var state_37585__$1 = (function (){var statearr_37589 = state_37585;(statearr_37589[(7)] = inst_37566);
return statearr_37589;
})();var statearr_37590_37607 = state_37585__$1;(statearr_37590_37607[(2)] = null);
(statearr_37590_37607[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37586 === (4)))
{var inst_37566 = (state_37585[(7)]);var inst_37569 = cljs.core.first(inst_37566);var state_37585__$1 = state_37585;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37585__$1,(7),ch,inst_37569);
} else
{if((state_val_37586 === (6)))
{var inst_37581 = (state_37585[(2)]);var state_37585__$1 = state_37585;var statearr_37591_37608 = state_37585__$1;(statearr_37591_37608[(2)] = inst_37581);
(statearr_37591_37608[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37586 === (3)))
{var inst_37583 = (state_37585[(2)]);var state_37585__$1 = state_37585;return cljs.core.async.impl.ioc_helpers.return_chan(state_37585__$1,inst_37583);
} else
{if((state_val_37586 === (2)))
{var inst_37566 = (state_37585[(7)]);var state_37585__$1 = state_37585;if(cljs.core.truth_(inst_37566))
{var statearr_37592_37609 = state_37585__$1;(statearr_37592_37609[(1)] = (4));
} else
{var statearr_37593_37610 = state_37585__$1;(statearr_37593_37610[(1)] = (5));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37586 === (9)))
{var state_37585__$1 = state_37585;var statearr_37594_37611 = state_37585__$1;(statearr_37594_37611[(2)] = null);
(statearr_37594_37611[(1)] = (10));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37586 === (5)))
{var state_37585__$1 = state_37585;if(cljs.core.truth_(close_QMARK_))
{var statearr_37595_37612 = state_37585__$1;(statearr_37595_37612[(1)] = (8));
} else
{var statearr_37596_37613 = state_37585__$1;(statearr_37596_37613[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37586 === (10)))
{var inst_37579 = (state_37585[(2)]);var state_37585__$1 = state_37585;var statearr_37597_37614 = state_37585__$1;(statearr_37597_37614[(2)] = inst_37579);
(statearr_37597_37614[(1)] = (6));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37586 === (8)))
{var inst_37576 = cljs.core.async.close_BANG_(ch);var state_37585__$1 = state_37585;var statearr_37598_37615 = state_37585__$1;(statearr_37598_37615[(2)] = inst_37576);
(statearr_37598_37615[(1)] = (10));
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37602 = [null,null,null,null,null,null,null,null,null];(statearr_37602[(0)] = state_machine__5679__auto__);
(statearr_37602[(1)] = (1));
return statearr_37602;
});
var state_machine__5679__auto____1 = (function (state_37585){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37585);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37603){if((e37603 instanceof Object))
{var ex__5682__auto__ = e37603;var statearr_37604_37616 = state_37585;(statearr_37604_37616[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37585);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e37603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__37617 = state_37585;
state_37585 = G__37617;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37585){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37605 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.Mux = (function (){var obj37619 = {};return obj37619;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj37621 = {};return obj37621;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t37845 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37845 = (function (cs,ch,mult,meta37846){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37846 = meta37846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37845.cljs$lang$type = true;
cljs.core.async.t37845.cljs$lang$ctorStr = "cljs.core.async/t37845";
cljs.core.async.t37845.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t37845");
});})(cs))
;
cljs.core.async.t37845.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t37845.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t37845.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t37845.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t37845.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t37845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37847){var self__ = this;
var _37847__$1 = this;return self__.meta37846;
});})(cs))
;
cljs.core.async.t37845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37847,meta37846__$1){var self__ = this;
var _37847__$1 = this;return (new cljs.core.async.t37845(self__.cs,self__.ch,self__.mult,meta37846__$1));
});})(cs))
;
cljs.core.async.__GT_t37845 = ((function (cs){
return (function __GT_t37845(cs__$1,ch__$1,mult__$1,meta37846){return (new cljs.core.async.t37845(cs__$1,ch__$1,mult__$1,meta37846));
});})(cs))
;
}
return (new cljs.core.async.t37845(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___38068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38068,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38068,cs,m,dchan,dctr,done){
return (function (state_37982){var state_val_37983 = (state_37982[(1)]);if((state_val_37983 === (7)))
{var inst_37978 = (state_37982[(2)]);var state_37982__$1 = state_37982;var statearr_37984_38069 = state_37982__$1;(statearr_37984_38069[(2)] = inst_37978);
(statearr_37984_38069[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (20)))
{var inst_37879 = (state_37982[(7)]);var inst_37889 = cljs.core.first(inst_37879);var inst_37890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37889,(0),null);var inst_37891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37889,(1),null);var state_37982__$1 = (function (){var statearr_37985 = state_37982;(statearr_37985[(8)] = inst_37890);
return statearr_37985;
})();if(cljs.core.truth_(inst_37891))
{var statearr_37986_38070 = state_37982__$1;(statearr_37986_38070[(1)] = (22));
} else
{var statearr_37987_38071 = state_37982__$1;(statearr_37987_38071[(1)] = (23));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (27)))
{var inst_37919 = (state_37982[(9)]);var inst_37921 = (state_37982[(10)]);var inst_37926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37919,inst_37921);var state_37982__$1 = (function (){var statearr_37988 = state_37982;(statearr_37988[(11)] = inst_37926);
return statearr_37988;
})();var statearr_37989_38072 = state_37982__$1;(statearr_37989_38072[(2)] = null);
(statearr_37989_38072[(1)] = (32));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (1)))
{var state_37982__$1 = state_37982;var statearr_37990_38073 = state_37982__$1;(statearr_37990_38073[(2)] = null);
(statearr_37990_38073[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (24)))
{var inst_37879 = (state_37982[(7)]);var inst_37896 = (state_37982[(2)]);var inst_37897 = cljs.core.next(inst_37879);var inst_37859 = inst_37897;var inst_37860 = null;var inst_37861 = (0);var inst_37862 = (0);var state_37982__$1 = (function (){var statearr_37991 = state_37982;(statearr_37991[(12)] = inst_37859);
(statearr_37991[(13)] = inst_37861);
(statearr_37991[(14)] = inst_37896);
(statearr_37991[(15)] = inst_37860);
(statearr_37991[(16)] = inst_37862);
return statearr_37991;
})();var statearr_37992_38074 = state_37982__$1;(statearr_37992_38074[(2)] = null);
(statearr_37992_38074[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (39)))
{var inst_37939 = (state_37982[(17)]);var inst_37957 = (state_37982[(2)]);var inst_37958 = cljs.core.next(inst_37939);var inst_37918 = inst_37958;var inst_37919 = null;var inst_37920 = (0);var inst_37921 = (0);var state_37982__$1 = (function (){var statearr_37996 = state_37982;(statearr_37996[(9)] = inst_37919);
(statearr_37996[(18)] = inst_37920);
(statearr_37996[(19)] = inst_37918);
(statearr_37996[(20)] = inst_37957);
(statearr_37996[(10)] = inst_37921);
return statearr_37996;
})();var statearr_37997_38075 = state_37982__$1;(statearr_37997_38075[(2)] = null);
(statearr_37997_38075[(1)] = (25));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (4)))
{var inst_37850 = (state_37982[(21)]);var inst_37850__$1 = (state_37982[(2)]);var inst_37851 = (inst_37850__$1 == null);var state_37982__$1 = (function (){var statearr_37998 = state_37982;(statearr_37998[(21)] = inst_37850__$1);
return statearr_37998;
})();if(cljs.core.truth_(inst_37851))
{var statearr_37999_38076 = state_37982__$1;(statearr_37999_38076[(1)] = (5));
} else
{var statearr_38000_38077 = state_37982__$1;(statearr_38000_38077[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (15)))
{var inst_37859 = (state_37982[(12)]);var inst_37861 = (state_37982[(13)]);var inst_37860 = (state_37982[(15)]);var inst_37862 = (state_37982[(16)]);var inst_37875 = (state_37982[(2)]);var inst_37876 = (inst_37862 + (1));var tmp37993 = inst_37859;var tmp37994 = inst_37861;var tmp37995 = inst_37860;var inst_37859__$1 = tmp37993;var inst_37860__$1 = tmp37995;var inst_37861__$1 = tmp37994;var inst_37862__$1 = inst_37876;var state_37982__$1 = (function (){var statearr_38001 = state_37982;(statearr_38001[(12)] = inst_37859__$1);
(statearr_38001[(13)] = inst_37861__$1);
(statearr_38001[(15)] = inst_37860__$1);
(statearr_38001[(22)] = inst_37875);
(statearr_38001[(16)] = inst_37862__$1);
return statearr_38001;
})();var statearr_38002_38078 = state_37982__$1;(statearr_38002_38078[(2)] = null);
(statearr_38002_38078[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (21)))
{var inst_37900 = (state_37982[(2)]);var state_37982__$1 = state_37982;var statearr_38003_38079 = state_37982__$1;(statearr_38003_38079[(2)] = inst_37900);
(statearr_38003_38079[(1)] = (18));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (31)))
{var inst_37926 = (state_37982[(11)]);var inst_37927 = (state_37982[(2)]);var inst_37928 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37929 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37926);var state_37982__$1 = (function (){var statearr_38004 = state_37982;(statearr_38004[(23)] = inst_37927);
(statearr_38004[(24)] = inst_37928);
return statearr_38004;
})();var statearr_38005_38080 = state_37982__$1;(statearr_38005_38080[(2)] = inst_37929);
cljs.core.async.impl.ioc_helpers.process_exception(state_37982__$1);
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (32)))
{var inst_37850 = (state_37982[(21)]);var inst_37926 = (state_37982[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37982,(31),Object,null,(30));var inst_37933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37926,inst_37850,done);var state_37982__$1 = state_37982;var statearr_38006_38081 = state_37982__$1;(statearr_38006_38081[(2)] = inst_37933);
cljs.core.async.impl.ioc_helpers.process_exception(state_37982__$1);
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (40)))
{var inst_37948 = (state_37982[(25)]);var inst_37949 = (state_37982[(2)]);var inst_37950 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37948);var state_37982__$1 = (function (){var statearr_38007 = state_37982;(statearr_38007[(26)] = inst_37949);
(statearr_38007[(27)] = inst_37950);
return statearr_38007;
})();var statearr_38008_38082 = state_37982__$1;(statearr_38008_38082[(2)] = inst_37951);
cljs.core.async.impl.ioc_helpers.process_exception(state_37982__$1);
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (33)))
{var inst_37939 = (state_37982[(17)]);var inst_37941 = cljs.core.chunked_seq_QMARK_(inst_37939);var state_37982__$1 = state_37982;if(inst_37941)
{var statearr_38009_38083 = state_37982__$1;(statearr_38009_38083[(1)] = (36));
} else
{var statearr_38010_38084 = state_37982__$1;(statearr_38010_38084[(1)] = (37));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (13)))
{var inst_37869 = (state_37982[(28)]);var inst_37872 = cljs.core.async.close_BANG_(inst_37869);var state_37982__$1 = state_37982;var statearr_38011_38085 = state_37982__$1;(statearr_38011_38085[(2)] = inst_37872);
(statearr_38011_38085[(1)] = (15));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (22)))
{var inst_37890 = (state_37982[(8)]);var inst_37893 = cljs.core.async.close_BANG_(inst_37890);var state_37982__$1 = state_37982;var statearr_38012_38086 = state_37982__$1;(statearr_38012_38086[(2)] = inst_37893);
(statearr_38012_38086[(1)] = (24));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (36)))
{var inst_37939 = (state_37982[(17)]);var inst_37943 = cljs.core.chunk_first(inst_37939);var inst_37944 = cljs.core.chunk_rest(inst_37939);var inst_37945 = cljs.core.count(inst_37943);var inst_37918 = inst_37944;var inst_37919 = inst_37943;var inst_37920 = inst_37945;var inst_37921 = (0);var state_37982__$1 = (function (){var statearr_38013 = state_37982;(statearr_38013[(9)] = inst_37919);
(statearr_38013[(18)] = inst_37920);
(statearr_38013[(19)] = inst_37918);
(statearr_38013[(10)] = inst_37921);
return statearr_38013;
})();var statearr_38014_38087 = state_37982__$1;(statearr_38014_38087[(2)] = null);
(statearr_38014_38087[(1)] = (25));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (41)))
{var inst_37850 = (state_37982[(21)]);var inst_37948 = (state_37982[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37982,(40),Object,null,(39));var inst_37955 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37948,inst_37850,done);var state_37982__$1 = state_37982;var statearr_38015_38088 = state_37982__$1;(statearr_38015_38088[(2)] = inst_37955);
cljs.core.async.impl.ioc_helpers.process_exception(state_37982__$1);
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (43)))
{var state_37982__$1 = state_37982;var statearr_38016_38089 = state_37982__$1;(statearr_38016_38089[(2)] = null);
(statearr_38016_38089[(1)] = (44));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (29)))
{var inst_37966 = (state_37982[(2)]);var state_37982__$1 = state_37982;var statearr_38017_38090 = state_37982__$1;(statearr_38017_38090[(2)] = inst_37966);
(statearr_38017_38090[(1)] = (26));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (44)))
{var inst_37975 = (state_37982[(2)]);var state_37982__$1 = (function (){var statearr_38018 = state_37982;(statearr_38018[(29)] = inst_37975);
return statearr_38018;
})();var statearr_38019_38091 = state_37982__$1;(statearr_38019_38091[(2)] = null);
(statearr_38019_38091[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (6)))
{var inst_37910 = (state_37982[(30)]);var inst_37909 = cljs.core.deref(cs);var inst_37910__$1 = cljs.core.keys(inst_37909);var inst_37911 = cljs.core.count(inst_37910__$1);var inst_37912 = cljs.core.reset_BANG_(dctr,inst_37911);var inst_37917 = cljs.core.seq(inst_37910__$1);var inst_37918 = inst_37917;var inst_37919 = null;var inst_37920 = (0);var inst_37921 = (0);var state_37982__$1 = (function (){var statearr_38020 = state_37982;(statearr_38020[(31)] = inst_37912);
(statearr_38020[(30)] = inst_37910__$1);
(statearr_38020[(9)] = inst_37919);
(statearr_38020[(18)] = inst_37920);
(statearr_38020[(19)] = inst_37918);
(statearr_38020[(10)] = inst_37921);
return statearr_38020;
})();var statearr_38021_38092 = state_37982__$1;(statearr_38021_38092[(2)] = null);
(statearr_38021_38092[(1)] = (25));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (28)))
{var inst_37939 = (state_37982[(17)]);var inst_37918 = (state_37982[(19)]);var inst_37939__$1 = cljs.core.seq(inst_37918);var state_37982__$1 = (function (){var statearr_38022 = state_37982;(statearr_38022[(17)] = inst_37939__$1);
return statearr_38022;
})();if(inst_37939__$1)
{var statearr_38023_38093 = state_37982__$1;(statearr_38023_38093[(1)] = (33));
} else
{var statearr_38024_38094 = state_37982__$1;(statearr_38024_38094[(1)] = (34));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (25)))
{var inst_37920 = (state_37982[(18)]);var inst_37921 = (state_37982[(10)]);var inst_37923 = (inst_37921 < inst_37920);var inst_37924 = inst_37923;var state_37982__$1 = state_37982;if(cljs.core.truth_(inst_37924))
{var statearr_38025_38095 = state_37982__$1;(statearr_38025_38095[(1)] = (27));
} else
{var statearr_38026_38096 = state_37982__$1;(statearr_38026_38096[(1)] = (28));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (34)))
{var state_37982__$1 = state_37982;var statearr_38027_38097 = state_37982__$1;(statearr_38027_38097[(2)] = null);
(statearr_38027_38097[(1)] = (35));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (17)))
{var state_37982__$1 = state_37982;var statearr_38028_38098 = state_37982__$1;(statearr_38028_38098[(2)] = null);
(statearr_38028_38098[(1)] = (18));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (3)))
{var inst_37980 = (state_37982[(2)]);var state_37982__$1 = state_37982;return cljs.core.async.impl.ioc_helpers.return_chan(state_37982__$1,inst_37980);
} else
{if((state_val_37983 === (12)))
{var inst_37905 = (state_37982[(2)]);var state_37982__$1 = state_37982;var statearr_38029_38099 = state_37982__$1;(statearr_38029_38099[(2)] = inst_37905);
(statearr_38029_38099[(1)] = (9));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (2)))
{var state_37982__$1 = state_37982;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37982__$1,(4),ch);
} else
{if((state_val_37983 === (23)))
{var state_37982__$1 = state_37982;var statearr_38030_38100 = state_37982__$1;(statearr_38030_38100[(2)] = null);
(statearr_38030_38100[(1)] = (24));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (35)))
{var inst_37964 = (state_37982[(2)]);var state_37982__$1 = state_37982;var statearr_38031_38101 = state_37982__$1;(statearr_38031_38101[(2)] = inst_37964);
(statearr_38031_38101[(1)] = (29));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (19)))
{var inst_37879 = (state_37982[(7)]);var inst_37883 = cljs.core.chunk_first(inst_37879);var inst_37884 = cljs.core.chunk_rest(inst_37879);var inst_37885 = cljs.core.count(inst_37883);var inst_37859 = inst_37884;var inst_37860 = inst_37883;var inst_37861 = inst_37885;var inst_37862 = (0);var state_37982__$1 = (function (){var statearr_38032 = state_37982;(statearr_38032[(12)] = inst_37859);
(statearr_38032[(13)] = inst_37861);
(statearr_38032[(15)] = inst_37860);
(statearr_38032[(16)] = inst_37862);
return statearr_38032;
})();var statearr_38033_38102 = state_37982__$1;(statearr_38033_38102[(2)] = null);
(statearr_38033_38102[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (11)))
{var inst_37859 = (state_37982[(12)]);var inst_37879 = (state_37982[(7)]);var inst_37879__$1 = cljs.core.seq(inst_37859);var state_37982__$1 = (function (){var statearr_38034 = state_37982;(statearr_38034[(7)] = inst_37879__$1);
return statearr_38034;
})();if(inst_37879__$1)
{var statearr_38035_38103 = state_37982__$1;(statearr_38035_38103[(1)] = (16));
} else
{var statearr_38036_38104 = state_37982__$1;(statearr_38036_38104[(1)] = (17));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (9)))
{var inst_37907 = (state_37982[(2)]);var state_37982__$1 = state_37982;var statearr_38037_38105 = state_37982__$1;(statearr_38037_38105[(2)] = inst_37907);
(statearr_38037_38105[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (5)))
{var inst_37857 = cljs.core.deref(cs);var inst_37858 = cljs.core.seq(inst_37857);var inst_37859 = inst_37858;var inst_37860 = null;var inst_37861 = (0);var inst_37862 = (0);var state_37982__$1 = (function (){var statearr_38038 = state_37982;(statearr_38038[(12)] = inst_37859);
(statearr_38038[(13)] = inst_37861);
(statearr_38038[(15)] = inst_37860);
(statearr_38038[(16)] = inst_37862);
return statearr_38038;
})();var statearr_38039_38106 = state_37982__$1;(statearr_38039_38106[(2)] = null);
(statearr_38039_38106[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (14)))
{var state_37982__$1 = state_37982;var statearr_38040_38107 = state_37982__$1;(statearr_38040_38107[(2)] = null);
(statearr_38040_38107[(1)] = (15));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (45)))
{var inst_37972 = (state_37982[(2)]);var state_37982__$1 = state_37982;var statearr_38041_38108 = state_37982__$1;(statearr_38041_38108[(2)] = inst_37972);
(statearr_38041_38108[(1)] = (44));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (26)))
{var inst_37910 = (state_37982[(30)]);var inst_37968 = (state_37982[(2)]);var inst_37969 = cljs.core.seq(inst_37910);var state_37982__$1 = (function (){var statearr_38042 = state_37982;(statearr_38042[(32)] = inst_37968);
return statearr_38042;
})();if(inst_37969)
{var statearr_38043_38109 = state_37982__$1;(statearr_38043_38109[(1)] = (42));
} else
{var statearr_38044_38110 = state_37982__$1;(statearr_38044_38110[(1)] = (43));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (16)))
{var inst_37879 = (state_37982[(7)]);var inst_37881 = cljs.core.chunked_seq_QMARK_(inst_37879);var state_37982__$1 = state_37982;if(inst_37881)
{var statearr_38048_38111 = state_37982__$1;(statearr_38048_38111[(1)] = (19));
} else
{var statearr_38049_38112 = state_37982__$1;(statearr_38049_38112[(1)] = (20));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (38)))
{var inst_37961 = (state_37982[(2)]);var state_37982__$1 = state_37982;var statearr_38050_38113 = state_37982__$1;(statearr_38050_38113[(2)] = inst_37961);
(statearr_38050_38113[(1)] = (35));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (30)))
{var inst_37919 = (state_37982[(9)]);var inst_37920 = (state_37982[(18)]);var inst_37918 = (state_37982[(19)]);var inst_37921 = (state_37982[(10)]);var inst_37935 = (state_37982[(2)]);var inst_37936 = (inst_37921 + (1));var tmp38045 = inst_37919;var tmp38046 = inst_37920;var tmp38047 = inst_37918;var inst_37918__$1 = tmp38047;var inst_37919__$1 = tmp38045;var inst_37920__$1 = tmp38046;var inst_37921__$1 = inst_37936;var state_37982__$1 = (function (){var statearr_38051 = state_37982;(statearr_38051[(33)] = inst_37935);
(statearr_38051[(9)] = inst_37919__$1);
(statearr_38051[(18)] = inst_37920__$1);
(statearr_38051[(19)] = inst_37918__$1);
(statearr_38051[(10)] = inst_37921__$1);
return statearr_38051;
})();var statearr_38052_38114 = state_37982__$1;(statearr_38052_38114[(2)] = null);
(statearr_38052_38114[(1)] = (25));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (10)))
{var inst_37860 = (state_37982[(15)]);var inst_37862 = (state_37982[(16)]);var inst_37868 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37860,inst_37862);var inst_37869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37868,(0),null);var inst_37870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37868,(1),null);var state_37982__$1 = (function (){var statearr_38053 = state_37982;(statearr_38053[(28)] = inst_37869);
return statearr_38053;
})();if(cljs.core.truth_(inst_37870))
{var statearr_38054_38115 = state_37982__$1;(statearr_38054_38115[(1)] = (13));
} else
{var statearr_38055_38116 = state_37982__$1;(statearr_38055_38116[(1)] = (14));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (18)))
{var inst_37903 = (state_37982[(2)]);var state_37982__$1 = state_37982;var statearr_38056_38117 = state_37982__$1;(statearr_38056_38117[(2)] = inst_37903);
(statearr_38056_38117[(1)] = (12));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (42)))
{var state_37982__$1 = state_37982;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37982__$1,(45),dchan);
} else
{if((state_val_37983 === (37)))
{var inst_37939 = (state_37982[(17)]);var inst_37948 = cljs.core.first(inst_37939);var state_37982__$1 = (function (){var statearr_38057 = state_37982;(statearr_38057[(25)] = inst_37948);
return statearr_38057;
})();var statearr_38058_38118 = state_37982__$1;(statearr_38058_38118[(2)] = null);
(statearr_38058_38118[(1)] = (41));
return cljs.core.constant$keyword$653;
} else
{if((state_val_37983 === (8)))
{var inst_37861 = (state_37982[(13)]);var inst_37862 = (state_37982[(16)]);var inst_37864 = (inst_37862 < inst_37861);var inst_37865 = inst_37864;var state_37982__$1 = state_37982;if(cljs.core.truth_(inst_37865))
{var statearr_38059_38119 = state_37982__$1;(statearr_38059_38119[(1)] = (10));
} else
{var statearr_38060_38120 = state_37982__$1;(statearr_38060_38120[(1)] = (11));
}
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___38068,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___38068,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38064[(0)] = state_machine__5679__auto__);
(statearr_38064[(1)] = (1));
return statearr_38064;
});
var state_machine__5679__auto____1 = (function (state_37982){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37982);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38065){if((e38065 instanceof Object))
{var ex__5682__auto__ = e38065;var statearr_38066_38121 = state_37982;(statearr_38066_38121[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37982);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e38065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__38122 = state_37982;
state_37982 = G__38122;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37982){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38068,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_38067 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38068);
return statearr_38067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38068,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj38124 = {};return obj38124;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$660,null,cljs.core.constant$keyword$661,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$662);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$661);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$662,chs);var pauses = pick(cljs.core.constant$keyword$660,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$663,solos,cljs.core.constant$keyword$664,pick(cljs.core.constant$keyword$661,chs),cljs.core.constant$keyword$665,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$660)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t38234 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38234 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38235){
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
this.meta38235 = meta38235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38234.cljs$lang$type = true;
cljs.core.async.t38234.cljs$lang$ctorStr = "cljs.core.async/t38234";
cljs.core.async.t38234.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38234");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38234.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t38234.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38234.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38234.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38234.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38234.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38234.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38236){var self__ = this;
var _38236__$1 = this;return self__.meta38235;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38236,meta38235__$1){var self__ = this;
var _38236__$1 = this;return (new cljs.core.async.t38234(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38235__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t38234 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38234(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38235){return (new cljs.core.async.t38234(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38235));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t38234(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___38343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38301){var state_val_38302 = (state_38301[(1)]);if((state_val_38302 === (7)))
{var inst_38250 = (state_38301[(7)]);var inst_38255 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38250);var state_38301__$1 = state_38301;var statearr_38303_38344 = state_38301__$1;(statearr_38303_38344[(2)] = inst_38255);
(statearr_38303_38344[(1)] = (9));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (20)))
{var inst_38265 = (state_38301[(8)]);var state_38301__$1 = state_38301;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38301__$1,(23),out,inst_38265);
} else
{if((state_val_38302 === (1)))
{var inst_38240 = (state_38301[(9)]);var inst_38240__$1 = calc_state();var inst_38241 = cljs.core.seq_QMARK_(inst_38240__$1);var state_38301__$1 = (function (){var statearr_38304 = state_38301;(statearr_38304[(9)] = inst_38240__$1);
return statearr_38304;
})();if(inst_38241)
{var statearr_38305_38345 = state_38301__$1;(statearr_38305_38345[(1)] = (2));
} else
{var statearr_38306_38346 = state_38301__$1;(statearr_38306_38346[(1)] = (3));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (4)))
{var inst_38240 = (state_38301[(9)]);var inst_38246 = (state_38301[(2)]);var inst_38247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38246,cljs.core.constant$keyword$665);var inst_38248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38246,cljs.core.constant$keyword$664);var inst_38249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38246,cljs.core.constant$keyword$663);var inst_38250 = inst_38240;var state_38301__$1 = (function (){var statearr_38307 = state_38301;(statearr_38307[(10)] = inst_38247);
(statearr_38307[(11)] = inst_38248);
(statearr_38307[(7)] = inst_38250);
(statearr_38307[(12)] = inst_38249);
return statearr_38307;
})();var statearr_38308_38347 = state_38301__$1;(statearr_38308_38347[(2)] = null);
(statearr_38308_38347[(1)] = (5));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (15)))
{var state_38301__$1 = state_38301;var statearr_38309_38348 = state_38301__$1;(statearr_38309_38348[(2)] = null);
(statearr_38309_38348[(1)] = (16));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (21)))
{var state_38301__$1 = state_38301;var statearr_38310_38349 = state_38301__$1;(statearr_38310_38349[(2)] = null);
(statearr_38310_38349[(1)] = (22));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (13)))
{var inst_38297 = (state_38301[(2)]);var state_38301__$1 = state_38301;var statearr_38311_38350 = state_38301__$1;(statearr_38311_38350[(2)] = inst_38297);
(statearr_38311_38350[(1)] = (6));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (22)))
{var inst_38258 = (state_38301[(13)]);var inst_38294 = (state_38301[(2)]);var inst_38250 = inst_38258;var state_38301__$1 = (function (){var statearr_38312 = state_38301;(statearr_38312[(14)] = inst_38294);
(statearr_38312[(7)] = inst_38250);
return statearr_38312;
})();var statearr_38313_38351 = state_38301__$1;(statearr_38313_38351[(2)] = null);
(statearr_38313_38351[(1)] = (5));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (6)))
{var inst_38299 = (state_38301[(2)]);var state_38301__$1 = state_38301;return cljs.core.async.impl.ioc_helpers.return_chan(state_38301__$1,inst_38299);
} else
{if((state_val_38302 === (17)))
{var inst_38280 = (state_38301[(15)]);var state_38301__$1 = state_38301;var statearr_38314_38352 = state_38301__$1;(statearr_38314_38352[(2)] = inst_38280);
(statearr_38314_38352[(1)] = (19));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (3)))
{var inst_38240 = (state_38301[(9)]);var state_38301__$1 = state_38301;var statearr_38315_38353 = state_38301__$1;(statearr_38315_38353[(2)] = inst_38240);
(statearr_38315_38353[(1)] = (4));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (12)))
{var inst_38280 = (state_38301[(15)]);var inst_38261 = (state_38301[(16)]);var inst_38266 = (state_38301[(17)]);var inst_38280__$1 = (inst_38261.cljs$core$IFn$_invoke$arity$1 ? inst_38261.cljs$core$IFn$_invoke$arity$1(inst_38266) : inst_38261.call(null,inst_38266));var state_38301__$1 = (function (){var statearr_38316 = state_38301;(statearr_38316[(15)] = inst_38280__$1);
return statearr_38316;
})();if(cljs.core.truth_(inst_38280__$1))
{var statearr_38317_38354 = state_38301__$1;(statearr_38317_38354[(1)] = (17));
} else
{var statearr_38318_38355 = state_38301__$1;(statearr_38318_38355[(1)] = (18));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (2)))
{var inst_38240 = (state_38301[(9)]);var inst_38243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38240);var state_38301__$1 = state_38301;var statearr_38319_38356 = state_38301__$1;(statearr_38319_38356[(2)] = inst_38243);
(statearr_38319_38356[(1)] = (4));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (23)))
{var inst_38291 = (state_38301[(2)]);var state_38301__$1 = state_38301;var statearr_38320_38357 = state_38301__$1;(statearr_38320_38357[(2)] = inst_38291);
(statearr_38320_38357[(1)] = (22));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (19)))
{var inst_38288 = (state_38301[(2)]);var state_38301__$1 = state_38301;if(cljs.core.truth_(inst_38288))
{var statearr_38321_38358 = state_38301__$1;(statearr_38321_38358[(1)] = (20));
} else
{var statearr_38322_38359 = state_38301__$1;(statearr_38322_38359[(1)] = (21));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (11)))
{var inst_38265 = (state_38301[(8)]);var inst_38271 = (inst_38265 == null);var state_38301__$1 = state_38301;if(cljs.core.truth_(inst_38271))
{var statearr_38323_38360 = state_38301__$1;(statearr_38323_38360[(1)] = (14));
} else
{var statearr_38324_38361 = state_38301__$1;(statearr_38324_38361[(1)] = (15));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (9)))
{var inst_38258 = (state_38301[(13)]);var inst_38258__$1 = (state_38301[(2)]);var inst_38259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38258__$1,cljs.core.constant$keyword$665);var inst_38260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38258__$1,cljs.core.constant$keyword$664);var inst_38261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38258__$1,cljs.core.constant$keyword$663);var state_38301__$1 = (function (){var statearr_38325 = state_38301;(statearr_38325[(18)] = inst_38260);
(statearr_38325[(13)] = inst_38258__$1);
(statearr_38325[(16)] = inst_38261);
return statearr_38325;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_38301__$1,(10),inst_38259);
} else
{if((state_val_38302 === (5)))
{var inst_38250 = (state_38301[(7)]);var inst_38253 = cljs.core.seq_QMARK_(inst_38250);var state_38301__$1 = state_38301;if(inst_38253)
{var statearr_38326_38362 = state_38301__$1;(statearr_38326_38362[(1)] = (7));
} else
{var statearr_38327_38363 = state_38301__$1;(statearr_38327_38363[(1)] = (8));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (14)))
{var inst_38266 = (state_38301[(17)]);var inst_38273 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38266);var state_38301__$1 = state_38301;var statearr_38328_38364 = state_38301__$1;(statearr_38328_38364[(2)] = inst_38273);
(statearr_38328_38364[(1)] = (16));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (16)))
{var inst_38276 = (state_38301[(2)]);var inst_38277 = calc_state();var inst_38250 = inst_38277;var state_38301__$1 = (function (){var statearr_38329 = state_38301;(statearr_38329[(19)] = inst_38276);
(statearr_38329[(7)] = inst_38250);
return statearr_38329;
})();var statearr_38330_38365 = state_38301__$1;(statearr_38330_38365[(2)] = null);
(statearr_38330_38365[(1)] = (5));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (10)))
{var inst_38265 = (state_38301[(8)]);var inst_38266 = (state_38301[(17)]);var inst_38264 = (state_38301[(2)]);var inst_38265__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38264,(0),null);var inst_38266__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38264,(1),null);var inst_38267 = (inst_38265__$1 == null);var inst_38268 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38266__$1,change);var inst_38269 = (inst_38267) || (inst_38268);var state_38301__$1 = (function (){var statearr_38331 = state_38301;(statearr_38331[(8)] = inst_38265__$1);
(statearr_38331[(17)] = inst_38266__$1);
return statearr_38331;
})();if(cljs.core.truth_(inst_38269))
{var statearr_38332_38366 = state_38301__$1;(statearr_38332_38366[(1)] = (11));
} else
{var statearr_38333_38367 = state_38301__$1;(statearr_38333_38367[(1)] = (12));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (18)))
{var inst_38260 = (state_38301[(18)]);var inst_38261 = (state_38301[(16)]);var inst_38266 = (state_38301[(17)]);var inst_38283 = cljs.core.empty_QMARK_(inst_38261);var inst_38284 = (inst_38260.cljs$core$IFn$_invoke$arity$1 ? inst_38260.cljs$core$IFn$_invoke$arity$1(inst_38266) : inst_38260.call(null,inst_38266));var inst_38285 = cljs.core.not(inst_38284);var inst_38286 = (inst_38283) && (inst_38285);var state_38301__$1 = state_38301;var statearr_38334_38368 = state_38301__$1;(statearr_38334_38368[(2)] = inst_38286);
(statearr_38334_38368[(1)] = (19));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38302 === (8)))
{var inst_38250 = (state_38301[(7)]);var state_38301__$1 = state_38301;var statearr_38335_38369 = state_38301__$1;(statearr_38335_38369[(2)] = inst_38250);
(statearr_38335_38369[(1)] = (9));
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___38343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___38343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38339[(0)] = state_machine__5679__auto__);
(statearr_38339[(1)] = (1));
return statearr_38339;
});
var state_machine__5679__auto____1 = (function (state_38301){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38301);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38340){if((e38340 instanceof Object))
{var ex__5682__auto__ = e38340;var statearr_38341_38370 = state_38301;(statearr_38341_38370[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38301);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e38340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__38371 = state_38301;
state_38301 = G__38371;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38301){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_38342 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38343);
return statearr_38342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj38373 = {};return obj38373;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3543__auto__,mults){
return (function (p1__38374_SHARP_){if(cljs.core.truth_((p1__38374_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38374_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38374_SHARP_.call(null,topic))))
{return p1__38374_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38374_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38499 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38499 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38500){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38500 = meta38500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38499.cljs$lang$type = true;
cljs.core.async.t38499.cljs$lang$ctorStr = "cljs.core.async/t38499";
cljs.core.async.t38499.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38499");
});})(mults,ensure_mult))
;
cljs.core.async.t38499.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38499.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38499.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38499.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38499.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38499.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38499.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38501){var self__ = this;
var _38501__$1 = this;return self__.meta38500;
});})(mults,ensure_mult))
;
cljs.core.async.t38499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38501,meta38500__$1){var self__ = this;
var _38501__$1 = this;return (new cljs.core.async.t38499(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38500__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38499 = ((function (mults,ensure_mult){
return (function __GT_t38499(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38500){return (new cljs.core.async.t38499(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38500));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38499(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___38623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38623,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38623,mults,ensure_mult,p){
return (function (state_38575){var state_val_38576 = (state_38575[(1)]);if((state_val_38576 === (7)))
{var inst_38571 = (state_38575[(2)]);var state_38575__$1 = state_38575;var statearr_38577_38624 = state_38575__$1;(statearr_38577_38624[(2)] = inst_38571);
(statearr_38577_38624[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (20)))
{var state_38575__$1 = state_38575;var statearr_38578_38625 = state_38575__$1;(statearr_38578_38625[(2)] = null);
(statearr_38578_38625[(1)] = (21));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (1)))
{var state_38575__$1 = state_38575;var statearr_38579_38626 = state_38575__$1;(statearr_38579_38626[(2)] = null);
(statearr_38579_38626[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (24)))
{var inst_38504 = (state_38575[(7)]);var inst_38554 = (state_38575[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38575,(23),Object,null,(22));var inst_38561 = cljs.core.async.muxch_STAR_(inst_38554);var state_38575__$1 = state_38575;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38575__$1,(25),inst_38561,inst_38504);
} else
{if((state_val_38576 === (4)))
{var inst_38504 = (state_38575[(7)]);var inst_38504__$1 = (state_38575[(2)]);var inst_38505 = (inst_38504__$1 == null);var state_38575__$1 = (function (){var statearr_38580 = state_38575;(statearr_38580[(7)] = inst_38504__$1);
return statearr_38580;
})();if(cljs.core.truth_(inst_38505))
{var statearr_38581_38627 = state_38575__$1;(statearr_38581_38627[(1)] = (5));
} else
{var statearr_38582_38628 = state_38575__$1;(statearr_38582_38628[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (15)))
{var inst_38546 = (state_38575[(2)]);var state_38575__$1 = state_38575;var statearr_38583_38629 = state_38575__$1;(statearr_38583_38629[(2)] = inst_38546);
(statearr_38583_38629[(1)] = (12));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (21)))
{var inst_38568 = (state_38575[(2)]);var state_38575__$1 = (function (){var statearr_38584 = state_38575;(statearr_38584[(9)] = inst_38568);
return statearr_38584;
})();var statearr_38585_38630 = state_38575__$1;(statearr_38585_38630[(2)] = null);
(statearr_38585_38630[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (13)))
{var inst_38528 = (state_38575[(10)]);var inst_38530 = cljs.core.chunked_seq_QMARK_(inst_38528);var state_38575__$1 = state_38575;if(inst_38530)
{var statearr_38586_38631 = state_38575__$1;(statearr_38586_38631[(1)] = (16));
} else
{var statearr_38587_38632 = state_38575__$1;(statearr_38587_38632[(1)] = (17));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (22)))
{var inst_38565 = (state_38575[(2)]);var state_38575__$1 = state_38575;var statearr_38588_38633 = state_38575__$1;(statearr_38588_38633[(2)] = inst_38565);
(statearr_38588_38633[(1)] = (21));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (6)))
{var inst_38552 = (state_38575[(11)]);var inst_38504 = (state_38575[(7)]);var inst_38554 = (state_38575[(8)]);var inst_38552__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38504) : topic_fn.call(null,inst_38504));var inst_38553 = cljs.core.deref(mults);var inst_38554__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38553,inst_38552__$1);var state_38575__$1 = (function (){var statearr_38589 = state_38575;(statearr_38589[(11)] = inst_38552__$1);
(statearr_38589[(8)] = inst_38554__$1);
return statearr_38589;
})();if(cljs.core.truth_(inst_38554__$1))
{var statearr_38590_38634 = state_38575__$1;(statearr_38590_38634[(1)] = (19));
} else
{var statearr_38591_38635 = state_38575__$1;(statearr_38591_38635[(1)] = (20));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (25)))
{var inst_38563 = (state_38575[(2)]);var state_38575__$1 = state_38575;var statearr_38592_38636 = state_38575__$1;(statearr_38592_38636[(2)] = inst_38563);
cljs.core.async.impl.ioc_helpers.process_exception(state_38575__$1);
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (17)))
{var inst_38528 = (state_38575[(10)]);var inst_38537 = cljs.core.first(inst_38528);var inst_38538 = cljs.core.async.muxch_STAR_(inst_38537);var inst_38539 = cljs.core.async.close_BANG_(inst_38538);var inst_38540 = cljs.core.next(inst_38528);var inst_38514 = inst_38540;var inst_38515 = null;var inst_38516 = (0);var inst_38517 = (0);var state_38575__$1 = (function (){var statearr_38593 = state_38575;(statearr_38593[(12)] = inst_38514);
(statearr_38593[(13)] = inst_38539);
(statearr_38593[(14)] = inst_38515);
(statearr_38593[(15)] = inst_38517);
(statearr_38593[(16)] = inst_38516);
return statearr_38593;
})();var statearr_38594_38637 = state_38575__$1;(statearr_38594_38637[(2)] = null);
(statearr_38594_38637[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (3)))
{var inst_38573 = (state_38575[(2)]);var state_38575__$1 = state_38575;return cljs.core.async.impl.ioc_helpers.return_chan(state_38575__$1,inst_38573);
} else
{if((state_val_38576 === (12)))
{var inst_38548 = (state_38575[(2)]);var state_38575__$1 = state_38575;var statearr_38595_38638 = state_38575__$1;(statearr_38595_38638[(2)] = inst_38548);
(statearr_38595_38638[(1)] = (9));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (2)))
{var state_38575__$1 = state_38575;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38575__$1,(4),ch);
} else
{if((state_val_38576 === (23)))
{var inst_38552 = (state_38575[(11)]);var inst_38556 = (state_38575[(2)]);var inst_38557 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38552);var state_38575__$1 = (function (){var statearr_38596 = state_38575;(statearr_38596[(17)] = inst_38556);
return statearr_38596;
})();var statearr_38597_38639 = state_38575__$1;(statearr_38597_38639[(2)] = inst_38557);
cljs.core.async.impl.ioc_helpers.process_exception(state_38575__$1);
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (19)))
{var state_38575__$1 = state_38575;var statearr_38598_38640 = state_38575__$1;(statearr_38598_38640[(2)] = null);
(statearr_38598_38640[(1)] = (24));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (11)))
{var inst_38514 = (state_38575[(12)]);var inst_38528 = (state_38575[(10)]);var inst_38528__$1 = cljs.core.seq(inst_38514);var state_38575__$1 = (function (){var statearr_38599 = state_38575;(statearr_38599[(10)] = inst_38528__$1);
return statearr_38599;
})();if(inst_38528__$1)
{var statearr_38600_38641 = state_38575__$1;(statearr_38600_38641[(1)] = (13));
} else
{var statearr_38601_38642 = state_38575__$1;(statearr_38601_38642[(1)] = (14));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (9)))
{var inst_38550 = (state_38575[(2)]);var state_38575__$1 = state_38575;var statearr_38602_38643 = state_38575__$1;(statearr_38602_38643[(2)] = inst_38550);
(statearr_38602_38643[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (5)))
{var inst_38511 = cljs.core.deref(mults);var inst_38512 = cljs.core.vals(inst_38511);var inst_38513 = cljs.core.seq(inst_38512);var inst_38514 = inst_38513;var inst_38515 = null;var inst_38516 = (0);var inst_38517 = (0);var state_38575__$1 = (function (){var statearr_38603 = state_38575;(statearr_38603[(12)] = inst_38514);
(statearr_38603[(14)] = inst_38515);
(statearr_38603[(15)] = inst_38517);
(statearr_38603[(16)] = inst_38516);
return statearr_38603;
})();var statearr_38604_38644 = state_38575__$1;(statearr_38604_38644[(2)] = null);
(statearr_38604_38644[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (14)))
{var state_38575__$1 = state_38575;var statearr_38608_38645 = state_38575__$1;(statearr_38608_38645[(2)] = null);
(statearr_38608_38645[(1)] = (15));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (16)))
{var inst_38528 = (state_38575[(10)]);var inst_38532 = cljs.core.chunk_first(inst_38528);var inst_38533 = cljs.core.chunk_rest(inst_38528);var inst_38534 = cljs.core.count(inst_38532);var inst_38514 = inst_38533;var inst_38515 = inst_38532;var inst_38516 = inst_38534;var inst_38517 = (0);var state_38575__$1 = (function (){var statearr_38609 = state_38575;(statearr_38609[(12)] = inst_38514);
(statearr_38609[(14)] = inst_38515);
(statearr_38609[(15)] = inst_38517);
(statearr_38609[(16)] = inst_38516);
return statearr_38609;
})();var statearr_38610_38646 = state_38575__$1;(statearr_38610_38646[(2)] = null);
(statearr_38610_38646[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (10)))
{var inst_38514 = (state_38575[(12)]);var inst_38515 = (state_38575[(14)]);var inst_38517 = (state_38575[(15)]);var inst_38516 = (state_38575[(16)]);var inst_38522 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38515,inst_38517);var inst_38523 = cljs.core.async.muxch_STAR_(inst_38522);var inst_38524 = cljs.core.async.close_BANG_(inst_38523);var inst_38525 = (inst_38517 + (1));var tmp38605 = inst_38514;var tmp38606 = inst_38515;var tmp38607 = inst_38516;var inst_38514__$1 = tmp38605;var inst_38515__$1 = tmp38606;var inst_38516__$1 = tmp38607;var inst_38517__$1 = inst_38525;var state_38575__$1 = (function (){var statearr_38611 = state_38575;(statearr_38611[(12)] = inst_38514__$1);
(statearr_38611[(14)] = inst_38515__$1);
(statearr_38611[(15)] = inst_38517__$1);
(statearr_38611[(16)] = inst_38516__$1);
(statearr_38611[(18)] = inst_38524);
return statearr_38611;
})();var statearr_38612_38647 = state_38575__$1;(statearr_38612_38647[(2)] = null);
(statearr_38612_38647[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (18)))
{var inst_38543 = (state_38575[(2)]);var state_38575__$1 = state_38575;var statearr_38613_38648 = state_38575__$1;(statearr_38613_38648[(2)] = inst_38543);
(statearr_38613_38648[(1)] = (15));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38576 === (8)))
{var inst_38517 = (state_38575[(15)]);var inst_38516 = (state_38575[(16)]);var inst_38519 = (inst_38517 < inst_38516);var inst_38520 = inst_38519;var state_38575__$1 = state_38575;if(cljs.core.truth_(inst_38520))
{var statearr_38614_38649 = state_38575__$1;(statearr_38614_38649[(1)] = (10));
} else
{var statearr_38615_38650 = state_38575__$1;(statearr_38615_38650[(1)] = (11));
}
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___38623,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___38623,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38619[(0)] = state_machine__5679__auto__);
(statearr_38619[(1)] = (1));
return statearr_38619;
});
var state_machine__5679__auto____1 = (function (state_38575){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38575);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38620){if((e38620 instanceof Object))
{var ex__5682__auto__ = e38620;var statearr_38621_38651 = state_38575;(statearr_38621_38651[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38575);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e38620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__38652 = state_38575;
state_38575 = G__38652;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38575){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38623,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_38622 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38623);
return statearr_38622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38623,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5693__auto___38789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38759){var state_val_38760 = (state_38759[(1)]);if((state_val_38760 === (7)))
{var state_38759__$1 = state_38759;var statearr_38761_38790 = state_38759__$1;(statearr_38761_38790[(2)] = null);
(statearr_38761_38790[(1)] = (8));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (1)))
{var state_38759__$1 = state_38759;var statearr_38762_38791 = state_38759__$1;(statearr_38762_38791[(2)] = null);
(statearr_38762_38791[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (4)))
{var inst_38723 = (state_38759[(7)]);var inst_38725 = (inst_38723 < cnt);var state_38759__$1 = state_38759;if(cljs.core.truth_(inst_38725))
{var statearr_38763_38792 = state_38759__$1;(statearr_38763_38792[(1)] = (6));
} else
{var statearr_38764_38793 = state_38759__$1;(statearr_38764_38793[(1)] = (7));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (15)))
{var inst_38755 = (state_38759[(2)]);var state_38759__$1 = state_38759;var statearr_38765_38794 = state_38759__$1;(statearr_38765_38794[(2)] = inst_38755);
(statearr_38765_38794[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (13)))
{var inst_38748 = cljs.core.async.close_BANG_(out);var state_38759__$1 = state_38759;var statearr_38766_38795 = state_38759__$1;(statearr_38766_38795[(2)] = inst_38748);
(statearr_38766_38795[(1)] = (15));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (6)))
{var state_38759__$1 = state_38759;var statearr_38767_38796 = state_38759__$1;(statearr_38767_38796[(2)] = null);
(statearr_38767_38796[(1)] = (11));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (3)))
{var inst_38757 = (state_38759[(2)]);var state_38759__$1 = state_38759;return cljs.core.async.impl.ioc_helpers.return_chan(state_38759__$1,inst_38757);
} else
{if((state_val_38760 === (12)))
{var inst_38745 = (state_38759[(8)]);var inst_38745__$1 = (state_38759[(2)]);var inst_38746 = cljs.core.some(cljs.core.nil_QMARK_,inst_38745__$1);var state_38759__$1 = (function (){var statearr_38768 = state_38759;(statearr_38768[(8)] = inst_38745__$1);
return statearr_38768;
})();if(cljs.core.truth_(inst_38746))
{var statearr_38769_38797 = state_38759__$1;(statearr_38769_38797[(1)] = (13));
} else
{var statearr_38770_38798 = state_38759__$1;(statearr_38770_38798[(1)] = (14));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (2)))
{var inst_38722 = cljs.core.reset_BANG_(dctr,cnt);var inst_38723 = (0);var state_38759__$1 = (function (){var statearr_38771 = state_38759;(statearr_38771[(9)] = inst_38722);
(statearr_38771[(7)] = inst_38723);
return statearr_38771;
})();var statearr_38772_38799 = state_38759__$1;(statearr_38772_38799[(2)] = null);
(statearr_38772_38799[(1)] = (4));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (11)))
{var inst_38723 = (state_38759[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38759,(10),Object,null,(9));var inst_38732 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38723) : chs__$1.call(null,inst_38723));var inst_38733 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38723) : done.call(null,inst_38723));var inst_38734 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38732,inst_38733);var state_38759__$1 = state_38759;var statearr_38773_38800 = state_38759__$1;(statearr_38773_38800[(2)] = inst_38734);
cljs.core.async.impl.ioc_helpers.process_exception(state_38759__$1);
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (9)))
{var inst_38723 = (state_38759[(7)]);var inst_38736 = (state_38759[(2)]);var inst_38737 = (inst_38723 + (1));var inst_38723__$1 = inst_38737;var state_38759__$1 = (function (){var statearr_38774 = state_38759;(statearr_38774[(7)] = inst_38723__$1);
(statearr_38774[(10)] = inst_38736);
return statearr_38774;
})();var statearr_38775_38801 = state_38759__$1;(statearr_38775_38801[(2)] = null);
(statearr_38775_38801[(1)] = (4));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (5)))
{var inst_38743 = (state_38759[(2)]);var state_38759__$1 = (function (){var statearr_38776 = state_38759;(statearr_38776[(11)] = inst_38743);
return statearr_38776;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38759__$1,(12),dchan);
} else
{if((state_val_38760 === (14)))
{var inst_38745 = (state_38759[(8)]);var inst_38750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38745);var state_38759__$1 = state_38759;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38759__$1,(16),out,inst_38750);
} else
{if((state_val_38760 === (16)))
{var inst_38752 = (state_38759[(2)]);var state_38759__$1 = (function (){var statearr_38777 = state_38759;(statearr_38777[(12)] = inst_38752);
return statearr_38777;
})();var statearr_38778_38802 = state_38759__$1;(statearr_38778_38802[(2)] = null);
(statearr_38778_38802[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (10)))
{var inst_38727 = (state_38759[(2)]);var inst_38728 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_38759__$1 = (function (){var statearr_38779 = state_38759;(statearr_38779[(13)] = inst_38727);
return statearr_38779;
})();var statearr_38780_38803 = state_38759__$1;(statearr_38780_38803[(2)] = inst_38728);
cljs.core.async.impl.ioc_helpers.process_exception(state_38759__$1);
return cljs.core.constant$keyword$653;
} else
{if((state_val_38760 === (8)))
{var inst_38741 = (state_38759[(2)]);var state_38759__$1 = state_38759;var statearr_38781_38804 = state_38759__$1;(statearr_38781_38804[(2)] = inst_38741);
(statearr_38781_38804[(1)] = (5));
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___38789,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___38789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38785[(0)] = state_machine__5679__auto__);
(statearr_38785[(1)] = (1));
return statearr_38785;
});
var state_machine__5679__auto____1 = (function (state_38759){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38759);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38786){if((e38786 instanceof Object))
{var ex__5682__auto__ = e38786;var statearr_38787_38805 = state_38759;(statearr_38787_38805[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38759);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e38786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__38806 = state_38759;
state_38759 = G__38806;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38759){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38789,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_38788 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38789);
return statearr_38788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38789,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___38914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38914,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38914,out){
return (function (state_38890){var state_val_38891 = (state_38890[(1)]);if((state_val_38891 === (7)))
{var inst_38870 = (state_38890[(7)]);var inst_38869 = (state_38890[(8)]);var inst_38869__$1 = (state_38890[(2)]);var inst_38870__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38869__$1,(0),null);var inst_38871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38869__$1,(1),null);var inst_38872 = (inst_38870__$1 == null);var state_38890__$1 = (function (){var statearr_38892 = state_38890;(statearr_38892[(7)] = inst_38870__$1);
(statearr_38892[(8)] = inst_38869__$1);
(statearr_38892[(9)] = inst_38871);
return statearr_38892;
})();if(cljs.core.truth_(inst_38872))
{var statearr_38893_38915 = state_38890__$1;(statearr_38893_38915[(1)] = (8));
} else
{var statearr_38894_38916 = state_38890__$1;(statearr_38894_38916[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38891 === (1)))
{var inst_38861 = cljs.core.vec(chs);var inst_38862 = inst_38861;var state_38890__$1 = (function (){var statearr_38895 = state_38890;(statearr_38895[(10)] = inst_38862);
return statearr_38895;
})();var statearr_38896_38917 = state_38890__$1;(statearr_38896_38917[(2)] = null);
(statearr_38896_38917[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38891 === (4)))
{var inst_38862 = (state_38890[(10)]);var state_38890__$1 = state_38890;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_38890__$1,(7),inst_38862);
} else
{if((state_val_38891 === (6)))
{var inst_38886 = (state_38890[(2)]);var state_38890__$1 = state_38890;var statearr_38897_38918 = state_38890__$1;(statearr_38897_38918[(2)] = inst_38886);
(statearr_38897_38918[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38891 === (3)))
{var inst_38888 = (state_38890[(2)]);var state_38890__$1 = state_38890;return cljs.core.async.impl.ioc_helpers.return_chan(state_38890__$1,inst_38888);
} else
{if((state_val_38891 === (2)))
{var inst_38862 = (state_38890[(10)]);var inst_38864 = cljs.core.count(inst_38862);var inst_38865 = (inst_38864 > (0));var state_38890__$1 = state_38890;if(cljs.core.truth_(inst_38865))
{var statearr_38899_38919 = state_38890__$1;(statearr_38899_38919[(1)] = (4));
} else
{var statearr_38900_38920 = state_38890__$1;(statearr_38900_38920[(1)] = (5));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38891 === (11)))
{var inst_38862 = (state_38890[(10)]);var inst_38879 = (state_38890[(2)]);var tmp38898 = inst_38862;var inst_38862__$1 = tmp38898;var state_38890__$1 = (function (){var statearr_38901 = state_38890;(statearr_38901[(10)] = inst_38862__$1);
(statearr_38901[(11)] = inst_38879);
return statearr_38901;
})();var statearr_38902_38921 = state_38890__$1;(statearr_38902_38921[(2)] = null);
(statearr_38902_38921[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38891 === (9)))
{var inst_38870 = (state_38890[(7)]);var state_38890__$1 = state_38890;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38890__$1,(11),out,inst_38870);
} else
{if((state_val_38891 === (5)))
{var inst_38884 = cljs.core.async.close_BANG_(out);var state_38890__$1 = state_38890;var statearr_38903_38922 = state_38890__$1;(statearr_38903_38922[(2)] = inst_38884);
(statearr_38903_38922[(1)] = (6));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38891 === (10)))
{var inst_38882 = (state_38890[(2)]);var state_38890__$1 = state_38890;var statearr_38904_38923 = state_38890__$1;(statearr_38904_38923[(2)] = inst_38882);
(statearr_38904_38923[(1)] = (6));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38891 === (8)))
{var inst_38870 = (state_38890[(7)]);var inst_38862 = (state_38890[(10)]);var inst_38869 = (state_38890[(8)]);var inst_38871 = (state_38890[(9)]);var inst_38874 = (function (){var c = inst_38871;var v = inst_38870;var vec__38867 = inst_38869;var cs = inst_38862;return ((function (c,v,vec__38867,cs,inst_38870,inst_38862,inst_38869,inst_38871,state_val_38891,c__5693__auto___38914,out){
return (function (p1__38807_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38807_SHARP_);
});
;})(c,v,vec__38867,cs,inst_38870,inst_38862,inst_38869,inst_38871,state_val_38891,c__5693__auto___38914,out))
})();var inst_38875 = cljs.core.filterv(inst_38874,inst_38862);var inst_38862__$1 = inst_38875;var state_38890__$1 = (function (){var statearr_38905 = state_38890;(statearr_38905[(10)] = inst_38862__$1);
return statearr_38905;
})();var statearr_38906_38924 = state_38890__$1;(statearr_38906_38924[(2)] = null);
(statearr_38906_38924[(1)] = (2));
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___38914,out))
;return ((function (switch__5678__auto__,c__5693__auto___38914,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38910 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38910[(0)] = state_machine__5679__auto__);
(statearr_38910[(1)] = (1));
return statearr_38910;
});
var state_machine__5679__auto____1 = (function (state_38890){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38890);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38911){if((e38911 instanceof Object))
{var ex__5682__auto__ = e38911;var statearr_38912_38925 = state_38890;(statearr_38912_38925[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38890);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e38911;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__38926 = state_38890;
state_38890 = G__38926;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38890){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38914,out))
})();var state__5695__auto__ = (function (){var statearr_38913 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38914);
return statearr_38913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38914,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39019,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39019,out){
return (function (state_38996){var state_val_38997 = (state_38996[(1)]);if((state_val_38997 === (7)))
{var inst_38978 = (state_38996[(7)]);var inst_38978__$1 = (state_38996[(2)]);var inst_38979 = (inst_38978__$1 == null);var inst_38980 = cljs.core.not(inst_38979);var state_38996__$1 = (function (){var statearr_38998 = state_38996;(statearr_38998[(7)] = inst_38978__$1);
return statearr_38998;
})();if(inst_38980)
{var statearr_38999_39020 = state_38996__$1;(statearr_38999_39020[(1)] = (8));
} else
{var statearr_39000_39021 = state_38996__$1;(statearr_39000_39021[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38997 === (1)))
{var inst_38973 = (0);var state_38996__$1 = (function (){var statearr_39001 = state_38996;(statearr_39001[(8)] = inst_38973);
return statearr_39001;
})();var statearr_39002_39022 = state_38996__$1;(statearr_39002_39022[(2)] = null);
(statearr_39002_39022[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38997 === (4)))
{var state_38996__$1 = state_38996;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38996__$1,(7),ch);
} else
{if((state_val_38997 === (6)))
{var inst_38991 = (state_38996[(2)]);var state_38996__$1 = state_38996;var statearr_39003_39023 = state_38996__$1;(statearr_39003_39023[(2)] = inst_38991);
(statearr_39003_39023[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38997 === (3)))
{var inst_38993 = (state_38996[(2)]);var inst_38994 = cljs.core.async.close_BANG_(out);var state_38996__$1 = (function (){var statearr_39004 = state_38996;(statearr_39004[(9)] = inst_38993);
return statearr_39004;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38996__$1,inst_38994);
} else
{if((state_val_38997 === (2)))
{var inst_38973 = (state_38996[(8)]);var inst_38975 = (inst_38973 < n);var state_38996__$1 = state_38996;if(cljs.core.truth_(inst_38975))
{var statearr_39005_39024 = state_38996__$1;(statearr_39005_39024[(1)] = (4));
} else
{var statearr_39006_39025 = state_38996__$1;(statearr_39006_39025[(1)] = (5));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_38997 === (11)))
{var inst_38973 = (state_38996[(8)]);var inst_38983 = (state_38996[(2)]);var inst_38984 = (inst_38973 + (1));var inst_38973__$1 = inst_38984;var state_38996__$1 = (function (){var statearr_39007 = state_38996;(statearr_39007[(8)] = inst_38973__$1);
(statearr_39007[(10)] = inst_38983);
return statearr_39007;
})();var statearr_39008_39026 = state_38996__$1;(statearr_39008_39026[(2)] = null);
(statearr_39008_39026[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38997 === (9)))
{var state_38996__$1 = state_38996;var statearr_39009_39027 = state_38996__$1;(statearr_39009_39027[(2)] = null);
(statearr_39009_39027[(1)] = (10));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38997 === (5)))
{var state_38996__$1 = state_38996;var statearr_39010_39028 = state_38996__$1;(statearr_39010_39028[(2)] = null);
(statearr_39010_39028[(1)] = (6));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38997 === (10)))
{var inst_38988 = (state_38996[(2)]);var state_38996__$1 = state_38996;var statearr_39011_39029 = state_38996__$1;(statearr_39011_39029[(2)] = inst_38988);
(statearr_39011_39029[(1)] = (6));
return cljs.core.constant$keyword$653;
} else
{if((state_val_38997 === (8)))
{var inst_38978 = (state_38996[(7)]);var state_38996__$1 = state_38996;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38996__$1,(11),out,inst_38978);
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
});})(c__5693__auto___39019,out))
;return ((function (switch__5678__auto__,c__5693__auto___39019,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39015 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39015[(0)] = state_machine__5679__auto__);
(statearr_39015[(1)] = (1));
return statearr_39015;
});
var state_machine__5679__auto____1 = (function (state_38996){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38996);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39016){if((e39016 instanceof Object))
{var ex__5682__auto__ = e39016;var statearr_39017_39030 = state_38996;(statearr_39017_39030[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38996);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e39016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__39031 = state_38996;
state_38996 = G__39031;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38996){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39019,out))
})();var state__5695__auto__ = (function (){var statearr_39018 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39019);
return statearr_39018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39019,out))
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
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39128,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39128,out){
return (function (state_39103){var state_val_39104 = (state_39103[(1)]);if((state_val_39104 === (7)))
{var inst_39098 = (state_39103[(2)]);var state_39103__$1 = state_39103;var statearr_39105_39129 = state_39103__$1;(statearr_39105_39129[(2)] = inst_39098);
(statearr_39105_39129[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39104 === (1)))
{var inst_39080 = null;var state_39103__$1 = (function (){var statearr_39106 = state_39103;(statearr_39106[(7)] = inst_39080);
return statearr_39106;
})();var statearr_39107_39130 = state_39103__$1;(statearr_39107_39130[(2)] = null);
(statearr_39107_39130[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39104 === (4)))
{var inst_39083 = (state_39103[(8)]);var inst_39083__$1 = (state_39103[(2)]);var inst_39084 = (inst_39083__$1 == null);var inst_39085 = cljs.core.not(inst_39084);var state_39103__$1 = (function (){var statearr_39108 = state_39103;(statearr_39108[(8)] = inst_39083__$1);
return statearr_39108;
})();if(inst_39085)
{var statearr_39109_39131 = state_39103__$1;(statearr_39109_39131[(1)] = (5));
} else
{var statearr_39110_39132 = state_39103__$1;(statearr_39110_39132[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_39104 === (6)))
{var state_39103__$1 = state_39103;var statearr_39111_39133 = state_39103__$1;(statearr_39111_39133[(2)] = null);
(statearr_39111_39133[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39104 === (3)))
{var inst_39100 = (state_39103[(2)]);var inst_39101 = cljs.core.async.close_BANG_(out);var state_39103__$1 = (function (){var statearr_39112 = state_39103;(statearr_39112[(9)] = inst_39100);
return statearr_39112;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39103__$1,inst_39101);
} else
{if((state_val_39104 === (2)))
{var state_39103__$1 = state_39103;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39103__$1,(4),ch);
} else
{if((state_val_39104 === (11)))
{var inst_39083 = (state_39103[(8)]);var inst_39092 = (state_39103[(2)]);var inst_39080 = inst_39083;var state_39103__$1 = (function (){var statearr_39113 = state_39103;(statearr_39113[(10)] = inst_39092);
(statearr_39113[(7)] = inst_39080);
return statearr_39113;
})();var statearr_39114_39134 = state_39103__$1;(statearr_39114_39134[(2)] = null);
(statearr_39114_39134[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39104 === (9)))
{var inst_39083 = (state_39103[(8)]);var state_39103__$1 = state_39103;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39103__$1,(11),out,inst_39083);
} else
{if((state_val_39104 === (5)))
{var inst_39080 = (state_39103[(7)]);var inst_39083 = (state_39103[(8)]);var inst_39087 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39083,inst_39080);var state_39103__$1 = state_39103;if(inst_39087)
{var statearr_39116_39135 = state_39103__$1;(statearr_39116_39135[(1)] = (8));
} else
{var statearr_39117_39136 = state_39103__$1;(statearr_39117_39136[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_39104 === (10)))
{var inst_39095 = (state_39103[(2)]);var state_39103__$1 = state_39103;var statearr_39118_39137 = state_39103__$1;(statearr_39118_39137[(2)] = inst_39095);
(statearr_39118_39137[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39104 === (8)))
{var inst_39080 = (state_39103[(7)]);var tmp39115 = inst_39080;var inst_39080__$1 = tmp39115;var state_39103__$1 = (function (){var statearr_39119 = state_39103;(statearr_39119[(7)] = inst_39080__$1);
return statearr_39119;
})();var statearr_39120_39138 = state_39103__$1;(statearr_39120_39138[(2)] = null);
(statearr_39120_39138[(1)] = (2));
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___39128,out))
;return ((function (switch__5678__auto__,c__5693__auto___39128,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39124 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39124[(0)] = state_machine__5679__auto__);
(statearr_39124[(1)] = (1));
return statearr_39124;
});
var state_machine__5679__auto____1 = (function (state_39103){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39103);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39125){if((e39125 instanceof Object))
{var ex__5682__auto__ = e39125;var statearr_39126_39139 = state_39103;(statearr_39126_39139[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39103);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e39125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__39140 = state_39103;
state_39103 = G__39140;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39103){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39128,out))
})();var state__5695__auto__ = (function (){var statearr_39127 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39128);
return statearr_39127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39128,out))
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
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39275,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39275,out){
return (function (state_39245){var state_val_39246 = (state_39245[(1)]);if((state_val_39246 === (7)))
{var inst_39241 = (state_39245[(2)]);var state_39245__$1 = state_39245;var statearr_39247_39276 = state_39245__$1;(statearr_39247_39276[(2)] = inst_39241);
(statearr_39247_39276[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (1)))
{var inst_39208 = (new Array(n));var inst_39209 = inst_39208;var inst_39210 = (0);var state_39245__$1 = (function (){var statearr_39248 = state_39245;(statearr_39248[(7)] = inst_39209);
(statearr_39248[(8)] = inst_39210);
return statearr_39248;
})();var statearr_39249_39277 = state_39245__$1;(statearr_39249_39277[(2)] = null);
(statearr_39249_39277[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (4)))
{var inst_39213 = (state_39245[(9)]);var inst_39213__$1 = (state_39245[(2)]);var inst_39214 = (inst_39213__$1 == null);var inst_39215 = cljs.core.not(inst_39214);var state_39245__$1 = (function (){var statearr_39250 = state_39245;(statearr_39250[(9)] = inst_39213__$1);
return statearr_39250;
})();if(inst_39215)
{var statearr_39251_39278 = state_39245__$1;(statearr_39251_39278[(1)] = (5));
} else
{var statearr_39252_39279 = state_39245__$1;(statearr_39252_39279[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (15)))
{var inst_39235 = (state_39245[(2)]);var state_39245__$1 = state_39245;var statearr_39253_39280 = state_39245__$1;(statearr_39253_39280[(2)] = inst_39235);
(statearr_39253_39280[(1)] = (14));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (13)))
{var state_39245__$1 = state_39245;var statearr_39254_39281 = state_39245__$1;(statearr_39254_39281[(2)] = null);
(statearr_39254_39281[(1)] = (14));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (6)))
{var inst_39210 = (state_39245[(8)]);var inst_39231 = (inst_39210 > (0));var state_39245__$1 = state_39245;if(cljs.core.truth_(inst_39231))
{var statearr_39255_39282 = state_39245__$1;(statearr_39255_39282[(1)] = (12));
} else
{var statearr_39256_39283 = state_39245__$1;(statearr_39256_39283[(1)] = (13));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (3)))
{var inst_39243 = (state_39245[(2)]);var state_39245__$1 = state_39245;return cljs.core.async.impl.ioc_helpers.return_chan(state_39245__$1,inst_39243);
} else
{if((state_val_39246 === (12)))
{var inst_39209 = (state_39245[(7)]);var inst_39233 = cljs.core.vec(inst_39209);var state_39245__$1 = state_39245;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39245__$1,(15),out,inst_39233);
} else
{if((state_val_39246 === (2)))
{var state_39245__$1 = state_39245;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39245__$1,(4),ch);
} else
{if((state_val_39246 === (11)))
{var inst_39225 = (state_39245[(2)]);var inst_39226 = (new Array(n));var inst_39209 = inst_39226;var inst_39210 = (0);var state_39245__$1 = (function (){var statearr_39257 = state_39245;(statearr_39257[(10)] = inst_39225);
(statearr_39257[(7)] = inst_39209);
(statearr_39257[(8)] = inst_39210);
return statearr_39257;
})();var statearr_39258_39284 = state_39245__$1;(statearr_39258_39284[(2)] = null);
(statearr_39258_39284[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (9)))
{var inst_39209 = (state_39245[(7)]);var inst_39223 = cljs.core.vec(inst_39209);var state_39245__$1 = state_39245;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39245__$1,(11),out,inst_39223);
} else
{if((state_val_39246 === (5)))
{var inst_39209 = (state_39245[(7)]);var inst_39213 = (state_39245[(9)]);var inst_39210 = (state_39245[(8)]);var inst_39218 = (state_39245[(11)]);var inst_39217 = (inst_39209[inst_39210] = inst_39213);var inst_39218__$1 = (inst_39210 + (1));var inst_39219 = (inst_39218__$1 < n);var state_39245__$1 = (function (){var statearr_39259 = state_39245;(statearr_39259[(12)] = inst_39217);
(statearr_39259[(11)] = inst_39218__$1);
return statearr_39259;
})();if(cljs.core.truth_(inst_39219))
{var statearr_39260_39285 = state_39245__$1;(statearr_39260_39285[(1)] = (8));
} else
{var statearr_39261_39286 = state_39245__$1;(statearr_39261_39286[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (14)))
{var inst_39238 = (state_39245[(2)]);var inst_39239 = cljs.core.async.close_BANG_(out);var state_39245__$1 = (function (){var statearr_39263 = state_39245;(statearr_39263[(13)] = inst_39238);
return statearr_39263;
})();var statearr_39264_39287 = state_39245__$1;(statearr_39264_39287[(2)] = inst_39239);
(statearr_39264_39287[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (10)))
{var inst_39229 = (state_39245[(2)]);var state_39245__$1 = state_39245;var statearr_39265_39288 = state_39245__$1;(statearr_39265_39288[(2)] = inst_39229);
(statearr_39265_39288[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39246 === (8)))
{var inst_39209 = (state_39245[(7)]);var inst_39218 = (state_39245[(11)]);var tmp39262 = inst_39209;var inst_39209__$1 = tmp39262;var inst_39210 = inst_39218;var state_39245__$1 = (function (){var statearr_39266 = state_39245;(statearr_39266[(7)] = inst_39209__$1);
(statearr_39266[(8)] = inst_39210);
return statearr_39266;
})();var statearr_39267_39289 = state_39245__$1;(statearr_39267_39289[(2)] = null);
(statearr_39267_39289[(1)] = (2));
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___39275,out))
;return ((function (switch__5678__auto__,c__5693__auto___39275,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39271[(0)] = state_machine__5679__auto__);
(statearr_39271[(1)] = (1));
return statearr_39271;
});
var state_machine__5679__auto____1 = (function (state_39245){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39245);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39272){if((e39272 instanceof Object))
{var ex__5682__auto__ = e39272;var statearr_39273_39290 = state_39245;(statearr_39273_39290[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39245);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e39272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__39291 = state_39245;
state_39245 = G__39291;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39245){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39275,out))
})();var state__5695__auto__ = (function (){var statearr_39274 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39275);
return statearr_39274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39275,out))
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
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39434,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39434,out){
return (function (state_39404){var state_val_39405 = (state_39404[(1)]);if((state_val_39405 === (7)))
{var inst_39400 = (state_39404[(2)]);var state_39404__$1 = state_39404;var statearr_39406_39435 = state_39404__$1;(statearr_39406_39435[(2)] = inst_39400);
(statearr_39406_39435[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (1)))
{var inst_39363 = [];var inst_39364 = inst_39363;var inst_39365 = cljs.core.constant$keyword$666;var state_39404__$1 = (function (){var statearr_39407 = state_39404;(statearr_39407[(7)] = inst_39364);
(statearr_39407[(8)] = inst_39365);
return statearr_39407;
})();var statearr_39408_39436 = state_39404__$1;(statearr_39408_39436[(2)] = null);
(statearr_39408_39436[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (4)))
{var inst_39368 = (state_39404[(9)]);var inst_39368__$1 = (state_39404[(2)]);var inst_39369 = (inst_39368__$1 == null);var inst_39370 = cljs.core.not(inst_39369);var state_39404__$1 = (function (){var statearr_39409 = state_39404;(statearr_39409[(9)] = inst_39368__$1);
return statearr_39409;
})();if(inst_39370)
{var statearr_39410_39437 = state_39404__$1;(statearr_39410_39437[(1)] = (5));
} else
{var statearr_39411_39438 = state_39404__$1;(statearr_39411_39438[(1)] = (6));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (15)))
{var inst_39394 = (state_39404[(2)]);var state_39404__$1 = state_39404;var statearr_39412_39439 = state_39404__$1;(statearr_39412_39439[(2)] = inst_39394);
(statearr_39412_39439[(1)] = (14));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (13)))
{var state_39404__$1 = state_39404;var statearr_39413_39440 = state_39404__$1;(statearr_39413_39440[(2)] = null);
(statearr_39413_39440[(1)] = (14));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (6)))
{var inst_39364 = (state_39404[(7)]);var inst_39389 = inst_39364.length;var inst_39390 = (inst_39389 > (0));var state_39404__$1 = state_39404;if(cljs.core.truth_(inst_39390))
{var statearr_39414_39441 = state_39404__$1;(statearr_39414_39441[(1)] = (12));
} else
{var statearr_39415_39442 = state_39404__$1;(statearr_39415_39442[(1)] = (13));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (3)))
{var inst_39402 = (state_39404[(2)]);var state_39404__$1 = state_39404;return cljs.core.async.impl.ioc_helpers.return_chan(state_39404__$1,inst_39402);
} else
{if((state_val_39405 === (12)))
{var inst_39364 = (state_39404[(7)]);var inst_39392 = cljs.core.vec(inst_39364);var state_39404__$1 = state_39404;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39404__$1,(15),out,inst_39392);
} else
{if((state_val_39405 === (2)))
{var state_39404__$1 = state_39404;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39404__$1,(4),ch);
} else
{if((state_val_39405 === (11)))
{var inst_39372 = (state_39404[(10)]);var inst_39368 = (state_39404[(9)]);var inst_39382 = (state_39404[(2)]);var inst_39383 = [];var inst_39384 = inst_39383.push(inst_39368);var inst_39364 = inst_39383;var inst_39365 = inst_39372;var state_39404__$1 = (function (){var statearr_39416 = state_39404;(statearr_39416[(7)] = inst_39364);
(statearr_39416[(11)] = inst_39382);
(statearr_39416[(8)] = inst_39365);
(statearr_39416[(12)] = inst_39384);
return statearr_39416;
})();var statearr_39417_39443 = state_39404__$1;(statearr_39417_39443[(2)] = null);
(statearr_39417_39443[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (9)))
{var inst_39364 = (state_39404[(7)]);var inst_39380 = cljs.core.vec(inst_39364);var state_39404__$1 = state_39404;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39404__$1,(11),out,inst_39380);
} else
{if((state_val_39405 === (5)))
{var inst_39372 = (state_39404[(10)]);var inst_39368 = (state_39404[(9)]);var inst_39365 = (state_39404[(8)]);var inst_39372__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39368) : f.call(null,inst_39368));var inst_39373 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39372__$1,inst_39365);var inst_39374 = cljs.core.keyword_identical_QMARK_(inst_39365,cljs.core.constant$keyword$666);var inst_39375 = (inst_39373) || (inst_39374);var state_39404__$1 = (function (){var statearr_39418 = state_39404;(statearr_39418[(10)] = inst_39372__$1);
return statearr_39418;
})();if(cljs.core.truth_(inst_39375))
{var statearr_39419_39444 = state_39404__$1;(statearr_39419_39444[(1)] = (8));
} else
{var statearr_39420_39445 = state_39404__$1;(statearr_39420_39445[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (14)))
{var inst_39397 = (state_39404[(2)]);var inst_39398 = cljs.core.async.close_BANG_(out);var state_39404__$1 = (function (){var statearr_39422 = state_39404;(statearr_39422[(13)] = inst_39397);
return statearr_39422;
})();var statearr_39423_39446 = state_39404__$1;(statearr_39423_39446[(2)] = inst_39398);
(statearr_39423_39446[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (10)))
{var inst_39387 = (state_39404[(2)]);var state_39404__$1 = state_39404;var statearr_39424_39447 = state_39404__$1;(statearr_39424_39447[(2)] = inst_39387);
(statearr_39424_39447[(1)] = (7));
return cljs.core.constant$keyword$653;
} else
{if((state_val_39405 === (8)))
{var inst_39372 = (state_39404[(10)]);var inst_39364 = (state_39404[(7)]);var inst_39368 = (state_39404[(9)]);var inst_39377 = inst_39364.push(inst_39368);var tmp39421 = inst_39364;var inst_39364__$1 = tmp39421;var inst_39365 = inst_39372;var state_39404__$1 = (function (){var statearr_39425 = state_39404;(statearr_39425[(7)] = inst_39364__$1);
(statearr_39425[(14)] = inst_39377);
(statearr_39425[(8)] = inst_39365);
return statearr_39425;
})();var statearr_39426_39448 = state_39404__$1;(statearr_39426_39448[(2)] = null);
(statearr_39426_39448[(1)] = (2));
return cljs.core.constant$keyword$653;
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
});})(c__5693__auto___39434,out))
;return ((function (switch__5678__auto__,c__5693__auto___39434,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39430[(0)] = state_machine__5679__auto__);
(statearr_39430[(1)] = (1));
return statearr_39430;
});
var state_machine__5679__auto____1 = (function (state_39404){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39404);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39431){if((e39431 instanceof Object))
{var ex__5682__auto__ = e39431;var statearr_39432_39449 = state_39404;(statearr_39432_39449[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39404);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e39431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__39450 = state_39404;
state_39404 = G__39450;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39404){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39434,out))
})();var state__5695__auto__ = (function (){var statearr_39433 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39434);
return statearr_39433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39434,out))
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
