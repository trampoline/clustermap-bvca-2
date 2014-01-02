// Compiled by ClojureScript 0.0-2080
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t29775 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29775 = (function (f,fn_handler,meta29776){
this.f = f;
this.fn_handler = fn_handler;
this.meta29776 = meta29776;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29775.cljs$lang$type = true;
cljs.core.async.t29775.cljs$lang$ctorStr = "cljs.core.async/t29775";
cljs.core.async.t29775.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t29775");
});
cljs.core.async.t29775.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t29775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t29775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29777){var self__ = this;
var _29777__$1 = this;return self__.meta29776;
});
cljs.core.async.t29775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29777,meta29776__$1){var self__ = this;
var _29777__$1 = this;return (new cljs.core.async.t29775(self__.f,self__.fn_handler,meta29776__$1));
});
cljs.core.async.__GT_t29775 = (function __GT_t29775(f__$1,fn_handler__$1,meta29776){return (new cljs.core.async.t29775(f__$1,fn_handler__$1,meta29776));
});
}
return (new cljs.core.async.t29775(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__29779 = buff;if(G__29779)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__29779.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__29779.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__29779);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__29779);
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
{var val_29780 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29780) : fn1.call(null,val_29780));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29780) : fn1.call(null,val_29780));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3279__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___29781 = n;var x_29782 = 0;while(true){
if((x_29782 < n__4114__auto___29781))
{(a[x_29782] = 0);
{
var G__29783 = (x_29782 + 1);
x_29782 = G__29783;
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
var G__29784 = (i + 1);
i = G__29784;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t29788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29788 = (function (flag,alt_flag,meta29789){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29789 = meta29789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29788.cljs$lang$type = true;
cljs.core.async.t29788.cljs$lang$ctorStr = "cljs.core.async/t29788";
cljs.core.async.t29788.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t29788");
});
cljs.core.async.t29788.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t29788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t29788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29790){var self__ = this;
var _29790__$1 = this;return self__.meta29789;
});
cljs.core.async.t29788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29790,meta29789__$1){var self__ = this;
var _29790__$1 = this;return (new cljs.core.async.t29788(self__.flag,self__.alt_flag,meta29789__$1));
});
cljs.core.async.__GT_t29788 = (function __GT_t29788(flag__$1,alt_flag__$1,meta29789){return (new cljs.core.async.t29788(flag__$1,alt_flag__$1,meta29789));
});
}
return (new cljs.core.async.t29788(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29794 = (function (cb,flag,alt_handler,meta29795){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29795 = meta29795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29794.cljs$lang$type = true;
cljs.core.async.t29794.cljs$lang$ctorStr = "cljs.core.async/t29794";
cljs.core.async.t29794.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t29794");
});
cljs.core.async.t29794.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t29794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t29794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29796){var self__ = this;
var _29796__$1 = this;return self__.meta29795;
});
cljs.core.async.t29794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29796,meta29795__$1){var self__ = this;
var _29796__$1 = this;return (new cljs.core.async.t29794(self__.cb,self__.flag,self__.alt_handler,meta29795__$1));
});
cljs.core.async.__GT_t29794 = (function __GT_t29794(cb__$1,flag__$1,alt_handler__$1,meta29795){return (new cljs.core.async.t29794(cb__$1,flag__$1,alt_handler__$1,meta29795));
});
}
return (new cljs.core.async.t29794(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29797_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29797_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29797_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3291__auto__ = wport;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__29798 = (i + 1);
i = G__29798;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3291__auto__ = ret;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$63))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3279__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$63], null));
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
var alts_BANG___delegate = function (ports,p__29799){var map__29801 = p__29799;var map__29801__$1 = ((cljs.core.seq_QMARK_(map__29801))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29801):map__29801);var opts = map__29801__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__29799 = null;if (arguments.length > 1) {
  p__29799 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29799);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29802){
var ports = cljs.core.first(arglist__29802);
var p__29799 = cljs.core.rest(arglist__29802);
return alts_BANG___delegate(ports,p__29799);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29810 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29810 = (function (ch,f,map_LT_,meta29811){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29811 = meta29811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29810.cljs$lang$type = true;
cljs.core.async.t29810.cljs$lang$ctorStr = "cljs.core.async/t29810";
cljs.core.async.t29810.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t29810");
});
cljs.core.async.t29810.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t29810.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t29813 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29813 = (function (fn1,_,meta29811,ch,f,map_LT_,meta29814){
this.fn1 = fn1;
this._ = _;
this.meta29811 = meta29811;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29814 = meta29814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29813.cljs$lang$type = true;
cljs.core.async.t29813.cljs$lang$ctorStr = "cljs.core.async/t29813";
cljs.core.async.t29813.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t29813");
});
cljs.core.async.t29813.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t29813.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t29813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__29803_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__29803_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29803_SHARP_) : self__.f.call(null,p1__29803_SHARP_)))) : f1.call(null,(((p1__29803_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29803_SHARP_) : self__.f.call(null,p1__29803_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t29813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29815){var self__ = this;
var _29815__$1 = this;return self__.meta29814;
});
cljs.core.async.t29813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29815,meta29814__$1){var self__ = this;
var _29815__$1 = this;return (new cljs.core.async.t29813(self__.fn1,self__._,self__.meta29811,self__.ch,self__.f,self__.map_LT_,meta29814__$1));
});
cljs.core.async.__GT_t29813 = (function __GT_t29813(fn1__$1,___$2,meta29811__$1,ch__$2,f__$2,map_LT___$2,meta29814){return (new cljs.core.async.t29813(fn1__$1,___$2,meta29811__$1,ch__$2,f__$2,map_LT___$2,meta29814));
});
}
return (new cljs.core.async.t29813(fn1,___$1,self__.meta29811,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t29810.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t29810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29812){var self__ = this;
var _29812__$1 = this;return self__.meta29811;
});
cljs.core.async.t29810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29812,meta29811__$1){var self__ = this;
var _29812__$1 = this;return (new cljs.core.async.t29810(self__.ch,self__.f,self__.map_LT_,meta29811__$1));
});
cljs.core.async.__GT_t29810 = (function __GT_t29810(ch__$1,f__$1,map_LT___$1,meta29811){return (new cljs.core.async.t29810(ch__$1,f__$1,map_LT___$1,meta29811));
});
}
return (new cljs.core.async.t29810(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29819 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29819 = (function (ch,f,map_GT_,meta29820){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29820 = meta29820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29819.cljs$lang$type = true;
cljs.core.async.t29819.cljs$lang$ctorStr = "cljs.core.async/t29819";
cljs.core.async.t29819.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t29819");
});
cljs.core.async.t29819.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t29819.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t29819.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t29819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29821){var self__ = this;
var _29821__$1 = this;return self__.meta29820;
});
cljs.core.async.t29819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29821,meta29820__$1){var self__ = this;
var _29821__$1 = this;return (new cljs.core.async.t29819(self__.ch,self__.f,self__.map_GT_,meta29820__$1));
});
cljs.core.async.__GT_t29819 = (function __GT_t29819(ch__$1,f__$1,map_GT___$1,meta29820){return (new cljs.core.async.t29819(ch__$1,f__$1,map_GT___$1,meta29820));
});
}
return (new cljs.core.async.t29819(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29825 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29825 = (function (ch,p,filter_GT_,meta29826){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29826 = meta29826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29825.cljs$lang$type = true;
cljs.core.async.t29825.cljs$lang$ctorStr = "cljs.core.async/t29825";
cljs.core.async.t29825.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t29825");
});
cljs.core.async.t29825.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t29825.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t29825.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t29825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29827){var self__ = this;
var _29827__$1 = this;return self__.meta29826;
});
cljs.core.async.t29825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29827,meta29826__$1){var self__ = this;
var _29827__$1 = this;return (new cljs.core.async.t29825(self__.ch,self__.p,self__.filter_GT_,meta29826__$1));
});
cljs.core.async.__GT_t29825 = (function __GT_t29825(ch__$1,p__$1,filter_GT___$1,meta29826){return (new cljs.core.async.t29825(ch__$1,p__$1,filter_GT___$1,meta29826));
});
}
return (new cljs.core.async.t29825(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6082__auto___29910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_29889){var state_val_29890 = (state_29889[1]);if((state_val_29890 === 1))
{var state_29889__$1 = state_29889;var statearr_29891_29911 = state_29889__$1;(statearr_29891_29911[2] = null);
(statearr_29891_29911[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_29890 === 2))
{var state_29889__$1 = state_29889;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29889__$1,4,ch);
} else
{if((state_val_29890 === 3))
{var inst_29887 = (state_29889[2]);var state_29889__$1 = state_29889;return cljs.core.async.impl.ioc_helpers.return_chan(state_29889__$1,inst_29887);
} else
{if((state_val_29890 === 4))
{var inst_29871 = (state_29889[7]);var inst_29871__$1 = (state_29889[2]);var inst_29872 = (inst_29871__$1 == null);var state_29889__$1 = (function (){var statearr_29892 = state_29889;(statearr_29892[7] = inst_29871__$1);
return statearr_29892;
})();if(cljs.core.truth_(inst_29872))
{var statearr_29893_29912 = state_29889__$1;(statearr_29893_29912[1] = 5);
} else
{var statearr_29894_29913 = state_29889__$1;(statearr_29894_29913[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_29890 === 5))
{var inst_29874 = cljs.core.async.close_BANG_(out);var state_29889__$1 = state_29889;var statearr_29895_29914 = state_29889__$1;(statearr_29895_29914[2] = inst_29874);
(statearr_29895_29914[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_29890 === 6))
{var inst_29871 = (state_29889[7]);var inst_29876 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29871) : p.call(null,inst_29871));var state_29889__$1 = state_29889;if(cljs.core.truth_(inst_29876))
{var statearr_29896_29915 = state_29889__$1;(statearr_29896_29915[1] = 8);
} else
{var statearr_29897_29916 = state_29889__$1;(statearr_29897_29916[1] = 9);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_29890 === 7))
{var inst_29885 = (state_29889[2]);var state_29889__$1 = state_29889;var statearr_29898_29917 = state_29889__$1;(statearr_29898_29917[2] = inst_29885);
(statearr_29898_29917[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_29890 === 8))
{var inst_29871 = (state_29889[7]);var state_29889__$1 = state_29889;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29889__$1,11,out,inst_29871);
} else
{if((state_val_29890 === 9))
{var state_29889__$1 = state_29889;var statearr_29899_29918 = state_29889__$1;(statearr_29899_29918[2] = null);
(statearr_29899_29918[1] = 10);
return cljs.core.constant$keyword$87;
} else
{if((state_val_29890 === 10))
{var inst_29882 = (state_29889[2]);var state_29889__$1 = (function (){var statearr_29900 = state_29889;(statearr_29900[8] = inst_29882);
return statearr_29900;
})();var statearr_29901_29919 = state_29889__$1;(statearr_29901_29919[2] = null);
(statearr_29901_29919[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_29890 === 11))
{var inst_29879 = (state_29889[2]);var state_29889__$1 = state_29889;var statearr_29902_29920 = state_29889__$1;(statearr_29902_29920[2] = inst_29879);
(statearr_29902_29920[1] = 10);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_29906 = (new Array(9));(statearr_29906[0] = state_machine__6013__auto__);
(statearr_29906[1] = 1);
return statearr_29906;
});
var state_machine__6013__auto____1 = (function (state_29889){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_29889);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e29907){if((e29907 instanceof Object))
{var ex__6016__auto__ = e29907;var statearr_29908_29921 = state_29889;(statearr_29908_29921[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_29889);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e29907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__29922 = state_29889;
state_29889 = G__29922;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_29889){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_29889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_29909 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_29909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___29910);
return statearr_29909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_30074){var state_val_30075 = (state_30074[1]);if((state_val_30075 === 1))
{var state_30074__$1 = state_30074;var statearr_30076_30113 = state_30074__$1;(statearr_30076_30113[2] = null);
(statearr_30076_30113[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 2))
{var state_30074__$1 = state_30074;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30074__$1,4,in$);
} else
{if((state_val_30075 === 3))
{var inst_30072 = (state_30074[2]);var state_30074__$1 = state_30074;return cljs.core.async.impl.ioc_helpers.return_chan(state_30074__$1,inst_30072);
} else
{if((state_val_30075 === 4))
{var inst_30020 = (state_30074[7]);var inst_30020__$1 = (state_30074[2]);var inst_30021 = (inst_30020__$1 == null);var state_30074__$1 = (function (){var statearr_30077 = state_30074;(statearr_30077[7] = inst_30020__$1);
return statearr_30077;
})();if(cljs.core.truth_(inst_30021))
{var statearr_30078_30114 = state_30074__$1;(statearr_30078_30114[1] = 5);
} else
{var statearr_30079_30115 = state_30074__$1;(statearr_30079_30115[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 5))
{var inst_30023 = cljs.core.async.close_BANG_(out);var state_30074__$1 = state_30074;var statearr_30080_30116 = state_30074__$1;(statearr_30080_30116[2] = inst_30023);
(statearr_30080_30116[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 6))
{var inst_30020 = (state_30074[7]);var inst_30025 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30020) : f.call(null,inst_30020));var inst_30030 = cljs.core.seq(inst_30025);var inst_30031 = inst_30030;var inst_30032 = null;var inst_30033 = 0;var inst_30034 = 0;var state_30074__$1 = (function (){var statearr_30081 = state_30074;(statearr_30081[8] = inst_30034);
(statearr_30081[9] = inst_30033);
(statearr_30081[10] = inst_30032);
(statearr_30081[11] = inst_30031);
return statearr_30081;
})();var statearr_30082_30117 = state_30074__$1;(statearr_30082_30117[2] = null);
(statearr_30082_30117[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 7))
{var inst_30070 = (state_30074[2]);var state_30074__$1 = state_30074;var statearr_30083_30118 = state_30074__$1;(statearr_30083_30118[2] = inst_30070);
(statearr_30083_30118[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 8))
{var inst_30034 = (state_30074[8]);var inst_30033 = (state_30074[9]);var inst_30036 = (inst_30034 < inst_30033);var inst_30037 = inst_30036;var state_30074__$1 = state_30074;if(cljs.core.truth_(inst_30037))
{var statearr_30084_30119 = state_30074__$1;(statearr_30084_30119[1] = 10);
} else
{var statearr_30085_30120 = state_30074__$1;(statearr_30085_30120[1] = 11);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 9))
{var inst_30067 = (state_30074[2]);var state_30074__$1 = (function (){var statearr_30086 = state_30074;(statearr_30086[12] = inst_30067);
return statearr_30086;
})();var statearr_30087_30121 = state_30074__$1;(statearr_30087_30121[2] = null);
(statearr_30087_30121[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 10))
{var inst_30034 = (state_30074[8]);var inst_30032 = (state_30074[10]);var inst_30039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30032,inst_30034);var state_30074__$1 = state_30074;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30074__$1,13,out,inst_30039);
} else
{if((state_val_30075 === 11))
{var inst_30045 = (state_30074[13]);var inst_30031 = (state_30074[11]);var inst_30045__$1 = cljs.core.seq(inst_30031);var state_30074__$1 = (function (){var statearr_30091 = state_30074;(statearr_30091[13] = inst_30045__$1);
return statearr_30091;
})();if(inst_30045__$1)
{var statearr_30092_30122 = state_30074__$1;(statearr_30092_30122[1] = 14);
} else
{var statearr_30093_30123 = state_30074__$1;(statearr_30093_30123[1] = 15);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 12))
{var inst_30065 = (state_30074[2]);var state_30074__$1 = state_30074;var statearr_30094_30124 = state_30074__$1;(statearr_30094_30124[2] = inst_30065);
(statearr_30094_30124[1] = 9);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 13))
{var inst_30034 = (state_30074[8]);var inst_30033 = (state_30074[9]);var inst_30032 = (state_30074[10]);var inst_30031 = (state_30074[11]);var inst_30041 = (state_30074[2]);var inst_30042 = (inst_30034 + 1);var tmp30088 = inst_30033;var tmp30089 = inst_30032;var tmp30090 = inst_30031;var inst_30031__$1 = tmp30090;var inst_30032__$1 = tmp30089;var inst_30033__$1 = tmp30088;var inst_30034__$1 = inst_30042;var state_30074__$1 = (function (){var statearr_30095 = state_30074;(statearr_30095[14] = inst_30041);
(statearr_30095[8] = inst_30034__$1);
(statearr_30095[9] = inst_30033__$1);
(statearr_30095[10] = inst_30032__$1);
(statearr_30095[11] = inst_30031__$1);
return statearr_30095;
})();var statearr_30096_30125 = state_30074__$1;(statearr_30096_30125[2] = null);
(statearr_30096_30125[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 14))
{var inst_30045 = (state_30074[13]);var inst_30047 = cljs.core.chunked_seq_QMARK_(inst_30045);var state_30074__$1 = state_30074;if(inst_30047)
{var statearr_30097_30126 = state_30074__$1;(statearr_30097_30126[1] = 17);
} else
{var statearr_30098_30127 = state_30074__$1;(statearr_30098_30127[1] = 18);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 15))
{var state_30074__$1 = state_30074;var statearr_30099_30128 = state_30074__$1;(statearr_30099_30128[2] = null);
(statearr_30099_30128[1] = 16);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 16))
{var inst_30063 = (state_30074[2]);var state_30074__$1 = state_30074;var statearr_30100_30129 = state_30074__$1;(statearr_30100_30129[2] = inst_30063);
(statearr_30100_30129[1] = 12);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 17))
{var inst_30045 = (state_30074[13]);var inst_30049 = cljs.core.chunk_first(inst_30045);var inst_30050 = cljs.core.chunk_rest(inst_30045);var inst_30051 = cljs.core.count(inst_30049);var inst_30031 = inst_30050;var inst_30032 = inst_30049;var inst_30033 = inst_30051;var inst_30034 = 0;var state_30074__$1 = (function (){var statearr_30101 = state_30074;(statearr_30101[8] = inst_30034);
(statearr_30101[9] = inst_30033);
(statearr_30101[10] = inst_30032);
(statearr_30101[11] = inst_30031);
return statearr_30101;
})();var statearr_30102_30130 = state_30074__$1;(statearr_30102_30130[2] = null);
(statearr_30102_30130[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 18))
{var inst_30045 = (state_30074[13]);var inst_30054 = cljs.core.first(inst_30045);var state_30074__$1 = state_30074;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30074__$1,20,out,inst_30054);
} else
{if((state_val_30075 === 19))
{var inst_30060 = (state_30074[2]);var state_30074__$1 = state_30074;var statearr_30103_30131 = state_30074__$1;(statearr_30103_30131[2] = inst_30060);
(statearr_30103_30131[1] = 16);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30075 === 20))
{var inst_30045 = (state_30074[13]);var inst_30056 = (state_30074[2]);var inst_30057 = cljs.core.next(inst_30045);var inst_30031 = inst_30057;var inst_30032 = null;var inst_30033 = 0;var inst_30034 = 0;var state_30074__$1 = (function (){var statearr_30104 = state_30074;(statearr_30104[15] = inst_30056);
(statearr_30104[8] = inst_30034);
(statearr_30104[9] = inst_30033);
(statearr_30104[10] = inst_30032);
(statearr_30104[11] = inst_30031);
return statearr_30104;
})();var statearr_30105_30132 = state_30074__$1;(statearr_30105_30132[2] = null);
(statearr_30105_30132[1] = 8);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_30109 = (new Array(16));(statearr_30109[0] = state_machine__6013__auto__);
(statearr_30109[1] = 1);
return statearr_30109;
});
var state_machine__6013__auto____1 = (function (state_30074){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_30074);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e30110){if((e30110 instanceof Object))
{var ex__6016__auto__ = e30110;var statearr_30111_30133 = state_30074;(statearr_30111_30133[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30074);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e30110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__30134 = state_30074;
state_30074 = G__30134;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_30074){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_30074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_30112 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_30112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto__);
return statearr_30112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
}));
return c__6082__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6082__auto___30215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_30194){var state_val_30195 = (state_30194[1]);if((state_val_30195 === 1))
{var state_30194__$1 = state_30194;var statearr_30196_30216 = state_30194__$1;(statearr_30196_30216[2] = null);
(statearr_30196_30216[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30195 === 2))
{var state_30194__$1 = state_30194;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30194__$1,4,from);
} else
{if((state_val_30195 === 3))
{var inst_30192 = (state_30194[2]);var state_30194__$1 = state_30194;return cljs.core.async.impl.ioc_helpers.return_chan(state_30194__$1,inst_30192);
} else
{if((state_val_30195 === 4))
{var inst_30177 = (state_30194[7]);var inst_30177__$1 = (state_30194[2]);var inst_30178 = (inst_30177__$1 == null);var state_30194__$1 = (function (){var statearr_30197 = state_30194;(statearr_30197[7] = inst_30177__$1);
return statearr_30197;
})();if(cljs.core.truth_(inst_30178))
{var statearr_30198_30217 = state_30194__$1;(statearr_30198_30217[1] = 5);
} else
{var statearr_30199_30218 = state_30194__$1;(statearr_30199_30218[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30195 === 5))
{var state_30194__$1 = state_30194;if(cljs.core.truth_(close_QMARK_))
{var statearr_30200_30219 = state_30194__$1;(statearr_30200_30219[1] = 8);
} else
{var statearr_30201_30220 = state_30194__$1;(statearr_30201_30220[1] = 9);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30195 === 6))
{var inst_30177 = (state_30194[7]);var state_30194__$1 = state_30194;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30194__$1,11,to,inst_30177);
} else
{if((state_val_30195 === 7))
{var inst_30190 = (state_30194[2]);var state_30194__$1 = state_30194;var statearr_30202_30221 = state_30194__$1;(statearr_30202_30221[2] = inst_30190);
(statearr_30202_30221[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30195 === 8))
{var inst_30181 = cljs.core.async.close_BANG_(to);var state_30194__$1 = state_30194;var statearr_30203_30222 = state_30194__$1;(statearr_30203_30222[2] = inst_30181);
(statearr_30203_30222[1] = 10);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30195 === 9))
{var state_30194__$1 = state_30194;var statearr_30204_30223 = state_30194__$1;(statearr_30204_30223[2] = null);
(statearr_30204_30223[1] = 10);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30195 === 10))
{var inst_30184 = (state_30194[2]);var state_30194__$1 = state_30194;var statearr_30205_30224 = state_30194__$1;(statearr_30205_30224[2] = inst_30184);
(statearr_30205_30224[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30195 === 11))
{var inst_30187 = (state_30194[2]);var state_30194__$1 = (function (){var statearr_30206 = state_30194;(statearr_30206[8] = inst_30187);
return statearr_30206;
})();var statearr_30207_30225 = state_30194__$1;(statearr_30207_30225[2] = null);
(statearr_30207_30225[1] = 2);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_30211 = (new Array(9));(statearr_30211[0] = state_machine__6013__auto__);
(statearr_30211[1] = 1);
return statearr_30211;
});
var state_machine__6013__auto____1 = (function (state_30194){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_30194);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e30212){if((e30212 instanceof Object))
{var ex__6016__auto__ = e30212;var statearr_30213_30226 = state_30194;(statearr_30213_30226[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30194);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e30212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__30227 = state_30194;
state_30194 = G__30227;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_30214 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_30214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___30215);
return statearr_30214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6082__auto___30314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_30292){var state_val_30293 = (state_30292[1]);if((state_val_30293 === 1))
{var state_30292__$1 = state_30292;var statearr_30294_30315 = state_30292__$1;(statearr_30294_30315[2] = null);
(statearr_30294_30315[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30293 === 2))
{var state_30292__$1 = state_30292;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30292__$1,4,ch);
} else
{if((state_val_30293 === 3))
{var inst_30290 = (state_30292[2]);var state_30292__$1 = state_30292;return cljs.core.async.impl.ioc_helpers.return_chan(state_30292__$1,inst_30290);
} else
{if((state_val_30293 === 4))
{var inst_30273 = (state_30292[7]);var inst_30273__$1 = (state_30292[2]);var inst_30274 = (inst_30273__$1 == null);var state_30292__$1 = (function (){var statearr_30295 = state_30292;(statearr_30295[7] = inst_30273__$1);
return statearr_30295;
})();if(cljs.core.truth_(inst_30274))
{var statearr_30296_30316 = state_30292__$1;(statearr_30296_30316[1] = 5);
} else
{var statearr_30297_30317 = state_30292__$1;(statearr_30297_30317[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30293 === 5))
{var inst_30276 = cljs.core.async.close_BANG_(tc);var inst_30277 = cljs.core.async.close_BANG_(fc);var state_30292__$1 = (function (){var statearr_30298 = state_30292;(statearr_30298[8] = inst_30276);
return statearr_30298;
})();var statearr_30299_30318 = state_30292__$1;(statearr_30299_30318[2] = inst_30277);
(statearr_30299_30318[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30293 === 6))
{var inst_30273 = (state_30292[7]);var inst_30279 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30273) : p.call(null,inst_30273));var state_30292__$1 = state_30292;if(cljs.core.truth_(inst_30279))
{var statearr_30300_30319 = state_30292__$1;(statearr_30300_30319[1] = 9);
} else
{var statearr_30301_30320 = state_30292__$1;(statearr_30301_30320[1] = 10);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30293 === 7))
{var inst_30288 = (state_30292[2]);var state_30292__$1 = state_30292;var statearr_30302_30321 = state_30292__$1;(statearr_30302_30321[2] = inst_30288);
(statearr_30302_30321[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30293 === 8))
{var inst_30285 = (state_30292[2]);var state_30292__$1 = (function (){var statearr_30303 = state_30292;(statearr_30303[9] = inst_30285);
return statearr_30303;
})();var statearr_30304_30322 = state_30292__$1;(statearr_30304_30322[2] = null);
(statearr_30304_30322[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30293 === 9))
{var state_30292__$1 = state_30292;var statearr_30305_30323 = state_30292__$1;(statearr_30305_30323[2] = tc);
(statearr_30305_30323[1] = 11);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30293 === 10))
{var state_30292__$1 = state_30292;var statearr_30306_30324 = state_30292__$1;(statearr_30306_30324[2] = fc);
(statearr_30306_30324[1] = 11);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30293 === 11))
{var inst_30273 = (state_30292[7]);var inst_30283 = (state_30292[2]);var state_30292__$1 = state_30292;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30292__$1,8,inst_30283,inst_30273);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_30310 = (new Array(10));(statearr_30310[0] = state_machine__6013__auto__);
(statearr_30310[1] = 1);
return statearr_30310;
});
var state_machine__6013__auto____1 = (function (state_30292){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_30292);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e30311){if((e30311 instanceof Object))
{var ex__6016__auto__ = e30311;var statearr_30312_30325 = state_30292;(statearr_30312_30325[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30292);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e30311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__30326 = state_30292;
state_30292 = G__30326;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_30292){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_30292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_30313 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_30313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___30314);
return statearr_30313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_30373){var state_val_30374 = (state_30373[1]);if((state_val_30374 === 7))
{var inst_30369 = (state_30373[2]);var state_30373__$1 = state_30373;var statearr_30375_30391 = state_30373__$1;(statearr_30375_30391[2] = inst_30369);
(statearr_30375_30391[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30374 === 6))
{var inst_30362 = (state_30373[7]);var inst_30359 = (state_30373[8]);var inst_30366 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30359,inst_30362) : f.call(null,inst_30359,inst_30362));var inst_30359__$1 = inst_30366;var state_30373__$1 = (function (){var statearr_30376 = state_30373;(statearr_30376[8] = inst_30359__$1);
return statearr_30376;
})();var statearr_30377_30392 = state_30373__$1;(statearr_30377_30392[2] = null);
(statearr_30377_30392[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30374 === 5))
{var inst_30359 = (state_30373[8]);var state_30373__$1 = state_30373;var statearr_30378_30393 = state_30373__$1;(statearr_30378_30393[2] = inst_30359);
(statearr_30378_30393[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30374 === 4))
{var inst_30362 = (state_30373[7]);var inst_30362__$1 = (state_30373[2]);var inst_30363 = (inst_30362__$1 == null);var state_30373__$1 = (function (){var statearr_30379 = state_30373;(statearr_30379[7] = inst_30362__$1);
return statearr_30379;
})();if(cljs.core.truth_(inst_30363))
{var statearr_30380_30394 = state_30373__$1;(statearr_30380_30394[1] = 5);
} else
{var statearr_30381_30395 = state_30373__$1;(statearr_30381_30395[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30374 === 3))
{var inst_30371 = (state_30373[2]);var state_30373__$1 = state_30373;return cljs.core.async.impl.ioc_helpers.return_chan(state_30373__$1,inst_30371);
} else
{if((state_val_30374 === 2))
{var state_30373__$1 = state_30373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30373__$1,4,ch);
} else
{if((state_val_30374 === 1))
{var inst_30359 = init;var state_30373__$1 = (function (){var statearr_30382 = state_30373;(statearr_30382[8] = inst_30359);
return statearr_30382;
})();var statearr_30383_30396 = state_30373__$1;(statearr_30383_30396[2] = null);
(statearr_30383_30396[1] = 2);
return cljs.core.constant$keyword$87;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_30387 = (new Array(9));(statearr_30387[0] = state_machine__6013__auto__);
(statearr_30387[1] = 1);
return statearr_30387;
});
var state_machine__6013__auto____1 = (function (state_30373){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_30373);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e30388){if((e30388 instanceof Object))
{var ex__6016__auto__ = e30388;var statearr_30389_30397 = state_30373;(statearr_30389_30397[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30373);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e30388;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__30398 = state_30373;
state_30373 = G__30398;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_30373){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_30373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_30390 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_30390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto__);
return statearr_30390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
}));
return c__6082__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_30460){var state_val_30461 = (state_30460[1]);if((state_val_30461 === 1))
{var inst_30440 = cljs.core.seq(coll);var inst_30441 = inst_30440;var state_30460__$1 = (function (){var statearr_30462 = state_30460;(statearr_30462[7] = inst_30441);
return statearr_30462;
})();var statearr_30463_30481 = state_30460__$1;(statearr_30463_30481[2] = null);
(statearr_30463_30481[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30461 === 2))
{var inst_30441 = (state_30460[7]);var state_30460__$1 = state_30460;if(cljs.core.truth_(inst_30441))
{var statearr_30464_30482 = state_30460__$1;(statearr_30464_30482[1] = 4);
} else
{var statearr_30465_30483 = state_30460__$1;(statearr_30465_30483[1] = 5);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30461 === 3))
{var inst_30458 = (state_30460[2]);var state_30460__$1 = state_30460;return cljs.core.async.impl.ioc_helpers.return_chan(state_30460__$1,inst_30458);
} else
{if((state_val_30461 === 4))
{var inst_30441 = (state_30460[7]);var inst_30444 = cljs.core.first(inst_30441);var state_30460__$1 = state_30460;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30460__$1,7,ch,inst_30444);
} else
{if((state_val_30461 === 5))
{var state_30460__$1 = state_30460;if(cljs.core.truth_(close_QMARK_))
{var statearr_30466_30484 = state_30460__$1;(statearr_30466_30484[1] = 8);
} else
{var statearr_30467_30485 = state_30460__$1;(statearr_30467_30485[1] = 9);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30461 === 6))
{var inst_30456 = (state_30460[2]);var state_30460__$1 = state_30460;var statearr_30468_30486 = state_30460__$1;(statearr_30468_30486[2] = inst_30456);
(statearr_30468_30486[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30461 === 7))
{var inst_30441 = (state_30460[7]);var inst_30446 = (state_30460[2]);var inst_30447 = cljs.core.next(inst_30441);var inst_30441__$1 = inst_30447;var state_30460__$1 = (function (){var statearr_30469 = state_30460;(statearr_30469[7] = inst_30441__$1);
(statearr_30469[8] = inst_30446);
return statearr_30469;
})();var statearr_30470_30487 = state_30460__$1;(statearr_30470_30487[2] = null);
(statearr_30470_30487[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30461 === 8))
{var inst_30451 = cljs.core.async.close_BANG_(ch);var state_30460__$1 = state_30460;var statearr_30471_30488 = state_30460__$1;(statearr_30471_30488[2] = inst_30451);
(statearr_30471_30488[1] = 10);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30461 === 9))
{var state_30460__$1 = state_30460;var statearr_30472_30489 = state_30460__$1;(statearr_30472_30489[2] = null);
(statearr_30472_30489[1] = 10);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30461 === 10))
{var inst_30454 = (state_30460[2]);var state_30460__$1 = state_30460;var statearr_30473_30490 = state_30460__$1;(statearr_30473_30490[2] = inst_30454);
(statearr_30473_30490[1] = 6);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_30477 = (new Array(9));(statearr_30477[0] = state_machine__6013__auto__);
(statearr_30477[1] = 1);
return statearr_30477;
});
var state_machine__6013__auto____1 = (function (state_30460){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_30460);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e30478){if((e30478 instanceof Object))
{var ex__6016__auto__ = e30478;var statearr_30479_30491 = state_30460;(statearr_30479_30491[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30460);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e30478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__30492 = state_30460;
state_30460 = G__30492;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_30460){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_30460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_30480 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_30480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto__);
return statearr_30480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
}));
return c__6082__auto__;
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
cljs.core.async.Mux = (function (){var obj30494 = {};return obj30494;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3279__auto__ = _;if(and__3279__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3894__auto__ = (((_ == null))?null:_);return (function (){var or__3291__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj30496 = {};return obj30496;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t30711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30711 = (function (cs,ch,mult,meta30712){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30712 = meta30712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30711.cljs$lang$type = true;
cljs.core.async.t30711.cljs$lang$ctorStr = "cljs.core.async/t30711";
cljs.core.async.t30711.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t30711");
});})(cs))
;
cljs.core.async.t30711.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t30711.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t30711.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t30711.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t30711.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t30711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30713){var self__ = this;
var _30713__$1 = this;return self__.meta30712;
});})(cs))
;
cljs.core.async.t30711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30713,meta30712__$1){var self__ = this;
var _30713__$1 = this;return (new cljs.core.async.t30711(self__.cs,self__.ch,self__.mult,meta30712__$1));
});})(cs))
;
cljs.core.async.__GT_t30711 = ((function (cs){
return (function __GT_t30711(cs__$1,ch__$1,mult__$1,meta30712){return (new cljs.core.async.t30711(cs__$1,ch__$1,mult__$1,meta30712));
});})(cs))
;
}
return (new cljs.core.async.t30711(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6082__auto___30925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_30843){var state_val_30844 = (state_30843[1]);if((state_val_30844 === 32))
{var inst_30716 = (state_30843[7]);var inst_30792 = (state_30843[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30843,31,Object,null,30);var inst_30799 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30792,inst_30716,done);var state_30843__$1 = state_30843;var statearr_30845_30926 = state_30843__$1;(statearr_30845_30926[2] = inst_30799);
cljs.core.async.impl.ioc_helpers.process_exception(state_30843__$1);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 1))
{var state_30843__$1 = state_30843;var statearr_30846_30927 = state_30843__$1;(statearr_30846_30927[2] = null);
(statearr_30846_30927[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 33))
{var inst_30805 = (state_30843[9]);var inst_30807 = cljs.core.chunked_seq_QMARK_(inst_30805);var state_30843__$1 = state_30843;if(inst_30807)
{var statearr_30847_30928 = state_30843__$1;(statearr_30847_30928[1] = 36);
} else
{var statearr_30848_30929 = state_30843__$1;(statearr_30848_30929[1] = 37);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 2))
{var state_30843__$1 = state_30843;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30843__$1,4,ch);
} else
{if((state_val_30844 === 34))
{var state_30843__$1 = state_30843;var statearr_30849_30930 = state_30843__$1;(statearr_30849_30930[2] = null);
(statearr_30849_30930[1] = 35);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 3))
{var inst_30841 = (state_30843[2]);var state_30843__$1 = state_30843;return cljs.core.async.impl.ioc_helpers.return_chan(state_30843__$1,inst_30841);
} else
{if((state_val_30844 === 35))
{var inst_30830 = (state_30843[2]);var state_30843__$1 = state_30843;var statearr_30850_30931 = state_30843__$1;(statearr_30850_30931[2] = inst_30830);
(statearr_30850_30931[1] = 29);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 4))
{var inst_30716 = (state_30843[7]);var inst_30716__$1 = (state_30843[2]);var inst_30717 = (inst_30716__$1 == null);var state_30843__$1 = (function (){var statearr_30851 = state_30843;(statearr_30851[7] = inst_30716__$1);
return statearr_30851;
})();if(cljs.core.truth_(inst_30717))
{var statearr_30852_30932 = state_30843__$1;(statearr_30852_30932[1] = 5);
} else
{var statearr_30853_30933 = state_30843__$1;(statearr_30853_30933[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 36))
{var inst_30805 = (state_30843[9]);var inst_30809 = cljs.core.chunk_first(inst_30805);var inst_30810 = cljs.core.chunk_rest(inst_30805);var inst_30811 = cljs.core.count(inst_30809);var inst_30784 = inst_30810;var inst_30785 = inst_30809;var inst_30786 = inst_30811;var inst_30787 = 0;var state_30843__$1 = (function (){var statearr_30854 = state_30843;(statearr_30854[10] = inst_30787);
(statearr_30854[11] = inst_30784);
(statearr_30854[12] = inst_30785);
(statearr_30854[13] = inst_30786);
return statearr_30854;
})();var statearr_30855_30934 = state_30843__$1;(statearr_30855_30934[2] = null);
(statearr_30855_30934[1] = 25);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 5))
{var inst_30723 = cljs.core.deref(cs);var inst_30724 = cljs.core.seq(inst_30723);var inst_30725 = inst_30724;var inst_30726 = null;var inst_30727 = 0;var inst_30728 = 0;var state_30843__$1 = (function (){var statearr_30856 = state_30843;(statearr_30856[14] = inst_30727);
(statearr_30856[15] = inst_30728);
(statearr_30856[16] = inst_30725);
(statearr_30856[17] = inst_30726);
return statearr_30856;
})();var statearr_30857_30935 = state_30843__$1;(statearr_30857_30935[2] = null);
(statearr_30857_30935[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 37))
{var inst_30805 = (state_30843[9]);var inst_30814 = cljs.core.first(inst_30805);var state_30843__$1 = (function (){var statearr_30858 = state_30843;(statearr_30858[18] = inst_30814);
return statearr_30858;
})();var statearr_30859_30936 = state_30843__$1;(statearr_30859_30936[2] = null);
(statearr_30859_30936[1] = 41);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 6))
{var inst_30775 = cljs.core.deref(cs);var inst_30776 = cljs.core.keys(inst_30775);var inst_30777 = cljs.core.count(inst_30776);var inst_30778 = cljs.core.reset_BANG_(dctr,inst_30777);var inst_30783 = cljs.core.seq(inst_30776);var inst_30784 = inst_30783;var inst_30785 = null;var inst_30786 = 0;var inst_30787 = 0;var state_30843__$1 = (function (){var statearr_30860 = state_30843;(statearr_30860[19] = inst_30778);
(statearr_30860[10] = inst_30787);
(statearr_30860[11] = inst_30784);
(statearr_30860[12] = inst_30785);
(statearr_30860[13] = inst_30786);
return statearr_30860;
})();var statearr_30861_30937 = state_30843__$1;(statearr_30861_30937[2] = null);
(statearr_30861_30937[1] = 25);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 38))
{var inst_30827 = (state_30843[2]);var state_30843__$1 = state_30843;var statearr_30862_30938 = state_30843__$1;(statearr_30862_30938[2] = inst_30827);
(statearr_30862_30938[1] = 35);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 7))
{var inst_30839 = (state_30843[2]);var state_30843__$1 = state_30843;var statearr_30863_30939 = state_30843__$1;(statearr_30863_30939[2] = inst_30839);
(statearr_30863_30939[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 39))
{var inst_30805 = (state_30843[9]);var inst_30823 = (state_30843[2]);var inst_30824 = cljs.core.next(inst_30805);var inst_30784 = inst_30824;var inst_30785 = null;var inst_30786 = 0;var inst_30787 = 0;var state_30843__$1 = (function (){var statearr_30864 = state_30843;(statearr_30864[10] = inst_30787);
(statearr_30864[20] = inst_30823);
(statearr_30864[11] = inst_30784);
(statearr_30864[12] = inst_30785);
(statearr_30864[13] = inst_30786);
return statearr_30864;
})();var statearr_30865_30940 = state_30843__$1;(statearr_30865_30940[2] = null);
(statearr_30865_30940[1] = 25);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 8))
{var inst_30727 = (state_30843[14]);var inst_30728 = (state_30843[15]);var inst_30730 = (inst_30728 < inst_30727);var inst_30731 = inst_30730;var state_30843__$1 = state_30843;if(cljs.core.truth_(inst_30731))
{var statearr_30866_30941 = state_30843__$1;(statearr_30866_30941[1] = 10);
} else
{var statearr_30867_30942 = state_30843__$1;(statearr_30867_30942[1] = 11);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 40))
{var inst_30814 = (state_30843[18]);var inst_30815 = (state_30843[2]);var inst_30816 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_30817 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30814);var state_30843__$1 = (function (){var statearr_30868 = state_30843;(statearr_30868[21] = inst_30815);
(statearr_30868[22] = inst_30816);
return statearr_30868;
})();var statearr_30869_30943 = state_30843__$1;(statearr_30869_30943[2] = inst_30817);
cljs.core.async.impl.ioc_helpers.process_exception(state_30843__$1);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 9))
{var inst_30773 = (state_30843[2]);var state_30843__$1 = state_30843;var statearr_30870_30944 = state_30843__$1;(statearr_30870_30944[2] = inst_30773);
(statearr_30870_30944[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 41))
{var inst_30814 = (state_30843[18]);var inst_30716 = (state_30843[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30843,40,Object,null,39);var inst_30821 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30814,inst_30716,done);var state_30843__$1 = state_30843;var statearr_30871_30945 = state_30843__$1;(statearr_30871_30945[2] = inst_30821);
cljs.core.async.impl.ioc_helpers.process_exception(state_30843__$1);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 10))
{var inst_30728 = (state_30843[15]);var inst_30726 = (state_30843[17]);var inst_30734 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30726,inst_30728);var inst_30735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30734,0,null);var inst_30736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30734,1,null);var state_30843__$1 = (function (){var statearr_30872 = state_30843;(statearr_30872[23] = inst_30735);
return statearr_30872;
})();if(cljs.core.truth_(inst_30736))
{var statearr_30873_30946 = state_30843__$1;(statearr_30873_30946[1] = 13);
} else
{var statearr_30874_30947 = state_30843__$1;(statearr_30874_30947[1] = 14);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 42))
{var inst_30836 = (state_30843[2]);var state_30843__$1 = (function (){var statearr_30875 = state_30843;(statearr_30875[24] = inst_30836);
return statearr_30875;
})();var statearr_30876_30948 = state_30843__$1;(statearr_30876_30948[2] = null);
(statearr_30876_30948[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 11))
{var inst_30745 = (state_30843[25]);var inst_30725 = (state_30843[16]);var inst_30745__$1 = cljs.core.seq(inst_30725);var state_30843__$1 = (function (){var statearr_30877 = state_30843;(statearr_30877[25] = inst_30745__$1);
return statearr_30877;
})();if(inst_30745__$1)
{var statearr_30878_30949 = state_30843__$1;(statearr_30878_30949[1] = 16);
} else
{var statearr_30879_30950 = state_30843__$1;(statearr_30879_30950[1] = 17);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 12))
{var inst_30771 = (state_30843[2]);var state_30843__$1 = state_30843;var statearr_30880_30951 = state_30843__$1;(statearr_30880_30951[2] = inst_30771);
(statearr_30880_30951[1] = 9);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 13))
{var inst_30735 = (state_30843[23]);var inst_30738 = cljs.core.async.close_BANG_(inst_30735);var state_30843__$1 = state_30843;var statearr_30884_30952 = state_30843__$1;(statearr_30884_30952[2] = inst_30738);
(statearr_30884_30952[1] = 15);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 14))
{var state_30843__$1 = state_30843;var statearr_30885_30953 = state_30843__$1;(statearr_30885_30953[2] = null);
(statearr_30885_30953[1] = 15);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 15))
{var inst_30727 = (state_30843[14]);var inst_30728 = (state_30843[15]);var inst_30725 = (state_30843[16]);var inst_30726 = (state_30843[17]);var inst_30741 = (state_30843[2]);var inst_30742 = (inst_30728 + 1);var tmp30881 = inst_30727;var tmp30882 = inst_30725;var tmp30883 = inst_30726;var inst_30725__$1 = tmp30882;var inst_30726__$1 = tmp30883;var inst_30727__$1 = tmp30881;var inst_30728__$1 = inst_30742;var state_30843__$1 = (function (){var statearr_30886 = state_30843;(statearr_30886[26] = inst_30741);
(statearr_30886[14] = inst_30727__$1);
(statearr_30886[15] = inst_30728__$1);
(statearr_30886[16] = inst_30725__$1);
(statearr_30886[17] = inst_30726__$1);
return statearr_30886;
})();var statearr_30887_30954 = state_30843__$1;(statearr_30887_30954[2] = null);
(statearr_30887_30954[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 16))
{var inst_30745 = (state_30843[25]);var inst_30747 = cljs.core.chunked_seq_QMARK_(inst_30745);var state_30843__$1 = state_30843;if(inst_30747)
{var statearr_30888_30955 = state_30843__$1;(statearr_30888_30955[1] = 19);
} else
{var statearr_30889_30956 = state_30843__$1;(statearr_30889_30956[1] = 20);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 17))
{var state_30843__$1 = state_30843;var statearr_30890_30957 = state_30843__$1;(statearr_30890_30957[2] = null);
(statearr_30890_30957[1] = 18);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 18))
{var inst_30769 = (state_30843[2]);var state_30843__$1 = state_30843;var statearr_30891_30958 = state_30843__$1;(statearr_30891_30958[2] = inst_30769);
(statearr_30891_30958[1] = 12);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 19))
{var inst_30745 = (state_30843[25]);var inst_30749 = cljs.core.chunk_first(inst_30745);var inst_30750 = cljs.core.chunk_rest(inst_30745);var inst_30751 = cljs.core.count(inst_30749);var inst_30725 = inst_30750;var inst_30726 = inst_30749;var inst_30727 = inst_30751;var inst_30728 = 0;var state_30843__$1 = (function (){var statearr_30892 = state_30843;(statearr_30892[14] = inst_30727);
(statearr_30892[15] = inst_30728);
(statearr_30892[16] = inst_30725);
(statearr_30892[17] = inst_30726);
return statearr_30892;
})();var statearr_30893_30959 = state_30843__$1;(statearr_30893_30959[2] = null);
(statearr_30893_30959[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 20))
{var inst_30745 = (state_30843[25]);var inst_30755 = cljs.core.first(inst_30745);var inst_30756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30755,0,null);var inst_30757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30755,1,null);var state_30843__$1 = (function (){var statearr_30894 = state_30843;(statearr_30894[27] = inst_30756);
return statearr_30894;
})();if(cljs.core.truth_(inst_30757))
{var statearr_30895_30960 = state_30843__$1;(statearr_30895_30960[1] = 22);
} else
{var statearr_30896_30961 = state_30843__$1;(statearr_30896_30961[1] = 23);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 21))
{var inst_30766 = (state_30843[2]);var state_30843__$1 = state_30843;var statearr_30897_30962 = state_30843__$1;(statearr_30897_30962[2] = inst_30766);
(statearr_30897_30962[1] = 18);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 22))
{var inst_30756 = (state_30843[27]);var inst_30759 = cljs.core.async.close_BANG_(inst_30756);var state_30843__$1 = state_30843;var statearr_30898_30963 = state_30843__$1;(statearr_30898_30963[2] = inst_30759);
(statearr_30898_30963[1] = 24);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 23))
{var state_30843__$1 = state_30843;var statearr_30899_30964 = state_30843__$1;(statearr_30899_30964[2] = null);
(statearr_30899_30964[1] = 24);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 24))
{var inst_30745 = (state_30843[25]);var inst_30762 = (state_30843[2]);var inst_30763 = cljs.core.next(inst_30745);var inst_30725 = inst_30763;var inst_30726 = null;var inst_30727 = 0;var inst_30728 = 0;var state_30843__$1 = (function (){var statearr_30900 = state_30843;(statearr_30900[28] = inst_30762);
(statearr_30900[14] = inst_30727);
(statearr_30900[15] = inst_30728);
(statearr_30900[16] = inst_30725);
(statearr_30900[17] = inst_30726);
return statearr_30900;
})();var statearr_30901_30965 = state_30843__$1;(statearr_30901_30965[2] = null);
(statearr_30901_30965[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 25))
{var inst_30787 = (state_30843[10]);var inst_30786 = (state_30843[13]);var inst_30789 = (inst_30787 < inst_30786);var inst_30790 = inst_30789;var state_30843__$1 = state_30843;if(cljs.core.truth_(inst_30790))
{var statearr_30902_30966 = state_30843__$1;(statearr_30902_30966[1] = 27);
} else
{var statearr_30903_30967 = state_30843__$1;(statearr_30903_30967[1] = 28);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 26))
{var inst_30834 = (state_30843[2]);var state_30843__$1 = (function (){var statearr_30904 = state_30843;(statearr_30904[29] = inst_30834);
return statearr_30904;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30843__$1,42,dchan);
} else
{if((state_val_30844 === 27))
{var inst_30787 = (state_30843[10]);var inst_30785 = (state_30843[12]);var inst_30792 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30785,inst_30787);var state_30843__$1 = (function (){var statearr_30905 = state_30843;(statearr_30905[8] = inst_30792);
return statearr_30905;
})();var statearr_30906_30968 = state_30843__$1;(statearr_30906_30968[2] = null);
(statearr_30906_30968[1] = 32);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 28))
{var inst_30784 = (state_30843[11]);var inst_30805 = (state_30843[9]);var inst_30805__$1 = cljs.core.seq(inst_30784);var state_30843__$1 = (function (){var statearr_30910 = state_30843;(statearr_30910[9] = inst_30805__$1);
return statearr_30910;
})();if(inst_30805__$1)
{var statearr_30911_30969 = state_30843__$1;(statearr_30911_30969[1] = 33);
} else
{var statearr_30912_30970 = state_30843__$1;(statearr_30912_30970[1] = 34);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 29))
{var inst_30832 = (state_30843[2]);var state_30843__$1 = state_30843;var statearr_30913_30971 = state_30843__$1;(statearr_30913_30971[2] = inst_30832);
(statearr_30913_30971[1] = 26);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 30))
{var inst_30787 = (state_30843[10]);var inst_30784 = (state_30843[11]);var inst_30785 = (state_30843[12]);var inst_30786 = (state_30843[13]);var inst_30801 = (state_30843[2]);var inst_30802 = (inst_30787 + 1);var tmp30907 = inst_30784;var tmp30908 = inst_30785;var tmp30909 = inst_30786;var inst_30784__$1 = tmp30907;var inst_30785__$1 = tmp30908;var inst_30786__$1 = tmp30909;var inst_30787__$1 = inst_30802;var state_30843__$1 = (function (){var statearr_30914 = state_30843;(statearr_30914[10] = inst_30787__$1);
(statearr_30914[11] = inst_30784__$1);
(statearr_30914[12] = inst_30785__$1);
(statearr_30914[13] = inst_30786__$1);
(statearr_30914[30] = inst_30801);
return statearr_30914;
})();var statearr_30915_30972 = state_30843__$1;(statearr_30915_30972[2] = null);
(statearr_30915_30972[1] = 25);
return cljs.core.constant$keyword$87;
} else
{if((state_val_30844 === 31))
{var inst_30792 = (state_30843[8]);var inst_30793 = (state_30843[2]);var inst_30794 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_30795 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30792);var state_30843__$1 = (function (){var statearr_30916 = state_30843;(statearr_30916[31] = inst_30794);
(statearr_30916[32] = inst_30793);
return statearr_30916;
})();var statearr_30917_30973 = state_30843__$1;(statearr_30917_30973[2] = inst_30795);
cljs.core.async.impl.ioc_helpers.process_exception(state_30843__$1);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_30921 = (new Array(33));(statearr_30921[0] = state_machine__6013__auto__);
(statearr_30921[1] = 1);
return statearr_30921;
});
var state_machine__6013__auto____1 = (function (state_30843){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_30843);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e30922){if((e30922 instanceof Object))
{var ex__6016__auto__ = e30922;var statearr_30923_30974 = state_30843;(statearr_30923_30974[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30843);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e30922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__30975 = state_30843;
state_30843 = G__30975;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_30843){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_30843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_30924 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_30924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___30925);
return statearr_30924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
cljs.core.async.Mix = (function (){var obj30977 = {};return obj30977;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$94,null,cljs.core.constant$keyword$95,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$96);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$95);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$96,chs);var pauses = pick(cljs.core.constant$keyword$94,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$97,solos,cljs.core.constant$keyword$98,pick(cljs.core.constant$keyword$95,chs),cljs.core.constant$keyword$99,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$94)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t31087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31087 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta31088){
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
this.meta31088 = meta31088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31087.cljs$lang$type = true;
cljs.core.async.t31087.cljs$lang$ctorStr = "cljs.core.async/t31087";
cljs.core.async.t31087.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t31087");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31087.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31087.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31089){var self__ = this;
var _31089__$1 = this;return self__.meta31088;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31089,meta31088__$1){var self__ = this;
var _31089__$1 = this;return (new cljs.core.async.t31087(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta31088__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31087 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31087(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31088){return (new cljs.core.async.t31087(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31088));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31087(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6082__auto___31196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_31154){var state_val_31155 = (state_31154[1]);if((state_val_31155 === 1))
{var inst_31093 = (state_31154[7]);var inst_31093__$1 = calc_state();var inst_31094 = cljs.core.seq_QMARK_(inst_31093__$1);var state_31154__$1 = (function (){var statearr_31156 = state_31154;(statearr_31156[7] = inst_31093__$1);
return statearr_31156;
})();if(inst_31094)
{var statearr_31157_31197 = state_31154__$1;(statearr_31157_31197[1] = 2);
} else
{var statearr_31158_31198 = state_31154__$1;(statearr_31158_31198[1] = 3);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 2))
{var inst_31093 = (state_31154[7]);var inst_31096 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31093);var state_31154__$1 = state_31154;var statearr_31159_31199 = state_31154__$1;(statearr_31159_31199[2] = inst_31096);
(statearr_31159_31199[1] = 4);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 3))
{var inst_31093 = (state_31154[7]);var state_31154__$1 = state_31154;var statearr_31160_31200 = state_31154__$1;(statearr_31160_31200[2] = inst_31093);
(statearr_31160_31200[1] = 4);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 4))
{var inst_31093 = (state_31154[7]);var inst_31099 = (state_31154[2]);var inst_31100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31099,cljs.core.constant$keyword$99);var inst_31101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31099,cljs.core.constant$keyword$98);var inst_31102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31099,cljs.core.constant$keyword$97);var inst_31103 = inst_31093;var state_31154__$1 = (function (){var statearr_31161 = state_31154;(statearr_31161[8] = inst_31101);
(statearr_31161[9] = inst_31100);
(statearr_31161[10] = inst_31102);
(statearr_31161[11] = inst_31103);
return statearr_31161;
})();var statearr_31162_31201 = state_31154__$1;(statearr_31162_31201[2] = null);
(statearr_31162_31201[1] = 5);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 5))
{var inst_31103 = (state_31154[11]);var inst_31106 = cljs.core.seq_QMARK_(inst_31103);var state_31154__$1 = state_31154;if(inst_31106)
{var statearr_31163_31202 = state_31154__$1;(statearr_31163_31202[1] = 7);
} else
{var statearr_31164_31203 = state_31154__$1;(statearr_31164_31203[1] = 8);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 6))
{var inst_31152 = (state_31154[2]);var state_31154__$1 = state_31154;return cljs.core.async.impl.ioc_helpers.return_chan(state_31154__$1,inst_31152);
} else
{if((state_val_31155 === 7))
{var inst_31103 = (state_31154[11]);var inst_31108 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31103);var state_31154__$1 = state_31154;var statearr_31165_31204 = state_31154__$1;(statearr_31165_31204[2] = inst_31108);
(statearr_31165_31204[1] = 9);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 8))
{var inst_31103 = (state_31154[11]);var state_31154__$1 = state_31154;var statearr_31166_31205 = state_31154__$1;(statearr_31166_31205[2] = inst_31103);
(statearr_31166_31205[1] = 9);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 9))
{var inst_31111 = (state_31154[12]);var inst_31111__$1 = (state_31154[2]);var inst_31112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31111__$1,cljs.core.constant$keyword$99);var inst_31113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31111__$1,cljs.core.constant$keyword$98);var inst_31114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31111__$1,cljs.core.constant$keyword$97);var state_31154__$1 = (function (){var statearr_31167 = state_31154;(statearr_31167[13] = inst_31113);
(statearr_31167[14] = inst_31114);
(statearr_31167[12] = inst_31111__$1);
return statearr_31167;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_31154__$1,10,inst_31112);
} else
{if((state_val_31155 === 10))
{var inst_31118 = (state_31154[15]);var inst_31119 = (state_31154[16]);var inst_31117 = (state_31154[2]);var inst_31118__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31117,0,null);var inst_31119__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31117,1,null);var inst_31120 = (inst_31118__$1 == null);var inst_31121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31119__$1,change);var inst_31122 = (inst_31120) || (inst_31121);var state_31154__$1 = (function (){var statearr_31168 = state_31154;(statearr_31168[15] = inst_31118__$1);
(statearr_31168[16] = inst_31119__$1);
return statearr_31168;
})();if(cljs.core.truth_(inst_31122))
{var statearr_31169_31206 = state_31154__$1;(statearr_31169_31206[1] = 11);
} else
{var statearr_31170_31207 = state_31154__$1;(statearr_31170_31207[1] = 12);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 11))
{var inst_31118 = (state_31154[15]);var inst_31124 = (inst_31118 == null);var state_31154__$1 = state_31154;if(cljs.core.truth_(inst_31124))
{var statearr_31171_31208 = state_31154__$1;(statearr_31171_31208[1] = 14);
} else
{var statearr_31172_31209 = state_31154__$1;(statearr_31172_31209[1] = 15);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 12))
{var inst_31119 = (state_31154[16]);var inst_31133 = (state_31154[17]);var inst_31114 = (state_31154[14]);var inst_31133__$1 = (inst_31114.cljs$core$IFn$_invoke$arity$1 ? inst_31114.cljs$core$IFn$_invoke$arity$1(inst_31119) : inst_31114.call(null,inst_31119));var state_31154__$1 = (function (){var statearr_31173 = state_31154;(statearr_31173[17] = inst_31133__$1);
return statearr_31173;
})();if(cljs.core.truth_(inst_31133__$1))
{var statearr_31174_31210 = state_31154__$1;(statearr_31174_31210[1] = 17);
} else
{var statearr_31175_31211 = state_31154__$1;(statearr_31175_31211[1] = 18);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 13))
{var inst_31150 = (state_31154[2]);var state_31154__$1 = state_31154;var statearr_31176_31212 = state_31154__$1;(statearr_31176_31212[2] = inst_31150);
(statearr_31176_31212[1] = 6);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 14))
{var inst_31119 = (state_31154[16]);var inst_31126 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31119);var state_31154__$1 = state_31154;var statearr_31177_31213 = state_31154__$1;(statearr_31177_31213[2] = inst_31126);
(statearr_31177_31213[1] = 16);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 15))
{var state_31154__$1 = state_31154;var statearr_31178_31214 = state_31154__$1;(statearr_31178_31214[2] = null);
(statearr_31178_31214[1] = 16);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 16))
{var inst_31129 = (state_31154[2]);var inst_31130 = calc_state();var inst_31103 = inst_31130;var state_31154__$1 = (function (){var statearr_31179 = state_31154;(statearr_31179[18] = inst_31129);
(statearr_31179[11] = inst_31103);
return statearr_31179;
})();var statearr_31180_31215 = state_31154__$1;(statearr_31180_31215[2] = null);
(statearr_31180_31215[1] = 5);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 17))
{var inst_31133 = (state_31154[17]);var state_31154__$1 = state_31154;var statearr_31181_31216 = state_31154__$1;(statearr_31181_31216[2] = inst_31133);
(statearr_31181_31216[1] = 19);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 18))
{var inst_31119 = (state_31154[16]);var inst_31113 = (state_31154[13]);var inst_31114 = (state_31154[14]);var inst_31136 = cljs.core.empty_QMARK_(inst_31114);var inst_31137 = (inst_31113.cljs$core$IFn$_invoke$arity$1 ? inst_31113.cljs$core$IFn$_invoke$arity$1(inst_31119) : inst_31113.call(null,inst_31119));var inst_31138 = cljs.core.not(inst_31137);var inst_31139 = (inst_31136) && (inst_31138);var state_31154__$1 = state_31154;var statearr_31182_31217 = state_31154__$1;(statearr_31182_31217[2] = inst_31139);
(statearr_31182_31217[1] = 19);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 19))
{var inst_31141 = (state_31154[2]);var state_31154__$1 = state_31154;if(cljs.core.truth_(inst_31141))
{var statearr_31183_31218 = state_31154__$1;(statearr_31183_31218[1] = 20);
} else
{var statearr_31184_31219 = state_31154__$1;(statearr_31184_31219[1] = 21);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 20))
{var inst_31118 = (state_31154[15]);var state_31154__$1 = state_31154;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31154__$1,23,out,inst_31118);
} else
{if((state_val_31155 === 21))
{var state_31154__$1 = state_31154;var statearr_31185_31220 = state_31154__$1;(statearr_31185_31220[2] = null);
(statearr_31185_31220[1] = 22);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 22))
{var inst_31111 = (state_31154[12]);var inst_31147 = (state_31154[2]);var inst_31103 = inst_31111;var state_31154__$1 = (function (){var statearr_31186 = state_31154;(statearr_31186[19] = inst_31147);
(statearr_31186[11] = inst_31103);
return statearr_31186;
})();var statearr_31187_31221 = state_31154__$1;(statearr_31187_31221[2] = null);
(statearr_31187_31221[1] = 5);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31155 === 23))
{var inst_31144 = (state_31154[2]);var state_31154__$1 = state_31154;var statearr_31188_31222 = state_31154__$1;(statearr_31188_31222[2] = inst_31144);
(statearr_31188_31222[1] = 22);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_31192 = (new Array(20));(statearr_31192[0] = state_machine__6013__auto__);
(statearr_31192[1] = 1);
return statearr_31192;
});
var state_machine__6013__auto____1 = (function (state_31154){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_31154);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e31193){if((e31193 instanceof Object))
{var ex__6016__auto__ = e31193;var statearr_31194_31223 = state_31154;(statearr_31194_31223[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31154);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e31193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__31224 = state_31154;
state_31154 = G__31224;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_31154){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_31154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_31195 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_31195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___31196);
return statearr_31195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
cljs.core.async.Pub = (function (){var obj31226 = {};return obj31226;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
return (function (topic){var or__3291__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3291__auto__,mults){
return (function (p1__31227_SHARP_){if(cljs.core.truth_((p1__31227_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31227_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31227_SHARP_.call(null,topic))))
{return p1__31227_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31227_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t31352 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31352 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31353){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31353 = meta31353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31352.cljs$lang$type = true;
cljs.core.async.t31352.cljs$lang$ctorStr = "cljs.core.async/t31352";
cljs.core.async.t31352.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t31352");
});})(mults,ensure_mult))
;
cljs.core.async.t31352.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t31352.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t31352.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t31352.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t31352.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t31352.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31352.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t31352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31354){var self__ = this;
var _31354__$1 = this;return self__.meta31353;
});})(mults,ensure_mult))
;
cljs.core.async.t31352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31354,meta31353__$1){var self__ = this;
var _31354__$1 = this;return (new cljs.core.async.t31352(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31353__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t31352 = ((function (mults,ensure_mult){
return (function __GT_t31352(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31353){return (new cljs.core.async.t31352(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31353));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t31352(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6082__auto___31476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_31428){var state_val_31429 = (state_31428[1]);if((state_val_31429 === 1))
{var state_31428__$1 = state_31428;var statearr_31430_31477 = state_31428__$1;(statearr_31430_31477[2] = null);
(statearr_31430_31477[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 2))
{var state_31428__$1 = state_31428;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31428__$1,4,ch);
} else
{if((state_val_31429 === 3))
{var inst_31426 = (state_31428[2]);var state_31428__$1 = state_31428;return cljs.core.async.impl.ioc_helpers.return_chan(state_31428__$1,inst_31426);
} else
{if((state_val_31429 === 4))
{var inst_31357 = (state_31428[7]);var inst_31357__$1 = (state_31428[2]);var inst_31358 = (inst_31357__$1 == null);var state_31428__$1 = (function (){var statearr_31431 = state_31428;(statearr_31431[7] = inst_31357__$1);
return statearr_31431;
})();if(cljs.core.truth_(inst_31358))
{var statearr_31432_31478 = state_31428__$1;(statearr_31432_31478[1] = 5);
} else
{var statearr_31433_31479 = state_31428__$1;(statearr_31433_31479[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 5))
{var inst_31364 = cljs.core.deref(mults);var inst_31365 = cljs.core.vals(inst_31364);var inst_31366 = cljs.core.seq(inst_31365);var inst_31367 = inst_31366;var inst_31368 = null;var inst_31369 = 0;var inst_31370 = 0;var state_31428__$1 = (function (){var statearr_31434 = state_31428;(statearr_31434[8] = inst_31370);
(statearr_31434[9] = inst_31367);
(statearr_31434[10] = inst_31368);
(statearr_31434[11] = inst_31369);
return statearr_31434;
})();var statearr_31435_31480 = state_31428__$1;(statearr_31435_31480[2] = null);
(statearr_31435_31480[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 6))
{var inst_31405 = (state_31428[12]);var inst_31357 = (state_31428[7]);var inst_31407 = (state_31428[13]);var inst_31405__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31357) : topic_fn.call(null,inst_31357));var inst_31406 = cljs.core.deref(mults);var inst_31407__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31406,inst_31405__$1);var state_31428__$1 = (function (){var statearr_31436 = state_31428;(statearr_31436[12] = inst_31405__$1);
(statearr_31436[13] = inst_31407__$1);
return statearr_31436;
})();if(cljs.core.truth_(inst_31407__$1))
{var statearr_31437_31481 = state_31428__$1;(statearr_31437_31481[1] = 19);
} else
{var statearr_31438_31482 = state_31428__$1;(statearr_31438_31482[1] = 20);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 7))
{var inst_31424 = (state_31428[2]);var state_31428__$1 = state_31428;var statearr_31439_31483 = state_31428__$1;(statearr_31439_31483[2] = inst_31424);
(statearr_31439_31483[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 8))
{var inst_31370 = (state_31428[8]);var inst_31369 = (state_31428[11]);var inst_31372 = (inst_31370 < inst_31369);var inst_31373 = inst_31372;var state_31428__$1 = state_31428;if(cljs.core.truth_(inst_31373))
{var statearr_31443_31484 = state_31428__$1;(statearr_31443_31484[1] = 10);
} else
{var statearr_31444_31485 = state_31428__$1;(statearr_31444_31485[1] = 11);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 9))
{var inst_31403 = (state_31428[2]);var state_31428__$1 = state_31428;var statearr_31445_31486 = state_31428__$1;(statearr_31445_31486[2] = inst_31403);
(statearr_31445_31486[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 10))
{var inst_31370 = (state_31428[8]);var inst_31367 = (state_31428[9]);var inst_31368 = (state_31428[10]);var inst_31369 = (state_31428[11]);var inst_31375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31368,inst_31370);var inst_31376 = cljs.core.async.muxch_STAR_(inst_31375);var inst_31377 = cljs.core.async.close_BANG_(inst_31376);var inst_31378 = (inst_31370 + 1);var tmp31440 = inst_31367;var tmp31441 = inst_31368;var tmp31442 = inst_31369;var inst_31367__$1 = tmp31440;var inst_31368__$1 = tmp31441;var inst_31369__$1 = tmp31442;var inst_31370__$1 = inst_31378;var state_31428__$1 = (function (){var statearr_31446 = state_31428;(statearr_31446[8] = inst_31370__$1);
(statearr_31446[14] = inst_31377);
(statearr_31446[9] = inst_31367__$1);
(statearr_31446[10] = inst_31368__$1);
(statearr_31446[11] = inst_31369__$1);
return statearr_31446;
})();var statearr_31447_31487 = state_31428__$1;(statearr_31447_31487[2] = null);
(statearr_31447_31487[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 11))
{var inst_31381 = (state_31428[15]);var inst_31367 = (state_31428[9]);var inst_31381__$1 = cljs.core.seq(inst_31367);var state_31428__$1 = (function (){var statearr_31448 = state_31428;(statearr_31448[15] = inst_31381__$1);
return statearr_31448;
})();if(inst_31381__$1)
{var statearr_31449_31488 = state_31428__$1;(statearr_31449_31488[1] = 13);
} else
{var statearr_31450_31489 = state_31428__$1;(statearr_31450_31489[1] = 14);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 12))
{var inst_31401 = (state_31428[2]);var state_31428__$1 = state_31428;var statearr_31451_31490 = state_31428__$1;(statearr_31451_31490[2] = inst_31401);
(statearr_31451_31490[1] = 9);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 13))
{var inst_31381 = (state_31428[15]);var inst_31383 = cljs.core.chunked_seq_QMARK_(inst_31381);var state_31428__$1 = state_31428;if(inst_31383)
{var statearr_31452_31491 = state_31428__$1;(statearr_31452_31491[1] = 16);
} else
{var statearr_31453_31492 = state_31428__$1;(statearr_31453_31492[1] = 17);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 14))
{var state_31428__$1 = state_31428;var statearr_31454_31493 = state_31428__$1;(statearr_31454_31493[2] = null);
(statearr_31454_31493[1] = 15);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 15))
{var inst_31399 = (state_31428[2]);var state_31428__$1 = state_31428;var statearr_31455_31494 = state_31428__$1;(statearr_31455_31494[2] = inst_31399);
(statearr_31455_31494[1] = 12);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 16))
{var inst_31381 = (state_31428[15]);var inst_31385 = cljs.core.chunk_first(inst_31381);var inst_31386 = cljs.core.chunk_rest(inst_31381);var inst_31387 = cljs.core.count(inst_31385);var inst_31367 = inst_31386;var inst_31368 = inst_31385;var inst_31369 = inst_31387;var inst_31370 = 0;var state_31428__$1 = (function (){var statearr_31456 = state_31428;(statearr_31456[8] = inst_31370);
(statearr_31456[9] = inst_31367);
(statearr_31456[10] = inst_31368);
(statearr_31456[11] = inst_31369);
return statearr_31456;
})();var statearr_31457_31495 = state_31428__$1;(statearr_31457_31495[2] = null);
(statearr_31457_31495[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 17))
{var inst_31381 = (state_31428[15]);var inst_31390 = cljs.core.first(inst_31381);var inst_31391 = cljs.core.async.muxch_STAR_(inst_31390);var inst_31392 = cljs.core.async.close_BANG_(inst_31391);var inst_31393 = cljs.core.next(inst_31381);var inst_31367 = inst_31393;var inst_31368 = null;var inst_31369 = 0;var inst_31370 = 0;var state_31428__$1 = (function (){var statearr_31458 = state_31428;(statearr_31458[8] = inst_31370);
(statearr_31458[9] = inst_31367);
(statearr_31458[10] = inst_31368);
(statearr_31458[11] = inst_31369);
(statearr_31458[16] = inst_31392);
return statearr_31458;
})();var statearr_31459_31496 = state_31428__$1;(statearr_31459_31496[2] = null);
(statearr_31459_31496[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 18))
{var inst_31396 = (state_31428[2]);var state_31428__$1 = state_31428;var statearr_31460_31497 = state_31428__$1;(statearr_31460_31497[2] = inst_31396);
(statearr_31460_31497[1] = 15);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 19))
{var state_31428__$1 = state_31428;var statearr_31461_31498 = state_31428__$1;(statearr_31461_31498[2] = null);
(statearr_31461_31498[1] = 24);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 20))
{var state_31428__$1 = state_31428;var statearr_31462_31499 = state_31428__$1;(statearr_31462_31499[2] = null);
(statearr_31462_31499[1] = 21);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 21))
{var inst_31421 = (state_31428[2]);var state_31428__$1 = (function (){var statearr_31463 = state_31428;(statearr_31463[17] = inst_31421);
return statearr_31463;
})();var statearr_31464_31500 = state_31428__$1;(statearr_31464_31500[2] = null);
(statearr_31464_31500[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 22))
{var inst_31418 = (state_31428[2]);var state_31428__$1 = state_31428;var statearr_31465_31501 = state_31428__$1;(statearr_31465_31501[2] = inst_31418);
(statearr_31465_31501[1] = 21);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 23))
{var inst_31405 = (state_31428[12]);var inst_31409 = (state_31428[2]);var inst_31410 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31405);var state_31428__$1 = (function (){var statearr_31466 = state_31428;(statearr_31466[18] = inst_31409);
return statearr_31466;
})();var statearr_31467_31502 = state_31428__$1;(statearr_31467_31502[2] = inst_31410);
cljs.core.async.impl.ioc_helpers.process_exception(state_31428__$1);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31429 === 24))
{var inst_31357 = (state_31428[7]);var inst_31407 = (state_31428[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31428,23,Object,null,22);var inst_31414 = cljs.core.async.muxch_STAR_(inst_31407);var state_31428__$1 = state_31428;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31428__$1,25,inst_31414,inst_31357);
} else
{if((state_val_31429 === 25))
{var inst_31416 = (state_31428[2]);var state_31428__$1 = state_31428;var statearr_31468_31503 = state_31428__$1;(statearr_31468_31503[2] = inst_31416);
cljs.core.async.impl.ioc_helpers.process_exception(state_31428__$1);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_31472 = (new Array(19));(statearr_31472[0] = state_machine__6013__auto__);
(statearr_31472[1] = 1);
return statearr_31472;
});
var state_machine__6013__auto____1 = (function (state_31428){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_31428);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e31473){if((e31473 instanceof Object))
{var ex__6016__auto__ = e31473;var statearr_31474_31504 = state_31428;(statearr_31474_31504[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31428);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e31473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__31505 = state_31428;
state_31428 = G__31505;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_31428){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_31428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_31475 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_31475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___31476);
return statearr_31475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6082__auto___31642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_31612){var state_val_31613 = (state_31612[1]);if((state_val_31613 === 1))
{var state_31612__$1 = state_31612;var statearr_31614_31643 = state_31612__$1;(statearr_31614_31643[2] = null);
(statearr_31614_31643[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 2))
{var inst_31575 = cljs.core.reset_BANG_(dctr,cnt);var inst_31576 = 0;var state_31612__$1 = (function (){var statearr_31615 = state_31612;(statearr_31615[7] = inst_31575);
(statearr_31615[8] = inst_31576);
return statearr_31615;
})();var statearr_31616_31644 = state_31612__$1;(statearr_31616_31644[2] = null);
(statearr_31616_31644[1] = 4);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 3))
{var inst_31610 = (state_31612[2]);var state_31612__$1 = state_31612;return cljs.core.async.impl.ioc_helpers.return_chan(state_31612__$1,inst_31610);
} else
{if((state_val_31613 === 4))
{var inst_31576 = (state_31612[8]);var inst_31578 = (inst_31576 < cnt);var state_31612__$1 = state_31612;if(cljs.core.truth_(inst_31578))
{var statearr_31617_31645 = state_31612__$1;(statearr_31617_31645[1] = 6);
} else
{var statearr_31618_31646 = state_31612__$1;(statearr_31618_31646[1] = 7);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 5))
{var inst_31596 = (state_31612[2]);var state_31612__$1 = (function (){var statearr_31619 = state_31612;(statearr_31619[9] = inst_31596);
return statearr_31619;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31612__$1,12,dchan);
} else
{if((state_val_31613 === 6))
{var state_31612__$1 = state_31612;var statearr_31620_31647 = state_31612__$1;(statearr_31620_31647[2] = null);
(statearr_31620_31647[1] = 11);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 7))
{var state_31612__$1 = state_31612;var statearr_31621_31648 = state_31612__$1;(statearr_31621_31648[2] = null);
(statearr_31621_31648[1] = 8);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 8))
{var inst_31594 = (state_31612[2]);var state_31612__$1 = state_31612;var statearr_31622_31649 = state_31612__$1;(statearr_31622_31649[2] = inst_31594);
(statearr_31622_31649[1] = 5);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 9))
{var inst_31576 = (state_31612[8]);var inst_31589 = (state_31612[2]);var inst_31590 = (inst_31576 + 1);var inst_31576__$1 = inst_31590;var state_31612__$1 = (function (){var statearr_31623 = state_31612;(statearr_31623[8] = inst_31576__$1);
(statearr_31623[10] = inst_31589);
return statearr_31623;
})();var statearr_31624_31650 = state_31612__$1;(statearr_31624_31650[2] = null);
(statearr_31624_31650[1] = 4);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 10))
{var inst_31580 = (state_31612[2]);var inst_31581 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_31612__$1 = (function (){var statearr_31625 = state_31612;(statearr_31625[11] = inst_31580);
return statearr_31625;
})();var statearr_31626_31651 = state_31612__$1;(statearr_31626_31651[2] = inst_31581);
cljs.core.async.impl.ioc_helpers.process_exception(state_31612__$1);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 11))
{var inst_31576 = (state_31612[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31612,10,Object,null,9);var inst_31585 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31576) : chs__$1.call(null,inst_31576));var inst_31586 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31576) : done.call(null,inst_31576));var inst_31587 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31585,inst_31586);var state_31612__$1 = state_31612;var statearr_31627_31652 = state_31612__$1;(statearr_31627_31652[2] = inst_31587);
cljs.core.async.impl.ioc_helpers.process_exception(state_31612__$1);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 12))
{var inst_31598 = (state_31612[12]);var inst_31598__$1 = (state_31612[2]);var inst_31599 = cljs.core.some(cljs.core.nil_QMARK_,inst_31598__$1);var state_31612__$1 = (function (){var statearr_31628 = state_31612;(statearr_31628[12] = inst_31598__$1);
return statearr_31628;
})();if(cljs.core.truth_(inst_31599))
{var statearr_31629_31653 = state_31612__$1;(statearr_31629_31653[1] = 13);
} else
{var statearr_31630_31654 = state_31612__$1;(statearr_31630_31654[1] = 14);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 13))
{var inst_31601 = cljs.core.async.close_BANG_(out);var state_31612__$1 = state_31612;var statearr_31631_31655 = state_31612__$1;(statearr_31631_31655[2] = inst_31601);
(statearr_31631_31655[1] = 15);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 14))
{var inst_31598 = (state_31612[12]);var inst_31603 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31598);var state_31612__$1 = state_31612;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31612__$1,16,out,inst_31603);
} else
{if((state_val_31613 === 15))
{var inst_31608 = (state_31612[2]);var state_31612__$1 = state_31612;var statearr_31632_31656 = state_31612__$1;(statearr_31632_31656[2] = inst_31608);
(statearr_31632_31656[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31613 === 16))
{var inst_31605 = (state_31612[2]);var state_31612__$1 = (function (){var statearr_31633 = state_31612;(statearr_31633[13] = inst_31605);
return statearr_31633;
})();var statearr_31634_31657 = state_31612__$1;(statearr_31634_31657[2] = null);
(statearr_31634_31657[1] = 2);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_31638 = (new Array(14));(statearr_31638[0] = state_machine__6013__auto__);
(statearr_31638[1] = 1);
return statearr_31638;
});
var state_machine__6013__auto____1 = (function (state_31612){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_31612);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e31639){if((e31639 instanceof Object))
{var ex__6016__auto__ = e31639;var statearr_31640_31658 = state_31612;(statearr_31640_31658[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31612);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e31639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__31659 = state_31612;
state_31612 = G__31659;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_31612){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_31612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_31641 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_31641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___31642);
return statearr_31641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6082__auto___31767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_31743){var state_val_31744 = (state_31743[1]);if((state_val_31744 === 1))
{var inst_31714 = cljs.core.vec(chs);var inst_31715 = inst_31714;var state_31743__$1 = (function (){var statearr_31745 = state_31743;(statearr_31745[7] = inst_31715);
return statearr_31745;
})();var statearr_31746_31768 = state_31743__$1;(statearr_31746_31768[2] = null);
(statearr_31746_31768[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31744 === 2))
{var inst_31715 = (state_31743[7]);var inst_31717 = cljs.core.count(inst_31715);var inst_31718 = (inst_31717 > 0);var state_31743__$1 = state_31743;if(cljs.core.truth_(inst_31718))
{var statearr_31747_31769 = state_31743__$1;(statearr_31747_31769[1] = 4);
} else
{var statearr_31748_31770 = state_31743__$1;(statearr_31748_31770[1] = 5);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31744 === 3))
{var inst_31741 = (state_31743[2]);var state_31743__$1 = state_31743;return cljs.core.async.impl.ioc_helpers.return_chan(state_31743__$1,inst_31741);
} else
{if((state_val_31744 === 4))
{var inst_31715 = (state_31743[7]);var state_31743__$1 = state_31743;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_31743__$1,7,inst_31715);
} else
{if((state_val_31744 === 5))
{var inst_31737 = cljs.core.async.close_BANG_(out);var state_31743__$1 = state_31743;var statearr_31749_31771 = state_31743__$1;(statearr_31749_31771[2] = inst_31737);
(statearr_31749_31771[1] = 6);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31744 === 6))
{var inst_31739 = (state_31743[2]);var state_31743__$1 = state_31743;var statearr_31750_31772 = state_31743__$1;(statearr_31750_31772[2] = inst_31739);
(statearr_31750_31772[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31744 === 7))
{var inst_31723 = (state_31743[8]);var inst_31722 = (state_31743[9]);var inst_31722__$1 = (state_31743[2]);var inst_31723__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31722__$1,0,null);var inst_31724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31722__$1,1,null);var inst_31725 = (inst_31723__$1 == null);var state_31743__$1 = (function (){var statearr_31751 = state_31743;(statearr_31751[8] = inst_31723__$1);
(statearr_31751[9] = inst_31722__$1);
(statearr_31751[10] = inst_31724);
return statearr_31751;
})();if(cljs.core.truth_(inst_31725))
{var statearr_31752_31773 = state_31743__$1;(statearr_31752_31773[1] = 8);
} else
{var statearr_31753_31774 = state_31743__$1;(statearr_31753_31774[1] = 9);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31744 === 8))
{var inst_31715 = (state_31743[7]);var inst_31723 = (state_31743[8]);var inst_31722 = (state_31743[9]);var inst_31724 = (state_31743[10]);var inst_31727 = (function (){var c = inst_31724;var v = inst_31723;var vec__31720 = inst_31722;var cs = inst_31715;return ((function (c,v,vec__31720,cs,inst_31715,inst_31723,inst_31722,inst_31724,state_val_31744){
return (function (p1__31660_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31660_SHARP_);
});
;})(c,v,vec__31720,cs,inst_31715,inst_31723,inst_31722,inst_31724,state_val_31744))
})();var inst_31728 = cljs.core.filterv(inst_31727,inst_31715);var inst_31715__$1 = inst_31728;var state_31743__$1 = (function (){var statearr_31754 = state_31743;(statearr_31754[7] = inst_31715__$1);
return statearr_31754;
})();var statearr_31755_31775 = state_31743__$1;(statearr_31755_31775[2] = null);
(statearr_31755_31775[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31744 === 9))
{var inst_31723 = (state_31743[8]);var state_31743__$1 = state_31743;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31743__$1,11,out,inst_31723);
} else
{if((state_val_31744 === 10))
{var inst_31735 = (state_31743[2]);var state_31743__$1 = state_31743;var statearr_31757_31776 = state_31743__$1;(statearr_31757_31776[2] = inst_31735);
(statearr_31757_31776[1] = 6);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31744 === 11))
{var inst_31715 = (state_31743[7]);var inst_31732 = (state_31743[2]);var tmp31756 = inst_31715;var inst_31715__$1 = tmp31756;var state_31743__$1 = (function (){var statearr_31758 = state_31743;(statearr_31758[11] = inst_31732);
(statearr_31758[7] = inst_31715__$1);
return statearr_31758;
})();var statearr_31759_31777 = state_31743__$1;(statearr_31759_31777[2] = null);
(statearr_31759_31777[1] = 2);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_31763 = (new Array(12));(statearr_31763[0] = state_machine__6013__auto__);
(statearr_31763[1] = 1);
return statearr_31763;
});
var state_machine__6013__auto____1 = (function (state_31743){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_31743);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e31764){if((e31764 instanceof Object))
{var ex__6016__auto__ = e31764;var statearr_31765_31778 = state_31743;(statearr_31765_31778[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31743);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e31764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__31779 = state_31743;
state_31743 = G__31779;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_31743){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_31743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_31766 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_31766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___31767);
return statearr_31766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6082__auto___31872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_31849){var state_val_31850 = (state_31849[1]);if((state_val_31850 === 1))
{var inst_31826 = 0;var state_31849__$1 = (function (){var statearr_31851 = state_31849;(statearr_31851[7] = inst_31826);
return statearr_31851;
})();var statearr_31852_31873 = state_31849__$1;(statearr_31852_31873[2] = null);
(statearr_31852_31873[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31850 === 2))
{var inst_31826 = (state_31849[7]);var inst_31828 = (inst_31826 < n);var state_31849__$1 = state_31849;if(cljs.core.truth_(inst_31828))
{var statearr_31853_31874 = state_31849__$1;(statearr_31853_31874[1] = 4);
} else
{var statearr_31854_31875 = state_31849__$1;(statearr_31854_31875[1] = 5);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31850 === 3))
{var inst_31846 = (state_31849[2]);var inst_31847 = cljs.core.async.close_BANG_(out);var state_31849__$1 = (function (){var statearr_31855 = state_31849;(statearr_31855[8] = inst_31846);
return statearr_31855;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_31849__$1,inst_31847);
} else
{if((state_val_31850 === 4))
{var state_31849__$1 = state_31849;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31849__$1,7,ch);
} else
{if((state_val_31850 === 5))
{var state_31849__$1 = state_31849;var statearr_31856_31876 = state_31849__$1;(statearr_31856_31876[2] = null);
(statearr_31856_31876[1] = 6);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31850 === 6))
{var inst_31844 = (state_31849[2]);var state_31849__$1 = state_31849;var statearr_31857_31877 = state_31849__$1;(statearr_31857_31877[2] = inst_31844);
(statearr_31857_31877[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31850 === 7))
{var inst_31831 = (state_31849[9]);var inst_31831__$1 = (state_31849[2]);var inst_31832 = (inst_31831__$1 == null);var inst_31833 = cljs.core.not(inst_31832);var state_31849__$1 = (function (){var statearr_31858 = state_31849;(statearr_31858[9] = inst_31831__$1);
return statearr_31858;
})();if(inst_31833)
{var statearr_31859_31878 = state_31849__$1;(statearr_31859_31878[1] = 8);
} else
{var statearr_31860_31879 = state_31849__$1;(statearr_31860_31879[1] = 9);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31850 === 8))
{var inst_31831 = (state_31849[9]);var state_31849__$1 = state_31849;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31849__$1,11,out,inst_31831);
} else
{if((state_val_31850 === 9))
{var state_31849__$1 = state_31849;var statearr_31861_31880 = state_31849__$1;(statearr_31861_31880[2] = null);
(statearr_31861_31880[1] = 10);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31850 === 10))
{var inst_31841 = (state_31849[2]);var state_31849__$1 = state_31849;var statearr_31862_31881 = state_31849__$1;(statearr_31862_31881[2] = inst_31841);
(statearr_31862_31881[1] = 6);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31850 === 11))
{var inst_31826 = (state_31849[7]);var inst_31836 = (state_31849[2]);var inst_31837 = (inst_31826 + 1);var inst_31826__$1 = inst_31837;var state_31849__$1 = (function (){var statearr_31863 = state_31849;(statearr_31863[7] = inst_31826__$1);
(statearr_31863[10] = inst_31836);
return statearr_31863;
})();var statearr_31864_31882 = state_31849__$1;(statearr_31864_31882[2] = null);
(statearr_31864_31882[1] = 2);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_31868 = (new Array(11));(statearr_31868[0] = state_machine__6013__auto__);
(statearr_31868[1] = 1);
return statearr_31868;
});
var state_machine__6013__auto____1 = (function (state_31849){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_31849);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e31869){if((e31869 instanceof Object))
{var ex__6016__auto__ = e31869;var statearr_31870_31883 = state_31849;(statearr_31870_31883[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31849);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e31869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__31884 = state_31849;
state_31849 = G__31884;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_31849){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_31849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_31871 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_31871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___31872);
return statearr_31871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6082__auto___31981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_31956){var state_val_31957 = (state_31956[1]);if((state_val_31957 === 1))
{var inst_31933 = null;var state_31956__$1 = (function (){var statearr_31958 = state_31956;(statearr_31958[7] = inst_31933);
return statearr_31958;
})();var statearr_31959_31982 = state_31956__$1;(statearr_31959_31982[2] = null);
(statearr_31959_31982[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31957 === 2))
{var state_31956__$1 = state_31956;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31956__$1,4,ch);
} else
{if((state_val_31957 === 3))
{var inst_31953 = (state_31956[2]);var inst_31954 = cljs.core.async.close_BANG_(out);var state_31956__$1 = (function (){var statearr_31960 = state_31956;(statearr_31960[8] = inst_31953);
return statearr_31960;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_31956__$1,inst_31954);
} else
{if((state_val_31957 === 4))
{var inst_31936 = (state_31956[9]);var inst_31936__$1 = (state_31956[2]);var inst_31937 = (inst_31936__$1 == null);var inst_31938 = cljs.core.not(inst_31937);var state_31956__$1 = (function (){var statearr_31961 = state_31956;(statearr_31961[9] = inst_31936__$1);
return statearr_31961;
})();if(inst_31938)
{var statearr_31962_31983 = state_31956__$1;(statearr_31962_31983[1] = 5);
} else
{var statearr_31963_31984 = state_31956__$1;(statearr_31963_31984[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31957 === 5))
{var inst_31933 = (state_31956[7]);var inst_31936 = (state_31956[9]);var inst_31940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31936,inst_31933);var state_31956__$1 = state_31956;if(inst_31940)
{var statearr_31964_31985 = state_31956__$1;(statearr_31964_31985[1] = 8);
} else
{var statearr_31965_31986 = state_31956__$1;(statearr_31965_31986[1] = 9);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_31957 === 6))
{var state_31956__$1 = state_31956;var statearr_31967_31987 = state_31956__$1;(statearr_31967_31987[2] = null);
(statearr_31967_31987[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31957 === 7))
{var inst_31951 = (state_31956[2]);var state_31956__$1 = state_31956;var statearr_31968_31988 = state_31956__$1;(statearr_31968_31988[2] = inst_31951);
(statearr_31968_31988[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31957 === 8))
{var inst_31933 = (state_31956[7]);var tmp31966 = inst_31933;var inst_31933__$1 = tmp31966;var state_31956__$1 = (function (){var statearr_31969 = state_31956;(statearr_31969[7] = inst_31933__$1);
return statearr_31969;
})();var statearr_31970_31989 = state_31956__$1;(statearr_31970_31989[2] = null);
(statearr_31970_31989[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31957 === 9))
{var inst_31936 = (state_31956[9]);var state_31956__$1 = state_31956;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31956__$1,11,out,inst_31936);
} else
{if((state_val_31957 === 10))
{var inst_31948 = (state_31956[2]);var state_31956__$1 = state_31956;var statearr_31971_31990 = state_31956__$1;(statearr_31971_31990[2] = inst_31948);
(statearr_31971_31990[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_31957 === 11))
{var inst_31936 = (state_31956[9]);var inst_31945 = (state_31956[2]);var inst_31933 = inst_31936;var state_31956__$1 = (function (){var statearr_31972 = state_31956;(statearr_31972[10] = inst_31945);
(statearr_31972[7] = inst_31933);
return statearr_31972;
})();var statearr_31973_31991 = state_31956__$1;(statearr_31973_31991[2] = null);
(statearr_31973_31991[1] = 2);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_31977 = (new Array(11));(statearr_31977[0] = state_machine__6013__auto__);
(statearr_31977[1] = 1);
return statearr_31977;
});
var state_machine__6013__auto____1 = (function (state_31956){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_31956);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e31978){if((e31978 instanceof Object))
{var ex__6016__auto__ = e31978;var statearr_31979_31992 = state_31956;(statearr_31979_31992[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31956);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e31978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__31993 = state_31956;
state_31956 = G__31993;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_31956){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_31956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_31980 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_31980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___31981);
return statearr_31980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6082__auto___32128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_32098){var state_val_32099 = (state_32098[1]);if((state_val_32099 === 1))
{var inst_32061 = (new Array(n));var inst_32062 = inst_32061;var inst_32063 = 0;var state_32098__$1 = (function (){var statearr_32100 = state_32098;(statearr_32100[7] = inst_32062);
(statearr_32100[8] = inst_32063);
return statearr_32100;
})();var statearr_32101_32129 = state_32098__$1;(statearr_32101_32129[2] = null);
(statearr_32101_32129[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 2))
{var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32098__$1,4,ch);
} else
{if((state_val_32099 === 3))
{var inst_32096 = (state_32098[2]);var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.return_chan(state_32098__$1,inst_32096);
} else
{if((state_val_32099 === 4))
{var inst_32066 = (state_32098[9]);var inst_32066__$1 = (state_32098[2]);var inst_32067 = (inst_32066__$1 == null);var inst_32068 = cljs.core.not(inst_32067);var state_32098__$1 = (function (){var statearr_32102 = state_32098;(statearr_32102[9] = inst_32066__$1);
return statearr_32102;
})();if(inst_32068)
{var statearr_32103_32130 = state_32098__$1;(statearr_32103_32130[1] = 5);
} else
{var statearr_32104_32131 = state_32098__$1;(statearr_32104_32131[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 5))
{var inst_32062 = (state_32098[7]);var inst_32063 = (state_32098[8]);var inst_32066 = (state_32098[9]);var inst_32071 = (state_32098[10]);var inst_32070 = (inst_32062[inst_32063] = inst_32066);var inst_32071__$1 = (inst_32063 + 1);var inst_32072 = (inst_32071__$1 < n);var state_32098__$1 = (function (){var statearr_32105 = state_32098;(statearr_32105[11] = inst_32070);
(statearr_32105[10] = inst_32071__$1);
return statearr_32105;
})();if(cljs.core.truth_(inst_32072))
{var statearr_32106_32132 = state_32098__$1;(statearr_32106_32132[1] = 8);
} else
{var statearr_32107_32133 = state_32098__$1;(statearr_32107_32133[1] = 9);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 6))
{var inst_32063 = (state_32098[8]);var inst_32084 = (inst_32063 > 0);var state_32098__$1 = state_32098;if(cljs.core.truth_(inst_32084))
{var statearr_32109_32134 = state_32098__$1;(statearr_32109_32134[1] = 12);
} else
{var statearr_32110_32135 = state_32098__$1;(statearr_32110_32135[1] = 13);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 7))
{var inst_32094 = (state_32098[2]);var state_32098__$1 = state_32098;var statearr_32111_32136 = state_32098__$1;(statearr_32111_32136[2] = inst_32094);
(statearr_32111_32136[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 8))
{var inst_32062 = (state_32098[7]);var inst_32071 = (state_32098[10]);var tmp32108 = inst_32062;var inst_32062__$1 = tmp32108;var inst_32063 = inst_32071;var state_32098__$1 = (function (){var statearr_32112 = state_32098;(statearr_32112[7] = inst_32062__$1);
(statearr_32112[8] = inst_32063);
return statearr_32112;
})();var statearr_32113_32137 = state_32098__$1;(statearr_32113_32137[2] = null);
(statearr_32113_32137[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 9))
{var inst_32062 = (state_32098[7]);var inst_32076 = cljs.core.vec(inst_32062);var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32098__$1,11,out,inst_32076);
} else
{if((state_val_32099 === 10))
{var inst_32082 = (state_32098[2]);var state_32098__$1 = state_32098;var statearr_32114_32138 = state_32098__$1;(statearr_32114_32138[2] = inst_32082);
(statearr_32114_32138[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 11))
{var inst_32078 = (state_32098[2]);var inst_32079 = (new Array(n));var inst_32062 = inst_32079;var inst_32063 = 0;var state_32098__$1 = (function (){var statearr_32115 = state_32098;(statearr_32115[7] = inst_32062);
(statearr_32115[8] = inst_32063);
(statearr_32115[12] = inst_32078);
return statearr_32115;
})();var statearr_32116_32139 = state_32098__$1;(statearr_32116_32139[2] = null);
(statearr_32116_32139[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 12))
{var inst_32062 = (state_32098[7]);var inst_32086 = cljs.core.vec(inst_32062);var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32098__$1,15,out,inst_32086);
} else
{if((state_val_32099 === 13))
{var state_32098__$1 = state_32098;var statearr_32117_32140 = state_32098__$1;(statearr_32117_32140[2] = null);
(statearr_32117_32140[1] = 14);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 14))
{var inst_32091 = (state_32098[2]);var inst_32092 = cljs.core.async.close_BANG_(out);var state_32098__$1 = (function (){var statearr_32118 = state_32098;(statearr_32118[13] = inst_32091);
return statearr_32118;
})();var statearr_32119_32141 = state_32098__$1;(statearr_32119_32141[2] = inst_32092);
(statearr_32119_32141[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32099 === 15))
{var inst_32088 = (state_32098[2]);var state_32098__$1 = state_32098;var statearr_32120_32142 = state_32098__$1;(statearr_32120_32142[2] = inst_32088);
(statearr_32120_32142[1] = 14);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_32124 = (new Array(14));(statearr_32124[0] = state_machine__6013__auto__);
(statearr_32124[1] = 1);
return statearr_32124;
});
var state_machine__6013__auto____1 = (function (state_32098){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_32098);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e32125){if((e32125 instanceof Object))
{var ex__6016__auto__ = e32125;var statearr_32126_32143 = state_32098;(statearr_32126_32143[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32098);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e32125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__32144 = state_32098;
state_32098 = G__32144;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_32098){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_32098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_32127 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_32127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___32128);
return statearr_32127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6082__auto___32287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_32257){var state_val_32258 = (state_32257[1]);if((state_val_32258 === 1))
{var inst_32216 = (new Array(0));var inst_32217 = inst_32216;var inst_32218 = cljs.core.constant$keyword$100;var state_32257__$1 = (function (){var statearr_32259 = state_32257;(statearr_32259[7] = inst_32218);
(statearr_32259[8] = inst_32217);
return statearr_32259;
})();var statearr_32260_32288 = state_32257__$1;(statearr_32260_32288[2] = null);
(statearr_32260_32288[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 2))
{var state_32257__$1 = state_32257;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32257__$1,4,ch);
} else
{if((state_val_32258 === 3))
{var inst_32255 = (state_32257[2]);var state_32257__$1 = state_32257;return cljs.core.async.impl.ioc_helpers.return_chan(state_32257__$1,inst_32255);
} else
{if((state_val_32258 === 4))
{var inst_32221 = (state_32257[9]);var inst_32221__$1 = (state_32257[2]);var inst_32222 = (inst_32221__$1 == null);var inst_32223 = cljs.core.not(inst_32222);var state_32257__$1 = (function (){var statearr_32261 = state_32257;(statearr_32261[9] = inst_32221__$1);
return statearr_32261;
})();if(inst_32223)
{var statearr_32262_32289 = state_32257__$1;(statearr_32262_32289[1] = 5);
} else
{var statearr_32263_32290 = state_32257__$1;(statearr_32263_32290[1] = 6);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 5))
{var inst_32225 = (state_32257[10]);var inst_32221 = (state_32257[9]);var inst_32218 = (state_32257[7]);var inst_32225__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32221) : f.call(null,inst_32221));var inst_32226 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32225__$1,inst_32218);var inst_32227 = cljs.core.keyword_identical_QMARK_(inst_32218,cljs.core.constant$keyword$100);var inst_32228 = (inst_32226) || (inst_32227);var state_32257__$1 = (function (){var statearr_32264 = state_32257;(statearr_32264[10] = inst_32225__$1);
return statearr_32264;
})();if(cljs.core.truth_(inst_32228))
{var statearr_32265_32291 = state_32257__$1;(statearr_32265_32291[1] = 8);
} else
{var statearr_32266_32292 = state_32257__$1;(statearr_32266_32292[1] = 9);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 6))
{var inst_32217 = (state_32257[8]);var inst_32242 = inst_32217.length;var inst_32243 = (inst_32242 > 0);var state_32257__$1 = state_32257;if(cljs.core.truth_(inst_32243))
{var statearr_32268_32293 = state_32257__$1;(statearr_32268_32293[1] = 12);
} else
{var statearr_32269_32294 = state_32257__$1;(statearr_32269_32294[1] = 13);
}
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 7))
{var inst_32253 = (state_32257[2]);var state_32257__$1 = state_32257;var statearr_32270_32295 = state_32257__$1;(statearr_32270_32295[2] = inst_32253);
(statearr_32270_32295[1] = 3);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 8))
{var inst_32225 = (state_32257[10]);var inst_32221 = (state_32257[9]);var inst_32217 = (state_32257[8]);var inst_32230 = inst_32217.push(inst_32221);var tmp32267 = inst_32217;var inst_32217__$1 = tmp32267;var inst_32218 = inst_32225;var state_32257__$1 = (function (){var statearr_32271 = state_32257;(statearr_32271[11] = inst_32230);
(statearr_32271[7] = inst_32218);
(statearr_32271[8] = inst_32217__$1);
return statearr_32271;
})();var statearr_32272_32296 = state_32257__$1;(statearr_32272_32296[2] = null);
(statearr_32272_32296[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 9))
{var inst_32217 = (state_32257[8]);var inst_32233 = cljs.core.vec(inst_32217);var state_32257__$1 = state_32257;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32257__$1,11,out,inst_32233);
} else
{if((state_val_32258 === 10))
{var inst_32240 = (state_32257[2]);var state_32257__$1 = state_32257;var statearr_32273_32297 = state_32257__$1;(statearr_32273_32297[2] = inst_32240);
(statearr_32273_32297[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 11))
{var inst_32225 = (state_32257[10]);var inst_32221 = (state_32257[9]);var inst_32235 = (state_32257[2]);var inst_32236 = (new Array(0));var inst_32237 = inst_32236.push(inst_32221);var inst_32217 = inst_32236;var inst_32218 = inst_32225;var state_32257__$1 = (function (){var statearr_32274 = state_32257;(statearr_32274[7] = inst_32218);
(statearr_32274[8] = inst_32217);
(statearr_32274[12] = inst_32235);
(statearr_32274[13] = inst_32237);
return statearr_32274;
})();var statearr_32275_32298 = state_32257__$1;(statearr_32275_32298[2] = null);
(statearr_32275_32298[1] = 2);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 12))
{var inst_32217 = (state_32257[8]);var inst_32245 = cljs.core.vec(inst_32217);var state_32257__$1 = state_32257;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32257__$1,15,out,inst_32245);
} else
{if((state_val_32258 === 13))
{var state_32257__$1 = state_32257;var statearr_32276_32299 = state_32257__$1;(statearr_32276_32299[2] = null);
(statearr_32276_32299[1] = 14);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 14))
{var inst_32250 = (state_32257[2]);var inst_32251 = cljs.core.async.close_BANG_(out);var state_32257__$1 = (function (){var statearr_32277 = state_32257;(statearr_32277[14] = inst_32250);
return statearr_32277;
})();var statearr_32278_32300 = state_32257__$1;(statearr_32278_32300[2] = inst_32251);
(statearr_32278_32300[1] = 7);
return cljs.core.constant$keyword$87;
} else
{if((state_val_32258 === 15))
{var inst_32247 = (state_32257[2]);var state_32257__$1 = state_32257;var statearr_32279_32301 = state_32257__$1;(statearr_32279_32301[2] = inst_32247);
(statearr_32279_32301[1] = 14);
return cljs.core.constant$keyword$87;
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_32283 = (new Array(15));(statearr_32283[0] = state_machine__6013__auto__);
(statearr_32283[1] = 1);
return statearr_32283;
});
var state_machine__6013__auto____1 = (function (state_32257){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__(state_32257);if(cljs.core.keyword_identical_QMARK_(result__6015__auto__,cljs.core.constant$keyword$87))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e32284){if((e32284 instanceof Object))
{var ex__6016__auto__ = e32284;var statearr_32285_32302 = state_32257;(statearr_32285_32302[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32257);
return cljs.core.constant$keyword$87;
} else
{if(cljs.core.constant$keyword$62)
{throw e32284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6014__auto__,cljs.core.constant$keyword$87))
{{
var G__32303 = state_32257;
state_32257 = G__32303;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_32257){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_32257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_32286 = (f__6083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6083__auto__.cljs$core$IFn$_invoke$arity$0() : f__6083__auto__.call(null));(statearr_32286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___32287);
return statearr_32286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6084__auto__);
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
