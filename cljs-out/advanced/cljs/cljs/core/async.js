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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t35991 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35991 = (function (f,fn_handler,meta35992){
this.f = f;
this.fn_handler = fn_handler;
this.meta35992 = meta35992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35991.cljs$lang$type = true;
cljs.core.async.t35991.cljs$lang$ctorStr = "cljs.core.async/t35991";
cljs.core.async.t35991.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35991");
});
cljs.core.async.t35991.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t35991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t35991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35993){var self__ = this;
var _35993__$1 = this;return self__.meta35992;
});
cljs.core.async.t35991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35993,meta35992__$1){var self__ = this;
var _35993__$1 = this;return (new cljs.core.async.t35991(self__.f,self__.fn_handler,meta35992__$1));
});
cljs.core.async.__GT_t35991 = (function __GT_t35991(f__$1,fn_handler__$1,meta35992){return (new cljs.core.async.t35991(f__$1,fn_handler__$1,meta35992));
});
}
return (new cljs.core.async.t35991(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__35995 = buff;if(G__35995)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__35995.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__35995.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35995);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35995);
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
{var val_35996 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35996) : fn1.call(null,val_35996));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35996) : fn1.call(null,val_35996));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___35997 = n;var x_35998 = 0;while(true){
if((x_35998 < n__4289__auto___35997))
{(a[x_35998] = 0);
{
var G__35999 = (x_35998 + 1);
x_35998 = G__35999;
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
var G__36000 = (i + 1);
i = G__36000;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t36004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36004 = (function (flag,alt_flag,meta36005){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36005 = meta36005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36004.cljs$lang$type = true;
cljs.core.async.t36004.cljs$lang$ctorStr = "cljs.core.async/t36004";
cljs.core.async.t36004.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36004");
});
cljs.core.async.t36004.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t36004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t36004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36006){var self__ = this;
var _36006__$1 = this;return self__.meta36005;
});
cljs.core.async.t36004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36006,meta36005__$1){var self__ = this;
var _36006__$1 = this;return (new cljs.core.async.t36004(self__.flag,self__.alt_flag,meta36005__$1));
});
cljs.core.async.__GT_t36004 = (function __GT_t36004(flag__$1,alt_flag__$1,meta36005){return (new cljs.core.async.t36004(flag__$1,alt_flag__$1,meta36005));
});
}
return (new cljs.core.async.t36004(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t36010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36010 = (function (cb,flag,alt_handler,meta36011){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36011 = meta36011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36010.cljs$lang$type = true;
cljs.core.async.t36010.cljs$lang$ctorStr = "cljs.core.async/t36010";
cljs.core.async.t36010.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36010");
});
cljs.core.async.t36010.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t36010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t36010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36012){var self__ = this;
var _36012__$1 = this;return self__.meta36011;
});
cljs.core.async.t36010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36012,meta36011__$1){var self__ = this;
var _36012__$1 = this;return (new cljs.core.async.t36010(self__.cb,self__.flag,self__.alt_handler,meta36011__$1));
});
cljs.core.async.__GT_t36010 = (function __GT_t36010(cb__$1,flag__$1,alt_handler__$1,meta36011){return (new cljs.core.async.t36010(cb__$1,flag__$1,alt_handler__$1,meta36011));
});
}
return (new cljs.core.async.t36010(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$557.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36013_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36013_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36013_SHARP_,port], null)));
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
var G__36014 = (i + 1);
i = G__36014;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$541))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3429__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$541.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$541], null));
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
var alts_BANG___delegate = function (ports,p__36015){var map__36017 = p__36015;var map__36017__$1 = ((cljs.core.seq_QMARK_(map__36017))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36017):map__36017);var opts = map__36017__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__36015 = null;if (arguments.length > 1) {
  p__36015 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__36015);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36018){
var ports = cljs.core.first(arglist__36018);
var p__36015 = cljs.core.rest(arglist__36018);
return alts_BANG___delegate(ports,p__36015);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36026 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36026 = (function (ch,f,map_LT_,meta36027){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36027 = meta36027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36026.cljs$lang$type = true;
cljs.core.async.t36026.cljs$lang$ctorStr = "cljs.core.async/t36026";
cljs.core.async.t36026.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36026");
});
cljs.core.async.t36026.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t36026.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t36029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36029 = (function (fn1,_,meta36027,ch,f,map_LT_,meta36030){
this.fn1 = fn1;
this._ = _;
this.meta36027 = meta36027;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36030 = meta36030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36029.cljs$lang$type = true;
cljs.core.async.t36029.cljs$lang$ctorStr = "cljs.core.async/t36029";
cljs.core.async.t36029.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36029");
});
cljs.core.async.t36029.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t36029.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t36029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__36019_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__36019_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36019_SHARP_) : self__.f.call(null,p1__36019_SHARP_)))) : f1.call(null,(((p1__36019_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36019_SHARP_) : self__.f.call(null,p1__36019_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t36029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36031){var self__ = this;
var _36031__$1 = this;return self__.meta36030;
});
cljs.core.async.t36029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36031,meta36030__$1){var self__ = this;
var _36031__$1 = this;return (new cljs.core.async.t36029(self__.fn1,self__._,self__.meta36027,self__.ch,self__.f,self__.map_LT_,meta36030__$1));
});
cljs.core.async.__GT_t36029 = (function __GT_t36029(fn1__$1,___$2,meta36027__$1,ch__$2,f__$2,map_LT___$2,meta36030){return (new cljs.core.async.t36029(fn1__$1,___$2,meta36027__$1,ch__$2,f__$2,map_LT___$2,meta36030));
});
}
return (new cljs.core.async.t36029(fn1,___$1,self__.meta36027,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t36026.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36028){var self__ = this;
var _36028__$1 = this;return self__.meta36027;
});
cljs.core.async.t36026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36028,meta36027__$1){var self__ = this;
var _36028__$1 = this;return (new cljs.core.async.t36026(self__.ch,self__.f,self__.map_LT_,meta36027__$1));
});
cljs.core.async.__GT_t36026 = (function __GT_t36026(ch__$1,f__$1,map_LT___$1,meta36027){return (new cljs.core.async.t36026(ch__$1,f__$1,map_LT___$1,meta36027));
});
}
return (new cljs.core.async.t36026(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36035 = (function (ch,f,map_GT_,meta36036){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36036 = meta36036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36035.cljs$lang$type = true;
cljs.core.async.t36035.cljs$lang$ctorStr = "cljs.core.async/t36035";
cljs.core.async.t36035.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36035");
});
cljs.core.async.t36035.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t36035.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36035.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36037){var self__ = this;
var _36037__$1 = this;return self__.meta36036;
});
cljs.core.async.t36035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36037,meta36036__$1){var self__ = this;
var _36037__$1 = this;return (new cljs.core.async.t36035(self__.ch,self__.f,self__.map_GT_,meta36036__$1));
});
cljs.core.async.__GT_t36035 = (function __GT_t36035(ch__$1,f__$1,map_GT___$1,meta36036){return (new cljs.core.async.t36035(ch__$1,f__$1,map_GT___$1,meta36036));
});
}
return (new cljs.core.async.t36035(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36041 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36041 = (function (ch,p,filter_GT_,meta36042){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36042 = meta36042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36041.cljs$lang$type = true;
cljs.core.async.t36041.cljs$lang$ctorStr = "cljs.core.async/t36041";
cljs.core.async.t36041.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36041");
});
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36043){var self__ = this;
var _36043__$1 = this;return self__.meta36042;
});
cljs.core.async.t36041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36043,meta36042__$1){var self__ = this;
var _36043__$1 = this;return (new cljs.core.async.t36041(self__.ch,self__.p,self__.filter_GT_,meta36042__$1));
});
cljs.core.async.__GT_t36041 = (function __GT_t36041(ch__$1,p__$1,filter_GT___$1,meta36042){return (new cljs.core.async.t36041(ch__$1,p__$1,filter_GT___$1,meta36042));
});
}
return (new cljs.core.async.t36041(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___36126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36105){var state_val_36106 = (state_36105[1]);if((state_val_36106 === 1))
{var state_36105__$1 = state_36105;var statearr_36107_36127 = state_36105__$1;(statearr_36107_36127[2] = null);
(statearr_36107_36127[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36106 === 2))
{var state_36105__$1 = state_36105;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36105__$1,4,ch);
} else
{if((state_val_36106 === 3))
{var inst_36103 = (state_36105[2]);var state_36105__$1 = state_36105;return cljs.core.async.impl.ioc_helpers.return_chan(state_36105__$1,inst_36103);
} else
{if((state_val_36106 === 4))
{var inst_36087 = (state_36105[7]);var inst_36087__$1 = (state_36105[2]);var inst_36088 = (inst_36087__$1 == null);var state_36105__$1 = (function (){var statearr_36108 = state_36105;(statearr_36108[7] = inst_36087__$1);
return statearr_36108;
})();if(cljs.core.truth_(inst_36088))
{var statearr_36109_36128 = state_36105__$1;(statearr_36109_36128[1] = 5);
} else
{var statearr_36110_36129 = state_36105__$1;(statearr_36110_36129[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36106 === 5))
{var inst_36090 = cljs.core.async.close_BANG_(out);var state_36105__$1 = state_36105;var statearr_36111_36130 = state_36105__$1;(statearr_36111_36130[2] = inst_36090);
(statearr_36111_36130[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36106 === 6))
{var inst_36087 = (state_36105[7]);var inst_36092 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36087) : p.call(null,inst_36087));var state_36105__$1 = state_36105;if(cljs.core.truth_(inst_36092))
{var statearr_36112_36131 = state_36105__$1;(statearr_36112_36131[1] = 8);
} else
{var statearr_36113_36132 = state_36105__$1;(statearr_36113_36132[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36106 === 7))
{var inst_36101 = (state_36105[2]);var state_36105__$1 = state_36105;var statearr_36114_36133 = state_36105__$1;(statearr_36114_36133[2] = inst_36101);
(statearr_36114_36133[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36106 === 8))
{var inst_36087 = (state_36105[7]);var state_36105__$1 = state_36105;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36105__$1,11,out,inst_36087);
} else
{if((state_val_36106 === 9))
{var state_36105__$1 = state_36105;var statearr_36115_36134 = state_36105__$1;(statearr_36115_36134[2] = null);
(statearr_36115_36134[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36106 === 10))
{var inst_36098 = (state_36105[2]);var state_36105__$1 = (function (){var statearr_36116 = state_36105;(statearr_36116[8] = inst_36098);
return statearr_36116;
})();var statearr_36117_36135 = state_36105__$1;(statearr_36117_36135[2] = null);
(statearr_36117_36135[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36106 === 11))
{var inst_36095 = (state_36105[2]);var state_36105__$1 = state_36105;var statearr_36118_36136 = state_36105__$1;(statearr_36118_36136[2] = inst_36095);
(statearr_36118_36136[1] = 10);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_36122 = [null,null,null,null,null,null,null,null,null];(statearr_36122[0] = state_machine__5548__auto__);
(statearr_36122[1] = 1);
return statearr_36122;
});
var state_machine__5548__auto____1 = (function (state_36105){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36105);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36123){if((e36123 instanceof Object))
{var ex__5551__auto__ = e36123;var statearr_36124_36137 = state_36105;(statearr_36124_36137[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36105);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36138 = state_36105;
state_36105 = G__36138;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36105){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36125 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36126);
return statearr_36125;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36290){var state_val_36291 = (state_36290[1]);if((state_val_36291 === 1))
{var state_36290__$1 = state_36290;var statearr_36292_36329 = state_36290__$1;(statearr_36292_36329[2] = null);
(statearr_36292_36329[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 2))
{var state_36290__$1 = state_36290;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36290__$1,4,in$);
} else
{if((state_val_36291 === 3))
{var inst_36288 = (state_36290[2]);var state_36290__$1 = state_36290;return cljs.core.async.impl.ioc_helpers.return_chan(state_36290__$1,inst_36288);
} else
{if((state_val_36291 === 4))
{var inst_36236 = (state_36290[7]);var inst_36236__$1 = (state_36290[2]);var inst_36237 = (inst_36236__$1 == null);var state_36290__$1 = (function (){var statearr_36293 = state_36290;(statearr_36293[7] = inst_36236__$1);
return statearr_36293;
})();if(cljs.core.truth_(inst_36237))
{var statearr_36294_36330 = state_36290__$1;(statearr_36294_36330[1] = 5);
} else
{var statearr_36295_36331 = state_36290__$1;(statearr_36295_36331[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 5))
{var inst_36239 = cljs.core.async.close_BANG_(out);var state_36290__$1 = state_36290;var statearr_36296_36332 = state_36290__$1;(statearr_36296_36332[2] = inst_36239);
(statearr_36296_36332[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 6))
{var inst_36236 = (state_36290[7]);var inst_36241 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36236) : f.call(null,inst_36236));var inst_36246 = cljs.core.seq(inst_36241);var inst_36247 = inst_36246;var inst_36248 = null;var inst_36249 = 0;var inst_36250 = 0;var state_36290__$1 = (function (){var statearr_36297 = state_36290;(statearr_36297[8] = inst_36250);
(statearr_36297[9] = inst_36249);
(statearr_36297[10] = inst_36248);
(statearr_36297[11] = inst_36247);
return statearr_36297;
})();var statearr_36298_36333 = state_36290__$1;(statearr_36298_36333[2] = null);
(statearr_36298_36333[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 7))
{var inst_36286 = (state_36290[2]);var state_36290__$1 = state_36290;var statearr_36299_36334 = state_36290__$1;(statearr_36299_36334[2] = inst_36286);
(statearr_36299_36334[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 8))
{var inst_36250 = (state_36290[8]);var inst_36249 = (state_36290[9]);var inst_36252 = (inst_36250 < inst_36249);var inst_36253 = inst_36252;var state_36290__$1 = state_36290;if(cljs.core.truth_(inst_36253))
{var statearr_36300_36335 = state_36290__$1;(statearr_36300_36335[1] = 10);
} else
{var statearr_36301_36336 = state_36290__$1;(statearr_36301_36336[1] = 11);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 9))
{var inst_36283 = (state_36290[2]);var state_36290__$1 = (function (){var statearr_36302 = state_36290;(statearr_36302[12] = inst_36283);
return statearr_36302;
})();var statearr_36303_36337 = state_36290__$1;(statearr_36303_36337[2] = null);
(statearr_36303_36337[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 10))
{var inst_36250 = (state_36290[8]);var inst_36248 = (state_36290[10]);var inst_36255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36248,inst_36250);var state_36290__$1 = state_36290;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36290__$1,13,out,inst_36255);
} else
{if((state_val_36291 === 11))
{var inst_36261 = (state_36290[13]);var inst_36247 = (state_36290[11]);var inst_36261__$1 = cljs.core.seq(inst_36247);var state_36290__$1 = (function (){var statearr_36307 = state_36290;(statearr_36307[13] = inst_36261__$1);
return statearr_36307;
})();if(inst_36261__$1)
{var statearr_36308_36338 = state_36290__$1;(statearr_36308_36338[1] = 14);
} else
{var statearr_36309_36339 = state_36290__$1;(statearr_36309_36339[1] = 15);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 12))
{var inst_36281 = (state_36290[2]);var state_36290__$1 = state_36290;var statearr_36310_36340 = state_36290__$1;(statearr_36310_36340[2] = inst_36281);
(statearr_36310_36340[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 13))
{var inst_36250 = (state_36290[8]);var inst_36249 = (state_36290[9]);var inst_36248 = (state_36290[10]);var inst_36247 = (state_36290[11]);var inst_36257 = (state_36290[2]);var inst_36258 = (inst_36250 + 1);var tmp36304 = inst_36249;var tmp36305 = inst_36248;var tmp36306 = inst_36247;var inst_36247__$1 = tmp36306;var inst_36248__$1 = tmp36305;var inst_36249__$1 = tmp36304;var inst_36250__$1 = inst_36258;var state_36290__$1 = (function (){var statearr_36311 = state_36290;(statearr_36311[14] = inst_36257);
(statearr_36311[8] = inst_36250__$1);
(statearr_36311[9] = inst_36249__$1);
(statearr_36311[10] = inst_36248__$1);
(statearr_36311[11] = inst_36247__$1);
return statearr_36311;
})();var statearr_36312_36341 = state_36290__$1;(statearr_36312_36341[2] = null);
(statearr_36312_36341[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 14))
{var inst_36261 = (state_36290[13]);var inst_36263 = cljs.core.chunked_seq_QMARK_(inst_36261);var state_36290__$1 = state_36290;if(inst_36263)
{var statearr_36313_36342 = state_36290__$1;(statearr_36313_36342[1] = 17);
} else
{var statearr_36314_36343 = state_36290__$1;(statearr_36314_36343[1] = 18);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 15))
{var state_36290__$1 = state_36290;var statearr_36315_36344 = state_36290__$1;(statearr_36315_36344[2] = null);
(statearr_36315_36344[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 16))
{var inst_36279 = (state_36290[2]);var state_36290__$1 = state_36290;var statearr_36316_36345 = state_36290__$1;(statearr_36316_36345[2] = inst_36279);
(statearr_36316_36345[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 17))
{var inst_36261 = (state_36290[13]);var inst_36265 = cljs.core.chunk_first(inst_36261);var inst_36266 = cljs.core.chunk_rest(inst_36261);var inst_36267 = cljs.core.count(inst_36265);var inst_36247 = inst_36266;var inst_36248 = inst_36265;var inst_36249 = inst_36267;var inst_36250 = 0;var state_36290__$1 = (function (){var statearr_36317 = state_36290;(statearr_36317[8] = inst_36250);
(statearr_36317[9] = inst_36249);
(statearr_36317[10] = inst_36248);
(statearr_36317[11] = inst_36247);
return statearr_36317;
})();var statearr_36318_36346 = state_36290__$1;(statearr_36318_36346[2] = null);
(statearr_36318_36346[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 18))
{var inst_36261 = (state_36290[13]);var inst_36270 = cljs.core.first(inst_36261);var state_36290__$1 = state_36290;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36290__$1,20,out,inst_36270);
} else
{if((state_val_36291 === 19))
{var inst_36276 = (state_36290[2]);var state_36290__$1 = state_36290;var statearr_36319_36347 = state_36290__$1;(statearr_36319_36347[2] = inst_36276);
(statearr_36319_36347[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36291 === 20))
{var inst_36261 = (state_36290[13]);var inst_36272 = (state_36290[2]);var inst_36273 = cljs.core.next(inst_36261);var inst_36247 = inst_36273;var inst_36248 = null;var inst_36249 = 0;var inst_36250 = 0;var state_36290__$1 = (function (){var statearr_36320 = state_36290;(statearr_36320[15] = inst_36272);
(statearr_36320[8] = inst_36250);
(statearr_36320[9] = inst_36249);
(statearr_36320[10] = inst_36248);
(statearr_36320[11] = inst_36247);
return statearr_36320;
})();var statearr_36321_36348 = state_36290__$1;(statearr_36321_36348[2] = null);
(statearr_36321_36348[1] = 8);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_36325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36325[0] = state_machine__5548__auto__);
(statearr_36325[1] = 1);
return statearr_36325;
});
var state_machine__5548__auto____1 = (function (state_36290){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36290);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36326){if((e36326 instanceof Object))
{var ex__5551__auto__ = e36326;var statearr_36327_36349 = state_36290;(statearr_36327_36349[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36290);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36326;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36350 = state_36290;
state_36290 = G__36350;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36290){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36328 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36328;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___36431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36410){var state_val_36411 = (state_36410[1]);if((state_val_36411 === 1))
{var state_36410__$1 = state_36410;var statearr_36412_36432 = state_36410__$1;(statearr_36412_36432[2] = null);
(statearr_36412_36432[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36411 === 2))
{var state_36410__$1 = state_36410;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36410__$1,4,from);
} else
{if((state_val_36411 === 3))
{var inst_36408 = (state_36410[2]);var state_36410__$1 = state_36410;return cljs.core.async.impl.ioc_helpers.return_chan(state_36410__$1,inst_36408);
} else
{if((state_val_36411 === 4))
{var inst_36393 = (state_36410[7]);var inst_36393__$1 = (state_36410[2]);var inst_36394 = (inst_36393__$1 == null);var state_36410__$1 = (function (){var statearr_36413 = state_36410;(statearr_36413[7] = inst_36393__$1);
return statearr_36413;
})();if(cljs.core.truth_(inst_36394))
{var statearr_36414_36433 = state_36410__$1;(statearr_36414_36433[1] = 5);
} else
{var statearr_36415_36434 = state_36410__$1;(statearr_36415_36434[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36411 === 5))
{var state_36410__$1 = state_36410;if(cljs.core.truth_(close_QMARK_))
{var statearr_36416_36435 = state_36410__$1;(statearr_36416_36435[1] = 8);
} else
{var statearr_36417_36436 = state_36410__$1;(statearr_36417_36436[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36411 === 6))
{var inst_36393 = (state_36410[7]);var state_36410__$1 = state_36410;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36410__$1,11,to,inst_36393);
} else
{if((state_val_36411 === 7))
{var inst_36406 = (state_36410[2]);var state_36410__$1 = state_36410;var statearr_36418_36437 = state_36410__$1;(statearr_36418_36437[2] = inst_36406);
(statearr_36418_36437[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36411 === 8))
{var inst_36397 = cljs.core.async.close_BANG_(to);var state_36410__$1 = state_36410;var statearr_36419_36438 = state_36410__$1;(statearr_36419_36438[2] = inst_36397);
(statearr_36419_36438[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36411 === 9))
{var state_36410__$1 = state_36410;var statearr_36420_36439 = state_36410__$1;(statearr_36420_36439[2] = null);
(statearr_36420_36439[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36411 === 10))
{var inst_36400 = (state_36410[2]);var state_36410__$1 = state_36410;var statearr_36421_36440 = state_36410__$1;(statearr_36421_36440[2] = inst_36400);
(statearr_36421_36440[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36411 === 11))
{var inst_36403 = (state_36410[2]);var state_36410__$1 = (function (){var statearr_36422 = state_36410;(statearr_36422[8] = inst_36403);
return statearr_36422;
})();var statearr_36423_36441 = state_36410__$1;(statearr_36423_36441[2] = null);
(statearr_36423_36441[1] = 2);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_36427 = [null,null,null,null,null,null,null,null,null];(statearr_36427[0] = state_machine__5548__auto__);
(statearr_36427[1] = 1);
return statearr_36427;
});
var state_machine__5548__auto____1 = (function (state_36410){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36410);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36428){if((e36428 instanceof Object))
{var ex__5551__auto__ = e36428;var statearr_36429_36442 = state_36410;(statearr_36429_36442[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36410);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36443 = state_36410;
state_36410 = G__36443;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36410){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36430 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36431);
return statearr_36430;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5562__auto___36530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36508){var state_val_36509 = (state_36508[1]);if((state_val_36509 === 1))
{var state_36508__$1 = state_36508;var statearr_36510_36531 = state_36508__$1;(statearr_36510_36531[2] = null);
(statearr_36510_36531[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36509 === 2))
{var state_36508__$1 = state_36508;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36508__$1,4,ch);
} else
{if((state_val_36509 === 3))
{var inst_36506 = (state_36508[2]);var state_36508__$1 = state_36508;return cljs.core.async.impl.ioc_helpers.return_chan(state_36508__$1,inst_36506);
} else
{if((state_val_36509 === 4))
{var inst_36489 = (state_36508[7]);var inst_36489__$1 = (state_36508[2]);var inst_36490 = (inst_36489__$1 == null);var state_36508__$1 = (function (){var statearr_36511 = state_36508;(statearr_36511[7] = inst_36489__$1);
return statearr_36511;
})();if(cljs.core.truth_(inst_36490))
{var statearr_36512_36532 = state_36508__$1;(statearr_36512_36532[1] = 5);
} else
{var statearr_36513_36533 = state_36508__$1;(statearr_36513_36533[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36509 === 5))
{var inst_36492 = cljs.core.async.close_BANG_(tc);var inst_36493 = cljs.core.async.close_BANG_(fc);var state_36508__$1 = (function (){var statearr_36514 = state_36508;(statearr_36514[8] = inst_36492);
return statearr_36514;
})();var statearr_36515_36534 = state_36508__$1;(statearr_36515_36534[2] = inst_36493);
(statearr_36515_36534[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36509 === 6))
{var inst_36489 = (state_36508[7]);var inst_36495 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36489) : p.call(null,inst_36489));var state_36508__$1 = state_36508;if(cljs.core.truth_(inst_36495))
{var statearr_36516_36535 = state_36508__$1;(statearr_36516_36535[1] = 9);
} else
{var statearr_36517_36536 = state_36508__$1;(statearr_36517_36536[1] = 10);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36509 === 7))
{var inst_36504 = (state_36508[2]);var state_36508__$1 = state_36508;var statearr_36518_36537 = state_36508__$1;(statearr_36518_36537[2] = inst_36504);
(statearr_36518_36537[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36509 === 8))
{var inst_36501 = (state_36508[2]);var state_36508__$1 = (function (){var statearr_36519 = state_36508;(statearr_36519[9] = inst_36501);
return statearr_36519;
})();var statearr_36520_36538 = state_36508__$1;(statearr_36520_36538[2] = null);
(statearr_36520_36538[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36509 === 9))
{var state_36508__$1 = state_36508;var statearr_36521_36539 = state_36508__$1;(statearr_36521_36539[2] = tc);
(statearr_36521_36539[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36509 === 10))
{var state_36508__$1 = state_36508;var statearr_36522_36540 = state_36508__$1;(statearr_36522_36540[2] = fc);
(statearr_36522_36540[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36509 === 11))
{var inst_36489 = (state_36508[7]);var inst_36499 = (state_36508[2]);var state_36508__$1 = state_36508;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36508__$1,8,inst_36499,inst_36489);
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
var state_machine__5548__auto____0 = (function (){var statearr_36526 = [null,null,null,null,null,null,null,null,null,null];(statearr_36526[0] = state_machine__5548__auto__);
(statearr_36526[1] = 1);
return statearr_36526;
});
var state_machine__5548__auto____1 = (function (state_36508){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36508);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36527){if((e36527 instanceof Object))
{var ex__5551__auto__ = e36527;var statearr_36528_36541 = state_36508;(statearr_36528_36541[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36508);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36542 = state_36508;
state_36508 = G__36542;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36508){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36529 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36530);
return statearr_36529;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36589){var state_val_36590 = (state_36589[1]);if((state_val_36590 === 7))
{var inst_36585 = (state_36589[2]);var state_36589__$1 = state_36589;var statearr_36591_36607 = state_36589__$1;(statearr_36591_36607[2] = inst_36585);
(statearr_36591_36607[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36590 === 6))
{var inst_36578 = (state_36589[7]);var inst_36575 = (state_36589[8]);var inst_36582 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36575,inst_36578) : f.call(null,inst_36575,inst_36578));var inst_36575__$1 = inst_36582;var state_36589__$1 = (function (){var statearr_36592 = state_36589;(statearr_36592[8] = inst_36575__$1);
return statearr_36592;
})();var statearr_36593_36608 = state_36589__$1;(statearr_36593_36608[2] = null);
(statearr_36593_36608[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36590 === 5))
{var inst_36575 = (state_36589[8]);var state_36589__$1 = state_36589;var statearr_36594_36609 = state_36589__$1;(statearr_36594_36609[2] = inst_36575);
(statearr_36594_36609[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36590 === 4))
{var inst_36578 = (state_36589[7]);var inst_36578__$1 = (state_36589[2]);var inst_36579 = (inst_36578__$1 == null);var state_36589__$1 = (function (){var statearr_36595 = state_36589;(statearr_36595[7] = inst_36578__$1);
return statearr_36595;
})();if(cljs.core.truth_(inst_36579))
{var statearr_36596_36610 = state_36589__$1;(statearr_36596_36610[1] = 5);
} else
{var statearr_36597_36611 = state_36589__$1;(statearr_36597_36611[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36590 === 3))
{var inst_36587 = (state_36589[2]);var state_36589__$1 = state_36589;return cljs.core.async.impl.ioc_helpers.return_chan(state_36589__$1,inst_36587);
} else
{if((state_val_36590 === 2))
{var state_36589__$1 = state_36589;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36589__$1,4,ch);
} else
{if((state_val_36590 === 1))
{var inst_36575 = init;var state_36589__$1 = (function (){var statearr_36598 = state_36589;(statearr_36598[8] = inst_36575);
return statearr_36598;
})();var statearr_36599_36612 = state_36589__$1;(statearr_36599_36612[2] = null);
(statearr_36599_36612[1] = 2);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_36603 = [null,null,null,null,null,null,null,null,null];(statearr_36603[0] = state_machine__5548__auto__);
(statearr_36603[1] = 1);
return statearr_36603;
});
var state_machine__5548__auto____1 = (function (state_36589){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36589);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36604){if((e36604 instanceof Object))
{var ex__5551__auto__ = e36604;var statearr_36605_36613 = state_36589;(statearr_36605_36613[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36589);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36614 = state_36589;
state_36589 = G__36614;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36589){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36606 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36606;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36676){var state_val_36677 = (state_36676[1]);if((state_val_36677 === 1))
{var inst_36656 = cljs.core.seq(coll);var inst_36657 = inst_36656;var state_36676__$1 = (function (){var statearr_36678 = state_36676;(statearr_36678[7] = inst_36657);
return statearr_36678;
})();var statearr_36679_36697 = state_36676__$1;(statearr_36679_36697[2] = null);
(statearr_36679_36697[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36677 === 2))
{var inst_36657 = (state_36676[7]);var state_36676__$1 = state_36676;if(cljs.core.truth_(inst_36657))
{var statearr_36680_36698 = state_36676__$1;(statearr_36680_36698[1] = 4);
} else
{var statearr_36681_36699 = state_36676__$1;(statearr_36681_36699[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36677 === 3))
{var inst_36674 = (state_36676[2]);var state_36676__$1 = state_36676;return cljs.core.async.impl.ioc_helpers.return_chan(state_36676__$1,inst_36674);
} else
{if((state_val_36677 === 4))
{var inst_36657 = (state_36676[7]);var inst_36660 = cljs.core.first(inst_36657);var state_36676__$1 = state_36676;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36676__$1,7,ch,inst_36660);
} else
{if((state_val_36677 === 5))
{var state_36676__$1 = state_36676;if(cljs.core.truth_(close_QMARK_))
{var statearr_36682_36700 = state_36676__$1;(statearr_36682_36700[1] = 8);
} else
{var statearr_36683_36701 = state_36676__$1;(statearr_36683_36701[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36677 === 6))
{var inst_36672 = (state_36676[2]);var state_36676__$1 = state_36676;var statearr_36684_36702 = state_36676__$1;(statearr_36684_36702[2] = inst_36672);
(statearr_36684_36702[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36677 === 7))
{var inst_36657 = (state_36676[7]);var inst_36662 = (state_36676[2]);var inst_36663 = cljs.core.next(inst_36657);var inst_36657__$1 = inst_36663;var state_36676__$1 = (function (){var statearr_36685 = state_36676;(statearr_36685[8] = inst_36662);
(statearr_36685[7] = inst_36657__$1);
return statearr_36685;
})();var statearr_36686_36703 = state_36676__$1;(statearr_36686_36703[2] = null);
(statearr_36686_36703[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36677 === 8))
{var inst_36667 = cljs.core.async.close_BANG_(ch);var state_36676__$1 = state_36676;var statearr_36687_36704 = state_36676__$1;(statearr_36687_36704[2] = inst_36667);
(statearr_36687_36704[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36677 === 9))
{var state_36676__$1 = state_36676;var statearr_36688_36705 = state_36676__$1;(statearr_36688_36705[2] = null);
(statearr_36688_36705[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36677 === 10))
{var inst_36670 = (state_36676[2]);var state_36676__$1 = state_36676;var statearr_36689_36706 = state_36676__$1;(statearr_36689_36706[2] = inst_36670);
(statearr_36689_36706[1] = 6);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_36693 = [null,null,null,null,null,null,null,null,null];(statearr_36693[0] = state_machine__5548__auto__);
(statearr_36693[1] = 1);
return statearr_36693;
});
var state_machine__5548__auto____1 = (function (state_36676){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36676);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36694){if((e36694 instanceof Object))
{var ex__5551__auto__ = e36694;var statearr_36695_36707 = state_36676;(statearr_36695_36707[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36676);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36708 = state_36676;
state_36676 = G__36708;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36676){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36696 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36696;
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
cljs.core.async.Mux = (function (){var obj36710 = {};return obj36710;
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
cljs.core.async.Mult = (function (){var obj36712 = {};return obj36712;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t36936 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36936 = (function (cs,ch,mult,meta36937){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36937 = meta36937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36936.cljs$lang$type = true;
cljs.core.async.t36936.cljs$lang$ctorStr = "cljs.core.async/t36936";
cljs.core.async.t36936.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36936");
});})(cs))
;
cljs.core.async.t36936.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t36936.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t36936.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t36936.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t36936.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t36936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36938){var self__ = this;
var _36938__$1 = this;return self__.meta36937;
});})(cs))
;
cljs.core.async.t36936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36938,meta36937__$1){var self__ = this;
var _36938__$1 = this;return (new cljs.core.async.t36936(self__.cs,self__.ch,self__.mult,meta36937__$1));
});})(cs))
;
cljs.core.async.__GT_t36936 = ((function (cs){
return (function __GT_t36936(cs__$1,ch__$1,mult__$1,meta36937){return (new cljs.core.async.t36936(cs__$1,ch__$1,mult__$1,meta36937));
});})(cs))
;
}
return (new cljs.core.async.t36936(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___37159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37073){var state_val_37074 = (state_37073[1]);if((state_val_37074 === 32))
{var inst_36941 = (state_37073[7]);var inst_37017 = (state_37073[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37073,31,Object,null,30);var inst_37024 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37017,inst_36941,done);var state_37073__$1 = state_37073;var statearr_37075_37160 = state_37073__$1;(statearr_37075_37160[2] = inst_37024);
cljs.core.async.impl.ioc_helpers.process_exception(state_37073__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 1))
{var state_37073__$1 = state_37073;var statearr_37076_37161 = state_37073__$1;(statearr_37076_37161[2] = null);
(statearr_37076_37161[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 33))
{var inst_37030 = (state_37073[9]);var inst_37032 = cljs.core.chunked_seq_QMARK_(inst_37030);var state_37073__$1 = state_37073;if(inst_37032)
{var statearr_37077_37162 = state_37073__$1;(statearr_37077_37162[1] = 36);
} else
{var statearr_37078_37163 = state_37073__$1;(statearr_37078_37163[1] = 37);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 2))
{var state_37073__$1 = state_37073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37073__$1,4,ch);
} else
{if((state_val_37074 === 34))
{var state_37073__$1 = state_37073;var statearr_37079_37164 = state_37073__$1;(statearr_37079_37164[2] = null);
(statearr_37079_37164[1] = 35);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 3))
{var inst_37071 = (state_37073[2]);var state_37073__$1 = state_37073;return cljs.core.async.impl.ioc_helpers.return_chan(state_37073__$1,inst_37071);
} else
{if((state_val_37074 === 35))
{var inst_37055 = (state_37073[2]);var state_37073__$1 = state_37073;var statearr_37080_37165 = state_37073__$1;(statearr_37080_37165[2] = inst_37055);
(statearr_37080_37165[1] = 29);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 4))
{var inst_36941 = (state_37073[7]);var inst_36941__$1 = (state_37073[2]);var inst_36942 = (inst_36941__$1 == null);var state_37073__$1 = (function (){var statearr_37081 = state_37073;(statearr_37081[7] = inst_36941__$1);
return statearr_37081;
})();if(cljs.core.truth_(inst_36942))
{var statearr_37082_37166 = state_37073__$1;(statearr_37082_37166[1] = 5);
} else
{var statearr_37083_37167 = state_37073__$1;(statearr_37083_37167[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 36))
{var inst_37030 = (state_37073[9]);var inst_37034 = cljs.core.chunk_first(inst_37030);var inst_37035 = cljs.core.chunk_rest(inst_37030);var inst_37036 = cljs.core.count(inst_37034);var inst_37009 = inst_37035;var inst_37010 = inst_37034;var inst_37011 = inst_37036;var inst_37012 = 0;var state_37073__$1 = (function (){var statearr_37084 = state_37073;(statearr_37084[10] = inst_37012);
(statearr_37084[11] = inst_37011);
(statearr_37084[12] = inst_37010);
(statearr_37084[13] = inst_37009);
return statearr_37084;
})();var statearr_37085_37168 = state_37073__$1;(statearr_37085_37168[2] = null);
(statearr_37085_37168[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 5))
{var inst_36948 = cljs.core.deref(cs);var inst_36949 = cljs.core.seq(inst_36948);var inst_36950 = inst_36949;var inst_36951 = null;var inst_36952 = 0;var inst_36953 = 0;var state_37073__$1 = (function (){var statearr_37086 = state_37073;(statearr_37086[14] = inst_36953);
(statearr_37086[15] = inst_36952);
(statearr_37086[16] = inst_36951);
(statearr_37086[17] = inst_36950);
return statearr_37086;
})();var statearr_37087_37169 = state_37073__$1;(statearr_37087_37169[2] = null);
(statearr_37087_37169[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 37))
{var inst_37030 = (state_37073[9]);var inst_37039 = cljs.core.first(inst_37030);var state_37073__$1 = (function (){var statearr_37088 = state_37073;(statearr_37088[18] = inst_37039);
return statearr_37088;
})();var statearr_37089_37170 = state_37073__$1;(statearr_37089_37170[2] = null);
(statearr_37089_37170[1] = 41);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 6))
{var inst_37001 = (state_37073[19]);var inst_37000 = cljs.core.deref(cs);var inst_37001__$1 = cljs.core.keys(inst_37000);var inst_37002 = cljs.core.count(inst_37001__$1);var inst_37003 = cljs.core.reset_BANG_(dctr,inst_37002);var inst_37008 = cljs.core.seq(inst_37001__$1);var inst_37009 = inst_37008;var inst_37010 = null;var inst_37011 = 0;var inst_37012 = 0;var state_37073__$1 = (function (){var statearr_37090 = state_37073;(statearr_37090[20] = inst_37003);
(statearr_37090[19] = inst_37001__$1);
(statearr_37090[10] = inst_37012);
(statearr_37090[11] = inst_37011);
(statearr_37090[12] = inst_37010);
(statearr_37090[13] = inst_37009);
return statearr_37090;
})();var statearr_37091_37171 = state_37073__$1;(statearr_37091_37171[2] = null);
(statearr_37091_37171[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 38))
{var inst_37052 = (state_37073[2]);var state_37073__$1 = state_37073;var statearr_37092_37172 = state_37073__$1;(statearr_37092_37172[2] = inst_37052);
(statearr_37092_37172[1] = 35);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 7))
{var inst_37069 = (state_37073[2]);var state_37073__$1 = state_37073;var statearr_37093_37173 = state_37073__$1;(statearr_37093_37173[2] = inst_37069);
(statearr_37093_37173[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 39))
{var inst_37030 = (state_37073[9]);var inst_37048 = (state_37073[2]);var inst_37049 = cljs.core.next(inst_37030);var inst_37009 = inst_37049;var inst_37010 = null;var inst_37011 = 0;var inst_37012 = 0;var state_37073__$1 = (function (){var statearr_37094 = state_37073;(statearr_37094[21] = inst_37048);
(statearr_37094[10] = inst_37012);
(statearr_37094[11] = inst_37011);
(statearr_37094[12] = inst_37010);
(statearr_37094[13] = inst_37009);
return statearr_37094;
})();var statearr_37095_37174 = state_37073__$1;(statearr_37095_37174[2] = null);
(statearr_37095_37174[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 8))
{var inst_36953 = (state_37073[14]);var inst_36952 = (state_37073[15]);var inst_36955 = (inst_36953 < inst_36952);var inst_36956 = inst_36955;var state_37073__$1 = state_37073;if(cljs.core.truth_(inst_36956))
{var statearr_37096_37175 = state_37073__$1;(statearr_37096_37175[1] = 10);
} else
{var statearr_37097_37176 = state_37073__$1;(statearr_37097_37176[1] = 11);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 40))
{var inst_37039 = (state_37073[18]);var inst_37040 = (state_37073[2]);var inst_37041 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37042 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37039);var state_37073__$1 = (function (){var statearr_37098 = state_37073;(statearr_37098[22] = inst_37041);
(statearr_37098[23] = inst_37040);
return statearr_37098;
})();var statearr_37099_37177 = state_37073__$1;(statearr_37099_37177[2] = inst_37042);
cljs.core.async.impl.ioc_helpers.process_exception(state_37073__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 9))
{var inst_36998 = (state_37073[2]);var state_37073__$1 = state_37073;var statearr_37100_37178 = state_37073__$1;(statearr_37100_37178[2] = inst_36998);
(statearr_37100_37178[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 41))
{var inst_36941 = (state_37073[7]);var inst_37039 = (state_37073[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37073,40,Object,null,39);var inst_37046 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37039,inst_36941,done);var state_37073__$1 = state_37073;var statearr_37101_37179 = state_37073__$1;(statearr_37101_37179[2] = inst_37046);
cljs.core.async.impl.ioc_helpers.process_exception(state_37073__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 10))
{var inst_36953 = (state_37073[14]);var inst_36951 = (state_37073[16]);var inst_36959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36951,inst_36953);var inst_36960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36959,0,null);var inst_36961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36959,1,null);var state_37073__$1 = (function (){var statearr_37102 = state_37073;(statearr_37102[24] = inst_36960);
return statearr_37102;
})();if(cljs.core.truth_(inst_36961))
{var statearr_37103_37180 = state_37073__$1;(statearr_37103_37180[1] = 13);
} else
{var statearr_37104_37181 = state_37073__$1;(statearr_37104_37181[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 42))
{var state_37073__$1 = state_37073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37073__$1,45,dchan);
} else
{if((state_val_37074 === 11))
{var inst_36950 = (state_37073[17]);var inst_36970 = (state_37073[25]);var inst_36970__$1 = cljs.core.seq(inst_36950);var state_37073__$1 = (function (){var statearr_37105 = state_37073;(statearr_37105[25] = inst_36970__$1);
return statearr_37105;
})();if(inst_36970__$1)
{var statearr_37106_37182 = state_37073__$1;(statearr_37106_37182[1] = 16);
} else
{var statearr_37107_37183 = state_37073__$1;(statearr_37107_37183[1] = 17);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 43))
{var state_37073__$1 = state_37073;var statearr_37108_37184 = state_37073__$1;(statearr_37108_37184[2] = null);
(statearr_37108_37184[1] = 44);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 12))
{var inst_36996 = (state_37073[2]);var state_37073__$1 = state_37073;var statearr_37109_37185 = state_37073__$1;(statearr_37109_37185[2] = inst_36996);
(statearr_37109_37185[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 44))
{var inst_37066 = (state_37073[2]);var state_37073__$1 = (function (){var statearr_37110 = state_37073;(statearr_37110[26] = inst_37066);
return statearr_37110;
})();var statearr_37111_37186 = state_37073__$1;(statearr_37111_37186[2] = null);
(statearr_37111_37186[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 13))
{var inst_36960 = (state_37073[24]);var inst_36963 = cljs.core.async.close_BANG_(inst_36960);var state_37073__$1 = state_37073;var statearr_37112_37187 = state_37073__$1;(statearr_37112_37187[2] = inst_36963);
(statearr_37112_37187[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 45))
{var inst_37063 = (state_37073[2]);var state_37073__$1 = state_37073;var statearr_37116_37188 = state_37073__$1;(statearr_37116_37188[2] = inst_37063);
(statearr_37116_37188[1] = 44);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 14))
{var state_37073__$1 = state_37073;var statearr_37117_37189 = state_37073__$1;(statearr_37117_37189[2] = null);
(statearr_37117_37189[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 15))
{var inst_36953 = (state_37073[14]);var inst_36952 = (state_37073[15]);var inst_36951 = (state_37073[16]);var inst_36950 = (state_37073[17]);var inst_36966 = (state_37073[2]);var inst_36967 = (inst_36953 + 1);var tmp37113 = inst_36952;var tmp37114 = inst_36951;var tmp37115 = inst_36950;var inst_36950__$1 = tmp37115;var inst_36951__$1 = tmp37114;var inst_36952__$1 = tmp37113;var inst_36953__$1 = inst_36967;var state_37073__$1 = (function (){var statearr_37118 = state_37073;(statearr_37118[14] = inst_36953__$1);
(statearr_37118[15] = inst_36952__$1);
(statearr_37118[16] = inst_36951__$1);
(statearr_37118[17] = inst_36950__$1);
(statearr_37118[27] = inst_36966);
return statearr_37118;
})();var statearr_37119_37190 = state_37073__$1;(statearr_37119_37190[2] = null);
(statearr_37119_37190[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 16))
{var inst_36970 = (state_37073[25]);var inst_36972 = cljs.core.chunked_seq_QMARK_(inst_36970);var state_37073__$1 = state_37073;if(inst_36972)
{var statearr_37120_37191 = state_37073__$1;(statearr_37120_37191[1] = 19);
} else
{var statearr_37121_37192 = state_37073__$1;(statearr_37121_37192[1] = 20);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 17))
{var state_37073__$1 = state_37073;var statearr_37122_37193 = state_37073__$1;(statearr_37122_37193[2] = null);
(statearr_37122_37193[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 18))
{var inst_36994 = (state_37073[2]);var state_37073__$1 = state_37073;var statearr_37123_37194 = state_37073__$1;(statearr_37123_37194[2] = inst_36994);
(statearr_37123_37194[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 19))
{var inst_36970 = (state_37073[25]);var inst_36974 = cljs.core.chunk_first(inst_36970);var inst_36975 = cljs.core.chunk_rest(inst_36970);var inst_36976 = cljs.core.count(inst_36974);var inst_36950 = inst_36975;var inst_36951 = inst_36974;var inst_36952 = inst_36976;var inst_36953 = 0;var state_37073__$1 = (function (){var statearr_37124 = state_37073;(statearr_37124[14] = inst_36953);
(statearr_37124[15] = inst_36952);
(statearr_37124[16] = inst_36951);
(statearr_37124[17] = inst_36950);
return statearr_37124;
})();var statearr_37125_37195 = state_37073__$1;(statearr_37125_37195[2] = null);
(statearr_37125_37195[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 20))
{var inst_36970 = (state_37073[25]);var inst_36980 = cljs.core.first(inst_36970);var inst_36981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36980,0,null);var inst_36982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36980,1,null);var state_37073__$1 = (function (){var statearr_37126 = state_37073;(statearr_37126[28] = inst_36981);
return statearr_37126;
})();if(cljs.core.truth_(inst_36982))
{var statearr_37127_37196 = state_37073__$1;(statearr_37127_37196[1] = 22);
} else
{var statearr_37128_37197 = state_37073__$1;(statearr_37128_37197[1] = 23);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 21))
{var inst_36991 = (state_37073[2]);var state_37073__$1 = state_37073;var statearr_37129_37198 = state_37073__$1;(statearr_37129_37198[2] = inst_36991);
(statearr_37129_37198[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 22))
{var inst_36981 = (state_37073[28]);var inst_36984 = cljs.core.async.close_BANG_(inst_36981);var state_37073__$1 = state_37073;var statearr_37130_37199 = state_37073__$1;(statearr_37130_37199[2] = inst_36984);
(statearr_37130_37199[1] = 24);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 23))
{var state_37073__$1 = state_37073;var statearr_37131_37200 = state_37073__$1;(statearr_37131_37200[2] = null);
(statearr_37131_37200[1] = 24);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 24))
{var inst_36970 = (state_37073[25]);var inst_36987 = (state_37073[2]);var inst_36988 = cljs.core.next(inst_36970);var inst_36950 = inst_36988;var inst_36951 = null;var inst_36952 = 0;var inst_36953 = 0;var state_37073__$1 = (function (){var statearr_37132 = state_37073;(statearr_37132[14] = inst_36953);
(statearr_37132[29] = inst_36987);
(statearr_37132[15] = inst_36952);
(statearr_37132[16] = inst_36951);
(statearr_37132[17] = inst_36950);
return statearr_37132;
})();var statearr_37133_37201 = state_37073__$1;(statearr_37133_37201[2] = null);
(statearr_37133_37201[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 25))
{var inst_37012 = (state_37073[10]);var inst_37011 = (state_37073[11]);var inst_37014 = (inst_37012 < inst_37011);var inst_37015 = inst_37014;var state_37073__$1 = state_37073;if(cljs.core.truth_(inst_37015))
{var statearr_37134_37202 = state_37073__$1;(statearr_37134_37202[1] = 27);
} else
{var statearr_37135_37203 = state_37073__$1;(statearr_37135_37203[1] = 28);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 26))
{var inst_37001 = (state_37073[19]);var inst_37059 = (state_37073[2]);var inst_37060 = cljs.core.seq(inst_37001);var state_37073__$1 = (function (){var statearr_37136 = state_37073;(statearr_37136[30] = inst_37059);
return statearr_37136;
})();if(inst_37060)
{var statearr_37137_37204 = state_37073__$1;(statearr_37137_37204[1] = 42);
} else
{var statearr_37138_37205 = state_37073__$1;(statearr_37138_37205[1] = 43);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 27))
{var inst_37012 = (state_37073[10]);var inst_37010 = (state_37073[12]);var inst_37017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37010,inst_37012);var state_37073__$1 = (function (){var statearr_37139 = state_37073;(statearr_37139[8] = inst_37017);
return statearr_37139;
})();var statearr_37140_37206 = state_37073__$1;(statearr_37140_37206[2] = null);
(statearr_37140_37206[1] = 32);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 28))
{var inst_37030 = (state_37073[9]);var inst_37009 = (state_37073[13]);var inst_37030__$1 = cljs.core.seq(inst_37009);var state_37073__$1 = (function (){var statearr_37144 = state_37073;(statearr_37144[9] = inst_37030__$1);
return statearr_37144;
})();if(inst_37030__$1)
{var statearr_37145_37207 = state_37073__$1;(statearr_37145_37207[1] = 33);
} else
{var statearr_37146_37208 = state_37073__$1;(statearr_37146_37208[1] = 34);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 29))
{var inst_37057 = (state_37073[2]);var state_37073__$1 = state_37073;var statearr_37147_37209 = state_37073__$1;(statearr_37147_37209[2] = inst_37057);
(statearr_37147_37209[1] = 26);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 30))
{var inst_37012 = (state_37073[10]);var inst_37011 = (state_37073[11]);var inst_37010 = (state_37073[12]);var inst_37009 = (state_37073[13]);var inst_37026 = (state_37073[2]);var inst_37027 = (inst_37012 + 1);var tmp37141 = inst_37011;var tmp37142 = inst_37010;var tmp37143 = inst_37009;var inst_37009__$1 = tmp37143;var inst_37010__$1 = tmp37142;var inst_37011__$1 = tmp37141;var inst_37012__$1 = inst_37027;var state_37073__$1 = (function (){var statearr_37148 = state_37073;(statearr_37148[10] = inst_37012__$1);
(statearr_37148[11] = inst_37011__$1);
(statearr_37148[12] = inst_37010__$1);
(statearr_37148[31] = inst_37026);
(statearr_37148[13] = inst_37009__$1);
return statearr_37148;
})();var statearr_37149_37210 = state_37073__$1;(statearr_37149_37210[2] = null);
(statearr_37149_37210[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37074 === 31))
{var inst_37017 = (state_37073[8]);var inst_37018 = (state_37073[2]);var inst_37019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37020 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37017);var state_37073__$1 = (function (){var statearr_37150 = state_37073;(statearr_37150[32] = inst_37019);
(statearr_37150[33] = inst_37018);
return statearr_37150;
})();var statearr_37151_37211 = state_37073__$1;(statearr_37151_37211[2] = inst_37020);
cljs.core.async.impl.ioc_helpers.process_exception(state_37073__$1);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_37155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37155[0] = state_machine__5548__auto__);
(statearr_37155[1] = 1);
return statearr_37155;
});
var state_machine__5548__auto____1 = (function (state_37073){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37073);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37156){if((e37156 instanceof Object))
{var ex__5551__auto__ = e37156;var statearr_37157_37212 = state_37073;(statearr_37157_37212[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37073);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37213 = state_37073;
state_37073 = G__37213;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37073){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37158 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37159);
return statearr_37158;
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
cljs.core.async.Mix = (function (){var obj37215 = {};return obj37215;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$558,null,cljs.core.constant$keyword$559,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$560);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$559);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$560,chs);var pauses = pick(cljs.core.constant$keyword$558,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$561,solos,cljs.core.constant$keyword$562,pick(cljs.core.constant$keyword$559,chs),cljs.core.constant$keyword$563,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$558)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t37325 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37325 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta37326){
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
this.meta37326 = meta37326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37325.cljs$lang$type = true;
cljs.core.async.t37325.cljs$lang$ctorStr = "cljs.core.async/t37325";
cljs.core.async.t37325.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37325");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37325.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37325.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37325.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37325.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37325.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37325.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37325.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37325.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37327){var self__ = this;
var _37327__$1 = this;return self__.meta37326;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37327,meta37326__$1){var self__ = this;
var _37327__$1 = this;return (new cljs.core.async.t37325(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta37326__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37325 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37325(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37326){return (new cljs.core.async.t37325(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37326));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37325(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___37434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37392){var state_val_37393 = (state_37392[1]);if((state_val_37393 === 1))
{var inst_37331 = (state_37392[7]);var inst_37331__$1 = calc_state();var inst_37332 = cljs.core.seq_QMARK_(inst_37331__$1);var state_37392__$1 = (function (){var statearr_37394 = state_37392;(statearr_37394[7] = inst_37331__$1);
return statearr_37394;
})();if(inst_37332)
{var statearr_37395_37435 = state_37392__$1;(statearr_37395_37435[1] = 2);
} else
{var statearr_37396_37436 = state_37392__$1;(statearr_37396_37436[1] = 3);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 2))
{var inst_37331 = (state_37392[7]);var inst_37334 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37331);var state_37392__$1 = state_37392;var statearr_37397_37437 = state_37392__$1;(statearr_37397_37437[2] = inst_37334);
(statearr_37397_37437[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 3))
{var inst_37331 = (state_37392[7]);var state_37392__$1 = state_37392;var statearr_37398_37438 = state_37392__$1;(statearr_37398_37438[2] = inst_37331);
(statearr_37398_37438[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 4))
{var inst_37331 = (state_37392[7]);var inst_37337 = (state_37392[2]);var inst_37338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37337,cljs.core.constant$keyword$563);var inst_37339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37337,cljs.core.constant$keyword$562);var inst_37340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37337,cljs.core.constant$keyword$561);var inst_37341 = inst_37331;var state_37392__$1 = (function (){var statearr_37399 = state_37392;(statearr_37399[8] = inst_37339);
(statearr_37399[9] = inst_37338);
(statearr_37399[10] = inst_37341);
(statearr_37399[11] = inst_37340);
return statearr_37399;
})();var statearr_37400_37439 = state_37392__$1;(statearr_37400_37439[2] = null);
(statearr_37400_37439[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 5))
{var inst_37341 = (state_37392[10]);var inst_37344 = cljs.core.seq_QMARK_(inst_37341);var state_37392__$1 = state_37392;if(inst_37344)
{var statearr_37401_37440 = state_37392__$1;(statearr_37401_37440[1] = 7);
} else
{var statearr_37402_37441 = state_37392__$1;(statearr_37402_37441[1] = 8);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 6))
{var inst_37390 = (state_37392[2]);var state_37392__$1 = state_37392;return cljs.core.async.impl.ioc_helpers.return_chan(state_37392__$1,inst_37390);
} else
{if((state_val_37393 === 7))
{var inst_37341 = (state_37392[10]);var inst_37346 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37341);var state_37392__$1 = state_37392;var statearr_37403_37442 = state_37392__$1;(statearr_37403_37442[2] = inst_37346);
(statearr_37403_37442[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 8))
{var inst_37341 = (state_37392[10]);var state_37392__$1 = state_37392;var statearr_37404_37443 = state_37392__$1;(statearr_37404_37443[2] = inst_37341);
(statearr_37404_37443[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 9))
{var inst_37349 = (state_37392[12]);var inst_37349__$1 = (state_37392[2]);var inst_37350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37349__$1,cljs.core.constant$keyword$563);var inst_37351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37349__$1,cljs.core.constant$keyword$562);var inst_37352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37349__$1,cljs.core.constant$keyword$561);var state_37392__$1 = (function (){var statearr_37405 = state_37392;(statearr_37405[13] = inst_37352);
(statearr_37405[14] = inst_37351);
(statearr_37405[12] = inst_37349__$1);
return statearr_37405;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37392__$1,10,inst_37350);
} else
{if((state_val_37393 === 10))
{var inst_37356 = (state_37392[15]);var inst_37357 = (state_37392[16]);var inst_37355 = (state_37392[2]);var inst_37356__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37355,0,null);var inst_37357__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37355,1,null);var inst_37358 = (inst_37356__$1 == null);var inst_37359 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37357__$1,change);var inst_37360 = (inst_37358) || (inst_37359);var state_37392__$1 = (function (){var statearr_37406 = state_37392;(statearr_37406[15] = inst_37356__$1);
(statearr_37406[16] = inst_37357__$1);
return statearr_37406;
})();if(cljs.core.truth_(inst_37360))
{var statearr_37407_37444 = state_37392__$1;(statearr_37407_37444[1] = 11);
} else
{var statearr_37408_37445 = state_37392__$1;(statearr_37408_37445[1] = 12);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 11))
{var inst_37356 = (state_37392[15]);var inst_37362 = (inst_37356 == null);var state_37392__$1 = state_37392;if(cljs.core.truth_(inst_37362))
{var statearr_37409_37446 = state_37392__$1;(statearr_37409_37446[1] = 14);
} else
{var statearr_37410_37447 = state_37392__$1;(statearr_37410_37447[1] = 15);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 12))
{var inst_37352 = (state_37392[13]);var inst_37357 = (state_37392[16]);var inst_37371 = (state_37392[17]);var inst_37371__$1 = (inst_37352.cljs$core$IFn$_invoke$arity$1 ? inst_37352.cljs$core$IFn$_invoke$arity$1(inst_37357) : inst_37352.call(null,inst_37357));var state_37392__$1 = (function (){var statearr_37411 = state_37392;(statearr_37411[17] = inst_37371__$1);
return statearr_37411;
})();if(cljs.core.truth_(inst_37371__$1))
{var statearr_37412_37448 = state_37392__$1;(statearr_37412_37448[1] = 17);
} else
{var statearr_37413_37449 = state_37392__$1;(statearr_37413_37449[1] = 18);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 13))
{var inst_37388 = (state_37392[2]);var state_37392__$1 = state_37392;var statearr_37414_37450 = state_37392__$1;(statearr_37414_37450[2] = inst_37388);
(statearr_37414_37450[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 14))
{var inst_37357 = (state_37392[16]);var inst_37364 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37357);var state_37392__$1 = state_37392;var statearr_37415_37451 = state_37392__$1;(statearr_37415_37451[2] = inst_37364);
(statearr_37415_37451[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 15))
{var state_37392__$1 = state_37392;var statearr_37416_37452 = state_37392__$1;(statearr_37416_37452[2] = null);
(statearr_37416_37452[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 16))
{var inst_37367 = (state_37392[2]);var inst_37368 = calc_state();var inst_37341 = inst_37368;var state_37392__$1 = (function (){var statearr_37417 = state_37392;(statearr_37417[18] = inst_37367);
(statearr_37417[10] = inst_37341);
return statearr_37417;
})();var statearr_37418_37453 = state_37392__$1;(statearr_37418_37453[2] = null);
(statearr_37418_37453[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 17))
{var inst_37371 = (state_37392[17]);var state_37392__$1 = state_37392;var statearr_37419_37454 = state_37392__$1;(statearr_37419_37454[2] = inst_37371);
(statearr_37419_37454[1] = 19);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 18))
{var inst_37352 = (state_37392[13]);var inst_37351 = (state_37392[14]);var inst_37357 = (state_37392[16]);var inst_37374 = cljs.core.empty_QMARK_(inst_37352);var inst_37375 = (inst_37351.cljs$core$IFn$_invoke$arity$1 ? inst_37351.cljs$core$IFn$_invoke$arity$1(inst_37357) : inst_37351.call(null,inst_37357));var inst_37376 = cljs.core.not(inst_37375);var inst_37377 = (inst_37374) && (inst_37376);var state_37392__$1 = state_37392;var statearr_37420_37455 = state_37392__$1;(statearr_37420_37455[2] = inst_37377);
(statearr_37420_37455[1] = 19);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 19))
{var inst_37379 = (state_37392[2]);var state_37392__$1 = state_37392;if(cljs.core.truth_(inst_37379))
{var statearr_37421_37456 = state_37392__$1;(statearr_37421_37456[1] = 20);
} else
{var statearr_37422_37457 = state_37392__$1;(statearr_37422_37457[1] = 21);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 20))
{var inst_37356 = (state_37392[15]);var state_37392__$1 = state_37392;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37392__$1,23,out,inst_37356);
} else
{if((state_val_37393 === 21))
{var state_37392__$1 = state_37392;var statearr_37423_37458 = state_37392__$1;(statearr_37423_37458[2] = null);
(statearr_37423_37458[1] = 22);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 22))
{var inst_37349 = (state_37392[12]);var inst_37385 = (state_37392[2]);var inst_37341 = inst_37349;var state_37392__$1 = (function (){var statearr_37424 = state_37392;(statearr_37424[19] = inst_37385);
(statearr_37424[10] = inst_37341);
return statearr_37424;
})();var statearr_37425_37459 = state_37392__$1;(statearr_37425_37459[2] = null);
(statearr_37425_37459[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37393 === 23))
{var inst_37382 = (state_37392[2]);var state_37392__$1 = state_37392;var statearr_37426_37460 = state_37392__$1;(statearr_37426_37460[2] = inst_37382);
(statearr_37426_37460[1] = 22);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_37430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37430[0] = state_machine__5548__auto__);
(statearr_37430[1] = 1);
return statearr_37430;
});
var state_machine__5548__auto____1 = (function (state_37392){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37392);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37431){if((e37431 instanceof Object))
{var ex__5551__auto__ = e37431;var statearr_37432_37461 = state_37392;(statearr_37432_37461[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37392);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37462 = state_37392;
state_37392 = G__37462;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37392){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37433 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37434);
return statearr_37433;
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
cljs.core.async.Pub = (function (){var obj37464 = {};return obj37464;
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
return (function (p1__37465_SHARP_){if(cljs.core.truth_((p1__37465_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37465_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37465_SHARP_.call(null,topic))))
{return p1__37465_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37465_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t37590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37590 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37591){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37591 = meta37591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37590.cljs$lang$type = true;
cljs.core.async.t37590.cljs$lang$ctorStr = "cljs.core.async/t37590";
cljs.core.async.t37590.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37590");
});})(mults,ensure_mult))
;
cljs.core.async.t37590.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t37590.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t37590.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t37590.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t37590.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t37590.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37590.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t37590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37592){var self__ = this;
var _37592__$1 = this;return self__.meta37591;
});})(mults,ensure_mult))
;
cljs.core.async.t37590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37592,meta37591__$1){var self__ = this;
var _37592__$1 = this;return (new cljs.core.async.t37590(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37591__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t37590 = ((function (mults,ensure_mult){
return (function __GT_t37590(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37591){return (new cljs.core.async.t37590(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37591));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t37590(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___37714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37666){var state_val_37667 = (state_37666[1]);if((state_val_37667 === 1))
{var state_37666__$1 = state_37666;var statearr_37668_37715 = state_37666__$1;(statearr_37668_37715[2] = null);
(statearr_37668_37715[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 2))
{var state_37666__$1 = state_37666;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37666__$1,4,ch);
} else
{if((state_val_37667 === 3))
{var inst_37664 = (state_37666[2]);var state_37666__$1 = state_37666;return cljs.core.async.impl.ioc_helpers.return_chan(state_37666__$1,inst_37664);
} else
{if((state_val_37667 === 4))
{var inst_37595 = (state_37666[7]);var inst_37595__$1 = (state_37666[2]);var inst_37596 = (inst_37595__$1 == null);var state_37666__$1 = (function (){var statearr_37669 = state_37666;(statearr_37669[7] = inst_37595__$1);
return statearr_37669;
})();if(cljs.core.truth_(inst_37596))
{var statearr_37670_37716 = state_37666__$1;(statearr_37670_37716[1] = 5);
} else
{var statearr_37671_37717 = state_37666__$1;(statearr_37671_37717[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 5))
{var inst_37602 = cljs.core.deref(mults);var inst_37603 = cljs.core.vals(inst_37602);var inst_37604 = cljs.core.seq(inst_37603);var inst_37605 = inst_37604;var inst_37606 = null;var inst_37607 = 0;var inst_37608 = 0;var state_37666__$1 = (function (){var statearr_37672 = state_37666;(statearr_37672[8] = inst_37608);
(statearr_37672[9] = inst_37607);
(statearr_37672[10] = inst_37605);
(statearr_37672[11] = inst_37606);
return statearr_37672;
})();var statearr_37673_37718 = state_37666__$1;(statearr_37673_37718[2] = null);
(statearr_37673_37718[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 6))
{var inst_37595 = (state_37666[7]);var inst_37645 = (state_37666[12]);var inst_37643 = (state_37666[13]);var inst_37643__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37595) : topic_fn.call(null,inst_37595));var inst_37644 = cljs.core.deref(mults);var inst_37645__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37644,inst_37643__$1);var state_37666__$1 = (function (){var statearr_37674 = state_37666;(statearr_37674[12] = inst_37645__$1);
(statearr_37674[13] = inst_37643__$1);
return statearr_37674;
})();if(cljs.core.truth_(inst_37645__$1))
{var statearr_37675_37719 = state_37666__$1;(statearr_37675_37719[1] = 19);
} else
{var statearr_37676_37720 = state_37666__$1;(statearr_37676_37720[1] = 20);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 7))
{var inst_37662 = (state_37666[2]);var state_37666__$1 = state_37666;var statearr_37677_37721 = state_37666__$1;(statearr_37677_37721[2] = inst_37662);
(statearr_37677_37721[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 8))
{var inst_37608 = (state_37666[8]);var inst_37607 = (state_37666[9]);var inst_37610 = (inst_37608 < inst_37607);var inst_37611 = inst_37610;var state_37666__$1 = state_37666;if(cljs.core.truth_(inst_37611))
{var statearr_37681_37722 = state_37666__$1;(statearr_37681_37722[1] = 10);
} else
{var statearr_37682_37723 = state_37666__$1;(statearr_37682_37723[1] = 11);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 9))
{var inst_37641 = (state_37666[2]);var state_37666__$1 = state_37666;var statearr_37683_37724 = state_37666__$1;(statearr_37683_37724[2] = inst_37641);
(statearr_37683_37724[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 10))
{var inst_37608 = (state_37666[8]);var inst_37607 = (state_37666[9]);var inst_37605 = (state_37666[10]);var inst_37606 = (state_37666[11]);var inst_37613 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37606,inst_37608);var inst_37614 = cljs.core.async.muxch_STAR_(inst_37613);var inst_37615 = cljs.core.async.close_BANG_(inst_37614);var inst_37616 = (inst_37608 + 1);var tmp37678 = inst_37607;var tmp37679 = inst_37605;var tmp37680 = inst_37606;var inst_37605__$1 = tmp37679;var inst_37606__$1 = tmp37680;var inst_37607__$1 = tmp37678;var inst_37608__$1 = inst_37616;var state_37666__$1 = (function (){var statearr_37684 = state_37666;(statearr_37684[8] = inst_37608__$1);
(statearr_37684[9] = inst_37607__$1);
(statearr_37684[14] = inst_37615);
(statearr_37684[10] = inst_37605__$1);
(statearr_37684[11] = inst_37606__$1);
return statearr_37684;
})();var statearr_37685_37725 = state_37666__$1;(statearr_37685_37725[2] = null);
(statearr_37685_37725[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 11))
{var inst_37619 = (state_37666[15]);var inst_37605 = (state_37666[10]);var inst_37619__$1 = cljs.core.seq(inst_37605);var state_37666__$1 = (function (){var statearr_37686 = state_37666;(statearr_37686[15] = inst_37619__$1);
return statearr_37686;
})();if(inst_37619__$1)
{var statearr_37687_37726 = state_37666__$1;(statearr_37687_37726[1] = 13);
} else
{var statearr_37688_37727 = state_37666__$1;(statearr_37688_37727[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 12))
{var inst_37639 = (state_37666[2]);var state_37666__$1 = state_37666;var statearr_37689_37728 = state_37666__$1;(statearr_37689_37728[2] = inst_37639);
(statearr_37689_37728[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 13))
{var inst_37619 = (state_37666[15]);var inst_37621 = cljs.core.chunked_seq_QMARK_(inst_37619);var state_37666__$1 = state_37666;if(inst_37621)
{var statearr_37690_37729 = state_37666__$1;(statearr_37690_37729[1] = 16);
} else
{var statearr_37691_37730 = state_37666__$1;(statearr_37691_37730[1] = 17);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 14))
{var state_37666__$1 = state_37666;var statearr_37692_37731 = state_37666__$1;(statearr_37692_37731[2] = null);
(statearr_37692_37731[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 15))
{var inst_37637 = (state_37666[2]);var state_37666__$1 = state_37666;var statearr_37693_37732 = state_37666__$1;(statearr_37693_37732[2] = inst_37637);
(statearr_37693_37732[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 16))
{var inst_37619 = (state_37666[15]);var inst_37623 = cljs.core.chunk_first(inst_37619);var inst_37624 = cljs.core.chunk_rest(inst_37619);var inst_37625 = cljs.core.count(inst_37623);var inst_37605 = inst_37624;var inst_37606 = inst_37623;var inst_37607 = inst_37625;var inst_37608 = 0;var state_37666__$1 = (function (){var statearr_37694 = state_37666;(statearr_37694[8] = inst_37608);
(statearr_37694[9] = inst_37607);
(statearr_37694[10] = inst_37605);
(statearr_37694[11] = inst_37606);
return statearr_37694;
})();var statearr_37695_37733 = state_37666__$1;(statearr_37695_37733[2] = null);
(statearr_37695_37733[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 17))
{var inst_37619 = (state_37666[15]);var inst_37628 = cljs.core.first(inst_37619);var inst_37629 = cljs.core.async.muxch_STAR_(inst_37628);var inst_37630 = cljs.core.async.close_BANG_(inst_37629);var inst_37631 = cljs.core.next(inst_37619);var inst_37605 = inst_37631;var inst_37606 = null;var inst_37607 = 0;var inst_37608 = 0;var state_37666__$1 = (function (){var statearr_37696 = state_37666;(statearr_37696[8] = inst_37608);
(statearr_37696[16] = inst_37630);
(statearr_37696[9] = inst_37607);
(statearr_37696[10] = inst_37605);
(statearr_37696[11] = inst_37606);
return statearr_37696;
})();var statearr_37697_37734 = state_37666__$1;(statearr_37697_37734[2] = null);
(statearr_37697_37734[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 18))
{var inst_37634 = (state_37666[2]);var state_37666__$1 = state_37666;var statearr_37698_37735 = state_37666__$1;(statearr_37698_37735[2] = inst_37634);
(statearr_37698_37735[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 19))
{var state_37666__$1 = state_37666;var statearr_37699_37736 = state_37666__$1;(statearr_37699_37736[2] = null);
(statearr_37699_37736[1] = 24);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 20))
{var state_37666__$1 = state_37666;var statearr_37700_37737 = state_37666__$1;(statearr_37700_37737[2] = null);
(statearr_37700_37737[1] = 21);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 21))
{var inst_37659 = (state_37666[2]);var state_37666__$1 = (function (){var statearr_37701 = state_37666;(statearr_37701[17] = inst_37659);
return statearr_37701;
})();var statearr_37702_37738 = state_37666__$1;(statearr_37702_37738[2] = null);
(statearr_37702_37738[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 22))
{var inst_37656 = (state_37666[2]);var state_37666__$1 = state_37666;var statearr_37703_37739 = state_37666__$1;(statearr_37703_37739[2] = inst_37656);
(statearr_37703_37739[1] = 21);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 23))
{var inst_37643 = (state_37666[13]);var inst_37647 = (state_37666[2]);var inst_37648 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37643);var state_37666__$1 = (function (){var statearr_37704 = state_37666;(statearr_37704[18] = inst_37647);
return statearr_37704;
})();var statearr_37705_37740 = state_37666__$1;(statearr_37705_37740[2] = inst_37648);
cljs.core.async.impl.ioc_helpers.process_exception(state_37666__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37667 === 24))
{var inst_37595 = (state_37666[7]);var inst_37645 = (state_37666[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37666,23,Object,null,22);var inst_37652 = cljs.core.async.muxch_STAR_(inst_37645);var state_37666__$1 = state_37666;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37666__$1,25,inst_37652,inst_37595);
} else
{if((state_val_37667 === 25))
{var inst_37654 = (state_37666[2]);var state_37666__$1 = state_37666;var statearr_37706_37741 = state_37666__$1;(statearr_37706_37741[2] = inst_37654);
cljs.core.async.impl.ioc_helpers.process_exception(state_37666__$1);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_37710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37710[0] = state_machine__5548__auto__);
(statearr_37710[1] = 1);
return statearr_37710;
});
var state_machine__5548__auto____1 = (function (state_37666){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37666);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37711){if((e37711 instanceof Object))
{var ex__5551__auto__ = e37711;var statearr_37712_37742 = state_37666;(statearr_37712_37742[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37666);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37743 = state_37666;
state_37666 = G__37743;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37666){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37713 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37714);
return statearr_37713;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5562__auto___37880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37850){var state_val_37851 = (state_37850[1]);if((state_val_37851 === 1))
{var state_37850__$1 = state_37850;var statearr_37852_37881 = state_37850__$1;(statearr_37852_37881[2] = null);
(statearr_37852_37881[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 2))
{var inst_37813 = cljs.core.reset_BANG_(dctr,cnt);var inst_37814 = 0;var state_37850__$1 = (function (){var statearr_37853 = state_37850;(statearr_37853[7] = inst_37813);
(statearr_37853[8] = inst_37814);
return statearr_37853;
})();var statearr_37854_37882 = state_37850__$1;(statearr_37854_37882[2] = null);
(statearr_37854_37882[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 3))
{var inst_37848 = (state_37850[2]);var state_37850__$1 = state_37850;return cljs.core.async.impl.ioc_helpers.return_chan(state_37850__$1,inst_37848);
} else
{if((state_val_37851 === 4))
{var inst_37814 = (state_37850[8]);var inst_37816 = (inst_37814 < cnt);var state_37850__$1 = state_37850;if(cljs.core.truth_(inst_37816))
{var statearr_37855_37883 = state_37850__$1;(statearr_37855_37883[1] = 6);
} else
{var statearr_37856_37884 = state_37850__$1;(statearr_37856_37884[1] = 7);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 5))
{var inst_37834 = (state_37850[2]);var state_37850__$1 = (function (){var statearr_37857 = state_37850;(statearr_37857[9] = inst_37834);
return statearr_37857;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37850__$1,12,dchan);
} else
{if((state_val_37851 === 6))
{var state_37850__$1 = state_37850;var statearr_37858_37885 = state_37850__$1;(statearr_37858_37885[2] = null);
(statearr_37858_37885[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 7))
{var state_37850__$1 = state_37850;var statearr_37859_37886 = state_37850__$1;(statearr_37859_37886[2] = null);
(statearr_37859_37886[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 8))
{var inst_37832 = (state_37850[2]);var state_37850__$1 = state_37850;var statearr_37860_37887 = state_37850__$1;(statearr_37860_37887[2] = inst_37832);
(statearr_37860_37887[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 9))
{var inst_37814 = (state_37850[8]);var inst_37827 = (state_37850[2]);var inst_37828 = (inst_37814 + 1);var inst_37814__$1 = inst_37828;var state_37850__$1 = (function (){var statearr_37861 = state_37850;(statearr_37861[10] = inst_37827);
(statearr_37861[8] = inst_37814__$1);
return statearr_37861;
})();var statearr_37862_37888 = state_37850__$1;(statearr_37862_37888[2] = null);
(statearr_37862_37888[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 10))
{var inst_37818 = (state_37850[2]);var inst_37819 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_37850__$1 = (function (){var statearr_37863 = state_37850;(statearr_37863[11] = inst_37818);
return statearr_37863;
})();var statearr_37864_37889 = state_37850__$1;(statearr_37864_37889[2] = inst_37819);
cljs.core.async.impl.ioc_helpers.process_exception(state_37850__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 11))
{var inst_37814 = (state_37850[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37850,10,Object,null,9);var inst_37823 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37814) : chs__$1.call(null,inst_37814));var inst_37824 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37814) : done.call(null,inst_37814));var inst_37825 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37823,inst_37824);var state_37850__$1 = state_37850;var statearr_37865_37890 = state_37850__$1;(statearr_37865_37890[2] = inst_37825);
cljs.core.async.impl.ioc_helpers.process_exception(state_37850__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 12))
{var inst_37836 = (state_37850[12]);var inst_37836__$1 = (state_37850[2]);var inst_37837 = cljs.core.some(cljs.core.nil_QMARK_,inst_37836__$1);var state_37850__$1 = (function (){var statearr_37866 = state_37850;(statearr_37866[12] = inst_37836__$1);
return statearr_37866;
})();if(cljs.core.truth_(inst_37837))
{var statearr_37867_37891 = state_37850__$1;(statearr_37867_37891[1] = 13);
} else
{var statearr_37868_37892 = state_37850__$1;(statearr_37868_37892[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 13))
{var inst_37839 = cljs.core.async.close_BANG_(out);var state_37850__$1 = state_37850;var statearr_37869_37893 = state_37850__$1;(statearr_37869_37893[2] = inst_37839);
(statearr_37869_37893[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 14))
{var inst_37836 = (state_37850[12]);var inst_37841 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37836);var state_37850__$1 = state_37850;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37850__$1,16,out,inst_37841);
} else
{if((state_val_37851 === 15))
{var inst_37846 = (state_37850[2]);var state_37850__$1 = state_37850;var statearr_37870_37894 = state_37850__$1;(statearr_37870_37894[2] = inst_37846);
(statearr_37870_37894[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37851 === 16))
{var inst_37843 = (state_37850[2]);var state_37850__$1 = (function (){var statearr_37871 = state_37850;(statearr_37871[13] = inst_37843);
return statearr_37871;
})();var statearr_37872_37895 = state_37850__$1;(statearr_37872_37895[2] = null);
(statearr_37872_37895[1] = 2);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_37876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37876[0] = state_machine__5548__auto__);
(statearr_37876[1] = 1);
return statearr_37876;
});
var state_machine__5548__auto____1 = (function (state_37850){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37850);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37877){if((e37877 instanceof Object))
{var ex__5551__auto__ = e37877;var statearr_37878_37896 = state_37850;(statearr_37878_37896[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37850);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37897 = state_37850;
state_37850 = G__37897;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37850){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37879 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37880);
return statearr_37879;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37981){var state_val_37982 = (state_37981[1]);if((state_val_37982 === 1))
{var inst_37952 = cljs.core.vec(chs);var inst_37953 = inst_37952;var state_37981__$1 = (function (){var statearr_37983 = state_37981;(statearr_37983[7] = inst_37953);
return statearr_37983;
})();var statearr_37984_38006 = state_37981__$1;(statearr_37984_38006[2] = null);
(statearr_37984_38006[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37982 === 2))
{var inst_37953 = (state_37981[7]);var inst_37955 = cljs.core.count(inst_37953);var inst_37956 = (inst_37955 > 0);var state_37981__$1 = state_37981;if(cljs.core.truth_(inst_37956))
{var statearr_37985_38007 = state_37981__$1;(statearr_37985_38007[1] = 4);
} else
{var statearr_37986_38008 = state_37981__$1;(statearr_37986_38008[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37982 === 3))
{var inst_37979 = (state_37981[2]);var state_37981__$1 = state_37981;return cljs.core.async.impl.ioc_helpers.return_chan(state_37981__$1,inst_37979);
} else
{if((state_val_37982 === 4))
{var inst_37953 = (state_37981[7]);var state_37981__$1 = state_37981;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37981__$1,7,inst_37953);
} else
{if((state_val_37982 === 5))
{var inst_37975 = cljs.core.async.close_BANG_(out);var state_37981__$1 = state_37981;var statearr_37987_38009 = state_37981__$1;(statearr_37987_38009[2] = inst_37975);
(statearr_37987_38009[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37982 === 6))
{var inst_37977 = (state_37981[2]);var state_37981__$1 = state_37981;var statearr_37988_38010 = state_37981__$1;(statearr_37988_38010[2] = inst_37977);
(statearr_37988_38010[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37982 === 7))
{var inst_37960 = (state_37981[8]);var inst_37961 = (state_37981[9]);var inst_37960__$1 = (state_37981[2]);var inst_37961__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37960__$1,0,null);var inst_37962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37960__$1,1,null);var inst_37963 = (inst_37961__$1 == null);var state_37981__$1 = (function (){var statearr_37989 = state_37981;(statearr_37989[10] = inst_37962);
(statearr_37989[8] = inst_37960__$1);
(statearr_37989[9] = inst_37961__$1);
return statearr_37989;
})();if(cljs.core.truth_(inst_37963))
{var statearr_37990_38011 = state_37981__$1;(statearr_37990_38011[1] = 8);
} else
{var statearr_37991_38012 = state_37981__$1;(statearr_37991_38012[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37982 === 8))
{var inst_37962 = (state_37981[10]);var inst_37960 = (state_37981[8]);var inst_37961 = (state_37981[9]);var inst_37953 = (state_37981[7]);var inst_37965 = (function (){var c = inst_37962;var v = inst_37961;var vec__37958 = inst_37960;var cs = inst_37953;return ((function (c,v,vec__37958,cs,inst_37962,inst_37960,inst_37961,inst_37953,state_val_37982){
return (function (p1__37898_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37898_SHARP_);
});
;})(c,v,vec__37958,cs,inst_37962,inst_37960,inst_37961,inst_37953,state_val_37982))
})();var inst_37966 = cljs.core.filterv(inst_37965,inst_37953);var inst_37953__$1 = inst_37966;var state_37981__$1 = (function (){var statearr_37992 = state_37981;(statearr_37992[7] = inst_37953__$1);
return statearr_37992;
})();var statearr_37993_38013 = state_37981__$1;(statearr_37993_38013[2] = null);
(statearr_37993_38013[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37982 === 9))
{var inst_37961 = (state_37981[9]);var state_37981__$1 = state_37981;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37981__$1,11,out,inst_37961);
} else
{if((state_val_37982 === 10))
{var inst_37973 = (state_37981[2]);var state_37981__$1 = state_37981;var statearr_37995_38014 = state_37981__$1;(statearr_37995_38014[2] = inst_37973);
(statearr_37995_38014[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37982 === 11))
{var inst_37953 = (state_37981[7]);var inst_37970 = (state_37981[2]);var tmp37994 = inst_37953;var inst_37953__$1 = tmp37994;var state_37981__$1 = (function (){var statearr_37996 = state_37981;(statearr_37996[7] = inst_37953__$1);
(statearr_37996[11] = inst_37970);
return statearr_37996;
})();var statearr_37997_38015 = state_37981__$1;(statearr_37997_38015[2] = null);
(statearr_37997_38015[1] = 2);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_38001 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38001[0] = state_machine__5548__auto__);
(statearr_38001[1] = 1);
return statearr_38001;
});
var state_machine__5548__auto____1 = (function (state_37981){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37981);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38002){if((e38002 instanceof Object))
{var ex__5551__auto__ = e38002;var statearr_38003_38016 = state_37981;(statearr_38003_38016[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37981);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38017 = state_37981;
state_37981 = G__38017;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37981){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38004 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38005);
return statearr_38004;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38087){var state_val_38088 = (state_38087[1]);if((state_val_38088 === 1))
{var inst_38064 = 0;var state_38087__$1 = (function (){var statearr_38089 = state_38087;(statearr_38089[7] = inst_38064);
return statearr_38089;
})();var statearr_38090_38111 = state_38087__$1;(statearr_38090_38111[2] = null);
(statearr_38090_38111[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38088 === 2))
{var inst_38064 = (state_38087[7]);var inst_38066 = (inst_38064 < n);var state_38087__$1 = state_38087;if(cljs.core.truth_(inst_38066))
{var statearr_38091_38112 = state_38087__$1;(statearr_38091_38112[1] = 4);
} else
{var statearr_38092_38113 = state_38087__$1;(statearr_38092_38113[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38088 === 3))
{var inst_38084 = (state_38087[2]);var inst_38085 = cljs.core.async.close_BANG_(out);var state_38087__$1 = (function (){var statearr_38093 = state_38087;(statearr_38093[8] = inst_38084);
return statearr_38093;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38087__$1,inst_38085);
} else
{if((state_val_38088 === 4))
{var state_38087__$1 = state_38087;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38087__$1,7,ch);
} else
{if((state_val_38088 === 5))
{var state_38087__$1 = state_38087;var statearr_38094_38114 = state_38087__$1;(statearr_38094_38114[2] = null);
(statearr_38094_38114[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38088 === 6))
{var inst_38082 = (state_38087[2]);var state_38087__$1 = state_38087;var statearr_38095_38115 = state_38087__$1;(statearr_38095_38115[2] = inst_38082);
(statearr_38095_38115[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38088 === 7))
{var inst_38069 = (state_38087[9]);var inst_38069__$1 = (state_38087[2]);var inst_38070 = (inst_38069__$1 == null);var inst_38071 = cljs.core.not(inst_38070);var state_38087__$1 = (function (){var statearr_38096 = state_38087;(statearr_38096[9] = inst_38069__$1);
return statearr_38096;
})();if(inst_38071)
{var statearr_38097_38116 = state_38087__$1;(statearr_38097_38116[1] = 8);
} else
{var statearr_38098_38117 = state_38087__$1;(statearr_38098_38117[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38088 === 8))
{var inst_38069 = (state_38087[9]);var state_38087__$1 = state_38087;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38087__$1,11,out,inst_38069);
} else
{if((state_val_38088 === 9))
{var state_38087__$1 = state_38087;var statearr_38099_38118 = state_38087__$1;(statearr_38099_38118[2] = null);
(statearr_38099_38118[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38088 === 10))
{var inst_38079 = (state_38087[2]);var state_38087__$1 = state_38087;var statearr_38100_38119 = state_38087__$1;(statearr_38100_38119[2] = inst_38079);
(statearr_38100_38119[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38088 === 11))
{var inst_38064 = (state_38087[7]);var inst_38074 = (state_38087[2]);var inst_38075 = (inst_38064 + 1);var inst_38064__$1 = inst_38075;var state_38087__$1 = (function (){var statearr_38101 = state_38087;(statearr_38101[10] = inst_38074);
(statearr_38101[7] = inst_38064__$1);
return statearr_38101;
})();var statearr_38102_38120 = state_38087__$1;(statearr_38102_38120[2] = null);
(statearr_38102_38120[1] = 2);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_38106 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38106[0] = state_machine__5548__auto__);
(statearr_38106[1] = 1);
return statearr_38106;
});
var state_machine__5548__auto____1 = (function (state_38087){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38087);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38107){if((e38107 instanceof Object))
{var ex__5551__auto__ = e38107;var statearr_38108_38121 = state_38087;(statearr_38108_38121[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38087);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38122 = state_38087;
state_38087 = G__38122;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38087){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38109 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38110);
return statearr_38109;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38194){var state_val_38195 = (state_38194[1]);if((state_val_38195 === 1))
{var inst_38171 = null;var state_38194__$1 = (function (){var statearr_38196 = state_38194;(statearr_38196[7] = inst_38171);
return statearr_38196;
})();var statearr_38197_38220 = state_38194__$1;(statearr_38197_38220[2] = null);
(statearr_38197_38220[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38195 === 2))
{var state_38194__$1 = state_38194;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38194__$1,4,ch);
} else
{if((state_val_38195 === 3))
{var inst_38191 = (state_38194[2]);var inst_38192 = cljs.core.async.close_BANG_(out);var state_38194__$1 = (function (){var statearr_38198 = state_38194;(statearr_38198[8] = inst_38191);
return statearr_38198;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38194__$1,inst_38192);
} else
{if((state_val_38195 === 4))
{var inst_38174 = (state_38194[9]);var inst_38174__$1 = (state_38194[2]);var inst_38175 = (inst_38174__$1 == null);var inst_38176 = cljs.core.not(inst_38175);var state_38194__$1 = (function (){var statearr_38199 = state_38194;(statearr_38199[9] = inst_38174__$1);
return statearr_38199;
})();if(inst_38176)
{var statearr_38200_38221 = state_38194__$1;(statearr_38200_38221[1] = 5);
} else
{var statearr_38201_38222 = state_38194__$1;(statearr_38201_38222[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38195 === 5))
{var inst_38174 = (state_38194[9]);var inst_38171 = (state_38194[7]);var inst_38178 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38174,inst_38171);var state_38194__$1 = state_38194;if(inst_38178)
{var statearr_38202_38223 = state_38194__$1;(statearr_38202_38223[1] = 8);
} else
{var statearr_38203_38224 = state_38194__$1;(statearr_38203_38224[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38195 === 6))
{var state_38194__$1 = state_38194;var statearr_38205_38225 = state_38194__$1;(statearr_38205_38225[2] = null);
(statearr_38205_38225[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38195 === 7))
{var inst_38189 = (state_38194[2]);var state_38194__$1 = state_38194;var statearr_38206_38226 = state_38194__$1;(statearr_38206_38226[2] = inst_38189);
(statearr_38206_38226[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38195 === 8))
{var inst_38171 = (state_38194[7]);var tmp38204 = inst_38171;var inst_38171__$1 = tmp38204;var state_38194__$1 = (function (){var statearr_38207 = state_38194;(statearr_38207[7] = inst_38171__$1);
return statearr_38207;
})();var statearr_38208_38227 = state_38194__$1;(statearr_38208_38227[2] = null);
(statearr_38208_38227[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38195 === 9))
{var inst_38174 = (state_38194[9]);var state_38194__$1 = state_38194;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38194__$1,11,out,inst_38174);
} else
{if((state_val_38195 === 10))
{var inst_38186 = (state_38194[2]);var state_38194__$1 = state_38194;var statearr_38209_38228 = state_38194__$1;(statearr_38209_38228[2] = inst_38186);
(statearr_38209_38228[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38195 === 11))
{var inst_38174 = (state_38194[9]);var inst_38183 = (state_38194[2]);var inst_38171 = inst_38174;var state_38194__$1 = (function (){var statearr_38210 = state_38194;(statearr_38210[10] = inst_38183);
(statearr_38210[7] = inst_38171);
return statearr_38210;
})();var statearr_38211_38229 = state_38194__$1;(statearr_38211_38229[2] = null);
(statearr_38211_38229[1] = 2);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_38215 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38215[0] = state_machine__5548__auto__);
(statearr_38215[1] = 1);
return statearr_38215;
});
var state_machine__5548__auto____1 = (function (state_38194){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38194);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38216){if((e38216 instanceof Object))
{var ex__5551__auto__ = e38216;var statearr_38217_38230 = state_38194;(statearr_38217_38230[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38194);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38231 = state_38194;
state_38194 = G__38231;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38194){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38218 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38219);
return statearr_38218;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38336){var state_val_38337 = (state_38336[1]);if((state_val_38337 === 1))
{var inst_38299 = (new Array(n));var inst_38300 = inst_38299;var inst_38301 = 0;var state_38336__$1 = (function (){var statearr_38338 = state_38336;(statearr_38338[7] = inst_38301);
(statearr_38338[8] = inst_38300);
return statearr_38338;
})();var statearr_38339_38367 = state_38336__$1;(statearr_38339_38367[2] = null);
(statearr_38339_38367[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 2))
{var state_38336__$1 = state_38336;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38336__$1,4,ch);
} else
{if((state_val_38337 === 3))
{var inst_38334 = (state_38336[2]);var state_38336__$1 = state_38336;return cljs.core.async.impl.ioc_helpers.return_chan(state_38336__$1,inst_38334);
} else
{if((state_val_38337 === 4))
{var inst_38304 = (state_38336[9]);var inst_38304__$1 = (state_38336[2]);var inst_38305 = (inst_38304__$1 == null);var inst_38306 = cljs.core.not(inst_38305);var state_38336__$1 = (function (){var statearr_38340 = state_38336;(statearr_38340[9] = inst_38304__$1);
return statearr_38340;
})();if(inst_38306)
{var statearr_38341_38368 = state_38336__$1;(statearr_38341_38368[1] = 5);
} else
{var statearr_38342_38369 = state_38336__$1;(statearr_38342_38369[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 5))
{var inst_38301 = (state_38336[7]);var inst_38300 = (state_38336[8]);var inst_38309 = (state_38336[10]);var inst_38304 = (state_38336[9]);var inst_38308 = (inst_38300[inst_38301] = inst_38304);var inst_38309__$1 = (inst_38301 + 1);var inst_38310 = (inst_38309__$1 < n);var state_38336__$1 = (function (){var statearr_38343 = state_38336;(statearr_38343[11] = inst_38308);
(statearr_38343[10] = inst_38309__$1);
return statearr_38343;
})();if(cljs.core.truth_(inst_38310))
{var statearr_38344_38370 = state_38336__$1;(statearr_38344_38370[1] = 8);
} else
{var statearr_38345_38371 = state_38336__$1;(statearr_38345_38371[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 6))
{var inst_38301 = (state_38336[7]);var inst_38322 = (inst_38301 > 0);var state_38336__$1 = state_38336;if(cljs.core.truth_(inst_38322))
{var statearr_38347_38372 = state_38336__$1;(statearr_38347_38372[1] = 12);
} else
{var statearr_38348_38373 = state_38336__$1;(statearr_38348_38373[1] = 13);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 7))
{var inst_38332 = (state_38336[2]);var state_38336__$1 = state_38336;var statearr_38349_38374 = state_38336__$1;(statearr_38349_38374[2] = inst_38332);
(statearr_38349_38374[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 8))
{var inst_38300 = (state_38336[8]);var inst_38309 = (state_38336[10]);var tmp38346 = inst_38300;var inst_38300__$1 = tmp38346;var inst_38301 = inst_38309;var state_38336__$1 = (function (){var statearr_38350 = state_38336;(statearr_38350[7] = inst_38301);
(statearr_38350[8] = inst_38300__$1);
return statearr_38350;
})();var statearr_38351_38375 = state_38336__$1;(statearr_38351_38375[2] = null);
(statearr_38351_38375[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 9))
{var inst_38300 = (state_38336[8]);var inst_38314 = cljs.core.vec(inst_38300);var state_38336__$1 = state_38336;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38336__$1,11,out,inst_38314);
} else
{if((state_val_38337 === 10))
{var inst_38320 = (state_38336[2]);var state_38336__$1 = state_38336;var statearr_38352_38376 = state_38336__$1;(statearr_38352_38376[2] = inst_38320);
(statearr_38352_38376[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 11))
{var inst_38316 = (state_38336[2]);var inst_38317 = (new Array(n));var inst_38300 = inst_38317;var inst_38301 = 0;var state_38336__$1 = (function (){var statearr_38353 = state_38336;(statearr_38353[7] = inst_38301);
(statearr_38353[8] = inst_38300);
(statearr_38353[12] = inst_38316);
return statearr_38353;
})();var statearr_38354_38377 = state_38336__$1;(statearr_38354_38377[2] = null);
(statearr_38354_38377[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 12))
{var inst_38300 = (state_38336[8]);var inst_38324 = cljs.core.vec(inst_38300);var state_38336__$1 = state_38336;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38336__$1,15,out,inst_38324);
} else
{if((state_val_38337 === 13))
{var state_38336__$1 = state_38336;var statearr_38355_38378 = state_38336__$1;(statearr_38355_38378[2] = null);
(statearr_38355_38378[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 14))
{var inst_38329 = (state_38336[2]);var inst_38330 = cljs.core.async.close_BANG_(out);var state_38336__$1 = (function (){var statearr_38356 = state_38336;(statearr_38356[13] = inst_38329);
return statearr_38356;
})();var statearr_38357_38379 = state_38336__$1;(statearr_38357_38379[2] = inst_38330);
(statearr_38357_38379[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38337 === 15))
{var inst_38326 = (state_38336[2]);var state_38336__$1 = state_38336;var statearr_38358_38380 = state_38336__$1;(statearr_38358_38380[2] = inst_38326);
(statearr_38358_38380[1] = 14);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_38362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38362[0] = state_machine__5548__auto__);
(statearr_38362[1] = 1);
return statearr_38362;
});
var state_machine__5548__auto____1 = (function (state_38336){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38336);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38363){if((e38363 instanceof Object))
{var ex__5551__auto__ = e38363;var statearr_38364_38381 = state_38336;(statearr_38364_38381[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38336);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38382 = state_38336;
state_38336 = G__38382;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38336){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38365 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38366);
return statearr_38365;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38495){var state_val_38496 = (state_38495[1]);if((state_val_38496 === 1))
{var inst_38454 = [];var inst_38455 = inst_38454;var inst_38456 = cljs.core.constant$keyword$564;var state_38495__$1 = (function (){var statearr_38497 = state_38495;(statearr_38497[7] = inst_38455);
(statearr_38497[8] = inst_38456);
return statearr_38497;
})();var statearr_38498_38526 = state_38495__$1;(statearr_38498_38526[2] = null);
(statearr_38498_38526[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 2))
{var state_38495__$1 = state_38495;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38495__$1,4,ch);
} else
{if((state_val_38496 === 3))
{var inst_38493 = (state_38495[2]);var state_38495__$1 = state_38495;return cljs.core.async.impl.ioc_helpers.return_chan(state_38495__$1,inst_38493);
} else
{if((state_val_38496 === 4))
{var inst_38459 = (state_38495[9]);var inst_38459__$1 = (state_38495[2]);var inst_38460 = (inst_38459__$1 == null);var inst_38461 = cljs.core.not(inst_38460);var state_38495__$1 = (function (){var statearr_38499 = state_38495;(statearr_38499[9] = inst_38459__$1);
return statearr_38499;
})();if(inst_38461)
{var statearr_38500_38527 = state_38495__$1;(statearr_38500_38527[1] = 5);
} else
{var statearr_38501_38528 = state_38495__$1;(statearr_38501_38528[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 5))
{var inst_38459 = (state_38495[9]);var inst_38456 = (state_38495[8]);var inst_38463 = (state_38495[10]);var inst_38463__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38459) : f.call(null,inst_38459));var inst_38464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38463__$1,inst_38456);var inst_38465 = cljs.core.keyword_identical_QMARK_(inst_38456,cljs.core.constant$keyword$564);var inst_38466 = (inst_38464) || (inst_38465);var state_38495__$1 = (function (){var statearr_38502 = state_38495;(statearr_38502[10] = inst_38463__$1);
return statearr_38502;
})();if(cljs.core.truth_(inst_38466))
{var statearr_38503_38529 = state_38495__$1;(statearr_38503_38529[1] = 8);
} else
{var statearr_38504_38530 = state_38495__$1;(statearr_38504_38530[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 6))
{var inst_38455 = (state_38495[7]);var inst_38480 = inst_38455.length;var inst_38481 = (inst_38480 > 0);var state_38495__$1 = state_38495;if(cljs.core.truth_(inst_38481))
{var statearr_38506_38531 = state_38495__$1;(statearr_38506_38531[1] = 12);
} else
{var statearr_38507_38532 = state_38495__$1;(statearr_38507_38532[1] = 13);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 7))
{var inst_38491 = (state_38495[2]);var state_38495__$1 = state_38495;var statearr_38508_38533 = state_38495__$1;(statearr_38508_38533[2] = inst_38491);
(statearr_38508_38533[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 8))
{var inst_38459 = (state_38495[9]);var inst_38455 = (state_38495[7]);var inst_38463 = (state_38495[10]);var inst_38468 = inst_38455.push(inst_38459);var tmp38505 = inst_38455;var inst_38455__$1 = tmp38505;var inst_38456 = inst_38463;var state_38495__$1 = (function (){var statearr_38509 = state_38495;(statearr_38509[7] = inst_38455__$1);
(statearr_38509[8] = inst_38456);
(statearr_38509[11] = inst_38468);
return statearr_38509;
})();var statearr_38510_38534 = state_38495__$1;(statearr_38510_38534[2] = null);
(statearr_38510_38534[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 9))
{var inst_38455 = (state_38495[7]);var inst_38471 = cljs.core.vec(inst_38455);var state_38495__$1 = state_38495;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38495__$1,11,out,inst_38471);
} else
{if((state_val_38496 === 10))
{var inst_38478 = (state_38495[2]);var state_38495__$1 = state_38495;var statearr_38511_38535 = state_38495__$1;(statearr_38511_38535[2] = inst_38478);
(statearr_38511_38535[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 11))
{var inst_38459 = (state_38495[9]);var inst_38463 = (state_38495[10]);var inst_38473 = (state_38495[2]);var inst_38474 = [];var inst_38475 = inst_38474.push(inst_38459);var inst_38455 = inst_38474;var inst_38456 = inst_38463;var state_38495__$1 = (function (){var statearr_38512 = state_38495;(statearr_38512[7] = inst_38455);
(statearr_38512[8] = inst_38456);
(statearr_38512[12] = inst_38475);
(statearr_38512[13] = inst_38473);
return statearr_38512;
})();var statearr_38513_38536 = state_38495__$1;(statearr_38513_38536[2] = null);
(statearr_38513_38536[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 12))
{var inst_38455 = (state_38495[7]);var inst_38483 = cljs.core.vec(inst_38455);var state_38495__$1 = state_38495;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38495__$1,15,out,inst_38483);
} else
{if((state_val_38496 === 13))
{var state_38495__$1 = state_38495;var statearr_38514_38537 = state_38495__$1;(statearr_38514_38537[2] = null);
(statearr_38514_38537[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 14))
{var inst_38488 = (state_38495[2]);var inst_38489 = cljs.core.async.close_BANG_(out);var state_38495__$1 = (function (){var statearr_38515 = state_38495;(statearr_38515[14] = inst_38488);
return statearr_38515;
})();var statearr_38516_38538 = state_38495__$1;(statearr_38516_38538[2] = inst_38489);
(statearr_38516_38538[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38496 === 15))
{var inst_38485 = (state_38495[2]);var state_38495__$1 = state_38495;var statearr_38517_38539 = state_38495__$1;(statearr_38517_38539[2] = inst_38485);
(statearr_38517_38539[1] = 14);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_38521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38521[0] = state_machine__5548__auto__);
(statearr_38521[1] = 1);
return statearr_38521;
});
var state_machine__5548__auto____1 = (function (state_38495){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38495);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38522){if((e38522 instanceof Object))
{var ex__5551__auto__ = e38522;var statearr_38523_38540 = state_38495;(statearr_38523_38540[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38495);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38541 = state_38495;
state_38495 = G__38541;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38495){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38524 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38525);
return statearr_38524;
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
