// Compiled by ClojureScript 0.0-2227
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t36544 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36544 = (function (f,fn_handler,meta36545){
this.f = f;
this.fn_handler = fn_handler;
this.meta36545 = meta36545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36544.cljs$lang$type = true;
cljs.core.async.t36544.cljs$lang$ctorStr = "cljs.core.async/t36544";
cljs.core.async.t36544.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36544");
});
cljs.core.async.t36544.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t36544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t36544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36546){var self__ = this;
var _36546__$1 = this;return self__.meta36545;
});
cljs.core.async.t36544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36546,meta36545__$1){var self__ = this;
var _36546__$1 = this;return (new cljs.core.async.t36544(self__.f,self__.fn_handler,meta36545__$1));
});
cljs.core.async.__GT_t36544 = (function __GT_t36544(f__$1,fn_handler__$1,meta36545){return (new cljs.core.async.t36544(f__$1,fn_handler__$1,meta36545));
});
}
return (new cljs.core.async.t36544(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__36548 = buff;if(G__36548)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__36548.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__36548.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36548);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36548);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
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
{var val_36549 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36549) : fn1.call(null,val_36549));
} else
{cljs.core.async.impl.dispatch.run(((function (val_36549,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36549) : fn1.call(null,val_36549));
});})(val_36549,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3527__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4395__auto___36550 = n;var x_36551 = 0;while(true){
if((x_36551 < n__4395__auto___36550))
{(a[x_36551] = 0);
{
var G__36552 = (x_36551 + 1);
x_36551 = G__36552;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__36553 = (i + 1);
i = G__36553;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t36557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36557 = (function (flag,alt_flag,meta36558){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36558 = meta36558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36557.cljs$lang$type = true;
cljs.core.async.t36557.cljs$lang$ctorStr = "cljs.core.async/t36557";
cljs.core.async.t36557.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36557");
});})(flag))
;
cljs.core.async.t36557.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t36557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t36557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36559){var self__ = this;
var _36559__$1 = this;return self__.meta36558;
});})(flag))
;
cljs.core.async.t36557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36559,meta36558__$1){var self__ = this;
var _36559__$1 = this;return (new cljs.core.async.t36557(self__.flag,self__.alt_flag,meta36558__$1));
});})(flag))
;
cljs.core.async.__GT_t36557 = ((function (flag){
return (function __GT_t36557(flag__$1,alt_flag__$1,meta36558){return (new cljs.core.async.t36557(flag__$1,alt_flag__$1,meta36558));
});})(flag))
;
}
return (new cljs.core.async.t36557(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t36563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36563 = (function (cb,flag,alt_handler,meta36564){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36564 = meta36564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36563.cljs$lang$type = true;
cljs.core.async.t36563.cljs$lang$ctorStr = "cljs.core.async/t36563";
cljs.core.async.t36563.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36563");
});
cljs.core.async.t36563.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t36563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t36563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36565){var self__ = this;
var _36565__$1 = this;return self__.meta36564;
});
cljs.core.async.t36563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36565,meta36564__$1){var self__ = this;
var _36565__$1 = this;return (new cljs.core.async.t36563(self__.cb,self__.flag,self__.alt_handler,meta36564__$1));
});
cljs.core.async.__GT_t36563 = (function __GT_t36563(cb__$1,flag__$1,alt_handler__$1,meta36564){return (new cljs.core.async.t36563(cb__$1,flag__$1,alt_handler__$1,meta36564));
});
}
return (new cljs.core.async.t36563(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$595.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36566_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36566_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36566_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3539__auto__ = wport;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__36567 = (i + 1);
i = G__36567;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3539__auto__ = ret;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$579))
{var temp__4126__auto__ = (function (){var and__3527__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3527__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3527__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$579.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$579], null));
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
var alts_BANG___delegate = function (ports,p__36568){var map__36570 = p__36568;var map__36570__$1 = ((cljs.core.seq_QMARK_(map__36570))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36570):map__36570);var opts = map__36570__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__36568 = null;if (arguments.length > 1) {
  p__36568 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__36568);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36571){
var ports = cljs.core.first(arglist__36571);
var p__36568 = cljs.core.rest(arglist__36571);
return alts_BANG___delegate(ports,p__36568);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36579 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36579 = (function (ch,f,map_LT_,meta36580){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36580 = meta36580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36579.cljs$lang$type = true;
cljs.core.async.t36579.cljs$lang$ctorStr = "cljs.core.async/t36579";
cljs.core.async.t36579.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36579");
});
cljs.core.async.t36579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t36579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t36582 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36582 = (function (fn1,_,meta36580,ch,f,map_LT_,meta36583){
this.fn1 = fn1;
this._ = _;
this.meta36580 = meta36580;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36583 = meta36583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36582.cljs$lang$type = true;
cljs.core.async.t36582.cljs$lang$ctorStr = "cljs.core.async/t36582";
cljs.core.async.t36582.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36582");
});})(___$1))
;
cljs.core.async.t36582.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t36582.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t36582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__36572_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__36572_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36572_SHARP_) : self__.f.call(null,p1__36572_SHARP_)))) : f1.call(null,(((p1__36572_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36572_SHARP_) : self__.f.call(null,p1__36572_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t36582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36584){var self__ = this;
var _36584__$1 = this;return self__.meta36583;
});})(___$1))
;
cljs.core.async.t36582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36584,meta36583__$1){var self__ = this;
var _36584__$1 = this;return (new cljs.core.async.t36582(self__.fn1,self__._,self__.meta36580,self__.ch,self__.f,self__.map_LT_,meta36583__$1));
});})(___$1))
;
cljs.core.async.__GT_t36582 = ((function (___$1){
return (function __GT_t36582(fn1__$1,___$2,meta36580__$1,ch__$2,f__$2,map_LT___$2,meta36583){return (new cljs.core.async.t36582(fn1__$1,___$2,meta36580__$1,ch__$2,f__$2,map_LT___$2,meta36583));
});})(___$1))
;
}
return (new cljs.core.async.t36582(fn1,___$1,self__.meta36580,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t36579.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36581){var self__ = this;
var _36581__$1 = this;return self__.meta36580;
});
cljs.core.async.t36579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36581,meta36580__$1){var self__ = this;
var _36581__$1 = this;return (new cljs.core.async.t36579(self__.ch,self__.f,self__.map_LT_,meta36580__$1));
});
cljs.core.async.__GT_t36579 = (function __GT_t36579(ch__$1,f__$1,map_LT___$1,meta36580){return (new cljs.core.async.t36579(ch__$1,f__$1,map_LT___$1,meta36580));
});
}
return (new cljs.core.async.t36579(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36588 = (function (ch,f,map_GT_,meta36589){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36589 = meta36589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36588.cljs$lang$type = true;
cljs.core.async.t36588.cljs$lang$ctorStr = "cljs.core.async/t36588";
cljs.core.async.t36588.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36588");
});
cljs.core.async.t36588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t36588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36588.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36590){var self__ = this;
var _36590__$1 = this;return self__.meta36589;
});
cljs.core.async.t36588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36590,meta36589__$1){var self__ = this;
var _36590__$1 = this;return (new cljs.core.async.t36588(self__.ch,self__.f,self__.map_GT_,meta36589__$1));
});
cljs.core.async.__GT_t36588 = (function __GT_t36588(ch__$1,f__$1,map_GT___$1,meta36589){return (new cljs.core.async.t36588(ch__$1,f__$1,map_GT___$1,meta36589));
});
}
return (new cljs.core.async.t36588(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36594 = (function (ch,p,filter_GT_,meta36595){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36595 = meta36595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36594.cljs$lang$type = true;
cljs.core.async.t36594.cljs$lang$ctorStr = "cljs.core.async/t36594";
cljs.core.async.t36594.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36594");
});
cljs.core.async.t36594.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t36594.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36594.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36596){var self__ = this;
var _36596__$1 = this;return self__.meta36595;
});
cljs.core.async.t36594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36596,meta36595__$1){var self__ = this;
var _36596__$1 = this;return (new cljs.core.async.t36594(self__.ch,self__.p,self__.filter_GT_,meta36595__$1));
});
cljs.core.async.__GT_t36594 = (function __GT_t36594(ch__$1,p__$1,filter_GT___$1,meta36595){return (new cljs.core.async.t36594(ch__$1,p__$1,filter_GT___$1,meta36595));
});
}
return (new cljs.core.async.t36594(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___36679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___36679,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___36679,out){
return (function (state_36658){var state_val_36659 = (state_36658[1]);if((state_val_36659 === 7))
{var inst_36654 = (state_36658[2]);var state_36658__$1 = state_36658;var statearr_36660_36680 = state_36658__$1;(statearr_36660_36680[2] = inst_36654);
(statearr_36660_36680[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36659 === 1))
{var state_36658__$1 = state_36658;var statearr_36661_36681 = state_36658__$1;(statearr_36661_36681[2] = null);
(statearr_36661_36681[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36659 === 4))
{var inst_36640 = (state_36658[7]);var inst_36640__$1 = (state_36658[2]);var inst_36641 = (inst_36640__$1 == null);var state_36658__$1 = (function (){var statearr_36662 = state_36658;(statearr_36662[7] = inst_36640__$1);
return statearr_36662;
})();if(cljs.core.truth_(inst_36641))
{var statearr_36663_36682 = state_36658__$1;(statearr_36663_36682[1] = 5);
} else
{var statearr_36664_36683 = state_36658__$1;(statearr_36664_36683[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_36659 === 6))
{var inst_36640 = (state_36658[7]);var inst_36645 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36640) : p.call(null,inst_36640));var state_36658__$1 = state_36658;if(cljs.core.truth_(inst_36645))
{var statearr_36665_36684 = state_36658__$1;(statearr_36665_36684[1] = 8);
} else
{var statearr_36666_36685 = state_36658__$1;(statearr_36666_36685[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_36659 === 3))
{var inst_36656 = (state_36658[2]);var state_36658__$1 = state_36658;return cljs.core.async.impl.ioc_helpers.return_chan(state_36658__$1,inst_36656);
} else
{if((state_val_36659 === 2))
{var state_36658__$1 = state_36658;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36658__$1,4,ch);
} else
{if((state_val_36659 === 11))
{var inst_36648 = (state_36658[2]);var state_36658__$1 = state_36658;var statearr_36667_36686 = state_36658__$1;(statearr_36667_36686[2] = inst_36648);
(statearr_36667_36686[1] = 10);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36659 === 9))
{var state_36658__$1 = state_36658;var statearr_36668_36687 = state_36658__$1;(statearr_36668_36687[2] = null);
(statearr_36668_36687[1] = 10);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36659 === 5))
{var inst_36643 = cljs.core.async.close_BANG_(out);var state_36658__$1 = state_36658;var statearr_36669_36688 = state_36658__$1;(statearr_36669_36688[2] = inst_36643);
(statearr_36669_36688[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36659 === 10))
{var inst_36651 = (state_36658[2]);var state_36658__$1 = (function (){var statearr_36670 = state_36658;(statearr_36670[8] = inst_36651);
return statearr_36670;
})();var statearr_36671_36689 = state_36658__$1;(statearr_36671_36689[2] = null);
(statearr_36671_36689[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36659 === 8))
{var inst_36640 = (state_36658[7]);var state_36658__$1 = state_36658;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36658__$1,11,out,inst_36640);
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
});})(c__5689__auto___36679,out))
;return ((function (switch__5674__auto__,c__5689__auto___36679,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_36675 = [null,null,null,null,null,null,null,null,null];(statearr_36675[0] = state_machine__5675__auto__);
(statearr_36675[1] = 1);
return statearr_36675;
});
var state_machine__5675__auto____1 = (function (state_36658){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_36658);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e36676){if((e36676 instanceof Object))
{var ex__5678__auto__ = e36676;var statearr_36677_36690 = state_36658;(statearr_36677_36690[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36658);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e36676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__36691 = state_36658;
state_36658 = G__36691;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_36658){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_36658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___36679,out))
})();var state__5691__auto__ = (function (){var statearr_36678 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_36678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___36679);
return statearr_36678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___36679,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_36843){var state_val_36844 = (state_36843[1]);if((state_val_36844 === 7))
{var inst_36839 = (state_36843[2]);var state_36843__$1 = state_36843;var statearr_36845_36882 = state_36843__$1;(statearr_36845_36882[2] = inst_36839);
(statearr_36845_36882[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 20))
{var inst_36814 = (state_36843[7]);var inst_36825 = (state_36843[2]);var inst_36826 = cljs.core.next(inst_36814);var inst_36800 = inst_36826;var inst_36801 = null;var inst_36802 = 0;var inst_36803 = 0;var state_36843__$1 = (function (){var statearr_36846 = state_36843;(statearr_36846[8] = inst_36802);
(statearr_36846[9] = inst_36803);
(statearr_36846[10] = inst_36801);
(statearr_36846[11] = inst_36825);
(statearr_36846[12] = inst_36800);
return statearr_36846;
})();var statearr_36847_36883 = state_36843__$1;(statearr_36847_36883[2] = null);
(statearr_36847_36883[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 1))
{var state_36843__$1 = state_36843;var statearr_36848_36884 = state_36843__$1;(statearr_36848_36884[2] = null);
(statearr_36848_36884[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 4))
{var inst_36789 = (state_36843[13]);var inst_36789__$1 = (state_36843[2]);var inst_36790 = (inst_36789__$1 == null);var state_36843__$1 = (function (){var statearr_36852 = state_36843;(statearr_36852[13] = inst_36789__$1);
return statearr_36852;
})();if(cljs.core.truth_(inst_36790))
{var statearr_36853_36885 = state_36843__$1;(statearr_36853_36885[1] = 5);
} else
{var statearr_36854_36886 = state_36843__$1;(statearr_36854_36886[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 15))
{var state_36843__$1 = state_36843;var statearr_36855_36887 = state_36843__$1;(statearr_36855_36887[2] = null);
(statearr_36855_36887[1] = 16);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 13))
{var inst_36802 = (state_36843[8]);var inst_36803 = (state_36843[9]);var inst_36801 = (state_36843[10]);var inst_36800 = (state_36843[12]);var inst_36810 = (state_36843[2]);var inst_36811 = (inst_36803 + 1);var tmp36849 = inst_36802;var tmp36850 = inst_36801;var tmp36851 = inst_36800;var inst_36800__$1 = tmp36851;var inst_36801__$1 = tmp36850;var inst_36802__$1 = tmp36849;var inst_36803__$1 = inst_36811;var state_36843__$1 = (function (){var statearr_36856 = state_36843;(statearr_36856[8] = inst_36802__$1);
(statearr_36856[9] = inst_36803__$1);
(statearr_36856[14] = inst_36810);
(statearr_36856[10] = inst_36801__$1);
(statearr_36856[12] = inst_36800__$1);
return statearr_36856;
})();var statearr_36857_36888 = state_36843__$1;(statearr_36857_36888[2] = null);
(statearr_36857_36888[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 6))
{var inst_36789 = (state_36843[13]);var inst_36794 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36789) : f.call(null,inst_36789));var inst_36799 = cljs.core.seq(inst_36794);var inst_36800 = inst_36799;var inst_36801 = null;var inst_36802 = 0;var inst_36803 = 0;var state_36843__$1 = (function (){var statearr_36858 = state_36843;(statearr_36858[8] = inst_36802);
(statearr_36858[9] = inst_36803);
(statearr_36858[10] = inst_36801);
(statearr_36858[12] = inst_36800);
return statearr_36858;
})();var statearr_36859_36889 = state_36843__$1;(statearr_36859_36889[2] = null);
(statearr_36859_36889[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 17))
{var inst_36814 = (state_36843[7]);var inst_36818 = cljs.core.chunk_first(inst_36814);var inst_36819 = cljs.core.chunk_rest(inst_36814);var inst_36820 = cljs.core.count(inst_36818);var inst_36800 = inst_36819;var inst_36801 = inst_36818;var inst_36802 = inst_36820;var inst_36803 = 0;var state_36843__$1 = (function (){var statearr_36860 = state_36843;(statearr_36860[8] = inst_36802);
(statearr_36860[9] = inst_36803);
(statearr_36860[10] = inst_36801);
(statearr_36860[12] = inst_36800);
return statearr_36860;
})();var statearr_36861_36890 = state_36843__$1;(statearr_36861_36890[2] = null);
(statearr_36861_36890[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 3))
{var inst_36841 = (state_36843[2]);var state_36843__$1 = state_36843;return cljs.core.async.impl.ioc_helpers.return_chan(state_36843__$1,inst_36841);
} else
{if((state_val_36844 === 12))
{var inst_36834 = (state_36843[2]);var state_36843__$1 = state_36843;var statearr_36862_36891 = state_36843__$1;(statearr_36862_36891[2] = inst_36834);
(statearr_36862_36891[1] = 9);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 2))
{var state_36843__$1 = state_36843;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36843__$1,4,in$);
} else
{if((state_val_36844 === 19))
{var inst_36829 = (state_36843[2]);var state_36843__$1 = state_36843;var statearr_36863_36892 = state_36843__$1;(statearr_36863_36892[2] = inst_36829);
(statearr_36863_36892[1] = 16);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 11))
{var inst_36814 = (state_36843[7]);var inst_36800 = (state_36843[12]);var inst_36814__$1 = cljs.core.seq(inst_36800);var state_36843__$1 = (function (){var statearr_36864 = state_36843;(statearr_36864[7] = inst_36814__$1);
return statearr_36864;
})();if(inst_36814__$1)
{var statearr_36865_36893 = state_36843__$1;(statearr_36865_36893[1] = 14);
} else
{var statearr_36866_36894 = state_36843__$1;(statearr_36866_36894[1] = 15);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 9))
{var inst_36836 = (state_36843[2]);var state_36843__$1 = (function (){var statearr_36867 = state_36843;(statearr_36867[15] = inst_36836);
return statearr_36867;
})();var statearr_36868_36895 = state_36843__$1;(statearr_36868_36895[2] = null);
(statearr_36868_36895[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 5))
{var inst_36792 = cljs.core.async.close_BANG_(out);var state_36843__$1 = state_36843;var statearr_36869_36896 = state_36843__$1;(statearr_36869_36896[2] = inst_36792);
(statearr_36869_36896[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 14))
{var inst_36814 = (state_36843[7]);var inst_36816 = cljs.core.chunked_seq_QMARK_(inst_36814);var state_36843__$1 = state_36843;if(inst_36816)
{var statearr_36870_36897 = state_36843__$1;(statearr_36870_36897[1] = 17);
} else
{var statearr_36871_36898 = state_36843__$1;(statearr_36871_36898[1] = 18);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 16))
{var inst_36832 = (state_36843[2]);var state_36843__$1 = state_36843;var statearr_36872_36899 = state_36843__$1;(statearr_36872_36899[2] = inst_36832);
(statearr_36872_36899[1] = 12);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36844 === 10))
{var inst_36803 = (state_36843[9]);var inst_36801 = (state_36843[10]);var inst_36808 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36801,inst_36803);var state_36843__$1 = state_36843;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36843__$1,13,out,inst_36808);
} else
{if((state_val_36844 === 18))
{var inst_36814 = (state_36843[7]);var inst_36823 = cljs.core.first(inst_36814);var state_36843__$1 = state_36843;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36843__$1,20,out,inst_36823);
} else
{if((state_val_36844 === 8))
{var inst_36802 = (state_36843[8]);var inst_36803 = (state_36843[9]);var inst_36805 = (inst_36803 < inst_36802);var inst_36806 = inst_36805;var state_36843__$1 = state_36843;if(cljs.core.truth_(inst_36806))
{var statearr_36873_36900 = state_36843__$1;(statearr_36873_36900[1] = 10);
} else
{var statearr_36874_36901 = state_36843__$1;(statearr_36874_36901[1] = 11);
}
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_36878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36878[0] = state_machine__5675__auto__);
(statearr_36878[1] = 1);
return statearr_36878;
});
var state_machine__5675__auto____1 = (function (state_36843){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_36843);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e36879){if((e36879 instanceof Object))
{var ex__5678__auto__ = e36879;var statearr_36880_36902 = state_36843;(statearr_36880_36902[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36843);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e36879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__36903 = state_36843;
state_36843 = G__36903;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_36843){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_36843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_36881 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_36881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_36881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5689__auto___36984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___36984){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___36984){
return (function (state_36963){var state_val_36964 = (state_36963[1]);if((state_val_36964 === 7))
{var inst_36959 = (state_36963[2]);var state_36963__$1 = state_36963;var statearr_36965_36985 = state_36963__$1;(statearr_36965_36985[2] = inst_36959);
(statearr_36965_36985[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36964 === 1))
{var state_36963__$1 = state_36963;var statearr_36966_36986 = state_36963__$1;(statearr_36966_36986[2] = null);
(statearr_36966_36986[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36964 === 4))
{var inst_36946 = (state_36963[7]);var inst_36946__$1 = (state_36963[2]);var inst_36947 = (inst_36946__$1 == null);var state_36963__$1 = (function (){var statearr_36967 = state_36963;(statearr_36967[7] = inst_36946__$1);
return statearr_36967;
})();if(cljs.core.truth_(inst_36947))
{var statearr_36968_36987 = state_36963__$1;(statearr_36968_36987[1] = 5);
} else
{var statearr_36969_36988 = state_36963__$1;(statearr_36969_36988[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_36964 === 6))
{var inst_36946 = (state_36963[7]);var state_36963__$1 = state_36963;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36963__$1,11,to,inst_36946);
} else
{if((state_val_36964 === 3))
{var inst_36961 = (state_36963[2]);var state_36963__$1 = state_36963;return cljs.core.async.impl.ioc_helpers.return_chan(state_36963__$1,inst_36961);
} else
{if((state_val_36964 === 2))
{var state_36963__$1 = state_36963;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36963__$1,4,from);
} else
{if((state_val_36964 === 11))
{var inst_36956 = (state_36963[2]);var state_36963__$1 = (function (){var statearr_36970 = state_36963;(statearr_36970[8] = inst_36956);
return statearr_36970;
})();var statearr_36971_36989 = state_36963__$1;(statearr_36971_36989[2] = null);
(statearr_36971_36989[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36964 === 9))
{var state_36963__$1 = state_36963;var statearr_36972_36990 = state_36963__$1;(statearr_36972_36990[2] = null);
(statearr_36972_36990[1] = 10);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36964 === 5))
{var state_36963__$1 = state_36963;if(cljs.core.truth_(close_QMARK_))
{var statearr_36973_36991 = state_36963__$1;(statearr_36973_36991[1] = 8);
} else
{var statearr_36974_36992 = state_36963__$1;(statearr_36974_36992[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_36964 === 10))
{var inst_36953 = (state_36963[2]);var state_36963__$1 = state_36963;var statearr_36975_36993 = state_36963__$1;(statearr_36975_36993[2] = inst_36953);
(statearr_36975_36993[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_36964 === 8))
{var inst_36950 = cljs.core.async.close_BANG_(to);var state_36963__$1 = state_36963;var statearr_36976_36994 = state_36963__$1;(statearr_36976_36994[2] = inst_36950);
(statearr_36976_36994[1] = 10);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___36984))
;return ((function (switch__5674__auto__,c__5689__auto___36984){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_36980 = [null,null,null,null,null,null,null,null,null];(statearr_36980[0] = state_machine__5675__auto__);
(statearr_36980[1] = 1);
return statearr_36980;
});
var state_machine__5675__auto____1 = (function (state_36963){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_36963);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e36981){if((e36981 instanceof Object))
{var ex__5678__auto__ = e36981;var statearr_36982_36995 = state_36963;(statearr_36982_36995[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36963);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e36981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__36996 = state_36963;
state_36963 = G__36996;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_36963){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_36963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___36984))
})();var state__5691__auto__ = (function (){var statearr_36983 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_36983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___36984);
return statearr_36983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___36984))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5689__auto___37083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___37083,tc,fc){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___37083,tc,fc){
return (function (state_37061){var state_val_37062 = (state_37061[1]);if((state_val_37062 === 7))
{var inst_37057 = (state_37061[2]);var state_37061__$1 = state_37061;var statearr_37063_37084 = state_37061__$1;(statearr_37063_37084[2] = inst_37057);
(statearr_37063_37084[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37062 === 1))
{var state_37061__$1 = state_37061;var statearr_37064_37085 = state_37061__$1;(statearr_37064_37085[2] = null);
(statearr_37064_37085[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37062 === 4))
{var inst_37042 = (state_37061[7]);var inst_37042__$1 = (state_37061[2]);var inst_37043 = (inst_37042__$1 == null);var state_37061__$1 = (function (){var statearr_37065 = state_37061;(statearr_37065[7] = inst_37042__$1);
return statearr_37065;
})();if(cljs.core.truth_(inst_37043))
{var statearr_37066_37086 = state_37061__$1;(statearr_37066_37086[1] = 5);
} else
{var statearr_37067_37087 = state_37061__$1;(statearr_37067_37087[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37062 === 6))
{var inst_37042 = (state_37061[7]);var inst_37048 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37042) : p.call(null,inst_37042));var state_37061__$1 = state_37061;if(cljs.core.truth_(inst_37048))
{var statearr_37068_37088 = state_37061__$1;(statearr_37068_37088[1] = 9);
} else
{var statearr_37069_37089 = state_37061__$1;(statearr_37069_37089[1] = 10);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37062 === 3))
{var inst_37059 = (state_37061[2]);var state_37061__$1 = state_37061;return cljs.core.async.impl.ioc_helpers.return_chan(state_37061__$1,inst_37059);
} else
{if((state_val_37062 === 2))
{var state_37061__$1 = state_37061;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37061__$1,4,ch);
} else
{if((state_val_37062 === 11))
{var inst_37042 = (state_37061[7]);var inst_37052 = (state_37061[2]);var state_37061__$1 = state_37061;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37061__$1,8,inst_37052,inst_37042);
} else
{if((state_val_37062 === 9))
{var state_37061__$1 = state_37061;var statearr_37070_37090 = state_37061__$1;(statearr_37070_37090[2] = tc);
(statearr_37070_37090[1] = 11);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37062 === 5))
{var inst_37045 = cljs.core.async.close_BANG_(tc);var inst_37046 = cljs.core.async.close_BANG_(fc);var state_37061__$1 = (function (){var statearr_37071 = state_37061;(statearr_37071[8] = inst_37045);
return statearr_37071;
})();var statearr_37072_37091 = state_37061__$1;(statearr_37072_37091[2] = inst_37046);
(statearr_37072_37091[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37062 === 10))
{var state_37061__$1 = state_37061;var statearr_37073_37092 = state_37061__$1;(statearr_37073_37092[2] = fc);
(statearr_37073_37092[1] = 11);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37062 === 8))
{var inst_37054 = (state_37061[2]);var state_37061__$1 = (function (){var statearr_37074 = state_37061;(statearr_37074[9] = inst_37054);
return statearr_37074;
})();var statearr_37075_37093 = state_37061__$1;(statearr_37075_37093[2] = null);
(statearr_37075_37093[1] = 2);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___37083,tc,fc))
;return ((function (switch__5674__auto__,c__5689__auto___37083,tc,fc){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37079 = [null,null,null,null,null,null,null,null,null,null];(statearr_37079[0] = state_machine__5675__auto__);
(statearr_37079[1] = 1);
return statearr_37079;
});
var state_machine__5675__auto____1 = (function (state_37061){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37061);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37080){if((e37080 instanceof Object))
{var ex__5678__auto__ = e37080;var statearr_37081_37094 = state_37061;(statearr_37081_37094[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37061);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e37080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__37095 = state_37061;
state_37061 = G__37095;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37061){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___37083,tc,fc))
})();var state__5691__auto__ = (function (){var statearr_37082 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___37083);
return statearr_37082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___37083,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_37142){var state_val_37143 = (state_37142[1]);if((state_val_37143 === 7))
{var inst_37138 = (state_37142[2]);var state_37142__$1 = state_37142;var statearr_37144_37160 = state_37142__$1;(statearr_37144_37160[2] = inst_37138);
(statearr_37144_37160[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37143 === 6))
{var inst_37128 = (state_37142[7]);var inst_37131 = (state_37142[8]);var inst_37135 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37128,inst_37131) : f.call(null,inst_37128,inst_37131));var inst_37128__$1 = inst_37135;var state_37142__$1 = (function (){var statearr_37145 = state_37142;(statearr_37145[7] = inst_37128__$1);
return statearr_37145;
})();var statearr_37146_37161 = state_37142__$1;(statearr_37146_37161[2] = null);
(statearr_37146_37161[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37143 === 5))
{var inst_37128 = (state_37142[7]);var state_37142__$1 = state_37142;var statearr_37147_37162 = state_37142__$1;(statearr_37147_37162[2] = inst_37128);
(statearr_37147_37162[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37143 === 4))
{var inst_37131 = (state_37142[8]);var inst_37131__$1 = (state_37142[2]);var inst_37132 = (inst_37131__$1 == null);var state_37142__$1 = (function (){var statearr_37148 = state_37142;(statearr_37148[8] = inst_37131__$1);
return statearr_37148;
})();if(cljs.core.truth_(inst_37132))
{var statearr_37149_37163 = state_37142__$1;(statearr_37149_37163[1] = 5);
} else
{var statearr_37150_37164 = state_37142__$1;(statearr_37150_37164[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37143 === 3))
{var inst_37140 = (state_37142[2]);var state_37142__$1 = state_37142;return cljs.core.async.impl.ioc_helpers.return_chan(state_37142__$1,inst_37140);
} else
{if((state_val_37143 === 2))
{var state_37142__$1 = state_37142;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37142__$1,4,ch);
} else
{if((state_val_37143 === 1))
{var inst_37128 = init;var state_37142__$1 = (function (){var statearr_37151 = state_37142;(statearr_37151[7] = inst_37128);
return statearr_37151;
})();var statearr_37152_37165 = state_37142__$1;(statearr_37152_37165[2] = null);
(statearr_37152_37165[1] = 2);
return cljs.core.constant$keyword$589;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37156 = [null,null,null,null,null,null,null,null,null];(statearr_37156[0] = state_machine__5675__auto__);
(statearr_37156[1] = 1);
return statearr_37156;
});
var state_machine__5675__auto____1 = (function (state_37142){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37142);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37157){if((e37157 instanceof Object))
{var ex__5678__auto__ = e37157;var statearr_37158_37166 = state_37142;(statearr_37158_37166[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37142);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e37157;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__37167 = state_37142;
state_37142 = G__37167;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37142){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_37159 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_37159;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_37229){var state_val_37230 = (state_37229[1]);if((state_val_37230 === 7))
{var inst_37210 = (state_37229[7]);var inst_37215 = (state_37229[2]);var inst_37216 = cljs.core.next(inst_37210);var inst_37210__$1 = inst_37216;var state_37229__$1 = (function (){var statearr_37231 = state_37229;(statearr_37231[7] = inst_37210__$1);
(statearr_37231[8] = inst_37215);
return statearr_37231;
})();var statearr_37232_37250 = state_37229__$1;(statearr_37232_37250[2] = null);
(statearr_37232_37250[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37230 === 1))
{var inst_37209 = cljs.core.seq(coll);var inst_37210 = inst_37209;var state_37229__$1 = (function (){var statearr_37233 = state_37229;(statearr_37233[7] = inst_37210);
return statearr_37233;
})();var statearr_37234_37251 = state_37229__$1;(statearr_37234_37251[2] = null);
(statearr_37234_37251[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37230 === 4))
{var inst_37210 = (state_37229[7]);var inst_37213 = cljs.core.first(inst_37210);var state_37229__$1 = state_37229;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37229__$1,7,ch,inst_37213);
} else
{if((state_val_37230 === 6))
{var inst_37225 = (state_37229[2]);var state_37229__$1 = state_37229;var statearr_37235_37252 = state_37229__$1;(statearr_37235_37252[2] = inst_37225);
(statearr_37235_37252[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37230 === 3))
{var inst_37227 = (state_37229[2]);var state_37229__$1 = state_37229;return cljs.core.async.impl.ioc_helpers.return_chan(state_37229__$1,inst_37227);
} else
{if((state_val_37230 === 2))
{var inst_37210 = (state_37229[7]);var state_37229__$1 = state_37229;if(cljs.core.truth_(inst_37210))
{var statearr_37236_37253 = state_37229__$1;(statearr_37236_37253[1] = 4);
} else
{var statearr_37237_37254 = state_37229__$1;(statearr_37237_37254[1] = 5);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37230 === 9))
{var state_37229__$1 = state_37229;var statearr_37238_37255 = state_37229__$1;(statearr_37238_37255[2] = null);
(statearr_37238_37255[1] = 10);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37230 === 5))
{var state_37229__$1 = state_37229;if(cljs.core.truth_(close_QMARK_))
{var statearr_37239_37256 = state_37229__$1;(statearr_37239_37256[1] = 8);
} else
{var statearr_37240_37257 = state_37229__$1;(statearr_37240_37257[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37230 === 10))
{var inst_37223 = (state_37229[2]);var state_37229__$1 = state_37229;var statearr_37241_37258 = state_37229__$1;(statearr_37241_37258[2] = inst_37223);
(statearr_37241_37258[1] = 6);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37230 === 8))
{var inst_37220 = cljs.core.async.close_BANG_(ch);var state_37229__$1 = state_37229;var statearr_37242_37259 = state_37229__$1;(statearr_37242_37259[2] = inst_37220);
(statearr_37242_37259[1] = 10);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37246 = [null,null,null,null,null,null,null,null,null];(statearr_37246[0] = state_machine__5675__auto__);
(statearr_37246[1] = 1);
return statearr_37246;
});
var state_machine__5675__auto____1 = (function (state_37229){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37229);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37247){if((e37247 instanceof Object))
{var ex__5678__auto__ = e37247;var statearr_37248_37260 = state_37229;(statearr_37248_37260[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37229);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e37247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__37261 = state_37229;
state_37229 = G__37261;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37229){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_37249 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_37249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj37263 = {};return obj37263;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3527__auto__ = _;if(and__3527__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4166__auto__ = (((_ == null))?null:_);return (function (){var or__3539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj37265 = {};return obj37265;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t37489 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37489 = (function (cs,ch,mult,meta37490){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37490 = meta37490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37489.cljs$lang$type = true;
cljs.core.async.t37489.cljs$lang$ctorStr = "cljs.core.async/t37489";
cljs.core.async.t37489.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t37489");
});})(cs))
;
cljs.core.async.t37489.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t37489.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t37489.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t37489.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t37489.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t37489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37491){var self__ = this;
var _37491__$1 = this;return self__.meta37490;
});})(cs))
;
cljs.core.async.t37489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37491,meta37490__$1){var self__ = this;
var _37491__$1 = this;return (new cljs.core.async.t37489(self__.cs,self__.ch,self__.mult,meta37490__$1));
});})(cs))
;
cljs.core.async.__GT_t37489 = ((function (cs){
return (function __GT_t37489(cs__$1,ch__$1,mult__$1,meta37490){return (new cljs.core.async.t37489(cs__$1,ch__$1,mult__$1,meta37490));
});})(cs))
;
}
return (new cljs.core.async.t37489(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5689__auto___37712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___37712,cs,m,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___37712,cs,m,dchan,dctr,done){
return (function (state_37626){var state_val_37627 = (state_37626[1]);if((state_val_37627 === 7))
{var inst_37622 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37628_37713 = state_37626__$1;(statearr_37628_37713[2] = inst_37622);
(statearr_37628_37713[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 20))
{var inst_37523 = (state_37626[7]);var inst_37533 = cljs.core.first(inst_37523);var inst_37534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37533,0,null);var inst_37535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37533,1,null);var state_37626__$1 = (function (){var statearr_37629 = state_37626;(statearr_37629[8] = inst_37534);
return statearr_37629;
})();if(cljs.core.truth_(inst_37535))
{var statearr_37630_37714 = state_37626__$1;(statearr_37630_37714[1] = 22);
} else
{var statearr_37631_37715 = state_37626__$1;(statearr_37631_37715[1] = 23);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 27))
{var inst_37565 = (state_37626[9]);var inst_37563 = (state_37626[10]);var inst_37570 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37563,inst_37565);var state_37626__$1 = (function (){var statearr_37632 = state_37626;(statearr_37632[11] = inst_37570);
return statearr_37632;
})();var statearr_37633_37716 = state_37626__$1;(statearr_37633_37716[2] = null);
(statearr_37633_37716[1] = 32);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 1))
{var state_37626__$1 = state_37626;var statearr_37634_37717 = state_37626__$1;(statearr_37634_37717[2] = null);
(statearr_37634_37717[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 24))
{var inst_37523 = (state_37626[7]);var inst_37540 = (state_37626[2]);var inst_37541 = cljs.core.next(inst_37523);var inst_37503 = inst_37541;var inst_37504 = null;var inst_37505 = 0;var inst_37506 = 0;var state_37626__$1 = (function (){var statearr_37635 = state_37626;(statearr_37635[12] = inst_37505);
(statearr_37635[13] = inst_37506);
(statearr_37635[14] = inst_37540);
(statearr_37635[15] = inst_37503);
(statearr_37635[16] = inst_37504);
return statearr_37635;
})();var statearr_37636_37718 = state_37626__$1;(statearr_37636_37718[2] = null);
(statearr_37636_37718[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 39))
{var inst_37583 = (state_37626[17]);var inst_37601 = (state_37626[2]);var inst_37602 = cljs.core.next(inst_37583);var inst_37562 = inst_37602;var inst_37563 = null;var inst_37564 = 0;var inst_37565 = 0;var state_37626__$1 = (function (){var statearr_37640 = state_37626;(statearr_37640[18] = inst_37564);
(statearr_37640[9] = inst_37565);
(statearr_37640[19] = inst_37562);
(statearr_37640[10] = inst_37563);
(statearr_37640[20] = inst_37601);
return statearr_37640;
})();var statearr_37641_37719 = state_37626__$1;(statearr_37641_37719[2] = null);
(statearr_37641_37719[1] = 25);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 4))
{var inst_37494 = (state_37626[21]);var inst_37494__$1 = (state_37626[2]);var inst_37495 = (inst_37494__$1 == null);var state_37626__$1 = (function (){var statearr_37642 = state_37626;(statearr_37642[21] = inst_37494__$1);
return statearr_37642;
})();if(cljs.core.truth_(inst_37495))
{var statearr_37643_37720 = state_37626__$1;(statearr_37643_37720[1] = 5);
} else
{var statearr_37644_37721 = state_37626__$1;(statearr_37644_37721[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 15))
{var inst_37505 = (state_37626[12]);var inst_37506 = (state_37626[13]);var inst_37503 = (state_37626[15]);var inst_37504 = (state_37626[16]);var inst_37519 = (state_37626[2]);var inst_37520 = (inst_37506 + 1);var tmp37637 = inst_37505;var tmp37638 = inst_37503;var tmp37639 = inst_37504;var inst_37503__$1 = tmp37638;var inst_37504__$1 = tmp37639;var inst_37505__$1 = tmp37637;var inst_37506__$1 = inst_37520;var state_37626__$1 = (function (){var statearr_37645 = state_37626;(statearr_37645[12] = inst_37505__$1);
(statearr_37645[13] = inst_37506__$1);
(statearr_37645[15] = inst_37503__$1);
(statearr_37645[16] = inst_37504__$1);
(statearr_37645[22] = inst_37519);
return statearr_37645;
})();var statearr_37646_37722 = state_37626__$1;(statearr_37646_37722[2] = null);
(statearr_37646_37722[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 21))
{var inst_37544 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37647_37723 = state_37626__$1;(statearr_37647_37723[2] = inst_37544);
(statearr_37647_37723[1] = 18);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 31))
{var inst_37570 = (state_37626[11]);var inst_37571 = (state_37626[2]);var inst_37572 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37573 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37570);var state_37626__$1 = (function (){var statearr_37648 = state_37626;(statearr_37648[23] = inst_37571);
(statearr_37648[24] = inst_37572);
return statearr_37648;
})();var statearr_37649_37724 = state_37626__$1;(statearr_37649_37724[2] = inst_37573);
cljs.core.async.impl.ioc_helpers.process_exception(state_37626__$1);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 32))
{var inst_37570 = (state_37626[11]);var inst_37494 = (state_37626[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37626,31,Object,null,30);var inst_37577 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37570,inst_37494,done);var state_37626__$1 = state_37626;var statearr_37650_37725 = state_37626__$1;(statearr_37650_37725[2] = inst_37577);
cljs.core.async.impl.ioc_helpers.process_exception(state_37626__$1);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 40))
{var inst_37592 = (state_37626[25]);var inst_37593 = (state_37626[2]);var inst_37594 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37595 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37592);var state_37626__$1 = (function (){var statearr_37651 = state_37626;(statearr_37651[26] = inst_37593);
(statearr_37651[27] = inst_37594);
return statearr_37651;
})();var statearr_37652_37726 = state_37626__$1;(statearr_37652_37726[2] = inst_37595);
cljs.core.async.impl.ioc_helpers.process_exception(state_37626__$1);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 33))
{var inst_37583 = (state_37626[17]);var inst_37585 = cljs.core.chunked_seq_QMARK_(inst_37583);var state_37626__$1 = state_37626;if(inst_37585)
{var statearr_37653_37727 = state_37626__$1;(statearr_37653_37727[1] = 36);
} else
{var statearr_37654_37728 = state_37626__$1;(statearr_37654_37728[1] = 37);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 13))
{var inst_37513 = (state_37626[28]);var inst_37516 = cljs.core.async.close_BANG_(inst_37513);var state_37626__$1 = state_37626;var statearr_37655_37729 = state_37626__$1;(statearr_37655_37729[2] = inst_37516);
(statearr_37655_37729[1] = 15);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 22))
{var inst_37534 = (state_37626[8]);var inst_37537 = cljs.core.async.close_BANG_(inst_37534);var state_37626__$1 = state_37626;var statearr_37656_37730 = state_37626__$1;(statearr_37656_37730[2] = inst_37537);
(statearr_37656_37730[1] = 24);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 36))
{var inst_37583 = (state_37626[17]);var inst_37587 = cljs.core.chunk_first(inst_37583);var inst_37588 = cljs.core.chunk_rest(inst_37583);var inst_37589 = cljs.core.count(inst_37587);var inst_37562 = inst_37588;var inst_37563 = inst_37587;var inst_37564 = inst_37589;var inst_37565 = 0;var state_37626__$1 = (function (){var statearr_37657 = state_37626;(statearr_37657[18] = inst_37564);
(statearr_37657[9] = inst_37565);
(statearr_37657[19] = inst_37562);
(statearr_37657[10] = inst_37563);
return statearr_37657;
})();var statearr_37658_37731 = state_37626__$1;(statearr_37658_37731[2] = null);
(statearr_37658_37731[1] = 25);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 41))
{var inst_37592 = (state_37626[25]);var inst_37494 = (state_37626[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37626,40,Object,null,39);var inst_37599 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37592,inst_37494,done);var state_37626__$1 = state_37626;var statearr_37659_37732 = state_37626__$1;(statearr_37659_37732[2] = inst_37599);
cljs.core.async.impl.ioc_helpers.process_exception(state_37626__$1);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 43))
{var state_37626__$1 = state_37626;var statearr_37660_37733 = state_37626__$1;(statearr_37660_37733[2] = null);
(statearr_37660_37733[1] = 44);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 29))
{var inst_37610 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37661_37734 = state_37626__$1;(statearr_37661_37734[2] = inst_37610);
(statearr_37661_37734[1] = 26);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 44))
{var inst_37619 = (state_37626[2]);var state_37626__$1 = (function (){var statearr_37662 = state_37626;(statearr_37662[29] = inst_37619);
return statearr_37662;
})();var statearr_37663_37735 = state_37626__$1;(statearr_37663_37735[2] = null);
(statearr_37663_37735[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 6))
{var inst_37554 = (state_37626[30]);var inst_37553 = cljs.core.deref(cs);var inst_37554__$1 = cljs.core.keys(inst_37553);var inst_37555 = cljs.core.count(inst_37554__$1);var inst_37556 = cljs.core.reset_BANG_(dctr,inst_37555);var inst_37561 = cljs.core.seq(inst_37554__$1);var inst_37562 = inst_37561;var inst_37563 = null;var inst_37564 = 0;var inst_37565 = 0;var state_37626__$1 = (function (){var statearr_37664 = state_37626;(statearr_37664[18] = inst_37564);
(statearr_37664[9] = inst_37565);
(statearr_37664[19] = inst_37562);
(statearr_37664[30] = inst_37554__$1);
(statearr_37664[10] = inst_37563);
(statearr_37664[31] = inst_37556);
return statearr_37664;
})();var statearr_37665_37736 = state_37626__$1;(statearr_37665_37736[2] = null);
(statearr_37665_37736[1] = 25);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 28))
{var inst_37562 = (state_37626[19]);var inst_37583 = (state_37626[17]);var inst_37583__$1 = cljs.core.seq(inst_37562);var state_37626__$1 = (function (){var statearr_37666 = state_37626;(statearr_37666[17] = inst_37583__$1);
return statearr_37666;
})();if(inst_37583__$1)
{var statearr_37667_37737 = state_37626__$1;(statearr_37667_37737[1] = 33);
} else
{var statearr_37668_37738 = state_37626__$1;(statearr_37668_37738[1] = 34);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 25))
{var inst_37564 = (state_37626[18]);var inst_37565 = (state_37626[9]);var inst_37567 = (inst_37565 < inst_37564);var inst_37568 = inst_37567;var state_37626__$1 = state_37626;if(cljs.core.truth_(inst_37568))
{var statearr_37669_37739 = state_37626__$1;(statearr_37669_37739[1] = 27);
} else
{var statearr_37670_37740 = state_37626__$1;(statearr_37670_37740[1] = 28);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 34))
{var state_37626__$1 = state_37626;var statearr_37671_37741 = state_37626__$1;(statearr_37671_37741[2] = null);
(statearr_37671_37741[1] = 35);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 17))
{var state_37626__$1 = state_37626;var statearr_37672_37742 = state_37626__$1;(statearr_37672_37742[2] = null);
(statearr_37672_37742[1] = 18);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 3))
{var inst_37624 = (state_37626[2]);var state_37626__$1 = state_37626;return cljs.core.async.impl.ioc_helpers.return_chan(state_37626__$1,inst_37624);
} else
{if((state_val_37627 === 12))
{var inst_37549 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37673_37743 = state_37626__$1;(statearr_37673_37743[2] = inst_37549);
(statearr_37673_37743[1] = 9);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 2))
{var state_37626__$1 = state_37626;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37626__$1,4,ch);
} else
{if((state_val_37627 === 23))
{var state_37626__$1 = state_37626;var statearr_37674_37744 = state_37626__$1;(statearr_37674_37744[2] = null);
(statearr_37674_37744[1] = 24);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 35))
{var inst_37608 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37675_37745 = state_37626__$1;(statearr_37675_37745[2] = inst_37608);
(statearr_37675_37745[1] = 29);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 19))
{var inst_37523 = (state_37626[7]);var inst_37527 = cljs.core.chunk_first(inst_37523);var inst_37528 = cljs.core.chunk_rest(inst_37523);var inst_37529 = cljs.core.count(inst_37527);var inst_37503 = inst_37528;var inst_37504 = inst_37527;var inst_37505 = inst_37529;var inst_37506 = 0;var state_37626__$1 = (function (){var statearr_37676 = state_37626;(statearr_37676[12] = inst_37505);
(statearr_37676[13] = inst_37506);
(statearr_37676[15] = inst_37503);
(statearr_37676[16] = inst_37504);
return statearr_37676;
})();var statearr_37677_37746 = state_37626__$1;(statearr_37677_37746[2] = null);
(statearr_37677_37746[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 11))
{var inst_37523 = (state_37626[7]);var inst_37503 = (state_37626[15]);var inst_37523__$1 = cljs.core.seq(inst_37503);var state_37626__$1 = (function (){var statearr_37678 = state_37626;(statearr_37678[7] = inst_37523__$1);
return statearr_37678;
})();if(inst_37523__$1)
{var statearr_37679_37747 = state_37626__$1;(statearr_37679_37747[1] = 16);
} else
{var statearr_37680_37748 = state_37626__$1;(statearr_37680_37748[1] = 17);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 9))
{var inst_37551 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37681_37749 = state_37626__$1;(statearr_37681_37749[2] = inst_37551);
(statearr_37681_37749[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 5))
{var inst_37501 = cljs.core.deref(cs);var inst_37502 = cljs.core.seq(inst_37501);var inst_37503 = inst_37502;var inst_37504 = null;var inst_37505 = 0;var inst_37506 = 0;var state_37626__$1 = (function (){var statearr_37682 = state_37626;(statearr_37682[12] = inst_37505);
(statearr_37682[13] = inst_37506);
(statearr_37682[15] = inst_37503);
(statearr_37682[16] = inst_37504);
return statearr_37682;
})();var statearr_37683_37750 = state_37626__$1;(statearr_37683_37750[2] = null);
(statearr_37683_37750[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 14))
{var state_37626__$1 = state_37626;var statearr_37684_37751 = state_37626__$1;(statearr_37684_37751[2] = null);
(statearr_37684_37751[1] = 15);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 45))
{var inst_37616 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37685_37752 = state_37626__$1;(statearr_37685_37752[2] = inst_37616);
(statearr_37685_37752[1] = 44);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 26))
{var inst_37554 = (state_37626[30]);var inst_37612 = (state_37626[2]);var inst_37613 = cljs.core.seq(inst_37554);var state_37626__$1 = (function (){var statearr_37686 = state_37626;(statearr_37686[32] = inst_37612);
return statearr_37686;
})();if(inst_37613)
{var statearr_37687_37753 = state_37626__$1;(statearr_37687_37753[1] = 42);
} else
{var statearr_37688_37754 = state_37626__$1;(statearr_37688_37754[1] = 43);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 16))
{var inst_37523 = (state_37626[7]);var inst_37525 = cljs.core.chunked_seq_QMARK_(inst_37523);var state_37626__$1 = state_37626;if(inst_37525)
{var statearr_37692_37755 = state_37626__$1;(statearr_37692_37755[1] = 19);
} else
{var statearr_37693_37756 = state_37626__$1;(statearr_37693_37756[1] = 20);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 38))
{var inst_37605 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37694_37757 = state_37626__$1;(statearr_37694_37757[2] = inst_37605);
(statearr_37694_37757[1] = 35);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 30))
{var inst_37564 = (state_37626[18]);var inst_37565 = (state_37626[9]);var inst_37562 = (state_37626[19]);var inst_37563 = (state_37626[10]);var inst_37579 = (state_37626[2]);var inst_37580 = (inst_37565 + 1);var tmp37689 = inst_37564;var tmp37690 = inst_37562;var tmp37691 = inst_37563;var inst_37562__$1 = tmp37690;var inst_37563__$1 = tmp37691;var inst_37564__$1 = tmp37689;var inst_37565__$1 = inst_37580;var state_37626__$1 = (function (){var statearr_37695 = state_37626;(statearr_37695[18] = inst_37564__$1);
(statearr_37695[9] = inst_37565__$1);
(statearr_37695[19] = inst_37562__$1);
(statearr_37695[10] = inst_37563__$1);
(statearr_37695[33] = inst_37579);
return statearr_37695;
})();var statearr_37696_37758 = state_37626__$1;(statearr_37696_37758[2] = null);
(statearr_37696_37758[1] = 25);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 10))
{var inst_37506 = (state_37626[13]);var inst_37504 = (state_37626[16]);var inst_37512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37504,inst_37506);var inst_37513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37512,0,null);var inst_37514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37512,1,null);var state_37626__$1 = (function (){var statearr_37697 = state_37626;(statearr_37697[28] = inst_37513);
return statearr_37697;
})();if(cljs.core.truth_(inst_37514))
{var statearr_37698_37759 = state_37626__$1;(statearr_37698_37759[1] = 13);
} else
{var statearr_37699_37760 = state_37626__$1;(statearr_37699_37760[1] = 14);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 18))
{var inst_37547 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37700_37761 = state_37626__$1;(statearr_37700_37761[2] = inst_37547);
(statearr_37700_37761[1] = 12);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 42))
{var state_37626__$1 = state_37626;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37626__$1,45,dchan);
} else
{if((state_val_37627 === 37))
{var inst_37583 = (state_37626[17]);var inst_37592 = cljs.core.first(inst_37583);var state_37626__$1 = (function (){var statearr_37701 = state_37626;(statearr_37701[25] = inst_37592);
return statearr_37701;
})();var statearr_37702_37762 = state_37626__$1;(statearr_37702_37762[2] = null);
(statearr_37702_37762[1] = 41);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37627 === 8))
{var inst_37505 = (state_37626[12]);var inst_37506 = (state_37626[13]);var inst_37508 = (inst_37506 < inst_37505);var inst_37509 = inst_37508;var state_37626__$1 = state_37626;if(cljs.core.truth_(inst_37509))
{var statearr_37703_37763 = state_37626__$1;(statearr_37703_37763[1] = 10);
} else
{var statearr_37704_37764 = state_37626__$1;(statearr_37704_37764[1] = 11);
}
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___37712,cs,m,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___37712,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37708[0] = state_machine__5675__auto__);
(statearr_37708[1] = 1);
return statearr_37708;
});
var state_machine__5675__auto____1 = (function (state_37626){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37626);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37709){if((e37709 instanceof Object))
{var ex__5678__auto__ = e37709;var statearr_37710_37765 = state_37626;(statearr_37710_37765[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37626);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e37709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__37766 = state_37626;
state_37626 = G__37766;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37626){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___37712,cs,m,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_37711 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___37712);
return statearr_37711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___37712,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj37768 = {};return obj37768;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$596,null,cljs.core.constant$keyword$597,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$598);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$597);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$598,chs);var pauses = pick(cljs.core.constant$keyword$596,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$599,solos,cljs.core.constant$keyword$600,pick(cljs.core.constant$keyword$597,chs),cljs.core.constant$keyword$601,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$596)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t37878 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37878 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37879){
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
this.meta37879 = meta37879;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37878.cljs$lang$type = true;
cljs.core.async.t37878.cljs$lang$ctorStr = "cljs.core.async/t37878";
cljs.core.async.t37878.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t37878");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37878.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37878.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37878.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37878.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37878.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37878.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37878.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37880){var self__ = this;
var _37880__$1 = this;return self__.meta37879;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37880,meta37879__$1){var self__ = this;
var _37880__$1 = this;return (new cljs.core.async.t37878(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37879__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37878 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37878(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37879){return (new cljs.core.async.t37878(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37879));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37878(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5689__auto___37987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___37987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___37987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37945){var state_val_37946 = (state_37945[1]);if((state_val_37946 === 7))
{var inst_37894 = (state_37945[7]);var inst_37899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37894);var state_37945__$1 = state_37945;var statearr_37947_37988 = state_37945__$1;(statearr_37947_37988[2] = inst_37899);
(statearr_37947_37988[1] = 9);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 20))
{var inst_37909 = (state_37945[8]);var state_37945__$1 = state_37945;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37945__$1,23,out,inst_37909);
} else
{if((state_val_37946 === 1))
{var inst_37884 = (state_37945[9]);var inst_37884__$1 = calc_state();var inst_37885 = cljs.core.seq_QMARK_(inst_37884__$1);var state_37945__$1 = (function (){var statearr_37948 = state_37945;(statearr_37948[9] = inst_37884__$1);
return statearr_37948;
})();if(inst_37885)
{var statearr_37949_37989 = state_37945__$1;(statearr_37949_37989[1] = 2);
} else
{var statearr_37950_37990 = state_37945__$1;(statearr_37950_37990[1] = 3);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 4))
{var inst_37884 = (state_37945[9]);var inst_37890 = (state_37945[2]);var inst_37891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37890,cljs.core.constant$keyword$601);var inst_37892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37890,cljs.core.constant$keyword$600);var inst_37893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37890,cljs.core.constant$keyword$599);var inst_37894 = inst_37884;var state_37945__$1 = (function (){var statearr_37951 = state_37945;(statearr_37951[10] = inst_37892);
(statearr_37951[7] = inst_37894);
(statearr_37951[11] = inst_37891);
(statearr_37951[12] = inst_37893);
return statearr_37951;
})();var statearr_37952_37991 = state_37945__$1;(statearr_37952_37991[2] = null);
(statearr_37952_37991[1] = 5);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 15))
{var state_37945__$1 = state_37945;var statearr_37953_37992 = state_37945__$1;(statearr_37953_37992[2] = null);
(statearr_37953_37992[1] = 16);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 21))
{var state_37945__$1 = state_37945;var statearr_37954_37993 = state_37945__$1;(statearr_37954_37993[2] = null);
(statearr_37954_37993[1] = 22);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 13))
{var inst_37941 = (state_37945[2]);var state_37945__$1 = state_37945;var statearr_37955_37994 = state_37945__$1;(statearr_37955_37994[2] = inst_37941);
(statearr_37955_37994[1] = 6);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 22))
{var inst_37902 = (state_37945[13]);var inst_37938 = (state_37945[2]);var inst_37894 = inst_37902;var state_37945__$1 = (function (){var statearr_37956 = state_37945;(statearr_37956[7] = inst_37894);
(statearr_37956[14] = inst_37938);
return statearr_37956;
})();var statearr_37957_37995 = state_37945__$1;(statearr_37957_37995[2] = null);
(statearr_37957_37995[1] = 5);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 6))
{var inst_37943 = (state_37945[2]);var state_37945__$1 = state_37945;return cljs.core.async.impl.ioc_helpers.return_chan(state_37945__$1,inst_37943);
} else
{if((state_val_37946 === 17))
{var inst_37924 = (state_37945[15]);var state_37945__$1 = state_37945;var statearr_37958_37996 = state_37945__$1;(statearr_37958_37996[2] = inst_37924);
(statearr_37958_37996[1] = 19);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 3))
{var inst_37884 = (state_37945[9]);var state_37945__$1 = state_37945;var statearr_37959_37997 = state_37945__$1;(statearr_37959_37997[2] = inst_37884);
(statearr_37959_37997[1] = 4);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 12))
{var inst_37910 = (state_37945[16]);var inst_37905 = (state_37945[17]);var inst_37924 = (state_37945[15]);var inst_37924__$1 = (inst_37905.cljs$core$IFn$_invoke$arity$1 ? inst_37905.cljs$core$IFn$_invoke$arity$1(inst_37910) : inst_37905.call(null,inst_37910));var state_37945__$1 = (function (){var statearr_37960 = state_37945;(statearr_37960[15] = inst_37924__$1);
return statearr_37960;
})();if(cljs.core.truth_(inst_37924__$1))
{var statearr_37961_37998 = state_37945__$1;(statearr_37961_37998[1] = 17);
} else
{var statearr_37962_37999 = state_37945__$1;(statearr_37962_37999[1] = 18);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 2))
{var inst_37884 = (state_37945[9]);var inst_37887 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37884);var state_37945__$1 = state_37945;var statearr_37963_38000 = state_37945__$1;(statearr_37963_38000[2] = inst_37887);
(statearr_37963_38000[1] = 4);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 23))
{var inst_37935 = (state_37945[2]);var state_37945__$1 = state_37945;var statearr_37964_38001 = state_37945__$1;(statearr_37964_38001[2] = inst_37935);
(statearr_37964_38001[1] = 22);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 19))
{var inst_37932 = (state_37945[2]);var state_37945__$1 = state_37945;if(cljs.core.truth_(inst_37932))
{var statearr_37965_38002 = state_37945__$1;(statearr_37965_38002[1] = 20);
} else
{var statearr_37966_38003 = state_37945__$1;(statearr_37966_38003[1] = 21);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 11))
{var inst_37909 = (state_37945[8]);var inst_37915 = (inst_37909 == null);var state_37945__$1 = state_37945;if(cljs.core.truth_(inst_37915))
{var statearr_37967_38004 = state_37945__$1;(statearr_37967_38004[1] = 14);
} else
{var statearr_37968_38005 = state_37945__$1;(statearr_37968_38005[1] = 15);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 9))
{var inst_37902 = (state_37945[13]);var inst_37902__$1 = (state_37945[2]);var inst_37903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37902__$1,cljs.core.constant$keyword$601);var inst_37904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37902__$1,cljs.core.constant$keyword$600);var inst_37905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37902__$1,cljs.core.constant$keyword$599);var state_37945__$1 = (function (){var statearr_37969 = state_37945;(statearr_37969[13] = inst_37902__$1);
(statearr_37969[18] = inst_37904);
(statearr_37969[17] = inst_37905);
return statearr_37969;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37945__$1,10,inst_37903);
} else
{if((state_val_37946 === 5))
{var inst_37894 = (state_37945[7]);var inst_37897 = cljs.core.seq_QMARK_(inst_37894);var state_37945__$1 = state_37945;if(inst_37897)
{var statearr_37970_38006 = state_37945__$1;(statearr_37970_38006[1] = 7);
} else
{var statearr_37971_38007 = state_37945__$1;(statearr_37971_38007[1] = 8);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 14))
{var inst_37910 = (state_37945[16]);var inst_37917 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37910);var state_37945__$1 = state_37945;var statearr_37972_38008 = state_37945__$1;(statearr_37972_38008[2] = inst_37917);
(statearr_37972_38008[1] = 16);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 16))
{var inst_37920 = (state_37945[2]);var inst_37921 = calc_state();var inst_37894 = inst_37921;var state_37945__$1 = (function (){var statearr_37973 = state_37945;(statearr_37973[7] = inst_37894);
(statearr_37973[19] = inst_37920);
return statearr_37973;
})();var statearr_37974_38009 = state_37945__$1;(statearr_37974_38009[2] = null);
(statearr_37974_38009[1] = 5);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 10))
{var inst_37909 = (state_37945[8]);var inst_37910 = (state_37945[16]);var inst_37908 = (state_37945[2]);var inst_37909__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37908,0,null);var inst_37910__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37908,1,null);var inst_37911 = (inst_37909__$1 == null);var inst_37912 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37910__$1,change);var inst_37913 = (inst_37911) || (inst_37912);var state_37945__$1 = (function (){var statearr_37975 = state_37945;(statearr_37975[8] = inst_37909__$1);
(statearr_37975[16] = inst_37910__$1);
return statearr_37975;
})();if(cljs.core.truth_(inst_37913))
{var statearr_37976_38010 = state_37945__$1;(statearr_37976_38010[1] = 11);
} else
{var statearr_37977_38011 = state_37945__$1;(statearr_37977_38011[1] = 12);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 18))
{var inst_37910 = (state_37945[16]);var inst_37904 = (state_37945[18]);var inst_37905 = (state_37945[17]);var inst_37927 = cljs.core.empty_QMARK_(inst_37905);var inst_37928 = (inst_37904.cljs$core$IFn$_invoke$arity$1 ? inst_37904.cljs$core$IFn$_invoke$arity$1(inst_37910) : inst_37904.call(null,inst_37910));var inst_37929 = cljs.core.not(inst_37928);var inst_37930 = (inst_37927) && (inst_37929);var state_37945__$1 = state_37945;var statearr_37978_38012 = state_37945__$1;(statearr_37978_38012[2] = inst_37930);
(statearr_37978_38012[1] = 19);
return cljs.core.constant$keyword$589;
} else
{if((state_val_37946 === 8))
{var inst_37894 = (state_37945[7]);var state_37945__$1 = state_37945;var statearr_37979_38013 = state_37945__$1;(statearr_37979_38013[2] = inst_37894);
(statearr_37979_38013[1] = 9);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___37987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5674__auto__,c__5689__auto___37987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37983[0] = state_machine__5675__auto__);
(statearr_37983[1] = 1);
return statearr_37983;
});
var state_machine__5675__auto____1 = (function (state_37945){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37945);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37984){if((e37984 instanceof Object))
{var ex__5678__auto__ = e37984;var statearr_37985_38014 = state_37945;(statearr_37985_38014[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37945);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e37984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__38015 = state_37945;
state_37945 = G__38015;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37945){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___37987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5691__auto__ = (function (){var statearr_37986 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___37987);
return statearr_37986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___37987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj38017 = {};return obj38017;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
return (function (topic){var or__3539__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3539__auto__,mults){
return (function (p1__38018_SHARP_){if(cljs.core.truth_((p1__38018_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38018_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38018_SHARP_.call(null,topic))))
{return p1__38018_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38018_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3539__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38143 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38144){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38144 = meta38144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38143.cljs$lang$type = true;
cljs.core.async.t38143.cljs$lang$ctorStr = "cljs.core.async/t38143";
cljs.core.async.t38143.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t38143");
});})(mults,ensure_mult))
;
cljs.core.async.t38143.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38143.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38143.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38143.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38143.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38143.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38145){var self__ = this;
var _38145__$1 = this;return self__.meta38144;
});})(mults,ensure_mult))
;
cljs.core.async.t38143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38145,meta38144__$1){var self__ = this;
var _38145__$1 = this;return (new cljs.core.async.t38143(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38144__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38143 = ((function (mults,ensure_mult){
return (function __GT_t38143(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38144){return (new cljs.core.async.t38143(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38144));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38143(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5689__auto___38267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38267,mults,ensure_mult,p){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38267,mults,ensure_mult,p){
return (function (state_38219){var state_val_38220 = (state_38219[1]);if((state_val_38220 === 7))
{var inst_38215 = (state_38219[2]);var state_38219__$1 = state_38219;var statearr_38221_38268 = state_38219__$1;(statearr_38221_38268[2] = inst_38215);
(statearr_38221_38268[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 20))
{var state_38219__$1 = state_38219;var statearr_38222_38269 = state_38219__$1;(statearr_38222_38269[2] = null);
(statearr_38222_38269[1] = 21);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 1))
{var state_38219__$1 = state_38219;var statearr_38223_38270 = state_38219__$1;(statearr_38223_38270[2] = null);
(statearr_38223_38270[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 24))
{var inst_38198 = (state_38219[7]);var inst_38148 = (state_38219[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38219,23,Object,null,22);var inst_38205 = cljs.core.async.muxch_STAR_(inst_38198);var state_38219__$1 = state_38219;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38219__$1,25,inst_38205,inst_38148);
} else
{if((state_val_38220 === 4))
{var inst_38148 = (state_38219[8]);var inst_38148__$1 = (state_38219[2]);var inst_38149 = (inst_38148__$1 == null);var state_38219__$1 = (function (){var statearr_38224 = state_38219;(statearr_38224[8] = inst_38148__$1);
return statearr_38224;
})();if(cljs.core.truth_(inst_38149))
{var statearr_38225_38271 = state_38219__$1;(statearr_38225_38271[1] = 5);
} else
{var statearr_38226_38272 = state_38219__$1;(statearr_38226_38272[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 15))
{var inst_38190 = (state_38219[2]);var state_38219__$1 = state_38219;var statearr_38227_38273 = state_38219__$1;(statearr_38227_38273[2] = inst_38190);
(statearr_38227_38273[1] = 12);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 21))
{var inst_38212 = (state_38219[2]);var state_38219__$1 = (function (){var statearr_38228 = state_38219;(statearr_38228[9] = inst_38212);
return statearr_38228;
})();var statearr_38229_38274 = state_38219__$1;(statearr_38229_38274[2] = null);
(statearr_38229_38274[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 13))
{var inst_38172 = (state_38219[10]);var inst_38174 = cljs.core.chunked_seq_QMARK_(inst_38172);var state_38219__$1 = state_38219;if(inst_38174)
{var statearr_38230_38275 = state_38219__$1;(statearr_38230_38275[1] = 16);
} else
{var statearr_38231_38276 = state_38219__$1;(statearr_38231_38276[1] = 17);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 22))
{var inst_38209 = (state_38219[2]);var state_38219__$1 = state_38219;var statearr_38232_38277 = state_38219__$1;(statearr_38232_38277[2] = inst_38209);
(statearr_38232_38277[1] = 21);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 6))
{var inst_38196 = (state_38219[11]);var inst_38198 = (state_38219[7]);var inst_38148 = (state_38219[8]);var inst_38196__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38148) : topic_fn.call(null,inst_38148));var inst_38197 = cljs.core.deref(mults);var inst_38198__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38197,inst_38196__$1);var state_38219__$1 = (function (){var statearr_38233 = state_38219;(statearr_38233[11] = inst_38196__$1);
(statearr_38233[7] = inst_38198__$1);
return statearr_38233;
})();if(cljs.core.truth_(inst_38198__$1))
{var statearr_38234_38278 = state_38219__$1;(statearr_38234_38278[1] = 19);
} else
{var statearr_38235_38279 = state_38219__$1;(statearr_38235_38279[1] = 20);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 25))
{var inst_38207 = (state_38219[2]);var state_38219__$1 = state_38219;var statearr_38236_38280 = state_38219__$1;(statearr_38236_38280[2] = inst_38207);
cljs.core.async.impl.ioc_helpers.process_exception(state_38219__$1);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 17))
{var inst_38172 = (state_38219[10]);var inst_38181 = cljs.core.first(inst_38172);var inst_38182 = cljs.core.async.muxch_STAR_(inst_38181);var inst_38183 = cljs.core.async.close_BANG_(inst_38182);var inst_38184 = cljs.core.next(inst_38172);var inst_38158 = inst_38184;var inst_38159 = null;var inst_38160 = 0;var inst_38161 = 0;var state_38219__$1 = (function (){var statearr_38237 = state_38219;(statearr_38237[12] = inst_38159);
(statearr_38237[13] = inst_38158);
(statearr_38237[14] = inst_38160);
(statearr_38237[15] = inst_38161);
(statearr_38237[16] = inst_38183);
return statearr_38237;
})();var statearr_38238_38281 = state_38219__$1;(statearr_38238_38281[2] = null);
(statearr_38238_38281[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 3))
{var inst_38217 = (state_38219[2]);var state_38219__$1 = state_38219;return cljs.core.async.impl.ioc_helpers.return_chan(state_38219__$1,inst_38217);
} else
{if((state_val_38220 === 12))
{var inst_38192 = (state_38219[2]);var state_38219__$1 = state_38219;var statearr_38239_38282 = state_38219__$1;(statearr_38239_38282[2] = inst_38192);
(statearr_38239_38282[1] = 9);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 2))
{var state_38219__$1 = state_38219;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38219__$1,4,ch);
} else
{if((state_val_38220 === 23))
{var inst_38196 = (state_38219[11]);var inst_38200 = (state_38219[2]);var inst_38201 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38196);var state_38219__$1 = (function (){var statearr_38240 = state_38219;(statearr_38240[17] = inst_38200);
return statearr_38240;
})();var statearr_38241_38283 = state_38219__$1;(statearr_38241_38283[2] = inst_38201);
cljs.core.async.impl.ioc_helpers.process_exception(state_38219__$1);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 19))
{var state_38219__$1 = state_38219;var statearr_38242_38284 = state_38219__$1;(statearr_38242_38284[2] = null);
(statearr_38242_38284[1] = 24);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 11))
{var inst_38158 = (state_38219[13]);var inst_38172 = (state_38219[10]);var inst_38172__$1 = cljs.core.seq(inst_38158);var state_38219__$1 = (function (){var statearr_38243 = state_38219;(statearr_38243[10] = inst_38172__$1);
return statearr_38243;
})();if(inst_38172__$1)
{var statearr_38244_38285 = state_38219__$1;(statearr_38244_38285[1] = 13);
} else
{var statearr_38245_38286 = state_38219__$1;(statearr_38245_38286[1] = 14);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 9))
{var inst_38194 = (state_38219[2]);var state_38219__$1 = state_38219;var statearr_38246_38287 = state_38219__$1;(statearr_38246_38287[2] = inst_38194);
(statearr_38246_38287[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 5))
{var inst_38155 = cljs.core.deref(mults);var inst_38156 = cljs.core.vals(inst_38155);var inst_38157 = cljs.core.seq(inst_38156);var inst_38158 = inst_38157;var inst_38159 = null;var inst_38160 = 0;var inst_38161 = 0;var state_38219__$1 = (function (){var statearr_38247 = state_38219;(statearr_38247[12] = inst_38159);
(statearr_38247[13] = inst_38158);
(statearr_38247[14] = inst_38160);
(statearr_38247[15] = inst_38161);
return statearr_38247;
})();var statearr_38248_38288 = state_38219__$1;(statearr_38248_38288[2] = null);
(statearr_38248_38288[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 14))
{var state_38219__$1 = state_38219;var statearr_38252_38289 = state_38219__$1;(statearr_38252_38289[2] = null);
(statearr_38252_38289[1] = 15);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 16))
{var inst_38172 = (state_38219[10]);var inst_38176 = cljs.core.chunk_first(inst_38172);var inst_38177 = cljs.core.chunk_rest(inst_38172);var inst_38178 = cljs.core.count(inst_38176);var inst_38158 = inst_38177;var inst_38159 = inst_38176;var inst_38160 = inst_38178;var inst_38161 = 0;var state_38219__$1 = (function (){var statearr_38253 = state_38219;(statearr_38253[12] = inst_38159);
(statearr_38253[13] = inst_38158);
(statearr_38253[14] = inst_38160);
(statearr_38253[15] = inst_38161);
return statearr_38253;
})();var statearr_38254_38290 = state_38219__$1;(statearr_38254_38290[2] = null);
(statearr_38254_38290[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 10))
{var inst_38159 = (state_38219[12]);var inst_38158 = (state_38219[13]);var inst_38160 = (state_38219[14]);var inst_38161 = (state_38219[15]);var inst_38166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38159,inst_38161);var inst_38167 = cljs.core.async.muxch_STAR_(inst_38166);var inst_38168 = cljs.core.async.close_BANG_(inst_38167);var inst_38169 = (inst_38161 + 1);var tmp38249 = inst_38159;var tmp38250 = inst_38158;var tmp38251 = inst_38160;var inst_38158__$1 = tmp38250;var inst_38159__$1 = tmp38249;var inst_38160__$1 = tmp38251;var inst_38161__$1 = inst_38169;var state_38219__$1 = (function (){var statearr_38255 = state_38219;(statearr_38255[18] = inst_38168);
(statearr_38255[12] = inst_38159__$1);
(statearr_38255[13] = inst_38158__$1);
(statearr_38255[14] = inst_38160__$1);
(statearr_38255[15] = inst_38161__$1);
return statearr_38255;
})();var statearr_38256_38291 = state_38219__$1;(statearr_38256_38291[2] = null);
(statearr_38256_38291[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 18))
{var inst_38187 = (state_38219[2]);var state_38219__$1 = state_38219;var statearr_38257_38292 = state_38219__$1;(statearr_38257_38292[2] = inst_38187);
(statearr_38257_38292[1] = 15);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38220 === 8))
{var inst_38160 = (state_38219[14]);var inst_38161 = (state_38219[15]);var inst_38163 = (inst_38161 < inst_38160);var inst_38164 = inst_38163;var state_38219__$1 = state_38219;if(cljs.core.truth_(inst_38164))
{var statearr_38258_38293 = state_38219__$1;(statearr_38258_38293[1] = 10);
} else
{var statearr_38259_38294 = state_38219__$1;(statearr_38259_38294[1] = 11);
}
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___38267,mults,ensure_mult,p))
;return ((function (switch__5674__auto__,c__5689__auto___38267,mults,ensure_mult,p){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38263[0] = state_machine__5675__auto__);
(statearr_38263[1] = 1);
return statearr_38263;
});
var state_machine__5675__auto____1 = (function (state_38219){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38219);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38264){if((e38264 instanceof Object))
{var ex__5678__auto__ = e38264;var statearr_38265_38295 = state_38219;(statearr_38265_38295[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38219);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e38264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__38296 = state_38219;
state_38219 = G__38296;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38219){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38267,mults,ensure_mult,p))
})();var state__5691__auto__ = (function (){var statearr_38266 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38267);
return statearr_38266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38267,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5689__auto___38433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38433,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38433,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38403){var state_val_38404 = (state_38403[1]);if((state_val_38404 === 7))
{var state_38403__$1 = state_38403;var statearr_38405_38434 = state_38403__$1;(statearr_38405_38434[2] = null);
(statearr_38405_38434[1] = 8);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 1))
{var state_38403__$1 = state_38403;var statearr_38406_38435 = state_38403__$1;(statearr_38406_38435[2] = null);
(statearr_38406_38435[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 4))
{var inst_38367 = (state_38403[7]);var inst_38369 = (inst_38367 < cnt);var state_38403__$1 = state_38403;if(cljs.core.truth_(inst_38369))
{var statearr_38407_38436 = state_38403__$1;(statearr_38407_38436[1] = 6);
} else
{var statearr_38408_38437 = state_38403__$1;(statearr_38408_38437[1] = 7);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 15))
{var inst_38399 = (state_38403[2]);var state_38403__$1 = state_38403;var statearr_38409_38438 = state_38403__$1;(statearr_38409_38438[2] = inst_38399);
(statearr_38409_38438[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 13))
{var inst_38392 = cljs.core.async.close_BANG_(out);var state_38403__$1 = state_38403;var statearr_38410_38439 = state_38403__$1;(statearr_38410_38439[2] = inst_38392);
(statearr_38410_38439[1] = 15);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 6))
{var state_38403__$1 = state_38403;var statearr_38411_38440 = state_38403__$1;(statearr_38411_38440[2] = null);
(statearr_38411_38440[1] = 11);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 3))
{var inst_38401 = (state_38403[2]);var state_38403__$1 = state_38403;return cljs.core.async.impl.ioc_helpers.return_chan(state_38403__$1,inst_38401);
} else
{if((state_val_38404 === 12))
{var inst_38389 = (state_38403[8]);var inst_38389__$1 = (state_38403[2]);var inst_38390 = cljs.core.some(cljs.core.nil_QMARK_,inst_38389__$1);var state_38403__$1 = (function (){var statearr_38412 = state_38403;(statearr_38412[8] = inst_38389__$1);
return statearr_38412;
})();if(cljs.core.truth_(inst_38390))
{var statearr_38413_38441 = state_38403__$1;(statearr_38413_38441[1] = 13);
} else
{var statearr_38414_38442 = state_38403__$1;(statearr_38414_38442[1] = 14);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 2))
{var inst_38366 = cljs.core.reset_BANG_(dctr,cnt);var inst_38367 = 0;var state_38403__$1 = (function (){var statearr_38415 = state_38403;(statearr_38415[7] = inst_38367);
(statearr_38415[9] = inst_38366);
return statearr_38415;
})();var statearr_38416_38443 = state_38403__$1;(statearr_38416_38443[2] = null);
(statearr_38416_38443[1] = 4);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 11))
{var inst_38367 = (state_38403[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38403,10,Object,null,9);var inst_38376 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38367) : chs__$1.call(null,inst_38367));var inst_38377 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38367) : done.call(null,inst_38367));var inst_38378 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38376,inst_38377);var state_38403__$1 = state_38403;var statearr_38417_38444 = state_38403__$1;(statearr_38417_38444[2] = inst_38378);
cljs.core.async.impl.ioc_helpers.process_exception(state_38403__$1);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 9))
{var inst_38367 = (state_38403[7]);var inst_38380 = (state_38403[2]);var inst_38381 = (inst_38367 + 1);var inst_38367__$1 = inst_38381;var state_38403__$1 = (function (){var statearr_38418 = state_38403;(statearr_38418[7] = inst_38367__$1);
(statearr_38418[10] = inst_38380);
return statearr_38418;
})();var statearr_38419_38445 = state_38403__$1;(statearr_38419_38445[2] = null);
(statearr_38419_38445[1] = 4);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 5))
{var inst_38387 = (state_38403[2]);var state_38403__$1 = (function (){var statearr_38420 = state_38403;(statearr_38420[11] = inst_38387);
return statearr_38420;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38403__$1,12,dchan);
} else
{if((state_val_38404 === 14))
{var inst_38389 = (state_38403[8]);var inst_38394 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38389);var state_38403__$1 = state_38403;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38403__$1,16,out,inst_38394);
} else
{if((state_val_38404 === 16))
{var inst_38396 = (state_38403[2]);var state_38403__$1 = (function (){var statearr_38421 = state_38403;(statearr_38421[12] = inst_38396);
return statearr_38421;
})();var statearr_38422_38446 = state_38403__$1;(statearr_38422_38446[2] = null);
(statearr_38422_38446[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 10))
{var inst_38371 = (state_38403[2]);var inst_38372 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_38403__$1 = (function (){var statearr_38423 = state_38403;(statearr_38423[13] = inst_38371);
return statearr_38423;
})();var statearr_38424_38447 = state_38403__$1;(statearr_38424_38447[2] = inst_38372);
cljs.core.async.impl.ioc_helpers.process_exception(state_38403__$1);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38404 === 8))
{var inst_38385 = (state_38403[2]);var state_38403__$1 = state_38403;var statearr_38425_38448 = state_38403__$1;(statearr_38425_38448[2] = inst_38385);
(statearr_38425_38448[1] = 5);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___38433,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___38433,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38429[0] = state_machine__5675__auto__);
(statearr_38429[1] = 1);
return statearr_38429;
});
var state_machine__5675__auto____1 = (function (state_38403){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38403);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38430){if((e38430 instanceof Object))
{var ex__5678__auto__ = e38430;var statearr_38431_38449 = state_38403;(statearr_38431_38449[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38403);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e38430;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__38450 = state_38403;
state_38403 = G__38450;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38403){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38433,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_38432 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38433);
return statearr_38432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38433,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___38558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38558,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38558,out){
return (function (state_38534){var state_val_38535 = (state_38534[1]);if((state_val_38535 === 7))
{var inst_38514 = (state_38534[7]);var inst_38513 = (state_38534[8]);var inst_38513__$1 = (state_38534[2]);var inst_38514__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38513__$1,0,null);var inst_38515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38513__$1,1,null);var inst_38516 = (inst_38514__$1 == null);var state_38534__$1 = (function (){var statearr_38536 = state_38534;(statearr_38536[7] = inst_38514__$1);
(statearr_38536[9] = inst_38515);
(statearr_38536[8] = inst_38513__$1);
return statearr_38536;
})();if(cljs.core.truth_(inst_38516))
{var statearr_38537_38559 = state_38534__$1;(statearr_38537_38559[1] = 8);
} else
{var statearr_38538_38560 = state_38534__$1;(statearr_38538_38560[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38535 === 1))
{var inst_38505 = cljs.core.vec(chs);var inst_38506 = inst_38505;var state_38534__$1 = (function (){var statearr_38539 = state_38534;(statearr_38539[10] = inst_38506);
return statearr_38539;
})();var statearr_38540_38561 = state_38534__$1;(statearr_38540_38561[2] = null);
(statearr_38540_38561[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38535 === 4))
{var inst_38506 = (state_38534[10]);var state_38534__$1 = state_38534;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_38534__$1,7,inst_38506);
} else
{if((state_val_38535 === 6))
{var inst_38530 = (state_38534[2]);var state_38534__$1 = state_38534;var statearr_38541_38562 = state_38534__$1;(statearr_38541_38562[2] = inst_38530);
(statearr_38541_38562[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38535 === 3))
{var inst_38532 = (state_38534[2]);var state_38534__$1 = state_38534;return cljs.core.async.impl.ioc_helpers.return_chan(state_38534__$1,inst_38532);
} else
{if((state_val_38535 === 2))
{var inst_38506 = (state_38534[10]);var inst_38508 = cljs.core.count(inst_38506);var inst_38509 = (inst_38508 > 0);var state_38534__$1 = state_38534;if(cljs.core.truth_(inst_38509))
{var statearr_38543_38563 = state_38534__$1;(statearr_38543_38563[1] = 4);
} else
{var statearr_38544_38564 = state_38534__$1;(statearr_38544_38564[1] = 5);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38535 === 11))
{var inst_38506 = (state_38534[10]);var inst_38523 = (state_38534[2]);var tmp38542 = inst_38506;var inst_38506__$1 = tmp38542;var state_38534__$1 = (function (){var statearr_38545 = state_38534;(statearr_38545[11] = inst_38523);
(statearr_38545[10] = inst_38506__$1);
return statearr_38545;
})();var statearr_38546_38565 = state_38534__$1;(statearr_38546_38565[2] = null);
(statearr_38546_38565[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38535 === 9))
{var inst_38514 = (state_38534[7]);var state_38534__$1 = state_38534;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38534__$1,11,out,inst_38514);
} else
{if((state_val_38535 === 5))
{var inst_38528 = cljs.core.async.close_BANG_(out);var state_38534__$1 = state_38534;var statearr_38547_38566 = state_38534__$1;(statearr_38547_38566[2] = inst_38528);
(statearr_38547_38566[1] = 6);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38535 === 10))
{var inst_38526 = (state_38534[2]);var state_38534__$1 = state_38534;var statearr_38548_38567 = state_38534__$1;(statearr_38548_38567[2] = inst_38526);
(statearr_38548_38567[1] = 6);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38535 === 8))
{var inst_38506 = (state_38534[10]);var inst_38514 = (state_38534[7]);var inst_38515 = (state_38534[9]);var inst_38513 = (state_38534[8]);var inst_38518 = (function (){var c = inst_38515;var v = inst_38514;var vec__38511 = inst_38513;var cs = inst_38506;return ((function (c,v,vec__38511,cs,inst_38506,inst_38514,inst_38515,inst_38513,state_val_38535,c__5689__auto___38558,out){
return (function (p1__38451_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38451_SHARP_);
});
;})(c,v,vec__38511,cs,inst_38506,inst_38514,inst_38515,inst_38513,state_val_38535,c__5689__auto___38558,out))
})();var inst_38519 = cljs.core.filterv(inst_38518,inst_38506);var inst_38506__$1 = inst_38519;var state_38534__$1 = (function (){var statearr_38549 = state_38534;(statearr_38549[10] = inst_38506__$1);
return statearr_38549;
})();var statearr_38550_38568 = state_38534__$1;(statearr_38550_38568[2] = null);
(statearr_38550_38568[1] = 2);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___38558,out))
;return ((function (switch__5674__auto__,c__5689__auto___38558,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38554 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38554[0] = state_machine__5675__auto__);
(statearr_38554[1] = 1);
return statearr_38554;
});
var state_machine__5675__auto____1 = (function (state_38534){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38534);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38555){if((e38555 instanceof Object))
{var ex__5678__auto__ = e38555;var statearr_38556_38569 = state_38534;(statearr_38556_38569[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38534);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e38555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__38570 = state_38534;
state_38534 = G__38570;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38534){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38558,out))
})();var state__5691__auto__ = (function (){var statearr_38557 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38558);
return statearr_38557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38558,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___38663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38663,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38663,out){
return (function (state_38640){var state_val_38641 = (state_38640[1]);if((state_val_38641 === 7))
{var inst_38622 = (state_38640[7]);var inst_38622__$1 = (state_38640[2]);var inst_38623 = (inst_38622__$1 == null);var inst_38624 = cljs.core.not(inst_38623);var state_38640__$1 = (function (){var statearr_38642 = state_38640;(statearr_38642[7] = inst_38622__$1);
return statearr_38642;
})();if(inst_38624)
{var statearr_38643_38664 = state_38640__$1;(statearr_38643_38664[1] = 8);
} else
{var statearr_38644_38665 = state_38640__$1;(statearr_38644_38665[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38641 === 1))
{var inst_38617 = 0;var state_38640__$1 = (function (){var statearr_38645 = state_38640;(statearr_38645[8] = inst_38617);
return statearr_38645;
})();var statearr_38646_38666 = state_38640__$1;(statearr_38646_38666[2] = null);
(statearr_38646_38666[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38641 === 4))
{var state_38640__$1 = state_38640;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38640__$1,7,ch);
} else
{if((state_val_38641 === 6))
{var inst_38635 = (state_38640[2]);var state_38640__$1 = state_38640;var statearr_38647_38667 = state_38640__$1;(statearr_38647_38667[2] = inst_38635);
(statearr_38647_38667[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38641 === 3))
{var inst_38637 = (state_38640[2]);var inst_38638 = cljs.core.async.close_BANG_(out);var state_38640__$1 = (function (){var statearr_38648 = state_38640;(statearr_38648[9] = inst_38637);
return statearr_38648;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38640__$1,inst_38638);
} else
{if((state_val_38641 === 2))
{var inst_38617 = (state_38640[8]);var inst_38619 = (inst_38617 < n);var state_38640__$1 = state_38640;if(cljs.core.truth_(inst_38619))
{var statearr_38649_38668 = state_38640__$1;(statearr_38649_38668[1] = 4);
} else
{var statearr_38650_38669 = state_38640__$1;(statearr_38650_38669[1] = 5);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38641 === 11))
{var inst_38617 = (state_38640[8]);var inst_38627 = (state_38640[2]);var inst_38628 = (inst_38617 + 1);var inst_38617__$1 = inst_38628;var state_38640__$1 = (function (){var statearr_38651 = state_38640;(statearr_38651[8] = inst_38617__$1);
(statearr_38651[10] = inst_38627);
return statearr_38651;
})();var statearr_38652_38670 = state_38640__$1;(statearr_38652_38670[2] = null);
(statearr_38652_38670[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38641 === 9))
{var state_38640__$1 = state_38640;var statearr_38653_38671 = state_38640__$1;(statearr_38653_38671[2] = null);
(statearr_38653_38671[1] = 10);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38641 === 5))
{var state_38640__$1 = state_38640;var statearr_38654_38672 = state_38640__$1;(statearr_38654_38672[2] = null);
(statearr_38654_38672[1] = 6);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38641 === 10))
{var inst_38632 = (state_38640[2]);var state_38640__$1 = state_38640;var statearr_38655_38673 = state_38640__$1;(statearr_38655_38673[2] = inst_38632);
(statearr_38655_38673[1] = 6);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38641 === 8))
{var inst_38622 = (state_38640[7]);var state_38640__$1 = state_38640;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38640__$1,11,out,inst_38622);
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
});})(c__5689__auto___38663,out))
;return ((function (switch__5674__auto__,c__5689__auto___38663,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38659 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38659[0] = state_machine__5675__auto__);
(statearr_38659[1] = 1);
return statearr_38659;
});
var state_machine__5675__auto____1 = (function (state_38640){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38640);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38660){if((e38660 instanceof Object))
{var ex__5678__auto__ = e38660;var statearr_38661_38674 = state_38640;(statearr_38661_38674[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38640);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e38660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__38675 = state_38640;
state_38640 = G__38675;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38640){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38663,out))
})();var state__5691__auto__ = (function (){var statearr_38662 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38663);
return statearr_38662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38663,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___38772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38772,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38772,out){
return (function (state_38747){var state_val_38748 = (state_38747[1]);if((state_val_38748 === 7))
{var inst_38742 = (state_38747[2]);var state_38747__$1 = state_38747;var statearr_38749_38773 = state_38747__$1;(statearr_38749_38773[2] = inst_38742);
(statearr_38749_38773[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38748 === 1))
{var inst_38724 = null;var state_38747__$1 = (function (){var statearr_38750 = state_38747;(statearr_38750[7] = inst_38724);
return statearr_38750;
})();var statearr_38751_38774 = state_38747__$1;(statearr_38751_38774[2] = null);
(statearr_38751_38774[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38748 === 4))
{var inst_38727 = (state_38747[8]);var inst_38727__$1 = (state_38747[2]);var inst_38728 = (inst_38727__$1 == null);var inst_38729 = cljs.core.not(inst_38728);var state_38747__$1 = (function (){var statearr_38752 = state_38747;(statearr_38752[8] = inst_38727__$1);
return statearr_38752;
})();if(inst_38729)
{var statearr_38753_38775 = state_38747__$1;(statearr_38753_38775[1] = 5);
} else
{var statearr_38754_38776 = state_38747__$1;(statearr_38754_38776[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38748 === 6))
{var state_38747__$1 = state_38747;var statearr_38755_38777 = state_38747__$1;(statearr_38755_38777[2] = null);
(statearr_38755_38777[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38748 === 3))
{var inst_38744 = (state_38747[2]);var inst_38745 = cljs.core.async.close_BANG_(out);var state_38747__$1 = (function (){var statearr_38756 = state_38747;(statearr_38756[9] = inst_38744);
return statearr_38756;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38747__$1,inst_38745);
} else
{if((state_val_38748 === 2))
{var state_38747__$1 = state_38747;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38747__$1,4,ch);
} else
{if((state_val_38748 === 11))
{var inst_38727 = (state_38747[8]);var inst_38736 = (state_38747[2]);var inst_38724 = inst_38727;var state_38747__$1 = (function (){var statearr_38757 = state_38747;(statearr_38757[7] = inst_38724);
(statearr_38757[10] = inst_38736);
return statearr_38757;
})();var statearr_38758_38778 = state_38747__$1;(statearr_38758_38778[2] = null);
(statearr_38758_38778[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38748 === 9))
{var inst_38727 = (state_38747[8]);var state_38747__$1 = state_38747;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38747__$1,11,out,inst_38727);
} else
{if((state_val_38748 === 5))
{var inst_38727 = (state_38747[8]);var inst_38724 = (state_38747[7]);var inst_38731 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38727,inst_38724);var state_38747__$1 = state_38747;if(inst_38731)
{var statearr_38760_38779 = state_38747__$1;(statearr_38760_38779[1] = 8);
} else
{var statearr_38761_38780 = state_38747__$1;(statearr_38761_38780[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38748 === 10))
{var inst_38739 = (state_38747[2]);var state_38747__$1 = state_38747;var statearr_38762_38781 = state_38747__$1;(statearr_38762_38781[2] = inst_38739);
(statearr_38762_38781[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38748 === 8))
{var inst_38724 = (state_38747[7]);var tmp38759 = inst_38724;var inst_38724__$1 = tmp38759;var state_38747__$1 = (function (){var statearr_38763 = state_38747;(statearr_38763[7] = inst_38724__$1);
return statearr_38763;
})();var statearr_38764_38782 = state_38747__$1;(statearr_38764_38782[2] = null);
(statearr_38764_38782[1] = 2);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___38772,out))
;return ((function (switch__5674__auto__,c__5689__auto___38772,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38768 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38768[0] = state_machine__5675__auto__);
(statearr_38768[1] = 1);
return statearr_38768;
});
var state_machine__5675__auto____1 = (function (state_38747){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38747);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38769){if((e38769 instanceof Object))
{var ex__5678__auto__ = e38769;var statearr_38770_38783 = state_38747;(statearr_38770_38783[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38747);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e38769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__38784 = state_38747;
state_38747 = G__38784;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38747){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38772,out))
})();var state__5691__auto__ = (function (){var statearr_38771 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38772);
return statearr_38771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38772,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___38919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38919,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38919,out){
return (function (state_38889){var state_val_38890 = (state_38889[1]);if((state_val_38890 === 7))
{var inst_38885 = (state_38889[2]);var state_38889__$1 = state_38889;var statearr_38891_38920 = state_38889__$1;(statearr_38891_38920[2] = inst_38885);
(statearr_38891_38920[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 1))
{var inst_38852 = (new Array(n));var inst_38853 = inst_38852;var inst_38854 = 0;var state_38889__$1 = (function (){var statearr_38892 = state_38889;(statearr_38892[7] = inst_38854);
(statearr_38892[8] = inst_38853);
return statearr_38892;
})();var statearr_38893_38921 = state_38889__$1;(statearr_38893_38921[2] = null);
(statearr_38893_38921[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 4))
{var inst_38857 = (state_38889[9]);var inst_38857__$1 = (state_38889[2]);var inst_38858 = (inst_38857__$1 == null);var inst_38859 = cljs.core.not(inst_38858);var state_38889__$1 = (function (){var statearr_38894 = state_38889;(statearr_38894[9] = inst_38857__$1);
return statearr_38894;
})();if(inst_38859)
{var statearr_38895_38922 = state_38889__$1;(statearr_38895_38922[1] = 5);
} else
{var statearr_38896_38923 = state_38889__$1;(statearr_38896_38923[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 15))
{var inst_38879 = (state_38889[2]);var state_38889__$1 = state_38889;var statearr_38897_38924 = state_38889__$1;(statearr_38897_38924[2] = inst_38879);
(statearr_38897_38924[1] = 14);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 13))
{var state_38889__$1 = state_38889;var statearr_38898_38925 = state_38889__$1;(statearr_38898_38925[2] = null);
(statearr_38898_38925[1] = 14);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 6))
{var inst_38854 = (state_38889[7]);var inst_38875 = (inst_38854 > 0);var state_38889__$1 = state_38889;if(cljs.core.truth_(inst_38875))
{var statearr_38899_38926 = state_38889__$1;(statearr_38899_38926[1] = 12);
} else
{var statearr_38900_38927 = state_38889__$1;(statearr_38900_38927[1] = 13);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 3))
{var inst_38887 = (state_38889[2]);var state_38889__$1 = state_38889;return cljs.core.async.impl.ioc_helpers.return_chan(state_38889__$1,inst_38887);
} else
{if((state_val_38890 === 12))
{var inst_38853 = (state_38889[8]);var inst_38877 = cljs.core.vec(inst_38853);var state_38889__$1 = state_38889;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38889__$1,15,out,inst_38877);
} else
{if((state_val_38890 === 2))
{var state_38889__$1 = state_38889;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38889__$1,4,ch);
} else
{if((state_val_38890 === 11))
{var inst_38869 = (state_38889[2]);var inst_38870 = (new Array(n));var inst_38853 = inst_38870;var inst_38854 = 0;var state_38889__$1 = (function (){var statearr_38901 = state_38889;(statearr_38901[7] = inst_38854);
(statearr_38901[8] = inst_38853);
(statearr_38901[10] = inst_38869);
return statearr_38901;
})();var statearr_38902_38928 = state_38889__$1;(statearr_38902_38928[2] = null);
(statearr_38902_38928[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 9))
{var inst_38853 = (state_38889[8]);var inst_38867 = cljs.core.vec(inst_38853);var state_38889__$1 = state_38889;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38889__$1,11,out,inst_38867);
} else
{if((state_val_38890 === 5))
{var inst_38857 = (state_38889[9]);var inst_38862 = (state_38889[11]);var inst_38854 = (state_38889[7]);var inst_38853 = (state_38889[8]);var inst_38861 = (inst_38853[inst_38854] = inst_38857);var inst_38862__$1 = (inst_38854 + 1);var inst_38863 = (inst_38862__$1 < n);var state_38889__$1 = (function (){var statearr_38903 = state_38889;(statearr_38903[12] = inst_38861);
(statearr_38903[11] = inst_38862__$1);
return statearr_38903;
})();if(cljs.core.truth_(inst_38863))
{var statearr_38904_38929 = state_38889__$1;(statearr_38904_38929[1] = 8);
} else
{var statearr_38905_38930 = state_38889__$1;(statearr_38905_38930[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 14))
{var inst_38882 = (state_38889[2]);var inst_38883 = cljs.core.async.close_BANG_(out);var state_38889__$1 = (function (){var statearr_38907 = state_38889;(statearr_38907[13] = inst_38882);
return statearr_38907;
})();var statearr_38908_38931 = state_38889__$1;(statearr_38908_38931[2] = inst_38883);
(statearr_38908_38931[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 10))
{var inst_38873 = (state_38889[2]);var state_38889__$1 = state_38889;var statearr_38909_38932 = state_38889__$1;(statearr_38909_38932[2] = inst_38873);
(statearr_38909_38932[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_38890 === 8))
{var inst_38862 = (state_38889[11]);var inst_38853 = (state_38889[8]);var tmp38906 = inst_38853;var inst_38853__$1 = tmp38906;var inst_38854 = inst_38862;var state_38889__$1 = (function (){var statearr_38910 = state_38889;(statearr_38910[7] = inst_38854);
(statearr_38910[8] = inst_38853__$1);
return statearr_38910;
})();var statearr_38911_38933 = state_38889__$1;(statearr_38911_38933[2] = null);
(statearr_38911_38933[1] = 2);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___38919,out))
;return ((function (switch__5674__auto__,c__5689__auto___38919,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38915[0] = state_machine__5675__auto__);
(statearr_38915[1] = 1);
return statearr_38915;
});
var state_machine__5675__auto____1 = (function (state_38889){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38889);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38916){if((e38916 instanceof Object))
{var ex__5678__auto__ = e38916;var statearr_38917_38934 = state_38889;(statearr_38917_38934[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38889);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e38916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__38935 = state_38889;
state_38889 = G__38935;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38889){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38919,out))
})();var state__5691__auto__ = (function (){var statearr_38918 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38919);
return statearr_38918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38919,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___39078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___39078,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___39078,out){
return (function (state_39048){var state_val_39049 = (state_39048[1]);if((state_val_39049 === 7))
{var inst_39044 = (state_39048[2]);var state_39048__$1 = state_39048;var statearr_39050_39079 = state_39048__$1;(statearr_39050_39079[2] = inst_39044);
(statearr_39050_39079[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 1))
{var inst_39007 = [];var inst_39008 = inst_39007;var inst_39009 = cljs.core.constant$keyword$602;var state_39048__$1 = (function (){var statearr_39051 = state_39048;(statearr_39051[7] = inst_39008);
(statearr_39051[8] = inst_39009);
return statearr_39051;
})();var statearr_39052_39080 = state_39048__$1;(statearr_39052_39080[2] = null);
(statearr_39052_39080[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 4))
{var inst_39012 = (state_39048[9]);var inst_39012__$1 = (state_39048[2]);var inst_39013 = (inst_39012__$1 == null);var inst_39014 = cljs.core.not(inst_39013);var state_39048__$1 = (function (){var statearr_39053 = state_39048;(statearr_39053[9] = inst_39012__$1);
return statearr_39053;
})();if(inst_39014)
{var statearr_39054_39081 = state_39048__$1;(statearr_39054_39081[1] = 5);
} else
{var statearr_39055_39082 = state_39048__$1;(statearr_39055_39082[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 15))
{var inst_39038 = (state_39048[2]);var state_39048__$1 = state_39048;var statearr_39056_39083 = state_39048__$1;(statearr_39056_39083[2] = inst_39038);
(statearr_39056_39083[1] = 14);
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 13))
{var state_39048__$1 = state_39048;var statearr_39057_39084 = state_39048__$1;(statearr_39057_39084[2] = null);
(statearr_39057_39084[1] = 14);
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 6))
{var inst_39008 = (state_39048[7]);var inst_39033 = inst_39008.length;var inst_39034 = (inst_39033 > 0);var state_39048__$1 = state_39048;if(cljs.core.truth_(inst_39034))
{var statearr_39058_39085 = state_39048__$1;(statearr_39058_39085[1] = 12);
} else
{var statearr_39059_39086 = state_39048__$1;(statearr_39059_39086[1] = 13);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 3))
{var inst_39046 = (state_39048[2]);var state_39048__$1 = state_39048;return cljs.core.async.impl.ioc_helpers.return_chan(state_39048__$1,inst_39046);
} else
{if((state_val_39049 === 12))
{var inst_39008 = (state_39048[7]);var inst_39036 = cljs.core.vec(inst_39008);var state_39048__$1 = state_39048;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39048__$1,15,out,inst_39036);
} else
{if((state_val_39049 === 2))
{var state_39048__$1 = state_39048;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39048__$1,4,ch);
} else
{if((state_val_39049 === 11))
{var inst_39012 = (state_39048[9]);var inst_39016 = (state_39048[10]);var inst_39026 = (state_39048[2]);var inst_39027 = [];var inst_39028 = inst_39027.push(inst_39012);var inst_39008 = inst_39027;var inst_39009 = inst_39016;var state_39048__$1 = (function (){var statearr_39060 = state_39048;(statearr_39060[11] = inst_39026);
(statearr_39060[12] = inst_39028);
(statearr_39060[7] = inst_39008);
(statearr_39060[8] = inst_39009);
return statearr_39060;
})();var statearr_39061_39087 = state_39048__$1;(statearr_39061_39087[2] = null);
(statearr_39061_39087[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 9))
{var inst_39008 = (state_39048[7]);var inst_39024 = cljs.core.vec(inst_39008);var state_39048__$1 = state_39048;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39048__$1,11,out,inst_39024);
} else
{if((state_val_39049 === 5))
{var inst_39012 = (state_39048[9]);var inst_39009 = (state_39048[8]);var inst_39016 = (state_39048[10]);var inst_39016__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39012) : f.call(null,inst_39012));var inst_39017 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39016__$1,inst_39009);var inst_39018 = cljs.core.keyword_identical_QMARK_(inst_39009,cljs.core.constant$keyword$602);var inst_39019 = (inst_39017) || (inst_39018);var state_39048__$1 = (function (){var statearr_39062 = state_39048;(statearr_39062[10] = inst_39016__$1);
return statearr_39062;
})();if(cljs.core.truth_(inst_39019))
{var statearr_39063_39088 = state_39048__$1;(statearr_39063_39088[1] = 8);
} else
{var statearr_39064_39089 = state_39048__$1;(statearr_39064_39089[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 14))
{var inst_39041 = (state_39048[2]);var inst_39042 = cljs.core.async.close_BANG_(out);var state_39048__$1 = (function (){var statearr_39066 = state_39048;(statearr_39066[13] = inst_39041);
return statearr_39066;
})();var statearr_39067_39090 = state_39048__$1;(statearr_39067_39090[2] = inst_39042);
(statearr_39067_39090[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 10))
{var inst_39031 = (state_39048[2]);var state_39048__$1 = state_39048;var statearr_39068_39091 = state_39048__$1;(statearr_39068_39091[2] = inst_39031);
(statearr_39068_39091[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_39049 === 8))
{var inst_39008 = (state_39048[7]);var inst_39012 = (state_39048[9]);var inst_39016 = (state_39048[10]);var inst_39021 = inst_39008.push(inst_39012);var tmp39065 = inst_39008;var inst_39008__$1 = tmp39065;var inst_39009 = inst_39016;var state_39048__$1 = (function (){var statearr_39069 = state_39048;(statearr_39069[7] = inst_39008__$1);
(statearr_39069[14] = inst_39021);
(statearr_39069[8] = inst_39009);
return statearr_39069;
})();var statearr_39070_39092 = state_39048__$1;(statearr_39070_39092[2] = null);
(statearr_39070_39092[1] = 2);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto___39078,out))
;return ((function (switch__5674__auto__,c__5689__auto___39078,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_39074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39074[0] = state_machine__5675__auto__);
(statearr_39074[1] = 1);
return statearr_39074;
});
var state_machine__5675__auto____1 = (function (state_39048){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_39048);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e39075){if((e39075 instanceof Object))
{var ex__5678__auto__ = e39075;var statearr_39076_39093 = state_39048;(statearr_39076_39093[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39048);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e39075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__39094 = state_39048;
state_39048 = G__39094;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_39048){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_39048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___39078,out))
})();var state__5691__auto__ = (function (){var statearr_39077 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_39077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___39078);
return statearr_39077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___39078,out))
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
