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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24235 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24235 = (function (f,fn_handler,meta24236){
this.f = f;
this.fn_handler = fn_handler;
this.meta24236 = meta24236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24235.cljs$lang$type = true;
cljs.core.async.t24235.cljs$lang$ctorStr = "cljs.core.async/t24235";
cljs.core.async.t24235.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24235");
});
cljs.core.async.t24235.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24237){var self__ = this;
var _24237__$1 = this;return self__.meta24236;
});
cljs.core.async.t24235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24237,meta24236__$1){var self__ = this;
var _24237__$1 = this;return (new cljs.core.async.t24235(self__.f,self__.fn_handler,meta24236__$1));
});
cljs.core.async.__GT_t24235 = (function __GT_t24235(f__$1,fn_handler__$1,meta24236){return (new cljs.core.async.t24235(f__$1,fn_handler__$1,meta24236));
});
}
return (new cljs.core.async.t24235(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24239 = buff;if(G__24239)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24239.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24239.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24239);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24239);
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
{var val_24240 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24240) : fn1.call(null,val_24240));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24240) : fn1.call(null,val_24240));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24241 = n;var x_24242 = 0;while(true){
if((x_24242 < n__4248__auto___24241))
{(a[x_24242] = 0);
{
var G__24243 = (x_24242 + 1);
x_24242 = G__24243;
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
var G__24244 = (i + 1);
i = G__24244;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24248 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24248 = (function (flag,alt_flag,meta24249){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24249 = meta24249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24248.cljs$lang$type = true;
cljs.core.async.t24248.cljs$lang$ctorStr = "cljs.core.async/t24248";
cljs.core.async.t24248.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24248");
});
cljs.core.async.t24248.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24250){var self__ = this;
var _24250__$1 = this;return self__.meta24249;
});
cljs.core.async.t24248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24250,meta24249__$1){var self__ = this;
var _24250__$1 = this;return (new cljs.core.async.t24248(self__.flag,self__.alt_flag,meta24249__$1));
});
cljs.core.async.__GT_t24248 = (function __GT_t24248(flag__$1,alt_flag__$1,meta24249){return (new cljs.core.async.t24248(flag__$1,alt_flag__$1,meta24249));
});
}
return (new cljs.core.async.t24248(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24254 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24254 = (function (cb,flag,alt_handler,meta24255){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24255 = meta24255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24254.cljs$lang$type = true;
cljs.core.async.t24254.cljs$lang$ctorStr = "cljs.core.async/t24254";
cljs.core.async.t24254.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24254");
});
cljs.core.async.t24254.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24256){var self__ = this;
var _24256__$1 = this;return self__.meta24255;
});
cljs.core.async.t24254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24256,meta24255__$1){var self__ = this;
var _24256__$1 = this;return (new cljs.core.async.t24254(self__.cb,self__.flag,self__.alt_handler,meta24255__$1));
});
cljs.core.async.__GT_t24254 = (function __GT_t24254(cb__$1,flag__$1,alt_handler__$1,meta24255){return (new cljs.core.async.t24254(cb__$1,flag__$1,alt_handler__$1,meta24255));
});
}
return (new cljs.core.async.t24254(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24257_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24257_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24257_SHARP_,port], null)));
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
var G__24258 = (i + 1);
i = G__24258;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$231))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$231], null));
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
var alts_BANG___delegate = function (ports,p__24259){var map__24261 = p__24259;var map__24261__$1 = ((cljs.core.seq_QMARK_(map__24261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24261):map__24261);var opts = map__24261__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24259 = null;if (arguments.length > 1) {
  p__24259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24259);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24262){
var ports = cljs.core.first(arglist__24262);
var p__24259 = cljs.core.rest(arglist__24262);
return alts_BANG___delegate(ports,p__24259);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24270 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24270 = (function (ch,f,map_LT_,meta24271){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24271 = meta24271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24270.cljs$lang$type = true;
cljs.core.async.t24270.cljs$lang$ctorStr = "cljs.core.async/t24270";
cljs.core.async.t24270.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24270");
});
cljs.core.async.t24270.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24270.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24273 = (function (fn1,_,meta24271,ch,f,map_LT_,meta24274){
this.fn1 = fn1;
this._ = _;
this.meta24271 = meta24271;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24274 = meta24274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24273.cljs$lang$type = true;
cljs.core.async.t24273.cljs$lang$ctorStr = "cljs.core.async/t24273";
cljs.core.async.t24273.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24273");
});
cljs.core.async.t24273.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24273.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24263_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24263_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24263_SHARP_) : self__.f.call(null,p1__24263_SHARP_)))) : f1.call(null,(((p1__24263_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24263_SHARP_) : self__.f.call(null,p1__24263_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24275){var self__ = this;
var _24275__$1 = this;return self__.meta24274;
});
cljs.core.async.t24273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24275,meta24274__$1){var self__ = this;
var _24275__$1 = this;return (new cljs.core.async.t24273(self__.fn1,self__._,self__.meta24271,self__.ch,self__.f,self__.map_LT_,meta24274__$1));
});
cljs.core.async.__GT_t24273 = (function __GT_t24273(fn1__$1,___$2,meta24271__$1,ch__$2,f__$2,map_LT___$2,meta24274){return (new cljs.core.async.t24273(fn1__$1,___$2,meta24271__$1,ch__$2,f__$2,map_LT___$2,meta24274));
});
}
return (new cljs.core.async.t24273(fn1,___$1,self__.meta24271,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24270.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24272){var self__ = this;
var _24272__$1 = this;return self__.meta24271;
});
cljs.core.async.t24270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24272,meta24271__$1){var self__ = this;
var _24272__$1 = this;return (new cljs.core.async.t24270(self__.ch,self__.f,self__.map_LT_,meta24271__$1));
});
cljs.core.async.__GT_t24270 = (function __GT_t24270(ch__$1,f__$1,map_LT___$1,meta24271){return (new cljs.core.async.t24270(ch__$1,f__$1,map_LT___$1,meta24271));
});
}
return (new cljs.core.async.t24270(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24279 = (function (ch,f,map_GT_,meta24280){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24280 = meta24280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24279.cljs$lang$type = true;
cljs.core.async.t24279.cljs$lang$ctorStr = "cljs.core.async/t24279";
cljs.core.async.t24279.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24279");
});
cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24281){var self__ = this;
var _24281__$1 = this;return self__.meta24280;
});
cljs.core.async.t24279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24281,meta24280__$1){var self__ = this;
var _24281__$1 = this;return (new cljs.core.async.t24279(self__.ch,self__.f,self__.map_GT_,meta24280__$1));
});
cljs.core.async.__GT_t24279 = (function __GT_t24279(ch__$1,f__$1,map_GT___$1,meta24280){return (new cljs.core.async.t24279(ch__$1,f__$1,map_GT___$1,meta24280));
});
}
return (new cljs.core.async.t24279(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24285 = (function (ch,p,filter_GT_,meta24286){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24286 = meta24286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24285.cljs$lang$type = true;
cljs.core.async.t24285.cljs$lang$ctorStr = "cljs.core.async/t24285";
cljs.core.async.t24285.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24285");
});
cljs.core.async.t24285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24285.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24287){var self__ = this;
var _24287__$1 = this;return self__.meta24286;
});
cljs.core.async.t24285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24287,meta24286__$1){var self__ = this;
var _24287__$1 = this;return (new cljs.core.async.t24285(self__.ch,self__.p,self__.filter_GT_,meta24286__$1));
});
cljs.core.async.__GT_t24285 = (function __GT_t24285(ch__$1,p__$1,filter_GT___$1,meta24286){return (new cljs.core.async.t24285(ch__$1,p__$1,filter_GT___$1,meta24286));
});
}
return (new cljs.core.async.t24285(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24349){var state_val_24350 = (state_24349[1]);if((state_val_24350 === 1))
{var state_24349__$1 = state_24349;var statearr_24351_24371 = state_24349__$1;(statearr_24351_24371[2] = null);
(statearr_24351_24371[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24350 === 2))
{var state_24349__$1 = state_24349;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24349__$1,4,ch);
} else
{if((state_val_24350 === 3))
{var inst_24347 = (state_24349[2]);var state_24349__$1 = state_24349;return cljs.core.async.impl.ioc_helpers.return_chan(state_24349__$1,inst_24347);
} else
{if((state_val_24350 === 4))
{var inst_24331 = (state_24349[7]);var inst_24331__$1 = (state_24349[2]);var inst_24332 = (inst_24331__$1 == null);var state_24349__$1 = (function (){var statearr_24352 = state_24349;(statearr_24352[7] = inst_24331__$1);
return statearr_24352;
})();if(cljs.core.truth_(inst_24332))
{var statearr_24353_24372 = state_24349__$1;(statearr_24353_24372[1] = 5);
} else
{var statearr_24354_24373 = state_24349__$1;(statearr_24354_24373[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24350 === 5))
{var inst_24334 = cljs.core.async.close_BANG_(out);var state_24349__$1 = state_24349;var statearr_24355_24374 = state_24349__$1;(statearr_24355_24374[2] = inst_24334);
(statearr_24355_24374[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24350 === 6))
{var inst_24331 = (state_24349[7]);var inst_24336 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24331) : p.call(null,inst_24331));var state_24349__$1 = state_24349;if(cljs.core.truth_(inst_24336))
{var statearr_24356_24375 = state_24349__$1;(statearr_24356_24375[1] = 8);
} else
{var statearr_24357_24376 = state_24349__$1;(statearr_24357_24376[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24350 === 7))
{var inst_24345 = (state_24349[2]);var state_24349__$1 = state_24349;var statearr_24358_24377 = state_24349__$1;(statearr_24358_24377[2] = inst_24345);
(statearr_24358_24377[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24350 === 8))
{var inst_24331 = (state_24349[7]);var state_24349__$1 = state_24349;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24349__$1,11,out,inst_24331);
} else
{if((state_val_24350 === 9))
{var state_24349__$1 = state_24349;var statearr_24359_24378 = state_24349__$1;(statearr_24359_24378[2] = null);
(statearr_24359_24378[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24350 === 10))
{var inst_24342 = (state_24349[2]);var state_24349__$1 = (function (){var statearr_24360 = state_24349;(statearr_24360[8] = inst_24342);
return statearr_24360;
})();var statearr_24361_24379 = state_24349__$1;(statearr_24361_24379[2] = null);
(statearr_24361_24379[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24350 === 11))
{var inst_24339 = (state_24349[2]);var state_24349__$1 = state_24349;var statearr_24362_24380 = state_24349__$1;(statearr_24362_24380[2] = inst_24339);
(statearr_24362_24380[1] = 10);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24366 = [null,null,null,null,null,null,null,null,null];(statearr_24366[0] = state_machine__5507__auto__);
(statearr_24366[1] = 1);
return statearr_24366;
});
var state_machine__5507__auto____1 = (function (state_24349){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24349);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24367){if((e24367 instanceof Object))
{var ex__5510__auto__ = e24367;var statearr_24368_24381 = state_24349;(statearr_24368_24381[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24349);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24382 = state_24349;
state_24349 = G__24382;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24349){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24369 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24370);
return statearr_24369;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24534){var state_val_24535 = (state_24534[1]);if((state_val_24535 === 1))
{var state_24534__$1 = state_24534;var statearr_24536_24573 = state_24534__$1;(statearr_24536_24573[2] = null);
(statearr_24536_24573[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 2))
{var state_24534__$1 = state_24534;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24534__$1,4,in$);
} else
{if((state_val_24535 === 3))
{var inst_24532 = (state_24534[2]);var state_24534__$1 = state_24534;return cljs.core.async.impl.ioc_helpers.return_chan(state_24534__$1,inst_24532);
} else
{if((state_val_24535 === 4))
{var inst_24480 = (state_24534[7]);var inst_24480__$1 = (state_24534[2]);var inst_24481 = (inst_24480__$1 == null);var state_24534__$1 = (function (){var statearr_24537 = state_24534;(statearr_24537[7] = inst_24480__$1);
return statearr_24537;
})();if(cljs.core.truth_(inst_24481))
{var statearr_24538_24574 = state_24534__$1;(statearr_24538_24574[1] = 5);
} else
{var statearr_24539_24575 = state_24534__$1;(statearr_24539_24575[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 5))
{var inst_24483 = cljs.core.async.close_BANG_(out);var state_24534__$1 = state_24534;var statearr_24540_24576 = state_24534__$1;(statearr_24540_24576[2] = inst_24483);
(statearr_24540_24576[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 6))
{var inst_24480 = (state_24534[7]);var inst_24485 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24480) : f.call(null,inst_24480));var inst_24490 = cljs.core.seq(inst_24485);var inst_24491 = inst_24490;var inst_24492 = null;var inst_24493 = 0;var inst_24494 = 0;var state_24534__$1 = (function (){var statearr_24541 = state_24534;(statearr_24541[8] = inst_24494);
(statearr_24541[9] = inst_24491);
(statearr_24541[10] = inst_24493);
(statearr_24541[11] = inst_24492);
return statearr_24541;
})();var statearr_24542_24577 = state_24534__$1;(statearr_24542_24577[2] = null);
(statearr_24542_24577[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 7))
{var inst_24530 = (state_24534[2]);var state_24534__$1 = state_24534;var statearr_24543_24578 = state_24534__$1;(statearr_24543_24578[2] = inst_24530);
(statearr_24543_24578[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 8))
{var inst_24494 = (state_24534[8]);var inst_24493 = (state_24534[10]);var inst_24496 = (inst_24494 < inst_24493);var inst_24497 = inst_24496;var state_24534__$1 = state_24534;if(cljs.core.truth_(inst_24497))
{var statearr_24544_24579 = state_24534__$1;(statearr_24544_24579[1] = 10);
} else
{var statearr_24545_24580 = state_24534__$1;(statearr_24545_24580[1] = 11);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 9))
{var inst_24527 = (state_24534[2]);var state_24534__$1 = (function (){var statearr_24546 = state_24534;(statearr_24546[12] = inst_24527);
return statearr_24546;
})();var statearr_24547_24581 = state_24534__$1;(statearr_24547_24581[2] = null);
(statearr_24547_24581[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 10))
{var inst_24494 = (state_24534[8]);var inst_24492 = (state_24534[11]);var inst_24499 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24492,inst_24494);var state_24534__$1 = state_24534;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24534__$1,13,out,inst_24499);
} else
{if((state_val_24535 === 11))
{var inst_24491 = (state_24534[9]);var inst_24505 = (state_24534[13]);var inst_24505__$1 = cljs.core.seq(inst_24491);var state_24534__$1 = (function (){var statearr_24551 = state_24534;(statearr_24551[13] = inst_24505__$1);
return statearr_24551;
})();if(inst_24505__$1)
{var statearr_24552_24582 = state_24534__$1;(statearr_24552_24582[1] = 14);
} else
{var statearr_24553_24583 = state_24534__$1;(statearr_24553_24583[1] = 15);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 12))
{var inst_24525 = (state_24534[2]);var state_24534__$1 = state_24534;var statearr_24554_24584 = state_24534__$1;(statearr_24554_24584[2] = inst_24525);
(statearr_24554_24584[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 13))
{var inst_24494 = (state_24534[8]);var inst_24491 = (state_24534[9]);var inst_24493 = (state_24534[10]);var inst_24492 = (state_24534[11]);var inst_24501 = (state_24534[2]);var inst_24502 = (inst_24494 + 1);var tmp24548 = inst_24491;var tmp24549 = inst_24493;var tmp24550 = inst_24492;var inst_24491__$1 = tmp24548;var inst_24492__$1 = tmp24550;var inst_24493__$1 = tmp24549;var inst_24494__$1 = inst_24502;var state_24534__$1 = (function (){var statearr_24555 = state_24534;(statearr_24555[8] = inst_24494__$1);
(statearr_24555[9] = inst_24491__$1);
(statearr_24555[10] = inst_24493__$1);
(statearr_24555[11] = inst_24492__$1);
(statearr_24555[14] = inst_24501);
return statearr_24555;
})();var statearr_24556_24585 = state_24534__$1;(statearr_24556_24585[2] = null);
(statearr_24556_24585[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 14))
{var inst_24505 = (state_24534[13]);var inst_24507 = cljs.core.chunked_seq_QMARK_(inst_24505);var state_24534__$1 = state_24534;if(inst_24507)
{var statearr_24557_24586 = state_24534__$1;(statearr_24557_24586[1] = 17);
} else
{var statearr_24558_24587 = state_24534__$1;(statearr_24558_24587[1] = 18);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 15))
{var state_24534__$1 = state_24534;var statearr_24559_24588 = state_24534__$1;(statearr_24559_24588[2] = null);
(statearr_24559_24588[1] = 16);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 16))
{var inst_24523 = (state_24534[2]);var state_24534__$1 = state_24534;var statearr_24560_24589 = state_24534__$1;(statearr_24560_24589[2] = inst_24523);
(statearr_24560_24589[1] = 12);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 17))
{var inst_24505 = (state_24534[13]);var inst_24509 = cljs.core.chunk_first(inst_24505);var inst_24510 = cljs.core.chunk_rest(inst_24505);var inst_24511 = cljs.core.count(inst_24509);var inst_24491 = inst_24510;var inst_24492 = inst_24509;var inst_24493 = inst_24511;var inst_24494 = 0;var state_24534__$1 = (function (){var statearr_24561 = state_24534;(statearr_24561[8] = inst_24494);
(statearr_24561[9] = inst_24491);
(statearr_24561[10] = inst_24493);
(statearr_24561[11] = inst_24492);
return statearr_24561;
})();var statearr_24562_24590 = state_24534__$1;(statearr_24562_24590[2] = null);
(statearr_24562_24590[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 18))
{var inst_24505 = (state_24534[13]);var inst_24514 = cljs.core.first(inst_24505);var state_24534__$1 = state_24534;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24534__$1,20,out,inst_24514);
} else
{if((state_val_24535 === 19))
{var inst_24520 = (state_24534[2]);var state_24534__$1 = state_24534;var statearr_24563_24591 = state_24534__$1;(statearr_24563_24591[2] = inst_24520);
(statearr_24563_24591[1] = 16);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24535 === 20))
{var inst_24505 = (state_24534[13]);var inst_24516 = (state_24534[2]);var inst_24517 = cljs.core.next(inst_24505);var inst_24491 = inst_24517;var inst_24492 = null;var inst_24493 = 0;var inst_24494 = 0;var state_24534__$1 = (function (){var statearr_24564 = state_24534;(statearr_24564[8] = inst_24494);
(statearr_24564[9] = inst_24491);
(statearr_24564[10] = inst_24493);
(statearr_24564[15] = inst_24516);
(statearr_24564[11] = inst_24492);
return statearr_24564;
})();var statearr_24565_24592 = state_24534__$1;(statearr_24565_24592[2] = null);
(statearr_24565_24592[1] = 8);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24569[0] = state_machine__5507__auto__);
(statearr_24569[1] = 1);
return statearr_24569;
});
var state_machine__5507__auto____1 = (function (state_24534){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24534);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24570){if((e24570 instanceof Object))
{var ex__5510__auto__ = e24570;var statearr_24571_24593 = state_24534;(statearr_24571_24593[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24534);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24594 = state_24534;
state_24534 = G__24594;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24534){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24572 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24572;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24654){var state_val_24655 = (state_24654[1]);if((state_val_24655 === 1))
{var state_24654__$1 = state_24654;var statearr_24656_24676 = state_24654__$1;(statearr_24656_24676[2] = null);
(statearr_24656_24676[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24655 === 2))
{var state_24654__$1 = state_24654;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24654__$1,4,from);
} else
{if((state_val_24655 === 3))
{var inst_24652 = (state_24654[2]);var state_24654__$1 = state_24654;return cljs.core.async.impl.ioc_helpers.return_chan(state_24654__$1,inst_24652);
} else
{if((state_val_24655 === 4))
{var inst_24637 = (state_24654[7]);var inst_24637__$1 = (state_24654[2]);var inst_24638 = (inst_24637__$1 == null);var state_24654__$1 = (function (){var statearr_24657 = state_24654;(statearr_24657[7] = inst_24637__$1);
return statearr_24657;
})();if(cljs.core.truth_(inst_24638))
{var statearr_24658_24677 = state_24654__$1;(statearr_24658_24677[1] = 5);
} else
{var statearr_24659_24678 = state_24654__$1;(statearr_24659_24678[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24655 === 5))
{var state_24654__$1 = state_24654;if(cljs.core.truth_(close_QMARK_))
{var statearr_24660_24679 = state_24654__$1;(statearr_24660_24679[1] = 8);
} else
{var statearr_24661_24680 = state_24654__$1;(statearr_24661_24680[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24655 === 6))
{var inst_24637 = (state_24654[7]);var state_24654__$1 = state_24654;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24654__$1,11,to,inst_24637);
} else
{if((state_val_24655 === 7))
{var inst_24650 = (state_24654[2]);var state_24654__$1 = state_24654;var statearr_24662_24681 = state_24654__$1;(statearr_24662_24681[2] = inst_24650);
(statearr_24662_24681[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24655 === 8))
{var inst_24641 = cljs.core.async.close_BANG_(to);var state_24654__$1 = state_24654;var statearr_24663_24682 = state_24654__$1;(statearr_24663_24682[2] = inst_24641);
(statearr_24663_24682[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24655 === 9))
{var state_24654__$1 = state_24654;var statearr_24664_24683 = state_24654__$1;(statearr_24664_24683[2] = null);
(statearr_24664_24683[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24655 === 10))
{var inst_24644 = (state_24654[2]);var state_24654__$1 = state_24654;var statearr_24665_24684 = state_24654__$1;(statearr_24665_24684[2] = inst_24644);
(statearr_24665_24684[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24655 === 11))
{var inst_24647 = (state_24654[2]);var state_24654__$1 = (function (){var statearr_24666 = state_24654;(statearr_24666[8] = inst_24647);
return statearr_24666;
})();var statearr_24667_24685 = state_24654__$1;(statearr_24667_24685[2] = null);
(statearr_24667_24685[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24671 = [null,null,null,null,null,null,null,null,null];(statearr_24671[0] = state_machine__5507__auto__);
(statearr_24671[1] = 1);
return statearr_24671;
});
var state_machine__5507__auto____1 = (function (state_24654){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24654);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24672){if((e24672 instanceof Object))
{var ex__5510__auto__ = e24672;var statearr_24673_24686 = state_24654;(statearr_24673_24686[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24654);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24687 = state_24654;
state_24654 = G__24687;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24654){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24674 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24675);
return statearr_24674;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24752){var state_val_24753 = (state_24752[1]);if((state_val_24753 === 1))
{var state_24752__$1 = state_24752;var statearr_24754_24775 = state_24752__$1;(statearr_24754_24775[2] = null);
(statearr_24754_24775[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24753 === 2))
{var state_24752__$1 = state_24752;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24752__$1,4,ch);
} else
{if((state_val_24753 === 3))
{var inst_24750 = (state_24752[2]);var state_24752__$1 = state_24752;return cljs.core.async.impl.ioc_helpers.return_chan(state_24752__$1,inst_24750);
} else
{if((state_val_24753 === 4))
{var inst_24733 = (state_24752[7]);var inst_24733__$1 = (state_24752[2]);var inst_24734 = (inst_24733__$1 == null);var state_24752__$1 = (function (){var statearr_24755 = state_24752;(statearr_24755[7] = inst_24733__$1);
return statearr_24755;
})();if(cljs.core.truth_(inst_24734))
{var statearr_24756_24776 = state_24752__$1;(statearr_24756_24776[1] = 5);
} else
{var statearr_24757_24777 = state_24752__$1;(statearr_24757_24777[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24753 === 5))
{var inst_24736 = cljs.core.async.close_BANG_(tc);var inst_24737 = cljs.core.async.close_BANG_(fc);var state_24752__$1 = (function (){var statearr_24758 = state_24752;(statearr_24758[8] = inst_24736);
return statearr_24758;
})();var statearr_24759_24778 = state_24752__$1;(statearr_24759_24778[2] = inst_24737);
(statearr_24759_24778[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24753 === 6))
{var inst_24733 = (state_24752[7]);var inst_24739 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24733) : p.call(null,inst_24733));var state_24752__$1 = state_24752;if(cljs.core.truth_(inst_24739))
{var statearr_24760_24779 = state_24752__$1;(statearr_24760_24779[1] = 9);
} else
{var statearr_24761_24780 = state_24752__$1;(statearr_24761_24780[1] = 10);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24753 === 7))
{var inst_24748 = (state_24752[2]);var state_24752__$1 = state_24752;var statearr_24762_24781 = state_24752__$1;(statearr_24762_24781[2] = inst_24748);
(statearr_24762_24781[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24753 === 8))
{var inst_24745 = (state_24752[2]);var state_24752__$1 = (function (){var statearr_24763 = state_24752;(statearr_24763[9] = inst_24745);
return statearr_24763;
})();var statearr_24764_24782 = state_24752__$1;(statearr_24764_24782[2] = null);
(statearr_24764_24782[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24753 === 9))
{var state_24752__$1 = state_24752;var statearr_24765_24783 = state_24752__$1;(statearr_24765_24783[2] = tc);
(statearr_24765_24783[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24753 === 10))
{var state_24752__$1 = state_24752;var statearr_24766_24784 = state_24752__$1;(statearr_24766_24784[2] = fc);
(statearr_24766_24784[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24753 === 11))
{var inst_24733 = (state_24752[7]);var inst_24743 = (state_24752[2]);var state_24752__$1 = state_24752;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24752__$1,8,inst_24743,inst_24733);
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
var state_machine__5507__auto____0 = (function (){var statearr_24770 = [null,null,null,null,null,null,null,null,null,null];(statearr_24770[0] = state_machine__5507__auto__);
(statearr_24770[1] = 1);
return statearr_24770;
});
var state_machine__5507__auto____1 = (function (state_24752){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24752);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24771){if((e24771 instanceof Object))
{var ex__5510__auto__ = e24771;var statearr_24772_24785 = state_24752;(statearr_24772_24785[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24752);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24786 = state_24752;
state_24752 = G__24786;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24752){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24773 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24774);
return statearr_24773;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24833){var state_val_24834 = (state_24833[1]);if((state_val_24834 === 7))
{var inst_24829 = (state_24833[2]);var state_24833__$1 = state_24833;var statearr_24835_24851 = state_24833__$1;(statearr_24835_24851[2] = inst_24829);
(statearr_24835_24851[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24834 === 6))
{var inst_24819 = (state_24833[7]);var inst_24822 = (state_24833[8]);var inst_24826 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24819,inst_24822) : f.call(null,inst_24819,inst_24822));var inst_24819__$1 = inst_24826;var state_24833__$1 = (function (){var statearr_24836 = state_24833;(statearr_24836[7] = inst_24819__$1);
return statearr_24836;
})();var statearr_24837_24852 = state_24833__$1;(statearr_24837_24852[2] = null);
(statearr_24837_24852[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24834 === 5))
{var inst_24819 = (state_24833[7]);var state_24833__$1 = state_24833;var statearr_24838_24853 = state_24833__$1;(statearr_24838_24853[2] = inst_24819);
(statearr_24838_24853[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24834 === 4))
{var inst_24822 = (state_24833[8]);var inst_24822__$1 = (state_24833[2]);var inst_24823 = (inst_24822__$1 == null);var state_24833__$1 = (function (){var statearr_24839 = state_24833;(statearr_24839[8] = inst_24822__$1);
return statearr_24839;
})();if(cljs.core.truth_(inst_24823))
{var statearr_24840_24854 = state_24833__$1;(statearr_24840_24854[1] = 5);
} else
{var statearr_24841_24855 = state_24833__$1;(statearr_24841_24855[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24834 === 3))
{var inst_24831 = (state_24833[2]);var state_24833__$1 = state_24833;return cljs.core.async.impl.ioc_helpers.return_chan(state_24833__$1,inst_24831);
} else
{if((state_val_24834 === 2))
{var state_24833__$1 = state_24833;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24833__$1,4,ch);
} else
{if((state_val_24834 === 1))
{var inst_24819 = init;var state_24833__$1 = (function (){var statearr_24842 = state_24833;(statearr_24842[7] = inst_24819);
return statearr_24842;
})();var statearr_24843_24856 = state_24833__$1;(statearr_24843_24856[2] = null);
(statearr_24843_24856[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24847 = [null,null,null,null,null,null,null,null,null];(statearr_24847[0] = state_machine__5507__auto__);
(statearr_24847[1] = 1);
return statearr_24847;
});
var state_machine__5507__auto____1 = (function (state_24833){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24833);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24848){if((e24848 instanceof Object))
{var ex__5510__auto__ = e24848;var statearr_24849_24857 = state_24833;(statearr_24849_24857[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24833);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24858 = state_24833;
state_24833 = G__24858;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24833){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24850 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24850;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24920){var state_val_24921 = (state_24920[1]);if((state_val_24921 === 1))
{var inst_24900 = cljs.core.seq(coll);var inst_24901 = inst_24900;var state_24920__$1 = (function (){var statearr_24922 = state_24920;(statearr_24922[7] = inst_24901);
return statearr_24922;
})();var statearr_24923_24941 = state_24920__$1;(statearr_24923_24941[2] = null);
(statearr_24923_24941[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24921 === 2))
{var inst_24901 = (state_24920[7]);var state_24920__$1 = state_24920;if(cljs.core.truth_(inst_24901))
{var statearr_24924_24942 = state_24920__$1;(statearr_24924_24942[1] = 4);
} else
{var statearr_24925_24943 = state_24920__$1;(statearr_24925_24943[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24921 === 3))
{var inst_24918 = (state_24920[2]);var state_24920__$1 = state_24920;return cljs.core.async.impl.ioc_helpers.return_chan(state_24920__$1,inst_24918);
} else
{if((state_val_24921 === 4))
{var inst_24901 = (state_24920[7]);var inst_24904 = cljs.core.first(inst_24901);var state_24920__$1 = state_24920;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24920__$1,7,ch,inst_24904);
} else
{if((state_val_24921 === 5))
{var state_24920__$1 = state_24920;if(cljs.core.truth_(close_QMARK_))
{var statearr_24926_24944 = state_24920__$1;(statearr_24926_24944[1] = 8);
} else
{var statearr_24927_24945 = state_24920__$1;(statearr_24927_24945[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24921 === 6))
{var inst_24916 = (state_24920[2]);var state_24920__$1 = state_24920;var statearr_24928_24946 = state_24920__$1;(statearr_24928_24946[2] = inst_24916);
(statearr_24928_24946[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24921 === 7))
{var inst_24901 = (state_24920[7]);var inst_24906 = (state_24920[2]);var inst_24907 = cljs.core.next(inst_24901);var inst_24901__$1 = inst_24907;var state_24920__$1 = (function (){var statearr_24929 = state_24920;(statearr_24929[8] = inst_24906);
(statearr_24929[7] = inst_24901__$1);
return statearr_24929;
})();var statearr_24930_24947 = state_24920__$1;(statearr_24930_24947[2] = null);
(statearr_24930_24947[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24921 === 8))
{var inst_24911 = cljs.core.async.close_BANG_(ch);var state_24920__$1 = state_24920;var statearr_24931_24948 = state_24920__$1;(statearr_24931_24948[2] = inst_24911);
(statearr_24931_24948[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24921 === 9))
{var state_24920__$1 = state_24920;var statearr_24932_24949 = state_24920__$1;(statearr_24932_24949[2] = null);
(statearr_24932_24949[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24921 === 10))
{var inst_24914 = (state_24920[2]);var state_24920__$1 = state_24920;var statearr_24933_24950 = state_24920__$1;(statearr_24933_24950[2] = inst_24914);
(statearr_24933_24950[1] = 6);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24937 = [null,null,null,null,null,null,null,null,null];(statearr_24937[0] = state_machine__5507__auto__);
(statearr_24937[1] = 1);
return statearr_24937;
});
var state_machine__5507__auto____1 = (function (state_24920){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24920);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24938){if((e24938 instanceof Object))
{var ex__5510__auto__ = e24938;var statearr_24939_24951 = state_24920;(statearr_24939_24951[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24920);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24952 = state_24920;
state_24920 = G__24952;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24920){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24940 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24940;
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
cljs.core.async.Mux = (function (){var obj24954 = {};return obj24954;
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
cljs.core.async.Mult = (function (){var obj24956 = {};return obj24956;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25180 = (function (cs,ch,mult,meta25181){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25181 = meta25181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25180.cljs$lang$type = true;
cljs.core.async.t25180.cljs$lang$ctorStr = "cljs.core.async/t25180";
cljs.core.async.t25180.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25180");
});})(cs))
;
cljs.core.async.t25180.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25180.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25180.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25180.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25180.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25182){var self__ = this;
var _25182__$1 = this;return self__.meta25181;
});})(cs))
;
cljs.core.async.t25180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25182,meta25181__$1){var self__ = this;
var _25182__$1 = this;return (new cljs.core.async.t25180(self__.cs,self__.ch,self__.mult,meta25181__$1));
});})(cs))
;
cljs.core.async.__GT_t25180 = ((function (cs){
return (function __GT_t25180(cs__$1,ch__$1,mult__$1,meta25181){return (new cljs.core.async.t25180(cs__$1,ch__$1,mult__$1,meta25181));
});})(cs))
;
}
return (new cljs.core.async.t25180(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25317){var state_val_25318 = (state_25317[1]);if((state_val_25318 === 32))
{var inst_25261 = (state_25317[7]);var inst_25185 = (state_25317[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25317,31,Object,null,30);var inst_25268 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25261,inst_25185,done);var state_25317__$1 = state_25317;var statearr_25319_25404 = state_25317__$1;(statearr_25319_25404[2] = inst_25268);
cljs.core.async.impl.ioc_helpers.process_exception(state_25317__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 1))
{var state_25317__$1 = state_25317;var statearr_25320_25405 = state_25317__$1;(statearr_25320_25405[2] = null);
(statearr_25320_25405[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 33))
{var inst_25274 = (state_25317[9]);var inst_25276 = cljs.core.chunked_seq_QMARK_(inst_25274);var state_25317__$1 = state_25317;if(inst_25276)
{var statearr_25321_25406 = state_25317__$1;(statearr_25321_25406[1] = 36);
} else
{var statearr_25322_25407 = state_25317__$1;(statearr_25322_25407[1] = 37);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 2))
{var state_25317__$1 = state_25317;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25317__$1,4,ch);
} else
{if((state_val_25318 === 34))
{var state_25317__$1 = state_25317;var statearr_25323_25408 = state_25317__$1;(statearr_25323_25408[2] = null);
(statearr_25323_25408[1] = 35);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 3))
{var inst_25315 = (state_25317[2]);var state_25317__$1 = state_25317;return cljs.core.async.impl.ioc_helpers.return_chan(state_25317__$1,inst_25315);
} else
{if((state_val_25318 === 35))
{var inst_25299 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25324_25409 = state_25317__$1;(statearr_25324_25409[2] = inst_25299);
(statearr_25324_25409[1] = 29);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 4))
{var inst_25185 = (state_25317[8]);var inst_25185__$1 = (state_25317[2]);var inst_25186 = (inst_25185__$1 == null);var state_25317__$1 = (function (){var statearr_25325 = state_25317;(statearr_25325[8] = inst_25185__$1);
return statearr_25325;
})();if(cljs.core.truth_(inst_25186))
{var statearr_25326_25410 = state_25317__$1;(statearr_25326_25410[1] = 5);
} else
{var statearr_25327_25411 = state_25317__$1;(statearr_25327_25411[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 36))
{var inst_25274 = (state_25317[9]);var inst_25278 = cljs.core.chunk_first(inst_25274);var inst_25279 = cljs.core.chunk_rest(inst_25274);var inst_25280 = cljs.core.count(inst_25278);var inst_25253 = inst_25279;var inst_25254 = inst_25278;var inst_25255 = inst_25280;var inst_25256 = 0;var state_25317__$1 = (function (){var statearr_25328 = state_25317;(statearr_25328[10] = inst_25255);
(statearr_25328[11] = inst_25256);
(statearr_25328[12] = inst_25253);
(statearr_25328[13] = inst_25254);
return statearr_25328;
})();var statearr_25329_25412 = state_25317__$1;(statearr_25329_25412[2] = null);
(statearr_25329_25412[1] = 25);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 5))
{var inst_25192 = cljs.core.deref(cs);var inst_25193 = cljs.core.seq(inst_25192);var inst_25194 = inst_25193;var inst_25195 = null;var inst_25196 = 0;var inst_25197 = 0;var state_25317__$1 = (function (){var statearr_25330 = state_25317;(statearr_25330[14] = inst_25195);
(statearr_25330[15] = inst_25194);
(statearr_25330[16] = inst_25197);
(statearr_25330[17] = inst_25196);
return statearr_25330;
})();var statearr_25331_25413 = state_25317__$1;(statearr_25331_25413[2] = null);
(statearr_25331_25413[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 37))
{var inst_25274 = (state_25317[9]);var inst_25283 = cljs.core.first(inst_25274);var state_25317__$1 = (function (){var statearr_25332 = state_25317;(statearr_25332[18] = inst_25283);
return statearr_25332;
})();var statearr_25333_25414 = state_25317__$1;(statearr_25333_25414[2] = null);
(statearr_25333_25414[1] = 41);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 6))
{var inst_25245 = (state_25317[19]);var inst_25244 = cljs.core.deref(cs);var inst_25245__$1 = cljs.core.keys(inst_25244);var inst_25246 = cljs.core.count(inst_25245__$1);var inst_25247 = cljs.core.reset_BANG_(dctr,inst_25246);var inst_25252 = cljs.core.seq(inst_25245__$1);var inst_25253 = inst_25252;var inst_25254 = null;var inst_25255 = 0;var inst_25256 = 0;var state_25317__$1 = (function (){var statearr_25334 = state_25317;(statearr_25334[10] = inst_25255);
(statearr_25334[11] = inst_25256);
(statearr_25334[12] = inst_25253);
(statearr_25334[13] = inst_25254);
(statearr_25334[20] = inst_25247);
(statearr_25334[19] = inst_25245__$1);
return statearr_25334;
})();var statearr_25335_25415 = state_25317__$1;(statearr_25335_25415[2] = null);
(statearr_25335_25415[1] = 25);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 38))
{var inst_25296 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25336_25416 = state_25317__$1;(statearr_25336_25416[2] = inst_25296);
(statearr_25336_25416[1] = 35);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 7))
{var inst_25313 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25337_25417 = state_25317__$1;(statearr_25337_25417[2] = inst_25313);
(statearr_25337_25417[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 39))
{var inst_25274 = (state_25317[9]);var inst_25292 = (state_25317[2]);var inst_25293 = cljs.core.next(inst_25274);var inst_25253 = inst_25293;var inst_25254 = null;var inst_25255 = 0;var inst_25256 = 0;var state_25317__$1 = (function (){var statearr_25338 = state_25317;(statearr_25338[10] = inst_25255);
(statearr_25338[11] = inst_25256);
(statearr_25338[12] = inst_25253);
(statearr_25338[13] = inst_25254);
(statearr_25338[21] = inst_25292);
return statearr_25338;
})();var statearr_25339_25418 = state_25317__$1;(statearr_25339_25418[2] = null);
(statearr_25339_25418[1] = 25);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 8))
{var inst_25197 = (state_25317[16]);var inst_25196 = (state_25317[17]);var inst_25199 = (inst_25197 < inst_25196);var inst_25200 = inst_25199;var state_25317__$1 = state_25317;if(cljs.core.truth_(inst_25200))
{var statearr_25340_25419 = state_25317__$1;(statearr_25340_25419[1] = 10);
} else
{var statearr_25341_25420 = state_25317__$1;(statearr_25341_25420[1] = 11);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 40))
{var inst_25283 = (state_25317[18]);var inst_25284 = (state_25317[2]);var inst_25285 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25286 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25283);var state_25317__$1 = (function (){var statearr_25342 = state_25317;(statearr_25342[22] = inst_25285);
(statearr_25342[23] = inst_25284);
return statearr_25342;
})();var statearr_25343_25421 = state_25317__$1;(statearr_25343_25421[2] = inst_25286);
cljs.core.async.impl.ioc_helpers.process_exception(state_25317__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 9))
{var inst_25242 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25344_25422 = state_25317__$1;(statearr_25344_25422[2] = inst_25242);
(statearr_25344_25422[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 41))
{var inst_25185 = (state_25317[8]);var inst_25283 = (state_25317[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25317,40,Object,null,39);var inst_25290 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25283,inst_25185,done);var state_25317__$1 = state_25317;var statearr_25345_25423 = state_25317__$1;(statearr_25345_25423[2] = inst_25290);
cljs.core.async.impl.ioc_helpers.process_exception(state_25317__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 10))
{var inst_25195 = (state_25317[14]);var inst_25197 = (state_25317[16]);var inst_25203 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25195,inst_25197);var inst_25204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25203,0,null);var inst_25205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25203,1,null);var state_25317__$1 = (function (){var statearr_25346 = state_25317;(statearr_25346[24] = inst_25204);
return statearr_25346;
})();if(cljs.core.truth_(inst_25205))
{var statearr_25347_25424 = state_25317__$1;(statearr_25347_25424[1] = 13);
} else
{var statearr_25348_25425 = state_25317__$1;(statearr_25348_25425[1] = 14);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 42))
{var state_25317__$1 = state_25317;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25317__$1,45,dchan);
} else
{if((state_val_25318 === 11))
{var inst_25214 = (state_25317[25]);var inst_25194 = (state_25317[15]);var inst_25214__$1 = cljs.core.seq(inst_25194);var state_25317__$1 = (function (){var statearr_25349 = state_25317;(statearr_25349[25] = inst_25214__$1);
return statearr_25349;
})();if(inst_25214__$1)
{var statearr_25350_25426 = state_25317__$1;(statearr_25350_25426[1] = 16);
} else
{var statearr_25351_25427 = state_25317__$1;(statearr_25351_25427[1] = 17);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 43))
{var state_25317__$1 = state_25317;var statearr_25352_25428 = state_25317__$1;(statearr_25352_25428[2] = null);
(statearr_25352_25428[1] = 44);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 12))
{var inst_25240 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25353_25429 = state_25317__$1;(statearr_25353_25429[2] = inst_25240);
(statearr_25353_25429[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 44))
{var inst_25310 = (state_25317[2]);var state_25317__$1 = (function (){var statearr_25354 = state_25317;(statearr_25354[26] = inst_25310);
return statearr_25354;
})();var statearr_25355_25430 = state_25317__$1;(statearr_25355_25430[2] = null);
(statearr_25355_25430[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 13))
{var inst_25204 = (state_25317[24]);var inst_25207 = cljs.core.async.close_BANG_(inst_25204);var state_25317__$1 = state_25317;var statearr_25356_25431 = state_25317__$1;(statearr_25356_25431[2] = inst_25207);
(statearr_25356_25431[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 45))
{var inst_25307 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25360_25432 = state_25317__$1;(statearr_25360_25432[2] = inst_25307);
(statearr_25360_25432[1] = 44);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 14))
{var state_25317__$1 = state_25317;var statearr_25361_25433 = state_25317__$1;(statearr_25361_25433[2] = null);
(statearr_25361_25433[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 15))
{var inst_25195 = (state_25317[14]);var inst_25194 = (state_25317[15]);var inst_25197 = (state_25317[16]);var inst_25196 = (state_25317[17]);var inst_25210 = (state_25317[2]);var inst_25211 = (inst_25197 + 1);var tmp25357 = inst_25195;var tmp25358 = inst_25194;var tmp25359 = inst_25196;var inst_25194__$1 = tmp25358;var inst_25195__$1 = tmp25357;var inst_25196__$1 = tmp25359;var inst_25197__$1 = inst_25211;var state_25317__$1 = (function (){var statearr_25362 = state_25317;(statearr_25362[27] = inst_25210);
(statearr_25362[14] = inst_25195__$1);
(statearr_25362[15] = inst_25194__$1);
(statearr_25362[16] = inst_25197__$1);
(statearr_25362[17] = inst_25196__$1);
return statearr_25362;
})();var statearr_25363_25434 = state_25317__$1;(statearr_25363_25434[2] = null);
(statearr_25363_25434[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 16))
{var inst_25214 = (state_25317[25]);var inst_25216 = cljs.core.chunked_seq_QMARK_(inst_25214);var state_25317__$1 = state_25317;if(inst_25216)
{var statearr_25364_25435 = state_25317__$1;(statearr_25364_25435[1] = 19);
} else
{var statearr_25365_25436 = state_25317__$1;(statearr_25365_25436[1] = 20);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 17))
{var state_25317__$1 = state_25317;var statearr_25366_25437 = state_25317__$1;(statearr_25366_25437[2] = null);
(statearr_25366_25437[1] = 18);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 18))
{var inst_25238 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25367_25438 = state_25317__$1;(statearr_25367_25438[2] = inst_25238);
(statearr_25367_25438[1] = 12);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 19))
{var inst_25214 = (state_25317[25]);var inst_25218 = cljs.core.chunk_first(inst_25214);var inst_25219 = cljs.core.chunk_rest(inst_25214);var inst_25220 = cljs.core.count(inst_25218);var inst_25194 = inst_25219;var inst_25195 = inst_25218;var inst_25196 = inst_25220;var inst_25197 = 0;var state_25317__$1 = (function (){var statearr_25368 = state_25317;(statearr_25368[14] = inst_25195);
(statearr_25368[15] = inst_25194);
(statearr_25368[16] = inst_25197);
(statearr_25368[17] = inst_25196);
return statearr_25368;
})();var statearr_25369_25439 = state_25317__$1;(statearr_25369_25439[2] = null);
(statearr_25369_25439[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 20))
{var inst_25214 = (state_25317[25]);var inst_25224 = cljs.core.first(inst_25214);var inst_25225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25224,0,null);var inst_25226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25224,1,null);var state_25317__$1 = (function (){var statearr_25370 = state_25317;(statearr_25370[28] = inst_25225);
return statearr_25370;
})();if(cljs.core.truth_(inst_25226))
{var statearr_25371_25440 = state_25317__$1;(statearr_25371_25440[1] = 22);
} else
{var statearr_25372_25441 = state_25317__$1;(statearr_25372_25441[1] = 23);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 21))
{var inst_25235 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25373_25442 = state_25317__$1;(statearr_25373_25442[2] = inst_25235);
(statearr_25373_25442[1] = 18);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 22))
{var inst_25225 = (state_25317[28]);var inst_25228 = cljs.core.async.close_BANG_(inst_25225);var state_25317__$1 = state_25317;var statearr_25374_25443 = state_25317__$1;(statearr_25374_25443[2] = inst_25228);
(statearr_25374_25443[1] = 24);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 23))
{var state_25317__$1 = state_25317;var statearr_25375_25444 = state_25317__$1;(statearr_25375_25444[2] = null);
(statearr_25375_25444[1] = 24);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 24))
{var inst_25214 = (state_25317[25]);var inst_25231 = (state_25317[2]);var inst_25232 = cljs.core.next(inst_25214);var inst_25194 = inst_25232;var inst_25195 = null;var inst_25196 = 0;var inst_25197 = 0;var state_25317__$1 = (function (){var statearr_25376 = state_25317;(statearr_25376[29] = inst_25231);
(statearr_25376[14] = inst_25195);
(statearr_25376[15] = inst_25194);
(statearr_25376[16] = inst_25197);
(statearr_25376[17] = inst_25196);
return statearr_25376;
})();var statearr_25377_25445 = state_25317__$1;(statearr_25377_25445[2] = null);
(statearr_25377_25445[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 25))
{var inst_25255 = (state_25317[10]);var inst_25256 = (state_25317[11]);var inst_25258 = (inst_25256 < inst_25255);var inst_25259 = inst_25258;var state_25317__$1 = state_25317;if(cljs.core.truth_(inst_25259))
{var statearr_25378_25446 = state_25317__$1;(statearr_25378_25446[1] = 27);
} else
{var statearr_25379_25447 = state_25317__$1;(statearr_25379_25447[1] = 28);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 26))
{var inst_25245 = (state_25317[19]);var inst_25303 = (state_25317[2]);var inst_25304 = cljs.core.seq(inst_25245);var state_25317__$1 = (function (){var statearr_25380 = state_25317;(statearr_25380[30] = inst_25303);
return statearr_25380;
})();if(inst_25304)
{var statearr_25381_25448 = state_25317__$1;(statearr_25381_25448[1] = 42);
} else
{var statearr_25382_25449 = state_25317__$1;(statearr_25382_25449[1] = 43);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 27))
{var inst_25256 = (state_25317[11]);var inst_25254 = (state_25317[13]);var inst_25261 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25254,inst_25256);var state_25317__$1 = (function (){var statearr_25383 = state_25317;(statearr_25383[7] = inst_25261);
return statearr_25383;
})();var statearr_25384_25450 = state_25317__$1;(statearr_25384_25450[2] = null);
(statearr_25384_25450[1] = 32);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 28))
{var inst_25253 = (state_25317[12]);var inst_25274 = (state_25317[9]);var inst_25274__$1 = cljs.core.seq(inst_25253);var state_25317__$1 = (function (){var statearr_25388 = state_25317;(statearr_25388[9] = inst_25274__$1);
return statearr_25388;
})();if(inst_25274__$1)
{var statearr_25389_25451 = state_25317__$1;(statearr_25389_25451[1] = 33);
} else
{var statearr_25390_25452 = state_25317__$1;(statearr_25390_25452[1] = 34);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 29))
{var inst_25301 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25391_25453 = state_25317__$1;(statearr_25391_25453[2] = inst_25301);
(statearr_25391_25453[1] = 26);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 30))
{var inst_25255 = (state_25317[10]);var inst_25256 = (state_25317[11]);var inst_25253 = (state_25317[12]);var inst_25254 = (state_25317[13]);var inst_25270 = (state_25317[2]);var inst_25271 = (inst_25256 + 1);var tmp25385 = inst_25255;var tmp25386 = inst_25253;var tmp25387 = inst_25254;var inst_25253__$1 = tmp25386;var inst_25254__$1 = tmp25387;var inst_25255__$1 = tmp25385;var inst_25256__$1 = inst_25271;var state_25317__$1 = (function (){var statearr_25392 = state_25317;(statearr_25392[10] = inst_25255__$1);
(statearr_25392[11] = inst_25256__$1);
(statearr_25392[12] = inst_25253__$1);
(statearr_25392[13] = inst_25254__$1);
(statearr_25392[31] = inst_25270);
return statearr_25392;
})();var statearr_25393_25454 = state_25317__$1;(statearr_25393_25454[2] = null);
(statearr_25393_25454[1] = 25);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25318 === 31))
{var inst_25261 = (state_25317[7]);var inst_25262 = (state_25317[2]);var inst_25263 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25264 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25261);var state_25317__$1 = (function (){var statearr_25394 = state_25317;(statearr_25394[32] = inst_25263);
(statearr_25394[33] = inst_25262);
return statearr_25394;
})();var statearr_25395_25455 = state_25317__$1;(statearr_25395_25455[2] = inst_25264);
cljs.core.async.impl.ioc_helpers.process_exception(state_25317__$1);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_25399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25399[0] = state_machine__5507__auto__);
(statearr_25399[1] = 1);
return statearr_25399;
});
var state_machine__5507__auto____1 = (function (state_25317){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25317);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25400){if((e25400 instanceof Object))
{var ex__5510__auto__ = e25400;var statearr_25401_25456 = state_25317;(statearr_25401_25456[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25317);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e25400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__25457 = state_25317;
state_25317 = G__25457;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25317){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25402 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25403);
return statearr_25402;
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
cljs.core.async.Mix = (function (){var obj25459 = {};return obj25459;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$248,null,cljs.core.constant$keyword$249,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$250);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$249);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$250,chs);var pauses = pick(cljs.core.constant$keyword$248,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$251,solos,cljs.core.constant$keyword$252,pick(cljs.core.constant$keyword$249,chs),cljs.core.constant$keyword$253,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$248)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25569 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25569 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25570){
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
this.meta25570 = meta25570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25569.cljs$lang$type = true;
cljs.core.async.t25569.cljs$lang$ctorStr = "cljs.core.async/t25569";
cljs.core.async.t25569.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25569");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25569.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25569.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25569.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25569.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25569.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25569.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25569.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25571){var self__ = this;
var _25571__$1 = this;return self__.meta25570;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25571,meta25570__$1){var self__ = this;
var _25571__$1 = this;return (new cljs.core.async.t25569(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25570__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25569 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25569(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25570){return (new cljs.core.async.t25569(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25570));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25569(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25636){var state_val_25637 = (state_25636[1]);if((state_val_25637 === 1))
{var inst_25575 = (state_25636[7]);var inst_25575__$1 = calc_state();var inst_25576 = cljs.core.seq_QMARK_(inst_25575__$1);var state_25636__$1 = (function (){var statearr_25638 = state_25636;(statearr_25638[7] = inst_25575__$1);
return statearr_25638;
})();if(inst_25576)
{var statearr_25639_25679 = state_25636__$1;(statearr_25639_25679[1] = 2);
} else
{var statearr_25640_25680 = state_25636__$1;(statearr_25640_25680[1] = 3);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 2))
{var inst_25575 = (state_25636[7]);var inst_25578 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25575);var state_25636__$1 = state_25636;var statearr_25641_25681 = state_25636__$1;(statearr_25641_25681[2] = inst_25578);
(statearr_25641_25681[1] = 4);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 3))
{var inst_25575 = (state_25636[7]);var state_25636__$1 = state_25636;var statearr_25642_25682 = state_25636__$1;(statearr_25642_25682[2] = inst_25575);
(statearr_25642_25682[1] = 4);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 4))
{var inst_25575 = (state_25636[7]);var inst_25581 = (state_25636[2]);var inst_25582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25581,cljs.core.constant$keyword$253);var inst_25583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25581,cljs.core.constant$keyword$252);var inst_25584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25581,cljs.core.constant$keyword$251);var inst_25585 = inst_25575;var state_25636__$1 = (function (){var statearr_25643 = state_25636;(statearr_25643[8] = inst_25585);
(statearr_25643[9] = inst_25583);
(statearr_25643[10] = inst_25584);
(statearr_25643[11] = inst_25582);
return statearr_25643;
})();var statearr_25644_25683 = state_25636__$1;(statearr_25644_25683[2] = null);
(statearr_25644_25683[1] = 5);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 5))
{var inst_25585 = (state_25636[8]);var inst_25588 = cljs.core.seq_QMARK_(inst_25585);var state_25636__$1 = state_25636;if(inst_25588)
{var statearr_25645_25684 = state_25636__$1;(statearr_25645_25684[1] = 7);
} else
{var statearr_25646_25685 = state_25636__$1;(statearr_25646_25685[1] = 8);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 6))
{var inst_25634 = (state_25636[2]);var state_25636__$1 = state_25636;return cljs.core.async.impl.ioc_helpers.return_chan(state_25636__$1,inst_25634);
} else
{if((state_val_25637 === 7))
{var inst_25585 = (state_25636[8]);var inst_25590 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25585);var state_25636__$1 = state_25636;var statearr_25647_25686 = state_25636__$1;(statearr_25647_25686[2] = inst_25590);
(statearr_25647_25686[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 8))
{var inst_25585 = (state_25636[8]);var state_25636__$1 = state_25636;var statearr_25648_25687 = state_25636__$1;(statearr_25648_25687[2] = inst_25585);
(statearr_25648_25687[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 9))
{var inst_25593 = (state_25636[12]);var inst_25593__$1 = (state_25636[2]);var inst_25594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25593__$1,cljs.core.constant$keyword$253);var inst_25595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25593__$1,cljs.core.constant$keyword$252);var inst_25596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25593__$1,cljs.core.constant$keyword$251);var state_25636__$1 = (function (){var statearr_25649 = state_25636;(statearr_25649[13] = inst_25596);
(statearr_25649[14] = inst_25595);
(statearr_25649[12] = inst_25593__$1);
return statearr_25649;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25636__$1,10,inst_25594);
} else
{if((state_val_25637 === 10))
{var inst_25601 = (state_25636[15]);var inst_25600 = (state_25636[16]);var inst_25599 = (state_25636[2]);var inst_25600__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25599,0,null);var inst_25601__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25599,1,null);var inst_25602 = (inst_25600__$1 == null);var inst_25603 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25601__$1,change);var inst_25604 = (inst_25602) || (inst_25603);var state_25636__$1 = (function (){var statearr_25650 = state_25636;(statearr_25650[15] = inst_25601__$1);
(statearr_25650[16] = inst_25600__$1);
return statearr_25650;
})();if(cljs.core.truth_(inst_25604))
{var statearr_25651_25688 = state_25636__$1;(statearr_25651_25688[1] = 11);
} else
{var statearr_25652_25689 = state_25636__$1;(statearr_25652_25689[1] = 12);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 11))
{var inst_25600 = (state_25636[16]);var inst_25606 = (inst_25600 == null);var state_25636__$1 = state_25636;if(cljs.core.truth_(inst_25606))
{var statearr_25653_25690 = state_25636__$1;(statearr_25653_25690[1] = 14);
} else
{var statearr_25654_25691 = state_25636__$1;(statearr_25654_25691[1] = 15);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 12))
{var inst_25615 = (state_25636[17]);var inst_25596 = (state_25636[13]);var inst_25601 = (state_25636[15]);var inst_25615__$1 = (inst_25596.cljs$core$IFn$_invoke$arity$1 ? inst_25596.cljs$core$IFn$_invoke$arity$1(inst_25601) : inst_25596.call(null,inst_25601));var state_25636__$1 = (function (){var statearr_25655 = state_25636;(statearr_25655[17] = inst_25615__$1);
return statearr_25655;
})();if(cljs.core.truth_(inst_25615__$1))
{var statearr_25656_25692 = state_25636__$1;(statearr_25656_25692[1] = 17);
} else
{var statearr_25657_25693 = state_25636__$1;(statearr_25657_25693[1] = 18);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 13))
{var inst_25632 = (state_25636[2]);var state_25636__$1 = state_25636;var statearr_25658_25694 = state_25636__$1;(statearr_25658_25694[2] = inst_25632);
(statearr_25658_25694[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 14))
{var inst_25601 = (state_25636[15]);var inst_25608 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25601);var state_25636__$1 = state_25636;var statearr_25659_25695 = state_25636__$1;(statearr_25659_25695[2] = inst_25608);
(statearr_25659_25695[1] = 16);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 15))
{var state_25636__$1 = state_25636;var statearr_25660_25696 = state_25636__$1;(statearr_25660_25696[2] = null);
(statearr_25660_25696[1] = 16);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 16))
{var inst_25611 = (state_25636[2]);var inst_25612 = calc_state();var inst_25585 = inst_25612;var state_25636__$1 = (function (){var statearr_25661 = state_25636;(statearr_25661[8] = inst_25585);
(statearr_25661[18] = inst_25611);
return statearr_25661;
})();var statearr_25662_25697 = state_25636__$1;(statearr_25662_25697[2] = null);
(statearr_25662_25697[1] = 5);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 17))
{var inst_25615 = (state_25636[17]);var state_25636__$1 = state_25636;var statearr_25663_25698 = state_25636__$1;(statearr_25663_25698[2] = inst_25615);
(statearr_25663_25698[1] = 19);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 18))
{var inst_25596 = (state_25636[13]);var inst_25595 = (state_25636[14]);var inst_25601 = (state_25636[15]);var inst_25618 = cljs.core.empty_QMARK_(inst_25596);var inst_25619 = (inst_25595.cljs$core$IFn$_invoke$arity$1 ? inst_25595.cljs$core$IFn$_invoke$arity$1(inst_25601) : inst_25595.call(null,inst_25601));var inst_25620 = cljs.core.not(inst_25619);var inst_25621 = (inst_25618) && (inst_25620);var state_25636__$1 = state_25636;var statearr_25664_25699 = state_25636__$1;(statearr_25664_25699[2] = inst_25621);
(statearr_25664_25699[1] = 19);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 19))
{var inst_25623 = (state_25636[2]);var state_25636__$1 = state_25636;if(cljs.core.truth_(inst_25623))
{var statearr_25665_25700 = state_25636__$1;(statearr_25665_25700[1] = 20);
} else
{var statearr_25666_25701 = state_25636__$1;(statearr_25666_25701[1] = 21);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 20))
{var inst_25600 = (state_25636[16]);var state_25636__$1 = state_25636;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25636__$1,23,out,inst_25600);
} else
{if((state_val_25637 === 21))
{var state_25636__$1 = state_25636;var statearr_25667_25702 = state_25636__$1;(statearr_25667_25702[2] = null);
(statearr_25667_25702[1] = 22);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 22))
{var inst_25593 = (state_25636[12]);var inst_25629 = (state_25636[2]);var inst_25585 = inst_25593;var state_25636__$1 = (function (){var statearr_25668 = state_25636;(statearr_25668[19] = inst_25629);
(statearr_25668[8] = inst_25585);
return statearr_25668;
})();var statearr_25669_25703 = state_25636__$1;(statearr_25669_25703[2] = null);
(statearr_25669_25703[1] = 5);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25637 === 23))
{var inst_25626 = (state_25636[2]);var state_25636__$1 = state_25636;var statearr_25670_25704 = state_25636__$1;(statearr_25670_25704[2] = inst_25626);
(statearr_25670_25704[1] = 22);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_25674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25674[0] = state_machine__5507__auto__);
(statearr_25674[1] = 1);
return statearr_25674;
});
var state_machine__5507__auto____1 = (function (state_25636){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25636);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25675){if((e25675 instanceof Object))
{var ex__5510__auto__ = e25675;var statearr_25676_25705 = state_25636;(statearr_25676_25705[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25636);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e25675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__25706 = state_25636;
state_25636 = G__25706;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25636){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25677 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25678);
return statearr_25677;
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
cljs.core.async.Pub = (function (){var obj25708 = {};return obj25708;
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
return (function (p1__25709_SHARP_){if(cljs.core.truth_((p1__25709_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25709_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25709_SHARP_.call(null,topic))))
{return p1__25709_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25709_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25834 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25835){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25835 = meta25835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25834.cljs$lang$type = true;
cljs.core.async.t25834.cljs$lang$ctorStr = "cljs.core.async/t25834";
cljs.core.async.t25834.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25834");
});})(mults,ensure_mult))
;
cljs.core.async.t25834.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25834.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25834.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25834.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25834.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25834.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25834.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25836){var self__ = this;
var _25836__$1 = this;return self__.meta25835;
});})(mults,ensure_mult))
;
cljs.core.async.t25834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25836,meta25835__$1){var self__ = this;
var _25836__$1 = this;return (new cljs.core.async.t25834(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25835__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25834 = ((function (mults,ensure_mult){
return (function __GT_t25834(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25835){return (new cljs.core.async.t25834(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25835));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25834(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25910){var state_val_25911 = (state_25910[1]);if((state_val_25911 === 1))
{var state_25910__$1 = state_25910;var statearr_25912_25959 = state_25910__$1;(statearr_25912_25959[2] = null);
(statearr_25912_25959[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 2))
{var state_25910__$1 = state_25910;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25910__$1,4,ch);
} else
{if((state_val_25911 === 3))
{var inst_25908 = (state_25910[2]);var state_25910__$1 = state_25910;return cljs.core.async.impl.ioc_helpers.return_chan(state_25910__$1,inst_25908);
} else
{if((state_val_25911 === 4))
{var inst_25839 = (state_25910[7]);var inst_25839__$1 = (state_25910[2]);var inst_25840 = (inst_25839__$1 == null);var state_25910__$1 = (function (){var statearr_25913 = state_25910;(statearr_25913[7] = inst_25839__$1);
return statearr_25913;
})();if(cljs.core.truth_(inst_25840))
{var statearr_25914_25960 = state_25910__$1;(statearr_25914_25960[1] = 5);
} else
{var statearr_25915_25961 = state_25910__$1;(statearr_25915_25961[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 5))
{var inst_25846 = cljs.core.deref(mults);var inst_25847 = cljs.core.vals(inst_25846);var inst_25848 = cljs.core.seq(inst_25847);var inst_25849 = inst_25848;var inst_25850 = null;var inst_25851 = 0;var inst_25852 = 0;var state_25910__$1 = (function (){var statearr_25916 = state_25910;(statearr_25916[8] = inst_25850);
(statearr_25916[9] = inst_25852);
(statearr_25916[10] = inst_25851);
(statearr_25916[11] = inst_25849);
return statearr_25916;
})();var statearr_25917_25962 = state_25910__$1;(statearr_25917_25962[2] = null);
(statearr_25917_25962[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 6))
{var inst_25839 = (state_25910[7]);var inst_25889 = (state_25910[12]);var inst_25887 = (state_25910[13]);var inst_25887__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25839) : topic_fn.call(null,inst_25839));var inst_25888 = cljs.core.deref(mults);var inst_25889__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25888,inst_25887__$1);var state_25910__$1 = (function (){var statearr_25918 = state_25910;(statearr_25918[12] = inst_25889__$1);
(statearr_25918[13] = inst_25887__$1);
return statearr_25918;
})();if(cljs.core.truth_(inst_25889__$1))
{var statearr_25919_25963 = state_25910__$1;(statearr_25919_25963[1] = 19);
} else
{var statearr_25920_25964 = state_25910__$1;(statearr_25920_25964[1] = 20);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 7))
{var inst_25906 = (state_25910[2]);var state_25910__$1 = state_25910;var statearr_25921_25965 = state_25910__$1;(statearr_25921_25965[2] = inst_25906);
(statearr_25921_25965[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 8))
{var inst_25852 = (state_25910[9]);var inst_25851 = (state_25910[10]);var inst_25854 = (inst_25852 < inst_25851);var inst_25855 = inst_25854;var state_25910__$1 = state_25910;if(cljs.core.truth_(inst_25855))
{var statearr_25925_25966 = state_25910__$1;(statearr_25925_25966[1] = 10);
} else
{var statearr_25926_25967 = state_25910__$1;(statearr_25926_25967[1] = 11);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 9))
{var inst_25885 = (state_25910[2]);var state_25910__$1 = state_25910;var statearr_25927_25968 = state_25910__$1;(statearr_25927_25968[2] = inst_25885);
(statearr_25927_25968[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 10))
{var inst_25850 = (state_25910[8]);var inst_25852 = (state_25910[9]);var inst_25851 = (state_25910[10]);var inst_25849 = (state_25910[11]);var inst_25857 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25850,inst_25852);var inst_25858 = cljs.core.async.muxch_STAR_(inst_25857);var inst_25859 = cljs.core.async.close_BANG_(inst_25858);var inst_25860 = (inst_25852 + 1);var tmp25922 = inst_25850;var tmp25923 = inst_25851;var tmp25924 = inst_25849;var inst_25849__$1 = tmp25924;var inst_25850__$1 = tmp25922;var inst_25851__$1 = tmp25923;var inst_25852__$1 = inst_25860;var state_25910__$1 = (function (){var statearr_25928 = state_25910;(statearr_25928[8] = inst_25850__$1);
(statearr_25928[9] = inst_25852__$1);
(statearr_25928[10] = inst_25851__$1);
(statearr_25928[11] = inst_25849__$1);
(statearr_25928[14] = inst_25859);
return statearr_25928;
})();var statearr_25929_25969 = state_25910__$1;(statearr_25929_25969[2] = null);
(statearr_25929_25969[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 11))
{var inst_25863 = (state_25910[15]);var inst_25849 = (state_25910[11]);var inst_25863__$1 = cljs.core.seq(inst_25849);var state_25910__$1 = (function (){var statearr_25930 = state_25910;(statearr_25930[15] = inst_25863__$1);
return statearr_25930;
})();if(inst_25863__$1)
{var statearr_25931_25970 = state_25910__$1;(statearr_25931_25970[1] = 13);
} else
{var statearr_25932_25971 = state_25910__$1;(statearr_25932_25971[1] = 14);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 12))
{var inst_25883 = (state_25910[2]);var state_25910__$1 = state_25910;var statearr_25933_25972 = state_25910__$1;(statearr_25933_25972[2] = inst_25883);
(statearr_25933_25972[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 13))
{var inst_25863 = (state_25910[15]);var inst_25865 = cljs.core.chunked_seq_QMARK_(inst_25863);var state_25910__$1 = state_25910;if(inst_25865)
{var statearr_25934_25973 = state_25910__$1;(statearr_25934_25973[1] = 16);
} else
{var statearr_25935_25974 = state_25910__$1;(statearr_25935_25974[1] = 17);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 14))
{var state_25910__$1 = state_25910;var statearr_25936_25975 = state_25910__$1;(statearr_25936_25975[2] = null);
(statearr_25936_25975[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 15))
{var inst_25881 = (state_25910[2]);var state_25910__$1 = state_25910;var statearr_25937_25976 = state_25910__$1;(statearr_25937_25976[2] = inst_25881);
(statearr_25937_25976[1] = 12);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 16))
{var inst_25863 = (state_25910[15]);var inst_25867 = cljs.core.chunk_first(inst_25863);var inst_25868 = cljs.core.chunk_rest(inst_25863);var inst_25869 = cljs.core.count(inst_25867);var inst_25849 = inst_25868;var inst_25850 = inst_25867;var inst_25851 = inst_25869;var inst_25852 = 0;var state_25910__$1 = (function (){var statearr_25938 = state_25910;(statearr_25938[8] = inst_25850);
(statearr_25938[9] = inst_25852);
(statearr_25938[10] = inst_25851);
(statearr_25938[11] = inst_25849);
return statearr_25938;
})();var statearr_25939_25977 = state_25910__$1;(statearr_25939_25977[2] = null);
(statearr_25939_25977[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 17))
{var inst_25863 = (state_25910[15]);var inst_25872 = cljs.core.first(inst_25863);var inst_25873 = cljs.core.async.muxch_STAR_(inst_25872);var inst_25874 = cljs.core.async.close_BANG_(inst_25873);var inst_25875 = cljs.core.next(inst_25863);var inst_25849 = inst_25875;var inst_25850 = null;var inst_25851 = 0;var inst_25852 = 0;var state_25910__$1 = (function (){var statearr_25940 = state_25910;(statearr_25940[8] = inst_25850);
(statearr_25940[9] = inst_25852);
(statearr_25940[10] = inst_25851);
(statearr_25940[11] = inst_25849);
(statearr_25940[16] = inst_25874);
return statearr_25940;
})();var statearr_25941_25978 = state_25910__$1;(statearr_25941_25978[2] = null);
(statearr_25941_25978[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 18))
{var inst_25878 = (state_25910[2]);var state_25910__$1 = state_25910;var statearr_25942_25979 = state_25910__$1;(statearr_25942_25979[2] = inst_25878);
(statearr_25942_25979[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 19))
{var state_25910__$1 = state_25910;var statearr_25943_25980 = state_25910__$1;(statearr_25943_25980[2] = null);
(statearr_25943_25980[1] = 24);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 20))
{var state_25910__$1 = state_25910;var statearr_25944_25981 = state_25910__$1;(statearr_25944_25981[2] = null);
(statearr_25944_25981[1] = 21);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 21))
{var inst_25903 = (state_25910[2]);var state_25910__$1 = (function (){var statearr_25945 = state_25910;(statearr_25945[17] = inst_25903);
return statearr_25945;
})();var statearr_25946_25982 = state_25910__$1;(statearr_25946_25982[2] = null);
(statearr_25946_25982[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 22))
{var inst_25900 = (state_25910[2]);var state_25910__$1 = state_25910;var statearr_25947_25983 = state_25910__$1;(statearr_25947_25983[2] = inst_25900);
(statearr_25947_25983[1] = 21);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 23))
{var inst_25887 = (state_25910[13]);var inst_25891 = (state_25910[2]);var inst_25892 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25887);var state_25910__$1 = (function (){var statearr_25948 = state_25910;(statearr_25948[18] = inst_25891);
return statearr_25948;
})();var statearr_25949_25984 = state_25910__$1;(statearr_25949_25984[2] = inst_25892);
cljs.core.async.impl.ioc_helpers.process_exception(state_25910__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25911 === 24))
{var inst_25839 = (state_25910[7]);var inst_25889 = (state_25910[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25910,23,Object,null,22);var inst_25896 = cljs.core.async.muxch_STAR_(inst_25889);var state_25910__$1 = state_25910;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25910__$1,25,inst_25896,inst_25839);
} else
{if((state_val_25911 === 25))
{var inst_25898 = (state_25910[2]);var state_25910__$1 = state_25910;var statearr_25950_25985 = state_25910__$1;(statearr_25950_25985[2] = inst_25898);
cljs.core.async.impl.ioc_helpers.process_exception(state_25910__$1);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_25954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25954[0] = state_machine__5507__auto__);
(statearr_25954[1] = 1);
return statearr_25954;
});
var state_machine__5507__auto____1 = (function (state_25910){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25910);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25955){if((e25955 instanceof Object))
{var ex__5510__auto__ = e25955;var statearr_25956_25986 = state_25910;(statearr_25956_25986[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25910);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e25955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__25987 = state_25910;
state_25910 = G__25987;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25910){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25957 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25958);
return statearr_25957;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___26124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26094){var state_val_26095 = (state_26094[1]);if((state_val_26095 === 1))
{var state_26094__$1 = state_26094;var statearr_26096_26125 = state_26094__$1;(statearr_26096_26125[2] = null);
(statearr_26096_26125[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 2))
{var inst_26057 = cljs.core.reset_BANG_(dctr,cnt);var inst_26058 = 0;var state_26094__$1 = (function (){var statearr_26097 = state_26094;(statearr_26097[7] = inst_26058);
(statearr_26097[8] = inst_26057);
return statearr_26097;
})();var statearr_26098_26126 = state_26094__$1;(statearr_26098_26126[2] = null);
(statearr_26098_26126[1] = 4);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 3))
{var inst_26092 = (state_26094[2]);var state_26094__$1 = state_26094;return cljs.core.async.impl.ioc_helpers.return_chan(state_26094__$1,inst_26092);
} else
{if((state_val_26095 === 4))
{var inst_26058 = (state_26094[7]);var inst_26060 = (inst_26058 < cnt);var state_26094__$1 = state_26094;if(cljs.core.truth_(inst_26060))
{var statearr_26099_26127 = state_26094__$1;(statearr_26099_26127[1] = 6);
} else
{var statearr_26100_26128 = state_26094__$1;(statearr_26100_26128[1] = 7);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 5))
{var inst_26078 = (state_26094[2]);var state_26094__$1 = (function (){var statearr_26101 = state_26094;(statearr_26101[9] = inst_26078);
return statearr_26101;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26094__$1,12,dchan);
} else
{if((state_val_26095 === 6))
{var state_26094__$1 = state_26094;var statearr_26102_26129 = state_26094__$1;(statearr_26102_26129[2] = null);
(statearr_26102_26129[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 7))
{var state_26094__$1 = state_26094;var statearr_26103_26130 = state_26094__$1;(statearr_26103_26130[2] = null);
(statearr_26103_26130[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 8))
{var inst_26076 = (state_26094[2]);var state_26094__$1 = state_26094;var statearr_26104_26131 = state_26094__$1;(statearr_26104_26131[2] = inst_26076);
(statearr_26104_26131[1] = 5);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 9))
{var inst_26058 = (state_26094[7]);var inst_26071 = (state_26094[2]);var inst_26072 = (inst_26058 + 1);var inst_26058__$1 = inst_26072;var state_26094__$1 = (function (){var statearr_26105 = state_26094;(statearr_26105[10] = inst_26071);
(statearr_26105[7] = inst_26058__$1);
return statearr_26105;
})();var statearr_26106_26132 = state_26094__$1;(statearr_26106_26132[2] = null);
(statearr_26106_26132[1] = 4);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 10))
{var inst_26062 = (state_26094[2]);var inst_26063 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26094__$1 = (function (){var statearr_26107 = state_26094;(statearr_26107[11] = inst_26062);
return statearr_26107;
})();var statearr_26108_26133 = state_26094__$1;(statearr_26108_26133[2] = inst_26063);
cljs.core.async.impl.ioc_helpers.process_exception(state_26094__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 11))
{var inst_26058 = (state_26094[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26094,10,Object,null,9);var inst_26067 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26058) : chs__$1.call(null,inst_26058));var inst_26068 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26058) : done.call(null,inst_26058));var inst_26069 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26067,inst_26068);var state_26094__$1 = state_26094;var statearr_26109_26134 = state_26094__$1;(statearr_26109_26134[2] = inst_26069);
cljs.core.async.impl.ioc_helpers.process_exception(state_26094__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 12))
{var inst_26080 = (state_26094[12]);var inst_26080__$1 = (state_26094[2]);var inst_26081 = cljs.core.some(cljs.core.nil_QMARK_,inst_26080__$1);var state_26094__$1 = (function (){var statearr_26110 = state_26094;(statearr_26110[12] = inst_26080__$1);
return statearr_26110;
})();if(cljs.core.truth_(inst_26081))
{var statearr_26111_26135 = state_26094__$1;(statearr_26111_26135[1] = 13);
} else
{var statearr_26112_26136 = state_26094__$1;(statearr_26112_26136[1] = 14);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 13))
{var inst_26083 = cljs.core.async.close_BANG_(out);var state_26094__$1 = state_26094;var statearr_26113_26137 = state_26094__$1;(statearr_26113_26137[2] = inst_26083);
(statearr_26113_26137[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 14))
{var inst_26080 = (state_26094[12]);var inst_26085 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26080);var state_26094__$1 = state_26094;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26094__$1,16,out,inst_26085);
} else
{if((state_val_26095 === 15))
{var inst_26090 = (state_26094[2]);var state_26094__$1 = state_26094;var statearr_26114_26138 = state_26094__$1;(statearr_26114_26138[2] = inst_26090);
(statearr_26114_26138[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26095 === 16))
{var inst_26087 = (state_26094[2]);var state_26094__$1 = (function (){var statearr_26115 = state_26094;(statearr_26115[13] = inst_26087);
return statearr_26115;
})();var statearr_26116_26139 = state_26094__$1;(statearr_26116_26139[2] = null);
(statearr_26116_26139[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26120[0] = state_machine__5507__auto__);
(statearr_26120[1] = 1);
return statearr_26120;
});
var state_machine__5507__auto____1 = (function (state_26094){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26094);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26121){if((e26121 instanceof Object))
{var ex__5510__auto__ = e26121;var statearr_26122_26140 = state_26094;(statearr_26122_26140[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26094);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26141 = state_26094;
state_26094 = G__26141;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26094){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26123 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26124);
return statearr_26123;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26225){var state_val_26226 = (state_26225[1]);if((state_val_26226 === 1))
{var inst_26196 = cljs.core.vec(chs);var inst_26197 = inst_26196;var state_26225__$1 = (function (){var statearr_26227 = state_26225;(statearr_26227[7] = inst_26197);
return statearr_26227;
})();var statearr_26228_26250 = state_26225__$1;(statearr_26228_26250[2] = null);
(statearr_26228_26250[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26226 === 2))
{var inst_26197 = (state_26225[7]);var inst_26199 = cljs.core.count(inst_26197);var inst_26200 = (inst_26199 > 0);var state_26225__$1 = state_26225;if(cljs.core.truth_(inst_26200))
{var statearr_26229_26251 = state_26225__$1;(statearr_26229_26251[1] = 4);
} else
{var statearr_26230_26252 = state_26225__$1;(statearr_26230_26252[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26226 === 3))
{var inst_26223 = (state_26225[2]);var state_26225__$1 = state_26225;return cljs.core.async.impl.ioc_helpers.return_chan(state_26225__$1,inst_26223);
} else
{if((state_val_26226 === 4))
{var inst_26197 = (state_26225[7]);var state_26225__$1 = state_26225;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26225__$1,7,inst_26197);
} else
{if((state_val_26226 === 5))
{var inst_26219 = cljs.core.async.close_BANG_(out);var state_26225__$1 = state_26225;var statearr_26231_26253 = state_26225__$1;(statearr_26231_26253[2] = inst_26219);
(statearr_26231_26253[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26226 === 6))
{var inst_26221 = (state_26225[2]);var state_26225__$1 = state_26225;var statearr_26232_26254 = state_26225__$1;(statearr_26232_26254[2] = inst_26221);
(statearr_26232_26254[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26226 === 7))
{var inst_26205 = (state_26225[8]);var inst_26204 = (state_26225[9]);var inst_26204__$1 = (state_26225[2]);var inst_26205__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26204__$1,0,null);var inst_26206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26204__$1,1,null);var inst_26207 = (inst_26205__$1 == null);var state_26225__$1 = (function (){var statearr_26233 = state_26225;(statearr_26233[10] = inst_26206);
(statearr_26233[8] = inst_26205__$1);
(statearr_26233[9] = inst_26204__$1);
return statearr_26233;
})();if(cljs.core.truth_(inst_26207))
{var statearr_26234_26255 = state_26225__$1;(statearr_26234_26255[1] = 8);
} else
{var statearr_26235_26256 = state_26225__$1;(statearr_26235_26256[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26226 === 8))
{var inst_26197 = (state_26225[7]);var inst_26206 = (state_26225[10]);var inst_26205 = (state_26225[8]);var inst_26204 = (state_26225[9]);var inst_26209 = (function (){var c = inst_26206;var v = inst_26205;var vec__26202 = inst_26204;var cs = inst_26197;return ((function (c,v,vec__26202,cs,inst_26197,inst_26206,inst_26205,inst_26204,state_val_26226){
return (function (p1__26142_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26142_SHARP_);
});
;})(c,v,vec__26202,cs,inst_26197,inst_26206,inst_26205,inst_26204,state_val_26226))
})();var inst_26210 = cljs.core.filterv(inst_26209,inst_26197);var inst_26197__$1 = inst_26210;var state_26225__$1 = (function (){var statearr_26236 = state_26225;(statearr_26236[7] = inst_26197__$1);
return statearr_26236;
})();var statearr_26237_26257 = state_26225__$1;(statearr_26237_26257[2] = null);
(statearr_26237_26257[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26226 === 9))
{var inst_26205 = (state_26225[8]);var state_26225__$1 = state_26225;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26225__$1,11,out,inst_26205);
} else
{if((state_val_26226 === 10))
{var inst_26217 = (state_26225[2]);var state_26225__$1 = state_26225;var statearr_26239_26258 = state_26225__$1;(statearr_26239_26258[2] = inst_26217);
(statearr_26239_26258[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26226 === 11))
{var inst_26197 = (state_26225[7]);var inst_26214 = (state_26225[2]);var tmp26238 = inst_26197;var inst_26197__$1 = tmp26238;var state_26225__$1 = (function (){var statearr_26240 = state_26225;(statearr_26240[7] = inst_26197__$1);
(statearr_26240[11] = inst_26214);
return statearr_26240;
})();var statearr_26241_26259 = state_26225__$1;(statearr_26241_26259[2] = null);
(statearr_26241_26259[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26245 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26245[0] = state_machine__5507__auto__);
(statearr_26245[1] = 1);
return statearr_26245;
});
var state_machine__5507__auto____1 = (function (state_26225){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26225);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26246){if((e26246 instanceof Object))
{var ex__5510__auto__ = e26246;var statearr_26247_26260 = state_26225;(statearr_26247_26260[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26225);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26261 = state_26225;
state_26225 = G__26261;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26225){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26248 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26249);
return statearr_26248;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26331){var state_val_26332 = (state_26331[1]);if((state_val_26332 === 1))
{var inst_26308 = 0;var state_26331__$1 = (function (){var statearr_26333 = state_26331;(statearr_26333[7] = inst_26308);
return statearr_26333;
})();var statearr_26334_26355 = state_26331__$1;(statearr_26334_26355[2] = null);
(statearr_26334_26355[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26332 === 2))
{var inst_26308 = (state_26331[7]);var inst_26310 = (inst_26308 < n);var state_26331__$1 = state_26331;if(cljs.core.truth_(inst_26310))
{var statearr_26335_26356 = state_26331__$1;(statearr_26335_26356[1] = 4);
} else
{var statearr_26336_26357 = state_26331__$1;(statearr_26336_26357[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26332 === 3))
{var inst_26328 = (state_26331[2]);var inst_26329 = cljs.core.async.close_BANG_(out);var state_26331__$1 = (function (){var statearr_26337 = state_26331;(statearr_26337[8] = inst_26328);
return statearr_26337;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26331__$1,inst_26329);
} else
{if((state_val_26332 === 4))
{var state_26331__$1 = state_26331;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26331__$1,7,ch);
} else
{if((state_val_26332 === 5))
{var state_26331__$1 = state_26331;var statearr_26338_26358 = state_26331__$1;(statearr_26338_26358[2] = null);
(statearr_26338_26358[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26332 === 6))
{var inst_26326 = (state_26331[2]);var state_26331__$1 = state_26331;var statearr_26339_26359 = state_26331__$1;(statearr_26339_26359[2] = inst_26326);
(statearr_26339_26359[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26332 === 7))
{var inst_26313 = (state_26331[9]);var inst_26313__$1 = (state_26331[2]);var inst_26314 = (inst_26313__$1 == null);var inst_26315 = cljs.core.not(inst_26314);var state_26331__$1 = (function (){var statearr_26340 = state_26331;(statearr_26340[9] = inst_26313__$1);
return statearr_26340;
})();if(inst_26315)
{var statearr_26341_26360 = state_26331__$1;(statearr_26341_26360[1] = 8);
} else
{var statearr_26342_26361 = state_26331__$1;(statearr_26342_26361[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26332 === 8))
{var inst_26313 = (state_26331[9]);var state_26331__$1 = state_26331;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26331__$1,11,out,inst_26313);
} else
{if((state_val_26332 === 9))
{var state_26331__$1 = state_26331;var statearr_26343_26362 = state_26331__$1;(statearr_26343_26362[2] = null);
(statearr_26343_26362[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26332 === 10))
{var inst_26323 = (state_26331[2]);var state_26331__$1 = state_26331;var statearr_26344_26363 = state_26331__$1;(statearr_26344_26363[2] = inst_26323);
(statearr_26344_26363[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26332 === 11))
{var inst_26308 = (state_26331[7]);var inst_26318 = (state_26331[2]);var inst_26319 = (inst_26308 + 1);var inst_26308__$1 = inst_26319;var state_26331__$1 = (function (){var statearr_26345 = state_26331;(statearr_26345[7] = inst_26308__$1);
(statearr_26345[10] = inst_26318);
return statearr_26345;
})();var statearr_26346_26364 = state_26331__$1;(statearr_26346_26364[2] = null);
(statearr_26346_26364[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26350 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26350[0] = state_machine__5507__auto__);
(statearr_26350[1] = 1);
return statearr_26350;
});
var state_machine__5507__auto____1 = (function (state_26331){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26331);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26351){if((e26351 instanceof Object))
{var ex__5510__auto__ = e26351;var statearr_26352_26365 = state_26331;(statearr_26352_26365[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26331);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26366 = state_26331;
state_26331 = G__26366;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26331){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26353 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26354);
return statearr_26353;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26438){var state_val_26439 = (state_26438[1]);if((state_val_26439 === 1))
{var inst_26415 = null;var state_26438__$1 = (function (){var statearr_26440 = state_26438;(statearr_26440[7] = inst_26415);
return statearr_26440;
})();var statearr_26441_26464 = state_26438__$1;(statearr_26441_26464[2] = null);
(statearr_26441_26464[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26439 === 2))
{var state_26438__$1 = state_26438;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26438__$1,4,ch);
} else
{if((state_val_26439 === 3))
{var inst_26435 = (state_26438[2]);var inst_26436 = cljs.core.async.close_BANG_(out);var state_26438__$1 = (function (){var statearr_26442 = state_26438;(statearr_26442[8] = inst_26435);
return statearr_26442;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26438__$1,inst_26436);
} else
{if((state_val_26439 === 4))
{var inst_26418 = (state_26438[9]);var inst_26418__$1 = (state_26438[2]);var inst_26419 = (inst_26418__$1 == null);var inst_26420 = cljs.core.not(inst_26419);var state_26438__$1 = (function (){var statearr_26443 = state_26438;(statearr_26443[9] = inst_26418__$1);
return statearr_26443;
})();if(inst_26420)
{var statearr_26444_26465 = state_26438__$1;(statearr_26444_26465[1] = 5);
} else
{var statearr_26445_26466 = state_26438__$1;(statearr_26445_26466[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26439 === 5))
{var inst_26418 = (state_26438[9]);var inst_26415 = (state_26438[7]);var inst_26422 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26418,inst_26415);var state_26438__$1 = state_26438;if(inst_26422)
{var statearr_26446_26467 = state_26438__$1;(statearr_26446_26467[1] = 8);
} else
{var statearr_26447_26468 = state_26438__$1;(statearr_26447_26468[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26439 === 6))
{var state_26438__$1 = state_26438;var statearr_26449_26469 = state_26438__$1;(statearr_26449_26469[2] = null);
(statearr_26449_26469[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26439 === 7))
{var inst_26433 = (state_26438[2]);var state_26438__$1 = state_26438;var statearr_26450_26470 = state_26438__$1;(statearr_26450_26470[2] = inst_26433);
(statearr_26450_26470[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26439 === 8))
{var inst_26415 = (state_26438[7]);var tmp26448 = inst_26415;var inst_26415__$1 = tmp26448;var state_26438__$1 = (function (){var statearr_26451 = state_26438;(statearr_26451[7] = inst_26415__$1);
return statearr_26451;
})();var statearr_26452_26471 = state_26438__$1;(statearr_26452_26471[2] = null);
(statearr_26452_26471[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26439 === 9))
{var inst_26418 = (state_26438[9]);var state_26438__$1 = state_26438;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26438__$1,11,out,inst_26418);
} else
{if((state_val_26439 === 10))
{var inst_26430 = (state_26438[2]);var state_26438__$1 = state_26438;var statearr_26453_26472 = state_26438__$1;(statearr_26453_26472[2] = inst_26430);
(statearr_26453_26472[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26439 === 11))
{var inst_26418 = (state_26438[9]);var inst_26427 = (state_26438[2]);var inst_26415 = inst_26418;var state_26438__$1 = (function (){var statearr_26454 = state_26438;(statearr_26454[10] = inst_26427);
(statearr_26454[7] = inst_26415);
return statearr_26454;
})();var statearr_26455_26473 = state_26438__$1;(statearr_26455_26473[2] = null);
(statearr_26455_26473[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26459 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26459[0] = state_machine__5507__auto__);
(statearr_26459[1] = 1);
return statearr_26459;
});
var state_machine__5507__auto____1 = (function (state_26438){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26438);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object))
{var ex__5510__auto__ = e26460;var statearr_26461_26474 = state_26438;(statearr_26461_26474[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26438);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26475 = state_26438;
state_26438 = G__26475;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26438){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26462 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26463);
return statearr_26462;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26580){var state_val_26581 = (state_26580[1]);if((state_val_26581 === 1))
{var inst_26543 = (new Array(n));var inst_26544 = inst_26543;var inst_26545 = 0;var state_26580__$1 = (function (){var statearr_26582 = state_26580;(statearr_26582[7] = inst_26545);
(statearr_26582[8] = inst_26544);
return statearr_26582;
})();var statearr_26583_26611 = state_26580__$1;(statearr_26583_26611[2] = null);
(statearr_26583_26611[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 2))
{var state_26580__$1 = state_26580;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26580__$1,4,ch);
} else
{if((state_val_26581 === 3))
{var inst_26578 = (state_26580[2]);var state_26580__$1 = state_26580;return cljs.core.async.impl.ioc_helpers.return_chan(state_26580__$1,inst_26578);
} else
{if((state_val_26581 === 4))
{var inst_26548 = (state_26580[9]);var inst_26548__$1 = (state_26580[2]);var inst_26549 = (inst_26548__$1 == null);var inst_26550 = cljs.core.not(inst_26549);var state_26580__$1 = (function (){var statearr_26584 = state_26580;(statearr_26584[9] = inst_26548__$1);
return statearr_26584;
})();if(inst_26550)
{var statearr_26585_26612 = state_26580__$1;(statearr_26585_26612[1] = 5);
} else
{var statearr_26586_26613 = state_26580__$1;(statearr_26586_26613[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 5))
{var inst_26548 = (state_26580[9]);var inst_26553 = (state_26580[10]);var inst_26545 = (state_26580[7]);var inst_26544 = (state_26580[8]);var inst_26552 = (inst_26544[inst_26545] = inst_26548);var inst_26553__$1 = (inst_26545 + 1);var inst_26554 = (inst_26553__$1 < n);var state_26580__$1 = (function (){var statearr_26587 = state_26580;(statearr_26587[10] = inst_26553__$1);
(statearr_26587[11] = inst_26552);
return statearr_26587;
})();if(cljs.core.truth_(inst_26554))
{var statearr_26588_26614 = state_26580__$1;(statearr_26588_26614[1] = 8);
} else
{var statearr_26589_26615 = state_26580__$1;(statearr_26589_26615[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 6))
{var inst_26545 = (state_26580[7]);var inst_26566 = (inst_26545 > 0);var state_26580__$1 = state_26580;if(cljs.core.truth_(inst_26566))
{var statearr_26591_26616 = state_26580__$1;(statearr_26591_26616[1] = 12);
} else
{var statearr_26592_26617 = state_26580__$1;(statearr_26592_26617[1] = 13);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 7))
{var inst_26576 = (state_26580[2]);var state_26580__$1 = state_26580;var statearr_26593_26618 = state_26580__$1;(statearr_26593_26618[2] = inst_26576);
(statearr_26593_26618[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 8))
{var inst_26553 = (state_26580[10]);var inst_26544 = (state_26580[8]);var tmp26590 = inst_26544;var inst_26544__$1 = tmp26590;var inst_26545 = inst_26553;var state_26580__$1 = (function (){var statearr_26594 = state_26580;(statearr_26594[7] = inst_26545);
(statearr_26594[8] = inst_26544__$1);
return statearr_26594;
})();var statearr_26595_26619 = state_26580__$1;(statearr_26595_26619[2] = null);
(statearr_26595_26619[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 9))
{var inst_26544 = (state_26580[8]);var inst_26558 = cljs.core.vec(inst_26544);var state_26580__$1 = state_26580;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26580__$1,11,out,inst_26558);
} else
{if((state_val_26581 === 10))
{var inst_26564 = (state_26580[2]);var state_26580__$1 = state_26580;var statearr_26596_26620 = state_26580__$1;(statearr_26596_26620[2] = inst_26564);
(statearr_26596_26620[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 11))
{var inst_26560 = (state_26580[2]);var inst_26561 = (new Array(n));var inst_26544 = inst_26561;var inst_26545 = 0;var state_26580__$1 = (function (){var statearr_26597 = state_26580;(statearr_26597[7] = inst_26545);
(statearr_26597[8] = inst_26544);
(statearr_26597[12] = inst_26560);
return statearr_26597;
})();var statearr_26598_26621 = state_26580__$1;(statearr_26598_26621[2] = null);
(statearr_26598_26621[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 12))
{var inst_26544 = (state_26580[8]);var inst_26568 = cljs.core.vec(inst_26544);var state_26580__$1 = state_26580;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26580__$1,15,out,inst_26568);
} else
{if((state_val_26581 === 13))
{var state_26580__$1 = state_26580;var statearr_26599_26622 = state_26580__$1;(statearr_26599_26622[2] = null);
(statearr_26599_26622[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 14))
{var inst_26573 = (state_26580[2]);var inst_26574 = cljs.core.async.close_BANG_(out);var state_26580__$1 = (function (){var statearr_26600 = state_26580;(statearr_26600[13] = inst_26573);
return statearr_26600;
})();var statearr_26601_26623 = state_26580__$1;(statearr_26601_26623[2] = inst_26574);
(statearr_26601_26623[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26581 === 15))
{var inst_26570 = (state_26580[2]);var state_26580__$1 = state_26580;var statearr_26602_26624 = state_26580__$1;(statearr_26602_26624[2] = inst_26570);
(statearr_26602_26624[1] = 14);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26606[0] = state_machine__5507__auto__);
(statearr_26606[1] = 1);
return statearr_26606;
});
var state_machine__5507__auto____1 = (function (state_26580){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26580);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26607){if((e26607 instanceof Object))
{var ex__5510__auto__ = e26607;var statearr_26608_26625 = state_26580;(statearr_26608_26625[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26580);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26626 = state_26580;
state_26580 = G__26626;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26580){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26609 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26610);
return statearr_26609;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26739){var state_val_26740 = (state_26739[1]);if((state_val_26740 === 1))
{var inst_26698 = [];var inst_26699 = inst_26698;var inst_26700 = cljs.core.constant$keyword$254;var state_26739__$1 = (function (){var statearr_26741 = state_26739;(statearr_26741[7] = inst_26700);
(statearr_26741[8] = inst_26699);
return statearr_26741;
})();var statearr_26742_26770 = state_26739__$1;(statearr_26742_26770[2] = null);
(statearr_26742_26770[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 2))
{var state_26739__$1 = state_26739;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26739__$1,4,ch);
} else
{if((state_val_26740 === 3))
{var inst_26737 = (state_26739[2]);var state_26739__$1 = state_26739;return cljs.core.async.impl.ioc_helpers.return_chan(state_26739__$1,inst_26737);
} else
{if((state_val_26740 === 4))
{var inst_26703 = (state_26739[9]);var inst_26703__$1 = (state_26739[2]);var inst_26704 = (inst_26703__$1 == null);var inst_26705 = cljs.core.not(inst_26704);var state_26739__$1 = (function (){var statearr_26743 = state_26739;(statearr_26743[9] = inst_26703__$1);
return statearr_26743;
})();if(inst_26705)
{var statearr_26744_26771 = state_26739__$1;(statearr_26744_26771[1] = 5);
} else
{var statearr_26745_26772 = state_26739__$1;(statearr_26745_26772[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 5))
{var inst_26703 = (state_26739[9]);var inst_26700 = (state_26739[7]);var inst_26707 = (state_26739[10]);var inst_26707__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26703) : f.call(null,inst_26703));var inst_26708 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26707__$1,inst_26700);var inst_26709 = cljs.core.keyword_identical_QMARK_(inst_26700,cljs.core.constant$keyword$254);var inst_26710 = (inst_26708) || (inst_26709);var state_26739__$1 = (function (){var statearr_26746 = state_26739;(statearr_26746[10] = inst_26707__$1);
return statearr_26746;
})();if(cljs.core.truth_(inst_26710))
{var statearr_26747_26773 = state_26739__$1;(statearr_26747_26773[1] = 8);
} else
{var statearr_26748_26774 = state_26739__$1;(statearr_26748_26774[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 6))
{var inst_26699 = (state_26739[8]);var inst_26724 = inst_26699.length;var inst_26725 = (inst_26724 > 0);var state_26739__$1 = state_26739;if(cljs.core.truth_(inst_26725))
{var statearr_26750_26775 = state_26739__$1;(statearr_26750_26775[1] = 12);
} else
{var statearr_26751_26776 = state_26739__$1;(statearr_26751_26776[1] = 13);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 7))
{var inst_26735 = (state_26739[2]);var state_26739__$1 = state_26739;var statearr_26752_26777 = state_26739__$1;(statearr_26752_26777[2] = inst_26735);
(statearr_26752_26777[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 8))
{var inst_26703 = (state_26739[9]);var inst_26699 = (state_26739[8]);var inst_26707 = (state_26739[10]);var inst_26712 = inst_26699.push(inst_26703);var tmp26749 = inst_26699;var inst_26699__$1 = tmp26749;var inst_26700 = inst_26707;var state_26739__$1 = (function (){var statearr_26753 = state_26739;(statearr_26753[11] = inst_26712);
(statearr_26753[7] = inst_26700);
(statearr_26753[8] = inst_26699__$1);
return statearr_26753;
})();var statearr_26754_26778 = state_26739__$1;(statearr_26754_26778[2] = null);
(statearr_26754_26778[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 9))
{var inst_26699 = (state_26739[8]);var inst_26715 = cljs.core.vec(inst_26699);var state_26739__$1 = state_26739;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26739__$1,11,out,inst_26715);
} else
{if((state_val_26740 === 10))
{var inst_26722 = (state_26739[2]);var state_26739__$1 = state_26739;var statearr_26755_26779 = state_26739__$1;(statearr_26755_26779[2] = inst_26722);
(statearr_26755_26779[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 11))
{var inst_26703 = (state_26739[9]);var inst_26707 = (state_26739[10]);var inst_26717 = (state_26739[2]);var inst_26718 = [];var inst_26719 = inst_26718.push(inst_26703);var inst_26699 = inst_26718;var inst_26700 = inst_26707;var state_26739__$1 = (function (){var statearr_26756 = state_26739;(statearr_26756[12] = inst_26717);
(statearr_26756[13] = inst_26719);
(statearr_26756[7] = inst_26700);
(statearr_26756[8] = inst_26699);
return statearr_26756;
})();var statearr_26757_26780 = state_26739__$1;(statearr_26757_26780[2] = null);
(statearr_26757_26780[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 12))
{var inst_26699 = (state_26739[8]);var inst_26727 = cljs.core.vec(inst_26699);var state_26739__$1 = state_26739;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26739__$1,15,out,inst_26727);
} else
{if((state_val_26740 === 13))
{var state_26739__$1 = state_26739;var statearr_26758_26781 = state_26739__$1;(statearr_26758_26781[2] = null);
(statearr_26758_26781[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 14))
{var inst_26732 = (state_26739[2]);var inst_26733 = cljs.core.async.close_BANG_(out);var state_26739__$1 = (function (){var statearr_26759 = state_26739;(statearr_26759[14] = inst_26732);
return statearr_26759;
})();var statearr_26760_26782 = state_26739__$1;(statearr_26760_26782[2] = inst_26733);
(statearr_26760_26782[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26740 === 15))
{var inst_26729 = (state_26739[2]);var state_26739__$1 = state_26739;var statearr_26761_26783 = state_26739__$1;(statearr_26761_26783[2] = inst_26729);
(statearr_26761_26783[1] = 14);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26765[0] = state_machine__5507__auto__);
(statearr_26765[1] = 1);
return statearr_26765;
});
var state_machine__5507__auto____1 = (function (state_26739){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26739);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26766){if((e26766 instanceof Object))
{var ex__5510__auto__ = e26766;var statearr_26767_26784 = state_26739;(statearr_26767_26784[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26739);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26785 = state_26739;
state_26739 = G__26785;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26739){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26768 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26769);
return statearr_26768;
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
