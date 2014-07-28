// Compiled by ClojureScript 0.0-2268
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t40986 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40986 = (function (f,fn_handler,meta40987){
this.f = f;
this.fn_handler = fn_handler;
this.meta40987 = meta40987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40986.cljs$lang$type = true;
cljs.core.async.t40986.cljs$lang$ctorStr = "cljs.core.async/t40986";
cljs.core.async.t40986.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40986");
});
cljs.core.async.t40986.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t40986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t40986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40988){var self__ = this;
var _40988__$1 = this;return self__.meta40987;
});
cljs.core.async.t40986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40988,meta40987__$1){var self__ = this;
var _40988__$1 = this;return (new cljs.core.async.t40986(self__.f,self__.fn_handler,meta40987__$1));
});
cljs.core.async.__GT_t40986 = (function __GT_t40986(f__$1,fn_handler__$1,meta40987){return (new cljs.core.async.t40986(f__$1,fn_handler__$1,meta40987));
});
}
return (new cljs.core.async.t40986(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__40990 = buff;if(G__40990)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__40990.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__40990.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40990);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40990);
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
{var val_40991 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40991) : fn1.call(null,val_40991));
} else
{cljs.core.async.impl.dispatch.run(((function (val_40991,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40991) : fn1.call(null,val_40991));
});})(val_40991,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___40992 = n;var x_40993 = (0);while(true){
if((x_40993 < n__4399__auto___40992))
{(a[x_40993] = (0));
{
var G__40994 = (x_40993 + (1));
x_40993 = G__40994;
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
var G__40995 = (i + (1));
i = G__40995;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t40999 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40999 = (function (flag,alt_flag,meta41000){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta41000 = meta41000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40999.cljs$lang$type = true;
cljs.core.async.t40999.cljs$lang$ctorStr = "cljs.core.async/t40999";
cljs.core.async.t40999.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40999");
});})(flag))
;
cljs.core.async.t40999.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t40999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t40999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41001){var self__ = this;
var _41001__$1 = this;return self__.meta41000;
});})(flag))
;
cljs.core.async.t40999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41001,meta41000__$1){var self__ = this;
var _41001__$1 = this;return (new cljs.core.async.t40999(self__.flag,self__.alt_flag,meta41000__$1));
});})(flag))
;
cljs.core.async.__GT_t40999 = ((function (flag){
return (function __GT_t40999(flag__$1,alt_flag__$1,meta41000){return (new cljs.core.async.t40999(flag__$1,alt_flag__$1,meta41000));
});})(flag))
;
}
return (new cljs.core.async.t40999(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t41005 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41005 = (function (cb,flag,alt_handler,meta41006){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta41006 = meta41006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41005.cljs$lang$type = true;
cljs.core.async.t41005.cljs$lang$ctorStr = "cljs.core.async/t41005";
cljs.core.async.t41005.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41005");
});
cljs.core.async.t41005.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t41005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t41005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41007){var self__ = this;
var _41007__$1 = this;return self__.meta41006;
});
cljs.core.async.t41005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41007,meta41006__$1){var self__ = this;
var _41007__$1 = this;return (new cljs.core.async.t41005(self__.cb,self__.flag,self__.alt_handler,meta41006__$1));
});
cljs.core.async.__GT_t41005 = (function __GT_t41005(cb__$1,flag__$1,alt_handler__$1,meta41006){return (new cljs.core.async.t41005(cb__$1,flag__$1,alt_handler__$1,meta41006));
});
}
return (new cljs.core.async.t41005(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$779.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41008_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41008_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41008_SHARP_,port], null)));
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
var G__41009 = (i + (1));
i = G__41009;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$765))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$765.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$765], null));
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
var alts_BANG___delegate = function (ports,p__41010){var map__41012 = p__41010;var map__41012__$1 = ((cljs.core.seq_QMARK_(map__41012))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41012):map__41012);var opts = map__41012__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__41010 = null;if (arguments.length > 1) {
  p__41010 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__41010);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__41013){
var ports = cljs.core.first(arglist__41013);
var p__41010 = cljs.core.rest(arglist__41013);
return alts_BANG___delegate(ports,p__41010);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t41021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41021 = (function (ch,f,map_LT_,meta41022){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41022 = meta41022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41021.cljs$lang$type = true;
cljs.core.async.t41021.cljs$lang$ctorStr = "cljs.core.async/t41021";
cljs.core.async.t41021.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41021");
});
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t41024 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41024 = (function (fn1,_,meta41022,ch,f,map_LT_,meta41025){
this.fn1 = fn1;
this._ = _;
this.meta41022 = meta41022;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41025 = meta41025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41024.cljs$lang$type = true;
cljs.core.async.t41024.cljs$lang$ctorStr = "cljs.core.async/t41024";
cljs.core.async.t41024.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41024");
});})(___$1))
;
cljs.core.async.t41024.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t41024.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t41024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__41014_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__41014_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41014_SHARP_) : self__.f.call(null,p1__41014_SHARP_)))) : f1.call(null,(((p1__41014_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41014_SHARP_) : self__.f.call(null,p1__41014_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t41024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41026){var self__ = this;
var _41026__$1 = this;return self__.meta41025;
});})(___$1))
;
cljs.core.async.t41024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41026,meta41025__$1){var self__ = this;
var _41026__$1 = this;return (new cljs.core.async.t41024(self__.fn1,self__._,self__.meta41022,self__.ch,self__.f,self__.map_LT_,meta41025__$1));
});})(___$1))
;
cljs.core.async.__GT_t41024 = ((function (___$1){
return (function __GT_t41024(fn1__$1,___$2,meta41022__$1,ch__$2,f__$2,map_LT___$2,meta41025){return (new cljs.core.async.t41024(fn1__$1,___$2,meta41022__$1,ch__$2,f__$2,map_LT___$2,meta41025));
});})(___$1))
;
}
return (new cljs.core.async.t41024(fn1,___$1,self__.meta41022,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t41021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41023){var self__ = this;
var _41023__$1 = this;return self__.meta41022;
});
cljs.core.async.t41021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41023,meta41022__$1){var self__ = this;
var _41023__$1 = this;return (new cljs.core.async.t41021(self__.ch,self__.f,self__.map_LT_,meta41022__$1));
});
cljs.core.async.__GT_t41021 = (function __GT_t41021(ch__$1,f__$1,map_LT___$1,meta41022){return (new cljs.core.async.t41021(ch__$1,f__$1,map_LT___$1,meta41022));
});
}
return (new cljs.core.async.t41021(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t41030 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41030 = (function (ch,f,map_GT_,meta41031){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta41031 = meta41031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41030.cljs$lang$type = true;
cljs.core.async.t41030.cljs$lang$ctorStr = "cljs.core.async/t41030";
cljs.core.async.t41030.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41030");
});
cljs.core.async.t41030.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t41030.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t41030.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t41030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41032){var self__ = this;
var _41032__$1 = this;return self__.meta41031;
});
cljs.core.async.t41030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41032,meta41031__$1){var self__ = this;
var _41032__$1 = this;return (new cljs.core.async.t41030(self__.ch,self__.f,self__.map_GT_,meta41031__$1));
});
cljs.core.async.__GT_t41030 = (function __GT_t41030(ch__$1,f__$1,map_GT___$1,meta41031){return (new cljs.core.async.t41030(ch__$1,f__$1,map_GT___$1,meta41031));
});
}
return (new cljs.core.async.t41030(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t41036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41036 = (function (ch,p,filter_GT_,meta41037){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta41037 = meta41037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41036.cljs$lang$type = true;
cljs.core.async.t41036.cljs$lang$ctorStr = "cljs.core.async/t41036";
cljs.core.async.t41036.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41036");
});
cljs.core.async.t41036.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t41036.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t41036.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t41036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41038){var self__ = this;
var _41038__$1 = this;return self__.meta41037;
});
cljs.core.async.t41036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41038,meta41037__$1){var self__ = this;
var _41038__$1 = this;return (new cljs.core.async.t41036(self__.ch,self__.p,self__.filter_GT_,meta41037__$1));
});
cljs.core.async.__GT_t41036 = (function __GT_t41036(ch__$1,p__$1,filter_GT___$1,meta41037){return (new cljs.core.async.t41036(ch__$1,p__$1,filter_GT___$1,meta41037));
});
}
return (new cljs.core.async.t41036(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41121,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41121,out){
return (function (state_41100){var state_val_41101 = (state_41100[(1)]);if((state_val_41101 === (7)))
{var inst_41096 = (state_41100[(2)]);var state_41100__$1 = state_41100;var statearr_41102_41122 = state_41100__$1;(statearr_41102_41122[(2)] = inst_41096);
(statearr_41102_41122[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41101 === (1)))
{var state_41100__$1 = state_41100;var statearr_41103_41123 = state_41100__$1;(statearr_41103_41123[(2)] = null);
(statearr_41103_41123[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41101 === (4)))
{var inst_41082 = (state_41100[(7)]);var inst_41082__$1 = (state_41100[(2)]);var inst_41083 = (inst_41082__$1 == null);var state_41100__$1 = (function (){var statearr_41104 = state_41100;(statearr_41104[(7)] = inst_41082__$1);
return statearr_41104;
})();if(cljs.core.truth_(inst_41083))
{var statearr_41105_41124 = state_41100__$1;(statearr_41105_41124[(1)] = (5));
} else
{var statearr_41106_41125 = state_41100__$1;(statearr_41106_41125[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41101 === (6)))
{var inst_41082 = (state_41100[(7)]);var inst_41087 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41082) : p.call(null,inst_41082));var state_41100__$1 = state_41100;if(cljs.core.truth_(inst_41087))
{var statearr_41107_41126 = state_41100__$1;(statearr_41107_41126[(1)] = (8));
} else
{var statearr_41108_41127 = state_41100__$1;(statearr_41108_41127[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41101 === (3)))
{var inst_41098 = (state_41100[(2)]);var state_41100__$1 = state_41100;return cljs.core.async.impl.ioc_helpers.return_chan(state_41100__$1,inst_41098);
} else
{if((state_val_41101 === (2)))
{var state_41100__$1 = state_41100;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41100__$1,(4),ch);
} else
{if((state_val_41101 === (11)))
{var inst_41090 = (state_41100[(2)]);var state_41100__$1 = state_41100;var statearr_41109_41128 = state_41100__$1;(statearr_41109_41128[(2)] = inst_41090);
(statearr_41109_41128[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41101 === (9)))
{var state_41100__$1 = state_41100;var statearr_41110_41129 = state_41100__$1;(statearr_41110_41129[(2)] = null);
(statearr_41110_41129[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41101 === (5)))
{var inst_41085 = cljs.core.async.close_BANG_(out);var state_41100__$1 = state_41100;var statearr_41111_41130 = state_41100__$1;(statearr_41111_41130[(2)] = inst_41085);
(statearr_41111_41130[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41101 === (10)))
{var inst_41093 = (state_41100[(2)]);var state_41100__$1 = (function (){var statearr_41112 = state_41100;(statearr_41112[(8)] = inst_41093);
return statearr_41112;
})();var statearr_41113_41131 = state_41100__$1;(statearr_41113_41131[(2)] = null);
(statearr_41113_41131[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41101 === (8)))
{var inst_41082 = (state_41100[(7)]);var state_41100__$1 = state_41100;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41100__$1,(11),out,inst_41082);
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
});})(c__5693__auto___41121,out))
;return ((function (switch__5678__auto__,c__5693__auto___41121,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41117 = [null,null,null,null,null,null,null,null,null];(statearr_41117[(0)] = state_machine__5679__auto__);
(statearr_41117[(1)] = (1));
return statearr_41117;
});
var state_machine__5679__auto____1 = (function (state_41100){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41100);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41118){if((e41118 instanceof Object))
{var ex__5682__auto__ = e41118;var statearr_41119_41132 = state_41100;(statearr_41119_41132[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41100);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41133 = state_41100;
state_41100 = G__41133;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41100){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41121,out))
})();var state__5695__auto__ = (function (){var statearr_41120 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41121);
return statearr_41120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41121,out))
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
return (function (state_41285){var state_val_41286 = (state_41285[(1)]);if((state_val_41286 === (7)))
{var inst_41281 = (state_41285[(2)]);var state_41285__$1 = state_41285;var statearr_41287_41324 = state_41285__$1;(statearr_41287_41324[(2)] = inst_41281);
(statearr_41287_41324[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (20)))
{var inst_41256 = (state_41285[(7)]);var inst_41267 = (state_41285[(2)]);var inst_41268 = cljs.core.next(inst_41256);var inst_41242 = inst_41268;var inst_41243 = null;var inst_41244 = (0);var inst_41245 = (0);var state_41285__$1 = (function (){var statearr_41288 = state_41285;(statearr_41288[(8)] = inst_41244);
(statearr_41288[(9)] = inst_41243);
(statearr_41288[(10)] = inst_41242);
(statearr_41288[(11)] = inst_41267);
(statearr_41288[(12)] = inst_41245);
return statearr_41288;
})();var statearr_41289_41325 = state_41285__$1;(statearr_41289_41325[(2)] = null);
(statearr_41289_41325[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (1)))
{var state_41285__$1 = state_41285;var statearr_41290_41326 = state_41285__$1;(statearr_41290_41326[(2)] = null);
(statearr_41290_41326[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (4)))
{var inst_41231 = (state_41285[(13)]);var inst_41231__$1 = (state_41285[(2)]);var inst_41232 = (inst_41231__$1 == null);var state_41285__$1 = (function (){var statearr_41294 = state_41285;(statearr_41294[(13)] = inst_41231__$1);
return statearr_41294;
})();if(cljs.core.truth_(inst_41232))
{var statearr_41295_41327 = state_41285__$1;(statearr_41295_41327[(1)] = (5));
} else
{var statearr_41296_41328 = state_41285__$1;(statearr_41296_41328[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (15)))
{var state_41285__$1 = state_41285;var statearr_41297_41329 = state_41285__$1;(statearr_41297_41329[(2)] = null);
(statearr_41297_41329[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (13)))
{var inst_41244 = (state_41285[(8)]);var inst_41243 = (state_41285[(9)]);var inst_41242 = (state_41285[(10)]);var inst_41245 = (state_41285[(12)]);var inst_41252 = (state_41285[(2)]);var inst_41253 = (inst_41245 + (1));var tmp41291 = inst_41244;var tmp41292 = inst_41243;var tmp41293 = inst_41242;var inst_41242__$1 = tmp41293;var inst_41243__$1 = tmp41292;var inst_41244__$1 = tmp41291;var inst_41245__$1 = inst_41253;var state_41285__$1 = (function (){var statearr_41298 = state_41285;(statearr_41298[(14)] = inst_41252);
(statearr_41298[(8)] = inst_41244__$1);
(statearr_41298[(9)] = inst_41243__$1);
(statearr_41298[(10)] = inst_41242__$1);
(statearr_41298[(12)] = inst_41245__$1);
return statearr_41298;
})();var statearr_41299_41330 = state_41285__$1;(statearr_41299_41330[(2)] = null);
(statearr_41299_41330[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (6)))
{var inst_41231 = (state_41285[(13)]);var inst_41236 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41231) : f.call(null,inst_41231));var inst_41241 = cljs.core.seq(inst_41236);var inst_41242 = inst_41241;var inst_41243 = null;var inst_41244 = (0);var inst_41245 = (0);var state_41285__$1 = (function (){var statearr_41300 = state_41285;(statearr_41300[(8)] = inst_41244);
(statearr_41300[(9)] = inst_41243);
(statearr_41300[(10)] = inst_41242);
(statearr_41300[(12)] = inst_41245);
return statearr_41300;
})();var statearr_41301_41331 = state_41285__$1;(statearr_41301_41331[(2)] = null);
(statearr_41301_41331[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (17)))
{var inst_41256 = (state_41285[(7)]);var inst_41260 = cljs.core.chunk_first(inst_41256);var inst_41261 = cljs.core.chunk_rest(inst_41256);var inst_41262 = cljs.core.count(inst_41260);var inst_41242 = inst_41261;var inst_41243 = inst_41260;var inst_41244 = inst_41262;var inst_41245 = (0);var state_41285__$1 = (function (){var statearr_41302 = state_41285;(statearr_41302[(8)] = inst_41244);
(statearr_41302[(9)] = inst_41243);
(statearr_41302[(10)] = inst_41242);
(statearr_41302[(12)] = inst_41245);
return statearr_41302;
})();var statearr_41303_41332 = state_41285__$1;(statearr_41303_41332[(2)] = null);
(statearr_41303_41332[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (3)))
{var inst_41283 = (state_41285[(2)]);var state_41285__$1 = state_41285;return cljs.core.async.impl.ioc_helpers.return_chan(state_41285__$1,inst_41283);
} else
{if((state_val_41286 === (12)))
{var inst_41276 = (state_41285[(2)]);var state_41285__$1 = state_41285;var statearr_41304_41333 = state_41285__$1;(statearr_41304_41333[(2)] = inst_41276);
(statearr_41304_41333[(1)] = (9));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (2)))
{var state_41285__$1 = state_41285;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41285__$1,(4),in$);
} else
{if((state_val_41286 === (19)))
{var inst_41271 = (state_41285[(2)]);var state_41285__$1 = state_41285;var statearr_41305_41334 = state_41285__$1;(statearr_41305_41334[(2)] = inst_41271);
(statearr_41305_41334[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (11)))
{var inst_41256 = (state_41285[(7)]);var inst_41242 = (state_41285[(10)]);var inst_41256__$1 = cljs.core.seq(inst_41242);var state_41285__$1 = (function (){var statearr_41306 = state_41285;(statearr_41306[(7)] = inst_41256__$1);
return statearr_41306;
})();if(inst_41256__$1)
{var statearr_41307_41335 = state_41285__$1;(statearr_41307_41335[(1)] = (14));
} else
{var statearr_41308_41336 = state_41285__$1;(statearr_41308_41336[(1)] = (15));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (9)))
{var inst_41278 = (state_41285[(2)]);var state_41285__$1 = (function (){var statearr_41309 = state_41285;(statearr_41309[(15)] = inst_41278);
return statearr_41309;
})();var statearr_41310_41337 = state_41285__$1;(statearr_41310_41337[(2)] = null);
(statearr_41310_41337[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (5)))
{var inst_41234 = cljs.core.async.close_BANG_(out);var state_41285__$1 = state_41285;var statearr_41311_41338 = state_41285__$1;(statearr_41311_41338[(2)] = inst_41234);
(statearr_41311_41338[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (14)))
{var inst_41256 = (state_41285[(7)]);var inst_41258 = cljs.core.chunked_seq_QMARK_(inst_41256);var state_41285__$1 = state_41285;if(inst_41258)
{var statearr_41312_41339 = state_41285__$1;(statearr_41312_41339[(1)] = (17));
} else
{var statearr_41313_41340 = state_41285__$1;(statearr_41313_41340[(1)] = (18));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (16)))
{var inst_41274 = (state_41285[(2)]);var state_41285__$1 = state_41285;var statearr_41314_41341 = state_41285__$1;(statearr_41314_41341[(2)] = inst_41274);
(statearr_41314_41341[(1)] = (12));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41286 === (10)))
{var inst_41243 = (state_41285[(9)]);var inst_41245 = (state_41285[(12)]);var inst_41250 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41243,inst_41245);var state_41285__$1 = state_41285;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41285__$1,(13),out,inst_41250);
} else
{if((state_val_41286 === (18)))
{var inst_41256 = (state_41285[(7)]);var inst_41265 = cljs.core.first(inst_41256);var state_41285__$1 = state_41285;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41285__$1,(20),out,inst_41265);
} else
{if((state_val_41286 === (8)))
{var inst_41244 = (state_41285[(8)]);var inst_41245 = (state_41285[(12)]);var inst_41247 = (inst_41245 < inst_41244);var inst_41248 = inst_41247;var state_41285__$1 = state_41285;if(cljs.core.truth_(inst_41248))
{var statearr_41315_41342 = state_41285__$1;(statearr_41315_41342[(1)] = (10));
} else
{var statearr_41316_41343 = state_41285__$1;(statearr_41316_41343[(1)] = (11));
}
return cljs.core.constant$keyword$773;
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
var state_machine__5679__auto____0 = (function (){var statearr_41320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41320[(0)] = state_machine__5679__auto__);
(statearr_41320[(1)] = (1));
return statearr_41320;
});
var state_machine__5679__auto____1 = (function (state_41285){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41285);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41321){if((e41321 instanceof Object))
{var ex__5682__auto__ = e41321;var statearr_41322_41344 = state_41285;(statearr_41322_41344[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41285);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41345 = state_41285;
state_41285 = G__41345;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41285){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_41323 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_41323;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___41426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41426){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41426){
return (function (state_41405){var state_val_41406 = (state_41405[(1)]);if((state_val_41406 === (7)))
{var inst_41401 = (state_41405[(2)]);var state_41405__$1 = state_41405;var statearr_41407_41427 = state_41405__$1;(statearr_41407_41427[(2)] = inst_41401);
(statearr_41407_41427[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41406 === (1)))
{var state_41405__$1 = state_41405;var statearr_41408_41428 = state_41405__$1;(statearr_41408_41428[(2)] = null);
(statearr_41408_41428[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41406 === (4)))
{var inst_41388 = (state_41405[(7)]);var inst_41388__$1 = (state_41405[(2)]);var inst_41389 = (inst_41388__$1 == null);var state_41405__$1 = (function (){var statearr_41409 = state_41405;(statearr_41409[(7)] = inst_41388__$1);
return statearr_41409;
})();if(cljs.core.truth_(inst_41389))
{var statearr_41410_41429 = state_41405__$1;(statearr_41410_41429[(1)] = (5));
} else
{var statearr_41411_41430 = state_41405__$1;(statearr_41411_41430[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41406 === (6)))
{var inst_41388 = (state_41405[(7)]);var state_41405__$1 = state_41405;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41405__$1,(11),to,inst_41388);
} else
{if((state_val_41406 === (3)))
{var inst_41403 = (state_41405[(2)]);var state_41405__$1 = state_41405;return cljs.core.async.impl.ioc_helpers.return_chan(state_41405__$1,inst_41403);
} else
{if((state_val_41406 === (2)))
{var state_41405__$1 = state_41405;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41405__$1,(4),from);
} else
{if((state_val_41406 === (11)))
{var inst_41398 = (state_41405[(2)]);var state_41405__$1 = (function (){var statearr_41412 = state_41405;(statearr_41412[(8)] = inst_41398);
return statearr_41412;
})();var statearr_41413_41431 = state_41405__$1;(statearr_41413_41431[(2)] = null);
(statearr_41413_41431[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41406 === (9)))
{var state_41405__$1 = state_41405;var statearr_41414_41432 = state_41405__$1;(statearr_41414_41432[(2)] = null);
(statearr_41414_41432[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41406 === (5)))
{var state_41405__$1 = state_41405;if(cljs.core.truth_(close_QMARK_))
{var statearr_41415_41433 = state_41405__$1;(statearr_41415_41433[(1)] = (8));
} else
{var statearr_41416_41434 = state_41405__$1;(statearr_41416_41434[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41406 === (10)))
{var inst_41395 = (state_41405[(2)]);var state_41405__$1 = state_41405;var statearr_41417_41435 = state_41405__$1;(statearr_41417_41435[(2)] = inst_41395);
(statearr_41417_41435[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41406 === (8)))
{var inst_41392 = cljs.core.async.close_BANG_(to);var state_41405__$1 = state_41405;var statearr_41418_41436 = state_41405__$1;(statearr_41418_41436[(2)] = inst_41392);
(statearr_41418_41436[(1)] = (10));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___41426))
;return ((function (switch__5678__auto__,c__5693__auto___41426){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41422 = [null,null,null,null,null,null,null,null,null];(statearr_41422[(0)] = state_machine__5679__auto__);
(statearr_41422[(1)] = (1));
return statearr_41422;
});
var state_machine__5679__auto____1 = (function (state_41405){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41405);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41423){if((e41423 instanceof Object))
{var ex__5682__auto__ = e41423;var statearr_41424_41437 = state_41405;(statearr_41424_41437[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41405);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41438 = state_41405;
state_41405 = G__41438;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41405){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41426))
})();var state__5695__auto__ = (function (){var statearr_41425 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41426);
return statearr_41425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41426))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5693__auto___41525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41525,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41525,tc,fc){
return (function (state_41503){var state_val_41504 = (state_41503[(1)]);if((state_val_41504 === (7)))
{var inst_41499 = (state_41503[(2)]);var state_41503__$1 = state_41503;var statearr_41505_41526 = state_41503__$1;(statearr_41505_41526[(2)] = inst_41499);
(statearr_41505_41526[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41504 === (1)))
{var state_41503__$1 = state_41503;var statearr_41506_41527 = state_41503__$1;(statearr_41506_41527[(2)] = null);
(statearr_41506_41527[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41504 === (4)))
{var inst_41484 = (state_41503[(7)]);var inst_41484__$1 = (state_41503[(2)]);var inst_41485 = (inst_41484__$1 == null);var state_41503__$1 = (function (){var statearr_41507 = state_41503;(statearr_41507[(7)] = inst_41484__$1);
return statearr_41507;
})();if(cljs.core.truth_(inst_41485))
{var statearr_41508_41528 = state_41503__$1;(statearr_41508_41528[(1)] = (5));
} else
{var statearr_41509_41529 = state_41503__$1;(statearr_41509_41529[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41504 === (6)))
{var inst_41484 = (state_41503[(7)]);var inst_41490 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41484) : p.call(null,inst_41484));var state_41503__$1 = state_41503;if(cljs.core.truth_(inst_41490))
{var statearr_41510_41530 = state_41503__$1;(statearr_41510_41530[(1)] = (9));
} else
{var statearr_41511_41531 = state_41503__$1;(statearr_41511_41531[(1)] = (10));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41504 === (3)))
{var inst_41501 = (state_41503[(2)]);var state_41503__$1 = state_41503;return cljs.core.async.impl.ioc_helpers.return_chan(state_41503__$1,inst_41501);
} else
{if((state_val_41504 === (2)))
{var state_41503__$1 = state_41503;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41503__$1,(4),ch);
} else
{if((state_val_41504 === (11)))
{var inst_41484 = (state_41503[(7)]);var inst_41494 = (state_41503[(2)]);var state_41503__$1 = state_41503;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41503__$1,(8),inst_41494,inst_41484);
} else
{if((state_val_41504 === (9)))
{var state_41503__$1 = state_41503;var statearr_41512_41532 = state_41503__$1;(statearr_41512_41532[(2)] = tc);
(statearr_41512_41532[(1)] = (11));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41504 === (5)))
{var inst_41487 = cljs.core.async.close_BANG_(tc);var inst_41488 = cljs.core.async.close_BANG_(fc);var state_41503__$1 = (function (){var statearr_41513 = state_41503;(statearr_41513[(8)] = inst_41487);
return statearr_41513;
})();var statearr_41514_41533 = state_41503__$1;(statearr_41514_41533[(2)] = inst_41488);
(statearr_41514_41533[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41504 === (10)))
{var state_41503__$1 = state_41503;var statearr_41515_41534 = state_41503__$1;(statearr_41515_41534[(2)] = fc);
(statearr_41515_41534[(1)] = (11));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41504 === (8)))
{var inst_41496 = (state_41503[(2)]);var state_41503__$1 = (function (){var statearr_41516 = state_41503;(statearr_41516[(9)] = inst_41496);
return statearr_41516;
})();var statearr_41517_41535 = state_41503__$1;(statearr_41517_41535[(2)] = null);
(statearr_41517_41535[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___41525,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___41525,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41521 = [null,null,null,null,null,null,null,null,null,null];(statearr_41521[(0)] = state_machine__5679__auto__);
(statearr_41521[(1)] = (1));
return statearr_41521;
});
var state_machine__5679__auto____1 = (function (state_41503){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41503);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41522){if((e41522 instanceof Object))
{var ex__5682__auto__ = e41522;var statearr_41523_41536 = state_41503;(statearr_41523_41536[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41503);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41537 = state_41503;
state_41503 = G__41537;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41503){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41525,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_41524 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41525);
return statearr_41524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41525,tc,fc))
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
return (function (state_41584){var state_val_41585 = (state_41584[(1)]);if((state_val_41585 === (7)))
{var inst_41580 = (state_41584[(2)]);var state_41584__$1 = state_41584;var statearr_41586_41602 = state_41584__$1;(statearr_41586_41602[(2)] = inst_41580);
(statearr_41586_41602[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41585 === (6)))
{var inst_41573 = (state_41584[(7)]);var inst_41570 = (state_41584[(8)]);var inst_41577 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41570,inst_41573) : f.call(null,inst_41570,inst_41573));var inst_41570__$1 = inst_41577;var state_41584__$1 = (function (){var statearr_41587 = state_41584;(statearr_41587[(8)] = inst_41570__$1);
return statearr_41587;
})();var statearr_41588_41603 = state_41584__$1;(statearr_41588_41603[(2)] = null);
(statearr_41588_41603[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41585 === (5)))
{var inst_41570 = (state_41584[(8)]);var state_41584__$1 = state_41584;var statearr_41589_41604 = state_41584__$1;(statearr_41589_41604[(2)] = inst_41570);
(statearr_41589_41604[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41585 === (4)))
{var inst_41573 = (state_41584[(7)]);var inst_41573__$1 = (state_41584[(2)]);var inst_41574 = (inst_41573__$1 == null);var state_41584__$1 = (function (){var statearr_41590 = state_41584;(statearr_41590[(7)] = inst_41573__$1);
return statearr_41590;
})();if(cljs.core.truth_(inst_41574))
{var statearr_41591_41605 = state_41584__$1;(statearr_41591_41605[(1)] = (5));
} else
{var statearr_41592_41606 = state_41584__$1;(statearr_41592_41606[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41585 === (3)))
{var inst_41582 = (state_41584[(2)]);var state_41584__$1 = state_41584;return cljs.core.async.impl.ioc_helpers.return_chan(state_41584__$1,inst_41582);
} else
{if((state_val_41585 === (2)))
{var state_41584__$1 = state_41584;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41584__$1,(4),ch);
} else
{if((state_val_41585 === (1)))
{var inst_41570 = init;var state_41584__$1 = (function (){var statearr_41593 = state_41584;(statearr_41593[(8)] = inst_41570);
return statearr_41593;
})();var statearr_41594_41607 = state_41584__$1;(statearr_41594_41607[(2)] = null);
(statearr_41594_41607[(1)] = (2));
return cljs.core.constant$keyword$773;
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
var state_machine__5679__auto____0 = (function (){var statearr_41598 = [null,null,null,null,null,null,null,null,null];(statearr_41598[(0)] = state_machine__5679__auto__);
(statearr_41598[(1)] = (1));
return statearr_41598;
});
var state_machine__5679__auto____1 = (function (state_41584){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41584);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41599){if((e41599 instanceof Object))
{var ex__5682__auto__ = e41599;var statearr_41600_41608 = state_41584;(statearr_41600_41608[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41584);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41609 = state_41584;
state_41584 = G__41609;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41584){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_41601 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_41601;
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
return (function (state_41671){var state_val_41672 = (state_41671[(1)]);if((state_val_41672 === (7)))
{var inst_41652 = (state_41671[(7)]);var inst_41657 = (state_41671[(2)]);var inst_41658 = cljs.core.next(inst_41652);var inst_41652__$1 = inst_41658;var state_41671__$1 = (function (){var statearr_41673 = state_41671;(statearr_41673[(7)] = inst_41652__$1);
(statearr_41673[(8)] = inst_41657);
return statearr_41673;
})();var statearr_41674_41692 = state_41671__$1;(statearr_41674_41692[(2)] = null);
(statearr_41674_41692[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41672 === (1)))
{var inst_41651 = cljs.core.seq(coll);var inst_41652 = inst_41651;var state_41671__$1 = (function (){var statearr_41675 = state_41671;(statearr_41675[(7)] = inst_41652);
return statearr_41675;
})();var statearr_41676_41693 = state_41671__$1;(statearr_41676_41693[(2)] = null);
(statearr_41676_41693[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41672 === (4)))
{var inst_41652 = (state_41671[(7)]);var inst_41655 = cljs.core.first(inst_41652);var state_41671__$1 = state_41671;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41671__$1,(7),ch,inst_41655);
} else
{if((state_val_41672 === (6)))
{var inst_41667 = (state_41671[(2)]);var state_41671__$1 = state_41671;var statearr_41677_41694 = state_41671__$1;(statearr_41677_41694[(2)] = inst_41667);
(statearr_41677_41694[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41672 === (3)))
{var inst_41669 = (state_41671[(2)]);var state_41671__$1 = state_41671;return cljs.core.async.impl.ioc_helpers.return_chan(state_41671__$1,inst_41669);
} else
{if((state_val_41672 === (2)))
{var inst_41652 = (state_41671[(7)]);var state_41671__$1 = state_41671;if(cljs.core.truth_(inst_41652))
{var statearr_41678_41695 = state_41671__$1;(statearr_41678_41695[(1)] = (4));
} else
{var statearr_41679_41696 = state_41671__$1;(statearr_41679_41696[(1)] = (5));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41672 === (9)))
{var state_41671__$1 = state_41671;var statearr_41680_41697 = state_41671__$1;(statearr_41680_41697[(2)] = null);
(statearr_41680_41697[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41672 === (5)))
{var state_41671__$1 = state_41671;if(cljs.core.truth_(close_QMARK_))
{var statearr_41681_41698 = state_41671__$1;(statearr_41681_41698[(1)] = (8));
} else
{var statearr_41682_41699 = state_41671__$1;(statearr_41682_41699[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41672 === (10)))
{var inst_41665 = (state_41671[(2)]);var state_41671__$1 = state_41671;var statearr_41683_41700 = state_41671__$1;(statearr_41683_41700[(2)] = inst_41665);
(statearr_41683_41700[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41672 === (8)))
{var inst_41662 = cljs.core.async.close_BANG_(ch);var state_41671__$1 = state_41671;var statearr_41684_41701 = state_41671__$1;(statearr_41684_41701[(2)] = inst_41662);
(statearr_41684_41701[(1)] = (10));
return cljs.core.constant$keyword$773;
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
var state_machine__5679__auto____0 = (function (){var statearr_41688 = [null,null,null,null,null,null,null,null,null];(statearr_41688[(0)] = state_machine__5679__auto__);
(statearr_41688[(1)] = (1));
return statearr_41688;
});
var state_machine__5679__auto____1 = (function (state_41671){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41671);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41689){if((e41689 instanceof Object))
{var ex__5682__auto__ = e41689;var statearr_41690_41702 = state_41671;(statearr_41690_41702[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41671);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41703 = state_41671;
state_41671 = G__41703;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41671){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_41691 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_41691;
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
cljs.core.async.Mux = (function (){var obj41705 = {};return obj41705;
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
cljs.core.async.Mult = (function (){var obj41707 = {};return obj41707;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t41931 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41931 = (function (cs,ch,mult,meta41932){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41932 = meta41932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41931.cljs$lang$type = true;
cljs.core.async.t41931.cljs$lang$ctorStr = "cljs.core.async/t41931";
cljs.core.async.t41931.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41931");
});})(cs))
;
cljs.core.async.t41931.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t41931.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t41931.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t41931.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t41931.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41931.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t41931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41933){var self__ = this;
var _41933__$1 = this;return self__.meta41932;
});})(cs))
;
cljs.core.async.t41931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41933,meta41932__$1){var self__ = this;
var _41933__$1 = this;return (new cljs.core.async.t41931(self__.cs,self__.ch,self__.mult,meta41932__$1));
});})(cs))
;
cljs.core.async.__GT_t41931 = ((function (cs){
return (function __GT_t41931(cs__$1,ch__$1,mult__$1,meta41932){return (new cljs.core.async.t41931(cs__$1,ch__$1,mult__$1,meta41932));
});})(cs))
;
}
return (new cljs.core.async.t41931(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___42154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42154,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42154,cs,m,dchan,dctr,done){
return (function (state_42068){var state_val_42069 = (state_42068[(1)]);if((state_val_42069 === (7)))
{var inst_42064 = (state_42068[(2)]);var state_42068__$1 = state_42068;var statearr_42070_42155 = state_42068__$1;(statearr_42070_42155[(2)] = inst_42064);
(statearr_42070_42155[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (20)))
{var inst_41965 = (state_42068[(7)]);var inst_41975 = cljs.core.first(inst_41965);var inst_41976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41975,(0),null);var inst_41977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41975,(1),null);var state_42068__$1 = (function (){var statearr_42071 = state_42068;(statearr_42071[(8)] = inst_41976);
return statearr_42071;
})();if(cljs.core.truth_(inst_41977))
{var statearr_42072_42156 = state_42068__$1;(statearr_42072_42156[(1)] = (22));
} else
{var statearr_42073_42157 = state_42068__$1;(statearr_42073_42157[(1)] = (23));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (27)))
{var inst_42007 = (state_42068[(9)]);var inst_42005 = (state_42068[(10)]);var inst_42012 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42005,inst_42007);var state_42068__$1 = (function (){var statearr_42074 = state_42068;(statearr_42074[(11)] = inst_42012);
return statearr_42074;
})();var statearr_42075_42158 = state_42068__$1;(statearr_42075_42158[(2)] = null);
(statearr_42075_42158[(1)] = (32));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (1)))
{var state_42068__$1 = state_42068;var statearr_42076_42159 = state_42068__$1;(statearr_42076_42159[(2)] = null);
(statearr_42076_42159[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (24)))
{var inst_41965 = (state_42068[(7)]);var inst_41982 = (state_42068[(2)]);var inst_41983 = cljs.core.next(inst_41965);var inst_41945 = inst_41983;var inst_41946 = null;var inst_41947 = (0);var inst_41948 = (0);var state_42068__$1 = (function (){var statearr_42077 = state_42068;(statearr_42077[(12)] = inst_41945);
(statearr_42077[(13)] = inst_41948);
(statearr_42077[(14)] = inst_41947);
(statearr_42077[(15)] = inst_41982);
(statearr_42077[(16)] = inst_41946);
return statearr_42077;
})();var statearr_42078_42160 = state_42068__$1;(statearr_42078_42160[(2)] = null);
(statearr_42078_42160[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (39)))
{var inst_42025 = (state_42068[(17)]);var inst_42043 = (state_42068[(2)]);var inst_42044 = cljs.core.next(inst_42025);var inst_42004 = inst_42044;var inst_42005 = null;var inst_42006 = (0);var inst_42007 = (0);var state_42068__$1 = (function (){var statearr_42082 = state_42068;(statearr_42082[(9)] = inst_42007);
(statearr_42082[(18)] = inst_42006);
(statearr_42082[(19)] = inst_42004);
(statearr_42082[(20)] = inst_42043);
(statearr_42082[(10)] = inst_42005);
return statearr_42082;
})();var statearr_42083_42161 = state_42068__$1;(statearr_42083_42161[(2)] = null);
(statearr_42083_42161[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (4)))
{var inst_41936 = (state_42068[(21)]);var inst_41936__$1 = (state_42068[(2)]);var inst_41937 = (inst_41936__$1 == null);var state_42068__$1 = (function (){var statearr_42084 = state_42068;(statearr_42084[(21)] = inst_41936__$1);
return statearr_42084;
})();if(cljs.core.truth_(inst_41937))
{var statearr_42085_42162 = state_42068__$1;(statearr_42085_42162[(1)] = (5));
} else
{var statearr_42086_42163 = state_42068__$1;(statearr_42086_42163[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (15)))
{var inst_41945 = (state_42068[(12)]);var inst_41948 = (state_42068[(13)]);var inst_41947 = (state_42068[(14)]);var inst_41946 = (state_42068[(16)]);var inst_41961 = (state_42068[(2)]);var inst_41962 = (inst_41948 + (1));var tmp42079 = inst_41945;var tmp42080 = inst_41947;var tmp42081 = inst_41946;var inst_41945__$1 = tmp42079;var inst_41946__$1 = tmp42081;var inst_41947__$1 = tmp42080;var inst_41948__$1 = inst_41962;var state_42068__$1 = (function (){var statearr_42087 = state_42068;(statearr_42087[(22)] = inst_41961);
(statearr_42087[(12)] = inst_41945__$1);
(statearr_42087[(13)] = inst_41948__$1);
(statearr_42087[(14)] = inst_41947__$1);
(statearr_42087[(16)] = inst_41946__$1);
return statearr_42087;
})();var statearr_42088_42164 = state_42068__$1;(statearr_42088_42164[(2)] = null);
(statearr_42088_42164[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (21)))
{var inst_41986 = (state_42068[(2)]);var state_42068__$1 = state_42068;var statearr_42089_42165 = state_42068__$1;(statearr_42089_42165[(2)] = inst_41986);
(statearr_42089_42165[(1)] = (18));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (31)))
{var inst_42012 = (state_42068[(11)]);var inst_42013 = (state_42068[(2)]);var inst_42014 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_42015 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42012);var state_42068__$1 = (function (){var statearr_42090 = state_42068;(statearr_42090[(23)] = inst_42013);
(statearr_42090[(24)] = inst_42014);
return statearr_42090;
})();var statearr_42091_42166 = state_42068__$1;(statearr_42091_42166[(2)] = inst_42015);
cljs.core.async.impl.ioc_helpers.process_exception(state_42068__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (32)))
{var inst_42012 = (state_42068[(11)]);var inst_41936 = (state_42068[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42068,(31),Object,null,(30));var inst_42019 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42012,inst_41936,done);var state_42068__$1 = state_42068;var statearr_42092_42167 = state_42068__$1;(statearr_42092_42167[(2)] = inst_42019);
cljs.core.async.impl.ioc_helpers.process_exception(state_42068__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (40)))
{var inst_42034 = (state_42068[(25)]);var inst_42035 = (state_42068[(2)]);var inst_42036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_42037 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42034);var state_42068__$1 = (function (){var statearr_42093 = state_42068;(statearr_42093[(26)] = inst_42035);
(statearr_42093[(27)] = inst_42036);
return statearr_42093;
})();var statearr_42094_42168 = state_42068__$1;(statearr_42094_42168[(2)] = inst_42037);
cljs.core.async.impl.ioc_helpers.process_exception(state_42068__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (33)))
{var inst_42025 = (state_42068[(17)]);var inst_42027 = cljs.core.chunked_seq_QMARK_(inst_42025);var state_42068__$1 = state_42068;if(inst_42027)
{var statearr_42095_42169 = state_42068__$1;(statearr_42095_42169[(1)] = (36));
} else
{var statearr_42096_42170 = state_42068__$1;(statearr_42096_42170[(1)] = (37));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (13)))
{var inst_41955 = (state_42068[(28)]);var inst_41958 = cljs.core.async.close_BANG_(inst_41955);var state_42068__$1 = state_42068;var statearr_42097_42171 = state_42068__$1;(statearr_42097_42171[(2)] = inst_41958);
(statearr_42097_42171[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (22)))
{var inst_41976 = (state_42068[(8)]);var inst_41979 = cljs.core.async.close_BANG_(inst_41976);var state_42068__$1 = state_42068;var statearr_42098_42172 = state_42068__$1;(statearr_42098_42172[(2)] = inst_41979);
(statearr_42098_42172[(1)] = (24));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (36)))
{var inst_42025 = (state_42068[(17)]);var inst_42029 = cljs.core.chunk_first(inst_42025);var inst_42030 = cljs.core.chunk_rest(inst_42025);var inst_42031 = cljs.core.count(inst_42029);var inst_42004 = inst_42030;var inst_42005 = inst_42029;var inst_42006 = inst_42031;var inst_42007 = (0);var state_42068__$1 = (function (){var statearr_42099 = state_42068;(statearr_42099[(9)] = inst_42007);
(statearr_42099[(18)] = inst_42006);
(statearr_42099[(19)] = inst_42004);
(statearr_42099[(10)] = inst_42005);
return statearr_42099;
})();var statearr_42100_42173 = state_42068__$1;(statearr_42100_42173[(2)] = null);
(statearr_42100_42173[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (41)))
{var inst_42034 = (state_42068[(25)]);var inst_41936 = (state_42068[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42068,(40),Object,null,(39));var inst_42041 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42034,inst_41936,done);var state_42068__$1 = state_42068;var statearr_42101_42174 = state_42068__$1;(statearr_42101_42174[(2)] = inst_42041);
cljs.core.async.impl.ioc_helpers.process_exception(state_42068__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (43)))
{var state_42068__$1 = state_42068;var statearr_42102_42175 = state_42068__$1;(statearr_42102_42175[(2)] = null);
(statearr_42102_42175[(1)] = (44));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (29)))
{var inst_42052 = (state_42068[(2)]);var state_42068__$1 = state_42068;var statearr_42103_42176 = state_42068__$1;(statearr_42103_42176[(2)] = inst_42052);
(statearr_42103_42176[(1)] = (26));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (44)))
{var inst_42061 = (state_42068[(2)]);var state_42068__$1 = (function (){var statearr_42104 = state_42068;(statearr_42104[(29)] = inst_42061);
return statearr_42104;
})();var statearr_42105_42177 = state_42068__$1;(statearr_42105_42177[(2)] = null);
(statearr_42105_42177[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (6)))
{var inst_41996 = (state_42068[(30)]);var inst_41995 = cljs.core.deref(cs);var inst_41996__$1 = cljs.core.keys(inst_41995);var inst_41997 = cljs.core.count(inst_41996__$1);var inst_41998 = cljs.core.reset_BANG_(dctr,inst_41997);var inst_42003 = cljs.core.seq(inst_41996__$1);var inst_42004 = inst_42003;var inst_42005 = null;var inst_42006 = (0);var inst_42007 = (0);var state_42068__$1 = (function (){var statearr_42106 = state_42068;(statearr_42106[(9)] = inst_42007);
(statearr_42106[(18)] = inst_42006);
(statearr_42106[(30)] = inst_41996__$1);
(statearr_42106[(19)] = inst_42004);
(statearr_42106[(31)] = inst_41998);
(statearr_42106[(10)] = inst_42005);
return statearr_42106;
})();var statearr_42107_42178 = state_42068__$1;(statearr_42107_42178[(2)] = null);
(statearr_42107_42178[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (28)))
{var inst_42004 = (state_42068[(19)]);var inst_42025 = (state_42068[(17)]);var inst_42025__$1 = cljs.core.seq(inst_42004);var state_42068__$1 = (function (){var statearr_42108 = state_42068;(statearr_42108[(17)] = inst_42025__$1);
return statearr_42108;
})();if(inst_42025__$1)
{var statearr_42109_42179 = state_42068__$1;(statearr_42109_42179[(1)] = (33));
} else
{var statearr_42110_42180 = state_42068__$1;(statearr_42110_42180[(1)] = (34));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (25)))
{var inst_42007 = (state_42068[(9)]);var inst_42006 = (state_42068[(18)]);var inst_42009 = (inst_42007 < inst_42006);var inst_42010 = inst_42009;var state_42068__$1 = state_42068;if(cljs.core.truth_(inst_42010))
{var statearr_42111_42181 = state_42068__$1;(statearr_42111_42181[(1)] = (27));
} else
{var statearr_42112_42182 = state_42068__$1;(statearr_42112_42182[(1)] = (28));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (34)))
{var state_42068__$1 = state_42068;var statearr_42113_42183 = state_42068__$1;(statearr_42113_42183[(2)] = null);
(statearr_42113_42183[(1)] = (35));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (17)))
{var state_42068__$1 = state_42068;var statearr_42114_42184 = state_42068__$1;(statearr_42114_42184[(2)] = null);
(statearr_42114_42184[(1)] = (18));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (3)))
{var inst_42066 = (state_42068[(2)]);var state_42068__$1 = state_42068;return cljs.core.async.impl.ioc_helpers.return_chan(state_42068__$1,inst_42066);
} else
{if((state_val_42069 === (12)))
{var inst_41991 = (state_42068[(2)]);var state_42068__$1 = state_42068;var statearr_42115_42185 = state_42068__$1;(statearr_42115_42185[(2)] = inst_41991);
(statearr_42115_42185[(1)] = (9));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (2)))
{var state_42068__$1 = state_42068;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42068__$1,(4),ch);
} else
{if((state_val_42069 === (23)))
{var state_42068__$1 = state_42068;var statearr_42116_42186 = state_42068__$1;(statearr_42116_42186[(2)] = null);
(statearr_42116_42186[(1)] = (24));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (35)))
{var inst_42050 = (state_42068[(2)]);var state_42068__$1 = state_42068;var statearr_42117_42187 = state_42068__$1;(statearr_42117_42187[(2)] = inst_42050);
(statearr_42117_42187[(1)] = (29));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (19)))
{var inst_41965 = (state_42068[(7)]);var inst_41969 = cljs.core.chunk_first(inst_41965);var inst_41970 = cljs.core.chunk_rest(inst_41965);var inst_41971 = cljs.core.count(inst_41969);var inst_41945 = inst_41970;var inst_41946 = inst_41969;var inst_41947 = inst_41971;var inst_41948 = (0);var state_42068__$1 = (function (){var statearr_42118 = state_42068;(statearr_42118[(12)] = inst_41945);
(statearr_42118[(13)] = inst_41948);
(statearr_42118[(14)] = inst_41947);
(statearr_42118[(16)] = inst_41946);
return statearr_42118;
})();var statearr_42119_42188 = state_42068__$1;(statearr_42119_42188[(2)] = null);
(statearr_42119_42188[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (11)))
{var inst_41945 = (state_42068[(12)]);var inst_41965 = (state_42068[(7)]);var inst_41965__$1 = cljs.core.seq(inst_41945);var state_42068__$1 = (function (){var statearr_42120 = state_42068;(statearr_42120[(7)] = inst_41965__$1);
return statearr_42120;
})();if(inst_41965__$1)
{var statearr_42121_42189 = state_42068__$1;(statearr_42121_42189[(1)] = (16));
} else
{var statearr_42122_42190 = state_42068__$1;(statearr_42122_42190[(1)] = (17));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (9)))
{var inst_41993 = (state_42068[(2)]);var state_42068__$1 = state_42068;var statearr_42123_42191 = state_42068__$1;(statearr_42123_42191[(2)] = inst_41993);
(statearr_42123_42191[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (5)))
{var inst_41943 = cljs.core.deref(cs);var inst_41944 = cljs.core.seq(inst_41943);var inst_41945 = inst_41944;var inst_41946 = null;var inst_41947 = (0);var inst_41948 = (0);var state_42068__$1 = (function (){var statearr_42124 = state_42068;(statearr_42124[(12)] = inst_41945);
(statearr_42124[(13)] = inst_41948);
(statearr_42124[(14)] = inst_41947);
(statearr_42124[(16)] = inst_41946);
return statearr_42124;
})();var statearr_42125_42192 = state_42068__$1;(statearr_42125_42192[(2)] = null);
(statearr_42125_42192[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (14)))
{var state_42068__$1 = state_42068;var statearr_42126_42193 = state_42068__$1;(statearr_42126_42193[(2)] = null);
(statearr_42126_42193[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (45)))
{var inst_42058 = (state_42068[(2)]);var state_42068__$1 = state_42068;var statearr_42127_42194 = state_42068__$1;(statearr_42127_42194[(2)] = inst_42058);
(statearr_42127_42194[(1)] = (44));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (26)))
{var inst_41996 = (state_42068[(30)]);var inst_42054 = (state_42068[(2)]);var inst_42055 = cljs.core.seq(inst_41996);var state_42068__$1 = (function (){var statearr_42128 = state_42068;(statearr_42128[(32)] = inst_42054);
return statearr_42128;
})();if(inst_42055)
{var statearr_42129_42195 = state_42068__$1;(statearr_42129_42195[(1)] = (42));
} else
{var statearr_42130_42196 = state_42068__$1;(statearr_42130_42196[(1)] = (43));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (16)))
{var inst_41965 = (state_42068[(7)]);var inst_41967 = cljs.core.chunked_seq_QMARK_(inst_41965);var state_42068__$1 = state_42068;if(inst_41967)
{var statearr_42134_42197 = state_42068__$1;(statearr_42134_42197[(1)] = (19));
} else
{var statearr_42135_42198 = state_42068__$1;(statearr_42135_42198[(1)] = (20));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (38)))
{var inst_42047 = (state_42068[(2)]);var state_42068__$1 = state_42068;var statearr_42136_42199 = state_42068__$1;(statearr_42136_42199[(2)] = inst_42047);
(statearr_42136_42199[(1)] = (35));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (30)))
{var inst_42007 = (state_42068[(9)]);var inst_42006 = (state_42068[(18)]);var inst_42004 = (state_42068[(19)]);var inst_42005 = (state_42068[(10)]);var inst_42021 = (state_42068[(2)]);var inst_42022 = (inst_42007 + (1));var tmp42131 = inst_42006;var tmp42132 = inst_42004;var tmp42133 = inst_42005;var inst_42004__$1 = tmp42132;var inst_42005__$1 = tmp42133;var inst_42006__$1 = tmp42131;var inst_42007__$1 = inst_42022;var state_42068__$1 = (function (){var statearr_42137 = state_42068;(statearr_42137[(9)] = inst_42007__$1);
(statearr_42137[(33)] = inst_42021);
(statearr_42137[(18)] = inst_42006__$1);
(statearr_42137[(19)] = inst_42004__$1);
(statearr_42137[(10)] = inst_42005__$1);
return statearr_42137;
})();var statearr_42138_42200 = state_42068__$1;(statearr_42138_42200[(2)] = null);
(statearr_42138_42200[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (10)))
{var inst_41948 = (state_42068[(13)]);var inst_41946 = (state_42068[(16)]);var inst_41954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41946,inst_41948);var inst_41955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41954,(0),null);var inst_41956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41954,(1),null);var state_42068__$1 = (function (){var statearr_42139 = state_42068;(statearr_42139[(28)] = inst_41955);
return statearr_42139;
})();if(cljs.core.truth_(inst_41956))
{var statearr_42140_42201 = state_42068__$1;(statearr_42140_42201[(1)] = (13));
} else
{var statearr_42141_42202 = state_42068__$1;(statearr_42141_42202[(1)] = (14));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (18)))
{var inst_41989 = (state_42068[(2)]);var state_42068__$1 = state_42068;var statearr_42142_42203 = state_42068__$1;(statearr_42142_42203[(2)] = inst_41989);
(statearr_42142_42203[(1)] = (12));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (42)))
{var state_42068__$1 = state_42068;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42068__$1,(45),dchan);
} else
{if((state_val_42069 === (37)))
{var inst_42025 = (state_42068[(17)]);var inst_42034 = cljs.core.first(inst_42025);var state_42068__$1 = (function (){var statearr_42143 = state_42068;(statearr_42143[(25)] = inst_42034);
return statearr_42143;
})();var statearr_42144_42204 = state_42068__$1;(statearr_42144_42204[(2)] = null);
(statearr_42144_42204[(1)] = (41));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42069 === (8)))
{var inst_41948 = (state_42068[(13)]);var inst_41947 = (state_42068[(14)]);var inst_41950 = (inst_41948 < inst_41947);var inst_41951 = inst_41950;var state_42068__$1 = state_42068;if(cljs.core.truth_(inst_41951))
{var statearr_42145_42205 = state_42068__$1;(statearr_42145_42205[(1)] = (10));
} else
{var statearr_42146_42206 = state_42068__$1;(statearr_42146_42206[(1)] = (11));
}
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___42154,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___42154,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42150[(0)] = state_machine__5679__auto__);
(statearr_42150[(1)] = (1));
return statearr_42150;
});
var state_machine__5679__auto____1 = (function (state_42068){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42068);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42151){if((e42151 instanceof Object))
{var ex__5682__auto__ = e42151;var statearr_42152_42207 = state_42068;(statearr_42152_42207[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42068);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__42208 = state_42068;
state_42068 = G__42208;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42068){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42154,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_42153 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42154);
return statearr_42153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42154,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj42210 = {};return obj42210;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$780,null,cljs.core.constant$keyword$781,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$782);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$781);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$782,chs);var pauses = pick(cljs.core.constant$keyword$780,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$783,solos,cljs.core.constant$keyword$784,pick(cljs.core.constant$keyword$781,chs),cljs.core.constant$keyword$785,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$780)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t42320 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42320 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42321){
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
this.meta42321 = meta42321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42320.cljs$lang$type = true;
cljs.core.async.t42320.cljs$lang$ctorStr = "cljs.core.async/t42320";
cljs.core.async.t42320.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t42320");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42320.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t42320.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42320.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42320.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42320.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42320.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42320.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42322){var self__ = this;
var _42322__$1 = this;return self__.meta42321;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42322,meta42321__$1){var self__ = this;
var _42322__$1 = this;return (new cljs.core.async.t42320(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42321__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t42320 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t42320(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42321){return (new cljs.core.async.t42320(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42321));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t42320(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___42429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42387){var state_val_42388 = (state_42387[(1)]);if((state_val_42388 === (7)))
{var inst_42336 = (state_42387[(7)]);var inst_42341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42336);var state_42387__$1 = state_42387;var statearr_42389_42430 = state_42387__$1;(statearr_42389_42430[(2)] = inst_42341);
(statearr_42389_42430[(1)] = (9));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (20)))
{var inst_42351 = (state_42387[(8)]);var state_42387__$1 = state_42387;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42387__$1,(23),out,inst_42351);
} else
{if((state_val_42388 === (1)))
{var inst_42326 = (state_42387[(9)]);var inst_42326__$1 = calc_state();var inst_42327 = cljs.core.seq_QMARK_(inst_42326__$1);var state_42387__$1 = (function (){var statearr_42390 = state_42387;(statearr_42390[(9)] = inst_42326__$1);
return statearr_42390;
})();if(inst_42327)
{var statearr_42391_42431 = state_42387__$1;(statearr_42391_42431[(1)] = (2));
} else
{var statearr_42392_42432 = state_42387__$1;(statearr_42392_42432[(1)] = (3));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (4)))
{var inst_42326 = (state_42387[(9)]);var inst_42332 = (state_42387[(2)]);var inst_42333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42332,cljs.core.constant$keyword$785);var inst_42334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42332,cljs.core.constant$keyword$784);var inst_42335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42332,cljs.core.constant$keyword$783);var inst_42336 = inst_42326;var state_42387__$1 = (function (){var statearr_42393 = state_42387;(statearr_42393[(7)] = inst_42336);
(statearr_42393[(10)] = inst_42334);
(statearr_42393[(11)] = inst_42333);
(statearr_42393[(12)] = inst_42335);
return statearr_42393;
})();var statearr_42394_42433 = state_42387__$1;(statearr_42394_42433[(2)] = null);
(statearr_42394_42433[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (15)))
{var state_42387__$1 = state_42387;var statearr_42395_42434 = state_42387__$1;(statearr_42395_42434[(2)] = null);
(statearr_42395_42434[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (21)))
{var state_42387__$1 = state_42387;var statearr_42396_42435 = state_42387__$1;(statearr_42396_42435[(2)] = null);
(statearr_42396_42435[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (13)))
{var inst_42383 = (state_42387[(2)]);var state_42387__$1 = state_42387;var statearr_42397_42436 = state_42387__$1;(statearr_42397_42436[(2)] = inst_42383);
(statearr_42397_42436[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (22)))
{var inst_42344 = (state_42387[(13)]);var inst_42380 = (state_42387[(2)]);var inst_42336 = inst_42344;var state_42387__$1 = (function (){var statearr_42398 = state_42387;(statearr_42398[(7)] = inst_42336);
(statearr_42398[(14)] = inst_42380);
return statearr_42398;
})();var statearr_42399_42437 = state_42387__$1;(statearr_42399_42437[(2)] = null);
(statearr_42399_42437[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (6)))
{var inst_42385 = (state_42387[(2)]);var state_42387__$1 = state_42387;return cljs.core.async.impl.ioc_helpers.return_chan(state_42387__$1,inst_42385);
} else
{if((state_val_42388 === (17)))
{var inst_42366 = (state_42387[(15)]);var state_42387__$1 = state_42387;var statearr_42400_42438 = state_42387__$1;(statearr_42400_42438[(2)] = inst_42366);
(statearr_42400_42438[(1)] = (19));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (3)))
{var inst_42326 = (state_42387[(9)]);var state_42387__$1 = state_42387;var statearr_42401_42439 = state_42387__$1;(statearr_42401_42439[(2)] = inst_42326);
(statearr_42401_42439[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (12)))
{var inst_42347 = (state_42387[(16)]);var inst_42366 = (state_42387[(15)]);var inst_42352 = (state_42387[(17)]);var inst_42366__$1 = (inst_42347.cljs$core$IFn$_invoke$arity$1 ? inst_42347.cljs$core$IFn$_invoke$arity$1(inst_42352) : inst_42347.call(null,inst_42352));var state_42387__$1 = (function (){var statearr_42402 = state_42387;(statearr_42402[(15)] = inst_42366__$1);
return statearr_42402;
})();if(cljs.core.truth_(inst_42366__$1))
{var statearr_42403_42440 = state_42387__$1;(statearr_42403_42440[(1)] = (17));
} else
{var statearr_42404_42441 = state_42387__$1;(statearr_42404_42441[(1)] = (18));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (2)))
{var inst_42326 = (state_42387[(9)]);var inst_42329 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42326);var state_42387__$1 = state_42387;var statearr_42405_42442 = state_42387__$1;(statearr_42405_42442[(2)] = inst_42329);
(statearr_42405_42442[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (23)))
{var inst_42377 = (state_42387[(2)]);var state_42387__$1 = state_42387;var statearr_42406_42443 = state_42387__$1;(statearr_42406_42443[(2)] = inst_42377);
(statearr_42406_42443[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (19)))
{var inst_42374 = (state_42387[(2)]);var state_42387__$1 = state_42387;if(cljs.core.truth_(inst_42374))
{var statearr_42407_42444 = state_42387__$1;(statearr_42407_42444[(1)] = (20));
} else
{var statearr_42408_42445 = state_42387__$1;(statearr_42408_42445[(1)] = (21));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (11)))
{var inst_42351 = (state_42387[(8)]);var inst_42357 = (inst_42351 == null);var state_42387__$1 = state_42387;if(cljs.core.truth_(inst_42357))
{var statearr_42409_42446 = state_42387__$1;(statearr_42409_42446[(1)] = (14));
} else
{var statearr_42410_42447 = state_42387__$1;(statearr_42410_42447[(1)] = (15));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (9)))
{var inst_42344 = (state_42387[(13)]);var inst_42344__$1 = (state_42387[(2)]);var inst_42345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42344__$1,cljs.core.constant$keyword$785);var inst_42346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42344__$1,cljs.core.constant$keyword$784);var inst_42347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42344__$1,cljs.core.constant$keyword$783);var state_42387__$1 = (function (){var statearr_42411 = state_42387;(statearr_42411[(16)] = inst_42347);
(statearr_42411[(18)] = inst_42346);
(statearr_42411[(13)] = inst_42344__$1);
return statearr_42411;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_42387__$1,(10),inst_42345);
} else
{if((state_val_42388 === (5)))
{var inst_42336 = (state_42387[(7)]);var inst_42339 = cljs.core.seq_QMARK_(inst_42336);var state_42387__$1 = state_42387;if(inst_42339)
{var statearr_42412_42448 = state_42387__$1;(statearr_42412_42448[(1)] = (7));
} else
{var statearr_42413_42449 = state_42387__$1;(statearr_42413_42449[(1)] = (8));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (14)))
{var inst_42352 = (state_42387[(17)]);var inst_42359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42352);var state_42387__$1 = state_42387;var statearr_42414_42450 = state_42387__$1;(statearr_42414_42450[(2)] = inst_42359);
(statearr_42414_42450[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (16)))
{var inst_42362 = (state_42387[(2)]);var inst_42363 = calc_state();var inst_42336 = inst_42363;var state_42387__$1 = (function (){var statearr_42415 = state_42387;(statearr_42415[(7)] = inst_42336);
(statearr_42415[(19)] = inst_42362);
return statearr_42415;
})();var statearr_42416_42451 = state_42387__$1;(statearr_42416_42451[(2)] = null);
(statearr_42416_42451[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (10)))
{var inst_42351 = (state_42387[(8)]);var inst_42352 = (state_42387[(17)]);var inst_42350 = (state_42387[(2)]);var inst_42351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42350,(0),null);var inst_42352__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42350,(1),null);var inst_42353 = (inst_42351__$1 == null);var inst_42354 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42352__$1,change);var inst_42355 = (inst_42353) || (inst_42354);var state_42387__$1 = (function (){var statearr_42417 = state_42387;(statearr_42417[(8)] = inst_42351__$1);
(statearr_42417[(17)] = inst_42352__$1);
return statearr_42417;
})();if(cljs.core.truth_(inst_42355))
{var statearr_42418_42452 = state_42387__$1;(statearr_42418_42452[(1)] = (11));
} else
{var statearr_42419_42453 = state_42387__$1;(statearr_42419_42453[(1)] = (12));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (18)))
{var inst_42347 = (state_42387[(16)]);var inst_42346 = (state_42387[(18)]);var inst_42352 = (state_42387[(17)]);var inst_42369 = cljs.core.empty_QMARK_(inst_42347);var inst_42370 = (inst_42346.cljs$core$IFn$_invoke$arity$1 ? inst_42346.cljs$core$IFn$_invoke$arity$1(inst_42352) : inst_42346.call(null,inst_42352));var inst_42371 = cljs.core.not(inst_42370);var inst_42372 = (inst_42369) && (inst_42371);var state_42387__$1 = state_42387;var statearr_42420_42454 = state_42387__$1;(statearr_42420_42454[(2)] = inst_42372);
(statearr_42420_42454[(1)] = (19));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42388 === (8)))
{var inst_42336 = (state_42387[(7)]);var state_42387__$1 = state_42387;var statearr_42421_42455 = state_42387__$1;(statearr_42421_42455[(2)] = inst_42336);
(statearr_42421_42455[(1)] = (9));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___42429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___42429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42425[(0)] = state_machine__5679__auto__);
(statearr_42425[(1)] = (1));
return statearr_42425;
});
var state_machine__5679__auto____1 = (function (state_42387){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42387);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42426){if((e42426 instanceof Object))
{var ex__5682__auto__ = e42426;var statearr_42427_42456 = state_42387;(statearr_42427_42456[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42387);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__42457 = state_42387;
state_42387 = G__42457;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42387){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_42428 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42429);
return statearr_42428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj42459 = {};return obj42459;
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
return (function (p1__42460_SHARP_){if(cljs.core.truth_((p1__42460_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42460_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42460_SHARP_.call(null,topic))))
{return p1__42460_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42460_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t42585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42585 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42586){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42586 = meta42586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42585.cljs$lang$type = true;
cljs.core.async.t42585.cljs$lang$ctorStr = "cljs.core.async/t42585";
cljs.core.async.t42585.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t42585");
});})(mults,ensure_mult))
;
cljs.core.async.t42585.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t42585.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t42585.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t42585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t42585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t42585.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t42585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42587){var self__ = this;
var _42587__$1 = this;return self__.meta42586;
});})(mults,ensure_mult))
;
cljs.core.async.t42585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42587,meta42586__$1){var self__ = this;
var _42587__$1 = this;return (new cljs.core.async.t42585(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42586__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t42585 = ((function (mults,ensure_mult){
return (function __GT_t42585(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42586){return (new cljs.core.async.t42585(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42586));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t42585(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___42709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42709,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42709,mults,ensure_mult,p){
return (function (state_42661){var state_val_42662 = (state_42661[(1)]);if((state_val_42662 === (7)))
{var inst_42657 = (state_42661[(2)]);var state_42661__$1 = state_42661;var statearr_42663_42710 = state_42661__$1;(statearr_42663_42710[(2)] = inst_42657);
(statearr_42663_42710[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (20)))
{var state_42661__$1 = state_42661;var statearr_42664_42711 = state_42661__$1;(statearr_42664_42711[(2)] = null);
(statearr_42664_42711[(1)] = (21));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (1)))
{var state_42661__$1 = state_42661;var statearr_42665_42712 = state_42661__$1;(statearr_42665_42712[(2)] = null);
(statearr_42665_42712[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (24)))
{var inst_42590 = (state_42661[(7)]);var inst_42640 = (state_42661[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42661,(23),Object,null,(22));var inst_42647 = cljs.core.async.muxch_STAR_(inst_42640);var state_42661__$1 = state_42661;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42661__$1,(25),inst_42647,inst_42590);
} else
{if((state_val_42662 === (4)))
{var inst_42590 = (state_42661[(7)]);var inst_42590__$1 = (state_42661[(2)]);var inst_42591 = (inst_42590__$1 == null);var state_42661__$1 = (function (){var statearr_42666 = state_42661;(statearr_42666[(7)] = inst_42590__$1);
return statearr_42666;
})();if(cljs.core.truth_(inst_42591))
{var statearr_42667_42713 = state_42661__$1;(statearr_42667_42713[(1)] = (5));
} else
{var statearr_42668_42714 = state_42661__$1;(statearr_42668_42714[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (15)))
{var inst_42632 = (state_42661[(2)]);var state_42661__$1 = state_42661;var statearr_42669_42715 = state_42661__$1;(statearr_42669_42715[(2)] = inst_42632);
(statearr_42669_42715[(1)] = (12));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (21)))
{var inst_42654 = (state_42661[(2)]);var state_42661__$1 = (function (){var statearr_42670 = state_42661;(statearr_42670[(9)] = inst_42654);
return statearr_42670;
})();var statearr_42671_42716 = state_42661__$1;(statearr_42671_42716[(2)] = null);
(statearr_42671_42716[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (13)))
{var inst_42614 = (state_42661[(10)]);var inst_42616 = cljs.core.chunked_seq_QMARK_(inst_42614);var state_42661__$1 = state_42661;if(inst_42616)
{var statearr_42672_42717 = state_42661__$1;(statearr_42672_42717[(1)] = (16));
} else
{var statearr_42673_42718 = state_42661__$1;(statearr_42673_42718[(1)] = (17));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (22)))
{var inst_42651 = (state_42661[(2)]);var state_42661__$1 = state_42661;var statearr_42674_42719 = state_42661__$1;(statearr_42674_42719[(2)] = inst_42651);
(statearr_42674_42719[(1)] = (21));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (6)))
{var inst_42638 = (state_42661[(11)]);var inst_42590 = (state_42661[(7)]);var inst_42640 = (state_42661[(8)]);var inst_42638__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42590) : topic_fn.call(null,inst_42590));var inst_42639 = cljs.core.deref(mults);var inst_42640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42639,inst_42638__$1);var state_42661__$1 = (function (){var statearr_42675 = state_42661;(statearr_42675[(11)] = inst_42638__$1);
(statearr_42675[(8)] = inst_42640__$1);
return statearr_42675;
})();if(cljs.core.truth_(inst_42640__$1))
{var statearr_42676_42720 = state_42661__$1;(statearr_42676_42720[(1)] = (19));
} else
{var statearr_42677_42721 = state_42661__$1;(statearr_42677_42721[(1)] = (20));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (25)))
{var inst_42649 = (state_42661[(2)]);var state_42661__$1 = state_42661;var statearr_42678_42722 = state_42661__$1;(statearr_42678_42722[(2)] = inst_42649);
cljs.core.async.impl.ioc_helpers.process_exception(state_42661__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (17)))
{var inst_42614 = (state_42661[(10)]);var inst_42623 = cljs.core.first(inst_42614);var inst_42624 = cljs.core.async.muxch_STAR_(inst_42623);var inst_42625 = cljs.core.async.close_BANG_(inst_42624);var inst_42626 = cljs.core.next(inst_42614);var inst_42600 = inst_42626;var inst_42601 = null;var inst_42602 = (0);var inst_42603 = (0);var state_42661__$1 = (function (){var statearr_42679 = state_42661;(statearr_42679[(12)] = inst_42600);
(statearr_42679[(13)] = inst_42603);
(statearr_42679[(14)] = inst_42625);
(statearr_42679[(15)] = inst_42602);
(statearr_42679[(16)] = inst_42601);
return statearr_42679;
})();var statearr_42680_42723 = state_42661__$1;(statearr_42680_42723[(2)] = null);
(statearr_42680_42723[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (3)))
{var inst_42659 = (state_42661[(2)]);var state_42661__$1 = state_42661;return cljs.core.async.impl.ioc_helpers.return_chan(state_42661__$1,inst_42659);
} else
{if((state_val_42662 === (12)))
{var inst_42634 = (state_42661[(2)]);var state_42661__$1 = state_42661;var statearr_42681_42724 = state_42661__$1;(statearr_42681_42724[(2)] = inst_42634);
(statearr_42681_42724[(1)] = (9));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (2)))
{var state_42661__$1 = state_42661;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42661__$1,(4),ch);
} else
{if((state_val_42662 === (23)))
{var inst_42638 = (state_42661[(11)]);var inst_42642 = (state_42661[(2)]);var inst_42643 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42638);var state_42661__$1 = (function (){var statearr_42682 = state_42661;(statearr_42682[(17)] = inst_42642);
return statearr_42682;
})();var statearr_42683_42725 = state_42661__$1;(statearr_42683_42725[(2)] = inst_42643);
cljs.core.async.impl.ioc_helpers.process_exception(state_42661__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (19)))
{var state_42661__$1 = state_42661;var statearr_42684_42726 = state_42661__$1;(statearr_42684_42726[(2)] = null);
(statearr_42684_42726[(1)] = (24));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (11)))
{var inst_42600 = (state_42661[(12)]);var inst_42614 = (state_42661[(10)]);var inst_42614__$1 = cljs.core.seq(inst_42600);var state_42661__$1 = (function (){var statearr_42685 = state_42661;(statearr_42685[(10)] = inst_42614__$1);
return statearr_42685;
})();if(inst_42614__$1)
{var statearr_42686_42727 = state_42661__$1;(statearr_42686_42727[(1)] = (13));
} else
{var statearr_42687_42728 = state_42661__$1;(statearr_42687_42728[(1)] = (14));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (9)))
{var inst_42636 = (state_42661[(2)]);var state_42661__$1 = state_42661;var statearr_42688_42729 = state_42661__$1;(statearr_42688_42729[(2)] = inst_42636);
(statearr_42688_42729[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (5)))
{var inst_42597 = cljs.core.deref(mults);var inst_42598 = cljs.core.vals(inst_42597);var inst_42599 = cljs.core.seq(inst_42598);var inst_42600 = inst_42599;var inst_42601 = null;var inst_42602 = (0);var inst_42603 = (0);var state_42661__$1 = (function (){var statearr_42689 = state_42661;(statearr_42689[(12)] = inst_42600);
(statearr_42689[(13)] = inst_42603);
(statearr_42689[(15)] = inst_42602);
(statearr_42689[(16)] = inst_42601);
return statearr_42689;
})();var statearr_42690_42730 = state_42661__$1;(statearr_42690_42730[(2)] = null);
(statearr_42690_42730[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (14)))
{var state_42661__$1 = state_42661;var statearr_42694_42731 = state_42661__$1;(statearr_42694_42731[(2)] = null);
(statearr_42694_42731[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (16)))
{var inst_42614 = (state_42661[(10)]);var inst_42618 = cljs.core.chunk_first(inst_42614);var inst_42619 = cljs.core.chunk_rest(inst_42614);var inst_42620 = cljs.core.count(inst_42618);var inst_42600 = inst_42619;var inst_42601 = inst_42618;var inst_42602 = inst_42620;var inst_42603 = (0);var state_42661__$1 = (function (){var statearr_42695 = state_42661;(statearr_42695[(12)] = inst_42600);
(statearr_42695[(13)] = inst_42603);
(statearr_42695[(15)] = inst_42602);
(statearr_42695[(16)] = inst_42601);
return statearr_42695;
})();var statearr_42696_42732 = state_42661__$1;(statearr_42696_42732[(2)] = null);
(statearr_42696_42732[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (10)))
{var inst_42600 = (state_42661[(12)]);var inst_42603 = (state_42661[(13)]);var inst_42602 = (state_42661[(15)]);var inst_42601 = (state_42661[(16)]);var inst_42608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42601,inst_42603);var inst_42609 = cljs.core.async.muxch_STAR_(inst_42608);var inst_42610 = cljs.core.async.close_BANG_(inst_42609);var inst_42611 = (inst_42603 + (1));var tmp42691 = inst_42600;var tmp42692 = inst_42602;var tmp42693 = inst_42601;var inst_42600__$1 = tmp42691;var inst_42601__$1 = tmp42693;var inst_42602__$1 = tmp42692;var inst_42603__$1 = inst_42611;var state_42661__$1 = (function (){var statearr_42697 = state_42661;(statearr_42697[(12)] = inst_42600__$1);
(statearr_42697[(13)] = inst_42603__$1);
(statearr_42697[(18)] = inst_42610);
(statearr_42697[(15)] = inst_42602__$1);
(statearr_42697[(16)] = inst_42601__$1);
return statearr_42697;
})();var statearr_42698_42733 = state_42661__$1;(statearr_42698_42733[(2)] = null);
(statearr_42698_42733[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (18)))
{var inst_42629 = (state_42661[(2)]);var state_42661__$1 = state_42661;var statearr_42699_42734 = state_42661__$1;(statearr_42699_42734[(2)] = inst_42629);
(statearr_42699_42734[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42662 === (8)))
{var inst_42603 = (state_42661[(13)]);var inst_42602 = (state_42661[(15)]);var inst_42605 = (inst_42603 < inst_42602);var inst_42606 = inst_42605;var state_42661__$1 = state_42661;if(cljs.core.truth_(inst_42606))
{var statearr_42700_42735 = state_42661__$1;(statearr_42700_42735[(1)] = (10));
} else
{var statearr_42701_42736 = state_42661__$1;(statearr_42701_42736[(1)] = (11));
}
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___42709,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___42709,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42705[(0)] = state_machine__5679__auto__);
(statearr_42705[(1)] = (1));
return statearr_42705;
});
var state_machine__5679__auto____1 = (function (state_42661){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42661);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42706){if((e42706 instanceof Object))
{var ex__5682__auto__ = e42706;var statearr_42707_42737 = state_42661;(statearr_42707_42737[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42661);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__42738 = state_42661;
state_42661 = G__42738;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42661){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42709,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_42708 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42709);
return statearr_42708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42709,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5693__auto___42875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42845){var state_val_42846 = (state_42845[(1)]);if((state_val_42846 === (7)))
{var state_42845__$1 = state_42845;var statearr_42847_42876 = state_42845__$1;(statearr_42847_42876[(2)] = null);
(statearr_42847_42876[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (1)))
{var state_42845__$1 = state_42845;var statearr_42848_42877 = state_42845__$1;(statearr_42848_42877[(2)] = null);
(statearr_42848_42877[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (4)))
{var inst_42809 = (state_42845[(7)]);var inst_42811 = (inst_42809 < cnt);var state_42845__$1 = state_42845;if(cljs.core.truth_(inst_42811))
{var statearr_42849_42878 = state_42845__$1;(statearr_42849_42878[(1)] = (6));
} else
{var statearr_42850_42879 = state_42845__$1;(statearr_42850_42879[(1)] = (7));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (15)))
{var inst_42841 = (state_42845[(2)]);var state_42845__$1 = state_42845;var statearr_42851_42880 = state_42845__$1;(statearr_42851_42880[(2)] = inst_42841);
(statearr_42851_42880[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (13)))
{var inst_42834 = cljs.core.async.close_BANG_(out);var state_42845__$1 = state_42845;var statearr_42852_42881 = state_42845__$1;(statearr_42852_42881[(2)] = inst_42834);
(statearr_42852_42881[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (6)))
{var state_42845__$1 = state_42845;var statearr_42853_42882 = state_42845__$1;(statearr_42853_42882[(2)] = null);
(statearr_42853_42882[(1)] = (11));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (3)))
{var inst_42843 = (state_42845[(2)]);var state_42845__$1 = state_42845;return cljs.core.async.impl.ioc_helpers.return_chan(state_42845__$1,inst_42843);
} else
{if((state_val_42846 === (12)))
{var inst_42831 = (state_42845[(8)]);var inst_42831__$1 = (state_42845[(2)]);var inst_42832 = cljs.core.some(cljs.core.nil_QMARK_,inst_42831__$1);var state_42845__$1 = (function (){var statearr_42854 = state_42845;(statearr_42854[(8)] = inst_42831__$1);
return statearr_42854;
})();if(cljs.core.truth_(inst_42832))
{var statearr_42855_42883 = state_42845__$1;(statearr_42855_42883[(1)] = (13));
} else
{var statearr_42856_42884 = state_42845__$1;(statearr_42856_42884[(1)] = (14));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (2)))
{var inst_42808 = cljs.core.reset_BANG_(dctr,cnt);var inst_42809 = (0);var state_42845__$1 = (function (){var statearr_42857 = state_42845;(statearr_42857[(9)] = inst_42808);
(statearr_42857[(7)] = inst_42809);
return statearr_42857;
})();var statearr_42858_42885 = state_42845__$1;(statearr_42858_42885[(2)] = null);
(statearr_42858_42885[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (11)))
{var inst_42809 = (state_42845[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42845,(10),Object,null,(9));var inst_42818 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42809) : chs__$1.call(null,inst_42809));var inst_42819 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42809) : done.call(null,inst_42809));var inst_42820 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42818,inst_42819);var state_42845__$1 = state_42845;var statearr_42859_42886 = state_42845__$1;(statearr_42859_42886[(2)] = inst_42820);
cljs.core.async.impl.ioc_helpers.process_exception(state_42845__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (9)))
{var inst_42809 = (state_42845[(7)]);var inst_42822 = (state_42845[(2)]);var inst_42823 = (inst_42809 + (1));var inst_42809__$1 = inst_42823;var state_42845__$1 = (function (){var statearr_42860 = state_42845;(statearr_42860[(10)] = inst_42822);
(statearr_42860[(7)] = inst_42809__$1);
return statearr_42860;
})();var statearr_42861_42887 = state_42845__$1;(statearr_42861_42887[(2)] = null);
(statearr_42861_42887[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (5)))
{var inst_42829 = (state_42845[(2)]);var state_42845__$1 = (function (){var statearr_42862 = state_42845;(statearr_42862[(11)] = inst_42829);
return statearr_42862;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42845__$1,(12),dchan);
} else
{if((state_val_42846 === (14)))
{var inst_42831 = (state_42845[(8)]);var inst_42836 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42831);var state_42845__$1 = state_42845;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42845__$1,(16),out,inst_42836);
} else
{if((state_val_42846 === (16)))
{var inst_42838 = (state_42845[(2)]);var state_42845__$1 = (function (){var statearr_42863 = state_42845;(statearr_42863[(12)] = inst_42838);
return statearr_42863;
})();var statearr_42864_42888 = state_42845__$1;(statearr_42864_42888[(2)] = null);
(statearr_42864_42888[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (10)))
{var inst_42813 = (state_42845[(2)]);var inst_42814 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_42845__$1 = (function (){var statearr_42865 = state_42845;(statearr_42865[(13)] = inst_42813);
return statearr_42865;
})();var statearr_42866_42889 = state_42845__$1;(statearr_42866_42889[(2)] = inst_42814);
cljs.core.async.impl.ioc_helpers.process_exception(state_42845__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42846 === (8)))
{var inst_42827 = (state_42845[(2)]);var state_42845__$1 = state_42845;var statearr_42867_42890 = state_42845__$1;(statearr_42867_42890[(2)] = inst_42827);
(statearr_42867_42890[(1)] = (5));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___42875,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___42875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42871[(0)] = state_machine__5679__auto__);
(statearr_42871[(1)] = (1));
return statearr_42871;
});
var state_machine__5679__auto____1 = (function (state_42845){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42845);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42872){if((e42872 instanceof Object))
{var ex__5682__auto__ = e42872;var statearr_42873_42891 = state_42845;(statearr_42873_42891[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42845);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__42892 = state_42845;
state_42845 = G__42892;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42845){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42875,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_42874 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42875);
return statearr_42874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42875,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___43000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___43000,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___43000,out){
return (function (state_42976){var state_val_42977 = (state_42976[(1)]);if((state_val_42977 === (7)))
{var inst_42956 = (state_42976[(7)]);var inst_42955 = (state_42976[(8)]);var inst_42955__$1 = (state_42976[(2)]);var inst_42956__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42955__$1,(0),null);var inst_42957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42955__$1,(1),null);var inst_42958 = (inst_42956__$1 == null);var state_42976__$1 = (function (){var statearr_42978 = state_42976;(statearr_42978[(9)] = inst_42957);
(statearr_42978[(7)] = inst_42956__$1);
(statearr_42978[(8)] = inst_42955__$1);
return statearr_42978;
})();if(cljs.core.truth_(inst_42958))
{var statearr_42979_43001 = state_42976__$1;(statearr_42979_43001[(1)] = (8));
} else
{var statearr_42980_43002 = state_42976__$1;(statearr_42980_43002[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42977 === (1)))
{var inst_42947 = cljs.core.vec(chs);var inst_42948 = inst_42947;var state_42976__$1 = (function (){var statearr_42981 = state_42976;(statearr_42981[(10)] = inst_42948);
return statearr_42981;
})();var statearr_42982_43003 = state_42976__$1;(statearr_42982_43003[(2)] = null);
(statearr_42982_43003[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42977 === (4)))
{var inst_42948 = (state_42976[(10)]);var state_42976__$1 = state_42976;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_42976__$1,(7),inst_42948);
} else
{if((state_val_42977 === (6)))
{var inst_42972 = (state_42976[(2)]);var state_42976__$1 = state_42976;var statearr_42983_43004 = state_42976__$1;(statearr_42983_43004[(2)] = inst_42972);
(statearr_42983_43004[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42977 === (3)))
{var inst_42974 = (state_42976[(2)]);var state_42976__$1 = state_42976;return cljs.core.async.impl.ioc_helpers.return_chan(state_42976__$1,inst_42974);
} else
{if((state_val_42977 === (2)))
{var inst_42948 = (state_42976[(10)]);var inst_42950 = cljs.core.count(inst_42948);var inst_42951 = (inst_42950 > (0));var state_42976__$1 = state_42976;if(cljs.core.truth_(inst_42951))
{var statearr_42985_43005 = state_42976__$1;(statearr_42985_43005[(1)] = (4));
} else
{var statearr_42986_43006 = state_42976__$1;(statearr_42986_43006[(1)] = (5));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42977 === (11)))
{var inst_42948 = (state_42976[(10)]);var inst_42965 = (state_42976[(2)]);var tmp42984 = inst_42948;var inst_42948__$1 = tmp42984;var state_42976__$1 = (function (){var statearr_42987 = state_42976;(statearr_42987[(11)] = inst_42965);
(statearr_42987[(10)] = inst_42948__$1);
return statearr_42987;
})();var statearr_42988_43007 = state_42976__$1;(statearr_42988_43007[(2)] = null);
(statearr_42988_43007[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42977 === (9)))
{var inst_42956 = (state_42976[(7)]);var state_42976__$1 = state_42976;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42976__$1,(11),out,inst_42956);
} else
{if((state_val_42977 === (5)))
{var inst_42970 = cljs.core.async.close_BANG_(out);var state_42976__$1 = state_42976;var statearr_42989_43008 = state_42976__$1;(statearr_42989_43008[(2)] = inst_42970);
(statearr_42989_43008[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42977 === (10)))
{var inst_42968 = (state_42976[(2)]);var state_42976__$1 = state_42976;var statearr_42990_43009 = state_42976__$1;(statearr_42990_43009[(2)] = inst_42968);
(statearr_42990_43009[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42977 === (8)))
{var inst_42957 = (state_42976[(9)]);var inst_42956 = (state_42976[(7)]);var inst_42955 = (state_42976[(8)]);var inst_42948 = (state_42976[(10)]);var inst_42960 = (function (){var c = inst_42957;var v = inst_42956;var vec__42953 = inst_42955;var cs = inst_42948;return ((function (c,v,vec__42953,cs,inst_42957,inst_42956,inst_42955,inst_42948,state_val_42977,c__5693__auto___43000,out){
return (function (p1__42893_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42893_SHARP_);
});
;})(c,v,vec__42953,cs,inst_42957,inst_42956,inst_42955,inst_42948,state_val_42977,c__5693__auto___43000,out))
})();var inst_42961 = cljs.core.filterv(inst_42960,inst_42948);var inst_42948__$1 = inst_42961;var state_42976__$1 = (function (){var statearr_42991 = state_42976;(statearr_42991[(10)] = inst_42948__$1);
return statearr_42991;
})();var statearr_42992_43010 = state_42976__$1;(statearr_42992_43010[(2)] = null);
(statearr_42992_43010[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___43000,out))
;return ((function (switch__5678__auto__,c__5693__auto___43000,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42996 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42996[(0)] = state_machine__5679__auto__);
(statearr_42996[(1)] = (1));
return statearr_42996;
});
var state_machine__5679__auto____1 = (function (state_42976){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42976);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42997){if((e42997 instanceof Object))
{var ex__5682__auto__ = e42997;var statearr_42998_43011 = state_42976;(statearr_42998_43011[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42976);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__43012 = state_42976;
state_42976 = G__43012;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42976){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___43000,out))
})();var state__5695__auto__ = (function (){var statearr_42999 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___43000);
return statearr_42999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___43000,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___43105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___43105,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___43105,out){
return (function (state_43082){var state_val_43083 = (state_43082[(1)]);if((state_val_43083 === (7)))
{var inst_43064 = (state_43082[(7)]);var inst_43064__$1 = (state_43082[(2)]);var inst_43065 = (inst_43064__$1 == null);var inst_43066 = cljs.core.not(inst_43065);var state_43082__$1 = (function (){var statearr_43084 = state_43082;(statearr_43084[(7)] = inst_43064__$1);
return statearr_43084;
})();if(inst_43066)
{var statearr_43085_43106 = state_43082__$1;(statearr_43085_43106[(1)] = (8));
} else
{var statearr_43086_43107 = state_43082__$1;(statearr_43086_43107[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43083 === (1)))
{var inst_43059 = (0);var state_43082__$1 = (function (){var statearr_43087 = state_43082;(statearr_43087[(8)] = inst_43059);
return statearr_43087;
})();var statearr_43088_43108 = state_43082__$1;(statearr_43088_43108[(2)] = null);
(statearr_43088_43108[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43083 === (4)))
{var state_43082__$1 = state_43082;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43082__$1,(7),ch);
} else
{if((state_val_43083 === (6)))
{var inst_43077 = (state_43082[(2)]);var state_43082__$1 = state_43082;var statearr_43089_43109 = state_43082__$1;(statearr_43089_43109[(2)] = inst_43077);
(statearr_43089_43109[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43083 === (3)))
{var inst_43079 = (state_43082[(2)]);var inst_43080 = cljs.core.async.close_BANG_(out);var state_43082__$1 = (function (){var statearr_43090 = state_43082;(statearr_43090[(9)] = inst_43079);
return statearr_43090;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_43082__$1,inst_43080);
} else
{if((state_val_43083 === (2)))
{var inst_43059 = (state_43082[(8)]);var inst_43061 = (inst_43059 < n);var state_43082__$1 = state_43082;if(cljs.core.truth_(inst_43061))
{var statearr_43091_43110 = state_43082__$1;(statearr_43091_43110[(1)] = (4));
} else
{var statearr_43092_43111 = state_43082__$1;(statearr_43092_43111[(1)] = (5));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43083 === (11)))
{var inst_43059 = (state_43082[(8)]);var inst_43069 = (state_43082[(2)]);var inst_43070 = (inst_43059 + (1));var inst_43059__$1 = inst_43070;var state_43082__$1 = (function (){var statearr_43093 = state_43082;(statearr_43093[(10)] = inst_43069);
(statearr_43093[(8)] = inst_43059__$1);
return statearr_43093;
})();var statearr_43094_43112 = state_43082__$1;(statearr_43094_43112[(2)] = null);
(statearr_43094_43112[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43083 === (9)))
{var state_43082__$1 = state_43082;var statearr_43095_43113 = state_43082__$1;(statearr_43095_43113[(2)] = null);
(statearr_43095_43113[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43083 === (5)))
{var state_43082__$1 = state_43082;var statearr_43096_43114 = state_43082__$1;(statearr_43096_43114[(2)] = null);
(statearr_43096_43114[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43083 === (10)))
{var inst_43074 = (state_43082[(2)]);var state_43082__$1 = state_43082;var statearr_43097_43115 = state_43082__$1;(statearr_43097_43115[(2)] = inst_43074);
(statearr_43097_43115[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43083 === (8)))
{var inst_43064 = (state_43082[(7)]);var state_43082__$1 = state_43082;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43082__$1,(11),out,inst_43064);
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
});})(c__5693__auto___43105,out))
;return ((function (switch__5678__auto__,c__5693__auto___43105,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43101 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43101[(0)] = state_machine__5679__auto__);
(statearr_43101[(1)] = (1));
return statearr_43101;
});
var state_machine__5679__auto____1 = (function (state_43082){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_43082);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43102){if((e43102 instanceof Object))
{var ex__5682__auto__ = e43102;var statearr_43103_43116 = state_43082;(statearr_43103_43116[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43082);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e43102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__43117 = state_43082;
state_43082 = G__43117;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43082){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___43105,out))
})();var state__5695__auto__ = (function (){var statearr_43104 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_43104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___43105);
return statearr_43104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___43105,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___43214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___43214,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___43214,out){
return (function (state_43189){var state_val_43190 = (state_43189[(1)]);if((state_val_43190 === (7)))
{var inst_43184 = (state_43189[(2)]);var state_43189__$1 = state_43189;var statearr_43191_43215 = state_43189__$1;(statearr_43191_43215[(2)] = inst_43184);
(statearr_43191_43215[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43190 === (1)))
{var inst_43166 = null;var state_43189__$1 = (function (){var statearr_43192 = state_43189;(statearr_43192[(7)] = inst_43166);
return statearr_43192;
})();var statearr_43193_43216 = state_43189__$1;(statearr_43193_43216[(2)] = null);
(statearr_43193_43216[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43190 === (4)))
{var inst_43169 = (state_43189[(8)]);var inst_43169__$1 = (state_43189[(2)]);var inst_43170 = (inst_43169__$1 == null);var inst_43171 = cljs.core.not(inst_43170);var state_43189__$1 = (function (){var statearr_43194 = state_43189;(statearr_43194[(8)] = inst_43169__$1);
return statearr_43194;
})();if(inst_43171)
{var statearr_43195_43217 = state_43189__$1;(statearr_43195_43217[(1)] = (5));
} else
{var statearr_43196_43218 = state_43189__$1;(statearr_43196_43218[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43190 === (6)))
{var state_43189__$1 = state_43189;var statearr_43197_43219 = state_43189__$1;(statearr_43197_43219[(2)] = null);
(statearr_43197_43219[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43190 === (3)))
{var inst_43186 = (state_43189[(2)]);var inst_43187 = cljs.core.async.close_BANG_(out);var state_43189__$1 = (function (){var statearr_43198 = state_43189;(statearr_43198[(9)] = inst_43186);
return statearr_43198;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_43189__$1,inst_43187);
} else
{if((state_val_43190 === (2)))
{var state_43189__$1 = state_43189;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43189__$1,(4),ch);
} else
{if((state_val_43190 === (11)))
{var inst_43169 = (state_43189[(8)]);var inst_43178 = (state_43189[(2)]);var inst_43166 = inst_43169;var state_43189__$1 = (function (){var statearr_43199 = state_43189;(statearr_43199[(10)] = inst_43178);
(statearr_43199[(7)] = inst_43166);
return statearr_43199;
})();var statearr_43200_43220 = state_43189__$1;(statearr_43200_43220[(2)] = null);
(statearr_43200_43220[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43190 === (9)))
{var inst_43169 = (state_43189[(8)]);var state_43189__$1 = state_43189;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43189__$1,(11),out,inst_43169);
} else
{if((state_val_43190 === (5)))
{var inst_43169 = (state_43189[(8)]);var inst_43166 = (state_43189[(7)]);var inst_43173 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43169,inst_43166);var state_43189__$1 = state_43189;if(inst_43173)
{var statearr_43202_43221 = state_43189__$1;(statearr_43202_43221[(1)] = (8));
} else
{var statearr_43203_43222 = state_43189__$1;(statearr_43203_43222[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43190 === (10)))
{var inst_43181 = (state_43189[(2)]);var state_43189__$1 = state_43189;var statearr_43204_43223 = state_43189__$1;(statearr_43204_43223[(2)] = inst_43181);
(statearr_43204_43223[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43190 === (8)))
{var inst_43166 = (state_43189[(7)]);var tmp43201 = inst_43166;var inst_43166__$1 = tmp43201;var state_43189__$1 = (function (){var statearr_43205 = state_43189;(statearr_43205[(7)] = inst_43166__$1);
return statearr_43205;
})();var statearr_43206_43224 = state_43189__$1;(statearr_43206_43224[(2)] = null);
(statearr_43206_43224[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___43214,out))
;return ((function (switch__5678__auto__,c__5693__auto___43214,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43210 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43210[(0)] = state_machine__5679__auto__);
(statearr_43210[(1)] = (1));
return statearr_43210;
});
var state_machine__5679__auto____1 = (function (state_43189){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_43189);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43211){if((e43211 instanceof Object))
{var ex__5682__auto__ = e43211;var statearr_43212_43225 = state_43189;(statearr_43212_43225[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43189);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e43211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__43226 = state_43189;
state_43189 = G__43226;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43189){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___43214,out))
})();var state__5695__auto__ = (function (){var statearr_43213 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_43213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___43214);
return statearr_43213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___43214,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___43361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___43361,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___43361,out){
return (function (state_43331){var state_val_43332 = (state_43331[(1)]);if((state_val_43332 === (7)))
{var inst_43327 = (state_43331[(2)]);var state_43331__$1 = state_43331;var statearr_43333_43362 = state_43331__$1;(statearr_43333_43362[(2)] = inst_43327);
(statearr_43333_43362[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (1)))
{var inst_43294 = (new Array(n));var inst_43295 = inst_43294;var inst_43296 = (0);var state_43331__$1 = (function (){var statearr_43334 = state_43331;(statearr_43334[(7)] = inst_43296);
(statearr_43334[(8)] = inst_43295);
return statearr_43334;
})();var statearr_43335_43363 = state_43331__$1;(statearr_43335_43363[(2)] = null);
(statearr_43335_43363[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (4)))
{var inst_43299 = (state_43331[(9)]);var inst_43299__$1 = (state_43331[(2)]);var inst_43300 = (inst_43299__$1 == null);var inst_43301 = cljs.core.not(inst_43300);var state_43331__$1 = (function (){var statearr_43336 = state_43331;(statearr_43336[(9)] = inst_43299__$1);
return statearr_43336;
})();if(inst_43301)
{var statearr_43337_43364 = state_43331__$1;(statearr_43337_43364[(1)] = (5));
} else
{var statearr_43338_43365 = state_43331__$1;(statearr_43338_43365[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (15)))
{var inst_43321 = (state_43331[(2)]);var state_43331__$1 = state_43331;var statearr_43339_43366 = state_43331__$1;(statearr_43339_43366[(2)] = inst_43321);
(statearr_43339_43366[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (13)))
{var state_43331__$1 = state_43331;var statearr_43340_43367 = state_43331__$1;(statearr_43340_43367[(2)] = null);
(statearr_43340_43367[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (6)))
{var inst_43296 = (state_43331[(7)]);var inst_43317 = (inst_43296 > (0));var state_43331__$1 = state_43331;if(cljs.core.truth_(inst_43317))
{var statearr_43341_43368 = state_43331__$1;(statearr_43341_43368[(1)] = (12));
} else
{var statearr_43342_43369 = state_43331__$1;(statearr_43342_43369[(1)] = (13));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (3)))
{var inst_43329 = (state_43331[(2)]);var state_43331__$1 = state_43331;return cljs.core.async.impl.ioc_helpers.return_chan(state_43331__$1,inst_43329);
} else
{if((state_val_43332 === (12)))
{var inst_43295 = (state_43331[(8)]);var inst_43319 = cljs.core.vec(inst_43295);var state_43331__$1 = state_43331;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43331__$1,(15),out,inst_43319);
} else
{if((state_val_43332 === (2)))
{var state_43331__$1 = state_43331;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43331__$1,(4),ch);
} else
{if((state_val_43332 === (11)))
{var inst_43311 = (state_43331[(2)]);var inst_43312 = (new Array(n));var inst_43295 = inst_43312;var inst_43296 = (0);var state_43331__$1 = (function (){var statearr_43343 = state_43331;(statearr_43343[(7)] = inst_43296);
(statearr_43343[(10)] = inst_43311);
(statearr_43343[(8)] = inst_43295);
return statearr_43343;
})();var statearr_43344_43370 = state_43331__$1;(statearr_43344_43370[(2)] = null);
(statearr_43344_43370[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (9)))
{var inst_43295 = (state_43331[(8)]);var inst_43309 = cljs.core.vec(inst_43295);var state_43331__$1 = state_43331;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43331__$1,(11),out,inst_43309);
} else
{if((state_val_43332 === (5)))
{var inst_43299 = (state_43331[(9)]);var inst_43296 = (state_43331[(7)]);var inst_43295 = (state_43331[(8)]);var inst_43304 = (state_43331[(11)]);var inst_43303 = (inst_43295[inst_43296] = inst_43299);var inst_43304__$1 = (inst_43296 + (1));var inst_43305 = (inst_43304__$1 < n);var state_43331__$1 = (function (){var statearr_43345 = state_43331;(statearr_43345[(12)] = inst_43303);
(statearr_43345[(11)] = inst_43304__$1);
return statearr_43345;
})();if(cljs.core.truth_(inst_43305))
{var statearr_43346_43371 = state_43331__$1;(statearr_43346_43371[(1)] = (8));
} else
{var statearr_43347_43372 = state_43331__$1;(statearr_43347_43372[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (14)))
{var inst_43324 = (state_43331[(2)]);var inst_43325 = cljs.core.async.close_BANG_(out);var state_43331__$1 = (function (){var statearr_43349 = state_43331;(statearr_43349[(13)] = inst_43324);
return statearr_43349;
})();var statearr_43350_43373 = state_43331__$1;(statearr_43350_43373[(2)] = inst_43325);
(statearr_43350_43373[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (10)))
{var inst_43315 = (state_43331[(2)]);var state_43331__$1 = state_43331;var statearr_43351_43374 = state_43331__$1;(statearr_43351_43374[(2)] = inst_43315);
(statearr_43351_43374[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43332 === (8)))
{var inst_43295 = (state_43331[(8)]);var inst_43304 = (state_43331[(11)]);var tmp43348 = inst_43295;var inst_43295__$1 = tmp43348;var inst_43296 = inst_43304;var state_43331__$1 = (function (){var statearr_43352 = state_43331;(statearr_43352[(7)] = inst_43296);
(statearr_43352[(8)] = inst_43295__$1);
return statearr_43352;
})();var statearr_43353_43375 = state_43331__$1;(statearr_43353_43375[(2)] = null);
(statearr_43353_43375[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___43361,out))
;return ((function (switch__5678__auto__,c__5693__auto___43361,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43357[(0)] = state_machine__5679__auto__);
(statearr_43357[(1)] = (1));
return statearr_43357;
});
var state_machine__5679__auto____1 = (function (state_43331){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_43331);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43358){if((e43358 instanceof Object))
{var ex__5682__auto__ = e43358;var statearr_43359_43376 = state_43331;(statearr_43359_43376[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43331);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e43358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__43377 = state_43331;
state_43331 = G__43377;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43331){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___43361,out))
})();var state__5695__auto__ = (function (){var statearr_43360 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_43360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___43361);
return statearr_43360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___43361,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___43520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___43520,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___43520,out){
return (function (state_43490){var state_val_43491 = (state_43490[(1)]);if((state_val_43491 === (7)))
{var inst_43486 = (state_43490[(2)]);var state_43490__$1 = state_43490;var statearr_43492_43521 = state_43490__$1;(statearr_43492_43521[(2)] = inst_43486);
(statearr_43492_43521[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (1)))
{var inst_43449 = [];var inst_43450 = inst_43449;var inst_43451 = cljs.core.constant$keyword$786;var state_43490__$1 = (function (){var statearr_43493 = state_43490;(statearr_43493[(7)] = inst_43451);
(statearr_43493[(8)] = inst_43450);
return statearr_43493;
})();var statearr_43494_43522 = state_43490__$1;(statearr_43494_43522[(2)] = null);
(statearr_43494_43522[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (4)))
{var inst_43454 = (state_43490[(9)]);var inst_43454__$1 = (state_43490[(2)]);var inst_43455 = (inst_43454__$1 == null);var inst_43456 = cljs.core.not(inst_43455);var state_43490__$1 = (function (){var statearr_43495 = state_43490;(statearr_43495[(9)] = inst_43454__$1);
return statearr_43495;
})();if(inst_43456)
{var statearr_43496_43523 = state_43490__$1;(statearr_43496_43523[(1)] = (5));
} else
{var statearr_43497_43524 = state_43490__$1;(statearr_43497_43524[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (15)))
{var inst_43480 = (state_43490[(2)]);var state_43490__$1 = state_43490;var statearr_43498_43525 = state_43490__$1;(statearr_43498_43525[(2)] = inst_43480);
(statearr_43498_43525[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (13)))
{var state_43490__$1 = state_43490;var statearr_43499_43526 = state_43490__$1;(statearr_43499_43526[(2)] = null);
(statearr_43499_43526[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (6)))
{var inst_43450 = (state_43490[(8)]);var inst_43475 = inst_43450.length;var inst_43476 = (inst_43475 > (0));var state_43490__$1 = state_43490;if(cljs.core.truth_(inst_43476))
{var statearr_43500_43527 = state_43490__$1;(statearr_43500_43527[(1)] = (12));
} else
{var statearr_43501_43528 = state_43490__$1;(statearr_43501_43528[(1)] = (13));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (3)))
{var inst_43488 = (state_43490[(2)]);var state_43490__$1 = state_43490;return cljs.core.async.impl.ioc_helpers.return_chan(state_43490__$1,inst_43488);
} else
{if((state_val_43491 === (12)))
{var inst_43450 = (state_43490[(8)]);var inst_43478 = cljs.core.vec(inst_43450);var state_43490__$1 = state_43490;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43490__$1,(15),out,inst_43478);
} else
{if((state_val_43491 === (2)))
{var state_43490__$1 = state_43490;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43490__$1,(4),ch);
} else
{if((state_val_43491 === (11)))
{var inst_43458 = (state_43490[(10)]);var inst_43454 = (state_43490[(9)]);var inst_43468 = (state_43490[(2)]);var inst_43469 = [];var inst_43470 = inst_43469.push(inst_43454);var inst_43450 = inst_43469;var inst_43451 = inst_43458;var state_43490__$1 = (function (){var statearr_43502 = state_43490;(statearr_43502[(11)] = inst_43470);
(statearr_43502[(12)] = inst_43468);
(statearr_43502[(7)] = inst_43451);
(statearr_43502[(8)] = inst_43450);
return statearr_43502;
})();var statearr_43503_43529 = state_43490__$1;(statearr_43503_43529[(2)] = null);
(statearr_43503_43529[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (9)))
{var inst_43450 = (state_43490[(8)]);var inst_43466 = cljs.core.vec(inst_43450);var state_43490__$1 = state_43490;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43490__$1,(11),out,inst_43466);
} else
{if((state_val_43491 === (5)))
{var inst_43458 = (state_43490[(10)]);var inst_43454 = (state_43490[(9)]);var inst_43451 = (state_43490[(7)]);var inst_43458__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43454) : f.call(null,inst_43454));var inst_43459 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43458__$1,inst_43451);var inst_43460 = cljs.core.keyword_identical_QMARK_(inst_43451,cljs.core.constant$keyword$786);var inst_43461 = (inst_43459) || (inst_43460);var state_43490__$1 = (function (){var statearr_43504 = state_43490;(statearr_43504[(10)] = inst_43458__$1);
return statearr_43504;
})();if(cljs.core.truth_(inst_43461))
{var statearr_43505_43530 = state_43490__$1;(statearr_43505_43530[(1)] = (8));
} else
{var statearr_43506_43531 = state_43490__$1;(statearr_43506_43531[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (14)))
{var inst_43483 = (state_43490[(2)]);var inst_43484 = cljs.core.async.close_BANG_(out);var state_43490__$1 = (function (){var statearr_43508 = state_43490;(statearr_43508[(13)] = inst_43483);
return statearr_43508;
})();var statearr_43509_43532 = state_43490__$1;(statearr_43509_43532[(2)] = inst_43484);
(statearr_43509_43532[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (10)))
{var inst_43473 = (state_43490[(2)]);var state_43490__$1 = state_43490;var statearr_43510_43533 = state_43490__$1;(statearr_43510_43533[(2)] = inst_43473);
(statearr_43510_43533[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43491 === (8)))
{var inst_43458 = (state_43490[(10)]);var inst_43454 = (state_43490[(9)]);var inst_43450 = (state_43490[(8)]);var inst_43463 = inst_43450.push(inst_43454);var tmp43507 = inst_43450;var inst_43450__$1 = tmp43507;var inst_43451 = inst_43458;var state_43490__$1 = (function (){var statearr_43511 = state_43490;(statearr_43511[(7)] = inst_43451);
(statearr_43511[(8)] = inst_43450__$1);
(statearr_43511[(14)] = inst_43463);
return statearr_43511;
})();var statearr_43512_43534 = state_43490__$1;(statearr_43512_43534[(2)] = null);
(statearr_43512_43534[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___43520,out))
;return ((function (switch__5678__auto__,c__5693__auto___43520,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43516[(0)] = state_machine__5679__auto__);
(statearr_43516[(1)] = (1));
return statearr_43516;
});
var state_machine__5679__auto____1 = (function (state_43490){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_43490);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43517){if((e43517 instanceof Object))
{var ex__5682__auto__ = e43517;var statearr_43518_43535 = state_43490;(statearr_43518_43535[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43490);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e43517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__43536 = state_43490;
state_43490 = G__43536;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43490){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___43520,out))
})();var state__5695__auto__ = (function (){var statearr_43519 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_43519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___43520);
return statearr_43519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___43520,out))
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
