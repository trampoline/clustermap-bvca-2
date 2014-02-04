// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23255 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23255 = (function (f,fn_handler,meta23256){
this.f = f;
this.fn_handler = fn_handler;
this.meta23256 = meta23256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23255.cljs$lang$type = true;
cljs.core.async.t23255.cljs$lang$ctorStr = "cljs.core.async/t23255";
cljs.core.async.t23255.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23255");
});
cljs.core.async.t23255.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23257){var self__ = this;
var _23257__$1 = this;return self__.meta23256;
});
cljs.core.async.t23255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23257,meta23256__$1){var self__ = this;
var _23257__$1 = this;return (new cljs.core.async.t23255(self__.f,self__.fn_handler,meta23256__$1));
});
cljs.core.async.__GT_t23255 = (function __GT_t23255(f__$1,fn_handler__$1,meta23256){return (new cljs.core.async.t23255(f__$1,fn_handler__$1,meta23256));
});
}
return (new cljs.core.async.t23255(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23259 = buff;if(G__23259)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23259.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23259.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23259);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23259);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
{var val_23260 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23260) : fn1.call(null,val_23260));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23260) : fn1.call(null,val_23260));
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23261 = n;var x_23262 = 0;while(true){
if((x_23262 < n__4248__auto___23261))
{(a[x_23262] = 0);
{
var G__23263 = (x_23262 + 1);
x_23262 = G__23263;
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
var G__23264 = (i + 1);
i = G__23264;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23268 = (function (flag,alt_flag,meta23269){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23269 = meta23269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23268.cljs$lang$type = true;
cljs.core.async.t23268.cljs$lang$ctorStr = "cljs.core.async/t23268";
cljs.core.async.t23268.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23268");
});
cljs.core.async.t23268.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23270){var self__ = this;
var _23270__$1 = this;return self__.meta23269;
});
cljs.core.async.t23268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23270,meta23269__$1){var self__ = this;
var _23270__$1 = this;return (new cljs.core.async.t23268(self__.flag,self__.alt_flag,meta23269__$1));
});
cljs.core.async.__GT_t23268 = (function __GT_t23268(flag__$1,alt_flag__$1,meta23269){return (new cljs.core.async.t23268(flag__$1,alt_flag__$1,meta23269));
});
}
return (new cljs.core.async.t23268(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23274 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23274 = (function (cb,flag,alt_handler,meta23275){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23275 = meta23275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23274.cljs$lang$type = true;
cljs.core.async.t23274.cljs$lang$ctorStr = "cljs.core.async/t23274";
cljs.core.async.t23274.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23274");
});
cljs.core.async.t23274.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23276){var self__ = this;
var _23276__$1 = this;return self__.meta23275;
});
cljs.core.async.t23274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23276,meta23275__$1){var self__ = this;
var _23276__$1 = this;return (new cljs.core.async.t23274(self__.cb,self__.flag,self__.alt_handler,meta23275__$1));
});
cljs.core.async.__GT_t23274 = (function __GT_t23274(cb__$1,flag__$1,alt_handler__$1,meta23275){return (new cljs.core.async.t23274(cb__$1,flag__$1,alt_handler__$1,meta23275));
});
}
return (new cljs.core.async.t23274(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23277_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23277_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23277_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23278 = (i + 1);
i = G__23278;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$200))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$200], null));
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
var alts_BANG___delegate = function (ports,p__23279){var map__23281 = p__23279;var map__23281__$1 = ((cljs.core.seq_QMARK_(map__23281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23281):map__23281);var opts = map__23281__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23279 = null;if (arguments.length > 1) {
  p__23279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23279);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23282){
var ports = cljs.core.first(arglist__23282);
var p__23279 = cljs.core.rest(arglist__23282);
return alts_BANG___delegate(ports,p__23279);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23290 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23290 = (function (ch,f,map_LT_,meta23291){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23291 = meta23291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23290.cljs$lang$type = true;
cljs.core.async.t23290.cljs$lang$ctorStr = "cljs.core.async/t23290";
cljs.core.async.t23290.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23290");
});
cljs.core.async.t23290.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23290.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23293 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23293 = (function (fn1,_,meta23291,ch,f,map_LT_,meta23294){
this.fn1 = fn1;
this._ = _;
this.meta23291 = meta23291;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23294 = meta23294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23293.cljs$lang$type = true;
cljs.core.async.t23293.cljs$lang$ctorStr = "cljs.core.async/t23293";
cljs.core.async.t23293.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23293");
});
cljs.core.async.t23293.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23293.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23283_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23283_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23283_SHARP_) : self__.f.call(null,p1__23283_SHARP_)))) : f1.call(null,(((p1__23283_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23283_SHARP_) : self__.f.call(null,p1__23283_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23295){var self__ = this;
var _23295__$1 = this;return self__.meta23294;
});
cljs.core.async.t23293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23295,meta23294__$1){var self__ = this;
var _23295__$1 = this;return (new cljs.core.async.t23293(self__.fn1,self__._,self__.meta23291,self__.ch,self__.f,self__.map_LT_,meta23294__$1));
});
cljs.core.async.__GT_t23293 = (function __GT_t23293(fn1__$1,___$2,meta23291__$1,ch__$2,f__$2,map_LT___$2,meta23294){return (new cljs.core.async.t23293(fn1__$1,___$2,meta23291__$1,ch__$2,f__$2,map_LT___$2,meta23294));
});
}
return (new cljs.core.async.t23293(fn1,___$1,self__.meta23291,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t23290.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23292){var self__ = this;
var _23292__$1 = this;return self__.meta23291;
});
cljs.core.async.t23290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23292,meta23291__$1){var self__ = this;
var _23292__$1 = this;return (new cljs.core.async.t23290(self__.ch,self__.f,self__.map_LT_,meta23291__$1));
});
cljs.core.async.__GT_t23290 = (function __GT_t23290(ch__$1,f__$1,map_LT___$1,meta23291){return (new cljs.core.async.t23290(ch__$1,f__$1,map_LT___$1,meta23291));
});
}
return (new cljs.core.async.t23290(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23299 = (function (ch,f,map_GT_,meta23300){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23300 = meta23300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23299.cljs$lang$type = true;
cljs.core.async.t23299.cljs$lang$ctorStr = "cljs.core.async/t23299";
cljs.core.async.t23299.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23299");
});
cljs.core.async.t23299.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23299.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23299.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23301){var self__ = this;
var _23301__$1 = this;return self__.meta23300;
});
cljs.core.async.t23299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23301,meta23300__$1){var self__ = this;
var _23301__$1 = this;return (new cljs.core.async.t23299(self__.ch,self__.f,self__.map_GT_,meta23300__$1));
});
cljs.core.async.__GT_t23299 = (function __GT_t23299(ch__$1,f__$1,map_GT___$1,meta23300){return (new cljs.core.async.t23299(ch__$1,f__$1,map_GT___$1,meta23300));
});
}
return (new cljs.core.async.t23299(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23305 = (function (ch,p,filter_GT_,meta23306){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23306 = meta23306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23305.cljs$lang$type = true;
cljs.core.async.t23305.cljs$lang$ctorStr = "cljs.core.async/t23305";
cljs.core.async.t23305.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23305");
});
cljs.core.async.t23305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23307){var self__ = this;
var _23307__$1 = this;return self__.meta23306;
});
cljs.core.async.t23305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23307,meta23306__$1){var self__ = this;
var _23307__$1 = this;return (new cljs.core.async.t23305(self__.ch,self__.p,self__.filter_GT_,meta23306__$1));
});
cljs.core.async.__GT_t23305 = (function __GT_t23305(ch__$1,p__$1,filter_GT___$1,meta23306){return (new cljs.core.async.t23305(ch__$1,p__$1,filter_GT___$1,meta23306));
});
}
return (new cljs.core.async.t23305(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23369){var state_val_23370 = (state_23369[1]);if((state_val_23370 === 1))
{var state_23369__$1 = state_23369;var statearr_23371_23391 = state_23369__$1;(statearr_23371_23391[2] = null);
(statearr_23371_23391[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23370 === 2))
{var state_23369__$1 = state_23369;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23369__$1,4,ch);
} else
{if((state_val_23370 === 3))
{var inst_23367 = (state_23369[2]);var state_23369__$1 = state_23369;return cljs.core.async.impl.ioc_helpers.return_chan(state_23369__$1,inst_23367);
} else
{if((state_val_23370 === 4))
{var inst_23351 = (state_23369[7]);var inst_23351__$1 = (state_23369[2]);var inst_23352 = (inst_23351__$1 == null);var state_23369__$1 = (function (){var statearr_23372 = state_23369;(statearr_23372[7] = inst_23351__$1);
return statearr_23372;
})();if(cljs.core.truth_(inst_23352))
{var statearr_23373_23392 = state_23369__$1;(statearr_23373_23392[1] = 5);
} else
{var statearr_23374_23393 = state_23369__$1;(statearr_23374_23393[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23370 === 5))
{var inst_23354 = cljs.core.async.close_BANG_(out);var state_23369__$1 = state_23369;var statearr_23375_23394 = state_23369__$1;(statearr_23375_23394[2] = inst_23354);
(statearr_23375_23394[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23370 === 6))
{var inst_23351 = (state_23369[7]);var inst_23356 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23351) : p.call(null,inst_23351));var state_23369__$1 = state_23369;if(cljs.core.truth_(inst_23356))
{var statearr_23376_23395 = state_23369__$1;(statearr_23376_23395[1] = 8);
} else
{var statearr_23377_23396 = state_23369__$1;(statearr_23377_23396[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23370 === 7))
{var inst_23365 = (state_23369[2]);var state_23369__$1 = state_23369;var statearr_23378_23397 = state_23369__$1;(statearr_23378_23397[2] = inst_23365);
(statearr_23378_23397[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23370 === 8))
{var inst_23351 = (state_23369[7]);var state_23369__$1 = state_23369;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23369__$1,11,out,inst_23351);
} else
{if((state_val_23370 === 9))
{var state_23369__$1 = state_23369;var statearr_23379_23398 = state_23369__$1;(statearr_23379_23398[2] = null);
(statearr_23379_23398[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23370 === 10))
{var inst_23362 = (state_23369[2]);var state_23369__$1 = (function (){var statearr_23380 = state_23369;(statearr_23380[8] = inst_23362);
return statearr_23380;
})();var statearr_23381_23399 = state_23369__$1;(statearr_23381_23399[2] = null);
(statearr_23381_23399[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23370 === 11))
{var inst_23359 = (state_23369[2]);var state_23369__$1 = state_23369;var statearr_23382_23400 = state_23369__$1;(statearr_23382_23400[2] = inst_23359);
(statearr_23382_23400[1] = 10);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23386 = [null,null,null,null,null,null,null,null,null];(statearr_23386[0] = state_machine__5507__auto__);
(statearr_23386[1] = 1);
return statearr_23386;
});
var state_machine__5507__auto____1 = (function (state_23369){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23369);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23387){if((e23387 instanceof Object))
{var ex__5510__auto__ = e23387;var statearr_23388_23401 = state_23369;(statearr_23388_23401[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23369);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23402 = state_23369;
state_23369 = G__23402;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23369){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23389 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23390);
return statearr_23389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23554){var state_val_23555 = (state_23554[1]);if((state_val_23555 === 1))
{var state_23554__$1 = state_23554;var statearr_23556_23593 = state_23554__$1;(statearr_23556_23593[2] = null);
(statearr_23556_23593[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 2))
{var state_23554__$1 = state_23554;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23554__$1,4,in$);
} else
{if((state_val_23555 === 3))
{var inst_23552 = (state_23554[2]);var state_23554__$1 = state_23554;return cljs.core.async.impl.ioc_helpers.return_chan(state_23554__$1,inst_23552);
} else
{if((state_val_23555 === 4))
{var inst_23500 = (state_23554[7]);var inst_23500__$1 = (state_23554[2]);var inst_23501 = (inst_23500__$1 == null);var state_23554__$1 = (function (){var statearr_23557 = state_23554;(statearr_23557[7] = inst_23500__$1);
return statearr_23557;
})();if(cljs.core.truth_(inst_23501))
{var statearr_23558_23594 = state_23554__$1;(statearr_23558_23594[1] = 5);
} else
{var statearr_23559_23595 = state_23554__$1;(statearr_23559_23595[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 5))
{var inst_23503 = cljs.core.async.close_BANG_(out);var state_23554__$1 = state_23554;var statearr_23560_23596 = state_23554__$1;(statearr_23560_23596[2] = inst_23503);
(statearr_23560_23596[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 6))
{var inst_23500 = (state_23554[7]);var inst_23505 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23500) : f.call(null,inst_23500));var inst_23510 = cljs.core.seq(inst_23505);var inst_23511 = inst_23510;var inst_23512 = null;var inst_23513 = 0;var inst_23514 = 0;var state_23554__$1 = (function (){var statearr_23561 = state_23554;(statearr_23561[8] = inst_23512);
(statearr_23561[9] = inst_23513);
(statearr_23561[10] = inst_23514);
(statearr_23561[11] = inst_23511);
return statearr_23561;
})();var statearr_23562_23597 = state_23554__$1;(statearr_23562_23597[2] = null);
(statearr_23562_23597[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 7))
{var inst_23550 = (state_23554[2]);var state_23554__$1 = state_23554;var statearr_23563_23598 = state_23554__$1;(statearr_23563_23598[2] = inst_23550);
(statearr_23563_23598[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 8))
{var inst_23513 = (state_23554[9]);var inst_23514 = (state_23554[10]);var inst_23516 = (inst_23514 < inst_23513);var inst_23517 = inst_23516;var state_23554__$1 = state_23554;if(cljs.core.truth_(inst_23517))
{var statearr_23564_23599 = state_23554__$1;(statearr_23564_23599[1] = 10);
} else
{var statearr_23565_23600 = state_23554__$1;(statearr_23565_23600[1] = 11);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 9))
{var inst_23547 = (state_23554[2]);var state_23554__$1 = (function (){var statearr_23566 = state_23554;(statearr_23566[12] = inst_23547);
return statearr_23566;
})();var statearr_23567_23601 = state_23554__$1;(statearr_23567_23601[2] = null);
(statearr_23567_23601[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 10))
{var inst_23512 = (state_23554[8]);var inst_23514 = (state_23554[10]);var inst_23519 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23512,inst_23514);var state_23554__$1 = state_23554;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23554__$1,13,out,inst_23519);
} else
{if((state_val_23555 === 11))
{var inst_23511 = (state_23554[11]);var inst_23525 = (state_23554[13]);var inst_23525__$1 = cljs.core.seq(inst_23511);var state_23554__$1 = (function (){var statearr_23571 = state_23554;(statearr_23571[13] = inst_23525__$1);
return statearr_23571;
})();if(inst_23525__$1)
{var statearr_23572_23602 = state_23554__$1;(statearr_23572_23602[1] = 14);
} else
{var statearr_23573_23603 = state_23554__$1;(statearr_23573_23603[1] = 15);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 12))
{var inst_23545 = (state_23554[2]);var state_23554__$1 = state_23554;var statearr_23574_23604 = state_23554__$1;(statearr_23574_23604[2] = inst_23545);
(statearr_23574_23604[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 13))
{var inst_23512 = (state_23554[8]);var inst_23513 = (state_23554[9]);var inst_23514 = (state_23554[10]);var inst_23511 = (state_23554[11]);var inst_23521 = (state_23554[2]);var inst_23522 = (inst_23514 + 1);var tmp23568 = inst_23512;var tmp23569 = inst_23513;var tmp23570 = inst_23511;var inst_23511__$1 = tmp23570;var inst_23512__$1 = tmp23568;var inst_23513__$1 = tmp23569;var inst_23514__$1 = inst_23522;var state_23554__$1 = (function (){var statearr_23575 = state_23554;(statearr_23575[8] = inst_23512__$1);
(statearr_23575[14] = inst_23521);
(statearr_23575[9] = inst_23513__$1);
(statearr_23575[10] = inst_23514__$1);
(statearr_23575[11] = inst_23511__$1);
return statearr_23575;
})();var statearr_23576_23605 = state_23554__$1;(statearr_23576_23605[2] = null);
(statearr_23576_23605[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 14))
{var inst_23525 = (state_23554[13]);var inst_23527 = cljs.core.chunked_seq_QMARK_(inst_23525);var state_23554__$1 = state_23554;if(inst_23527)
{var statearr_23577_23606 = state_23554__$1;(statearr_23577_23606[1] = 17);
} else
{var statearr_23578_23607 = state_23554__$1;(statearr_23578_23607[1] = 18);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 15))
{var state_23554__$1 = state_23554;var statearr_23579_23608 = state_23554__$1;(statearr_23579_23608[2] = null);
(statearr_23579_23608[1] = 16);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 16))
{var inst_23543 = (state_23554[2]);var state_23554__$1 = state_23554;var statearr_23580_23609 = state_23554__$1;(statearr_23580_23609[2] = inst_23543);
(statearr_23580_23609[1] = 12);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 17))
{var inst_23525 = (state_23554[13]);var inst_23529 = cljs.core.chunk_first(inst_23525);var inst_23530 = cljs.core.chunk_rest(inst_23525);var inst_23531 = cljs.core.count(inst_23529);var inst_23511 = inst_23530;var inst_23512 = inst_23529;var inst_23513 = inst_23531;var inst_23514 = 0;var state_23554__$1 = (function (){var statearr_23581 = state_23554;(statearr_23581[8] = inst_23512);
(statearr_23581[9] = inst_23513);
(statearr_23581[10] = inst_23514);
(statearr_23581[11] = inst_23511);
return statearr_23581;
})();var statearr_23582_23610 = state_23554__$1;(statearr_23582_23610[2] = null);
(statearr_23582_23610[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 18))
{var inst_23525 = (state_23554[13]);var inst_23534 = cljs.core.first(inst_23525);var state_23554__$1 = state_23554;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23554__$1,20,out,inst_23534);
} else
{if((state_val_23555 === 19))
{var inst_23540 = (state_23554[2]);var state_23554__$1 = state_23554;var statearr_23583_23611 = state_23554__$1;(statearr_23583_23611[2] = inst_23540);
(statearr_23583_23611[1] = 16);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23555 === 20))
{var inst_23525 = (state_23554[13]);var inst_23536 = (state_23554[2]);var inst_23537 = cljs.core.next(inst_23525);var inst_23511 = inst_23537;var inst_23512 = null;var inst_23513 = 0;var inst_23514 = 0;var state_23554__$1 = (function (){var statearr_23584 = state_23554;(statearr_23584[8] = inst_23512);
(statearr_23584[9] = inst_23513);
(statearr_23584[10] = inst_23514);
(statearr_23584[11] = inst_23511);
(statearr_23584[15] = inst_23536);
return statearr_23584;
})();var statearr_23585_23612 = state_23554__$1;(statearr_23585_23612[2] = null);
(statearr_23585_23612[1] = 8);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23589[0] = state_machine__5507__auto__);
(statearr_23589[1] = 1);
return statearr_23589;
});
var state_machine__5507__auto____1 = (function (state_23554){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23554);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23590){if((e23590 instanceof Object))
{var ex__5510__auto__ = e23590;var statearr_23591_23613 = state_23554;(statearr_23591_23613[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23554);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23614 = state_23554;
state_23554 = G__23614;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23554){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23592 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23674){var state_val_23675 = (state_23674[1]);if((state_val_23675 === 1))
{var state_23674__$1 = state_23674;var statearr_23676_23696 = state_23674__$1;(statearr_23676_23696[2] = null);
(statearr_23676_23696[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23675 === 2))
{var state_23674__$1 = state_23674;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23674__$1,4,from);
} else
{if((state_val_23675 === 3))
{var inst_23672 = (state_23674[2]);var state_23674__$1 = state_23674;return cljs.core.async.impl.ioc_helpers.return_chan(state_23674__$1,inst_23672);
} else
{if((state_val_23675 === 4))
{var inst_23657 = (state_23674[7]);var inst_23657__$1 = (state_23674[2]);var inst_23658 = (inst_23657__$1 == null);var state_23674__$1 = (function (){var statearr_23677 = state_23674;(statearr_23677[7] = inst_23657__$1);
return statearr_23677;
})();if(cljs.core.truth_(inst_23658))
{var statearr_23678_23697 = state_23674__$1;(statearr_23678_23697[1] = 5);
} else
{var statearr_23679_23698 = state_23674__$1;(statearr_23679_23698[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23675 === 5))
{var state_23674__$1 = state_23674;if(cljs.core.truth_(close_QMARK_))
{var statearr_23680_23699 = state_23674__$1;(statearr_23680_23699[1] = 8);
} else
{var statearr_23681_23700 = state_23674__$1;(statearr_23681_23700[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23675 === 6))
{var inst_23657 = (state_23674[7]);var state_23674__$1 = state_23674;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23674__$1,11,to,inst_23657);
} else
{if((state_val_23675 === 7))
{var inst_23670 = (state_23674[2]);var state_23674__$1 = state_23674;var statearr_23682_23701 = state_23674__$1;(statearr_23682_23701[2] = inst_23670);
(statearr_23682_23701[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23675 === 8))
{var inst_23661 = cljs.core.async.close_BANG_(to);var state_23674__$1 = state_23674;var statearr_23683_23702 = state_23674__$1;(statearr_23683_23702[2] = inst_23661);
(statearr_23683_23702[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23675 === 9))
{var state_23674__$1 = state_23674;var statearr_23684_23703 = state_23674__$1;(statearr_23684_23703[2] = null);
(statearr_23684_23703[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23675 === 10))
{var inst_23664 = (state_23674[2]);var state_23674__$1 = state_23674;var statearr_23685_23704 = state_23674__$1;(statearr_23685_23704[2] = inst_23664);
(statearr_23685_23704[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23675 === 11))
{var inst_23667 = (state_23674[2]);var state_23674__$1 = (function (){var statearr_23686 = state_23674;(statearr_23686[8] = inst_23667);
return statearr_23686;
})();var statearr_23687_23705 = state_23674__$1;(statearr_23687_23705[2] = null);
(statearr_23687_23705[1] = 2);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23691 = [null,null,null,null,null,null,null,null,null];(statearr_23691[0] = state_machine__5507__auto__);
(statearr_23691[1] = 1);
return statearr_23691;
});
var state_machine__5507__auto____1 = (function (state_23674){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23674);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23692){if((e23692 instanceof Object))
{var ex__5510__auto__ = e23692;var statearr_23693_23706 = state_23674;(statearr_23693_23706[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23674);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23707 = state_23674;
state_23674 = G__23707;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23674){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23694 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23695);
return statearr_23694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23772){var state_val_23773 = (state_23772[1]);if((state_val_23773 === 1))
{var state_23772__$1 = state_23772;var statearr_23774_23795 = state_23772__$1;(statearr_23774_23795[2] = null);
(statearr_23774_23795[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23773 === 2))
{var state_23772__$1 = state_23772;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23772__$1,4,ch);
} else
{if((state_val_23773 === 3))
{var inst_23770 = (state_23772[2]);var state_23772__$1 = state_23772;return cljs.core.async.impl.ioc_helpers.return_chan(state_23772__$1,inst_23770);
} else
{if((state_val_23773 === 4))
{var inst_23753 = (state_23772[7]);var inst_23753__$1 = (state_23772[2]);var inst_23754 = (inst_23753__$1 == null);var state_23772__$1 = (function (){var statearr_23775 = state_23772;(statearr_23775[7] = inst_23753__$1);
return statearr_23775;
})();if(cljs.core.truth_(inst_23754))
{var statearr_23776_23796 = state_23772__$1;(statearr_23776_23796[1] = 5);
} else
{var statearr_23777_23797 = state_23772__$1;(statearr_23777_23797[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23773 === 5))
{var inst_23756 = cljs.core.async.close_BANG_(tc);var inst_23757 = cljs.core.async.close_BANG_(fc);var state_23772__$1 = (function (){var statearr_23778 = state_23772;(statearr_23778[8] = inst_23756);
return statearr_23778;
})();var statearr_23779_23798 = state_23772__$1;(statearr_23779_23798[2] = inst_23757);
(statearr_23779_23798[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23773 === 6))
{var inst_23753 = (state_23772[7]);var inst_23759 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23753) : p.call(null,inst_23753));var state_23772__$1 = state_23772;if(cljs.core.truth_(inst_23759))
{var statearr_23780_23799 = state_23772__$1;(statearr_23780_23799[1] = 9);
} else
{var statearr_23781_23800 = state_23772__$1;(statearr_23781_23800[1] = 10);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23773 === 7))
{var inst_23768 = (state_23772[2]);var state_23772__$1 = state_23772;var statearr_23782_23801 = state_23772__$1;(statearr_23782_23801[2] = inst_23768);
(statearr_23782_23801[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23773 === 8))
{var inst_23765 = (state_23772[2]);var state_23772__$1 = (function (){var statearr_23783 = state_23772;(statearr_23783[9] = inst_23765);
return statearr_23783;
})();var statearr_23784_23802 = state_23772__$1;(statearr_23784_23802[2] = null);
(statearr_23784_23802[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23773 === 9))
{var state_23772__$1 = state_23772;var statearr_23785_23803 = state_23772__$1;(statearr_23785_23803[2] = tc);
(statearr_23785_23803[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23773 === 10))
{var state_23772__$1 = state_23772;var statearr_23786_23804 = state_23772__$1;(statearr_23786_23804[2] = fc);
(statearr_23786_23804[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23773 === 11))
{var inst_23753 = (state_23772[7]);var inst_23763 = (state_23772[2]);var state_23772__$1 = state_23772;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23772__$1,8,inst_23763,inst_23753);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23790 = [null,null,null,null,null,null,null,null,null,null];(statearr_23790[0] = state_machine__5507__auto__);
(statearr_23790[1] = 1);
return statearr_23790;
});
var state_machine__5507__auto____1 = (function (state_23772){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23772);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23791){if((e23791 instanceof Object))
{var ex__5510__auto__ = e23791;var statearr_23792_23805 = state_23772;(statearr_23792_23805[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23772);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23806 = state_23772;
state_23772 = G__23806;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23772){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23793 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23794);
return statearr_23793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23853){var state_val_23854 = (state_23853[1]);if((state_val_23854 === 7))
{var inst_23849 = (state_23853[2]);var state_23853__$1 = state_23853;var statearr_23855_23871 = state_23853__$1;(statearr_23855_23871[2] = inst_23849);
(statearr_23855_23871[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23854 === 6))
{var inst_23842 = (state_23853[7]);var inst_23839 = (state_23853[8]);var inst_23846 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23839,inst_23842) : f.call(null,inst_23839,inst_23842));var inst_23839__$1 = inst_23846;var state_23853__$1 = (function (){var statearr_23856 = state_23853;(statearr_23856[8] = inst_23839__$1);
return statearr_23856;
})();var statearr_23857_23872 = state_23853__$1;(statearr_23857_23872[2] = null);
(statearr_23857_23872[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23854 === 5))
{var inst_23839 = (state_23853[8]);var state_23853__$1 = state_23853;var statearr_23858_23873 = state_23853__$1;(statearr_23858_23873[2] = inst_23839);
(statearr_23858_23873[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23854 === 4))
{var inst_23842 = (state_23853[7]);var inst_23842__$1 = (state_23853[2]);var inst_23843 = (inst_23842__$1 == null);var state_23853__$1 = (function (){var statearr_23859 = state_23853;(statearr_23859[7] = inst_23842__$1);
return statearr_23859;
})();if(cljs.core.truth_(inst_23843))
{var statearr_23860_23874 = state_23853__$1;(statearr_23860_23874[1] = 5);
} else
{var statearr_23861_23875 = state_23853__$1;(statearr_23861_23875[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23854 === 3))
{var inst_23851 = (state_23853[2]);var state_23853__$1 = state_23853;return cljs.core.async.impl.ioc_helpers.return_chan(state_23853__$1,inst_23851);
} else
{if((state_val_23854 === 2))
{var state_23853__$1 = state_23853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23853__$1,4,ch);
} else
{if((state_val_23854 === 1))
{var inst_23839 = init;var state_23853__$1 = (function (){var statearr_23862 = state_23853;(statearr_23862[8] = inst_23839);
return statearr_23862;
})();var statearr_23863_23876 = state_23853__$1;(statearr_23863_23876[2] = null);
(statearr_23863_23876[1] = 2);
return cljs.core.constant$keyword$210;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23867 = [null,null,null,null,null,null,null,null,null];(statearr_23867[0] = state_machine__5507__auto__);
(statearr_23867[1] = 1);
return statearr_23867;
});
var state_machine__5507__auto____1 = (function (state_23853){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23853);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object))
{var ex__5510__auto__ = e23868;var statearr_23869_23877 = state_23853;(statearr_23869_23877[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23853);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23878 = state_23853;
state_23853 = G__23878;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23853){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23870 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23940){var state_val_23941 = (state_23940[1]);if((state_val_23941 === 1))
{var inst_23920 = cljs.core.seq(coll);var inst_23921 = inst_23920;var state_23940__$1 = (function (){var statearr_23942 = state_23940;(statearr_23942[7] = inst_23921);
return statearr_23942;
})();var statearr_23943_23961 = state_23940__$1;(statearr_23943_23961[2] = null);
(statearr_23943_23961[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23941 === 2))
{var inst_23921 = (state_23940[7]);var state_23940__$1 = state_23940;if(cljs.core.truth_(inst_23921))
{var statearr_23944_23962 = state_23940__$1;(statearr_23944_23962[1] = 4);
} else
{var statearr_23945_23963 = state_23940__$1;(statearr_23945_23963[1] = 5);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23941 === 3))
{var inst_23938 = (state_23940[2]);var state_23940__$1 = state_23940;return cljs.core.async.impl.ioc_helpers.return_chan(state_23940__$1,inst_23938);
} else
{if((state_val_23941 === 4))
{var inst_23921 = (state_23940[7]);var inst_23924 = cljs.core.first(inst_23921);var state_23940__$1 = state_23940;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23940__$1,7,ch,inst_23924);
} else
{if((state_val_23941 === 5))
{var state_23940__$1 = state_23940;if(cljs.core.truth_(close_QMARK_))
{var statearr_23946_23964 = state_23940__$1;(statearr_23946_23964[1] = 8);
} else
{var statearr_23947_23965 = state_23940__$1;(statearr_23947_23965[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23941 === 6))
{var inst_23936 = (state_23940[2]);var state_23940__$1 = state_23940;var statearr_23948_23966 = state_23940__$1;(statearr_23948_23966[2] = inst_23936);
(statearr_23948_23966[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23941 === 7))
{var inst_23921 = (state_23940[7]);var inst_23926 = (state_23940[2]);var inst_23927 = cljs.core.next(inst_23921);var inst_23921__$1 = inst_23927;var state_23940__$1 = (function (){var statearr_23949 = state_23940;(statearr_23949[8] = inst_23926);
(statearr_23949[7] = inst_23921__$1);
return statearr_23949;
})();var statearr_23950_23967 = state_23940__$1;(statearr_23950_23967[2] = null);
(statearr_23950_23967[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23941 === 8))
{var inst_23931 = cljs.core.async.close_BANG_(ch);var state_23940__$1 = state_23940;var statearr_23951_23968 = state_23940__$1;(statearr_23951_23968[2] = inst_23931);
(statearr_23951_23968[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23941 === 9))
{var state_23940__$1 = state_23940;var statearr_23952_23969 = state_23940__$1;(statearr_23952_23969[2] = null);
(statearr_23952_23969[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23941 === 10))
{var inst_23934 = (state_23940[2]);var state_23940__$1 = state_23940;var statearr_23953_23970 = state_23940__$1;(statearr_23953_23970[2] = inst_23934);
(statearr_23953_23970[1] = 6);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23957 = [null,null,null,null,null,null,null,null,null];(statearr_23957[0] = state_machine__5507__auto__);
(statearr_23957[1] = 1);
return statearr_23957;
});
var state_machine__5507__auto____1 = (function (state_23940){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23940);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23958){if((e23958 instanceof Object))
{var ex__5510__auto__ = e23958;var statearr_23959_23971 = state_23940;(statearr_23959_23971[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23940);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23972 = state_23940;
state_23940 = G__23972;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23940){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23960 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
cljs.core.async.Mux = (function (){var obj23974 = {};return obj23974;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23976 = {};return obj23976;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24200 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24200 = (function (cs,ch,mult,meta24201){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24201 = meta24201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24200.cljs$lang$type = true;
cljs.core.async.t24200.cljs$lang$ctorStr = "cljs.core.async/t24200";
cljs.core.async.t24200.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24200");
});})(cs))
;
cljs.core.async.t24200.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24200.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24200.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24200.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24200.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24202){var self__ = this;
var _24202__$1 = this;return self__.meta24201;
});})(cs))
;
cljs.core.async.t24200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24202,meta24201__$1){var self__ = this;
var _24202__$1 = this;return (new cljs.core.async.t24200(self__.cs,self__.ch,self__.mult,meta24201__$1));
});})(cs))
;
cljs.core.async.__GT_t24200 = ((function (cs){
return (function __GT_t24200(cs__$1,ch__$1,mult__$1,meta24201){return (new cljs.core.async.t24200(cs__$1,ch__$1,mult__$1,meta24201));
});})(cs))
;
}
return (new cljs.core.async.t24200(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24337){var state_val_24338 = (state_24337[1]);if((state_val_24338 === 32))
{var inst_24205 = (state_24337[7]);var inst_24281 = (state_24337[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24337,31,Object,null,30);var inst_24288 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24281,inst_24205,done);var state_24337__$1 = state_24337;var statearr_24339_24424 = state_24337__$1;(statearr_24339_24424[2] = inst_24288);
cljs.core.async.impl.ioc_helpers.process_exception(state_24337__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 1))
{var state_24337__$1 = state_24337;var statearr_24340_24425 = state_24337__$1;(statearr_24340_24425[2] = null);
(statearr_24340_24425[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 33))
{var inst_24294 = (state_24337[9]);var inst_24296 = cljs.core.chunked_seq_QMARK_(inst_24294);var state_24337__$1 = state_24337;if(inst_24296)
{var statearr_24341_24426 = state_24337__$1;(statearr_24341_24426[1] = 36);
} else
{var statearr_24342_24427 = state_24337__$1;(statearr_24342_24427[1] = 37);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 2))
{var state_24337__$1 = state_24337;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24337__$1,4,ch);
} else
{if((state_val_24338 === 34))
{var state_24337__$1 = state_24337;var statearr_24343_24428 = state_24337__$1;(statearr_24343_24428[2] = null);
(statearr_24343_24428[1] = 35);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 3))
{var inst_24335 = (state_24337[2]);var state_24337__$1 = state_24337;return cljs.core.async.impl.ioc_helpers.return_chan(state_24337__$1,inst_24335);
} else
{if((state_val_24338 === 35))
{var inst_24319 = (state_24337[2]);var state_24337__$1 = state_24337;var statearr_24344_24429 = state_24337__$1;(statearr_24344_24429[2] = inst_24319);
(statearr_24344_24429[1] = 29);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 4))
{var inst_24205 = (state_24337[7]);var inst_24205__$1 = (state_24337[2]);var inst_24206 = (inst_24205__$1 == null);var state_24337__$1 = (function (){var statearr_24345 = state_24337;(statearr_24345[7] = inst_24205__$1);
return statearr_24345;
})();if(cljs.core.truth_(inst_24206))
{var statearr_24346_24430 = state_24337__$1;(statearr_24346_24430[1] = 5);
} else
{var statearr_24347_24431 = state_24337__$1;(statearr_24347_24431[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 36))
{var inst_24294 = (state_24337[9]);var inst_24298 = cljs.core.chunk_first(inst_24294);var inst_24299 = cljs.core.chunk_rest(inst_24294);var inst_24300 = cljs.core.count(inst_24298);var inst_24273 = inst_24299;var inst_24274 = inst_24298;var inst_24275 = inst_24300;var inst_24276 = 0;var state_24337__$1 = (function (){var statearr_24348 = state_24337;(statearr_24348[10] = inst_24276);
(statearr_24348[11] = inst_24274);
(statearr_24348[12] = inst_24275);
(statearr_24348[13] = inst_24273);
return statearr_24348;
})();var statearr_24349_24432 = state_24337__$1;(statearr_24349_24432[2] = null);
(statearr_24349_24432[1] = 25);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 5))
{var inst_24212 = cljs.core.deref(cs);var inst_24213 = cljs.core.seq(inst_24212);var inst_24214 = inst_24213;var inst_24215 = null;var inst_24216 = 0;var inst_24217 = 0;var state_24337__$1 = (function (){var statearr_24350 = state_24337;(statearr_24350[14] = inst_24215);
(statearr_24350[15] = inst_24214);
(statearr_24350[16] = inst_24216);
(statearr_24350[17] = inst_24217);
return statearr_24350;
})();var statearr_24351_24433 = state_24337__$1;(statearr_24351_24433[2] = null);
(statearr_24351_24433[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 37))
{var inst_24294 = (state_24337[9]);var inst_24303 = cljs.core.first(inst_24294);var state_24337__$1 = (function (){var statearr_24352 = state_24337;(statearr_24352[18] = inst_24303);
return statearr_24352;
})();var statearr_24353_24434 = state_24337__$1;(statearr_24353_24434[2] = null);
(statearr_24353_24434[1] = 41);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 6))
{var inst_24265 = (state_24337[19]);var inst_24264 = cljs.core.deref(cs);var inst_24265__$1 = cljs.core.keys(inst_24264);var inst_24266 = cljs.core.count(inst_24265__$1);var inst_24267 = cljs.core.reset_BANG_(dctr,inst_24266);var inst_24272 = cljs.core.seq(inst_24265__$1);var inst_24273 = inst_24272;var inst_24274 = null;var inst_24275 = 0;var inst_24276 = 0;var state_24337__$1 = (function (){var statearr_24354 = state_24337;(statearr_24354[19] = inst_24265__$1);
(statearr_24354[10] = inst_24276);
(statearr_24354[11] = inst_24274);
(statearr_24354[12] = inst_24275);
(statearr_24354[13] = inst_24273);
(statearr_24354[20] = inst_24267);
return statearr_24354;
})();var statearr_24355_24435 = state_24337__$1;(statearr_24355_24435[2] = null);
(statearr_24355_24435[1] = 25);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 38))
{var inst_24316 = (state_24337[2]);var state_24337__$1 = state_24337;var statearr_24356_24436 = state_24337__$1;(statearr_24356_24436[2] = inst_24316);
(statearr_24356_24436[1] = 35);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 7))
{var inst_24333 = (state_24337[2]);var state_24337__$1 = state_24337;var statearr_24357_24437 = state_24337__$1;(statearr_24357_24437[2] = inst_24333);
(statearr_24357_24437[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 39))
{var inst_24294 = (state_24337[9]);var inst_24312 = (state_24337[2]);var inst_24313 = cljs.core.next(inst_24294);var inst_24273 = inst_24313;var inst_24274 = null;var inst_24275 = 0;var inst_24276 = 0;var state_24337__$1 = (function (){var statearr_24358 = state_24337;(statearr_24358[21] = inst_24312);
(statearr_24358[10] = inst_24276);
(statearr_24358[11] = inst_24274);
(statearr_24358[12] = inst_24275);
(statearr_24358[13] = inst_24273);
return statearr_24358;
})();var statearr_24359_24438 = state_24337__$1;(statearr_24359_24438[2] = null);
(statearr_24359_24438[1] = 25);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 8))
{var inst_24216 = (state_24337[16]);var inst_24217 = (state_24337[17]);var inst_24219 = (inst_24217 < inst_24216);var inst_24220 = inst_24219;var state_24337__$1 = state_24337;if(cljs.core.truth_(inst_24220))
{var statearr_24360_24439 = state_24337__$1;(statearr_24360_24439[1] = 10);
} else
{var statearr_24361_24440 = state_24337__$1;(statearr_24361_24440[1] = 11);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 40))
{var inst_24303 = (state_24337[18]);var inst_24304 = (state_24337[2]);var inst_24305 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24306 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24303);var state_24337__$1 = (function (){var statearr_24362 = state_24337;(statearr_24362[22] = inst_24304);
(statearr_24362[23] = inst_24305);
return statearr_24362;
})();var statearr_24363_24441 = state_24337__$1;(statearr_24363_24441[2] = inst_24306);
cljs.core.async.impl.ioc_helpers.process_exception(state_24337__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 9))
{var inst_24262 = (state_24337[2]);var state_24337__$1 = state_24337;var statearr_24364_24442 = state_24337__$1;(statearr_24364_24442[2] = inst_24262);
(statearr_24364_24442[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 41))
{var inst_24205 = (state_24337[7]);var inst_24303 = (state_24337[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24337,40,Object,null,39);var inst_24310 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24303,inst_24205,done);var state_24337__$1 = state_24337;var statearr_24365_24443 = state_24337__$1;(statearr_24365_24443[2] = inst_24310);
cljs.core.async.impl.ioc_helpers.process_exception(state_24337__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 10))
{var inst_24215 = (state_24337[14]);var inst_24217 = (state_24337[17]);var inst_24223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24215,inst_24217);var inst_24224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24223,0,null);var inst_24225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24223,1,null);var state_24337__$1 = (function (){var statearr_24366 = state_24337;(statearr_24366[24] = inst_24224);
return statearr_24366;
})();if(cljs.core.truth_(inst_24225))
{var statearr_24367_24444 = state_24337__$1;(statearr_24367_24444[1] = 13);
} else
{var statearr_24368_24445 = state_24337__$1;(statearr_24368_24445[1] = 14);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 42))
{var state_24337__$1 = state_24337;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24337__$1,45,dchan);
} else
{if((state_val_24338 === 11))
{var inst_24214 = (state_24337[15]);var inst_24234 = (state_24337[25]);var inst_24234__$1 = cljs.core.seq(inst_24214);var state_24337__$1 = (function (){var statearr_24369 = state_24337;(statearr_24369[25] = inst_24234__$1);
return statearr_24369;
})();if(inst_24234__$1)
{var statearr_24370_24446 = state_24337__$1;(statearr_24370_24446[1] = 16);
} else
{var statearr_24371_24447 = state_24337__$1;(statearr_24371_24447[1] = 17);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 43))
{var state_24337__$1 = state_24337;var statearr_24372_24448 = state_24337__$1;(statearr_24372_24448[2] = null);
(statearr_24372_24448[1] = 44);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 12))
{var inst_24260 = (state_24337[2]);var state_24337__$1 = state_24337;var statearr_24373_24449 = state_24337__$1;(statearr_24373_24449[2] = inst_24260);
(statearr_24373_24449[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 44))
{var inst_24330 = (state_24337[2]);var state_24337__$1 = (function (){var statearr_24374 = state_24337;(statearr_24374[26] = inst_24330);
return statearr_24374;
})();var statearr_24375_24450 = state_24337__$1;(statearr_24375_24450[2] = null);
(statearr_24375_24450[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 13))
{var inst_24224 = (state_24337[24]);var inst_24227 = cljs.core.async.close_BANG_(inst_24224);var state_24337__$1 = state_24337;var statearr_24376_24451 = state_24337__$1;(statearr_24376_24451[2] = inst_24227);
(statearr_24376_24451[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 45))
{var inst_24327 = (state_24337[2]);var state_24337__$1 = state_24337;var statearr_24380_24452 = state_24337__$1;(statearr_24380_24452[2] = inst_24327);
(statearr_24380_24452[1] = 44);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 14))
{var state_24337__$1 = state_24337;var statearr_24381_24453 = state_24337__$1;(statearr_24381_24453[2] = null);
(statearr_24381_24453[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 15))
{var inst_24215 = (state_24337[14]);var inst_24214 = (state_24337[15]);var inst_24216 = (state_24337[16]);var inst_24217 = (state_24337[17]);var inst_24230 = (state_24337[2]);var inst_24231 = (inst_24217 + 1);var tmp24377 = inst_24215;var tmp24378 = inst_24214;var tmp24379 = inst_24216;var inst_24214__$1 = tmp24378;var inst_24215__$1 = tmp24377;var inst_24216__$1 = tmp24379;var inst_24217__$1 = inst_24231;var state_24337__$1 = (function (){var statearr_24382 = state_24337;(statearr_24382[14] = inst_24215__$1);
(statearr_24382[15] = inst_24214__$1);
(statearr_24382[27] = inst_24230);
(statearr_24382[16] = inst_24216__$1);
(statearr_24382[17] = inst_24217__$1);
return statearr_24382;
})();var statearr_24383_24454 = state_24337__$1;(statearr_24383_24454[2] = null);
(statearr_24383_24454[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 16))
{var inst_24234 = (state_24337[25]);var inst_24236 = cljs.core.chunked_seq_QMARK_(inst_24234);var state_24337__$1 = state_24337;if(inst_24236)
{var statearr_24384_24455 = state_24337__$1;(statearr_24384_24455[1] = 19);
} else
{var statearr_24385_24456 = state_24337__$1;(statearr_24385_24456[1] = 20);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 17))
{var state_24337__$1 = state_24337;var statearr_24386_24457 = state_24337__$1;(statearr_24386_24457[2] = null);
(statearr_24386_24457[1] = 18);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 18))
{var inst_24258 = (state_24337[2]);var state_24337__$1 = state_24337;var statearr_24387_24458 = state_24337__$1;(statearr_24387_24458[2] = inst_24258);
(statearr_24387_24458[1] = 12);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 19))
{var inst_24234 = (state_24337[25]);var inst_24238 = cljs.core.chunk_first(inst_24234);var inst_24239 = cljs.core.chunk_rest(inst_24234);var inst_24240 = cljs.core.count(inst_24238);var inst_24214 = inst_24239;var inst_24215 = inst_24238;var inst_24216 = inst_24240;var inst_24217 = 0;var state_24337__$1 = (function (){var statearr_24388 = state_24337;(statearr_24388[14] = inst_24215);
(statearr_24388[15] = inst_24214);
(statearr_24388[16] = inst_24216);
(statearr_24388[17] = inst_24217);
return statearr_24388;
})();var statearr_24389_24459 = state_24337__$1;(statearr_24389_24459[2] = null);
(statearr_24389_24459[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 20))
{var inst_24234 = (state_24337[25]);var inst_24244 = cljs.core.first(inst_24234);var inst_24245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24244,0,null);var inst_24246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24244,1,null);var state_24337__$1 = (function (){var statearr_24390 = state_24337;(statearr_24390[28] = inst_24245);
return statearr_24390;
})();if(cljs.core.truth_(inst_24246))
{var statearr_24391_24460 = state_24337__$1;(statearr_24391_24460[1] = 22);
} else
{var statearr_24392_24461 = state_24337__$1;(statearr_24392_24461[1] = 23);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 21))
{var inst_24255 = (state_24337[2]);var state_24337__$1 = state_24337;var statearr_24393_24462 = state_24337__$1;(statearr_24393_24462[2] = inst_24255);
(statearr_24393_24462[1] = 18);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 22))
{var inst_24245 = (state_24337[28]);var inst_24248 = cljs.core.async.close_BANG_(inst_24245);var state_24337__$1 = state_24337;var statearr_24394_24463 = state_24337__$1;(statearr_24394_24463[2] = inst_24248);
(statearr_24394_24463[1] = 24);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 23))
{var state_24337__$1 = state_24337;var statearr_24395_24464 = state_24337__$1;(statearr_24395_24464[2] = null);
(statearr_24395_24464[1] = 24);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 24))
{var inst_24234 = (state_24337[25]);var inst_24251 = (state_24337[2]);var inst_24252 = cljs.core.next(inst_24234);var inst_24214 = inst_24252;var inst_24215 = null;var inst_24216 = 0;var inst_24217 = 0;var state_24337__$1 = (function (){var statearr_24396 = state_24337;(statearr_24396[14] = inst_24215);
(statearr_24396[15] = inst_24214);
(statearr_24396[29] = inst_24251);
(statearr_24396[16] = inst_24216);
(statearr_24396[17] = inst_24217);
return statearr_24396;
})();var statearr_24397_24465 = state_24337__$1;(statearr_24397_24465[2] = null);
(statearr_24397_24465[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 25))
{var inst_24276 = (state_24337[10]);var inst_24275 = (state_24337[12]);var inst_24278 = (inst_24276 < inst_24275);var inst_24279 = inst_24278;var state_24337__$1 = state_24337;if(cljs.core.truth_(inst_24279))
{var statearr_24398_24466 = state_24337__$1;(statearr_24398_24466[1] = 27);
} else
{var statearr_24399_24467 = state_24337__$1;(statearr_24399_24467[1] = 28);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 26))
{var inst_24265 = (state_24337[19]);var inst_24323 = (state_24337[2]);var inst_24324 = cljs.core.seq(inst_24265);var state_24337__$1 = (function (){var statearr_24400 = state_24337;(statearr_24400[30] = inst_24323);
return statearr_24400;
})();if(inst_24324)
{var statearr_24401_24468 = state_24337__$1;(statearr_24401_24468[1] = 42);
} else
{var statearr_24402_24469 = state_24337__$1;(statearr_24402_24469[1] = 43);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 27))
{var inst_24276 = (state_24337[10]);var inst_24274 = (state_24337[11]);var inst_24281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24274,inst_24276);var state_24337__$1 = (function (){var statearr_24403 = state_24337;(statearr_24403[8] = inst_24281);
return statearr_24403;
})();var statearr_24404_24470 = state_24337__$1;(statearr_24404_24470[2] = null);
(statearr_24404_24470[1] = 32);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 28))
{var inst_24294 = (state_24337[9]);var inst_24273 = (state_24337[13]);var inst_24294__$1 = cljs.core.seq(inst_24273);var state_24337__$1 = (function (){var statearr_24408 = state_24337;(statearr_24408[9] = inst_24294__$1);
return statearr_24408;
})();if(inst_24294__$1)
{var statearr_24409_24471 = state_24337__$1;(statearr_24409_24471[1] = 33);
} else
{var statearr_24410_24472 = state_24337__$1;(statearr_24410_24472[1] = 34);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 29))
{var inst_24321 = (state_24337[2]);var state_24337__$1 = state_24337;var statearr_24411_24473 = state_24337__$1;(statearr_24411_24473[2] = inst_24321);
(statearr_24411_24473[1] = 26);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 30))
{var inst_24276 = (state_24337[10]);var inst_24274 = (state_24337[11]);var inst_24275 = (state_24337[12]);var inst_24273 = (state_24337[13]);var inst_24290 = (state_24337[2]);var inst_24291 = (inst_24276 + 1);var tmp24405 = inst_24274;var tmp24406 = inst_24275;var tmp24407 = inst_24273;var inst_24273__$1 = tmp24407;var inst_24274__$1 = tmp24405;var inst_24275__$1 = tmp24406;var inst_24276__$1 = inst_24291;var state_24337__$1 = (function (){var statearr_24412 = state_24337;(statearr_24412[31] = inst_24290);
(statearr_24412[10] = inst_24276__$1);
(statearr_24412[11] = inst_24274__$1);
(statearr_24412[12] = inst_24275__$1);
(statearr_24412[13] = inst_24273__$1);
return statearr_24412;
})();var statearr_24413_24474 = state_24337__$1;(statearr_24413_24474[2] = null);
(statearr_24413_24474[1] = 25);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24338 === 31))
{var inst_24281 = (state_24337[8]);var inst_24282 = (state_24337[2]);var inst_24283 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24284 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24281);var state_24337__$1 = (function (){var statearr_24414 = state_24337;(statearr_24414[32] = inst_24282);
(statearr_24414[33] = inst_24283);
return statearr_24414;
})();var statearr_24415_24475 = state_24337__$1;(statearr_24415_24475[2] = inst_24284);
cljs.core.async.impl.ioc_helpers.process_exception(state_24337__$1);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24419[0] = state_machine__5507__auto__);
(statearr_24419[1] = 1);
return statearr_24419;
});
var state_machine__5507__auto____1 = (function (state_24337){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24337);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24420){if((e24420 instanceof Object))
{var ex__5510__auto__ = e24420;var statearr_24421_24476 = state_24337;(statearr_24421_24476[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24337);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e24420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__24477 = state_24337;
state_24337 = G__24477;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24337){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24422 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24423);
return statearr_24422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj24479 = {};return obj24479;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$217,null,cljs.core.constant$keyword$218,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$219);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$218);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$219,chs);var pauses = pick(cljs.core.constant$keyword$217,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$220,solos,cljs.core.constant$keyword$221,pick(cljs.core.constant$keyword$218,chs),cljs.core.constant$keyword$222,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$217)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24589 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24589 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24590){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta24590 = meta24590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24589.cljs$lang$type = true;
cljs.core.async.t24589.cljs$lang$ctorStr = "cljs.core.async/t24589";
cljs.core.async.t24589.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24589");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24589.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24589.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24589.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24591){var self__ = this;
var _24591__$1 = this;return self__.meta24590;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24591,meta24590__$1){var self__ = this;
var _24591__$1 = this;return (new cljs.core.async.t24589(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24590__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24589 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24589(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24590){return (new cljs.core.async.t24589(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24590));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24589(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24656){var state_val_24657 = (state_24656[1]);if((state_val_24657 === 1))
{var inst_24595 = (state_24656[7]);var inst_24595__$1 = calc_state();var inst_24596 = cljs.core.seq_QMARK_(inst_24595__$1);var state_24656__$1 = (function (){var statearr_24658 = state_24656;(statearr_24658[7] = inst_24595__$1);
return statearr_24658;
})();if(inst_24596)
{var statearr_24659_24699 = state_24656__$1;(statearr_24659_24699[1] = 2);
} else
{var statearr_24660_24700 = state_24656__$1;(statearr_24660_24700[1] = 3);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 2))
{var inst_24595 = (state_24656[7]);var inst_24598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24595);var state_24656__$1 = state_24656;var statearr_24661_24701 = state_24656__$1;(statearr_24661_24701[2] = inst_24598);
(statearr_24661_24701[1] = 4);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 3))
{var inst_24595 = (state_24656[7]);var state_24656__$1 = state_24656;var statearr_24662_24702 = state_24656__$1;(statearr_24662_24702[2] = inst_24595);
(statearr_24662_24702[1] = 4);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 4))
{var inst_24595 = (state_24656[7]);var inst_24601 = (state_24656[2]);var inst_24602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24601,cljs.core.constant$keyword$222);var inst_24603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24601,cljs.core.constant$keyword$221);var inst_24604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24601,cljs.core.constant$keyword$220);var inst_24605 = inst_24595;var state_24656__$1 = (function (){var statearr_24663 = state_24656;(statearr_24663[8] = inst_24602);
(statearr_24663[9] = inst_24603);
(statearr_24663[10] = inst_24604);
(statearr_24663[11] = inst_24605);
return statearr_24663;
})();var statearr_24664_24703 = state_24656__$1;(statearr_24664_24703[2] = null);
(statearr_24664_24703[1] = 5);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 5))
{var inst_24605 = (state_24656[11]);var inst_24608 = cljs.core.seq_QMARK_(inst_24605);var state_24656__$1 = state_24656;if(inst_24608)
{var statearr_24665_24704 = state_24656__$1;(statearr_24665_24704[1] = 7);
} else
{var statearr_24666_24705 = state_24656__$1;(statearr_24666_24705[1] = 8);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 6))
{var inst_24654 = (state_24656[2]);var state_24656__$1 = state_24656;return cljs.core.async.impl.ioc_helpers.return_chan(state_24656__$1,inst_24654);
} else
{if((state_val_24657 === 7))
{var inst_24605 = (state_24656[11]);var inst_24610 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24605);var state_24656__$1 = state_24656;var statearr_24667_24706 = state_24656__$1;(statearr_24667_24706[2] = inst_24610);
(statearr_24667_24706[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 8))
{var inst_24605 = (state_24656[11]);var state_24656__$1 = state_24656;var statearr_24668_24707 = state_24656__$1;(statearr_24668_24707[2] = inst_24605);
(statearr_24668_24707[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 9))
{var inst_24613 = (state_24656[12]);var inst_24613__$1 = (state_24656[2]);var inst_24614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24613__$1,cljs.core.constant$keyword$222);var inst_24615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24613__$1,cljs.core.constant$keyword$221);var inst_24616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24613__$1,cljs.core.constant$keyword$220);var state_24656__$1 = (function (){var statearr_24669 = state_24656;(statearr_24669[13] = inst_24616);
(statearr_24669[12] = inst_24613__$1);
(statearr_24669[14] = inst_24615);
return statearr_24669;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24656__$1,10,inst_24614);
} else
{if((state_val_24657 === 10))
{var inst_24621 = (state_24656[15]);var inst_24620 = (state_24656[16]);var inst_24619 = (state_24656[2]);var inst_24620__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24619,0,null);var inst_24621__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24619,1,null);var inst_24622 = (inst_24620__$1 == null);var inst_24623 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24621__$1,change);var inst_24624 = (inst_24622) || (inst_24623);var state_24656__$1 = (function (){var statearr_24670 = state_24656;(statearr_24670[15] = inst_24621__$1);
(statearr_24670[16] = inst_24620__$1);
return statearr_24670;
})();if(cljs.core.truth_(inst_24624))
{var statearr_24671_24708 = state_24656__$1;(statearr_24671_24708[1] = 11);
} else
{var statearr_24672_24709 = state_24656__$1;(statearr_24672_24709[1] = 12);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 11))
{var inst_24620 = (state_24656[16]);var inst_24626 = (inst_24620 == null);var state_24656__$1 = state_24656;if(cljs.core.truth_(inst_24626))
{var statearr_24673_24710 = state_24656__$1;(statearr_24673_24710[1] = 14);
} else
{var statearr_24674_24711 = state_24656__$1;(statearr_24674_24711[1] = 15);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 12))
{var inst_24616 = (state_24656[13]);var inst_24635 = (state_24656[17]);var inst_24621 = (state_24656[15]);var inst_24635__$1 = (inst_24616.cljs$core$IFn$_invoke$arity$1 ? inst_24616.cljs$core$IFn$_invoke$arity$1(inst_24621) : inst_24616.call(null,inst_24621));var state_24656__$1 = (function (){var statearr_24675 = state_24656;(statearr_24675[17] = inst_24635__$1);
return statearr_24675;
})();if(cljs.core.truth_(inst_24635__$1))
{var statearr_24676_24712 = state_24656__$1;(statearr_24676_24712[1] = 17);
} else
{var statearr_24677_24713 = state_24656__$1;(statearr_24677_24713[1] = 18);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 13))
{var inst_24652 = (state_24656[2]);var state_24656__$1 = state_24656;var statearr_24678_24714 = state_24656__$1;(statearr_24678_24714[2] = inst_24652);
(statearr_24678_24714[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 14))
{var inst_24621 = (state_24656[15]);var inst_24628 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24621);var state_24656__$1 = state_24656;var statearr_24679_24715 = state_24656__$1;(statearr_24679_24715[2] = inst_24628);
(statearr_24679_24715[1] = 16);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 15))
{var state_24656__$1 = state_24656;var statearr_24680_24716 = state_24656__$1;(statearr_24680_24716[2] = null);
(statearr_24680_24716[1] = 16);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 16))
{var inst_24631 = (state_24656[2]);var inst_24632 = calc_state();var inst_24605 = inst_24632;var state_24656__$1 = (function (){var statearr_24681 = state_24656;(statearr_24681[18] = inst_24631);
(statearr_24681[11] = inst_24605);
return statearr_24681;
})();var statearr_24682_24717 = state_24656__$1;(statearr_24682_24717[2] = null);
(statearr_24682_24717[1] = 5);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 17))
{var inst_24635 = (state_24656[17]);var state_24656__$1 = state_24656;var statearr_24683_24718 = state_24656__$1;(statearr_24683_24718[2] = inst_24635);
(statearr_24683_24718[1] = 19);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 18))
{var inst_24616 = (state_24656[13]);var inst_24621 = (state_24656[15]);var inst_24615 = (state_24656[14]);var inst_24638 = cljs.core.empty_QMARK_(inst_24616);var inst_24639 = (inst_24615.cljs$core$IFn$_invoke$arity$1 ? inst_24615.cljs$core$IFn$_invoke$arity$1(inst_24621) : inst_24615.call(null,inst_24621));var inst_24640 = cljs.core.not(inst_24639);var inst_24641 = (inst_24638) && (inst_24640);var state_24656__$1 = state_24656;var statearr_24684_24719 = state_24656__$1;(statearr_24684_24719[2] = inst_24641);
(statearr_24684_24719[1] = 19);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 19))
{var inst_24643 = (state_24656[2]);var state_24656__$1 = state_24656;if(cljs.core.truth_(inst_24643))
{var statearr_24685_24720 = state_24656__$1;(statearr_24685_24720[1] = 20);
} else
{var statearr_24686_24721 = state_24656__$1;(statearr_24686_24721[1] = 21);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 20))
{var inst_24620 = (state_24656[16]);var state_24656__$1 = state_24656;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24656__$1,23,out,inst_24620);
} else
{if((state_val_24657 === 21))
{var state_24656__$1 = state_24656;var statearr_24687_24722 = state_24656__$1;(statearr_24687_24722[2] = null);
(statearr_24687_24722[1] = 22);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 22))
{var inst_24613 = (state_24656[12]);var inst_24649 = (state_24656[2]);var inst_24605 = inst_24613;var state_24656__$1 = (function (){var statearr_24688 = state_24656;(statearr_24688[19] = inst_24649);
(statearr_24688[11] = inst_24605);
return statearr_24688;
})();var statearr_24689_24723 = state_24656__$1;(statearr_24689_24723[2] = null);
(statearr_24689_24723[1] = 5);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24657 === 23))
{var inst_24646 = (state_24656[2]);var state_24656__$1 = state_24656;var statearr_24690_24724 = state_24656__$1;(statearr_24690_24724[2] = inst_24646);
(statearr_24690_24724[1] = 22);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24694[0] = state_machine__5507__auto__);
(statearr_24694[1] = 1);
return statearr_24694;
});
var state_machine__5507__auto____1 = (function (state_24656){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24656);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24695){if((e24695 instanceof Object))
{var ex__5510__auto__ = e24695;var statearr_24696_24725 = state_24656;(statearr_24696_24725[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24656);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e24695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__24726 = state_24656;
state_24656 = G__24726;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24656){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24697 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24698);
return statearr_24697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj24728 = {};return obj24728;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
return (function (topic){var or__3406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3406__auto__,mults){
return (function (p1__24729_SHARP_){if(cljs.core.truth_((p1__24729_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24729_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24729_SHARP_.call(null,topic))))
{return p1__24729_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24729_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24854 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24855){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24855 = meta24855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24854.cljs$lang$type = true;
cljs.core.async.t24854.cljs$lang$ctorStr = "cljs.core.async/t24854";
cljs.core.async.t24854.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24854");
});})(mults,ensure_mult))
;
cljs.core.async.t24854.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24854.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24854.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24854.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24856){var self__ = this;
var _24856__$1 = this;return self__.meta24855;
});})(mults,ensure_mult))
;
cljs.core.async.t24854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24856,meta24855__$1){var self__ = this;
var _24856__$1 = this;return (new cljs.core.async.t24854(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24855__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24854 = ((function (mults,ensure_mult){
return (function __GT_t24854(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24855){return (new cljs.core.async.t24854(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24855));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24854(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24930){var state_val_24931 = (state_24930[1]);if((state_val_24931 === 1))
{var state_24930__$1 = state_24930;var statearr_24932_24979 = state_24930__$1;(statearr_24932_24979[2] = null);
(statearr_24932_24979[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 2))
{var state_24930__$1 = state_24930;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24930__$1,4,ch);
} else
{if((state_val_24931 === 3))
{var inst_24928 = (state_24930[2]);var state_24930__$1 = state_24930;return cljs.core.async.impl.ioc_helpers.return_chan(state_24930__$1,inst_24928);
} else
{if((state_val_24931 === 4))
{var inst_24859 = (state_24930[7]);var inst_24859__$1 = (state_24930[2]);var inst_24860 = (inst_24859__$1 == null);var state_24930__$1 = (function (){var statearr_24933 = state_24930;(statearr_24933[7] = inst_24859__$1);
return statearr_24933;
})();if(cljs.core.truth_(inst_24860))
{var statearr_24934_24980 = state_24930__$1;(statearr_24934_24980[1] = 5);
} else
{var statearr_24935_24981 = state_24930__$1;(statearr_24935_24981[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 5))
{var inst_24866 = cljs.core.deref(mults);var inst_24867 = cljs.core.vals(inst_24866);var inst_24868 = cljs.core.seq(inst_24867);var inst_24869 = inst_24868;var inst_24870 = null;var inst_24871 = 0;var inst_24872 = 0;var state_24930__$1 = (function (){var statearr_24936 = state_24930;(statearr_24936[8] = inst_24869);
(statearr_24936[9] = inst_24872);
(statearr_24936[10] = inst_24870);
(statearr_24936[11] = inst_24871);
return statearr_24936;
})();var statearr_24937_24982 = state_24930__$1;(statearr_24937_24982[2] = null);
(statearr_24937_24982[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 6))
{var inst_24859 = (state_24930[7]);var inst_24909 = (state_24930[12]);var inst_24907 = (state_24930[13]);var inst_24907__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24859) : topic_fn.call(null,inst_24859));var inst_24908 = cljs.core.deref(mults);var inst_24909__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24908,inst_24907__$1);var state_24930__$1 = (function (){var statearr_24938 = state_24930;(statearr_24938[12] = inst_24909__$1);
(statearr_24938[13] = inst_24907__$1);
return statearr_24938;
})();if(cljs.core.truth_(inst_24909__$1))
{var statearr_24939_24983 = state_24930__$1;(statearr_24939_24983[1] = 19);
} else
{var statearr_24940_24984 = state_24930__$1;(statearr_24940_24984[1] = 20);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 7))
{var inst_24926 = (state_24930[2]);var state_24930__$1 = state_24930;var statearr_24941_24985 = state_24930__$1;(statearr_24941_24985[2] = inst_24926);
(statearr_24941_24985[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 8))
{var inst_24872 = (state_24930[9]);var inst_24871 = (state_24930[11]);var inst_24874 = (inst_24872 < inst_24871);var inst_24875 = inst_24874;var state_24930__$1 = state_24930;if(cljs.core.truth_(inst_24875))
{var statearr_24945_24986 = state_24930__$1;(statearr_24945_24986[1] = 10);
} else
{var statearr_24946_24987 = state_24930__$1;(statearr_24946_24987[1] = 11);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 9))
{var inst_24905 = (state_24930[2]);var state_24930__$1 = state_24930;var statearr_24947_24988 = state_24930__$1;(statearr_24947_24988[2] = inst_24905);
(statearr_24947_24988[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 10))
{var inst_24869 = (state_24930[8]);var inst_24872 = (state_24930[9]);var inst_24870 = (state_24930[10]);var inst_24871 = (state_24930[11]);var inst_24877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24870,inst_24872);var inst_24878 = cljs.core.async.muxch_STAR_(inst_24877);var inst_24879 = cljs.core.async.close_BANG_(inst_24878);var inst_24880 = (inst_24872 + 1);var tmp24942 = inst_24869;var tmp24943 = inst_24870;var tmp24944 = inst_24871;var inst_24869__$1 = tmp24942;var inst_24870__$1 = tmp24943;var inst_24871__$1 = tmp24944;var inst_24872__$1 = inst_24880;var state_24930__$1 = (function (){var statearr_24948 = state_24930;(statearr_24948[8] = inst_24869__$1);
(statearr_24948[14] = inst_24879);
(statearr_24948[9] = inst_24872__$1);
(statearr_24948[10] = inst_24870__$1);
(statearr_24948[11] = inst_24871__$1);
return statearr_24948;
})();var statearr_24949_24989 = state_24930__$1;(statearr_24949_24989[2] = null);
(statearr_24949_24989[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 11))
{var inst_24869 = (state_24930[8]);var inst_24883 = (state_24930[15]);var inst_24883__$1 = cljs.core.seq(inst_24869);var state_24930__$1 = (function (){var statearr_24950 = state_24930;(statearr_24950[15] = inst_24883__$1);
return statearr_24950;
})();if(inst_24883__$1)
{var statearr_24951_24990 = state_24930__$1;(statearr_24951_24990[1] = 13);
} else
{var statearr_24952_24991 = state_24930__$1;(statearr_24952_24991[1] = 14);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 12))
{var inst_24903 = (state_24930[2]);var state_24930__$1 = state_24930;var statearr_24953_24992 = state_24930__$1;(statearr_24953_24992[2] = inst_24903);
(statearr_24953_24992[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 13))
{var inst_24883 = (state_24930[15]);var inst_24885 = cljs.core.chunked_seq_QMARK_(inst_24883);var state_24930__$1 = state_24930;if(inst_24885)
{var statearr_24954_24993 = state_24930__$1;(statearr_24954_24993[1] = 16);
} else
{var statearr_24955_24994 = state_24930__$1;(statearr_24955_24994[1] = 17);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 14))
{var state_24930__$1 = state_24930;var statearr_24956_24995 = state_24930__$1;(statearr_24956_24995[2] = null);
(statearr_24956_24995[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 15))
{var inst_24901 = (state_24930[2]);var state_24930__$1 = state_24930;var statearr_24957_24996 = state_24930__$1;(statearr_24957_24996[2] = inst_24901);
(statearr_24957_24996[1] = 12);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 16))
{var inst_24883 = (state_24930[15]);var inst_24887 = cljs.core.chunk_first(inst_24883);var inst_24888 = cljs.core.chunk_rest(inst_24883);var inst_24889 = cljs.core.count(inst_24887);var inst_24869 = inst_24888;var inst_24870 = inst_24887;var inst_24871 = inst_24889;var inst_24872 = 0;var state_24930__$1 = (function (){var statearr_24958 = state_24930;(statearr_24958[8] = inst_24869);
(statearr_24958[9] = inst_24872);
(statearr_24958[10] = inst_24870);
(statearr_24958[11] = inst_24871);
return statearr_24958;
})();var statearr_24959_24997 = state_24930__$1;(statearr_24959_24997[2] = null);
(statearr_24959_24997[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 17))
{var inst_24883 = (state_24930[15]);var inst_24892 = cljs.core.first(inst_24883);var inst_24893 = cljs.core.async.muxch_STAR_(inst_24892);var inst_24894 = cljs.core.async.close_BANG_(inst_24893);var inst_24895 = cljs.core.next(inst_24883);var inst_24869 = inst_24895;var inst_24870 = null;var inst_24871 = 0;var inst_24872 = 0;var state_24930__$1 = (function (){var statearr_24960 = state_24930;(statearr_24960[16] = inst_24894);
(statearr_24960[8] = inst_24869);
(statearr_24960[9] = inst_24872);
(statearr_24960[10] = inst_24870);
(statearr_24960[11] = inst_24871);
return statearr_24960;
})();var statearr_24961_24998 = state_24930__$1;(statearr_24961_24998[2] = null);
(statearr_24961_24998[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 18))
{var inst_24898 = (state_24930[2]);var state_24930__$1 = state_24930;var statearr_24962_24999 = state_24930__$1;(statearr_24962_24999[2] = inst_24898);
(statearr_24962_24999[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 19))
{var state_24930__$1 = state_24930;var statearr_24963_25000 = state_24930__$1;(statearr_24963_25000[2] = null);
(statearr_24963_25000[1] = 24);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 20))
{var state_24930__$1 = state_24930;var statearr_24964_25001 = state_24930__$1;(statearr_24964_25001[2] = null);
(statearr_24964_25001[1] = 21);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 21))
{var inst_24923 = (state_24930[2]);var state_24930__$1 = (function (){var statearr_24965 = state_24930;(statearr_24965[17] = inst_24923);
return statearr_24965;
})();var statearr_24966_25002 = state_24930__$1;(statearr_24966_25002[2] = null);
(statearr_24966_25002[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 22))
{var inst_24920 = (state_24930[2]);var state_24930__$1 = state_24930;var statearr_24967_25003 = state_24930__$1;(statearr_24967_25003[2] = inst_24920);
(statearr_24967_25003[1] = 21);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 23))
{var inst_24907 = (state_24930[13]);var inst_24911 = (state_24930[2]);var inst_24912 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24907);var state_24930__$1 = (function (){var statearr_24968 = state_24930;(statearr_24968[18] = inst_24911);
return statearr_24968;
})();var statearr_24969_25004 = state_24930__$1;(statearr_24969_25004[2] = inst_24912);
cljs.core.async.impl.ioc_helpers.process_exception(state_24930__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24931 === 24))
{var inst_24859 = (state_24930[7]);var inst_24909 = (state_24930[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24930,23,Object,null,22);var inst_24916 = cljs.core.async.muxch_STAR_(inst_24909);var state_24930__$1 = state_24930;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24930__$1,25,inst_24916,inst_24859);
} else
{if((state_val_24931 === 25))
{var inst_24918 = (state_24930[2]);var state_24930__$1 = state_24930;var statearr_24970_25005 = state_24930__$1;(statearr_24970_25005[2] = inst_24918);
cljs.core.async.impl.ioc_helpers.process_exception(state_24930__$1);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24974[0] = state_machine__5507__auto__);
(statearr_24974[1] = 1);
return statearr_24974;
});
var state_machine__5507__auto____1 = (function (state_24930){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24930);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24975){if((e24975 instanceof Object))
{var ex__5510__auto__ = e24975;var statearr_24976_25006 = state_24930;(statearr_24976_25006[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24930);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e24975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25007 = state_24930;
state_24930 = G__25007;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24930){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24977 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24978);
return statearr_24977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25114){var state_val_25115 = (state_25114[1]);if((state_val_25115 === 1))
{var state_25114__$1 = state_25114;var statearr_25116_25145 = state_25114__$1;(statearr_25116_25145[2] = null);
(statearr_25116_25145[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 2))
{var inst_25077 = cljs.core.reset_BANG_(dctr,cnt);var inst_25078 = 0;var state_25114__$1 = (function (){var statearr_25117 = state_25114;(statearr_25117[7] = inst_25077);
(statearr_25117[8] = inst_25078);
return statearr_25117;
})();var statearr_25118_25146 = state_25114__$1;(statearr_25118_25146[2] = null);
(statearr_25118_25146[1] = 4);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 3))
{var inst_25112 = (state_25114[2]);var state_25114__$1 = state_25114;return cljs.core.async.impl.ioc_helpers.return_chan(state_25114__$1,inst_25112);
} else
{if((state_val_25115 === 4))
{var inst_25078 = (state_25114[8]);var inst_25080 = (inst_25078 < cnt);var state_25114__$1 = state_25114;if(cljs.core.truth_(inst_25080))
{var statearr_25119_25147 = state_25114__$1;(statearr_25119_25147[1] = 6);
} else
{var statearr_25120_25148 = state_25114__$1;(statearr_25120_25148[1] = 7);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 5))
{var inst_25098 = (state_25114[2]);var state_25114__$1 = (function (){var statearr_25121 = state_25114;(statearr_25121[9] = inst_25098);
return statearr_25121;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25114__$1,12,dchan);
} else
{if((state_val_25115 === 6))
{var state_25114__$1 = state_25114;var statearr_25122_25149 = state_25114__$1;(statearr_25122_25149[2] = null);
(statearr_25122_25149[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 7))
{var state_25114__$1 = state_25114;var statearr_25123_25150 = state_25114__$1;(statearr_25123_25150[2] = null);
(statearr_25123_25150[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 8))
{var inst_25096 = (state_25114[2]);var state_25114__$1 = state_25114;var statearr_25124_25151 = state_25114__$1;(statearr_25124_25151[2] = inst_25096);
(statearr_25124_25151[1] = 5);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 9))
{var inst_25078 = (state_25114[8]);var inst_25091 = (state_25114[2]);var inst_25092 = (inst_25078 + 1);var inst_25078__$1 = inst_25092;var state_25114__$1 = (function (){var statearr_25125 = state_25114;(statearr_25125[8] = inst_25078__$1);
(statearr_25125[10] = inst_25091);
return statearr_25125;
})();var statearr_25126_25152 = state_25114__$1;(statearr_25126_25152[2] = null);
(statearr_25126_25152[1] = 4);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 10))
{var inst_25082 = (state_25114[2]);var inst_25083 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25114__$1 = (function (){var statearr_25127 = state_25114;(statearr_25127[11] = inst_25082);
return statearr_25127;
})();var statearr_25128_25153 = state_25114__$1;(statearr_25128_25153[2] = inst_25083);
cljs.core.async.impl.ioc_helpers.process_exception(state_25114__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 11))
{var inst_25078 = (state_25114[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25114,10,Object,null,9);var inst_25087 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25078) : chs__$1.call(null,inst_25078));var inst_25088 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25078) : done.call(null,inst_25078));var inst_25089 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25087,inst_25088);var state_25114__$1 = state_25114;var statearr_25129_25154 = state_25114__$1;(statearr_25129_25154[2] = inst_25089);
cljs.core.async.impl.ioc_helpers.process_exception(state_25114__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 12))
{var inst_25100 = (state_25114[12]);var inst_25100__$1 = (state_25114[2]);var inst_25101 = cljs.core.some(cljs.core.nil_QMARK_,inst_25100__$1);var state_25114__$1 = (function (){var statearr_25130 = state_25114;(statearr_25130[12] = inst_25100__$1);
return statearr_25130;
})();if(cljs.core.truth_(inst_25101))
{var statearr_25131_25155 = state_25114__$1;(statearr_25131_25155[1] = 13);
} else
{var statearr_25132_25156 = state_25114__$1;(statearr_25132_25156[1] = 14);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 13))
{var inst_25103 = cljs.core.async.close_BANG_(out);var state_25114__$1 = state_25114;var statearr_25133_25157 = state_25114__$1;(statearr_25133_25157[2] = inst_25103);
(statearr_25133_25157[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 14))
{var inst_25100 = (state_25114[12]);var inst_25105 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25100);var state_25114__$1 = state_25114;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25114__$1,16,out,inst_25105);
} else
{if((state_val_25115 === 15))
{var inst_25110 = (state_25114[2]);var state_25114__$1 = state_25114;var statearr_25134_25158 = state_25114__$1;(statearr_25134_25158[2] = inst_25110);
(statearr_25134_25158[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25115 === 16))
{var inst_25107 = (state_25114[2]);var state_25114__$1 = (function (){var statearr_25135 = state_25114;(statearr_25135[13] = inst_25107);
return statearr_25135;
})();var statearr_25136_25159 = state_25114__$1;(statearr_25136_25159[2] = null);
(statearr_25136_25159[1] = 2);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25140[0] = state_machine__5507__auto__);
(statearr_25140[1] = 1);
return statearr_25140;
});
var state_machine__5507__auto____1 = (function (state_25114){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25114);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25141){if((e25141 instanceof Object))
{var ex__5510__auto__ = e25141;var statearr_25142_25160 = state_25114;(statearr_25142_25160[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25114);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25161 = state_25114;
state_25114 = G__25161;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25114){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25143 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25144);
return statearr_25143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25245){var state_val_25246 = (state_25245[1]);if((state_val_25246 === 1))
{var inst_25216 = cljs.core.vec(chs);var inst_25217 = inst_25216;var state_25245__$1 = (function (){var statearr_25247 = state_25245;(statearr_25247[7] = inst_25217);
return statearr_25247;
})();var statearr_25248_25270 = state_25245__$1;(statearr_25248_25270[2] = null);
(statearr_25248_25270[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25246 === 2))
{var inst_25217 = (state_25245[7]);var inst_25219 = cljs.core.count(inst_25217);var inst_25220 = (inst_25219 > 0);var state_25245__$1 = state_25245;if(cljs.core.truth_(inst_25220))
{var statearr_25249_25271 = state_25245__$1;(statearr_25249_25271[1] = 4);
} else
{var statearr_25250_25272 = state_25245__$1;(statearr_25250_25272[1] = 5);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25246 === 3))
{var inst_25243 = (state_25245[2]);var state_25245__$1 = state_25245;return cljs.core.async.impl.ioc_helpers.return_chan(state_25245__$1,inst_25243);
} else
{if((state_val_25246 === 4))
{var inst_25217 = (state_25245[7]);var state_25245__$1 = state_25245;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25245__$1,7,inst_25217);
} else
{if((state_val_25246 === 5))
{var inst_25239 = cljs.core.async.close_BANG_(out);var state_25245__$1 = state_25245;var statearr_25251_25273 = state_25245__$1;(statearr_25251_25273[2] = inst_25239);
(statearr_25251_25273[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25246 === 6))
{var inst_25241 = (state_25245[2]);var state_25245__$1 = state_25245;var statearr_25252_25274 = state_25245__$1;(statearr_25252_25274[2] = inst_25241);
(statearr_25252_25274[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25246 === 7))
{var inst_25225 = (state_25245[8]);var inst_25224 = (state_25245[9]);var inst_25224__$1 = (state_25245[2]);var inst_25225__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25224__$1,0,null);var inst_25226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25224__$1,1,null);var inst_25227 = (inst_25225__$1 == null);var state_25245__$1 = (function (){var statearr_25253 = state_25245;(statearr_25253[10] = inst_25226);
(statearr_25253[8] = inst_25225__$1);
(statearr_25253[9] = inst_25224__$1);
return statearr_25253;
})();if(cljs.core.truth_(inst_25227))
{var statearr_25254_25275 = state_25245__$1;(statearr_25254_25275[1] = 8);
} else
{var statearr_25255_25276 = state_25245__$1;(statearr_25255_25276[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25246 === 8))
{var inst_25217 = (state_25245[7]);var inst_25226 = (state_25245[10]);var inst_25225 = (state_25245[8]);var inst_25224 = (state_25245[9]);var inst_25229 = (function (){var c = inst_25226;var v = inst_25225;var vec__25222 = inst_25224;var cs = inst_25217;return ((function (c,v,vec__25222,cs,inst_25217,inst_25226,inst_25225,inst_25224,state_val_25246){
return (function (p1__25162_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25162_SHARP_);
});
;})(c,v,vec__25222,cs,inst_25217,inst_25226,inst_25225,inst_25224,state_val_25246))
})();var inst_25230 = cljs.core.filterv(inst_25229,inst_25217);var inst_25217__$1 = inst_25230;var state_25245__$1 = (function (){var statearr_25256 = state_25245;(statearr_25256[7] = inst_25217__$1);
return statearr_25256;
})();var statearr_25257_25277 = state_25245__$1;(statearr_25257_25277[2] = null);
(statearr_25257_25277[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25246 === 9))
{var inst_25225 = (state_25245[8]);var state_25245__$1 = state_25245;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25245__$1,11,out,inst_25225);
} else
{if((state_val_25246 === 10))
{var inst_25237 = (state_25245[2]);var state_25245__$1 = state_25245;var statearr_25259_25278 = state_25245__$1;(statearr_25259_25278[2] = inst_25237);
(statearr_25259_25278[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25246 === 11))
{var inst_25217 = (state_25245[7]);var inst_25234 = (state_25245[2]);var tmp25258 = inst_25217;var inst_25217__$1 = tmp25258;var state_25245__$1 = (function (){var statearr_25260 = state_25245;(statearr_25260[7] = inst_25217__$1);
(statearr_25260[11] = inst_25234);
return statearr_25260;
})();var statearr_25261_25279 = state_25245__$1;(statearr_25261_25279[2] = null);
(statearr_25261_25279[1] = 2);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25265 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25265[0] = state_machine__5507__auto__);
(statearr_25265[1] = 1);
return statearr_25265;
});
var state_machine__5507__auto____1 = (function (state_25245){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25245);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25266){if((e25266 instanceof Object))
{var ex__5510__auto__ = e25266;var statearr_25267_25280 = state_25245;(statearr_25267_25280[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25245);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25281 = state_25245;
state_25245 = G__25281;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25245){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25268 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25269);
return statearr_25268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25351){var state_val_25352 = (state_25351[1]);if((state_val_25352 === 1))
{var inst_25328 = 0;var state_25351__$1 = (function (){var statearr_25353 = state_25351;(statearr_25353[7] = inst_25328);
return statearr_25353;
})();var statearr_25354_25375 = state_25351__$1;(statearr_25354_25375[2] = null);
(statearr_25354_25375[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25352 === 2))
{var inst_25328 = (state_25351[7]);var inst_25330 = (inst_25328 < n);var state_25351__$1 = state_25351;if(cljs.core.truth_(inst_25330))
{var statearr_25355_25376 = state_25351__$1;(statearr_25355_25376[1] = 4);
} else
{var statearr_25356_25377 = state_25351__$1;(statearr_25356_25377[1] = 5);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25352 === 3))
{var inst_25348 = (state_25351[2]);var inst_25349 = cljs.core.async.close_BANG_(out);var state_25351__$1 = (function (){var statearr_25357 = state_25351;(statearr_25357[8] = inst_25348);
return statearr_25357;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25351__$1,inst_25349);
} else
{if((state_val_25352 === 4))
{var state_25351__$1 = state_25351;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25351__$1,7,ch);
} else
{if((state_val_25352 === 5))
{var state_25351__$1 = state_25351;var statearr_25358_25378 = state_25351__$1;(statearr_25358_25378[2] = null);
(statearr_25358_25378[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25352 === 6))
{var inst_25346 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25359_25379 = state_25351__$1;(statearr_25359_25379[2] = inst_25346);
(statearr_25359_25379[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25352 === 7))
{var inst_25333 = (state_25351[9]);var inst_25333__$1 = (state_25351[2]);var inst_25334 = (inst_25333__$1 == null);var inst_25335 = cljs.core.not(inst_25334);var state_25351__$1 = (function (){var statearr_25360 = state_25351;(statearr_25360[9] = inst_25333__$1);
return statearr_25360;
})();if(inst_25335)
{var statearr_25361_25380 = state_25351__$1;(statearr_25361_25380[1] = 8);
} else
{var statearr_25362_25381 = state_25351__$1;(statearr_25362_25381[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25352 === 8))
{var inst_25333 = (state_25351[9]);var state_25351__$1 = state_25351;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25351__$1,11,out,inst_25333);
} else
{if((state_val_25352 === 9))
{var state_25351__$1 = state_25351;var statearr_25363_25382 = state_25351__$1;(statearr_25363_25382[2] = null);
(statearr_25363_25382[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25352 === 10))
{var inst_25343 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25364_25383 = state_25351__$1;(statearr_25364_25383[2] = inst_25343);
(statearr_25364_25383[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25352 === 11))
{var inst_25328 = (state_25351[7]);var inst_25338 = (state_25351[2]);var inst_25339 = (inst_25328 + 1);var inst_25328__$1 = inst_25339;var state_25351__$1 = (function (){var statearr_25365 = state_25351;(statearr_25365[10] = inst_25338);
(statearr_25365[7] = inst_25328__$1);
return statearr_25365;
})();var statearr_25366_25384 = state_25351__$1;(statearr_25366_25384[2] = null);
(statearr_25366_25384[1] = 2);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25370 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25370[0] = state_machine__5507__auto__);
(statearr_25370[1] = 1);
return statearr_25370;
});
var state_machine__5507__auto____1 = (function (state_25351){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25351);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25371){if((e25371 instanceof Object))
{var ex__5510__auto__ = e25371;var statearr_25372_25385 = state_25351;(statearr_25372_25385[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25351);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25386 = state_25351;
state_25351 = G__25386;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25351){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25373 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25374);
return statearr_25373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25458){var state_val_25459 = (state_25458[1]);if((state_val_25459 === 1))
{var inst_25435 = null;var state_25458__$1 = (function (){var statearr_25460 = state_25458;(statearr_25460[7] = inst_25435);
return statearr_25460;
})();var statearr_25461_25484 = state_25458__$1;(statearr_25461_25484[2] = null);
(statearr_25461_25484[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25459 === 2))
{var state_25458__$1 = state_25458;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25458__$1,4,ch);
} else
{if((state_val_25459 === 3))
{var inst_25455 = (state_25458[2]);var inst_25456 = cljs.core.async.close_BANG_(out);var state_25458__$1 = (function (){var statearr_25462 = state_25458;(statearr_25462[8] = inst_25455);
return statearr_25462;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25458__$1,inst_25456);
} else
{if((state_val_25459 === 4))
{var inst_25438 = (state_25458[9]);var inst_25438__$1 = (state_25458[2]);var inst_25439 = (inst_25438__$1 == null);var inst_25440 = cljs.core.not(inst_25439);var state_25458__$1 = (function (){var statearr_25463 = state_25458;(statearr_25463[9] = inst_25438__$1);
return statearr_25463;
})();if(inst_25440)
{var statearr_25464_25485 = state_25458__$1;(statearr_25464_25485[1] = 5);
} else
{var statearr_25465_25486 = state_25458__$1;(statearr_25465_25486[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25459 === 5))
{var inst_25438 = (state_25458[9]);var inst_25435 = (state_25458[7]);var inst_25442 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25438,inst_25435);var state_25458__$1 = state_25458;if(inst_25442)
{var statearr_25466_25487 = state_25458__$1;(statearr_25466_25487[1] = 8);
} else
{var statearr_25467_25488 = state_25458__$1;(statearr_25467_25488[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25459 === 6))
{var state_25458__$1 = state_25458;var statearr_25469_25489 = state_25458__$1;(statearr_25469_25489[2] = null);
(statearr_25469_25489[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25459 === 7))
{var inst_25453 = (state_25458[2]);var state_25458__$1 = state_25458;var statearr_25470_25490 = state_25458__$1;(statearr_25470_25490[2] = inst_25453);
(statearr_25470_25490[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25459 === 8))
{var inst_25435 = (state_25458[7]);var tmp25468 = inst_25435;var inst_25435__$1 = tmp25468;var state_25458__$1 = (function (){var statearr_25471 = state_25458;(statearr_25471[7] = inst_25435__$1);
return statearr_25471;
})();var statearr_25472_25491 = state_25458__$1;(statearr_25472_25491[2] = null);
(statearr_25472_25491[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25459 === 9))
{var inst_25438 = (state_25458[9]);var state_25458__$1 = state_25458;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25458__$1,11,out,inst_25438);
} else
{if((state_val_25459 === 10))
{var inst_25450 = (state_25458[2]);var state_25458__$1 = state_25458;var statearr_25473_25492 = state_25458__$1;(statearr_25473_25492[2] = inst_25450);
(statearr_25473_25492[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25459 === 11))
{var inst_25438 = (state_25458[9]);var inst_25447 = (state_25458[2]);var inst_25435 = inst_25438;var state_25458__$1 = (function (){var statearr_25474 = state_25458;(statearr_25474[10] = inst_25447);
(statearr_25474[7] = inst_25435);
return statearr_25474;
})();var statearr_25475_25493 = state_25458__$1;(statearr_25475_25493[2] = null);
(statearr_25475_25493[1] = 2);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25479 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25479[0] = state_machine__5507__auto__);
(statearr_25479[1] = 1);
return statearr_25479;
});
var state_machine__5507__auto____1 = (function (state_25458){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25458);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25480){if((e25480 instanceof Object))
{var ex__5510__auto__ = e25480;var statearr_25481_25494 = state_25458;(statearr_25481_25494[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25458);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25495 = state_25458;
state_25458 = G__25495;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25458){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25482 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25483);
return statearr_25482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25600){var state_val_25601 = (state_25600[1]);if((state_val_25601 === 1))
{var inst_25563 = (new Array(n));var inst_25564 = inst_25563;var inst_25565 = 0;var state_25600__$1 = (function (){var statearr_25602 = state_25600;(statearr_25602[7] = inst_25565);
(statearr_25602[8] = inst_25564);
return statearr_25602;
})();var statearr_25603_25631 = state_25600__$1;(statearr_25603_25631[2] = null);
(statearr_25603_25631[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 2))
{var state_25600__$1 = state_25600;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25600__$1,4,ch);
} else
{if((state_val_25601 === 3))
{var inst_25598 = (state_25600[2]);var state_25600__$1 = state_25600;return cljs.core.async.impl.ioc_helpers.return_chan(state_25600__$1,inst_25598);
} else
{if((state_val_25601 === 4))
{var inst_25568 = (state_25600[9]);var inst_25568__$1 = (state_25600[2]);var inst_25569 = (inst_25568__$1 == null);var inst_25570 = cljs.core.not(inst_25569);var state_25600__$1 = (function (){var statearr_25604 = state_25600;(statearr_25604[9] = inst_25568__$1);
return statearr_25604;
})();if(inst_25570)
{var statearr_25605_25632 = state_25600__$1;(statearr_25605_25632[1] = 5);
} else
{var statearr_25606_25633 = state_25600__$1;(statearr_25606_25633[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 5))
{var inst_25573 = (state_25600[10]);var inst_25568 = (state_25600[9]);var inst_25565 = (state_25600[7]);var inst_25564 = (state_25600[8]);var inst_25572 = (inst_25564[inst_25565] = inst_25568);var inst_25573__$1 = (inst_25565 + 1);var inst_25574 = (inst_25573__$1 < n);var state_25600__$1 = (function (){var statearr_25607 = state_25600;(statearr_25607[11] = inst_25572);
(statearr_25607[10] = inst_25573__$1);
return statearr_25607;
})();if(cljs.core.truth_(inst_25574))
{var statearr_25608_25634 = state_25600__$1;(statearr_25608_25634[1] = 8);
} else
{var statearr_25609_25635 = state_25600__$1;(statearr_25609_25635[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 6))
{var inst_25565 = (state_25600[7]);var inst_25586 = (inst_25565 > 0);var state_25600__$1 = state_25600;if(cljs.core.truth_(inst_25586))
{var statearr_25611_25636 = state_25600__$1;(statearr_25611_25636[1] = 12);
} else
{var statearr_25612_25637 = state_25600__$1;(statearr_25612_25637[1] = 13);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 7))
{var inst_25596 = (state_25600[2]);var state_25600__$1 = state_25600;var statearr_25613_25638 = state_25600__$1;(statearr_25613_25638[2] = inst_25596);
(statearr_25613_25638[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 8))
{var inst_25573 = (state_25600[10]);var inst_25564 = (state_25600[8]);var tmp25610 = inst_25564;var inst_25564__$1 = tmp25610;var inst_25565 = inst_25573;var state_25600__$1 = (function (){var statearr_25614 = state_25600;(statearr_25614[7] = inst_25565);
(statearr_25614[8] = inst_25564__$1);
return statearr_25614;
})();var statearr_25615_25639 = state_25600__$1;(statearr_25615_25639[2] = null);
(statearr_25615_25639[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 9))
{var inst_25564 = (state_25600[8]);var inst_25578 = cljs.core.vec(inst_25564);var state_25600__$1 = state_25600;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25600__$1,11,out,inst_25578);
} else
{if((state_val_25601 === 10))
{var inst_25584 = (state_25600[2]);var state_25600__$1 = state_25600;var statearr_25616_25640 = state_25600__$1;(statearr_25616_25640[2] = inst_25584);
(statearr_25616_25640[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 11))
{var inst_25580 = (state_25600[2]);var inst_25581 = (new Array(n));var inst_25564 = inst_25581;var inst_25565 = 0;var state_25600__$1 = (function (){var statearr_25617 = state_25600;(statearr_25617[12] = inst_25580);
(statearr_25617[7] = inst_25565);
(statearr_25617[8] = inst_25564);
return statearr_25617;
})();var statearr_25618_25641 = state_25600__$1;(statearr_25618_25641[2] = null);
(statearr_25618_25641[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 12))
{var inst_25564 = (state_25600[8]);var inst_25588 = cljs.core.vec(inst_25564);var state_25600__$1 = state_25600;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25600__$1,15,out,inst_25588);
} else
{if((state_val_25601 === 13))
{var state_25600__$1 = state_25600;var statearr_25619_25642 = state_25600__$1;(statearr_25619_25642[2] = null);
(statearr_25619_25642[1] = 14);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 14))
{var inst_25593 = (state_25600[2]);var inst_25594 = cljs.core.async.close_BANG_(out);var state_25600__$1 = (function (){var statearr_25620 = state_25600;(statearr_25620[13] = inst_25593);
return statearr_25620;
})();var statearr_25621_25643 = state_25600__$1;(statearr_25621_25643[2] = inst_25594);
(statearr_25621_25643[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25601 === 15))
{var inst_25590 = (state_25600[2]);var state_25600__$1 = state_25600;var statearr_25622_25644 = state_25600__$1;(statearr_25622_25644[2] = inst_25590);
(statearr_25622_25644[1] = 14);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25626[0] = state_machine__5507__auto__);
(statearr_25626[1] = 1);
return statearr_25626;
});
var state_machine__5507__auto____1 = (function (state_25600){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25600);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25627){if((e25627 instanceof Object))
{var ex__5510__auto__ = e25627;var statearr_25628_25645 = state_25600;(statearr_25628_25645[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25600);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25646 = state_25600;
state_25600 = G__25646;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25600){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25629 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25630);
return statearr_25629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25759){var state_val_25760 = (state_25759[1]);if((state_val_25760 === 1))
{var inst_25718 = [];var inst_25719 = inst_25718;var inst_25720 = cljs.core.constant$keyword$223;var state_25759__$1 = (function (){var statearr_25761 = state_25759;(statearr_25761[7] = inst_25719);
(statearr_25761[8] = inst_25720);
return statearr_25761;
})();var statearr_25762_25790 = state_25759__$1;(statearr_25762_25790[2] = null);
(statearr_25762_25790[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 2))
{var state_25759__$1 = state_25759;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25759__$1,4,ch);
} else
{if((state_val_25760 === 3))
{var inst_25757 = (state_25759[2]);var state_25759__$1 = state_25759;return cljs.core.async.impl.ioc_helpers.return_chan(state_25759__$1,inst_25757);
} else
{if((state_val_25760 === 4))
{var inst_25723 = (state_25759[9]);var inst_25723__$1 = (state_25759[2]);var inst_25724 = (inst_25723__$1 == null);var inst_25725 = cljs.core.not(inst_25724);var state_25759__$1 = (function (){var statearr_25763 = state_25759;(statearr_25763[9] = inst_25723__$1);
return statearr_25763;
})();if(inst_25725)
{var statearr_25764_25791 = state_25759__$1;(statearr_25764_25791[1] = 5);
} else
{var statearr_25765_25792 = state_25759__$1;(statearr_25765_25792[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 5))
{var inst_25723 = (state_25759[9]);var inst_25727 = (state_25759[10]);var inst_25720 = (state_25759[8]);var inst_25727__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25723) : f.call(null,inst_25723));var inst_25728 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25727__$1,inst_25720);var inst_25729 = cljs.core.keyword_identical_QMARK_(inst_25720,cljs.core.constant$keyword$223);var inst_25730 = (inst_25728) || (inst_25729);var state_25759__$1 = (function (){var statearr_25766 = state_25759;(statearr_25766[10] = inst_25727__$1);
return statearr_25766;
})();if(cljs.core.truth_(inst_25730))
{var statearr_25767_25793 = state_25759__$1;(statearr_25767_25793[1] = 8);
} else
{var statearr_25768_25794 = state_25759__$1;(statearr_25768_25794[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 6))
{var inst_25719 = (state_25759[7]);var inst_25744 = inst_25719.length;var inst_25745 = (inst_25744 > 0);var state_25759__$1 = state_25759;if(cljs.core.truth_(inst_25745))
{var statearr_25770_25795 = state_25759__$1;(statearr_25770_25795[1] = 12);
} else
{var statearr_25771_25796 = state_25759__$1;(statearr_25771_25796[1] = 13);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 7))
{var inst_25755 = (state_25759[2]);var state_25759__$1 = state_25759;var statearr_25772_25797 = state_25759__$1;(statearr_25772_25797[2] = inst_25755);
(statearr_25772_25797[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 8))
{var inst_25719 = (state_25759[7]);var inst_25723 = (state_25759[9]);var inst_25727 = (state_25759[10]);var inst_25732 = inst_25719.push(inst_25723);var tmp25769 = inst_25719;var inst_25719__$1 = tmp25769;var inst_25720 = inst_25727;var state_25759__$1 = (function (){var statearr_25773 = state_25759;(statearr_25773[7] = inst_25719__$1);
(statearr_25773[11] = inst_25732);
(statearr_25773[8] = inst_25720);
return statearr_25773;
})();var statearr_25774_25798 = state_25759__$1;(statearr_25774_25798[2] = null);
(statearr_25774_25798[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 9))
{var inst_25719 = (state_25759[7]);var inst_25735 = cljs.core.vec(inst_25719);var state_25759__$1 = state_25759;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25759__$1,11,out,inst_25735);
} else
{if((state_val_25760 === 10))
{var inst_25742 = (state_25759[2]);var state_25759__$1 = state_25759;var statearr_25775_25799 = state_25759__$1;(statearr_25775_25799[2] = inst_25742);
(statearr_25775_25799[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 11))
{var inst_25723 = (state_25759[9]);var inst_25727 = (state_25759[10]);var inst_25737 = (state_25759[2]);var inst_25738 = [];var inst_25739 = inst_25738.push(inst_25723);var inst_25719 = inst_25738;var inst_25720 = inst_25727;var state_25759__$1 = (function (){var statearr_25776 = state_25759;(statearr_25776[12] = inst_25737);
(statearr_25776[7] = inst_25719);
(statearr_25776[8] = inst_25720);
(statearr_25776[13] = inst_25739);
return statearr_25776;
})();var statearr_25777_25800 = state_25759__$1;(statearr_25777_25800[2] = null);
(statearr_25777_25800[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 12))
{var inst_25719 = (state_25759[7]);var inst_25747 = cljs.core.vec(inst_25719);var state_25759__$1 = state_25759;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25759__$1,15,out,inst_25747);
} else
{if((state_val_25760 === 13))
{var state_25759__$1 = state_25759;var statearr_25778_25801 = state_25759__$1;(statearr_25778_25801[2] = null);
(statearr_25778_25801[1] = 14);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 14))
{var inst_25752 = (state_25759[2]);var inst_25753 = cljs.core.async.close_BANG_(out);var state_25759__$1 = (function (){var statearr_25779 = state_25759;(statearr_25779[14] = inst_25752);
return statearr_25779;
})();var statearr_25780_25802 = state_25759__$1;(statearr_25780_25802[2] = inst_25753);
(statearr_25780_25802[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25760 === 15))
{var inst_25749 = (state_25759[2]);var state_25759__$1 = state_25759;var statearr_25781_25803 = state_25759__$1;(statearr_25781_25803[2] = inst_25749);
(statearr_25781_25803[1] = 14);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25785[0] = state_machine__5507__auto__);
(statearr_25785[1] = 1);
return statearr_25785;
});
var state_machine__5507__auto____1 = (function (state_25759){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25759);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25786){if((e25786 instanceof Object))
{var ex__5510__auto__ = e25786;var statearr_25787_25804 = state_25759;(statearr_25787_25804[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25759);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25805 = state_25759;
state_25759 = G__25805;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25759){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25788 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25789);
return statearr_25788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
