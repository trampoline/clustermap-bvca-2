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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16295 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16295 = (function (f,fn_handler,meta16296){
this.f = f;
this.fn_handler = fn_handler;
this.meta16296 = meta16296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16295.cljs$lang$type = true;
cljs.core.async.t16295.cljs$lang$ctorStr = "cljs.core.async/t16295";
cljs.core.async.t16295.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16295");
});
cljs.core.async.t16295.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16297){var self__ = this;
var _16297__$1 = this;return self__.meta16296;
});
cljs.core.async.t16295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16297,meta16296__$1){var self__ = this;
var _16297__$1 = this;return (new cljs.core.async.t16295(self__.f,self__.fn_handler,meta16296__$1));
});
cljs.core.async.__GT_t16295 = (function __GT_t16295(f__$1,fn_handler__$1,meta16296){return (new cljs.core.async.t16295(f__$1,fn_handler__$1,meta16296));
});
}
return (new cljs.core.async.t16295(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16299 = buff;if(G__16299)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__16299.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16299.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__16299);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__16299);
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
{var val_16300 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16300) : fn1.call(null,val_16300));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16300) : fn1.call(null,val_16300));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___16301 = n;var x_16302 = 0;while(true){
if((x_16302 < n__4114__auto___16301))
{(a[x_16302] = 0);
{
var G__16303 = (x_16302 + 1);
x_16302 = G__16303;
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
var G__16304 = (i + 1);
i = G__16304;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t16308 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16308 = (function (flag,alt_flag,meta16309){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16309 = meta16309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16308.cljs$lang$type = true;
cljs.core.async.t16308.cljs$lang$ctorStr = "cljs.core.async/t16308";
cljs.core.async.t16308.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16308");
});
cljs.core.async.t16308.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t16308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t16308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16310){var self__ = this;
var _16310__$1 = this;return self__.meta16309;
});
cljs.core.async.t16308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16310,meta16309__$1){var self__ = this;
var _16310__$1 = this;return (new cljs.core.async.t16308(self__.flag,self__.alt_flag,meta16309__$1));
});
cljs.core.async.__GT_t16308 = (function __GT_t16308(flag__$1,alt_flag__$1,meta16309){return (new cljs.core.async.t16308(flag__$1,alt_flag__$1,meta16309));
});
}
return (new cljs.core.async.t16308(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16314 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16314 = (function (cb,flag,alt_handler,meta16315){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16315 = meta16315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16314.cljs$lang$type = true;
cljs.core.async.t16314.cljs$lang$ctorStr = "cljs.core.async/t16314";
cljs.core.async.t16314.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16314");
});
cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t16314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16316){var self__ = this;
var _16316__$1 = this;return self__.meta16315;
});
cljs.core.async.t16314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16316,meta16315__$1){var self__ = this;
var _16316__$1 = this;return (new cljs.core.async.t16314(self__.cb,self__.flag,self__.alt_handler,meta16315__$1));
});
cljs.core.async.__GT_t16314 = (function __GT_t16314(cb__$1,flag__$1,alt_handler__$1,meta16315){return (new cljs.core.async.t16314(cb__$1,flag__$1,alt_handler__$1,meta16315));
});
}
return (new cljs.core.async.t16314(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16317_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16317_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16317_SHARP_,port], null)));
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
var G__16318 = (i + 1);
i = G__16318;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3279__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
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
var alts_BANG___delegate = function (ports,p__16319){var map__16321 = p__16319;var map__16321__$1 = ((cljs.core.seq_QMARK_(map__16321))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16321):map__16321);var opts = map__16321__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16319 = null;if (arguments.length > 1) {
  p__16319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16319);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16322){
var ports = cljs.core.first(arglist__16322);
var p__16319 = cljs.core.rest(arglist__16322);
return alts_BANG___delegate(ports,p__16319);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16330 = (function (ch,f,map_LT_,meta16331){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16331 = meta16331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16330.cljs$lang$type = true;
cljs.core.async.t16330.cljs$lang$ctorStr = "cljs.core.async/t16330";
cljs.core.async.t16330.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16330");
});
cljs.core.async.t16330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t16330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t16333 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16333 = (function (fn1,_,meta16331,ch,f,map_LT_,meta16334){
this.fn1 = fn1;
this._ = _;
this.meta16331 = meta16331;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16334 = meta16334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16333.cljs$lang$type = true;
cljs.core.async.t16333.cljs$lang$ctorStr = "cljs.core.async/t16333";
cljs.core.async.t16333.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16333");
});
cljs.core.async.t16333.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t16333.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t16333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__16323_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__16323_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16323_SHARP_) : self__.f.call(null,p1__16323_SHARP_)))) : f1.call(null,(((p1__16323_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16323_SHARP_) : self__.f.call(null,p1__16323_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t16333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16335){var self__ = this;
var _16335__$1 = this;return self__.meta16334;
});
cljs.core.async.t16333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16335,meta16334__$1){var self__ = this;
var _16335__$1 = this;return (new cljs.core.async.t16333(self__.fn1,self__._,self__.meta16331,self__.ch,self__.f,self__.map_LT_,meta16334__$1));
});
cljs.core.async.__GT_t16333 = (function __GT_t16333(fn1__$1,___$2,meta16331__$1,ch__$2,f__$2,map_LT___$2,meta16334){return (new cljs.core.async.t16333(fn1__$1,___$2,meta16331__$1,ch__$2,f__$2,map_LT___$2,meta16334));
});
}
return (new cljs.core.async.t16333(fn1,___$1,self__.meta16331,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t16330.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t16330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16332){var self__ = this;
var _16332__$1 = this;return self__.meta16331;
});
cljs.core.async.t16330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16332,meta16331__$1){var self__ = this;
var _16332__$1 = this;return (new cljs.core.async.t16330(self__.ch,self__.f,self__.map_LT_,meta16331__$1));
});
cljs.core.async.__GT_t16330 = (function __GT_t16330(ch__$1,f__$1,map_LT___$1,meta16331){return (new cljs.core.async.t16330(ch__$1,f__$1,map_LT___$1,meta16331));
});
}
return (new cljs.core.async.t16330(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16339 = (function (ch,f,map_GT_,meta16340){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16340 = meta16340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16339.cljs$lang$type = true;
cljs.core.async.t16339.cljs$lang$ctorStr = "cljs.core.async/t16339";
cljs.core.async.t16339.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16339");
});
cljs.core.async.t16339.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t16339.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t16339.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t16339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16341){var self__ = this;
var _16341__$1 = this;return self__.meta16340;
});
cljs.core.async.t16339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16341,meta16340__$1){var self__ = this;
var _16341__$1 = this;return (new cljs.core.async.t16339(self__.ch,self__.f,self__.map_GT_,meta16340__$1));
});
cljs.core.async.__GT_t16339 = (function __GT_t16339(ch__$1,f__$1,map_GT___$1,meta16340){return (new cljs.core.async.t16339(ch__$1,f__$1,map_GT___$1,meta16340));
});
}
return (new cljs.core.async.t16339(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16345 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16345 = (function (ch,p,filter_GT_,meta16346){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16346 = meta16346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16345.cljs$lang$type = true;
cljs.core.async.t16345.cljs$lang$ctorStr = "cljs.core.async/t16345";
cljs.core.async.t16345.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t16345");
});
cljs.core.async.t16345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t16345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t16345.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t16345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16347){var self__ = this;
var _16347__$1 = this;return self__.meta16346;
});
cljs.core.async.t16345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16347,meta16346__$1){var self__ = this;
var _16347__$1 = this;return (new cljs.core.async.t16345(self__.ch,self__.p,self__.filter_GT_,meta16346__$1));
});
cljs.core.async.__GT_t16345 = (function __GT_t16345(ch__$1,p__$1,filter_GT___$1,meta16346){return (new cljs.core.async.t16345(ch__$1,p__$1,filter_GT___$1,meta16346));
});
}
return (new cljs.core.async.t16345(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6054__auto___16430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16409){var state_val_16410 = (state_16409[1]);if((state_val_16410 === 1))
{var state_16409__$1 = state_16409;var statearr_16411_16431 = state_16409__$1;(statearr_16411_16431[2] = null);
(statearr_16411_16431[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16410 === 2))
{var state_16409__$1 = state_16409;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16409__$1,4,ch);
} else
{if((state_val_16410 === 3))
{var inst_16407 = (state_16409[2]);var state_16409__$1 = state_16409;return cljs.core.async.impl.ioc_helpers.return_chan(state_16409__$1,inst_16407);
} else
{if((state_val_16410 === 4))
{var inst_16391 = (state_16409[7]);var inst_16391__$1 = (state_16409[2]);var inst_16392 = (inst_16391__$1 == null);var state_16409__$1 = (function (){var statearr_16412 = state_16409;(statearr_16412[7] = inst_16391__$1);
return statearr_16412;
})();if(cljs.core.truth_(inst_16392))
{var statearr_16413_16432 = state_16409__$1;(statearr_16413_16432[1] = 5);
} else
{var statearr_16414_16433 = state_16409__$1;(statearr_16414_16433[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16410 === 5))
{var inst_16394 = cljs.core.async.close_BANG_(out);var state_16409__$1 = state_16409;var statearr_16415_16434 = state_16409__$1;(statearr_16415_16434[2] = inst_16394);
(statearr_16415_16434[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16410 === 6))
{var inst_16391 = (state_16409[7]);var inst_16396 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16391) : p.call(null,inst_16391));var state_16409__$1 = state_16409;if(cljs.core.truth_(inst_16396))
{var statearr_16416_16435 = state_16409__$1;(statearr_16416_16435[1] = 8);
} else
{var statearr_16417_16436 = state_16409__$1;(statearr_16417_16436[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16410 === 7))
{var inst_16405 = (state_16409[2]);var state_16409__$1 = state_16409;var statearr_16418_16437 = state_16409__$1;(statearr_16418_16437[2] = inst_16405);
(statearr_16418_16437[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16410 === 8))
{var inst_16391 = (state_16409[7]);var state_16409__$1 = state_16409;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16409__$1,11,out,inst_16391);
} else
{if((state_val_16410 === 9))
{var state_16409__$1 = state_16409;var statearr_16419_16438 = state_16409__$1;(statearr_16419_16438[2] = null);
(statearr_16419_16438[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16410 === 10))
{var inst_16402 = (state_16409[2]);var state_16409__$1 = (function (){var statearr_16420 = state_16409;(statearr_16420[8] = inst_16402);
return statearr_16420;
})();var statearr_16421_16439 = state_16409__$1;(statearr_16421_16439[2] = null);
(statearr_16421_16439[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16410 === 11))
{var inst_16399 = (state_16409[2]);var state_16409__$1 = state_16409;var statearr_16422_16440 = state_16409__$1;(statearr_16422_16440[2] = inst_16399);
(statearr_16422_16440[1] = 10);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16426 = (new Array(9));(statearr_16426[0] = state_machine__5985__auto__);
(statearr_16426[1] = 1);
return statearr_16426;
});
var state_machine__5985__auto____1 = (function (state_16409){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_16409);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16427){if((e16427 instanceof Object))
{var ex__5988__auto__ = e16427;var statearr_16428_16441 = state_16409;(statearr_16428_16441[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16409);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__16442 = state_16409;
state_16409 = G__16442;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16409){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16429 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_16429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___16430);
return statearr_16429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16594){var state_val_16595 = (state_16594[1]);if((state_val_16595 === 1))
{var state_16594__$1 = state_16594;var statearr_16596_16633 = state_16594__$1;(statearr_16596_16633[2] = null);
(statearr_16596_16633[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 2))
{var state_16594__$1 = state_16594;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16594__$1,4,in$);
} else
{if((state_val_16595 === 3))
{var inst_16592 = (state_16594[2]);var state_16594__$1 = state_16594;return cljs.core.async.impl.ioc_helpers.return_chan(state_16594__$1,inst_16592);
} else
{if((state_val_16595 === 4))
{var inst_16540 = (state_16594[7]);var inst_16540__$1 = (state_16594[2]);var inst_16541 = (inst_16540__$1 == null);var state_16594__$1 = (function (){var statearr_16597 = state_16594;(statearr_16597[7] = inst_16540__$1);
return statearr_16597;
})();if(cljs.core.truth_(inst_16541))
{var statearr_16598_16634 = state_16594__$1;(statearr_16598_16634[1] = 5);
} else
{var statearr_16599_16635 = state_16594__$1;(statearr_16599_16635[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 5))
{var inst_16543 = cljs.core.async.close_BANG_(out);var state_16594__$1 = state_16594;var statearr_16600_16636 = state_16594__$1;(statearr_16600_16636[2] = inst_16543);
(statearr_16600_16636[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 6))
{var inst_16540 = (state_16594[7]);var inst_16545 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16540) : f.call(null,inst_16540));var inst_16550 = cljs.core.seq(inst_16545);var inst_16551 = inst_16550;var inst_16552 = null;var inst_16553 = 0;var inst_16554 = 0;var state_16594__$1 = (function (){var statearr_16601 = state_16594;(statearr_16601[8] = inst_16554);
(statearr_16601[9] = inst_16552);
(statearr_16601[10] = inst_16553);
(statearr_16601[11] = inst_16551);
return statearr_16601;
})();var statearr_16602_16637 = state_16594__$1;(statearr_16602_16637[2] = null);
(statearr_16602_16637[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 7))
{var inst_16590 = (state_16594[2]);var state_16594__$1 = state_16594;var statearr_16603_16638 = state_16594__$1;(statearr_16603_16638[2] = inst_16590);
(statearr_16603_16638[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 8))
{var inst_16554 = (state_16594[8]);var inst_16553 = (state_16594[10]);var inst_16556 = (inst_16554 < inst_16553);var inst_16557 = inst_16556;var state_16594__$1 = state_16594;if(cljs.core.truth_(inst_16557))
{var statearr_16604_16639 = state_16594__$1;(statearr_16604_16639[1] = 10);
} else
{var statearr_16605_16640 = state_16594__$1;(statearr_16605_16640[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 9))
{var inst_16587 = (state_16594[2]);var state_16594__$1 = (function (){var statearr_16606 = state_16594;(statearr_16606[12] = inst_16587);
return statearr_16606;
})();var statearr_16607_16641 = state_16594__$1;(statearr_16607_16641[2] = null);
(statearr_16607_16641[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 10))
{var inst_16554 = (state_16594[8]);var inst_16552 = (state_16594[9]);var inst_16559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16552,inst_16554);var state_16594__$1 = state_16594;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16594__$1,13,out,inst_16559);
} else
{if((state_val_16595 === 11))
{var inst_16551 = (state_16594[11]);var inst_16565 = (state_16594[13]);var inst_16565__$1 = cljs.core.seq(inst_16551);var state_16594__$1 = (function (){var statearr_16611 = state_16594;(statearr_16611[13] = inst_16565__$1);
return statearr_16611;
})();if(inst_16565__$1)
{var statearr_16612_16642 = state_16594__$1;(statearr_16612_16642[1] = 14);
} else
{var statearr_16613_16643 = state_16594__$1;(statearr_16613_16643[1] = 15);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 12))
{var inst_16585 = (state_16594[2]);var state_16594__$1 = state_16594;var statearr_16614_16644 = state_16594__$1;(statearr_16614_16644[2] = inst_16585);
(statearr_16614_16644[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 13))
{var inst_16554 = (state_16594[8]);var inst_16552 = (state_16594[9]);var inst_16553 = (state_16594[10]);var inst_16551 = (state_16594[11]);var inst_16561 = (state_16594[2]);var inst_16562 = (inst_16554 + 1);var tmp16608 = inst_16552;var tmp16609 = inst_16553;var tmp16610 = inst_16551;var inst_16551__$1 = tmp16610;var inst_16552__$1 = tmp16608;var inst_16553__$1 = tmp16609;var inst_16554__$1 = inst_16562;var state_16594__$1 = (function (){var statearr_16615 = state_16594;(statearr_16615[8] = inst_16554__$1);
(statearr_16615[9] = inst_16552__$1);
(statearr_16615[10] = inst_16553__$1);
(statearr_16615[11] = inst_16551__$1);
(statearr_16615[14] = inst_16561);
return statearr_16615;
})();var statearr_16616_16645 = state_16594__$1;(statearr_16616_16645[2] = null);
(statearr_16616_16645[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 14))
{var inst_16565 = (state_16594[13]);var inst_16567 = cljs.core.chunked_seq_QMARK_(inst_16565);var state_16594__$1 = state_16594;if(inst_16567)
{var statearr_16617_16646 = state_16594__$1;(statearr_16617_16646[1] = 17);
} else
{var statearr_16618_16647 = state_16594__$1;(statearr_16618_16647[1] = 18);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 15))
{var state_16594__$1 = state_16594;var statearr_16619_16648 = state_16594__$1;(statearr_16619_16648[2] = null);
(statearr_16619_16648[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 16))
{var inst_16583 = (state_16594[2]);var state_16594__$1 = state_16594;var statearr_16620_16649 = state_16594__$1;(statearr_16620_16649[2] = inst_16583);
(statearr_16620_16649[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 17))
{var inst_16565 = (state_16594[13]);var inst_16569 = cljs.core.chunk_first(inst_16565);var inst_16570 = cljs.core.chunk_rest(inst_16565);var inst_16571 = cljs.core.count(inst_16569);var inst_16551 = inst_16570;var inst_16552 = inst_16569;var inst_16553 = inst_16571;var inst_16554 = 0;var state_16594__$1 = (function (){var statearr_16621 = state_16594;(statearr_16621[8] = inst_16554);
(statearr_16621[9] = inst_16552);
(statearr_16621[10] = inst_16553);
(statearr_16621[11] = inst_16551);
return statearr_16621;
})();var statearr_16622_16650 = state_16594__$1;(statearr_16622_16650[2] = null);
(statearr_16622_16650[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 18))
{var inst_16565 = (state_16594[13]);var inst_16574 = cljs.core.first(inst_16565);var state_16594__$1 = state_16594;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16594__$1,20,out,inst_16574);
} else
{if((state_val_16595 === 19))
{var inst_16580 = (state_16594[2]);var state_16594__$1 = state_16594;var statearr_16623_16651 = state_16594__$1;(statearr_16623_16651[2] = inst_16580);
(statearr_16623_16651[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16595 === 20))
{var inst_16565 = (state_16594[13]);var inst_16576 = (state_16594[2]);var inst_16577 = cljs.core.next(inst_16565);var inst_16551 = inst_16577;var inst_16552 = null;var inst_16553 = 0;var inst_16554 = 0;var state_16594__$1 = (function (){var statearr_16624 = state_16594;(statearr_16624[8] = inst_16554);
(statearr_16624[9] = inst_16552);
(statearr_16624[10] = inst_16553);
(statearr_16624[11] = inst_16551);
(statearr_16624[15] = inst_16576);
return statearr_16624;
})();var statearr_16625_16652 = state_16594__$1;(statearr_16625_16652[2] = null);
(statearr_16625_16652[1] = 8);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16629 = (new Array(16));(statearr_16629[0] = state_machine__5985__auto__);
(statearr_16629[1] = 1);
return statearr_16629;
});
var state_machine__5985__auto____1 = (function (state_16594){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_16594);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16630){if((e16630 instanceof Object))
{var ex__5988__auto__ = e16630;var statearr_16631_16653 = state_16594;(statearr_16631_16653[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16594);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__16654 = state_16594;
state_16594 = G__16654;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16594){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16632 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_16632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto__);
return statearr_16632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
}));
return c__6054__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6054__auto___16735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16714){var state_val_16715 = (state_16714[1]);if((state_val_16715 === 1))
{var state_16714__$1 = state_16714;var statearr_16716_16736 = state_16714__$1;(statearr_16716_16736[2] = null);
(statearr_16716_16736[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16715 === 2))
{var state_16714__$1 = state_16714;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16714__$1,4,from);
} else
{if((state_val_16715 === 3))
{var inst_16712 = (state_16714[2]);var state_16714__$1 = state_16714;return cljs.core.async.impl.ioc_helpers.return_chan(state_16714__$1,inst_16712);
} else
{if((state_val_16715 === 4))
{var inst_16697 = (state_16714[7]);var inst_16697__$1 = (state_16714[2]);var inst_16698 = (inst_16697__$1 == null);var state_16714__$1 = (function (){var statearr_16717 = state_16714;(statearr_16717[7] = inst_16697__$1);
return statearr_16717;
})();if(cljs.core.truth_(inst_16698))
{var statearr_16718_16737 = state_16714__$1;(statearr_16718_16737[1] = 5);
} else
{var statearr_16719_16738 = state_16714__$1;(statearr_16719_16738[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16715 === 5))
{var state_16714__$1 = state_16714;if(cljs.core.truth_(close_QMARK_))
{var statearr_16720_16739 = state_16714__$1;(statearr_16720_16739[1] = 8);
} else
{var statearr_16721_16740 = state_16714__$1;(statearr_16721_16740[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16715 === 6))
{var inst_16697 = (state_16714[7]);var state_16714__$1 = state_16714;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16714__$1,11,to,inst_16697);
} else
{if((state_val_16715 === 7))
{var inst_16710 = (state_16714[2]);var state_16714__$1 = state_16714;var statearr_16722_16741 = state_16714__$1;(statearr_16722_16741[2] = inst_16710);
(statearr_16722_16741[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16715 === 8))
{var inst_16701 = cljs.core.async.close_BANG_(to);var state_16714__$1 = state_16714;var statearr_16723_16742 = state_16714__$1;(statearr_16723_16742[2] = inst_16701);
(statearr_16723_16742[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16715 === 9))
{var state_16714__$1 = state_16714;var statearr_16724_16743 = state_16714__$1;(statearr_16724_16743[2] = null);
(statearr_16724_16743[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16715 === 10))
{var inst_16704 = (state_16714[2]);var state_16714__$1 = state_16714;var statearr_16725_16744 = state_16714__$1;(statearr_16725_16744[2] = inst_16704);
(statearr_16725_16744[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16715 === 11))
{var inst_16707 = (state_16714[2]);var state_16714__$1 = (function (){var statearr_16726 = state_16714;(statearr_16726[8] = inst_16707);
return statearr_16726;
})();var statearr_16727_16745 = state_16714__$1;(statearr_16727_16745[2] = null);
(statearr_16727_16745[1] = 2);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16731 = (new Array(9));(statearr_16731[0] = state_machine__5985__auto__);
(statearr_16731[1] = 1);
return statearr_16731;
});
var state_machine__5985__auto____1 = (function (state_16714){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_16714);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16732){if((e16732 instanceof Object))
{var ex__5988__auto__ = e16732;var statearr_16733_16746 = state_16714;(statearr_16733_16746[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16714);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__16747 = state_16714;
state_16714 = G__16747;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16714){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16734 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_16734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___16735);
return statearr_16734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6054__auto___16834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16812){var state_val_16813 = (state_16812[1]);if((state_val_16813 === 1))
{var state_16812__$1 = state_16812;var statearr_16814_16835 = state_16812__$1;(statearr_16814_16835[2] = null);
(statearr_16814_16835[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16813 === 2))
{var state_16812__$1 = state_16812;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16812__$1,4,ch);
} else
{if((state_val_16813 === 3))
{var inst_16810 = (state_16812[2]);var state_16812__$1 = state_16812;return cljs.core.async.impl.ioc_helpers.return_chan(state_16812__$1,inst_16810);
} else
{if((state_val_16813 === 4))
{var inst_16793 = (state_16812[7]);var inst_16793__$1 = (state_16812[2]);var inst_16794 = (inst_16793__$1 == null);var state_16812__$1 = (function (){var statearr_16815 = state_16812;(statearr_16815[7] = inst_16793__$1);
return statearr_16815;
})();if(cljs.core.truth_(inst_16794))
{var statearr_16816_16836 = state_16812__$1;(statearr_16816_16836[1] = 5);
} else
{var statearr_16817_16837 = state_16812__$1;(statearr_16817_16837[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16813 === 5))
{var inst_16796 = cljs.core.async.close_BANG_(tc);var inst_16797 = cljs.core.async.close_BANG_(fc);var state_16812__$1 = (function (){var statearr_16818 = state_16812;(statearr_16818[8] = inst_16796);
return statearr_16818;
})();var statearr_16819_16838 = state_16812__$1;(statearr_16819_16838[2] = inst_16797);
(statearr_16819_16838[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16813 === 6))
{var inst_16793 = (state_16812[7]);var inst_16799 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16793) : p.call(null,inst_16793));var state_16812__$1 = state_16812;if(cljs.core.truth_(inst_16799))
{var statearr_16820_16839 = state_16812__$1;(statearr_16820_16839[1] = 9);
} else
{var statearr_16821_16840 = state_16812__$1;(statearr_16821_16840[1] = 10);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16813 === 7))
{var inst_16808 = (state_16812[2]);var state_16812__$1 = state_16812;var statearr_16822_16841 = state_16812__$1;(statearr_16822_16841[2] = inst_16808);
(statearr_16822_16841[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16813 === 8))
{var inst_16805 = (state_16812[2]);var state_16812__$1 = (function (){var statearr_16823 = state_16812;(statearr_16823[9] = inst_16805);
return statearr_16823;
})();var statearr_16824_16842 = state_16812__$1;(statearr_16824_16842[2] = null);
(statearr_16824_16842[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16813 === 9))
{var state_16812__$1 = state_16812;var statearr_16825_16843 = state_16812__$1;(statearr_16825_16843[2] = tc);
(statearr_16825_16843[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16813 === 10))
{var state_16812__$1 = state_16812;var statearr_16826_16844 = state_16812__$1;(statearr_16826_16844[2] = fc);
(statearr_16826_16844[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16813 === 11))
{var inst_16793 = (state_16812[7]);var inst_16803 = (state_16812[2]);var state_16812__$1 = state_16812;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16812__$1,8,inst_16803,inst_16793);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16830 = (new Array(10));(statearr_16830[0] = state_machine__5985__auto__);
(statearr_16830[1] = 1);
return statearr_16830;
});
var state_machine__5985__auto____1 = (function (state_16812){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_16812);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16831){if((e16831 instanceof Object))
{var ex__5988__auto__ = e16831;var statearr_16832_16845 = state_16812;(statearr_16832_16845[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16812);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__16846 = state_16812;
state_16812 = G__16846;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16812){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16833 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_16833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___16834);
return statearr_16833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16893){var state_val_16894 = (state_16893[1]);if((state_val_16894 === 7))
{var inst_16889 = (state_16893[2]);var state_16893__$1 = state_16893;var statearr_16895_16911 = state_16893__$1;(statearr_16895_16911[2] = inst_16889);
(statearr_16895_16911[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16894 === 6))
{var inst_16882 = (state_16893[7]);var inst_16879 = (state_16893[8]);var inst_16886 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16879,inst_16882) : f.call(null,inst_16879,inst_16882));var inst_16879__$1 = inst_16886;var state_16893__$1 = (function (){var statearr_16896 = state_16893;(statearr_16896[8] = inst_16879__$1);
return statearr_16896;
})();var statearr_16897_16912 = state_16893__$1;(statearr_16897_16912[2] = null);
(statearr_16897_16912[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16894 === 5))
{var inst_16879 = (state_16893[8]);var state_16893__$1 = state_16893;var statearr_16898_16913 = state_16893__$1;(statearr_16898_16913[2] = inst_16879);
(statearr_16898_16913[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16894 === 4))
{var inst_16882 = (state_16893[7]);var inst_16882__$1 = (state_16893[2]);var inst_16883 = (inst_16882__$1 == null);var state_16893__$1 = (function (){var statearr_16899 = state_16893;(statearr_16899[7] = inst_16882__$1);
return statearr_16899;
})();if(cljs.core.truth_(inst_16883))
{var statearr_16900_16914 = state_16893__$1;(statearr_16900_16914[1] = 5);
} else
{var statearr_16901_16915 = state_16893__$1;(statearr_16901_16915[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16894 === 3))
{var inst_16891 = (state_16893[2]);var state_16893__$1 = state_16893;return cljs.core.async.impl.ioc_helpers.return_chan(state_16893__$1,inst_16891);
} else
{if((state_val_16894 === 2))
{var state_16893__$1 = state_16893;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16893__$1,4,ch);
} else
{if((state_val_16894 === 1))
{var inst_16879 = init;var state_16893__$1 = (function (){var statearr_16902 = state_16893;(statearr_16902[8] = inst_16879);
return statearr_16902;
})();var statearr_16903_16916 = state_16893__$1;(statearr_16903_16916[2] = null);
(statearr_16903_16916[1] = 2);
return cljs.core.constant$keyword$17;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16907 = (new Array(9));(statearr_16907[0] = state_machine__5985__auto__);
(statearr_16907[1] = 1);
return statearr_16907;
});
var state_machine__5985__auto____1 = (function (state_16893){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_16893);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16908){if((e16908 instanceof Object))
{var ex__5988__auto__ = e16908;var statearr_16909_16917 = state_16893;(statearr_16909_16917[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16893);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__16918 = state_16893;
state_16893 = G__16918;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16893){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_16910 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_16910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto__);
return statearr_16910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
}));
return c__6054__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_16980){var state_val_16981 = (state_16980[1]);if((state_val_16981 === 1))
{var inst_16960 = cljs.core.seq(coll);var inst_16961 = inst_16960;var state_16980__$1 = (function (){var statearr_16982 = state_16980;(statearr_16982[7] = inst_16961);
return statearr_16982;
})();var statearr_16983_17001 = state_16980__$1;(statearr_16983_17001[2] = null);
(statearr_16983_17001[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16981 === 2))
{var inst_16961 = (state_16980[7]);var state_16980__$1 = state_16980;if(cljs.core.truth_(inst_16961))
{var statearr_16984_17002 = state_16980__$1;(statearr_16984_17002[1] = 4);
} else
{var statearr_16985_17003 = state_16980__$1;(statearr_16985_17003[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16981 === 3))
{var inst_16978 = (state_16980[2]);var state_16980__$1 = state_16980;return cljs.core.async.impl.ioc_helpers.return_chan(state_16980__$1,inst_16978);
} else
{if((state_val_16981 === 4))
{var inst_16961 = (state_16980[7]);var inst_16964 = cljs.core.first(inst_16961);var state_16980__$1 = state_16980;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16980__$1,7,ch,inst_16964);
} else
{if((state_val_16981 === 5))
{var state_16980__$1 = state_16980;if(cljs.core.truth_(close_QMARK_))
{var statearr_16986_17004 = state_16980__$1;(statearr_16986_17004[1] = 8);
} else
{var statearr_16987_17005 = state_16980__$1;(statearr_16987_17005[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16981 === 6))
{var inst_16976 = (state_16980[2]);var state_16980__$1 = state_16980;var statearr_16988_17006 = state_16980__$1;(statearr_16988_17006[2] = inst_16976);
(statearr_16988_17006[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16981 === 7))
{var inst_16961 = (state_16980[7]);var inst_16966 = (state_16980[2]);var inst_16967 = cljs.core.next(inst_16961);var inst_16961__$1 = inst_16967;var state_16980__$1 = (function (){var statearr_16989 = state_16980;(statearr_16989[7] = inst_16961__$1);
(statearr_16989[8] = inst_16966);
return statearr_16989;
})();var statearr_16990_17007 = state_16980__$1;(statearr_16990_17007[2] = null);
(statearr_16990_17007[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16981 === 8))
{var inst_16971 = cljs.core.async.close_BANG_(ch);var state_16980__$1 = state_16980;var statearr_16991_17008 = state_16980__$1;(statearr_16991_17008[2] = inst_16971);
(statearr_16991_17008[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16981 === 9))
{var state_16980__$1 = state_16980;var statearr_16992_17009 = state_16980__$1;(statearr_16992_17009[2] = null);
(statearr_16992_17009[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16981 === 10))
{var inst_16974 = (state_16980[2]);var state_16980__$1 = state_16980;var statearr_16993_17010 = state_16980__$1;(statearr_16993_17010[2] = inst_16974);
(statearr_16993_17010[1] = 6);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_16997 = (new Array(9));(statearr_16997[0] = state_machine__5985__auto__);
(statearr_16997[1] = 1);
return statearr_16997;
});
var state_machine__5985__auto____1 = (function (state_16980){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_16980);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e16998){if((e16998 instanceof Object))
{var ex__5988__auto__ = e16998;var statearr_16999_17011 = state_16980;(statearr_16999_17011[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16980);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__17012 = state_16980;
state_16980 = G__17012;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_16980){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_16980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_17000 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_17000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto__);
return statearr_17000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
}));
return c__6054__auto__;
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
cljs.core.async.Mux = (function (){var obj17014 = {};return obj17014;
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
cljs.core.async.Mult = (function (){var obj17016 = {};return obj17016;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17231 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17231 = (function (cs,ch,mult,meta17232){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17232 = meta17232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17231.cljs$lang$type = true;
cljs.core.async.t17231.cljs$lang$ctorStr = "cljs.core.async/t17231";
cljs.core.async.t17231.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t17231");
});})(cs))
;
cljs.core.async.t17231.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17231.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17231.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17231.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17231.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17233){var self__ = this;
var _17233__$1 = this;return self__.meta17232;
});})(cs))
;
cljs.core.async.t17231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17233,meta17232__$1){var self__ = this;
var _17233__$1 = this;return (new cljs.core.async.t17231(self__.cs,self__.ch,self__.mult,meta17232__$1));
});})(cs))
;
cljs.core.async.__GT_t17231 = ((function (cs){
return (function __GT_t17231(cs__$1,ch__$1,mult__$1,meta17232){return (new cljs.core.async.t17231(cs__$1,ch__$1,mult__$1,meta17232));
});})(cs))
;
}
return (new cljs.core.async.t17231(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6054__auto___17445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_17363){var state_val_17364 = (state_17363[1]);if((state_val_17364 === 32))
{var inst_17236 = (state_17363[7]);var inst_17312 = (state_17363[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17363,31,Object,null,30);var inst_17319 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17312,inst_17236,done);var state_17363__$1 = state_17363;var statearr_17365_17446 = state_17363__$1;(statearr_17365_17446[2] = inst_17319);
cljs.core.async.impl.ioc_helpers.process_exception(state_17363__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 1))
{var state_17363__$1 = state_17363;var statearr_17366_17447 = state_17363__$1;(statearr_17366_17447[2] = null);
(statearr_17366_17447[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 33))
{var inst_17325 = (state_17363[9]);var inst_17327 = cljs.core.chunked_seq_QMARK_(inst_17325);var state_17363__$1 = state_17363;if(inst_17327)
{var statearr_17367_17448 = state_17363__$1;(statearr_17367_17448[1] = 36);
} else
{var statearr_17368_17449 = state_17363__$1;(statearr_17368_17449[1] = 37);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 2))
{var state_17363__$1 = state_17363;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17363__$1,4,ch);
} else
{if((state_val_17364 === 34))
{var state_17363__$1 = state_17363;var statearr_17369_17450 = state_17363__$1;(statearr_17369_17450[2] = null);
(statearr_17369_17450[1] = 35);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 3))
{var inst_17361 = (state_17363[2]);var state_17363__$1 = state_17363;return cljs.core.async.impl.ioc_helpers.return_chan(state_17363__$1,inst_17361);
} else
{if((state_val_17364 === 35))
{var inst_17350 = (state_17363[2]);var state_17363__$1 = state_17363;var statearr_17370_17451 = state_17363__$1;(statearr_17370_17451[2] = inst_17350);
(statearr_17370_17451[1] = 29);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 4))
{var inst_17236 = (state_17363[7]);var inst_17236__$1 = (state_17363[2]);var inst_17237 = (inst_17236__$1 == null);var state_17363__$1 = (function (){var statearr_17371 = state_17363;(statearr_17371[7] = inst_17236__$1);
return statearr_17371;
})();if(cljs.core.truth_(inst_17237))
{var statearr_17372_17452 = state_17363__$1;(statearr_17372_17452[1] = 5);
} else
{var statearr_17373_17453 = state_17363__$1;(statearr_17373_17453[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 36))
{var inst_17325 = (state_17363[9]);var inst_17329 = cljs.core.chunk_first(inst_17325);var inst_17330 = cljs.core.chunk_rest(inst_17325);var inst_17331 = cljs.core.count(inst_17329);var inst_17304 = inst_17330;var inst_17305 = inst_17329;var inst_17306 = inst_17331;var inst_17307 = 0;var state_17363__$1 = (function (){var statearr_17374 = state_17363;(statearr_17374[10] = inst_17307);
(statearr_17374[11] = inst_17306);
(statearr_17374[12] = inst_17305);
(statearr_17374[13] = inst_17304);
return statearr_17374;
})();var statearr_17375_17454 = state_17363__$1;(statearr_17375_17454[2] = null);
(statearr_17375_17454[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 5))
{var inst_17243 = cljs.core.deref(cs);var inst_17244 = cljs.core.seq(inst_17243);var inst_17245 = inst_17244;var inst_17246 = null;var inst_17247 = 0;var inst_17248 = 0;var state_17363__$1 = (function (){var statearr_17376 = state_17363;(statearr_17376[14] = inst_17247);
(statearr_17376[15] = inst_17248);
(statearr_17376[16] = inst_17245);
(statearr_17376[17] = inst_17246);
return statearr_17376;
})();var statearr_17377_17455 = state_17363__$1;(statearr_17377_17455[2] = null);
(statearr_17377_17455[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 37))
{var inst_17325 = (state_17363[9]);var inst_17334 = cljs.core.first(inst_17325);var state_17363__$1 = (function (){var statearr_17378 = state_17363;(statearr_17378[18] = inst_17334);
return statearr_17378;
})();var statearr_17379_17456 = state_17363__$1;(statearr_17379_17456[2] = null);
(statearr_17379_17456[1] = 41);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 6))
{var inst_17295 = cljs.core.deref(cs);var inst_17296 = cljs.core.keys(inst_17295);var inst_17297 = cljs.core.count(inst_17296);var inst_17298 = cljs.core.reset_BANG_(dctr,inst_17297);var inst_17303 = cljs.core.seq(inst_17296);var inst_17304 = inst_17303;var inst_17305 = null;var inst_17306 = 0;var inst_17307 = 0;var state_17363__$1 = (function (){var statearr_17380 = state_17363;(statearr_17380[10] = inst_17307);
(statearr_17380[11] = inst_17306);
(statearr_17380[12] = inst_17305);
(statearr_17380[19] = inst_17298);
(statearr_17380[13] = inst_17304);
return statearr_17380;
})();var statearr_17381_17457 = state_17363__$1;(statearr_17381_17457[2] = null);
(statearr_17381_17457[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 38))
{var inst_17347 = (state_17363[2]);var state_17363__$1 = state_17363;var statearr_17382_17458 = state_17363__$1;(statearr_17382_17458[2] = inst_17347);
(statearr_17382_17458[1] = 35);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 7))
{var inst_17359 = (state_17363[2]);var state_17363__$1 = state_17363;var statearr_17383_17459 = state_17363__$1;(statearr_17383_17459[2] = inst_17359);
(statearr_17383_17459[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 39))
{var inst_17325 = (state_17363[9]);var inst_17343 = (state_17363[2]);var inst_17344 = cljs.core.next(inst_17325);var inst_17304 = inst_17344;var inst_17305 = null;var inst_17306 = 0;var inst_17307 = 0;var state_17363__$1 = (function (){var statearr_17384 = state_17363;(statearr_17384[10] = inst_17307);
(statearr_17384[11] = inst_17306);
(statearr_17384[12] = inst_17305);
(statearr_17384[13] = inst_17304);
(statearr_17384[20] = inst_17343);
return statearr_17384;
})();var statearr_17385_17460 = state_17363__$1;(statearr_17385_17460[2] = null);
(statearr_17385_17460[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 8))
{var inst_17247 = (state_17363[14]);var inst_17248 = (state_17363[15]);var inst_17250 = (inst_17248 < inst_17247);var inst_17251 = inst_17250;var state_17363__$1 = state_17363;if(cljs.core.truth_(inst_17251))
{var statearr_17386_17461 = state_17363__$1;(statearr_17386_17461[1] = 10);
} else
{var statearr_17387_17462 = state_17363__$1;(statearr_17387_17462[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 40))
{var inst_17334 = (state_17363[18]);var inst_17335 = (state_17363[2]);var inst_17336 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_17337 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17334);var state_17363__$1 = (function (){var statearr_17388 = state_17363;(statearr_17388[21] = inst_17335);
(statearr_17388[22] = inst_17336);
return statearr_17388;
})();var statearr_17389_17463 = state_17363__$1;(statearr_17389_17463[2] = inst_17337);
cljs.core.async.impl.ioc_helpers.process_exception(state_17363__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 9))
{var inst_17293 = (state_17363[2]);var state_17363__$1 = state_17363;var statearr_17390_17464 = state_17363__$1;(statearr_17390_17464[2] = inst_17293);
(statearr_17390_17464[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 41))
{var inst_17236 = (state_17363[7]);var inst_17334 = (state_17363[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17363,40,Object,null,39);var inst_17341 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17334,inst_17236,done);var state_17363__$1 = state_17363;var statearr_17391_17465 = state_17363__$1;(statearr_17391_17465[2] = inst_17341);
cljs.core.async.impl.ioc_helpers.process_exception(state_17363__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 10))
{var inst_17248 = (state_17363[15]);var inst_17246 = (state_17363[17]);var inst_17254 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17246,inst_17248);var inst_17255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17254,0,null);var inst_17256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17254,1,null);var state_17363__$1 = (function (){var statearr_17392 = state_17363;(statearr_17392[23] = inst_17255);
return statearr_17392;
})();if(cljs.core.truth_(inst_17256))
{var statearr_17393_17466 = state_17363__$1;(statearr_17393_17466[1] = 13);
} else
{var statearr_17394_17467 = state_17363__$1;(statearr_17394_17467[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 42))
{var inst_17356 = (state_17363[2]);var state_17363__$1 = (function (){var statearr_17395 = state_17363;(statearr_17395[24] = inst_17356);
return statearr_17395;
})();var statearr_17396_17468 = state_17363__$1;(statearr_17396_17468[2] = null);
(statearr_17396_17468[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 11))
{var inst_17245 = (state_17363[16]);var inst_17265 = (state_17363[25]);var inst_17265__$1 = cljs.core.seq(inst_17245);var state_17363__$1 = (function (){var statearr_17397 = state_17363;(statearr_17397[25] = inst_17265__$1);
return statearr_17397;
})();if(inst_17265__$1)
{var statearr_17398_17469 = state_17363__$1;(statearr_17398_17469[1] = 16);
} else
{var statearr_17399_17470 = state_17363__$1;(statearr_17399_17470[1] = 17);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 12))
{var inst_17291 = (state_17363[2]);var state_17363__$1 = state_17363;var statearr_17400_17471 = state_17363__$1;(statearr_17400_17471[2] = inst_17291);
(statearr_17400_17471[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 13))
{var inst_17255 = (state_17363[23]);var inst_17258 = cljs.core.async.close_BANG_(inst_17255);var state_17363__$1 = state_17363;var statearr_17404_17472 = state_17363__$1;(statearr_17404_17472[2] = inst_17258);
(statearr_17404_17472[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 14))
{var state_17363__$1 = state_17363;var statearr_17405_17473 = state_17363__$1;(statearr_17405_17473[2] = null);
(statearr_17405_17473[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 15))
{var inst_17247 = (state_17363[14]);var inst_17248 = (state_17363[15]);var inst_17245 = (state_17363[16]);var inst_17246 = (state_17363[17]);var inst_17261 = (state_17363[2]);var inst_17262 = (inst_17248 + 1);var tmp17401 = inst_17247;var tmp17402 = inst_17245;var tmp17403 = inst_17246;var inst_17245__$1 = tmp17402;var inst_17246__$1 = tmp17403;var inst_17247__$1 = tmp17401;var inst_17248__$1 = inst_17262;var state_17363__$1 = (function (){var statearr_17406 = state_17363;(statearr_17406[26] = inst_17261);
(statearr_17406[14] = inst_17247__$1);
(statearr_17406[15] = inst_17248__$1);
(statearr_17406[16] = inst_17245__$1);
(statearr_17406[17] = inst_17246__$1);
return statearr_17406;
})();var statearr_17407_17474 = state_17363__$1;(statearr_17407_17474[2] = null);
(statearr_17407_17474[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 16))
{var inst_17265 = (state_17363[25]);var inst_17267 = cljs.core.chunked_seq_QMARK_(inst_17265);var state_17363__$1 = state_17363;if(inst_17267)
{var statearr_17408_17475 = state_17363__$1;(statearr_17408_17475[1] = 19);
} else
{var statearr_17409_17476 = state_17363__$1;(statearr_17409_17476[1] = 20);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 17))
{var state_17363__$1 = state_17363;var statearr_17410_17477 = state_17363__$1;(statearr_17410_17477[2] = null);
(statearr_17410_17477[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 18))
{var inst_17289 = (state_17363[2]);var state_17363__$1 = state_17363;var statearr_17411_17478 = state_17363__$1;(statearr_17411_17478[2] = inst_17289);
(statearr_17411_17478[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 19))
{var inst_17265 = (state_17363[25]);var inst_17269 = cljs.core.chunk_first(inst_17265);var inst_17270 = cljs.core.chunk_rest(inst_17265);var inst_17271 = cljs.core.count(inst_17269);var inst_17245 = inst_17270;var inst_17246 = inst_17269;var inst_17247 = inst_17271;var inst_17248 = 0;var state_17363__$1 = (function (){var statearr_17412 = state_17363;(statearr_17412[14] = inst_17247);
(statearr_17412[15] = inst_17248);
(statearr_17412[16] = inst_17245);
(statearr_17412[17] = inst_17246);
return statearr_17412;
})();var statearr_17413_17479 = state_17363__$1;(statearr_17413_17479[2] = null);
(statearr_17413_17479[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 20))
{var inst_17265 = (state_17363[25]);var inst_17275 = cljs.core.first(inst_17265);var inst_17276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17275,0,null);var inst_17277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17275,1,null);var state_17363__$1 = (function (){var statearr_17414 = state_17363;(statearr_17414[27] = inst_17276);
return statearr_17414;
})();if(cljs.core.truth_(inst_17277))
{var statearr_17415_17480 = state_17363__$1;(statearr_17415_17480[1] = 22);
} else
{var statearr_17416_17481 = state_17363__$1;(statearr_17416_17481[1] = 23);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 21))
{var inst_17286 = (state_17363[2]);var state_17363__$1 = state_17363;var statearr_17417_17482 = state_17363__$1;(statearr_17417_17482[2] = inst_17286);
(statearr_17417_17482[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 22))
{var inst_17276 = (state_17363[27]);var inst_17279 = cljs.core.async.close_BANG_(inst_17276);var state_17363__$1 = state_17363;var statearr_17418_17483 = state_17363__$1;(statearr_17418_17483[2] = inst_17279);
(statearr_17418_17483[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 23))
{var state_17363__$1 = state_17363;var statearr_17419_17484 = state_17363__$1;(statearr_17419_17484[2] = null);
(statearr_17419_17484[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 24))
{var inst_17265 = (state_17363[25]);var inst_17282 = (state_17363[2]);var inst_17283 = cljs.core.next(inst_17265);var inst_17245 = inst_17283;var inst_17246 = null;var inst_17247 = 0;var inst_17248 = 0;var state_17363__$1 = (function (){var statearr_17420 = state_17363;(statearr_17420[14] = inst_17247);
(statearr_17420[15] = inst_17248);
(statearr_17420[16] = inst_17245);
(statearr_17420[17] = inst_17246);
(statearr_17420[28] = inst_17282);
return statearr_17420;
})();var statearr_17421_17485 = state_17363__$1;(statearr_17421_17485[2] = null);
(statearr_17421_17485[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 25))
{var inst_17307 = (state_17363[10]);var inst_17306 = (state_17363[11]);var inst_17309 = (inst_17307 < inst_17306);var inst_17310 = inst_17309;var state_17363__$1 = state_17363;if(cljs.core.truth_(inst_17310))
{var statearr_17422_17486 = state_17363__$1;(statearr_17422_17486[1] = 27);
} else
{var statearr_17423_17487 = state_17363__$1;(statearr_17423_17487[1] = 28);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 26))
{var inst_17354 = (state_17363[2]);var state_17363__$1 = (function (){var statearr_17424 = state_17363;(statearr_17424[29] = inst_17354);
return statearr_17424;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17363__$1,42,dchan);
} else
{if((state_val_17364 === 27))
{var inst_17307 = (state_17363[10]);var inst_17305 = (state_17363[12]);var inst_17312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17305,inst_17307);var state_17363__$1 = (function (){var statearr_17425 = state_17363;(statearr_17425[8] = inst_17312);
return statearr_17425;
})();var statearr_17426_17488 = state_17363__$1;(statearr_17426_17488[2] = null);
(statearr_17426_17488[1] = 32);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 28))
{var inst_17325 = (state_17363[9]);var inst_17304 = (state_17363[13]);var inst_17325__$1 = cljs.core.seq(inst_17304);var state_17363__$1 = (function (){var statearr_17430 = state_17363;(statearr_17430[9] = inst_17325__$1);
return statearr_17430;
})();if(inst_17325__$1)
{var statearr_17431_17489 = state_17363__$1;(statearr_17431_17489[1] = 33);
} else
{var statearr_17432_17490 = state_17363__$1;(statearr_17432_17490[1] = 34);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 29))
{var inst_17352 = (state_17363[2]);var state_17363__$1 = state_17363;var statearr_17433_17491 = state_17363__$1;(statearr_17433_17491[2] = inst_17352);
(statearr_17433_17491[1] = 26);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 30))
{var inst_17307 = (state_17363[10]);var inst_17306 = (state_17363[11]);var inst_17305 = (state_17363[12]);var inst_17304 = (state_17363[13]);var inst_17321 = (state_17363[2]);var inst_17322 = (inst_17307 + 1);var tmp17427 = inst_17306;var tmp17428 = inst_17305;var tmp17429 = inst_17304;var inst_17304__$1 = tmp17429;var inst_17305__$1 = tmp17428;var inst_17306__$1 = tmp17427;var inst_17307__$1 = inst_17322;var state_17363__$1 = (function (){var statearr_17434 = state_17363;(statearr_17434[30] = inst_17321);
(statearr_17434[10] = inst_17307__$1);
(statearr_17434[11] = inst_17306__$1);
(statearr_17434[12] = inst_17305__$1);
(statearr_17434[13] = inst_17304__$1);
return statearr_17434;
})();var statearr_17435_17492 = state_17363__$1;(statearr_17435_17492[2] = null);
(statearr_17435_17492[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17364 === 31))
{var inst_17312 = (state_17363[8]);var inst_17313 = (state_17363[2]);var inst_17314 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_17315 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17312);var state_17363__$1 = (function (){var statearr_17436 = state_17363;(statearr_17436[31] = inst_17313);
(statearr_17436[32] = inst_17314);
return statearr_17436;
})();var statearr_17437_17493 = state_17363__$1;(statearr_17437_17493[2] = inst_17315);
cljs.core.async.impl.ioc_helpers.process_exception(state_17363__$1);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_17441 = (new Array(33));(statearr_17441[0] = state_machine__5985__auto__);
(statearr_17441[1] = 1);
return statearr_17441;
});
var state_machine__5985__auto____1 = (function (state_17363){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_17363);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e17442){if((e17442 instanceof Object))
{var ex__5988__auto__ = e17442;var statearr_17443_17494 = state_17363;(statearr_17443_17494[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17363);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e17442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__17495 = state_17363;
state_17363 = G__17495;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_17363){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_17363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_17444 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_17444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___17445);
return statearr_17444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
cljs.core.async.Mix = (function (){var obj17497 = {};return obj17497;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$25,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$26);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$25);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$26,chs);var pauses = pick(cljs.core.constant$keyword$24,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,solos,cljs.core.constant$keyword$28,pick(cljs.core.constant$keyword$25,chs),cljs.core.constant$keyword$29,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$24)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t17607 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17607 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17608){
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
this.meta17608 = meta17608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17607.cljs$lang$type = true;
cljs.core.async.t17607.cljs$lang$ctorStr = "cljs.core.async/t17607";
cljs.core.async.t17607.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t17607");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17607.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17607.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17607.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17607.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17607.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17607.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17607.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17607.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17609){var self__ = this;
var _17609__$1 = this;return self__.meta17608;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17609,meta17608__$1){var self__ = this;
var _17609__$1 = this;return (new cljs.core.async.t17607(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17608__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17607 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17607(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17608){return (new cljs.core.async.t17607(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17608));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17607(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6054__auto___17716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_17674){var state_val_17675 = (state_17674[1]);if((state_val_17675 === 1))
{var inst_17613 = (state_17674[7]);var inst_17613__$1 = calc_state();var inst_17614 = cljs.core.seq_QMARK_(inst_17613__$1);var state_17674__$1 = (function (){var statearr_17676 = state_17674;(statearr_17676[7] = inst_17613__$1);
return statearr_17676;
})();if(inst_17614)
{var statearr_17677_17717 = state_17674__$1;(statearr_17677_17717[1] = 2);
} else
{var statearr_17678_17718 = state_17674__$1;(statearr_17678_17718[1] = 3);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 2))
{var inst_17613 = (state_17674[7]);var inst_17616 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17613);var state_17674__$1 = state_17674;var statearr_17679_17719 = state_17674__$1;(statearr_17679_17719[2] = inst_17616);
(statearr_17679_17719[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 3))
{var inst_17613 = (state_17674[7]);var state_17674__$1 = state_17674;var statearr_17680_17720 = state_17674__$1;(statearr_17680_17720[2] = inst_17613);
(statearr_17680_17720[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 4))
{var inst_17613 = (state_17674[7]);var inst_17619 = (state_17674[2]);var inst_17620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17619,cljs.core.constant$keyword$29);var inst_17621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17619,cljs.core.constant$keyword$28);var inst_17622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17619,cljs.core.constant$keyword$27);var inst_17623 = inst_17613;var state_17674__$1 = (function (){var statearr_17681 = state_17674;(statearr_17681[8] = inst_17623);
(statearr_17681[9] = inst_17621);
(statearr_17681[10] = inst_17622);
(statearr_17681[11] = inst_17620);
return statearr_17681;
})();var statearr_17682_17721 = state_17674__$1;(statearr_17682_17721[2] = null);
(statearr_17682_17721[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 5))
{var inst_17623 = (state_17674[8]);var inst_17626 = cljs.core.seq_QMARK_(inst_17623);var state_17674__$1 = state_17674;if(inst_17626)
{var statearr_17683_17722 = state_17674__$1;(statearr_17683_17722[1] = 7);
} else
{var statearr_17684_17723 = state_17674__$1;(statearr_17684_17723[1] = 8);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 6))
{var inst_17672 = (state_17674[2]);var state_17674__$1 = state_17674;return cljs.core.async.impl.ioc_helpers.return_chan(state_17674__$1,inst_17672);
} else
{if((state_val_17675 === 7))
{var inst_17623 = (state_17674[8]);var inst_17628 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17623);var state_17674__$1 = state_17674;var statearr_17685_17724 = state_17674__$1;(statearr_17685_17724[2] = inst_17628);
(statearr_17685_17724[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 8))
{var inst_17623 = (state_17674[8]);var state_17674__$1 = state_17674;var statearr_17686_17725 = state_17674__$1;(statearr_17686_17725[2] = inst_17623);
(statearr_17686_17725[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 9))
{var inst_17631 = (state_17674[12]);var inst_17631__$1 = (state_17674[2]);var inst_17632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17631__$1,cljs.core.constant$keyword$29);var inst_17633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17631__$1,cljs.core.constant$keyword$28);var inst_17634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17631__$1,cljs.core.constant$keyword$27);var state_17674__$1 = (function (){var statearr_17687 = state_17674;(statearr_17687[13] = inst_17633);
(statearr_17687[12] = inst_17631__$1);
(statearr_17687[14] = inst_17634);
return statearr_17687;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_17674__$1,10,inst_17632);
} else
{if((state_val_17675 === 10))
{var inst_17638 = (state_17674[15]);var inst_17639 = (state_17674[16]);var inst_17637 = (state_17674[2]);var inst_17638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17637,0,null);var inst_17639__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17637,1,null);var inst_17640 = (inst_17638__$1 == null);var inst_17641 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17639__$1,change);var inst_17642 = (inst_17640) || (inst_17641);var state_17674__$1 = (function (){var statearr_17688 = state_17674;(statearr_17688[15] = inst_17638__$1);
(statearr_17688[16] = inst_17639__$1);
return statearr_17688;
})();if(cljs.core.truth_(inst_17642))
{var statearr_17689_17726 = state_17674__$1;(statearr_17689_17726[1] = 11);
} else
{var statearr_17690_17727 = state_17674__$1;(statearr_17690_17727[1] = 12);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 11))
{var inst_17638 = (state_17674[15]);var inst_17644 = (inst_17638 == null);var state_17674__$1 = state_17674;if(cljs.core.truth_(inst_17644))
{var statearr_17691_17728 = state_17674__$1;(statearr_17691_17728[1] = 14);
} else
{var statearr_17692_17729 = state_17674__$1;(statearr_17692_17729[1] = 15);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 12))
{var inst_17639 = (state_17674[16]);var inst_17634 = (state_17674[14]);var inst_17653 = (state_17674[17]);var inst_17653__$1 = (inst_17634.cljs$core$IFn$_invoke$arity$1 ? inst_17634.cljs$core$IFn$_invoke$arity$1(inst_17639) : inst_17634.call(null,inst_17639));var state_17674__$1 = (function (){var statearr_17693 = state_17674;(statearr_17693[17] = inst_17653__$1);
return statearr_17693;
})();if(cljs.core.truth_(inst_17653__$1))
{var statearr_17694_17730 = state_17674__$1;(statearr_17694_17730[1] = 17);
} else
{var statearr_17695_17731 = state_17674__$1;(statearr_17695_17731[1] = 18);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 13))
{var inst_17670 = (state_17674[2]);var state_17674__$1 = state_17674;var statearr_17696_17732 = state_17674__$1;(statearr_17696_17732[2] = inst_17670);
(statearr_17696_17732[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 14))
{var inst_17639 = (state_17674[16]);var inst_17646 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17639);var state_17674__$1 = state_17674;var statearr_17697_17733 = state_17674__$1;(statearr_17697_17733[2] = inst_17646);
(statearr_17697_17733[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 15))
{var state_17674__$1 = state_17674;var statearr_17698_17734 = state_17674__$1;(statearr_17698_17734[2] = null);
(statearr_17698_17734[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 16))
{var inst_17649 = (state_17674[2]);var inst_17650 = calc_state();var inst_17623 = inst_17650;var state_17674__$1 = (function (){var statearr_17699 = state_17674;(statearr_17699[8] = inst_17623);
(statearr_17699[18] = inst_17649);
return statearr_17699;
})();var statearr_17700_17735 = state_17674__$1;(statearr_17700_17735[2] = null);
(statearr_17700_17735[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 17))
{var inst_17653 = (state_17674[17]);var state_17674__$1 = state_17674;var statearr_17701_17736 = state_17674__$1;(statearr_17701_17736[2] = inst_17653);
(statearr_17701_17736[1] = 19);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 18))
{var inst_17633 = (state_17674[13]);var inst_17639 = (state_17674[16]);var inst_17634 = (state_17674[14]);var inst_17656 = cljs.core.empty_QMARK_(inst_17634);var inst_17657 = (inst_17633.cljs$core$IFn$_invoke$arity$1 ? inst_17633.cljs$core$IFn$_invoke$arity$1(inst_17639) : inst_17633.call(null,inst_17639));var inst_17658 = cljs.core.not(inst_17657);var inst_17659 = (inst_17656) && (inst_17658);var state_17674__$1 = state_17674;var statearr_17702_17737 = state_17674__$1;(statearr_17702_17737[2] = inst_17659);
(statearr_17702_17737[1] = 19);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 19))
{var inst_17661 = (state_17674[2]);var state_17674__$1 = state_17674;if(cljs.core.truth_(inst_17661))
{var statearr_17703_17738 = state_17674__$1;(statearr_17703_17738[1] = 20);
} else
{var statearr_17704_17739 = state_17674__$1;(statearr_17704_17739[1] = 21);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 20))
{var inst_17638 = (state_17674[15]);var state_17674__$1 = state_17674;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17674__$1,23,out,inst_17638);
} else
{if((state_val_17675 === 21))
{var state_17674__$1 = state_17674;var statearr_17705_17740 = state_17674__$1;(statearr_17705_17740[2] = null);
(statearr_17705_17740[1] = 22);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 22))
{var inst_17631 = (state_17674[12]);var inst_17667 = (state_17674[2]);var inst_17623 = inst_17631;var state_17674__$1 = (function (){var statearr_17706 = state_17674;(statearr_17706[19] = inst_17667);
(statearr_17706[8] = inst_17623);
return statearr_17706;
})();var statearr_17707_17741 = state_17674__$1;(statearr_17707_17741[2] = null);
(statearr_17707_17741[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17675 === 23))
{var inst_17664 = (state_17674[2]);var state_17674__$1 = state_17674;var statearr_17708_17742 = state_17674__$1;(statearr_17708_17742[2] = inst_17664);
(statearr_17708_17742[1] = 22);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_17712 = (new Array(20));(statearr_17712[0] = state_machine__5985__auto__);
(statearr_17712[1] = 1);
return statearr_17712;
});
var state_machine__5985__auto____1 = (function (state_17674){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_17674);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e17713){if((e17713 instanceof Object))
{var ex__5988__auto__ = e17713;var statearr_17714_17743 = state_17674;(statearr_17714_17743[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17674);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e17713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__17744 = state_17674;
state_17674 = G__17744;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_17674){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_17674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_17715 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_17715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___17716);
return statearr_17715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
cljs.core.async.Pub = (function (){var obj17746 = {};return obj17746;
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
return (function (p1__17747_SHARP_){if(cljs.core.truth_((p1__17747_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17747_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17747_SHARP_.call(null,topic))))
{return p1__17747_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17747_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17872 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17872 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17873){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17873 = meta17873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17872.cljs$lang$type = true;
cljs.core.async.t17872.cljs$lang$ctorStr = "cljs.core.async/t17872";
cljs.core.async.t17872.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async/t17872");
});})(mults,ensure_mult))
;
cljs.core.async.t17872.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17872.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17872.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17872.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17874){var self__ = this;
var _17874__$1 = this;return self__.meta17873;
});})(mults,ensure_mult))
;
cljs.core.async.t17872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17874,meta17873__$1){var self__ = this;
var _17874__$1 = this;return (new cljs.core.async.t17872(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17873__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17872 = ((function (mults,ensure_mult){
return (function __GT_t17872(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17873){return (new cljs.core.async.t17872(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17873));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17872(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6054__auto___17996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_17948){var state_val_17949 = (state_17948[1]);if((state_val_17949 === 1))
{var state_17948__$1 = state_17948;var statearr_17950_17997 = state_17948__$1;(statearr_17950_17997[2] = null);
(statearr_17950_17997[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 2))
{var state_17948__$1 = state_17948;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17948__$1,4,ch);
} else
{if((state_val_17949 === 3))
{var inst_17946 = (state_17948[2]);var state_17948__$1 = state_17948;return cljs.core.async.impl.ioc_helpers.return_chan(state_17948__$1,inst_17946);
} else
{if((state_val_17949 === 4))
{var inst_17877 = (state_17948[7]);var inst_17877__$1 = (state_17948[2]);var inst_17878 = (inst_17877__$1 == null);var state_17948__$1 = (function (){var statearr_17951 = state_17948;(statearr_17951[7] = inst_17877__$1);
return statearr_17951;
})();if(cljs.core.truth_(inst_17878))
{var statearr_17952_17998 = state_17948__$1;(statearr_17952_17998[1] = 5);
} else
{var statearr_17953_17999 = state_17948__$1;(statearr_17953_17999[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 5))
{var inst_17884 = cljs.core.deref(mults);var inst_17885 = cljs.core.vals(inst_17884);var inst_17886 = cljs.core.seq(inst_17885);var inst_17887 = inst_17886;var inst_17888 = null;var inst_17889 = 0;var inst_17890 = 0;var state_17948__$1 = (function (){var statearr_17954 = state_17948;(statearr_17954[8] = inst_17889);
(statearr_17954[9] = inst_17888);
(statearr_17954[10] = inst_17887);
(statearr_17954[11] = inst_17890);
return statearr_17954;
})();var statearr_17955_18000 = state_17948__$1;(statearr_17955_18000[2] = null);
(statearr_17955_18000[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 6))
{var inst_17877 = (state_17948[7]);var inst_17925 = (state_17948[12]);var inst_17927 = (state_17948[13]);var inst_17925__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17877) : topic_fn.call(null,inst_17877));var inst_17926 = cljs.core.deref(mults);var inst_17927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17926,inst_17925__$1);var state_17948__$1 = (function (){var statearr_17956 = state_17948;(statearr_17956[12] = inst_17925__$1);
(statearr_17956[13] = inst_17927__$1);
return statearr_17956;
})();if(cljs.core.truth_(inst_17927__$1))
{var statearr_17957_18001 = state_17948__$1;(statearr_17957_18001[1] = 19);
} else
{var statearr_17958_18002 = state_17948__$1;(statearr_17958_18002[1] = 20);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 7))
{var inst_17944 = (state_17948[2]);var state_17948__$1 = state_17948;var statearr_17959_18003 = state_17948__$1;(statearr_17959_18003[2] = inst_17944);
(statearr_17959_18003[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 8))
{var inst_17889 = (state_17948[8]);var inst_17890 = (state_17948[11]);var inst_17892 = (inst_17890 < inst_17889);var inst_17893 = inst_17892;var state_17948__$1 = state_17948;if(cljs.core.truth_(inst_17893))
{var statearr_17963_18004 = state_17948__$1;(statearr_17963_18004[1] = 10);
} else
{var statearr_17964_18005 = state_17948__$1;(statearr_17964_18005[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 9))
{var inst_17923 = (state_17948[2]);var state_17948__$1 = state_17948;var statearr_17965_18006 = state_17948__$1;(statearr_17965_18006[2] = inst_17923);
(statearr_17965_18006[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 10))
{var inst_17889 = (state_17948[8]);var inst_17888 = (state_17948[9]);var inst_17887 = (state_17948[10]);var inst_17890 = (state_17948[11]);var inst_17895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17888,inst_17890);var inst_17896 = cljs.core.async.muxch_STAR_(inst_17895);var inst_17897 = cljs.core.async.close_BANG_(inst_17896);var inst_17898 = (inst_17890 + 1);var tmp17960 = inst_17889;var tmp17961 = inst_17888;var tmp17962 = inst_17887;var inst_17887__$1 = tmp17962;var inst_17888__$1 = tmp17961;var inst_17889__$1 = tmp17960;var inst_17890__$1 = inst_17898;var state_17948__$1 = (function (){var statearr_17966 = state_17948;(statearr_17966[8] = inst_17889__$1);
(statearr_17966[9] = inst_17888__$1);
(statearr_17966[10] = inst_17887__$1);
(statearr_17966[14] = inst_17897);
(statearr_17966[11] = inst_17890__$1);
return statearr_17966;
})();var statearr_17967_18007 = state_17948__$1;(statearr_17967_18007[2] = null);
(statearr_17967_18007[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 11))
{var inst_17887 = (state_17948[10]);var inst_17901 = (state_17948[15]);var inst_17901__$1 = cljs.core.seq(inst_17887);var state_17948__$1 = (function (){var statearr_17968 = state_17948;(statearr_17968[15] = inst_17901__$1);
return statearr_17968;
})();if(inst_17901__$1)
{var statearr_17969_18008 = state_17948__$1;(statearr_17969_18008[1] = 13);
} else
{var statearr_17970_18009 = state_17948__$1;(statearr_17970_18009[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 12))
{var inst_17921 = (state_17948[2]);var state_17948__$1 = state_17948;var statearr_17971_18010 = state_17948__$1;(statearr_17971_18010[2] = inst_17921);
(statearr_17971_18010[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 13))
{var inst_17901 = (state_17948[15]);var inst_17903 = cljs.core.chunked_seq_QMARK_(inst_17901);var state_17948__$1 = state_17948;if(inst_17903)
{var statearr_17972_18011 = state_17948__$1;(statearr_17972_18011[1] = 16);
} else
{var statearr_17973_18012 = state_17948__$1;(statearr_17973_18012[1] = 17);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 14))
{var state_17948__$1 = state_17948;var statearr_17974_18013 = state_17948__$1;(statearr_17974_18013[2] = null);
(statearr_17974_18013[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 15))
{var inst_17919 = (state_17948[2]);var state_17948__$1 = state_17948;var statearr_17975_18014 = state_17948__$1;(statearr_17975_18014[2] = inst_17919);
(statearr_17975_18014[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 16))
{var inst_17901 = (state_17948[15]);var inst_17905 = cljs.core.chunk_first(inst_17901);var inst_17906 = cljs.core.chunk_rest(inst_17901);var inst_17907 = cljs.core.count(inst_17905);var inst_17887 = inst_17906;var inst_17888 = inst_17905;var inst_17889 = inst_17907;var inst_17890 = 0;var state_17948__$1 = (function (){var statearr_17976 = state_17948;(statearr_17976[8] = inst_17889);
(statearr_17976[9] = inst_17888);
(statearr_17976[10] = inst_17887);
(statearr_17976[11] = inst_17890);
return statearr_17976;
})();var statearr_17977_18015 = state_17948__$1;(statearr_17977_18015[2] = null);
(statearr_17977_18015[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 17))
{var inst_17901 = (state_17948[15]);var inst_17910 = cljs.core.first(inst_17901);var inst_17911 = cljs.core.async.muxch_STAR_(inst_17910);var inst_17912 = cljs.core.async.close_BANG_(inst_17911);var inst_17913 = cljs.core.next(inst_17901);var inst_17887 = inst_17913;var inst_17888 = null;var inst_17889 = 0;var inst_17890 = 0;var state_17948__$1 = (function (){var statearr_17978 = state_17948;(statearr_17978[8] = inst_17889);
(statearr_17978[9] = inst_17888);
(statearr_17978[10] = inst_17887);
(statearr_17978[16] = inst_17912);
(statearr_17978[11] = inst_17890);
return statearr_17978;
})();var statearr_17979_18016 = state_17948__$1;(statearr_17979_18016[2] = null);
(statearr_17979_18016[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 18))
{var inst_17916 = (state_17948[2]);var state_17948__$1 = state_17948;var statearr_17980_18017 = state_17948__$1;(statearr_17980_18017[2] = inst_17916);
(statearr_17980_18017[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 19))
{var state_17948__$1 = state_17948;var statearr_17981_18018 = state_17948__$1;(statearr_17981_18018[2] = null);
(statearr_17981_18018[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 20))
{var state_17948__$1 = state_17948;var statearr_17982_18019 = state_17948__$1;(statearr_17982_18019[2] = null);
(statearr_17982_18019[1] = 21);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 21))
{var inst_17941 = (state_17948[2]);var state_17948__$1 = (function (){var statearr_17983 = state_17948;(statearr_17983[17] = inst_17941);
return statearr_17983;
})();var statearr_17984_18020 = state_17948__$1;(statearr_17984_18020[2] = null);
(statearr_17984_18020[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 22))
{var inst_17938 = (state_17948[2]);var state_17948__$1 = state_17948;var statearr_17985_18021 = state_17948__$1;(statearr_17985_18021[2] = inst_17938);
(statearr_17985_18021[1] = 21);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 23))
{var inst_17925 = (state_17948[12]);var inst_17929 = (state_17948[2]);var inst_17930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17925);var state_17948__$1 = (function (){var statearr_17986 = state_17948;(statearr_17986[18] = inst_17929);
return statearr_17986;
})();var statearr_17987_18022 = state_17948__$1;(statearr_17987_18022[2] = inst_17930);
cljs.core.async.impl.ioc_helpers.process_exception(state_17948__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_17949 === 24))
{var inst_17877 = (state_17948[7]);var inst_17927 = (state_17948[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17948,23,Object,null,22);var inst_17934 = cljs.core.async.muxch_STAR_(inst_17927);var state_17948__$1 = state_17948;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17948__$1,25,inst_17934,inst_17877);
} else
{if((state_val_17949 === 25))
{var inst_17936 = (state_17948[2]);var state_17948__$1 = state_17948;var statearr_17988_18023 = state_17948__$1;(statearr_17988_18023[2] = inst_17936);
cljs.core.async.impl.ioc_helpers.process_exception(state_17948__$1);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_17992 = (new Array(19));(statearr_17992[0] = state_machine__5985__auto__);
(statearr_17992[1] = 1);
return statearr_17992;
});
var state_machine__5985__auto____1 = (function (state_17948){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_17948);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e17993){if((e17993 instanceof Object))
{var ex__5988__auto__ = e17993;var statearr_17994_18024 = state_17948;(statearr_17994_18024[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17948);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e17993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__18025 = state_17948;
state_17948 = G__18025;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_17948){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_17948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_17995 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_17995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___17996);
return statearr_17995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6054__auto___18162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18132){var state_val_18133 = (state_18132[1]);if((state_val_18133 === 1))
{var state_18132__$1 = state_18132;var statearr_18134_18163 = state_18132__$1;(statearr_18134_18163[2] = null);
(statearr_18134_18163[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 2))
{var inst_18095 = cljs.core.reset_BANG_(dctr,cnt);var inst_18096 = 0;var state_18132__$1 = (function (){var statearr_18135 = state_18132;(statearr_18135[7] = inst_18095);
(statearr_18135[8] = inst_18096);
return statearr_18135;
})();var statearr_18136_18164 = state_18132__$1;(statearr_18136_18164[2] = null);
(statearr_18136_18164[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 3))
{var inst_18130 = (state_18132[2]);var state_18132__$1 = state_18132;return cljs.core.async.impl.ioc_helpers.return_chan(state_18132__$1,inst_18130);
} else
{if((state_val_18133 === 4))
{var inst_18096 = (state_18132[8]);var inst_18098 = (inst_18096 < cnt);var state_18132__$1 = state_18132;if(cljs.core.truth_(inst_18098))
{var statearr_18137_18165 = state_18132__$1;(statearr_18137_18165[1] = 6);
} else
{var statearr_18138_18166 = state_18132__$1;(statearr_18138_18166[1] = 7);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 5))
{var inst_18116 = (state_18132[2]);var state_18132__$1 = (function (){var statearr_18139 = state_18132;(statearr_18139[9] = inst_18116);
return statearr_18139;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18132__$1,12,dchan);
} else
{if((state_val_18133 === 6))
{var state_18132__$1 = state_18132;var statearr_18140_18167 = state_18132__$1;(statearr_18140_18167[2] = null);
(statearr_18140_18167[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 7))
{var state_18132__$1 = state_18132;var statearr_18141_18168 = state_18132__$1;(statearr_18141_18168[2] = null);
(statearr_18141_18168[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 8))
{var inst_18114 = (state_18132[2]);var state_18132__$1 = state_18132;var statearr_18142_18169 = state_18132__$1;(statearr_18142_18169[2] = inst_18114);
(statearr_18142_18169[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 9))
{var inst_18096 = (state_18132[8]);var inst_18109 = (state_18132[2]);var inst_18110 = (inst_18096 + 1);var inst_18096__$1 = inst_18110;var state_18132__$1 = (function (){var statearr_18143 = state_18132;(statearr_18143[8] = inst_18096__$1);
(statearr_18143[10] = inst_18109);
return statearr_18143;
})();var statearr_18144_18170 = state_18132__$1;(statearr_18144_18170[2] = null);
(statearr_18144_18170[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 10))
{var inst_18100 = (state_18132[2]);var inst_18101 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_18132__$1 = (function (){var statearr_18145 = state_18132;(statearr_18145[11] = inst_18100);
return statearr_18145;
})();var statearr_18146_18171 = state_18132__$1;(statearr_18146_18171[2] = inst_18101);
cljs.core.async.impl.ioc_helpers.process_exception(state_18132__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 11))
{var inst_18096 = (state_18132[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18132,10,Object,null,9);var inst_18105 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18096) : chs__$1.call(null,inst_18096));var inst_18106 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18096) : done.call(null,inst_18096));var inst_18107 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18105,inst_18106);var state_18132__$1 = state_18132;var statearr_18147_18172 = state_18132__$1;(statearr_18147_18172[2] = inst_18107);
cljs.core.async.impl.ioc_helpers.process_exception(state_18132__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 12))
{var inst_18118 = (state_18132[12]);var inst_18118__$1 = (state_18132[2]);var inst_18119 = cljs.core.some(cljs.core.nil_QMARK_,inst_18118__$1);var state_18132__$1 = (function (){var statearr_18148 = state_18132;(statearr_18148[12] = inst_18118__$1);
return statearr_18148;
})();if(cljs.core.truth_(inst_18119))
{var statearr_18149_18173 = state_18132__$1;(statearr_18149_18173[1] = 13);
} else
{var statearr_18150_18174 = state_18132__$1;(statearr_18150_18174[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 13))
{var inst_18121 = cljs.core.async.close_BANG_(out);var state_18132__$1 = state_18132;var statearr_18151_18175 = state_18132__$1;(statearr_18151_18175[2] = inst_18121);
(statearr_18151_18175[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 14))
{var inst_18118 = (state_18132[12]);var inst_18123 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18118);var state_18132__$1 = state_18132;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18132__$1,16,out,inst_18123);
} else
{if((state_val_18133 === 15))
{var inst_18128 = (state_18132[2]);var state_18132__$1 = state_18132;var statearr_18152_18176 = state_18132__$1;(statearr_18152_18176[2] = inst_18128);
(statearr_18152_18176[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18133 === 16))
{var inst_18125 = (state_18132[2]);var state_18132__$1 = (function (){var statearr_18153 = state_18132;(statearr_18153[13] = inst_18125);
return statearr_18153;
})();var statearr_18154_18177 = state_18132__$1;(statearr_18154_18177[2] = null);
(statearr_18154_18177[1] = 2);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18158 = (new Array(14));(statearr_18158[0] = state_machine__5985__auto__);
(statearr_18158[1] = 1);
return statearr_18158;
});
var state_machine__5985__auto____1 = (function (state_18132){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_18132);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18159){if((e18159 instanceof Object))
{var ex__5988__auto__ = e18159;var statearr_18160_18178 = state_18132;(statearr_18160_18178[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18132);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__18179 = state_18132;
state_18132 = G__18179;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18132){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18161 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_18161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18162);
return statearr_18161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6054__auto___18287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18263){var state_val_18264 = (state_18263[1]);if((state_val_18264 === 1))
{var inst_18234 = cljs.core.vec(chs);var inst_18235 = inst_18234;var state_18263__$1 = (function (){var statearr_18265 = state_18263;(statearr_18265[7] = inst_18235);
return statearr_18265;
})();var statearr_18266_18288 = state_18263__$1;(statearr_18266_18288[2] = null);
(statearr_18266_18288[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18264 === 2))
{var inst_18235 = (state_18263[7]);var inst_18237 = cljs.core.count(inst_18235);var inst_18238 = (inst_18237 > 0);var state_18263__$1 = state_18263;if(cljs.core.truth_(inst_18238))
{var statearr_18267_18289 = state_18263__$1;(statearr_18267_18289[1] = 4);
} else
{var statearr_18268_18290 = state_18263__$1;(statearr_18268_18290[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18264 === 3))
{var inst_18261 = (state_18263[2]);var state_18263__$1 = state_18263;return cljs.core.async.impl.ioc_helpers.return_chan(state_18263__$1,inst_18261);
} else
{if((state_val_18264 === 4))
{var inst_18235 = (state_18263[7]);var state_18263__$1 = state_18263;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_18263__$1,7,inst_18235);
} else
{if((state_val_18264 === 5))
{var inst_18257 = cljs.core.async.close_BANG_(out);var state_18263__$1 = state_18263;var statearr_18269_18291 = state_18263__$1;(statearr_18269_18291[2] = inst_18257);
(statearr_18269_18291[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18264 === 6))
{var inst_18259 = (state_18263[2]);var state_18263__$1 = state_18263;var statearr_18270_18292 = state_18263__$1;(statearr_18270_18292[2] = inst_18259);
(statearr_18270_18292[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18264 === 7))
{var inst_18243 = (state_18263[8]);var inst_18242 = (state_18263[9]);var inst_18242__$1 = (state_18263[2]);var inst_18243__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18242__$1,0,null);var inst_18244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18242__$1,1,null);var inst_18245 = (inst_18243__$1 == null);var state_18263__$1 = (function (){var statearr_18271 = state_18263;(statearr_18271[8] = inst_18243__$1);
(statearr_18271[9] = inst_18242__$1);
(statearr_18271[10] = inst_18244);
return statearr_18271;
})();if(cljs.core.truth_(inst_18245))
{var statearr_18272_18293 = state_18263__$1;(statearr_18272_18293[1] = 8);
} else
{var statearr_18273_18294 = state_18263__$1;(statearr_18273_18294[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18264 === 8))
{var inst_18243 = (state_18263[8]);var inst_18242 = (state_18263[9]);var inst_18244 = (state_18263[10]);var inst_18235 = (state_18263[7]);var inst_18247 = (function (){var c = inst_18244;var v = inst_18243;var vec__18240 = inst_18242;var cs = inst_18235;return ((function (c,v,vec__18240,cs,inst_18243,inst_18242,inst_18244,inst_18235,state_val_18264){
return (function (p1__18180_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18180_SHARP_);
});
;})(c,v,vec__18240,cs,inst_18243,inst_18242,inst_18244,inst_18235,state_val_18264))
})();var inst_18248 = cljs.core.filterv(inst_18247,inst_18235);var inst_18235__$1 = inst_18248;var state_18263__$1 = (function (){var statearr_18274 = state_18263;(statearr_18274[7] = inst_18235__$1);
return statearr_18274;
})();var statearr_18275_18295 = state_18263__$1;(statearr_18275_18295[2] = null);
(statearr_18275_18295[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18264 === 9))
{var inst_18243 = (state_18263[8]);var state_18263__$1 = state_18263;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18263__$1,11,out,inst_18243);
} else
{if((state_val_18264 === 10))
{var inst_18255 = (state_18263[2]);var state_18263__$1 = state_18263;var statearr_18277_18296 = state_18263__$1;(statearr_18277_18296[2] = inst_18255);
(statearr_18277_18296[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18264 === 11))
{var inst_18235 = (state_18263[7]);var inst_18252 = (state_18263[2]);var tmp18276 = inst_18235;var inst_18235__$1 = tmp18276;var state_18263__$1 = (function (){var statearr_18278 = state_18263;(statearr_18278[11] = inst_18252);
(statearr_18278[7] = inst_18235__$1);
return statearr_18278;
})();var statearr_18279_18297 = state_18263__$1;(statearr_18279_18297[2] = null);
(statearr_18279_18297[1] = 2);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18283 = (new Array(12));(statearr_18283[0] = state_machine__5985__auto__);
(statearr_18283[1] = 1);
return statearr_18283;
});
var state_machine__5985__auto____1 = (function (state_18263){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_18263);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18284){if((e18284 instanceof Object))
{var ex__5988__auto__ = e18284;var statearr_18285_18298 = state_18263;(statearr_18285_18298[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18263);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__18299 = state_18263;
state_18263 = G__18299;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18263){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18286 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_18286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18287);
return statearr_18286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6054__auto___18392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18369){var state_val_18370 = (state_18369[1]);if((state_val_18370 === 1))
{var inst_18346 = 0;var state_18369__$1 = (function (){var statearr_18371 = state_18369;(statearr_18371[7] = inst_18346);
return statearr_18371;
})();var statearr_18372_18393 = state_18369__$1;(statearr_18372_18393[2] = null);
(statearr_18372_18393[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18370 === 2))
{var inst_18346 = (state_18369[7]);var inst_18348 = (inst_18346 < n);var state_18369__$1 = state_18369;if(cljs.core.truth_(inst_18348))
{var statearr_18373_18394 = state_18369__$1;(statearr_18373_18394[1] = 4);
} else
{var statearr_18374_18395 = state_18369__$1;(statearr_18374_18395[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18370 === 3))
{var inst_18366 = (state_18369[2]);var inst_18367 = cljs.core.async.close_BANG_(out);var state_18369__$1 = (function (){var statearr_18375 = state_18369;(statearr_18375[8] = inst_18366);
return statearr_18375;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_18369__$1,inst_18367);
} else
{if((state_val_18370 === 4))
{var state_18369__$1 = state_18369;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18369__$1,7,ch);
} else
{if((state_val_18370 === 5))
{var state_18369__$1 = state_18369;var statearr_18376_18396 = state_18369__$1;(statearr_18376_18396[2] = null);
(statearr_18376_18396[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18370 === 6))
{var inst_18364 = (state_18369[2]);var state_18369__$1 = state_18369;var statearr_18377_18397 = state_18369__$1;(statearr_18377_18397[2] = inst_18364);
(statearr_18377_18397[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18370 === 7))
{var inst_18351 = (state_18369[9]);var inst_18351__$1 = (state_18369[2]);var inst_18352 = (inst_18351__$1 == null);var inst_18353 = cljs.core.not(inst_18352);var state_18369__$1 = (function (){var statearr_18378 = state_18369;(statearr_18378[9] = inst_18351__$1);
return statearr_18378;
})();if(inst_18353)
{var statearr_18379_18398 = state_18369__$1;(statearr_18379_18398[1] = 8);
} else
{var statearr_18380_18399 = state_18369__$1;(statearr_18380_18399[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18370 === 8))
{var inst_18351 = (state_18369[9]);var state_18369__$1 = state_18369;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18369__$1,11,out,inst_18351);
} else
{if((state_val_18370 === 9))
{var state_18369__$1 = state_18369;var statearr_18381_18400 = state_18369__$1;(statearr_18381_18400[2] = null);
(statearr_18381_18400[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18370 === 10))
{var inst_18361 = (state_18369[2]);var state_18369__$1 = state_18369;var statearr_18382_18401 = state_18369__$1;(statearr_18382_18401[2] = inst_18361);
(statearr_18382_18401[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18370 === 11))
{var inst_18346 = (state_18369[7]);var inst_18356 = (state_18369[2]);var inst_18357 = (inst_18346 + 1);var inst_18346__$1 = inst_18357;var state_18369__$1 = (function (){var statearr_18383 = state_18369;(statearr_18383[7] = inst_18346__$1);
(statearr_18383[10] = inst_18356);
return statearr_18383;
})();var statearr_18384_18402 = state_18369__$1;(statearr_18384_18402[2] = null);
(statearr_18384_18402[1] = 2);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18388 = (new Array(11));(statearr_18388[0] = state_machine__5985__auto__);
(statearr_18388[1] = 1);
return statearr_18388;
});
var state_machine__5985__auto____1 = (function (state_18369){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_18369);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18389){if((e18389 instanceof Object))
{var ex__5988__auto__ = e18389;var statearr_18390_18403 = state_18369;(statearr_18390_18403[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18369);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__18404 = state_18369;
state_18369 = G__18404;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18369){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18391 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_18391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18392);
return statearr_18391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6054__auto___18501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18476){var state_val_18477 = (state_18476[1]);if((state_val_18477 === 1))
{var inst_18453 = null;var state_18476__$1 = (function (){var statearr_18478 = state_18476;(statearr_18478[7] = inst_18453);
return statearr_18478;
})();var statearr_18479_18502 = state_18476__$1;(statearr_18479_18502[2] = null);
(statearr_18479_18502[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18477 === 2))
{var state_18476__$1 = state_18476;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18476__$1,4,ch);
} else
{if((state_val_18477 === 3))
{var inst_18473 = (state_18476[2]);var inst_18474 = cljs.core.async.close_BANG_(out);var state_18476__$1 = (function (){var statearr_18480 = state_18476;(statearr_18480[8] = inst_18473);
return statearr_18480;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_18476__$1,inst_18474);
} else
{if((state_val_18477 === 4))
{var inst_18456 = (state_18476[9]);var inst_18456__$1 = (state_18476[2]);var inst_18457 = (inst_18456__$1 == null);var inst_18458 = cljs.core.not(inst_18457);var state_18476__$1 = (function (){var statearr_18481 = state_18476;(statearr_18481[9] = inst_18456__$1);
return statearr_18481;
})();if(inst_18458)
{var statearr_18482_18503 = state_18476__$1;(statearr_18482_18503[1] = 5);
} else
{var statearr_18483_18504 = state_18476__$1;(statearr_18483_18504[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18477 === 5))
{var inst_18456 = (state_18476[9]);var inst_18453 = (state_18476[7]);var inst_18460 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18456,inst_18453);var state_18476__$1 = state_18476;if(inst_18460)
{var statearr_18484_18505 = state_18476__$1;(statearr_18484_18505[1] = 8);
} else
{var statearr_18485_18506 = state_18476__$1;(statearr_18485_18506[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18477 === 6))
{var state_18476__$1 = state_18476;var statearr_18487_18507 = state_18476__$1;(statearr_18487_18507[2] = null);
(statearr_18487_18507[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18477 === 7))
{var inst_18471 = (state_18476[2]);var state_18476__$1 = state_18476;var statearr_18488_18508 = state_18476__$1;(statearr_18488_18508[2] = inst_18471);
(statearr_18488_18508[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18477 === 8))
{var inst_18453 = (state_18476[7]);var tmp18486 = inst_18453;var inst_18453__$1 = tmp18486;var state_18476__$1 = (function (){var statearr_18489 = state_18476;(statearr_18489[7] = inst_18453__$1);
return statearr_18489;
})();var statearr_18490_18509 = state_18476__$1;(statearr_18490_18509[2] = null);
(statearr_18490_18509[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18477 === 9))
{var inst_18456 = (state_18476[9]);var state_18476__$1 = state_18476;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18476__$1,11,out,inst_18456);
} else
{if((state_val_18477 === 10))
{var inst_18468 = (state_18476[2]);var state_18476__$1 = state_18476;var statearr_18491_18510 = state_18476__$1;(statearr_18491_18510[2] = inst_18468);
(statearr_18491_18510[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18477 === 11))
{var inst_18456 = (state_18476[9]);var inst_18465 = (state_18476[2]);var inst_18453 = inst_18456;var state_18476__$1 = (function (){var statearr_18492 = state_18476;(statearr_18492[7] = inst_18453);
(statearr_18492[10] = inst_18465);
return statearr_18492;
})();var statearr_18493_18511 = state_18476__$1;(statearr_18493_18511[2] = null);
(statearr_18493_18511[1] = 2);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18497 = (new Array(11));(statearr_18497[0] = state_machine__5985__auto__);
(statearr_18497[1] = 1);
return statearr_18497;
});
var state_machine__5985__auto____1 = (function (state_18476){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_18476);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18498){if((e18498 instanceof Object))
{var ex__5988__auto__ = e18498;var statearr_18499_18512 = state_18476;(statearr_18499_18512[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18476);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__18513 = state_18476;
state_18476 = G__18513;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18476){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18500 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_18500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18501);
return statearr_18500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6054__auto___18648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18618){var state_val_18619 = (state_18618[1]);if((state_val_18619 === 1))
{var inst_18581 = (new Array(n));var inst_18582 = inst_18581;var inst_18583 = 0;var state_18618__$1 = (function (){var statearr_18620 = state_18618;(statearr_18620[7] = inst_18582);
(statearr_18620[8] = inst_18583);
return statearr_18620;
})();var statearr_18621_18649 = state_18618__$1;(statearr_18621_18649[2] = null);
(statearr_18621_18649[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 2))
{var state_18618__$1 = state_18618;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18618__$1,4,ch);
} else
{if((state_val_18619 === 3))
{var inst_18616 = (state_18618[2]);var state_18618__$1 = state_18618;return cljs.core.async.impl.ioc_helpers.return_chan(state_18618__$1,inst_18616);
} else
{if((state_val_18619 === 4))
{var inst_18586 = (state_18618[9]);var inst_18586__$1 = (state_18618[2]);var inst_18587 = (inst_18586__$1 == null);var inst_18588 = cljs.core.not(inst_18587);var state_18618__$1 = (function (){var statearr_18622 = state_18618;(statearr_18622[9] = inst_18586__$1);
return statearr_18622;
})();if(inst_18588)
{var statearr_18623_18650 = state_18618__$1;(statearr_18623_18650[1] = 5);
} else
{var statearr_18624_18651 = state_18618__$1;(statearr_18624_18651[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 5))
{var inst_18591 = (state_18618[10]);var inst_18582 = (state_18618[7]);var inst_18583 = (state_18618[8]);var inst_18586 = (state_18618[9]);var inst_18590 = (inst_18582[inst_18583] = inst_18586);var inst_18591__$1 = (inst_18583 + 1);var inst_18592 = (inst_18591__$1 < n);var state_18618__$1 = (function (){var statearr_18625 = state_18618;(statearr_18625[11] = inst_18590);
(statearr_18625[10] = inst_18591__$1);
return statearr_18625;
})();if(cljs.core.truth_(inst_18592))
{var statearr_18626_18652 = state_18618__$1;(statearr_18626_18652[1] = 8);
} else
{var statearr_18627_18653 = state_18618__$1;(statearr_18627_18653[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 6))
{var inst_18583 = (state_18618[8]);var inst_18604 = (inst_18583 > 0);var state_18618__$1 = state_18618;if(cljs.core.truth_(inst_18604))
{var statearr_18629_18654 = state_18618__$1;(statearr_18629_18654[1] = 12);
} else
{var statearr_18630_18655 = state_18618__$1;(statearr_18630_18655[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 7))
{var inst_18614 = (state_18618[2]);var state_18618__$1 = state_18618;var statearr_18631_18656 = state_18618__$1;(statearr_18631_18656[2] = inst_18614);
(statearr_18631_18656[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 8))
{var inst_18591 = (state_18618[10]);var inst_18582 = (state_18618[7]);var tmp18628 = inst_18582;var inst_18582__$1 = tmp18628;var inst_18583 = inst_18591;var state_18618__$1 = (function (){var statearr_18632 = state_18618;(statearr_18632[7] = inst_18582__$1);
(statearr_18632[8] = inst_18583);
return statearr_18632;
})();var statearr_18633_18657 = state_18618__$1;(statearr_18633_18657[2] = null);
(statearr_18633_18657[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 9))
{var inst_18582 = (state_18618[7]);var inst_18596 = cljs.core.vec(inst_18582);var state_18618__$1 = state_18618;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18618__$1,11,out,inst_18596);
} else
{if((state_val_18619 === 10))
{var inst_18602 = (state_18618[2]);var state_18618__$1 = state_18618;var statearr_18634_18658 = state_18618__$1;(statearr_18634_18658[2] = inst_18602);
(statearr_18634_18658[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 11))
{var inst_18598 = (state_18618[2]);var inst_18599 = (new Array(n));var inst_18582 = inst_18599;var inst_18583 = 0;var state_18618__$1 = (function (){var statearr_18635 = state_18618;(statearr_18635[7] = inst_18582);
(statearr_18635[8] = inst_18583);
(statearr_18635[12] = inst_18598);
return statearr_18635;
})();var statearr_18636_18659 = state_18618__$1;(statearr_18636_18659[2] = null);
(statearr_18636_18659[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 12))
{var inst_18582 = (state_18618[7]);var inst_18606 = cljs.core.vec(inst_18582);var state_18618__$1 = state_18618;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18618__$1,15,out,inst_18606);
} else
{if((state_val_18619 === 13))
{var state_18618__$1 = state_18618;var statearr_18637_18660 = state_18618__$1;(statearr_18637_18660[2] = null);
(statearr_18637_18660[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 14))
{var inst_18611 = (state_18618[2]);var inst_18612 = cljs.core.async.close_BANG_(out);var state_18618__$1 = (function (){var statearr_18638 = state_18618;(statearr_18638[13] = inst_18611);
return statearr_18638;
})();var statearr_18639_18661 = state_18618__$1;(statearr_18639_18661[2] = inst_18612);
(statearr_18639_18661[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18619 === 15))
{var inst_18608 = (state_18618[2]);var state_18618__$1 = state_18618;var statearr_18640_18662 = state_18618__$1;(statearr_18640_18662[2] = inst_18608);
(statearr_18640_18662[1] = 14);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18644 = (new Array(14));(statearr_18644[0] = state_machine__5985__auto__);
(statearr_18644[1] = 1);
return statearr_18644;
});
var state_machine__5985__auto____1 = (function (state_18618){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_18618);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18645){if((e18645 instanceof Object))
{var ex__5988__auto__ = e18645;var statearr_18646_18663 = state_18618;(statearr_18646_18663[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18618);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__18664 = state_18618;
state_18618 = G__18664;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18618){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18647 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_18647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18648);
return statearr_18647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6054__auto___18807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_18777){var state_val_18778 = (state_18777[1]);if((state_val_18778 === 1))
{var inst_18736 = (new Array(0));var inst_18737 = inst_18736;var inst_18738 = cljs.core.constant$keyword$30;var state_18777__$1 = (function (){var statearr_18779 = state_18777;(statearr_18779[7] = inst_18737);
(statearr_18779[8] = inst_18738);
return statearr_18779;
})();var statearr_18780_18808 = state_18777__$1;(statearr_18780_18808[2] = null);
(statearr_18780_18808[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 2))
{var state_18777__$1 = state_18777;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18777__$1,4,ch);
} else
{if((state_val_18778 === 3))
{var inst_18775 = (state_18777[2]);var state_18777__$1 = state_18777;return cljs.core.async.impl.ioc_helpers.return_chan(state_18777__$1,inst_18775);
} else
{if((state_val_18778 === 4))
{var inst_18741 = (state_18777[9]);var inst_18741__$1 = (state_18777[2]);var inst_18742 = (inst_18741__$1 == null);var inst_18743 = cljs.core.not(inst_18742);var state_18777__$1 = (function (){var statearr_18781 = state_18777;(statearr_18781[9] = inst_18741__$1);
return statearr_18781;
})();if(inst_18743)
{var statearr_18782_18809 = state_18777__$1;(statearr_18782_18809[1] = 5);
} else
{var statearr_18783_18810 = state_18777__$1;(statearr_18783_18810[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 5))
{var inst_18741 = (state_18777[9]);var inst_18738 = (state_18777[8]);var inst_18745 = (state_18777[10]);var inst_18745__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18741) : f.call(null,inst_18741));var inst_18746 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18745__$1,inst_18738);var inst_18747 = cljs.core.keyword_identical_QMARK_(inst_18738,cljs.core.constant$keyword$30);var inst_18748 = (inst_18746) || (inst_18747);var state_18777__$1 = (function (){var statearr_18784 = state_18777;(statearr_18784[10] = inst_18745__$1);
return statearr_18784;
})();if(cljs.core.truth_(inst_18748))
{var statearr_18785_18811 = state_18777__$1;(statearr_18785_18811[1] = 8);
} else
{var statearr_18786_18812 = state_18777__$1;(statearr_18786_18812[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 6))
{var inst_18737 = (state_18777[7]);var inst_18762 = inst_18737.length;var inst_18763 = (inst_18762 > 0);var state_18777__$1 = state_18777;if(cljs.core.truth_(inst_18763))
{var statearr_18788_18813 = state_18777__$1;(statearr_18788_18813[1] = 12);
} else
{var statearr_18789_18814 = state_18777__$1;(statearr_18789_18814[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 7))
{var inst_18773 = (state_18777[2]);var state_18777__$1 = state_18777;var statearr_18790_18815 = state_18777__$1;(statearr_18790_18815[2] = inst_18773);
(statearr_18790_18815[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 8))
{var inst_18737 = (state_18777[7]);var inst_18741 = (state_18777[9]);var inst_18745 = (state_18777[10]);var inst_18750 = inst_18737.push(inst_18741);var tmp18787 = inst_18737;var inst_18737__$1 = tmp18787;var inst_18738 = inst_18745;var state_18777__$1 = (function (){var statearr_18791 = state_18777;(statearr_18791[7] = inst_18737__$1);
(statearr_18791[8] = inst_18738);
(statearr_18791[11] = inst_18750);
return statearr_18791;
})();var statearr_18792_18816 = state_18777__$1;(statearr_18792_18816[2] = null);
(statearr_18792_18816[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 9))
{var inst_18737 = (state_18777[7]);var inst_18753 = cljs.core.vec(inst_18737);var state_18777__$1 = state_18777;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18777__$1,11,out,inst_18753);
} else
{if((state_val_18778 === 10))
{var inst_18760 = (state_18777[2]);var state_18777__$1 = state_18777;var statearr_18793_18817 = state_18777__$1;(statearr_18793_18817[2] = inst_18760);
(statearr_18793_18817[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 11))
{var inst_18741 = (state_18777[9]);var inst_18745 = (state_18777[10]);var inst_18755 = (state_18777[2]);var inst_18756 = (new Array(0));var inst_18757 = inst_18756.push(inst_18741);var inst_18737 = inst_18756;var inst_18738 = inst_18745;var state_18777__$1 = (function (){var statearr_18794 = state_18777;(statearr_18794[7] = inst_18737);
(statearr_18794[12] = inst_18757);
(statearr_18794[13] = inst_18755);
(statearr_18794[8] = inst_18738);
return statearr_18794;
})();var statearr_18795_18818 = state_18777__$1;(statearr_18795_18818[2] = null);
(statearr_18795_18818[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 12))
{var inst_18737 = (state_18777[7]);var inst_18765 = cljs.core.vec(inst_18737);var state_18777__$1 = state_18777;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18777__$1,15,out,inst_18765);
} else
{if((state_val_18778 === 13))
{var state_18777__$1 = state_18777;var statearr_18796_18819 = state_18777__$1;(statearr_18796_18819[2] = null);
(statearr_18796_18819[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 14))
{var inst_18770 = (state_18777[2]);var inst_18771 = cljs.core.async.close_BANG_(out);var state_18777__$1 = (function (){var statearr_18797 = state_18777;(statearr_18797[14] = inst_18770);
return statearr_18797;
})();var statearr_18798_18820 = state_18777__$1;(statearr_18798_18820[2] = inst_18771);
(statearr_18798_18820[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_18778 === 15))
{var inst_18767 = (state_18777[2]);var state_18777__$1 = state_18777;var statearr_18799_18821 = state_18777__$1;(statearr_18799_18821[2] = inst_18767);
(statearr_18799_18821[1] = 14);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_18803 = (new Array(15));(statearr_18803[0] = state_machine__5985__auto__);
(statearr_18803[1] = 1);
return statearr_18803;
});
var state_machine__5985__auto____1 = (function (state_18777){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__(state_18777);if(cljs.core.keyword_identical_QMARK_(result__5987__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e18804){if((e18804 instanceof Object))
{var ex__5988__auto__ = e18804;var statearr_18805_18822 = state_18777;(statearr_18805_18822[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18777);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e18804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5986__auto__,cljs.core.constant$keyword$17))
{{
var G__18823 = state_18777;
state_18777 = G__18823;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_18777){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_18777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_18806 = (f__6055__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6055__auto__.cljs$core$IFn$_invoke$arity$0() : f__6055__auto__.call(null));(statearr_18806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___18807);
return statearr_18806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6056__auto__);
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
