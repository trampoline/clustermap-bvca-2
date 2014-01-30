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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23097 = (function (f,fn_handler,meta23098){
this.f = f;
this.fn_handler = fn_handler;
this.meta23098 = meta23098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23097.cljs$lang$type = true;
cljs.core.async.t23097.cljs$lang$ctorStr = "cljs.core.async/t23097";
cljs.core.async.t23097.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23097");
});
cljs.core.async.t23097.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23099){var self__ = this;
var _23099__$1 = this;return self__.meta23098;
});
cljs.core.async.t23097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23099,meta23098__$1){var self__ = this;
var _23099__$1 = this;return (new cljs.core.async.t23097(self__.f,self__.fn_handler,meta23098__$1));
});
cljs.core.async.__GT_t23097 = (function __GT_t23097(f__$1,fn_handler__$1,meta23098){return (new cljs.core.async.t23097(f__$1,fn_handler__$1,meta23098));
});
}
return (new cljs.core.async.t23097(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23101 = buff;if(G__23101)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23101.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23101.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23101);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23101);
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
{var val_23102 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23102) : fn1.call(null,val_23102));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23102) : fn1.call(null,val_23102));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23103 = n;var x_23104 = 0;while(true){
if((x_23104 < n__4248__auto___23103))
{(a[x_23104] = 0);
{
var G__23105 = (x_23104 + 1);
x_23104 = G__23105;
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
var G__23106 = (i + 1);
i = G__23106;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23110 = (function (flag,alt_flag,meta23111){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23111 = meta23111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23110.cljs$lang$type = true;
cljs.core.async.t23110.cljs$lang$ctorStr = "cljs.core.async/t23110";
cljs.core.async.t23110.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23110");
});
cljs.core.async.t23110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23112){var self__ = this;
var _23112__$1 = this;return self__.meta23111;
});
cljs.core.async.t23110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23112,meta23111__$1){var self__ = this;
var _23112__$1 = this;return (new cljs.core.async.t23110(self__.flag,self__.alt_flag,meta23111__$1));
});
cljs.core.async.__GT_t23110 = (function __GT_t23110(flag__$1,alt_flag__$1,meta23111){return (new cljs.core.async.t23110(flag__$1,alt_flag__$1,meta23111));
});
}
return (new cljs.core.async.t23110(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23116 = (function (cb,flag,alt_handler,meta23117){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23117 = meta23117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23116.cljs$lang$type = true;
cljs.core.async.t23116.cljs$lang$ctorStr = "cljs.core.async/t23116";
cljs.core.async.t23116.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23116");
});
cljs.core.async.t23116.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23118){var self__ = this;
var _23118__$1 = this;return self__.meta23117;
});
cljs.core.async.t23116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23118,meta23117__$1){var self__ = this;
var _23118__$1 = this;return (new cljs.core.async.t23116(self__.cb,self__.flag,self__.alt_handler,meta23117__$1));
});
cljs.core.async.__GT_t23116 = (function __GT_t23116(cb__$1,flag__$1,alt_handler__$1,meta23117){return (new cljs.core.async.t23116(cb__$1,flag__$1,alt_handler__$1,meta23117));
});
}
return (new cljs.core.async.t23116(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23119_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23119_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23119_SHARP_,port], null)));
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
var G__23120 = (i + 1);
i = G__23120;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$190))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$190], null));
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
var alts_BANG___delegate = function (ports,p__23121){var map__23123 = p__23121;var map__23123__$1 = ((cljs.core.seq_QMARK_(map__23123))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23123):map__23123);var opts = map__23123__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23121 = null;if (arguments.length > 1) {
  p__23121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23121);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23124){
var ports = cljs.core.first(arglist__23124);
var p__23121 = cljs.core.rest(arglist__23124);
return alts_BANG___delegate(ports,p__23121);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23132 = (function (ch,f,map_LT_,meta23133){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23133 = meta23133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23132.cljs$lang$type = true;
cljs.core.async.t23132.cljs$lang$ctorStr = "cljs.core.async/t23132";
cljs.core.async.t23132.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23132");
});
cljs.core.async.t23132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23135 = (function (fn1,_,meta23133,ch,f,map_LT_,meta23136){
this.fn1 = fn1;
this._ = _;
this.meta23133 = meta23133;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23136 = meta23136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23135.cljs$lang$type = true;
cljs.core.async.t23135.cljs$lang$ctorStr = "cljs.core.async/t23135";
cljs.core.async.t23135.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23135");
});
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23125_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23125_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23125_SHARP_) : self__.f.call(null,p1__23125_SHARP_)))) : f1.call(null,(((p1__23125_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23125_SHARP_) : self__.f.call(null,p1__23125_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23137){var self__ = this;
var _23137__$1 = this;return self__.meta23136;
});
cljs.core.async.t23135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23137,meta23136__$1){var self__ = this;
var _23137__$1 = this;return (new cljs.core.async.t23135(self__.fn1,self__._,self__.meta23133,self__.ch,self__.f,self__.map_LT_,meta23136__$1));
});
cljs.core.async.__GT_t23135 = (function __GT_t23135(fn1__$1,___$2,meta23133__$1,ch__$2,f__$2,map_LT___$2,meta23136){return (new cljs.core.async.t23135(fn1__$1,___$2,meta23133__$1,ch__$2,f__$2,map_LT___$2,meta23136));
});
}
return (new cljs.core.async.t23135(fn1,___$1,self__.meta23133,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23132.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23134){var self__ = this;
var _23134__$1 = this;return self__.meta23133;
});
cljs.core.async.t23132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23134,meta23133__$1){var self__ = this;
var _23134__$1 = this;return (new cljs.core.async.t23132(self__.ch,self__.f,self__.map_LT_,meta23133__$1));
});
cljs.core.async.__GT_t23132 = (function __GT_t23132(ch__$1,f__$1,map_LT___$1,meta23133){return (new cljs.core.async.t23132(ch__$1,f__$1,map_LT___$1,meta23133));
});
}
return (new cljs.core.async.t23132(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23141 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23141 = (function (ch,f,map_GT_,meta23142){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23142 = meta23142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23141.cljs$lang$type = true;
cljs.core.async.t23141.cljs$lang$ctorStr = "cljs.core.async/t23141";
cljs.core.async.t23141.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23141");
});
cljs.core.async.t23141.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23141.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23141.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23143){var self__ = this;
var _23143__$1 = this;return self__.meta23142;
});
cljs.core.async.t23141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23143,meta23142__$1){var self__ = this;
var _23143__$1 = this;return (new cljs.core.async.t23141(self__.ch,self__.f,self__.map_GT_,meta23142__$1));
});
cljs.core.async.__GT_t23141 = (function __GT_t23141(ch__$1,f__$1,map_GT___$1,meta23142){return (new cljs.core.async.t23141(ch__$1,f__$1,map_GT___$1,meta23142));
});
}
return (new cljs.core.async.t23141(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23147 = (function (ch,p,filter_GT_,meta23148){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23148 = meta23148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23147.cljs$lang$type = true;
cljs.core.async.t23147.cljs$lang$ctorStr = "cljs.core.async/t23147";
cljs.core.async.t23147.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23147");
});
cljs.core.async.t23147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23147.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23149){var self__ = this;
var _23149__$1 = this;return self__.meta23148;
});
cljs.core.async.t23147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23149,meta23148__$1){var self__ = this;
var _23149__$1 = this;return (new cljs.core.async.t23147(self__.ch,self__.p,self__.filter_GT_,meta23148__$1));
});
cljs.core.async.__GT_t23147 = (function __GT_t23147(ch__$1,p__$1,filter_GT___$1,meta23148){return (new cljs.core.async.t23147(ch__$1,p__$1,filter_GT___$1,meta23148));
});
}
return (new cljs.core.async.t23147(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23211){var state_val_23212 = (state_23211[1]);if((state_val_23212 === 1))
{var state_23211__$1 = state_23211;var statearr_23213_23233 = state_23211__$1;(statearr_23213_23233[2] = null);
(statearr_23213_23233[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23212 === 2))
{var state_23211__$1 = state_23211;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23211__$1,4,ch);
} else
{if((state_val_23212 === 3))
{var inst_23209 = (state_23211[2]);var state_23211__$1 = state_23211;return cljs.core.async.impl.ioc_helpers.return_chan(state_23211__$1,inst_23209);
} else
{if((state_val_23212 === 4))
{var inst_23193 = (state_23211[7]);var inst_23193__$1 = (state_23211[2]);var inst_23194 = (inst_23193__$1 == null);var state_23211__$1 = (function (){var statearr_23214 = state_23211;(statearr_23214[7] = inst_23193__$1);
return statearr_23214;
})();if(cljs.core.truth_(inst_23194))
{var statearr_23215_23234 = state_23211__$1;(statearr_23215_23234[1] = 5);
} else
{var statearr_23216_23235 = state_23211__$1;(statearr_23216_23235[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23212 === 5))
{var inst_23196 = cljs.core.async.close_BANG_(out);var state_23211__$1 = state_23211;var statearr_23217_23236 = state_23211__$1;(statearr_23217_23236[2] = inst_23196);
(statearr_23217_23236[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23212 === 6))
{var inst_23193 = (state_23211[7]);var inst_23198 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23193) : p.call(null,inst_23193));var state_23211__$1 = state_23211;if(cljs.core.truth_(inst_23198))
{var statearr_23218_23237 = state_23211__$1;(statearr_23218_23237[1] = 8);
} else
{var statearr_23219_23238 = state_23211__$1;(statearr_23219_23238[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23212 === 7))
{var inst_23207 = (state_23211[2]);var state_23211__$1 = state_23211;var statearr_23220_23239 = state_23211__$1;(statearr_23220_23239[2] = inst_23207);
(statearr_23220_23239[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23212 === 8))
{var inst_23193 = (state_23211[7]);var state_23211__$1 = state_23211;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23211__$1,11,out,inst_23193);
} else
{if((state_val_23212 === 9))
{var state_23211__$1 = state_23211;var statearr_23221_23240 = state_23211__$1;(statearr_23221_23240[2] = null);
(statearr_23221_23240[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23212 === 10))
{var inst_23204 = (state_23211[2]);var state_23211__$1 = (function (){var statearr_23222 = state_23211;(statearr_23222[8] = inst_23204);
return statearr_23222;
})();var statearr_23223_23241 = state_23211__$1;(statearr_23223_23241[2] = null);
(statearr_23223_23241[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23212 === 11))
{var inst_23201 = (state_23211[2]);var state_23211__$1 = state_23211;var statearr_23224_23242 = state_23211__$1;(statearr_23224_23242[2] = inst_23201);
(statearr_23224_23242[1] = 10);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23228 = [null,null,null,null,null,null,null,null,null];(statearr_23228[0] = state_machine__5507__auto__);
(statearr_23228[1] = 1);
return statearr_23228;
});
var state_machine__5507__auto____1 = (function (state_23211){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23211);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23229){if((e23229 instanceof Object))
{var ex__5510__auto__ = e23229;var statearr_23230_23243 = state_23211;(statearr_23230_23243[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23211);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23244 = state_23211;
state_23211 = G__23244;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23211){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23231 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23232);
return statearr_23231;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23396){var state_val_23397 = (state_23396[1]);if((state_val_23397 === 1))
{var state_23396__$1 = state_23396;var statearr_23398_23435 = state_23396__$1;(statearr_23398_23435[2] = null);
(statearr_23398_23435[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 2))
{var state_23396__$1 = state_23396;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23396__$1,4,in$);
} else
{if((state_val_23397 === 3))
{var inst_23394 = (state_23396[2]);var state_23396__$1 = state_23396;return cljs.core.async.impl.ioc_helpers.return_chan(state_23396__$1,inst_23394);
} else
{if((state_val_23397 === 4))
{var inst_23342 = (state_23396[7]);var inst_23342__$1 = (state_23396[2]);var inst_23343 = (inst_23342__$1 == null);var state_23396__$1 = (function (){var statearr_23399 = state_23396;(statearr_23399[7] = inst_23342__$1);
return statearr_23399;
})();if(cljs.core.truth_(inst_23343))
{var statearr_23400_23436 = state_23396__$1;(statearr_23400_23436[1] = 5);
} else
{var statearr_23401_23437 = state_23396__$1;(statearr_23401_23437[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 5))
{var inst_23345 = cljs.core.async.close_BANG_(out);var state_23396__$1 = state_23396;var statearr_23402_23438 = state_23396__$1;(statearr_23402_23438[2] = inst_23345);
(statearr_23402_23438[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 6))
{var inst_23342 = (state_23396[7]);var inst_23347 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23342) : f.call(null,inst_23342));var inst_23352 = cljs.core.seq(inst_23347);var inst_23353 = inst_23352;var inst_23354 = null;var inst_23355 = 0;var inst_23356 = 0;var state_23396__$1 = (function (){var statearr_23403 = state_23396;(statearr_23403[8] = inst_23353);
(statearr_23403[9] = inst_23356);
(statearr_23403[10] = inst_23355);
(statearr_23403[11] = inst_23354);
return statearr_23403;
})();var statearr_23404_23439 = state_23396__$1;(statearr_23404_23439[2] = null);
(statearr_23404_23439[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 7))
{var inst_23392 = (state_23396[2]);var state_23396__$1 = state_23396;var statearr_23405_23440 = state_23396__$1;(statearr_23405_23440[2] = inst_23392);
(statearr_23405_23440[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 8))
{var inst_23356 = (state_23396[9]);var inst_23355 = (state_23396[10]);var inst_23358 = (inst_23356 < inst_23355);var inst_23359 = inst_23358;var state_23396__$1 = state_23396;if(cljs.core.truth_(inst_23359))
{var statearr_23406_23441 = state_23396__$1;(statearr_23406_23441[1] = 10);
} else
{var statearr_23407_23442 = state_23396__$1;(statearr_23407_23442[1] = 11);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 9))
{var inst_23389 = (state_23396[2]);var state_23396__$1 = (function (){var statearr_23408 = state_23396;(statearr_23408[12] = inst_23389);
return statearr_23408;
})();var statearr_23409_23443 = state_23396__$1;(statearr_23409_23443[2] = null);
(statearr_23409_23443[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 10))
{var inst_23356 = (state_23396[9]);var inst_23354 = (state_23396[11]);var inst_23361 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23354,inst_23356);var state_23396__$1 = state_23396;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23396__$1,13,out,inst_23361);
} else
{if((state_val_23397 === 11))
{var inst_23353 = (state_23396[8]);var inst_23367 = (state_23396[13]);var inst_23367__$1 = cljs.core.seq(inst_23353);var state_23396__$1 = (function (){var statearr_23413 = state_23396;(statearr_23413[13] = inst_23367__$1);
return statearr_23413;
})();if(inst_23367__$1)
{var statearr_23414_23444 = state_23396__$1;(statearr_23414_23444[1] = 14);
} else
{var statearr_23415_23445 = state_23396__$1;(statearr_23415_23445[1] = 15);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 12))
{var inst_23387 = (state_23396[2]);var state_23396__$1 = state_23396;var statearr_23416_23446 = state_23396__$1;(statearr_23416_23446[2] = inst_23387);
(statearr_23416_23446[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 13))
{var inst_23353 = (state_23396[8]);var inst_23356 = (state_23396[9]);var inst_23355 = (state_23396[10]);var inst_23354 = (state_23396[11]);var inst_23363 = (state_23396[2]);var inst_23364 = (inst_23356 + 1);var tmp23410 = inst_23353;var tmp23411 = inst_23355;var tmp23412 = inst_23354;var inst_23353__$1 = tmp23410;var inst_23354__$1 = tmp23412;var inst_23355__$1 = tmp23411;var inst_23356__$1 = inst_23364;var state_23396__$1 = (function (){var statearr_23417 = state_23396;(statearr_23417[8] = inst_23353__$1);
(statearr_23417[14] = inst_23363);
(statearr_23417[9] = inst_23356__$1);
(statearr_23417[10] = inst_23355__$1);
(statearr_23417[11] = inst_23354__$1);
return statearr_23417;
})();var statearr_23418_23447 = state_23396__$1;(statearr_23418_23447[2] = null);
(statearr_23418_23447[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 14))
{var inst_23367 = (state_23396[13]);var inst_23369 = cljs.core.chunked_seq_QMARK_(inst_23367);var state_23396__$1 = state_23396;if(inst_23369)
{var statearr_23419_23448 = state_23396__$1;(statearr_23419_23448[1] = 17);
} else
{var statearr_23420_23449 = state_23396__$1;(statearr_23420_23449[1] = 18);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 15))
{var state_23396__$1 = state_23396;var statearr_23421_23450 = state_23396__$1;(statearr_23421_23450[2] = null);
(statearr_23421_23450[1] = 16);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 16))
{var inst_23385 = (state_23396[2]);var state_23396__$1 = state_23396;var statearr_23422_23451 = state_23396__$1;(statearr_23422_23451[2] = inst_23385);
(statearr_23422_23451[1] = 12);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 17))
{var inst_23367 = (state_23396[13]);var inst_23371 = cljs.core.chunk_first(inst_23367);var inst_23372 = cljs.core.chunk_rest(inst_23367);var inst_23373 = cljs.core.count(inst_23371);var inst_23353 = inst_23372;var inst_23354 = inst_23371;var inst_23355 = inst_23373;var inst_23356 = 0;var state_23396__$1 = (function (){var statearr_23423 = state_23396;(statearr_23423[8] = inst_23353);
(statearr_23423[9] = inst_23356);
(statearr_23423[10] = inst_23355);
(statearr_23423[11] = inst_23354);
return statearr_23423;
})();var statearr_23424_23452 = state_23396__$1;(statearr_23424_23452[2] = null);
(statearr_23424_23452[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 18))
{var inst_23367 = (state_23396[13]);var inst_23376 = cljs.core.first(inst_23367);var state_23396__$1 = state_23396;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23396__$1,20,out,inst_23376);
} else
{if((state_val_23397 === 19))
{var inst_23382 = (state_23396[2]);var state_23396__$1 = state_23396;var statearr_23425_23453 = state_23396__$1;(statearr_23425_23453[2] = inst_23382);
(statearr_23425_23453[1] = 16);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23397 === 20))
{var inst_23367 = (state_23396[13]);var inst_23378 = (state_23396[2]);var inst_23379 = cljs.core.next(inst_23367);var inst_23353 = inst_23379;var inst_23354 = null;var inst_23355 = 0;var inst_23356 = 0;var state_23396__$1 = (function (){var statearr_23426 = state_23396;(statearr_23426[8] = inst_23353);
(statearr_23426[9] = inst_23356);
(statearr_23426[10] = inst_23355);
(statearr_23426[11] = inst_23354);
(statearr_23426[15] = inst_23378);
return statearr_23426;
})();var statearr_23427_23454 = state_23396__$1;(statearr_23427_23454[2] = null);
(statearr_23427_23454[1] = 8);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23431[0] = state_machine__5507__auto__);
(statearr_23431[1] = 1);
return statearr_23431;
});
var state_machine__5507__auto____1 = (function (state_23396){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23396);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23432){if((e23432 instanceof Object))
{var ex__5510__auto__ = e23432;var statearr_23433_23455 = state_23396;(statearr_23433_23455[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23396);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23456 = state_23396;
state_23396 = G__23456;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23396){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23434 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23434;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23516){var state_val_23517 = (state_23516[1]);if((state_val_23517 === 1))
{var state_23516__$1 = state_23516;var statearr_23518_23538 = state_23516__$1;(statearr_23518_23538[2] = null);
(statearr_23518_23538[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23517 === 2))
{var state_23516__$1 = state_23516;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23516__$1,4,from);
} else
{if((state_val_23517 === 3))
{var inst_23514 = (state_23516[2]);var state_23516__$1 = state_23516;return cljs.core.async.impl.ioc_helpers.return_chan(state_23516__$1,inst_23514);
} else
{if((state_val_23517 === 4))
{var inst_23499 = (state_23516[7]);var inst_23499__$1 = (state_23516[2]);var inst_23500 = (inst_23499__$1 == null);var state_23516__$1 = (function (){var statearr_23519 = state_23516;(statearr_23519[7] = inst_23499__$1);
return statearr_23519;
})();if(cljs.core.truth_(inst_23500))
{var statearr_23520_23539 = state_23516__$1;(statearr_23520_23539[1] = 5);
} else
{var statearr_23521_23540 = state_23516__$1;(statearr_23521_23540[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23517 === 5))
{var state_23516__$1 = state_23516;if(cljs.core.truth_(close_QMARK_))
{var statearr_23522_23541 = state_23516__$1;(statearr_23522_23541[1] = 8);
} else
{var statearr_23523_23542 = state_23516__$1;(statearr_23523_23542[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23517 === 6))
{var inst_23499 = (state_23516[7]);var state_23516__$1 = state_23516;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23516__$1,11,to,inst_23499);
} else
{if((state_val_23517 === 7))
{var inst_23512 = (state_23516[2]);var state_23516__$1 = state_23516;var statearr_23524_23543 = state_23516__$1;(statearr_23524_23543[2] = inst_23512);
(statearr_23524_23543[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23517 === 8))
{var inst_23503 = cljs.core.async.close_BANG_(to);var state_23516__$1 = state_23516;var statearr_23525_23544 = state_23516__$1;(statearr_23525_23544[2] = inst_23503);
(statearr_23525_23544[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23517 === 9))
{var state_23516__$1 = state_23516;var statearr_23526_23545 = state_23516__$1;(statearr_23526_23545[2] = null);
(statearr_23526_23545[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23517 === 10))
{var inst_23506 = (state_23516[2]);var state_23516__$1 = state_23516;var statearr_23527_23546 = state_23516__$1;(statearr_23527_23546[2] = inst_23506);
(statearr_23527_23546[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23517 === 11))
{var inst_23509 = (state_23516[2]);var state_23516__$1 = (function (){var statearr_23528 = state_23516;(statearr_23528[8] = inst_23509);
return statearr_23528;
})();var statearr_23529_23547 = state_23516__$1;(statearr_23529_23547[2] = null);
(statearr_23529_23547[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23533 = [null,null,null,null,null,null,null,null,null];(statearr_23533[0] = state_machine__5507__auto__);
(statearr_23533[1] = 1);
return statearr_23533;
});
var state_machine__5507__auto____1 = (function (state_23516){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23516);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23534){if((e23534 instanceof Object))
{var ex__5510__auto__ = e23534;var statearr_23535_23548 = state_23516;(statearr_23535_23548[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23516);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23549 = state_23516;
state_23516 = G__23549;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23516){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23536 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23537);
return statearr_23536;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23614){var state_val_23615 = (state_23614[1]);if((state_val_23615 === 1))
{var state_23614__$1 = state_23614;var statearr_23616_23637 = state_23614__$1;(statearr_23616_23637[2] = null);
(statearr_23616_23637[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23615 === 2))
{var state_23614__$1 = state_23614;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23614__$1,4,ch);
} else
{if((state_val_23615 === 3))
{var inst_23612 = (state_23614[2]);var state_23614__$1 = state_23614;return cljs.core.async.impl.ioc_helpers.return_chan(state_23614__$1,inst_23612);
} else
{if((state_val_23615 === 4))
{var inst_23595 = (state_23614[7]);var inst_23595__$1 = (state_23614[2]);var inst_23596 = (inst_23595__$1 == null);var state_23614__$1 = (function (){var statearr_23617 = state_23614;(statearr_23617[7] = inst_23595__$1);
return statearr_23617;
})();if(cljs.core.truth_(inst_23596))
{var statearr_23618_23638 = state_23614__$1;(statearr_23618_23638[1] = 5);
} else
{var statearr_23619_23639 = state_23614__$1;(statearr_23619_23639[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23615 === 5))
{var inst_23598 = cljs.core.async.close_BANG_(tc);var inst_23599 = cljs.core.async.close_BANG_(fc);var state_23614__$1 = (function (){var statearr_23620 = state_23614;(statearr_23620[8] = inst_23598);
return statearr_23620;
})();var statearr_23621_23640 = state_23614__$1;(statearr_23621_23640[2] = inst_23599);
(statearr_23621_23640[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23615 === 6))
{var inst_23595 = (state_23614[7]);var inst_23601 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23595) : p.call(null,inst_23595));var state_23614__$1 = state_23614;if(cljs.core.truth_(inst_23601))
{var statearr_23622_23641 = state_23614__$1;(statearr_23622_23641[1] = 9);
} else
{var statearr_23623_23642 = state_23614__$1;(statearr_23623_23642[1] = 10);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23615 === 7))
{var inst_23610 = (state_23614[2]);var state_23614__$1 = state_23614;var statearr_23624_23643 = state_23614__$1;(statearr_23624_23643[2] = inst_23610);
(statearr_23624_23643[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23615 === 8))
{var inst_23607 = (state_23614[2]);var state_23614__$1 = (function (){var statearr_23625 = state_23614;(statearr_23625[9] = inst_23607);
return statearr_23625;
})();var statearr_23626_23644 = state_23614__$1;(statearr_23626_23644[2] = null);
(statearr_23626_23644[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23615 === 9))
{var state_23614__$1 = state_23614;var statearr_23627_23645 = state_23614__$1;(statearr_23627_23645[2] = tc);
(statearr_23627_23645[1] = 11);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23615 === 10))
{var state_23614__$1 = state_23614;var statearr_23628_23646 = state_23614__$1;(statearr_23628_23646[2] = fc);
(statearr_23628_23646[1] = 11);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23615 === 11))
{var inst_23595 = (state_23614[7]);var inst_23605 = (state_23614[2]);var state_23614__$1 = state_23614;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23614__$1,8,inst_23605,inst_23595);
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
var state_machine__5507__auto____0 = (function (){var statearr_23632 = [null,null,null,null,null,null,null,null,null,null];(statearr_23632[0] = state_machine__5507__auto__);
(statearr_23632[1] = 1);
return statearr_23632;
});
var state_machine__5507__auto____1 = (function (state_23614){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23614);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23633){if((e23633 instanceof Object))
{var ex__5510__auto__ = e23633;var statearr_23634_23647 = state_23614;(statearr_23634_23647[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23614);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23648 = state_23614;
state_23614 = G__23648;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23614){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23635 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23636);
return statearr_23635;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23695){var state_val_23696 = (state_23695[1]);if((state_val_23696 === 7))
{var inst_23691 = (state_23695[2]);var state_23695__$1 = state_23695;var statearr_23697_23713 = state_23695__$1;(statearr_23697_23713[2] = inst_23691);
(statearr_23697_23713[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23696 === 6))
{var inst_23684 = (state_23695[7]);var inst_23681 = (state_23695[8]);var inst_23688 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23681,inst_23684) : f.call(null,inst_23681,inst_23684));var inst_23681__$1 = inst_23688;var state_23695__$1 = (function (){var statearr_23698 = state_23695;(statearr_23698[8] = inst_23681__$1);
return statearr_23698;
})();var statearr_23699_23714 = state_23695__$1;(statearr_23699_23714[2] = null);
(statearr_23699_23714[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23696 === 5))
{var inst_23681 = (state_23695[8]);var state_23695__$1 = state_23695;var statearr_23700_23715 = state_23695__$1;(statearr_23700_23715[2] = inst_23681);
(statearr_23700_23715[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23696 === 4))
{var inst_23684 = (state_23695[7]);var inst_23684__$1 = (state_23695[2]);var inst_23685 = (inst_23684__$1 == null);var state_23695__$1 = (function (){var statearr_23701 = state_23695;(statearr_23701[7] = inst_23684__$1);
return statearr_23701;
})();if(cljs.core.truth_(inst_23685))
{var statearr_23702_23716 = state_23695__$1;(statearr_23702_23716[1] = 5);
} else
{var statearr_23703_23717 = state_23695__$1;(statearr_23703_23717[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23696 === 3))
{var inst_23693 = (state_23695[2]);var state_23695__$1 = state_23695;return cljs.core.async.impl.ioc_helpers.return_chan(state_23695__$1,inst_23693);
} else
{if((state_val_23696 === 2))
{var state_23695__$1 = state_23695;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23695__$1,4,ch);
} else
{if((state_val_23696 === 1))
{var inst_23681 = init;var state_23695__$1 = (function (){var statearr_23704 = state_23695;(statearr_23704[8] = inst_23681);
return statearr_23704;
})();var statearr_23705_23718 = state_23695__$1;(statearr_23705_23718[2] = null);
(statearr_23705_23718[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23709 = [null,null,null,null,null,null,null,null,null];(statearr_23709[0] = state_machine__5507__auto__);
(statearr_23709[1] = 1);
return statearr_23709;
});
var state_machine__5507__auto____1 = (function (state_23695){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23695);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23710){if((e23710 instanceof Object))
{var ex__5510__auto__ = e23710;var statearr_23711_23719 = state_23695;(statearr_23711_23719[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23695);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23720 = state_23695;
state_23695 = G__23720;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23695){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23712 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23712;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23782){var state_val_23783 = (state_23782[1]);if((state_val_23783 === 1))
{var inst_23762 = cljs.core.seq(coll);var inst_23763 = inst_23762;var state_23782__$1 = (function (){var statearr_23784 = state_23782;(statearr_23784[7] = inst_23763);
return statearr_23784;
})();var statearr_23785_23803 = state_23782__$1;(statearr_23785_23803[2] = null);
(statearr_23785_23803[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23783 === 2))
{var inst_23763 = (state_23782[7]);var state_23782__$1 = state_23782;if(cljs.core.truth_(inst_23763))
{var statearr_23786_23804 = state_23782__$1;(statearr_23786_23804[1] = 4);
} else
{var statearr_23787_23805 = state_23782__$1;(statearr_23787_23805[1] = 5);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23783 === 3))
{var inst_23780 = (state_23782[2]);var state_23782__$1 = state_23782;return cljs.core.async.impl.ioc_helpers.return_chan(state_23782__$1,inst_23780);
} else
{if((state_val_23783 === 4))
{var inst_23763 = (state_23782[7]);var inst_23766 = cljs.core.first(inst_23763);var state_23782__$1 = state_23782;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23782__$1,7,ch,inst_23766);
} else
{if((state_val_23783 === 5))
{var state_23782__$1 = state_23782;if(cljs.core.truth_(close_QMARK_))
{var statearr_23788_23806 = state_23782__$1;(statearr_23788_23806[1] = 8);
} else
{var statearr_23789_23807 = state_23782__$1;(statearr_23789_23807[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23783 === 6))
{var inst_23778 = (state_23782[2]);var state_23782__$1 = state_23782;var statearr_23790_23808 = state_23782__$1;(statearr_23790_23808[2] = inst_23778);
(statearr_23790_23808[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23783 === 7))
{var inst_23763 = (state_23782[7]);var inst_23768 = (state_23782[2]);var inst_23769 = cljs.core.next(inst_23763);var inst_23763__$1 = inst_23769;var state_23782__$1 = (function (){var statearr_23791 = state_23782;(statearr_23791[7] = inst_23763__$1);
(statearr_23791[8] = inst_23768);
return statearr_23791;
})();var statearr_23792_23809 = state_23782__$1;(statearr_23792_23809[2] = null);
(statearr_23792_23809[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23783 === 8))
{var inst_23773 = cljs.core.async.close_BANG_(ch);var state_23782__$1 = state_23782;var statearr_23793_23810 = state_23782__$1;(statearr_23793_23810[2] = inst_23773);
(statearr_23793_23810[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23783 === 9))
{var state_23782__$1 = state_23782;var statearr_23794_23811 = state_23782__$1;(statearr_23794_23811[2] = null);
(statearr_23794_23811[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23783 === 10))
{var inst_23776 = (state_23782[2]);var state_23782__$1 = state_23782;var statearr_23795_23812 = state_23782__$1;(statearr_23795_23812[2] = inst_23776);
(statearr_23795_23812[1] = 6);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23799 = [null,null,null,null,null,null,null,null,null];(statearr_23799[0] = state_machine__5507__auto__);
(statearr_23799[1] = 1);
return statearr_23799;
});
var state_machine__5507__auto____1 = (function (state_23782){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23782);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23800){if((e23800 instanceof Object))
{var ex__5510__auto__ = e23800;var statearr_23801_23813 = state_23782;(statearr_23801_23813[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23782);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23814 = state_23782;
state_23782 = G__23814;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23782){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23802 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23802;
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
cljs.core.async.Mux = (function (){var obj23816 = {};return obj23816;
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
cljs.core.async.Mult = (function (){var obj23818 = {};return obj23818;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24042 = (function (cs,ch,mult,meta24043){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24043 = meta24043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24042.cljs$lang$type = true;
cljs.core.async.t24042.cljs$lang$ctorStr = "cljs.core.async/t24042";
cljs.core.async.t24042.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24042");
});})(cs))
;
cljs.core.async.t24042.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24042.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24042.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24042.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24042.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24044){var self__ = this;
var _24044__$1 = this;return self__.meta24043;
});})(cs))
;
cljs.core.async.t24042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24044,meta24043__$1){var self__ = this;
var _24044__$1 = this;return (new cljs.core.async.t24042(self__.cs,self__.ch,self__.mult,meta24043__$1));
});})(cs))
;
cljs.core.async.__GT_t24042 = ((function (cs){
return (function __GT_t24042(cs__$1,ch__$1,mult__$1,meta24043){return (new cljs.core.async.t24042(cs__$1,ch__$1,mult__$1,meta24043));
});})(cs))
;
}
return (new cljs.core.async.t24042(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24179){var state_val_24180 = (state_24179[1]);if((state_val_24180 === 32))
{var inst_24123 = (state_24179[7]);var inst_24047 = (state_24179[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24179,31,Object,null,30);var inst_24130 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24123,inst_24047,done);var state_24179__$1 = state_24179;var statearr_24181_24266 = state_24179__$1;(statearr_24181_24266[2] = inst_24130);
cljs.core.async.impl.ioc_helpers.process_exception(state_24179__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 1))
{var state_24179__$1 = state_24179;var statearr_24182_24267 = state_24179__$1;(statearr_24182_24267[2] = null);
(statearr_24182_24267[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 33))
{var inst_24136 = (state_24179[9]);var inst_24138 = cljs.core.chunked_seq_QMARK_(inst_24136);var state_24179__$1 = state_24179;if(inst_24138)
{var statearr_24183_24268 = state_24179__$1;(statearr_24183_24268[1] = 36);
} else
{var statearr_24184_24269 = state_24179__$1;(statearr_24184_24269[1] = 37);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 2))
{var state_24179__$1 = state_24179;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24179__$1,4,ch);
} else
{if((state_val_24180 === 34))
{var state_24179__$1 = state_24179;var statearr_24185_24270 = state_24179__$1;(statearr_24185_24270[2] = null);
(statearr_24185_24270[1] = 35);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 3))
{var inst_24177 = (state_24179[2]);var state_24179__$1 = state_24179;return cljs.core.async.impl.ioc_helpers.return_chan(state_24179__$1,inst_24177);
} else
{if((state_val_24180 === 35))
{var inst_24161 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24186_24271 = state_24179__$1;(statearr_24186_24271[2] = inst_24161);
(statearr_24186_24271[1] = 29);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 4))
{var inst_24047 = (state_24179[8]);var inst_24047__$1 = (state_24179[2]);var inst_24048 = (inst_24047__$1 == null);var state_24179__$1 = (function (){var statearr_24187 = state_24179;(statearr_24187[8] = inst_24047__$1);
return statearr_24187;
})();if(cljs.core.truth_(inst_24048))
{var statearr_24188_24272 = state_24179__$1;(statearr_24188_24272[1] = 5);
} else
{var statearr_24189_24273 = state_24179__$1;(statearr_24189_24273[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 36))
{var inst_24136 = (state_24179[9]);var inst_24140 = cljs.core.chunk_first(inst_24136);var inst_24141 = cljs.core.chunk_rest(inst_24136);var inst_24142 = cljs.core.count(inst_24140);var inst_24115 = inst_24141;var inst_24116 = inst_24140;var inst_24117 = inst_24142;var inst_24118 = 0;var state_24179__$1 = (function (){var statearr_24190 = state_24179;(statearr_24190[10] = inst_24117);
(statearr_24190[11] = inst_24118);
(statearr_24190[12] = inst_24116);
(statearr_24190[13] = inst_24115);
return statearr_24190;
})();var statearr_24191_24274 = state_24179__$1;(statearr_24191_24274[2] = null);
(statearr_24191_24274[1] = 25);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 5))
{var inst_24054 = cljs.core.deref(cs);var inst_24055 = cljs.core.seq(inst_24054);var inst_24056 = inst_24055;var inst_24057 = null;var inst_24058 = 0;var inst_24059 = 0;var state_24179__$1 = (function (){var statearr_24192 = state_24179;(statearr_24192[14] = inst_24059);
(statearr_24192[15] = inst_24058);
(statearr_24192[16] = inst_24056);
(statearr_24192[17] = inst_24057);
return statearr_24192;
})();var statearr_24193_24275 = state_24179__$1;(statearr_24193_24275[2] = null);
(statearr_24193_24275[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 37))
{var inst_24136 = (state_24179[9]);var inst_24145 = cljs.core.first(inst_24136);var state_24179__$1 = (function (){var statearr_24194 = state_24179;(statearr_24194[18] = inst_24145);
return statearr_24194;
})();var statearr_24195_24276 = state_24179__$1;(statearr_24195_24276[2] = null);
(statearr_24195_24276[1] = 41);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 6))
{var inst_24107 = (state_24179[19]);var inst_24106 = cljs.core.deref(cs);var inst_24107__$1 = cljs.core.keys(inst_24106);var inst_24108 = cljs.core.count(inst_24107__$1);var inst_24109 = cljs.core.reset_BANG_(dctr,inst_24108);var inst_24114 = cljs.core.seq(inst_24107__$1);var inst_24115 = inst_24114;var inst_24116 = null;var inst_24117 = 0;var inst_24118 = 0;var state_24179__$1 = (function (){var statearr_24196 = state_24179;(statearr_24196[10] = inst_24117);
(statearr_24196[11] = inst_24118);
(statearr_24196[12] = inst_24116);
(statearr_24196[13] = inst_24115);
(statearr_24196[19] = inst_24107__$1);
(statearr_24196[20] = inst_24109);
return statearr_24196;
})();var statearr_24197_24277 = state_24179__$1;(statearr_24197_24277[2] = null);
(statearr_24197_24277[1] = 25);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 38))
{var inst_24158 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24198_24278 = state_24179__$1;(statearr_24198_24278[2] = inst_24158);
(statearr_24198_24278[1] = 35);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 7))
{var inst_24175 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24199_24279 = state_24179__$1;(statearr_24199_24279[2] = inst_24175);
(statearr_24199_24279[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 39))
{var inst_24136 = (state_24179[9]);var inst_24154 = (state_24179[2]);var inst_24155 = cljs.core.next(inst_24136);var inst_24115 = inst_24155;var inst_24116 = null;var inst_24117 = 0;var inst_24118 = 0;var state_24179__$1 = (function (){var statearr_24200 = state_24179;(statearr_24200[10] = inst_24117);
(statearr_24200[11] = inst_24118);
(statearr_24200[12] = inst_24116);
(statearr_24200[13] = inst_24115);
(statearr_24200[21] = inst_24154);
return statearr_24200;
})();var statearr_24201_24280 = state_24179__$1;(statearr_24201_24280[2] = null);
(statearr_24201_24280[1] = 25);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 8))
{var inst_24059 = (state_24179[14]);var inst_24058 = (state_24179[15]);var inst_24061 = (inst_24059 < inst_24058);var inst_24062 = inst_24061;var state_24179__$1 = state_24179;if(cljs.core.truth_(inst_24062))
{var statearr_24202_24281 = state_24179__$1;(statearr_24202_24281[1] = 10);
} else
{var statearr_24203_24282 = state_24179__$1;(statearr_24203_24282[1] = 11);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 40))
{var inst_24145 = (state_24179[18]);var inst_24146 = (state_24179[2]);var inst_24147 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24148 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24145);var state_24179__$1 = (function (){var statearr_24204 = state_24179;(statearr_24204[22] = inst_24147);
(statearr_24204[23] = inst_24146);
return statearr_24204;
})();var statearr_24205_24283 = state_24179__$1;(statearr_24205_24283[2] = inst_24148);
cljs.core.async.impl.ioc_helpers.process_exception(state_24179__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 9))
{var inst_24104 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24206_24284 = state_24179__$1;(statearr_24206_24284[2] = inst_24104);
(statearr_24206_24284[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 41))
{var inst_24047 = (state_24179[8]);var inst_24145 = (state_24179[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24179,40,Object,null,39);var inst_24152 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24145,inst_24047,done);var state_24179__$1 = state_24179;var statearr_24207_24285 = state_24179__$1;(statearr_24207_24285[2] = inst_24152);
cljs.core.async.impl.ioc_helpers.process_exception(state_24179__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 10))
{var inst_24059 = (state_24179[14]);var inst_24057 = (state_24179[17]);var inst_24065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24057,inst_24059);var inst_24066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24065,0,null);var inst_24067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24065,1,null);var state_24179__$1 = (function (){var statearr_24208 = state_24179;(statearr_24208[24] = inst_24066);
return statearr_24208;
})();if(cljs.core.truth_(inst_24067))
{var statearr_24209_24286 = state_24179__$1;(statearr_24209_24286[1] = 13);
} else
{var statearr_24210_24287 = state_24179__$1;(statearr_24210_24287[1] = 14);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 42))
{var state_24179__$1 = state_24179;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24179__$1,45,dchan);
} else
{if((state_val_24180 === 11))
{var inst_24056 = (state_24179[16]);var inst_24076 = (state_24179[25]);var inst_24076__$1 = cljs.core.seq(inst_24056);var state_24179__$1 = (function (){var statearr_24211 = state_24179;(statearr_24211[25] = inst_24076__$1);
return statearr_24211;
})();if(inst_24076__$1)
{var statearr_24212_24288 = state_24179__$1;(statearr_24212_24288[1] = 16);
} else
{var statearr_24213_24289 = state_24179__$1;(statearr_24213_24289[1] = 17);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 43))
{var state_24179__$1 = state_24179;var statearr_24214_24290 = state_24179__$1;(statearr_24214_24290[2] = null);
(statearr_24214_24290[1] = 44);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 12))
{var inst_24102 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24215_24291 = state_24179__$1;(statearr_24215_24291[2] = inst_24102);
(statearr_24215_24291[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 44))
{var inst_24172 = (state_24179[2]);var state_24179__$1 = (function (){var statearr_24216 = state_24179;(statearr_24216[26] = inst_24172);
return statearr_24216;
})();var statearr_24217_24292 = state_24179__$1;(statearr_24217_24292[2] = null);
(statearr_24217_24292[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 13))
{var inst_24066 = (state_24179[24]);var inst_24069 = cljs.core.async.close_BANG_(inst_24066);var state_24179__$1 = state_24179;var statearr_24218_24293 = state_24179__$1;(statearr_24218_24293[2] = inst_24069);
(statearr_24218_24293[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 45))
{var inst_24169 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24222_24294 = state_24179__$1;(statearr_24222_24294[2] = inst_24169);
(statearr_24222_24294[1] = 44);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 14))
{var state_24179__$1 = state_24179;var statearr_24223_24295 = state_24179__$1;(statearr_24223_24295[2] = null);
(statearr_24223_24295[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 15))
{var inst_24059 = (state_24179[14]);var inst_24058 = (state_24179[15]);var inst_24056 = (state_24179[16]);var inst_24057 = (state_24179[17]);var inst_24072 = (state_24179[2]);var inst_24073 = (inst_24059 + 1);var tmp24219 = inst_24058;var tmp24220 = inst_24056;var tmp24221 = inst_24057;var inst_24056__$1 = tmp24220;var inst_24057__$1 = tmp24221;var inst_24058__$1 = tmp24219;var inst_24059__$1 = inst_24073;var state_24179__$1 = (function (){var statearr_24224 = state_24179;(statearr_24224[14] = inst_24059__$1);
(statearr_24224[15] = inst_24058__$1);
(statearr_24224[16] = inst_24056__$1);
(statearr_24224[17] = inst_24057__$1);
(statearr_24224[27] = inst_24072);
return statearr_24224;
})();var statearr_24225_24296 = state_24179__$1;(statearr_24225_24296[2] = null);
(statearr_24225_24296[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 16))
{var inst_24076 = (state_24179[25]);var inst_24078 = cljs.core.chunked_seq_QMARK_(inst_24076);var state_24179__$1 = state_24179;if(inst_24078)
{var statearr_24226_24297 = state_24179__$1;(statearr_24226_24297[1] = 19);
} else
{var statearr_24227_24298 = state_24179__$1;(statearr_24227_24298[1] = 20);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 17))
{var state_24179__$1 = state_24179;var statearr_24228_24299 = state_24179__$1;(statearr_24228_24299[2] = null);
(statearr_24228_24299[1] = 18);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 18))
{var inst_24100 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24229_24300 = state_24179__$1;(statearr_24229_24300[2] = inst_24100);
(statearr_24229_24300[1] = 12);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 19))
{var inst_24076 = (state_24179[25]);var inst_24080 = cljs.core.chunk_first(inst_24076);var inst_24081 = cljs.core.chunk_rest(inst_24076);var inst_24082 = cljs.core.count(inst_24080);var inst_24056 = inst_24081;var inst_24057 = inst_24080;var inst_24058 = inst_24082;var inst_24059 = 0;var state_24179__$1 = (function (){var statearr_24230 = state_24179;(statearr_24230[14] = inst_24059);
(statearr_24230[15] = inst_24058);
(statearr_24230[16] = inst_24056);
(statearr_24230[17] = inst_24057);
return statearr_24230;
})();var statearr_24231_24301 = state_24179__$1;(statearr_24231_24301[2] = null);
(statearr_24231_24301[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 20))
{var inst_24076 = (state_24179[25]);var inst_24086 = cljs.core.first(inst_24076);var inst_24087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24086,0,null);var inst_24088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24086,1,null);var state_24179__$1 = (function (){var statearr_24232 = state_24179;(statearr_24232[28] = inst_24087);
return statearr_24232;
})();if(cljs.core.truth_(inst_24088))
{var statearr_24233_24302 = state_24179__$1;(statearr_24233_24302[1] = 22);
} else
{var statearr_24234_24303 = state_24179__$1;(statearr_24234_24303[1] = 23);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 21))
{var inst_24097 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24235_24304 = state_24179__$1;(statearr_24235_24304[2] = inst_24097);
(statearr_24235_24304[1] = 18);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 22))
{var inst_24087 = (state_24179[28]);var inst_24090 = cljs.core.async.close_BANG_(inst_24087);var state_24179__$1 = state_24179;var statearr_24236_24305 = state_24179__$1;(statearr_24236_24305[2] = inst_24090);
(statearr_24236_24305[1] = 24);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 23))
{var state_24179__$1 = state_24179;var statearr_24237_24306 = state_24179__$1;(statearr_24237_24306[2] = null);
(statearr_24237_24306[1] = 24);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 24))
{var inst_24076 = (state_24179[25]);var inst_24093 = (state_24179[2]);var inst_24094 = cljs.core.next(inst_24076);var inst_24056 = inst_24094;var inst_24057 = null;var inst_24058 = 0;var inst_24059 = 0;var state_24179__$1 = (function (){var statearr_24238 = state_24179;(statearr_24238[14] = inst_24059);
(statearr_24238[15] = inst_24058);
(statearr_24238[16] = inst_24056);
(statearr_24238[17] = inst_24057);
(statearr_24238[29] = inst_24093);
return statearr_24238;
})();var statearr_24239_24307 = state_24179__$1;(statearr_24239_24307[2] = null);
(statearr_24239_24307[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 25))
{var inst_24117 = (state_24179[10]);var inst_24118 = (state_24179[11]);var inst_24120 = (inst_24118 < inst_24117);var inst_24121 = inst_24120;var state_24179__$1 = state_24179;if(cljs.core.truth_(inst_24121))
{var statearr_24240_24308 = state_24179__$1;(statearr_24240_24308[1] = 27);
} else
{var statearr_24241_24309 = state_24179__$1;(statearr_24241_24309[1] = 28);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 26))
{var inst_24107 = (state_24179[19]);var inst_24165 = (state_24179[2]);var inst_24166 = cljs.core.seq(inst_24107);var state_24179__$1 = (function (){var statearr_24242 = state_24179;(statearr_24242[30] = inst_24165);
return statearr_24242;
})();if(inst_24166)
{var statearr_24243_24310 = state_24179__$1;(statearr_24243_24310[1] = 42);
} else
{var statearr_24244_24311 = state_24179__$1;(statearr_24244_24311[1] = 43);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 27))
{var inst_24118 = (state_24179[11]);var inst_24116 = (state_24179[12]);var inst_24123 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24116,inst_24118);var state_24179__$1 = (function (){var statearr_24245 = state_24179;(statearr_24245[7] = inst_24123);
return statearr_24245;
})();var statearr_24246_24312 = state_24179__$1;(statearr_24246_24312[2] = null);
(statearr_24246_24312[1] = 32);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 28))
{var inst_24136 = (state_24179[9]);var inst_24115 = (state_24179[13]);var inst_24136__$1 = cljs.core.seq(inst_24115);var state_24179__$1 = (function (){var statearr_24250 = state_24179;(statearr_24250[9] = inst_24136__$1);
return statearr_24250;
})();if(inst_24136__$1)
{var statearr_24251_24313 = state_24179__$1;(statearr_24251_24313[1] = 33);
} else
{var statearr_24252_24314 = state_24179__$1;(statearr_24252_24314[1] = 34);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 29))
{var inst_24163 = (state_24179[2]);var state_24179__$1 = state_24179;var statearr_24253_24315 = state_24179__$1;(statearr_24253_24315[2] = inst_24163);
(statearr_24253_24315[1] = 26);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 30))
{var inst_24117 = (state_24179[10]);var inst_24118 = (state_24179[11]);var inst_24116 = (state_24179[12]);var inst_24115 = (state_24179[13]);var inst_24132 = (state_24179[2]);var inst_24133 = (inst_24118 + 1);var tmp24247 = inst_24117;var tmp24248 = inst_24116;var tmp24249 = inst_24115;var inst_24115__$1 = tmp24249;var inst_24116__$1 = tmp24248;var inst_24117__$1 = tmp24247;var inst_24118__$1 = inst_24133;var state_24179__$1 = (function (){var statearr_24254 = state_24179;(statearr_24254[31] = inst_24132);
(statearr_24254[10] = inst_24117__$1);
(statearr_24254[11] = inst_24118__$1);
(statearr_24254[12] = inst_24116__$1);
(statearr_24254[13] = inst_24115__$1);
return statearr_24254;
})();var statearr_24255_24316 = state_24179__$1;(statearr_24255_24316[2] = null);
(statearr_24255_24316[1] = 25);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24180 === 31))
{var inst_24123 = (state_24179[7]);var inst_24124 = (state_24179[2]);var inst_24125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24126 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24123);var state_24179__$1 = (function (){var statearr_24256 = state_24179;(statearr_24256[32] = inst_24125);
(statearr_24256[33] = inst_24124);
return statearr_24256;
})();var statearr_24257_24317 = state_24179__$1;(statearr_24257_24317[2] = inst_24126);
cljs.core.async.impl.ioc_helpers.process_exception(state_24179__$1);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_24261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24261[0] = state_machine__5507__auto__);
(statearr_24261[1] = 1);
return statearr_24261;
});
var state_machine__5507__auto____1 = (function (state_24179){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24179);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24262){if((e24262 instanceof Object))
{var ex__5510__auto__ = e24262;var statearr_24263_24318 = state_24179;(statearr_24263_24318[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24179);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e24262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__24319 = state_24179;
state_24179 = G__24319;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24179){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24264 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24265);
return statearr_24264;
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
cljs.core.async.Mix = (function (){var obj24321 = {};return obj24321;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$208,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$209);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$208);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$209,chs);var pauses = pick(cljs.core.constant$keyword$207,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$210,solos,cljs.core.constant$keyword$211,pick(cljs.core.constant$keyword$208,chs),cljs.core.constant$keyword$212,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$207)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24431 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24432){
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
this.meta24432 = meta24432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24431.cljs$lang$type = true;
cljs.core.async.t24431.cljs$lang$ctorStr = "cljs.core.async/t24431";
cljs.core.async.t24431.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24431");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24431.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24431.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24431.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24431.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24431.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24431.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24431.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24433){var self__ = this;
var _24433__$1 = this;return self__.meta24432;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24433,meta24432__$1){var self__ = this;
var _24433__$1 = this;return (new cljs.core.async.t24431(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24432__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24431 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24431(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24432){return (new cljs.core.async.t24431(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24432));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24431(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24498){var state_val_24499 = (state_24498[1]);if((state_val_24499 === 1))
{var inst_24437 = (state_24498[7]);var inst_24437__$1 = calc_state();var inst_24438 = cljs.core.seq_QMARK_(inst_24437__$1);var state_24498__$1 = (function (){var statearr_24500 = state_24498;(statearr_24500[7] = inst_24437__$1);
return statearr_24500;
})();if(inst_24438)
{var statearr_24501_24541 = state_24498__$1;(statearr_24501_24541[1] = 2);
} else
{var statearr_24502_24542 = state_24498__$1;(statearr_24502_24542[1] = 3);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 2))
{var inst_24437 = (state_24498[7]);var inst_24440 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24437);var state_24498__$1 = state_24498;var statearr_24503_24543 = state_24498__$1;(statearr_24503_24543[2] = inst_24440);
(statearr_24503_24543[1] = 4);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 3))
{var inst_24437 = (state_24498[7]);var state_24498__$1 = state_24498;var statearr_24504_24544 = state_24498__$1;(statearr_24504_24544[2] = inst_24437);
(statearr_24504_24544[1] = 4);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 4))
{var inst_24437 = (state_24498[7]);var inst_24443 = (state_24498[2]);var inst_24444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24443,cljs.core.constant$keyword$212);var inst_24445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24443,cljs.core.constant$keyword$211);var inst_24446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24443,cljs.core.constant$keyword$210);var inst_24447 = inst_24437;var state_24498__$1 = (function (){var statearr_24505 = state_24498;(statearr_24505[8] = inst_24447);
(statearr_24505[9] = inst_24446);
(statearr_24505[10] = inst_24445);
(statearr_24505[11] = inst_24444);
return statearr_24505;
})();var statearr_24506_24545 = state_24498__$1;(statearr_24506_24545[2] = null);
(statearr_24506_24545[1] = 5);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 5))
{var inst_24447 = (state_24498[8]);var inst_24450 = cljs.core.seq_QMARK_(inst_24447);var state_24498__$1 = state_24498;if(inst_24450)
{var statearr_24507_24546 = state_24498__$1;(statearr_24507_24546[1] = 7);
} else
{var statearr_24508_24547 = state_24498__$1;(statearr_24508_24547[1] = 8);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 6))
{var inst_24496 = (state_24498[2]);var state_24498__$1 = state_24498;return cljs.core.async.impl.ioc_helpers.return_chan(state_24498__$1,inst_24496);
} else
{if((state_val_24499 === 7))
{var inst_24447 = (state_24498[8]);var inst_24452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24447);var state_24498__$1 = state_24498;var statearr_24509_24548 = state_24498__$1;(statearr_24509_24548[2] = inst_24452);
(statearr_24509_24548[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 8))
{var inst_24447 = (state_24498[8]);var state_24498__$1 = state_24498;var statearr_24510_24549 = state_24498__$1;(statearr_24510_24549[2] = inst_24447);
(statearr_24510_24549[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 9))
{var inst_24455 = (state_24498[12]);var inst_24455__$1 = (state_24498[2]);var inst_24456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24455__$1,cljs.core.constant$keyword$212);var inst_24457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24455__$1,cljs.core.constant$keyword$211);var inst_24458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24455__$1,cljs.core.constant$keyword$210);var state_24498__$1 = (function (){var statearr_24511 = state_24498;(statearr_24511[13] = inst_24457);
(statearr_24511[12] = inst_24455__$1);
(statearr_24511[14] = inst_24458);
return statearr_24511;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24498__$1,10,inst_24456);
} else
{if((state_val_24499 === 10))
{var inst_24463 = (state_24498[15]);var inst_24462 = (state_24498[16]);var inst_24461 = (state_24498[2]);var inst_24462__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24461,0,null);var inst_24463__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24461,1,null);var inst_24464 = (inst_24462__$1 == null);var inst_24465 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24463__$1,change);var inst_24466 = (inst_24464) || (inst_24465);var state_24498__$1 = (function (){var statearr_24512 = state_24498;(statearr_24512[15] = inst_24463__$1);
(statearr_24512[16] = inst_24462__$1);
return statearr_24512;
})();if(cljs.core.truth_(inst_24466))
{var statearr_24513_24550 = state_24498__$1;(statearr_24513_24550[1] = 11);
} else
{var statearr_24514_24551 = state_24498__$1;(statearr_24514_24551[1] = 12);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 11))
{var inst_24462 = (state_24498[16]);var inst_24468 = (inst_24462 == null);var state_24498__$1 = state_24498;if(cljs.core.truth_(inst_24468))
{var statearr_24515_24552 = state_24498__$1;(statearr_24515_24552[1] = 14);
} else
{var statearr_24516_24553 = state_24498__$1;(statearr_24516_24553[1] = 15);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 12))
{var inst_24463 = (state_24498[15]);var inst_24477 = (state_24498[17]);var inst_24458 = (state_24498[14]);var inst_24477__$1 = (inst_24458.cljs$core$IFn$_invoke$arity$1 ? inst_24458.cljs$core$IFn$_invoke$arity$1(inst_24463) : inst_24458.call(null,inst_24463));var state_24498__$1 = (function (){var statearr_24517 = state_24498;(statearr_24517[17] = inst_24477__$1);
return statearr_24517;
})();if(cljs.core.truth_(inst_24477__$1))
{var statearr_24518_24554 = state_24498__$1;(statearr_24518_24554[1] = 17);
} else
{var statearr_24519_24555 = state_24498__$1;(statearr_24519_24555[1] = 18);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 13))
{var inst_24494 = (state_24498[2]);var state_24498__$1 = state_24498;var statearr_24520_24556 = state_24498__$1;(statearr_24520_24556[2] = inst_24494);
(statearr_24520_24556[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 14))
{var inst_24463 = (state_24498[15]);var inst_24470 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24463);var state_24498__$1 = state_24498;var statearr_24521_24557 = state_24498__$1;(statearr_24521_24557[2] = inst_24470);
(statearr_24521_24557[1] = 16);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 15))
{var state_24498__$1 = state_24498;var statearr_24522_24558 = state_24498__$1;(statearr_24522_24558[2] = null);
(statearr_24522_24558[1] = 16);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 16))
{var inst_24473 = (state_24498[2]);var inst_24474 = calc_state();var inst_24447 = inst_24474;var state_24498__$1 = (function (){var statearr_24523 = state_24498;(statearr_24523[8] = inst_24447);
(statearr_24523[18] = inst_24473);
return statearr_24523;
})();var statearr_24524_24559 = state_24498__$1;(statearr_24524_24559[2] = null);
(statearr_24524_24559[1] = 5);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 17))
{var inst_24477 = (state_24498[17]);var state_24498__$1 = state_24498;var statearr_24525_24560 = state_24498__$1;(statearr_24525_24560[2] = inst_24477);
(statearr_24525_24560[1] = 19);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 18))
{var inst_24457 = (state_24498[13]);var inst_24463 = (state_24498[15]);var inst_24458 = (state_24498[14]);var inst_24480 = cljs.core.empty_QMARK_(inst_24458);var inst_24481 = (inst_24457.cljs$core$IFn$_invoke$arity$1 ? inst_24457.cljs$core$IFn$_invoke$arity$1(inst_24463) : inst_24457.call(null,inst_24463));var inst_24482 = cljs.core.not(inst_24481);var inst_24483 = (inst_24480) && (inst_24482);var state_24498__$1 = state_24498;var statearr_24526_24561 = state_24498__$1;(statearr_24526_24561[2] = inst_24483);
(statearr_24526_24561[1] = 19);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 19))
{var inst_24485 = (state_24498[2]);var state_24498__$1 = state_24498;if(cljs.core.truth_(inst_24485))
{var statearr_24527_24562 = state_24498__$1;(statearr_24527_24562[1] = 20);
} else
{var statearr_24528_24563 = state_24498__$1;(statearr_24528_24563[1] = 21);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 20))
{var inst_24462 = (state_24498[16]);var state_24498__$1 = state_24498;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24498__$1,23,out,inst_24462);
} else
{if((state_val_24499 === 21))
{var state_24498__$1 = state_24498;var statearr_24529_24564 = state_24498__$1;(statearr_24529_24564[2] = null);
(statearr_24529_24564[1] = 22);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 22))
{var inst_24455 = (state_24498[12]);var inst_24491 = (state_24498[2]);var inst_24447 = inst_24455;var state_24498__$1 = (function (){var statearr_24530 = state_24498;(statearr_24530[8] = inst_24447);
(statearr_24530[19] = inst_24491);
return statearr_24530;
})();var statearr_24531_24565 = state_24498__$1;(statearr_24531_24565[2] = null);
(statearr_24531_24565[1] = 5);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24499 === 23))
{var inst_24488 = (state_24498[2]);var state_24498__$1 = state_24498;var statearr_24532_24566 = state_24498__$1;(statearr_24532_24566[2] = inst_24488);
(statearr_24532_24566[1] = 22);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_24536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24536[0] = state_machine__5507__auto__);
(statearr_24536[1] = 1);
return statearr_24536;
});
var state_machine__5507__auto____1 = (function (state_24498){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24498);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24537){if((e24537 instanceof Object))
{var ex__5510__auto__ = e24537;var statearr_24538_24567 = state_24498;(statearr_24538_24567[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24498);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e24537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__24568 = state_24498;
state_24498 = G__24568;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24498){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24539 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24540);
return statearr_24539;
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
cljs.core.async.Pub = (function (){var obj24570 = {};return obj24570;
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
return (function (p1__24571_SHARP_){if(cljs.core.truth_((p1__24571_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24571_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24571_SHARP_.call(null,topic))))
{return p1__24571_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24571_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24696 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24697){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24697 = meta24697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24696.cljs$lang$type = true;
cljs.core.async.t24696.cljs$lang$ctorStr = "cljs.core.async/t24696";
cljs.core.async.t24696.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24696");
});})(mults,ensure_mult))
;
cljs.core.async.t24696.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24696.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24696.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24696.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24698){var self__ = this;
var _24698__$1 = this;return self__.meta24697;
});})(mults,ensure_mult))
;
cljs.core.async.t24696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24698,meta24697__$1){var self__ = this;
var _24698__$1 = this;return (new cljs.core.async.t24696(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24697__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24696 = ((function (mults,ensure_mult){
return (function __GT_t24696(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24697){return (new cljs.core.async.t24696(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24697));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24696(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24772){var state_val_24773 = (state_24772[1]);if((state_val_24773 === 1))
{var state_24772__$1 = state_24772;var statearr_24774_24821 = state_24772__$1;(statearr_24774_24821[2] = null);
(statearr_24774_24821[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 2))
{var state_24772__$1 = state_24772;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,4,ch);
} else
{if((state_val_24773 === 3))
{var inst_24770 = (state_24772[2]);var state_24772__$1 = state_24772;return cljs.core.async.impl.ioc_helpers.return_chan(state_24772__$1,inst_24770);
} else
{if((state_val_24773 === 4))
{var inst_24701 = (state_24772[7]);var inst_24701__$1 = (state_24772[2]);var inst_24702 = (inst_24701__$1 == null);var state_24772__$1 = (function (){var statearr_24775 = state_24772;(statearr_24775[7] = inst_24701__$1);
return statearr_24775;
})();if(cljs.core.truth_(inst_24702))
{var statearr_24776_24822 = state_24772__$1;(statearr_24776_24822[1] = 5);
} else
{var statearr_24777_24823 = state_24772__$1;(statearr_24777_24823[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 5))
{var inst_24708 = cljs.core.deref(mults);var inst_24709 = cljs.core.vals(inst_24708);var inst_24710 = cljs.core.seq(inst_24709);var inst_24711 = inst_24710;var inst_24712 = null;var inst_24713 = 0;var inst_24714 = 0;var state_24772__$1 = (function (){var statearr_24778 = state_24772;(statearr_24778[8] = inst_24711);
(statearr_24778[9] = inst_24712);
(statearr_24778[10] = inst_24713);
(statearr_24778[11] = inst_24714);
return statearr_24778;
})();var statearr_24779_24824 = state_24772__$1;(statearr_24779_24824[2] = null);
(statearr_24779_24824[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 6))
{var inst_24749 = (state_24772[12]);var inst_24701 = (state_24772[7]);var inst_24751 = (state_24772[13]);var inst_24749__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24701) : topic_fn.call(null,inst_24701));var inst_24750 = cljs.core.deref(mults);var inst_24751__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24750,inst_24749__$1);var state_24772__$1 = (function (){var statearr_24780 = state_24772;(statearr_24780[12] = inst_24749__$1);
(statearr_24780[13] = inst_24751__$1);
return statearr_24780;
})();if(cljs.core.truth_(inst_24751__$1))
{var statearr_24781_24825 = state_24772__$1;(statearr_24781_24825[1] = 19);
} else
{var statearr_24782_24826 = state_24772__$1;(statearr_24782_24826[1] = 20);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 7))
{var inst_24768 = (state_24772[2]);var state_24772__$1 = state_24772;var statearr_24783_24827 = state_24772__$1;(statearr_24783_24827[2] = inst_24768);
(statearr_24783_24827[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 8))
{var inst_24713 = (state_24772[10]);var inst_24714 = (state_24772[11]);var inst_24716 = (inst_24714 < inst_24713);var inst_24717 = inst_24716;var state_24772__$1 = state_24772;if(cljs.core.truth_(inst_24717))
{var statearr_24787_24828 = state_24772__$1;(statearr_24787_24828[1] = 10);
} else
{var statearr_24788_24829 = state_24772__$1;(statearr_24788_24829[1] = 11);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 9))
{var inst_24747 = (state_24772[2]);var state_24772__$1 = state_24772;var statearr_24789_24830 = state_24772__$1;(statearr_24789_24830[2] = inst_24747);
(statearr_24789_24830[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 10))
{var inst_24711 = (state_24772[8]);var inst_24712 = (state_24772[9]);var inst_24713 = (state_24772[10]);var inst_24714 = (state_24772[11]);var inst_24719 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24712,inst_24714);var inst_24720 = cljs.core.async.muxch_STAR_(inst_24719);var inst_24721 = cljs.core.async.close_BANG_(inst_24720);var inst_24722 = (inst_24714 + 1);var tmp24784 = inst_24711;var tmp24785 = inst_24712;var tmp24786 = inst_24713;var inst_24711__$1 = tmp24784;var inst_24712__$1 = tmp24785;var inst_24713__$1 = tmp24786;var inst_24714__$1 = inst_24722;var state_24772__$1 = (function (){var statearr_24790 = state_24772;(statearr_24790[8] = inst_24711__$1);
(statearr_24790[14] = inst_24721);
(statearr_24790[9] = inst_24712__$1);
(statearr_24790[10] = inst_24713__$1);
(statearr_24790[11] = inst_24714__$1);
return statearr_24790;
})();var statearr_24791_24831 = state_24772__$1;(statearr_24791_24831[2] = null);
(statearr_24791_24831[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 11))
{var inst_24725 = (state_24772[15]);var inst_24711 = (state_24772[8]);var inst_24725__$1 = cljs.core.seq(inst_24711);var state_24772__$1 = (function (){var statearr_24792 = state_24772;(statearr_24792[15] = inst_24725__$1);
return statearr_24792;
})();if(inst_24725__$1)
{var statearr_24793_24832 = state_24772__$1;(statearr_24793_24832[1] = 13);
} else
{var statearr_24794_24833 = state_24772__$1;(statearr_24794_24833[1] = 14);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 12))
{var inst_24745 = (state_24772[2]);var state_24772__$1 = state_24772;var statearr_24795_24834 = state_24772__$1;(statearr_24795_24834[2] = inst_24745);
(statearr_24795_24834[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 13))
{var inst_24725 = (state_24772[15]);var inst_24727 = cljs.core.chunked_seq_QMARK_(inst_24725);var state_24772__$1 = state_24772;if(inst_24727)
{var statearr_24796_24835 = state_24772__$1;(statearr_24796_24835[1] = 16);
} else
{var statearr_24797_24836 = state_24772__$1;(statearr_24797_24836[1] = 17);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 14))
{var state_24772__$1 = state_24772;var statearr_24798_24837 = state_24772__$1;(statearr_24798_24837[2] = null);
(statearr_24798_24837[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 15))
{var inst_24743 = (state_24772[2]);var state_24772__$1 = state_24772;var statearr_24799_24838 = state_24772__$1;(statearr_24799_24838[2] = inst_24743);
(statearr_24799_24838[1] = 12);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 16))
{var inst_24725 = (state_24772[15]);var inst_24729 = cljs.core.chunk_first(inst_24725);var inst_24730 = cljs.core.chunk_rest(inst_24725);var inst_24731 = cljs.core.count(inst_24729);var inst_24711 = inst_24730;var inst_24712 = inst_24729;var inst_24713 = inst_24731;var inst_24714 = 0;var state_24772__$1 = (function (){var statearr_24800 = state_24772;(statearr_24800[8] = inst_24711);
(statearr_24800[9] = inst_24712);
(statearr_24800[10] = inst_24713);
(statearr_24800[11] = inst_24714);
return statearr_24800;
})();var statearr_24801_24839 = state_24772__$1;(statearr_24801_24839[2] = null);
(statearr_24801_24839[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 17))
{var inst_24725 = (state_24772[15]);var inst_24734 = cljs.core.first(inst_24725);var inst_24735 = cljs.core.async.muxch_STAR_(inst_24734);var inst_24736 = cljs.core.async.close_BANG_(inst_24735);var inst_24737 = cljs.core.next(inst_24725);var inst_24711 = inst_24737;var inst_24712 = null;var inst_24713 = 0;var inst_24714 = 0;var state_24772__$1 = (function (){var statearr_24802 = state_24772;(statearr_24802[8] = inst_24711);
(statearr_24802[9] = inst_24712);
(statearr_24802[10] = inst_24713);
(statearr_24802[11] = inst_24714);
(statearr_24802[16] = inst_24736);
return statearr_24802;
})();var statearr_24803_24840 = state_24772__$1;(statearr_24803_24840[2] = null);
(statearr_24803_24840[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 18))
{var inst_24740 = (state_24772[2]);var state_24772__$1 = state_24772;var statearr_24804_24841 = state_24772__$1;(statearr_24804_24841[2] = inst_24740);
(statearr_24804_24841[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 19))
{var state_24772__$1 = state_24772;var statearr_24805_24842 = state_24772__$1;(statearr_24805_24842[2] = null);
(statearr_24805_24842[1] = 24);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 20))
{var state_24772__$1 = state_24772;var statearr_24806_24843 = state_24772__$1;(statearr_24806_24843[2] = null);
(statearr_24806_24843[1] = 21);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 21))
{var inst_24765 = (state_24772[2]);var state_24772__$1 = (function (){var statearr_24807 = state_24772;(statearr_24807[17] = inst_24765);
return statearr_24807;
})();var statearr_24808_24844 = state_24772__$1;(statearr_24808_24844[2] = null);
(statearr_24808_24844[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 22))
{var inst_24762 = (state_24772[2]);var state_24772__$1 = state_24772;var statearr_24809_24845 = state_24772__$1;(statearr_24809_24845[2] = inst_24762);
(statearr_24809_24845[1] = 21);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 23))
{var inst_24749 = (state_24772[12]);var inst_24753 = (state_24772[2]);var inst_24754 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24749);var state_24772__$1 = (function (){var statearr_24810 = state_24772;(statearr_24810[18] = inst_24753);
return statearr_24810;
})();var statearr_24811_24846 = state_24772__$1;(statearr_24811_24846[2] = inst_24754);
cljs.core.async.impl.ioc_helpers.process_exception(state_24772__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24773 === 24))
{var inst_24701 = (state_24772[7]);var inst_24751 = (state_24772[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24772,23,Object,null,22);var inst_24758 = cljs.core.async.muxch_STAR_(inst_24751);var state_24772__$1 = state_24772;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24772__$1,25,inst_24758,inst_24701);
} else
{if((state_val_24773 === 25))
{var inst_24760 = (state_24772[2]);var state_24772__$1 = state_24772;var statearr_24812_24847 = state_24772__$1;(statearr_24812_24847[2] = inst_24760);
cljs.core.async.impl.ioc_helpers.process_exception(state_24772__$1);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_24816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24816[0] = state_machine__5507__auto__);
(statearr_24816[1] = 1);
return statearr_24816;
});
var state_machine__5507__auto____1 = (function (state_24772){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24772);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24817){if((e24817 instanceof Object))
{var ex__5510__auto__ = e24817;var statearr_24818_24848 = state_24772;(statearr_24818_24848[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24772);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e24817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__24849 = state_24772;
state_24772 = G__24849;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24772){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24819 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24820);
return statearr_24819;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24956){var state_val_24957 = (state_24956[1]);if((state_val_24957 === 1))
{var state_24956__$1 = state_24956;var statearr_24958_24987 = state_24956__$1;(statearr_24958_24987[2] = null);
(statearr_24958_24987[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 2))
{var inst_24919 = cljs.core.reset_BANG_(dctr,cnt);var inst_24920 = 0;var state_24956__$1 = (function (){var statearr_24959 = state_24956;(statearr_24959[7] = inst_24920);
(statearr_24959[8] = inst_24919);
return statearr_24959;
})();var statearr_24960_24988 = state_24956__$1;(statearr_24960_24988[2] = null);
(statearr_24960_24988[1] = 4);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 3))
{var inst_24954 = (state_24956[2]);var state_24956__$1 = state_24956;return cljs.core.async.impl.ioc_helpers.return_chan(state_24956__$1,inst_24954);
} else
{if((state_val_24957 === 4))
{var inst_24920 = (state_24956[7]);var inst_24922 = (inst_24920 < cnt);var state_24956__$1 = state_24956;if(cljs.core.truth_(inst_24922))
{var statearr_24961_24989 = state_24956__$1;(statearr_24961_24989[1] = 6);
} else
{var statearr_24962_24990 = state_24956__$1;(statearr_24962_24990[1] = 7);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 5))
{var inst_24940 = (state_24956[2]);var state_24956__$1 = (function (){var statearr_24963 = state_24956;(statearr_24963[9] = inst_24940);
return statearr_24963;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24956__$1,12,dchan);
} else
{if((state_val_24957 === 6))
{var state_24956__$1 = state_24956;var statearr_24964_24991 = state_24956__$1;(statearr_24964_24991[2] = null);
(statearr_24964_24991[1] = 11);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 7))
{var state_24956__$1 = state_24956;var statearr_24965_24992 = state_24956__$1;(statearr_24965_24992[2] = null);
(statearr_24965_24992[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 8))
{var inst_24938 = (state_24956[2]);var state_24956__$1 = state_24956;var statearr_24966_24993 = state_24956__$1;(statearr_24966_24993[2] = inst_24938);
(statearr_24966_24993[1] = 5);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 9))
{var inst_24920 = (state_24956[7]);var inst_24933 = (state_24956[2]);var inst_24934 = (inst_24920 + 1);var inst_24920__$1 = inst_24934;var state_24956__$1 = (function (){var statearr_24967 = state_24956;(statearr_24967[7] = inst_24920__$1);
(statearr_24967[10] = inst_24933);
return statearr_24967;
})();var statearr_24968_24994 = state_24956__$1;(statearr_24968_24994[2] = null);
(statearr_24968_24994[1] = 4);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 10))
{var inst_24924 = (state_24956[2]);var inst_24925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24956__$1 = (function (){var statearr_24969 = state_24956;(statearr_24969[11] = inst_24924);
return statearr_24969;
})();var statearr_24970_24995 = state_24956__$1;(statearr_24970_24995[2] = inst_24925);
cljs.core.async.impl.ioc_helpers.process_exception(state_24956__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 11))
{var inst_24920 = (state_24956[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24956,10,Object,null,9);var inst_24929 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24920) : chs__$1.call(null,inst_24920));var inst_24930 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24920) : done.call(null,inst_24920));var inst_24931 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24929,inst_24930);var state_24956__$1 = state_24956;var statearr_24971_24996 = state_24956__$1;(statearr_24971_24996[2] = inst_24931);
cljs.core.async.impl.ioc_helpers.process_exception(state_24956__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 12))
{var inst_24942 = (state_24956[12]);var inst_24942__$1 = (state_24956[2]);var inst_24943 = cljs.core.some(cljs.core.nil_QMARK_,inst_24942__$1);var state_24956__$1 = (function (){var statearr_24972 = state_24956;(statearr_24972[12] = inst_24942__$1);
return statearr_24972;
})();if(cljs.core.truth_(inst_24943))
{var statearr_24973_24997 = state_24956__$1;(statearr_24973_24997[1] = 13);
} else
{var statearr_24974_24998 = state_24956__$1;(statearr_24974_24998[1] = 14);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 13))
{var inst_24945 = cljs.core.async.close_BANG_(out);var state_24956__$1 = state_24956;var statearr_24975_24999 = state_24956__$1;(statearr_24975_24999[2] = inst_24945);
(statearr_24975_24999[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 14))
{var inst_24942 = (state_24956[12]);var inst_24947 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24942);var state_24956__$1 = state_24956;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24956__$1,16,out,inst_24947);
} else
{if((state_val_24957 === 15))
{var inst_24952 = (state_24956[2]);var state_24956__$1 = state_24956;var statearr_24976_25000 = state_24956__$1;(statearr_24976_25000[2] = inst_24952);
(statearr_24976_25000[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24957 === 16))
{var inst_24949 = (state_24956[2]);var state_24956__$1 = (function (){var statearr_24977 = state_24956;(statearr_24977[13] = inst_24949);
return statearr_24977;
})();var statearr_24978_25001 = state_24956__$1;(statearr_24978_25001[2] = null);
(statearr_24978_25001[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_24982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24982[0] = state_machine__5507__auto__);
(statearr_24982[1] = 1);
return statearr_24982;
});
var state_machine__5507__auto____1 = (function (state_24956){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24956);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24983){if((e24983 instanceof Object))
{var ex__5510__auto__ = e24983;var statearr_24984_25002 = state_24956;(statearr_24984_25002[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24956);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e24983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25003 = state_24956;
state_24956 = G__25003;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24956){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24985 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24986);
return statearr_24985;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25087){var state_val_25088 = (state_25087[1]);if((state_val_25088 === 1))
{var inst_25058 = cljs.core.vec(chs);var inst_25059 = inst_25058;var state_25087__$1 = (function (){var statearr_25089 = state_25087;(statearr_25089[7] = inst_25059);
return statearr_25089;
})();var statearr_25090_25112 = state_25087__$1;(statearr_25090_25112[2] = null);
(statearr_25090_25112[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25088 === 2))
{var inst_25059 = (state_25087[7]);var inst_25061 = cljs.core.count(inst_25059);var inst_25062 = (inst_25061 > 0);var state_25087__$1 = state_25087;if(cljs.core.truth_(inst_25062))
{var statearr_25091_25113 = state_25087__$1;(statearr_25091_25113[1] = 4);
} else
{var statearr_25092_25114 = state_25087__$1;(statearr_25092_25114[1] = 5);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25088 === 3))
{var inst_25085 = (state_25087[2]);var state_25087__$1 = state_25087;return cljs.core.async.impl.ioc_helpers.return_chan(state_25087__$1,inst_25085);
} else
{if((state_val_25088 === 4))
{var inst_25059 = (state_25087[7]);var state_25087__$1 = state_25087;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25087__$1,7,inst_25059);
} else
{if((state_val_25088 === 5))
{var inst_25081 = cljs.core.async.close_BANG_(out);var state_25087__$1 = state_25087;var statearr_25093_25115 = state_25087__$1;(statearr_25093_25115[2] = inst_25081);
(statearr_25093_25115[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25088 === 6))
{var inst_25083 = (state_25087[2]);var state_25087__$1 = state_25087;var statearr_25094_25116 = state_25087__$1;(statearr_25094_25116[2] = inst_25083);
(statearr_25094_25116[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25088 === 7))
{var inst_25066 = (state_25087[8]);var inst_25067 = (state_25087[9]);var inst_25066__$1 = (state_25087[2]);var inst_25067__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25066__$1,0,null);var inst_25068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25066__$1,1,null);var inst_25069 = (inst_25067__$1 == null);var state_25087__$1 = (function (){var statearr_25095 = state_25087;(statearr_25095[10] = inst_25068);
(statearr_25095[8] = inst_25066__$1);
(statearr_25095[9] = inst_25067__$1);
return statearr_25095;
})();if(cljs.core.truth_(inst_25069))
{var statearr_25096_25117 = state_25087__$1;(statearr_25096_25117[1] = 8);
} else
{var statearr_25097_25118 = state_25087__$1;(statearr_25097_25118[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25088 === 8))
{var inst_25068 = (state_25087[10]);var inst_25066 = (state_25087[8]);var inst_25067 = (state_25087[9]);var inst_25059 = (state_25087[7]);var inst_25071 = (function (){var c = inst_25068;var v = inst_25067;var vec__25064 = inst_25066;var cs = inst_25059;return ((function (c,v,vec__25064,cs,inst_25068,inst_25066,inst_25067,inst_25059,state_val_25088){
return (function (p1__25004_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25004_SHARP_);
});
;})(c,v,vec__25064,cs,inst_25068,inst_25066,inst_25067,inst_25059,state_val_25088))
})();var inst_25072 = cljs.core.filterv(inst_25071,inst_25059);var inst_25059__$1 = inst_25072;var state_25087__$1 = (function (){var statearr_25098 = state_25087;(statearr_25098[7] = inst_25059__$1);
return statearr_25098;
})();var statearr_25099_25119 = state_25087__$1;(statearr_25099_25119[2] = null);
(statearr_25099_25119[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25088 === 9))
{var inst_25067 = (state_25087[9]);var state_25087__$1 = state_25087;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25087__$1,11,out,inst_25067);
} else
{if((state_val_25088 === 10))
{var inst_25079 = (state_25087[2]);var state_25087__$1 = state_25087;var statearr_25101_25120 = state_25087__$1;(statearr_25101_25120[2] = inst_25079);
(statearr_25101_25120[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25088 === 11))
{var inst_25059 = (state_25087[7]);var inst_25076 = (state_25087[2]);var tmp25100 = inst_25059;var inst_25059__$1 = tmp25100;var state_25087__$1 = (function (){var statearr_25102 = state_25087;(statearr_25102[7] = inst_25059__$1);
(statearr_25102[11] = inst_25076);
return statearr_25102;
})();var statearr_25103_25121 = state_25087__$1;(statearr_25103_25121[2] = null);
(statearr_25103_25121[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25107 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25107[0] = state_machine__5507__auto__);
(statearr_25107[1] = 1);
return statearr_25107;
});
var state_machine__5507__auto____1 = (function (state_25087){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25087);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25108){if((e25108 instanceof Object))
{var ex__5510__auto__ = e25108;var statearr_25109_25122 = state_25087;(statearr_25109_25122[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25087);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25123 = state_25087;
state_25087 = G__25123;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25087){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25110 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25111);
return statearr_25110;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25193){var state_val_25194 = (state_25193[1]);if((state_val_25194 === 1))
{var inst_25170 = 0;var state_25193__$1 = (function (){var statearr_25195 = state_25193;(statearr_25195[7] = inst_25170);
return statearr_25195;
})();var statearr_25196_25217 = state_25193__$1;(statearr_25196_25217[2] = null);
(statearr_25196_25217[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25194 === 2))
{var inst_25170 = (state_25193[7]);var inst_25172 = (inst_25170 < n);var state_25193__$1 = state_25193;if(cljs.core.truth_(inst_25172))
{var statearr_25197_25218 = state_25193__$1;(statearr_25197_25218[1] = 4);
} else
{var statearr_25198_25219 = state_25193__$1;(statearr_25198_25219[1] = 5);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25194 === 3))
{var inst_25190 = (state_25193[2]);var inst_25191 = cljs.core.async.close_BANG_(out);var state_25193__$1 = (function (){var statearr_25199 = state_25193;(statearr_25199[8] = inst_25190);
return statearr_25199;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25193__$1,inst_25191);
} else
{if((state_val_25194 === 4))
{var state_25193__$1 = state_25193;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25193__$1,7,ch);
} else
{if((state_val_25194 === 5))
{var state_25193__$1 = state_25193;var statearr_25200_25220 = state_25193__$1;(statearr_25200_25220[2] = null);
(statearr_25200_25220[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25194 === 6))
{var inst_25188 = (state_25193[2]);var state_25193__$1 = state_25193;var statearr_25201_25221 = state_25193__$1;(statearr_25201_25221[2] = inst_25188);
(statearr_25201_25221[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25194 === 7))
{var inst_25175 = (state_25193[9]);var inst_25175__$1 = (state_25193[2]);var inst_25176 = (inst_25175__$1 == null);var inst_25177 = cljs.core.not(inst_25176);var state_25193__$1 = (function (){var statearr_25202 = state_25193;(statearr_25202[9] = inst_25175__$1);
return statearr_25202;
})();if(inst_25177)
{var statearr_25203_25222 = state_25193__$1;(statearr_25203_25222[1] = 8);
} else
{var statearr_25204_25223 = state_25193__$1;(statearr_25204_25223[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25194 === 8))
{var inst_25175 = (state_25193[9]);var state_25193__$1 = state_25193;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25193__$1,11,out,inst_25175);
} else
{if((state_val_25194 === 9))
{var state_25193__$1 = state_25193;var statearr_25205_25224 = state_25193__$1;(statearr_25205_25224[2] = null);
(statearr_25205_25224[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25194 === 10))
{var inst_25185 = (state_25193[2]);var state_25193__$1 = state_25193;var statearr_25206_25225 = state_25193__$1;(statearr_25206_25225[2] = inst_25185);
(statearr_25206_25225[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25194 === 11))
{var inst_25170 = (state_25193[7]);var inst_25180 = (state_25193[2]);var inst_25181 = (inst_25170 + 1);var inst_25170__$1 = inst_25181;var state_25193__$1 = (function (){var statearr_25207 = state_25193;(statearr_25207[10] = inst_25180);
(statearr_25207[7] = inst_25170__$1);
return statearr_25207;
})();var statearr_25208_25226 = state_25193__$1;(statearr_25208_25226[2] = null);
(statearr_25208_25226[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25212 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25212[0] = state_machine__5507__auto__);
(statearr_25212[1] = 1);
return statearr_25212;
});
var state_machine__5507__auto____1 = (function (state_25193){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25193);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25213){if((e25213 instanceof Object))
{var ex__5510__auto__ = e25213;var statearr_25214_25227 = state_25193;(statearr_25214_25227[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25193);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25213;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25228 = state_25193;
state_25193 = G__25228;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25193){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25215 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25216);
return statearr_25215;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25300){var state_val_25301 = (state_25300[1]);if((state_val_25301 === 1))
{var inst_25277 = null;var state_25300__$1 = (function (){var statearr_25302 = state_25300;(statearr_25302[7] = inst_25277);
return statearr_25302;
})();var statearr_25303_25326 = state_25300__$1;(statearr_25303_25326[2] = null);
(statearr_25303_25326[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25301 === 2))
{var state_25300__$1 = state_25300;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25300__$1,4,ch);
} else
{if((state_val_25301 === 3))
{var inst_25297 = (state_25300[2]);var inst_25298 = cljs.core.async.close_BANG_(out);var state_25300__$1 = (function (){var statearr_25304 = state_25300;(statearr_25304[8] = inst_25297);
return statearr_25304;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25300__$1,inst_25298);
} else
{if((state_val_25301 === 4))
{var inst_25280 = (state_25300[9]);var inst_25280__$1 = (state_25300[2]);var inst_25281 = (inst_25280__$1 == null);var inst_25282 = cljs.core.not(inst_25281);var state_25300__$1 = (function (){var statearr_25305 = state_25300;(statearr_25305[9] = inst_25280__$1);
return statearr_25305;
})();if(inst_25282)
{var statearr_25306_25327 = state_25300__$1;(statearr_25306_25327[1] = 5);
} else
{var statearr_25307_25328 = state_25300__$1;(statearr_25307_25328[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25301 === 5))
{var inst_25280 = (state_25300[9]);var inst_25277 = (state_25300[7]);var inst_25284 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25280,inst_25277);var state_25300__$1 = state_25300;if(inst_25284)
{var statearr_25308_25329 = state_25300__$1;(statearr_25308_25329[1] = 8);
} else
{var statearr_25309_25330 = state_25300__$1;(statearr_25309_25330[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25301 === 6))
{var state_25300__$1 = state_25300;var statearr_25311_25331 = state_25300__$1;(statearr_25311_25331[2] = null);
(statearr_25311_25331[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25301 === 7))
{var inst_25295 = (state_25300[2]);var state_25300__$1 = state_25300;var statearr_25312_25332 = state_25300__$1;(statearr_25312_25332[2] = inst_25295);
(statearr_25312_25332[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25301 === 8))
{var inst_25277 = (state_25300[7]);var tmp25310 = inst_25277;var inst_25277__$1 = tmp25310;var state_25300__$1 = (function (){var statearr_25313 = state_25300;(statearr_25313[7] = inst_25277__$1);
return statearr_25313;
})();var statearr_25314_25333 = state_25300__$1;(statearr_25314_25333[2] = null);
(statearr_25314_25333[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25301 === 9))
{var inst_25280 = (state_25300[9]);var state_25300__$1 = state_25300;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25300__$1,11,out,inst_25280);
} else
{if((state_val_25301 === 10))
{var inst_25292 = (state_25300[2]);var state_25300__$1 = state_25300;var statearr_25315_25334 = state_25300__$1;(statearr_25315_25334[2] = inst_25292);
(statearr_25315_25334[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25301 === 11))
{var inst_25280 = (state_25300[9]);var inst_25289 = (state_25300[2]);var inst_25277 = inst_25280;var state_25300__$1 = (function (){var statearr_25316 = state_25300;(statearr_25316[7] = inst_25277);
(statearr_25316[10] = inst_25289);
return statearr_25316;
})();var statearr_25317_25335 = state_25300__$1;(statearr_25317_25335[2] = null);
(statearr_25317_25335[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25321 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25321[0] = state_machine__5507__auto__);
(statearr_25321[1] = 1);
return statearr_25321;
});
var state_machine__5507__auto____1 = (function (state_25300){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25300);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25322){if((e25322 instanceof Object))
{var ex__5510__auto__ = e25322;var statearr_25323_25336 = state_25300;(statearr_25323_25336[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25300);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25337 = state_25300;
state_25300 = G__25337;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25300){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25324 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25325);
return statearr_25324;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25442){var state_val_25443 = (state_25442[1]);if((state_val_25443 === 1))
{var inst_25405 = (new Array(n));var inst_25406 = inst_25405;var inst_25407 = 0;var state_25442__$1 = (function (){var statearr_25444 = state_25442;(statearr_25444[7] = inst_25406);
(statearr_25444[8] = inst_25407);
return statearr_25444;
})();var statearr_25445_25473 = state_25442__$1;(statearr_25445_25473[2] = null);
(statearr_25445_25473[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 2))
{var state_25442__$1 = state_25442;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25442__$1,4,ch);
} else
{if((state_val_25443 === 3))
{var inst_25440 = (state_25442[2]);var state_25442__$1 = state_25442;return cljs.core.async.impl.ioc_helpers.return_chan(state_25442__$1,inst_25440);
} else
{if((state_val_25443 === 4))
{var inst_25410 = (state_25442[9]);var inst_25410__$1 = (state_25442[2]);var inst_25411 = (inst_25410__$1 == null);var inst_25412 = cljs.core.not(inst_25411);var state_25442__$1 = (function (){var statearr_25446 = state_25442;(statearr_25446[9] = inst_25410__$1);
return statearr_25446;
})();if(inst_25412)
{var statearr_25447_25474 = state_25442__$1;(statearr_25447_25474[1] = 5);
} else
{var statearr_25448_25475 = state_25442__$1;(statearr_25448_25475[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 5))
{var inst_25410 = (state_25442[9]);var inst_25415 = (state_25442[10]);var inst_25406 = (state_25442[7]);var inst_25407 = (state_25442[8]);var inst_25414 = (inst_25406[inst_25407] = inst_25410);var inst_25415__$1 = (inst_25407 + 1);var inst_25416 = (inst_25415__$1 < n);var state_25442__$1 = (function (){var statearr_25449 = state_25442;(statearr_25449[10] = inst_25415__$1);
(statearr_25449[11] = inst_25414);
return statearr_25449;
})();if(cljs.core.truth_(inst_25416))
{var statearr_25450_25476 = state_25442__$1;(statearr_25450_25476[1] = 8);
} else
{var statearr_25451_25477 = state_25442__$1;(statearr_25451_25477[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 6))
{var inst_25407 = (state_25442[8]);var inst_25428 = (inst_25407 > 0);var state_25442__$1 = state_25442;if(cljs.core.truth_(inst_25428))
{var statearr_25453_25478 = state_25442__$1;(statearr_25453_25478[1] = 12);
} else
{var statearr_25454_25479 = state_25442__$1;(statearr_25454_25479[1] = 13);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 7))
{var inst_25438 = (state_25442[2]);var state_25442__$1 = state_25442;var statearr_25455_25480 = state_25442__$1;(statearr_25455_25480[2] = inst_25438);
(statearr_25455_25480[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 8))
{var inst_25415 = (state_25442[10]);var inst_25406 = (state_25442[7]);var tmp25452 = inst_25406;var inst_25406__$1 = tmp25452;var inst_25407 = inst_25415;var state_25442__$1 = (function (){var statearr_25456 = state_25442;(statearr_25456[7] = inst_25406__$1);
(statearr_25456[8] = inst_25407);
return statearr_25456;
})();var statearr_25457_25481 = state_25442__$1;(statearr_25457_25481[2] = null);
(statearr_25457_25481[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 9))
{var inst_25406 = (state_25442[7]);var inst_25420 = cljs.core.vec(inst_25406);var state_25442__$1 = state_25442;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25442__$1,11,out,inst_25420);
} else
{if((state_val_25443 === 10))
{var inst_25426 = (state_25442[2]);var state_25442__$1 = state_25442;var statearr_25458_25482 = state_25442__$1;(statearr_25458_25482[2] = inst_25426);
(statearr_25458_25482[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 11))
{var inst_25422 = (state_25442[2]);var inst_25423 = (new Array(n));var inst_25406 = inst_25423;var inst_25407 = 0;var state_25442__$1 = (function (){var statearr_25459 = state_25442;(statearr_25459[12] = inst_25422);
(statearr_25459[7] = inst_25406);
(statearr_25459[8] = inst_25407);
return statearr_25459;
})();var statearr_25460_25483 = state_25442__$1;(statearr_25460_25483[2] = null);
(statearr_25460_25483[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 12))
{var inst_25406 = (state_25442[7]);var inst_25430 = cljs.core.vec(inst_25406);var state_25442__$1 = state_25442;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25442__$1,15,out,inst_25430);
} else
{if((state_val_25443 === 13))
{var state_25442__$1 = state_25442;var statearr_25461_25484 = state_25442__$1;(statearr_25461_25484[2] = null);
(statearr_25461_25484[1] = 14);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 14))
{var inst_25435 = (state_25442[2]);var inst_25436 = cljs.core.async.close_BANG_(out);var state_25442__$1 = (function (){var statearr_25462 = state_25442;(statearr_25462[13] = inst_25435);
return statearr_25462;
})();var statearr_25463_25485 = state_25442__$1;(statearr_25463_25485[2] = inst_25436);
(statearr_25463_25485[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25443 === 15))
{var inst_25432 = (state_25442[2]);var state_25442__$1 = state_25442;var statearr_25464_25486 = state_25442__$1;(statearr_25464_25486[2] = inst_25432);
(statearr_25464_25486[1] = 14);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25468[0] = state_machine__5507__auto__);
(statearr_25468[1] = 1);
return statearr_25468;
});
var state_machine__5507__auto____1 = (function (state_25442){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25442);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25469){if((e25469 instanceof Object))
{var ex__5510__auto__ = e25469;var statearr_25470_25487 = state_25442;(statearr_25470_25487[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25442);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25488 = state_25442;
state_25442 = G__25488;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25442){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25471 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25472);
return statearr_25471;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25601){var state_val_25602 = (state_25601[1]);if((state_val_25602 === 1))
{var inst_25560 = [];var inst_25561 = inst_25560;var inst_25562 = cljs.core.constant$keyword$213;var state_25601__$1 = (function (){var statearr_25603 = state_25601;(statearr_25603[7] = inst_25561);
(statearr_25603[8] = inst_25562);
return statearr_25603;
})();var statearr_25604_25632 = state_25601__$1;(statearr_25604_25632[2] = null);
(statearr_25604_25632[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 2))
{var state_25601__$1 = state_25601;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25601__$1,4,ch);
} else
{if((state_val_25602 === 3))
{var inst_25599 = (state_25601[2]);var state_25601__$1 = state_25601;return cljs.core.async.impl.ioc_helpers.return_chan(state_25601__$1,inst_25599);
} else
{if((state_val_25602 === 4))
{var inst_25565 = (state_25601[9]);var inst_25565__$1 = (state_25601[2]);var inst_25566 = (inst_25565__$1 == null);var inst_25567 = cljs.core.not(inst_25566);var state_25601__$1 = (function (){var statearr_25605 = state_25601;(statearr_25605[9] = inst_25565__$1);
return statearr_25605;
})();if(inst_25567)
{var statearr_25606_25633 = state_25601__$1;(statearr_25606_25633[1] = 5);
} else
{var statearr_25607_25634 = state_25601__$1;(statearr_25607_25634[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 5))
{var inst_25569 = (state_25601[10]);var inst_25565 = (state_25601[9]);var inst_25562 = (state_25601[8]);var inst_25569__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25565) : f.call(null,inst_25565));var inst_25570 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25569__$1,inst_25562);var inst_25571 = cljs.core.keyword_identical_QMARK_(inst_25562,cljs.core.constant$keyword$213);var inst_25572 = (inst_25570) || (inst_25571);var state_25601__$1 = (function (){var statearr_25608 = state_25601;(statearr_25608[10] = inst_25569__$1);
return statearr_25608;
})();if(cljs.core.truth_(inst_25572))
{var statearr_25609_25635 = state_25601__$1;(statearr_25609_25635[1] = 8);
} else
{var statearr_25610_25636 = state_25601__$1;(statearr_25610_25636[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 6))
{var inst_25561 = (state_25601[7]);var inst_25586 = inst_25561.length;var inst_25587 = (inst_25586 > 0);var state_25601__$1 = state_25601;if(cljs.core.truth_(inst_25587))
{var statearr_25612_25637 = state_25601__$1;(statearr_25612_25637[1] = 12);
} else
{var statearr_25613_25638 = state_25601__$1;(statearr_25613_25638[1] = 13);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 7))
{var inst_25597 = (state_25601[2]);var state_25601__$1 = state_25601;var statearr_25614_25639 = state_25601__$1;(statearr_25614_25639[2] = inst_25597);
(statearr_25614_25639[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 8))
{var inst_25569 = (state_25601[10]);var inst_25565 = (state_25601[9]);var inst_25561 = (state_25601[7]);var inst_25574 = inst_25561.push(inst_25565);var tmp25611 = inst_25561;var inst_25561__$1 = tmp25611;var inst_25562 = inst_25569;var state_25601__$1 = (function (){var statearr_25615 = state_25601;(statearr_25615[11] = inst_25574);
(statearr_25615[7] = inst_25561__$1);
(statearr_25615[8] = inst_25562);
return statearr_25615;
})();var statearr_25616_25640 = state_25601__$1;(statearr_25616_25640[2] = null);
(statearr_25616_25640[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 9))
{var inst_25561 = (state_25601[7]);var inst_25577 = cljs.core.vec(inst_25561);var state_25601__$1 = state_25601;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25601__$1,11,out,inst_25577);
} else
{if((state_val_25602 === 10))
{var inst_25584 = (state_25601[2]);var state_25601__$1 = state_25601;var statearr_25617_25641 = state_25601__$1;(statearr_25617_25641[2] = inst_25584);
(statearr_25617_25641[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 11))
{var inst_25569 = (state_25601[10]);var inst_25565 = (state_25601[9]);var inst_25579 = (state_25601[2]);var inst_25580 = [];var inst_25581 = inst_25580.push(inst_25565);var inst_25561 = inst_25580;var inst_25562 = inst_25569;var state_25601__$1 = (function (){var statearr_25618 = state_25601;(statearr_25618[12] = inst_25579);
(statearr_25618[13] = inst_25581);
(statearr_25618[7] = inst_25561);
(statearr_25618[8] = inst_25562);
return statearr_25618;
})();var statearr_25619_25642 = state_25601__$1;(statearr_25619_25642[2] = null);
(statearr_25619_25642[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 12))
{var inst_25561 = (state_25601[7]);var inst_25589 = cljs.core.vec(inst_25561);var state_25601__$1 = state_25601;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25601__$1,15,out,inst_25589);
} else
{if((state_val_25602 === 13))
{var state_25601__$1 = state_25601;var statearr_25620_25643 = state_25601__$1;(statearr_25620_25643[2] = null);
(statearr_25620_25643[1] = 14);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 14))
{var inst_25594 = (state_25601[2]);var inst_25595 = cljs.core.async.close_BANG_(out);var state_25601__$1 = (function (){var statearr_25621 = state_25601;(statearr_25621[14] = inst_25594);
return statearr_25621;
})();var statearr_25622_25644 = state_25601__$1;(statearr_25622_25644[2] = inst_25595);
(statearr_25622_25644[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25602 === 15))
{var inst_25591 = (state_25601[2]);var state_25601__$1 = state_25601;var statearr_25623_25645 = state_25601__$1;(statearr_25623_25645[2] = inst_25591);
(statearr_25623_25645[1] = 14);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25627[0] = state_machine__5507__auto__);
(statearr_25627[1] = 1);
return statearr_25627;
});
var state_machine__5507__auto____1 = (function (state_25601){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25601);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25628){if((e25628 instanceof Object))
{var ex__5510__auto__ = e25628;var statearr_25629_25646 = state_25601;(statearr_25629_25646[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25601);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25647 = state_25601;
state_25601 = G__25647;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25601){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25630 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25631);
return statearr_25630;
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
