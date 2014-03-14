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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t35955 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35955 = (function (f,fn_handler,meta35956){
this.f = f;
this.fn_handler = fn_handler;
this.meta35956 = meta35956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35955.cljs$lang$type = true;
cljs.core.async.t35955.cljs$lang$ctorStr = "cljs.core.async/t35955";
cljs.core.async.t35955.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35955");
});
cljs.core.async.t35955.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t35955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t35955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35957){var self__ = this;
var _35957__$1 = this;return self__.meta35956;
});
cljs.core.async.t35955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35957,meta35956__$1){var self__ = this;
var _35957__$1 = this;return (new cljs.core.async.t35955(self__.f,self__.fn_handler,meta35956__$1));
});
cljs.core.async.__GT_t35955 = (function __GT_t35955(f__$1,fn_handler__$1,meta35956){return (new cljs.core.async.t35955(f__$1,fn_handler__$1,meta35956));
});
}
return (new cljs.core.async.t35955(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__35959 = buff;if(G__35959)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__35959.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__35959.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35959);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35959);
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
{var val_35960 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35960) : fn1.call(null,val_35960));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35960) : fn1.call(null,val_35960));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___35961 = n;var x_35962 = 0;while(true){
if((x_35962 < n__4289__auto___35961))
{(a[x_35962] = 0);
{
var G__35963 = (x_35962 + 1);
x_35962 = G__35963;
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
var G__35964 = (i + 1);
i = G__35964;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t35968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35968 = (function (flag,alt_flag,meta35969){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta35969 = meta35969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35968.cljs$lang$type = true;
cljs.core.async.t35968.cljs$lang$ctorStr = "cljs.core.async/t35968";
cljs.core.async.t35968.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35968");
});
cljs.core.async.t35968.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t35968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t35968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35970){var self__ = this;
var _35970__$1 = this;return self__.meta35969;
});
cljs.core.async.t35968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35970,meta35969__$1){var self__ = this;
var _35970__$1 = this;return (new cljs.core.async.t35968(self__.flag,self__.alt_flag,meta35969__$1));
});
cljs.core.async.__GT_t35968 = (function __GT_t35968(flag__$1,alt_flag__$1,meta35969){return (new cljs.core.async.t35968(flag__$1,alt_flag__$1,meta35969));
});
}
return (new cljs.core.async.t35968(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t35974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35974 = (function (cb,flag,alt_handler,meta35975){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta35975 = meta35975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35974.cljs$lang$type = true;
cljs.core.async.t35974.cljs$lang$ctorStr = "cljs.core.async/t35974";
cljs.core.async.t35974.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35974");
});
cljs.core.async.t35974.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t35974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t35974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35976){var self__ = this;
var _35976__$1 = this;return self__.meta35975;
});
cljs.core.async.t35974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35976,meta35975__$1){var self__ = this;
var _35976__$1 = this;return (new cljs.core.async.t35974(self__.cb,self__.flag,self__.alt_handler,meta35975__$1));
});
cljs.core.async.__GT_t35974 = (function __GT_t35974(cb__$1,flag__$1,alt_handler__$1,meta35975){return (new cljs.core.async.t35974(cb__$1,flag__$1,alt_handler__$1,meta35975));
});
}
return (new cljs.core.async.t35974(cb,flag,alt_handler,null));
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
return (function (p1__35977_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35977_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35977_SHARP_,port], null)));
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
var G__35978 = (i + 1);
i = G__35978;
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
var alts_BANG___delegate = function (ports,p__35979){var map__35981 = p__35979;var map__35981__$1 = ((cljs.core.seq_QMARK_(map__35981))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35981):map__35981);var opts = map__35981__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__35979 = null;if (arguments.length > 1) {
  p__35979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__35979);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__35982){
var ports = cljs.core.first(arglist__35982);
var p__35979 = cljs.core.rest(arglist__35982);
return alts_BANG___delegate(ports,p__35979);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t35990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35990 = (function (ch,f,map_LT_,meta35991){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35991 = meta35991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35990.cljs$lang$type = true;
cljs.core.async.t35990.cljs$lang$ctorStr = "cljs.core.async/t35990";
cljs.core.async.t35990.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35990");
});
cljs.core.async.t35990.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t35990.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t35993 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35993 = (function (fn1,_,meta35991,ch,f,map_LT_,meta35994){
this.fn1 = fn1;
this._ = _;
this.meta35991 = meta35991;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35994 = meta35994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35993.cljs$lang$type = true;
cljs.core.async.t35993.cljs$lang$ctorStr = "cljs.core.async/t35993";
cljs.core.async.t35993.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35993");
});
cljs.core.async.t35993.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t35993.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t35993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__35983_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__35983_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35983_SHARP_) : self__.f.call(null,p1__35983_SHARP_)))) : f1.call(null,(((p1__35983_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35983_SHARP_) : self__.f.call(null,p1__35983_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t35993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35995){var self__ = this;
var _35995__$1 = this;return self__.meta35994;
});
cljs.core.async.t35993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35995,meta35994__$1){var self__ = this;
var _35995__$1 = this;return (new cljs.core.async.t35993(self__.fn1,self__._,self__.meta35991,self__.ch,self__.f,self__.map_LT_,meta35994__$1));
});
cljs.core.async.__GT_t35993 = (function __GT_t35993(fn1__$1,___$2,meta35991__$1,ch__$2,f__$2,map_LT___$2,meta35994){return (new cljs.core.async.t35993(fn1__$1,___$2,meta35991__$1,ch__$2,f__$2,map_LT___$2,meta35994));
});
}
return (new cljs.core.async.t35993(fn1,___$1,self__.meta35991,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t35990.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t35990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35992){var self__ = this;
var _35992__$1 = this;return self__.meta35991;
});
cljs.core.async.t35990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35992,meta35991__$1){var self__ = this;
var _35992__$1 = this;return (new cljs.core.async.t35990(self__.ch,self__.f,self__.map_LT_,meta35991__$1));
});
cljs.core.async.__GT_t35990 = (function __GT_t35990(ch__$1,f__$1,map_LT___$1,meta35991){return (new cljs.core.async.t35990(ch__$1,f__$1,map_LT___$1,meta35991));
});
}
return (new cljs.core.async.t35990(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t35999 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35999 = (function (ch,f,map_GT_,meta36000){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36000 = meta36000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35999.cljs$lang$type = true;
cljs.core.async.t35999.cljs$lang$ctorStr = "cljs.core.async/t35999";
cljs.core.async.t35999.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35999");
});
cljs.core.async.t35999.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t35999.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t35999.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t35999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36001){var self__ = this;
var _36001__$1 = this;return self__.meta36000;
});
cljs.core.async.t35999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36001,meta36000__$1){var self__ = this;
var _36001__$1 = this;return (new cljs.core.async.t35999(self__.ch,self__.f,self__.map_GT_,meta36000__$1));
});
cljs.core.async.__GT_t35999 = (function __GT_t35999(ch__$1,f__$1,map_GT___$1,meta36000){return (new cljs.core.async.t35999(ch__$1,f__$1,map_GT___$1,meta36000));
});
}
return (new cljs.core.async.t35999(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36005 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36005 = (function (ch,p,filter_GT_,meta36006){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36006 = meta36006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36005.cljs$lang$type = true;
cljs.core.async.t36005.cljs$lang$ctorStr = "cljs.core.async/t36005";
cljs.core.async.t36005.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36005");
});
cljs.core.async.t36005.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t36005.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36005.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36007){var self__ = this;
var _36007__$1 = this;return self__.meta36006;
});
cljs.core.async.t36005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36007,meta36006__$1){var self__ = this;
var _36007__$1 = this;return (new cljs.core.async.t36005(self__.ch,self__.p,self__.filter_GT_,meta36006__$1));
});
cljs.core.async.__GT_t36005 = (function __GT_t36005(ch__$1,p__$1,filter_GT___$1,meta36006){return (new cljs.core.async.t36005(ch__$1,p__$1,filter_GT___$1,meta36006));
});
}
return (new cljs.core.async.t36005(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___36090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36069){var state_val_36070 = (state_36069[1]);if((state_val_36070 === 1))
{var state_36069__$1 = state_36069;var statearr_36071_36091 = state_36069__$1;(statearr_36071_36091[2] = null);
(statearr_36071_36091[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36070 === 2))
{var state_36069__$1 = state_36069;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36069__$1,4,ch);
} else
{if((state_val_36070 === 3))
{var inst_36067 = (state_36069[2]);var state_36069__$1 = state_36069;return cljs.core.async.impl.ioc_helpers.return_chan(state_36069__$1,inst_36067);
} else
{if((state_val_36070 === 4))
{var inst_36051 = (state_36069[7]);var inst_36051__$1 = (state_36069[2]);var inst_36052 = (inst_36051__$1 == null);var state_36069__$1 = (function (){var statearr_36072 = state_36069;(statearr_36072[7] = inst_36051__$1);
return statearr_36072;
})();if(cljs.core.truth_(inst_36052))
{var statearr_36073_36092 = state_36069__$1;(statearr_36073_36092[1] = 5);
} else
{var statearr_36074_36093 = state_36069__$1;(statearr_36074_36093[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36070 === 5))
{var inst_36054 = cljs.core.async.close_BANG_(out);var state_36069__$1 = state_36069;var statearr_36075_36094 = state_36069__$1;(statearr_36075_36094[2] = inst_36054);
(statearr_36075_36094[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36070 === 6))
{var inst_36051 = (state_36069[7]);var inst_36056 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36051) : p.call(null,inst_36051));var state_36069__$1 = state_36069;if(cljs.core.truth_(inst_36056))
{var statearr_36076_36095 = state_36069__$1;(statearr_36076_36095[1] = 8);
} else
{var statearr_36077_36096 = state_36069__$1;(statearr_36077_36096[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36070 === 7))
{var inst_36065 = (state_36069[2]);var state_36069__$1 = state_36069;var statearr_36078_36097 = state_36069__$1;(statearr_36078_36097[2] = inst_36065);
(statearr_36078_36097[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36070 === 8))
{var inst_36051 = (state_36069[7]);var state_36069__$1 = state_36069;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36069__$1,11,out,inst_36051);
} else
{if((state_val_36070 === 9))
{var state_36069__$1 = state_36069;var statearr_36079_36098 = state_36069__$1;(statearr_36079_36098[2] = null);
(statearr_36079_36098[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36070 === 10))
{var inst_36062 = (state_36069[2]);var state_36069__$1 = (function (){var statearr_36080 = state_36069;(statearr_36080[8] = inst_36062);
return statearr_36080;
})();var statearr_36081_36099 = state_36069__$1;(statearr_36081_36099[2] = null);
(statearr_36081_36099[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36070 === 11))
{var inst_36059 = (state_36069[2]);var state_36069__$1 = state_36069;var statearr_36082_36100 = state_36069__$1;(statearr_36082_36100[2] = inst_36059);
(statearr_36082_36100[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_36086 = [null,null,null,null,null,null,null,null,null];(statearr_36086[0] = state_machine__5548__auto__);
(statearr_36086[1] = 1);
return statearr_36086;
});
var state_machine__5548__auto____1 = (function (state_36069){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36069);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36087){if((e36087 instanceof Object))
{var ex__5551__auto__ = e36087;var statearr_36088_36101 = state_36069;(statearr_36088_36101[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36069);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36102 = state_36069;
state_36069 = G__36102;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36069){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36089 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36090);
return statearr_36089;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36254){var state_val_36255 = (state_36254[1]);if((state_val_36255 === 1))
{var state_36254__$1 = state_36254;var statearr_36256_36293 = state_36254__$1;(statearr_36256_36293[2] = null);
(statearr_36256_36293[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 2))
{var state_36254__$1 = state_36254;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36254__$1,4,in$);
} else
{if((state_val_36255 === 3))
{var inst_36252 = (state_36254[2]);var state_36254__$1 = state_36254;return cljs.core.async.impl.ioc_helpers.return_chan(state_36254__$1,inst_36252);
} else
{if((state_val_36255 === 4))
{var inst_36200 = (state_36254[7]);var inst_36200__$1 = (state_36254[2]);var inst_36201 = (inst_36200__$1 == null);var state_36254__$1 = (function (){var statearr_36257 = state_36254;(statearr_36257[7] = inst_36200__$1);
return statearr_36257;
})();if(cljs.core.truth_(inst_36201))
{var statearr_36258_36294 = state_36254__$1;(statearr_36258_36294[1] = 5);
} else
{var statearr_36259_36295 = state_36254__$1;(statearr_36259_36295[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 5))
{var inst_36203 = cljs.core.async.close_BANG_(out);var state_36254__$1 = state_36254;var statearr_36260_36296 = state_36254__$1;(statearr_36260_36296[2] = inst_36203);
(statearr_36260_36296[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 6))
{var inst_36200 = (state_36254[7]);var inst_36205 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36200) : f.call(null,inst_36200));var inst_36210 = cljs.core.seq(inst_36205);var inst_36211 = inst_36210;var inst_36212 = null;var inst_36213 = 0;var inst_36214 = 0;var state_36254__$1 = (function (){var statearr_36261 = state_36254;(statearr_36261[8] = inst_36214);
(statearr_36261[9] = inst_36213);
(statearr_36261[10] = inst_36211);
(statearr_36261[11] = inst_36212);
return statearr_36261;
})();var statearr_36262_36297 = state_36254__$1;(statearr_36262_36297[2] = null);
(statearr_36262_36297[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 7))
{var inst_36250 = (state_36254[2]);var state_36254__$1 = state_36254;var statearr_36263_36298 = state_36254__$1;(statearr_36263_36298[2] = inst_36250);
(statearr_36263_36298[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 8))
{var inst_36214 = (state_36254[8]);var inst_36213 = (state_36254[9]);var inst_36216 = (inst_36214 < inst_36213);var inst_36217 = inst_36216;var state_36254__$1 = state_36254;if(cljs.core.truth_(inst_36217))
{var statearr_36264_36299 = state_36254__$1;(statearr_36264_36299[1] = 10);
} else
{var statearr_36265_36300 = state_36254__$1;(statearr_36265_36300[1] = 11);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 9))
{var inst_36247 = (state_36254[2]);var state_36254__$1 = (function (){var statearr_36266 = state_36254;(statearr_36266[12] = inst_36247);
return statearr_36266;
})();var statearr_36267_36301 = state_36254__$1;(statearr_36267_36301[2] = null);
(statearr_36267_36301[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 10))
{var inst_36214 = (state_36254[8]);var inst_36212 = (state_36254[11]);var inst_36219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36212,inst_36214);var state_36254__$1 = state_36254;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36254__$1,13,out,inst_36219);
} else
{if((state_val_36255 === 11))
{var inst_36225 = (state_36254[13]);var inst_36211 = (state_36254[10]);var inst_36225__$1 = cljs.core.seq(inst_36211);var state_36254__$1 = (function (){var statearr_36271 = state_36254;(statearr_36271[13] = inst_36225__$1);
return statearr_36271;
})();if(inst_36225__$1)
{var statearr_36272_36302 = state_36254__$1;(statearr_36272_36302[1] = 14);
} else
{var statearr_36273_36303 = state_36254__$1;(statearr_36273_36303[1] = 15);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 12))
{var inst_36245 = (state_36254[2]);var state_36254__$1 = state_36254;var statearr_36274_36304 = state_36254__$1;(statearr_36274_36304[2] = inst_36245);
(statearr_36274_36304[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 13))
{var inst_36214 = (state_36254[8]);var inst_36213 = (state_36254[9]);var inst_36211 = (state_36254[10]);var inst_36212 = (state_36254[11]);var inst_36221 = (state_36254[2]);var inst_36222 = (inst_36214 + 1);var tmp36268 = inst_36213;var tmp36269 = inst_36211;var tmp36270 = inst_36212;var inst_36211__$1 = tmp36269;var inst_36212__$1 = tmp36270;var inst_36213__$1 = tmp36268;var inst_36214__$1 = inst_36222;var state_36254__$1 = (function (){var statearr_36275 = state_36254;(statearr_36275[14] = inst_36221);
(statearr_36275[8] = inst_36214__$1);
(statearr_36275[9] = inst_36213__$1);
(statearr_36275[10] = inst_36211__$1);
(statearr_36275[11] = inst_36212__$1);
return statearr_36275;
})();var statearr_36276_36305 = state_36254__$1;(statearr_36276_36305[2] = null);
(statearr_36276_36305[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 14))
{var inst_36225 = (state_36254[13]);var inst_36227 = cljs.core.chunked_seq_QMARK_(inst_36225);var state_36254__$1 = state_36254;if(inst_36227)
{var statearr_36277_36306 = state_36254__$1;(statearr_36277_36306[1] = 17);
} else
{var statearr_36278_36307 = state_36254__$1;(statearr_36278_36307[1] = 18);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 15))
{var state_36254__$1 = state_36254;var statearr_36279_36308 = state_36254__$1;(statearr_36279_36308[2] = null);
(statearr_36279_36308[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 16))
{var inst_36243 = (state_36254[2]);var state_36254__$1 = state_36254;var statearr_36280_36309 = state_36254__$1;(statearr_36280_36309[2] = inst_36243);
(statearr_36280_36309[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 17))
{var inst_36225 = (state_36254[13]);var inst_36229 = cljs.core.chunk_first(inst_36225);var inst_36230 = cljs.core.chunk_rest(inst_36225);var inst_36231 = cljs.core.count(inst_36229);var inst_36211 = inst_36230;var inst_36212 = inst_36229;var inst_36213 = inst_36231;var inst_36214 = 0;var state_36254__$1 = (function (){var statearr_36281 = state_36254;(statearr_36281[8] = inst_36214);
(statearr_36281[9] = inst_36213);
(statearr_36281[10] = inst_36211);
(statearr_36281[11] = inst_36212);
return statearr_36281;
})();var statearr_36282_36310 = state_36254__$1;(statearr_36282_36310[2] = null);
(statearr_36282_36310[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 18))
{var inst_36225 = (state_36254[13]);var inst_36234 = cljs.core.first(inst_36225);var state_36254__$1 = state_36254;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36254__$1,20,out,inst_36234);
} else
{if((state_val_36255 === 19))
{var inst_36240 = (state_36254[2]);var state_36254__$1 = state_36254;var statearr_36283_36311 = state_36254__$1;(statearr_36283_36311[2] = inst_36240);
(statearr_36283_36311[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36255 === 20))
{var inst_36225 = (state_36254[13]);var inst_36236 = (state_36254[2]);var inst_36237 = cljs.core.next(inst_36225);var inst_36211 = inst_36237;var inst_36212 = null;var inst_36213 = 0;var inst_36214 = 0;var state_36254__$1 = (function (){var statearr_36284 = state_36254;(statearr_36284[15] = inst_36236);
(statearr_36284[8] = inst_36214);
(statearr_36284[9] = inst_36213);
(statearr_36284[10] = inst_36211);
(statearr_36284[11] = inst_36212);
return statearr_36284;
})();var statearr_36285_36312 = state_36254__$1;(statearr_36285_36312[2] = null);
(statearr_36285_36312[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_36289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36289[0] = state_machine__5548__auto__);
(statearr_36289[1] = 1);
return statearr_36289;
});
var state_machine__5548__auto____1 = (function (state_36254){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36254);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36290){if((e36290 instanceof Object))
{var ex__5551__auto__ = e36290;var statearr_36291_36313 = state_36254;(statearr_36291_36313[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36254);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36314 = state_36254;
state_36254 = G__36314;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36254){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36292 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36292;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___36395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36374){var state_val_36375 = (state_36374[1]);if((state_val_36375 === 1))
{var state_36374__$1 = state_36374;var statearr_36376_36396 = state_36374__$1;(statearr_36376_36396[2] = null);
(statearr_36376_36396[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36375 === 2))
{var state_36374__$1 = state_36374;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36374__$1,4,from);
} else
{if((state_val_36375 === 3))
{var inst_36372 = (state_36374[2]);var state_36374__$1 = state_36374;return cljs.core.async.impl.ioc_helpers.return_chan(state_36374__$1,inst_36372);
} else
{if((state_val_36375 === 4))
{var inst_36357 = (state_36374[7]);var inst_36357__$1 = (state_36374[2]);var inst_36358 = (inst_36357__$1 == null);var state_36374__$1 = (function (){var statearr_36377 = state_36374;(statearr_36377[7] = inst_36357__$1);
return statearr_36377;
})();if(cljs.core.truth_(inst_36358))
{var statearr_36378_36397 = state_36374__$1;(statearr_36378_36397[1] = 5);
} else
{var statearr_36379_36398 = state_36374__$1;(statearr_36379_36398[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36375 === 5))
{var state_36374__$1 = state_36374;if(cljs.core.truth_(close_QMARK_))
{var statearr_36380_36399 = state_36374__$1;(statearr_36380_36399[1] = 8);
} else
{var statearr_36381_36400 = state_36374__$1;(statearr_36381_36400[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36375 === 6))
{var inst_36357 = (state_36374[7]);var state_36374__$1 = state_36374;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36374__$1,11,to,inst_36357);
} else
{if((state_val_36375 === 7))
{var inst_36370 = (state_36374[2]);var state_36374__$1 = state_36374;var statearr_36382_36401 = state_36374__$1;(statearr_36382_36401[2] = inst_36370);
(statearr_36382_36401[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36375 === 8))
{var inst_36361 = cljs.core.async.close_BANG_(to);var state_36374__$1 = state_36374;var statearr_36383_36402 = state_36374__$1;(statearr_36383_36402[2] = inst_36361);
(statearr_36383_36402[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36375 === 9))
{var state_36374__$1 = state_36374;var statearr_36384_36403 = state_36374__$1;(statearr_36384_36403[2] = null);
(statearr_36384_36403[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36375 === 10))
{var inst_36364 = (state_36374[2]);var state_36374__$1 = state_36374;var statearr_36385_36404 = state_36374__$1;(statearr_36385_36404[2] = inst_36364);
(statearr_36385_36404[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36375 === 11))
{var inst_36367 = (state_36374[2]);var state_36374__$1 = (function (){var statearr_36386 = state_36374;(statearr_36386[8] = inst_36367);
return statearr_36386;
})();var statearr_36387_36405 = state_36374__$1;(statearr_36387_36405[2] = null);
(statearr_36387_36405[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_36391 = [null,null,null,null,null,null,null,null,null];(statearr_36391[0] = state_machine__5548__auto__);
(statearr_36391[1] = 1);
return statearr_36391;
});
var state_machine__5548__auto____1 = (function (state_36374){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36374);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36392){if((e36392 instanceof Object))
{var ex__5551__auto__ = e36392;var statearr_36393_36406 = state_36374;(statearr_36393_36406[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36374);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36407 = state_36374;
state_36374 = G__36407;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36374){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36394 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36395);
return statearr_36394;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5562__auto___36494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36472){var state_val_36473 = (state_36472[1]);if((state_val_36473 === 1))
{var state_36472__$1 = state_36472;var statearr_36474_36495 = state_36472__$1;(statearr_36474_36495[2] = null);
(statearr_36474_36495[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36473 === 2))
{var state_36472__$1 = state_36472;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36472__$1,4,ch);
} else
{if((state_val_36473 === 3))
{var inst_36470 = (state_36472[2]);var state_36472__$1 = state_36472;return cljs.core.async.impl.ioc_helpers.return_chan(state_36472__$1,inst_36470);
} else
{if((state_val_36473 === 4))
{var inst_36453 = (state_36472[7]);var inst_36453__$1 = (state_36472[2]);var inst_36454 = (inst_36453__$1 == null);var state_36472__$1 = (function (){var statearr_36475 = state_36472;(statearr_36475[7] = inst_36453__$1);
return statearr_36475;
})();if(cljs.core.truth_(inst_36454))
{var statearr_36476_36496 = state_36472__$1;(statearr_36476_36496[1] = 5);
} else
{var statearr_36477_36497 = state_36472__$1;(statearr_36477_36497[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36473 === 5))
{var inst_36456 = cljs.core.async.close_BANG_(tc);var inst_36457 = cljs.core.async.close_BANG_(fc);var state_36472__$1 = (function (){var statearr_36478 = state_36472;(statearr_36478[8] = inst_36456);
return statearr_36478;
})();var statearr_36479_36498 = state_36472__$1;(statearr_36479_36498[2] = inst_36457);
(statearr_36479_36498[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36473 === 6))
{var inst_36453 = (state_36472[7]);var inst_36459 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36453) : p.call(null,inst_36453));var state_36472__$1 = state_36472;if(cljs.core.truth_(inst_36459))
{var statearr_36480_36499 = state_36472__$1;(statearr_36480_36499[1] = 9);
} else
{var statearr_36481_36500 = state_36472__$1;(statearr_36481_36500[1] = 10);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36473 === 7))
{var inst_36468 = (state_36472[2]);var state_36472__$1 = state_36472;var statearr_36482_36501 = state_36472__$1;(statearr_36482_36501[2] = inst_36468);
(statearr_36482_36501[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36473 === 8))
{var inst_36465 = (state_36472[2]);var state_36472__$1 = (function (){var statearr_36483 = state_36472;(statearr_36483[9] = inst_36465);
return statearr_36483;
})();var statearr_36484_36502 = state_36472__$1;(statearr_36484_36502[2] = null);
(statearr_36484_36502[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36473 === 9))
{var state_36472__$1 = state_36472;var statearr_36485_36503 = state_36472__$1;(statearr_36485_36503[2] = tc);
(statearr_36485_36503[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36473 === 10))
{var state_36472__$1 = state_36472;var statearr_36486_36504 = state_36472__$1;(statearr_36486_36504[2] = fc);
(statearr_36486_36504[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36473 === 11))
{var inst_36453 = (state_36472[7]);var inst_36463 = (state_36472[2]);var state_36472__$1 = state_36472;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36472__$1,8,inst_36463,inst_36453);
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
var state_machine__5548__auto____0 = (function (){var statearr_36490 = [null,null,null,null,null,null,null,null,null,null];(statearr_36490[0] = state_machine__5548__auto__);
(statearr_36490[1] = 1);
return statearr_36490;
});
var state_machine__5548__auto____1 = (function (state_36472){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36472);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36491){if((e36491 instanceof Object))
{var ex__5551__auto__ = e36491;var statearr_36492_36505 = state_36472;(statearr_36492_36505[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36472);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36506 = state_36472;
state_36472 = G__36506;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36472){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36493 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36494);
return statearr_36493;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36553){var state_val_36554 = (state_36553[1]);if((state_val_36554 === 7))
{var inst_36549 = (state_36553[2]);var state_36553__$1 = state_36553;var statearr_36555_36571 = state_36553__$1;(statearr_36555_36571[2] = inst_36549);
(statearr_36555_36571[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36554 === 6))
{var inst_36542 = (state_36553[7]);var inst_36539 = (state_36553[8]);var inst_36546 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36539,inst_36542) : f.call(null,inst_36539,inst_36542));var inst_36539__$1 = inst_36546;var state_36553__$1 = (function (){var statearr_36556 = state_36553;(statearr_36556[8] = inst_36539__$1);
return statearr_36556;
})();var statearr_36557_36572 = state_36553__$1;(statearr_36557_36572[2] = null);
(statearr_36557_36572[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36554 === 5))
{var inst_36539 = (state_36553[8]);var state_36553__$1 = state_36553;var statearr_36558_36573 = state_36553__$1;(statearr_36558_36573[2] = inst_36539);
(statearr_36558_36573[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36554 === 4))
{var inst_36542 = (state_36553[7]);var inst_36542__$1 = (state_36553[2]);var inst_36543 = (inst_36542__$1 == null);var state_36553__$1 = (function (){var statearr_36559 = state_36553;(statearr_36559[7] = inst_36542__$1);
return statearr_36559;
})();if(cljs.core.truth_(inst_36543))
{var statearr_36560_36574 = state_36553__$1;(statearr_36560_36574[1] = 5);
} else
{var statearr_36561_36575 = state_36553__$1;(statearr_36561_36575[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36554 === 3))
{var inst_36551 = (state_36553[2]);var state_36553__$1 = state_36553;return cljs.core.async.impl.ioc_helpers.return_chan(state_36553__$1,inst_36551);
} else
{if((state_val_36554 === 2))
{var state_36553__$1 = state_36553;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36553__$1,4,ch);
} else
{if((state_val_36554 === 1))
{var inst_36539 = init;var state_36553__$1 = (function (){var statearr_36562 = state_36553;(statearr_36562[8] = inst_36539);
return statearr_36562;
})();var statearr_36563_36576 = state_36553__$1;(statearr_36563_36576[2] = null);
(statearr_36563_36576[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_36567 = [null,null,null,null,null,null,null,null,null];(statearr_36567[0] = state_machine__5548__auto__);
(statearr_36567[1] = 1);
return statearr_36567;
});
var state_machine__5548__auto____1 = (function (state_36553){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36553);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36568){if((e36568 instanceof Object))
{var ex__5551__auto__ = e36568;var statearr_36569_36577 = state_36553;(statearr_36569_36577[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36553);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36578 = state_36553;
state_36553 = G__36578;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36553){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36570 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36570;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36640){var state_val_36641 = (state_36640[1]);if((state_val_36641 === 1))
{var inst_36620 = cljs.core.seq(coll);var inst_36621 = inst_36620;var state_36640__$1 = (function (){var statearr_36642 = state_36640;(statearr_36642[7] = inst_36621);
return statearr_36642;
})();var statearr_36643_36661 = state_36640__$1;(statearr_36643_36661[2] = null);
(statearr_36643_36661[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36641 === 2))
{var inst_36621 = (state_36640[7]);var state_36640__$1 = state_36640;if(cljs.core.truth_(inst_36621))
{var statearr_36644_36662 = state_36640__$1;(statearr_36644_36662[1] = 4);
} else
{var statearr_36645_36663 = state_36640__$1;(statearr_36645_36663[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36641 === 3))
{var inst_36638 = (state_36640[2]);var state_36640__$1 = state_36640;return cljs.core.async.impl.ioc_helpers.return_chan(state_36640__$1,inst_36638);
} else
{if((state_val_36641 === 4))
{var inst_36621 = (state_36640[7]);var inst_36624 = cljs.core.first(inst_36621);var state_36640__$1 = state_36640;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36640__$1,7,ch,inst_36624);
} else
{if((state_val_36641 === 5))
{var state_36640__$1 = state_36640;if(cljs.core.truth_(close_QMARK_))
{var statearr_36646_36664 = state_36640__$1;(statearr_36646_36664[1] = 8);
} else
{var statearr_36647_36665 = state_36640__$1;(statearr_36647_36665[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_36641 === 6))
{var inst_36636 = (state_36640[2]);var state_36640__$1 = state_36640;var statearr_36648_36666 = state_36640__$1;(statearr_36648_36666[2] = inst_36636);
(statearr_36648_36666[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36641 === 7))
{var inst_36621 = (state_36640[7]);var inst_36626 = (state_36640[2]);var inst_36627 = cljs.core.next(inst_36621);var inst_36621__$1 = inst_36627;var state_36640__$1 = (function (){var statearr_36649 = state_36640;(statearr_36649[8] = inst_36626);
(statearr_36649[7] = inst_36621__$1);
return statearr_36649;
})();var statearr_36650_36667 = state_36640__$1;(statearr_36650_36667[2] = null);
(statearr_36650_36667[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36641 === 8))
{var inst_36631 = cljs.core.async.close_BANG_(ch);var state_36640__$1 = state_36640;var statearr_36651_36668 = state_36640__$1;(statearr_36651_36668[2] = inst_36631);
(statearr_36651_36668[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36641 === 9))
{var state_36640__$1 = state_36640;var statearr_36652_36669 = state_36640__$1;(statearr_36652_36669[2] = null);
(statearr_36652_36669[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_36641 === 10))
{var inst_36634 = (state_36640[2]);var state_36640__$1 = state_36640;var statearr_36653_36670 = state_36640__$1;(statearr_36653_36670[2] = inst_36634);
(statearr_36653_36670[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_36657 = [null,null,null,null,null,null,null,null,null];(statearr_36657[0] = state_machine__5548__auto__);
(statearr_36657[1] = 1);
return statearr_36657;
});
var state_machine__5548__auto____1 = (function (state_36640){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36640);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36658){if((e36658 instanceof Object))
{var ex__5551__auto__ = e36658;var statearr_36659_36671 = state_36640;(statearr_36659_36671[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36640);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e36658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__36672 = state_36640;
state_36640 = G__36672;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36640){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36660 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36660;
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
cljs.core.async.Mux = (function (){var obj36674 = {};return obj36674;
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
cljs.core.async.Mult = (function (){var obj36676 = {};return obj36676;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t36900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36900 = (function (cs,ch,mult,meta36901){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36901 = meta36901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36900.cljs$lang$type = true;
cljs.core.async.t36900.cljs$lang$ctorStr = "cljs.core.async/t36900";
cljs.core.async.t36900.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36900");
});})(cs))
;
cljs.core.async.t36900.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t36900.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t36900.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t36900.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t36900.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t36900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36902){var self__ = this;
var _36902__$1 = this;return self__.meta36901;
});})(cs))
;
cljs.core.async.t36900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36902,meta36901__$1){var self__ = this;
var _36902__$1 = this;return (new cljs.core.async.t36900(self__.cs,self__.ch,self__.mult,meta36901__$1));
});})(cs))
;
cljs.core.async.__GT_t36900 = ((function (cs){
return (function __GT_t36900(cs__$1,ch__$1,mult__$1,meta36901){return (new cljs.core.async.t36900(cs__$1,ch__$1,mult__$1,meta36901));
});})(cs))
;
}
return (new cljs.core.async.t36900(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___37123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37037){var state_val_37038 = (state_37037[1]);if((state_val_37038 === 32))
{var inst_36981 = (state_37037[7]);var inst_36905 = (state_37037[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37037,31,Object,null,30);var inst_36988 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36981,inst_36905,done);var state_37037__$1 = state_37037;var statearr_37039_37124 = state_37037__$1;(statearr_37039_37124[2] = inst_36988);
cljs.core.async.impl.ioc_helpers.process_exception(state_37037__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 1))
{var state_37037__$1 = state_37037;var statearr_37040_37125 = state_37037__$1;(statearr_37040_37125[2] = null);
(statearr_37040_37125[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 33))
{var inst_36994 = (state_37037[9]);var inst_36996 = cljs.core.chunked_seq_QMARK_(inst_36994);var state_37037__$1 = state_37037;if(inst_36996)
{var statearr_37041_37126 = state_37037__$1;(statearr_37041_37126[1] = 36);
} else
{var statearr_37042_37127 = state_37037__$1;(statearr_37042_37127[1] = 37);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 2))
{var state_37037__$1 = state_37037;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37037__$1,4,ch);
} else
{if((state_val_37038 === 34))
{var state_37037__$1 = state_37037;var statearr_37043_37128 = state_37037__$1;(statearr_37043_37128[2] = null);
(statearr_37043_37128[1] = 35);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 3))
{var inst_37035 = (state_37037[2]);var state_37037__$1 = state_37037;return cljs.core.async.impl.ioc_helpers.return_chan(state_37037__$1,inst_37035);
} else
{if((state_val_37038 === 35))
{var inst_37019 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37044_37129 = state_37037__$1;(statearr_37044_37129[2] = inst_37019);
(statearr_37044_37129[1] = 29);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 4))
{var inst_36905 = (state_37037[8]);var inst_36905__$1 = (state_37037[2]);var inst_36906 = (inst_36905__$1 == null);var state_37037__$1 = (function (){var statearr_37045 = state_37037;(statearr_37045[8] = inst_36905__$1);
return statearr_37045;
})();if(cljs.core.truth_(inst_36906))
{var statearr_37046_37130 = state_37037__$1;(statearr_37046_37130[1] = 5);
} else
{var statearr_37047_37131 = state_37037__$1;(statearr_37047_37131[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 36))
{var inst_36994 = (state_37037[9]);var inst_36998 = cljs.core.chunk_first(inst_36994);var inst_36999 = cljs.core.chunk_rest(inst_36994);var inst_37000 = cljs.core.count(inst_36998);var inst_36973 = inst_36999;var inst_36974 = inst_36998;var inst_36975 = inst_37000;var inst_36976 = 0;var state_37037__$1 = (function (){var statearr_37048 = state_37037;(statearr_37048[10] = inst_36976);
(statearr_37048[11] = inst_36975);
(statearr_37048[12] = inst_36974);
(statearr_37048[13] = inst_36973);
return statearr_37048;
})();var statearr_37049_37132 = state_37037__$1;(statearr_37049_37132[2] = null);
(statearr_37049_37132[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 5))
{var inst_36912 = cljs.core.deref(cs);var inst_36913 = cljs.core.seq(inst_36912);var inst_36914 = inst_36913;var inst_36915 = null;var inst_36916 = 0;var inst_36917 = 0;var state_37037__$1 = (function (){var statearr_37050 = state_37037;(statearr_37050[14] = inst_36915);
(statearr_37050[15] = inst_36914);
(statearr_37050[16] = inst_36917);
(statearr_37050[17] = inst_36916);
return statearr_37050;
})();var statearr_37051_37133 = state_37037__$1;(statearr_37051_37133[2] = null);
(statearr_37051_37133[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 37))
{var inst_36994 = (state_37037[9]);var inst_37003 = cljs.core.first(inst_36994);var state_37037__$1 = (function (){var statearr_37052 = state_37037;(statearr_37052[18] = inst_37003);
return statearr_37052;
})();var statearr_37053_37134 = state_37037__$1;(statearr_37053_37134[2] = null);
(statearr_37053_37134[1] = 41);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 6))
{var inst_36965 = (state_37037[19]);var inst_36964 = cljs.core.deref(cs);var inst_36965__$1 = cljs.core.keys(inst_36964);var inst_36966 = cljs.core.count(inst_36965__$1);var inst_36967 = cljs.core.reset_BANG_(dctr,inst_36966);var inst_36972 = cljs.core.seq(inst_36965__$1);var inst_36973 = inst_36972;var inst_36974 = null;var inst_36975 = 0;var inst_36976 = 0;var state_37037__$1 = (function (){var statearr_37054 = state_37037;(statearr_37054[10] = inst_36976);
(statearr_37054[11] = inst_36975);
(statearr_37054[19] = inst_36965__$1);
(statearr_37054[12] = inst_36974);
(statearr_37054[13] = inst_36973);
(statearr_37054[20] = inst_36967);
return statearr_37054;
})();var statearr_37055_37135 = state_37037__$1;(statearr_37055_37135[2] = null);
(statearr_37055_37135[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 38))
{var inst_37016 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37056_37136 = state_37037__$1;(statearr_37056_37136[2] = inst_37016);
(statearr_37056_37136[1] = 35);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 7))
{var inst_37033 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37057_37137 = state_37037__$1;(statearr_37057_37137[2] = inst_37033);
(statearr_37057_37137[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 39))
{var inst_36994 = (state_37037[9]);var inst_37012 = (state_37037[2]);var inst_37013 = cljs.core.next(inst_36994);var inst_36973 = inst_37013;var inst_36974 = null;var inst_36975 = 0;var inst_36976 = 0;var state_37037__$1 = (function (){var statearr_37058 = state_37037;(statearr_37058[10] = inst_36976);
(statearr_37058[21] = inst_37012);
(statearr_37058[11] = inst_36975);
(statearr_37058[12] = inst_36974);
(statearr_37058[13] = inst_36973);
return statearr_37058;
})();var statearr_37059_37138 = state_37037__$1;(statearr_37059_37138[2] = null);
(statearr_37059_37138[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 8))
{var inst_36917 = (state_37037[16]);var inst_36916 = (state_37037[17]);var inst_36919 = (inst_36917 < inst_36916);var inst_36920 = inst_36919;var state_37037__$1 = state_37037;if(cljs.core.truth_(inst_36920))
{var statearr_37060_37139 = state_37037__$1;(statearr_37060_37139[1] = 10);
} else
{var statearr_37061_37140 = state_37037__$1;(statearr_37061_37140[1] = 11);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 40))
{var inst_37003 = (state_37037[18]);var inst_37004 = (state_37037[2]);var inst_37005 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37006 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37003);var state_37037__$1 = (function (){var statearr_37062 = state_37037;(statearr_37062[22] = inst_37005);
(statearr_37062[23] = inst_37004);
return statearr_37062;
})();var statearr_37063_37141 = state_37037__$1;(statearr_37063_37141[2] = inst_37006);
cljs.core.async.impl.ioc_helpers.process_exception(state_37037__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 9))
{var inst_36962 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37064_37142 = state_37037__$1;(statearr_37064_37142[2] = inst_36962);
(statearr_37064_37142[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 41))
{var inst_37003 = (state_37037[18]);var inst_36905 = (state_37037[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37037,40,Object,null,39);var inst_37010 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37003,inst_36905,done);var state_37037__$1 = state_37037;var statearr_37065_37143 = state_37037__$1;(statearr_37065_37143[2] = inst_37010);
cljs.core.async.impl.ioc_helpers.process_exception(state_37037__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 10))
{var inst_36915 = (state_37037[14]);var inst_36917 = (state_37037[16]);var inst_36923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36915,inst_36917);var inst_36924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36923,0,null);var inst_36925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36923,1,null);var state_37037__$1 = (function (){var statearr_37066 = state_37037;(statearr_37066[24] = inst_36924);
return statearr_37066;
})();if(cljs.core.truth_(inst_36925))
{var statearr_37067_37144 = state_37037__$1;(statearr_37067_37144[1] = 13);
} else
{var statearr_37068_37145 = state_37037__$1;(statearr_37068_37145[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 42))
{var state_37037__$1 = state_37037;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37037__$1,45,dchan);
} else
{if((state_val_37038 === 11))
{var inst_36914 = (state_37037[15]);var inst_36934 = (state_37037[25]);var inst_36934__$1 = cljs.core.seq(inst_36914);var state_37037__$1 = (function (){var statearr_37069 = state_37037;(statearr_37069[25] = inst_36934__$1);
return statearr_37069;
})();if(inst_36934__$1)
{var statearr_37070_37146 = state_37037__$1;(statearr_37070_37146[1] = 16);
} else
{var statearr_37071_37147 = state_37037__$1;(statearr_37071_37147[1] = 17);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 43))
{var state_37037__$1 = state_37037;var statearr_37072_37148 = state_37037__$1;(statearr_37072_37148[2] = null);
(statearr_37072_37148[1] = 44);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 12))
{var inst_36960 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37073_37149 = state_37037__$1;(statearr_37073_37149[2] = inst_36960);
(statearr_37073_37149[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 44))
{var inst_37030 = (state_37037[2]);var state_37037__$1 = (function (){var statearr_37074 = state_37037;(statearr_37074[26] = inst_37030);
return statearr_37074;
})();var statearr_37075_37150 = state_37037__$1;(statearr_37075_37150[2] = null);
(statearr_37075_37150[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 13))
{var inst_36924 = (state_37037[24]);var inst_36927 = cljs.core.async.close_BANG_(inst_36924);var state_37037__$1 = state_37037;var statearr_37076_37151 = state_37037__$1;(statearr_37076_37151[2] = inst_36927);
(statearr_37076_37151[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 45))
{var inst_37027 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37080_37152 = state_37037__$1;(statearr_37080_37152[2] = inst_37027);
(statearr_37080_37152[1] = 44);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 14))
{var state_37037__$1 = state_37037;var statearr_37081_37153 = state_37037__$1;(statearr_37081_37153[2] = null);
(statearr_37081_37153[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 15))
{var inst_36915 = (state_37037[14]);var inst_36914 = (state_37037[15]);var inst_36917 = (state_37037[16]);var inst_36916 = (state_37037[17]);var inst_36930 = (state_37037[2]);var inst_36931 = (inst_36917 + 1);var tmp37077 = inst_36915;var tmp37078 = inst_36914;var tmp37079 = inst_36916;var inst_36914__$1 = tmp37078;var inst_36915__$1 = tmp37077;var inst_36916__$1 = tmp37079;var inst_36917__$1 = inst_36931;var state_37037__$1 = (function (){var statearr_37082 = state_37037;(statearr_37082[14] = inst_36915__$1);
(statearr_37082[15] = inst_36914__$1);
(statearr_37082[16] = inst_36917__$1);
(statearr_37082[17] = inst_36916__$1);
(statearr_37082[27] = inst_36930);
return statearr_37082;
})();var statearr_37083_37154 = state_37037__$1;(statearr_37083_37154[2] = null);
(statearr_37083_37154[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 16))
{var inst_36934 = (state_37037[25]);var inst_36936 = cljs.core.chunked_seq_QMARK_(inst_36934);var state_37037__$1 = state_37037;if(inst_36936)
{var statearr_37084_37155 = state_37037__$1;(statearr_37084_37155[1] = 19);
} else
{var statearr_37085_37156 = state_37037__$1;(statearr_37085_37156[1] = 20);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 17))
{var state_37037__$1 = state_37037;var statearr_37086_37157 = state_37037__$1;(statearr_37086_37157[2] = null);
(statearr_37086_37157[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 18))
{var inst_36958 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37087_37158 = state_37037__$1;(statearr_37087_37158[2] = inst_36958);
(statearr_37087_37158[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 19))
{var inst_36934 = (state_37037[25]);var inst_36938 = cljs.core.chunk_first(inst_36934);var inst_36939 = cljs.core.chunk_rest(inst_36934);var inst_36940 = cljs.core.count(inst_36938);var inst_36914 = inst_36939;var inst_36915 = inst_36938;var inst_36916 = inst_36940;var inst_36917 = 0;var state_37037__$1 = (function (){var statearr_37088 = state_37037;(statearr_37088[14] = inst_36915);
(statearr_37088[15] = inst_36914);
(statearr_37088[16] = inst_36917);
(statearr_37088[17] = inst_36916);
return statearr_37088;
})();var statearr_37089_37159 = state_37037__$1;(statearr_37089_37159[2] = null);
(statearr_37089_37159[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 20))
{var inst_36934 = (state_37037[25]);var inst_36944 = cljs.core.first(inst_36934);var inst_36945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36944,0,null);var inst_36946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36944,1,null);var state_37037__$1 = (function (){var statearr_37090 = state_37037;(statearr_37090[28] = inst_36945);
return statearr_37090;
})();if(cljs.core.truth_(inst_36946))
{var statearr_37091_37160 = state_37037__$1;(statearr_37091_37160[1] = 22);
} else
{var statearr_37092_37161 = state_37037__$1;(statearr_37092_37161[1] = 23);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 21))
{var inst_36955 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37093_37162 = state_37037__$1;(statearr_37093_37162[2] = inst_36955);
(statearr_37093_37162[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 22))
{var inst_36945 = (state_37037[28]);var inst_36948 = cljs.core.async.close_BANG_(inst_36945);var state_37037__$1 = state_37037;var statearr_37094_37163 = state_37037__$1;(statearr_37094_37163[2] = inst_36948);
(statearr_37094_37163[1] = 24);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 23))
{var state_37037__$1 = state_37037;var statearr_37095_37164 = state_37037__$1;(statearr_37095_37164[2] = null);
(statearr_37095_37164[1] = 24);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 24))
{var inst_36934 = (state_37037[25]);var inst_36951 = (state_37037[2]);var inst_36952 = cljs.core.next(inst_36934);var inst_36914 = inst_36952;var inst_36915 = null;var inst_36916 = 0;var inst_36917 = 0;var state_37037__$1 = (function (){var statearr_37096 = state_37037;(statearr_37096[14] = inst_36915);
(statearr_37096[15] = inst_36914);
(statearr_37096[16] = inst_36917);
(statearr_37096[17] = inst_36916);
(statearr_37096[29] = inst_36951);
return statearr_37096;
})();var statearr_37097_37165 = state_37037__$1;(statearr_37097_37165[2] = null);
(statearr_37097_37165[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 25))
{var inst_36976 = (state_37037[10]);var inst_36975 = (state_37037[11]);var inst_36978 = (inst_36976 < inst_36975);var inst_36979 = inst_36978;var state_37037__$1 = state_37037;if(cljs.core.truth_(inst_36979))
{var statearr_37098_37166 = state_37037__$1;(statearr_37098_37166[1] = 27);
} else
{var statearr_37099_37167 = state_37037__$1;(statearr_37099_37167[1] = 28);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 26))
{var inst_36965 = (state_37037[19]);var inst_37023 = (state_37037[2]);var inst_37024 = cljs.core.seq(inst_36965);var state_37037__$1 = (function (){var statearr_37100 = state_37037;(statearr_37100[30] = inst_37023);
return statearr_37100;
})();if(inst_37024)
{var statearr_37101_37168 = state_37037__$1;(statearr_37101_37168[1] = 42);
} else
{var statearr_37102_37169 = state_37037__$1;(statearr_37102_37169[1] = 43);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 27))
{var inst_36976 = (state_37037[10]);var inst_36974 = (state_37037[12]);var inst_36981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36974,inst_36976);var state_37037__$1 = (function (){var statearr_37103 = state_37037;(statearr_37103[7] = inst_36981);
return statearr_37103;
})();var statearr_37104_37170 = state_37037__$1;(statearr_37104_37170[2] = null);
(statearr_37104_37170[1] = 32);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 28))
{var inst_36994 = (state_37037[9]);var inst_36973 = (state_37037[13]);var inst_36994__$1 = cljs.core.seq(inst_36973);var state_37037__$1 = (function (){var statearr_37108 = state_37037;(statearr_37108[9] = inst_36994__$1);
return statearr_37108;
})();if(inst_36994__$1)
{var statearr_37109_37171 = state_37037__$1;(statearr_37109_37171[1] = 33);
} else
{var statearr_37110_37172 = state_37037__$1;(statearr_37110_37172[1] = 34);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 29))
{var inst_37021 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37111_37173 = state_37037__$1;(statearr_37111_37173[2] = inst_37021);
(statearr_37111_37173[1] = 26);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 30))
{var inst_36976 = (state_37037[10]);var inst_36975 = (state_37037[11]);var inst_36974 = (state_37037[12]);var inst_36973 = (state_37037[13]);var inst_36990 = (state_37037[2]);var inst_36991 = (inst_36976 + 1);var tmp37105 = inst_36975;var tmp37106 = inst_36974;var tmp37107 = inst_36973;var inst_36973__$1 = tmp37107;var inst_36974__$1 = tmp37106;var inst_36975__$1 = tmp37105;var inst_36976__$1 = inst_36991;var state_37037__$1 = (function (){var statearr_37112 = state_37037;(statearr_37112[31] = inst_36990);
(statearr_37112[10] = inst_36976__$1);
(statearr_37112[11] = inst_36975__$1);
(statearr_37112[12] = inst_36974__$1);
(statearr_37112[13] = inst_36973__$1);
return statearr_37112;
})();var statearr_37113_37174 = state_37037__$1;(statearr_37113_37174[2] = null);
(statearr_37113_37174[1] = 25);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37038 === 31))
{var inst_36981 = (state_37037[7]);var inst_36982 = (state_37037[2]);var inst_36983 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_36984 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36981);var state_37037__$1 = (function (){var statearr_37114 = state_37037;(statearr_37114[32] = inst_36982);
(statearr_37114[33] = inst_36983);
return statearr_37114;
})();var statearr_37115_37175 = state_37037__$1;(statearr_37115_37175[2] = inst_36984);
cljs.core.async.impl.ioc_helpers.process_exception(state_37037__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_37119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37119[0] = state_machine__5548__auto__);
(statearr_37119[1] = 1);
return statearr_37119;
});
var state_machine__5548__auto____1 = (function (state_37037){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37037);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37120){if((e37120 instanceof Object))
{var ex__5551__auto__ = e37120;var statearr_37121_37176 = state_37037;(statearr_37121_37176[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37037);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37177 = state_37037;
state_37037 = G__37177;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37037){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37122 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37123);
return statearr_37122;
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
cljs.core.async.Mix = (function (){var obj37179 = {};return obj37179;
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
;var m = (function (){if(typeof cljs.core.async.t37289 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37289 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta37290){
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
this.meta37290 = meta37290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37289.cljs$lang$type = true;
cljs.core.async.t37289.cljs$lang$ctorStr = "cljs.core.async/t37289";
cljs.core.async.t37289.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37289");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37289.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37289.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37289.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37289.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37289.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37289.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37289.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37291){var self__ = this;
var _37291__$1 = this;return self__.meta37290;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37291,meta37290__$1){var self__ = this;
var _37291__$1 = this;return (new cljs.core.async.t37289(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta37290__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37289 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37289(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37290){return (new cljs.core.async.t37289(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37290));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37289(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___37398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37356){var state_val_37357 = (state_37356[1]);if((state_val_37357 === 1))
{var inst_37295 = (state_37356[7]);var inst_37295__$1 = calc_state();var inst_37296 = cljs.core.seq_QMARK_(inst_37295__$1);var state_37356__$1 = (function (){var statearr_37358 = state_37356;(statearr_37358[7] = inst_37295__$1);
return statearr_37358;
})();if(inst_37296)
{var statearr_37359_37399 = state_37356__$1;(statearr_37359_37399[1] = 2);
} else
{var statearr_37360_37400 = state_37356__$1;(statearr_37360_37400[1] = 3);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 2))
{var inst_37295 = (state_37356[7]);var inst_37298 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37295);var state_37356__$1 = state_37356;var statearr_37361_37401 = state_37356__$1;(statearr_37361_37401[2] = inst_37298);
(statearr_37361_37401[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 3))
{var inst_37295 = (state_37356[7]);var state_37356__$1 = state_37356;var statearr_37362_37402 = state_37356__$1;(statearr_37362_37402[2] = inst_37295);
(statearr_37362_37402[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 4))
{var inst_37295 = (state_37356[7]);var inst_37301 = (state_37356[2]);var inst_37302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37301,cljs.core.constant$keyword$563);var inst_37303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37301,cljs.core.constant$keyword$562);var inst_37304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37301,cljs.core.constant$keyword$561);var inst_37305 = inst_37295;var state_37356__$1 = (function (){var statearr_37363 = state_37356;(statearr_37363[8] = inst_37305);
(statearr_37363[9] = inst_37304);
(statearr_37363[10] = inst_37303);
(statearr_37363[11] = inst_37302);
return statearr_37363;
})();var statearr_37364_37403 = state_37356__$1;(statearr_37364_37403[2] = null);
(statearr_37364_37403[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 5))
{var inst_37305 = (state_37356[8]);var inst_37308 = cljs.core.seq_QMARK_(inst_37305);var state_37356__$1 = state_37356;if(inst_37308)
{var statearr_37365_37404 = state_37356__$1;(statearr_37365_37404[1] = 7);
} else
{var statearr_37366_37405 = state_37356__$1;(statearr_37366_37405[1] = 8);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 6))
{var inst_37354 = (state_37356[2]);var state_37356__$1 = state_37356;return cljs.core.async.impl.ioc_helpers.return_chan(state_37356__$1,inst_37354);
} else
{if((state_val_37357 === 7))
{var inst_37305 = (state_37356[8]);var inst_37310 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37305);var state_37356__$1 = state_37356;var statearr_37367_37406 = state_37356__$1;(statearr_37367_37406[2] = inst_37310);
(statearr_37367_37406[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 8))
{var inst_37305 = (state_37356[8]);var state_37356__$1 = state_37356;var statearr_37368_37407 = state_37356__$1;(statearr_37368_37407[2] = inst_37305);
(statearr_37368_37407[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 9))
{var inst_37313 = (state_37356[12]);var inst_37313__$1 = (state_37356[2]);var inst_37314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37313__$1,cljs.core.constant$keyword$563);var inst_37315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37313__$1,cljs.core.constant$keyword$562);var inst_37316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37313__$1,cljs.core.constant$keyword$561);var state_37356__$1 = (function (){var statearr_37369 = state_37356;(statearr_37369[13] = inst_37316);
(statearr_37369[14] = inst_37315);
(statearr_37369[12] = inst_37313__$1);
return statearr_37369;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37356__$1,10,inst_37314);
} else
{if((state_val_37357 === 10))
{var inst_37320 = (state_37356[15]);var inst_37321 = (state_37356[16]);var inst_37319 = (state_37356[2]);var inst_37320__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37319,0,null);var inst_37321__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37319,1,null);var inst_37322 = (inst_37320__$1 == null);var inst_37323 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37321__$1,change);var inst_37324 = (inst_37322) || (inst_37323);var state_37356__$1 = (function (){var statearr_37370 = state_37356;(statearr_37370[15] = inst_37320__$1);
(statearr_37370[16] = inst_37321__$1);
return statearr_37370;
})();if(cljs.core.truth_(inst_37324))
{var statearr_37371_37408 = state_37356__$1;(statearr_37371_37408[1] = 11);
} else
{var statearr_37372_37409 = state_37356__$1;(statearr_37372_37409[1] = 12);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 11))
{var inst_37320 = (state_37356[15]);var inst_37326 = (inst_37320 == null);var state_37356__$1 = state_37356;if(cljs.core.truth_(inst_37326))
{var statearr_37373_37410 = state_37356__$1;(statearr_37373_37410[1] = 14);
} else
{var statearr_37374_37411 = state_37356__$1;(statearr_37374_37411[1] = 15);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 12))
{var inst_37321 = (state_37356[16]);var inst_37316 = (state_37356[13]);var inst_37335 = (state_37356[17]);var inst_37335__$1 = (inst_37316.cljs$core$IFn$_invoke$arity$1 ? inst_37316.cljs$core$IFn$_invoke$arity$1(inst_37321) : inst_37316.call(null,inst_37321));var state_37356__$1 = (function (){var statearr_37375 = state_37356;(statearr_37375[17] = inst_37335__$1);
return statearr_37375;
})();if(cljs.core.truth_(inst_37335__$1))
{var statearr_37376_37412 = state_37356__$1;(statearr_37376_37412[1] = 17);
} else
{var statearr_37377_37413 = state_37356__$1;(statearr_37377_37413[1] = 18);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 13))
{var inst_37352 = (state_37356[2]);var state_37356__$1 = state_37356;var statearr_37378_37414 = state_37356__$1;(statearr_37378_37414[2] = inst_37352);
(statearr_37378_37414[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 14))
{var inst_37321 = (state_37356[16]);var inst_37328 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37321);var state_37356__$1 = state_37356;var statearr_37379_37415 = state_37356__$1;(statearr_37379_37415[2] = inst_37328);
(statearr_37379_37415[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 15))
{var state_37356__$1 = state_37356;var statearr_37380_37416 = state_37356__$1;(statearr_37380_37416[2] = null);
(statearr_37380_37416[1] = 16);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 16))
{var inst_37331 = (state_37356[2]);var inst_37332 = calc_state();var inst_37305 = inst_37332;var state_37356__$1 = (function (){var statearr_37381 = state_37356;(statearr_37381[18] = inst_37331);
(statearr_37381[8] = inst_37305);
return statearr_37381;
})();var statearr_37382_37417 = state_37356__$1;(statearr_37382_37417[2] = null);
(statearr_37382_37417[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 17))
{var inst_37335 = (state_37356[17]);var state_37356__$1 = state_37356;var statearr_37383_37418 = state_37356__$1;(statearr_37383_37418[2] = inst_37335);
(statearr_37383_37418[1] = 19);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 18))
{var inst_37321 = (state_37356[16]);var inst_37316 = (state_37356[13]);var inst_37315 = (state_37356[14]);var inst_37338 = cljs.core.empty_QMARK_(inst_37316);var inst_37339 = (inst_37315.cljs$core$IFn$_invoke$arity$1 ? inst_37315.cljs$core$IFn$_invoke$arity$1(inst_37321) : inst_37315.call(null,inst_37321));var inst_37340 = cljs.core.not(inst_37339);var inst_37341 = (inst_37338) && (inst_37340);var state_37356__$1 = state_37356;var statearr_37384_37419 = state_37356__$1;(statearr_37384_37419[2] = inst_37341);
(statearr_37384_37419[1] = 19);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 19))
{var inst_37343 = (state_37356[2]);var state_37356__$1 = state_37356;if(cljs.core.truth_(inst_37343))
{var statearr_37385_37420 = state_37356__$1;(statearr_37385_37420[1] = 20);
} else
{var statearr_37386_37421 = state_37356__$1;(statearr_37386_37421[1] = 21);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 20))
{var inst_37320 = (state_37356[15]);var state_37356__$1 = state_37356;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37356__$1,23,out,inst_37320);
} else
{if((state_val_37357 === 21))
{var state_37356__$1 = state_37356;var statearr_37387_37422 = state_37356__$1;(statearr_37387_37422[2] = null);
(statearr_37387_37422[1] = 22);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 22))
{var inst_37313 = (state_37356[12]);var inst_37349 = (state_37356[2]);var inst_37305 = inst_37313;var state_37356__$1 = (function (){var statearr_37388 = state_37356;(statearr_37388[19] = inst_37349);
(statearr_37388[8] = inst_37305);
return statearr_37388;
})();var statearr_37389_37423 = state_37356__$1;(statearr_37389_37423[2] = null);
(statearr_37389_37423[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37357 === 23))
{var inst_37346 = (state_37356[2]);var state_37356__$1 = state_37356;var statearr_37390_37424 = state_37356__$1;(statearr_37390_37424[2] = inst_37346);
(statearr_37390_37424[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_37394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37394[0] = state_machine__5548__auto__);
(statearr_37394[1] = 1);
return statearr_37394;
});
var state_machine__5548__auto____1 = (function (state_37356){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37356);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37395){if((e37395 instanceof Object))
{var ex__5551__auto__ = e37395;var statearr_37396_37425 = state_37356;(statearr_37396_37425[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37356);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37426 = state_37356;
state_37356 = G__37426;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37356){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37397 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37398);
return statearr_37397;
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
cljs.core.async.Pub = (function (){var obj37428 = {};return obj37428;
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
return (function (p1__37429_SHARP_){if(cljs.core.truth_((p1__37429_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37429_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37429_SHARP_.call(null,topic))))
{return p1__37429_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37429_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t37554 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37554 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37555){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37555 = meta37555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37554.cljs$lang$type = true;
cljs.core.async.t37554.cljs$lang$ctorStr = "cljs.core.async/t37554";
cljs.core.async.t37554.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37554");
});})(mults,ensure_mult))
;
cljs.core.async.t37554.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t37554.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t37554.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t37554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t37554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t37554.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t37554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37556){var self__ = this;
var _37556__$1 = this;return self__.meta37555;
});})(mults,ensure_mult))
;
cljs.core.async.t37554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37556,meta37555__$1){var self__ = this;
var _37556__$1 = this;return (new cljs.core.async.t37554(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37555__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t37554 = ((function (mults,ensure_mult){
return (function __GT_t37554(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37555){return (new cljs.core.async.t37554(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37555));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t37554(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___37678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37630){var state_val_37631 = (state_37630[1]);if((state_val_37631 === 1))
{var state_37630__$1 = state_37630;var statearr_37632_37679 = state_37630__$1;(statearr_37632_37679[2] = null);
(statearr_37632_37679[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 2))
{var state_37630__$1 = state_37630;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37630__$1,4,ch);
} else
{if((state_val_37631 === 3))
{var inst_37628 = (state_37630[2]);var state_37630__$1 = state_37630;return cljs.core.async.impl.ioc_helpers.return_chan(state_37630__$1,inst_37628);
} else
{if((state_val_37631 === 4))
{var inst_37559 = (state_37630[7]);var inst_37559__$1 = (state_37630[2]);var inst_37560 = (inst_37559__$1 == null);var state_37630__$1 = (function (){var statearr_37633 = state_37630;(statearr_37633[7] = inst_37559__$1);
return statearr_37633;
})();if(cljs.core.truth_(inst_37560))
{var statearr_37634_37680 = state_37630__$1;(statearr_37634_37680[1] = 5);
} else
{var statearr_37635_37681 = state_37630__$1;(statearr_37635_37681[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 5))
{var inst_37566 = cljs.core.deref(mults);var inst_37567 = cljs.core.vals(inst_37566);var inst_37568 = cljs.core.seq(inst_37567);var inst_37569 = inst_37568;var inst_37570 = null;var inst_37571 = 0;var inst_37572 = 0;var state_37630__$1 = (function (){var statearr_37636 = state_37630;(statearr_37636[8] = inst_37569);
(statearr_37636[9] = inst_37570);
(statearr_37636[10] = inst_37572);
(statearr_37636[11] = inst_37571);
return statearr_37636;
})();var statearr_37637_37682 = state_37630__$1;(statearr_37637_37682[2] = null);
(statearr_37637_37682[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 6))
{var inst_37607 = (state_37630[12]);var inst_37609 = (state_37630[13]);var inst_37559 = (state_37630[7]);var inst_37607__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37559) : topic_fn.call(null,inst_37559));var inst_37608 = cljs.core.deref(mults);var inst_37609__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37608,inst_37607__$1);var state_37630__$1 = (function (){var statearr_37638 = state_37630;(statearr_37638[12] = inst_37607__$1);
(statearr_37638[13] = inst_37609__$1);
return statearr_37638;
})();if(cljs.core.truth_(inst_37609__$1))
{var statearr_37639_37683 = state_37630__$1;(statearr_37639_37683[1] = 19);
} else
{var statearr_37640_37684 = state_37630__$1;(statearr_37640_37684[1] = 20);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 7))
{var inst_37626 = (state_37630[2]);var state_37630__$1 = state_37630;var statearr_37641_37685 = state_37630__$1;(statearr_37641_37685[2] = inst_37626);
(statearr_37641_37685[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 8))
{var inst_37572 = (state_37630[10]);var inst_37571 = (state_37630[11]);var inst_37574 = (inst_37572 < inst_37571);var inst_37575 = inst_37574;var state_37630__$1 = state_37630;if(cljs.core.truth_(inst_37575))
{var statearr_37645_37686 = state_37630__$1;(statearr_37645_37686[1] = 10);
} else
{var statearr_37646_37687 = state_37630__$1;(statearr_37646_37687[1] = 11);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 9))
{var inst_37605 = (state_37630[2]);var state_37630__$1 = state_37630;var statearr_37647_37688 = state_37630__$1;(statearr_37647_37688[2] = inst_37605);
(statearr_37647_37688[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 10))
{var inst_37569 = (state_37630[8]);var inst_37570 = (state_37630[9]);var inst_37572 = (state_37630[10]);var inst_37571 = (state_37630[11]);var inst_37577 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37570,inst_37572);var inst_37578 = cljs.core.async.muxch_STAR_(inst_37577);var inst_37579 = cljs.core.async.close_BANG_(inst_37578);var inst_37580 = (inst_37572 + 1);var tmp37642 = inst_37569;var tmp37643 = inst_37570;var tmp37644 = inst_37571;var inst_37569__$1 = tmp37642;var inst_37570__$1 = tmp37643;var inst_37571__$1 = tmp37644;var inst_37572__$1 = inst_37580;var state_37630__$1 = (function (){var statearr_37648 = state_37630;(statearr_37648[8] = inst_37569__$1);
(statearr_37648[9] = inst_37570__$1);
(statearr_37648[10] = inst_37572__$1);
(statearr_37648[11] = inst_37571__$1);
(statearr_37648[14] = inst_37579);
return statearr_37648;
})();var statearr_37649_37689 = state_37630__$1;(statearr_37649_37689[2] = null);
(statearr_37649_37689[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 11))
{var inst_37569 = (state_37630[8]);var inst_37583 = (state_37630[15]);var inst_37583__$1 = cljs.core.seq(inst_37569);var state_37630__$1 = (function (){var statearr_37650 = state_37630;(statearr_37650[15] = inst_37583__$1);
return statearr_37650;
})();if(inst_37583__$1)
{var statearr_37651_37690 = state_37630__$1;(statearr_37651_37690[1] = 13);
} else
{var statearr_37652_37691 = state_37630__$1;(statearr_37652_37691[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 12))
{var inst_37603 = (state_37630[2]);var state_37630__$1 = state_37630;var statearr_37653_37692 = state_37630__$1;(statearr_37653_37692[2] = inst_37603);
(statearr_37653_37692[1] = 9);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 13))
{var inst_37583 = (state_37630[15]);var inst_37585 = cljs.core.chunked_seq_QMARK_(inst_37583);var state_37630__$1 = state_37630;if(inst_37585)
{var statearr_37654_37693 = state_37630__$1;(statearr_37654_37693[1] = 16);
} else
{var statearr_37655_37694 = state_37630__$1;(statearr_37655_37694[1] = 17);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 14))
{var state_37630__$1 = state_37630;var statearr_37656_37695 = state_37630__$1;(statearr_37656_37695[2] = null);
(statearr_37656_37695[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 15))
{var inst_37601 = (state_37630[2]);var state_37630__$1 = state_37630;var statearr_37657_37696 = state_37630__$1;(statearr_37657_37696[2] = inst_37601);
(statearr_37657_37696[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 16))
{var inst_37583 = (state_37630[15]);var inst_37587 = cljs.core.chunk_first(inst_37583);var inst_37588 = cljs.core.chunk_rest(inst_37583);var inst_37589 = cljs.core.count(inst_37587);var inst_37569 = inst_37588;var inst_37570 = inst_37587;var inst_37571 = inst_37589;var inst_37572 = 0;var state_37630__$1 = (function (){var statearr_37658 = state_37630;(statearr_37658[8] = inst_37569);
(statearr_37658[9] = inst_37570);
(statearr_37658[10] = inst_37572);
(statearr_37658[11] = inst_37571);
return statearr_37658;
})();var statearr_37659_37697 = state_37630__$1;(statearr_37659_37697[2] = null);
(statearr_37659_37697[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 17))
{var inst_37583 = (state_37630[15]);var inst_37592 = cljs.core.first(inst_37583);var inst_37593 = cljs.core.async.muxch_STAR_(inst_37592);var inst_37594 = cljs.core.async.close_BANG_(inst_37593);var inst_37595 = cljs.core.next(inst_37583);var inst_37569 = inst_37595;var inst_37570 = null;var inst_37571 = 0;var inst_37572 = 0;var state_37630__$1 = (function (){var statearr_37660 = state_37630;(statearr_37660[8] = inst_37569);
(statearr_37660[16] = inst_37594);
(statearr_37660[9] = inst_37570);
(statearr_37660[10] = inst_37572);
(statearr_37660[11] = inst_37571);
return statearr_37660;
})();var statearr_37661_37698 = state_37630__$1;(statearr_37661_37698[2] = null);
(statearr_37661_37698[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 18))
{var inst_37598 = (state_37630[2]);var state_37630__$1 = state_37630;var statearr_37662_37699 = state_37630__$1;(statearr_37662_37699[2] = inst_37598);
(statearr_37662_37699[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 19))
{var state_37630__$1 = state_37630;var statearr_37663_37700 = state_37630__$1;(statearr_37663_37700[2] = null);
(statearr_37663_37700[1] = 24);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 20))
{var state_37630__$1 = state_37630;var statearr_37664_37701 = state_37630__$1;(statearr_37664_37701[2] = null);
(statearr_37664_37701[1] = 21);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 21))
{var inst_37623 = (state_37630[2]);var state_37630__$1 = (function (){var statearr_37665 = state_37630;(statearr_37665[17] = inst_37623);
return statearr_37665;
})();var statearr_37666_37702 = state_37630__$1;(statearr_37666_37702[2] = null);
(statearr_37666_37702[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 22))
{var inst_37620 = (state_37630[2]);var state_37630__$1 = state_37630;var statearr_37667_37703 = state_37630__$1;(statearr_37667_37703[2] = inst_37620);
(statearr_37667_37703[1] = 21);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 23))
{var inst_37607 = (state_37630[12]);var inst_37611 = (state_37630[2]);var inst_37612 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37607);var state_37630__$1 = (function (){var statearr_37668 = state_37630;(statearr_37668[18] = inst_37611);
return statearr_37668;
})();var statearr_37669_37704 = state_37630__$1;(statearr_37669_37704[2] = inst_37612);
cljs.core.async.impl.ioc_helpers.process_exception(state_37630__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37631 === 24))
{var inst_37609 = (state_37630[13]);var inst_37559 = (state_37630[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37630,23,Object,null,22);var inst_37616 = cljs.core.async.muxch_STAR_(inst_37609);var state_37630__$1 = state_37630;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37630__$1,25,inst_37616,inst_37559);
} else
{if((state_val_37631 === 25))
{var inst_37618 = (state_37630[2]);var state_37630__$1 = state_37630;var statearr_37670_37705 = state_37630__$1;(statearr_37670_37705[2] = inst_37618);
cljs.core.async.impl.ioc_helpers.process_exception(state_37630__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_37674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37674[0] = state_machine__5548__auto__);
(statearr_37674[1] = 1);
return statearr_37674;
});
var state_machine__5548__auto____1 = (function (state_37630){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37630);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37675){if((e37675 instanceof Object))
{var ex__5551__auto__ = e37675;var statearr_37676_37706 = state_37630;(statearr_37676_37706[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37630);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37707 = state_37630;
state_37630 = G__37707;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37630){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37677 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37678);
return statearr_37677;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5562__auto___37844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37814){var state_val_37815 = (state_37814[1]);if((state_val_37815 === 1))
{var state_37814__$1 = state_37814;var statearr_37816_37845 = state_37814__$1;(statearr_37816_37845[2] = null);
(statearr_37816_37845[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 2))
{var inst_37777 = cljs.core.reset_BANG_(dctr,cnt);var inst_37778 = 0;var state_37814__$1 = (function (){var statearr_37817 = state_37814;(statearr_37817[7] = inst_37778);
(statearr_37817[8] = inst_37777);
return statearr_37817;
})();var statearr_37818_37846 = state_37814__$1;(statearr_37818_37846[2] = null);
(statearr_37818_37846[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 3))
{var inst_37812 = (state_37814[2]);var state_37814__$1 = state_37814;return cljs.core.async.impl.ioc_helpers.return_chan(state_37814__$1,inst_37812);
} else
{if((state_val_37815 === 4))
{var inst_37778 = (state_37814[7]);var inst_37780 = (inst_37778 < cnt);var state_37814__$1 = state_37814;if(cljs.core.truth_(inst_37780))
{var statearr_37819_37847 = state_37814__$1;(statearr_37819_37847[1] = 6);
} else
{var statearr_37820_37848 = state_37814__$1;(statearr_37820_37848[1] = 7);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 5))
{var inst_37798 = (state_37814[2]);var state_37814__$1 = (function (){var statearr_37821 = state_37814;(statearr_37821[9] = inst_37798);
return statearr_37821;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37814__$1,12,dchan);
} else
{if((state_val_37815 === 6))
{var state_37814__$1 = state_37814;var statearr_37822_37849 = state_37814__$1;(statearr_37822_37849[2] = null);
(statearr_37822_37849[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 7))
{var state_37814__$1 = state_37814;var statearr_37823_37850 = state_37814__$1;(statearr_37823_37850[2] = null);
(statearr_37823_37850[1] = 8);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 8))
{var inst_37796 = (state_37814[2]);var state_37814__$1 = state_37814;var statearr_37824_37851 = state_37814__$1;(statearr_37824_37851[2] = inst_37796);
(statearr_37824_37851[1] = 5);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 9))
{var inst_37778 = (state_37814[7]);var inst_37791 = (state_37814[2]);var inst_37792 = (inst_37778 + 1);var inst_37778__$1 = inst_37792;var state_37814__$1 = (function (){var statearr_37825 = state_37814;(statearr_37825[10] = inst_37791);
(statearr_37825[7] = inst_37778__$1);
return statearr_37825;
})();var statearr_37826_37852 = state_37814__$1;(statearr_37826_37852[2] = null);
(statearr_37826_37852[1] = 4);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 10))
{var inst_37782 = (state_37814[2]);var inst_37783 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_37814__$1 = (function (){var statearr_37827 = state_37814;(statearr_37827[11] = inst_37782);
return statearr_37827;
})();var statearr_37828_37853 = state_37814__$1;(statearr_37828_37853[2] = inst_37783);
cljs.core.async.impl.ioc_helpers.process_exception(state_37814__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 11))
{var inst_37778 = (state_37814[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37814,10,Object,null,9);var inst_37787 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37778) : chs__$1.call(null,inst_37778));var inst_37788 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37778) : done.call(null,inst_37778));var inst_37789 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37787,inst_37788);var state_37814__$1 = state_37814;var statearr_37829_37854 = state_37814__$1;(statearr_37829_37854[2] = inst_37789);
cljs.core.async.impl.ioc_helpers.process_exception(state_37814__$1);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 12))
{var inst_37800 = (state_37814[12]);var inst_37800__$1 = (state_37814[2]);var inst_37801 = cljs.core.some(cljs.core.nil_QMARK_,inst_37800__$1);var state_37814__$1 = (function (){var statearr_37830 = state_37814;(statearr_37830[12] = inst_37800__$1);
return statearr_37830;
})();if(cljs.core.truth_(inst_37801))
{var statearr_37831_37855 = state_37814__$1;(statearr_37831_37855[1] = 13);
} else
{var statearr_37832_37856 = state_37814__$1;(statearr_37832_37856[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 13))
{var inst_37803 = cljs.core.async.close_BANG_(out);var state_37814__$1 = state_37814;var statearr_37833_37857 = state_37814__$1;(statearr_37833_37857[2] = inst_37803);
(statearr_37833_37857[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 14))
{var inst_37800 = (state_37814[12]);var inst_37805 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37800);var state_37814__$1 = state_37814;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37814__$1,16,out,inst_37805);
} else
{if((state_val_37815 === 15))
{var inst_37810 = (state_37814[2]);var state_37814__$1 = state_37814;var statearr_37834_37858 = state_37814__$1;(statearr_37834_37858[2] = inst_37810);
(statearr_37834_37858[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37815 === 16))
{var inst_37807 = (state_37814[2]);var state_37814__$1 = (function (){var statearr_37835 = state_37814;(statearr_37835[13] = inst_37807);
return statearr_37835;
})();var statearr_37836_37859 = state_37814__$1;(statearr_37836_37859[2] = null);
(statearr_37836_37859[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_37840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37840[0] = state_machine__5548__auto__);
(statearr_37840[1] = 1);
return statearr_37840;
});
var state_machine__5548__auto____1 = (function (state_37814){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37814);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37841){if((e37841 instanceof Object))
{var ex__5551__auto__ = e37841;var statearr_37842_37860 = state_37814;(statearr_37842_37860[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37814);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37861 = state_37814;
state_37814 = G__37861;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37814){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37843 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37844);
return statearr_37843;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___37969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37945){var state_val_37946 = (state_37945[1]);if((state_val_37946 === 1))
{var inst_37916 = cljs.core.vec(chs);var inst_37917 = inst_37916;var state_37945__$1 = (function (){var statearr_37947 = state_37945;(statearr_37947[7] = inst_37917);
return statearr_37947;
})();var statearr_37948_37970 = state_37945__$1;(statearr_37948_37970[2] = null);
(statearr_37948_37970[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37946 === 2))
{var inst_37917 = (state_37945[7]);var inst_37919 = cljs.core.count(inst_37917);var inst_37920 = (inst_37919 > 0);var state_37945__$1 = state_37945;if(cljs.core.truth_(inst_37920))
{var statearr_37949_37971 = state_37945__$1;(statearr_37949_37971[1] = 4);
} else
{var statearr_37950_37972 = state_37945__$1;(statearr_37950_37972[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37946 === 3))
{var inst_37943 = (state_37945[2]);var state_37945__$1 = state_37945;return cljs.core.async.impl.ioc_helpers.return_chan(state_37945__$1,inst_37943);
} else
{if((state_val_37946 === 4))
{var inst_37917 = (state_37945[7]);var state_37945__$1 = state_37945;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37945__$1,7,inst_37917);
} else
{if((state_val_37946 === 5))
{var inst_37939 = cljs.core.async.close_BANG_(out);var state_37945__$1 = state_37945;var statearr_37951_37973 = state_37945__$1;(statearr_37951_37973[2] = inst_37939);
(statearr_37951_37973[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37946 === 6))
{var inst_37941 = (state_37945[2]);var state_37945__$1 = state_37945;var statearr_37952_37974 = state_37945__$1;(statearr_37952_37974[2] = inst_37941);
(statearr_37952_37974[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37946 === 7))
{var inst_37924 = (state_37945[8]);var inst_37925 = (state_37945[9]);var inst_37924__$1 = (state_37945[2]);var inst_37925__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37924__$1,0,null);var inst_37926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37924__$1,1,null);var inst_37927 = (inst_37925__$1 == null);var state_37945__$1 = (function (){var statearr_37953 = state_37945;(statearr_37953[10] = inst_37926);
(statearr_37953[8] = inst_37924__$1);
(statearr_37953[9] = inst_37925__$1);
return statearr_37953;
})();if(cljs.core.truth_(inst_37927))
{var statearr_37954_37975 = state_37945__$1;(statearr_37954_37975[1] = 8);
} else
{var statearr_37955_37976 = state_37945__$1;(statearr_37955_37976[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_37946 === 8))
{var inst_37926 = (state_37945[10]);var inst_37917 = (state_37945[7]);var inst_37924 = (state_37945[8]);var inst_37925 = (state_37945[9]);var inst_37929 = (function (){var c = inst_37926;var v = inst_37925;var vec__37922 = inst_37924;var cs = inst_37917;return ((function (c,v,vec__37922,cs,inst_37926,inst_37917,inst_37924,inst_37925,state_val_37946){
return (function (p1__37862_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37862_SHARP_);
});
;})(c,v,vec__37922,cs,inst_37926,inst_37917,inst_37924,inst_37925,state_val_37946))
})();var inst_37930 = cljs.core.filterv(inst_37929,inst_37917);var inst_37917__$1 = inst_37930;var state_37945__$1 = (function (){var statearr_37956 = state_37945;(statearr_37956[7] = inst_37917__$1);
return statearr_37956;
})();var statearr_37957_37977 = state_37945__$1;(statearr_37957_37977[2] = null);
(statearr_37957_37977[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37946 === 9))
{var inst_37925 = (state_37945[9]);var state_37945__$1 = state_37945;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37945__$1,11,out,inst_37925);
} else
{if((state_val_37946 === 10))
{var inst_37937 = (state_37945[2]);var state_37945__$1 = state_37945;var statearr_37959_37978 = state_37945__$1;(statearr_37959_37978[2] = inst_37937);
(statearr_37959_37978[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_37946 === 11))
{var inst_37917 = (state_37945[7]);var inst_37934 = (state_37945[2]);var tmp37958 = inst_37917;var inst_37917__$1 = tmp37958;var state_37945__$1 = (function (){var statearr_37960 = state_37945;(statearr_37960[11] = inst_37934);
(statearr_37960[7] = inst_37917__$1);
return statearr_37960;
})();var statearr_37961_37979 = state_37945__$1;(statearr_37961_37979[2] = null);
(statearr_37961_37979[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_37965 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37965[0] = state_machine__5548__auto__);
(statearr_37965[1] = 1);
return statearr_37965;
});
var state_machine__5548__auto____1 = (function (state_37945){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37945);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37966){if((e37966 instanceof Object))
{var ex__5551__auto__ = e37966;var statearr_37967_37980 = state_37945;(statearr_37967_37980[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37945);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e37966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__37981 = state_37945;
state_37945 = G__37981;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37945){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37968 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37969);
return statearr_37968;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38051){var state_val_38052 = (state_38051[1]);if((state_val_38052 === 1))
{var inst_38028 = 0;var state_38051__$1 = (function (){var statearr_38053 = state_38051;(statearr_38053[7] = inst_38028);
return statearr_38053;
})();var statearr_38054_38075 = state_38051__$1;(statearr_38054_38075[2] = null);
(statearr_38054_38075[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38052 === 2))
{var inst_38028 = (state_38051[7]);var inst_38030 = (inst_38028 < n);var state_38051__$1 = state_38051;if(cljs.core.truth_(inst_38030))
{var statearr_38055_38076 = state_38051__$1;(statearr_38055_38076[1] = 4);
} else
{var statearr_38056_38077 = state_38051__$1;(statearr_38056_38077[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38052 === 3))
{var inst_38048 = (state_38051[2]);var inst_38049 = cljs.core.async.close_BANG_(out);var state_38051__$1 = (function (){var statearr_38057 = state_38051;(statearr_38057[8] = inst_38048);
return statearr_38057;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38051__$1,inst_38049);
} else
{if((state_val_38052 === 4))
{var state_38051__$1 = state_38051;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38051__$1,7,ch);
} else
{if((state_val_38052 === 5))
{var state_38051__$1 = state_38051;var statearr_38058_38078 = state_38051__$1;(statearr_38058_38078[2] = null);
(statearr_38058_38078[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38052 === 6))
{var inst_38046 = (state_38051[2]);var state_38051__$1 = state_38051;var statearr_38059_38079 = state_38051__$1;(statearr_38059_38079[2] = inst_38046);
(statearr_38059_38079[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38052 === 7))
{var inst_38033 = (state_38051[9]);var inst_38033__$1 = (state_38051[2]);var inst_38034 = (inst_38033__$1 == null);var inst_38035 = cljs.core.not(inst_38034);var state_38051__$1 = (function (){var statearr_38060 = state_38051;(statearr_38060[9] = inst_38033__$1);
return statearr_38060;
})();if(inst_38035)
{var statearr_38061_38080 = state_38051__$1;(statearr_38061_38080[1] = 8);
} else
{var statearr_38062_38081 = state_38051__$1;(statearr_38062_38081[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38052 === 8))
{var inst_38033 = (state_38051[9]);var state_38051__$1 = state_38051;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38051__$1,11,out,inst_38033);
} else
{if((state_val_38052 === 9))
{var state_38051__$1 = state_38051;var statearr_38063_38082 = state_38051__$1;(statearr_38063_38082[2] = null);
(statearr_38063_38082[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38052 === 10))
{var inst_38043 = (state_38051[2]);var state_38051__$1 = state_38051;var statearr_38064_38083 = state_38051__$1;(statearr_38064_38083[2] = inst_38043);
(statearr_38064_38083[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38052 === 11))
{var inst_38028 = (state_38051[7]);var inst_38038 = (state_38051[2]);var inst_38039 = (inst_38028 + 1);var inst_38028__$1 = inst_38039;var state_38051__$1 = (function (){var statearr_38065 = state_38051;(statearr_38065[10] = inst_38038);
(statearr_38065[7] = inst_38028__$1);
return statearr_38065;
})();var statearr_38066_38084 = state_38051__$1;(statearr_38066_38084[2] = null);
(statearr_38066_38084[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_38070 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38070[0] = state_machine__5548__auto__);
(statearr_38070[1] = 1);
return statearr_38070;
});
var state_machine__5548__auto____1 = (function (state_38051){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38051);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38071){if((e38071 instanceof Object))
{var ex__5551__auto__ = e38071;var statearr_38072_38085 = state_38051;(statearr_38072_38085[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38051);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38071;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38086 = state_38051;
state_38051 = G__38086;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38051){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38073 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38074);
return statearr_38073;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38158){var state_val_38159 = (state_38158[1]);if((state_val_38159 === 1))
{var inst_38135 = null;var state_38158__$1 = (function (){var statearr_38160 = state_38158;(statearr_38160[7] = inst_38135);
return statearr_38160;
})();var statearr_38161_38184 = state_38158__$1;(statearr_38161_38184[2] = null);
(statearr_38161_38184[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38159 === 2))
{var state_38158__$1 = state_38158;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38158__$1,4,ch);
} else
{if((state_val_38159 === 3))
{var inst_38155 = (state_38158[2]);var inst_38156 = cljs.core.async.close_BANG_(out);var state_38158__$1 = (function (){var statearr_38162 = state_38158;(statearr_38162[8] = inst_38155);
return statearr_38162;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38158__$1,inst_38156);
} else
{if((state_val_38159 === 4))
{var inst_38138 = (state_38158[9]);var inst_38138__$1 = (state_38158[2]);var inst_38139 = (inst_38138__$1 == null);var inst_38140 = cljs.core.not(inst_38139);var state_38158__$1 = (function (){var statearr_38163 = state_38158;(statearr_38163[9] = inst_38138__$1);
return statearr_38163;
})();if(inst_38140)
{var statearr_38164_38185 = state_38158__$1;(statearr_38164_38185[1] = 5);
} else
{var statearr_38165_38186 = state_38158__$1;(statearr_38165_38186[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38159 === 5))
{var inst_38138 = (state_38158[9]);var inst_38135 = (state_38158[7]);var inst_38142 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38138,inst_38135);var state_38158__$1 = state_38158;if(inst_38142)
{var statearr_38166_38187 = state_38158__$1;(statearr_38166_38187[1] = 8);
} else
{var statearr_38167_38188 = state_38158__$1;(statearr_38167_38188[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38159 === 6))
{var state_38158__$1 = state_38158;var statearr_38169_38189 = state_38158__$1;(statearr_38169_38189[2] = null);
(statearr_38169_38189[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38159 === 7))
{var inst_38153 = (state_38158[2]);var state_38158__$1 = state_38158;var statearr_38170_38190 = state_38158__$1;(statearr_38170_38190[2] = inst_38153);
(statearr_38170_38190[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38159 === 8))
{var inst_38135 = (state_38158[7]);var tmp38168 = inst_38135;var inst_38135__$1 = tmp38168;var state_38158__$1 = (function (){var statearr_38171 = state_38158;(statearr_38171[7] = inst_38135__$1);
return statearr_38171;
})();var statearr_38172_38191 = state_38158__$1;(statearr_38172_38191[2] = null);
(statearr_38172_38191[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38159 === 9))
{var inst_38138 = (state_38158[9]);var state_38158__$1 = state_38158;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38158__$1,11,out,inst_38138);
} else
{if((state_val_38159 === 10))
{var inst_38150 = (state_38158[2]);var state_38158__$1 = state_38158;var statearr_38173_38192 = state_38158__$1;(statearr_38173_38192[2] = inst_38150);
(statearr_38173_38192[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38159 === 11))
{var inst_38138 = (state_38158[9]);var inst_38147 = (state_38158[2]);var inst_38135 = inst_38138;var state_38158__$1 = (function (){var statearr_38174 = state_38158;(statearr_38174[7] = inst_38135);
(statearr_38174[10] = inst_38147);
return statearr_38174;
})();var statearr_38175_38193 = state_38158__$1;(statearr_38175_38193[2] = null);
(statearr_38175_38193[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_38179 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38179[0] = state_machine__5548__auto__);
(statearr_38179[1] = 1);
return statearr_38179;
});
var state_machine__5548__auto____1 = (function (state_38158){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38158);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38180){if((e38180 instanceof Object))
{var ex__5551__auto__ = e38180;var statearr_38181_38194 = state_38158;(statearr_38181_38194[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38158);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38195 = state_38158;
state_38158 = G__38195;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38158){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38182 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38183);
return statearr_38182;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38300){var state_val_38301 = (state_38300[1]);if((state_val_38301 === 1))
{var inst_38263 = (new Array(n));var inst_38264 = inst_38263;var inst_38265 = 0;var state_38300__$1 = (function (){var statearr_38302 = state_38300;(statearr_38302[7] = inst_38265);
(statearr_38302[8] = inst_38264);
return statearr_38302;
})();var statearr_38303_38331 = state_38300__$1;(statearr_38303_38331[2] = null);
(statearr_38303_38331[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 2))
{var state_38300__$1 = state_38300;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38300__$1,4,ch);
} else
{if((state_val_38301 === 3))
{var inst_38298 = (state_38300[2]);var state_38300__$1 = state_38300;return cljs.core.async.impl.ioc_helpers.return_chan(state_38300__$1,inst_38298);
} else
{if((state_val_38301 === 4))
{var inst_38268 = (state_38300[9]);var inst_38268__$1 = (state_38300[2]);var inst_38269 = (inst_38268__$1 == null);var inst_38270 = cljs.core.not(inst_38269);var state_38300__$1 = (function (){var statearr_38304 = state_38300;(statearr_38304[9] = inst_38268__$1);
return statearr_38304;
})();if(inst_38270)
{var statearr_38305_38332 = state_38300__$1;(statearr_38305_38332[1] = 5);
} else
{var statearr_38306_38333 = state_38300__$1;(statearr_38306_38333[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 5))
{var inst_38268 = (state_38300[9]);var inst_38265 = (state_38300[7]);var inst_38264 = (state_38300[8]);var inst_38273 = (state_38300[10]);var inst_38272 = (inst_38264[inst_38265] = inst_38268);var inst_38273__$1 = (inst_38265 + 1);var inst_38274 = (inst_38273__$1 < n);var state_38300__$1 = (function (){var statearr_38307 = state_38300;(statearr_38307[11] = inst_38272);
(statearr_38307[10] = inst_38273__$1);
return statearr_38307;
})();if(cljs.core.truth_(inst_38274))
{var statearr_38308_38334 = state_38300__$1;(statearr_38308_38334[1] = 8);
} else
{var statearr_38309_38335 = state_38300__$1;(statearr_38309_38335[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 6))
{var inst_38265 = (state_38300[7]);var inst_38286 = (inst_38265 > 0);var state_38300__$1 = state_38300;if(cljs.core.truth_(inst_38286))
{var statearr_38311_38336 = state_38300__$1;(statearr_38311_38336[1] = 12);
} else
{var statearr_38312_38337 = state_38300__$1;(statearr_38312_38337[1] = 13);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 7))
{var inst_38296 = (state_38300[2]);var state_38300__$1 = state_38300;var statearr_38313_38338 = state_38300__$1;(statearr_38313_38338[2] = inst_38296);
(statearr_38313_38338[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 8))
{var inst_38264 = (state_38300[8]);var inst_38273 = (state_38300[10]);var tmp38310 = inst_38264;var inst_38264__$1 = tmp38310;var inst_38265 = inst_38273;var state_38300__$1 = (function (){var statearr_38314 = state_38300;(statearr_38314[7] = inst_38265);
(statearr_38314[8] = inst_38264__$1);
return statearr_38314;
})();var statearr_38315_38339 = state_38300__$1;(statearr_38315_38339[2] = null);
(statearr_38315_38339[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 9))
{var inst_38264 = (state_38300[8]);var inst_38278 = cljs.core.vec(inst_38264);var state_38300__$1 = state_38300;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38300__$1,11,out,inst_38278);
} else
{if((state_val_38301 === 10))
{var inst_38284 = (state_38300[2]);var state_38300__$1 = state_38300;var statearr_38316_38340 = state_38300__$1;(statearr_38316_38340[2] = inst_38284);
(statearr_38316_38340[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 11))
{var inst_38280 = (state_38300[2]);var inst_38281 = (new Array(n));var inst_38264 = inst_38281;var inst_38265 = 0;var state_38300__$1 = (function (){var statearr_38317 = state_38300;(statearr_38317[7] = inst_38265);
(statearr_38317[8] = inst_38264);
(statearr_38317[12] = inst_38280);
return statearr_38317;
})();var statearr_38318_38341 = state_38300__$1;(statearr_38318_38341[2] = null);
(statearr_38318_38341[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 12))
{var inst_38264 = (state_38300[8]);var inst_38288 = cljs.core.vec(inst_38264);var state_38300__$1 = state_38300;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38300__$1,15,out,inst_38288);
} else
{if((state_val_38301 === 13))
{var state_38300__$1 = state_38300;var statearr_38319_38342 = state_38300__$1;(statearr_38319_38342[2] = null);
(statearr_38319_38342[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 14))
{var inst_38293 = (state_38300[2]);var inst_38294 = cljs.core.async.close_BANG_(out);var state_38300__$1 = (function (){var statearr_38320 = state_38300;(statearr_38320[13] = inst_38293);
return statearr_38320;
})();var statearr_38321_38343 = state_38300__$1;(statearr_38321_38343[2] = inst_38294);
(statearr_38321_38343[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38301 === 15))
{var inst_38290 = (state_38300[2]);var state_38300__$1 = state_38300;var statearr_38322_38344 = state_38300__$1;(statearr_38322_38344[2] = inst_38290);
(statearr_38322_38344[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_38326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38326[0] = state_machine__5548__auto__);
(statearr_38326[1] = 1);
return statearr_38326;
});
var state_machine__5548__auto____1 = (function (state_38300){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38300);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38327){if((e38327 instanceof Object))
{var ex__5551__auto__ = e38327;var statearr_38328_38345 = state_38300;(statearr_38328_38345[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38300);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38346 = state_38300;
state_38300 = G__38346;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38300){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38329 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38330);
return statearr_38329;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38459){var state_val_38460 = (state_38459[1]);if((state_val_38460 === 1))
{var inst_38418 = [];var inst_38419 = inst_38418;var inst_38420 = cljs.core.constant$keyword$564;var state_38459__$1 = (function (){var statearr_38461 = state_38459;(statearr_38461[7] = inst_38420);
(statearr_38461[8] = inst_38419);
return statearr_38461;
})();var statearr_38462_38490 = state_38459__$1;(statearr_38462_38490[2] = null);
(statearr_38462_38490[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 2))
{var state_38459__$1 = state_38459;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38459__$1,4,ch);
} else
{if((state_val_38460 === 3))
{var inst_38457 = (state_38459[2]);var state_38459__$1 = state_38459;return cljs.core.async.impl.ioc_helpers.return_chan(state_38459__$1,inst_38457);
} else
{if((state_val_38460 === 4))
{var inst_38423 = (state_38459[9]);var inst_38423__$1 = (state_38459[2]);var inst_38424 = (inst_38423__$1 == null);var inst_38425 = cljs.core.not(inst_38424);var state_38459__$1 = (function (){var statearr_38463 = state_38459;(statearr_38463[9] = inst_38423__$1);
return statearr_38463;
})();if(inst_38425)
{var statearr_38464_38491 = state_38459__$1;(statearr_38464_38491[1] = 5);
} else
{var statearr_38465_38492 = state_38459__$1;(statearr_38465_38492[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 5))
{var inst_38423 = (state_38459[9]);var inst_38420 = (state_38459[7]);var inst_38427 = (state_38459[10]);var inst_38427__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38423) : f.call(null,inst_38423));var inst_38428 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38427__$1,inst_38420);var inst_38429 = cljs.core.keyword_identical_QMARK_(inst_38420,cljs.core.constant$keyword$564);var inst_38430 = (inst_38428) || (inst_38429);var state_38459__$1 = (function (){var statearr_38466 = state_38459;(statearr_38466[10] = inst_38427__$1);
return statearr_38466;
})();if(cljs.core.truth_(inst_38430))
{var statearr_38467_38493 = state_38459__$1;(statearr_38467_38493[1] = 8);
} else
{var statearr_38468_38494 = state_38459__$1;(statearr_38468_38494[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 6))
{var inst_38419 = (state_38459[8]);var inst_38444 = inst_38419.length;var inst_38445 = (inst_38444 > 0);var state_38459__$1 = state_38459;if(cljs.core.truth_(inst_38445))
{var statearr_38470_38495 = state_38459__$1;(statearr_38470_38495[1] = 12);
} else
{var statearr_38471_38496 = state_38459__$1;(statearr_38471_38496[1] = 13);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 7))
{var inst_38455 = (state_38459[2]);var state_38459__$1 = state_38459;var statearr_38472_38497 = state_38459__$1;(statearr_38472_38497[2] = inst_38455);
(statearr_38472_38497[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 8))
{var inst_38423 = (state_38459[9]);var inst_38427 = (state_38459[10]);var inst_38419 = (state_38459[8]);var inst_38432 = inst_38419.push(inst_38423);var tmp38469 = inst_38419;var inst_38419__$1 = tmp38469;var inst_38420 = inst_38427;var state_38459__$1 = (function (){var statearr_38473 = state_38459;(statearr_38473[7] = inst_38420);
(statearr_38473[11] = inst_38432);
(statearr_38473[8] = inst_38419__$1);
return statearr_38473;
})();var statearr_38474_38498 = state_38459__$1;(statearr_38474_38498[2] = null);
(statearr_38474_38498[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 9))
{var inst_38419 = (state_38459[8]);var inst_38435 = cljs.core.vec(inst_38419);var state_38459__$1 = state_38459;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38459__$1,11,out,inst_38435);
} else
{if((state_val_38460 === 10))
{var inst_38442 = (state_38459[2]);var state_38459__$1 = state_38459;var statearr_38475_38499 = state_38459__$1;(statearr_38475_38499[2] = inst_38442);
(statearr_38475_38499[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 11))
{var inst_38423 = (state_38459[9]);var inst_38427 = (state_38459[10]);var inst_38437 = (state_38459[2]);var inst_38438 = [];var inst_38439 = inst_38438.push(inst_38423);var inst_38419 = inst_38438;var inst_38420 = inst_38427;var state_38459__$1 = (function (){var statearr_38476 = state_38459;(statearr_38476[12] = inst_38439);
(statearr_38476[7] = inst_38420);
(statearr_38476[13] = inst_38437);
(statearr_38476[8] = inst_38419);
return statearr_38476;
})();var statearr_38477_38500 = state_38459__$1;(statearr_38477_38500[2] = null);
(statearr_38477_38500[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 12))
{var inst_38419 = (state_38459[8]);var inst_38447 = cljs.core.vec(inst_38419);var state_38459__$1 = state_38459;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38459__$1,15,out,inst_38447);
} else
{if((state_val_38460 === 13))
{var state_38459__$1 = state_38459;var statearr_38478_38501 = state_38459__$1;(statearr_38478_38501[2] = null);
(statearr_38478_38501[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 14))
{var inst_38452 = (state_38459[2]);var inst_38453 = cljs.core.async.close_BANG_(out);var state_38459__$1 = (function (){var statearr_38479 = state_38459;(statearr_38479[14] = inst_38452);
return statearr_38479;
})();var statearr_38480_38502 = state_38459__$1;(statearr_38480_38502[2] = inst_38453);
(statearr_38480_38502[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_38460 === 15))
{var inst_38449 = (state_38459[2]);var state_38459__$1 = state_38459;var statearr_38481_38503 = state_38459__$1;(statearr_38481_38503[2] = inst_38449);
(statearr_38481_38503[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_38485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38485[0] = state_machine__5548__auto__);
(statearr_38485[1] = 1);
return statearr_38485;
});
var state_machine__5548__auto____1 = (function (state_38459){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38459);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38486){if((e38486 instanceof Object))
{var ex__5551__auto__ = e38486;var statearr_38487_38504 = state_38459;(statearr_38487_38504[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38459);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e38486;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__38505 = state_38459;
state_38459 = G__38505;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38459){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38488 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38489);
return statearr_38488;
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
