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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24325 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24325 = (function (f,fn_handler,meta24326){
this.f = f;
this.fn_handler = fn_handler;
this.meta24326 = meta24326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24325.cljs$lang$type = true;
cljs.core.async.t24325.cljs$lang$ctorStr = "cljs.core.async/t24325";
cljs.core.async.t24325.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24325");
});
cljs.core.async.t24325.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24327){var self__ = this;
var _24327__$1 = this;return self__.meta24326;
});
cljs.core.async.t24325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24327,meta24326__$1){var self__ = this;
var _24327__$1 = this;return (new cljs.core.async.t24325(self__.f,self__.fn_handler,meta24326__$1));
});
cljs.core.async.__GT_t24325 = (function __GT_t24325(f__$1,fn_handler__$1,meta24326){return (new cljs.core.async.t24325(f__$1,fn_handler__$1,meta24326));
});
}
return (new cljs.core.async.t24325(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24329 = buff;if(G__24329)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24329.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24329.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24329);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24329);
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
{var val_24330 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24330) : fn1.call(null,val_24330));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24330) : fn1.call(null,val_24330));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24331 = n;var x_24332 = 0;while(true){
if((x_24332 < n__4248__auto___24331))
{(a[x_24332] = 0);
{
var G__24333 = (x_24332 + 1);
x_24332 = G__24333;
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
var G__24334 = (i + 1);
i = G__24334;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24338 = (function (flag,alt_flag,meta24339){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24339 = meta24339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24338.cljs$lang$type = true;
cljs.core.async.t24338.cljs$lang$ctorStr = "cljs.core.async/t24338";
cljs.core.async.t24338.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24338");
});
cljs.core.async.t24338.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24340){var self__ = this;
var _24340__$1 = this;return self__.meta24339;
});
cljs.core.async.t24338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24340,meta24339__$1){var self__ = this;
var _24340__$1 = this;return (new cljs.core.async.t24338(self__.flag,self__.alt_flag,meta24339__$1));
});
cljs.core.async.__GT_t24338 = (function __GT_t24338(flag__$1,alt_flag__$1,meta24339){return (new cljs.core.async.t24338(flag__$1,alt_flag__$1,meta24339));
});
}
return (new cljs.core.async.t24338(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24344 = (function (cb,flag,alt_handler,meta24345){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24345 = meta24345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24344.cljs$lang$type = true;
cljs.core.async.t24344.cljs$lang$ctorStr = "cljs.core.async/t24344";
cljs.core.async.t24344.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24344");
});
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24346){var self__ = this;
var _24346__$1 = this;return self__.meta24345;
});
cljs.core.async.t24344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24346,meta24345__$1){var self__ = this;
var _24346__$1 = this;return (new cljs.core.async.t24344(self__.cb,self__.flag,self__.alt_handler,meta24345__$1));
});
cljs.core.async.__GT_t24344 = (function __GT_t24344(cb__$1,flag__$1,alt_handler__$1,meta24345){return (new cljs.core.async.t24344(cb__$1,flag__$1,alt_handler__$1,meta24345));
});
}
return (new cljs.core.async.t24344(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$254.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24347_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24347_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24347_SHARP_,port], null)));
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
var G__24348 = (i + 1);
i = G__24348;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$238))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$238], null));
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
var alts_BANG___delegate = function (ports,p__24349){var map__24351 = p__24349;var map__24351__$1 = ((cljs.core.seq_QMARK_(map__24351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24351):map__24351);var opts = map__24351__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24349 = null;if (arguments.length > 1) {
  p__24349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24349);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24352){
var ports = cljs.core.first(arglist__24352);
var p__24349 = cljs.core.rest(arglist__24352);
return alts_BANG___delegate(ports,p__24349);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24360 = (function (ch,f,map_LT_,meta24361){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24361 = meta24361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24360.cljs$lang$type = true;
cljs.core.async.t24360.cljs$lang$ctorStr = "cljs.core.async/t24360";
cljs.core.async.t24360.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24360");
});
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24363 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24363 = (function (fn1,_,meta24361,ch,f,map_LT_,meta24364){
this.fn1 = fn1;
this._ = _;
this.meta24361 = meta24361;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24364 = meta24364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24363.cljs$lang$type = true;
cljs.core.async.t24363.cljs$lang$ctorStr = "cljs.core.async/t24363";
cljs.core.async.t24363.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24363");
});
cljs.core.async.t24363.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24363.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24353_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24353_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24353_SHARP_) : self__.f.call(null,p1__24353_SHARP_)))) : f1.call(null,(((p1__24353_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24353_SHARP_) : self__.f.call(null,p1__24353_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24365){var self__ = this;
var _24365__$1 = this;return self__.meta24364;
});
cljs.core.async.t24363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24365,meta24364__$1){var self__ = this;
var _24365__$1 = this;return (new cljs.core.async.t24363(self__.fn1,self__._,self__.meta24361,self__.ch,self__.f,self__.map_LT_,meta24364__$1));
});
cljs.core.async.__GT_t24363 = (function __GT_t24363(fn1__$1,___$2,meta24361__$1,ch__$2,f__$2,map_LT___$2,meta24364){return (new cljs.core.async.t24363(fn1__$1,___$2,meta24361__$1,ch__$2,f__$2,map_LT___$2,meta24364));
});
}
return (new cljs.core.async.t24363(fn1,___$1,self__.meta24361,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24362){var self__ = this;
var _24362__$1 = this;return self__.meta24361;
});
cljs.core.async.t24360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24362,meta24361__$1){var self__ = this;
var _24362__$1 = this;return (new cljs.core.async.t24360(self__.ch,self__.f,self__.map_LT_,meta24361__$1));
});
cljs.core.async.__GT_t24360 = (function __GT_t24360(ch__$1,f__$1,map_LT___$1,meta24361){return (new cljs.core.async.t24360(ch__$1,f__$1,map_LT___$1,meta24361));
});
}
return (new cljs.core.async.t24360(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24369 = (function (ch,f,map_GT_,meta24370){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24370 = meta24370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24369.cljs$lang$type = true;
cljs.core.async.t24369.cljs$lang$ctorStr = "cljs.core.async/t24369";
cljs.core.async.t24369.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24369");
});
cljs.core.async.t24369.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24369.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24369.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24369.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24369.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24369.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24371){var self__ = this;
var _24371__$1 = this;return self__.meta24370;
});
cljs.core.async.t24369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24371,meta24370__$1){var self__ = this;
var _24371__$1 = this;return (new cljs.core.async.t24369(self__.ch,self__.f,self__.map_GT_,meta24370__$1));
});
cljs.core.async.__GT_t24369 = (function __GT_t24369(ch__$1,f__$1,map_GT___$1,meta24370){return (new cljs.core.async.t24369(ch__$1,f__$1,map_GT___$1,meta24370));
});
}
return (new cljs.core.async.t24369(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24375 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24375 = (function (ch,p,filter_GT_,meta24376){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24376 = meta24376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24375.cljs$lang$type = true;
cljs.core.async.t24375.cljs$lang$ctorStr = "cljs.core.async/t24375";
cljs.core.async.t24375.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24375");
});
cljs.core.async.t24375.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24375.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24375.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24377){var self__ = this;
var _24377__$1 = this;return self__.meta24376;
});
cljs.core.async.t24375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24377,meta24376__$1){var self__ = this;
var _24377__$1 = this;return (new cljs.core.async.t24375(self__.ch,self__.p,self__.filter_GT_,meta24376__$1));
});
cljs.core.async.__GT_t24375 = (function __GT_t24375(ch__$1,p__$1,filter_GT___$1,meta24376){return (new cljs.core.async.t24375(ch__$1,p__$1,filter_GT___$1,meta24376));
});
}
return (new cljs.core.async.t24375(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24439){var state_val_24440 = (state_24439[1]);if((state_val_24440 === 1))
{var state_24439__$1 = state_24439;var statearr_24441_24461 = state_24439__$1;(statearr_24441_24461[2] = null);
(statearr_24441_24461[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24440 === 2))
{var state_24439__$1 = state_24439;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24439__$1,4,ch);
} else
{if((state_val_24440 === 3))
{var inst_24437 = (state_24439[2]);var state_24439__$1 = state_24439;return cljs.core.async.impl.ioc_helpers.return_chan(state_24439__$1,inst_24437);
} else
{if((state_val_24440 === 4))
{var inst_24421 = (state_24439[7]);var inst_24421__$1 = (state_24439[2]);var inst_24422 = (inst_24421__$1 == null);var state_24439__$1 = (function (){var statearr_24442 = state_24439;(statearr_24442[7] = inst_24421__$1);
return statearr_24442;
})();if(cljs.core.truth_(inst_24422))
{var statearr_24443_24462 = state_24439__$1;(statearr_24443_24462[1] = 5);
} else
{var statearr_24444_24463 = state_24439__$1;(statearr_24444_24463[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24440 === 5))
{var inst_24424 = cljs.core.async.close_BANG_(out);var state_24439__$1 = state_24439;var statearr_24445_24464 = state_24439__$1;(statearr_24445_24464[2] = inst_24424);
(statearr_24445_24464[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24440 === 6))
{var inst_24421 = (state_24439[7]);var inst_24426 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24421) : p.call(null,inst_24421));var state_24439__$1 = state_24439;if(cljs.core.truth_(inst_24426))
{var statearr_24446_24465 = state_24439__$1;(statearr_24446_24465[1] = 8);
} else
{var statearr_24447_24466 = state_24439__$1;(statearr_24447_24466[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24440 === 7))
{var inst_24435 = (state_24439[2]);var state_24439__$1 = state_24439;var statearr_24448_24467 = state_24439__$1;(statearr_24448_24467[2] = inst_24435);
(statearr_24448_24467[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24440 === 8))
{var inst_24421 = (state_24439[7]);var state_24439__$1 = state_24439;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24439__$1,11,out,inst_24421);
} else
{if((state_val_24440 === 9))
{var state_24439__$1 = state_24439;var statearr_24449_24468 = state_24439__$1;(statearr_24449_24468[2] = null);
(statearr_24449_24468[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24440 === 10))
{var inst_24432 = (state_24439[2]);var state_24439__$1 = (function (){var statearr_24450 = state_24439;(statearr_24450[8] = inst_24432);
return statearr_24450;
})();var statearr_24451_24469 = state_24439__$1;(statearr_24451_24469[2] = null);
(statearr_24451_24469[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24440 === 11))
{var inst_24429 = (state_24439[2]);var state_24439__$1 = state_24439;var statearr_24452_24470 = state_24439__$1;(statearr_24452_24470[2] = inst_24429);
(statearr_24452_24470[1] = 10);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_24456 = [null,null,null,null,null,null,null,null,null];(statearr_24456[0] = state_machine__5507__auto__);
(statearr_24456[1] = 1);
return statearr_24456;
});
var state_machine__5507__auto____1 = (function (state_24439){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24439);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24457){if((e24457 instanceof Object))
{var ex__5510__auto__ = e24457;var statearr_24458_24471 = state_24439;(statearr_24458_24471[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24439);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24472 = state_24439;
state_24439 = G__24472;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24439){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24459 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24460);
return statearr_24459;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24624){var state_val_24625 = (state_24624[1]);if((state_val_24625 === 1))
{var state_24624__$1 = state_24624;var statearr_24626_24663 = state_24624__$1;(statearr_24626_24663[2] = null);
(statearr_24626_24663[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 2))
{var state_24624__$1 = state_24624;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24624__$1,4,in$);
} else
{if((state_val_24625 === 3))
{var inst_24622 = (state_24624[2]);var state_24624__$1 = state_24624;return cljs.core.async.impl.ioc_helpers.return_chan(state_24624__$1,inst_24622);
} else
{if((state_val_24625 === 4))
{var inst_24570 = (state_24624[7]);var inst_24570__$1 = (state_24624[2]);var inst_24571 = (inst_24570__$1 == null);var state_24624__$1 = (function (){var statearr_24627 = state_24624;(statearr_24627[7] = inst_24570__$1);
return statearr_24627;
})();if(cljs.core.truth_(inst_24571))
{var statearr_24628_24664 = state_24624__$1;(statearr_24628_24664[1] = 5);
} else
{var statearr_24629_24665 = state_24624__$1;(statearr_24629_24665[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 5))
{var inst_24573 = cljs.core.async.close_BANG_(out);var state_24624__$1 = state_24624;var statearr_24630_24666 = state_24624__$1;(statearr_24630_24666[2] = inst_24573);
(statearr_24630_24666[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 6))
{var inst_24570 = (state_24624[7]);var inst_24575 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24570) : f.call(null,inst_24570));var inst_24580 = cljs.core.seq(inst_24575);var inst_24581 = inst_24580;var inst_24582 = null;var inst_24583 = 0;var inst_24584 = 0;var state_24624__$1 = (function (){var statearr_24631 = state_24624;(statearr_24631[8] = inst_24584);
(statearr_24631[9] = inst_24582);
(statearr_24631[10] = inst_24583);
(statearr_24631[11] = inst_24581);
return statearr_24631;
})();var statearr_24632_24667 = state_24624__$1;(statearr_24632_24667[2] = null);
(statearr_24632_24667[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 7))
{var inst_24620 = (state_24624[2]);var state_24624__$1 = state_24624;var statearr_24633_24668 = state_24624__$1;(statearr_24633_24668[2] = inst_24620);
(statearr_24633_24668[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 8))
{var inst_24584 = (state_24624[8]);var inst_24583 = (state_24624[10]);var inst_24586 = (inst_24584 < inst_24583);var inst_24587 = inst_24586;var state_24624__$1 = state_24624;if(cljs.core.truth_(inst_24587))
{var statearr_24634_24669 = state_24624__$1;(statearr_24634_24669[1] = 10);
} else
{var statearr_24635_24670 = state_24624__$1;(statearr_24635_24670[1] = 11);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 9))
{var inst_24617 = (state_24624[2]);var state_24624__$1 = (function (){var statearr_24636 = state_24624;(statearr_24636[12] = inst_24617);
return statearr_24636;
})();var statearr_24637_24671 = state_24624__$1;(statearr_24637_24671[2] = null);
(statearr_24637_24671[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 10))
{var inst_24584 = (state_24624[8]);var inst_24582 = (state_24624[9]);var inst_24589 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24582,inst_24584);var state_24624__$1 = state_24624;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24624__$1,13,out,inst_24589);
} else
{if((state_val_24625 === 11))
{var inst_24581 = (state_24624[11]);var inst_24595 = (state_24624[13]);var inst_24595__$1 = cljs.core.seq(inst_24581);var state_24624__$1 = (function (){var statearr_24641 = state_24624;(statearr_24641[13] = inst_24595__$1);
return statearr_24641;
})();if(inst_24595__$1)
{var statearr_24642_24672 = state_24624__$1;(statearr_24642_24672[1] = 14);
} else
{var statearr_24643_24673 = state_24624__$1;(statearr_24643_24673[1] = 15);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 12))
{var inst_24615 = (state_24624[2]);var state_24624__$1 = state_24624;var statearr_24644_24674 = state_24624__$1;(statearr_24644_24674[2] = inst_24615);
(statearr_24644_24674[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 13))
{var inst_24584 = (state_24624[8]);var inst_24582 = (state_24624[9]);var inst_24583 = (state_24624[10]);var inst_24581 = (state_24624[11]);var inst_24591 = (state_24624[2]);var inst_24592 = (inst_24584 + 1);var tmp24638 = inst_24582;var tmp24639 = inst_24583;var tmp24640 = inst_24581;var inst_24581__$1 = tmp24640;var inst_24582__$1 = tmp24638;var inst_24583__$1 = tmp24639;var inst_24584__$1 = inst_24592;var state_24624__$1 = (function (){var statearr_24645 = state_24624;(statearr_24645[8] = inst_24584__$1);
(statearr_24645[9] = inst_24582__$1);
(statearr_24645[10] = inst_24583__$1);
(statearr_24645[11] = inst_24581__$1);
(statearr_24645[14] = inst_24591);
return statearr_24645;
})();var statearr_24646_24675 = state_24624__$1;(statearr_24646_24675[2] = null);
(statearr_24646_24675[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 14))
{var inst_24595 = (state_24624[13]);var inst_24597 = cljs.core.chunked_seq_QMARK_(inst_24595);var state_24624__$1 = state_24624;if(inst_24597)
{var statearr_24647_24676 = state_24624__$1;(statearr_24647_24676[1] = 17);
} else
{var statearr_24648_24677 = state_24624__$1;(statearr_24648_24677[1] = 18);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 15))
{var state_24624__$1 = state_24624;var statearr_24649_24678 = state_24624__$1;(statearr_24649_24678[2] = null);
(statearr_24649_24678[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 16))
{var inst_24613 = (state_24624[2]);var state_24624__$1 = state_24624;var statearr_24650_24679 = state_24624__$1;(statearr_24650_24679[2] = inst_24613);
(statearr_24650_24679[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 17))
{var inst_24595 = (state_24624[13]);var inst_24599 = cljs.core.chunk_first(inst_24595);var inst_24600 = cljs.core.chunk_rest(inst_24595);var inst_24601 = cljs.core.count(inst_24599);var inst_24581 = inst_24600;var inst_24582 = inst_24599;var inst_24583 = inst_24601;var inst_24584 = 0;var state_24624__$1 = (function (){var statearr_24651 = state_24624;(statearr_24651[8] = inst_24584);
(statearr_24651[9] = inst_24582);
(statearr_24651[10] = inst_24583);
(statearr_24651[11] = inst_24581);
return statearr_24651;
})();var statearr_24652_24680 = state_24624__$1;(statearr_24652_24680[2] = null);
(statearr_24652_24680[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 18))
{var inst_24595 = (state_24624[13]);var inst_24604 = cljs.core.first(inst_24595);var state_24624__$1 = state_24624;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24624__$1,20,out,inst_24604);
} else
{if((state_val_24625 === 19))
{var inst_24610 = (state_24624[2]);var state_24624__$1 = state_24624;var statearr_24653_24681 = state_24624__$1;(statearr_24653_24681[2] = inst_24610);
(statearr_24653_24681[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24625 === 20))
{var inst_24595 = (state_24624[13]);var inst_24606 = (state_24624[2]);var inst_24607 = cljs.core.next(inst_24595);var inst_24581 = inst_24607;var inst_24582 = null;var inst_24583 = 0;var inst_24584 = 0;var state_24624__$1 = (function (){var statearr_24654 = state_24624;(statearr_24654[8] = inst_24584);
(statearr_24654[9] = inst_24582);
(statearr_24654[10] = inst_24583);
(statearr_24654[11] = inst_24581);
(statearr_24654[15] = inst_24606);
return statearr_24654;
})();var statearr_24655_24682 = state_24624__$1;(statearr_24655_24682[2] = null);
(statearr_24655_24682[1] = 8);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_24659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24659[0] = state_machine__5507__auto__);
(statearr_24659[1] = 1);
return statearr_24659;
});
var state_machine__5507__auto____1 = (function (state_24624){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24624);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24660){if((e24660 instanceof Object))
{var ex__5510__auto__ = e24660;var statearr_24661_24683 = state_24624;(statearr_24661_24683[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24624);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24684 = state_24624;
state_24624 = G__24684;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24624){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24662 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24662;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24744){var state_val_24745 = (state_24744[1]);if((state_val_24745 === 1))
{var state_24744__$1 = state_24744;var statearr_24746_24766 = state_24744__$1;(statearr_24746_24766[2] = null);
(statearr_24746_24766[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24745 === 2))
{var state_24744__$1 = state_24744;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24744__$1,4,from);
} else
{if((state_val_24745 === 3))
{var inst_24742 = (state_24744[2]);var state_24744__$1 = state_24744;return cljs.core.async.impl.ioc_helpers.return_chan(state_24744__$1,inst_24742);
} else
{if((state_val_24745 === 4))
{var inst_24727 = (state_24744[7]);var inst_24727__$1 = (state_24744[2]);var inst_24728 = (inst_24727__$1 == null);var state_24744__$1 = (function (){var statearr_24747 = state_24744;(statearr_24747[7] = inst_24727__$1);
return statearr_24747;
})();if(cljs.core.truth_(inst_24728))
{var statearr_24748_24767 = state_24744__$1;(statearr_24748_24767[1] = 5);
} else
{var statearr_24749_24768 = state_24744__$1;(statearr_24749_24768[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24745 === 5))
{var state_24744__$1 = state_24744;if(cljs.core.truth_(close_QMARK_))
{var statearr_24750_24769 = state_24744__$1;(statearr_24750_24769[1] = 8);
} else
{var statearr_24751_24770 = state_24744__$1;(statearr_24751_24770[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24745 === 6))
{var inst_24727 = (state_24744[7]);var state_24744__$1 = state_24744;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24744__$1,11,to,inst_24727);
} else
{if((state_val_24745 === 7))
{var inst_24740 = (state_24744[2]);var state_24744__$1 = state_24744;var statearr_24752_24771 = state_24744__$1;(statearr_24752_24771[2] = inst_24740);
(statearr_24752_24771[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24745 === 8))
{var inst_24731 = cljs.core.async.close_BANG_(to);var state_24744__$1 = state_24744;var statearr_24753_24772 = state_24744__$1;(statearr_24753_24772[2] = inst_24731);
(statearr_24753_24772[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24745 === 9))
{var state_24744__$1 = state_24744;var statearr_24754_24773 = state_24744__$1;(statearr_24754_24773[2] = null);
(statearr_24754_24773[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24745 === 10))
{var inst_24734 = (state_24744[2]);var state_24744__$1 = state_24744;var statearr_24755_24774 = state_24744__$1;(statearr_24755_24774[2] = inst_24734);
(statearr_24755_24774[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24745 === 11))
{var inst_24737 = (state_24744[2]);var state_24744__$1 = (function (){var statearr_24756 = state_24744;(statearr_24756[8] = inst_24737);
return statearr_24756;
})();var statearr_24757_24775 = state_24744__$1;(statearr_24757_24775[2] = null);
(statearr_24757_24775[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_24761 = [null,null,null,null,null,null,null,null,null];(statearr_24761[0] = state_machine__5507__auto__);
(statearr_24761[1] = 1);
return statearr_24761;
});
var state_machine__5507__auto____1 = (function (state_24744){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24744);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24762){if((e24762 instanceof Object))
{var ex__5510__auto__ = e24762;var statearr_24763_24776 = state_24744;(statearr_24763_24776[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24744);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24777 = state_24744;
state_24744 = G__24777;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24744){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24764 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24765);
return statearr_24764;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24842){var state_val_24843 = (state_24842[1]);if((state_val_24843 === 1))
{var state_24842__$1 = state_24842;var statearr_24844_24865 = state_24842__$1;(statearr_24844_24865[2] = null);
(statearr_24844_24865[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24843 === 2))
{var state_24842__$1 = state_24842;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24842__$1,4,ch);
} else
{if((state_val_24843 === 3))
{var inst_24840 = (state_24842[2]);var state_24842__$1 = state_24842;return cljs.core.async.impl.ioc_helpers.return_chan(state_24842__$1,inst_24840);
} else
{if((state_val_24843 === 4))
{var inst_24823 = (state_24842[7]);var inst_24823__$1 = (state_24842[2]);var inst_24824 = (inst_24823__$1 == null);var state_24842__$1 = (function (){var statearr_24845 = state_24842;(statearr_24845[7] = inst_24823__$1);
return statearr_24845;
})();if(cljs.core.truth_(inst_24824))
{var statearr_24846_24866 = state_24842__$1;(statearr_24846_24866[1] = 5);
} else
{var statearr_24847_24867 = state_24842__$1;(statearr_24847_24867[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24843 === 5))
{var inst_24826 = cljs.core.async.close_BANG_(tc);var inst_24827 = cljs.core.async.close_BANG_(fc);var state_24842__$1 = (function (){var statearr_24848 = state_24842;(statearr_24848[8] = inst_24826);
return statearr_24848;
})();var statearr_24849_24868 = state_24842__$1;(statearr_24849_24868[2] = inst_24827);
(statearr_24849_24868[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24843 === 6))
{var inst_24823 = (state_24842[7]);var inst_24829 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24823) : p.call(null,inst_24823));var state_24842__$1 = state_24842;if(cljs.core.truth_(inst_24829))
{var statearr_24850_24869 = state_24842__$1;(statearr_24850_24869[1] = 9);
} else
{var statearr_24851_24870 = state_24842__$1;(statearr_24851_24870[1] = 10);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24843 === 7))
{var inst_24838 = (state_24842[2]);var state_24842__$1 = state_24842;var statearr_24852_24871 = state_24842__$1;(statearr_24852_24871[2] = inst_24838);
(statearr_24852_24871[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24843 === 8))
{var inst_24835 = (state_24842[2]);var state_24842__$1 = (function (){var statearr_24853 = state_24842;(statearr_24853[9] = inst_24835);
return statearr_24853;
})();var statearr_24854_24872 = state_24842__$1;(statearr_24854_24872[2] = null);
(statearr_24854_24872[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24843 === 9))
{var state_24842__$1 = state_24842;var statearr_24855_24873 = state_24842__$1;(statearr_24855_24873[2] = tc);
(statearr_24855_24873[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24843 === 10))
{var state_24842__$1 = state_24842;var statearr_24856_24874 = state_24842__$1;(statearr_24856_24874[2] = fc);
(statearr_24856_24874[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24843 === 11))
{var inst_24823 = (state_24842[7]);var inst_24833 = (state_24842[2]);var state_24842__$1 = state_24842;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24842__$1,8,inst_24833,inst_24823);
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
var state_machine__5507__auto____0 = (function (){var statearr_24860 = [null,null,null,null,null,null,null,null,null,null];(statearr_24860[0] = state_machine__5507__auto__);
(statearr_24860[1] = 1);
return statearr_24860;
});
var state_machine__5507__auto____1 = (function (state_24842){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24842);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24861){if((e24861 instanceof Object))
{var ex__5510__auto__ = e24861;var statearr_24862_24875 = state_24842;(statearr_24862_24875[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24842);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24876 = state_24842;
state_24842 = G__24876;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24842){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24863 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24864);
return statearr_24863;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24923){var state_val_24924 = (state_24923[1]);if((state_val_24924 === 7))
{var inst_24919 = (state_24923[2]);var state_24923__$1 = state_24923;var statearr_24925_24941 = state_24923__$1;(statearr_24925_24941[2] = inst_24919);
(statearr_24925_24941[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24924 === 6))
{var inst_24909 = (state_24923[7]);var inst_24912 = (state_24923[8]);var inst_24916 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24909,inst_24912) : f.call(null,inst_24909,inst_24912));var inst_24909__$1 = inst_24916;var state_24923__$1 = (function (){var statearr_24926 = state_24923;(statearr_24926[7] = inst_24909__$1);
return statearr_24926;
})();var statearr_24927_24942 = state_24923__$1;(statearr_24927_24942[2] = null);
(statearr_24927_24942[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24924 === 5))
{var inst_24909 = (state_24923[7]);var state_24923__$1 = state_24923;var statearr_24928_24943 = state_24923__$1;(statearr_24928_24943[2] = inst_24909);
(statearr_24928_24943[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24924 === 4))
{var inst_24912 = (state_24923[8]);var inst_24912__$1 = (state_24923[2]);var inst_24913 = (inst_24912__$1 == null);var state_24923__$1 = (function (){var statearr_24929 = state_24923;(statearr_24929[8] = inst_24912__$1);
return statearr_24929;
})();if(cljs.core.truth_(inst_24913))
{var statearr_24930_24944 = state_24923__$1;(statearr_24930_24944[1] = 5);
} else
{var statearr_24931_24945 = state_24923__$1;(statearr_24931_24945[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24924 === 3))
{var inst_24921 = (state_24923[2]);var state_24923__$1 = state_24923;return cljs.core.async.impl.ioc_helpers.return_chan(state_24923__$1,inst_24921);
} else
{if((state_val_24924 === 2))
{var state_24923__$1 = state_24923;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24923__$1,4,ch);
} else
{if((state_val_24924 === 1))
{var inst_24909 = init;var state_24923__$1 = (function (){var statearr_24932 = state_24923;(statearr_24932[7] = inst_24909);
return statearr_24932;
})();var statearr_24933_24946 = state_24923__$1;(statearr_24933_24946[2] = null);
(statearr_24933_24946[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_24937 = [null,null,null,null,null,null,null,null,null];(statearr_24937[0] = state_machine__5507__auto__);
(statearr_24937[1] = 1);
return statearr_24937;
});
var state_machine__5507__auto____1 = (function (state_24923){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24923);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24938){if((e24938 instanceof Object))
{var ex__5510__auto__ = e24938;var statearr_24939_24947 = state_24923;(statearr_24939_24947[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24923);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24948 = state_24923;
state_24923 = G__24948;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24923){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24923);
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25010){var state_val_25011 = (state_25010[1]);if((state_val_25011 === 1))
{var inst_24990 = cljs.core.seq(coll);var inst_24991 = inst_24990;var state_25010__$1 = (function (){var statearr_25012 = state_25010;(statearr_25012[7] = inst_24991);
return statearr_25012;
})();var statearr_25013_25031 = state_25010__$1;(statearr_25013_25031[2] = null);
(statearr_25013_25031[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25011 === 2))
{var inst_24991 = (state_25010[7]);var state_25010__$1 = state_25010;if(cljs.core.truth_(inst_24991))
{var statearr_25014_25032 = state_25010__$1;(statearr_25014_25032[1] = 4);
} else
{var statearr_25015_25033 = state_25010__$1;(statearr_25015_25033[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25011 === 3))
{var inst_25008 = (state_25010[2]);var state_25010__$1 = state_25010;return cljs.core.async.impl.ioc_helpers.return_chan(state_25010__$1,inst_25008);
} else
{if((state_val_25011 === 4))
{var inst_24991 = (state_25010[7]);var inst_24994 = cljs.core.first(inst_24991);var state_25010__$1 = state_25010;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25010__$1,7,ch,inst_24994);
} else
{if((state_val_25011 === 5))
{var state_25010__$1 = state_25010;if(cljs.core.truth_(close_QMARK_))
{var statearr_25016_25034 = state_25010__$1;(statearr_25016_25034[1] = 8);
} else
{var statearr_25017_25035 = state_25010__$1;(statearr_25017_25035[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25011 === 6))
{var inst_25006 = (state_25010[2]);var state_25010__$1 = state_25010;var statearr_25018_25036 = state_25010__$1;(statearr_25018_25036[2] = inst_25006);
(statearr_25018_25036[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25011 === 7))
{var inst_24991 = (state_25010[7]);var inst_24996 = (state_25010[2]);var inst_24997 = cljs.core.next(inst_24991);var inst_24991__$1 = inst_24997;var state_25010__$1 = (function (){var statearr_25019 = state_25010;(statearr_25019[8] = inst_24996);
(statearr_25019[7] = inst_24991__$1);
return statearr_25019;
})();var statearr_25020_25037 = state_25010__$1;(statearr_25020_25037[2] = null);
(statearr_25020_25037[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25011 === 8))
{var inst_25001 = cljs.core.async.close_BANG_(ch);var state_25010__$1 = state_25010;var statearr_25021_25038 = state_25010__$1;(statearr_25021_25038[2] = inst_25001);
(statearr_25021_25038[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25011 === 9))
{var state_25010__$1 = state_25010;var statearr_25022_25039 = state_25010__$1;(statearr_25022_25039[2] = null);
(statearr_25022_25039[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25011 === 10))
{var inst_25004 = (state_25010[2]);var state_25010__$1 = state_25010;var statearr_25023_25040 = state_25010__$1;(statearr_25023_25040[2] = inst_25004);
(statearr_25023_25040[1] = 6);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_25027 = [null,null,null,null,null,null,null,null,null];(statearr_25027[0] = state_machine__5507__auto__);
(statearr_25027[1] = 1);
return statearr_25027;
});
var state_machine__5507__auto____1 = (function (state_25010){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25010);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25028){if((e25028 instanceof Object))
{var ex__5510__auto__ = e25028;var statearr_25029_25041 = state_25010;(statearr_25029_25041[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25010);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e25028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__25042 = state_25010;
state_25010 = G__25042;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25010){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25030 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_25030;
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
cljs.core.async.Mux = (function (){var obj25044 = {};return obj25044;
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
cljs.core.async.Mult = (function (){var obj25046 = {};return obj25046;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25270 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25270 = (function (cs,ch,mult,meta25271){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25271 = meta25271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25270.cljs$lang$type = true;
cljs.core.async.t25270.cljs$lang$ctorStr = "cljs.core.async/t25270";
cljs.core.async.t25270.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25270");
});})(cs))
;
cljs.core.async.t25270.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25270.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25270.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25270.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25270.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25272){var self__ = this;
var _25272__$1 = this;return self__.meta25271;
});})(cs))
;
cljs.core.async.t25270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25272,meta25271__$1){var self__ = this;
var _25272__$1 = this;return (new cljs.core.async.t25270(self__.cs,self__.ch,self__.mult,meta25271__$1));
});})(cs))
;
cljs.core.async.__GT_t25270 = ((function (cs){
return (function __GT_t25270(cs__$1,ch__$1,mult__$1,meta25271){return (new cljs.core.async.t25270(cs__$1,ch__$1,mult__$1,meta25271));
});})(cs))
;
}
return (new cljs.core.async.t25270(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25407){var state_val_25408 = (state_25407[1]);if((state_val_25408 === 32))
{var inst_25275 = (state_25407[7]);var inst_25351 = (state_25407[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25407,31,Object,null,30);var inst_25358 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25351,inst_25275,done);var state_25407__$1 = state_25407;var statearr_25409_25494 = state_25407__$1;(statearr_25409_25494[2] = inst_25358);
cljs.core.async.impl.ioc_helpers.process_exception(state_25407__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 1))
{var state_25407__$1 = state_25407;var statearr_25410_25495 = state_25407__$1;(statearr_25410_25495[2] = null);
(statearr_25410_25495[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 33))
{var inst_25364 = (state_25407[9]);var inst_25366 = cljs.core.chunked_seq_QMARK_(inst_25364);var state_25407__$1 = state_25407;if(inst_25366)
{var statearr_25411_25496 = state_25407__$1;(statearr_25411_25496[1] = 36);
} else
{var statearr_25412_25497 = state_25407__$1;(statearr_25412_25497[1] = 37);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 2))
{var state_25407__$1 = state_25407;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25407__$1,4,ch);
} else
{if((state_val_25408 === 34))
{var state_25407__$1 = state_25407;var statearr_25413_25498 = state_25407__$1;(statearr_25413_25498[2] = null);
(statearr_25413_25498[1] = 35);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 3))
{var inst_25405 = (state_25407[2]);var state_25407__$1 = state_25407;return cljs.core.async.impl.ioc_helpers.return_chan(state_25407__$1,inst_25405);
} else
{if((state_val_25408 === 35))
{var inst_25389 = (state_25407[2]);var state_25407__$1 = state_25407;var statearr_25414_25499 = state_25407__$1;(statearr_25414_25499[2] = inst_25389);
(statearr_25414_25499[1] = 29);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 4))
{var inst_25275 = (state_25407[7]);var inst_25275__$1 = (state_25407[2]);var inst_25276 = (inst_25275__$1 == null);var state_25407__$1 = (function (){var statearr_25415 = state_25407;(statearr_25415[7] = inst_25275__$1);
return statearr_25415;
})();if(cljs.core.truth_(inst_25276))
{var statearr_25416_25500 = state_25407__$1;(statearr_25416_25500[1] = 5);
} else
{var statearr_25417_25501 = state_25407__$1;(statearr_25417_25501[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 36))
{var inst_25364 = (state_25407[9]);var inst_25368 = cljs.core.chunk_first(inst_25364);var inst_25369 = cljs.core.chunk_rest(inst_25364);var inst_25370 = cljs.core.count(inst_25368);var inst_25343 = inst_25369;var inst_25344 = inst_25368;var inst_25345 = inst_25370;var inst_25346 = 0;var state_25407__$1 = (function (){var statearr_25418 = state_25407;(statearr_25418[10] = inst_25346);
(statearr_25418[11] = inst_25345);
(statearr_25418[12] = inst_25343);
(statearr_25418[13] = inst_25344);
return statearr_25418;
})();var statearr_25419_25502 = state_25407__$1;(statearr_25419_25502[2] = null);
(statearr_25419_25502[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 5))
{var inst_25282 = cljs.core.deref(cs);var inst_25283 = cljs.core.seq(inst_25282);var inst_25284 = inst_25283;var inst_25285 = null;var inst_25286 = 0;var inst_25287 = 0;var state_25407__$1 = (function (){var statearr_25420 = state_25407;(statearr_25420[14] = inst_25286);
(statearr_25420[15] = inst_25287);
(statearr_25420[16] = inst_25285);
(statearr_25420[17] = inst_25284);
return statearr_25420;
})();var statearr_25421_25503 = state_25407__$1;(statearr_25421_25503[2] = null);
(statearr_25421_25503[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 37))
{var inst_25364 = (state_25407[9]);var inst_25373 = cljs.core.first(inst_25364);var state_25407__$1 = (function (){var statearr_25422 = state_25407;(statearr_25422[18] = inst_25373);
return statearr_25422;
})();var statearr_25423_25504 = state_25407__$1;(statearr_25423_25504[2] = null);
(statearr_25423_25504[1] = 41);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 6))
{var inst_25335 = (state_25407[19]);var inst_25334 = cljs.core.deref(cs);var inst_25335__$1 = cljs.core.keys(inst_25334);var inst_25336 = cljs.core.count(inst_25335__$1);var inst_25337 = cljs.core.reset_BANG_(dctr,inst_25336);var inst_25342 = cljs.core.seq(inst_25335__$1);var inst_25343 = inst_25342;var inst_25344 = null;var inst_25345 = 0;var inst_25346 = 0;var state_25407__$1 = (function (){var statearr_25424 = state_25407;(statearr_25424[10] = inst_25346);
(statearr_25424[11] = inst_25345);
(statearr_25424[12] = inst_25343);
(statearr_25424[13] = inst_25344);
(statearr_25424[20] = inst_25337);
(statearr_25424[19] = inst_25335__$1);
return statearr_25424;
})();var statearr_25425_25505 = state_25407__$1;(statearr_25425_25505[2] = null);
(statearr_25425_25505[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 38))
{var inst_25386 = (state_25407[2]);var state_25407__$1 = state_25407;var statearr_25426_25506 = state_25407__$1;(statearr_25426_25506[2] = inst_25386);
(statearr_25426_25506[1] = 35);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 7))
{var inst_25403 = (state_25407[2]);var state_25407__$1 = state_25407;var statearr_25427_25507 = state_25407__$1;(statearr_25427_25507[2] = inst_25403);
(statearr_25427_25507[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 39))
{var inst_25364 = (state_25407[9]);var inst_25382 = (state_25407[2]);var inst_25383 = cljs.core.next(inst_25364);var inst_25343 = inst_25383;var inst_25344 = null;var inst_25345 = 0;var inst_25346 = 0;var state_25407__$1 = (function (){var statearr_25428 = state_25407;(statearr_25428[10] = inst_25346);
(statearr_25428[11] = inst_25345);
(statearr_25428[12] = inst_25343);
(statearr_25428[13] = inst_25344);
(statearr_25428[21] = inst_25382);
return statearr_25428;
})();var statearr_25429_25508 = state_25407__$1;(statearr_25429_25508[2] = null);
(statearr_25429_25508[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 8))
{var inst_25286 = (state_25407[14]);var inst_25287 = (state_25407[15]);var inst_25289 = (inst_25287 < inst_25286);var inst_25290 = inst_25289;var state_25407__$1 = state_25407;if(cljs.core.truth_(inst_25290))
{var statearr_25430_25509 = state_25407__$1;(statearr_25430_25509[1] = 10);
} else
{var statearr_25431_25510 = state_25407__$1;(statearr_25431_25510[1] = 11);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 40))
{var inst_25373 = (state_25407[18]);var inst_25374 = (state_25407[2]);var inst_25375 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25376 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25373);var state_25407__$1 = (function (){var statearr_25432 = state_25407;(statearr_25432[22] = inst_25374);
(statearr_25432[23] = inst_25375);
return statearr_25432;
})();var statearr_25433_25511 = state_25407__$1;(statearr_25433_25511[2] = inst_25376);
cljs.core.async.impl.ioc_helpers.process_exception(state_25407__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 9))
{var inst_25332 = (state_25407[2]);var state_25407__$1 = state_25407;var statearr_25434_25512 = state_25407__$1;(statearr_25434_25512[2] = inst_25332);
(statearr_25434_25512[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 41))
{var inst_25373 = (state_25407[18]);var inst_25275 = (state_25407[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25407,40,Object,null,39);var inst_25380 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25373,inst_25275,done);var state_25407__$1 = state_25407;var statearr_25435_25513 = state_25407__$1;(statearr_25435_25513[2] = inst_25380);
cljs.core.async.impl.ioc_helpers.process_exception(state_25407__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 10))
{var inst_25287 = (state_25407[15]);var inst_25285 = (state_25407[16]);var inst_25293 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25285,inst_25287);var inst_25294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25293,0,null);var inst_25295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25293,1,null);var state_25407__$1 = (function (){var statearr_25436 = state_25407;(statearr_25436[24] = inst_25294);
return statearr_25436;
})();if(cljs.core.truth_(inst_25295))
{var statearr_25437_25514 = state_25407__$1;(statearr_25437_25514[1] = 13);
} else
{var statearr_25438_25515 = state_25407__$1;(statearr_25438_25515[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 42))
{var state_25407__$1 = state_25407;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25407__$1,45,dchan);
} else
{if((state_val_25408 === 11))
{var inst_25304 = (state_25407[25]);var inst_25284 = (state_25407[17]);var inst_25304__$1 = cljs.core.seq(inst_25284);var state_25407__$1 = (function (){var statearr_25439 = state_25407;(statearr_25439[25] = inst_25304__$1);
return statearr_25439;
})();if(inst_25304__$1)
{var statearr_25440_25516 = state_25407__$1;(statearr_25440_25516[1] = 16);
} else
{var statearr_25441_25517 = state_25407__$1;(statearr_25441_25517[1] = 17);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 43))
{var state_25407__$1 = state_25407;var statearr_25442_25518 = state_25407__$1;(statearr_25442_25518[2] = null);
(statearr_25442_25518[1] = 44);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 12))
{var inst_25330 = (state_25407[2]);var state_25407__$1 = state_25407;var statearr_25443_25519 = state_25407__$1;(statearr_25443_25519[2] = inst_25330);
(statearr_25443_25519[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 44))
{var inst_25400 = (state_25407[2]);var state_25407__$1 = (function (){var statearr_25444 = state_25407;(statearr_25444[26] = inst_25400);
return statearr_25444;
})();var statearr_25445_25520 = state_25407__$1;(statearr_25445_25520[2] = null);
(statearr_25445_25520[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 13))
{var inst_25294 = (state_25407[24]);var inst_25297 = cljs.core.async.close_BANG_(inst_25294);var state_25407__$1 = state_25407;var statearr_25446_25521 = state_25407__$1;(statearr_25446_25521[2] = inst_25297);
(statearr_25446_25521[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 45))
{var inst_25397 = (state_25407[2]);var state_25407__$1 = state_25407;var statearr_25450_25522 = state_25407__$1;(statearr_25450_25522[2] = inst_25397);
(statearr_25450_25522[1] = 44);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 14))
{var state_25407__$1 = state_25407;var statearr_25451_25523 = state_25407__$1;(statearr_25451_25523[2] = null);
(statearr_25451_25523[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 15))
{var inst_25286 = (state_25407[14]);var inst_25287 = (state_25407[15]);var inst_25285 = (state_25407[16]);var inst_25284 = (state_25407[17]);var inst_25300 = (state_25407[2]);var inst_25301 = (inst_25287 + 1);var tmp25447 = inst_25286;var tmp25448 = inst_25285;var tmp25449 = inst_25284;var inst_25284__$1 = tmp25449;var inst_25285__$1 = tmp25448;var inst_25286__$1 = tmp25447;var inst_25287__$1 = inst_25301;var state_25407__$1 = (function (){var statearr_25452 = state_25407;(statearr_25452[27] = inst_25300);
(statearr_25452[14] = inst_25286__$1);
(statearr_25452[15] = inst_25287__$1);
(statearr_25452[16] = inst_25285__$1);
(statearr_25452[17] = inst_25284__$1);
return statearr_25452;
})();var statearr_25453_25524 = state_25407__$1;(statearr_25453_25524[2] = null);
(statearr_25453_25524[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 16))
{var inst_25304 = (state_25407[25]);var inst_25306 = cljs.core.chunked_seq_QMARK_(inst_25304);var state_25407__$1 = state_25407;if(inst_25306)
{var statearr_25454_25525 = state_25407__$1;(statearr_25454_25525[1] = 19);
} else
{var statearr_25455_25526 = state_25407__$1;(statearr_25455_25526[1] = 20);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 17))
{var state_25407__$1 = state_25407;var statearr_25456_25527 = state_25407__$1;(statearr_25456_25527[2] = null);
(statearr_25456_25527[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 18))
{var inst_25328 = (state_25407[2]);var state_25407__$1 = state_25407;var statearr_25457_25528 = state_25407__$1;(statearr_25457_25528[2] = inst_25328);
(statearr_25457_25528[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 19))
{var inst_25304 = (state_25407[25]);var inst_25308 = cljs.core.chunk_first(inst_25304);var inst_25309 = cljs.core.chunk_rest(inst_25304);var inst_25310 = cljs.core.count(inst_25308);var inst_25284 = inst_25309;var inst_25285 = inst_25308;var inst_25286 = inst_25310;var inst_25287 = 0;var state_25407__$1 = (function (){var statearr_25458 = state_25407;(statearr_25458[14] = inst_25286);
(statearr_25458[15] = inst_25287);
(statearr_25458[16] = inst_25285);
(statearr_25458[17] = inst_25284);
return statearr_25458;
})();var statearr_25459_25529 = state_25407__$1;(statearr_25459_25529[2] = null);
(statearr_25459_25529[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 20))
{var inst_25304 = (state_25407[25]);var inst_25314 = cljs.core.first(inst_25304);var inst_25315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25314,0,null);var inst_25316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25314,1,null);var state_25407__$1 = (function (){var statearr_25460 = state_25407;(statearr_25460[28] = inst_25315);
return statearr_25460;
})();if(cljs.core.truth_(inst_25316))
{var statearr_25461_25530 = state_25407__$1;(statearr_25461_25530[1] = 22);
} else
{var statearr_25462_25531 = state_25407__$1;(statearr_25462_25531[1] = 23);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 21))
{var inst_25325 = (state_25407[2]);var state_25407__$1 = state_25407;var statearr_25463_25532 = state_25407__$1;(statearr_25463_25532[2] = inst_25325);
(statearr_25463_25532[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 22))
{var inst_25315 = (state_25407[28]);var inst_25318 = cljs.core.async.close_BANG_(inst_25315);var state_25407__$1 = state_25407;var statearr_25464_25533 = state_25407__$1;(statearr_25464_25533[2] = inst_25318);
(statearr_25464_25533[1] = 24);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 23))
{var state_25407__$1 = state_25407;var statearr_25465_25534 = state_25407__$1;(statearr_25465_25534[2] = null);
(statearr_25465_25534[1] = 24);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 24))
{var inst_25304 = (state_25407[25]);var inst_25321 = (state_25407[2]);var inst_25322 = cljs.core.next(inst_25304);var inst_25284 = inst_25322;var inst_25285 = null;var inst_25286 = 0;var inst_25287 = 0;var state_25407__$1 = (function (){var statearr_25466 = state_25407;(statearr_25466[29] = inst_25321);
(statearr_25466[14] = inst_25286);
(statearr_25466[15] = inst_25287);
(statearr_25466[16] = inst_25285);
(statearr_25466[17] = inst_25284);
return statearr_25466;
})();var statearr_25467_25535 = state_25407__$1;(statearr_25467_25535[2] = null);
(statearr_25467_25535[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 25))
{var inst_25346 = (state_25407[10]);var inst_25345 = (state_25407[11]);var inst_25348 = (inst_25346 < inst_25345);var inst_25349 = inst_25348;var state_25407__$1 = state_25407;if(cljs.core.truth_(inst_25349))
{var statearr_25468_25536 = state_25407__$1;(statearr_25468_25536[1] = 27);
} else
{var statearr_25469_25537 = state_25407__$1;(statearr_25469_25537[1] = 28);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 26))
{var inst_25335 = (state_25407[19]);var inst_25393 = (state_25407[2]);var inst_25394 = cljs.core.seq(inst_25335);var state_25407__$1 = (function (){var statearr_25470 = state_25407;(statearr_25470[30] = inst_25393);
return statearr_25470;
})();if(inst_25394)
{var statearr_25471_25538 = state_25407__$1;(statearr_25471_25538[1] = 42);
} else
{var statearr_25472_25539 = state_25407__$1;(statearr_25472_25539[1] = 43);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 27))
{var inst_25346 = (state_25407[10]);var inst_25344 = (state_25407[13]);var inst_25351 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25344,inst_25346);var state_25407__$1 = (function (){var statearr_25473 = state_25407;(statearr_25473[8] = inst_25351);
return statearr_25473;
})();var statearr_25474_25540 = state_25407__$1;(statearr_25474_25540[2] = null);
(statearr_25474_25540[1] = 32);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 28))
{var inst_25343 = (state_25407[12]);var inst_25364 = (state_25407[9]);var inst_25364__$1 = cljs.core.seq(inst_25343);var state_25407__$1 = (function (){var statearr_25478 = state_25407;(statearr_25478[9] = inst_25364__$1);
return statearr_25478;
})();if(inst_25364__$1)
{var statearr_25479_25541 = state_25407__$1;(statearr_25479_25541[1] = 33);
} else
{var statearr_25480_25542 = state_25407__$1;(statearr_25480_25542[1] = 34);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 29))
{var inst_25391 = (state_25407[2]);var state_25407__$1 = state_25407;var statearr_25481_25543 = state_25407__$1;(statearr_25481_25543[2] = inst_25391);
(statearr_25481_25543[1] = 26);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 30))
{var inst_25346 = (state_25407[10]);var inst_25345 = (state_25407[11]);var inst_25343 = (state_25407[12]);var inst_25344 = (state_25407[13]);var inst_25360 = (state_25407[2]);var inst_25361 = (inst_25346 + 1);var tmp25475 = inst_25345;var tmp25476 = inst_25343;var tmp25477 = inst_25344;var inst_25343__$1 = tmp25476;var inst_25344__$1 = tmp25477;var inst_25345__$1 = tmp25475;var inst_25346__$1 = inst_25361;var state_25407__$1 = (function (){var statearr_25482 = state_25407;(statearr_25482[10] = inst_25346__$1);
(statearr_25482[11] = inst_25345__$1);
(statearr_25482[12] = inst_25343__$1);
(statearr_25482[13] = inst_25344__$1);
(statearr_25482[31] = inst_25360);
return statearr_25482;
})();var statearr_25483_25544 = state_25407__$1;(statearr_25483_25544[2] = null);
(statearr_25483_25544[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25408 === 31))
{var inst_25351 = (state_25407[8]);var inst_25352 = (state_25407[2]);var inst_25353 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25354 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25351);var state_25407__$1 = (function (){var statearr_25484 = state_25407;(statearr_25484[32] = inst_25352);
(statearr_25484[33] = inst_25353);
return statearr_25484;
})();var statearr_25485_25545 = state_25407__$1;(statearr_25485_25545[2] = inst_25354);
cljs.core.async.impl.ioc_helpers.process_exception(state_25407__$1);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_25489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25489[0] = state_machine__5507__auto__);
(statearr_25489[1] = 1);
return statearr_25489;
});
var state_machine__5507__auto____1 = (function (state_25407){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25407);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25490){if((e25490 instanceof Object))
{var ex__5510__auto__ = e25490;var statearr_25491_25546 = state_25407;(statearr_25491_25546[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25407);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e25490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__25547 = state_25407;
state_25407 = G__25547;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25407){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25492 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25493);
return statearr_25492;
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
cljs.core.async.Mix = (function (){var obj25549 = {};return obj25549;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,null,cljs.core.constant$keyword$256,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$257);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$256);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$257,chs);var pauses = pick(cljs.core.constant$keyword$255,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$258,solos,cljs.core.constant$keyword$259,pick(cljs.core.constant$keyword$256,chs),cljs.core.constant$keyword$260,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$255)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25659 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25660){
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
this.meta25660 = meta25660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25659.cljs$lang$type = true;
cljs.core.async.t25659.cljs$lang$ctorStr = "cljs.core.async/t25659";
cljs.core.async.t25659.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25659");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25659.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25659.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25659.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25659.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25659.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25659.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25659.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25659.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25661){var self__ = this;
var _25661__$1 = this;return self__.meta25660;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25661,meta25660__$1){var self__ = this;
var _25661__$1 = this;return (new cljs.core.async.t25659(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25660__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25659 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25659(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25660){return (new cljs.core.async.t25659(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25660));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25659(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25726){var state_val_25727 = (state_25726[1]);if((state_val_25727 === 1))
{var inst_25665 = (state_25726[7]);var inst_25665__$1 = calc_state();var inst_25666 = cljs.core.seq_QMARK_(inst_25665__$1);var state_25726__$1 = (function (){var statearr_25728 = state_25726;(statearr_25728[7] = inst_25665__$1);
return statearr_25728;
})();if(inst_25666)
{var statearr_25729_25769 = state_25726__$1;(statearr_25729_25769[1] = 2);
} else
{var statearr_25730_25770 = state_25726__$1;(statearr_25730_25770[1] = 3);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 2))
{var inst_25665 = (state_25726[7]);var inst_25668 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25665);var state_25726__$1 = state_25726;var statearr_25731_25771 = state_25726__$1;(statearr_25731_25771[2] = inst_25668);
(statearr_25731_25771[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 3))
{var inst_25665 = (state_25726[7]);var state_25726__$1 = state_25726;var statearr_25732_25772 = state_25726__$1;(statearr_25732_25772[2] = inst_25665);
(statearr_25732_25772[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 4))
{var inst_25665 = (state_25726[7]);var inst_25671 = (state_25726[2]);var inst_25672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25671,cljs.core.constant$keyword$260);var inst_25673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25671,cljs.core.constant$keyword$259);var inst_25674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25671,cljs.core.constant$keyword$258);var inst_25675 = inst_25665;var state_25726__$1 = (function (){var statearr_25733 = state_25726;(statearr_25733[8] = inst_25673);
(statearr_25733[9] = inst_25674);
(statearr_25733[10] = inst_25672);
(statearr_25733[11] = inst_25675);
return statearr_25733;
})();var statearr_25734_25773 = state_25726__$1;(statearr_25734_25773[2] = null);
(statearr_25734_25773[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 5))
{var inst_25675 = (state_25726[11]);var inst_25678 = cljs.core.seq_QMARK_(inst_25675);var state_25726__$1 = state_25726;if(inst_25678)
{var statearr_25735_25774 = state_25726__$1;(statearr_25735_25774[1] = 7);
} else
{var statearr_25736_25775 = state_25726__$1;(statearr_25736_25775[1] = 8);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 6))
{var inst_25724 = (state_25726[2]);var state_25726__$1 = state_25726;return cljs.core.async.impl.ioc_helpers.return_chan(state_25726__$1,inst_25724);
} else
{if((state_val_25727 === 7))
{var inst_25675 = (state_25726[11]);var inst_25680 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25675);var state_25726__$1 = state_25726;var statearr_25737_25776 = state_25726__$1;(statearr_25737_25776[2] = inst_25680);
(statearr_25737_25776[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 8))
{var inst_25675 = (state_25726[11]);var state_25726__$1 = state_25726;var statearr_25738_25777 = state_25726__$1;(statearr_25738_25777[2] = inst_25675);
(statearr_25738_25777[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 9))
{var inst_25683 = (state_25726[12]);var inst_25683__$1 = (state_25726[2]);var inst_25684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25683__$1,cljs.core.constant$keyword$260);var inst_25685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25683__$1,cljs.core.constant$keyword$259);var inst_25686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25683__$1,cljs.core.constant$keyword$258);var state_25726__$1 = (function (){var statearr_25739 = state_25726;(statearr_25739[13] = inst_25686);
(statearr_25739[14] = inst_25685);
(statearr_25739[12] = inst_25683__$1);
return statearr_25739;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25726__$1,10,inst_25684);
} else
{if((state_val_25727 === 10))
{var inst_25690 = (state_25726[15]);var inst_25691 = (state_25726[16]);var inst_25689 = (state_25726[2]);var inst_25690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25689,0,null);var inst_25691__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25689,1,null);var inst_25692 = (inst_25690__$1 == null);var inst_25693 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25691__$1,change);var inst_25694 = (inst_25692) || (inst_25693);var state_25726__$1 = (function (){var statearr_25740 = state_25726;(statearr_25740[15] = inst_25690__$1);
(statearr_25740[16] = inst_25691__$1);
return statearr_25740;
})();if(cljs.core.truth_(inst_25694))
{var statearr_25741_25778 = state_25726__$1;(statearr_25741_25778[1] = 11);
} else
{var statearr_25742_25779 = state_25726__$1;(statearr_25742_25779[1] = 12);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 11))
{var inst_25690 = (state_25726[15]);var inst_25696 = (inst_25690 == null);var state_25726__$1 = state_25726;if(cljs.core.truth_(inst_25696))
{var statearr_25743_25780 = state_25726__$1;(statearr_25743_25780[1] = 14);
} else
{var statearr_25744_25781 = state_25726__$1;(statearr_25744_25781[1] = 15);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 12))
{var inst_25705 = (state_25726[17]);var inst_25691 = (state_25726[16]);var inst_25686 = (state_25726[13]);var inst_25705__$1 = (inst_25686.cljs$core$IFn$_invoke$arity$1 ? inst_25686.cljs$core$IFn$_invoke$arity$1(inst_25691) : inst_25686.call(null,inst_25691));var state_25726__$1 = (function (){var statearr_25745 = state_25726;(statearr_25745[17] = inst_25705__$1);
return statearr_25745;
})();if(cljs.core.truth_(inst_25705__$1))
{var statearr_25746_25782 = state_25726__$1;(statearr_25746_25782[1] = 17);
} else
{var statearr_25747_25783 = state_25726__$1;(statearr_25747_25783[1] = 18);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 13))
{var inst_25722 = (state_25726[2]);var state_25726__$1 = state_25726;var statearr_25748_25784 = state_25726__$1;(statearr_25748_25784[2] = inst_25722);
(statearr_25748_25784[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 14))
{var inst_25691 = (state_25726[16]);var inst_25698 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25691);var state_25726__$1 = state_25726;var statearr_25749_25785 = state_25726__$1;(statearr_25749_25785[2] = inst_25698);
(statearr_25749_25785[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 15))
{var state_25726__$1 = state_25726;var statearr_25750_25786 = state_25726__$1;(statearr_25750_25786[2] = null);
(statearr_25750_25786[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 16))
{var inst_25701 = (state_25726[2]);var inst_25702 = calc_state();var inst_25675 = inst_25702;var state_25726__$1 = (function (){var statearr_25751 = state_25726;(statearr_25751[18] = inst_25701);
(statearr_25751[11] = inst_25675);
return statearr_25751;
})();var statearr_25752_25787 = state_25726__$1;(statearr_25752_25787[2] = null);
(statearr_25752_25787[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 17))
{var inst_25705 = (state_25726[17]);var state_25726__$1 = state_25726;var statearr_25753_25788 = state_25726__$1;(statearr_25753_25788[2] = inst_25705);
(statearr_25753_25788[1] = 19);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 18))
{var inst_25691 = (state_25726[16]);var inst_25686 = (state_25726[13]);var inst_25685 = (state_25726[14]);var inst_25708 = cljs.core.empty_QMARK_(inst_25686);var inst_25709 = (inst_25685.cljs$core$IFn$_invoke$arity$1 ? inst_25685.cljs$core$IFn$_invoke$arity$1(inst_25691) : inst_25685.call(null,inst_25691));var inst_25710 = cljs.core.not(inst_25709);var inst_25711 = (inst_25708) && (inst_25710);var state_25726__$1 = state_25726;var statearr_25754_25789 = state_25726__$1;(statearr_25754_25789[2] = inst_25711);
(statearr_25754_25789[1] = 19);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 19))
{var inst_25713 = (state_25726[2]);var state_25726__$1 = state_25726;if(cljs.core.truth_(inst_25713))
{var statearr_25755_25790 = state_25726__$1;(statearr_25755_25790[1] = 20);
} else
{var statearr_25756_25791 = state_25726__$1;(statearr_25756_25791[1] = 21);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 20))
{var inst_25690 = (state_25726[15]);var state_25726__$1 = state_25726;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25726__$1,23,out,inst_25690);
} else
{if((state_val_25727 === 21))
{var state_25726__$1 = state_25726;var statearr_25757_25792 = state_25726__$1;(statearr_25757_25792[2] = null);
(statearr_25757_25792[1] = 22);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 22))
{var inst_25683 = (state_25726[12]);var inst_25719 = (state_25726[2]);var inst_25675 = inst_25683;var state_25726__$1 = (function (){var statearr_25758 = state_25726;(statearr_25758[19] = inst_25719);
(statearr_25758[11] = inst_25675);
return statearr_25758;
})();var statearr_25759_25793 = state_25726__$1;(statearr_25759_25793[2] = null);
(statearr_25759_25793[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25727 === 23))
{var inst_25716 = (state_25726[2]);var state_25726__$1 = state_25726;var statearr_25760_25794 = state_25726__$1;(statearr_25760_25794[2] = inst_25716);
(statearr_25760_25794[1] = 22);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_25764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25764[0] = state_machine__5507__auto__);
(statearr_25764[1] = 1);
return statearr_25764;
});
var state_machine__5507__auto____1 = (function (state_25726){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25726);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25765){if((e25765 instanceof Object))
{var ex__5510__auto__ = e25765;var statearr_25766_25795 = state_25726;(statearr_25766_25795[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25726);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e25765;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__25796 = state_25726;
state_25726 = G__25796;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25726){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25767 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25768);
return statearr_25767;
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
cljs.core.async.Pub = (function (){var obj25798 = {};return obj25798;
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
return (function (p1__25799_SHARP_){if(cljs.core.truth_((p1__25799_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25799_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25799_SHARP_.call(null,topic))))
{return p1__25799_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25799_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25924 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25925){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25925 = meta25925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25924.cljs$lang$type = true;
cljs.core.async.t25924.cljs$lang$ctorStr = "cljs.core.async/t25924";
cljs.core.async.t25924.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25924");
});})(mults,ensure_mult))
;
cljs.core.async.t25924.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25924.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25924.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25924.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25926){var self__ = this;
var _25926__$1 = this;return self__.meta25925;
});})(mults,ensure_mult))
;
cljs.core.async.t25924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25926,meta25925__$1){var self__ = this;
var _25926__$1 = this;return (new cljs.core.async.t25924(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25925__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25924 = ((function (mults,ensure_mult){
return (function __GT_t25924(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25925){return (new cljs.core.async.t25924(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25925));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25924(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___26048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26000){var state_val_26001 = (state_26000[1]);if((state_val_26001 === 1))
{var state_26000__$1 = state_26000;var statearr_26002_26049 = state_26000__$1;(statearr_26002_26049[2] = null);
(statearr_26002_26049[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 2))
{var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26000__$1,4,ch);
} else
{if((state_val_26001 === 3))
{var inst_25998 = (state_26000[2]);var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.return_chan(state_26000__$1,inst_25998);
} else
{if((state_val_26001 === 4))
{var inst_25929 = (state_26000[7]);var inst_25929__$1 = (state_26000[2]);var inst_25930 = (inst_25929__$1 == null);var state_26000__$1 = (function (){var statearr_26003 = state_26000;(statearr_26003[7] = inst_25929__$1);
return statearr_26003;
})();if(cljs.core.truth_(inst_25930))
{var statearr_26004_26050 = state_26000__$1;(statearr_26004_26050[1] = 5);
} else
{var statearr_26005_26051 = state_26000__$1;(statearr_26005_26051[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 5))
{var inst_25936 = cljs.core.deref(mults);var inst_25937 = cljs.core.vals(inst_25936);var inst_25938 = cljs.core.seq(inst_25937);var inst_25939 = inst_25938;var inst_25940 = null;var inst_25941 = 0;var inst_25942 = 0;var state_26000__$1 = (function (){var statearr_26006 = state_26000;(statearr_26006[8] = inst_25942);
(statearr_26006[9] = inst_25941);
(statearr_26006[10] = inst_25940);
(statearr_26006[11] = inst_25939);
return statearr_26006;
})();var statearr_26007_26052 = state_26000__$1;(statearr_26007_26052[2] = null);
(statearr_26007_26052[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 6))
{var inst_25977 = (state_26000[12]);var inst_25979 = (state_26000[13]);var inst_25929 = (state_26000[7]);var inst_25977__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25929) : topic_fn.call(null,inst_25929));var inst_25978 = cljs.core.deref(mults);var inst_25979__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25978,inst_25977__$1);var state_26000__$1 = (function (){var statearr_26008 = state_26000;(statearr_26008[12] = inst_25977__$1);
(statearr_26008[13] = inst_25979__$1);
return statearr_26008;
})();if(cljs.core.truth_(inst_25979__$1))
{var statearr_26009_26053 = state_26000__$1;(statearr_26009_26053[1] = 19);
} else
{var statearr_26010_26054 = state_26000__$1;(statearr_26010_26054[1] = 20);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 7))
{var inst_25996 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26011_26055 = state_26000__$1;(statearr_26011_26055[2] = inst_25996);
(statearr_26011_26055[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 8))
{var inst_25942 = (state_26000[8]);var inst_25941 = (state_26000[9]);var inst_25944 = (inst_25942 < inst_25941);var inst_25945 = inst_25944;var state_26000__$1 = state_26000;if(cljs.core.truth_(inst_25945))
{var statearr_26015_26056 = state_26000__$1;(statearr_26015_26056[1] = 10);
} else
{var statearr_26016_26057 = state_26000__$1;(statearr_26016_26057[1] = 11);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 9))
{var inst_25975 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26017_26058 = state_26000__$1;(statearr_26017_26058[2] = inst_25975);
(statearr_26017_26058[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 10))
{var inst_25942 = (state_26000[8]);var inst_25941 = (state_26000[9]);var inst_25940 = (state_26000[10]);var inst_25939 = (state_26000[11]);var inst_25947 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25940,inst_25942);var inst_25948 = cljs.core.async.muxch_STAR_(inst_25947);var inst_25949 = cljs.core.async.close_BANG_(inst_25948);var inst_25950 = (inst_25942 + 1);var tmp26012 = inst_25941;var tmp26013 = inst_25940;var tmp26014 = inst_25939;var inst_25939__$1 = tmp26014;var inst_25940__$1 = tmp26013;var inst_25941__$1 = tmp26012;var inst_25942__$1 = inst_25950;var state_26000__$1 = (function (){var statearr_26018 = state_26000;(statearr_26018[14] = inst_25949);
(statearr_26018[8] = inst_25942__$1);
(statearr_26018[9] = inst_25941__$1);
(statearr_26018[10] = inst_25940__$1);
(statearr_26018[11] = inst_25939__$1);
return statearr_26018;
})();var statearr_26019_26059 = state_26000__$1;(statearr_26019_26059[2] = null);
(statearr_26019_26059[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 11))
{var inst_25939 = (state_26000[11]);var inst_25953 = (state_26000[15]);var inst_25953__$1 = cljs.core.seq(inst_25939);var state_26000__$1 = (function (){var statearr_26020 = state_26000;(statearr_26020[15] = inst_25953__$1);
return statearr_26020;
})();if(inst_25953__$1)
{var statearr_26021_26060 = state_26000__$1;(statearr_26021_26060[1] = 13);
} else
{var statearr_26022_26061 = state_26000__$1;(statearr_26022_26061[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 12))
{var inst_25973 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26023_26062 = state_26000__$1;(statearr_26023_26062[2] = inst_25973);
(statearr_26023_26062[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 13))
{var inst_25953 = (state_26000[15]);var inst_25955 = cljs.core.chunked_seq_QMARK_(inst_25953);var state_26000__$1 = state_26000;if(inst_25955)
{var statearr_26024_26063 = state_26000__$1;(statearr_26024_26063[1] = 16);
} else
{var statearr_26025_26064 = state_26000__$1;(statearr_26025_26064[1] = 17);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 14))
{var state_26000__$1 = state_26000;var statearr_26026_26065 = state_26000__$1;(statearr_26026_26065[2] = null);
(statearr_26026_26065[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 15))
{var inst_25971 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26027_26066 = state_26000__$1;(statearr_26027_26066[2] = inst_25971);
(statearr_26027_26066[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 16))
{var inst_25953 = (state_26000[15]);var inst_25957 = cljs.core.chunk_first(inst_25953);var inst_25958 = cljs.core.chunk_rest(inst_25953);var inst_25959 = cljs.core.count(inst_25957);var inst_25939 = inst_25958;var inst_25940 = inst_25957;var inst_25941 = inst_25959;var inst_25942 = 0;var state_26000__$1 = (function (){var statearr_26028 = state_26000;(statearr_26028[8] = inst_25942);
(statearr_26028[9] = inst_25941);
(statearr_26028[10] = inst_25940);
(statearr_26028[11] = inst_25939);
return statearr_26028;
})();var statearr_26029_26067 = state_26000__$1;(statearr_26029_26067[2] = null);
(statearr_26029_26067[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 17))
{var inst_25953 = (state_26000[15]);var inst_25962 = cljs.core.first(inst_25953);var inst_25963 = cljs.core.async.muxch_STAR_(inst_25962);var inst_25964 = cljs.core.async.close_BANG_(inst_25963);var inst_25965 = cljs.core.next(inst_25953);var inst_25939 = inst_25965;var inst_25940 = null;var inst_25941 = 0;var inst_25942 = 0;var state_26000__$1 = (function (){var statearr_26030 = state_26000;(statearr_26030[8] = inst_25942);
(statearr_26030[9] = inst_25941);
(statearr_26030[10] = inst_25940);
(statearr_26030[16] = inst_25964);
(statearr_26030[11] = inst_25939);
return statearr_26030;
})();var statearr_26031_26068 = state_26000__$1;(statearr_26031_26068[2] = null);
(statearr_26031_26068[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 18))
{var inst_25968 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26032_26069 = state_26000__$1;(statearr_26032_26069[2] = inst_25968);
(statearr_26032_26069[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 19))
{var state_26000__$1 = state_26000;var statearr_26033_26070 = state_26000__$1;(statearr_26033_26070[2] = null);
(statearr_26033_26070[1] = 24);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 20))
{var state_26000__$1 = state_26000;var statearr_26034_26071 = state_26000__$1;(statearr_26034_26071[2] = null);
(statearr_26034_26071[1] = 21);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 21))
{var inst_25993 = (state_26000[2]);var state_26000__$1 = (function (){var statearr_26035 = state_26000;(statearr_26035[17] = inst_25993);
return statearr_26035;
})();var statearr_26036_26072 = state_26000__$1;(statearr_26036_26072[2] = null);
(statearr_26036_26072[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 22))
{var inst_25990 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26037_26073 = state_26000__$1;(statearr_26037_26073[2] = inst_25990);
(statearr_26037_26073[1] = 21);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 23))
{var inst_25977 = (state_26000[12]);var inst_25981 = (state_26000[2]);var inst_25982 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25977);var state_26000__$1 = (function (){var statearr_26038 = state_26000;(statearr_26038[18] = inst_25981);
return statearr_26038;
})();var statearr_26039_26074 = state_26000__$1;(statearr_26039_26074[2] = inst_25982);
cljs.core.async.impl.ioc_helpers.process_exception(state_26000__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26001 === 24))
{var inst_25979 = (state_26000[13]);var inst_25929 = (state_26000[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26000,23,Object,null,22);var inst_25986 = cljs.core.async.muxch_STAR_(inst_25979);var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26000__$1,25,inst_25986,inst_25929);
} else
{if((state_val_26001 === 25))
{var inst_25988 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26040_26075 = state_26000__$1;(statearr_26040_26075[2] = inst_25988);
cljs.core.async.impl.ioc_helpers.process_exception(state_26000__$1);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26044[0] = state_machine__5507__auto__);
(statearr_26044[1] = 1);
return statearr_26044;
});
var state_machine__5507__auto____1 = (function (state_26000){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26000);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26045){if((e26045 instanceof Object))
{var ex__5510__auto__ = e26045;var statearr_26046_26076 = state_26000;(statearr_26046_26076[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26000);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26077 = state_26000;
state_26000 = G__26077;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26000){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26047 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26048);
return statearr_26047;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___26214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26184){var state_val_26185 = (state_26184[1]);if((state_val_26185 === 1))
{var state_26184__$1 = state_26184;var statearr_26186_26215 = state_26184__$1;(statearr_26186_26215[2] = null);
(statearr_26186_26215[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 2))
{var inst_26147 = cljs.core.reset_BANG_(dctr,cnt);var inst_26148 = 0;var state_26184__$1 = (function (){var statearr_26187 = state_26184;(statearr_26187[7] = inst_26147);
(statearr_26187[8] = inst_26148);
return statearr_26187;
})();var statearr_26188_26216 = state_26184__$1;(statearr_26188_26216[2] = null);
(statearr_26188_26216[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 3))
{var inst_26182 = (state_26184[2]);var state_26184__$1 = state_26184;return cljs.core.async.impl.ioc_helpers.return_chan(state_26184__$1,inst_26182);
} else
{if((state_val_26185 === 4))
{var inst_26148 = (state_26184[8]);var inst_26150 = (inst_26148 < cnt);var state_26184__$1 = state_26184;if(cljs.core.truth_(inst_26150))
{var statearr_26189_26217 = state_26184__$1;(statearr_26189_26217[1] = 6);
} else
{var statearr_26190_26218 = state_26184__$1;(statearr_26190_26218[1] = 7);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 5))
{var inst_26168 = (state_26184[2]);var state_26184__$1 = (function (){var statearr_26191 = state_26184;(statearr_26191[9] = inst_26168);
return statearr_26191;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26184__$1,12,dchan);
} else
{if((state_val_26185 === 6))
{var state_26184__$1 = state_26184;var statearr_26192_26219 = state_26184__$1;(statearr_26192_26219[2] = null);
(statearr_26192_26219[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 7))
{var state_26184__$1 = state_26184;var statearr_26193_26220 = state_26184__$1;(statearr_26193_26220[2] = null);
(statearr_26193_26220[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 8))
{var inst_26166 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26194_26221 = state_26184__$1;(statearr_26194_26221[2] = inst_26166);
(statearr_26194_26221[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 9))
{var inst_26148 = (state_26184[8]);var inst_26161 = (state_26184[2]);var inst_26162 = (inst_26148 + 1);var inst_26148__$1 = inst_26162;var state_26184__$1 = (function (){var statearr_26195 = state_26184;(statearr_26195[10] = inst_26161);
(statearr_26195[8] = inst_26148__$1);
return statearr_26195;
})();var statearr_26196_26222 = state_26184__$1;(statearr_26196_26222[2] = null);
(statearr_26196_26222[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 10))
{var inst_26152 = (state_26184[2]);var inst_26153 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26184__$1 = (function (){var statearr_26197 = state_26184;(statearr_26197[11] = inst_26152);
return statearr_26197;
})();var statearr_26198_26223 = state_26184__$1;(statearr_26198_26223[2] = inst_26153);
cljs.core.async.impl.ioc_helpers.process_exception(state_26184__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 11))
{var inst_26148 = (state_26184[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26184,10,Object,null,9);var inst_26157 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26148) : chs__$1.call(null,inst_26148));var inst_26158 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26148) : done.call(null,inst_26148));var inst_26159 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26157,inst_26158);var state_26184__$1 = state_26184;var statearr_26199_26224 = state_26184__$1;(statearr_26199_26224[2] = inst_26159);
cljs.core.async.impl.ioc_helpers.process_exception(state_26184__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 12))
{var inst_26170 = (state_26184[12]);var inst_26170__$1 = (state_26184[2]);var inst_26171 = cljs.core.some(cljs.core.nil_QMARK_,inst_26170__$1);var state_26184__$1 = (function (){var statearr_26200 = state_26184;(statearr_26200[12] = inst_26170__$1);
return statearr_26200;
})();if(cljs.core.truth_(inst_26171))
{var statearr_26201_26225 = state_26184__$1;(statearr_26201_26225[1] = 13);
} else
{var statearr_26202_26226 = state_26184__$1;(statearr_26202_26226[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 13))
{var inst_26173 = cljs.core.async.close_BANG_(out);var state_26184__$1 = state_26184;var statearr_26203_26227 = state_26184__$1;(statearr_26203_26227[2] = inst_26173);
(statearr_26203_26227[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 14))
{var inst_26170 = (state_26184[12]);var inst_26175 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26170);var state_26184__$1 = state_26184;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26184__$1,16,out,inst_26175);
} else
{if((state_val_26185 === 15))
{var inst_26180 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26204_26228 = state_26184__$1;(statearr_26204_26228[2] = inst_26180);
(statearr_26204_26228[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26185 === 16))
{var inst_26177 = (state_26184[2]);var state_26184__$1 = (function (){var statearr_26205 = state_26184;(statearr_26205[13] = inst_26177);
return statearr_26205;
})();var statearr_26206_26229 = state_26184__$1;(statearr_26206_26229[2] = null);
(statearr_26206_26229[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26210[0] = state_machine__5507__auto__);
(statearr_26210[1] = 1);
return statearr_26210;
});
var state_machine__5507__auto____1 = (function (state_26184){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26184);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26211){if((e26211 instanceof Object))
{var ex__5510__auto__ = e26211;var statearr_26212_26230 = state_26184;(statearr_26212_26230[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26184);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26231 = state_26184;
state_26184 = G__26231;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26184){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26213 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26214);
return statearr_26213;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26315){var state_val_26316 = (state_26315[1]);if((state_val_26316 === 1))
{var inst_26286 = cljs.core.vec(chs);var inst_26287 = inst_26286;var state_26315__$1 = (function (){var statearr_26317 = state_26315;(statearr_26317[7] = inst_26287);
return statearr_26317;
})();var statearr_26318_26340 = state_26315__$1;(statearr_26318_26340[2] = null);
(statearr_26318_26340[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26316 === 2))
{var inst_26287 = (state_26315[7]);var inst_26289 = cljs.core.count(inst_26287);var inst_26290 = (inst_26289 > 0);var state_26315__$1 = state_26315;if(cljs.core.truth_(inst_26290))
{var statearr_26319_26341 = state_26315__$1;(statearr_26319_26341[1] = 4);
} else
{var statearr_26320_26342 = state_26315__$1;(statearr_26320_26342[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26316 === 3))
{var inst_26313 = (state_26315[2]);var state_26315__$1 = state_26315;return cljs.core.async.impl.ioc_helpers.return_chan(state_26315__$1,inst_26313);
} else
{if((state_val_26316 === 4))
{var inst_26287 = (state_26315[7]);var state_26315__$1 = state_26315;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26315__$1,7,inst_26287);
} else
{if((state_val_26316 === 5))
{var inst_26309 = cljs.core.async.close_BANG_(out);var state_26315__$1 = state_26315;var statearr_26321_26343 = state_26315__$1;(statearr_26321_26343[2] = inst_26309);
(statearr_26321_26343[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26316 === 6))
{var inst_26311 = (state_26315[2]);var state_26315__$1 = state_26315;var statearr_26322_26344 = state_26315__$1;(statearr_26322_26344[2] = inst_26311);
(statearr_26322_26344[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26316 === 7))
{var inst_26295 = (state_26315[8]);var inst_26294 = (state_26315[9]);var inst_26294__$1 = (state_26315[2]);var inst_26295__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26294__$1,0,null);var inst_26296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26294__$1,1,null);var inst_26297 = (inst_26295__$1 == null);var state_26315__$1 = (function (){var statearr_26323 = state_26315;(statearr_26323[8] = inst_26295__$1);
(statearr_26323[9] = inst_26294__$1);
(statearr_26323[10] = inst_26296);
return statearr_26323;
})();if(cljs.core.truth_(inst_26297))
{var statearr_26324_26345 = state_26315__$1;(statearr_26324_26345[1] = 8);
} else
{var statearr_26325_26346 = state_26315__$1;(statearr_26325_26346[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26316 === 8))
{var inst_26287 = (state_26315[7]);var inst_26295 = (state_26315[8]);var inst_26294 = (state_26315[9]);var inst_26296 = (state_26315[10]);var inst_26299 = (function (){var c = inst_26296;var v = inst_26295;var vec__26292 = inst_26294;var cs = inst_26287;return ((function (c,v,vec__26292,cs,inst_26287,inst_26295,inst_26294,inst_26296,state_val_26316){
return (function (p1__26232_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26232_SHARP_);
});
;})(c,v,vec__26292,cs,inst_26287,inst_26295,inst_26294,inst_26296,state_val_26316))
})();var inst_26300 = cljs.core.filterv(inst_26299,inst_26287);var inst_26287__$1 = inst_26300;var state_26315__$1 = (function (){var statearr_26326 = state_26315;(statearr_26326[7] = inst_26287__$1);
return statearr_26326;
})();var statearr_26327_26347 = state_26315__$1;(statearr_26327_26347[2] = null);
(statearr_26327_26347[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26316 === 9))
{var inst_26295 = (state_26315[8]);var state_26315__$1 = state_26315;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26315__$1,11,out,inst_26295);
} else
{if((state_val_26316 === 10))
{var inst_26307 = (state_26315[2]);var state_26315__$1 = state_26315;var statearr_26329_26348 = state_26315__$1;(statearr_26329_26348[2] = inst_26307);
(statearr_26329_26348[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26316 === 11))
{var inst_26287 = (state_26315[7]);var inst_26304 = (state_26315[2]);var tmp26328 = inst_26287;var inst_26287__$1 = tmp26328;var state_26315__$1 = (function (){var statearr_26330 = state_26315;(statearr_26330[11] = inst_26304);
(statearr_26330[7] = inst_26287__$1);
return statearr_26330;
})();var statearr_26331_26349 = state_26315__$1;(statearr_26331_26349[2] = null);
(statearr_26331_26349[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26335 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26335[0] = state_machine__5507__auto__);
(statearr_26335[1] = 1);
return statearr_26335;
});
var state_machine__5507__auto____1 = (function (state_26315){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26315);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26336){if((e26336 instanceof Object))
{var ex__5510__auto__ = e26336;var statearr_26337_26350 = state_26315;(statearr_26337_26350[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26315);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26351 = state_26315;
state_26315 = G__26351;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26315){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26338 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26339);
return statearr_26338;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26421){var state_val_26422 = (state_26421[1]);if((state_val_26422 === 1))
{var inst_26398 = 0;var state_26421__$1 = (function (){var statearr_26423 = state_26421;(statearr_26423[7] = inst_26398);
return statearr_26423;
})();var statearr_26424_26445 = state_26421__$1;(statearr_26424_26445[2] = null);
(statearr_26424_26445[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26422 === 2))
{var inst_26398 = (state_26421[7]);var inst_26400 = (inst_26398 < n);var state_26421__$1 = state_26421;if(cljs.core.truth_(inst_26400))
{var statearr_26425_26446 = state_26421__$1;(statearr_26425_26446[1] = 4);
} else
{var statearr_26426_26447 = state_26421__$1;(statearr_26426_26447[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26422 === 3))
{var inst_26418 = (state_26421[2]);var inst_26419 = cljs.core.async.close_BANG_(out);var state_26421__$1 = (function (){var statearr_26427 = state_26421;(statearr_26427[8] = inst_26418);
return statearr_26427;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26421__$1,inst_26419);
} else
{if((state_val_26422 === 4))
{var state_26421__$1 = state_26421;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26421__$1,7,ch);
} else
{if((state_val_26422 === 5))
{var state_26421__$1 = state_26421;var statearr_26428_26448 = state_26421__$1;(statearr_26428_26448[2] = null);
(statearr_26428_26448[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26422 === 6))
{var inst_26416 = (state_26421[2]);var state_26421__$1 = state_26421;var statearr_26429_26449 = state_26421__$1;(statearr_26429_26449[2] = inst_26416);
(statearr_26429_26449[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26422 === 7))
{var inst_26403 = (state_26421[9]);var inst_26403__$1 = (state_26421[2]);var inst_26404 = (inst_26403__$1 == null);var inst_26405 = cljs.core.not(inst_26404);var state_26421__$1 = (function (){var statearr_26430 = state_26421;(statearr_26430[9] = inst_26403__$1);
return statearr_26430;
})();if(inst_26405)
{var statearr_26431_26450 = state_26421__$1;(statearr_26431_26450[1] = 8);
} else
{var statearr_26432_26451 = state_26421__$1;(statearr_26432_26451[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26422 === 8))
{var inst_26403 = (state_26421[9]);var state_26421__$1 = state_26421;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26421__$1,11,out,inst_26403);
} else
{if((state_val_26422 === 9))
{var state_26421__$1 = state_26421;var statearr_26433_26452 = state_26421__$1;(statearr_26433_26452[2] = null);
(statearr_26433_26452[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26422 === 10))
{var inst_26413 = (state_26421[2]);var state_26421__$1 = state_26421;var statearr_26434_26453 = state_26421__$1;(statearr_26434_26453[2] = inst_26413);
(statearr_26434_26453[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26422 === 11))
{var inst_26398 = (state_26421[7]);var inst_26408 = (state_26421[2]);var inst_26409 = (inst_26398 + 1);var inst_26398__$1 = inst_26409;var state_26421__$1 = (function (){var statearr_26435 = state_26421;(statearr_26435[7] = inst_26398__$1);
(statearr_26435[10] = inst_26408);
return statearr_26435;
})();var statearr_26436_26454 = state_26421__$1;(statearr_26436_26454[2] = null);
(statearr_26436_26454[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26440 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26440[0] = state_machine__5507__auto__);
(statearr_26440[1] = 1);
return statearr_26440;
});
var state_machine__5507__auto____1 = (function (state_26421){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26421);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26441){if((e26441 instanceof Object))
{var ex__5510__auto__ = e26441;var statearr_26442_26455 = state_26421;(statearr_26442_26455[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26421);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26456 = state_26421;
state_26421 = G__26456;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26421){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26443 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26444);
return statearr_26443;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26528){var state_val_26529 = (state_26528[1]);if((state_val_26529 === 1))
{var inst_26505 = null;var state_26528__$1 = (function (){var statearr_26530 = state_26528;(statearr_26530[7] = inst_26505);
return statearr_26530;
})();var statearr_26531_26554 = state_26528__$1;(statearr_26531_26554[2] = null);
(statearr_26531_26554[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26529 === 2))
{var state_26528__$1 = state_26528;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26528__$1,4,ch);
} else
{if((state_val_26529 === 3))
{var inst_26525 = (state_26528[2]);var inst_26526 = cljs.core.async.close_BANG_(out);var state_26528__$1 = (function (){var statearr_26532 = state_26528;(statearr_26532[8] = inst_26525);
return statearr_26532;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26528__$1,inst_26526);
} else
{if((state_val_26529 === 4))
{var inst_26508 = (state_26528[9]);var inst_26508__$1 = (state_26528[2]);var inst_26509 = (inst_26508__$1 == null);var inst_26510 = cljs.core.not(inst_26509);var state_26528__$1 = (function (){var statearr_26533 = state_26528;(statearr_26533[9] = inst_26508__$1);
return statearr_26533;
})();if(inst_26510)
{var statearr_26534_26555 = state_26528__$1;(statearr_26534_26555[1] = 5);
} else
{var statearr_26535_26556 = state_26528__$1;(statearr_26535_26556[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26529 === 5))
{var inst_26505 = (state_26528[7]);var inst_26508 = (state_26528[9]);var inst_26512 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26508,inst_26505);var state_26528__$1 = state_26528;if(inst_26512)
{var statearr_26536_26557 = state_26528__$1;(statearr_26536_26557[1] = 8);
} else
{var statearr_26537_26558 = state_26528__$1;(statearr_26537_26558[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26529 === 6))
{var state_26528__$1 = state_26528;var statearr_26539_26559 = state_26528__$1;(statearr_26539_26559[2] = null);
(statearr_26539_26559[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26529 === 7))
{var inst_26523 = (state_26528[2]);var state_26528__$1 = state_26528;var statearr_26540_26560 = state_26528__$1;(statearr_26540_26560[2] = inst_26523);
(statearr_26540_26560[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26529 === 8))
{var inst_26505 = (state_26528[7]);var tmp26538 = inst_26505;var inst_26505__$1 = tmp26538;var state_26528__$1 = (function (){var statearr_26541 = state_26528;(statearr_26541[7] = inst_26505__$1);
return statearr_26541;
})();var statearr_26542_26561 = state_26528__$1;(statearr_26542_26561[2] = null);
(statearr_26542_26561[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26529 === 9))
{var inst_26508 = (state_26528[9]);var state_26528__$1 = state_26528;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26528__$1,11,out,inst_26508);
} else
{if((state_val_26529 === 10))
{var inst_26520 = (state_26528[2]);var state_26528__$1 = state_26528;var statearr_26543_26562 = state_26528__$1;(statearr_26543_26562[2] = inst_26520);
(statearr_26543_26562[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26529 === 11))
{var inst_26508 = (state_26528[9]);var inst_26517 = (state_26528[2]);var inst_26505 = inst_26508;var state_26528__$1 = (function (){var statearr_26544 = state_26528;(statearr_26544[7] = inst_26505);
(statearr_26544[10] = inst_26517);
return statearr_26544;
})();var statearr_26545_26563 = state_26528__$1;(statearr_26545_26563[2] = null);
(statearr_26545_26563[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26549 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26549[0] = state_machine__5507__auto__);
(statearr_26549[1] = 1);
return statearr_26549;
});
var state_machine__5507__auto____1 = (function (state_26528){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26528);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26550){if((e26550 instanceof Object))
{var ex__5510__auto__ = e26550;var statearr_26551_26564 = state_26528;(statearr_26551_26564[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26528);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26565 = state_26528;
state_26528 = G__26565;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26528){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26552 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26553);
return statearr_26552;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26670){var state_val_26671 = (state_26670[1]);if((state_val_26671 === 1))
{var inst_26633 = (new Array(n));var inst_26634 = inst_26633;var inst_26635 = 0;var state_26670__$1 = (function (){var statearr_26672 = state_26670;(statearr_26672[7] = inst_26635);
(statearr_26672[8] = inst_26634);
return statearr_26672;
})();var statearr_26673_26701 = state_26670__$1;(statearr_26673_26701[2] = null);
(statearr_26673_26701[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 2))
{var state_26670__$1 = state_26670;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26670__$1,4,ch);
} else
{if((state_val_26671 === 3))
{var inst_26668 = (state_26670[2]);var state_26670__$1 = state_26670;return cljs.core.async.impl.ioc_helpers.return_chan(state_26670__$1,inst_26668);
} else
{if((state_val_26671 === 4))
{var inst_26638 = (state_26670[9]);var inst_26638__$1 = (state_26670[2]);var inst_26639 = (inst_26638__$1 == null);var inst_26640 = cljs.core.not(inst_26639);var state_26670__$1 = (function (){var statearr_26674 = state_26670;(statearr_26674[9] = inst_26638__$1);
return statearr_26674;
})();if(inst_26640)
{var statearr_26675_26702 = state_26670__$1;(statearr_26675_26702[1] = 5);
} else
{var statearr_26676_26703 = state_26670__$1;(statearr_26676_26703[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 5))
{var inst_26635 = (state_26670[7]);var inst_26634 = (state_26670[8]);var inst_26638 = (state_26670[9]);var inst_26643 = (state_26670[10]);var inst_26642 = (inst_26634[inst_26635] = inst_26638);var inst_26643__$1 = (inst_26635 + 1);var inst_26644 = (inst_26643__$1 < n);var state_26670__$1 = (function (){var statearr_26677 = state_26670;(statearr_26677[11] = inst_26642);
(statearr_26677[10] = inst_26643__$1);
return statearr_26677;
})();if(cljs.core.truth_(inst_26644))
{var statearr_26678_26704 = state_26670__$1;(statearr_26678_26704[1] = 8);
} else
{var statearr_26679_26705 = state_26670__$1;(statearr_26679_26705[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 6))
{var inst_26635 = (state_26670[7]);var inst_26656 = (inst_26635 > 0);var state_26670__$1 = state_26670;if(cljs.core.truth_(inst_26656))
{var statearr_26681_26706 = state_26670__$1;(statearr_26681_26706[1] = 12);
} else
{var statearr_26682_26707 = state_26670__$1;(statearr_26682_26707[1] = 13);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 7))
{var inst_26666 = (state_26670[2]);var state_26670__$1 = state_26670;var statearr_26683_26708 = state_26670__$1;(statearr_26683_26708[2] = inst_26666);
(statearr_26683_26708[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 8))
{var inst_26634 = (state_26670[8]);var inst_26643 = (state_26670[10]);var tmp26680 = inst_26634;var inst_26634__$1 = tmp26680;var inst_26635 = inst_26643;var state_26670__$1 = (function (){var statearr_26684 = state_26670;(statearr_26684[7] = inst_26635);
(statearr_26684[8] = inst_26634__$1);
return statearr_26684;
})();var statearr_26685_26709 = state_26670__$1;(statearr_26685_26709[2] = null);
(statearr_26685_26709[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 9))
{var inst_26634 = (state_26670[8]);var inst_26648 = cljs.core.vec(inst_26634);var state_26670__$1 = state_26670;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26670__$1,11,out,inst_26648);
} else
{if((state_val_26671 === 10))
{var inst_26654 = (state_26670[2]);var state_26670__$1 = state_26670;var statearr_26686_26710 = state_26670__$1;(statearr_26686_26710[2] = inst_26654);
(statearr_26686_26710[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 11))
{var inst_26650 = (state_26670[2]);var inst_26651 = (new Array(n));var inst_26634 = inst_26651;var inst_26635 = 0;var state_26670__$1 = (function (){var statearr_26687 = state_26670;(statearr_26687[7] = inst_26635);
(statearr_26687[8] = inst_26634);
(statearr_26687[12] = inst_26650);
return statearr_26687;
})();var statearr_26688_26711 = state_26670__$1;(statearr_26688_26711[2] = null);
(statearr_26688_26711[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 12))
{var inst_26634 = (state_26670[8]);var inst_26658 = cljs.core.vec(inst_26634);var state_26670__$1 = state_26670;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26670__$1,15,out,inst_26658);
} else
{if((state_val_26671 === 13))
{var state_26670__$1 = state_26670;var statearr_26689_26712 = state_26670__$1;(statearr_26689_26712[2] = null);
(statearr_26689_26712[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 14))
{var inst_26663 = (state_26670[2]);var inst_26664 = cljs.core.async.close_BANG_(out);var state_26670__$1 = (function (){var statearr_26690 = state_26670;(statearr_26690[13] = inst_26663);
return statearr_26690;
})();var statearr_26691_26713 = state_26670__$1;(statearr_26691_26713[2] = inst_26664);
(statearr_26691_26713[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26671 === 15))
{var inst_26660 = (state_26670[2]);var state_26670__$1 = state_26670;var statearr_26692_26714 = state_26670__$1;(statearr_26692_26714[2] = inst_26660);
(statearr_26692_26714[1] = 14);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26696[0] = state_machine__5507__auto__);
(statearr_26696[1] = 1);
return statearr_26696;
});
var state_machine__5507__auto____1 = (function (state_26670){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26670);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26697){if((e26697 instanceof Object))
{var ex__5510__auto__ = e26697;var statearr_26698_26715 = state_26670;(statearr_26698_26715[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26670);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26716 = state_26670;
state_26670 = G__26716;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26670){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26699 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26700);
return statearr_26699;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26829){var state_val_26830 = (state_26829[1]);if((state_val_26830 === 1))
{var inst_26788 = [];var inst_26789 = inst_26788;var inst_26790 = cljs.core.constant$keyword$261;var state_26829__$1 = (function (){var statearr_26831 = state_26829;(statearr_26831[7] = inst_26789);
(statearr_26831[8] = inst_26790);
return statearr_26831;
})();var statearr_26832_26860 = state_26829__$1;(statearr_26832_26860[2] = null);
(statearr_26832_26860[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 2))
{var state_26829__$1 = state_26829;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26829__$1,4,ch);
} else
{if((state_val_26830 === 3))
{var inst_26827 = (state_26829[2]);var state_26829__$1 = state_26829;return cljs.core.async.impl.ioc_helpers.return_chan(state_26829__$1,inst_26827);
} else
{if((state_val_26830 === 4))
{var inst_26793 = (state_26829[9]);var inst_26793__$1 = (state_26829[2]);var inst_26794 = (inst_26793__$1 == null);var inst_26795 = cljs.core.not(inst_26794);var state_26829__$1 = (function (){var statearr_26833 = state_26829;(statearr_26833[9] = inst_26793__$1);
return statearr_26833;
})();if(inst_26795)
{var statearr_26834_26861 = state_26829__$1;(statearr_26834_26861[1] = 5);
} else
{var statearr_26835_26862 = state_26829__$1;(statearr_26835_26862[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 5))
{var inst_26797 = (state_26829[10]);var inst_26793 = (state_26829[9]);var inst_26790 = (state_26829[8]);var inst_26797__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26793) : f.call(null,inst_26793));var inst_26798 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26797__$1,inst_26790);var inst_26799 = cljs.core.keyword_identical_QMARK_(inst_26790,cljs.core.constant$keyword$261);var inst_26800 = (inst_26798) || (inst_26799);var state_26829__$1 = (function (){var statearr_26836 = state_26829;(statearr_26836[10] = inst_26797__$1);
return statearr_26836;
})();if(cljs.core.truth_(inst_26800))
{var statearr_26837_26863 = state_26829__$1;(statearr_26837_26863[1] = 8);
} else
{var statearr_26838_26864 = state_26829__$1;(statearr_26838_26864[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 6))
{var inst_26789 = (state_26829[7]);var inst_26814 = inst_26789.length;var inst_26815 = (inst_26814 > 0);var state_26829__$1 = state_26829;if(cljs.core.truth_(inst_26815))
{var statearr_26840_26865 = state_26829__$1;(statearr_26840_26865[1] = 12);
} else
{var statearr_26841_26866 = state_26829__$1;(statearr_26841_26866[1] = 13);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 7))
{var inst_26825 = (state_26829[2]);var state_26829__$1 = state_26829;var statearr_26842_26867 = state_26829__$1;(statearr_26842_26867[2] = inst_26825);
(statearr_26842_26867[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 8))
{var inst_26797 = (state_26829[10]);var inst_26793 = (state_26829[9]);var inst_26789 = (state_26829[7]);var inst_26802 = inst_26789.push(inst_26793);var tmp26839 = inst_26789;var inst_26789__$1 = tmp26839;var inst_26790 = inst_26797;var state_26829__$1 = (function (){var statearr_26843 = state_26829;(statearr_26843[7] = inst_26789__$1);
(statearr_26843[8] = inst_26790);
(statearr_26843[11] = inst_26802);
return statearr_26843;
})();var statearr_26844_26868 = state_26829__$1;(statearr_26844_26868[2] = null);
(statearr_26844_26868[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 9))
{var inst_26789 = (state_26829[7]);var inst_26805 = cljs.core.vec(inst_26789);var state_26829__$1 = state_26829;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26829__$1,11,out,inst_26805);
} else
{if((state_val_26830 === 10))
{var inst_26812 = (state_26829[2]);var state_26829__$1 = state_26829;var statearr_26845_26869 = state_26829__$1;(statearr_26845_26869[2] = inst_26812);
(statearr_26845_26869[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 11))
{var inst_26797 = (state_26829[10]);var inst_26793 = (state_26829[9]);var inst_26807 = (state_26829[2]);var inst_26808 = [];var inst_26809 = inst_26808.push(inst_26793);var inst_26789 = inst_26808;var inst_26790 = inst_26797;var state_26829__$1 = (function (){var statearr_26846 = state_26829;(statearr_26846[12] = inst_26807);
(statearr_26846[7] = inst_26789);
(statearr_26846[8] = inst_26790);
(statearr_26846[13] = inst_26809);
return statearr_26846;
})();var statearr_26847_26870 = state_26829__$1;(statearr_26847_26870[2] = null);
(statearr_26847_26870[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 12))
{var inst_26789 = (state_26829[7]);var inst_26817 = cljs.core.vec(inst_26789);var state_26829__$1 = state_26829;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26829__$1,15,out,inst_26817);
} else
{if((state_val_26830 === 13))
{var state_26829__$1 = state_26829;var statearr_26848_26871 = state_26829__$1;(statearr_26848_26871[2] = null);
(statearr_26848_26871[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 14))
{var inst_26822 = (state_26829[2]);var inst_26823 = cljs.core.async.close_BANG_(out);var state_26829__$1 = (function (){var statearr_26849 = state_26829;(statearr_26849[14] = inst_26822);
return statearr_26849;
})();var statearr_26850_26872 = state_26829__$1;(statearr_26850_26872[2] = inst_26823);
(statearr_26850_26872[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26830 === 15))
{var inst_26819 = (state_26829[2]);var state_26829__$1 = state_26829;var statearr_26851_26873 = state_26829__$1;(statearr_26851_26873[2] = inst_26819);
(statearr_26851_26873[1] = 14);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_26855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26855[0] = state_machine__5507__auto__);
(statearr_26855[1] = 1);
return statearr_26855;
});
var state_machine__5507__auto____1 = (function (state_26829){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26829);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26856){if((e26856 instanceof Object))
{var ex__5510__auto__ = e26856;var statearr_26857_26874 = state_26829;(statearr_26857_26874[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26829);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26875 = state_26829;
state_26829 = G__26875;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26829){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26858 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26859);
return statearr_26858;
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
