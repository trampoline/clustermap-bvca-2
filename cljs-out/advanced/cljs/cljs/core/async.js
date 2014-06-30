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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t36522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36522 = (function (f,fn_handler,meta36523){
this.f = f;
this.fn_handler = fn_handler;
this.meta36523 = meta36523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36522.cljs$lang$type = true;
cljs.core.async.t36522.cljs$lang$ctorStr = "cljs.core.async/t36522";
cljs.core.async.t36522.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t36522");
});
cljs.core.async.t36522.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t36522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t36522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36524){var self__ = this;
var _36524__$1 = this;return self__.meta36523;
});
cljs.core.async.t36522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36524,meta36523__$1){var self__ = this;
var _36524__$1 = this;return (new cljs.core.async.t36522(self__.f,self__.fn_handler,meta36523__$1));
});
cljs.core.async.__GT_t36522 = (function __GT_t36522(f__$1,fn_handler__$1,meta36523){return (new cljs.core.async.t36522(f__$1,fn_handler__$1,meta36523));
});
}
return (new cljs.core.async.t36522(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__36526 = buff;if(G__36526)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__36526.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__36526.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36526);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36526);
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
{var val_36527 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36527) : fn1.call(null,val_36527));
} else
{cljs.core.async.impl.dispatch.run(((function (val_36527,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36527) : fn1.call(null,val_36527));
});})(val_36527,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3529__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___36528 = n;var x_36529 = 0;while(true){
if((x_36529 < n__4397__auto___36528))
{(a[x_36529] = 0);
{
var G__36530 = (x_36529 + 1);
x_36529 = G__36530;
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
var G__36531 = (i + 1);
i = G__36531;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t36535 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36535 = (function (flag,alt_flag,meta36536){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36536 = meta36536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36535.cljs$lang$type = true;
cljs.core.async.t36535.cljs$lang$ctorStr = "cljs.core.async/t36535";
cljs.core.async.t36535.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t36535");
});})(flag))
;
cljs.core.async.t36535.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t36535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t36535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36537){var self__ = this;
var _36537__$1 = this;return self__.meta36536;
});})(flag))
;
cljs.core.async.t36535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36537,meta36536__$1){var self__ = this;
var _36537__$1 = this;return (new cljs.core.async.t36535(self__.flag,self__.alt_flag,meta36536__$1));
});})(flag))
;
cljs.core.async.__GT_t36535 = ((function (flag){
return (function __GT_t36535(flag__$1,alt_flag__$1,meta36536){return (new cljs.core.async.t36535(flag__$1,alt_flag__$1,meta36536));
});})(flag))
;
}
return (new cljs.core.async.t36535(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t36541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36541 = (function (cb,flag,alt_handler,meta36542){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36542 = meta36542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36541.cljs$lang$type = true;
cljs.core.async.t36541.cljs$lang$ctorStr = "cljs.core.async/t36541";
cljs.core.async.t36541.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t36541");
});
cljs.core.async.t36541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t36541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t36541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36543){var self__ = this;
var _36543__$1 = this;return self__.meta36542;
});
cljs.core.async.t36541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36543,meta36542__$1){var self__ = this;
var _36543__$1 = this;return (new cljs.core.async.t36541(self__.cb,self__.flag,self__.alt_handler,meta36542__$1));
});
cljs.core.async.__GT_t36541 = (function __GT_t36541(cb__$1,flag__$1,alt_handler__$1,meta36542){return (new cljs.core.async.t36541(cb__$1,flag__$1,alt_handler__$1,meta36542));
});
}
return (new cljs.core.async.t36541(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$597.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36544_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36544_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36544_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__36545 = (i + 1);
i = G__36545;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3541__auto__ = ret;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$581))
{var temp__4126__auto__ = (function (){var and__3529__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3529__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$581.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$581], null));
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
var alts_BANG___delegate = function (ports,p__36546){var map__36548 = p__36546;var map__36548__$1 = ((cljs.core.seq_QMARK_(map__36548))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36548):map__36548);var opts = map__36548__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__36546 = null;if (arguments.length > 1) {
  p__36546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__36546);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36549){
var ports = cljs.core.first(arglist__36549);
var p__36546 = cljs.core.rest(arglist__36549);
return alts_BANG___delegate(ports,p__36546);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36557 = (function (ch,f,map_LT_,meta36558){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36558 = meta36558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36557.cljs$lang$type = true;
cljs.core.async.t36557.cljs$lang$ctorStr = "cljs.core.async/t36557";
cljs.core.async.t36557.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t36557");
});
cljs.core.async.t36557.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t36557.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t36560 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36560 = (function (fn1,_,meta36558,ch,f,map_LT_,meta36561){
this.fn1 = fn1;
this._ = _;
this.meta36558 = meta36558;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36561 = meta36561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36560.cljs$lang$type = true;
cljs.core.async.t36560.cljs$lang$ctorStr = "cljs.core.async/t36560";
cljs.core.async.t36560.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t36560");
});})(___$1))
;
cljs.core.async.t36560.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t36560.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t36560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__36550_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__36550_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36550_SHARP_) : self__.f.call(null,p1__36550_SHARP_)))) : f1.call(null,(((p1__36550_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36550_SHARP_) : self__.f.call(null,p1__36550_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t36560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36562){var self__ = this;
var _36562__$1 = this;return self__.meta36561;
});})(___$1))
;
cljs.core.async.t36560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36562,meta36561__$1){var self__ = this;
var _36562__$1 = this;return (new cljs.core.async.t36560(self__.fn1,self__._,self__.meta36558,self__.ch,self__.f,self__.map_LT_,meta36561__$1));
});})(___$1))
;
cljs.core.async.__GT_t36560 = ((function (___$1){
return (function __GT_t36560(fn1__$1,___$2,meta36558__$1,ch__$2,f__$2,map_LT___$2,meta36561){return (new cljs.core.async.t36560(fn1__$1,___$2,meta36558__$1,ch__$2,f__$2,map_LT___$2,meta36561));
});})(___$1))
;
}
return (new cljs.core.async.t36560(fn1,___$1,self__.meta36558,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t36557.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36559){var self__ = this;
var _36559__$1 = this;return self__.meta36558;
});
cljs.core.async.t36557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36559,meta36558__$1){var self__ = this;
var _36559__$1 = this;return (new cljs.core.async.t36557(self__.ch,self__.f,self__.map_LT_,meta36558__$1));
});
cljs.core.async.__GT_t36557 = (function __GT_t36557(ch__$1,f__$1,map_LT___$1,meta36558){return (new cljs.core.async.t36557(ch__$1,f__$1,map_LT___$1,meta36558));
});
}
return (new cljs.core.async.t36557(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36566 = (function (ch,f,map_GT_,meta36567){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36567 = meta36567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36566.cljs$lang$type = true;
cljs.core.async.t36566.cljs$lang$ctorStr = "cljs.core.async/t36566";
cljs.core.async.t36566.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t36566");
});
cljs.core.async.t36566.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t36566.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36566.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36568){var self__ = this;
var _36568__$1 = this;return self__.meta36567;
});
cljs.core.async.t36566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36568,meta36567__$1){var self__ = this;
var _36568__$1 = this;return (new cljs.core.async.t36566(self__.ch,self__.f,self__.map_GT_,meta36567__$1));
});
cljs.core.async.__GT_t36566 = (function __GT_t36566(ch__$1,f__$1,map_GT___$1,meta36567){return (new cljs.core.async.t36566(ch__$1,f__$1,map_GT___$1,meta36567));
});
}
return (new cljs.core.async.t36566(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36572 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36572 = (function (ch,p,filter_GT_,meta36573){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36573 = meta36573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36572.cljs$lang$type = true;
cljs.core.async.t36572.cljs$lang$ctorStr = "cljs.core.async/t36572";
cljs.core.async.t36572.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t36572");
});
cljs.core.async.t36572.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t36572.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36572.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36574){var self__ = this;
var _36574__$1 = this;return self__.meta36573;
});
cljs.core.async.t36572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36574,meta36573__$1){var self__ = this;
var _36574__$1 = this;return (new cljs.core.async.t36572(self__.ch,self__.p,self__.filter_GT_,meta36573__$1));
});
cljs.core.async.__GT_t36572 = (function __GT_t36572(ch__$1,p__$1,filter_GT___$1,meta36573){return (new cljs.core.async.t36572(ch__$1,p__$1,filter_GT___$1,meta36573));
});
}
return (new cljs.core.async.t36572(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___36657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___36657,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___36657,out){
return (function (state_36636){var state_val_36637 = (state_36636[1]);if((state_val_36637 === 7))
{var inst_36632 = (state_36636[2]);var state_36636__$1 = state_36636;var statearr_36638_36658 = state_36636__$1;(statearr_36638_36658[2] = inst_36632);
(statearr_36638_36658[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36637 === 1))
{var state_36636__$1 = state_36636;var statearr_36639_36659 = state_36636__$1;(statearr_36639_36659[2] = null);
(statearr_36639_36659[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36637 === 4))
{var inst_36618 = (state_36636[7]);var inst_36618__$1 = (state_36636[2]);var inst_36619 = (inst_36618__$1 == null);var state_36636__$1 = (function (){var statearr_36640 = state_36636;(statearr_36640[7] = inst_36618__$1);
return statearr_36640;
})();if(cljs.core.truth_(inst_36619))
{var statearr_36641_36660 = state_36636__$1;(statearr_36641_36660[1] = 5);
} else
{var statearr_36642_36661 = state_36636__$1;(statearr_36642_36661[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36637 === 6))
{var inst_36618 = (state_36636[7]);var inst_36623 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36618) : p.call(null,inst_36618));var state_36636__$1 = state_36636;if(cljs.core.truth_(inst_36623))
{var statearr_36643_36662 = state_36636__$1;(statearr_36643_36662[1] = 8);
} else
{var statearr_36644_36663 = state_36636__$1;(statearr_36644_36663[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36637 === 3))
{var inst_36634 = (state_36636[2]);var state_36636__$1 = state_36636;return cljs.core.async.impl.ioc_helpers.return_chan(state_36636__$1,inst_36634);
} else
{if((state_val_36637 === 2))
{var state_36636__$1 = state_36636;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36636__$1,4,ch);
} else
{if((state_val_36637 === 11))
{var inst_36626 = (state_36636[2]);var state_36636__$1 = state_36636;var statearr_36645_36664 = state_36636__$1;(statearr_36645_36664[2] = inst_36626);
(statearr_36645_36664[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36637 === 9))
{var state_36636__$1 = state_36636;var statearr_36646_36665 = state_36636__$1;(statearr_36646_36665[2] = null);
(statearr_36646_36665[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36637 === 5))
{var inst_36621 = cljs.core.async.close_BANG_(out);var state_36636__$1 = state_36636;var statearr_36647_36666 = state_36636__$1;(statearr_36647_36666[2] = inst_36621);
(statearr_36647_36666[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36637 === 10))
{var inst_36629 = (state_36636[2]);var state_36636__$1 = (function (){var statearr_36648 = state_36636;(statearr_36648[8] = inst_36629);
return statearr_36648;
})();var statearr_36649_36667 = state_36636__$1;(statearr_36649_36667[2] = null);
(statearr_36649_36667[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36637 === 8))
{var inst_36618 = (state_36636[7]);var state_36636__$1 = state_36636;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36636__$1,11,out,inst_36618);
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
});})(c__5691__auto___36657,out))
;return ((function (switch__5676__auto__,c__5691__auto___36657,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_36653 = [null,null,null,null,null,null,null,null,null];(statearr_36653[0] = state_machine__5677__auto__);
(statearr_36653[1] = 1);
return statearr_36653;
});
var state_machine__5677__auto____1 = (function (state_36636){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_36636);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e36654){if((e36654 instanceof Object))
{var ex__5680__auto__ = e36654;var statearr_36655_36668 = state_36636;(statearr_36655_36668[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36636);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e36654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__36669 = state_36636;
state_36636 = G__36669;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_36636){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_36636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___36657,out))
})();var state__5693__auto__ = (function (){var statearr_36656 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_36656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___36657);
return statearr_36656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___36657,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_36821){var state_val_36822 = (state_36821[1]);if((state_val_36822 === 7))
{var inst_36817 = (state_36821[2]);var state_36821__$1 = state_36821;var statearr_36823_36860 = state_36821__$1;(statearr_36823_36860[2] = inst_36817);
(statearr_36823_36860[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 20))
{var inst_36792 = (state_36821[7]);var inst_36803 = (state_36821[2]);var inst_36804 = cljs.core.next(inst_36792);var inst_36778 = inst_36804;var inst_36779 = null;var inst_36780 = 0;var inst_36781 = 0;var state_36821__$1 = (function (){var statearr_36824 = state_36821;(statearr_36824[8] = inst_36779);
(statearr_36824[9] = inst_36803);
(statearr_36824[10] = inst_36780);
(statearr_36824[11] = inst_36778);
(statearr_36824[12] = inst_36781);
return statearr_36824;
})();var statearr_36825_36861 = state_36821__$1;(statearr_36825_36861[2] = null);
(statearr_36825_36861[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 1))
{var state_36821__$1 = state_36821;var statearr_36826_36862 = state_36821__$1;(statearr_36826_36862[2] = null);
(statearr_36826_36862[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 4))
{var inst_36767 = (state_36821[13]);var inst_36767__$1 = (state_36821[2]);var inst_36768 = (inst_36767__$1 == null);var state_36821__$1 = (function (){var statearr_36830 = state_36821;(statearr_36830[13] = inst_36767__$1);
return statearr_36830;
})();if(cljs.core.truth_(inst_36768))
{var statearr_36831_36863 = state_36821__$1;(statearr_36831_36863[1] = 5);
} else
{var statearr_36832_36864 = state_36821__$1;(statearr_36832_36864[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 15))
{var state_36821__$1 = state_36821;var statearr_36833_36865 = state_36821__$1;(statearr_36833_36865[2] = null);
(statearr_36833_36865[1] = 16);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 13))
{var inst_36779 = (state_36821[8]);var inst_36780 = (state_36821[10]);var inst_36778 = (state_36821[11]);var inst_36781 = (state_36821[12]);var inst_36788 = (state_36821[2]);var inst_36789 = (inst_36781 + 1);var tmp36827 = inst_36779;var tmp36828 = inst_36780;var tmp36829 = inst_36778;var inst_36778__$1 = tmp36829;var inst_36779__$1 = tmp36827;var inst_36780__$1 = tmp36828;var inst_36781__$1 = inst_36789;var state_36821__$1 = (function (){var statearr_36834 = state_36821;(statearr_36834[8] = inst_36779__$1);
(statearr_36834[10] = inst_36780__$1);
(statearr_36834[14] = inst_36788);
(statearr_36834[11] = inst_36778__$1);
(statearr_36834[12] = inst_36781__$1);
return statearr_36834;
})();var statearr_36835_36866 = state_36821__$1;(statearr_36835_36866[2] = null);
(statearr_36835_36866[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 6))
{var inst_36767 = (state_36821[13]);var inst_36772 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36767) : f.call(null,inst_36767));var inst_36777 = cljs.core.seq(inst_36772);var inst_36778 = inst_36777;var inst_36779 = null;var inst_36780 = 0;var inst_36781 = 0;var state_36821__$1 = (function (){var statearr_36836 = state_36821;(statearr_36836[8] = inst_36779);
(statearr_36836[10] = inst_36780);
(statearr_36836[11] = inst_36778);
(statearr_36836[12] = inst_36781);
return statearr_36836;
})();var statearr_36837_36867 = state_36821__$1;(statearr_36837_36867[2] = null);
(statearr_36837_36867[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 17))
{var inst_36792 = (state_36821[7]);var inst_36796 = cljs.core.chunk_first(inst_36792);var inst_36797 = cljs.core.chunk_rest(inst_36792);var inst_36798 = cljs.core.count(inst_36796);var inst_36778 = inst_36797;var inst_36779 = inst_36796;var inst_36780 = inst_36798;var inst_36781 = 0;var state_36821__$1 = (function (){var statearr_36838 = state_36821;(statearr_36838[8] = inst_36779);
(statearr_36838[10] = inst_36780);
(statearr_36838[11] = inst_36778);
(statearr_36838[12] = inst_36781);
return statearr_36838;
})();var statearr_36839_36868 = state_36821__$1;(statearr_36839_36868[2] = null);
(statearr_36839_36868[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 3))
{var inst_36819 = (state_36821[2]);var state_36821__$1 = state_36821;return cljs.core.async.impl.ioc_helpers.return_chan(state_36821__$1,inst_36819);
} else
{if((state_val_36822 === 12))
{var inst_36812 = (state_36821[2]);var state_36821__$1 = state_36821;var statearr_36840_36869 = state_36821__$1;(statearr_36840_36869[2] = inst_36812);
(statearr_36840_36869[1] = 9);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 2))
{var state_36821__$1 = state_36821;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36821__$1,4,in$);
} else
{if((state_val_36822 === 19))
{var inst_36807 = (state_36821[2]);var state_36821__$1 = state_36821;var statearr_36841_36870 = state_36821__$1;(statearr_36841_36870[2] = inst_36807);
(statearr_36841_36870[1] = 16);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 11))
{var inst_36778 = (state_36821[11]);var inst_36792 = (state_36821[7]);var inst_36792__$1 = cljs.core.seq(inst_36778);var state_36821__$1 = (function (){var statearr_36842 = state_36821;(statearr_36842[7] = inst_36792__$1);
return statearr_36842;
})();if(inst_36792__$1)
{var statearr_36843_36871 = state_36821__$1;(statearr_36843_36871[1] = 14);
} else
{var statearr_36844_36872 = state_36821__$1;(statearr_36844_36872[1] = 15);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 9))
{var inst_36814 = (state_36821[2]);var state_36821__$1 = (function (){var statearr_36845 = state_36821;(statearr_36845[15] = inst_36814);
return statearr_36845;
})();var statearr_36846_36873 = state_36821__$1;(statearr_36846_36873[2] = null);
(statearr_36846_36873[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 5))
{var inst_36770 = cljs.core.async.close_BANG_(out);var state_36821__$1 = state_36821;var statearr_36847_36874 = state_36821__$1;(statearr_36847_36874[2] = inst_36770);
(statearr_36847_36874[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 14))
{var inst_36792 = (state_36821[7]);var inst_36794 = cljs.core.chunked_seq_QMARK_(inst_36792);var state_36821__$1 = state_36821;if(inst_36794)
{var statearr_36848_36875 = state_36821__$1;(statearr_36848_36875[1] = 17);
} else
{var statearr_36849_36876 = state_36821__$1;(statearr_36849_36876[1] = 18);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 16))
{var inst_36810 = (state_36821[2]);var state_36821__$1 = state_36821;var statearr_36850_36877 = state_36821__$1;(statearr_36850_36877[2] = inst_36810);
(statearr_36850_36877[1] = 12);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36822 === 10))
{var inst_36779 = (state_36821[8]);var inst_36781 = (state_36821[12]);var inst_36786 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36779,inst_36781);var state_36821__$1 = state_36821;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36821__$1,13,out,inst_36786);
} else
{if((state_val_36822 === 18))
{var inst_36792 = (state_36821[7]);var inst_36801 = cljs.core.first(inst_36792);var state_36821__$1 = state_36821;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36821__$1,20,out,inst_36801);
} else
{if((state_val_36822 === 8))
{var inst_36780 = (state_36821[10]);var inst_36781 = (state_36821[12]);var inst_36783 = (inst_36781 < inst_36780);var inst_36784 = inst_36783;var state_36821__$1 = state_36821;if(cljs.core.truth_(inst_36784))
{var statearr_36851_36878 = state_36821__$1;(statearr_36851_36878[1] = 10);
} else
{var statearr_36852_36879 = state_36821__$1;(statearr_36852_36879[1] = 11);
}
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_36856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36856[0] = state_machine__5677__auto__);
(statearr_36856[1] = 1);
return statearr_36856;
});
var state_machine__5677__auto____1 = (function (state_36821){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_36821);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e36857){if((e36857 instanceof Object))
{var ex__5680__auto__ = e36857;var statearr_36858_36880 = state_36821;(statearr_36858_36880[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36821);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e36857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__36881 = state_36821;
state_36821 = G__36881;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_36821){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_36821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_36859 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_36859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_36859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5691__auto___36962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___36962){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___36962){
return (function (state_36941){var state_val_36942 = (state_36941[1]);if((state_val_36942 === 7))
{var inst_36937 = (state_36941[2]);var state_36941__$1 = state_36941;var statearr_36943_36963 = state_36941__$1;(statearr_36943_36963[2] = inst_36937);
(statearr_36943_36963[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36942 === 1))
{var state_36941__$1 = state_36941;var statearr_36944_36964 = state_36941__$1;(statearr_36944_36964[2] = null);
(statearr_36944_36964[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36942 === 4))
{var inst_36924 = (state_36941[7]);var inst_36924__$1 = (state_36941[2]);var inst_36925 = (inst_36924__$1 == null);var state_36941__$1 = (function (){var statearr_36945 = state_36941;(statearr_36945[7] = inst_36924__$1);
return statearr_36945;
})();if(cljs.core.truth_(inst_36925))
{var statearr_36946_36965 = state_36941__$1;(statearr_36946_36965[1] = 5);
} else
{var statearr_36947_36966 = state_36941__$1;(statearr_36947_36966[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36942 === 6))
{var inst_36924 = (state_36941[7]);var state_36941__$1 = state_36941;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36941__$1,11,to,inst_36924);
} else
{if((state_val_36942 === 3))
{var inst_36939 = (state_36941[2]);var state_36941__$1 = state_36941;return cljs.core.async.impl.ioc_helpers.return_chan(state_36941__$1,inst_36939);
} else
{if((state_val_36942 === 2))
{var state_36941__$1 = state_36941;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36941__$1,4,from);
} else
{if((state_val_36942 === 11))
{var inst_36934 = (state_36941[2]);var state_36941__$1 = (function (){var statearr_36948 = state_36941;(statearr_36948[8] = inst_36934);
return statearr_36948;
})();var statearr_36949_36967 = state_36941__$1;(statearr_36949_36967[2] = null);
(statearr_36949_36967[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36942 === 9))
{var state_36941__$1 = state_36941;var statearr_36950_36968 = state_36941__$1;(statearr_36950_36968[2] = null);
(statearr_36950_36968[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36942 === 5))
{var state_36941__$1 = state_36941;if(cljs.core.truth_(close_QMARK_))
{var statearr_36951_36969 = state_36941__$1;(statearr_36951_36969[1] = 8);
} else
{var statearr_36952_36970 = state_36941__$1;(statearr_36952_36970[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36942 === 10))
{var inst_36931 = (state_36941[2]);var state_36941__$1 = state_36941;var statearr_36953_36971 = state_36941__$1;(statearr_36953_36971[2] = inst_36931);
(statearr_36953_36971[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36942 === 8))
{var inst_36928 = cljs.core.async.close_BANG_(to);var state_36941__$1 = state_36941;var statearr_36954_36972 = state_36941__$1;(statearr_36954_36972[2] = inst_36928);
(statearr_36954_36972[1] = 10);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___36962))
;return ((function (switch__5676__auto__,c__5691__auto___36962){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_36958 = [null,null,null,null,null,null,null,null,null];(statearr_36958[0] = state_machine__5677__auto__);
(statearr_36958[1] = 1);
return statearr_36958;
});
var state_machine__5677__auto____1 = (function (state_36941){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_36941);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e36959){if((e36959 instanceof Object))
{var ex__5680__auto__ = e36959;var statearr_36960_36973 = state_36941;(statearr_36960_36973[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36941);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e36959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__36974 = state_36941;
state_36941 = G__36974;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_36941){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_36941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___36962))
})();var state__5693__auto__ = (function (){var statearr_36961 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_36961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___36962);
return statearr_36961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___36962))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5691__auto___37061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___37061,tc,fc){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___37061,tc,fc){
return (function (state_37039){var state_val_37040 = (state_37039[1]);if((state_val_37040 === 7))
{var inst_37035 = (state_37039[2]);var state_37039__$1 = state_37039;var statearr_37041_37062 = state_37039__$1;(statearr_37041_37062[2] = inst_37035);
(statearr_37041_37062[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37040 === 1))
{var state_37039__$1 = state_37039;var statearr_37042_37063 = state_37039__$1;(statearr_37042_37063[2] = null);
(statearr_37042_37063[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37040 === 4))
{var inst_37020 = (state_37039[7]);var inst_37020__$1 = (state_37039[2]);var inst_37021 = (inst_37020__$1 == null);var state_37039__$1 = (function (){var statearr_37043 = state_37039;(statearr_37043[7] = inst_37020__$1);
return statearr_37043;
})();if(cljs.core.truth_(inst_37021))
{var statearr_37044_37064 = state_37039__$1;(statearr_37044_37064[1] = 5);
} else
{var statearr_37045_37065 = state_37039__$1;(statearr_37045_37065[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37040 === 6))
{var inst_37020 = (state_37039[7]);var inst_37026 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37020) : p.call(null,inst_37020));var state_37039__$1 = state_37039;if(cljs.core.truth_(inst_37026))
{var statearr_37046_37066 = state_37039__$1;(statearr_37046_37066[1] = 9);
} else
{var statearr_37047_37067 = state_37039__$1;(statearr_37047_37067[1] = 10);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37040 === 3))
{var inst_37037 = (state_37039[2]);var state_37039__$1 = state_37039;return cljs.core.async.impl.ioc_helpers.return_chan(state_37039__$1,inst_37037);
} else
{if((state_val_37040 === 2))
{var state_37039__$1 = state_37039;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37039__$1,4,ch);
} else
{if((state_val_37040 === 11))
{var inst_37020 = (state_37039[7]);var inst_37030 = (state_37039[2]);var state_37039__$1 = state_37039;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37039__$1,8,inst_37030,inst_37020);
} else
{if((state_val_37040 === 9))
{var state_37039__$1 = state_37039;var statearr_37048_37068 = state_37039__$1;(statearr_37048_37068[2] = tc);
(statearr_37048_37068[1] = 11);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37040 === 5))
{var inst_37023 = cljs.core.async.close_BANG_(tc);var inst_37024 = cljs.core.async.close_BANG_(fc);var state_37039__$1 = (function (){var statearr_37049 = state_37039;(statearr_37049[8] = inst_37023);
return statearr_37049;
})();var statearr_37050_37069 = state_37039__$1;(statearr_37050_37069[2] = inst_37024);
(statearr_37050_37069[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37040 === 10))
{var state_37039__$1 = state_37039;var statearr_37051_37070 = state_37039__$1;(statearr_37051_37070[2] = fc);
(statearr_37051_37070[1] = 11);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37040 === 8))
{var inst_37032 = (state_37039[2]);var state_37039__$1 = (function (){var statearr_37052 = state_37039;(statearr_37052[9] = inst_37032);
return statearr_37052;
})();var statearr_37053_37071 = state_37039__$1;(statearr_37053_37071[2] = null);
(statearr_37053_37071[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___37061,tc,fc))
;return ((function (switch__5676__auto__,c__5691__auto___37061,tc,fc){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37057 = [null,null,null,null,null,null,null,null,null,null];(statearr_37057[0] = state_machine__5677__auto__);
(statearr_37057[1] = 1);
return statearr_37057;
});
var state_machine__5677__auto____1 = (function (state_37039){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37039);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37058){if((e37058 instanceof Object))
{var ex__5680__auto__ = e37058;var statearr_37059_37072 = state_37039;(statearr_37059_37072[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37039);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__37073 = state_37039;
state_37039 = G__37073;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37039){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___37061,tc,fc))
})();var state__5693__auto__ = (function (){var statearr_37060 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___37061);
return statearr_37060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___37061,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_37120){var state_val_37121 = (state_37120[1]);if((state_val_37121 === 7))
{var inst_37116 = (state_37120[2]);var state_37120__$1 = state_37120;var statearr_37122_37138 = state_37120__$1;(statearr_37122_37138[2] = inst_37116);
(statearr_37122_37138[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37121 === 6))
{var inst_37106 = (state_37120[7]);var inst_37109 = (state_37120[8]);var inst_37113 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37106,inst_37109) : f.call(null,inst_37106,inst_37109));var inst_37106__$1 = inst_37113;var state_37120__$1 = (function (){var statearr_37123 = state_37120;(statearr_37123[7] = inst_37106__$1);
return statearr_37123;
})();var statearr_37124_37139 = state_37120__$1;(statearr_37124_37139[2] = null);
(statearr_37124_37139[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37121 === 5))
{var inst_37106 = (state_37120[7]);var state_37120__$1 = state_37120;var statearr_37125_37140 = state_37120__$1;(statearr_37125_37140[2] = inst_37106);
(statearr_37125_37140[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37121 === 4))
{var inst_37109 = (state_37120[8]);var inst_37109__$1 = (state_37120[2]);var inst_37110 = (inst_37109__$1 == null);var state_37120__$1 = (function (){var statearr_37126 = state_37120;(statearr_37126[8] = inst_37109__$1);
return statearr_37126;
})();if(cljs.core.truth_(inst_37110))
{var statearr_37127_37141 = state_37120__$1;(statearr_37127_37141[1] = 5);
} else
{var statearr_37128_37142 = state_37120__$1;(statearr_37128_37142[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37121 === 3))
{var inst_37118 = (state_37120[2]);var state_37120__$1 = state_37120;return cljs.core.async.impl.ioc_helpers.return_chan(state_37120__$1,inst_37118);
} else
{if((state_val_37121 === 2))
{var state_37120__$1 = state_37120;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37120__$1,4,ch);
} else
{if((state_val_37121 === 1))
{var inst_37106 = init;var state_37120__$1 = (function (){var statearr_37129 = state_37120;(statearr_37129[7] = inst_37106);
return statearr_37129;
})();var statearr_37130_37143 = state_37120__$1;(statearr_37130_37143[2] = null);
(statearr_37130_37143[1] = 2);
return cljs.core.constant$keyword$591;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37134 = [null,null,null,null,null,null,null,null,null];(statearr_37134[0] = state_machine__5677__auto__);
(statearr_37134[1] = 1);
return statearr_37134;
});
var state_machine__5677__auto____1 = (function (state_37120){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37120);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37135){if((e37135 instanceof Object))
{var ex__5680__auto__ = e37135;var statearr_37136_37144 = state_37120;(statearr_37136_37144[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37120);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__37145 = state_37120;
state_37120 = G__37145;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37120){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_37137 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_37137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_37207){var state_val_37208 = (state_37207[1]);if((state_val_37208 === 7))
{var inst_37188 = (state_37207[7]);var inst_37193 = (state_37207[2]);var inst_37194 = cljs.core.next(inst_37188);var inst_37188__$1 = inst_37194;var state_37207__$1 = (function (){var statearr_37209 = state_37207;(statearr_37209[7] = inst_37188__$1);
(statearr_37209[8] = inst_37193);
return statearr_37209;
})();var statearr_37210_37228 = state_37207__$1;(statearr_37210_37228[2] = null);
(statearr_37210_37228[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37208 === 1))
{var inst_37187 = cljs.core.seq(coll);var inst_37188 = inst_37187;var state_37207__$1 = (function (){var statearr_37211 = state_37207;(statearr_37211[7] = inst_37188);
return statearr_37211;
})();var statearr_37212_37229 = state_37207__$1;(statearr_37212_37229[2] = null);
(statearr_37212_37229[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37208 === 4))
{var inst_37188 = (state_37207[7]);var inst_37191 = cljs.core.first(inst_37188);var state_37207__$1 = state_37207;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37207__$1,7,ch,inst_37191);
} else
{if((state_val_37208 === 6))
{var inst_37203 = (state_37207[2]);var state_37207__$1 = state_37207;var statearr_37213_37230 = state_37207__$1;(statearr_37213_37230[2] = inst_37203);
(statearr_37213_37230[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37208 === 3))
{var inst_37205 = (state_37207[2]);var state_37207__$1 = state_37207;return cljs.core.async.impl.ioc_helpers.return_chan(state_37207__$1,inst_37205);
} else
{if((state_val_37208 === 2))
{var inst_37188 = (state_37207[7]);var state_37207__$1 = state_37207;if(cljs.core.truth_(inst_37188))
{var statearr_37214_37231 = state_37207__$1;(statearr_37214_37231[1] = 4);
} else
{var statearr_37215_37232 = state_37207__$1;(statearr_37215_37232[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37208 === 9))
{var state_37207__$1 = state_37207;var statearr_37216_37233 = state_37207__$1;(statearr_37216_37233[2] = null);
(statearr_37216_37233[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37208 === 5))
{var state_37207__$1 = state_37207;if(cljs.core.truth_(close_QMARK_))
{var statearr_37217_37234 = state_37207__$1;(statearr_37217_37234[1] = 8);
} else
{var statearr_37218_37235 = state_37207__$1;(statearr_37218_37235[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37208 === 10))
{var inst_37201 = (state_37207[2]);var state_37207__$1 = state_37207;var statearr_37219_37236 = state_37207__$1;(statearr_37219_37236[2] = inst_37201);
(statearr_37219_37236[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37208 === 8))
{var inst_37198 = cljs.core.async.close_BANG_(ch);var state_37207__$1 = state_37207;var statearr_37220_37237 = state_37207__$1;(statearr_37220_37237[2] = inst_37198);
(statearr_37220_37237[1] = 10);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37224 = [null,null,null,null,null,null,null,null,null];(statearr_37224[0] = state_machine__5677__auto__);
(statearr_37224[1] = 1);
return statearr_37224;
});
var state_machine__5677__auto____1 = (function (state_37207){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37207);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37225){if((e37225 instanceof Object))
{var ex__5680__auto__ = e37225;var statearr_37226_37238 = state_37207;(statearr_37226_37238[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37207);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37225;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__37239 = state_37207;
state_37207 = G__37239;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37207){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_37227 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_37227;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
cljs.core.async.Mux = (function (){var obj37241 = {};return obj37241;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3529__auto__ = _;if(and__3529__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4168__auto__ = (((_ == null))?null:_);return (function (){var or__3541__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj37243 = {};return obj37243;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t37467 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37467 = (function (cs,ch,mult,meta37468){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37468 = meta37468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37467.cljs$lang$type = true;
cljs.core.async.t37467.cljs$lang$ctorStr = "cljs.core.async/t37467";
cljs.core.async.t37467.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t37467");
});})(cs))
;
cljs.core.async.t37467.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t37467.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t37467.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t37467.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t37467.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37467.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t37467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37469){var self__ = this;
var _37469__$1 = this;return self__.meta37468;
});})(cs))
;
cljs.core.async.t37467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37469,meta37468__$1){var self__ = this;
var _37469__$1 = this;return (new cljs.core.async.t37467(self__.cs,self__.ch,self__.mult,meta37468__$1));
});})(cs))
;
cljs.core.async.__GT_t37467 = ((function (cs){
return (function __GT_t37467(cs__$1,ch__$1,mult__$1,meta37468){return (new cljs.core.async.t37467(cs__$1,ch__$1,mult__$1,meta37468));
});})(cs))
;
}
return (new cljs.core.async.t37467(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5691__auto___37690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___37690,cs,m,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___37690,cs,m,dchan,dctr,done){
return (function (state_37604){var state_val_37605 = (state_37604[1]);if((state_val_37605 === 7))
{var inst_37600 = (state_37604[2]);var state_37604__$1 = state_37604;var statearr_37606_37691 = state_37604__$1;(statearr_37606_37691[2] = inst_37600);
(statearr_37606_37691[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 20))
{var inst_37501 = (state_37604[7]);var inst_37511 = cljs.core.first(inst_37501);var inst_37512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37511,0,null);var inst_37513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37511,1,null);var state_37604__$1 = (function (){var statearr_37607 = state_37604;(statearr_37607[8] = inst_37512);
return statearr_37607;
})();if(cljs.core.truth_(inst_37513))
{var statearr_37608_37692 = state_37604__$1;(statearr_37608_37692[1] = 22);
} else
{var statearr_37609_37693 = state_37604__$1;(statearr_37609_37693[1] = 23);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 27))
{var inst_37541 = (state_37604[9]);var inst_37543 = (state_37604[10]);var inst_37548 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37541,inst_37543);var state_37604__$1 = (function (){var statearr_37610 = state_37604;(statearr_37610[11] = inst_37548);
return statearr_37610;
})();var statearr_37611_37694 = state_37604__$1;(statearr_37611_37694[2] = null);
(statearr_37611_37694[1] = 32);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 1))
{var state_37604__$1 = state_37604;var statearr_37612_37695 = state_37604__$1;(statearr_37612_37695[2] = null);
(statearr_37612_37695[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 24))
{var inst_37501 = (state_37604[7]);var inst_37518 = (state_37604[2]);var inst_37519 = cljs.core.next(inst_37501);var inst_37481 = inst_37519;var inst_37482 = null;var inst_37483 = 0;var inst_37484 = 0;var state_37604__$1 = (function (){var statearr_37613 = state_37604;(statearr_37613[12] = inst_37518);
(statearr_37613[13] = inst_37481);
(statearr_37613[14] = inst_37484);
(statearr_37613[15] = inst_37482);
(statearr_37613[16] = inst_37483);
return statearr_37613;
})();var statearr_37614_37696 = state_37604__$1;(statearr_37614_37696[2] = null);
(statearr_37614_37696[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 39))
{var inst_37561 = (state_37604[17]);var inst_37579 = (state_37604[2]);var inst_37580 = cljs.core.next(inst_37561);var inst_37540 = inst_37580;var inst_37541 = null;var inst_37542 = 0;var inst_37543 = 0;var state_37604__$1 = (function (){var statearr_37618 = state_37604;(statearr_37618[18] = inst_37542);
(statearr_37618[19] = inst_37579);
(statearr_37618[20] = inst_37540);
(statearr_37618[9] = inst_37541);
(statearr_37618[10] = inst_37543);
return statearr_37618;
})();var statearr_37619_37697 = state_37604__$1;(statearr_37619_37697[2] = null);
(statearr_37619_37697[1] = 25);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 4))
{var inst_37472 = (state_37604[21]);var inst_37472__$1 = (state_37604[2]);var inst_37473 = (inst_37472__$1 == null);var state_37604__$1 = (function (){var statearr_37620 = state_37604;(statearr_37620[21] = inst_37472__$1);
return statearr_37620;
})();if(cljs.core.truth_(inst_37473))
{var statearr_37621_37698 = state_37604__$1;(statearr_37621_37698[1] = 5);
} else
{var statearr_37622_37699 = state_37604__$1;(statearr_37622_37699[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 15))
{var inst_37481 = (state_37604[13]);var inst_37484 = (state_37604[14]);var inst_37482 = (state_37604[15]);var inst_37483 = (state_37604[16]);var inst_37497 = (state_37604[2]);var inst_37498 = (inst_37484 + 1);var tmp37615 = inst_37481;var tmp37616 = inst_37482;var tmp37617 = inst_37483;var inst_37481__$1 = tmp37615;var inst_37482__$1 = tmp37616;var inst_37483__$1 = tmp37617;var inst_37484__$1 = inst_37498;var state_37604__$1 = (function (){var statearr_37623 = state_37604;(statearr_37623[22] = inst_37497);
(statearr_37623[13] = inst_37481__$1);
(statearr_37623[14] = inst_37484__$1);
(statearr_37623[15] = inst_37482__$1);
(statearr_37623[16] = inst_37483__$1);
return statearr_37623;
})();var statearr_37624_37700 = state_37604__$1;(statearr_37624_37700[2] = null);
(statearr_37624_37700[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 21))
{var inst_37522 = (state_37604[2]);var state_37604__$1 = state_37604;var statearr_37625_37701 = state_37604__$1;(statearr_37625_37701[2] = inst_37522);
(statearr_37625_37701[1] = 18);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 31))
{var inst_37548 = (state_37604[11]);var inst_37549 = (state_37604[2]);var inst_37550 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37551 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37548);var state_37604__$1 = (function (){var statearr_37626 = state_37604;(statearr_37626[23] = inst_37549);
(statearr_37626[24] = inst_37550);
return statearr_37626;
})();var statearr_37627_37702 = state_37604__$1;(statearr_37627_37702[2] = inst_37551);
cljs.core.async.impl.ioc_helpers.process_exception(state_37604__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 32))
{var inst_37472 = (state_37604[21]);var inst_37548 = (state_37604[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37604,31,Object,null,30);var inst_37555 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37548,inst_37472,done);var state_37604__$1 = state_37604;var statearr_37628_37703 = state_37604__$1;(statearr_37628_37703[2] = inst_37555);
cljs.core.async.impl.ioc_helpers.process_exception(state_37604__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 40))
{var inst_37570 = (state_37604[25]);var inst_37571 = (state_37604[2]);var inst_37572 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37573 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37570);var state_37604__$1 = (function (){var statearr_37629 = state_37604;(statearr_37629[26] = inst_37571);
(statearr_37629[27] = inst_37572);
return statearr_37629;
})();var statearr_37630_37704 = state_37604__$1;(statearr_37630_37704[2] = inst_37573);
cljs.core.async.impl.ioc_helpers.process_exception(state_37604__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 33))
{var inst_37561 = (state_37604[17]);var inst_37563 = cljs.core.chunked_seq_QMARK_(inst_37561);var state_37604__$1 = state_37604;if(inst_37563)
{var statearr_37631_37705 = state_37604__$1;(statearr_37631_37705[1] = 36);
} else
{var statearr_37632_37706 = state_37604__$1;(statearr_37632_37706[1] = 37);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 13))
{var inst_37491 = (state_37604[28]);var inst_37494 = cljs.core.async.close_BANG_(inst_37491);var state_37604__$1 = state_37604;var statearr_37633_37707 = state_37604__$1;(statearr_37633_37707[2] = inst_37494);
(statearr_37633_37707[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 22))
{var inst_37512 = (state_37604[8]);var inst_37515 = cljs.core.async.close_BANG_(inst_37512);var state_37604__$1 = state_37604;var statearr_37634_37708 = state_37604__$1;(statearr_37634_37708[2] = inst_37515);
(statearr_37634_37708[1] = 24);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 36))
{var inst_37561 = (state_37604[17]);var inst_37565 = cljs.core.chunk_first(inst_37561);var inst_37566 = cljs.core.chunk_rest(inst_37561);var inst_37567 = cljs.core.count(inst_37565);var inst_37540 = inst_37566;var inst_37541 = inst_37565;var inst_37542 = inst_37567;var inst_37543 = 0;var state_37604__$1 = (function (){var statearr_37635 = state_37604;(statearr_37635[18] = inst_37542);
(statearr_37635[20] = inst_37540);
(statearr_37635[9] = inst_37541);
(statearr_37635[10] = inst_37543);
return statearr_37635;
})();var statearr_37636_37709 = state_37604__$1;(statearr_37636_37709[2] = null);
(statearr_37636_37709[1] = 25);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 41))
{var inst_37472 = (state_37604[21]);var inst_37570 = (state_37604[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37604,40,Object,null,39);var inst_37577 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37570,inst_37472,done);var state_37604__$1 = state_37604;var statearr_37637_37710 = state_37604__$1;(statearr_37637_37710[2] = inst_37577);
cljs.core.async.impl.ioc_helpers.process_exception(state_37604__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 43))
{var state_37604__$1 = state_37604;var statearr_37638_37711 = state_37604__$1;(statearr_37638_37711[2] = null);
(statearr_37638_37711[1] = 44);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 29))
{var inst_37588 = (state_37604[2]);var state_37604__$1 = state_37604;var statearr_37639_37712 = state_37604__$1;(statearr_37639_37712[2] = inst_37588);
(statearr_37639_37712[1] = 26);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 44))
{var inst_37597 = (state_37604[2]);var state_37604__$1 = (function (){var statearr_37640 = state_37604;(statearr_37640[29] = inst_37597);
return statearr_37640;
})();var statearr_37641_37713 = state_37604__$1;(statearr_37641_37713[2] = null);
(statearr_37641_37713[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 6))
{var inst_37532 = (state_37604[30]);var inst_37531 = cljs.core.deref(cs);var inst_37532__$1 = cljs.core.keys(inst_37531);var inst_37533 = cljs.core.count(inst_37532__$1);var inst_37534 = cljs.core.reset_BANG_(dctr,inst_37533);var inst_37539 = cljs.core.seq(inst_37532__$1);var inst_37540 = inst_37539;var inst_37541 = null;var inst_37542 = 0;var inst_37543 = 0;var state_37604__$1 = (function (){var statearr_37642 = state_37604;(statearr_37642[18] = inst_37542);
(statearr_37642[31] = inst_37534);
(statearr_37642[20] = inst_37540);
(statearr_37642[9] = inst_37541);
(statearr_37642[10] = inst_37543);
(statearr_37642[30] = inst_37532__$1);
return statearr_37642;
})();var statearr_37643_37714 = state_37604__$1;(statearr_37643_37714[2] = null);
(statearr_37643_37714[1] = 25);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 28))
{var inst_37561 = (state_37604[17]);var inst_37540 = (state_37604[20]);var inst_37561__$1 = cljs.core.seq(inst_37540);var state_37604__$1 = (function (){var statearr_37644 = state_37604;(statearr_37644[17] = inst_37561__$1);
return statearr_37644;
})();if(inst_37561__$1)
{var statearr_37645_37715 = state_37604__$1;(statearr_37645_37715[1] = 33);
} else
{var statearr_37646_37716 = state_37604__$1;(statearr_37646_37716[1] = 34);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 25))
{var inst_37542 = (state_37604[18]);var inst_37543 = (state_37604[10]);var inst_37545 = (inst_37543 < inst_37542);var inst_37546 = inst_37545;var state_37604__$1 = state_37604;if(cljs.core.truth_(inst_37546))
{var statearr_37647_37717 = state_37604__$1;(statearr_37647_37717[1] = 27);
} else
{var statearr_37648_37718 = state_37604__$1;(statearr_37648_37718[1] = 28);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 34))
{var state_37604__$1 = state_37604;var statearr_37649_37719 = state_37604__$1;(statearr_37649_37719[2] = null);
(statearr_37649_37719[1] = 35);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 17))
{var state_37604__$1 = state_37604;var statearr_37650_37720 = state_37604__$1;(statearr_37650_37720[2] = null);
(statearr_37650_37720[1] = 18);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 3))
{var inst_37602 = (state_37604[2]);var state_37604__$1 = state_37604;return cljs.core.async.impl.ioc_helpers.return_chan(state_37604__$1,inst_37602);
} else
{if((state_val_37605 === 12))
{var inst_37527 = (state_37604[2]);var state_37604__$1 = state_37604;var statearr_37651_37721 = state_37604__$1;(statearr_37651_37721[2] = inst_37527);
(statearr_37651_37721[1] = 9);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 2))
{var state_37604__$1 = state_37604;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37604__$1,4,ch);
} else
{if((state_val_37605 === 23))
{var state_37604__$1 = state_37604;var statearr_37652_37722 = state_37604__$1;(statearr_37652_37722[2] = null);
(statearr_37652_37722[1] = 24);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 35))
{var inst_37586 = (state_37604[2]);var state_37604__$1 = state_37604;var statearr_37653_37723 = state_37604__$1;(statearr_37653_37723[2] = inst_37586);
(statearr_37653_37723[1] = 29);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 19))
{var inst_37501 = (state_37604[7]);var inst_37505 = cljs.core.chunk_first(inst_37501);var inst_37506 = cljs.core.chunk_rest(inst_37501);var inst_37507 = cljs.core.count(inst_37505);var inst_37481 = inst_37506;var inst_37482 = inst_37505;var inst_37483 = inst_37507;var inst_37484 = 0;var state_37604__$1 = (function (){var statearr_37654 = state_37604;(statearr_37654[13] = inst_37481);
(statearr_37654[14] = inst_37484);
(statearr_37654[15] = inst_37482);
(statearr_37654[16] = inst_37483);
return statearr_37654;
})();var statearr_37655_37724 = state_37604__$1;(statearr_37655_37724[2] = null);
(statearr_37655_37724[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 11))
{var inst_37501 = (state_37604[7]);var inst_37481 = (state_37604[13]);var inst_37501__$1 = cljs.core.seq(inst_37481);var state_37604__$1 = (function (){var statearr_37656 = state_37604;(statearr_37656[7] = inst_37501__$1);
return statearr_37656;
})();if(inst_37501__$1)
{var statearr_37657_37725 = state_37604__$1;(statearr_37657_37725[1] = 16);
} else
{var statearr_37658_37726 = state_37604__$1;(statearr_37658_37726[1] = 17);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 9))
{var inst_37529 = (state_37604[2]);var state_37604__$1 = state_37604;var statearr_37659_37727 = state_37604__$1;(statearr_37659_37727[2] = inst_37529);
(statearr_37659_37727[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 5))
{var inst_37479 = cljs.core.deref(cs);var inst_37480 = cljs.core.seq(inst_37479);var inst_37481 = inst_37480;var inst_37482 = null;var inst_37483 = 0;var inst_37484 = 0;var state_37604__$1 = (function (){var statearr_37660 = state_37604;(statearr_37660[13] = inst_37481);
(statearr_37660[14] = inst_37484);
(statearr_37660[15] = inst_37482);
(statearr_37660[16] = inst_37483);
return statearr_37660;
})();var statearr_37661_37728 = state_37604__$1;(statearr_37661_37728[2] = null);
(statearr_37661_37728[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 14))
{var state_37604__$1 = state_37604;var statearr_37662_37729 = state_37604__$1;(statearr_37662_37729[2] = null);
(statearr_37662_37729[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 45))
{var inst_37594 = (state_37604[2]);var state_37604__$1 = state_37604;var statearr_37663_37730 = state_37604__$1;(statearr_37663_37730[2] = inst_37594);
(statearr_37663_37730[1] = 44);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 26))
{var inst_37532 = (state_37604[30]);var inst_37590 = (state_37604[2]);var inst_37591 = cljs.core.seq(inst_37532);var state_37604__$1 = (function (){var statearr_37664 = state_37604;(statearr_37664[32] = inst_37590);
return statearr_37664;
})();if(inst_37591)
{var statearr_37665_37731 = state_37604__$1;(statearr_37665_37731[1] = 42);
} else
{var statearr_37666_37732 = state_37604__$1;(statearr_37666_37732[1] = 43);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 16))
{var inst_37501 = (state_37604[7]);var inst_37503 = cljs.core.chunked_seq_QMARK_(inst_37501);var state_37604__$1 = state_37604;if(inst_37503)
{var statearr_37670_37733 = state_37604__$1;(statearr_37670_37733[1] = 19);
} else
{var statearr_37671_37734 = state_37604__$1;(statearr_37671_37734[1] = 20);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 38))
{var inst_37583 = (state_37604[2]);var state_37604__$1 = state_37604;var statearr_37672_37735 = state_37604__$1;(statearr_37672_37735[2] = inst_37583);
(statearr_37672_37735[1] = 35);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 30))
{var inst_37542 = (state_37604[18]);var inst_37540 = (state_37604[20]);var inst_37541 = (state_37604[9]);var inst_37543 = (state_37604[10]);var inst_37557 = (state_37604[2]);var inst_37558 = (inst_37543 + 1);var tmp37667 = inst_37542;var tmp37668 = inst_37540;var tmp37669 = inst_37541;var inst_37540__$1 = tmp37668;var inst_37541__$1 = tmp37669;var inst_37542__$1 = tmp37667;var inst_37543__$1 = inst_37558;var state_37604__$1 = (function (){var statearr_37673 = state_37604;(statearr_37673[18] = inst_37542__$1);
(statearr_37673[33] = inst_37557);
(statearr_37673[20] = inst_37540__$1);
(statearr_37673[9] = inst_37541__$1);
(statearr_37673[10] = inst_37543__$1);
return statearr_37673;
})();var statearr_37674_37736 = state_37604__$1;(statearr_37674_37736[2] = null);
(statearr_37674_37736[1] = 25);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 10))
{var inst_37484 = (state_37604[14]);var inst_37482 = (state_37604[15]);var inst_37490 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37482,inst_37484);var inst_37491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37490,0,null);var inst_37492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37490,1,null);var state_37604__$1 = (function (){var statearr_37675 = state_37604;(statearr_37675[28] = inst_37491);
return statearr_37675;
})();if(cljs.core.truth_(inst_37492))
{var statearr_37676_37737 = state_37604__$1;(statearr_37676_37737[1] = 13);
} else
{var statearr_37677_37738 = state_37604__$1;(statearr_37677_37738[1] = 14);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 18))
{var inst_37525 = (state_37604[2]);var state_37604__$1 = state_37604;var statearr_37678_37739 = state_37604__$1;(statearr_37678_37739[2] = inst_37525);
(statearr_37678_37739[1] = 12);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 42))
{var state_37604__$1 = state_37604;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37604__$1,45,dchan);
} else
{if((state_val_37605 === 37))
{var inst_37561 = (state_37604[17]);var inst_37570 = cljs.core.first(inst_37561);var state_37604__$1 = (function (){var statearr_37679 = state_37604;(statearr_37679[25] = inst_37570);
return statearr_37679;
})();var statearr_37680_37740 = state_37604__$1;(statearr_37680_37740[2] = null);
(statearr_37680_37740[1] = 41);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37605 === 8))
{var inst_37484 = (state_37604[14]);var inst_37483 = (state_37604[16]);var inst_37486 = (inst_37484 < inst_37483);var inst_37487 = inst_37486;var state_37604__$1 = state_37604;if(cljs.core.truth_(inst_37487))
{var statearr_37681_37741 = state_37604__$1;(statearr_37681_37741[1] = 10);
} else
{var statearr_37682_37742 = state_37604__$1;(statearr_37682_37742[1] = 11);
}
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___37690,cs,m,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___37690,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37686[0] = state_machine__5677__auto__);
(statearr_37686[1] = 1);
return statearr_37686;
});
var state_machine__5677__auto____1 = (function (state_37604){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37604);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37687){if((e37687 instanceof Object))
{var ex__5680__auto__ = e37687;var statearr_37688_37743 = state_37604;(statearr_37688_37743[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37604);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__37744 = state_37604;
state_37604 = G__37744;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37604){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___37690,cs,m,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_37689 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___37690);
return statearr_37689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___37690,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj37746 = {};return obj37746;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,null,cljs.core.constant$keyword$599,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$600);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$599);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$600,chs);var pauses = pick(cljs.core.constant$keyword$598,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$601,solos,cljs.core.constant$keyword$602,pick(cljs.core.constant$keyword$599,chs),cljs.core.constant$keyword$603,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$598)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t37856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37856 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37857){
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
this.meta37857 = meta37857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37856.cljs$lang$type = true;
cljs.core.async.t37856.cljs$lang$ctorStr = "cljs.core.async/t37856";
cljs.core.async.t37856.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t37856");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37856.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37856.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37856.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37856.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37856.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37856.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37856.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37858){var self__ = this;
var _37858__$1 = this;return self__.meta37857;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37858,meta37857__$1){var self__ = this;
var _37858__$1 = this;return (new cljs.core.async.t37856(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37857__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37856 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37856(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37857){return (new cljs.core.async.t37856(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37857));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37856(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5691__auto___37965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___37965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___37965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37923){var state_val_37924 = (state_37923[1]);if((state_val_37924 === 7))
{var inst_37872 = (state_37923[7]);var inst_37877 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37872);var state_37923__$1 = state_37923;var statearr_37925_37966 = state_37923__$1;(statearr_37925_37966[2] = inst_37877);
(statearr_37925_37966[1] = 9);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 20))
{var inst_37887 = (state_37923[8]);var state_37923__$1 = state_37923;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37923__$1,23,out,inst_37887);
} else
{if((state_val_37924 === 1))
{var inst_37862 = (state_37923[9]);var inst_37862__$1 = calc_state();var inst_37863 = cljs.core.seq_QMARK_(inst_37862__$1);var state_37923__$1 = (function (){var statearr_37926 = state_37923;(statearr_37926[9] = inst_37862__$1);
return statearr_37926;
})();if(inst_37863)
{var statearr_37927_37967 = state_37923__$1;(statearr_37927_37967[1] = 2);
} else
{var statearr_37928_37968 = state_37923__$1;(statearr_37928_37968[1] = 3);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 4))
{var inst_37862 = (state_37923[9]);var inst_37868 = (state_37923[2]);var inst_37869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37868,cljs.core.constant$keyword$603);var inst_37870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37868,cljs.core.constant$keyword$602);var inst_37871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37868,cljs.core.constant$keyword$601);var inst_37872 = inst_37862;var state_37923__$1 = (function (){var statearr_37929 = state_37923;(statearr_37929[10] = inst_37869);
(statearr_37929[11] = inst_37871);
(statearr_37929[7] = inst_37872);
(statearr_37929[12] = inst_37870);
return statearr_37929;
})();var statearr_37930_37969 = state_37923__$1;(statearr_37930_37969[2] = null);
(statearr_37930_37969[1] = 5);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 15))
{var state_37923__$1 = state_37923;var statearr_37931_37970 = state_37923__$1;(statearr_37931_37970[2] = null);
(statearr_37931_37970[1] = 16);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 21))
{var state_37923__$1 = state_37923;var statearr_37932_37971 = state_37923__$1;(statearr_37932_37971[2] = null);
(statearr_37932_37971[1] = 22);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 13))
{var inst_37919 = (state_37923[2]);var state_37923__$1 = state_37923;var statearr_37933_37972 = state_37923__$1;(statearr_37933_37972[2] = inst_37919);
(statearr_37933_37972[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 22))
{var inst_37880 = (state_37923[13]);var inst_37916 = (state_37923[2]);var inst_37872 = inst_37880;var state_37923__$1 = (function (){var statearr_37934 = state_37923;(statearr_37934[7] = inst_37872);
(statearr_37934[14] = inst_37916);
return statearr_37934;
})();var statearr_37935_37973 = state_37923__$1;(statearr_37935_37973[2] = null);
(statearr_37935_37973[1] = 5);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 6))
{var inst_37921 = (state_37923[2]);var state_37923__$1 = state_37923;return cljs.core.async.impl.ioc_helpers.return_chan(state_37923__$1,inst_37921);
} else
{if((state_val_37924 === 17))
{var inst_37902 = (state_37923[15]);var state_37923__$1 = state_37923;var statearr_37936_37974 = state_37923__$1;(statearr_37936_37974[2] = inst_37902);
(statearr_37936_37974[1] = 19);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 3))
{var inst_37862 = (state_37923[9]);var state_37923__$1 = state_37923;var statearr_37937_37975 = state_37923__$1;(statearr_37937_37975[2] = inst_37862);
(statearr_37937_37975[1] = 4);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 12))
{var inst_37902 = (state_37923[15]);var inst_37888 = (state_37923[16]);var inst_37883 = (state_37923[17]);var inst_37902__$1 = (inst_37883.cljs$core$IFn$_invoke$arity$1 ? inst_37883.cljs$core$IFn$_invoke$arity$1(inst_37888) : inst_37883.call(null,inst_37888));var state_37923__$1 = (function (){var statearr_37938 = state_37923;(statearr_37938[15] = inst_37902__$1);
return statearr_37938;
})();if(cljs.core.truth_(inst_37902__$1))
{var statearr_37939_37976 = state_37923__$1;(statearr_37939_37976[1] = 17);
} else
{var statearr_37940_37977 = state_37923__$1;(statearr_37940_37977[1] = 18);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 2))
{var inst_37862 = (state_37923[9]);var inst_37865 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37862);var state_37923__$1 = state_37923;var statearr_37941_37978 = state_37923__$1;(statearr_37941_37978[2] = inst_37865);
(statearr_37941_37978[1] = 4);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 23))
{var inst_37913 = (state_37923[2]);var state_37923__$1 = state_37923;var statearr_37942_37979 = state_37923__$1;(statearr_37942_37979[2] = inst_37913);
(statearr_37942_37979[1] = 22);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 19))
{var inst_37910 = (state_37923[2]);var state_37923__$1 = state_37923;if(cljs.core.truth_(inst_37910))
{var statearr_37943_37980 = state_37923__$1;(statearr_37943_37980[1] = 20);
} else
{var statearr_37944_37981 = state_37923__$1;(statearr_37944_37981[1] = 21);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 11))
{var inst_37887 = (state_37923[8]);var inst_37893 = (inst_37887 == null);var state_37923__$1 = state_37923;if(cljs.core.truth_(inst_37893))
{var statearr_37945_37982 = state_37923__$1;(statearr_37945_37982[1] = 14);
} else
{var statearr_37946_37983 = state_37923__$1;(statearr_37946_37983[1] = 15);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 9))
{var inst_37880 = (state_37923[13]);var inst_37880__$1 = (state_37923[2]);var inst_37881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37880__$1,cljs.core.constant$keyword$603);var inst_37882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37880__$1,cljs.core.constant$keyword$602);var inst_37883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37880__$1,cljs.core.constant$keyword$601);var state_37923__$1 = (function (){var statearr_37947 = state_37923;(statearr_37947[18] = inst_37882);
(statearr_37947[13] = inst_37880__$1);
(statearr_37947[17] = inst_37883);
return statearr_37947;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37923__$1,10,inst_37881);
} else
{if((state_val_37924 === 5))
{var inst_37872 = (state_37923[7]);var inst_37875 = cljs.core.seq_QMARK_(inst_37872);var state_37923__$1 = state_37923;if(inst_37875)
{var statearr_37948_37984 = state_37923__$1;(statearr_37948_37984[1] = 7);
} else
{var statearr_37949_37985 = state_37923__$1;(statearr_37949_37985[1] = 8);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 14))
{var inst_37888 = (state_37923[16]);var inst_37895 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37888);var state_37923__$1 = state_37923;var statearr_37950_37986 = state_37923__$1;(statearr_37950_37986[2] = inst_37895);
(statearr_37950_37986[1] = 16);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 16))
{var inst_37898 = (state_37923[2]);var inst_37899 = calc_state();var inst_37872 = inst_37899;var state_37923__$1 = (function (){var statearr_37951 = state_37923;(statearr_37951[19] = inst_37898);
(statearr_37951[7] = inst_37872);
return statearr_37951;
})();var statearr_37952_37987 = state_37923__$1;(statearr_37952_37987[2] = null);
(statearr_37952_37987[1] = 5);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 10))
{var inst_37887 = (state_37923[8]);var inst_37888 = (state_37923[16]);var inst_37886 = (state_37923[2]);var inst_37887__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37886,0,null);var inst_37888__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37886,1,null);var inst_37889 = (inst_37887__$1 == null);var inst_37890 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37888__$1,change);var inst_37891 = (inst_37889) || (inst_37890);var state_37923__$1 = (function (){var statearr_37953 = state_37923;(statearr_37953[8] = inst_37887__$1);
(statearr_37953[16] = inst_37888__$1);
return statearr_37953;
})();if(cljs.core.truth_(inst_37891))
{var statearr_37954_37988 = state_37923__$1;(statearr_37954_37988[1] = 11);
} else
{var statearr_37955_37989 = state_37923__$1;(statearr_37955_37989[1] = 12);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 18))
{var inst_37882 = (state_37923[18]);var inst_37888 = (state_37923[16]);var inst_37883 = (state_37923[17]);var inst_37905 = cljs.core.empty_QMARK_(inst_37883);var inst_37906 = (inst_37882.cljs$core$IFn$_invoke$arity$1 ? inst_37882.cljs$core$IFn$_invoke$arity$1(inst_37888) : inst_37882.call(null,inst_37888));var inst_37907 = cljs.core.not(inst_37906);var inst_37908 = (inst_37905) && (inst_37907);var state_37923__$1 = state_37923;var statearr_37956_37990 = state_37923__$1;(statearr_37956_37990[2] = inst_37908);
(statearr_37956_37990[1] = 19);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37924 === 8))
{var inst_37872 = (state_37923[7]);var state_37923__$1 = state_37923;var statearr_37957_37991 = state_37923__$1;(statearr_37957_37991[2] = inst_37872);
(statearr_37957_37991[1] = 9);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___37965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5676__auto__,c__5691__auto___37965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37961[0] = state_machine__5677__auto__);
(statearr_37961[1] = 1);
return statearr_37961;
});
var state_machine__5677__auto____1 = (function (state_37923){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37923);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37962){if((e37962 instanceof Object))
{var ex__5680__auto__ = e37962;var statearr_37963_37992 = state_37923;(statearr_37963_37992[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37923);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__37993 = state_37923;
state_37923 = G__37993;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37923){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___37965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5693__auto__ = (function (){var statearr_37964 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___37965);
return statearr_37964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___37965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj37995 = {};return obj37995;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
return (function (topic){var or__3541__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3541__auto__,mults){
return (function (p1__37996_SHARP_){if(cljs.core.truth_((p1__37996_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37996_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37996_SHARP_.call(null,topic))))
{return p1__37996_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37996_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38121 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38122){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38122 = meta38122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38121.cljs$lang$type = true;
cljs.core.async.t38121.cljs$lang$ctorStr = "cljs.core.async/t38121";
cljs.core.async.t38121.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t38121");
});})(mults,ensure_mult))
;
cljs.core.async.t38121.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38121.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38121.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38121.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38121.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38121.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38123){var self__ = this;
var _38123__$1 = this;return self__.meta38122;
});})(mults,ensure_mult))
;
cljs.core.async.t38121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38123,meta38122__$1){var self__ = this;
var _38123__$1 = this;return (new cljs.core.async.t38121(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38122__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38121 = ((function (mults,ensure_mult){
return (function __GT_t38121(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38122){return (new cljs.core.async.t38121(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38122));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38121(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5691__auto___38245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___38245,mults,ensure_mult,p){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___38245,mults,ensure_mult,p){
return (function (state_38197){var state_val_38198 = (state_38197[1]);if((state_val_38198 === 7))
{var inst_38193 = (state_38197[2]);var state_38197__$1 = state_38197;var statearr_38199_38246 = state_38197__$1;(statearr_38199_38246[2] = inst_38193);
(statearr_38199_38246[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 20))
{var state_38197__$1 = state_38197;var statearr_38200_38247 = state_38197__$1;(statearr_38200_38247[2] = null);
(statearr_38200_38247[1] = 21);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 1))
{var state_38197__$1 = state_38197;var statearr_38201_38248 = state_38197__$1;(statearr_38201_38248[2] = null);
(statearr_38201_38248[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 24))
{var inst_38176 = (state_38197[7]);var inst_38126 = (state_38197[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38197,23,Object,null,22);var inst_38183 = cljs.core.async.muxch_STAR_(inst_38176);var state_38197__$1 = state_38197;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38197__$1,25,inst_38183,inst_38126);
} else
{if((state_val_38198 === 4))
{var inst_38126 = (state_38197[8]);var inst_38126__$1 = (state_38197[2]);var inst_38127 = (inst_38126__$1 == null);var state_38197__$1 = (function (){var statearr_38202 = state_38197;(statearr_38202[8] = inst_38126__$1);
return statearr_38202;
})();if(cljs.core.truth_(inst_38127))
{var statearr_38203_38249 = state_38197__$1;(statearr_38203_38249[1] = 5);
} else
{var statearr_38204_38250 = state_38197__$1;(statearr_38204_38250[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 15))
{var inst_38168 = (state_38197[2]);var state_38197__$1 = state_38197;var statearr_38205_38251 = state_38197__$1;(statearr_38205_38251[2] = inst_38168);
(statearr_38205_38251[1] = 12);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 21))
{var inst_38190 = (state_38197[2]);var state_38197__$1 = (function (){var statearr_38206 = state_38197;(statearr_38206[9] = inst_38190);
return statearr_38206;
})();var statearr_38207_38252 = state_38197__$1;(statearr_38207_38252[2] = null);
(statearr_38207_38252[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 13))
{var inst_38150 = (state_38197[10]);var inst_38152 = cljs.core.chunked_seq_QMARK_(inst_38150);var state_38197__$1 = state_38197;if(inst_38152)
{var statearr_38208_38253 = state_38197__$1;(statearr_38208_38253[1] = 16);
} else
{var statearr_38209_38254 = state_38197__$1;(statearr_38209_38254[1] = 17);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 22))
{var inst_38187 = (state_38197[2]);var state_38197__$1 = state_38197;var statearr_38210_38255 = state_38197__$1;(statearr_38210_38255[2] = inst_38187);
(statearr_38210_38255[1] = 21);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 6))
{var inst_38174 = (state_38197[11]);var inst_38176 = (state_38197[7]);var inst_38126 = (state_38197[8]);var inst_38174__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38126) : topic_fn.call(null,inst_38126));var inst_38175 = cljs.core.deref(mults);var inst_38176__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38175,inst_38174__$1);var state_38197__$1 = (function (){var statearr_38211 = state_38197;(statearr_38211[11] = inst_38174__$1);
(statearr_38211[7] = inst_38176__$1);
return statearr_38211;
})();if(cljs.core.truth_(inst_38176__$1))
{var statearr_38212_38256 = state_38197__$1;(statearr_38212_38256[1] = 19);
} else
{var statearr_38213_38257 = state_38197__$1;(statearr_38213_38257[1] = 20);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 25))
{var inst_38185 = (state_38197[2]);var state_38197__$1 = state_38197;var statearr_38214_38258 = state_38197__$1;(statearr_38214_38258[2] = inst_38185);
cljs.core.async.impl.ioc_helpers.process_exception(state_38197__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 17))
{var inst_38150 = (state_38197[10]);var inst_38159 = cljs.core.first(inst_38150);var inst_38160 = cljs.core.async.muxch_STAR_(inst_38159);var inst_38161 = cljs.core.async.close_BANG_(inst_38160);var inst_38162 = cljs.core.next(inst_38150);var inst_38136 = inst_38162;var inst_38137 = null;var inst_38138 = 0;var inst_38139 = 0;var state_38197__$1 = (function (){var statearr_38215 = state_38197;(statearr_38215[12] = inst_38161);
(statearr_38215[13] = inst_38139);
(statearr_38215[14] = inst_38137);
(statearr_38215[15] = inst_38138);
(statearr_38215[16] = inst_38136);
return statearr_38215;
})();var statearr_38216_38259 = state_38197__$1;(statearr_38216_38259[2] = null);
(statearr_38216_38259[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 3))
{var inst_38195 = (state_38197[2]);var state_38197__$1 = state_38197;return cljs.core.async.impl.ioc_helpers.return_chan(state_38197__$1,inst_38195);
} else
{if((state_val_38198 === 12))
{var inst_38170 = (state_38197[2]);var state_38197__$1 = state_38197;var statearr_38217_38260 = state_38197__$1;(statearr_38217_38260[2] = inst_38170);
(statearr_38217_38260[1] = 9);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 2))
{var state_38197__$1 = state_38197;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38197__$1,4,ch);
} else
{if((state_val_38198 === 23))
{var inst_38174 = (state_38197[11]);var inst_38178 = (state_38197[2]);var inst_38179 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38174);var state_38197__$1 = (function (){var statearr_38218 = state_38197;(statearr_38218[17] = inst_38178);
return statearr_38218;
})();var statearr_38219_38261 = state_38197__$1;(statearr_38219_38261[2] = inst_38179);
cljs.core.async.impl.ioc_helpers.process_exception(state_38197__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 19))
{var state_38197__$1 = state_38197;var statearr_38220_38262 = state_38197__$1;(statearr_38220_38262[2] = null);
(statearr_38220_38262[1] = 24);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 11))
{var inst_38136 = (state_38197[16]);var inst_38150 = (state_38197[10]);var inst_38150__$1 = cljs.core.seq(inst_38136);var state_38197__$1 = (function (){var statearr_38221 = state_38197;(statearr_38221[10] = inst_38150__$1);
return statearr_38221;
})();if(inst_38150__$1)
{var statearr_38222_38263 = state_38197__$1;(statearr_38222_38263[1] = 13);
} else
{var statearr_38223_38264 = state_38197__$1;(statearr_38223_38264[1] = 14);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 9))
{var inst_38172 = (state_38197[2]);var state_38197__$1 = state_38197;var statearr_38224_38265 = state_38197__$1;(statearr_38224_38265[2] = inst_38172);
(statearr_38224_38265[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 5))
{var inst_38133 = cljs.core.deref(mults);var inst_38134 = cljs.core.vals(inst_38133);var inst_38135 = cljs.core.seq(inst_38134);var inst_38136 = inst_38135;var inst_38137 = null;var inst_38138 = 0;var inst_38139 = 0;var state_38197__$1 = (function (){var statearr_38225 = state_38197;(statearr_38225[13] = inst_38139);
(statearr_38225[14] = inst_38137);
(statearr_38225[15] = inst_38138);
(statearr_38225[16] = inst_38136);
return statearr_38225;
})();var statearr_38226_38266 = state_38197__$1;(statearr_38226_38266[2] = null);
(statearr_38226_38266[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 14))
{var state_38197__$1 = state_38197;var statearr_38230_38267 = state_38197__$1;(statearr_38230_38267[2] = null);
(statearr_38230_38267[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 16))
{var inst_38150 = (state_38197[10]);var inst_38154 = cljs.core.chunk_first(inst_38150);var inst_38155 = cljs.core.chunk_rest(inst_38150);var inst_38156 = cljs.core.count(inst_38154);var inst_38136 = inst_38155;var inst_38137 = inst_38154;var inst_38138 = inst_38156;var inst_38139 = 0;var state_38197__$1 = (function (){var statearr_38231 = state_38197;(statearr_38231[13] = inst_38139);
(statearr_38231[14] = inst_38137);
(statearr_38231[15] = inst_38138);
(statearr_38231[16] = inst_38136);
return statearr_38231;
})();var statearr_38232_38268 = state_38197__$1;(statearr_38232_38268[2] = null);
(statearr_38232_38268[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 10))
{var inst_38139 = (state_38197[13]);var inst_38137 = (state_38197[14]);var inst_38138 = (state_38197[15]);var inst_38136 = (state_38197[16]);var inst_38144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38137,inst_38139);var inst_38145 = cljs.core.async.muxch_STAR_(inst_38144);var inst_38146 = cljs.core.async.close_BANG_(inst_38145);var inst_38147 = (inst_38139 + 1);var tmp38227 = inst_38137;var tmp38228 = inst_38138;var tmp38229 = inst_38136;var inst_38136__$1 = tmp38229;var inst_38137__$1 = tmp38227;var inst_38138__$1 = tmp38228;var inst_38139__$1 = inst_38147;var state_38197__$1 = (function (){var statearr_38233 = state_38197;(statearr_38233[13] = inst_38139__$1);
(statearr_38233[18] = inst_38146);
(statearr_38233[14] = inst_38137__$1);
(statearr_38233[15] = inst_38138__$1);
(statearr_38233[16] = inst_38136__$1);
return statearr_38233;
})();var statearr_38234_38269 = state_38197__$1;(statearr_38234_38269[2] = null);
(statearr_38234_38269[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 18))
{var inst_38165 = (state_38197[2]);var state_38197__$1 = state_38197;var statearr_38235_38270 = state_38197__$1;(statearr_38235_38270[2] = inst_38165);
(statearr_38235_38270[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38198 === 8))
{var inst_38139 = (state_38197[13]);var inst_38138 = (state_38197[15]);var inst_38141 = (inst_38139 < inst_38138);var inst_38142 = inst_38141;var state_38197__$1 = state_38197;if(cljs.core.truth_(inst_38142))
{var statearr_38236_38271 = state_38197__$1;(statearr_38236_38271[1] = 10);
} else
{var statearr_38237_38272 = state_38197__$1;(statearr_38237_38272[1] = 11);
}
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___38245,mults,ensure_mult,p))
;return ((function (switch__5676__auto__,c__5691__auto___38245,mults,ensure_mult,p){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_38241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38241[0] = state_machine__5677__auto__);
(statearr_38241[1] = 1);
return statearr_38241;
});
var state_machine__5677__auto____1 = (function (state_38197){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_38197);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e38242){if((e38242 instanceof Object))
{var ex__5680__auto__ = e38242;var statearr_38243_38273 = state_38197;(statearr_38243_38273[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38197);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__38274 = state_38197;
state_38197 = G__38274;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_38197){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_38197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___38245,mults,ensure_mult,p))
})();var state__5693__auto__ = (function (){var statearr_38244 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_38244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___38245);
return statearr_38244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___38245,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5691__auto___38411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___38411,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___38411,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38381){var state_val_38382 = (state_38381[1]);if((state_val_38382 === 7))
{var state_38381__$1 = state_38381;var statearr_38383_38412 = state_38381__$1;(statearr_38383_38412[2] = null);
(statearr_38383_38412[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 1))
{var state_38381__$1 = state_38381;var statearr_38384_38413 = state_38381__$1;(statearr_38384_38413[2] = null);
(statearr_38384_38413[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 4))
{var inst_38345 = (state_38381[7]);var inst_38347 = (inst_38345 < cnt);var state_38381__$1 = state_38381;if(cljs.core.truth_(inst_38347))
{var statearr_38385_38414 = state_38381__$1;(statearr_38385_38414[1] = 6);
} else
{var statearr_38386_38415 = state_38381__$1;(statearr_38386_38415[1] = 7);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 15))
{var inst_38377 = (state_38381[2]);var state_38381__$1 = state_38381;var statearr_38387_38416 = state_38381__$1;(statearr_38387_38416[2] = inst_38377);
(statearr_38387_38416[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 13))
{var inst_38370 = cljs.core.async.close_BANG_(out);var state_38381__$1 = state_38381;var statearr_38388_38417 = state_38381__$1;(statearr_38388_38417[2] = inst_38370);
(statearr_38388_38417[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 6))
{var state_38381__$1 = state_38381;var statearr_38389_38418 = state_38381__$1;(statearr_38389_38418[2] = null);
(statearr_38389_38418[1] = 11);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 3))
{var inst_38379 = (state_38381[2]);var state_38381__$1 = state_38381;return cljs.core.async.impl.ioc_helpers.return_chan(state_38381__$1,inst_38379);
} else
{if((state_val_38382 === 12))
{var inst_38367 = (state_38381[8]);var inst_38367__$1 = (state_38381[2]);var inst_38368 = cljs.core.some(cljs.core.nil_QMARK_,inst_38367__$1);var state_38381__$1 = (function (){var statearr_38390 = state_38381;(statearr_38390[8] = inst_38367__$1);
return statearr_38390;
})();if(cljs.core.truth_(inst_38368))
{var statearr_38391_38419 = state_38381__$1;(statearr_38391_38419[1] = 13);
} else
{var statearr_38392_38420 = state_38381__$1;(statearr_38392_38420[1] = 14);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 2))
{var inst_38344 = cljs.core.reset_BANG_(dctr,cnt);var inst_38345 = 0;var state_38381__$1 = (function (){var statearr_38393 = state_38381;(statearr_38393[9] = inst_38344);
(statearr_38393[7] = inst_38345);
return statearr_38393;
})();var statearr_38394_38421 = state_38381__$1;(statearr_38394_38421[2] = null);
(statearr_38394_38421[1] = 4);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 11))
{var inst_38345 = (state_38381[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38381,10,Object,null,9);var inst_38354 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38345) : chs__$1.call(null,inst_38345));var inst_38355 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38345) : done.call(null,inst_38345));var inst_38356 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38354,inst_38355);var state_38381__$1 = state_38381;var statearr_38395_38422 = state_38381__$1;(statearr_38395_38422[2] = inst_38356);
cljs.core.async.impl.ioc_helpers.process_exception(state_38381__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 9))
{var inst_38345 = (state_38381[7]);var inst_38358 = (state_38381[2]);var inst_38359 = (inst_38345 + 1);var inst_38345__$1 = inst_38359;var state_38381__$1 = (function (){var statearr_38396 = state_38381;(statearr_38396[10] = inst_38358);
(statearr_38396[7] = inst_38345__$1);
return statearr_38396;
})();var statearr_38397_38423 = state_38381__$1;(statearr_38397_38423[2] = null);
(statearr_38397_38423[1] = 4);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 5))
{var inst_38365 = (state_38381[2]);var state_38381__$1 = (function (){var statearr_38398 = state_38381;(statearr_38398[11] = inst_38365);
return statearr_38398;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38381__$1,12,dchan);
} else
{if((state_val_38382 === 14))
{var inst_38367 = (state_38381[8]);var inst_38372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38367);var state_38381__$1 = state_38381;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38381__$1,16,out,inst_38372);
} else
{if((state_val_38382 === 16))
{var inst_38374 = (state_38381[2]);var state_38381__$1 = (function (){var statearr_38399 = state_38381;(statearr_38399[12] = inst_38374);
return statearr_38399;
})();var statearr_38400_38424 = state_38381__$1;(statearr_38400_38424[2] = null);
(statearr_38400_38424[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 10))
{var inst_38349 = (state_38381[2]);var inst_38350 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_38381__$1 = (function (){var statearr_38401 = state_38381;(statearr_38401[13] = inst_38349);
return statearr_38401;
})();var statearr_38402_38425 = state_38381__$1;(statearr_38402_38425[2] = inst_38350);
cljs.core.async.impl.ioc_helpers.process_exception(state_38381__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38382 === 8))
{var inst_38363 = (state_38381[2]);var state_38381__$1 = state_38381;var statearr_38403_38426 = state_38381__$1;(statearr_38403_38426[2] = inst_38363);
(statearr_38403_38426[1] = 5);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___38411,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___38411,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_38407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38407[0] = state_machine__5677__auto__);
(statearr_38407[1] = 1);
return statearr_38407;
});
var state_machine__5677__auto____1 = (function (state_38381){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_38381);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e38408){if((e38408 instanceof Object))
{var ex__5680__auto__ = e38408;var statearr_38409_38427 = state_38381;(statearr_38409_38427[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38381);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__38428 = state_38381;
state_38381 = G__38428;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_38381){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_38381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___38411,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_38410 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_38410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___38411);
return statearr_38410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___38411,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___38536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___38536,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___38536,out){
return (function (state_38512){var state_val_38513 = (state_38512[1]);if((state_val_38513 === 7))
{var inst_38492 = (state_38512[7]);var inst_38491 = (state_38512[8]);var inst_38491__$1 = (state_38512[2]);var inst_38492__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38491__$1,0,null);var inst_38493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38491__$1,1,null);var inst_38494 = (inst_38492__$1 == null);var state_38512__$1 = (function (){var statearr_38514 = state_38512;(statearr_38514[7] = inst_38492__$1);
(statearr_38514[9] = inst_38493);
(statearr_38514[8] = inst_38491__$1);
return statearr_38514;
})();if(cljs.core.truth_(inst_38494))
{var statearr_38515_38537 = state_38512__$1;(statearr_38515_38537[1] = 8);
} else
{var statearr_38516_38538 = state_38512__$1;(statearr_38516_38538[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38513 === 1))
{var inst_38483 = cljs.core.vec(chs);var inst_38484 = inst_38483;var state_38512__$1 = (function (){var statearr_38517 = state_38512;(statearr_38517[10] = inst_38484);
return statearr_38517;
})();var statearr_38518_38539 = state_38512__$1;(statearr_38518_38539[2] = null);
(statearr_38518_38539[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38513 === 4))
{var inst_38484 = (state_38512[10]);var state_38512__$1 = state_38512;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_38512__$1,7,inst_38484);
} else
{if((state_val_38513 === 6))
{var inst_38508 = (state_38512[2]);var state_38512__$1 = state_38512;var statearr_38519_38540 = state_38512__$1;(statearr_38519_38540[2] = inst_38508);
(statearr_38519_38540[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38513 === 3))
{var inst_38510 = (state_38512[2]);var state_38512__$1 = state_38512;return cljs.core.async.impl.ioc_helpers.return_chan(state_38512__$1,inst_38510);
} else
{if((state_val_38513 === 2))
{var inst_38484 = (state_38512[10]);var inst_38486 = cljs.core.count(inst_38484);var inst_38487 = (inst_38486 > 0);var state_38512__$1 = state_38512;if(cljs.core.truth_(inst_38487))
{var statearr_38521_38541 = state_38512__$1;(statearr_38521_38541[1] = 4);
} else
{var statearr_38522_38542 = state_38512__$1;(statearr_38522_38542[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38513 === 11))
{var inst_38484 = (state_38512[10]);var inst_38501 = (state_38512[2]);var tmp38520 = inst_38484;var inst_38484__$1 = tmp38520;var state_38512__$1 = (function (){var statearr_38523 = state_38512;(statearr_38523[11] = inst_38501);
(statearr_38523[10] = inst_38484__$1);
return statearr_38523;
})();var statearr_38524_38543 = state_38512__$1;(statearr_38524_38543[2] = null);
(statearr_38524_38543[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38513 === 9))
{var inst_38492 = (state_38512[7]);var state_38512__$1 = state_38512;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38512__$1,11,out,inst_38492);
} else
{if((state_val_38513 === 5))
{var inst_38506 = cljs.core.async.close_BANG_(out);var state_38512__$1 = state_38512;var statearr_38525_38544 = state_38512__$1;(statearr_38525_38544[2] = inst_38506);
(statearr_38525_38544[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38513 === 10))
{var inst_38504 = (state_38512[2]);var state_38512__$1 = state_38512;var statearr_38526_38545 = state_38512__$1;(statearr_38526_38545[2] = inst_38504);
(statearr_38526_38545[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38513 === 8))
{var inst_38492 = (state_38512[7]);var inst_38493 = (state_38512[9]);var inst_38484 = (state_38512[10]);var inst_38491 = (state_38512[8]);var inst_38496 = (function (){var c = inst_38493;var v = inst_38492;var vec__38489 = inst_38491;var cs = inst_38484;return ((function (c,v,vec__38489,cs,inst_38492,inst_38493,inst_38484,inst_38491,state_val_38513,c__5691__auto___38536,out){
return (function (p1__38429_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38429_SHARP_);
});
;})(c,v,vec__38489,cs,inst_38492,inst_38493,inst_38484,inst_38491,state_val_38513,c__5691__auto___38536,out))
})();var inst_38497 = cljs.core.filterv(inst_38496,inst_38484);var inst_38484__$1 = inst_38497;var state_38512__$1 = (function (){var statearr_38527 = state_38512;(statearr_38527[10] = inst_38484__$1);
return statearr_38527;
})();var statearr_38528_38546 = state_38512__$1;(statearr_38528_38546[2] = null);
(statearr_38528_38546[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___38536,out))
;return ((function (switch__5676__auto__,c__5691__auto___38536,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_38532 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38532[0] = state_machine__5677__auto__);
(statearr_38532[1] = 1);
return statearr_38532;
});
var state_machine__5677__auto____1 = (function (state_38512){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_38512);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e38533){if((e38533 instanceof Object))
{var ex__5680__auto__ = e38533;var statearr_38534_38547 = state_38512;(statearr_38534_38547[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38512);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38533;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__38548 = state_38512;
state_38512 = G__38548;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_38512){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_38512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___38536,out))
})();var state__5693__auto__ = (function (){var statearr_38535 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_38535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___38536);
return statearr_38535;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___38536,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___38641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___38641,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___38641,out){
return (function (state_38618){var state_val_38619 = (state_38618[1]);if((state_val_38619 === 7))
{var inst_38600 = (state_38618[7]);var inst_38600__$1 = (state_38618[2]);var inst_38601 = (inst_38600__$1 == null);var inst_38602 = cljs.core.not(inst_38601);var state_38618__$1 = (function (){var statearr_38620 = state_38618;(statearr_38620[7] = inst_38600__$1);
return statearr_38620;
})();if(inst_38602)
{var statearr_38621_38642 = state_38618__$1;(statearr_38621_38642[1] = 8);
} else
{var statearr_38622_38643 = state_38618__$1;(statearr_38622_38643[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38619 === 1))
{var inst_38595 = 0;var state_38618__$1 = (function (){var statearr_38623 = state_38618;(statearr_38623[8] = inst_38595);
return statearr_38623;
})();var statearr_38624_38644 = state_38618__$1;(statearr_38624_38644[2] = null);
(statearr_38624_38644[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38619 === 4))
{var state_38618__$1 = state_38618;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38618__$1,7,ch);
} else
{if((state_val_38619 === 6))
{var inst_38613 = (state_38618[2]);var state_38618__$1 = state_38618;var statearr_38625_38645 = state_38618__$1;(statearr_38625_38645[2] = inst_38613);
(statearr_38625_38645[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38619 === 3))
{var inst_38615 = (state_38618[2]);var inst_38616 = cljs.core.async.close_BANG_(out);var state_38618__$1 = (function (){var statearr_38626 = state_38618;(statearr_38626[9] = inst_38615);
return statearr_38626;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38618__$1,inst_38616);
} else
{if((state_val_38619 === 2))
{var inst_38595 = (state_38618[8]);var inst_38597 = (inst_38595 < n);var state_38618__$1 = state_38618;if(cljs.core.truth_(inst_38597))
{var statearr_38627_38646 = state_38618__$1;(statearr_38627_38646[1] = 4);
} else
{var statearr_38628_38647 = state_38618__$1;(statearr_38628_38647[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38619 === 11))
{var inst_38595 = (state_38618[8]);var inst_38605 = (state_38618[2]);var inst_38606 = (inst_38595 + 1);var inst_38595__$1 = inst_38606;var state_38618__$1 = (function (){var statearr_38629 = state_38618;(statearr_38629[10] = inst_38605);
(statearr_38629[8] = inst_38595__$1);
return statearr_38629;
})();var statearr_38630_38648 = state_38618__$1;(statearr_38630_38648[2] = null);
(statearr_38630_38648[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38619 === 9))
{var state_38618__$1 = state_38618;var statearr_38631_38649 = state_38618__$1;(statearr_38631_38649[2] = null);
(statearr_38631_38649[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38619 === 5))
{var state_38618__$1 = state_38618;var statearr_38632_38650 = state_38618__$1;(statearr_38632_38650[2] = null);
(statearr_38632_38650[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38619 === 10))
{var inst_38610 = (state_38618[2]);var state_38618__$1 = state_38618;var statearr_38633_38651 = state_38618__$1;(statearr_38633_38651[2] = inst_38610);
(statearr_38633_38651[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38619 === 8))
{var inst_38600 = (state_38618[7]);var state_38618__$1 = state_38618;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38618__$1,11,out,inst_38600);
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
});})(c__5691__auto___38641,out))
;return ((function (switch__5676__auto__,c__5691__auto___38641,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_38637 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38637[0] = state_machine__5677__auto__);
(statearr_38637[1] = 1);
return statearr_38637;
});
var state_machine__5677__auto____1 = (function (state_38618){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_38618);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e38638){if((e38638 instanceof Object))
{var ex__5680__auto__ = e38638;var statearr_38639_38652 = state_38618;(statearr_38639_38652[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38618);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__38653 = state_38618;
state_38618 = G__38653;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_38618){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_38618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___38641,out))
})();var state__5693__auto__ = (function (){var statearr_38640 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_38640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___38641);
return statearr_38640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___38641,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___38750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___38750,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___38750,out){
return (function (state_38725){var state_val_38726 = (state_38725[1]);if((state_val_38726 === 7))
{var inst_38720 = (state_38725[2]);var state_38725__$1 = state_38725;var statearr_38727_38751 = state_38725__$1;(statearr_38727_38751[2] = inst_38720);
(statearr_38727_38751[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38726 === 1))
{var inst_38702 = null;var state_38725__$1 = (function (){var statearr_38728 = state_38725;(statearr_38728[7] = inst_38702);
return statearr_38728;
})();var statearr_38729_38752 = state_38725__$1;(statearr_38729_38752[2] = null);
(statearr_38729_38752[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38726 === 4))
{var inst_38705 = (state_38725[8]);var inst_38705__$1 = (state_38725[2]);var inst_38706 = (inst_38705__$1 == null);var inst_38707 = cljs.core.not(inst_38706);var state_38725__$1 = (function (){var statearr_38730 = state_38725;(statearr_38730[8] = inst_38705__$1);
return statearr_38730;
})();if(inst_38707)
{var statearr_38731_38753 = state_38725__$1;(statearr_38731_38753[1] = 5);
} else
{var statearr_38732_38754 = state_38725__$1;(statearr_38732_38754[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38726 === 6))
{var state_38725__$1 = state_38725;var statearr_38733_38755 = state_38725__$1;(statearr_38733_38755[2] = null);
(statearr_38733_38755[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38726 === 3))
{var inst_38722 = (state_38725[2]);var inst_38723 = cljs.core.async.close_BANG_(out);var state_38725__$1 = (function (){var statearr_38734 = state_38725;(statearr_38734[9] = inst_38722);
return statearr_38734;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38725__$1,inst_38723);
} else
{if((state_val_38726 === 2))
{var state_38725__$1 = state_38725;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38725__$1,4,ch);
} else
{if((state_val_38726 === 11))
{var inst_38705 = (state_38725[8]);var inst_38714 = (state_38725[2]);var inst_38702 = inst_38705;var state_38725__$1 = (function (){var statearr_38735 = state_38725;(statearr_38735[10] = inst_38714);
(statearr_38735[7] = inst_38702);
return statearr_38735;
})();var statearr_38736_38756 = state_38725__$1;(statearr_38736_38756[2] = null);
(statearr_38736_38756[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38726 === 9))
{var inst_38705 = (state_38725[8]);var state_38725__$1 = state_38725;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38725__$1,11,out,inst_38705);
} else
{if((state_val_38726 === 5))
{var inst_38702 = (state_38725[7]);var inst_38705 = (state_38725[8]);var inst_38709 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38705,inst_38702);var state_38725__$1 = state_38725;if(inst_38709)
{var statearr_38738_38757 = state_38725__$1;(statearr_38738_38757[1] = 8);
} else
{var statearr_38739_38758 = state_38725__$1;(statearr_38739_38758[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38726 === 10))
{var inst_38717 = (state_38725[2]);var state_38725__$1 = state_38725;var statearr_38740_38759 = state_38725__$1;(statearr_38740_38759[2] = inst_38717);
(statearr_38740_38759[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38726 === 8))
{var inst_38702 = (state_38725[7]);var tmp38737 = inst_38702;var inst_38702__$1 = tmp38737;var state_38725__$1 = (function (){var statearr_38741 = state_38725;(statearr_38741[7] = inst_38702__$1);
return statearr_38741;
})();var statearr_38742_38760 = state_38725__$1;(statearr_38742_38760[2] = null);
(statearr_38742_38760[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___38750,out))
;return ((function (switch__5676__auto__,c__5691__auto___38750,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_38746 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38746[0] = state_machine__5677__auto__);
(statearr_38746[1] = 1);
return statearr_38746;
});
var state_machine__5677__auto____1 = (function (state_38725){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_38725);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e38747){if((e38747 instanceof Object))
{var ex__5680__auto__ = e38747;var statearr_38748_38761 = state_38725;(statearr_38748_38761[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38725);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__38762 = state_38725;
state_38725 = G__38762;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_38725){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_38725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___38750,out))
})();var state__5693__auto__ = (function (){var statearr_38749 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_38749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___38750);
return statearr_38749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___38750,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___38897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___38897,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___38897,out){
return (function (state_38867){var state_val_38868 = (state_38867[1]);if((state_val_38868 === 7))
{var inst_38863 = (state_38867[2]);var state_38867__$1 = state_38867;var statearr_38869_38898 = state_38867__$1;(statearr_38869_38898[2] = inst_38863);
(statearr_38869_38898[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 1))
{var inst_38830 = (new Array(n));var inst_38831 = inst_38830;var inst_38832 = 0;var state_38867__$1 = (function (){var statearr_38870 = state_38867;(statearr_38870[7] = inst_38831);
(statearr_38870[8] = inst_38832);
return statearr_38870;
})();var statearr_38871_38899 = state_38867__$1;(statearr_38871_38899[2] = null);
(statearr_38871_38899[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 4))
{var inst_38835 = (state_38867[9]);var inst_38835__$1 = (state_38867[2]);var inst_38836 = (inst_38835__$1 == null);var inst_38837 = cljs.core.not(inst_38836);var state_38867__$1 = (function (){var statearr_38872 = state_38867;(statearr_38872[9] = inst_38835__$1);
return statearr_38872;
})();if(inst_38837)
{var statearr_38873_38900 = state_38867__$1;(statearr_38873_38900[1] = 5);
} else
{var statearr_38874_38901 = state_38867__$1;(statearr_38874_38901[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 15))
{var inst_38857 = (state_38867[2]);var state_38867__$1 = state_38867;var statearr_38875_38902 = state_38867__$1;(statearr_38875_38902[2] = inst_38857);
(statearr_38875_38902[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 13))
{var state_38867__$1 = state_38867;var statearr_38876_38903 = state_38867__$1;(statearr_38876_38903[2] = null);
(statearr_38876_38903[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 6))
{var inst_38832 = (state_38867[8]);var inst_38853 = (inst_38832 > 0);var state_38867__$1 = state_38867;if(cljs.core.truth_(inst_38853))
{var statearr_38877_38904 = state_38867__$1;(statearr_38877_38904[1] = 12);
} else
{var statearr_38878_38905 = state_38867__$1;(statearr_38878_38905[1] = 13);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 3))
{var inst_38865 = (state_38867[2]);var state_38867__$1 = state_38867;return cljs.core.async.impl.ioc_helpers.return_chan(state_38867__$1,inst_38865);
} else
{if((state_val_38868 === 12))
{var inst_38831 = (state_38867[7]);var inst_38855 = cljs.core.vec(inst_38831);var state_38867__$1 = state_38867;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38867__$1,15,out,inst_38855);
} else
{if((state_val_38868 === 2))
{var state_38867__$1 = state_38867;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38867__$1,4,ch);
} else
{if((state_val_38868 === 11))
{var inst_38847 = (state_38867[2]);var inst_38848 = (new Array(n));var inst_38831 = inst_38848;var inst_38832 = 0;var state_38867__$1 = (function (){var statearr_38879 = state_38867;(statearr_38879[10] = inst_38847);
(statearr_38879[7] = inst_38831);
(statearr_38879[8] = inst_38832);
return statearr_38879;
})();var statearr_38880_38906 = state_38867__$1;(statearr_38880_38906[2] = null);
(statearr_38880_38906[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 9))
{var inst_38831 = (state_38867[7]);var inst_38845 = cljs.core.vec(inst_38831);var state_38867__$1 = state_38867;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38867__$1,11,out,inst_38845);
} else
{if((state_val_38868 === 5))
{var inst_38831 = (state_38867[7]);var inst_38840 = (state_38867[11]);var inst_38835 = (state_38867[9]);var inst_38832 = (state_38867[8]);var inst_38839 = (inst_38831[inst_38832] = inst_38835);var inst_38840__$1 = (inst_38832 + 1);var inst_38841 = (inst_38840__$1 < n);var state_38867__$1 = (function (){var statearr_38881 = state_38867;(statearr_38881[11] = inst_38840__$1);
(statearr_38881[12] = inst_38839);
return statearr_38881;
})();if(cljs.core.truth_(inst_38841))
{var statearr_38882_38907 = state_38867__$1;(statearr_38882_38907[1] = 8);
} else
{var statearr_38883_38908 = state_38867__$1;(statearr_38883_38908[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 14))
{var inst_38860 = (state_38867[2]);var inst_38861 = cljs.core.async.close_BANG_(out);var state_38867__$1 = (function (){var statearr_38885 = state_38867;(statearr_38885[13] = inst_38860);
return statearr_38885;
})();var statearr_38886_38909 = state_38867__$1;(statearr_38886_38909[2] = inst_38861);
(statearr_38886_38909[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 10))
{var inst_38851 = (state_38867[2]);var state_38867__$1 = state_38867;var statearr_38887_38910 = state_38867__$1;(statearr_38887_38910[2] = inst_38851);
(statearr_38887_38910[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38868 === 8))
{var inst_38831 = (state_38867[7]);var inst_38840 = (state_38867[11]);var tmp38884 = inst_38831;var inst_38831__$1 = tmp38884;var inst_38832 = inst_38840;var state_38867__$1 = (function (){var statearr_38888 = state_38867;(statearr_38888[7] = inst_38831__$1);
(statearr_38888[8] = inst_38832);
return statearr_38888;
})();var statearr_38889_38911 = state_38867__$1;(statearr_38889_38911[2] = null);
(statearr_38889_38911[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___38897,out))
;return ((function (switch__5676__auto__,c__5691__auto___38897,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_38893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38893[0] = state_machine__5677__auto__);
(statearr_38893[1] = 1);
return statearr_38893;
});
var state_machine__5677__auto____1 = (function (state_38867){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_38867);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e38894){if((e38894 instanceof Object))
{var ex__5680__auto__ = e38894;var statearr_38895_38912 = state_38867;(statearr_38895_38912[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38867);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__38913 = state_38867;
state_38867 = G__38913;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_38867){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_38867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___38897,out))
})();var state__5693__auto__ = (function (){var statearr_38896 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_38896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___38897);
return statearr_38896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___38897,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___39056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___39056,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___39056,out){
return (function (state_39026){var state_val_39027 = (state_39026[1]);if((state_val_39027 === 7))
{var inst_39022 = (state_39026[2]);var state_39026__$1 = state_39026;var statearr_39028_39057 = state_39026__$1;(statearr_39028_39057[2] = inst_39022);
(statearr_39028_39057[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 1))
{var inst_38985 = [];var inst_38986 = inst_38985;var inst_38987 = cljs.core.constant$keyword$604;var state_39026__$1 = (function (){var statearr_39029 = state_39026;(statearr_39029[7] = inst_38986);
(statearr_39029[8] = inst_38987);
return statearr_39029;
})();var statearr_39030_39058 = state_39026__$1;(statearr_39030_39058[2] = null);
(statearr_39030_39058[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 4))
{var inst_38990 = (state_39026[9]);var inst_38990__$1 = (state_39026[2]);var inst_38991 = (inst_38990__$1 == null);var inst_38992 = cljs.core.not(inst_38991);var state_39026__$1 = (function (){var statearr_39031 = state_39026;(statearr_39031[9] = inst_38990__$1);
return statearr_39031;
})();if(inst_38992)
{var statearr_39032_39059 = state_39026__$1;(statearr_39032_39059[1] = 5);
} else
{var statearr_39033_39060 = state_39026__$1;(statearr_39033_39060[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 15))
{var inst_39016 = (state_39026[2]);var state_39026__$1 = state_39026;var statearr_39034_39061 = state_39026__$1;(statearr_39034_39061[2] = inst_39016);
(statearr_39034_39061[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 13))
{var state_39026__$1 = state_39026;var statearr_39035_39062 = state_39026__$1;(statearr_39035_39062[2] = null);
(statearr_39035_39062[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 6))
{var inst_38986 = (state_39026[7]);var inst_39011 = inst_38986.length;var inst_39012 = (inst_39011 > 0);var state_39026__$1 = state_39026;if(cljs.core.truth_(inst_39012))
{var statearr_39036_39063 = state_39026__$1;(statearr_39036_39063[1] = 12);
} else
{var statearr_39037_39064 = state_39026__$1;(statearr_39037_39064[1] = 13);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 3))
{var inst_39024 = (state_39026[2]);var state_39026__$1 = state_39026;return cljs.core.async.impl.ioc_helpers.return_chan(state_39026__$1,inst_39024);
} else
{if((state_val_39027 === 12))
{var inst_38986 = (state_39026[7]);var inst_39014 = cljs.core.vec(inst_38986);var state_39026__$1 = state_39026;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39026__$1,15,out,inst_39014);
} else
{if((state_val_39027 === 2))
{var state_39026__$1 = state_39026;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39026__$1,4,ch);
} else
{if((state_val_39027 === 11))
{var inst_38990 = (state_39026[9]);var inst_38994 = (state_39026[10]);var inst_39004 = (state_39026[2]);var inst_39005 = [];var inst_39006 = inst_39005.push(inst_38990);var inst_38986 = inst_39005;var inst_38987 = inst_38994;var state_39026__$1 = (function (){var statearr_39038 = state_39026;(statearr_39038[11] = inst_39004);
(statearr_39038[12] = inst_39006);
(statearr_39038[7] = inst_38986);
(statearr_39038[8] = inst_38987);
return statearr_39038;
})();var statearr_39039_39065 = state_39026__$1;(statearr_39039_39065[2] = null);
(statearr_39039_39065[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 9))
{var inst_38986 = (state_39026[7]);var inst_39002 = cljs.core.vec(inst_38986);var state_39026__$1 = state_39026;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39026__$1,11,out,inst_39002);
} else
{if((state_val_39027 === 5))
{var inst_38990 = (state_39026[9]);var inst_38994 = (state_39026[10]);var inst_38987 = (state_39026[8]);var inst_38994__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38990) : f.call(null,inst_38990));var inst_38995 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38994__$1,inst_38987);var inst_38996 = cljs.core.keyword_identical_QMARK_(inst_38987,cljs.core.constant$keyword$604);var inst_38997 = (inst_38995) || (inst_38996);var state_39026__$1 = (function (){var statearr_39040 = state_39026;(statearr_39040[10] = inst_38994__$1);
return statearr_39040;
})();if(cljs.core.truth_(inst_38997))
{var statearr_39041_39066 = state_39026__$1;(statearr_39041_39066[1] = 8);
} else
{var statearr_39042_39067 = state_39026__$1;(statearr_39042_39067[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 14))
{var inst_39019 = (state_39026[2]);var inst_39020 = cljs.core.async.close_BANG_(out);var state_39026__$1 = (function (){var statearr_39044 = state_39026;(statearr_39044[13] = inst_39019);
return statearr_39044;
})();var statearr_39045_39068 = state_39026__$1;(statearr_39045_39068[2] = inst_39020);
(statearr_39045_39068[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 10))
{var inst_39009 = (state_39026[2]);var state_39026__$1 = state_39026;var statearr_39046_39069 = state_39026__$1;(statearr_39046_39069[2] = inst_39009);
(statearr_39046_39069[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39027 === 8))
{var inst_38990 = (state_39026[9]);var inst_38986 = (state_39026[7]);var inst_38994 = (state_39026[10]);var inst_38999 = inst_38986.push(inst_38990);var tmp39043 = inst_38986;var inst_38986__$1 = tmp39043;var inst_38987 = inst_38994;var state_39026__$1 = (function (){var statearr_39047 = state_39026;(statearr_39047[14] = inst_38999);
(statearr_39047[7] = inst_38986__$1);
(statearr_39047[8] = inst_38987);
return statearr_39047;
})();var statearr_39048_39070 = state_39026__$1;(statearr_39048_39070[2] = null);
(statearr_39048_39070[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto___39056,out))
;return ((function (switch__5676__auto__,c__5691__auto___39056,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_39052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39052[0] = state_machine__5677__auto__);
(statearr_39052[1] = 1);
return statearr_39052;
});
var state_machine__5677__auto____1 = (function (state_39026){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_39026);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e39053){if((e39053 instanceof Object))
{var ex__5680__auto__ = e39053;var statearr_39054_39071 = state_39026;(statearr_39054_39071[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39026);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e39053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__39072 = state_39026;
state_39026 = G__39072;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_39026){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_39026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___39056,out))
})();var state__5693__auto__ = (function (){var statearr_39055 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_39055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___39056);
return statearr_39055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___39056,out))
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
