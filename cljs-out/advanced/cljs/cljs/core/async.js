// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t36003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36003 = (function (f,fn_handler,meta36004){
this.f = f;
this.fn_handler = fn_handler;
this.meta36004 = meta36004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36003.cljs$lang$type = true;
cljs.core.async.t36003.cljs$lang$ctorStr = "cljs.core.async/t36003";
cljs.core.async.t36003.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36003");
});
cljs.core.async.t36003.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t36003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t36003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36005){var self__ = this;
var _36005__$1 = this;return self__.meta36004;
});
cljs.core.async.t36003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36005,meta36004__$1){var self__ = this;
var _36005__$1 = this;return (new cljs.core.async.t36003(self__.f,self__.fn_handler,meta36004__$1));
});
cljs.core.async.__GT_t36003 = (function __GT_t36003(f__$1,fn_handler__$1,meta36004){return (new cljs.core.async.t36003(f__$1,fn_handler__$1,meta36004));
});
}
return (new cljs.core.async.t36003(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__36007 = buff;if(G__36007)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__36007.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__36007.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36007);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36007);
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
{var val_36008 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36008) : fn1.call(null,val_36008));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36008) : fn1.call(null,val_36008));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___36009 = n;var x_36010 = 0;while(true){
if((x_36010 < n__4289__auto___36009))
{(a[x_36010] = 0);
{
var G__36011 = (x_36010 + 1);
x_36010 = G__36011;
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
var G__36012 = (i + 1);
i = G__36012;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t36016 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36016 = (function (flag,alt_flag,meta36017){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36017 = meta36017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36016.cljs$lang$type = true;
cljs.core.async.t36016.cljs$lang$ctorStr = "cljs.core.async/t36016";
cljs.core.async.t36016.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36016");
});
cljs.core.async.t36016.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t36016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t36016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36018){var self__ = this;
var _36018__$1 = this;return self__.meta36017;
});
cljs.core.async.t36016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36018,meta36017__$1){var self__ = this;
var _36018__$1 = this;return (new cljs.core.async.t36016(self__.flag,self__.alt_flag,meta36017__$1));
});
cljs.core.async.__GT_t36016 = (function __GT_t36016(flag__$1,alt_flag__$1,meta36017){return (new cljs.core.async.t36016(flag__$1,alt_flag__$1,meta36017));
});
}
return (new cljs.core.async.t36016(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t36022 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36022 = (function (cb,flag,alt_handler,meta36023){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36023 = meta36023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36022.cljs$lang$type = true;
cljs.core.async.t36022.cljs$lang$ctorStr = "cljs.core.async/t36022";
cljs.core.async.t36022.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36022");
});
cljs.core.async.t36022.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t36022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t36022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36024){var self__ = this;
var _36024__$1 = this;return self__.meta36023;
});
cljs.core.async.t36022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36024,meta36023__$1){var self__ = this;
var _36024__$1 = this;return (new cljs.core.async.t36022(self__.cb,self__.flag,self__.alt_handler,meta36023__$1));
});
cljs.core.async.__GT_t36022 = (function __GT_t36022(cb__$1,flag__$1,alt_handler__$1,meta36023){return (new cljs.core.async.t36022(cb__$1,flag__$1,alt_handler__$1,meta36023));
});
}
return (new cljs.core.async.t36022(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$555.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36025_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36025_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36025_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__36026 = (i + 1);
i = G__36026;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$539))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3429__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$539.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$539], null));
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
var alts_BANG___delegate = function (ports,p__36027){var map__36029 = p__36027;var map__36029__$1 = ((cljs.core.seq_QMARK_(map__36029))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36029):map__36029);var opts = map__36029__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__36027 = null;if (arguments.length > 1) {
  p__36027 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__36027);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36030){
var ports = cljs.core.first(arglist__36030);
var p__36027 = cljs.core.rest(arglist__36030);
return alts_BANG___delegate(ports,p__36027);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36038 = (function (ch,f,map_LT_,meta36039){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36039 = meta36039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36038.cljs$lang$type = true;
cljs.core.async.t36038.cljs$lang$ctorStr = "cljs.core.async/t36038";
cljs.core.async.t36038.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36038");
});
cljs.core.async.t36038.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t36038.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t36041 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36041 = (function (fn1,_,meta36039,ch,f,map_LT_,meta36042){
this.fn1 = fn1;
this._ = _;
this.meta36039 = meta36039;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36042 = meta36042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36041.cljs$lang$type = true;
cljs.core.async.t36041.cljs$lang$ctorStr = "cljs.core.async/t36041";
cljs.core.async.t36041.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36041");
});
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__36031_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__36031_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36031_SHARP_) : self__.f.call(null,p1__36031_SHARP_)))) : f1.call(null,(((p1__36031_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36031_SHARP_) : self__.f.call(null,p1__36031_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t36041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36043){var self__ = this;
var _36043__$1 = this;return self__.meta36042;
});
cljs.core.async.t36041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36043,meta36042__$1){var self__ = this;
var _36043__$1 = this;return (new cljs.core.async.t36041(self__.fn1,self__._,self__.meta36039,self__.ch,self__.f,self__.map_LT_,meta36042__$1));
});
cljs.core.async.__GT_t36041 = (function __GT_t36041(fn1__$1,___$2,meta36039__$1,ch__$2,f__$2,map_LT___$2,meta36042){return (new cljs.core.async.t36041(fn1__$1,___$2,meta36039__$1,ch__$2,f__$2,map_LT___$2,meta36042));
});
}
return (new cljs.core.async.t36041(fn1,___$1,self__.meta36039,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t36038.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36040){var self__ = this;
var _36040__$1 = this;return self__.meta36039;
});
cljs.core.async.t36038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36040,meta36039__$1){var self__ = this;
var _36040__$1 = this;return (new cljs.core.async.t36038(self__.ch,self__.f,self__.map_LT_,meta36039__$1));
});
cljs.core.async.__GT_t36038 = (function __GT_t36038(ch__$1,f__$1,map_LT___$1,meta36039){return (new cljs.core.async.t36038(ch__$1,f__$1,map_LT___$1,meta36039));
});
}
return (new cljs.core.async.t36038(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36047 = (function (ch,f,map_GT_,meta36048){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36048 = meta36048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36047.cljs$lang$type = true;
cljs.core.async.t36047.cljs$lang$ctorStr = "cljs.core.async/t36047";
cljs.core.async.t36047.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36047");
});
cljs.core.async.t36047.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t36047.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36047.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36049){var self__ = this;
var _36049__$1 = this;return self__.meta36048;
});
cljs.core.async.t36047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36049,meta36048__$1){var self__ = this;
var _36049__$1 = this;return (new cljs.core.async.t36047(self__.ch,self__.f,self__.map_GT_,meta36048__$1));
});
cljs.core.async.__GT_t36047 = (function __GT_t36047(ch__$1,f__$1,map_GT___$1,meta36048){return (new cljs.core.async.t36047(ch__$1,f__$1,map_GT___$1,meta36048));
});
}
return (new cljs.core.async.t36047(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36053 = (function (ch,p,filter_GT_,meta36054){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36054 = meta36054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36053.cljs$lang$type = true;
cljs.core.async.t36053.cljs$lang$ctorStr = "cljs.core.async/t36053";
cljs.core.async.t36053.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36053");
});
cljs.core.async.t36053.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t36053.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36053.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36055){var self__ = this;
var _36055__$1 = this;return self__.meta36054;
});
cljs.core.async.t36053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36055,meta36054__$1){var self__ = this;
var _36055__$1 = this;return (new cljs.core.async.t36053(self__.ch,self__.p,self__.filter_GT_,meta36054__$1));
});
cljs.core.async.__GT_t36053 = (function __GT_t36053(ch__$1,p__$1,filter_GT___$1,meta36054){return (new cljs.core.async.t36053(ch__$1,p__$1,filter_GT___$1,meta36054));
});
}
return (new cljs.core.async.t36053(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___36138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36117){var state_val_36118 = (state_36117[1]);if((state_val_36118 === 1))
{var state_36117__$1 = state_36117;var statearr_36119_36139 = state_36117__$1;(statearr_36119_36139[2] = null);
(statearr_36119_36139[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36118 === 2))
{var state_36117__$1 = state_36117;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36117__$1,4,ch);
} else
{if((state_val_36118 === 3))
{var inst_36115 = (state_36117[2]);var state_36117__$1 = state_36117;return cljs.core.async.impl.ioc_helpers.return_chan(state_36117__$1,inst_36115);
} else
{if((state_val_36118 === 4))
{var inst_36099 = (state_36117[7]);var inst_36099__$1 = (state_36117[2]);var inst_36100 = (inst_36099__$1 == null);var state_36117__$1 = (function (){var statearr_36120 = state_36117;(statearr_36120[7] = inst_36099__$1);
return statearr_36120;
})();if(cljs.core.truth_(inst_36100))
{var statearr_36121_36140 = state_36117__$1;(statearr_36121_36140[1] = 5);
} else
{var statearr_36122_36141 = state_36117__$1;(statearr_36122_36141[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36118 === 5))
{var inst_36102 = cljs.core.async.close_BANG_(out);var state_36117__$1 = state_36117;var statearr_36123_36142 = state_36117__$1;(statearr_36123_36142[2] = inst_36102);
(statearr_36123_36142[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36118 === 6))
{var inst_36099 = (state_36117[7]);var inst_36104 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36099) : p.call(null,inst_36099));var state_36117__$1 = state_36117;if(cljs.core.truth_(inst_36104))
{var statearr_36124_36143 = state_36117__$1;(statearr_36124_36143[1] = 8);
} else
{var statearr_36125_36144 = state_36117__$1;(statearr_36125_36144[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36118 === 7))
{var inst_36113 = (state_36117[2]);var state_36117__$1 = state_36117;var statearr_36126_36145 = state_36117__$1;(statearr_36126_36145[2] = inst_36113);
(statearr_36126_36145[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36118 === 8))
{var inst_36099 = (state_36117[7]);var state_36117__$1 = state_36117;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36117__$1,11,out,inst_36099);
} else
{if((state_val_36118 === 9))
{var state_36117__$1 = state_36117;var statearr_36127_36146 = state_36117__$1;(statearr_36127_36146[2] = null);
(statearr_36127_36146[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36118 === 10))
{var inst_36110 = (state_36117[2]);var state_36117__$1 = (function (){var statearr_36128 = state_36117;(statearr_36128[8] = inst_36110);
return statearr_36128;
})();var statearr_36129_36147 = state_36117__$1;(statearr_36129_36147[2] = null);
(statearr_36129_36147[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36118 === 11))
{var inst_36107 = (state_36117[2]);var state_36117__$1 = state_36117;var statearr_36130_36148 = state_36117__$1;(statearr_36130_36148[2] = inst_36107);
(statearr_36130_36148[1] = 10);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36134 = [null,null,null,null,null,null,null,null,null];(statearr_36134[0] = state_machine__5548__auto__);
(statearr_36134[1] = 1);
return statearr_36134;
});
var state_machine__5548__auto____1 = (function (state_36117){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36117);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36135){if((e36135 instanceof Object))
{var ex__5551__auto__ = e36135;var statearr_36136_36149 = state_36117;(statearr_36136_36149[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36117);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e36135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__36150 = state_36117;
state_36117 = G__36150;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36117){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36137 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36138);
return statearr_36137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36302){var state_val_36303 = (state_36302[1]);if((state_val_36303 === 1))
{var state_36302__$1 = state_36302;var statearr_36304_36341 = state_36302__$1;(statearr_36304_36341[2] = null);
(statearr_36304_36341[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 2))
{var state_36302__$1 = state_36302;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36302__$1,4,in$);
} else
{if((state_val_36303 === 3))
{var inst_36300 = (state_36302[2]);var state_36302__$1 = state_36302;return cljs.core.async.impl.ioc_helpers.return_chan(state_36302__$1,inst_36300);
} else
{if((state_val_36303 === 4))
{var inst_36248 = (state_36302[7]);var inst_36248__$1 = (state_36302[2]);var inst_36249 = (inst_36248__$1 == null);var state_36302__$1 = (function (){var statearr_36305 = state_36302;(statearr_36305[7] = inst_36248__$1);
return statearr_36305;
})();if(cljs.core.truth_(inst_36249))
{var statearr_36306_36342 = state_36302__$1;(statearr_36306_36342[1] = 5);
} else
{var statearr_36307_36343 = state_36302__$1;(statearr_36307_36343[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 5))
{var inst_36251 = cljs.core.async.close_BANG_(out);var state_36302__$1 = state_36302;var statearr_36308_36344 = state_36302__$1;(statearr_36308_36344[2] = inst_36251);
(statearr_36308_36344[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 6))
{var inst_36248 = (state_36302[7]);var inst_36253 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36248) : f.call(null,inst_36248));var inst_36258 = cljs.core.seq(inst_36253);var inst_36259 = inst_36258;var inst_36260 = null;var inst_36261 = 0;var inst_36262 = 0;var state_36302__$1 = (function (){var statearr_36309 = state_36302;(statearr_36309[8] = inst_36261);
(statearr_36309[9] = inst_36260);
(statearr_36309[10] = inst_36262);
(statearr_36309[11] = inst_36259);
return statearr_36309;
})();var statearr_36310_36345 = state_36302__$1;(statearr_36310_36345[2] = null);
(statearr_36310_36345[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 7))
{var inst_36298 = (state_36302[2]);var state_36302__$1 = state_36302;var statearr_36311_36346 = state_36302__$1;(statearr_36311_36346[2] = inst_36298);
(statearr_36311_36346[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 8))
{var inst_36261 = (state_36302[8]);var inst_36262 = (state_36302[10]);var inst_36264 = (inst_36262 < inst_36261);var inst_36265 = inst_36264;var state_36302__$1 = state_36302;if(cljs.core.truth_(inst_36265))
{var statearr_36312_36347 = state_36302__$1;(statearr_36312_36347[1] = 10);
} else
{var statearr_36313_36348 = state_36302__$1;(statearr_36313_36348[1] = 11);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 9))
{var inst_36295 = (state_36302[2]);var state_36302__$1 = (function (){var statearr_36314 = state_36302;(statearr_36314[12] = inst_36295);
return statearr_36314;
})();var statearr_36315_36349 = state_36302__$1;(statearr_36315_36349[2] = null);
(statearr_36315_36349[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 10))
{var inst_36260 = (state_36302[9]);var inst_36262 = (state_36302[10]);var inst_36267 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36260,inst_36262);var state_36302__$1 = state_36302;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36302__$1,13,out,inst_36267);
} else
{if((state_val_36303 === 11))
{var inst_36273 = (state_36302[13]);var inst_36259 = (state_36302[11]);var inst_36273__$1 = cljs.core.seq(inst_36259);var state_36302__$1 = (function (){var statearr_36319 = state_36302;(statearr_36319[13] = inst_36273__$1);
return statearr_36319;
})();if(inst_36273__$1)
{var statearr_36320_36350 = state_36302__$1;(statearr_36320_36350[1] = 14);
} else
{var statearr_36321_36351 = state_36302__$1;(statearr_36321_36351[1] = 15);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 12))
{var inst_36293 = (state_36302[2]);var state_36302__$1 = state_36302;var statearr_36322_36352 = state_36302__$1;(statearr_36322_36352[2] = inst_36293);
(statearr_36322_36352[1] = 9);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 13))
{var inst_36261 = (state_36302[8]);var inst_36260 = (state_36302[9]);var inst_36262 = (state_36302[10]);var inst_36259 = (state_36302[11]);var inst_36269 = (state_36302[2]);var inst_36270 = (inst_36262 + 1);var tmp36316 = inst_36261;var tmp36317 = inst_36260;var tmp36318 = inst_36259;var inst_36259__$1 = tmp36318;var inst_36260__$1 = tmp36317;var inst_36261__$1 = tmp36316;var inst_36262__$1 = inst_36270;var state_36302__$1 = (function (){var statearr_36323 = state_36302;(statearr_36323[8] = inst_36261__$1);
(statearr_36323[9] = inst_36260__$1);
(statearr_36323[10] = inst_36262__$1);
(statearr_36323[14] = inst_36269);
(statearr_36323[11] = inst_36259__$1);
return statearr_36323;
})();var statearr_36324_36353 = state_36302__$1;(statearr_36324_36353[2] = null);
(statearr_36324_36353[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 14))
{var inst_36273 = (state_36302[13]);var inst_36275 = cljs.core.chunked_seq_QMARK_(inst_36273);var state_36302__$1 = state_36302;if(inst_36275)
{var statearr_36325_36354 = state_36302__$1;(statearr_36325_36354[1] = 17);
} else
{var statearr_36326_36355 = state_36302__$1;(statearr_36326_36355[1] = 18);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 15))
{var state_36302__$1 = state_36302;var statearr_36327_36356 = state_36302__$1;(statearr_36327_36356[2] = null);
(statearr_36327_36356[1] = 16);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 16))
{var inst_36291 = (state_36302[2]);var state_36302__$1 = state_36302;var statearr_36328_36357 = state_36302__$1;(statearr_36328_36357[2] = inst_36291);
(statearr_36328_36357[1] = 12);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 17))
{var inst_36273 = (state_36302[13]);var inst_36277 = cljs.core.chunk_first(inst_36273);var inst_36278 = cljs.core.chunk_rest(inst_36273);var inst_36279 = cljs.core.count(inst_36277);var inst_36259 = inst_36278;var inst_36260 = inst_36277;var inst_36261 = inst_36279;var inst_36262 = 0;var state_36302__$1 = (function (){var statearr_36329 = state_36302;(statearr_36329[8] = inst_36261);
(statearr_36329[9] = inst_36260);
(statearr_36329[10] = inst_36262);
(statearr_36329[11] = inst_36259);
return statearr_36329;
})();var statearr_36330_36358 = state_36302__$1;(statearr_36330_36358[2] = null);
(statearr_36330_36358[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 18))
{var inst_36273 = (state_36302[13]);var inst_36282 = cljs.core.first(inst_36273);var state_36302__$1 = state_36302;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36302__$1,20,out,inst_36282);
} else
{if((state_val_36303 === 19))
{var inst_36288 = (state_36302[2]);var state_36302__$1 = state_36302;var statearr_36331_36359 = state_36302__$1;(statearr_36331_36359[2] = inst_36288);
(statearr_36331_36359[1] = 16);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36303 === 20))
{var inst_36273 = (state_36302[13]);var inst_36284 = (state_36302[2]);var inst_36285 = cljs.core.next(inst_36273);var inst_36259 = inst_36285;var inst_36260 = null;var inst_36261 = 0;var inst_36262 = 0;var state_36302__$1 = (function (){var statearr_36332 = state_36302;(statearr_36332[8] = inst_36261);
(statearr_36332[9] = inst_36260);
(statearr_36332[10] = inst_36262);
(statearr_36332[11] = inst_36259);
(statearr_36332[15] = inst_36284);
return statearr_36332;
})();var statearr_36333_36360 = state_36302__$1;(statearr_36333_36360[2] = null);
(statearr_36333_36360[1] = 8);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36337[0] = state_machine__5548__auto__);
(statearr_36337[1] = 1);
return statearr_36337;
});
var state_machine__5548__auto____1 = (function (state_36302){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36302);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36338){if((e36338 instanceof Object))
{var ex__5551__auto__ = e36338;var statearr_36339_36361 = state_36302;(statearr_36339_36361[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36302);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e36338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__36362 = state_36302;
state_36302 = G__36362;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36302){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36340 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___36443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36422){var state_val_36423 = (state_36422[1]);if((state_val_36423 === 1))
{var state_36422__$1 = state_36422;var statearr_36424_36444 = state_36422__$1;(statearr_36424_36444[2] = null);
(statearr_36424_36444[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36423 === 2))
{var state_36422__$1 = state_36422;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36422__$1,4,from);
} else
{if((state_val_36423 === 3))
{var inst_36420 = (state_36422[2]);var state_36422__$1 = state_36422;return cljs.core.async.impl.ioc_helpers.return_chan(state_36422__$1,inst_36420);
} else
{if((state_val_36423 === 4))
{var inst_36405 = (state_36422[7]);var inst_36405__$1 = (state_36422[2]);var inst_36406 = (inst_36405__$1 == null);var state_36422__$1 = (function (){var statearr_36425 = state_36422;(statearr_36425[7] = inst_36405__$1);
return statearr_36425;
})();if(cljs.core.truth_(inst_36406))
{var statearr_36426_36445 = state_36422__$1;(statearr_36426_36445[1] = 5);
} else
{var statearr_36427_36446 = state_36422__$1;(statearr_36427_36446[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36423 === 5))
{var state_36422__$1 = state_36422;if(cljs.core.truth_(close_QMARK_))
{var statearr_36428_36447 = state_36422__$1;(statearr_36428_36447[1] = 8);
} else
{var statearr_36429_36448 = state_36422__$1;(statearr_36429_36448[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36423 === 6))
{var inst_36405 = (state_36422[7]);var state_36422__$1 = state_36422;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36422__$1,11,to,inst_36405);
} else
{if((state_val_36423 === 7))
{var inst_36418 = (state_36422[2]);var state_36422__$1 = state_36422;var statearr_36430_36449 = state_36422__$1;(statearr_36430_36449[2] = inst_36418);
(statearr_36430_36449[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36423 === 8))
{var inst_36409 = cljs.core.async.close_BANG_(to);var state_36422__$1 = state_36422;var statearr_36431_36450 = state_36422__$1;(statearr_36431_36450[2] = inst_36409);
(statearr_36431_36450[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36423 === 9))
{var state_36422__$1 = state_36422;var statearr_36432_36451 = state_36422__$1;(statearr_36432_36451[2] = null);
(statearr_36432_36451[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36423 === 10))
{var inst_36412 = (state_36422[2]);var state_36422__$1 = state_36422;var statearr_36433_36452 = state_36422__$1;(statearr_36433_36452[2] = inst_36412);
(statearr_36433_36452[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36423 === 11))
{var inst_36415 = (state_36422[2]);var state_36422__$1 = (function (){var statearr_36434 = state_36422;(statearr_36434[8] = inst_36415);
return statearr_36434;
})();var statearr_36435_36453 = state_36422__$1;(statearr_36435_36453[2] = null);
(statearr_36435_36453[1] = 2);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36439 = [null,null,null,null,null,null,null,null,null];(statearr_36439[0] = state_machine__5548__auto__);
(statearr_36439[1] = 1);
return statearr_36439;
});
var state_machine__5548__auto____1 = (function (state_36422){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36422);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36440){if((e36440 instanceof Object))
{var ex__5551__auto__ = e36440;var statearr_36441_36454 = state_36422;(statearr_36441_36454[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36422);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e36440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__36455 = state_36422;
state_36422 = G__36455;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36422){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36442 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36443);
return statearr_36442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5562__auto___36542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36520){var state_val_36521 = (state_36520[1]);if((state_val_36521 === 1))
{var state_36520__$1 = state_36520;var statearr_36522_36543 = state_36520__$1;(statearr_36522_36543[2] = null);
(statearr_36522_36543[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36521 === 2))
{var state_36520__$1 = state_36520;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36520__$1,4,ch);
} else
{if((state_val_36521 === 3))
{var inst_36518 = (state_36520[2]);var state_36520__$1 = state_36520;return cljs.core.async.impl.ioc_helpers.return_chan(state_36520__$1,inst_36518);
} else
{if((state_val_36521 === 4))
{var inst_36501 = (state_36520[7]);var inst_36501__$1 = (state_36520[2]);var inst_36502 = (inst_36501__$1 == null);var state_36520__$1 = (function (){var statearr_36523 = state_36520;(statearr_36523[7] = inst_36501__$1);
return statearr_36523;
})();if(cljs.core.truth_(inst_36502))
{var statearr_36524_36544 = state_36520__$1;(statearr_36524_36544[1] = 5);
} else
{var statearr_36525_36545 = state_36520__$1;(statearr_36525_36545[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36521 === 5))
{var inst_36504 = cljs.core.async.close_BANG_(tc);var inst_36505 = cljs.core.async.close_BANG_(fc);var state_36520__$1 = (function (){var statearr_36526 = state_36520;(statearr_36526[8] = inst_36504);
return statearr_36526;
})();var statearr_36527_36546 = state_36520__$1;(statearr_36527_36546[2] = inst_36505);
(statearr_36527_36546[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36521 === 6))
{var inst_36501 = (state_36520[7]);var inst_36507 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36501) : p.call(null,inst_36501));var state_36520__$1 = state_36520;if(cljs.core.truth_(inst_36507))
{var statearr_36528_36547 = state_36520__$1;(statearr_36528_36547[1] = 9);
} else
{var statearr_36529_36548 = state_36520__$1;(statearr_36529_36548[1] = 10);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36521 === 7))
{var inst_36516 = (state_36520[2]);var state_36520__$1 = state_36520;var statearr_36530_36549 = state_36520__$1;(statearr_36530_36549[2] = inst_36516);
(statearr_36530_36549[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36521 === 8))
{var inst_36513 = (state_36520[2]);var state_36520__$1 = (function (){var statearr_36531 = state_36520;(statearr_36531[9] = inst_36513);
return statearr_36531;
})();var statearr_36532_36550 = state_36520__$1;(statearr_36532_36550[2] = null);
(statearr_36532_36550[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36521 === 9))
{var state_36520__$1 = state_36520;var statearr_36533_36551 = state_36520__$1;(statearr_36533_36551[2] = tc);
(statearr_36533_36551[1] = 11);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36521 === 10))
{var state_36520__$1 = state_36520;var statearr_36534_36552 = state_36520__$1;(statearr_36534_36552[2] = fc);
(statearr_36534_36552[1] = 11);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36521 === 11))
{var inst_36501 = (state_36520[7]);var inst_36511 = (state_36520[2]);var state_36520__$1 = state_36520;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36520__$1,8,inst_36511,inst_36501);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36538 = [null,null,null,null,null,null,null,null,null,null];(statearr_36538[0] = state_machine__5548__auto__);
(statearr_36538[1] = 1);
return statearr_36538;
});
var state_machine__5548__auto____1 = (function (state_36520){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36520);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36539){if((e36539 instanceof Object))
{var ex__5551__auto__ = e36539;var statearr_36540_36553 = state_36520;(statearr_36540_36553[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36520);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e36539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__36554 = state_36520;
state_36520 = G__36554;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36520){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36541 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36542);
return statearr_36541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36601){var state_val_36602 = (state_36601[1]);if((state_val_36602 === 7))
{var inst_36597 = (state_36601[2]);var state_36601__$1 = state_36601;var statearr_36603_36619 = state_36601__$1;(statearr_36603_36619[2] = inst_36597);
(statearr_36603_36619[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36602 === 6))
{var inst_36590 = (state_36601[7]);var inst_36587 = (state_36601[8]);var inst_36594 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36587,inst_36590) : f.call(null,inst_36587,inst_36590));var inst_36587__$1 = inst_36594;var state_36601__$1 = (function (){var statearr_36604 = state_36601;(statearr_36604[8] = inst_36587__$1);
return statearr_36604;
})();var statearr_36605_36620 = state_36601__$1;(statearr_36605_36620[2] = null);
(statearr_36605_36620[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36602 === 5))
{var inst_36587 = (state_36601[8]);var state_36601__$1 = state_36601;var statearr_36606_36621 = state_36601__$1;(statearr_36606_36621[2] = inst_36587);
(statearr_36606_36621[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36602 === 4))
{var inst_36590 = (state_36601[7]);var inst_36590__$1 = (state_36601[2]);var inst_36591 = (inst_36590__$1 == null);var state_36601__$1 = (function (){var statearr_36607 = state_36601;(statearr_36607[7] = inst_36590__$1);
return statearr_36607;
})();if(cljs.core.truth_(inst_36591))
{var statearr_36608_36622 = state_36601__$1;(statearr_36608_36622[1] = 5);
} else
{var statearr_36609_36623 = state_36601__$1;(statearr_36609_36623[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36602 === 3))
{var inst_36599 = (state_36601[2]);var state_36601__$1 = state_36601;return cljs.core.async.impl.ioc_helpers.return_chan(state_36601__$1,inst_36599);
} else
{if((state_val_36602 === 2))
{var state_36601__$1 = state_36601;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36601__$1,4,ch);
} else
{if((state_val_36602 === 1))
{var inst_36587 = init;var state_36601__$1 = (function (){var statearr_36610 = state_36601;(statearr_36610[8] = inst_36587);
return statearr_36610;
})();var statearr_36611_36624 = state_36601__$1;(statearr_36611_36624[2] = null);
(statearr_36611_36624[1] = 2);
return cljs.core.constant$keyword$549;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36615 = [null,null,null,null,null,null,null,null,null];(statearr_36615[0] = state_machine__5548__auto__);
(statearr_36615[1] = 1);
return statearr_36615;
});
var state_machine__5548__auto____1 = (function (state_36601){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36601);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36616){if((e36616 instanceof Object))
{var ex__5551__auto__ = e36616;var statearr_36617_36625 = state_36601;(statearr_36617_36625[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36601);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e36616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__36626 = state_36601;
state_36601 = G__36626;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36601){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36618 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36688){var state_val_36689 = (state_36688[1]);if((state_val_36689 === 1))
{var inst_36668 = cljs.core.seq(coll);var inst_36669 = inst_36668;var state_36688__$1 = (function (){var statearr_36690 = state_36688;(statearr_36690[7] = inst_36669);
return statearr_36690;
})();var statearr_36691_36709 = state_36688__$1;(statearr_36691_36709[2] = null);
(statearr_36691_36709[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36689 === 2))
{var inst_36669 = (state_36688[7]);var state_36688__$1 = state_36688;if(cljs.core.truth_(inst_36669))
{var statearr_36692_36710 = state_36688__$1;(statearr_36692_36710[1] = 4);
} else
{var statearr_36693_36711 = state_36688__$1;(statearr_36693_36711[1] = 5);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36689 === 3))
{var inst_36686 = (state_36688[2]);var state_36688__$1 = state_36688;return cljs.core.async.impl.ioc_helpers.return_chan(state_36688__$1,inst_36686);
} else
{if((state_val_36689 === 4))
{var inst_36669 = (state_36688[7]);var inst_36672 = cljs.core.first(inst_36669);var state_36688__$1 = state_36688;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36688__$1,7,ch,inst_36672);
} else
{if((state_val_36689 === 5))
{var state_36688__$1 = state_36688;if(cljs.core.truth_(close_QMARK_))
{var statearr_36694_36712 = state_36688__$1;(statearr_36694_36712[1] = 8);
} else
{var statearr_36695_36713 = state_36688__$1;(statearr_36695_36713[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_36689 === 6))
{var inst_36684 = (state_36688[2]);var state_36688__$1 = state_36688;var statearr_36696_36714 = state_36688__$1;(statearr_36696_36714[2] = inst_36684);
(statearr_36696_36714[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36689 === 7))
{var inst_36669 = (state_36688[7]);var inst_36674 = (state_36688[2]);var inst_36675 = cljs.core.next(inst_36669);var inst_36669__$1 = inst_36675;var state_36688__$1 = (function (){var statearr_36697 = state_36688;(statearr_36697[7] = inst_36669__$1);
(statearr_36697[8] = inst_36674);
return statearr_36697;
})();var statearr_36698_36715 = state_36688__$1;(statearr_36698_36715[2] = null);
(statearr_36698_36715[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36689 === 8))
{var inst_36679 = cljs.core.async.close_BANG_(ch);var state_36688__$1 = state_36688;var statearr_36699_36716 = state_36688__$1;(statearr_36699_36716[2] = inst_36679);
(statearr_36699_36716[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36689 === 9))
{var state_36688__$1 = state_36688;var statearr_36700_36717 = state_36688__$1;(statearr_36700_36717[2] = null);
(statearr_36700_36717[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_36689 === 10))
{var inst_36682 = (state_36688[2]);var state_36688__$1 = state_36688;var statearr_36701_36718 = state_36688__$1;(statearr_36701_36718[2] = inst_36682);
(statearr_36701_36718[1] = 6);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36705 = [null,null,null,null,null,null,null,null,null];(statearr_36705[0] = state_machine__5548__auto__);
(statearr_36705[1] = 1);
return statearr_36705;
});
var state_machine__5548__auto____1 = (function (state_36688){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36688);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36706){if((e36706 instanceof Object))
{var ex__5551__auto__ = e36706;var statearr_36707_36719 = state_36688;(statearr_36707_36719[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36688);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e36706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__36720 = state_36688;
state_36688 = G__36720;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36688){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36708 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj36722 = {};return obj36722;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj36724 = {};return obj36724;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t36948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36948 = (function (cs,ch,mult,meta36949){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36949 = meta36949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36948.cljs$lang$type = true;
cljs.core.async.t36948.cljs$lang$ctorStr = "cljs.core.async/t36948";
cljs.core.async.t36948.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36948");
});})(cs))
;
cljs.core.async.t36948.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t36948.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t36948.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t36948.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t36948.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t36948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36950){var self__ = this;
var _36950__$1 = this;return self__.meta36949;
});})(cs))
;
cljs.core.async.t36948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36950,meta36949__$1){var self__ = this;
var _36950__$1 = this;return (new cljs.core.async.t36948(self__.cs,self__.ch,self__.mult,meta36949__$1));
});})(cs))
;
cljs.core.async.__GT_t36948 = ((function (cs){
return (function __GT_t36948(cs__$1,ch__$1,mult__$1,meta36949){return (new cljs.core.async.t36948(cs__$1,ch__$1,mult__$1,meta36949));
});})(cs))
;
}
return (new cljs.core.async.t36948(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___37171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37085){var state_val_37086 = (state_37085[1]);if((state_val_37086 === 32))
{var inst_36953 = (state_37085[7]);var inst_37029 = (state_37085[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37085,31,Object,null,30);var inst_37036 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37029,inst_36953,done);var state_37085__$1 = state_37085;var statearr_37087_37172 = state_37085__$1;(statearr_37087_37172[2] = inst_37036);
cljs.core.async.impl.ioc_helpers.process_exception(state_37085__$1);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 1))
{var state_37085__$1 = state_37085;var statearr_37088_37173 = state_37085__$1;(statearr_37088_37173[2] = null);
(statearr_37088_37173[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 33))
{var inst_37042 = (state_37085[9]);var inst_37044 = cljs.core.chunked_seq_QMARK_(inst_37042);var state_37085__$1 = state_37085;if(inst_37044)
{var statearr_37089_37174 = state_37085__$1;(statearr_37089_37174[1] = 36);
} else
{var statearr_37090_37175 = state_37085__$1;(statearr_37090_37175[1] = 37);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 2))
{var state_37085__$1 = state_37085;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37085__$1,4,ch);
} else
{if((state_val_37086 === 34))
{var state_37085__$1 = state_37085;var statearr_37091_37176 = state_37085__$1;(statearr_37091_37176[2] = null);
(statearr_37091_37176[1] = 35);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 3))
{var inst_37083 = (state_37085[2]);var state_37085__$1 = state_37085;return cljs.core.async.impl.ioc_helpers.return_chan(state_37085__$1,inst_37083);
} else
{if((state_val_37086 === 35))
{var inst_37067 = (state_37085[2]);var state_37085__$1 = state_37085;var statearr_37092_37177 = state_37085__$1;(statearr_37092_37177[2] = inst_37067);
(statearr_37092_37177[1] = 29);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 4))
{var inst_36953 = (state_37085[7]);var inst_36953__$1 = (state_37085[2]);var inst_36954 = (inst_36953__$1 == null);var state_37085__$1 = (function (){var statearr_37093 = state_37085;(statearr_37093[7] = inst_36953__$1);
return statearr_37093;
})();if(cljs.core.truth_(inst_36954))
{var statearr_37094_37178 = state_37085__$1;(statearr_37094_37178[1] = 5);
} else
{var statearr_37095_37179 = state_37085__$1;(statearr_37095_37179[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 36))
{var inst_37042 = (state_37085[9]);var inst_37046 = cljs.core.chunk_first(inst_37042);var inst_37047 = cljs.core.chunk_rest(inst_37042);var inst_37048 = cljs.core.count(inst_37046);var inst_37021 = inst_37047;var inst_37022 = inst_37046;var inst_37023 = inst_37048;var inst_37024 = 0;var state_37085__$1 = (function (){var statearr_37096 = state_37085;(statearr_37096[10] = inst_37023);
(statearr_37096[11] = inst_37024);
(statearr_37096[12] = inst_37022);
(statearr_37096[13] = inst_37021);
return statearr_37096;
})();var statearr_37097_37180 = state_37085__$1;(statearr_37097_37180[2] = null);
(statearr_37097_37180[1] = 25);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 5))
{var inst_36960 = cljs.core.deref(cs);var inst_36961 = cljs.core.seq(inst_36960);var inst_36962 = inst_36961;var inst_36963 = null;var inst_36964 = 0;var inst_36965 = 0;var state_37085__$1 = (function (){var statearr_37098 = state_37085;(statearr_37098[14] = inst_36965);
(statearr_37098[15] = inst_36964);
(statearr_37098[16] = inst_36963);
(statearr_37098[17] = inst_36962);
return statearr_37098;
})();var statearr_37099_37181 = state_37085__$1;(statearr_37099_37181[2] = null);
(statearr_37099_37181[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 37))
{var inst_37042 = (state_37085[9]);var inst_37051 = cljs.core.first(inst_37042);var state_37085__$1 = (function (){var statearr_37100 = state_37085;(statearr_37100[18] = inst_37051);
return statearr_37100;
})();var statearr_37101_37182 = state_37085__$1;(statearr_37101_37182[2] = null);
(statearr_37101_37182[1] = 41);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 6))
{var inst_37013 = (state_37085[19]);var inst_37012 = cljs.core.deref(cs);var inst_37013__$1 = cljs.core.keys(inst_37012);var inst_37014 = cljs.core.count(inst_37013__$1);var inst_37015 = cljs.core.reset_BANG_(dctr,inst_37014);var inst_37020 = cljs.core.seq(inst_37013__$1);var inst_37021 = inst_37020;var inst_37022 = null;var inst_37023 = 0;var inst_37024 = 0;var state_37085__$1 = (function (){var statearr_37102 = state_37085;(statearr_37102[20] = inst_37015);
(statearr_37102[19] = inst_37013__$1);
(statearr_37102[10] = inst_37023);
(statearr_37102[11] = inst_37024);
(statearr_37102[12] = inst_37022);
(statearr_37102[13] = inst_37021);
return statearr_37102;
})();var statearr_37103_37183 = state_37085__$1;(statearr_37103_37183[2] = null);
(statearr_37103_37183[1] = 25);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 38))
{var inst_37064 = (state_37085[2]);var state_37085__$1 = state_37085;var statearr_37104_37184 = state_37085__$1;(statearr_37104_37184[2] = inst_37064);
(statearr_37104_37184[1] = 35);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 7))
{var inst_37081 = (state_37085[2]);var state_37085__$1 = state_37085;var statearr_37105_37185 = state_37085__$1;(statearr_37105_37185[2] = inst_37081);
(statearr_37105_37185[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 39))
{var inst_37042 = (state_37085[9]);var inst_37060 = (state_37085[2]);var inst_37061 = cljs.core.next(inst_37042);var inst_37021 = inst_37061;var inst_37022 = null;var inst_37023 = 0;var inst_37024 = 0;var state_37085__$1 = (function (){var statearr_37106 = state_37085;(statearr_37106[21] = inst_37060);
(statearr_37106[10] = inst_37023);
(statearr_37106[11] = inst_37024);
(statearr_37106[12] = inst_37022);
(statearr_37106[13] = inst_37021);
return statearr_37106;
})();var statearr_37107_37186 = state_37085__$1;(statearr_37107_37186[2] = null);
(statearr_37107_37186[1] = 25);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 8))
{var inst_36965 = (state_37085[14]);var inst_36964 = (state_37085[15]);var inst_36967 = (inst_36965 < inst_36964);var inst_36968 = inst_36967;var state_37085__$1 = state_37085;if(cljs.core.truth_(inst_36968))
{var statearr_37108_37187 = state_37085__$1;(statearr_37108_37187[1] = 10);
} else
{var statearr_37109_37188 = state_37085__$1;(statearr_37109_37188[1] = 11);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 40))
{var inst_37051 = (state_37085[18]);var inst_37052 = (state_37085[2]);var inst_37053 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37054 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37051);var state_37085__$1 = (function (){var statearr_37110 = state_37085;(statearr_37110[22] = inst_37053);
(statearr_37110[23] = inst_37052);
return statearr_37110;
})();var statearr_37111_37189 = state_37085__$1;(statearr_37111_37189[2] = inst_37054);
cljs.core.async.impl.ioc_helpers.process_exception(state_37085__$1);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 9))
{var inst_37010 = (state_37085[2]);var state_37085__$1 = state_37085;var statearr_37112_37190 = state_37085__$1;(statearr_37112_37190[2] = inst_37010);
(statearr_37112_37190[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 41))
{var inst_36953 = (state_37085[7]);var inst_37051 = (state_37085[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37085,40,Object,null,39);var inst_37058 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37051,inst_36953,done);var state_37085__$1 = state_37085;var statearr_37113_37191 = state_37085__$1;(statearr_37113_37191[2] = inst_37058);
cljs.core.async.impl.ioc_helpers.process_exception(state_37085__$1);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 10))
{var inst_36965 = (state_37085[14]);var inst_36963 = (state_37085[16]);var inst_36971 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36963,inst_36965);var inst_36972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36971,0,null);var inst_36973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36971,1,null);var state_37085__$1 = (function (){var statearr_37114 = state_37085;(statearr_37114[24] = inst_36972);
return statearr_37114;
})();if(cljs.core.truth_(inst_36973))
{var statearr_37115_37192 = state_37085__$1;(statearr_37115_37192[1] = 13);
} else
{var statearr_37116_37193 = state_37085__$1;(statearr_37116_37193[1] = 14);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 42))
{var state_37085__$1 = state_37085;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37085__$1,45,dchan);
} else
{if((state_val_37086 === 11))
{var inst_36982 = (state_37085[25]);var inst_36962 = (state_37085[17]);var inst_36982__$1 = cljs.core.seq(inst_36962);var state_37085__$1 = (function (){var statearr_37117 = state_37085;(statearr_37117[25] = inst_36982__$1);
return statearr_37117;
})();if(inst_36982__$1)
{var statearr_37118_37194 = state_37085__$1;(statearr_37118_37194[1] = 16);
} else
{var statearr_37119_37195 = state_37085__$1;(statearr_37119_37195[1] = 17);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 43))
{var state_37085__$1 = state_37085;var statearr_37120_37196 = state_37085__$1;(statearr_37120_37196[2] = null);
(statearr_37120_37196[1] = 44);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 12))
{var inst_37008 = (state_37085[2]);var state_37085__$1 = state_37085;var statearr_37121_37197 = state_37085__$1;(statearr_37121_37197[2] = inst_37008);
(statearr_37121_37197[1] = 9);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 44))
{var inst_37078 = (state_37085[2]);var state_37085__$1 = (function (){var statearr_37122 = state_37085;(statearr_37122[26] = inst_37078);
return statearr_37122;
})();var statearr_37123_37198 = state_37085__$1;(statearr_37123_37198[2] = null);
(statearr_37123_37198[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 13))
{var inst_36972 = (state_37085[24]);var inst_36975 = cljs.core.async.close_BANG_(inst_36972);var state_37085__$1 = state_37085;var statearr_37124_37199 = state_37085__$1;(statearr_37124_37199[2] = inst_36975);
(statearr_37124_37199[1] = 15);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 45))
{var inst_37075 = (state_37085[2]);var state_37085__$1 = state_37085;var statearr_37128_37200 = state_37085__$1;(statearr_37128_37200[2] = inst_37075);
(statearr_37128_37200[1] = 44);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 14))
{var state_37085__$1 = state_37085;var statearr_37129_37201 = state_37085__$1;(statearr_37129_37201[2] = null);
(statearr_37129_37201[1] = 15);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 15))
{var inst_36965 = (state_37085[14]);var inst_36964 = (state_37085[15]);var inst_36963 = (state_37085[16]);var inst_36962 = (state_37085[17]);var inst_36978 = (state_37085[2]);var inst_36979 = (inst_36965 + 1);var tmp37125 = inst_36964;var tmp37126 = inst_36963;var tmp37127 = inst_36962;var inst_36962__$1 = tmp37127;var inst_36963__$1 = tmp37126;var inst_36964__$1 = tmp37125;var inst_36965__$1 = inst_36979;var state_37085__$1 = (function (){var statearr_37130 = state_37085;(statearr_37130[27] = inst_36978);
(statearr_37130[14] = inst_36965__$1);
(statearr_37130[15] = inst_36964__$1);
(statearr_37130[16] = inst_36963__$1);
(statearr_37130[17] = inst_36962__$1);
return statearr_37130;
})();var statearr_37131_37202 = state_37085__$1;(statearr_37131_37202[2] = null);
(statearr_37131_37202[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 16))
{var inst_36982 = (state_37085[25]);var inst_36984 = cljs.core.chunked_seq_QMARK_(inst_36982);var state_37085__$1 = state_37085;if(inst_36984)
{var statearr_37132_37203 = state_37085__$1;(statearr_37132_37203[1] = 19);
} else
{var statearr_37133_37204 = state_37085__$1;(statearr_37133_37204[1] = 20);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 17))
{var state_37085__$1 = state_37085;var statearr_37134_37205 = state_37085__$1;(statearr_37134_37205[2] = null);
(statearr_37134_37205[1] = 18);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 18))
{var inst_37006 = (state_37085[2]);var state_37085__$1 = state_37085;var statearr_37135_37206 = state_37085__$1;(statearr_37135_37206[2] = inst_37006);
(statearr_37135_37206[1] = 12);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 19))
{var inst_36982 = (state_37085[25]);var inst_36986 = cljs.core.chunk_first(inst_36982);var inst_36987 = cljs.core.chunk_rest(inst_36982);var inst_36988 = cljs.core.count(inst_36986);var inst_36962 = inst_36987;var inst_36963 = inst_36986;var inst_36964 = inst_36988;var inst_36965 = 0;var state_37085__$1 = (function (){var statearr_37136 = state_37085;(statearr_37136[14] = inst_36965);
(statearr_37136[15] = inst_36964);
(statearr_37136[16] = inst_36963);
(statearr_37136[17] = inst_36962);
return statearr_37136;
})();var statearr_37137_37207 = state_37085__$1;(statearr_37137_37207[2] = null);
(statearr_37137_37207[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 20))
{var inst_36982 = (state_37085[25]);var inst_36992 = cljs.core.first(inst_36982);var inst_36993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36992,0,null);var inst_36994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36992,1,null);var state_37085__$1 = (function (){var statearr_37138 = state_37085;(statearr_37138[28] = inst_36993);
return statearr_37138;
})();if(cljs.core.truth_(inst_36994))
{var statearr_37139_37208 = state_37085__$1;(statearr_37139_37208[1] = 22);
} else
{var statearr_37140_37209 = state_37085__$1;(statearr_37140_37209[1] = 23);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 21))
{var inst_37003 = (state_37085[2]);var state_37085__$1 = state_37085;var statearr_37141_37210 = state_37085__$1;(statearr_37141_37210[2] = inst_37003);
(statearr_37141_37210[1] = 18);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 22))
{var inst_36993 = (state_37085[28]);var inst_36996 = cljs.core.async.close_BANG_(inst_36993);var state_37085__$1 = state_37085;var statearr_37142_37211 = state_37085__$1;(statearr_37142_37211[2] = inst_36996);
(statearr_37142_37211[1] = 24);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 23))
{var state_37085__$1 = state_37085;var statearr_37143_37212 = state_37085__$1;(statearr_37143_37212[2] = null);
(statearr_37143_37212[1] = 24);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 24))
{var inst_36982 = (state_37085[25]);var inst_36999 = (state_37085[2]);var inst_37000 = cljs.core.next(inst_36982);var inst_36962 = inst_37000;var inst_36963 = null;var inst_36964 = 0;var inst_36965 = 0;var state_37085__$1 = (function (){var statearr_37144 = state_37085;(statearr_37144[14] = inst_36965);
(statearr_37144[15] = inst_36964);
(statearr_37144[16] = inst_36963);
(statearr_37144[29] = inst_36999);
(statearr_37144[17] = inst_36962);
return statearr_37144;
})();var statearr_37145_37213 = state_37085__$1;(statearr_37145_37213[2] = null);
(statearr_37145_37213[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 25))
{var inst_37023 = (state_37085[10]);var inst_37024 = (state_37085[11]);var inst_37026 = (inst_37024 < inst_37023);var inst_37027 = inst_37026;var state_37085__$1 = state_37085;if(cljs.core.truth_(inst_37027))
{var statearr_37146_37214 = state_37085__$1;(statearr_37146_37214[1] = 27);
} else
{var statearr_37147_37215 = state_37085__$1;(statearr_37147_37215[1] = 28);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 26))
{var inst_37013 = (state_37085[19]);var inst_37071 = (state_37085[2]);var inst_37072 = cljs.core.seq(inst_37013);var state_37085__$1 = (function (){var statearr_37148 = state_37085;(statearr_37148[30] = inst_37071);
return statearr_37148;
})();if(inst_37072)
{var statearr_37149_37216 = state_37085__$1;(statearr_37149_37216[1] = 42);
} else
{var statearr_37150_37217 = state_37085__$1;(statearr_37150_37217[1] = 43);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 27))
{var inst_37024 = (state_37085[11]);var inst_37022 = (state_37085[12]);var inst_37029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37022,inst_37024);var state_37085__$1 = (function (){var statearr_37151 = state_37085;(statearr_37151[8] = inst_37029);
return statearr_37151;
})();var statearr_37152_37218 = state_37085__$1;(statearr_37152_37218[2] = null);
(statearr_37152_37218[1] = 32);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 28))
{var inst_37042 = (state_37085[9]);var inst_37021 = (state_37085[13]);var inst_37042__$1 = cljs.core.seq(inst_37021);var state_37085__$1 = (function (){var statearr_37156 = state_37085;(statearr_37156[9] = inst_37042__$1);
return statearr_37156;
})();if(inst_37042__$1)
{var statearr_37157_37219 = state_37085__$1;(statearr_37157_37219[1] = 33);
} else
{var statearr_37158_37220 = state_37085__$1;(statearr_37158_37220[1] = 34);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 29))
{var inst_37069 = (state_37085[2]);var state_37085__$1 = state_37085;var statearr_37159_37221 = state_37085__$1;(statearr_37159_37221[2] = inst_37069);
(statearr_37159_37221[1] = 26);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 30))
{var inst_37023 = (state_37085[10]);var inst_37024 = (state_37085[11]);var inst_37022 = (state_37085[12]);var inst_37021 = (state_37085[13]);var inst_37038 = (state_37085[2]);var inst_37039 = (inst_37024 + 1);var tmp37153 = inst_37023;var tmp37154 = inst_37022;var tmp37155 = inst_37021;var inst_37021__$1 = tmp37155;var inst_37022__$1 = tmp37154;var inst_37023__$1 = tmp37153;var inst_37024__$1 = inst_37039;var state_37085__$1 = (function (){var statearr_37160 = state_37085;(statearr_37160[31] = inst_37038);
(statearr_37160[10] = inst_37023__$1);
(statearr_37160[11] = inst_37024__$1);
(statearr_37160[12] = inst_37022__$1);
(statearr_37160[13] = inst_37021__$1);
return statearr_37160;
})();var statearr_37161_37222 = state_37085__$1;(statearr_37161_37222[2] = null);
(statearr_37161_37222[1] = 25);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37086 === 31))
{var inst_37029 = (state_37085[8]);var inst_37030 = (state_37085[2]);var inst_37031 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37032 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37029);var state_37085__$1 = (function (){var statearr_37162 = state_37085;(statearr_37162[32] = inst_37031);
(statearr_37162[33] = inst_37030);
return statearr_37162;
})();var statearr_37163_37223 = state_37085__$1;(statearr_37163_37223[2] = inst_37032);
cljs.core.async.impl.ioc_helpers.process_exception(state_37085__$1);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37167[0] = state_machine__5548__auto__);
(statearr_37167[1] = 1);
return statearr_37167;
});
var state_machine__5548__auto____1 = (function (state_37085){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37085);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37168){if((e37168 instanceof Object))
{var ex__5551__auto__ = e37168;var statearr_37169_37224 = state_37085;(statearr_37169_37224[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37085);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e37168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__37225 = state_37085;
state_37085 = G__37225;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37085){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37170 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37171);
return statearr_37170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj37227 = {};return obj37227;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$556,null,cljs.core.constant$keyword$557,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$558);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$557);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$558,chs);var pauses = pick(cljs.core.constant$keyword$556,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$559,solos,cljs.core.constant$keyword$560,pick(cljs.core.constant$keyword$557,chs),cljs.core.constant$keyword$561,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$556)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t37337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37337 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta37338){
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
this.meta37338 = meta37338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37337.cljs$lang$type = true;
cljs.core.async.t37337.cljs$lang$ctorStr = "cljs.core.async/t37337";
cljs.core.async.t37337.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37337");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37337.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37337.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37337.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37337.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37337.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37337.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37337.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37339){var self__ = this;
var _37339__$1 = this;return self__.meta37338;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37339,meta37338__$1){var self__ = this;
var _37339__$1 = this;return (new cljs.core.async.t37337(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta37338__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37337 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37337(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37338){return (new cljs.core.async.t37337(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37338));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37337(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___37446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37404){var state_val_37405 = (state_37404[1]);if((state_val_37405 === 1))
{var inst_37343 = (state_37404[7]);var inst_37343__$1 = calc_state();var inst_37344 = cljs.core.seq_QMARK_(inst_37343__$1);var state_37404__$1 = (function (){var statearr_37406 = state_37404;(statearr_37406[7] = inst_37343__$1);
return statearr_37406;
})();if(inst_37344)
{var statearr_37407_37447 = state_37404__$1;(statearr_37407_37447[1] = 2);
} else
{var statearr_37408_37448 = state_37404__$1;(statearr_37408_37448[1] = 3);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 2))
{var inst_37343 = (state_37404[7]);var inst_37346 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37343);var state_37404__$1 = state_37404;var statearr_37409_37449 = state_37404__$1;(statearr_37409_37449[2] = inst_37346);
(statearr_37409_37449[1] = 4);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 3))
{var inst_37343 = (state_37404[7]);var state_37404__$1 = state_37404;var statearr_37410_37450 = state_37404__$1;(statearr_37410_37450[2] = inst_37343);
(statearr_37410_37450[1] = 4);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 4))
{var inst_37343 = (state_37404[7]);var inst_37349 = (state_37404[2]);var inst_37350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37349,cljs.core.constant$keyword$561);var inst_37351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37349,cljs.core.constant$keyword$560);var inst_37352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37349,cljs.core.constant$keyword$559);var inst_37353 = inst_37343;var state_37404__$1 = (function (){var statearr_37411 = state_37404;(statearr_37411[8] = inst_37353);
(statearr_37411[9] = inst_37350);
(statearr_37411[10] = inst_37352);
(statearr_37411[11] = inst_37351);
return statearr_37411;
})();var statearr_37412_37451 = state_37404__$1;(statearr_37412_37451[2] = null);
(statearr_37412_37451[1] = 5);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 5))
{var inst_37353 = (state_37404[8]);var inst_37356 = cljs.core.seq_QMARK_(inst_37353);var state_37404__$1 = state_37404;if(inst_37356)
{var statearr_37413_37452 = state_37404__$1;(statearr_37413_37452[1] = 7);
} else
{var statearr_37414_37453 = state_37404__$1;(statearr_37414_37453[1] = 8);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 6))
{var inst_37402 = (state_37404[2]);var state_37404__$1 = state_37404;return cljs.core.async.impl.ioc_helpers.return_chan(state_37404__$1,inst_37402);
} else
{if((state_val_37405 === 7))
{var inst_37353 = (state_37404[8]);var inst_37358 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37353);var state_37404__$1 = state_37404;var statearr_37415_37454 = state_37404__$1;(statearr_37415_37454[2] = inst_37358);
(statearr_37415_37454[1] = 9);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 8))
{var inst_37353 = (state_37404[8]);var state_37404__$1 = state_37404;var statearr_37416_37455 = state_37404__$1;(statearr_37416_37455[2] = inst_37353);
(statearr_37416_37455[1] = 9);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 9))
{var inst_37361 = (state_37404[12]);var inst_37361__$1 = (state_37404[2]);var inst_37362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37361__$1,cljs.core.constant$keyword$561);var inst_37363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37361__$1,cljs.core.constant$keyword$560);var inst_37364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37361__$1,cljs.core.constant$keyword$559);var state_37404__$1 = (function (){var statearr_37417 = state_37404;(statearr_37417[13] = inst_37364);
(statearr_37417[12] = inst_37361__$1);
(statearr_37417[14] = inst_37363);
return statearr_37417;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37404__$1,10,inst_37362);
} else
{if((state_val_37405 === 10))
{var inst_37369 = (state_37404[15]);var inst_37368 = (state_37404[16]);var inst_37367 = (state_37404[2]);var inst_37368__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37367,0,null);var inst_37369__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37367,1,null);var inst_37370 = (inst_37368__$1 == null);var inst_37371 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37369__$1,change);var inst_37372 = (inst_37370) || (inst_37371);var state_37404__$1 = (function (){var statearr_37418 = state_37404;(statearr_37418[15] = inst_37369__$1);
(statearr_37418[16] = inst_37368__$1);
return statearr_37418;
})();if(cljs.core.truth_(inst_37372))
{var statearr_37419_37456 = state_37404__$1;(statearr_37419_37456[1] = 11);
} else
{var statearr_37420_37457 = state_37404__$1;(statearr_37420_37457[1] = 12);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 11))
{var inst_37368 = (state_37404[16]);var inst_37374 = (inst_37368 == null);var state_37404__$1 = state_37404;if(cljs.core.truth_(inst_37374))
{var statearr_37421_37458 = state_37404__$1;(statearr_37421_37458[1] = 14);
} else
{var statearr_37422_37459 = state_37404__$1;(statearr_37422_37459[1] = 15);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 12))
{var inst_37369 = (state_37404[15]);var inst_37364 = (state_37404[13]);var inst_37383 = (state_37404[17]);var inst_37383__$1 = (inst_37364.cljs$core$IFn$_invoke$arity$1 ? inst_37364.cljs$core$IFn$_invoke$arity$1(inst_37369) : inst_37364.call(null,inst_37369));var state_37404__$1 = (function (){var statearr_37423 = state_37404;(statearr_37423[17] = inst_37383__$1);
return statearr_37423;
})();if(cljs.core.truth_(inst_37383__$1))
{var statearr_37424_37460 = state_37404__$1;(statearr_37424_37460[1] = 17);
} else
{var statearr_37425_37461 = state_37404__$1;(statearr_37425_37461[1] = 18);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 13))
{var inst_37400 = (state_37404[2]);var state_37404__$1 = state_37404;var statearr_37426_37462 = state_37404__$1;(statearr_37426_37462[2] = inst_37400);
(statearr_37426_37462[1] = 6);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 14))
{var inst_37369 = (state_37404[15]);var inst_37376 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37369);var state_37404__$1 = state_37404;var statearr_37427_37463 = state_37404__$1;(statearr_37427_37463[2] = inst_37376);
(statearr_37427_37463[1] = 16);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 15))
{var state_37404__$1 = state_37404;var statearr_37428_37464 = state_37404__$1;(statearr_37428_37464[2] = null);
(statearr_37428_37464[1] = 16);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 16))
{var inst_37379 = (state_37404[2]);var inst_37380 = calc_state();var inst_37353 = inst_37380;var state_37404__$1 = (function (){var statearr_37429 = state_37404;(statearr_37429[8] = inst_37353);
(statearr_37429[18] = inst_37379);
return statearr_37429;
})();var statearr_37430_37465 = state_37404__$1;(statearr_37430_37465[2] = null);
(statearr_37430_37465[1] = 5);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 17))
{var inst_37383 = (state_37404[17]);var state_37404__$1 = state_37404;var statearr_37431_37466 = state_37404__$1;(statearr_37431_37466[2] = inst_37383);
(statearr_37431_37466[1] = 19);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 18))
{var inst_37369 = (state_37404[15]);var inst_37364 = (state_37404[13]);var inst_37363 = (state_37404[14]);var inst_37386 = cljs.core.empty_QMARK_(inst_37364);var inst_37387 = (inst_37363.cljs$core$IFn$_invoke$arity$1 ? inst_37363.cljs$core$IFn$_invoke$arity$1(inst_37369) : inst_37363.call(null,inst_37369));var inst_37388 = cljs.core.not(inst_37387);var inst_37389 = (inst_37386) && (inst_37388);var state_37404__$1 = state_37404;var statearr_37432_37467 = state_37404__$1;(statearr_37432_37467[2] = inst_37389);
(statearr_37432_37467[1] = 19);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 19))
{var inst_37391 = (state_37404[2]);var state_37404__$1 = state_37404;if(cljs.core.truth_(inst_37391))
{var statearr_37433_37468 = state_37404__$1;(statearr_37433_37468[1] = 20);
} else
{var statearr_37434_37469 = state_37404__$1;(statearr_37434_37469[1] = 21);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 20))
{var inst_37368 = (state_37404[16]);var state_37404__$1 = state_37404;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37404__$1,23,out,inst_37368);
} else
{if((state_val_37405 === 21))
{var state_37404__$1 = state_37404;var statearr_37435_37470 = state_37404__$1;(statearr_37435_37470[2] = null);
(statearr_37435_37470[1] = 22);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 22))
{var inst_37361 = (state_37404[12]);var inst_37397 = (state_37404[2]);var inst_37353 = inst_37361;var state_37404__$1 = (function (){var statearr_37436 = state_37404;(statearr_37436[19] = inst_37397);
(statearr_37436[8] = inst_37353);
return statearr_37436;
})();var statearr_37437_37471 = state_37404__$1;(statearr_37437_37471[2] = null);
(statearr_37437_37471[1] = 5);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37405 === 23))
{var inst_37394 = (state_37404[2]);var state_37404__$1 = state_37404;var statearr_37438_37472 = state_37404__$1;(statearr_37438_37472[2] = inst_37394);
(statearr_37438_37472[1] = 22);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37442[0] = state_machine__5548__auto__);
(statearr_37442[1] = 1);
return statearr_37442;
});
var state_machine__5548__auto____1 = (function (state_37404){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37404);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37443){if((e37443 instanceof Object))
{var ex__5551__auto__ = e37443;var statearr_37444_37473 = state_37404;(statearr_37444_37473[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37404);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e37443;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__37474 = state_37404;
state_37404 = G__37474;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37404){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37445 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37446);
return statearr_37445;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj37476 = {};return obj37476;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3441__auto__,mults){
return (function (p1__37477_SHARP_){if(cljs.core.truth_((p1__37477_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37477_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37477_SHARP_.call(null,topic))))
{return p1__37477_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37477_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t37602 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37602 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37603){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37603 = meta37603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37602.cljs$lang$type = true;
cljs.core.async.t37602.cljs$lang$ctorStr = "cljs.core.async/t37602";
cljs.core.async.t37602.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37602");
});})(mults,ensure_mult))
;
cljs.core.async.t37602.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t37602.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t37602.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t37602.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t37602.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t37602.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t37602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37604){var self__ = this;
var _37604__$1 = this;return self__.meta37603;
});})(mults,ensure_mult))
;
cljs.core.async.t37602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37604,meta37603__$1){var self__ = this;
var _37604__$1 = this;return (new cljs.core.async.t37602(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37603__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t37602 = ((function (mults,ensure_mult){
return (function __GT_t37602(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37603){return (new cljs.core.async.t37602(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37603));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t37602(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___37726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37678){var state_val_37679 = (state_37678[1]);if((state_val_37679 === 1))
{var state_37678__$1 = state_37678;var statearr_37680_37727 = state_37678__$1;(statearr_37680_37727[2] = null);
(statearr_37680_37727[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 2))
{var state_37678__$1 = state_37678;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37678__$1,4,ch);
} else
{if((state_val_37679 === 3))
{var inst_37676 = (state_37678[2]);var state_37678__$1 = state_37678;return cljs.core.async.impl.ioc_helpers.return_chan(state_37678__$1,inst_37676);
} else
{if((state_val_37679 === 4))
{var inst_37607 = (state_37678[7]);var inst_37607__$1 = (state_37678[2]);var inst_37608 = (inst_37607__$1 == null);var state_37678__$1 = (function (){var statearr_37681 = state_37678;(statearr_37681[7] = inst_37607__$1);
return statearr_37681;
})();if(cljs.core.truth_(inst_37608))
{var statearr_37682_37728 = state_37678__$1;(statearr_37682_37728[1] = 5);
} else
{var statearr_37683_37729 = state_37678__$1;(statearr_37683_37729[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 5))
{var inst_37614 = cljs.core.deref(mults);var inst_37615 = cljs.core.vals(inst_37614);var inst_37616 = cljs.core.seq(inst_37615);var inst_37617 = inst_37616;var inst_37618 = null;var inst_37619 = 0;var inst_37620 = 0;var state_37678__$1 = (function (){var statearr_37684 = state_37678;(statearr_37684[8] = inst_37619);
(statearr_37684[9] = inst_37618);
(statearr_37684[10] = inst_37617);
(statearr_37684[11] = inst_37620);
return statearr_37684;
})();var statearr_37685_37730 = state_37678__$1;(statearr_37685_37730[2] = null);
(statearr_37685_37730[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 6))
{var inst_37607 = (state_37678[7]);var inst_37657 = (state_37678[12]);var inst_37655 = (state_37678[13]);var inst_37655__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37607) : topic_fn.call(null,inst_37607));var inst_37656 = cljs.core.deref(mults);var inst_37657__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37656,inst_37655__$1);var state_37678__$1 = (function (){var statearr_37686 = state_37678;(statearr_37686[12] = inst_37657__$1);
(statearr_37686[13] = inst_37655__$1);
return statearr_37686;
})();if(cljs.core.truth_(inst_37657__$1))
{var statearr_37687_37731 = state_37678__$1;(statearr_37687_37731[1] = 19);
} else
{var statearr_37688_37732 = state_37678__$1;(statearr_37688_37732[1] = 20);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 7))
{var inst_37674 = (state_37678[2]);var state_37678__$1 = state_37678;var statearr_37689_37733 = state_37678__$1;(statearr_37689_37733[2] = inst_37674);
(statearr_37689_37733[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 8))
{var inst_37619 = (state_37678[8]);var inst_37620 = (state_37678[11]);var inst_37622 = (inst_37620 < inst_37619);var inst_37623 = inst_37622;var state_37678__$1 = state_37678;if(cljs.core.truth_(inst_37623))
{var statearr_37693_37734 = state_37678__$1;(statearr_37693_37734[1] = 10);
} else
{var statearr_37694_37735 = state_37678__$1;(statearr_37694_37735[1] = 11);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 9))
{var inst_37653 = (state_37678[2]);var state_37678__$1 = state_37678;var statearr_37695_37736 = state_37678__$1;(statearr_37695_37736[2] = inst_37653);
(statearr_37695_37736[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 10))
{var inst_37619 = (state_37678[8]);var inst_37618 = (state_37678[9]);var inst_37617 = (state_37678[10]);var inst_37620 = (state_37678[11]);var inst_37625 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37618,inst_37620);var inst_37626 = cljs.core.async.muxch_STAR_(inst_37625);var inst_37627 = cljs.core.async.close_BANG_(inst_37626);var inst_37628 = (inst_37620 + 1);var tmp37690 = inst_37619;var tmp37691 = inst_37618;var tmp37692 = inst_37617;var inst_37617__$1 = tmp37692;var inst_37618__$1 = tmp37691;var inst_37619__$1 = tmp37690;var inst_37620__$1 = inst_37628;var state_37678__$1 = (function (){var statearr_37696 = state_37678;(statearr_37696[8] = inst_37619__$1);
(statearr_37696[9] = inst_37618__$1);
(statearr_37696[14] = inst_37627);
(statearr_37696[10] = inst_37617__$1);
(statearr_37696[11] = inst_37620__$1);
return statearr_37696;
})();var statearr_37697_37737 = state_37678__$1;(statearr_37697_37737[2] = null);
(statearr_37697_37737[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 11))
{var inst_37631 = (state_37678[15]);var inst_37617 = (state_37678[10]);var inst_37631__$1 = cljs.core.seq(inst_37617);var state_37678__$1 = (function (){var statearr_37698 = state_37678;(statearr_37698[15] = inst_37631__$1);
return statearr_37698;
})();if(inst_37631__$1)
{var statearr_37699_37738 = state_37678__$1;(statearr_37699_37738[1] = 13);
} else
{var statearr_37700_37739 = state_37678__$1;(statearr_37700_37739[1] = 14);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 12))
{var inst_37651 = (state_37678[2]);var state_37678__$1 = state_37678;var statearr_37701_37740 = state_37678__$1;(statearr_37701_37740[2] = inst_37651);
(statearr_37701_37740[1] = 9);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 13))
{var inst_37631 = (state_37678[15]);var inst_37633 = cljs.core.chunked_seq_QMARK_(inst_37631);var state_37678__$1 = state_37678;if(inst_37633)
{var statearr_37702_37741 = state_37678__$1;(statearr_37702_37741[1] = 16);
} else
{var statearr_37703_37742 = state_37678__$1;(statearr_37703_37742[1] = 17);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 14))
{var state_37678__$1 = state_37678;var statearr_37704_37743 = state_37678__$1;(statearr_37704_37743[2] = null);
(statearr_37704_37743[1] = 15);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 15))
{var inst_37649 = (state_37678[2]);var state_37678__$1 = state_37678;var statearr_37705_37744 = state_37678__$1;(statearr_37705_37744[2] = inst_37649);
(statearr_37705_37744[1] = 12);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 16))
{var inst_37631 = (state_37678[15]);var inst_37635 = cljs.core.chunk_first(inst_37631);var inst_37636 = cljs.core.chunk_rest(inst_37631);var inst_37637 = cljs.core.count(inst_37635);var inst_37617 = inst_37636;var inst_37618 = inst_37635;var inst_37619 = inst_37637;var inst_37620 = 0;var state_37678__$1 = (function (){var statearr_37706 = state_37678;(statearr_37706[8] = inst_37619);
(statearr_37706[9] = inst_37618);
(statearr_37706[10] = inst_37617);
(statearr_37706[11] = inst_37620);
return statearr_37706;
})();var statearr_37707_37745 = state_37678__$1;(statearr_37707_37745[2] = null);
(statearr_37707_37745[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 17))
{var inst_37631 = (state_37678[15]);var inst_37640 = cljs.core.first(inst_37631);var inst_37641 = cljs.core.async.muxch_STAR_(inst_37640);var inst_37642 = cljs.core.async.close_BANG_(inst_37641);var inst_37643 = cljs.core.next(inst_37631);var inst_37617 = inst_37643;var inst_37618 = null;var inst_37619 = 0;var inst_37620 = 0;var state_37678__$1 = (function (){var statearr_37708 = state_37678;(statearr_37708[8] = inst_37619);
(statearr_37708[9] = inst_37618);
(statearr_37708[16] = inst_37642);
(statearr_37708[10] = inst_37617);
(statearr_37708[11] = inst_37620);
return statearr_37708;
})();var statearr_37709_37746 = state_37678__$1;(statearr_37709_37746[2] = null);
(statearr_37709_37746[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 18))
{var inst_37646 = (state_37678[2]);var state_37678__$1 = state_37678;var statearr_37710_37747 = state_37678__$1;(statearr_37710_37747[2] = inst_37646);
(statearr_37710_37747[1] = 15);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 19))
{var state_37678__$1 = state_37678;var statearr_37711_37748 = state_37678__$1;(statearr_37711_37748[2] = null);
(statearr_37711_37748[1] = 24);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 20))
{var state_37678__$1 = state_37678;var statearr_37712_37749 = state_37678__$1;(statearr_37712_37749[2] = null);
(statearr_37712_37749[1] = 21);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 21))
{var inst_37671 = (state_37678[2]);var state_37678__$1 = (function (){var statearr_37713 = state_37678;(statearr_37713[17] = inst_37671);
return statearr_37713;
})();var statearr_37714_37750 = state_37678__$1;(statearr_37714_37750[2] = null);
(statearr_37714_37750[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 22))
{var inst_37668 = (state_37678[2]);var state_37678__$1 = state_37678;var statearr_37715_37751 = state_37678__$1;(statearr_37715_37751[2] = inst_37668);
(statearr_37715_37751[1] = 21);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 23))
{var inst_37655 = (state_37678[13]);var inst_37659 = (state_37678[2]);var inst_37660 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37655);var state_37678__$1 = (function (){var statearr_37716 = state_37678;(statearr_37716[18] = inst_37659);
return statearr_37716;
})();var statearr_37717_37752 = state_37678__$1;(statearr_37717_37752[2] = inst_37660);
cljs.core.async.impl.ioc_helpers.process_exception(state_37678__$1);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37679 === 24))
{var inst_37607 = (state_37678[7]);var inst_37657 = (state_37678[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37678,23,Object,null,22);var inst_37664 = cljs.core.async.muxch_STAR_(inst_37657);var state_37678__$1 = state_37678;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37678__$1,25,inst_37664,inst_37607);
} else
{if((state_val_37679 === 25))
{var inst_37666 = (state_37678[2]);var state_37678__$1 = state_37678;var statearr_37718_37753 = state_37678__$1;(statearr_37718_37753[2] = inst_37666);
cljs.core.async.impl.ioc_helpers.process_exception(state_37678__$1);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37722[0] = state_machine__5548__auto__);
(statearr_37722[1] = 1);
return statearr_37722;
});
var state_machine__5548__auto____1 = (function (state_37678){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37678);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37723){if((e37723 instanceof Object))
{var ex__5551__auto__ = e37723;var statearr_37724_37754 = state_37678;(statearr_37724_37754[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37678);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e37723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__37755 = state_37678;
state_37678 = G__37755;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37678){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37725 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37726);
return statearr_37725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5562__auto___37892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37862){var state_val_37863 = (state_37862[1]);if((state_val_37863 === 1))
{var state_37862__$1 = state_37862;var statearr_37864_37893 = state_37862__$1;(statearr_37864_37893[2] = null);
(statearr_37864_37893[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 2))
{var inst_37825 = cljs.core.reset_BANG_(dctr,cnt);var inst_37826 = 0;var state_37862__$1 = (function (){var statearr_37865 = state_37862;(statearr_37865[7] = inst_37825);
(statearr_37865[8] = inst_37826);
return statearr_37865;
})();var statearr_37866_37894 = state_37862__$1;(statearr_37866_37894[2] = null);
(statearr_37866_37894[1] = 4);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 3))
{var inst_37860 = (state_37862[2]);var state_37862__$1 = state_37862;return cljs.core.async.impl.ioc_helpers.return_chan(state_37862__$1,inst_37860);
} else
{if((state_val_37863 === 4))
{var inst_37826 = (state_37862[8]);var inst_37828 = (inst_37826 < cnt);var state_37862__$1 = state_37862;if(cljs.core.truth_(inst_37828))
{var statearr_37867_37895 = state_37862__$1;(statearr_37867_37895[1] = 6);
} else
{var statearr_37868_37896 = state_37862__$1;(statearr_37868_37896[1] = 7);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 5))
{var inst_37846 = (state_37862[2]);var state_37862__$1 = (function (){var statearr_37869 = state_37862;(statearr_37869[9] = inst_37846);
return statearr_37869;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37862__$1,12,dchan);
} else
{if((state_val_37863 === 6))
{var state_37862__$1 = state_37862;var statearr_37870_37897 = state_37862__$1;(statearr_37870_37897[2] = null);
(statearr_37870_37897[1] = 11);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 7))
{var state_37862__$1 = state_37862;var statearr_37871_37898 = state_37862__$1;(statearr_37871_37898[2] = null);
(statearr_37871_37898[1] = 8);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 8))
{var inst_37844 = (state_37862[2]);var state_37862__$1 = state_37862;var statearr_37872_37899 = state_37862__$1;(statearr_37872_37899[2] = inst_37844);
(statearr_37872_37899[1] = 5);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 9))
{var inst_37826 = (state_37862[8]);var inst_37839 = (state_37862[2]);var inst_37840 = (inst_37826 + 1);var inst_37826__$1 = inst_37840;var state_37862__$1 = (function (){var statearr_37873 = state_37862;(statearr_37873[8] = inst_37826__$1);
(statearr_37873[10] = inst_37839);
return statearr_37873;
})();var statearr_37874_37900 = state_37862__$1;(statearr_37874_37900[2] = null);
(statearr_37874_37900[1] = 4);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 10))
{var inst_37830 = (state_37862[2]);var inst_37831 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_37862__$1 = (function (){var statearr_37875 = state_37862;(statearr_37875[11] = inst_37830);
return statearr_37875;
})();var statearr_37876_37901 = state_37862__$1;(statearr_37876_37901[2] = inst_37831);
cljs.core.async.impl.ioc_helpers.process_exception(state_37862__$1);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 11))
{var inst_37826 = (state_37862[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37862,10,Object,null,9);var inst_37835 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37826) : chs__$1.call(null,inst_37826));var inst_37836 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37826) : done.call(null,inst_37826));var inst_37837 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37835,inst_37836);var state_37862__$1 = state_37862;var statearr_37877_37902 = state_37862__$1;(statearr_37877_37902[2] = inst_37837);
cljs.core.async.impl.ioc_helpers.process_exception(state_37862__$1);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 12))
{var inst_37848 = (state_37862[12]);var inst_37848__$1 = (state_37862[2]);var inst_37849 = cljs.core.some(cljs.core.nil_QMARK_,inst_37848__$1);var state_37862__$1 = (function (){var statearr_37878 = state_37862;(statearr_37878[12] = inst_37848__$1);
return statearr_37878;
})();if(cljs.core.truth_(inst_37849))
{var statearr_37879_37903 = state_37862__$1;(statearr_37879_37903[1] = 13);
} else
{var statearr_37880_37904 = state_37862__$1;(statearr_37880_37904[1] = 14);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 13))
{var inst_37851 = cljs.core.async.close_BANG_(out);var state_37862__$1 = state_37862;var statearr_37881_37905 = state_37862__$1;(statearr_37881_37905[2] = inst_37851);
(statearr_37881_37905[1] = 15);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 14))
{var inst_37848 = (state_37862[12]);var inst_37853 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37848);var state_37862__$1 = state_37862;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37862__$1,16,out,inst_37853);
} else
{if((state_val_37863 === 15))
{var inst_37858 = (state_37862[2]);var state_37862__$1 = state_37862;var statearr_37882_37906 = state_37862__$1;(statearr_37882_37906[2] = inst_37858);
(statearr_37882_37906[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37863 === 16))
{var inst_37855 = (state_37862[2]);var state_37862__$1 = (function (){var statearr_37883 = state_37862;(statearr_37883[13] = inst_37855);
return statearr_37883;
})();var statearr_37884_37907 = state_37862__$1;(statearr_37884_37907[2] = null);
(statearr_37884_37907[1] = 2);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37888[0] = state_machine__5548__auto__);
(statearr_37888[1] = 1);
return statearr_37888;
});
var state_machine__5548__auto____1 = (function (state_37862){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37862);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37889){if((e37889 instanceof Object))
{var ex__5551__auto__ = e37889;var statearr_37890_37908 = state_37862;(statearr_37890_37908[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37862);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e37889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__37909 = state_37862;
state_37862 = G__37909;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37862){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37891 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37892);
return statearr_37891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37993){var state_val_37994 = (state_37993[1]);if((state_val_37994 === 1))
{var inst_37964 = cljs.core.vec(chs);var inst_37965 = inst_37964;var state_37993__$1 = (function (){var statearr_37995 = state_37993;(statearr_37995[7] = inst_37965);
return statearr_37995;
})();var statearr_37996_38018 = state_37993__$1;(statearr_37996_38018[2] = null);
(statearr_37996_38018[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37994 === 2))
{var inst_37965 = (state_37993[7]);var inst_37967 = cljs.core.count(inst_37965);var inst_37968 = (inst_37967 > 0);var state_37993__$1 = state_37993;if(cljs.core.truth_(inst_37968))
{var statearr_37997_38019 = state_37993__$1;(statearr_37997_38019[1] = 4);
} else
{var statearr_37998_38020 = state_37993__$1;(statearr_37998_38020[1] = 5);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37994 === 3))
{var inst_37991 = (state_37993[2]);var state_37993__$1 = state_37993;return cljs.core.async.impl.ioc_helpers.return_chan(state_37993__$1,inst_37991);
} else
{if((state_val_37994 === 4))
{var inst_37965 = (state_37993[7]);var state_37993__$1 = state_37993;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37993__$1,7,inst_37965);
} else
{if((state_val_37994 === 5))
{var inst_37987 = cljs.core.async.close_BANG_(out);var state_37993__$1 = state_37993;var statearr_37999_38021 = state_37993__$1;(statearr_37999_38021[2] = inst_37987);
(statearr_37999_38021[1] = 6);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37994 === 6))
{var inst_37989 = (state_37993[2]);var state_37993__$1 = state_37993;var statearr_38000_38022 = state_37993__$1;(statearr_38000_38022[2] = inst_37989);
(statearr_38000_38022[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37994 === 7))
{var inst_37972 = (state_37993[8]);var inst_37973 = (state_37993[9]);var inst_37972__$1 = (state_37993[2]);var inst_37973__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37972__$1,0,null);var inst_37974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37972__$1,1,null);var inst_37975 = (inst_37973__$1 == null);var state_37993__$1 = (function (){var statearr_38001 = state_37993;(statearr_38001[8] = inst_37972__$1);
(statearr_38001[10] = inst_37974);
(statearr_38001[9] = inst_37973__$1);
return statearr_38001;
})();if(cljs.core.truth_(inst_37975))
{var statearr_38002_38023 = state_37993__$1;(statearr_38002_38023[1] = 8);
} else
{var statearr_38003_38024 = state_37993__$1;(statearr_38003_38024[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_37994 === 8))
{var inst_37965 = (state_37993[7]);var inst_37972 = (state_37993[8]);var inst_37974 = (state_37993[10]);var inst_37973 = (state_37993[9]);var inst_37977 = (function (){var c = inst_37974;var v = inst_37973;var vec__37970 = inst_37972;var cs = inst_37965;return ((function (c,v,vec__37970,cs,inst_37965,inst_37972,inst_37974,inst_37973,state_val_37994){
return (function (p1__37910_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37910_SHARP_);
});
;})(c,v,vec__37970,cs,inst_37965,inst_37972,inst_37974,inst_37973,state_val_37994))
})();var inst_37978 = cljs.core.filterv(inst_37977,inst_37965);var inst_37965__$1 = inst_37978;var state_37993__$1 = (function (){var statearr_38004 = state_37993;(statearr_38004[7] = inst_37965__$1);
return statearr_38004;
})();var statearr_38005_38025 = state_37993__$1;(statearr_38005_38025[2] = null);
(statearr_38005_38025[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37994 === 9))
{var inst_37973 = (state_37993[9]);var state_37993__$1 = state_37993;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37993__$1,11,out,inst_37973);
} else
{if((state_val_37994 === 10))
{var inst_37985 = (state_37993[2]);var state_37993__$1 = state_37993;var statearr_38007_38026 = state_37993__$1;(statearr_38007_38026[2] = inst_37985);
(statearr_38007_38026[1] = 6);
return cljs.core.constant$keyword$549;
} else
{if((state_val_37994 === 11))
{var inst_37965 = (state_37993[7]);var inst_37982 = (state_37993[2]);var tmp38006 = inst_37965;var inst_37965__$1 = tmp38006;var state_37993__$1 = (function (){var statearr_38008 = state_37993;(statearr_38008[7] = inst_37965__$1);
(statearr_38008[11] = inst_37982);
return statearr_38008;
})();var statearr_38009_38027 = state_37993__$1;(statearr_38009_38027[2] = null);
(statearr_38009_38027[1] = 2);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38013 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38013[0] = state_machine__5548__auto__);
(statearr_38013[1] = 1);
return statearr_38013;
});
var state_machine__5548__auto____1 = (function (state_37993){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37993);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38014){if((e38014 instanceof Object))
{var ex__5551__auto__ = e38014;var statearr_38015_38028 = state_37993;(statearr_38015_38028[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37993);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e38014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__38029 = state_37993;
state_37993 = G__38029;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37993){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38016 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38017);
return statearr_38016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38099){var state_val_38100 = (state_38099[1]);if((state_val_38100 === 1))
{var inst_38076 = 0;var state_38099__$1 = (function (){var statearr_38101 = state_38099;(statearr_38101[7] = inst_38076);
return statearr_38101;
})();var statearr_38102_38123 = state_38099__$1;(statearr_38102_38123[2] = null);
(statearr_38102_38123[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38100 === 2))
{var inst_38076 = (state_38099[7]);var inst_38078 = (inst_38076 < n);var state_38099__$1 = state_38099;if(cljs.core.truth_(inst_38078))
{var statearr_38103_38124 = state_38099__$1;(statearr_38103_38124[1] = 4);
} else
{var statearr_38104_38125 = state_38099__$1;(statearr_38104_38125[1] = 5);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38100 === 3))
{var inst_38096 = (state_38099[2]);var inst_38097 = cljs.core.async.close_BANG_(out);var state_38099__$1 = (function (){var statearr_38105 = state_38099;(statearr_38105[8] = inst_38096);
return statearr_38105;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38099__$1,inst_38097);
} else
{if((state_val_38100 === 4))
{var state_38099__$1 = state_38099;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38099__$1,7,ch);
} else
{if((state_val_38100 === 5))
{var state_38099__$1 = state_38099;var statearr_38106_38126 = state_38099__$1;(statearr_38106_38126[2] = null);
(statearr_38106_38126[1] = 6);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38100 === 6))
{var inst_38094 = (state_38099[2]);var state_38099__$1 = state_38099;var statearr_38107_38127 = state_38099__$1;(statearr_38107_38127[2] = inst_38094);
(statearr_38107_38127[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38100 === 7))
{var inst_38081 = (state_38099[9]);var inst_38081__$1 = (state_38099[2]);var inst_38082 = (inst_38081__$1 == null);var inst_38083 = cljs.core.not(inst_38082);var state_38099__$1 = (function (){var statearr_38108 = state_38099;(statearr_38108[9] = inst_38081__$1);
return statearr_38108;
})();if(inst_38083)
{var statearr_38109_38128 = state_38099__$1;(statearr_38109_38128[1] = 8);
} else
{var statearr_38110_38129 = state_38099__$1;(statearr_38110_38129[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38100 === 8))
{var inst_38081 = (state_38099[9]);var state_38099__$1 = state_38099;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38099__$1,11,out,inst_38081);
} else
{if((state_val_38100 === 9))
{var state_38099__$1 = state_38099;var statearr_38111_38130 = state_38099__$1;(statearr_38111_38130[2] = null);
(statearr_38111_38130[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38100 === 10))
{var inst_38091 = (state_38099[2]);var state_38099__$1 = state_38099;var statearr_38112_38131 = state_38099__$1;(statearr_38112_38131[2] = inst_38091);
(statearr_38112_38131[1] = 6);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38100 === 11))
{var inst_38076 = (state_38099[7]);var inst_38086 = (state_38099[2]);var inst_38087 = (inst_38076 + 1);var inst_38076__$1 = inst_38087;var state_38099__$1 = (function (){var statearr_38113 = state_38099;(statearr_38113[10] = inst_38086);
(statearr_38113[7] = inst_38076__$1);
return statearr_38113;
})();var statearr_38114_38132 = state_38099__$1;(statearr_38114_38132[2] = null);
(statearr_38114_38132[1] = 2);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38118 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38118[0] = state_machine__5548__auto__);
(statearr_38118[1] = 1);
return statearr_38118;
});
var state_machine__5548__auto____1 = (function (state_38099){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38099);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38119){if((e38119 instanceof Object))
{var ex__5551__auto__ = e38119;var statearr_38120_38133 = state_38099;(statearr_38120_38133[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38099);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e38119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__38134 = state_38099;
state_38099 = G__38134;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38099){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38121 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38122);
return statearr_38121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38206){var state_val_38207 = (state_38206[1]);if((state_val_38207 === 1))
{var inst_38183 = null;var state_38206__$1 = (function (){var statearr_38208 = state_38206;(statearr_38208[7] = inst_38183);
return statearr_38208;
})();var statearr_38209_38232 = state_38206__$1;(statearr_38209_38232[2] = null);
(statearr_38209_38232[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38207 === 2))
{var state_38206__$1 = state_38206;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38206__$1,4,ch);
} else
{if((state_val_38207 === 3))
{var inst_38203 = (state_38206[2]);var inst_38204 = cljs.core.async.close_BANG_(out);var state_38206__$1 = (function (){var statearr_38210 = state_38206;(statearr_38210[8] = inst_38203);
return statearr_38210;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38206__$1,inst_38204);
} else
{if((state_val_38207 === 4))
{var inst_38186 = (state_38206[9]);var inst_38186__$1 = (state_38206[2]);var inst_38187 = (inst_38186__$1 == null);var inst_38188 = cljs.core.not(inst_38187);var state_38206__$1 = (function (){var statearr_38211 = state_38206;(statearr_38211[9] = inst_38186__$1);
return statearr_38211;
})();if(inst_38188)
{var statearr_38212_38233 = state_38206__$1;(statearr_38212_38233[1] = 5);
} else
{var statearr_38213_38234 = state_38206__$1;(statearr_38213_38234[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38207 === 5))
{var inst_38183 = (state_38206[7]);var inst_38186 = (state_38206[9]);var inst_38190 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38186,inst_38183);var state_38206__$1 = state_38206;if(inst_38190)
{var statearr_38214_38235 = state_38206__$1;(statearr_38214_38235[1] = 8);
} else
{var statearr_38215_38236 = state_38206__$1;(statearr_38215_38236[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38207 === 6))
{var state_38206__$1 = state_38206;var statearr_38217_38237 = state_38206__$1;(statearr_38217_38237[2] = null);
(statearr_38217_38237[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38207 === 7))
{var inst_38201 = (state_38206[2]);var state_38206__$1 = state_38206;var statearr_38218_38238 = state_38206__$1;(statearr_38218_38238[2] = inst_38201);
(statearr_38218_38238[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38207 === 8))
{var inst_38183 = (state_38206[7]);var tmp38216 = inst_38183;var inst_38183__$1 = tmp38216;var state_38206__$1 = (function (){var statearr_38219 = state_38206;(statearr_38219[7] = inst_38183__$1);
return statearr_38219;
})();var statearr_38220_38239 = state_38206__$1;(statearr_38220_38239[2] = null);
(statearr_38220_38239[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38207 === 9))
{var inst_38186 = (state_38206[9]);var state_38206__$1 = state_38206;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38206__$1,11,out,inst_38186);
} else
{if((state_val_38207 === 10))
{var inst_38198 = (state_38206[2]);var state_38206__$1 = state_38206;var statearr_38221_38240 = state_38206__$1;(statearr_38221_38240[2] = inst_38198);
(statearr_38221_38240[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38207 === 11))
{var inst_38186 = (state_38206[9]);var inst_38195 = (state_38206[2]);var inst_38183 = inst_38186;var state_38206__$1 = (function (){var statearr_38222 = state_38206;(statearr_38222[10] = inst_38195);
(statearr_38222[7] = inst_38183);
return statearr_38222;
})();var statearr_38223_38241 = state_38206__$1;(statearr_38223_38241[2] = null);
(statearr_38223_38241[1] = 2);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38227 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38227[0] = state_machine__5548__auto__);
(statearr_38227[1] = 1);
return statearr_38227;
});
var state_machine__5548__auto____1 = (function (state_38206){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38206);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38228){if((e38228 instanceof Object))
{var ex__5551__auto__ = e38228;var statearr_38229_38242 = state_38206;(statearr_38229_38242[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38206);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e38228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__38243 = state_38206;
state_38206 = G__38243;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38206){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38230 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38231);
return statearr_38230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38348){var state_val_38349 = (state_38348[1]);if((state_val_38349 === 1))
{var inst_38311 = (new Array(n));var inst_38312 = inst_38311;var inst_38313 = 0;var state_38348__$1 = (function (){var statearr_38350 = state_38348;(statearr_38350[7] = inst_38312);
(statearr_38350[8] = inst_38313);
return statearr_38350;
})();var statearr_38351_38379 = state_38348__$1;(statearr_38351_38379[2] = null);
(statearr_38351_38379[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 2))
{var state_38348__$1 = state_38348;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38348__$1,4,ch);
} else
{if((state_val_38349 === 3))
{var inst_38346 = (state_38348[2]);var state_38348__$1 = state_38348;return cljs.core.async.impl.ioc_helpers.return_chan(state_38348__$1,inst_38346);
} else
{if((state_val_38349 === 4))
{var inst_38316 = (state_38348[9]);var inst_38316__$1 = (state_38348[2]);var inst_38317 = (inst_38316__$1 == null);var inst_38318 = cljs.core.not(inst_38317);var state_38348__$1 = (function (){var statearr_38352 = state_38348;(statearr_38352[9] = inst_38316__$1);
return statearr_38352;
})();if(inst_38318)
{var statearr_38353_38380 = state_38348__$1;(statearr_38353_38380[1] = 5);
} else
{var statearr_38354_38381 = state_38348__$1;(statearr_38354_38381[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 5))
{var inst_38321 = (state_38348[10]);var inst_38316 = (state_38348[9]);var inst_38312 = (state_38348[7]);var inst_38313 = (state_38348[8]);var inst_38320 = (inst_38312[inst_38313] = inst_38316);var inst_38321__$1 = (inst_38313 + 1);var inst_38322 = (inst_38321__$1 < n);var state_38348__$1 = (function (){var statearr_38355 = state_38348;(statearr_38355[10] = inst_38321__$1);
(statearr_38355[11] = inst_38320);
return statearr_38355;
})();if(cljs.core.truth_(inst_38322))
{var statearr_38356_38382 = state_38348__$1;(statearr_38356_38382[1] = 8);
} else
{var statearr_38357_38383 = state_38348__$1;(statearr_38357_38383[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 6))
{var inst_38313 = (state_38348[8]);var inst_38334 = (inst_38313 > 0);var state_38348__$1 = state_38348;if(cljs.core.truth_(inst_38334))
{var statearr_38359_38384 = state_38348__$1;(statearr_38359_38384[1] = 12);
} else
{var statearr_38360_38385 = state_38348__$1;(statearr_38360_38385[1] = 13);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 7))
{var inst_38344 = (state_38348[2]);var state_38348__$1 = state_38348;var statearr_38361_38386 = state_38348__$1;(statearr_38361_38386[2] = inst_38344);
(statearr_38361_38386[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 8))
{var inst_38321 = (state_38348[10]);var inst_38312 = (state_38348[7]);var tmp38358 = inst_38312;var inst_38312__$1 = tmp38358;var inst_38313 = inst_38321;var state_38348__$1 = (function (){var statearr_38362 = state_38348;(statearr_38362[7] = inst_38312__$1);
(statearr_38362[8] = inst_38313);
return statearr_38362;
})();var statearr_38363_38387 = state_38348__$1;(statearr_38363_38387[2] = null);
(statearr_38363_38387[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 9))
{var inst_38312 = (state_38348[7]);var inst_38326 = cljs.core.vec(inst_38312);var state_38348__$1 = state_38348;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38348__$1,11,out,inst_38326);
} else
{if((state_val_38349 === 10))
{var inst_38332 = (state_38348[2]);var state_38348__$1 = state_38348;var statearr_38364_38388 = state_38348__$1;(statearr_38364_38388[2] = inst_38332);
(statearr_38364_38388[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 11))
{var inst_38328 = (state_38348[2]);var inst_38329 = (new Array(n));var inst_38312 = inst_38329;var inst_38313 = 0;var state_38348__$1 = (function (){var statearr_38365 = state_38348;(statearr_38365[12] = inst_38328);
(statearr_38365[7] = inst_38312);
(statearr_38365[8] = inst_38313);
return statearr_38365;
})();var statearr_38366_38389 = state_38348__$1;(statearr_38366_38389[2] = null);
(statearr_38366_38389[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 12))
{var inst_38312 = (state_38348[7]);var inst_38336 = cljs.core.vec(inst_38312);var state_38348__$1 = state_38348;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38348__$1,15,out,inst_38336);
} else
{if((state_val_38349 === 13))
{var state_38348__$1 = state_38348;var statearr_38367_38390 = state_38348__$1;(statearr_38367_38390[2] = null);
(statearr_38367_38390[1] = 14);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 14))
{var inst_38341 = (state_38348[2]);var inst_38342 = cljs.core.async.close_BANG_(out);var state_38348__$1 = (function (){var statearr_38368 = state_38348;(statearr_38368[13] = inst_38341);
return statearr_38368;
})();var statearr_38369_38391 = state_38348__$1;(statearr_38369_38391[2] = inst_38342);
(statearr_38369_38391[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38349 === 15))
{var inst_38338 = (state_38348[2]);var state_38348__$1 = state_38348;var statearr_38370_38392 = state_38348__$1;(statearr_38370_38392[2] = inst_38338);
(statearr_38370_38392[1] = 14);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38374[0] = state_machine__5548__auto__);
(statearr_38374[1] = 1);
return statearr_38374;
});
var state_machine__5548__auto____1 = (function (state_38348){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38348);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38375){if((e38375 instanceof Object))
{var ex__5551__auto__ = e38375;var statearr_38376_38393 = state_38348;(statearr_38376_38393[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38348);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e38375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__38394 = state_38348;
state_38348 = G__38394;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38348){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38377 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38378);
return statearr_38377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38507){var state_val_38508 = (state_38507[1]);if((state_val_38508 === 1))
{var inst_38466 = [];var inst_38467 = inst_38466;var inst_38468 = cljs.core.constant$keyword$562;var state_38507__$1 = (function (){var statearr_38509 = state_38507;(statearr_38509[7] = inst_38467);
(statearr_38509[8] = inst_38468);
return statearr_38509;
})();var statearr_38510_38538 = state_38507__$1;(statearr_38510_38538[2] = null);
(statearr_38510_38538[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 2))
{var state_38507__$1 = state_38507;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38507__$1,4,ch);
} else
{if((state_val_38508 === 3))
{var inst_38505 = (state_38507[2]);var state_38507__$1 = state_38507;return cljs.core.async.impl.ioc_helpers.return_chan(state_38507__$1,inst_38505);
} else
{if((state_val_38508 === 4))
{var inst_38471 = (state_38507[9]);var inst_38471__$1 = (state_38507[2]);var inst_38472 = (inst_38471__$1 == null);var inst_38473 = cljs.core.not(inst_38472);var state_38507__$1 = (function (){var statearr_38511 = state_38507;(statearr_38511[9] = inst_38471__$1);
return statearr_38511;
})();if(inst_38473)
{var statearr_38512_38539 = state_38507__$1;(statearr_38512_38539[1] = 5);
} else
{var statearr_38513_38540 = state_38507__$1;(statearr_38513_38540[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 5))
{var inst_38475 = (state_38507[10]);var inst_38471 = (state_38507[9]);var inst_38468 = (state_38507[8]);var inst_38475__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38471) : f.call(null,inst_38471));var inst_38476 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38475__$1,inst_38468);var inst_38477 = cljs.core.keyword_identical_QMARK_(inst_38468,cljs.core.constant$keyword$562);var inst_38478 = (inst_38476) || (inst_38477);var state_38507__$1 = (function (){var statearr_38514 = state_38507;(statearr_38514[10] = inst_38475__$1);
return statearr_38514;
})();if(cljs.core.truth_(inst_38478))
{var statearr_38515_38541 = state_38507__$1;(statearr_38515_38541[1] = 8);
} else
{var statearr_38516_38542 = state_38507__$1;(statearr_38516_38542[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 6))
{var inst_38467 = (state_38507[7]);var inst_38492 = inst_38467.length;var inst_38493 = (inst_38492 > 0);var state_38507__$1 = state_38507;if(cljs.core.truth_(inst_38493))
{var statearr_38518_38543 = state_38507__$1;(statearr_38518_38543[1] = 12);
} else
{var statearr_38519_38544 = state_38507__$1;(statearr_38519_38544[1] = 13);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 7))
{var inst_38503 = (state_38507[2]);var state_38507__$1 = state_38507;var statearr_38520_38545 = state_38507__$1;(statearr_38520_38545[2] = inst_38503);
(statearr_38520_38545[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 8))
{var inst_38467 = (state_38507[7]);var inst_38475 = (state_38507[10]);var inst_38471 = (state_38507[9]);var inst_38480 = inst_38467.push(inst_38471);var tmp38517 = inst_38467;var inst_38467__$1 = tmp38517;var inst_38468 = inst_38475;var state_38507__$1 = (function (){var statearr_38521 = state_38507;(statearr_38521[7] = inst_38467__$1);
(statearr_38521[11] = inst_38480);
(statearr_38521[8] = inst_38468);
return statearr_38521;
})();var statearr_38522_38546 = state_38507__$1;(statearr_38522_38546[2] = null);
(statearr_38522_38546[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 9))
{var inst_38467 = (state_38507[7]);var inst_38483 = cljs.core.vec(inst_38467);var state_38507__$1 = state_38507;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38507__$1,11,out,inst_38483);
} else
{if((state_val_38508 === 10))
{var inst_38490 = (state_38507[2]);var state_38507__$1 = state_38507;var statearr_38523_38547 = state_38507__$1;(statearr_38523_38547[2] = inst_38490);
(statearr_38523_38547[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 11))
{var inst_38475 = (state_38507[10]);var inst_38471 = (state_38507[9]);var inst_38485 = (state_38507[2]);var inst_38486 = [];var inst_38487 = inst_38486.push(inst_38471);var inst_38467 = inst_38486;var inst_38468 = inst_38475;var state_38507__$1 = (function (){var statearr_38524 = state_38507;(statearr_38524[12] = inst_38487);
(statearr_38524[13] = inst_38485);
(statearr_38524[7] = inst_38467);
(statearr_38524[8] = inst_38468);
return statearr_38524;
})();var statearr_38525_38548 = state_38507__$1;(statearr_38525_38548[2] = null);
(statearr_38525_38548[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 12))
{var inst_38467 = (state_38507[7]);var inst_38495 = cljs.core.vec(inst_38467);var state_38507__$1 = state_38507;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38507__$1,15,out,inst_38495);
} else
{if((state_val_38508 === 13))
{var state_38507__$1 = state_38507;var statearr_38526_38549 = state_38507__$1;(statearr_38526_38549[2] = null);
(statearr_38526_38549[1] = 14);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 14))
{var inst_38500 = (state_38507[2]);var inst_38501 = cljs.core.async.close_BANG_(out);var state_38507__$1 = (function (){var statearr_38527 = state_38507;(statearr_38527[14] = inst_38500);
return statearr_38527;
})();var statearr_38528_38550 = state_38507__$1;(statearr_38528_38550[2] = inst_38501);
(statearr_38528_38550[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_38508 === 15))
{var inst_38497 = (state_38507[2]);var state_38507__$1 = state_38507;var statearr_38529_38551 = state_38507__$1;(statearr_38529_38551[2] = inst_38497);
(statearr_38529_38551[1] = 14);
return cljs.core.constant$keyword$549;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38533[0] = state_machine__5548__auto__);
(statearr_38533[1] = 1);
return statearr_38533;
});
var state_machine__5548__auto____1 = (function (state_38507){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38507);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38534){if((e38534 instanceof Object))
{var ex__5551__auto__ = e38534;var statearr_38535_38552 = state_38507;(statearr_38535_38552[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38507);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e38534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__38553 = state_38507;
state_38507 = G__38553;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38507){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38536 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38537);
return statearr_38536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
